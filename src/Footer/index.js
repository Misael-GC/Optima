import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <footer className='Footer'>
      <div className='FooterContainer-up'>
        <div className='u-wrapper FooterGrid-up'>
            <div className='SloganSection'>
              <a className="navbar-brand" href="#">
                <figure className=''>
                  <img src="https://i.ibb.co/CPNtDVR/23bae78d-1953-4cd2-83ff-fb4c40400863-modified.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top mx-3"></img>
                  Optima
                </figure>
              </a>
              <p>
                <span>
                "Desarrolla tu potencial digital con nosotros, ¡Conéctate al conocimiento!"
                </span>
              </p>
            </div>
            <div className='SocialLayout'>
              <a className='SocialItem Twitter' href='#' target='_blank' rel='noreferrer'><i class="fa-brands fa-twitter"></i></a>
              <a className='SocialItem Facebook' href='#' target='_blank' rel='noreferrer'> <i class="fa-brands fa-facebook"></i> </a>
              <a className='SocialItem WhatsApp' href='#' target='_blank' rel='noreferrer'><i class="fa-brands fa-whatsapp"></i></a>
              <a className='SocialItem Youtube' href='#' target='_blank' rel='noreferrer'><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div className='CategoriesSection'>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #DD1014' }}>
                  <a href='#'>Microsoft Office</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #E2D523' }}>
                  <a href='#'>Programación</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #26EC4A' }}>
                  <a href='#'>Excel</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #3084D8' }}>
                  <a href='#'>Word</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #CE3B3E' }}>
                  <a href='#'>Power-Point</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #1CD3F3' }}>
                  <a href='#'>Mantenimiento de computo</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #C5C5C5' }}>
                  <a href='#'>Mantenimiento de celulares</a>
                </div>
                <div className='Category' href='#' style={{ borderLeft: 'solid 3px #7C36E4' }}>
                  <a href='#'>Mantenimiento de impresoras</a>
                </div>
            </div>
            <div className='CertifiersLayout'>
                <span>Creamos oportunidades <br></br> a través del código, la programación y tecnología para niños, niñas y jóvenes.</span>
                {/* <div></div> */}
            </div>
            <div></div>
        </div>
      </div>
      <div className='FooterContainer-bottom bg-#1e2229'>
      </div>
      
    </footer>
  )
}

export { Footer };