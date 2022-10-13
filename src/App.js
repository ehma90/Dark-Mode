import useLocalStorage from "use-local-storage";
import "./index.css";
import {
  FaGoogle,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaApple,
  FaToggleOn,
} from "react-icons/fa";

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
    <>
      <div className="app" data-theme={theme}>
        <div className="container">
          <div className="login">
            <h1>Login</h1>
            <div className="top">
              <FaGoogle className="icons"/>
              <FaFacebookSquare className="icons"/>
              <FaLinkedin className="icons"/>
              <FaTwitterSquare className="icons"/>
              <FaApple className="icons"/>
            </div>

            <p className="divider">
              <span>Or</span>
            </p>

            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
              <div className="remember">
                <input type="checkbox" checked="checked" />
                <p>Remember Me</p>
              </div>
              <button>Log In</button>
            </form>

            <div className="bottom">
              <p>Forget your password</p>
              <a href="/">Reset Password</a>
            </div>

            <p className="create">Create Account</p>
          </div>
        </div>

        <div className="theme-toggle ">
            <h2>Light Theme</h2>
            <FaToggleOn className="toggle" onClick={switchTheme}/>
          </div>
      </div>
    </>
  );
}

export default App;
