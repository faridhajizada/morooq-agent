import { useState } from "react";
import s from "./Login.module.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <main className={s.loginPage}>
      <section className={s.loginContainer}>
        <div className={s.loginForm}>
          <div className={s.headerButton}>
            <button
              onClick={() => setIsSignIn(true)}
              className={isSignIn ? s.active : ""}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={!isSignIn ? s.active : ""}
            >
              Sign Up
            </button>
          </div>
          {isSignIn ? <SignIn /> : <SignUp />}
        </div>
      </section>
    </main>
  );
}

export default Login;
