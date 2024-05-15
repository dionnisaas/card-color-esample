import React, { useState } from 'react'

export const Color  = () => {

 const [card, setcard] = useState("#ffffff");

 function handercolorchange(event){
    setcard(event.target.value)
 }



  return (
    <div className='pick-color-container'>
        <h1>color picker</h1>
        <div className='color-display' style={{background: card}}>
            <p>selected color: {card}</p>
           
        </div>
    <div>
    <label>select a color:</label>
            <input type="color" value={card} onChange={handercolorchange} />
    </div>
    
    </div>
  )
}
