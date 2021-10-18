require('dotenv').config();
const crypto = require('crypto') 
const Admin = require('../models/Admin')
const ErrorResponse = require('../Utils/ErrorResponse')
const sendEmail = require('../Utils/SendEmail')

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

        const resetToken = admin.getResetPasswordToken();

        await admin.save();

        const resetUrl = `http://localhost:3000/adminpage/passwordreset/${resetToken}`;

        const message = `
        <h1> You have requested a password reset</h1>
        <p>Please go to this link to reset your password</p>
        <a href =${resetUrl} clicktracking=off>${resetUrl}</a> 
        `

        try {
            await sendEmail({
                to: admin.email,
                subject: 'Password Reset Request',
                text: message
            })
            res.status(200).json({
                success: true,
                data: 'Email Sent'
            })
        } catch (error) {
            admin.resetPasswordToken = undefined;
            admin.resetPasswordExpire = undefined;

            await admin.save();
            return next(new ErrorResponse('Email could not be sent', 500))
        }

    } catch (error) {
        next(error)
    }


}

exports.resetpassword = async (req, res, next) => {
    const resetPasswordToken =  crypto.createHash('sha256').update(req.params.resetToken).digest('hex')

    try {
        const admin = await Admin.findOne({
            resetPasswordToken,
            resetPasswordExpire: {$gt: Date.now()}
        })

        if(!admin){
            return next (new ErrorResponse('Invalid  Reset Token', 400))
        }

        admin.password = req.body.password;
        admin.resetPasswordToken = undefined;
        admin.resetPasswordExpire = undefined;

        await admin.save(); 

        res.status(201).json({
            success: true,
            data:'Password Reset Success '
        })

    } catch (error) {
        next(error)
    }
}



exports.deleteUsers = async (req, res, next ) =>{
    
    try {
         await Admin.findByIdAndRemove({_id: req.params.id});

        res.status(201).json({
            success: true,
            data:'User deleted with success'
        })
        
    } catch (error) {
        next(error)
    }
} 


exports.users =  (req, res) =>{
    const {username} = req.body;
    Admin.find({})
    .then((result)=>{
        res.status(200).send(result)

    })
    .catch((error)=>{
        res.status(500).send('Something went wrong')
    })
}



const sendToken = (user, statusCode, res) =>{
    const token =  user.getSignedToken();
    res.status(statusCode).json({success: true, token})
}