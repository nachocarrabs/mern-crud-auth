import mongoose, { trusted } from "mongoose";

const boardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

export default mongoose.model("Board", boardSchema)