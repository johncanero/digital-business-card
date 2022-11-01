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
          <p className='digital--text'>I am a <strong>Frontend React Developer</strong> & <strong>Architecture Designer</strong>. I love making projects and showing it to the world. 
          <br></br>
          <br></br>
          I try my best to learn about the these things and how I could use it to improve life for the better.</p>

          <h3 className='digital--main-heading'>Interests</h3>
          <p className='digital--text'>Architecture. Web Development. Learning. Writing. Blogging. Football. Biking.</p>
        </div>
    </div>
  )
}

export default Main