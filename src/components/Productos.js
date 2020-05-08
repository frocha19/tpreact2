import React, { Component } from "react";
import Navigation from "./Navigation";
import Service from "../services/service";
import Tarjeta from "./Tarjeta";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [],
    };
  }

  componentDidMount() {
    Service.getAll()
      .then((response) => {
        this.setState({ instrumentos: response.data });
        console.log(this.state.instrumentos);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const instruments = this.state.instrumentos.map((instrumento, i) => {
      return (
        <Tarjeta
          id={instrumento.id}
          nombre={instrumento.instrumento}
          marca={instrumento.marca}
          modelo={instrumento.modelo}
          imagen={instrumento.imagen}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          cantidadVendida={instrumento.cantidadVendida}
          descripcion={instrumento.descripcion}
        ></Tarjeta>
      );
    });
    return (
      <React.Fragment>
        <Navigation> </Navigation> <h2 className="titulo"> Productos </h2>{" "}
        <Container fluid="md">
          <Col> {instruments > 0} </Col>{" "}
        </Container>{" "}
      </React.Fragment>
    );
  }
}

export default Productos;
