import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Navbar extends Component {
	render() {
		const navProps = {
			style: {
				width: '100px',
				padding: '12px',
				margin: '0 6px 6px',
				background: 'blue',
				textDecoration: 'none',
				color: 'white',
			},
			activeStyle: {
				background: 'darkblue'
			}
		}

		return (
			<div>
				<NavLink {...navProps} exact to="/" >Home</NavLink>
				<NavLink {...navProps} to="/login" >Login</NavLink>
				<NavLink {...navProps} to="/signup" >Signup</NavLink>
				<NavLink {...navProps} to="/settings" >Settings</NavLink>
				<NavLink {...navProps} to="/account" >Account</NavLink>
			</div>
		)
	}
}