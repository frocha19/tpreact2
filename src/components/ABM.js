import React, { Component } from "react";
import Navigation from "./Navigation";
import Service from "../services/service";

class ABM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [
        {
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
      ],
    };
  }

  componentDidMount() {
    Service.getAll().then((response) => {
      this.setState({ instrumentos: response.data });
      console.log(this.state.instrumentos);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    const instruments = this.state.instrumentos.map((instrumento, i) => {
      return (
        <tr key={instrumento.id}>
          <td>{instrumento.id}</td>
          <td>
            <img className="imagenABM" src={instrumento.imagen} />
          </td>
          <td>{instrumento.instrumento}</td>
          <td>{instrumento.marca}</td>
          <td>{instrumento.modelo}</td>
          <td>{instrumento.descripcion.substring(0, 30).concat("...")}</td>
          <td>{instrumento.cantidadVendida}</td>
          <td>{instrumento.precio}</td>
          <td>{instrumento.costoEnvio}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => {
                this.props.history.replace("/modal/" + instrumento.id);
              }}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.history.replace("/abm");
              }}
            >
              Eliminar
            </button>
          </td>
        </tr>
      );
    });
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <div className="abmTabla">
          <h1>ABM Instrumento</h1>
          <div className="tabla">
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                this.props.history.replace("/modal/0");
              }}
            >
              Agregar un Instrumento
            </button>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Instrumento</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Cantidad Vendida</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Costo de Envio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>{instruments > 0}</tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ABM;
