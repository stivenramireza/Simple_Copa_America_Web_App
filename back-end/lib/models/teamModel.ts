import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TeamSchema = new Schema({
    nameTeam: {
        type: String,
        required: 'Enter a name team'
    },
    pointsTeam: {
        type: Number,
        required: 'Enter points'
    },
});