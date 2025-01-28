import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import AuthLayout from "./pages/Auth/AuthLayout";
import PageLayout from "./pages/PageLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employees/Employees";
import Cameras from "./pages/Cameras/Cameras";
import Accidents from "./pages/Accidents/Accidents";
import LoginForm from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import ResetPasswordContact from "./components/Auth/ResetPasswordContact";
import AlertChannels from "./pages/AlertChannels/AlertChannels";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={"login"} element={<LoginForm />} />
          <Route path={"reset-password"} element={<ResetPassword />} />
          <Route path={"contact-validation"} element={<ResetPasswordContact />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/accidents" element={<Accidents />} />
          <Route path="/alert-channels" element={<AlertChannels />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
