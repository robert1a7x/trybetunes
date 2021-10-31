import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ name }) => {
	return (
		<>
			<header className="header-container">
				<h3>Trybetunes</h3>
				<p>{ name }</p>
			</header>
			<div className="menu-options">
				<Link to="/search">
					<div>Procurar</div>
				</Link>
				<Link to="/favorites">
					<div>Favoritas</div>
				</Link>
				<Link to="/profile">
					<div>Perfil</div>
				</Link>
			</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	name: state.userReducer.name,
})

export default connect(mapStateToProps)(Header);
