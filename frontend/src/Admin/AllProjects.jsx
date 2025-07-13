import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../Utils/utils';
// import { BACKEND_URL } from '../../utils/utils';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const token = admin?.token;

    if (!token) {
      toast.error("Please login as admin");
      navigate("/admin/login");
      return;
    }

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/project/get-projects`, {
          withCredentials: true,
        });
        setProjects(response.data.projects);
      } catch (error) {
        toast.error("Failed to fetch projects");
        console.error("Error in fetchProjects: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [navigate]);

  const handleDeleteProject = async (id) => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const token = admin?.token;

    try {
      const response = await axios.delete(`http://localhost:4000/api/v1/project/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      toast.success(response.data.message);
      const updatedProjects = projects.filter((project) => project._id !== id);
      setProjects(updatedProjects);
    } catch (error) {
      console.log("Error in deleting project", error);
      toast.error(error.response?.data?.message || "Error in deleting project");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="bg-gray-100 p-8 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Projects</h1>
      <Link
        className="bg-orange-400 py-2 px-4 rounded-lg text-white hover:bg-orange-950 duration-300"
        to={"/admin/dashboard"}
      >
        Go to dashboard
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {projects.map((project) => (
          <div key={project._id} className="bg-white shadow-md rounded-lg p-4 w-90">
            <img
              src={project?.image?.url}
              alt={project.name}
              className="object-cover w-90 h-40 rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-blue-500">
              {project.description}
            </h2>
            <p className="text-gray-600 mt-2 text-sm ">
              {project.name}
            </p>
        
            <div className="flex justify-between">
              <Link
                to={`/admin/update-project/${project._id}`}
                className="bg-orange-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 cursor-pointer"
              >
                Update
              </Link>
              <button 
                onClick={() => handleDeleteProject(project._id)}
                className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
