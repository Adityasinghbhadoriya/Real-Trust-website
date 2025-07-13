import { Contact } from "../Models/contact.model.js";
import { z } from "zod";

export const contact = async(req, res)=>{
    const {fullName, email, number, city} = req.body;

    const contactSchema = z.object({
        fullName: z.string().min(2,{message: "firstName must be atleast 2 to 20 characters"}),
        email: z.string().email(),
        number: z.string().length(10, { message: "Number must be exactly 10 digits" }),
        city: z.string().min(2, {message: "city name must be between atleast 2 to 10 character"})
    })

    const validateData = contactSchema.safeParse(req.body); 
    if(!validateData.success){
        return res.status(400).json({message:validateData.error.issues.map((err) => err.message)});
    }

    try {
        const existingUser = await Contact.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: "A contact with this email already exists."});
        }

        const newUser = new Contact({fullName, email, number, city});
        await newUser.save();
        return res.status(201).json({message: "Thanks for reaching out! We’ll contact you shortly.", newUser});    
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Something went wrong on our end. Please try again later."})
    }
};

export const fetchAllContacts = async(req, res)=> {
    try {
        const contact = await Contact.find({});
        return res.status(200).json({message: "Contacts fetched successfully", contact});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Error in fetching all contacts", error});
    }
};