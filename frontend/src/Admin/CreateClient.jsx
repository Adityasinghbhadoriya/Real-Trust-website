import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../Utils/utils';

const CreateClient = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [designation, setDesignation] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

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

  const handleCreateClient = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('designation', designation);
    formData.append('image', image);

    const admin = JSON.parse(localStorage.getItem('admin'));
    const token = admin?.token;

    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/client/create-client`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      toast.success(response.data.message || 'Client created successfully!');
      navigate('/admin/clients');

      // Reset form
      setName('');
      setDescription('');
      setDesignation('');
      setImage('');
      setImagePreview('');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to create client');
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
        <h3 className="text-2xl font-semibold mb-8 text-blue-700">Add New Client</h3>

        <form onSubmit={handleCreateClient} className="space-y-6">
          <div>
            <label className="block text-lg">Client Name</label>
            <input
              type="text"
              placeholder="Enter client name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg">Description</label>
            <textarea
              rows={3}
              placeholder="Describe the client..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg">Designation</label>
            <input
              type="text"
              placeholder="e.g. CEO at XYZ"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg">Client Image</label>
            <div className="flex justify-center mb-2">
              <img
                src={imagePreview ? imagePreview : '/imgPL.webp'}
                alt="Client Preview"
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
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClient;
