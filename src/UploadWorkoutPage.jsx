import React, { useState } from 'react';
import axios from 'axios';

function UploadWorkoutPage() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    trainingLevel: "",
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
    for (const key in form) formData.append(key, form[key]);

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
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Upload Workout Media</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="id" type="number" placeholder="Workout ID" className="w-full border p-2 rounded" onChange={handleChange} required />
        <input name="name" type="text" placeholder="Workout Name" className="w-full border p-2 rounded" onChange={handleChange} />
        <input name="description" type="text" placeholder="Workout Description" className="w-full border p-2 rounded" onChange={handleChange} />
        <select name="trainingLevel" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="">-- Select Level --</option>
          <option value="BEGINNER">BEGINNER</option>
          <option value="INTERMEDIATE">INTERMEDIATE</option>
          <option value="ADVANCED">ADVANCED</option>
        </select>
        <input name="workoutImage" type="file" className="w-full" onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white p-2 px-6 rounded hover:bg-green-700">Upload</button>
      </form>
    </div>
  );
}

export default UploadWorkoutPage;
