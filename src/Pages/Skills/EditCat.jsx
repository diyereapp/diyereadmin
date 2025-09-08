import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditCat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch category data
    const fetchCategory = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`);
      const category = data.find((cat) => cat._id === id);
      if (category) {
        setName(category.name);
        setParent(category.parent || "");
      }
      setCategories(data); // For parent selection
    };
    fetchCategory();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/category/${id}`, {
        name,
        parent: parent || null,
      });
      navigate("/categories"); // Go back to category list
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="border px-4 py-2 rounded-md"
        />
        <select
          value={parent || ""}
          onChange={(e) => setParent(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">No Parent</option>
          {categories
            .filter((cat) => cat._id !== id) // prevent setting itself as parent
            .map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
        </select>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Update Category
        </button>
      </div>
    </div>
  );
};

export default EditCat;
