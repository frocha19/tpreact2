package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Instrumento;

@Repository
public interface IRepository extends JpaRepository<Instrumento, Integer> {
}