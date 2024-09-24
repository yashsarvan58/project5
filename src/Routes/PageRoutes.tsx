import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'
import CategoriesFormLayouts from '../Categories/Layouts/CategoriesFormLayouts'
import AddCategoriesWrapper from '../Categories/Add/AddCategoriesWrapper'
// import AddTransactionWrapper from '../Categories/Add/AddTransactionWrapper'
import TransactionShowWrapper from '../Categories/Add/AddTransactionWrapper'


const PageRoutes = () => {

    const router = createBrowserRouter([

        {
            path: "/",
            element:<LoginWrapper/>

        },

        { path: "/home",
          element:<CategoriesFormLayouts/>

        },
        { path: "/categories",
          element:<AddCategoriesWrapper/>

        },
        { path: "/transaction",
          element:<TransactionShowWrapper/>

        },

        

    ]

)
  return (
    <RouterProvider router={router} />
  )
}

export default PageRoutes