import { observable, action } from "mobx";
import axios from 'axios';
import { isProduction } from '../utils/constants';

export default class ToolState {
  @observable stories;
  @observable story;

  constructor() {
    this.stories = [];
    this.story = {};
  }

  async fetchData(path) {
    const params = {
      slug: path,
    };
    let uri = isProduction ? 'https://fake-news-api.herokuapp.com/stories' : 'http://localhost:5000/stories';
    // const { data } = await axios.get(uri, { params });
    const data = require('./temp.json');
    data.articles ? this.setData(data.articles) : this.setSingle(data.article);
  }

  @action setData(data) {
    this.stories = shuffle(data);
  }

  @action setSingle(data) {
    this.story = data;
  }

  @action clearItems() {
    this.stories = [];
    this.story = {};
  }
}
