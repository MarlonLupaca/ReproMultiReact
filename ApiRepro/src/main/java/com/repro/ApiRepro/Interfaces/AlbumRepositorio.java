package com.repro.ApiRepro.Interfaces;

import com.repro.ApiRepro.modelos.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepositorio extends JpaRepository<Album, Long> {
    
}