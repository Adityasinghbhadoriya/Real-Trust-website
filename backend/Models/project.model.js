import mongoose from "mongoose";
const projectSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    description: {
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

    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

});

export const Project = mongoose.model("Project", projectSchema);