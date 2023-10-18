import React from 'react'
import './SeccionOne.css';

function SeccionOne() {
  return (
    <section className='SectionOne-Container text-white '>
        {/* <div class="SectionOne-FotoOne">.g-col-6 .g-col-md-4</div> */}
     
        <div class="SectionOne-Title">
          <h1 className='SectionOne-Title-first'>
            <span>Para todos tus retos,</span> <br/>prepárate en Optima
          </h1>
          <p className='SectionOne-Title-subtitle'>"Descubre tu potencial en tecnología. <br/>
          Aprende Python, Office, mantenimiento de computadoras 
          y celulares.  <br/>
          ¡Transforma tu futuro hoy!"</p>
        </div>

        {/* <div class="SectionOne-FotoTwo">.g-col-6 .g-col-md-4</div> */}

    </section>
  )
}

export {SeccionOne};