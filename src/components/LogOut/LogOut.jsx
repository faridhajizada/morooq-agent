import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../../redux/features/auth/authSlice";
import Cookies from "js-cookie";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("AccessToken");
    navigate("/");
  };

  return (
    <button
      style={{
        color: "white",
        backgroundColor: "black",
        fontSize: "1rem",
        fontWeight: "400",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleLogout}
    >
      Sing out
    </button>
  );
}

export default LogoutButton;
