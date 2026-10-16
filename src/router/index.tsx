import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Home />,
    },
    // Add more routes here as needed
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
