import React from 'react'
import FeaturesCardView from '../../components/Fearures-card/FeaturesCardView'
import './Features.css'

function Features() {
  return (
    <>
     <header>
        <h1>Our Features</h1>
    </header>
    <div className='features'>
    <FeaturesCardView/>
    </div>
    </>
  )
}

export default Features