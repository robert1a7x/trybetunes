import React from 'react';
import { TextField, Button } from '@mui/material';
import Header from '../components/Header';

const Search = () => {
	return (
		<div>
			<Header />
			<div className="serch-container">
			<TextField
					fullWidth
					style={ { marginRight: 40 } }
					label="Nome do artista"
					variant="outlined"
					size="small"
				/>
				<Button
				variant="contained"
				color="success"
				size="small"
				>
					Procurar
				</Button>
			</div>	
		</div>
	)
}

export default Search;

