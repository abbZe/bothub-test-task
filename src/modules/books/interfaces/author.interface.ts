import { Document } from 'mongoose';

export interface IAuthor extends Document {
    firstName: string;
    lastName: string;
    bio: string;
    birthdate: Date;
    authorId: string;
}
