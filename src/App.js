import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";


class Work extends Component {
 
}





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  render() {const iwork = this.state.working ? 'working' : 'noworking';


    return (
      <div>
      <div className="Homerworking">
        <button
        onClick={() => this.setState({ working: !this.state.working})}
        >{iwork}</button>
      </div>
     
      <div className="App">
      
        <header className="Homerworking">
          <img src={logo} className={iwork} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
      
        

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        
        </div>
        </div>
    );
  }
}

export default App;

