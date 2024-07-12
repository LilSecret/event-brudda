import { Route, Routes } from "react-router-dom";
import HostAnEvent from "./pages/HostAnEvent/HostAnEvent";
import HomePage from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import NotFound from "./pages/NotFound/NotFound";
import User from "./pages/User/User";
import Profile from "./pages/Profile/Profile";
import ContactUs from "./pages/Contact/ContactUs";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events">
        <Route index element={<HomePage />} />
        <Route path=":id" element={<Event />} />
        <Route path="host-an-event" element={<HostAnEvent />} />
      </Route>
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
