const express = require('express')
const userRoute = express.Router();
const AsyncHandler = require('express-async-handler')
const User = require('../models/User')
const generateToken = require('../tokenGenerate');
const protect = require('../middleware/Auth');

userRoute.post('/login', AsyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt
            })
        }
        else {
            res.status(401);
            throw new Error("Datos Invalidos");
        }
    }
)
)

//register route
userRoute.post('/Register', AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
        throw new Error("Usuario Ya Existe");
    }
    else {
        const user = await User.create({
            name,
            email,
            password
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            })
        } else {
            res.status(400);
            throw new Error("Datos Invalidos");
        }
    }
}))

//profile data
userRoute.get("/profile", 
    protect,
    AsyncHandler(async(req, res)=>{
    const user = await User.findById(req.user._id);
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isADmin: user.isAdmin,
            createdAt: user.createdAt,
        })
    }
    else{
        res.status(404);
        throw new Error("Usuario No Encontrado");
    }
}))


module.exports = userRoute;