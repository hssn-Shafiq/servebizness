import "./login.css"
export const SignIn = () => {
  return (
    <>
      <main>
        <div className="signin">
          <div className="signin_logo">
       <a href="/"> <img src="/images/Serve Biznes logo png.png" width={100} alt="" /></a>
          </div>
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
              <a href="#" className="text-primary">Forgot password?</a>
            </div>
            <button type="submit" className="mt-4">Sign In</button>
            <div className="register">
              <p>
                Don't have an account?{" "}
                <a href="/signup">
                  <b>Sign Up</b>
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
