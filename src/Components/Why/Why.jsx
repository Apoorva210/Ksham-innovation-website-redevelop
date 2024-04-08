import React from 'react'
import "../Why/why.scss";
import founderi from "../Why/founder.png";
const Why = () => {
  return (
    <div className='why-wrapper'>
        <div className='header'>
      <h1>Why Able Innovation Exists</h1>
      </div>
      <div className='why-container'>
      <div className='left-side'>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/tOm63_t6-Uo?autoplay=1&controls=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button>About Us</button>
      </div>


      <div className='right-side'>
      <div className="box">
    <p>Globally, there are over 680 million people who are deaf, hard of hearing, mute, or blind.</p>
  </div>
  <div className="box">
    <p>India alone is home to more than 80 million individuals belonging to these diverse disability groups.</p>
  </div>
  <div className="box">
    <p>Unfortunately, an estimated 90% of these individuals lack access to education and often face poverty.</p>
  </div>
  <div className="box">
    <p>For these individuals, accessing essential information, education, and communication channels remains a significant challenge.</p>
  </div>
      </div>
      </div>
      <div className='founder'>
        <h1>Meet The Founder</h1>
        <p>Pratik Raghuwanshi</p>
        <img src={founderi} className='founder-img'></img>
      </div>
    </div>

  )
}

export default Why
