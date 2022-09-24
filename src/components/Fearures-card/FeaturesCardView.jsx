import React from 'react'
import './FCardView.css'

function FeaturesCardView() {
  return (
    <>
    <div class="f-main-container">
  <div class="f-heading">
    <h1 class="f-heading__title">Gradient Banner Cards</h1>
    <p class="f-heading__credits">Design by Simon Lurwer on Dribbble</p>
  </div>
  <div class="f-cards">
    <div class="f-card f-card-1">
    
      <h1 className='head'><span className='f-card__link'>Advanced Equipement</span></h1>
      <span className='icon'><i class="fas fa-bolt"></i></span>
      <h2 class="f-card__title">We have Powerful equipments to provide better results</h2>
    </div>
    <div class="f-card f-card-2">
    <h1 className='head'><span className='f-card__link'>High-Quality Services</span></h1>
      <span className='icon'><i class="fas fa-bolt"></i></span>
      <h2 class="f-card__title">We have Powerful equipments to provide better results</h2>
    </div>
    <div class="f-card f-card-3">
    <h1 className='head'><span className='f-card__link'>Skilled Team</span></h1>
      <span className='icon'><i class="fas fa-bolt"></i></span>
      <h2 class="f-card__title">We hire skilled pathologists to know more about the results</h2>
    </div>
    <div class="f-card f-card-4">
    <h1 className='head'><span className='f-card__link'>Precise Reporting</span></h1>
      <span className='icon'><i class="fas fa-bolt"></i></span>
      <h2 class="f-card__title">We ensure that to provide best results</h2>
    </div>
    <div class="f-card f-card-5">
    <h1 className='head'><span className='f-card__link'>Our Team</span></h1>
      <span className='icon'><i class="fas fa-bolt"></i></span>
      <h2 class="f-card__title">Our qualified and ardent team of doctors and technologists provide strong support</h2>
    </div>
    <div class="f-card f-card-1">
    <h1 className='head'><span className='f-card__link'>Wellness Packages</span></h1>
      <span className='icon'><i class="fas fa-bolt"></i></span>
      <h2 class="f-card__title">we provide regular and basic tests</h2>
    </div>
  </div>
</div>
    </>
  )
}

export default FeaturesCardView