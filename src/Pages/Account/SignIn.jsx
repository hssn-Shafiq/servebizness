import "./login.css"
export const SignIn = () => {
  return (
    <>
      <main>
        <div className="wrapper">
          <form action="#">
            <h2>Sign In</h2>
            <div className="input-field">
              <input type="text" required="" />
              <label>Enter your Email</label>
            </div>
            <div className="input-field">
              <input type="password" required="" />
              <label>Enter your Password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Sign In</button>
            <div className="register">
              <p>
                Don't have an account? &nbsp; &nbsp;
                <a href="/signup">
                  <b>Sign Up</b>
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
