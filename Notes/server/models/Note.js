import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: {type: String,  required: true},
    description: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now()},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const Note = mongoose.model("Note", NoteSchema)
export default Note