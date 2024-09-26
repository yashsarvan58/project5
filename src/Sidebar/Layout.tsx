import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import CategoriesFormWrapper from '../Layouts/CategoriesFormWrapper'
import CategoriesFormLayouts from '../Layouts/CategoriesFormLayouts'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='h-screen flex '>
        
        <SideBar/>
        <div className='w-screen'>
        {/* <CategoriesFormLayouts/> */}
        <Outlet/>
        </div>
       
        <div className='flex-1 bg-gray-200 '>
        </div>
    </div>
  )
}

export default Layout