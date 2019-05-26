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
			<p className="personal-data">
				Hello World !<br />
				My Name is {this.props.name}<br />
				My Email is {this.props.email}<br/>
				My Occupation is {this.props.occupation}
			</p>
		);
	}

}

export default Personal;