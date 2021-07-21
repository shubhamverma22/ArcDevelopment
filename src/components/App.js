import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";

function App() {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route exact path="/" component={LandingPage}></Route>
					<Route
						exact
						path="/services"
						component={() => <div>Service</div>}
					></Route>
					<Route
						exact
						path="/customsoftware"
						component={() => <div>Custom Software</div>}
					></Route>
					<Route
						exact
						path="/mobileapps"
						component={() => <div>Mobile Apps</div>}
					></Route>
					<Route
						exact
						path="/websites"
						component={() => <div>Websites</div>}
					></Route>
					<Route
						exact
						path="/revolution"
						component={() => <div>Revolution</div>}
					></Route>
					<Route exact path="/about" component={() => <div>About</div>}></Route>
					<Route
						exact
						path="/contact"
						component={() => <div>Contact</div>}
					></Route>
					<Route
						exact
						path="/estimate"
						component={() => <div>Estimate</div>}
					></Route>
				</Switch>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</Router>
		</ThemeProvider>
	);
}

export default App;
