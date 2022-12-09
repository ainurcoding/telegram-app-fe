import React from "react";
import gStyle from "../../../assets/css/general.module.css";
import "./style.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div
        className={`vw-100 vh-100 d-flex justify-content-center align-items-center ${gStyle["bg-white-abu"]}`}
      >
        <div
          className={`card-container ${gStyle["bg-white"]} d-flex flex-column`}
        >
          <div className="title mt-5 mb-3 text-center row">
            <div className="col-4">
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
                  Forgot Password
                </p>
              </div>
            </div>
          </div>
          <div className="desc-title ms-5 mb-3">
            <p className={`${gStyle["rubik-regular"]} text-muted`}>
              You'll get messages soon on your e-mail
            </p>
          </div>
          <div className={`form-container mx-5 mb-3`}>
            <form className="form-login">
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
                />
                <div className="line-black mx-2"></div>
              </div>
              
              <div className="button-wrap w-100 mb-3">
                <button
                  type="submit"
                  className={`button-blue ${gStyle["rubik-semi-bold"]} w-100 text-white`}
                >
                  send
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
