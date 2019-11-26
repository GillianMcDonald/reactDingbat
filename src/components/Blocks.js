import React from 'react'

export const Blocks = (props) => {
    return (


        <div className="Container"> 
        {props.box1 ? <button onClick={() => props.function("box1")} className="box box1">1</button> : <div className="Empty"></div>} 
        {props.box2 ? <button onClick={() => props.function("box2")} className="box box2">2</button> : <div className="Empty"></div>} 
        {props.box3 ? <button onClick={() => props.function("box3")} className="box box3">3</button> : <div className="Empty"></div>} 
        {props.box4 ? <button onClick={() => props.function("box4")} className="box box4">4</button> : <div className="Empty"></div>} 
        {props.box5 ? <button onClick={() => props.function("box5")} className="box box5">5</button> : <div className="Empty"></div>} 
        {props.box6 ? <button onClick={() => props.function("box6")} className="box box6">6</button> : <div className="Empty"></div>} 
        {props.box7 ? <button onClick={() => props.function("box7")} className="box box7">7</button> : <div className="Empty"></div>} 
        {props.box8 ? <button onClick={() => props.function("box8")} className="box box8">8</button> : <div className="Empty"></div>} 
        {props.box9 ? <button onClick={() => props.function("box9")} className="box box9">9</button> : <div className="Empty"></div>} 
      </div>
    
    )
}

export default Blocks
