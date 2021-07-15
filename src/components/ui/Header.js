import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

//nav bar items
import logo from "../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar, //this helps to push the underneath content from any component i.e if some text is hide under any component it helps to uncover it
		marginBottom: "3em",
	},
	logo: {
		height: "8em",
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px",
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: "white",
		borderRadius: "0px",
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
		},
	},
}));

const Header = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null); //This state tells whichever component we clicked on & where we want the menu to be rendered
	const [open, setOpen] = useState(false); //This state tells the visibility of the menu items

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpen(false);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4);
		}
	}, [value]);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Button
							component={Link}
							to="/"
							onClick={() => setValue(0)}
							disableRipple
							className={classes.logoContainer}
						>
							<img alt="company logo" className={classes.logo} src={logo} />
						</Button>
						<Tabs
							value={value}
							onChange={handleChange}
							className={classes.tabContainer}
							indicatorColor="primary"
						>
							<Tab
								className={classes.tab}
								component={Link}
								to="/"
								label="Home"
							/>
							<Tab
								aria-owns={anchorEl ? "simple-menu" : undefined}
								aria-haspopup={anchorEl ? "true" : undefined}
								className={classes.tab}
								component={Link}
								onMouseOver={(event) => handleClick(event)}
								to="/services"
								label="Services"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/revolution"
								label="Revolution"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/about"
								label="About Us"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/contact"
								label="Contact Us"
							/>
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
							classes={{ paper: classes.menu }}
							elevation={0}
						>
							<MenuItem
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/services"
								classes={{ root: classes.menuItem }}
							>
								Services
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/customsoftware"
								classes={{ root: classes.menuItem }}
							>
								Custom Software Development
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/mobileapps"
								classes={{ root: classes.menuItem }}
							>
								Mobile App Development
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									setValue(1);
								}}
								component={Link}
								to="/websites"
								classes={{ root: classes.menuItem }}
							>
								Website Development
							</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;