import React, { useState, } from 'react';
import { useHistory } from 'react-router';
import { TextField, Button } from '@mui/material';
import { connect } from 'react-redux';
import { getUserAction } from '../redux/actions';
import './Login.css';



const Login = ({ getUser }) => {
	const [name, setName] = useState('');
	const history = useHistory();

	const handleClick = () => {
		getUser(name);

		history.push('/search')
	}

	return (
		<div className="home-container">
			<h1>♫ TrybeTunes</h1>
			<div className="login-container" >
				<TextField
					style={ { marginBottom: 20 } }
					label="Digite seu nome"
					variant="filled"
					size="small"
					value={ name }
					onChange={ (e) => setName(e.target.value) }
				/>
				<Button variant="contained" color="success" onClick={ handleClick }>Entrar</Button>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	getUser: (payload) => dispatch(getUserAction(payload))
})

export default connect(null, mapDispatchToProps)(Login);
