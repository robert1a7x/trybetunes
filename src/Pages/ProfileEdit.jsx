import React, { useState } from 'react';
import Header from '../components/Header';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateUserAction } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const ProfileEdit = ({ updateUser }) => {
	const history = useHistory();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		updateUser({ name, email, image, description });
		history.push('/profile');
	}

	return (
		<div>
			<Header />
			<form style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
			<TextField
					required
					style={ { marginBottom: 20, width: '400px' } }
					label="Nome"
					variant="filled"
					size="small"
					value={ name }
					onChange={ (e) => setName(e.target.value) }
				/>
				<TextField
					style={ { marginBottom: 20, width: '400px' } }
					label="E-mail"
					variant="filled"
					size="small"
					value={ email }
					onChange={ (e) => setEmail(e.target.value) }
				/>
				<TextField
					style={ { marginBottom: 20, width: '400px' } }
					label="URL da imagem"
					variant="filled"
					size="small"
					value={ image }
					onChange={ (e) => setImage(e.target.value) }
				/>
				<TextField
					inputProps={{ maxLength: 150 }}
					style={ { marginBottom: 20, width: '400px' } }
					label="Descrição"
					multiline
					rows={5}
					variant="filled"
					size="small"
					value={ description }
					onChange={ (e) => setDescription(e.target.value) }
				/>
				<Button type="submit" variant="contained" color="success" onClick={ handleClick }>Salvar</Button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	updateUser: (payload) => dispatch(updateUserAction(payload)),
});

export default connect(null, mapDispatchToProps)(ProfileEdit);

