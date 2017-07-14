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
							<li><a href="https://foxnews.com" className="active"><span className="fn">Fox News</span></a></li>
							<li><a href="https://foxbusiness.com"><span className="fb">Fox Business</span></a></li>
							<li><a href="https://foxnewsgo.com"><span className="fn-go">Fox News Go</span></a></li>
							<li><a href="https://radio.foxnews.com"><span className="fnr">Fox News Radio</span></a></li>
							<li><a href="https://nation.foxnews.com"><span className="nat">Fox Nation</span></a></li>
							<li><a href="https://foxnewsinsider.com"><span className="fni">Fox News Insider</span></a></li>
						</ul>
					</div>
				</div>
				<div className="masthead">
					<div>
						<div className="branding">
							<div href="https://www.foxnews.com/" className="logo">Fox News</div>
							<h1>Politics</h1>
						</div>
						<div className="search">
							<div>
								<input type="text" />
								<button onClick={() => window.location.href = 'http://www.foxnews.com/search-results/search?q=integrity&ss=fn&start=0'}>Submit</button>
							</div>
						</div>
						<div className="nav">
							<ul>
								<li><a href="https://www.foxnews.com/">Home</a></li>
								<li><a href="https://video.foxnews.com">Video</a></li>
								<li><a href="https://www.foxnews.com/politics.html" className="active">Politics</a></li>
								<li><a href="https://www.foxnews.com/us.html">U.S.</a></li>
								<li><a href="https://www.foxnews.com/opinion.html">Opinion</a></li>
								<li><a href="https://www.foxbusiness.com/">Business</a></li>
								<li><a href="https://www.foxnews.com/entertainment.html">Entertainment</a></li>
								<li><a href="https://www.foxnews.com/tech.html">Tech</a></li>
								<li><a href="https://www.foxnews.com/science.html">Science</a></li>
								<li><a href="https://www.foxnews.com/health.html">Health</a></li>
								<li><a href="https://www.foxnews.com/travel.html">Travel</a></li>
								<li><a href="https://www.foxnews.com/lifestyle.html">Lifestyle</a></li>
								<li><a href="https://www.foxnews.com/world.html">World</a></li>
								<li><a href="https://www.foxnews.com/shows/index.html">On Air</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
