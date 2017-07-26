import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HomePage extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return <div className="container">Should work</div>;
	}
}

HomePage.propTypes = {};

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
