import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'
import CategoriesFormLayouts from '../Categories/Layouts/CategoriesFormLayouts'


const PageRoutes = () => {

    const router = createBrowserRouter([

        {
            path: "/",
            element:<LoginWrapper/>

        },

        { path: "/categories",
          element:<CategoriesFormLayouts/>

        }

    ]

)
  return (
    <RouterProvider router={router} />
  )
}

export default PageRoutes