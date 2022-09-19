import React from 'react'
import '../css/Home.css'
import { useState, useEffect } from 'react'; 

function Home() {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className='hero'>
        <div>
          <h1>This is Home</h1>
        </div>

    </div> 
  )
}

export default Home;