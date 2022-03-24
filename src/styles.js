// backgroundColor: '#212227', dark grey navbar

export const forms = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '10px',
		padding: '20px',
		borderRadius: '15px',
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
	scrollContainer: {
		height: '450px',
		overflow: 'auto',
	},
	btnContainer: {
		display: 'flex',
		justifyContent: 'center',
		minWidth: '160px',
	},
	btn: {
		padding: '15px',
		minWidth: '200px',
		margin: '10px',
		borderRadius: '10px',
	},
	outerContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		// padding: "1rem",
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
		flexBasis: '100%',
		flex: 1,
	},
	comment: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '25px',
		flexBasis: '100%',
	},
	actionButtons: {
		marginBottom: 2,
		width: '6rem',
		height: '3rem',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: '15px',
	},
	incident: {
		backgroundColor: '#837d78',
		color: '#ffffff',
		padding: '5px',
		margin: '2px',
		borderRadius: '10px',
	},
	teacherComment: {
		textAlign: 'right',
		width: 'fitContent',
		backgroundColor: '#ffffff',
		padding: '5px 10px',
		margin: '2px',
		borderRadius: '10px',
	},
	parentComment: {
		textAlign: 'left',
		width: 'fitContent',
		backgroundColor: '#d0fbf3',
		padding: '5px 10px',
		margin: '2px',
		borderRadius: '10px',
	},
	ChildCardFlex: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
};

export const modal = {
	container: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'background.paper',
		borderRadius: '10px',
		boxShadow: 24,
		p: 4,
	},
};

export const home = {
	page: {
		display: 'flex',
		alignItems: 'center',
		height: '100vh',
	},
};

export const brand = {
	container: {
		display: 'flex',
		justifyContent: 'center',
	},
	logo: {
		width: '5rem',
	},
};

export const getContainerStyles = (isMobile) => ({
	backgroundColor: '#d9f3ee70',
	padding: '1rem',
	borderRadius: '10px',
	boxShadow: isMobile
		? 'none'
		: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
});

export const homeContainerStyles = (isMobile) => ({
	backgroundColor: '#d9f3ee9e',
	alignItems: 'center',
	padding: '1rem',
	borderRadius: '10px',
	boxShadow: isMobile
		? 'none'
		: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
});

export const GREEN = '#b2e2d8';
export const ORANGE = '#dd9148';

// #5acdb8 button on hover
