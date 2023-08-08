import moment from "moment";
import Event from '../models/event.model'
import User from '../models/user.model'

export default class EventController {
    static async createEvent(req, res) {
        try {
            const event = new Event(req.body)
            await event.save()
            res.status(400).json({message: 'Create successfully'});

        } catch (e) {
            res.json(e.message)
        }
    }
    static async showEvent(req, res) {
        try {
            const events = await Event.find({
                startDate: {$gte: moment(req.query.startDate).toDate()},
                endDate: {$lte: moment(req.query.endDate).toDate()}
            })
            res.send(events)
        } catch (e) {
            console.log(e);
        }
    }

}