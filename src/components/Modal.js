import React, { Component } from "react";
import Service from "../services/service";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumento: [],
    };
    this.onChangeInstrumento = this.onChangeInstrumento.bind(this);
    this.onChangeMarca = this.onChangeMarca.bind(this);
    this.onChangeModelo = this.onChangeModelo.bind(this);
    this.onChangePrecio = this.onChangePrecio.bind(this);
    this.onChangeCostoEnvio = this.onChangeCostoEnvio.bind(this);
    this.onChangeCantidadVendida = this.onChangeCantidadVendida.bind(this);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.saveInstrumento = this.saveInstrumento.bind(this);
    this.cancelar=this.cancelar.bind(this);
    this.uploadImagenr=this.uploadImagen.bind(this);
  }

  onChangeInstrumento(e) {
    this.setState({
      Iinstrumento: e.target.value
    });
  }
  onChangeMarca(e) {
    this.setState({
      Imarca: e.target.value
    });
  }
  onChangeModelo(e) {
    this.setState({
      Imodelo: e.target.value
    });
  }
  onChangePrecio(e) {
    this.setState({
      Iprecio: e.target.value
    });
  }
  onChangeCostoEnvio(e) {
    this.setState({
      Icostoenvio: e.target.value
    });
  }
  onChangeCantidadVendida(e) {
    this.setState({
      Icantidadvendida: e.target.value
    });
  }
  onChangeDescripcion(e) {
    this.setState({
      Idescripcion: e.target.value
    });
  }

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    if (this.props.match.params.id !== 0) {
      Service.get(this.props.match.params.id)
        .then((response) => {
          this.setState({ instrumento: response.data });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  saveInstrumento(id) {
    if (id !== 0) {
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
      Service.create(instr);
      this.props.history.replace("/abm");
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
      Service.update(id, instr);
      this.props.history.replace("/abm");
    }
  };

  cancelar(){
    this.props.history.replace("/abm");
  };

 uploadImagen() {
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("data", imagedata);

    fetch("http://localhost:8080/api/instrumentos/uploadImg", {
      mode: "no-cors",
      method: "POST",
      body: data,
    })
      .then(
        function (res) {
          console.log(res);
        },
        function (e) {
          alert("Error submitting form!");
        }
      )
      .catch((e) => {
        console.log(e);
      });
  };


  render() {
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
              onChange={this.onChangeInstrumento}
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
              onChange={this.onChangeMarca}
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
              onChange={this.onChangeModelo}
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
              onChange={this.onChangePrecio}
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
              onChange={this.onChangeCostoEnvio}
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
              onChange={this.onChangeCantidadVendida}
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
              onChange={this.onChangeDescripcion}
            />
          </span>
        </div>
        {this.state.instrumento.imagen && (
          <span>
            Nombre de la Imagen:{" "}
            <input
              type="text"
              name="imageFile"
              id="imageFile"
              value={this.state.instrumento.imagen}
              onChange={this.onChangeInstrumento}
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
            {
              <input
                type="button"
                value="Guardar Imagen"
                onChange={this.uploadImagen}
              />
            }
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
            <input
              type="button"
              value="Guardar Imagen"
              onChange={this.uploadImagen}
            />
          </form>
        )}
        <br />
        <button
          className="btn btn-primary"
          onClick={this.saveInstrumento(this.props.match.params.id)}
        >
          Guardar
        </button>
        <button className="btn btn-danger" onClick={this.cancelar}>
          Cancelar
        </button>
      </div>
    );
  }
}

export default Modal;
