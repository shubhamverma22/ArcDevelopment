/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//nav bar items
import logo from "../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";

//Drawer Navigation
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
//CSS of the Components
const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar, //this helps to push the underneath content from any component i.e if some text is hide under any component it helps to uncover it
		marginBottom: "3em",
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
		},
	},
	logo: {
		height: "8em",
		[theme.breakpoints.down("md")]: {
			height: "7em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em",
		},
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
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
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
	drawerIcon: {
		height: "50px",
		width: "50px",
	},
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	drawer: {
		backgroundColor: theme.palette.common.blue,
	},
	drawerItem: {
		...theme.typography.tabs,
		fontFamily: "Raleway",
		textTransform: "none", //to lowercase the letter
		fontWeight: 700,
		fontSize: "1rem",
		color: "white",
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
		},
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange,
		fontSize: "1rem",
		textTransform: "none",
		color: "white",
		"&:hover": {
			opacity: 1,
			backgroundColor: theme.palette.common.orange,
		},
	},
	drawerItemSelected: {
		"& .MuiListItemText-root": {
			opacity: 1,
		},
	},
	appBar: {
		zIndex: theme.zIndex.modal + 1, //it's basically a component underneath of sidebar + 1
	},
}));

const Header = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [anchorEl, setAnchorEl] = useState(null); //This state tells whichever component we clicked on & where we want the menu to be rendered
	const [openMenu, setOpenMenu] = useState(false); //This state tells the visibility of the menu items

	const [openDrawer, setOpenDrawer] = useState(false);

	const handleChange = (e, newValue) => {
		props.setValue(newValue);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(i);
	};

	const menuOptions = [
		{ name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
		{
			name: "Custom Software Development",
			link: "/customsoftware",
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: "IOS/Android App Development",
			link: "/mobileapps",
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: "Website Development",
			link: "/websites",
			activeIndex: 1,
			selectedIndex: 3,
		},
	];
	const routes = [
		{ name: "Home", link: "/", activeIndex: 0 },
		{
			name: "Services",
			link: "/services",
			activeIndex: 1,
			ariaOwns: anchorEl ? "simple-menu" : undefined,
			ariaPopup: anchorEl ? "true" : undefined,
			mouseOver: (event) => handleClick(event),
		},
		{ name: "The Revolution", link: "/revolution", activeIndex: 2 },
		{ name: "About Us", link: "/about", activeIndex: 3 },
		{ name: "Contact Us", link: "/contact", activeIndex: 4 },
	];

	useEffect(() => {
		[...menuOptions, ...routes].forEach((route) => {
			// console.log(route);
			switch (window.location.pathname) {
				case `${route.link}`:
					if (props.value !== route.activeIndex) {
						props.setValue(route.activeIndex);
						if (
							route.selectedIndex &&
							route.selectedIndex !== props.selectedIndex
						) {
							props.setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				default:
					break;
			}
		});
	}, [props.value, menuOptions, props.selectedIndex, routes, props]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={props.value}
				onChange={handleChange}
				className={classes.tabContainer}
				indicatorColor="primary"
			>
				{routes.map((route, index) => (
					<Tab
						key={`${route}${index}`}
						className={classes.tab}
						component={Link}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
					></Tab>
				))}
			</Tabs>
			<Button
				component={Link}
				to="/estimate"
				variant="contained"
				color="secondary"
				className={classes.button}
				onClick={() => props.setVlue(5)}
			>
				Free Estimate
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				classes={{ paper: classes.menu }}
				elevation={0}
				keepMounted //helps in SEO
				style={{ zIndex: 1302 }}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={`${option}${i}`}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							props.setValue(1);
						}}
						selected={i === props.selectedIndex && props.value === 1}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map((route) => (
						<ListItem
							key={`${route}${route.activeIndex}`}
							classes={{ selected: classes.drawerItemSelected }}
							onClick={() => {
								setOpenDrawer(false);
								props.setValue(route.activeIndex);
							}}
							divider
							button
							component={Link}
							to={route.link}
							selected={props.value === route.activeIndex}
						>
							<ListItemText className={classes.drawerItem} disableTypography>
								{" "}
								{route.name}
							</ListItemText>
						</ListItem>
					))}
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							props.setValue(5);
						}}
						divider
						button
						component={Link}
						to="/estimate"
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						selected={props.value === 5}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to="/"
							onClick={() => props.setValue(0)}
							disableRipple
							className={classes.logoContainer}
						>
							<img alt="company logo" className={classes.logo} src={logo} />
						</Button>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;
