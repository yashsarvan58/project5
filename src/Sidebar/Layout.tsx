// import React from 'react'
// import SideBar from './SideBar'
// import { Outlet } from 'react-router-dom'
// import DashboardLayout from '../Dashboard/DashboardLayout'


// type Props = {}

// const Layout = (props: Props) => {
//   return (
//     <div className='h-screen flex '>
        
//         <SideBar/>
        
//         <div className='w-screen'>
//         <Outlet/>
//         </div>
       
//         <div className='flex-1 bg-gray-200 '>
//         </div>
//     </div>
//   )
// }

// export default Layout


import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Sidebar takes full width on smaller screens and fixed width on larger screens */}
      <SideBar />

      {/* Main content area, with responsive width */}
      <div className="flex-1 w-full lg:w-auto overflow-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;