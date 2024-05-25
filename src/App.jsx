import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRouter from "./HOC/PrivateRouter";
import Login from "./pages/Login/Login";
// import StudentTable from './pages/StudentTable/StudentTable';
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SendEmailForgotPassword from "./pages/Login/SendEmailForgotPassword";
import ValidResetPassword from "./pages/Login/ValidResetPassword";
import ChangeForgotPassword from "./pages/Login/ChangeForgotPassword";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<StudentTable />} /> */}
        <Route path="/" element={<Login />} />
        <Route
          path="/send-email-forgot-password"
          element={<SendEmailForgotPassword />}
        />
        <Route path="/valid-reset-password" element={<ValidResetPassword />} />
        <Route
          path="/change-forgot-password"
          element={<ChangeForgotPassword />}
        />

        <Route
          path={`/dashboard/*`}
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
