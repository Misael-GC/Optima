import React from 'react'
import './Item.css';

function Item() {
  return (
    <section className='LearningRoutes u-wrapper1' id='Cursos'>
      <h2 className='LearningRoutes-title'> Desarrolla tu creatividad</h2>
      <p className='LearningRoutes-subtitle'>Elige una ruta de aprendizaje y sigue un orden de cursos sobre temas o áreas específicas, de forma ágil y guiada.</p>
      <div>
        <div className="LearningRoutes-slider" aria-label="carousel">
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F82HZfBWkAAA5HF?format=jpg&name=small" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Programación</h5>
              <p className="card-text">Te enseñamos desde los fundamentos hasta la creación de una Alexa que podrás compartir </p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F814pWTWgAIZTlj?format=jpg&name=small" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Excel</h5>
              <p className="card-text">"Nuestro curso de Excel infantil transforma a futuros líderes tecnológicos."</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F816RMGWYAAqYB-?format=jpg&name=small" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Word</h5>
              <p className="card-text">"Domina Microsoft Word para comunicación efectiva y proyectos escolares exitosos."</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F818rRLWYAADtwp?format=jpg&name=small" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Power Point</h5>
              <p className="card-text">"¡Crea presentaciones impresionantes con diversión y creatividad!"</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F82BxRyXwAAS3Fw?format=jpg&name=small" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Mantenimiento de PC</h5>
              <p className="card-text">Nuestro curso de mantenimiento de computadoras te convierte en un experto tecnológico</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F82DoVLWsAEw9Hl?format=png&name=360x360" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Reparación de celulares</h5>
              <p className="card-text">"Conviértete en un maestro de la reparación de celulares: Aprende a revivir y optimizarlos."</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F-CAZnJa8AIIGIz?format=jpg&name=small"
             className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Impresoras</h5>
              <p className="card-text">Ofrecemos mantenimiento y reparación de impresoras de inyección de tinta</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          <a href="https://wa.me/2221189275" target='_blank' className='Learning-link-plans'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://pbs.twimg.com/media/F82GCAjXQAASM1s?format=jpg&name=small" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Equipo de computo</h5>
              <p className="card-text">Ofrecemos una revisión gratuita de tu equipo, ya sea PC de escritorio o laptop.</p>
              <a href="https://wa.me/2221189275" target='_blank' className="btn btn-primary">Información</a>
            </div>
          </div>
          </a>
          {/* Other */}
          </div>
      </div>
    </section>
  )
}

export { Item };