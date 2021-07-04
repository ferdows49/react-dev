import React, {Component} from 'react';
import './MyComponent.css'

class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Md Ferdows Ohid Anu',
            age: '20',
            Profession: 'Software Engineer'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({
            name: 'Anu'
        })
    }

    render() {
        return (
            <div className="main">
                <h1>Name: {this.state.name}</h1>
                <h2>Age: {this.state.age}</h2>
                <h2>Profession: {this.state.Profession}</h2>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}


export default MyComponent;