import React from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Profile.css';

const Profile = ({ name, email, description, image }) => {
  return (
    <>
      <Header />
			<div className="profile-container">
				<div className="profile">
					<Avatar alt="Profile" src={ image } sx={{ width: 120, height: 120 }} />
					{name && (
						<Typography component='div' variant='h4' style={{ marginTop: '20px' }}>
							{name}
						</Typography>
					)}
					{email && (
						<Typography component='div' variant='h6'>
							{email}
						</Typography>
					)}
					{description && (
						<Typography component='div' variant='h6' style={{ marginTop: '40px', textAlign: 'center' }}>
							{description}
						</Typography>
					)}
				</div>
				<Link to='/profile/edit' style={{ textDecoration: 'none', marginBottom: '15px' }}>
					<Button variant="contained" color="success">Editar perfil</Button>
				</Link>
			</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.userReducer.name,
  email: state.userReducer.email,
  description: state.userReducer.description,
  image: state.userReducer.image,
});

export default connect(mapStateToProps)(Profile);
