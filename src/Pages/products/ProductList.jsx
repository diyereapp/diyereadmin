// import React, { useState, useEffect } from "react";

// import {
//   CheckCircle,
//   XCircle,
//   MoreVertical,
//   Edit,
//   Trash,
//   Mail,
//   UserPlus,
//   Search,
//   Filter,
//   ChevronDown,
// } from "lucide-react";
// import { LuView } from "react-icons/lu";
// import Layout from "../../Components/Layout/Layout";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// const ProductList = () => {
//   const [openDropdownId, setOpenDropdownId] = useState(null);
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSkill, setSelectedSkill] = useState("");
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryImage, setCategoryImage] = useState(null);
//   const [selectedIcon, setSelectedIcon] = useState("");
//   const [productName, setProductName] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [brands, setBrands] = useState([]);

//   const [gender, setGender] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [description, setDescription] = useState("");
//   const [images, setImages] = useState([]);
//   const [size, setSize] = useState("");
//   const [productDate, setProductDate] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/categories"); // replace with your actual API endpoint
//         const data = await res.json();
//         setCategories(data); // make sure your API returns an array
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleAction = (action, user) => {
//     setOpenDropdownId(null);

//     switch (action) {
//       case "view":
//         navigate(`/user/${user.id}`);
//         break;
//       case "edit":
//         console.log("Edit user:", user);
//         break;
//       case "delete":
//         console.log("Delete user:", user);
//         break;
//       case "email":
//         console.log("Email user:", user);
//         break;
//       case "promote":
//         console.log("Promote user:", user);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Layout>
//       <div className="w-full px-3 lg:px-[8rem]">
//         <div className="px-4 lg:px-8 py-6">
//           <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
//           <p className="text-gray-600 mt-1">
//             View and manage all orders paid and unpaid
//           </p>
//         </div>

//         <div className="lg:flex justify-between lg:space-x-5 space-y-4 lg:space-y-0 items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search product..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="btn   w-full lg:w-[20%]">
//             <button
//               className="px-6 py-3 bg-secondary text-white w-full rounded-md hover:bg-blue-600"
//               onClick={() => navigate("/add-product")}
//               style={{ backgroundColor: "purple" }}
//             >
//               Add New Product
//             </button>
//           </div>
//         </div>
//         {/* Search and Filter Section */}

//         {/* Users Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Order Id
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Quantity
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Payment
//                 </th>

//                 <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {users.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user.fullName}
//                     </div>
//                     <div className="text-sm text-gray-500">{user.gender}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{user.email}</div>
//                     <div className="text-sm text-gray-500">
//                       {user.phoneNumber}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{user.state}</div>
//                     <div className="text-sm text-gray-500">{user.address}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{user.state}</div>
//                     <div className="text-sm text-gray-500">{user.address}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{user.state}</div>
//                     <div className="text-sm text-gray-500">{user.address}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-center">
//                     {user.verified ? (
//                       <CheckCircle className="inline-block w-5 h-5 text-green-500" />
//                     ) : (
//                       <XCircle className="inline-block w-5 h-5 text-red-500" />
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-center relative">
//                     <button
//                       onClick={() =>
//                         setOpenDropdownId(
//                           openDropdownId === user.id ? null : user.id
//                         )
//                       }
//                       className="text-gray-400 hover:text-gray-600"
//                     >
//                       <MoreVertical className="w-5 h-5" />
//                     </button>
//                     {openDropdownId === user.id && (
//                       <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                         <div className="py-1" role="menu">
//                           <button
//                             onClick={() => handleAction("view", user)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <LuView className="w-4 h-4 mr-2" /> View User
//                           </button>
//                           <button
//                             onClick={() => handleAction("edit", user)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <Edit className="w-4 h-4 mr-2" /> Edit User
//                           </button>
//                           <button
//                             onClick={() => handleAction("email", user)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <Mail className="w-4 h-4 mr-2" /> Send Email
//                           </button>
//                           <button
//                             onClick={() => handleAction("promote", user)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <UserPlus className="w-4 h-4 mr-2" /> Promote
//                           </button>
//                           <button
//                             onClick={() => handleAction("delete", user)}
//                             className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//                           >
//                             <Trash className="w-4 h-4 mr-2" /> Delete
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProductList;
// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   XCircle,
//   MoreVertical,
//   Edit,
//   Trash,
//   Mail,
//   UserPlus,
// } from "lucide-react";
// import { LuView } from "react-icons/lu";
// import Layout from "../../Components/Layout/Layout";
// import { useNavigate } from "react-router-dom";

// const ProductList = () => {
//   const [openDropdownId, setOpenDropdownId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [products, setProducts] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);

//         const data = await res.json();

//         // Log data to see what you are getting
//         console.log("Fetched products:", data);

//         // Clean up the product names (remove unwanted whitespace or tabs)
//         const cleanedProducts = data.map((product) => ({
//           ...product,
//           name: product.name.trim(), // Remove leading/trailing whitespace
//         }));

//         setProducts(cleanedProducts); // Set cleaned data
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAction = (action, product) => {
//     setOpenDropdownId(null);

//     switch (action) {
//       case "view":
//         navigate(`/product/${product._id}`);
//         break;
//       case "edit":
//         navigate(`/edit-product/${product._id}`);
//         break;
//       case "delete":
//         console.log("Delete product:", product);
//         break;
//       case "email":
//         console.log("Email about product:", product);
//         break;
//       case "promote":
//         console.log("Promote product:", product);
//         break;
//       default:
//         break;
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Layout>
//       <div className="w-full px-3 lg:px-[8rem]">
//         <div className="px-4 lg:px-8 py-6">
//           <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
//           <p className="text-gray-600 mt-1">
//             View and manage all orders paid and unpaid
//           </p>
//         </div>

//         <div className="lg:flex justify-between lg:space-x-5 space-y-4 lg:space-y-0 items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search product..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="btn w-full lg:w-[20%]">
//             <button
//               className="px-6 py-3 bg-secondary text-white w-full rounded-md hover:bg-blue-600"
//               onClick={() => navigate("/add-product")}
//               style={{ backgroundColor: "#042954" }}
//             >
//               Add New Product
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product Category
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Quantity
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   size
//                 </th>

//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   New Price
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Discount Price
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Image
//                 </th>
//                 <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   File
//                 </th>
//                 <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredProducts.map((product) => (
//                 <tr key={product._id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {product.name}
//                     </div>
//                     <div className="text-sm text-gray-500">{product.size}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.category.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {" "}
//                     {product.productType}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.quantityAvailable}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.size}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ₦{product.price?.toLocaleString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ₦{product.discountPrice?.toLocaleString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.images[0]}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.supportingFile}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-center">
//                     {product.status === "approved" ? (
//                       <CheckCircle className="inline-block w-5 h-5 text-green-500" />
//                     ) : (
//                       <XCircle className="inline-block w-5 h-5 text-red-500" />
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-center relative">
//                     <button
//                       onClick={() =>
//                         setOpenDropdownId(
//                           openDropdownId === product._id ? null : product._id
//                         )
//                       }
//                       className="text-gray-400 hover:text-gray-600"
//                     >
//                       <MoreVertical className="w-5 h-5" />
//                     </button>
//                     {openDropdownId === product._id && (
//                       <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                         <div className="py-1" role="menu">
//                           <button
//                             onClick={() => handleAction("view", product)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <LuView className="w-4 h-4 mr-2" /> View
//                           </button>
//                           <button
//                             onClick={() => handleAction("edit", product)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <Edit className="w-4 h-4 mr-2" /> Edit
//                           </button>
//                           <button
//                             onClick={() => handleAction("email", product)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <Mail className="w-4 h-4 mr-2" /> Send Email
//                           </button>
//                           <button
//                             onClick={() => handleAction("promote", product)}
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <UserPlus className="w-4 h-4 mr-2" /> Promote
//                           </button>
//                           <button
//                             onClick={() => handleAction("delete", product)}
//                             className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//                           >
//                             <Trash className="w-4 h-4 mr-2" /> Delete
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//               {filteredProducts.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className="text-center px-6 py-4 text-gray-500"
//                   >
//                     No products found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProductList;
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  MoreVertical,
  Edit,
  Trash,
  Mail,
  UserPlus,
} from "lucide-react";
import { LuView } from "react-icons/lu";
import Layout from "../../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
        const data = await res.json();

        console.log("Fetched products:", data);

        const cleanedProducts = data.map((product) => ({
          ...product,
          name: product.name.trim(),
        }));

        setProducts(cleanedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAction = (action, product) => {
    setOpenDropdownId(null);

    switch (action) {
      case "view":
        navigate(`/product/${product._id}`);
        break;
      case "edit":
        navigate(`/edit-product/${product._id}`);
        break;
      case "delete":
        console.log("Delete product:", product);
        break;
      case "email":
        console.log("Email about product:", product);
        break;
      case "promote":
        console.log("Promote product:", product);
        break;
      default:
        break;
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="w-full px-3 lg:px-[8rem]">
        <div className="px-4 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-600 mt-1">
            View and manage all your clothing products
          </p>
        </div>

        {/* Search + Add button */}
        <div className="lg:flex justify-between lg:space-x-5 space-y-4 lg:space-y-0 items-center mb-6">
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="btn w-full lg:w-[20%]">
            <button
              className="px-6 py-3 bg-secondary text-white w-full rounded-md hover:bg-blue-600"
              onClick={() => navigate("/add-product")}
              style={{ backgroundColor: "#042954" }}
            >
              Add New Product
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Color
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                 {/*} <td className="px-6 py-4 text-sm text-gray-700">
                    {product.grandParentCategory?.name} &raquo;{" "}
                    {product.parentCategory?.name} &raquo;{" "}
                    {product.category?.name}
                  </td>*/}

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {[
          product.grandParentCategory?.name,
          product.parentCategory?.name,
          product.category?.name,
        ]
          .filter(Boolean)
          .join(" → ")}
      </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.brand}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.color?.join(", ")}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.size?.join(", ")}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {product.quantityAvailable}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                    ₦{product.price?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    ₦{product.discountPrice?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center relative">
                    <button
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === product._id ? null : product._id
                        )
                      }
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {openDropdownId === product._id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu">
                          <button
                            onClick={() => handleAction("view", product)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <LuView className="w-4 h-4 mr-2" /> View
                          </button>
                          <button
                            onClick={() => handleAction("edit", product)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Edit className="w-4 h-4 mr-2" /> Edit
                          </button>
                          <button
                            onClick={() => handleAction("email", product)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Mail className="w-4 h-4 mr-2" /> Send Email
                          </button>
                          <button
                            onClick={() => handleAction("promote", product)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <UserPlus className="w-4 h-4 mr-2" /> Promote
                          </button>
                          <button
                            onClick={() => handleAction("delete", product)}
                            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                          >
                            <Trash className="w-4 h-4 mr-2" /> Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan="11"
                    className="text-center px-6 py-4 text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
