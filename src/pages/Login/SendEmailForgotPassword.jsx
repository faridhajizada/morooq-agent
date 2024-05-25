import { useState } from "react";
import { useSendEmailForgotPasswordMutation } from "./../../api/authApi";
import s from "./SendEmailForgotPassword.module.scss";
import { useNavigate } from "react-router-dom";

function SendEmailForgotPassword() {
  const [sendEmailForgotPassword] = useSendEmailForgotPasswordMutation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log("email:", email);
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await sendEmailForgotPassword({ Email: email }).unwrap();
      console.log("Response:", response);
      navigate("/valid-reset-password", { state: { email } });

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
          <p>enter email you have registered</p>
          <form onSubmit={handleSendEmail}>
            <div className={s.formGroup}>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default SendEmailForgotPassword;
