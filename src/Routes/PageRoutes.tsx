
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "../Login/LoginWrapper";
import Layout from "../Sidebar/Layout";
import DashboardLayout from "../Dashboard/DashboardLayout";

import TransactionHistory from "../History/TransactionHistory/TransactionHistory";
import CategoryListingWrapper from "../Categories/List/CategoryListingWrapper";
import AddCategoryFormWrapper from "../Categories/Add/AddCategoryWrapper";
import EditCategoryWrapper from "../Categories/Edit/EditCategoryWrapper";
import AddTransactionFormWrapper from "../Transaction/Add/AddTransactionWrapper";


const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/", // Root path for login
      element: <LoginWrapper />
    },
    {
      path: "/layout", // Main dashboard layout
      element: <Layout />,
      children: [
        {
          path: "home", // Default dashboard view
          element: <DashboardLayout />,
        },
        {
          path: "category-list", // Listing categories
          element: <CategoryListingWrapper/>,
        
        },
        {
          path:"add-category",
          element:<AddCategoryFormWrapper/>
        },
        {
          path:"category-list/edit-category/:id",
          element:<EditCategoryWrapper/>
        },

      
        
        {
          path: "transaction", // Adding a transaction
          element: <AddTransactionFormWrapper/>
        },
        {
          path: "transaction-history", // Transaction history page
          element: <TransactionHistory />,
        }
      ]
    },

  ]);

  return <RouterProvider router={router} />;
};

export default PageRoutes;

