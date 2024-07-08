import mongoose from 'mongoose';

export const AuthorModel = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, required: true },
    birthdate: { type: Date, required: true },
    authorId: { type: String, required: true, unique: true },
});
