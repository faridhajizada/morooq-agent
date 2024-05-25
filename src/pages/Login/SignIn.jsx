import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "./../../api/authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "./../../redux/features/auth/authSlice";
import s from "./Login.module.scss";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";

function SignIn() {
  const [loginUser] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ Email: email, Password: password });
      const { AccessToken } = response.data;

      Cookies.set("AccessToken", AccessToken);

      dispatch(setAuth({ AccessToken }));

      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Error logging in, please try again later");
      }
    }
  };

  return (
    <div>
      <div className={s.signIn}>
        <div className={s.form}>
          {error && <div className={s.error}>{error}</div>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>SIGN IN</button>
        </div>
        <div className={s.bottomLogin}>
          <p className={s.forgotPass}>
            <a href="/send-email-forgot-password"> Forgot password</a>
          </p>
          <p className={s.or}>or</p>
          <div className={s.googleIcon}>
            <div className={s.googleIconBorder}>
              <FontAwesomeIcon icon={faGoogle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
