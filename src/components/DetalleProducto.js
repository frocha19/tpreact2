import React, { Component } from "react";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Envio from "./Envio";
import Service from "../services/service";

class DetalleProducto extends Component {
  constructor(props) {
  super(props);
  this.state = {
    instrumento: {
      id: "",
      instrumento: "",
      marca: "",
      modelo: "",
      imagen: "",
      precio: "",
      costoEnvio: "",
      cantidadVendida: "",
      descripcion: "",
    },
  };
}

  componentDidMount() {
    Service.getOne(this.props.match.params.id).then((response) => {
      this.setState({ instrumento: response.data });
    })
    .catch(e => {
      console.log(e);
    });;
  }

  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <h3 className="titulo">Detalles del Producto</h3>
        <Card className="tarjetaDetalle">
          <Container>
            <Row>
              <Col>
                <img
                  className="imagenDetalle"
                  src={this.state.instrumento.imagen}
                  alt="Imagen del Producto"
                />
                <h6 className="descripcion">
                  Descripcion:
                  <br />
                  <br />
                  {this.state.instrumento.descripcion}
                </h6>
              </Col>
              <Col className="colDos">
                <Row className="cantidadVendidos">
                  {this.state.instrumento.cantidadVendida} vendidos
                </Row>
                <br />
                <Row>
                  <h2>{this.state.instrumento.instrumento}</h2>
                </Row>
                <br />
                <Row>
                  <h3>Precio:${this.state.instrumento.precio}</h3>
                </Row>
                <br />
                <Row>
                  <h5>Marca:{this.state.instrumento.marca}</h5>
                </Row>
                <Row>
                  <h5>modelo:{this.state.instrumento.modelo}</h5>
                </Row>
                <br />
                <Row>
                  <h6>Costo Envio:</h6>
                </Row>
                <Row>
                  <Envio costoEnvio={this.state.instrumento.costoEnvio}></Envio>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav.Link href="/productos">
                  <h3>Volver</h3>
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default DetalleProducto;
