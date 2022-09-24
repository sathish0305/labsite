import React from 'react'
import image from '../../images/microscope copy.png'
import './Footer.css'

function Footer() {
  return (
    <>
<footer>
    <div className="footer-top">
        <div className="container">
            <div className="row gy-4">
                <div className="col-md-4">
                    <img className="logo" src={image} alt=""/>
                </div>
                <div className="col-md-2" >
                    <h5 className="text-white">LabSite</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Features</a></li>
                    </ul>
                </div>
                <div className="col-md-6" >
                    <h5 className="text-white">Contact</h5>
                    <ul className="text-white list-unstyled">
                        <li>Address: ABCDEFGHIJKLMNOPQRSTUV,Bangalore</li>
                        <li>Email: abcd@gmail.com</li>
                        <li>Phone: 1234567890</li>
                        <li>Phone: 1234567890</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom py-3">
        <div className="row">
            <div className=" text-white col-md-6 ms-4">
                &copy; 2022 copyright all rights reserved "Major Project Done by Sathish M"
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer