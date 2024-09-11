import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Root";
import HomePage from "./pages/Home/Home";
import EventDetailsPage from "./pages/EventDetails/EventDetails";
import HostingPage from "./pages/Hosting/Hosting";
import ProfilePage from "./pages/Profile/Profile";
import ErrorPage from "./pages/Error/ErrorPage";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events/", element: <HomePage /> },
      { path: "events/:eventId", element: <EventDetailsPage /> },
      { path: "events/hosting", element: <HostingPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
