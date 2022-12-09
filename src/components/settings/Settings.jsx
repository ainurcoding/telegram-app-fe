import React, { useEffect, useState, useRef } from "react";
import gStyle from "../../assets/css/general.module.css";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import avaDefault from "../../assets/images/ava_default.png"

const Settings = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const hiddenFileInput = useRef(null);
  const [avatar, setAvatar] = useState("");
  const [dataUser, setDataUser] = useState([]);

  const url = process.env.REACT_APP_BACKEND_URL;

  const dataLogin = JSON.parse(localStorage.getItem("data"));
  // console.log(dataLogin.id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/user/${dataLogin.id}`)
      .then((res) => {
        // console.log(res.data.rows)
        setDataUser(res.data.rows);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const changeHandle = (e) => {
    const fileUploaded = e.target.files[0];
    document.getElementById("photoBtn").innerHTML = fileUploaded.name;
    setAvatar(fileUploaded);
  };

  const avatarUpdate = (e) => {
    const fileUploaded = e.target.files[0];
    document.getElementById("formFIle").innerHTML = fileUploaded.name;
    setAvatar(fileUploaded);
  };

  const avaHandle = (e) => {
    console.log(avatar);
    e.preventDefault();
    let formData = new FormData(e.target);
    formData.append("avatar", avatar);
    postHandle(Object.fromEntries(formData));
  };

  const postHandle = (form) => {
    console.log(avatar);
    axios
      .put(`${url}/user/update_ava_cloudinary/${dataLogin.id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if(res.data.status == 'success') {
          alert("Avatar has been updated");
        setAvatar("");
        window.location.reload();
        navigate(`/chat-list`);
        } else {
          alert('update photo profile fail')
        }
        
      })
      .catch((err) => {
        console.log(avatar);
        console.log(err);
        // alert("failed to update avatar");
      });
  };

  

  // form data update

  const [formUser, setFormUser] = useState({
    full_name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value,
    });
  };

  const formDataHandler = (e) => {
    e.preventDefault();
    console.log(formUser);
    const body = {
      full_name: formUser.full_name,
      phone: formUser.phone,
    };
    console.log(body);
    axios
      .put(`${url}/update_data_user/${dataLogin.id}`, body)
      .then((res) => {
        console.log(res.data);
        alert("data update success");
        window.location.reload();
        navigate(`/chat-list`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete accont 
  const deleteAccount = () => {
    
    axios
     .delete(`${url}/delete_user/${dataLogin.id}`)
    .then((res) => {
      alert('success delete data')
      console.log(res)
      localStorage.clear();
      navigate("/");
    }).catch((err) => {
      console.log(err)
    })
  }
  if (isLoading) {
    return (
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <p className={`${gStyle["rubik-bold"]} custom-tittle-head`}>
          Loading..
        </p>
      </div>
    );
  }
  return (
    <div className="setting-wrapper w-100">
      <div className="title-head w-100 d-flex justify-content-center align-items-center">
        <p className={`${gStyle["rubik-bold"]} mt-3 h1 custom-title-head`}>
          Settings
        </p>
      </div>
      <div className="ava-update">
        <div className="title-ava-update">
          <p className={`${gStyle["rubik-bold"]} h2 custom-title-head`}>
            Update Ava
          </p>
        </div>
        <div className="form-update-ava-wrapper">
          {dataUser.map((item, index) => (
            item.avatar ? (<div className="mx-3 mb-3 mt-3 text-center" key={index}>
            <img
              src={item.ava_url}
              alt={item.ava_url || "avatar"}
              style={{ width: "250px", height: "250px", borderRadius: "15%" }}
            />
          </div>) : (<div className="mx-3 mb-3 mt-3 text-center" key={index}>
              <img
                src={avaDefault}
                alt={item.ava_url || "avatar"}
                style={{ width: "250px", height: "250px", borderRadius: "15%" }}
              />
            </div>)
            
          ))}
          <form onSubmit={avaHandle}>
            <div className="input">
              <input
                type="file"
                id="formFIle"
                name="avatar"
                ref={hiddenFileInput}
                onChange={avatarUpdate}
              />
            </div>
            <div>
              <label
                htmlFor="avatar"
                name="avatar"
                id="photoBtn"
                className={`${gStyle["rubik-regular"]} custom-title-head`}
                onClick={handleClick}
              >
                Edit Avatar
              </label>
            </div>
            <div className="button">
              <button
                type="submit"
                className={`custom-button-setting ${gStyle["rubik-bold"]} mt-3 mb-3`}
                style={{ width: "250px" }}
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="break-line"></div>
      <div className="update-info-user">
        <div className="title-ava-update mb-3 mt-3">
          <p className={`${gStyle["rubik-bold"]} h2 custom-title-head`}>
            Update Info
          </p>
        </div>
        {dataUser.map((item, index) => (
          <form onSubmit={(e) => formDataHandler(e)}>
            <div className="mb-3">
              <label htmlFor="full_name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                aria-describedby="emailHelp"
                placeholder="your full name"
                name="full_name"
                defaultValue={item.full_name}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htlmFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="your number phone"
                name="phone"
                defaultValue={
                  typeof item.phone !== "string" ? null : item.phone
                }
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={`custom-button-setting ${gStyle["rubik-bold"]} mt-3 mb-3`}
              style={{ width: "250px" }}
            >
              save
            </button>
          </form>
        ))}
      </div>
      <div className="break-line"></div>
      <div className="delete-account row">
        <div className="col-4 title-ava-update mb-3 mt-3">
          <p className={`${gStyle["rubik-bold"]} h2 custom-title-danger`}>
            Delete Account !
          </p>
        </div>
        <div className="col-8 mt-4 mb-3">
        <button type="button" className={`h4 custom-button-delete ${gStyle["rubik-bold"]}`}
              style={{ width: "250px" }} onClick={
            () => {
              const confirmBox = window.confirm("are u sure to delete your account ?")

              if(confirmBox === true) {
                deleteAccount()
              }
            }
          }
          >
            Delete Account
            </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
