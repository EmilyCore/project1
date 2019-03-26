import React, { Component } from 'react';
import { Encoder } from './Encoder';
class EncoderComponent extends Component {
    state = {
        input: '',
        result: '',
        history: [],
        showHistory: false
    }
    encoder = new Encoder();
    constructor(props) {
        super(props);
    }
    convert(decode) {
        let result = this.encoder.convert(this.state.input, decode);
        this.setState({
            result: result,
            history: [...this.state.history, `${decode ? 'decode' : 'encode'} : ${result}`],
            showHistory: false
        });
    }
    showHistory() {
        this.setState({
            showHistory: true
        });
    }
    onChange(e) {
        this.setState({ input: e.target.value });
    }
    render() {
        let history, list = [];
        if (this.state.showHistory) {
            for (let str of this.state.history) {
                list.push(<li>{str}</li>);
            }
            history = <p>
                <ul>
                    {list}
                </ul>
            </p>
        }
        return (
            <div>
                <p>
                    <input onChange={this.onChange.bind(this)} />
                </p>
                <p>
                    <span>{this.state.result}</span>
                </p>
                <p>
                    <button onClick={this.convert.bind(this, false)}>Encode</button>
                    <button onClick={this.convert.bind(this, true)}>Decode</button>
                    <button onClick={this.showHistory.bind(this)}>Show history</button>
                </p>
                {history}

            </div>
        );
    }
}
export default EncoderComponent;