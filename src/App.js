import React from 'react';
import './App.css';
import img from './img.jpg';
import Blocks from './components/Blocks.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
        <Blocks box1={this.state.box1} box2={this.state.box2} box3={this.state.box3} box4={this.state.box4} box5={this.state.box5} box6={this.state.box6} 
        box7={this.state.box7} box8={this.state.box8} box9={this.state.box9} function={this.mouseClick}/>
      </div>
    )
  }
}


export default App


