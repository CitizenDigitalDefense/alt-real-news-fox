import React, { Component } from 'react';
import axios from 'axios';
import DataWrapper from "../../routes/Story/StoryDataWrapper";

@DataWrapper
class EdFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      change: null,
      revealed: false,
      thoughts: null,
      sent: false,
    };
    this.store = this.props.store;
  }
  sendThoughts() {
    this.setState({ ...this.state, sent: true });
    axios.post('https://info-front-api.herokuapp.com/responses', {
      pathname: window.location.pathname,
      site: 'fox',
      change: this.state.change,
      thoughts: this.state.thoughts,
    });
  }
  render() {
    const story = this.store.storyState.story;
    return (
      <div className="footer">
        {!this.state.read && <div className="footer__finish-prompt">
          <p>Finish the article?</p><button onClick={() => this.setState({ ...this.state, read: true })}>Finished!</button>
        </div>}
        {(this.state.read && this.state.change == null) && <div className="footer__initial-thoughts">
          <p>Has this article changed your views?</p>
          <button onClick={() => this.setState({ ...this.state, revealed: true, change: 0 })}>No</button>
          <button onClick={() => this.setState({ ...this.state, revealed: true, change: 1 })}>Somewhat</button>
          <button onClick={() => this.setState({ ...this.state, revealed: true, change: 2 })}>Yes</button>
        </div>}
        {(this.state.read && this.state.change != null) && <div className="footer__conclusion">
          <h5>This is an article from the New York Times</h5>
          <a href={`https://nytimes.com${story.slug}`} target="_blank">{`https://nytimes.com${story.slug}`}</a>
          <p>I'm concerned that myself and others do not hear those they disagree with. I made two parody sites, one that presents Fox News content to NY Times readers and vice versa, with the hope we will judge arguments and information by their own strength.</p>
          <textarea placeholder="If you have any thoughts or feelings, send us them!" onChange={(e) => this.setState({ ...this.state, thoughts: e.target.value })} disabled={this.state.sent}></textarea>
          {!this.state.sent ? <button onClick={() => this.sendThoughts()}>Send Thoughts</button> : <p><strong>Sent! Thank you!</strong></p>}
          <br/>
          <small>I make no money off this site, do not claim any content to be my own, and do my best to attribute work.</small>
        </div>}
      </div>
    );
  }
}

export default EdFooter;
