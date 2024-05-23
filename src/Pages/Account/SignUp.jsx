import "./login.css";

export const SignUp = () => {
  return (
    <>
      <main>
        <div className="signin">
          <div className="signin_logo">
            <a href="/">
              {" "}
              <img src="/images/Serve Biznes logo png.png" width={100} alt="" />
            </a>
          </div>
          <div className="wrapper">
            <form action="#">
              <h2>Create an Account</h2>
              <div className="input-field">
                <input type="text" required="" />
                <label>Enter your Name</label>
              </div>
              <div className="input-field">
                <input type="text" required="" />
                <label>Enter your Email</label>
              </div>
              <div className="input-field">
                <input type="password" required="" />
                <label>Enter your Password</label>
              </div>
              <div className="input-field">
                <input type="password" required="" />
                <label htmlFor="">Confirm Password</label>
              </div>
              <div className="forget">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  <p>I agree with terms and conditions</p>
                </label>
              </div>
              <button className="mt-4" type="submit">
                Sign Up
              </button>
              <div className="register">
                <p>
                  already have an account?{" "}
                  <a href="/signin">
                    <b>Sign In</b>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
