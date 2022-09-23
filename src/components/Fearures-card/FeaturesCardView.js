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
      <div class="f-card__icon"><i class="fas fa-bolt"></i></div>
      <h1><span className='f-card__link'>Feature Title</span></h1>
      <h2 class="f-card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    </div>
    <div class="f-card f-card-2">
      <div class="f-card__icon"><i class="fas fa-bolt"></i></div>
      <h1><span className='f-card__link'>Feature Title</span></h1>
      <h2 class="f-card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
    </div>
    <div class="f-card f-card-3">
      <div class="f-card__icon"><i class="fas fa-bolt"></i></div>
      <h1><span className='f-card__link'>Feature Title</span></h1>
      <h2 class="f-card__title">Ut enim ad minim veniam.</h2>
    </div>
    <div class="f-card f-card-4">
      <div class="f-card__icon"><i class="fas fa-bolt"></i></div>
      <h1><span className='f-card__link'>Feature Title</span></h1>
      <h2 class="f-card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
    </div>
    <div class="f-card f-card-5">
      <div class="f-card__icon"><i class="fas fa-bolt"></i></div>
      <h1><span className='f-card__link'>Feature Title</span></h1>
      <h2 class="f-card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
    </div>
    <div class="f-card f-card-1">
      <div class="f-card__icon"><i class="fas fa-bolt"></i></div>
      <h1><span className='f-card__link'>Feature Title</span></h1>
      <h2 class="f-card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    </div>
  </div>
</div>
    </>
  )
}

export default FeaturesCardView