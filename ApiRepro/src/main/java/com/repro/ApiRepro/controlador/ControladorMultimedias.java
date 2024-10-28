package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.Interfaces.MultimediaRepositorio;
import com.repro.ApiRepro.modelos.Multimedia;
import com.google.common.collect.ImmutableList; // Importamos ImmutableList de Guava
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * Controlador para manejar las operaciones relacionadas con multimedia.
 */
@RestController
@RequestMapping("/multimedias")
@CrossOrigin(origins = "*")
public class ControladorMultimedias {
    
    @Autowired
    private MultimediaRepositorio multimediaRepositorio;

    /**
     * Obtiene la lista de todas las multimedia.
     *
     * @return una lista inmutable de objetos Multimedia
     */
    @GetMapping("/allMultimedias")
    public List<Multimedia> getAllMultimedias() {
        // Utilizamos ImmutableList.copyOf() para hacer la lista inmutable
        return ImmutableList.copyOf(multimediaRepositorio.findAll());
    }
}
