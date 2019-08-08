import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		const props = {
			link: {
				width: '100px',
				padding: '12px',
				margin: '0 6px 6px',
				background: 'blue',
				textDecoration: 'none',
				color: 'white',
			},
			activeLink: {
				background: 'darkblue'
			}
		}
		return (
			<div>
				<NavLink exact to="/"   {...props}>Home</NavLink>
				<NavLink to="/login"    {...props}>Login</NavLink>
				<NavLink to="/signup"   {...props}>Signup</NavLink>
				<NavLink to="/settings" {...props}>Settings</NavLink>
				<NavLink to="/account"  {...props}>Account</NavLink>
			</div>
		)
	}
}