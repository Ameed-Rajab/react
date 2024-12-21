import React from 'react'
import CustomIcon from './shared/CustomIcon'
import CustomPortfolio from './shared/CustomPortfolio'
import myImage1 from '../assets/images/cabin.png'
import myImage2 from '../assets/images/cake.png'
import myImage3 from '../assets/images/circus.png'
import myImage4 from '../assets/images/game.png'
import myImage5 from '../assets/images/safe.png'
import myImage6 from '../assets/images/submarine.png'

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="container d-flex flex-column gap-4 align-items-center">
            <h2>PORTFOLIO</h2>
            <CustomIcon color="#2C3E50"/>
            <div className="row">
                <CustomPortfolio img={myImage1}/>
                <CustomPortfolio img={myImage2}/>
                <CustomPortfolio img={myImage3}/>
                <CustomPortfolio img={myImage4}/>
                <CustomPortfolio img={myImage5}/>
                <CustomPortfolio img={myImage6}/>
            </div>
        </div>
      </div>
    </>
  )
}
