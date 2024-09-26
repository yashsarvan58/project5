import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'

import Layout from '../Sidebar/Layout'
import AddCategoriesWrapper from '../Categories/Add/AddCategoriesWrapper'
import AddCategories from '../Categories/Layout/AddCategories'
import TransactionShowWrapper from '../Transaction/Add/AddTransactionWrapper'
import CategoriesFormLayouts from '../Layouts/CategoriesFormLayouts'
import TransactionHistory from '../History/TransactionHistory/TransactionHistory'


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
              element:<CategoriesFormLayouts/>
            },
            {
              path: "add",
              element:<AddCategories/>
             
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
        
       

      ])
  return (
    <RouterProvider router={router} />
  )
}

export default PageRoutes

