import React from 'react';
import ReactDOM from 'react-dom';

class App3 extends React.Component {
    constructor(){
        super();
        this.update = this.update.bind(this);
        this.state = {
            increasing: false
        }
    }
    update(e){
        console.log("inside update - this.props.val: " + this.props.val);
        ReactDOM.render(<App3 val={this.props.val + 1} />,
            document.getElementById('app3')
        );
    }
    componentWillReceiveProps(nextProps){
        console.log("nside compWIllReceiveProps - nextProps.val" + nextProps.val);
        this.setState({
            increasing: this.props.val < nextProps.val
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.val % 5 === 0)
            return true;
        return false;
    }
    render(){
        console.log(this.state.increasing);
        return (

            <button onClick={this.update}>{this.props.val} {this.state.increasing}</button>
        );
    }
    componentDidUpdate(prevProps, prevState){

    }
}

App3.defaultProps = {
    val: 0
}

export default App3
