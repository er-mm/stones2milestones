import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createUser, deleteUser } from '../actions/todoActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		maxHeight: 350,
		width: 200,
		backgroundColor: '#c6c6c6de',
		margin: 10
	}
}));

function User(props) {
	const classes = useStyles();
	const [data, setData] = useState({ name: '', desc: '' });
	const [error, setError] = useState('');
	const handleName = (e) => {
		e.preventDefault();
		const { value } = e.target;
		console.log(value)
		setData({ ...data, name: value });
	}
	const handleDesc = (e) => {
		e.preventDefault();
		const { value } = e.target;
		setData({ ...data, desc: value });
	}
	const handleClick = (e) => {
		e.preventDefault();
		console.log('click', props)
		if (props.create) {
			if (!data.name && !data.desc) {
				setError('please fill both fields');
				return;
			}
			props.createUser({ ...data, team: props.teamName });
		}
		else props.deleteUser(props.data.id)
		setData({ ...data, name: '', desc: '' });
		setError('');
	}
	console.log(props.data)
	return (
		<Card className={classes.card}>
			<CardContent>
				<Grid container direction="column" alignItems="center" spacing={2}>
					<Grid item>
						<Typography variant="h4">Name</Typography>
						<TextField id="name" label="Enter Here" disabled={props.disabled} variant="filled" value={props.data?.name || data.name} onChange={handleName} />
					</Grid>
					<Grid item>
						<Typography variant="h4">Description</Typography>
						<TextField helperText={error} id="desc" label="Enter Here" disabled={props.disabled} multiline rowsMax={4} variant="filled" value={props.data?.desc || data.desc} onChange={handleDesc} />
					</Grid>
					<Grid item>
						<Button variant="contained" color="primary" onClick={handleClick}>{`${props?.create ? 'CREATE USER +' : 'DELETE USER -'}`}</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { createUser, deleteUser })(User)