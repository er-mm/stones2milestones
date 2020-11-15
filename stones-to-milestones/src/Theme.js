import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: 'black',
			textAlign: 'center'
		},
		h3: {
			fontFamily: 'Raleway',
			fontSize: '1.75rem',
			color: 'black',
			fontWeight: 700,
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.25rem',
			color: 'black',
			fontWeight: 100,
		},
		h5: {
			fontFamily: 'Raleway',
			fontSize: '1.25rem',
			color: 'black',
			fontWeight: 550,
		},
	},
})