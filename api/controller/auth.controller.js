import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"
import dotnenv from 'dotenv'
dotnenv.config();

export const signUp = async (req, res, next) => {
    const { username, email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json({ message: "Signed up successfully!"})
    } catch (error) {
        next(error)
    }   
}

export const signIn = async (req, res, next) => {
    const { email, password} = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, 'User not found'))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(401, 'Wrong credentials'))
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        // Filter values we only need.
        const { password: hashedPassword, __v: v, ...rest} = validUser._doc
        const cookieExpiration = new Date(Date.now() + 360000) // 1 hour
        res.cookie('access_token', token, { httpOnly: true, expires: cookieExpiration},)
           .status(200).json(rest)
    } catch (error) {
        next(error)
    }
}