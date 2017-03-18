import React from 'react';
import { BrowserRouter as Router , Link , Route } from 'react-router-dom';
///pages
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';

export default class Layout extends React.Component
{
	render ()
	{
		return (
			<Router>
				<div>
					
					<nav><Link to=''>Home</Link> | <Link to='about'>About</Link></nav>
					<Route exact={true} path="/" render={ () => (<Home title="home" content="homepage goes here" />)} />
					<Route exact={true} path="/about" component={About} />
				</div>
			</Router>
		);
	}
}