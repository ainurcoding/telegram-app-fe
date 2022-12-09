import React, {useState} from "react";
import gStyle from "../../../assets/css/general.module.css";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { userRegister } from "../../../redux/action/user";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    password2: "",
  })

  const stateUser = useSelector((state) => {
    return state.user
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
      if (form.password !== form.password2) {
        alert("passwords must be the same")
        console.log(stateUser)
      } else {
        console.log(stateUser)
        alert("Register Success")
        console.log(stateUser)
        return navigate("/")
      }
    };

    const body = {
      full_name: form.full_name,
      email: form.email,
      password: form.password
    }

    dispatch(userRegister(body, handleSuccess))
    
  }
  return (
    <>
      <div
        className={`vw-100 vh-100 d-flex justify-content-center align-items-center ${gStyle["bg-white-abu"]}`}
      >
        <div
          className={`card-container ${gStyle["bg-white"]} d-flex flex-column`}
        >
          <div className="title mt-5 mb-3 text-center row">
            <div className="col-5">
              <div className={`icon w-100`}>
                <Link to="/" className="text-decoration-none">
                  <i
                    className={`${gStyle["text-blue"]} bi bi-chevron-left`}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="text-start col-6">
              <div className="w-100">
                <p
                  className={`${gStyle["text-blue"]} ${gStyle["rubik-bold"]} h5  `}
                >
                  Register
                </p>
              </div>
            </div>
          </div>
          <div className="desc-title ms-5 mb-3">
            <p className={`${gStyle["rubik-regular"]} text-muted`}>
              Let's create your account!
            </p>
          </div>
          <div className={`form-container mx-5 mb-3`}>
            <form className="form-login" onSubmit={(e) => onSubmitHandler(e)}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className={`form-label ${gStyle["rubik-regular"]}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Telegram App"
                  name="full_name"
                  onChange={handleChange}
                  required
                />
                <div className="line-black mx-2"></div>
              </div>
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
                  placeholder="*******"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div className="line-black mx-2"></div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password2"
                  className={`form-label ${gStyle["rubik-regular"]}`}
                >
                  Re Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  placeholder="*******"
                  name="password2"
                  onChange={handleChange}
                  required
                />
                <div className="line-black mx-2"></div>
              </div>
              <div className="button-wrap w-100 mb-3">
                <button
                  type="submit"
                  className={`button-blue ${gStyle["rubik-semi-bold"]} w-100 text-white`}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="login-with-wrapper row w-100 ms-1 mb-3">
              <div className="col-4 col-sm-2 col-md-1 col-lg-4 col-xl-4 col-xxl-4 line-black mt-3"></div>
              <div className="col-4 col-sm-8 col-md-10 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center mt-1">
                <p className={`${gStyle["rubik-light"]} `}>Register With</p>
              </div>
              <div className="col-4 col-sm-2 col-md-1 col-lg-4 col-xl-4 col-xxl-4 line-black mt-3"></div>
            </div>
            <div className={"google-btn wrapper mb-3"}>
              <button
                type="submit"
                className={`button-white  ${gStyle["rubik-semi-bold"]} w-100 d-flex justify-content-center align-items-center gap-2 btn-blue-app`}
              >
                <div className="icon-google">
                  <i classame={`${gStyle["text-blue"]} bi bi-google`}></i>
                </div>
                <div className={`text ${gStyle["rubik-semi-bold"]}`}>
                  Google
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
