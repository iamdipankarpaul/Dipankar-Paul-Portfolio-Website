import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import AppLayout from "./layout/AppLayout";

// pages
import ReadmePage from "./pages/readme/ReadmePage.jsx";
import ProjectsPage from "./pages/projects/ProjectsPage.jsx";
import BlogsPage from "./pages/blogs/BlogsPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";

//
import theme from "./theme.js";

// router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <ReadmePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
        <h3>Page Note Found.</h3>
      </div>
    ),
  },
]);

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
