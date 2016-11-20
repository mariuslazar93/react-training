import React from 'react';
import ReactDOM from 'react-dom';

class App4 extends React.Component{
    constructor(){
        super();
        this.state = {
            red: 15
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
        })
    }
    render(){
        return (
            <div>
                <CustomInput refs="red"
                    type="number"
                    min={0}
                    max={255}
                    val={+this.state.red}
                    update={this.update} />
            </div>
        );
    }
}

class CustomInput extends React.Component{
    render(){
        return (
            <input refs="inp" type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                defaultValue={this.props.val}
                onChange={this.props.update} />
        );
    }
}

CustomInput.propTypes = {
    type: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    val: React.PropTypes.number,
    update: React.PropTypes.func.isRequired
}

CustomInput.defaultProps = {
    type: "number",
    min: 0,
    max: 0,
    val: 0
}

export default App4
