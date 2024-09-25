import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'

import Layout from '../Sidebar/Layout'
import AddCategoriesWrapper from '../Categories/Add/AddCategoriesWrapper'
import AddCategories from '../Categories/Layout/AddCategories'
import TransactionShowWrapper from '../Transaction/Add/AddTransactionWrapper'


const PageRoutes = () => {

    const router = createBrowserRouter([

        {
            path: "/",
            element:<LoginWrapper/>

        },

        {
          path: "/Layout",
          element:<Layout/>
         
        },
        {
          path: "/add",
          element:<AddCategories/>
         
        },
        {
          path: "/transaction",
          element:<TransactionShowWrapper/>
         
        },
        // {
        //   path: "/",
        //   element:<AddCategories/>
         
        // }

      ])
  return (
    <RouterProvider router={router} />
  )
}

export default PageRoutes

