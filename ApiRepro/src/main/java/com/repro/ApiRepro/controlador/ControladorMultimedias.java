package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.Interfaces.MultimediaRepositorio;
import com.repro.ApiRepro.modelos.Multimedia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/multimedias")
@CrossOrigin(origins = "*")
public class ControladorMultimedias {
    @Autowired
    private MultimediaRepositorio multimediaRepositorio;
    
    @GetMapping("/allMultimedias")
    public List<Multimedia> getAllUsuarios(){
        return multimediaRepositorio.findAll();
    }
}
