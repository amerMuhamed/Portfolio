import React, { useState } from 'react';
import axios from 'axios';

function UploadWorkoutPage() {
  const [form, setForm] = useState({
    id: "",
    workoutImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("workoutImage", form.workoutImage);

    try {
      await axios.put(
        `https://graduationproject-production-7d94.up.railway.app/api/v1/user/workouts/${form.id}/upload-media`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Workout media uploaded successfully");
    } catch (err) {
      alert("Upload failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Upload Workout Media
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Workout ID</label>
            <input
              name="id"
              type="number"
              placeholder="Enter workout ID"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Workout Image</label>
            <input
              name="workoutImage"
              type="file"
              className="w-full border border-gray-300 p-2 rounded-lg"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadWorkoutPage;
