import React from "react";

import './MainHeader.css';
import logo from '../../assets/logo.svg';

const MainHeader = props => {
	return (
		<header className="main-header">

			<div className="main-header__brandContainer">
				<div className="main-header__logoContainer">
					<img src={logo} alt='React' />
				</div>
				<h1 className="main-header__title">
					DMovies
				</h1>
			</div>

			{props.children}

		</header>
	)
}

export default MainHeader;