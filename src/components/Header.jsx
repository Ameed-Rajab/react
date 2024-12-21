import React from 'react'
import myImage from '../assets/images/avataaars.svg'
import CustomIcon from './shared/CustomIcon';



export default function header() {
  return (
    <>
      <div className="header d-flex justify-content-center align-items-center">
        <div className="content-header d-flex flex-column gap-4 align-items-center">
            <img className='header-img' src={myImage} alt="" />
            <h1 className='text-light fw-bold'>Start Bootstrap</h1>
            <CustomIcon color='#fff'/>
            <p className='text-light fs-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  )
}
