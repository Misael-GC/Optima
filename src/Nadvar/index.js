import React from 'react'
import './Nadvar.css';

function Nadvar() {
  return (
    <div className='Nav-Container'>
      <nav className="navbar navbar-expand-lg bg-dark bg-dark " data-bs-theme="dark">
      <div className="container-fluid">
      
        <a className="navbar-brand" href="#">
          <img src="https://i.ibb.co/CPNtDVR/23bae78d-1953-4cd2-83ff-fb4c40400863-modified.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top mx-3"></img>
          Optima
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse Nav-Options" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link 	" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
            {/* code */}
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            {/* code */}
          </ul>
        </div>
      </div>
      </nav>
    </div>
  )
}

export { Nadvar }