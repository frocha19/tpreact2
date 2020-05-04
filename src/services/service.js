import axios from "axios";
export class Service {
  baseUrl = "http://localhost:9000/api/v1/instrumento/";
  getAll() {
    return axios.get(this.baseUrl).then((res) => res.data);
  }
  getOne(id) {
    return axios.get(this.baseUrl + id).then((res) => res.data);
  }
  save(instrumento, imagen) {
    instrumento.imagen = this.saveImage(imagen);
    return axios.post(this.baseUrl, instrumento).then(console.log);
  }
  update(id, instrumento /*,imagen*/) {
    //this.deleteImage(instrumento.imagen);
    //instrumento.imagen = this.saveImage(imagen);
    return axios.put(this.baseUrl + id, instrumento).then(console.log);
  }
  delete(id) {
    axios.delete(this.baseUrl + id).then(console.log);
  }
  saveImage(imagen) {
    return axios.post(this.baseUrl + "uploadImg", imagen).then(console.log);
  }
  deleteImage(imagen) {
    return axios.delete(this.baseUrl + "deleteImg").then(console.log);
  }
}
