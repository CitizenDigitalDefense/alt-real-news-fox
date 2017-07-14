import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import { Helmet } from "react-helmet";

import FoxHeader from "../component-library/Navigation/FoxHeader";
import FoxFooter from '../component-library/Navigation/FoxFooter';

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		const appDescription = 'The Toolbox includes both a local New York City policies and anti-displacement policies from comparable cities across the country. Information on policy in the toolbox includes research, press reports, legislation, interviews from engaged local community groups and policy experts.';
		return (
			<div className="wrapper">
				<Helmet>
					<link rel="icon" type="image/png" href={require('../assets/favicon.png')} />
				</Helmet>
				<FoxHeader />
				<main>
					<Route
						path="/:id"
						render={props => (
							<LazyRoute {...props} component={import("./Story")} />
						)}
					/>
				</main>
				<FoxFooter/>
			</div>
		);
	}
}
