import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';


export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User does not exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid email or password." });

        const token = jwt.sign( {email: existingUser.email, id: existingUser._id}, process.env.JWTSTRING, { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
}

export const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        console.log(existingUser);
        if (existingUser) return res.status(400).json({ message: "User already exists." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Password does not match." });
        console.log(password + ' ' + confirmPassword);
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign( {email: result.email, id: result._id}, process.env.JWTSTRING, { expiresIn: '1h' });

        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
}