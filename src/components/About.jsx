import React from 'react'
import CustomIcon from './shared/CustomIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


export default function About() {
  return (
    <>
        <div className="about">
            <div className="container d-flex flex-column gap-4 align-items-center">
                <h2 className='text-light'>ABOUT</h2>
                <CustomIcon color="#fff"/>
                <div className="row text-light">
                    <div className="col-lg-4 ms-auto fs-5">
                        <p className='fw-semibold'>Freelancer is a free bootstrap theme created by Start Bootstrap.
                        The download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-lg-4 me-auto fs-5">
                        <p className='fw-semibold'>You can create your own custom avatar for the masthead,
                        change the icon in the dividers, and add your email address
                        to the contact form to make it fully functional!</p>
                    </div>
                </div>
                <button className='btn btn-outline-light px-5 py-3 fs-4'><FontAwesomeIcon icon={faDownload}/> Free Download!</button>

            </div>
        </div>
      
    </>
  )
}
