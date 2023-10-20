import React from 'react';
import './SeccionSeis.css';
// import ReactPlayer from 'react-player/youtube'

function SeccionSeis() {
  return (
    <section className='Video-Container'>
        <div className='Video-Container-secundary'>
          {/*  */}
          <div className="ratio ratio-16x9 Video-ratio">
          <iframe src="https://www.youtube.com/embed/dwmjsW6IamI" title="YouTube video" allowfullscreen></iframe>
          {/* <iframe src="https://www.youtube.com/embed/xxxxxxx" title="YouTube video" allowfullscreen></iframe> */}
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
          </div>
        </div>
    </section>
  )
}

export {SeccionSeis};