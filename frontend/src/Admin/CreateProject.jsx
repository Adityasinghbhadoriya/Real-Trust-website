import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../Utils/utils.js';

function CreateProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    const admin = JSON.parse(localStorage.getItem("admin"));
    const token = admin?.token;
    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/project/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      toast.success(response.data.message || "Project Created Successfully");
      navigate("/admin/projects");

      // Reset form
      setName("");
      setDescription("");
      setImage("");
      setImagePreview("");

    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Error while creating project"
      );
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
        <h3 className="text-2xl font-semibold mb-8 text-blue-700">Add New Project</h3>

        <form onSubmit={handleCreateProject} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg">Project Name</label>
            <input
              type="text"
              placeholder="Enter project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg">Description</label>
            <textarea
              rows={4}
              placeholder="Describe the project..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none resize-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg">Project Image</label>
            <div className="flex items-center justify-center">
              <img
                src={imagePreview ? imagePreview : "/imgPL.webp"}
                alt="Project Preview"
                className="w-full max-w-sm h-auto rounded-md object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={changePhotoHandler}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 cursor-pointer"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
