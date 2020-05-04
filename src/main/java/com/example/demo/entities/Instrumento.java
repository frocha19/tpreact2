package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Instrumento {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "instrumento_instrumento")
	private String instrumento;
	@Column(name = "instrumento_marca")
	private String marca;
	@Column(name = "instrumento_modelo")
	private String modelo;
	@Column(name = "instrumento_iamgen")
	private String imagen;
	@Column(name = "instrumento_precio")
	private String precio;
	@Column(name = "instrumento_costoEnvio")
	private String costoEnvio;
	@Column(name = "instrumento_cantidadVendida")
	private String cantidadVendida;
	@Column(name = "instrumento_descripcion")
	private String descripcion;

	public Instrumento() {
		super();
	}

	public Instrumento(int id, String instrumento, String marca, String modelo, String imagen, String precio,
			String costoEnvio, String cantidadVendida, String descripcion) {
		super();
		this.id = id;
		this.instrumento = instrumento;
		this.marca = marca;
		this.modelo = modelo;
		this.imagen = imagen;
		this.precio = precio;
		this.costoEnvio = costoEnvio;
		this.cantidadVendida = cantidadVendida;
		this.descripcion = descripcion;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getInstrumento() {
		return instrumento;
	}

	public void setInstrumento(String instrumento) {
		this.instrumento = instrumento;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}

	public String getCostoEnvio() {
		return costoEnvio;
	}

	public void setCostoEnvio(String costoEnvio) {
		this.costoEnvio = costoEnvio;
	}

	public String getCantidadVendida() {
		return cantidadVendida;
	}

	public void setCantidadVendida(String cantidadVendida) {
		this.cantidadVendida = cantidadVendida;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}