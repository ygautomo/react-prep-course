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
		/* return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
		); */
		
		return (
			<div className="personal-data">
				Bebek Bakar Madu
			</div>
		);
	}

}

// Hello World !<br>My Name is {this.props.name} My Email is {this.props.email} My Occupation is {this.props.occupation}
export default Personal;