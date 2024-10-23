package com.repro.ApiRepro.Interfaces;

import com.repro.ApiRepro.modelos.Genero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeneroRepositorio extends JpaRepository<Genero, Long> {
    // List<Genero> findByNombre(String nombre);
}