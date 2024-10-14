
// // import { useNavigate, Link } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import background1 from "../images/background1.avif";
// // import { SlLogout } from "react-icons/sl";
// // import { GoHistory } from "react-icons/go";
// // import { GrTransaction } from "react-icons/gr";
// // import { TbCategory } from "react-icons/tb";
// // import { IoHomeOutline } from "react-icons/io5";

// // const Sidebar = () => {
// //     const navigate = useNavigate();

// //     const handleLogout = () => {
// //         localStorage.clear();
// //         navigate("/");
// //         toast("Logout successfully");
// //     };

// //     return (
// //         <div
// //             className="w-64 h-screen bg-cyan-800 text-gray-400 shadow-lg text-lg flex flex-col p-5 bg-cover"
// //             style={{ backgroundImage: `url(${background1})` }}
// //         >
// //             <Link to="home">
// //                 <div className="flex items-center h-10 mt-6 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
// //                     <IoHomeOutline className="mt-1 mr-3" />
// //                     <p>Home</p>
// //                 </div>
// //             </Link>
// //             <hr />

// //             <Link to="category-list">
// //                 <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
// //                     <TbCategory className="mt-1 mr-3" />
// //                     <p>Categories</p>
// //                 </div>
// //             </Link>

// //             <Link to="transaction">
// //                 <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
// //                     <GrTransaction className="mt-1 mr-3" />
// //                     <p>Transaction</p>
// //                 </div>
// //             </Link>

// //             <Link to="transaction-history">
// //                 <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
// //                     <GoHistory className="mt-1 mr-3" />
// //                     <p>History</p>
// //                 </div>
// //             </Link>

// //             <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
// //                 <button onClick={handleLogout} className="flex items-center w-full">
// //                     <SlLogout className="mt-1 mr-3" />
// //                     <p>Logout</p>
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Sidebar;


// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import background1 from "../images/background1.avif";
// import { SlLogout } from "react-icons/sl";
// import { GoHistory } from "react-icons/go";
// import { GrTransaction } from "react-icons/gr";
// import { TbCategory } from "react-icons/tb";
// import { IoHomeOutline } from "react-icons/io5";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//     toast("Logout successfully");
//   };

//   return (
//     <div
//       className="w-full lg:w-64 h-16 lg:h-screen bg-cyan-800 text-gray-400 shadow-lg text-lg flex flex-row lg:flex-col justify-between lg:justify-start p-4 lg:p-5 bg-cover"
//       style={{ backgroundImage: `url(${background1})` }}
//     >
//       {/* Links with flex and hover effects */}
//       <div className="flex flex-col lg:gap-6 w-full">
//         <Link to="home">
//           <div className="flex items-center h-10 mt-6 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
//             <IoHomeOutline className="mt-1 mr-3" />
//             <p>Home</p>
//           </div>
//         </Link>
//         <hr />

//         <Link to="category-list">
//           <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
//             <TbCategory className="mt-1 mr-3" />
//             <p>Categories</p>
//           </div>
//         </Link>

//         <Link to="transaction">
//           <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
//             <GrTransaction className="mt-1 mr-3" />
//             <p>Transaction</p>
//           </div>
//         </Link>

//         <Link to="transaction-history">
//           <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
//             <GoHistory className="mt-1 mr-3" />
//             <p>History</p>
//           </div>
//         </Link>
//       </div>

//       {/* Logout Button */}
//       <div className="flex items-center lg:mt-auto h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
//         <button onClick={handleLogout} className="flex items-center w-full">
//           <SlLogout className="mt-1 mr-3" />
//           <p>Logout</p>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import background1 from "../images/background1.avif";
import { SlLogout } from "react-icons/sl";
import { GoHistory } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";  

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);  

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast("Logout successfully");
  };

  return (
    <div className="relative">
        
            {!isOpen && (
        <button
          className="lg:hidden p-4 text-white fixed top-0 left-0 z-50"
          onClick={() => setIsOpen(true)}
        >
          <HiMenu size={30} />
        </button>
      )}


   
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative z-40 w-64 lg:w-64 h-screen bg-cyan-800 text-gray-400 shadow-lg text-lg flex flex-col p-5 bg-cover transition-transform duration-300 ease-in-out`}
        style={{ backgroundImage: `url(${background1})` }}
      >
       
        <div className="flex flex-col lg:gap-6 w-full">
          <Link to="home" onClick={() => setIsOpen(false)}>
            <div className="flex items-center h-10 mt-6 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
              <IoHomeOutline className="mt-1 mr-3" />
              <p>Home</p>
            </div>
          </Link>
          <hr />

          <Link to="category-list" onClick={() => setIsOpen(false)}>
            <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
              <TbCategory className="mt-1 mr-3" />
              <p>Categories</p>
            </div>
          </Link>

          <Link to="transaction-history" onClick={() => setIsOpen(false)}>
            <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
              <GrTransaction className="mt-1 mr-3" />
              <p>Transaction</p>
            </div>
          </Link>

          {/* <Link to="transaction-history" onClick={() => setIsOpen(false)}>
            <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
              <GoHistory className="mt-1 mr-3" />
              <p>History</p>
            </div>
          </Link> */}
        </div>

      
        <div className="flex items-center lg:mt-auto h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
          <button onClick={handleLogout} className="flex items-center w-full">
            <SlLogout className="mt-1 mr-3" />
            <p>Logout</p>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;


