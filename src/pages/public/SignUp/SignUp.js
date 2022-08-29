import axios from "axios";
import { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import signUp from "../../../assets/images/signup.png";
import "./SignUp.scss";
import { useAuth } from "../../../Hooks/useAuth";

export const SignUp = () => {
  const nameVal = useRef();
  const lastNameVal = useRef();
  const phoneVal = useRef();
  const emailVal = useRef();
  const passwordVal = useRef();

  const navigate =useNavigate()

  const { token, setToken } = useAuth();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("https://book-service-layer.herokuapp.com/user/register", {
        first_name: nameVal.current.value,
        last_name: lastNameVal.current.value,
        phone: phoneVal.current.value,
        email: emailVal.current.value,
        password: passwordVal.current.value,
      })
      .then(function (response) {
        setToken(response.data.token);
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="signup-wrapper poppins">
        <img src={signUp} alt="Sign Up image" className="signup-img" />
        <div className="form-box">
          <h2 className="signup-title">Sign Up</h2>
          <span className="signup-secondary">
            Already have an account? <Link to={"/sign-in"}>Sign in</Link>
          </span>

          <form onSubmit={handleFormSubmit}>
            <input
              ref={nameVal}
              type="text"
              placeholder="First name"
              className="form-input"
              required
            />
            <input
              ref={lastNameVal}
              type="text"
              placeholder="Last name"
              className="form-input"
              required
            />
            <input
              ref={phoneVal}
              type="text"
              placeholder="Phone"
              className="form-input"
              required
            />
            <input
              ref={emailVal}
              type="email"
              placeholder="Email"
              className="form-input"
              required
            />
            <input
              ref={passwordVal}
              type="password"
              placeholder="Password"
              className="form-input"
              required
            />
            <button className="signup-btn" type="submit">
              Next step
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
