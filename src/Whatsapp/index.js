import React from 'react'
import './Whatsapp.css';

function Whatsapp() {
  return (
    <div >
        <button
         className="CreateTodoButton" 
        //  onClick={
        //     (event) =>{
        //         console.log('le diste click')
        //         console.log(event)
        //         console.log(event.target)
        //     }
        //  }
         >
                <a aria-label="Chat on WhatsApp" href="https://wa.me/2221189275" target='_blank'>
                    <i class="fa-brands fa-whatsapp icon-whatsApp"></i>
                </a>
         </button>
    </div>
  )
}

export { Whatsapp };