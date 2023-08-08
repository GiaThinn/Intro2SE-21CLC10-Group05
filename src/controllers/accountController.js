require('dotenv').config();
const Account = require("../models/accounts")
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (to, url) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'ltquan21@clc.fitus.edu.vn',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: 'ltquan21@clc.fitus.edu.vn',
            to: to,
            subject: 'Reset your password',
            html: `<h1>Please click the link to reset your password</h1>
            <a href=${url}>${url}</a>`
        };

        const result = await transport.sendMail(mailOptions);

        return result;

    } catch (error) {
        return error;
    }
}

exports.listAccount = async (req, res) => {
    const account = await Account.find()
    res.render('account', {account})
}

exports.createAccount = async(req, res) =>{
    await Account.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
    });
    res.redirect('/admin/account')
}

exports.updateAccount = async(req, res) => {
    try{
        const account = await Account.findOne({_id: req.params.id})
        res.render('updateAccount', {account})
    } catch (error){console.log(error)}
}

exports.updateAccountPost = async(req, res) => {
    try{
        await Account.findByIdAndUpdate(req.params.id,{
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        })
        res.redirect('/admin/account')
    } catch{}
}

exports.deleteAccount = async(req, res) => {
    try{
        await Account.deleteOne({_id: req.params.id});
        res.redirect('/admin/account')
    } catch(error){}
}

const validateEmail = async (email) => {
    const account = await Account.findOne({ email: email })
    if (account) {
        return JSON.stringify({ username: account.username });
    }
    return JSON.stringify({ username: null });
}

exports.forgotPassword = async (req, res) => {
    // url: /forgot-password
    const { email } = req.body;

    const result = await validateEmail(email);

    if (result.username) {
        const secret = process.env.JWT_SECRET + result.username;
        const token = jwt.sign({ email: email, username: result.username }, secret, { expiresIn: '30m' });

        const url = `http://localhost:${process.env.PORT}/reset-password/${result.username}/${token}`;

        sendMail(result.email, url)
            .then(res => console.log('Email sent...'))
            .catch(err => console.log(err));
    }
    else {
        res.json({
            message: "Email not found"
        });
        res.send('Email not found');
    }
}

const updatePassword = async (username, password) => {
    Account
        .findOneAndUpdate({ username: username }, { password: password })
        .then(() => {
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}

exports.resetPassword = async (req, res) => {
    // url: /reset-password/:username/:token
    const { username, token } = req.params;
    const { password1, password2 } = req.body;

    if (password1 !== password2) {
        res.json({
            message: "Passwords do not match"
        });
        res.send('Passwords do not match');
    }
    else {
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET + username);

            if (!payload) {
                res.json({
                    message: "Invalid token"
                });
                res.send('Invalid token');
            }
            else {
                const result = await updatePassword(username, password1);
                if (result) {
                    res.json({
                        message: "Password updated"
                    });
                    res.send('Password updated');
                }
                else {
                    res.json({
                        message: "Password update failed"
                    });
                    res.send('Password update failed');
                }
            }

        } catch (error) {
            console.log(error);
            res.send(error.message);
        }
    }
}