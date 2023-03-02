import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
         { path: "SPA-React-Router", element: <Homepage /> },
         { path: "products", element: <ProductsPage /> },
         { path: "products/:productId", element: <ProductDetailPage /> },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
