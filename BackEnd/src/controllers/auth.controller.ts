import User from "../models/user.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default class AuthController {
    static async Login(req, res) {
        try {
            let user: any = await User.findOne({email: req.body.email})
            if (!user) {
                return res.status(400).json({message: 'User not found'});
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) throw err;
                if (result) {
                    let payload = {
                        _id: user._id,
                        email: user.email,
                        role: user.role
                    }
                    let token = jwt.sign(payload, '123456789', {expiresIn: 60 * 60 * 24 * 1000});
                    res.cookie('accessToken', token, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1000
                    })
                    return res.json({token: token, code: 200})
                } else {
                    res.json('authentication failed')
                }
            })
        } catch (err) {
            res.status(400).json({err: err})
        }
    }

    static async Register(req, res) {
        try {
            let {name, email, password} = req.body;
            const emailUser = await User.findOne({email: email});
            if (!emailUser) {
                let user = {
                    name: name,
                    email: email,
                    password: await bcrypt.hash(password, 10)
                }
                await User.create(user);
                return res.status(200).json({message: 'Register successfully'})
            } else {
                return res.json({message: 'Email is existed'});
            }
        } catch (e) {
            res.status(400).json({err: e});
        }
    }
}