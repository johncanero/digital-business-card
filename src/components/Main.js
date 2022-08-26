import React from 'react'

const Main = () => {
  return (
    <div>
        <div className='digital--card'>
             <a href="https://linktr.ee/johncanero" className="btn btn-light" type='button' role="button"><i class="fa-solid fa-arrow-up-right-from-square"></i> LinkTree</a>
            <a href="https://www.linkedin.com/in/johncanero/" className="btn btn-light btn-color" type='button' role="button"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>

        <div className='digital--main'>
          <h3 className='digital--main-heading'>About</h3>
          <p className='digital--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

          <h3 className='digital--main-heading'>Interests</h3>
          <p className='digital--text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
    </div>
  )
}

export default Main