import { Subscribed } from "../Models/subscribed.model.js";
import { z } from "zod";


export const subscribe = async (req, res) => {
    const { email } = req.body;

    const contactSchema = z.object({
            email: z.string().email(),
        })
    
        const validateData = contactSchema.safeParse(req.body); 
        if(!validateData.success){
            return res.status(400).json({message:validateData.error.issues.map((err) => err.message)});
        }

    try {
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const existingSubscription = await Subscribed.findOne({ email: email });
        if (existingSubscription) {
            return res.status(400).json({ message: "Already Subscribed!" });
        }

        const newSubscription = await Subscribed.create({email});

        return res.status(201).json({ message: "Subscribed successfully", newSubscription });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error in creating project", error });
    }
}

export const fetchAllSubscriptions = async(req, res)=> {
    try {
        const subscriptions = await Subscribed.find({});
        return res.status(200).json({message: "Contacts fetched successfully", subscriptions});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Error in fetching all contacts", error});
    }
};

