package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.modelos.Genero;
import com.repro.ApiRepro.Interfaces.GeneroRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ControladorGeneros {

    @Autowired
    private GeneroRepositorio generoRepositorio;

    // Obtener todos los géneros
    @GetMapping("/allGenres")
    public List<Genero> getAllGeneros() {
        return generoRepositorio.findAll();
    }

    // Obtener un género por su ID
    @GetMapping("/generos/{id}")
    public ResponseEntity<Genero> getGeneroById(@PathVariable Long id) {
        Optional<Genero> genero = generoRepositorio.findById(id);
        return genero.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear un nuevo género
    @PostMapping("/generos")
    public ResponseEntity<Boolean> createGenero(@RequestBody Genero genero) {
        try {
            generoRepositorio.save(genero);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
    }

    // Actualizar un género por ID
    @PutMapping("/generos/{id}")
    public ResponseEntity<Genero> updateGenero(@PathVariable Long id, @RequestBody Genero generoDetails) {
        Optional<Genero> genero = generoRepositorio.findById(id);

        if (genero.isPresent()) {
            Genero generoActualizado = genero.get();
            generoActualizado.setNombre(generoDetails.getNombre());  // Solo el campo 'nombre' en este caso
            generoRepositorio.save(generoActualizado);
            return ResponseEntity.ok(generoActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un género por ID
    @DeleteMapping("/generos/{id}")
    public ResponseEntity<Void> deleteGenero(@PathVariable Long id) {
        Optional<Genero> genero = generoRepositorio.findById(id);

        if (genero.isPresent()) {
            generoRepositorio.delete(genero.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}