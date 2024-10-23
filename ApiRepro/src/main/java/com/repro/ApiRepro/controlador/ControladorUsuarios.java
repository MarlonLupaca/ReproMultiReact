package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.Interfaces.UsuarioRepositorio;
import com.repro.ApiRepro.modelos.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ControladorUsuarios {
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    
    @GetMapping("/allUsers")
    public List<Usuario> getAllUsuarios(){
        return usuarioRepositorio.findAll();
    }
    
    @PostMapping("/usuarios")
    public ResponseEntity<Boolean> createUsuario(@RequestBody Usuario usuario) {
        try {
            Usuario nuevoUsuario = usuarioRepositorio.save(usuario);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }   
    }
    @GetMapping("/usuarios/login/{email}/{contraseña}")
    public ResponseEntity<Boolean> loginUsuario(@PathVariable String email, @PathVariable String contraseña) {
        Optional<Usuario> usuarioOpt = usuarioRepositorio.findByEmailAndContraseña(email, contraseña);
        if (usuarioOpt.isPresent()) {
            return ResponseEntity.ok(true); // Devuelve el usuario si se encuentra
        } else {
            return ResponseEntity.ok(false); // Devuelve false si no se encuentra
        }
    }
}