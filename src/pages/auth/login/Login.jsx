import React, { useState, useEffect } from "react";
import gStyle from "../../../assets/css/general.module.css";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../../../redux/action/user";

const Login = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert('your session is active')
      return navigate("/chat-list");
    }
  }, []);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const stateUser = useSelector((state) => {
    return state.user;
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const handleSuccess = (data) => {
      if (data.code === 500) {
        alert("user not found, don't have account ?  click on sign-up");
        console.log(stateUser);
      } else {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("data", JSON.stringify(data.data.data));
        alert("login success");
        console.log(stateUser);
        return navigate("/chat-list");
      }
    };

    const body = {
      email: form.email,
      password: form.password,
    };

    dispatch(UserLogin(body, handleSuccess));
  };
  return (
    <>
      <div
        className={`vw-100 vh-100 d-flex justify-content-center align-items-center ${gStyle["bg-white-abu"]}`}
      >
        <div
          className={`card-container ${gStyle["bg-white"]} d-flex flex-column`}
        >
          <div className="title mt-5 mb-3 text-center">
            <p className={`${gStyle["text-blue"]} ${gStyle["rubik-bold"]} h5`}>
              Login
            </p>
          </div>
          <div className="desc-title ms-5 mb-3">
            <p className={`${gStyle["rubik-regular"]} text-muted`}>
              {" "}
              Hi, welcome back!
            </p>
          </div>
          <div className={`form-container mx-5 mb-3`}>
            <form className="form-login" onSubmit={(e) => onSubmitHandler(e)}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className={`form-label ${gStyle["rubik-regular"]}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="telegram@mail.com"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <div className="line-black mx-2"></div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className={`form-label ${gStyle["rubik-regular"]}`}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="********"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div className="line-black mx-2"></div>
              </div>
              <div className="forgot-password text-end">
                <Link to="/forgot-password" className="text-decoration-none">
                  <p
                    className={`${gStyle["rubik-regular"]} ${gStyle["text-blue"]}`}
                  >
                    Forgot password?
                  </p>
                </Link>
              </div>
              <div className="button-wrap w-100 mb-3">
                <button
                  type="submit"
                  className={`button-blue ${gStyle["rubik-semi-bold"]} w-100 text-white`}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="login-with-wrapper row w-100 ms-1 mb-3">
              <div className="col-4 col-sm-2 col-md-1 col-lg-4 col-xl-4 col-xxl-4 line-black mt-3"></div>
              <div className="col-4 col-sm-8 col-md-10 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center mt-1">
                <p className={`${gStyle["rubik-light"]} `}>Login With</p>
              </div>
              <div className="col-4 col-sm-2 col-md-1 col-lg-4 col-xl-4 col-xxl-4 line-black mt-3"></div>
            </div>
            <div className={"google-btn wrapper mb-3"}>
              <button
                type="submit"
                className={`button-white  ${gStyle["rubik-semi-bold"]} w-100 d-flex justify-content-center align-items-center gap-2 btn-blue-app`}
              >
                <div className="icon-google">
                  <i className="bi bi-google"></i>
                </div>
                <div className={`text ${gStyle["rubik-semi-bold"]}`}>
                  Google
                </div>
              </button>
            </div>
            <div className="sign-up-wrapper d-flex justify-content-center align-items-center">
              <p className={`text ${gStyle["rubik-regular"]}`}>
                Don't have an account?{" "}
                <span>
                  <Link
                    to="/register"
                    className={`text-decoration-none ${gStyle["text-blue"]}`}
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
