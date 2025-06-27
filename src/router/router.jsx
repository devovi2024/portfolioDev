// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import BlogPostDetails from "../pages/BlogDetails";

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
      },
      {
        path: '/service', element: <Services/>
      },
      {
        path: '/blogs', element: <Blogs/>
      },
      { path: '/blogs/:id', element: <BlogPostDetails/> }
    ],
  },
]);

export default router;
