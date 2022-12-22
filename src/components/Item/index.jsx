import React from 'react'

const Item = ({cakeType, title}) => {
  return (
    <div className="card" style= {{width: '18rem'}}>
      {/* <img src="https://www.shutterstock.com/image-illustration/big-white-gold-luxury-cake-260nw-1227473863.jpg" class="card-img-top" alt="..."/> */}
      <img style={{width: '286px', height: '174px'}} src= {cakeType} class="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {/* <p className="card-text">Try this delicious signature cake, which combines</p> */}
      <a href="/#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
  )
}

export default Item
