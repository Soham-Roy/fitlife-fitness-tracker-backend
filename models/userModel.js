import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: { type: String, required: true },
    profileImage: { type: String, required: false },
    emailId: { type: String, required: true },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() },
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;