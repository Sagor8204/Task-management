import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextAPI from "./contexts/AuthContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks from "./components/Tasks/Tasks.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import Analytics from "./components/Analytics/Analytics.jsx";
import Settings from "./components/Settings/Settings.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import Profile from "./components/Profile/Profile.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/project/details/:title",
        element: <ProjectDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ContextAPI>
  </StrictMode>
);
