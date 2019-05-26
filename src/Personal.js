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
				Hello World <br>
				My Name is {this.props.name}<br>
				My Email is {this.props.email}<br>
				My Occupation is {this.props.occupation}
			</div>
		);
	}

}

export default Personal;