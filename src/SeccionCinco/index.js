import React from 'react'
import './SeccionCinco.css';

function SeccionCinco() {
  return (
    <section className='Mision-Container bg-black' id='Mision'>
      <div className='u-wrapper1'>
        <div className='Mision-Container-secundario'>
          {/* separador */}
          <div class="card border-info mb-3 Card-principal bg-black" style={{width: "18rem"}}>
              <div class="card-header bg-transparent border-info text-light">Misión</div>
                <div class="card-body text-info">
                  <h5 class="card-title Card-titulo">Success card title</h5>
                  <p class="card-text Card-texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
          </div>
          {/* separador */}
          <div class="card border-info mb-3 Card-principal bg-black" style={{width: "18rem"}}>
              <div class="card-header bg-transparent border-info text-light">Visión</div>
                <div class="card-body text-info">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text Card-texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
          </div>
          {/* separador */}
        </div>
      </div>
    </section>
  )
}

export { SeccionCinco };