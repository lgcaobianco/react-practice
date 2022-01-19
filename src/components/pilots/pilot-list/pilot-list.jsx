import React, { Component } from "react";
import "./pilot-list.css";

export default class PilotList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pilots: [],
      timesClicked: 0,
    };
    console.log("built " + typeof this.state.pilots);
  }

  componentDidMount() {
    fetch("http://localhost:3000/pilots", {
      method: "GET",
      headers: {
        Authorization: "eyJleHBpcmF0aW9uRGF0ZSI6MTY0MjU1NjI2OTcxNX0=",
      },
    })
      .then((res) => {
        res.json().then((pilots) => {
          console.log(pilots);
          this.setState({ pilots: pilots, loading: false });
        });
      })
      .catch((err) => {
        console.log(`couldnt reach api ${JSON.stringify(err)}`);
      });
  }

  render() {
    return this.state.loading ? (
      <h1>Carregando....</h1>
    ) : (
      <ul>
        <p>Ola {typeof this.state.pilots}</p>
        {this.state.pilots.map((pilot) => (
          <li key={pilot.id} onClick={this.handleClick}>
            Pilot name: {pilot.name}, titles: {pilot.titles}
          </li>
        ))}
        <p>Times clicked was: {this.state.timesClicked}</p>
      </ul>
    );
  }

  handleClick = (e) => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
    console.log(`vezes clicado ${this.state.timesClicked}`);
    this.props.handleClick(e.target.value);
  };
}
