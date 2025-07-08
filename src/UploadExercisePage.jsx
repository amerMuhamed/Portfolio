
import React, { useState } from 'react';
import axios from 'axios';

export default function UploadExercisePage() {
  const [form, setForm] = useState({
    exerciseId: "",
    name: "",
    description: "",
    reps: "",
    sets: "",
    durationSeconds: "",
    durationRestSeconds: "",
    caloriesBurned: "",
    totalCalories: "",
    bodyFocuses: "",
    exerciseImage: null,
    exerciseVideo: null,
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
    for (const key in form) {
      if (key === "bodyFocuses") {
        formData.append(key, JSON.stringify(form[key].split(",")));
      } else {
        formData.append(key, form[key]);
      }
    }

    try {
      await axios.put(
        `https://graduationproject-production-7d94.up.railway.app/api/v1/user/workouts/exercises/${form.exerciseId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Exercise updated successfully");
    } catch (err) {
      alert("Exercise upload failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Exercise</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="exerciseId" type="number" placeholder="Exercise ID" className="w-full border p-3 rounded-lg" onChange={handleChange} required />
            <input name="name" type="text" placeholder="Name" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="description" type="text" placeholder="Description" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="reps" type="text" placeholder="Reps" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="sets" type="number" placeholder="Sets" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="durationSeconds" type="number" placeholder="Duration (s)" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="durationRestSeconds" type="number" placeholder="Rest Duration (s)" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="caloriesBurned" type="number" placeholder="Calories Burned" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="totalCalories" type="number" placeholder="Total Calories" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            <input name="bodyFocuses" type="text" placeholder="Body Focuses (comma separated)" className="w-full border p-3 rounded-lg" onChange={handleChange} />
            
            {/* تعديل هنا لشكل الصورة والفيديو */}
            <div className="col-span-1 md:col-span-2">
                <label className="block mb-1 font-medium">Exercise Image</label>
                <input name="exerciseImage" type="file" onChange={handleChange} className="w-full border p-3 rounded-lg" />
            </div>

            <div className="col-span-1 md:col-span-2">
                <label className="block mb-1 font-medium">Exercise Video</label>
                <input name="exerciseVideo" type="file" onChange={handleChange} className="w-full border p-3 rounded-lg" />
            </div>

            <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg col-span-1 md:col-span-2 hover:bg-blue-700 transition">
                Update Exercise
            </button>
</form>

      </div>
    </div>
  );
}
