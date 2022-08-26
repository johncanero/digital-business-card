import React from 'react'
import PhotoCard from '../images/photoCard.jpg'

const Header = () => {
  return (
    <div>
        <div className='card'>   
            <div className='container'>
                <img src={PhotoCard} alt='photoCard.jpg'/>
                <h2>John Cañero</h2>
                <h5>Frontend Developer</h5>
                <p>johncanero.website</p>
            </div>
        </div>
    </div>
  )
}

export default Header