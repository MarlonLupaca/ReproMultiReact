package com.repro.ApiRepro.modelos;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "albums")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_album")
    private int idAlbum;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "fecha_lanzamiento")
    @Temporal(TemporalType.DATE)  // Anotación para fechas
    private Date fechaLanzamiento;

    // Getters y Setters
    public int getIdAlbum() {
        return idAlbum;
    }

    public void setIdAlbum(int idAlbum) {
        this.idAlbum = idAlbum;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Date getFechaLanzamiento() {
        return fechaLanzamiento;
    }

    public void setFechaLanzamiento(Date fechaLanzamiento) {
        this.fechaLanzamiento = fechaLanzamiento;
    }
}