import React from 'react'
import './Button.css'

function Button() {
  return (
    <>
    <a id="button"></a>
    </>
  )
}


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

export default Button