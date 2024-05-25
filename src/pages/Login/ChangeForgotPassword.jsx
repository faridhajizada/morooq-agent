import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useChangeForgotPasswordMutation } from "../../api/authApi";
import s from "./SendEmailForgotPassword.module.scss";

function ChangeForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [changeForgotPassword] = useChangeForgotPasswordMutation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [code, setCode] = useState( location.state?.code || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const changePasswordDto = {
      Email: email,
      Code: code,
      NewPassword: newPassword,
      ConfirmPassword: confirmPassword,
    };

    console.log("email" + email, "code" + code, newPassword, confirmPassword);

    try {
      const response = await changeForgotPassword(changePasswordDto).unwrap();
      console.log("Response:", response);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message);
      console.error("Error status:", error.status);

      const status = error.status || error.originalStatus;

      if (status === 404) {
        setError("User not found.");
      } else if (status === 400) {
        setError("Invalid input data.");
      } else {
        setError("Error changing password. Please try again later.");
      }
    }
  };

  return (
    <main>
      <section className={s.loginContainer}>
        <div className={s.loginForm}>
          <p>Change Forgotten Password</p>
          {error && <div className={s.error}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className={s.formGroup}>
              <label htmlFor="email"></label>
              <input type="hidden" value={email} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="code"></label>
              <input type="hidden" value={code} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="newPassword"></label>
              <input
                type="password"
                id="newPassword"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
        
              />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="confirmPassword"></label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <button type="submit">Change Password</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ChangeForgotPassword;
