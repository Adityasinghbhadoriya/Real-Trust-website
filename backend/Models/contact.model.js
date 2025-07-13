import mongoose from "mongoose";
const contactSchema = mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique:true
    },

    number: {
        type: Number,
        required: true
    },

    city: {
        type: String,
        required: true
    }

});

export const Contact = mongoose.model("Contact", contactSchema);