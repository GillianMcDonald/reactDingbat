import React from 'react';
import './App.css';
import img from './img.jpg';




class App extends React.Component {
    state ={
      box1: true,
      box2: true,
      box3: true,
      box4: true,
      box5: true,
      box6: true,
      box7: true,
      box8: true,
      box9: true
      }



mouseClick = (box) => {
  if(box === "box1")
  {
    this.setState({
      box1: false
    })
  }
  if(box === "box2")
  {
    this.setState({
      box2: false
    })
  }
  if(box === "box3")
  {
    this.setState({
      box3: false
    })
  }
  if(box === "box4")
  {
    this.setState({
      box4: false
    })
  }
  if(box === "box5")
  {
    this.setState({
      box5: false
    })
  }
  if(box === "box6")
  {
    this.setState({
      box6: false
    })
  }
  if(box === "box7")
  {
    this.setState({
      box7: false
    })
  }
  if(box === "box8")
  {
    this.setState({
      box8: false
    })
  }
  if(box === "box9")
  {
    this.setState({
      box9: false
    })
  }
  
  
 
}


  render() {

    return (
      <div className="MumContainer">   
        <img src={img} alt="dingbat" />   
        <div className="Container"> 
          {this.state.box1 ? <button onClick={() => this.mouseClick("box1")} className="box box1">1</button> : <div className="Empty"></div>} 
          {this.state.box2 ? <button onClick={() => this.mouseClick("box2")} className="box box2">2</button> : <div className="Empty"></div>} 
          {this.state.box3 ? <button onClick={() => this.mouseClick("box3")} className="box box3">3</button> : <div className="Empty"></div>} 
          {this.state.box4 ? <button onClick={() => this.mouseClick("box4")} className="box box4">4</button> : <div className="Empty"></div>} 
          {this.state.box5 ? <button onClick={() => this.mouseClick("box5")} className="box box5">5</button> : <div className="Empty"></div>} 
          {this.state.box6 ? <button onClick={() => this.mouseClick("box6")} className="box box6">6</button> : <div className="Empty"></div>} 
          {this.state.box7 ? <button onClick={() => this.mouseClick("box7")} className="box box7">7</button> : <div className="Empty"></div>} 
          {this.state.box8 ? <button onClick={() => this.mouseClick("box8")} className="box box8">8</button> : <div className="Empty"></div>} 
          {this.state.box9 ? <button onClick={() => this.mouseClick("box9")} className="box box9">9</button> : <div className="Empty"></div>} 
        </div>
      </div>
    )
  }
}


export default App