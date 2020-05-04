import React, { Component } from "react";
import { Service } from "../services/service";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      instrumento: [
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
    this.Service = new Service();
  }

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    if (this.props.match.params.id > 0) {
      this.Service.getOne(this.props.match.params.id).then((data) => {
        this.setState({ instrumento: data });
      });
    }
  }

  render() {
    const guardar = (id) => {
      if (id > 0) {
        const instr = {
          id: id,
          instrumento: document.getElementById("instrumento"),
          marca: document.getElementById("marca"),
          modelo: document.getElementById("modelo"),
          imagen: "otra imagen",
          precio: document.getElementById("precio"),
          costoEnvio: document.getElementById("costoEnvio"),
          cantidadVendida: document.getElementById("cantidadVendida"),
          descripcion: document.getElementById("descripcion"),
        };
        this.Service.update(id, instr);
      } else {
        const instr = {
          id: id,
          instrumento: document.getElementById("instrumento"),
          marca: document.getElementById("marca"),
          modelo: document.getElementById("modelo"),
          imagen: "otra imagen",
          precio: document.getElementById("precio"),
          costoEnvio: document.getElementById("costoEnvio"),
          cantidadVendida: document.getElementById("cantidadVendida"),
          descripcion: document.getElementById("descripcion"),
        };
        this.Service.save(instr);
      }
      this.props.history.replace("/abm");
    };

    const cancelar = () => {
      this.props.history.replace("/abm");
    };

    const uploadImagen = () => {
      var data = new FormData();
      var imagedata = document.querySelector('input[type="file"]').files[0];
      data.append("data", imagedata);

      fetch("http://localhost:9000/api/v1/instrumento/uploadImg", {
        mode: "no-cors",
        method: "POST",
        body: data,
      }).then(
        function (res) {
          console.log(res);
        },
        function (e) {
          alert("Error submitting form!");
        }
      );
    };

    const titulo = "Agregar un Instrumento";

    return (
      <div className="container contenedor">
        <h2>{titulo}</h2>
        <div>
          <span>
            Instrumento{" "}
            <input
              className="campo"
              type="text"
              name="instrumento"
              id="instrumento"
              title="Escriba el Nombre del Instrumento"
              placeholder="Escriba el nombre del instrumento..."
              value={this.state.instrumento.instrumento}
            />
          </span>
        </div>
        <div>
          <span>
            Marca{" "}
            <input
              className="campo"
              type="text"
              name="marca"
              id="marca"
              title="Escriba la Marca del Instrumento"
              placeholder="Escriba la marca del instrumento..."
              value={this.state.instrumento.marca}
            />
          </span>
        </div>
        <div>
          <span>
            Modelo{" "}
            <input
              className="campo"
              type="text"
              name="modelo"
              id="modelo"
              title="Escriba el Modelo del Instrumento"
              placeholder="Escriba el modelo del instrumento..."
              value={this.state.instrumento.modelo}
            />
          </span>
        </div>
        <div>
          <span>
            Precio{" "}
            <input
              className="campo"
              type="text"
              name="precio"
              id="precio"
              title="Escriba el Precio del Instrumento"
              placeholder="Escriba el precio del instrumento..."
              value={this.state.instrumento.precio}
            />
          </span>
        </div>
        <div>
          <span>
            Costo de Envio{" "}
            <input
              className="campo"
              type="costoEnvio"
              name="costoEnvio"
              id="ftext"
              title="Escriba un numero, si es Gratis escriba G"
              placeholder="Escriba un numero, si es Gratis escriba G..."
              value={this.state.instrumento.costoEnvio}
            />
          </span>
        </div>
        <div>
          <span>
            Cantidad Vendida{" "}
            <input
              className="campo"
              type="number"
              defaultValue="0"
              name="cantidadVendida"
              id="cantidadVendida"
              title="Seleccione la Cantidad Vendida"
              value={this.state.instrumento.cantidadVendida}
            />
          </span>
        </div>
        <div>
          <span>
            Descripcion{" "}
            <input
              className="campo"
              type="text"
              name="descripcion"
              id="descripcion"
              title="Escriba la Descripcion del Instrumento"
              placeholder="Escriba la descripcion del instrumento..."
              value={this.state.instrumento.descripcion}
            />
          </span>
        </div>
        {this.state.instrumento.imagen && (
          <span>
            s Nombre de la Imagen:{" "}
            <input
              type="text"
              name="imageFile"
              id="imageFile"
              value={this.state.instrumento.descripcion}
              disabled
            />
          </span>
        )}
        {this.props.match.params.id > 1 && (
          <form action="" encType="multipart/form-data">
            <span>
              Imagen{" "}
              <input
                className="campo"
                type="file"
                name="imageFile"
                id="imageFile"
                onChange={this.fileSelectedHandler}
                title="Seleccione una imagen..."
              />
            </span>
            {/* <input
              type="button"
              value="Guardar Imagen"
              onClick={this.uploadImagen}
            /> */}
          </form>
        )}
        {!this.state.instrumento.imagen && (
          <form action="" encType="multipart/form-data">
            <span>
              Imagen{" "}
              <input
                className="campo"
                type="file"
                name="imageFile"
                id="imageFile"
                onChange={this.fileSelectedHandler}
                title="Seleccione una imagen..."
              />
            </span>
            {/* <input
              type="button"
              value="Guardar Imagen"
              onClick={this.uploadImagen}
            /> */}
          </form>
        )}
        <br />
        <button
          className="btn btn-primary"
          onClick={guardar(this.props.match.params.id)}
        >
          Guardar
        </button>
        <button className="btn btn-danger" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    );
  }
}

export default Modal;
