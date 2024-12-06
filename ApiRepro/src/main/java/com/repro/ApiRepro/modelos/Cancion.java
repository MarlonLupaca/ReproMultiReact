package com.repro.ApiRepro.modelos;

public class Cancion {
    private final String nombre;
    private final String artista;
    private final String duracion;

    public Cancion(String nombre, String artista, String duracion) {
        this.nombre = nombre;
        this.artista = artista;
        this.duracion = duracion;
    }

    public String getNombre() { return nombre; }
    public String getArtista() { return artista; }
    public String getDuracion() { return duracion; }
}
