import User from "../models/user.model.js"

export const signUp = async (req, res) => {
    const { userName, email, password} = req.body
    const newUser = new User({ userName, email, password})
    await newUser.save()
    res.status(201).json({ message: "Signed up successfully!"})
}