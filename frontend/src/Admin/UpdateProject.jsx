import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../Utils/utils.js';

function UpdateProject() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/project/${id}`, {
          withCredentials: true,
        });
        setName(data.project.name);
        setDescription(data.project.description);
        setImagePreview(data.project.image.url);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch project data");
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const admin = JSON.parse(localStorage.getItem("admin"));
    const token = admin?.token;
    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const response = await axios.put(
        `${BACKEND_URL}/project/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      toast.success(response.data.message || "Project updated successfully");
      navigate("/admin/ projects");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Error updating project"
      );
    }
  };

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-8 text-blue-700">Update Project</h3>
        <form onSubmit={handleUpdateProject} className="space-y-6">
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
              placeholder="Describe the project..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
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
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
          >
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProject;
