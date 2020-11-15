import React, { useState } from 'react';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CreateTeam from './components/CreateTeam';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/todoActions';
import User from './components/User';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
		marginTop: 20
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		marginTop: 10
	},

	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	
}));

export function App(props) {
	const classes = useStyles();
	const [teamName, setTeamName] = useState('');
	const handleClick = (text, e) => {
		e.preventDefault();
		console.log(text);
		setTeamName(text);
		props.fetchUsers();

	}

	return (

		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography className={classes.title} variant="h6" noWrap>
							Assignment React
								</Typography>
						<div className={classes.search}>
							<CreateTeam />
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Toolbar />
					<div className={classes.drawerContainer}>
						<List>
							{props.teamList
								.map((text, index) => (
									<ListItem selected={text === teamName} button key={text} onClick={(e) => handleClick(text, e)}>
										<ListItemText primary={text} />
									</ListItem>
								))}
						</List>
					</div>
				</Drawer>
				<main className={classes.content}>
					<Toolbar />
					<Typography variant="h3">
						{teamName}
					</Typography>
					<Divider />
					{teamName ? <User teamName={teamName} create={true} /> : <></>}
					{
						props.users
							.filter(user => user.team === teamName)
							.reverse()
							.map(user => (
								<>
									<User key={user.id} teamName={user.team} data={user} create={false} disabled={true}/>
								</>
							))
					}
				</main>
			</div>
		</ThemeProvider>
	);
}

const mapStateToProps = state => ({
	teamList: state.team.teamList,
	users: state.user.users
})

export default connect(mapStateToProps, { fetchUsers })(App)
