import React from 'react'

export default function CustomPortfolio({img}) {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item">
            <img className='img-fluid rounded' src={img} alt="" />
        </div>
      </div>
    </>
  )
}
