import React, { Component } from 'react';

class Personal extends Component {
    // HINT: Use props to display your personal info
    constructor(name, email, occupation) {
    	super();
    	this.name = name;
    	this.email = email;
    	this.occupation = occupation;
    }
    render() {
	    return (
	      <div className="Personal">
	        <ul>
	          <li>Name = {this.props.name}</li>
	          <li>Email = {this.props.email}</li>
	          <li>Occupation = {this.props.occupation}</li>
	        </ul>
	      </div>
	    );
    }

}

export default Personal;