import s from "./SendEmailForgotPassword.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useValidateResetPasswordMutation } from "./../../api/authApi";
import { useState } from "react";

function ValidResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sendEmailForgotPassword] = useValidateResetPasswordMutation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  const handleConfirmCode = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Отправляем запрос на сервер для подтверждения кода
      const response = await sendEmailForgotPassword({
        Email: email,
        Code: code,
      }).unwrap();

      console.log("Response:", response);

      // Переходим на маршрут '/change-forgot-password'
      navigate("/change-forgot-password", { state: { email, code } });

      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
      const status = error.status || error.originalStatus;

      if (status === 404) {
        setError("User not found.");
      } else if (status === 400) {
        setError("Invalid email.");
      } else {
        setError("Error sending email. Please try again later.");
      }
    }
  };
  return (
    <main>
      <section className={s.loginContainer}>
        <div className={s.loginForm}>
          <p>enter code we have sent your email</p>

          <form onSubmit={handleConfirmCode}>
            <div className={s.formGroup}>
              <label htmlFor="email"></label>
              <input type="hidden" value={email} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="code"></label>
              <input
                type="text"
                id="code"
                placeholder="Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit">Send</button>
            <br />
            {error && <div className={s.error}>{error}</div>}
          </form>
        </div>
      </section>
    </main>
  );
}

export default ValidResetPassword;
