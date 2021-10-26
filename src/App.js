import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    images: null,
  };
  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=banan&page=1&key=23265358-c42edc99dfdc4b7aade5bc218&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((images) => this.setState({ images }));
  }

  render() {
    return <div>{this.state.images && <div>{this.state.images.id}</div>}</div>;
  }
}
