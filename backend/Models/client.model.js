import mongoose from "mongoose";
const clientSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true
    },

    image: {
        public_id: {
            type: String,
            require: true,
        },
        url: {
            type: String,
            require: true,
        }
    },

});

export const Client = mongoose.model("Client", clientSchema);