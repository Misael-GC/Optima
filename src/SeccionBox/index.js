import React from 'react'
import './SeccionBox.css'

function SeccionBox() {
  return (
   <section className='Plans' id='Precios'>
      <div className='u-wrapper1'>
        <div className='Plans-heading'>
            <h2>Elige un plan</h2>
            <p>
                <span>Accede a nuestros cursos y contenidos exclusivos.</span> <br/>
                Aprovecha los beneficios de la plataforma<br/>
                {/* Clases en vivo y grabados */}
            </p>
        </div>
        <div className='00000000'>
        <div className="LearningRoutes-slider-Plans Container-CardsPlans" aria-label="carousel">
          {/* other */}
            <div class="card Card-ContainerPlan" style={{width: "18rem;"}}>
            <div class="card-body">
                <h5 class="card-title">Programación</h5>
                <p class="card-text"> 25 clases, 3 horas por clase, costo .... </p>
                <a href="https://wa.me/2221189275" target='_blank' class="btn btn-primary">Información</a>
              </div>
            </div>
        {/*  */}
            <div class=" card Card-ContainerPlan" style={{width: "18rem;"}}>
            <div class="card-body">
                <h5 class="card-title">Ofimática</h5>
                <p class="card-text">25 clases, 3 horas por clase, costo ....</p>
                <a href="https://wa.me/2221189275" target='_blank' class="btn btn-primary">Información</a>
              </div>
            </div>
        {/*  */}
            <div class="card Card-ContainerPlan" >
            <div class="card-body">
                <h5 class="card-title">Mantenimiento de equipo de computo</h5>
                <p class="card-text">25 clases, 3 horas por clase, costo ....</p>
                <a href="https://wa.me/2221189275" target='_blank' class="btn btn-primary">Información</a>
              </div>
            </div>
        {/*  */}
            <div class="card Card-ContainerPlan" style={{width: "18rem;"}}>
            <div class="card-body">
                <h5 class="card-title">Reparación de celulares</h5>
                <p class="card-text">25 clases, 3 horas por clase, costo ....</p>
                <a href="https://wa.me/2221189275" target='_blank' class="btn btn-primary">Información</a>
              </div>
            </div>
        {/*  */}
        </div>
        </div>
      </div>
   </section>
  )
}

export { SeccionBox };