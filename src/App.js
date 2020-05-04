import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import DetalleProducto from "./components/DetalleProducto";
import DondeEstamos from "./components/DondeEstamos";
import Productos from "./components/Productos";
import ABM from "./components/ABM";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/dondeEstamos" component={DondeEstamos}></Route>
        <Route path="/productos" component={Productos}></Route>
        <Route path="/detalleProducto/:id" component={DetalleProducto}></Route>
        <Route path="/abm" component={ABM}></Route>
        <Route path="/modal/:id" component={Modal}></Route>
        <Route path="/*" component={Home}></Route>
      </Switch>
    );
  }
}

export default App;
