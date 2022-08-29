import { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import signUp from "../../../assets/images/signup.png";
import axios from "axios";
import { useAuth } from "../../../Hooks/useAuth";

export const SignIn = () => {
  const emailVal = useRef();
  const passwordVal = useRef();
  const { setToken } = useAuth();

  const navigate=useNavigate();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("https://book-service-layer.herokuapp.com/user/login", {
        email: emailVal.current.value,
        password: passwordVal.current.value,
      })
      .then(function (response) {
        setToken(response.data.token);
        navigate("/")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="signup-wrapper poppins">
      <img src={signUp} alt="Sign Up " className="signup-img" />
      <div className="form-box">
        <h2 className="signup-title">Sign in</h2>
        <span className="signup-secondary">
          Already have an account? <Link to={"/"}>Sign up</Link>
        </span>
        <form onSubmit={handleFormSubmit}>
          <input
            ref={emailVal}
            type="email"
            placeholder="Email"
            className="form-input"
          />
          <input
            ref={passwordVal}
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <button className="signup-btn" type="submit">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
};
