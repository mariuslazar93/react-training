import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.Component {
    constructor(){
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            val: this.state.val + 1
        })
    }
    componentWillMount(){
        console.log('mounting');
        this.setState({
            m: 2
        });
    }
    render(){
        console.log('rendering');
        return <button onClick={this.update}>You clicked me {this.state.val * this.state.m} times.</button>
    }
    componentDidMount(){
        console.log('mounted');
    }
    componentWillUnmount(){
        console.log('unmount');
    }
}

class Wrapper extends React.Component {
    constructor(){
        super();
        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }
    mount(){
        ReactDOM.render(<App2 />, document.getElementById('a'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render(){
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>Unmount</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper
