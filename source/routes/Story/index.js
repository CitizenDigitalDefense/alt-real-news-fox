import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Parser as HtmlToReactParser } from 'html-to-react';

import DataWrapper from "./StoryDataWrapper";

@DataWrapper
@observer
export default class StoryPage extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		const story = this.store.storyState.story;
		const scraped = this.store.storyState.story.scraped;
		console.log(story)
		return (
			<div className="page">
				<Helmet>
					<title>{story.headline}</title>
				</Helmet>
				{!scraped && <article className="story">
					<div className="story-header">
						<h1>Your article is being converted!</h1>
						<h2>Check back to this URL in a few minutes.</h2>
					</div>
				</article>}
				{scraped && <article className="story">
					<div className="story-header">
						<h2>{story.category || 'ANALYSIS'}</h2>
						<h1>{story.headline}</h1>
						<div className="story-header-meta">
							{story.byLine && story.byLine.length > 0 && <div className="byline">
								<p>
									By&ensp;
									{Array.prototype.map.call(story.byLine, (by, index, arr) => {
										return (
											<span>
												<strong>
													{by.name}
												</strong>
												{(index !== arr.length - 1) ? ' and ' : '' }
											</span>
										);
									})}
								 &ensp;• Published {story.dateline} • <a href={`https://nytimes.com${story.slug}`} target="_blank"><strong>NYT</strong></a>
								</p>
							</div>}
							{story.byLine && story.byLine.name && <div className="byline">
								{story.byLine.image ? <img src={`${story.byLine.image}`} /> : ''}
								{story.byLine.name ? <p>By <strong>{story.byLine.name}</strong> • Published {story.dateline} • <a href={`https://nytimes.com${story.slug}`} target="_blank"><strong>NYT</strong></a></p> : <p>Published {story.dateline} • <a href={`https://nytimes.com${story.slug}`} target="_blank"><strong>NYT</strong></a></p>}
							</div>}
							{!story.byLine && <div className="byline">
								<p>Published {story.dateline} • <a href={`https://www.nytimes.com${story.slug}`} target="_blank">NYT</a></p>
							</div>}
						</div>
					</div>
					<div className="story-content">
						{story.leadImage && <div className="lead-image">
							<img src={story.leadImage.thumb} />
							{(story.leadImage.caption || story.leadImage.credit) && <div>
								{story.leadImage.caption}<span>&ensp;{story.leadImage.credit}</span>
							</div>}
						</div>}
						{story.story && story.story.paragraphs && Array.prototype.map.call(story.story.paragraphs, (html, index) => {
							const htmlToReactParser = new HtmlToReactParser();
							const reactElement = htmlToReactParser.parse(html);
							return (
								<p>
									{reactElement}
								</p>
							);
						})}
						<div className="more-content">
							<h4>Stories You May Like</h4>
							<ul>
								{story.more && Array.prototype.map.call(story.more.slice(0, 3), (more) => {
									return (
										<li>
											<a href={more.href}>
												<img src={more.thumb} />
												<h5>{more.headline}</h5>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="more-content">
							<h4>More Stories</h4>
							<ul>
								{story.more && Array.prototype.map.call(story.more.slice(3), (more) => {
									return (
										<li>
											<a href={more.href}>
												<img src={more.thumb} />
												<h5>{more.headline}</h5>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="trending-sidebar">
						<h4>Trending This Day</h4>
						<ul>
							{story.trending && Array.prototype.map.call(story.trending, (trend) => {
								return (
									<li>
										<a href={trend.href}><h5>{trend.headline}</h5></a>
									</li>
								);
							})}
						</ul>
					</div>
				</article>}
			</div>
		);
	}
}
