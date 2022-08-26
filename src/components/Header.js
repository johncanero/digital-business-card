import React from 'react'
import PhotoCard from '../images/photoCard.jpg'

const Header = () => {
  return (
    <div>
        <div className='card'>   
            <div className='container'>
                <img src={PhotoCard} alt='photoCard.jpg'/>
                <h1 className='header--name'>John Cañero</h1>
                <h4 className='subheader--role'>Frontend Developer</h4>
                <p className='subheader-website'>johncanero.website</p>
            </div>
        </div>
    </div>
  )
}

export default Header