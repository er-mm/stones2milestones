import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createTeam } from '../actions/todoActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../Theme';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({

	formControl: {
		margin: theme.spacing(1),
		minWidth: 150,
		backgroundColor: '#c6c6c6de',
	},
}));

function CreateTeam(props) {
	const classes = useStyles();
	const [name, setName] = useState({ name: '' });

	const handleChange = (e) => {
		const { value } = e.target;
		setName({ name: value });
	}

	const handleClick = () => {
		document.getElementById('filled-basic').value = '';
		props.createTeam(name.name);
	}
	return (
		<Grid container spacing={3} alignItems="center" className={classes.grid}>
			<Grid item>
				<Grid item>
					<FormControl variant="filled" className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">Choose Any</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							autoWidth
							required
							placeholder="Select Type"
						>
							<MenuItem value={'Team'}>Team</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Grid item>
				<Grid item>
					<FormControl variant="filled" className={classes.formControl}>
						<TextField id="filled-basic" label="Enter Team Name" placeholder="Team Name" variant="filled" required onChange={handleChange} />
					</FormControl>
				</Grid>
			</Grid>
			<Grid item>
				<Button variant="contained" style={{ backgroundColor: '#c6c6c6de' }} color="primary" onClick={handleClick}>CREATE</Button>
			</Grid>
		</Grid>
	);
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { createTeam })(CreateTeam)