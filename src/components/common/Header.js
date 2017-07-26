import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<ul className="left active">
				<li>
					<NavLink to="/">
						<i className="fa fa-home material-icons" aria-hidden="true" />
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">
						<i
							className="fa fa-info-circle material-icons"
							aria-hidden="true"
						/>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;