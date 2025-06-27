// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: 'skills', element: <Skills/>
      },
      {
        path: '/projects', element: <Projects/>
      }
    ],
  },
]);

export default router;
