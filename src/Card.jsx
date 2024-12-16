import React from 'react'
function Card({num,source}) {

    return (
      <>
        <div className="gradient-border" id="box">
          <img src={source} alt="Can't load" height="200px" width="200px"/>
          <h1>Card {num}</h1>
          <p>This is Card {num} description</p>
        </div>
      </>
    )
  }
  
  export default Card
