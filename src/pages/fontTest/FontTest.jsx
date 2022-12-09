import React from 'react'
import gStyle from '../../assets/css/general.module.css'

const FontTest = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <p className={`${gStyle['rubik-black']}`}>rubik-black</p>
        <p className={`${gStyle['rubik-black-italic']}`}>rubik-black-italic</p>
        <p className={`${gStyle['rubik-bold']}`}>rubik-bold</p>
        <p className={`${gStyle['rubik-bold-italic']}`}>rubik-bold-italic</p>
        <p className={`${gStyle['rubik-extra-bold']}`}>rubik-extra-bold</p>
        <p className={`${gStyle['rubik-extra-bold-italic']}`}>rubik-extra-bold-italic</p>
        <p className={`${gStyle['rubik-italic-variable']}`}>rubik-italic-variable</p>
        <p className={`${gStyle['rubik-italic']}`}>rubik-italic</p>
        <p className={`${gStyle['rubik-light']}`}>rubik-light</p>
        <p className={`${gStyle['rubik-light-italic']}`}>rubik-light-italic</p>
        <p className={`${gStyle['rubik-medium']}`}>rubik-medium</p>
        <p className={`${gStyle['rubik-medium-italic']}`}>rubik-medium-italic</p>
        <p className={`${gStyle['rubik-regular']}`}>rubik-regular</p>
        <p className={`${gStyle['rubik-semi-bold']}`}>rubik-semi-bold</p>
        <p className={`${gStyle['rubik-semi-bold']}`}>rubik-semi-bold</p>
        <p className={`${gStyle['rubik-semi-bold-italic']}`}>rubik-semi-bold-italic</p>
        <p className={`${gStyle['rubik-variable']}`}>rubik-variable</p>
      </div>
    </>
  )
}

export default FontTest