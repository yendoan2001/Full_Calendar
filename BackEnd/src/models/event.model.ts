import User from "./user.model";
import { Schema, model} from "mongoose";
const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, "Event's title required"]
    },
    startDate: {
        type: Date,
        required: [true, "Start date time required"]
    },
    endDate: {
        type: Date,
        required: [true, "Start date time required"]
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: [true, "Event's creator is required"]
    },
    users: {
        type: [Schema.Types.ObjectId],
        ref: User
    }
})

const Event = model('Event', eventSchema);
export default Event ;