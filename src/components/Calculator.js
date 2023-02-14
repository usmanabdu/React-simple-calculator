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
        
    }

    handleNo1Change(event) {
        event.preventdefault();
        this.setState = ({
            no1: Number(event.target.value)
        })
    }

    handleNo2Change(event) {
        event.preventdefault();
        this.setState = ({
            no2: Number(event.target.value)
        })
    }

    handleSignChange(event) {
        event.preventdefault();
        this.setState = ({
            sign: Number(event.target.value)
        })
    }

    handleResultChange(event) {
        event.preventdefault();
        this.setState = ({
            
        })
    }

    render () {
        return (
            <>
                <div className="container">
                    <div className="wrapper">
                        <input type="number" value={this.state.no1} placeholder="0.00" /><br />
                        <label>sign:</label>
                        <input type="text" value={this.state.sign}/><br />
                        <input type="number" value={this.state.no2} placeholder="0.00"/><br />
                        <br />
                        <span>= {this.state.result}</span>

                        <button onClick={this}>=</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Calculator