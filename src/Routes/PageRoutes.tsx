import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'

import Layout from '../Sidebar/Layout'
import TransactionShowWrapper from '../Transaction/Add/AddTransactionWrapper'
import TransactionHistory from '../History/TransactionHistory/TransactionHistory'
import DashboardLayout from '../Dashboard/DashboardLayout'
import CategoriesFormWrapper from '../Categories/Layout/CategoriesFormWrapper'
import ListCategoriesWrapper from '../Categories/List/ListCategoriesWrapper'


const PageRoutes = () => {

    const router = createBrowserRouter([

        {
            path: "/",
            element:<LoginWrapper/>

        },

        {
          path: "/dashboard",
          element:<Layout/>,
          children:[
            {
              path:"",
              element:<DashboardLayout/>
            },
            {
              path: "categories-list",
              element:<ListCategoriesWrapper/>,
            },

            {
              path: "transaction",
              element:<TransactionShowWrapper/>
             
            },
            {
              path: "transaction-history",
              element:<TransactionHistory/>
             
            }

          ]
         
        },
        {
          path: "/add",
          element:<CategoriesFormWrapper/>
        },
        
       

      ])
  return (
    <RouterProvider router={router} />
  )
}

export default PageRoutes

