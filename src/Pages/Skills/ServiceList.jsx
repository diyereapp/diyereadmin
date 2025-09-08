// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate(); // Use navigate instead of history

//   // Fetch categories from the backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/categories`
//       );
//       setCategories(data);
//     };
//     fetchCategories();
//   }, []);

//   // Filter categories based on search query
//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle delete action
//   const handleDelete = async (categoryId) => {
//     try {
//       axios.delete(`${import.meta.env.VITE_BASE_URL}/${categoryId}`);

//       setCategories(
//         categories.filter((category) => category._id !== categoryId)
//       );
//     } catch (error) {
//       console.error("Error deleting category:", error);
//     }
//   };

//   return (
//     <div className="p">
//       <div className="">
//         <h1
//           className="text-2xl font-bold text-gray-800"
//           style={{ color: "black" }}
//         >
//           Category Management
//         </h1>
//         <p className="text-gray-600 mt-1" style={{ color: "black" }}>
//           View and manage all categories
//         </p>
//       </div>

//       <div className="lg:flex justify-between lg:space-x-5 space-y-4 lg:space-y-0 items-center mb-6">
//         <input
//           type="text"
//           placeholder="Search categories..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <div className="btn w-full lg:w-[20%]">
//           <button
//             className="px-6 py-3 bg-secondary text-white w-full rounded-md hover:bg-blue-600"
//             onClick={() => navigate("/add-category")}
//             style={{ backgroundColor: "#042954" }}
//           >
//             Add New Category
//           </button>
//         </div>
//       </div>

//       <div className="border rounded-lg overflow-hidden">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-secondary" style={{ backgroundColor: "#042954" }}>
//               <th
//                 className="w-1/3 px-6 py-3 text-left text-sm font-semibold text-gray-100"
//                 style={{ fontSize: "20px" }}
//               >
//                 Category
//               </th>
//               <th
//                 className="px-6 py-3 text-left text-sm font-semibold text-gray-100"
//                 style={{ fontSize: "20px" }}
//               >
//                 Subcategories
//               </th>
//               <th
//                 className="px-6 py-3 text-left text-sm font-semibold text-gray-100"
//                 style={{ fontSize: "20px" }}
//               >
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredCategories.map((category) => (
//               <tr
//                 key={category._id}
//                 className="hover:bg-secondary hover:text-white transition-all duration-300"
//                 style={{ backgroundColor: "#042954" }}
//               >
//                 <td className="px-6 py-4">
//                   <div className="flex items-center justify-between">
//                     <span
//                       className="font-medium text-gray-900"
//                       style={{ color: "white" }}
//                     >
//                       {category.name}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   {category.children && category.children.length > 0 ? (
//                     category.children.map((subCategory) => (
//                       <div
//                         key={subCategory._id}
//                         className="py-1"
//                         style={{ color: "white" }}
//                       >
//                         • {subCategory.name}
//                       </div>
//                     ))
//                   ) : (
//                     <span className="text-gray-500 italic">
//                       No subcategories found
//                     </span>
//                   )}
//                 </td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleDelete(category._id)}
//                     className="text-red-500 hover:text-red-700"
//                     style={{ color: "white" }}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="ml-2 text-blue-500 hover:text-blue-700"
//                     onClick={() => navigate(`/edit-category/${category._id}`)}
//                     style={{ color: "white" }}
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Category;
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`
      );
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleDelete = async (categoryId) => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_BASE_URL}/categories/${categoryId}`);
  //     setCategories(categories.filter((category) => category._id !== categoryId));
  //   } catch (error) {
  //     console.error("Error deleting category:", error);
  //   }
  // };

  // Recursive renderer for categories
  const handleDelete = async (categoryId) => {
  if (!window.confirm("Are you sure you want to delete this category and all its subcategories?")) return;

  try {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/category/${categoryId}`);
    // Refetch all categories after deletion
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`);
    setCategories(data);
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};
  const renderCategoryTree = (category, level = 0) => (
    <div key={category._id} style={{ marginLeft: `${level * 20}px` }}>
      <div className="flex items-center justify-between py-1">
        <span style={{ color: "white" }}>
          {Array(level).fill("—").join("")} {category.name}
        </span>
        <div>
          <button
            onClick={() => handleDelete(category._id)}
            className="text-red-500 hover:text-red-700 ml-2"
            style={{ color: "white" }}
          >
            Delete
          </button>
          <button
            className="ml-2 text-blue-500 hover:text-blue-700"
  onClick={() => navigate(`/edit-category/${category._id}`)}
            style={{ color: "white" }}
          >
            Edit
          </button>
        </div>
      </div>

      {/* Render children recursively */}
      {category.children &&
        category.children.map((child) =>
          renderCategoryTree(child, level + 1)
        )}
    </div>
  );


  return (
    <div className="p">
      <div>
        <h1 className="text-2xl font-bold text-gray-800" style={{ color: "black" }}>
          Category Management
        </h1>
        <p className="text-gray-600 mt-1" style={{ color: "black" }}>
          View and manage all categories
        </p>
      </div>

      <div className="lg:flex justify-between lg:space-x-5 space-y-4 lg:space-y-0 items-center mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="btn w-full lg:w-[20%]">
          <button
            className="px-6 py-3 bg-secondary text-white w-full rounded-md hover:bg-blue-600"
            onClick={() => navigate("/add-category")}
            style={{ backgroundColor: "#042954" }}
          >
            Add New Category
          </button>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div
          className="bg-secondary px-6 py-3"
          style={{ backgroundColor: "#042954" }}
        >
          <span className="text-gray-100 font-semibold text-lg">Categories</span>
        </div>

        <div className="divide-y divide-gray-200 px-6 py-4 bg-[#042954]">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => renderCategoryTree(category))
          ) : (
            <p className="text-gray-500 italic">No categories found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
