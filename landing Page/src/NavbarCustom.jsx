import React from 'react'

const NavbarStyle = {
color: 'white',
}

const NavBarStyleLogo ={
    color:"white",
    fontSize: "33px",
}


const NavbarCustom = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container bg-dark">
      <a className="navbar-brand w-75" href="#" style={NavBarStyleLogo} >My React LandingPage</a>
      <button className="navbar-toggler bg-dark-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
          <li className="nav-item mb-3">
            <a className="nav-link active" aria-current="page" href="#" style={NavbarStyle}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={NavbarStyle}  >About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={NavbarStyle}  >Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={NavbarStyle}  >Cointact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavbarCustom