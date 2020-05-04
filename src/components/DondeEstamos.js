import React, { Component } from "react";
import Navigation from "./Navigation";

class DondeEstamos extends Component {
  static defaultProps = {
    center: {
      lat: -32.8863308,
      lng: -68.8383064,
    },
    zoom: 18,
  };
  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <section className="container">
          <h3>Donde Estamos</h3>
          <div className="mapa">
            <img src={require(`../assets/images/mapa.png`)} alt="Mapa"></img>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default DondeEstamos;
