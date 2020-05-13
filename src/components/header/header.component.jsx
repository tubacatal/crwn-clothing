import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../images/icons/crown.svg';

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options-container'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
		</div>
	</div>
);

export default Header;