import './App.css';
import CalcPanel from './Components/calculator_panel/calculator_panel.jsx';
import CalcVisor from './Components/calculator_visor/calculator_visor';
import compute from './Logic/compute.jsx';
import React from 'react';


class App extends React.Component {

  state = {
    total: 0,
    next: 0,
    operation: null
  }

  handleClick = buttonName => {
    this.setState(compute(this.state, buttonName));
  }

  render(){
  return (
    <div className="Calculator">
    <CalcVisor Operation={this.state.operation} NextValue={this.state.next} TotalValue={this.state.total}/>
    <CalcPanel clickHandler={this.handleClick}/>
    </div>
  );
  }
}

export default App;
