// backgroundColor: '#9DD8C8', light green
// backgroundColor: '#F4E471', light yellow
// backgroundColor: '#E9C6D6', light pink
// backgroundColor: '#B7CBF8', light purple
// backgroundColor: '#212227', dark grey navbar

export const forms = {
	container: {
		marginTop: 8,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		alignItems: 'center',
		border: '1px solid black',
		padding: '1rem',
	},
	errorContainer: {
		marginTop: 2,
		color: '#d32f2f',
		textAlign: 'center',
	},
	subContainer: {
		display: 'flex',
		flexDirection: 'column',
		margin: '10px',
		padding: '20px',
		borderRadius: '25px',
		border: '4px solid #B7CBF8',
		flexBasis: '100%',
		flex: 1,
	},
	loadingButton: { marginTop: 3, marginBottom: 2 },
};

export const item = {
	outerContainer: {
		marginTop: 8,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		alignItems: 'center',
		padding: '1rem',
		//boxShadow:
		//	'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
	},
	errorContainer: {
		marginTop: 2,
		color: '#d32f2f',
		textAlign: 'center',
	},
	inputBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '10px',
		padding: '20px',
		borderRadius: '25px',
		border: '4px solid #B7CBF8',
		flexBasis: '100%',
		flex: 1,
	},
	actionButtons: {
		marginBottom: 2,
		width: '6rem',
		height: '3rem',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: '15px',
	},
};

export const largeButtons = {
	container: {
		width: '10rem',
		height: '10rem',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'end',
		padding: '10px',
		m: '1rem',
		borderRadius: '25px',
		backgroundColor: 'lightBlue',
	},
};
