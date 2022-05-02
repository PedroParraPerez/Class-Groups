import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./component/footer";
import { Navbar } from "./component/Navbar";
import ScrollToTop from "./component/scrollToTop";
import { Atendancy } from "./pages/Atendancy";
import { Home } from "./pages/Home";

import { RandomGroups } from "./pages/RandomGroups";
import injectContext from "./store/appContext";




const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<Navbar/>
					<Switch>
					<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/randomgroups">
							<RandomGroups />
						</Route>
						<Route exact path="/attendancy">
							<Atendancy />
						</Route>

						<Route>
							<h1 className="text-center mt-5">Not found!</h1>
						</Route>
					</Switch>
					<Footer/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
