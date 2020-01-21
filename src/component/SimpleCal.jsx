import React, { Component } from 'react';
import HeaderSite from './HeaderSite';

export default class SimpleCal extends Component {
    state = { myValue: 30 };
    calc = (operand) => {
        if (operand == "+") {
            this.setState({ myValue: this.state.myValue + 1 });
        }
        else {
            this.setState({ myValue: this.state.myValue - 1 });
        }
    };
    render() {
        return (
            <>
                <div className='container m-4 border p-5 w-50 h-50 '>
                    <HeaderSite title='Simple Calculate' />
                    <div className='row p-3'>
                        <div className="form-group">
                            <label className="mr-2">Number</label>
                            <input value={this.state.myValue} />
                        </div>
                        <div className="row float-left">
                            <button className="btn btn-success ml-5 mr-c w-25" onClick={() => this.calc("+")}><b>+</b></button>
                            <button className="btn btn-danger w-25 ml-2" onClick={() => this.calc("-")}><b>-</b></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
