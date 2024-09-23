import React from 'react'

const CardStyle = {

}

const NewCard = (props) => {
    return (
        
        <div className='col'>
            <div className="card" style={{width: '18rem'}}>
                <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/66610504/2636936255.jpg" className="card-img-top" alt="..." />
                <div className="card-body" style={CardStyle} >
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}



export default NewCard