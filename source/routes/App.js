import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import { Helmet } from "react-helmet";

import FoxHeader from "../component-library/Navigation/FoxHeader";
import FoxFooter from '../component-library/Navigation/FoxFooter';
import EdFooter from '../component-library/Navigation/EdFooter';

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentWillMount() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-102643571-1', 'auto');
		ga('send', 'pageview');
	}
	render() {
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
				<EdFooter />
			</div>
		);
	}
}
