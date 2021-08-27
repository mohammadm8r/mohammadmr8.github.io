import React from "react";
import AppBar from "@material-ui/core/AppBar";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { pink, blue } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom';

const drawerWidth = 240;


const useStyles = theme => ({
	card: {
		margin: "10px",
		minWidth: 150,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: blue[100],
	},
	infoCard: {
		margin: "10px",
		minWidth: 150,
		width: "500px",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "20px",
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
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		fontFamily: "Shabnam",
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
		padding: '7px',
	},

	inputRoot: {
		fontFamily: "Shabnam",
		color: "inherit",
	},
	sidebar: {
		alignItems: "center",
		justifyContent: "center",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	pos: {
		fontFamily: "Shabnam",
		alignItems: "center",
		justifyContent: "center",
	},
	cardCont: {
		display: "flex",
		flexDirection: "row",
		paddingBottom: "1px",
	},
	details: {
		fontFamily: "Shabnam",
		fontSize: 15,
		paddingLeft: "5%",
		fontWeight: "Bold",
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 240,
	},
	appBarSpacer: theme.mixins.toolbar,
	contentt: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto",
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		paddingRight: theme.spacing(30),
		// paddingLeft: theme.spacing(30),
	},
});

class Header extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {

	// 	}
	// }
	
	render(){
		// console.log(this.props.data.user_name)
		const { classes } = this.props;
		return (
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					{/* <Avatar alt="AUT Logo" src={Logo} /> */}
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{/* <Typography className={classes.title} variant="h6" noWrap>
							{this.props.data.user_name} {this.props.data.user_family}
						</Typography> */}
						<Link to={{pathname:"/"}} style={{color: 'inherit'}}>
							<IconButton color="inherit">
								<PowerSettingsNewIcon />
							</IconButton>
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(useStyles)(Header);