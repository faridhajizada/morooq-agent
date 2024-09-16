import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRouter from "./HOC/PrivateRouter";
import Login from "./pages/Login/Login";
// import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
// import Agent from "./pages/Agent/Agent";
// import SendEmailForgotPassword from "./pages/Login/SendEmailForgotPassword";
// import ValidResetPassword from "./pages/Login/ValidResetPassword";
// import ChangeForgotPassword from "./pages/Login/ChangeForgotPassword";
import React, { lazy, Suspense } from "react";

const SendEmailForgotPassword = lazy(() =>
  import("./pages/Login/SendEmailForgotPassword")
);

const ValidResetPassword = lazy(() =>
  import("./pages/Login/ValidResetPassword")
);

const ChangeForgotPassword = lazy(() =>
  import("./pages/Login/ChangeForgotPassword")
);

const Agent = lazy(() => import("./pages/Agent/Agent"));

const NotFoundPage = lazy(() =>
  import("./components/NotFoundPage/NotFoundPage")
);

const PaymentStatus = lazy(() =>
  import("./components/Agent/StripeAcquisition/PaymentStatus")
);
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agent/status" element={<PaymentStatus />} />
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
          path={`/agent/*`}
          element={
            <PrivateRouter>
              <Agent />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
