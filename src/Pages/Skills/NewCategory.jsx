// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const NewCategory = () => {
//   const [services, setServices] = useState(initialServices);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSkill, setSelectedSkill] = useState("");
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryImage, setCategoryImage] = useState(null);
//   const [selectedIcon, setSelectedIcon] = useState("");
//   const navigate = useNavigate(); // Use navigate instead of history

//   const handleAddSkill = () => {
//     if (selectedCategory && selectedSkill) {
//       const updatedServices = services.map((service) =>
//         service.category === selectedCategory
//           ? { ...service, items: [...service.items, selectedSkill] }
//           : service
//       );
//       setServices(updatedServices);
//       setSelectedCategory("");
//       setSelectedSkill("");
//       setIsModalOpen(false);
//     }
//   };

//   const handleAddSkillToCategory = (category) => {
//     const skill = prompt(`Add a new skill to "${category}"`);
//     if (skill) {
//       const updatedServices = services.map((service) =>
//         service.category === category
//           ? { ...service, items: [...service.items, skill] }
//           : service
//       );
//       setServices(updatedServices);
//     }
//   };
//   useEffect(() => {
//     const fetchCategories = async () => {
//       const { data } = await axios.get("/api/categories");
//       setCategories(data);
//     };
//     fetchCategories();
//   }, []);

//   const handleAddCategory = () => {
//     const formData = new FormData();
//     formData.append("name", categoryName);
//     formData.append("icon", selectedIcon);
//     if (categoryImage) formData.append("image", categoryImage);

//     // Send formData to backend...
//     console.log("Submitting category:", {
//       name: categoryName,
//       icon: selectedIcon,
//       image: categoryImage,
//     });

//     // Reset and close modal
//     setCategoryName("");
//     setCategoryImage(null);
//     setSelectedIcon("");
//     setIsModalOpen(false);
//   };

//   const filteredServices = services.map((service) => ({
//     ...service,
//     items: service.items.filter((item) =>
//       item.toLowerCase().includes(searchQuery.toLowerCase())
//     ),
//   }));

//   return (
//     <div className="p">
//       <div className="">
//         <h1
//           className="text-2xl font-bold text-gray-800"
//           style={{ color: "black" }}
//         >
//           Add Categries
//         </h1>
//       </div>

//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//           <h3 className="text-2xl font-bold mb-4">Add New Category</h3>

//           {/* Category Name Input */}
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700">Category Name</label>
//             <input
//               type="text"
//               value={categoryName}
//               onChange={(e) => setCategoryName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter category name"
//             />
//           </div>

//           {/* Upload Category Image */}
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700">Category Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setCategoryImage(e.target.files[0])}
//               className="w-full"
//             />
//           </div>

//           {/* Select Icon */}
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700">
//               Select Category Icon
//             </label>
//             <select
//               value={selectedIcon}
//               onChange={(e) => setSelectedIcon(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">-- Select an Icon --</option>
//               <option value="📚">📚 Education</option>
//               <option value="💻">💻 Tech</option>
//               <option value="🎨">🎨 Design</option>
//               <option value="🔧">🔧 Tools</option>
//               {/* Add more icons as needed */}
//             </select>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-end space-x-4">
//             <button
//               className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               onClick={handleAddCategory}
//             >
//               Add Category
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewCategory;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../Components/AdminHeader/AdminHeader";

const NewCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [newSubCategory, setNewSubCategory] = useState("");
  const navigate = useNavigate();

  const handleAddSubCategory = () => {
    if (newSubCategory.trim() !== "") {
      setSubCategories([...subCategories, newSubCategory.trim()]);
      setNewSubCategory("");
    }
  };

  const handleRemoveSubCategory = (index) => {
    const updated = [...subCategories];
    updated.splice(index, 1);
    setSubCategories(updated);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("name", categoryName);
  //     formData.append("icon", selectedIcon);
  //     if (categoryImage) formData.append("image", categoryImage);
  //     formData.append("children", JSON.stringify(subCategories)); // send subcategories as JSON

  //     const response = await axios.post(
  //       "http://localhost:8000/api/category",
  //       formData
  //     );
  //     console.log("Category created:", response.data);

  //     // Reset form
  //     setCategoryName("");
  //     setCategoryImage(null);
  //     setSelectedIcon("");
  //     setSubCategories([]);
  //     navigate("/category"); // Navigate back to category list
  //   } catch (error) {
  //     console.error("Error creating category:", error);
  //   }
  // };
  const handleSubmit = async () => {
    try {
      // Step 1: Create the parent category
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("icon", selectedIcon);
      if (categoryImage) formData.append("image", categoryImage);

      // const parentRes = await axios.post(
      //   "http://localhost:8000/api/category",
      //   formData
      // );
      const parentRes = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/category`,
        formData
      );

      const parentCategory = parentRes.data;

      // Step 2: Create each subcategory
      for (let sub of subCategories) {
        const subData = new FormData();
        subData.append("name", sub);
        subData.append("icon", selectedIcon); // Optional: reuse or change icon
        subData.append("parent", parentCategory._id);

        // await axios.post("http://localhost:8000/api/category", subData);
        await axios.post(`${import.meta.env.VITE_BASE_URL}/category`, subData);
      }

      // Reset form
      setCategoryName("");
      setCategoryImage(null);
      setSelectedIcon("");
      setSubCategories([]);
      navigate("/category");
    } catch (error) {
      console.error("Error creating category or subcategories:", error);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Category
        </h2>

        {/* Category Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Category Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCategoryImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        {/* Select Icon */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select Icon
          </label>
          <select
            value={selectedIcon}
            onChange={(e) => setSelectedIcon(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- Choose an Icon --</option>
            <option value="📚">📚 Education</option>
            <option value="💻">💻 Tech</option>
            <option value="🎨">🎨 Design</option>
            <option value="🔧">🔧 Tools</option>
            {/* Add more if you like */}
          </select>
        </div>

        {/* Subcategories */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Subcategories
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
              placeholder="Enter subcategory name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={handleAddSubCategory}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Add
            </button>
          </div>
          {subCategories.length > 0 && (
            <ul className="list-disc ml-5">
              {subCategories.map((sub, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between mb-1"
                >
                  <span>{sub}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSubCategory(idx)}
                    className="text-red-500 text-sm ml-4 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Submit Category
          </button>
        </div>
      </div>
    </>
  );
};

export default NewCategory;
