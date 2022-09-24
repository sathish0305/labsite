import React from 'react'
import './CardView.css'


function ServicesCardview() {
  return (
    <>
    <div class="header">
    <h1>Reliable, efficient Results</h1>
    <h1>Powered by Technology</h1>

    <p>Our Artificial Intelligence powered tools takes millions of tests
      to ensure that your result is 100% efficient and trustable</p>
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Laborartory</h2>
      <p>We have Powerful equipments to provide better results</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red">
      <h2>CT Scan</h2>
      <p>We have Powerful equipments to provide better results</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue">
      <h2>MRI Scan</h2>
      <p>We hire skilled Doctors</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>Precise Reporting</h2>
      <p>We ensure that to provide best results</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
  

  <div class="row1-container">
    <div class="box box-down2 cyan">
      <h2>XRAY BMD</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red">
      <h2>UltraSound Doppler</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down2 blue">
      <h2>PhysioTherapy</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
    </>
  )
}

export default ServicesCardview