import { Client } from "../Models/client.model.js";
import { v2 as cloudinary } from 'cloudinary';

export const createClient = async(req,res)=>{
        const {name, description, designation} = req.body;
    
        try {
            if(!name || !description || !designation){
                return res.status(400).json({message: "All fields are required"});
            }
    
            const {image} = req.files;
    
            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).json({ message: "Image is Required" })
            }
    
            const allowedFormat = ["image/png", "image/jpeg"]
            if (!allowedFormat.includes(image.mimetype)) {
                return res.status(400).json({ message: "Invalid File Format" });
            }
    
            const cloud_response = await cloudinary.uploader.upload(image.tempFilePath);
            if (!cloud_response || cloud_response.error) {
                return res.status(400).json({
                    error: "Error uploading file to cloudinary"
    
                });
            }
    
            const clientData = {
                name,
                description,
                designation,
                image: {
                    public_id: cloud_response.public_id,
                    url: cloud_response.secure_url
                },
            } 
    
            const client = await Client.create(clientData);
    
            return res.status(201).json({message: "Project created successfully",client });
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "Error in creating project", error});
        }
    
};

export const fetchAllClients = async(req, res)=> {
    try {
        const client = await Client.find({});
        return res.status(200).json({message: "Contacts fetched successfully", client});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Error in fetching all contacts", error});
    }
};

