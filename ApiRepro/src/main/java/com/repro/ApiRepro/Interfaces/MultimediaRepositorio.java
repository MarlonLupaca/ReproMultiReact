package com.repro.ApiRepro.Interfaces;

import com.repro.ApiRepro.modelos.Multimedia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MultimediaRepositorio extends JpaRepository<Multimedia, Long>{
    
}
