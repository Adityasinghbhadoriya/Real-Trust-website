import mongoose from "mongoose";
const subscribedSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },


});

export const Subscribed = mongoose.model("Subscribed", subscribedSchema);