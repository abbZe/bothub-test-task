import mongoose from 'mongoose';

export const GenreModel = new mongoose.Schema({
    name: { type: String, required: true },
    genreId: { type: String, required: true, unique: true },
});
