import { Project } from "../Models/project.model.js";
import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose';

export const createProject = async(req, res) =>{
    const adminId = req.adminId;
    const {name, description} = req.body;

    try {
        if(!name || !description){
            return res.status(400).json({message: "All fields are required"});
        }

        const {image} = req.files;

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: "Image is Required" })
        }

        const allowedFormat = ["image/png", "image/jpeg", "image/svg"]
        if (!allowedFormat.includes(image.mimetype)) {
            return res.status(400).json({ message: "Invalid File Format" });
        }

        const cloud_response = await cloudinary.uploader.upload(image.tempFilePath);
        if (!cloud_response || cloud_response.error) {
            return res.status(400).json({
                error: "Error uploading file to cloudinary"

            });
        }

        const projectData = {
            name,
            description,
            image: {
                public_id: cloud_response.public_id,
                url: cloud_response.secure_url
            },
            creatorId: adminId

        } 

        const project = await Project.create(projectData);

        return res.status(201).json({message: "Project created successfully",project });
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Error in creating project", error});
    }
};

export const updateProject = async (req, res) =>{
    const adminId = req.adminId
    const { projectId } = req.params;
    const { name, description } = req.body;
    const {image} = req.files;

    try {
        const projectSearch = await Project.findById(projectId);
        if (!projectSearch) {
            return res.status(404).json({
                message:
                    "Item not found"
            })
        }

        const project = await Project.findOneAndUpdate({
            _id: projectId,
            creatorId: adminId,
        }, {
            name,
            description,
            image: {
                public_id: image?.public_id,
                url: image?.url
            },
        },{new:true})

        if(!project){
            return res.status(404).json({message: "Can't Update, Created By another Admin"});
        }

        return res.status(201).json({
            message: "Item Updated Successfully",
            project
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error in Updating the Data" })
    }

};

export const getProjects = async(req, res)=>{
    try {
        const projects = await Project.find({});
        return res.status(200).json({ message: "Items Fetched Successfully", projects });
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Error in fetching Projects"});
    }
};

export const getOneProject = async(req, res)=>{
    const {projectId} = req.params;

    try {
        const project = await Project.findById(projectId);
         if (!project) {
            return res.status(404).json({ message: "Item not found" });
        }
        return res.status(200).json({ message: "Item fetched successfully", project });
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Project fetched successfully"});
    }
};



export const deleteProject = async (req, res) => {
    const adminId = req.adminId;
    const { projectId } = req.params;

    try {
        const project = await Project.findOneAndDelete({
            _id: projectId,
            creatorId: new mongoose.Types.ObjectId(adminId), 
        });

        if (!project) {
            return res.status(404).json({ message: "Can't Delete, Created by another admin" });
        }

        return res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error in deleting project", error });
    }
};


