import React, { Component } from 'react';

class Personal extends Component {
    constructor(props) {
        super();
        this.name = props.name;
        this.email = props.email;
        this.occupation = 'refactory student';
    }
    render() {
        return <div>
            <h1>My Personal Info</h1>
            <h2>Name: {this.props.name}</h2>
            <h2>Email: {this.props.email}</h2>
            <h2>Occupation: Refactory Student</h2>
            </div>
    }

}

export default Personal;