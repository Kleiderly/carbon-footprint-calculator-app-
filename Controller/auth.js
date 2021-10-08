require('dotenv').config(); 
const Admin = require('../models/Admin')
const ErrorResponse = require('../Utils/ErrorResponse')

exports.register =  async (req, res, next) => {
    const {username, email, password} = req.body

    try {
        const admin = await Admin.create({
            username, email, password
        })
        res.status(201).json({
            success: true,
            admin,
        })

        sendToken(admin, 201, res);
        
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const { email, password} = req.body

    if(!email || !password){
        return next(new ErrorResponse('Please Provide  an  email and password', 400))
    }

    try {
        const admin = await Admin.findOne({email}).select('+password')
        if(!admin){
            return next(new ErrorResponse('Invalid credentials', 401))
        }
        const isMatch =  await admin.matchPasswords(password);

        if(!isMatch){
            return next(new ErrorResponse('Invalid credentials', 401))
        }

        sendToken(admin, 200, res);

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.forgotpassword =  async (req, res, next) => {
    const {email} = req.body;

    try {
        const admin = await Admin.findOne({email})

        if(!admin){
            return next(new ErrorResponse('Email could not be sent', 404))
        }

        const resetToken = admin.getResertPasswordToken();

        await admin.save();

        const resetUrl = `http://localhost:5000/passwordreset/${resetToken}`;

        const message = `
        <h1> You have requested a password reset</h1>
        <p>Please go to this link to reset your password</p>
        <a href =${resetUrl} clicktracking=off>${resetUrl}</a> 
        `

        try {
            
        } catch (error) {
            
        }

    } catch (error) {
        
    }


}

exports.resetpassword = (req, res, next) => {
    res.send('Reset Password Route')
}


const sendToken = (user, statusCode, res) =>{
    const token =  user.getSignedToken();
    res.status(statusCode).json({success: true, token})
}
