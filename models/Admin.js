const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new Schema({
    username: { type: String, required: [true, 'Please provide a username'],  unique: true},
    email: {
        type: String,
        required: [true, "Please provide email address"],
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
    },
    password: { type: String, required: [true, 'Please add a password'], minlength:6, select:false },
    resetPasswordToken : String,
    resetPasswordExpire : Date,
    superAdmin:{ type: Boolean, default:false}
});

//verify is the password is modified
adminSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next(); 
})

adminSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password)
}

adminSchema.methods.getSignedToken = function () {
    return jwt.sign({id: this._id, superAdmin: this.superAdmin}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE} )
}



adminSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
   
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); 
  
    return resetToken;
  };

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
