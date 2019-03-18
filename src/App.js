import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component {
	state = { displayBio: false };
	// constructor() {
	// 	super();
	// 	this.state = { displayBio: false };
	// 	this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
	// }

	toggleDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio });
	}

	render() {
		return (
			<div>
				<img src={profile} alt='profile' className='profile'/>
				<h1>Hello!</h1>
				<p>My name is Meenal. I'm a Software Developer</p>
				{
					this.state.displayBio ? (
						<div>
							<p>My favorite language is Javascript, and Node.js & React.js is Awesome</p>
							<button onClick={this.toggleDisplayBio}>Show Less</button>
						</div>
					) : (
						<div>
							<button onClick={this.toggleDisplayBio}>Read More</button>
						</div>
					)
				}
				<hr />
				<Projects />

				<hr />
				<SocialProfiles />
			</div>
		)
	}
}

export default App;

