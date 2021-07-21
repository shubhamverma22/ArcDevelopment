import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

import {
	Button,
	Card,
	CardContent,
	Grid,
	Typography,
	useMediaQuery,
} from "@material-ui/core";

//component
import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";

const useStyle = makeStyles((theme) => ({
	animation: {
		maxWidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "30em",
		},
	},
	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 45,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	buttonContainer: {
		marginTop: "1em",
	},
	learnButtonHero: {
		...theme.typography.learnButton,
		fontSize: "0.9rem",
		height: 45,
		width: 145,
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: "0.7rem",
		height: 35,
		padding: 5,
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2em",
		},
	},
	mainContainer: {
		marginTop: "5em",
		[theme.breakpoints.down("md")]: {
			marginTop: "3em",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "2em",
		},
	},
	heroTextContainer: {
		minWidth: "21.5em",
		marginLeft: "1em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	specialText: {
		fontFamily: "Pacifico",
		color: theme.palette.common.orange,
	},
	subtitle: {
		marginBottom: "1em",
	},
	icon: {
		marginLeft: "2em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
		},
	},
	serviceContainer: {
		marginTop: "12em",
		[theme.breakpoints.down("sm")]: {
			padding: 25,
		},
	},
	revolutionBackground: {
		backgroundImage: `url(${revolutionBackground})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
	revolutionCard: {
		position: "absolute",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: "10em",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "8em",
			paddingBottom: "8em",
			paddingLeft: 0,
			paddingRight: 0,
			borderRadius: 0,
			width: "100%",
		},
	},
	infoBackground: {
		backgroundImage: `url(${infoBackground})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100%",
		width: "100%",
	},
}));

