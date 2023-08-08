import {Schema, model} from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank'],
        minLength: [6, 'Password must contain at least 6 characters']
    },
    role:{
        type: String,
        default: 'admin',
        enum: ['user', 'admin']
    }
})

const User = model('User', userSchema);
export default User;