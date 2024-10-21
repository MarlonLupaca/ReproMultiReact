package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.Interfaces.UsuarioRepositorio;
import com.repro.ApiRepro.modelos.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioRepositorio.findById(id);
        return usuario.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @PostMapping("/usuarios")
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    // Actualizar un usuario por ID
    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails) {
        Optional<Usuario> usuario = usuarioRepositorio.findById(id);

        if (usuario.isPresent()) {
            Usuario usuarioActualizado = usuario.get();
            usuarioActualizado.setNombre(usuarioDetails.getNombre()); // Actualiza más campos según el modelo
            usuarioActualizado.setEmail(usuarioDetails.getEmail());
            usuarioActualizado.setContraseña(usuarioDetails.getContraseña());
            // Actualiza los campos necesarios aquí

            usuarioRepositorio.save(usuarioActualizado);
            return ResponseEntity.ok(usuarioActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un usuario por ID
    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioRepositorio.findById(id);

        if (usuario.isPresent()) {
            usuarioRepositorio.delete(usuario.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
