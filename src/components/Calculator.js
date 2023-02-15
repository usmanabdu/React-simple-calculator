import React from "react";

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            no1: "",
            no2: "",
            sign: "",
            result: ""
        }
        this.handleNo1Change = this.handleNo1Change.bind(this)
        this.handleNo2Change = this.handleNo2Change.bind(this)
        this.handleResultChange=this.handleResultChange.bind(this)
        this.handleSignChange=this.handleSignChange.bind(this)
    }

    handleNo1Change(event) {
        event.preventDefault();
        this.setState({
            no1: Number(event.target.value)
        })
    }

    handleNo2Change(event) {
        event.preventDefault();
        this.setState({
            no2: Number(event.target.value)
        })
    }

    handleSignChange(event) {
        event.preventDefault();
        this.setState({
            sign: event.target.value
        })
    }

    handleResultChange(event) {
        event.preventDefault();
        let result
        const {no1,no2,sign} = this.state
            if(sign === "+") {
                result = no1 + no2;
            }
            
            else if(sign === "-") {
                result = no1 - no2
            }
        
            else if(sign === "*") {
                result = no1 * no2
            }
        
            else if(sign === "/") {
                result = no1 / no2
            }
        
            else {
                result = "Invalid operator";
            }
            
            
        
        this.setState  ({
            result:result
        })
    }

    render () {
        return (
            <>
                <div className="container">
                    <div className="wrapper">
                        <input type="text" value={this.state.no1} onChange={this.handleNo1Change} placeholder="0.00" /><br />
                        <label>sign:</label>
                        <input type="text" value={this.state.sign} onChange={this.handleSignChange}/><br />
                        <input type="text" value={this.state.no2} onChange={this.handleNo2Change} placeholder="0.00"/><br />
                        <br />
                        <span>{this.state.result}</span>

                        <button onClick={this.handleResultChange}>=</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Calculator