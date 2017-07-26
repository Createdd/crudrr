import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends Component {
	render() {
		return (
			<div className="grey darken-2  center-align">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={AboutPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
