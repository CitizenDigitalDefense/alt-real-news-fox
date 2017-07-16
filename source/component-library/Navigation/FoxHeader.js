import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class FoxHeader extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<header className="fox-header">
				<div className="hello-bar">
					<div className="network">
						<ul>
							<li><a className="active"><span></span></a></li>
							<li><a><span></span></a></li>
							<li><a><span></span></a></li>
							<li><a><span></span></a></li>
							<li><a><span></span></a></li>
							<li><a><span></span></a></li>
						</ul>
					</div>
				</div>
				<div className="masthead">
					<div>
						<div className="branding">
							<div className="logo">Fox News</div>
							<h1>Politics</h1>
						</div>
						<div className="search">
							<div>
								<input type="text" />
								<button>Submit</button>
							</div>
							<img src={require('../../assets/magnify-white.png')} />
						</div>
						<div className="nav">
							<ul>
								<li><a>U.S.</a></li>
								<li><a className="active">Politics</a></li>
								<li><a>Opinion</a></li>
								<li><a>Business</a></li>
								<li><a>Entertainment</a></li>
								<li><a>Tech</a></li>
								<li><a>Science</a></li>
								<li><a>Health</a></li>
								<li><a>Travel</a></li>
								<li><a>Lifestyle</a></li>
								<li><a>World</a></li>
								<li><a>On Air</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
