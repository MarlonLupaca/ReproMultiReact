package com.repro.ApiRepro.Interfaces;

import com.repro.ApiRepro.modelos.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
}

