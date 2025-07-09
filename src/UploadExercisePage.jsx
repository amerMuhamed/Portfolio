import React, { useState } from "react";
import axios from "axios";

export default function UploadExercisePage() {
  const [form, setForm] = useState({
    exerciseId: "",
    exerciseImage: null,
    exerciseVideo: null,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.exerciseId || isNaN(form.exerciseId)) {
      alert("Please enter a valid exercise ID.");
      return;
    }

    if (!form.exerciseImage && !form.exerciseVideo) {
      alert("Please upload at least an image or a video.");
      return;
    }

    const token = localStorage.getItem("token");
    const formData = new FormData();

    if (form.exerciseImage)
      formData.append("exerciseImage", form.exerciseImage);
    if (form.exerciseVideo)
      formData.append("exerciseVideo", form.exerciseVideo);

    try {
      await axios.put(
        `https://graduationproject-production-7d94.up.railway.app/api/v1/user/workouts/exercises/${form.exerciseId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // لا تكتب Content-Type علشان axios يحط الـ boundary تلقائيًا
          },
        }
      );
      alert("Exercise updated successfully!");
    } catch (err) {
      alert("Exercise upload failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Upload Exercise Media
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="exerciseId"
            type="number"
            placeholder="Exercise ID"
            className="w-full border border-gray-300 p-3 rounded-lg"
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exercise Image
            </label>
            <input
              name="exerciseImage"
              type="file"
              accept="image/*"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exercise Video
            </label>
            <input
              name="exerciseVideo"
              type="file"
              accept="video/*"
              className="w-full border p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Upload Media
          </button>
        </form>
      </div>
    </div>
  );
}
