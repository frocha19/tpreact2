package com.example.demo.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.DTO;
import com.example.demo.entities.Instrumento;
import com.example.demo.repository.IRepository;

@Service
public class IService {
	private IRepository repository;

	public IService(IRepository repository) {
		this.repository = repository;
	}

	@Transactional
	public List<DTO> findAll() throws Exception {
		List<Instrumento> entities = repository.findAll();
		List<DTO> DTOs = new ArrayList<>();
		try {
			for (Instrumento i : entities) {
				DTO DTOI = new DTO();
				DTOI.setId(i.getId());
				DTOI.setCantidadVendida(i.getCantidadVendida());
				DTOI.setCostoEnvio(i.getCostoEnvio());
				DTOI.setDescripcion(i.getDescripcion());
				DTOI.setImagen(i.getImagen());
				DTOI.setInstrumento(i.getInstrumento());
				DTOI.setMarca(i.getMarca());
				DTOI.setModelo(i.getModelo());
				DTOI.setPrecio(i.getPrecio());
				DTOs.add(DTOI);
			}
			return DTOs;
		} catch (Exception e) {
			throw new Exception();
		}
	}

	@Transactional
	public DTO findById(int id) throws Exception {
		Optional<Instrumento> entityOptional = repository.findById(id);
		DTO DTOI = new DTO();
		try {
			Instrumento entity = entityOptional.get();
			DTOI.setId(entity.getId());
			DTOI.setCantidadVendida(entity.getCantidadVendida());
			DTOI.setCostoEnvio(entity.getCostoEnvio());
			DTOI.setDescripcion(entity.getDescripcion());
			DTOI.setImagen(entity.getImagen());
			DTOI.setInstrumento(entity.getInstrumento());
			DTOI.setMarca(entity.getMarca());
			DTOI.setModelo(entity.getModelo());
			DTOI.setPrecio(entity.getPrecio());
			return DTOI;
		} catch (Exception e) {
			throw new Exception();
		}
	}

	@Transactional
	public DTO save(DTO DTO) throws Exception {
		Instrumento entity = new Instrumento();
		entity.setCantidadVendida(DTO.getCantidadVendida());
		entity.setCostoEnvio(DTO.getCostoEnvio());
		entity.setDescripcion(DTO.getDescripcion());
		entity.setImagen(DTO.getImagen());
		entity.setInstrumento(DTO.getInstrumento());
		entity.setMarca(DTO.getMarca());
		entity.setModelo(DTO.getModelo());
		entity.setPrecio(DTO.getPrecio());
		try {
			entity = repository.save(entity);
			DTO.setId(entity.getId());
			return DTO;
		} catch (Exception e) {
			throw new Exception();
		}
	}

	@Transactional
	public DTO update(int id, DTO DTO) throws Exception {
		Optional<Instrumento> entityOptional = repository.findById(id);
		try {
			Instrumento entity = entityOptional.get();
			entity.setId(id);
			entity.setCantidadVendida(DTO.getCantidadVendida());
			entity.setCostoEnvio(DTO.getCostoEnvio());
			entity.setDescripcion(DTO.getDescripcion());
			entity.setImagen(DTO.getImagen());
			entity.setInstrumento(DTO.getInstrumento());
			entity.setMarca(DTO.getMarca());
			entity.setModelo(DTO.getModelo());
			entity.setPrecio(DTO.getPrecio());
			repository.save(entity);
			return DTO;
		} catch (Exception e) {
			throw new Exception();
		}
	}

	@Transactional
	public boolean delete(int id) throws Exception {
		try {
			repository.deleteById(id);
			return true;
		} catch (Exception e) {
			throw new Exception();
		}
	}

	// Metodos Agregados
	public void saveImg(MultipartFile imageFile) throws Exception {
		String folder = "/images/";
		try {
			byte[] bytes = imageFile.getBytes();
			Path path = Paths.get(folder + imageFile.getOriginalFilename());
			Files.write(path, bytes);
		} catch (Exception e) {
			throw new Exception();
		}
	}

	public void deleteImage(String path) throws Exception {
		try {
			Files.deleteIfExists(Paths.get(path));
		} catch (Exception e) {
			throw new Exception();
		}
	}
}