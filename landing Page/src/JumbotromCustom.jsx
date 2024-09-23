import React from 'react'

const StyleJumbotrom = {
    border: '1px solid black',
    padding: '20px', // Puedes añadir más estilos aquí
    borderRadius: '4px', // Añadido para mejorar el aspecto
};

const StyleJumbotromTitle = {
    fontSize: '73px',
    fontWeight: '600'
};


const JumbotromCustom = (props) => {
  return (
    <div className="container">
      <div className="row">
          <div className="col">
              <div className="jumbotron" style={StyleJumbotrom} >
                  <h1 className="display-4" style={StyleJumbotromTitle}>{ props.title} </h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-1" />
                  <p>{props.description}</p>
                  <a className="btn btn-primary btn-lg" href="#" role="button">{props.button}</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default JumbotromCustom