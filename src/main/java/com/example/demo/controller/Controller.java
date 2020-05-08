package com.example.demo.controller;

import java.nio.file.Path;

import javax.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.DTO;
import com.example.demo.service.IService;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping(path = "/api")
public class Controller {
	private IService service;

	public Controller(IService service) {
		this.service = service;
	}

	@GetMapping("/instrumentos")
	@Transactional
	public ResponseEntity getAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Mensaje\": \"Error al traer todos los datos.\"}");
		}
	}

	@GetMapping("/instrumentos/{id}")
	@Transactional
	public ResponseEntity getOne(@PathVariable int id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Mensaje\": \"Error al cargar el id = "+id+".\"}");
		}
	}

	@PostMapping("/instrumentos")
	@Transactional
	public ResponseEntity post(@RequestBody DTO DTO) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.save(DTO));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Mensaje\": \"Error al dar de alta este registro.\"}");
		}
	}

	@PutMapping("/instrumentos/{id}")
	@Transactional
	public ResponseEntity put(@PathVariable int id, @RequestBody DTO DTO) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.update(id, DTO));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Mensaje\": \"Error al modificar este registro.\"}");
		}
	}

	@DeleteMapping("/instrumentos/{id}")
	@Transactional
	public ResponseEntity delete(@PathVariable int id) {
		try {
			//service.deleteImage(service.findById(id).getImagen());
			service.delete(id);
			return ResponseEntity.status(HttpStatus.OK).body("{\"Mensaje\": \"Registro borrado\"}");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Mensaje\": \"Error al borrar este registro.\"}");
		}
	}

	// Metodos agregados
	@PostMapping("/instrumentos/uploadImg")
	public String uploadImg(@RequestParam("imageFile") MultipartFile imageFile) {
		String value = "";
		try {
			service.saveImg(imageFile);
			value = "..\\..\\..\\TP2React-backend\\src\\main\\resources\\images" + imageFile.getOriginalFilename();
			return value;
		} catch (Exception e) {
			return "Error";
		}
	}
	@DeleteMapping("/instrumentos/deleteImg")
	public ResponseEntity deleteImg(@PathVariable String path) {
		try {
			service.deleteImage(path);
			return ResponseEntity.status(HttpStatus.OK).body("{\"Mensaje\": \"Imagen borrada\"}");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Mensaje\": \"Error al borrar esta imagen.\"}");
		}
	}
}