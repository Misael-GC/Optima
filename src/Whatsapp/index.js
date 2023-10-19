import React from 'react'
import './Whatsapp.css';

function Whatsapp() {
  return (
    <div >
        <div className="CreateTodoButton">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/2221189275" target='_blank'>
                    <i class="fa-brands fa-whatsapp icon-whatsApp"></i>
                </a>
         </div>
    </div>
  )
}

export { Whatsapp };