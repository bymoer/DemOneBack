import mongoose from "mongoose";

export const ROLE_MODEL = mongoose.model(
    'Role',
    new mongoose.Schema({
        name: String,
    })
)