import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import gStyle from "../../../assets/css/general.module.css";
import "./style.css";
import hambMenu from "../../../assets/images/hamburger menu.png";
import gloriaMcKinney from "../../../assets/images/Gloria Mckinney.png";
import coolCar from "../../../assets/images/cool-car.png";
import theresaWebb from "../../../assets/images/Theresa Webb.png";
import calvinFlores from "../../../assets/images/calvin flores.png";
import avaDefault from "../../../assets/images/ava_default.png";
import { json, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// components
import Settings from "../../../components/settings/Settings";

const ChatList = () => {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_BACKEND_URL;
  const [socketio, setSocketIo] = useState(null);
  const [listchat, setListchat] = useState([]);

  useEffect(() => {
    const socket = io(url);
    socket.on("send-message-response", (response) => {
      // set receiver
      const receiver = JSON.parse(localStorage.getItem("receiver"));
      // return console.log("response",response[0])
      // return console.log("receiver",receiver);
      if (
        receiver.email === response[0].sender ||
        receiver.email === response[0].receiver
      ) {
        setListchat(response);
      }
    });
    setSocketIo(socket);
  }, []);

  const [message, setMessage] = useState();

  const onSubmitMessage = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("data"));
    const receiver = JSON.parse(localStorage.getItem("receiver"));
    console.log(user.email);
    const payload = {
      sender: user.email,
      receiver: receiver.email,
      message,
    };

    setListchat([...listchat, payload]);

    const data = {
      sender: user.id,
      receiver: activeReceiver.id,
      message,
    };

    socketio.emit("send-message", data);

    setMessage("");
  };

  const [listUser, setListUser] = useState([]);
  const [login, setLogin] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      alert('please login or signup first!');
      navigate('/')
    }
    const user = JSON.parse(localStorage.getItem("data"));
    // console.log(user)
    setLogin(user);
    axios
      .get(`${url}/user`)
      .then((response) => {
        setListUser(response.data.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [activeReceiver, setActiveReceiver] = useState({});
  const selectReceiver = (item) => {
    //TAMBAHAN MERESET CHAT
    setListchat([]);
    setActiveReceiver(item);
    setShowSetting(false);
    // set RECEIVER
    localStorage.setItem("receiver", JSON.stringify(item));
    socketio.emit("join-room", login);

    const data = {
      sender: login.id,
      receiver: item.id,
    };

    socketio.emit("chat-history", data);
  };

  const closeReceiver = () => {
    setActiveReceiver({});
    localStorage.removeItem("receiver");
  };

  // set show setting
  const [showSetting, setShowSetting] = useState(false);

  const settingHandle = () => {
    setShowSetting(true);
  };
  const closeSettingHandle = () => {
    setShowSetting(false);
  };

  const logout = () => {
    localStorage.clear();
    return navigate("/")
    
  }

  return (
    <>
      <div className="vw-100 vh-100 row">
        <div
          className="col-4 col-xs-12  d-flex flex-column overflow-auto"
          style={{ height: "100vh" }}
        >
          <div className="title-head row w-100 mb-5">
            <div className="app-name col-8 text-start mt-4">
              <p
                className={`ms-4 ${gStyle["rubik-semi-bold"]} ${gStyle["text-blue"]} h4`}
              >
                Telegram
              </p>
            </div>
            <div className="app-name col-4 text-start mt-4 text-end">
              <div className="dropdown">
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={hambMenu}
                    className="hamb-menu-size"
                    alt="ava"
                    widht="25"
                    height="25"
                  />
                </button>
                <ul
                  className="dropdown-menu blue-bg"
                  style={{ height: "max-content", width: "400px" }}
                >
                  <li>
                    <button
                      type="button"
                      className="btn"
                      onClick={settingHandle}
                    >
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-gear-fill"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Settings
                          </p>
                        </div>
                      </div>
                    </button>

                    <button type="button" className="btn">
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-person-lines-fill"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Contacts
                          </p>
                        </div>
                      </div>
                    </button>
                    <br />
                    <button type="button" className="btn">
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-telephone"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Calls
                          </p>
                        </div>
                      </div>
                    </button>

                    <button type="button" className="btn">
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-bookmark"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Save Messages
                          </p>
                        </div>
                      </div>
                    </button>

                    <button type="button" className="btn">
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-person-plus"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Invite Friends
                          </p>
                        </div>
                      </div>
                    </button>

                    <button type="button" className="btn">
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-question-circle"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Telegram FAQ
                          </p>
                        </div>
                      </div>
                    </button>
                    <button type="button" className="btn" onClick={logout}>
                      <div
                        className="wrapper-item dropdown-item d-flex gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="icon-setting">
                          <i className="custom-icon-dropdown bi bi-door-closed-fill"></i>
                        </div>
                        <div className="desc">
                          <p
                            className={`${gStyle["rubik-regular"]} text-white h3 mt-2`}
                          >
                            Sign-Out
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="profile-section w-100 d-flex flex-column justify-content-center align-items-center mb-5">
            <div className="mb-3">
              {/* <img src={`https://th.bing.com/th/id/OIP.EZbCDLhugsUfbpEWktI7bQHaE3?pid=ImgDet&rs=1`} alt="ava" width='150' heigth='150' style={{borderRadius:'15%'}} /> */}
              {listUser.map((item, index) =>
                item.email === login.email ? (
                  item.avatar != null ? (
                    <div key={index}>
                      <img
                        src={`${item.ava_url}`}
                        alt="avatar"
                        style={{
                          borderRadius: "15%",
                          widht: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={avaDefault}
                        alt="avatar"
                        style={{
                          borderRadius: "15%",
                          widht: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                      />
                      
                    </>
                  )
                ) : (
                  <>{null}</>
                )
              )}
            </div>
            {listUser.map((item, index) =>
              item.email === login.email ? (
                <div key={index}>
                  <div className="mb-3">
                    <p className={`h5 ${gStyle["rubik-medium"]}`}>
                      {item.full_name}
                    </p>
                  </div>
                  <div className="mb-3 text-center">
                    <p className={`${gStyle["rubik-regular"]}`}>
                      @<span>{item.phone || 'phone not found'}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <div className="last-call-section row mx-3 mb-4">
            <div className="col-5 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-col-xl-5 col-xxl-5 d-flex flex-column justify-content-center align-items-center mb-3 white-bg">
              <div className="img-wrap mt-2">
                <img src={theresaWebb} alt="avatar" width="75" height="75" />
              </div>
              <div className="contact-name">
                <p className={`${gStyle["rubik-regular"]}`}>Theresa Webb</p>
              </div>
              <div className="time-desc">
                <p className={`${gStyle["rubik-light"]}`}>2 mins ago</p>
              </div>
              <div>icon</div>
            </div>
            <div className="col-2"></div>
            <div className="col-5 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-col-xl-5 col-xxl-5 d-flex flex-column justify-content-center align-items-center mb-3 white-bg">
              <div className="img-wrap mt-2">
                <img src={calvinFlores} alt="ava" width="75" height="75" />
              </div>
              <div className="contact-name">
                <p className={`${gStyle["rubik-regular"]}`}>Calvin Flores</p>
              </div>
              <div className="time-desc">
                <p className={`${gStyle["rubik-light"]}`}>2 mins ago</p>
              </div>
              <div>icon</div>
            </div>
          </div>
          <div className="form-search mb-3">
            <form className="row mx-3 form-custom">
              <div className="icon-1 col-2 pt-2 pb-2 d-flex justify-content-center align-items-center">
                <i className="text-blue bi bi-search"></i>
              </div>
              <div className="input-wrapper col-8 pt-2 pb-2">
                <input
                  type="text"
                  name="search"
                  className="custom-input m-3 w-75"
                  placeholder="type your message..."
                />
              </div>
              <div className="icon-2 col-2 pt-2 pb-2 d-flex justify-content-center align-items-center">
                <button type="submit" className="btn">
                  <i
                    className="custom-icon bi bi-plus"
                    style={{ fontSize: "40px" }}
                  ></i>
                </button>
              </div>
            </form>
          </div>
          <div className="list-chat">
            {listUser.map((item, index) =>
              login.email === item.email ? (
                <></>
              ) : (
                <>
                  <div
                    key={index}
                    className="mx-3 person-wrapper row mt-3 mb-3"
                  >
                    <div className="col-4 col-xs-12">
                      <div className="image-wrapp d-flex justify-content-center align-items-center">
                        {/* {console.log(item.avatar)} */}
                        {item.avatar != null ? (
                          <>
                            <img
                              src={`${item.ava_url}`}
                              alt="ava"
                              style={{
                                borderRadius: "15%",
                                widht: "70px",
                                height: "70px",
                                objectFit: "contain",
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <img
                              src={avaDefault}
                              alt="ava"
                              style={{
                                borderRadius: "15%",
                                widht: "70px",
                                height: "70px",
                                objectFit: "contain",
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="col-6 col-xs-12">
                      <div className=" info-kontak-wrapper d-flex flex-column justify-content-center align-items-center">
                        <div className=" name_info_wrapper d-flex gap-2 justify-content-center align-items-center">
                          <button
                            onClick={() => selectReceiver(item)}
                            className="btn"
                          >
                            <div className="info">
                              <p className={`${gStyle["rubik-bold"]}`}>
                                {item.full_name}
                              </p>
                            </div>
                          </button>

                          <div className="icon-notif">
                            <i className="custom-icon bi bi-pin"></i>
                          </div>
                        </div>
                        <div className="last-chat">
                          <p
                            className={`${gStyle["rubik-semi-bold"]} blue-text`}
                          >
                            kumaha damang?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 col-xs-12">
                      <div className="info-time-and-notif d-flex flex-column">
                        <div className="last-time-chat d-flex justify-content-center align-items-center">
                          <p className={`${gStyle["rubik-light"]}`}>15:20</p>
                        </div>
                        <div className="notification-count d-flex justify-content-center align-items-center">
                          <div
                            className="bulat-biru blue-bg d-flex justify-content-center align-items-center"
                            style={{ width: "30px", height: "30px" }}
                          >
                            <p
                              className={`${gStyle["rubik-semi-bold"]} text-white mt-3`}
                              style={{ fontSize: "20px" }}
                            >
                              1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
        <div className="col-8 col-xs-12">
          {/* {console.log(Object.keys(activeReceiver).length)} */}
          {showSetting ? (
            <>
              <div className="position-relative">
                <Settings />
                <div className="button-close position-absolute top-0 end-0">
                  <button
                    type="button"
                    className="btn"
                    onClick={closeSettingHandle}
                  >
                    <i className="custom-icon-setting bi bi-x-square"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {Object.keys(activeReceiver).length !== 0 ? (
                <div className="chat-room d-flex flex-column w-100">
                  <div className="active-receiver row position-fixed w-75 col-xs-12 mt-5">
                    <div className=" ava-receiver-wrap col-1 d-flex justify-content-center align-items-center ">
                      {activeReceiver.avatar ? (
                        <img
                          src={`${activeReceiver.ava_url}`}
                          style={{
                            width: "75px",
                            height: "75px",
                            borderRadius: "15%",
                          }}
                          alt="ava-receiver"
                        />
                      ) : (
                        <img
                          src={avaDefault}
                          style={{
                            width: "75px",
                            height: "75px",
                            borderRadius: "15%",
                          }}
                          alt="ava-receiver"
                        />
                      )}
                      {/* {console.log(activeReceiver)} */}
                    </div>
                    <div className="col-8 col-xs-12   name-and-status d-flex flex-column justify-content-center mb-5">
                      <div className="name-receiver">
                        <p className={`${gStyle["rubik-bold"]} text-black`}>
                          {activeReceiver.full_name}
                        </p>
                      </div>
                      <div className="status-receiver">
                        <p className={`${gStyle["rubik-regular"]}`}>online</p>
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center  align-items-center ">
                      <div className="button-icon-x text-end">
                        <button
                          type="button"
                          className="btn"
                          onClick={closeReceiver}
                        >
                          <i className="custom-icon bi bi-x-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-empty"></div>
                  <div
                    className="chat-box overflow-auto"
                    style={{ height: "80vh" }}
                  >
                    {/* {console.log(activeReceiver)} */}
                    {listchat.map((item, index) => (
                      <div key={index}>
                        {/* {console.log(login.email)} */}
                        {item.sender === login.email ? (
                          <div
                            key={index}
                            className="chat-wrapper-sender mx-3 mt-2 d-flex flex-row-reverse gap-2"
                          >
                            <div className="img-wrapper">
                              {listUser.map((item_sender, index_sender) =>
                                item_sender.email === login.email ? (
                                  item_sender.avatar ? (
                                    <>
                                      <img1
                                        key={index_sender}
                                        src={`${item_sender.ava_url}`}
                                        alt="avatar"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                          borderRadius: "15%",
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src={avaDefault}
                                        alt="ava"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                          borderRadius: "15%",
                                        }}
                                      />
                                    </>
                                  )
                                ) : (
                                  <></>
                                )
                              )}
                            </div>
                            <div
                              className="message-time-wrapper d-flex flex-column gap-2"
                              style={{ width: "350px" }}
                            >
                              <div className="message-content-sender">
                                <p className={`${gStyle["rubik-regular"]} m-3`}>
                                  {item.message}
                                </p>
                              </div>
                              <div className="time-content">
                                {item.time_send}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="chat-wrapper-receiver ms-3 mt-2 d-flex flex-row gap-2">
                            <div className="img-wrapper">
                              {listUser.map((item_receiver, index_receiver) =>
                                item_receiver.email === activeReceiver.email ? (
                                  item_receiver.avatar ? (
                                    <>
                                      <img
                                        key={index_receiver}
                                        src={`${item_receiver.ava_url}`}
                                        alt="ava"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                          borderRadius: "15%",
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src={avaDefault}
                                        alt="ava"
                                        style={{
                                          width: "60px",
                                          height: "60px",
                                          borderRadius: "15%",
                                        }}
                                      />
                                    </>
                                  )
                                ) : (
                                  <></>
                                )
                              )}
                            </div>
                            <div
                              className="message-time-wrapper d-flex flex-column gap-2"
                              style={{ width: "350px" }}
                            >
                              <div className="message-content">
                                <p className={`${gStyle["rubik-regular"]} m-3`}>
                                  {item.message}
                                </p>
                              </div>
                              <div className="time-content">
                                {item.time_send}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="message-send">
                    <form onSubmit={onSubmitMessage}>
                      <div className="wrapper row">
                        <div className="input-wrapper col-9 col-xs-12 pt-2 pb-2">
                          <input
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="custom-input m-3 w-75"
                            placeholder="type your message..."
                          />
                        </div>
                        <div className="col-1 col-xs-4 d-flex justify-content-center align-items-center">
                          <button type="submit" className="btn">
                            <i
                              className="custom-icon bi bi-plus"
                              style={{ fontSize: "40px" }}
                            ></i>
                          </button>
                        </div>
                        <div className="col-1 col-xs-4 d-flex justify-content-center align-items-center">
                          <i
                            className="custom-icon bi bi-emoji-dizzy-fill"
                            style={{ fontSize: "40px" }}
                          ></i>
                        </div>
                        <div className="col-1 col-xs-4 d-flex justify-content-center align-items-center">
                          <i
                            className="custom-icon bi bi-camera-fill"
                            style={{ fontSize: "40px" }}
                          ></i>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="select-msg w-100 d-flex  align-items-center h-100 position-fixed">
                  <p
                    className={`${gStyle["rubik-semi-bold"]} text-center w-50 h3`}
                  >
                    select a message
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatList;
