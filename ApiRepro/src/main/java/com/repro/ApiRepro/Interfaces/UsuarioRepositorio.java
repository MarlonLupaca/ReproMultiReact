    package com.repro.ApiRepro.Interfaces;

import com.repro.ApiRepro.modelos.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
     Optional<Usuario> findByEmailAndContraseña(String email, String contraseña);

}

