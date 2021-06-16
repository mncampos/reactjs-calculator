import React from 'react';
import CalcButton from '../calculator_button/calculator_button.jsx';
import './calculator_panel.css';

export default class CalcPanel extends React.Component{

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    }

    render()
    {
        return(

            <div className="component-button-panel">
                <div className="first-row">
                <CalcButton Name='0' clickHandler={this.handleClick}/>    
                <CalcButton Name='1' clickHandler={this.handleClick}/>
                <CalcButton Name='2' clickHandler={this.handleClick}/>
                <CalcButton Name='3' clickHandler={this.handleClick}/>
                <CalcButton Name='4' clickHandler={this.handleClick}/>
                </div>
                <div>
                <CalcButton Name='5' clickHandler={this.handleClick}/>
                <CalcButton Name='6' clickHandler={this.handleClick}/>
                <CalcButton Name='7' clickHandler={this.handleClick}/>
                <CalcButton Name='8' clickHandler={this.handleClick}/>
                <CalcButton Name='9' clickHandler={this.handleClick}/>
                </div>
                <div>
                <CalcButton Name='/' clickHandler={this.handleClick}/>
                <CalcButton Name='*' clickHandler={this.handleClick}/>
                <CalcButton Name='-' clickHandler={this.handleClick}/>
                <CalcButton Name='+' clickHandler={this.handleClick}/>
                <CalcButton Name='=' clickHandler={this.handleClick}/>
                </div>
                <div>
                <CalcButton Name='AC' clickHandler={this.handleClick}/>
                <CalcButton Name='Del' clickHandler={this.handleClick}/>
                </div>

            </div>

        );
    }

}