export default function LandingPage() {
	const classes = useStyle();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

	const defaultOptions = {
		loop: true,
		autoplay: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grid container direction="column" className={classes.mainContainer}>
			{/*----Hero Block -----*/}
			<Grid item>
				<Grid
					container
					justifyContent="flex-end"
					alignItems="center"
					direction="row"
				>
					<Grid sm item className={classes.heroTextContainer}>
						<Typography variant="h2" align="center">
							Bringing West Coast Technology
							<br /> to the Manifest
						</Typography>
						<Grid
							container
							justifyContent="center"
							className={classes.buttonContainer}
						>
							<Grid item>
								<Button className={classes.estimateButton} variant="contained">
									Free Estimate
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" className={classes.learnButtonHero}>
									<span style={{ marginRight: 10 }}>Learn More</span>
									<ButtonArrow
										width={15}
										height={15}
										fill={theme.palette.common.blue}
									/>{" "}
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid sm item className={classes.animation}>
						<Lottie options={defaultOptions} height={"100%"} width={"100%"} />
					</Grid>
				</Grid>
			</Grid>
			{/*-----Services Block-----*/}
			<Grid item>
				<Grid
					container
					direction="row"
					className={classes.serviceContainer}
					justifyContent={matchesSM ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: matchesSM ? 0 : "5em",
							textAlign: matchesSM ? "center" : undefined,
						}}
					>
						<Typography variant="h4">Custom Software Development</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							Save Energy. Save Time. Save Money
						</Typography>
						<Typography variant="subtitle1">
							Complete digital Solutions, from investigation to{" "}
							<span className={classes.specialText}>celebration.</span>
						</Typography>
						<Button variant="outlined" className={classes.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>{" "}
						</Button>
					</Grid>
					<Grid item>
						<img
							className={classes.icon}
							alt="custom-software"
							src={customSoftwareIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
			{/*-----IOS/Android App Development Block-----*/}
			<Grid item>
				<Grid
					container
					direction="row"
					className={classes.serviceContainer}
					justifyContent={matchesSM ? "center" : "flex-end"}
				>
					<Grid
						item
						style={{
							textAlign: matchesSM ? "center" : undefined,
						}}
					>
						<Typography variant="h4">iOS/Android App Development</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							Extend Functionality. Extend Access. Increase Engagement
						</Typography>
						<Typography variant="subtitle1">
							Integrate your web experience or create a standalone app
							{matchesSM ? null : <br />} with either mobile platform.
						</Typography>
						<Button variant="outlined" className={classes.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>{" "}
						</Button>
					</Grid>
					<Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
						<img
							className={classes.icon}
							alt="mobie-app-icon"
							src={mobileAppsIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
			{/*-----Website Development Block-----*/}
			<Grid item>
				<Grid
					container
					direction="row"
					className={classes.serviceContainer}
					justifyContent={matchesSM ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: matchesSM ? 0 : "5em",
							textAlign: matchesSM ? "center" : undefined,
						}}
					>
						<Typography variant="h4">Website Development</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							Reach More. Discover More. Sell More.
						</Typography>
						<Typography variant="subtitle1">
							Optimized for Search Engines, built for speed.
						</Typography>
						<Button variant="outlined" className={classes.learnButton}>
							<span style={{ marginRight: 10 }}>Learn More</span>
							<ButtonArrow
								width={10}
								height={10}
								fill={theme.palette.common.blue}
							/>{" "}
						</Button>
					</Grid>
					<Grid item>
						<img
							className={classes.icon}
							alt="custom-software"
							src={websiteIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
			{/*----The Revoluion Card Section */}
			<Grid item>
				<Grid
					container
					style={{ height: "100em", marginTop: "12em" }}
					alignItems="center"
					justifyContent="center"
				>
					<Card className={classes.revolutionCard}>
						<CardContent>
							<Grid
								container
								direction="column"
								style={{ textAlign: "center" }}
							>
								<Grid item>
									<Typography variant="h3" gutterBottom>
										The Revolution
									</Typography>
									<Grid item>
										<Typography variant="subtitle1">
											Visionary insights coupled with cutting-edge technology is
											a recipe for revolution.
										</Typography>
									</Grid>
									<Grid item>
										<Button variant="outlined" className={classes.learnButton}>
											<span style={{ marginRight: 10 }}>Learn More</span>
											<ButtonArrow
												width={10}
												height={10}
												fill={theme.palette.common.blue}
											/>{" "}
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
					<div className={classes.revolutionBackground} />
				</Grid>
			</Grid>
			{/* Information Block */}
			<Grid item>
				<Grid
					container
					style={{ height: "80em" }}
					alignItems="center"
					direction="row"
				>
					<Grid
						item
						container
						style={{
							position: "absolute",
							textAlign: matchesXS ? "center" : "inherit",
						}}
						direction={matchesXS ? "column" : "row"}
						spacing={matchesXS ? 10 : 0}
					>
						<Grid
							item
							style={{
								marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
							}}
						>
							<Grid container direction="column">
								<Typography variant="h2" style={{ color: "white" }}>
									About Us
								</Typography>
								<Typography variant="subtitle2">Let's get Personal</Typography>
								<Grid item>
									<Button
										style={{ color: "white", borderColor: "white" }}
										variant="outlined"
										className={classes.learnButton}
									>
										<span style={{ marginRight: 10 }}>Learn More</span>
										<ButtonArrow width={10} height={10} fill="white" />{" "}
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							sm
							style={{
								marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
								textAlign: matchesXS ? "center" : "right",
							}}
						>
							<Grid container direction="column">
								<Typography variant="h2" style={{ color: "white" }}>
									Contact Us
								</Typography>
								<Typography variant="subtitle2">
									Say hello!{" "}
									<span role="img" aria-label="waving hand">
										👋🏻{" "}
									</span>{" "}
								</Typography>
								<Grid item>
									<Button
										style={{ color: "white", borderColor: "white" }}
										variant="outlined"
										className={classes.learnButton}
									>
										<span style={{ marginRight: 10 }}>Learn More</span>
										<ButtonArrow width={10} height={10} fill="white" />{" "}
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<div className={classes.infoBackground} />
				</Grid>
			</Grid>
			<Grid item>
				{/*------Call To Action Block------ */}
				<CallToAction />
			</Grid>
		</Grid>
	);
}
