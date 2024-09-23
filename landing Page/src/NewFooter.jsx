import React from 'react'
import NewCard from './NewCard'

const Newfooterstyle = {
    background: 'black',
    color: 'white',
    height: '90px'
}



export const NewFooter = (props) => {
  return (
    
<div>
    <div className="container-fluid p0" style={Newfooterstyle}>
        <div className="row">
            <div className="col">
                <br />
                <p>{props.text} <i className="fa-brands fa-react"></i> </p>
            </div>
        </div>
    </div>

</div>

  )
}
