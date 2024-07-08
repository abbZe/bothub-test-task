import mongoose from 'mongoose';

export const BookModel = new mongoose.Schema({
    title: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    author: { type: String, required: true },
    genres: [{ type: String, required: true }],
});
