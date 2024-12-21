import React from 'react'
import CustomIcon from './shared/CustomIcon'

export default function Contact() {
  return (
    <div>
      <div className="about bg-light">
        <div className="container d-flex flex-column align-items-center gap-5">
            <h2>CONTACT ME</h2>
            <CustomIcon color="#2C3E50"/>
            <div className="col-md-6">
                <form>
                    <div className="input-group">
                        <label htmlFor="fullName">Full name</label>
                        <input type="text" id="fullName"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="tel" id="phoneNumber"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message"></textarea>
                    </div>

                    <button className='btn btn-info py-3 px-5' type="submit">Send</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
