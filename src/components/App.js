import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={() => <div>Home</div>}></Route>
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
			</Router>
		</ThemeProvider>
	);
}

export default App;
