import { Schema, model } from 'mongoose';


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [ true, 'The name is required'],
        unique: false
    },
    lastName: {
        type: String,
        required: [ true, 'The lastname is required'],
        unique: false
    },
    email: {
        type: String,
        required: [ true, 'The email is required']
    },
    password: {
        type: String,
        required: [ true, 'The password is required'],
        unique: false
    },
    createdDate: {
        type: Date,
        unique: false
    },
    role: {
        type: String,
        unique: false
    }
})

export default model('Users', UserSchema);