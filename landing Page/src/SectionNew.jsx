import React from 'react'
import NavbarCustom from './NavbarCustom'
import JumbotromCustom from './JumbotromCustom'
import { NewFooter } from './NewFooter'
import NewCard from './NewCard'


const StyleSection = {
  background: 'f5f3f0',
  margin: '0px',
}

const SampleDiv = {

}

const SectionNew = (props) => {
  return (
    <>
      <div className="container-fluid" style={StyleSection} >
        <div className="row">
          <div className="col p-0">
            <NavbarCustom />
            <div className="row" >
              <div className="col container mt-3">
                <JumbotromCustom title="Warm Welcome!" description={`Este es el espacio dinamico para escribir la descripcion que sea necesaria `} button={`¡Haz clic aqui!`} />
                {/* final del componente jumbotron */}
                {/* inicio de los cards */}
                <div>
                  <div className="container ">
                    <div className="row mt-3">
                      <div className="col-lg-3 col-sm mt-1 text-light "style={SampleDiv}>
<NewCard/>
          
                      </div>
                      <div className="col-lg-3 col-sm mt-1 text-light" style={SampleDiv}>                 
                      <NewCard/>
                      </div>
                      <div className="col-lg-3 col-sm mt-1 text-light" style={SampleDiv}> 
                      <NewCard/>
                      </div>
                      <div className="col-lg-3 col-sm mt-1 text-light" style={SampleDiv}>
                      <NewCard/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* FIN DE LOS CARDS */}
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container-fluid text-center p-0 ">
        <div className="row mt-3">
          <div className="col">
            <NewFooter text={`¡Primer Landing Page Realizado en React!`  } />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionNew