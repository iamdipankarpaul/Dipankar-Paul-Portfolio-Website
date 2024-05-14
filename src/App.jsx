import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// layout
import AppLayout from "./layout/AppLayout";

// pages
import ReadmePage from "./pages/ReadmePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// theme styles
import theme, { variableResolver } from "./theme.js";

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
        path: "projects/:slug",
        element: <ProjectPage />,
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
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      cssVariablesResolver={variableResolver}
    >
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </MantineProvider>
  );
}

export default App;
