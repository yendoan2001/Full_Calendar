import {auth} from "../middleware/auth";
import Event from '../models/event.model'
import User from '../models/user.model'

export default class UserController {
    static async createUser(req, res) {
        try {
            const creator = req.decoded;
            if (creator.role !== "admin") {
                res.json({message:'Error'})
                return;
            }
            const user = new User(req.body)
            await user.save()
            res.status(400).json({message: 'Create successfully'});

        } catch (e) {
            res.json(e.message)
        }
    }
}