import React from 'react'
import gStyle from '../../assets/css/general.module.css'

const NotFound404 = () => {
  return (
    <div className='vw-100 vh-100 d-flex flex-column justify-content-center align-items-center'>
        <p className={`${gStyle['rubik-black']}`}>404 - Page Not Found</p>
        <p className={`${gStyle['rubik-light']}`}>telegram app - @2022</p>
    </div>
  )
}

export default NotFound404