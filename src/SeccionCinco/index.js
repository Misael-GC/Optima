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
                  {/* <h5 class="card-title Card-titulo">Optima capacitación</h5> */}
                  <p class="card-text Card-texto">"Guiamos a la juventud hacia la excelencia digital. Enseñamos programación, ofimática y mantenimiento, formando líderes éticos que revolucionarán el futuro tecnológico."</p>
                </div>
          </div>
          {/* separador */}
          <div class="card border-info mb-3 Card-principal bg-black" style={{width: "18rem"}}>
              <div class="card-header bg-transparent border-info text-light">Visión</div>
                <div class="card-body text-info">
                  {/* <h5 class="card-title">Success </h5> */}
                  <p class="card-text Card-texto">"Ser referentes en la educación tecnológica para niños, inspirando mentes jóvenes y creando un futuro digital inclusivo y lleno de posibilidades."</p>
                </div>
          </div>
          {/* separador */}
        </div>
      </div>
    </section>
  )
}

export { SeccionCinco };