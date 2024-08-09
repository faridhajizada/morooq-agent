import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../../redux/features/auth/authSlice";
import Cookies from "js-cookie";
import "./Logout.scss";

const Logout = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    try {
      const allCookies = Cookies.get();

      Object.keys(allCookies).forEach((cookieName) => {
        Cookies.remove(cookieName, { path: "" });
        Cookies.remove(cookieName, { path: "/", domain: "localhost" });
      });

      dispatch(logout());

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error("Ошибка при попытке выхода из системы:", error);
    }
  }, [dispatch, navigate]);

  return (
    <button className="logout-button" onClick={handleLogout}>
      Sign out
    </button>
  );
});

export default Logout;
