package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.modelos.Album;
import com.repro.ApiRepro.Interfaces.AlbumRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ControladorAlbums {

    @Autowired
    private AlbumRepositorio albumRepositorio;

    // Obtener todos los álbumes
    @GetMapping("/allAlbums")
    public List<Album> getAllAlbums() {
        return albumRepositorio.findAll();
    }

    // Obtener un álbum por su ID
    @GetMapping("/albums/{id}")
    public ResponseEntity<Album> getAlbumById(@PathVariable Long id) {
        Optional<Album> album = albumRepositorio.findById(id);
        return album.map(ResponseEntity::ok)
                     .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear un nuevo álbum
    @PostMapping("/albums")
    public ResponseEntity<Boolean> createAlbum(@RequestBody Album album) {
        try {
            albumRepositorio.save(album);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
    }

    // Actualizar un álbum por ID
    @PutMapping("/albums/{id}")
    public ResponseEntity<Album> updateAlbum(@PathVariable Long id, @RequestBody Album albumDetails) {
        Optional<Album> album = albumRepositorio.findById(id);

        if (album.isPresent()) {
            Album albumActualizado = album.get();
            albumActualizado.setTitulo(albumDetails.getTitulo());
            albumActualizado.setFechaLanzamiento(albumDetails.getFechaLanzamiento());
            albumRepositorio.save(albumActualizado);
            return ResponseEntity.ok(albumActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un álbum por ID
    @DeleteMapping("/albums/{id}")
    public ResponseEntity<Void> deleteAlbum(@PathVariable Long id) {
        Optional<Album> album = albumRepositorio.findById(id);

        if (album.isPresent()) {
            albumRepositorio.delete(album.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}