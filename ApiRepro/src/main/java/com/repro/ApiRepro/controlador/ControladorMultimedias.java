package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.modelos.Cancion;
import org.apache.tika.Tika;
import com.mpatric.mp3agic.Mp3File;
import java.io.BufferedReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ControladorMultimedias {

    @Value("${music.directory}")
    private String RUTA_CANCIONES;

    private static final Tika tika = new Tika();

    @GetMapping("/stream/{nombreCancion}")
    public ResponseEntity<StreamingResponseBody> streamCancion(
            @PathVariable("nombreCancion") String nombreCancion,
            @RequestHeader(value = HttpHeaders.RANGE, defaultValue = "bytes=0-") String rangeHeader) throws IOException {

        // Usar la ruta relativa "music"
        File archivo = new File(RUTA_CANCIONES, nombreCancion);

        if (!archivo.exists()) {
            return ResponseEntity.notFound().build();
        }

        long fileLength = archivo.length(); // Tamaño total del archivo
        long startByte = 0; // Byte inicial
        long endByte = fileLength - 1; // Byte final

        // Parsear el encabezado RANGE si existe
        if (rangeHeader != null && rangeHeader.startsWith("bytes=")) {
            String[] ranges = rangeHeader.substring(6).split("-");
            try {
                startByte = Long.parseLong(ranges[0]); // Rango inicial
                if (ranges.length > 1 && !ranges[1].isEmpty()) {
                    endByte = Long.parseLong(ranges[1]); // Rango final si se especifica
                }
            } catch (NumberFormatException e) {
                return ResponseEntity.status(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                                     .header(HttpHeaders.CONTENT_RANGE, "bytes */" + fileLength)
                                     .build();
            }
        }

        // Validar el rango solicitado
        if (startByte >= fileLength || startByte > endByte) {
            return ResponseEntity.status(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                                 .header(HttpHeaders.CONTENT_RANGE, "bytes */" + fileLength)
                                 .build();
        }

        // Asegurar que el rango no exceda los límites del archivo
        endByte = Math.min(endByte, fileLength - 1);
        long contentLength = endByte - startByte + 1;

        // Configurar las cabeceras de respuesta
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "audio/mp3");
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + archivo.getName() + "\"");
        headers.add(HttpHeaders.CONTENT_RANGE, "bytes " + startByte + "-" + endByte + "/" + fileLength);
        headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(contentLength));

        // Crear el StreamingResponseBody para enviar el rango solicitado
        final long finalStartByte = startByte;

        StreamingResponseBody stream = outputStream -> {
            try (RandomAccessFile raf = new RandomAccessFile(archivo, "r")) {
                raf.seek(finalStartByte); // Usar la variable final

                byte[] buffer = new byte[1024];
                long bytesRemaining = contentLength;

                // Leer y escribir los datos al cliente
                while (bytesRemaining > 0) {
                    int bytesRead = raf.read(buffer, 0, (int) Math.min(buffer.length, bytesRemaining));
                    if (bytesRead == -1) {
                        break; // Fin del archivo
                    }
                    outputStream.write(buffer, 0, bytesRead);
                    bytesRemaining -= bytesRead;
                }
            }
        };

        return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
                             .headers(headers)
                             .body(stream);
    }

    @GetMapping("/canciones")
    public List<Cancion> listarCanciones() {
        // Usar la ruta relativa "music"
        File carpeta = new File(RUTA_CANCIONES);

        if (!carpeta.exists() || !carpeta.isDirectory()) {
            throw new IllegalArgumentException("La ruta especificada no es válida o no es un directorio.");
        }

        File[] archivos = carpeta.listFiles();
        List<Cancion> canciones = new ArrayList<>();

        if (archivos != null) {
            for (File archivo : archivos) {
                if (archivo.isFile() && archivo.getName().endsWith(".mp3")) {
                    String nombre = archivo.getName();
                    String artista = extraerArtista(nombre);
                    String duracion = obtenerDuracion(archivo);

                    canciones.add(new Cancion(nombre, artista, duracion));
                }
            }
        }

        return canciones;
    }

    private String extraerArtista(String nombreArchivo) {
        String[] partes = nombreArchivo.split(" - ");
        return partes.length > 1 ? partes[1].replace(".mp3", "").trim() : "Desconocido";
    }

    private String obtenerDuracion(File archivo) {
        try {
            Mp3File mp3file = new Mp3File(archivo);

            if (mp3file.hasId3v2Tag()) {
                int duracionSegundos = (int) mp3file.getLengthInSeconds();
                int minutos = duracionSegundos / 60;
                int segundos = duracionSegundos % 60;
                return String.format("%02d:%02d", minutos, segundos);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Desconocido";
    }

    @PostMapping("/subir")
    public ResponseEntity<String> subirCancion(@RequestParam("archivo") MultipartFile archivo) {
        if (archivo.isEmpty()) {
            return ResponseEntity.badRequest().body("No se ha enviado ningún archivo.");
        }

        try {
            // Obtener el directorio base de la aplicación
            String directorioBase = System.getProperty("user.dir");

            // Construir la ruta a la carpeta 'music'
            File carpeta = new File(directorioBase, "music");
            if (!carpeta.exists()) {
                carpeta.mkdirs(); // Crear la carpeta si no existe
            }

            String nombreArchivo = archivo.getOriginalFilename();
            if (nombreArchivo == null || !nombreArchivo.endsWith(".mp3")) {
                return ResponseEntity.badRequest().body("Solo se permiten archivos MP3.");
            }

            // Construir la ruta completa del archivo
            File archivoDestino = new File(carpeta, nombreArchivo);
            archivo.transferTo(archivoDestino);

            return ResponseEntity.ok("Archivo guardado exitosamente: " + nombreArchivo);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar el archivo.");
        }
    }
    
    @GetMapping("/ultimas-canciones")
    public ResponseEntity<List<Cancion>> obtenerUltimasCanciones() {
        // Crear el objeto de la carpeta `music`
        File carpeta = new File(RUTA_CANCIONES);

        if (!carpeta.exists() || !carpeta.isDirectory()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(new ArrayList<>()); // En caso de error, devolver lista vacía
        }

        // Obtener todos los archivos .mp3 de la carpeta
        File[] archivos = carpeta.listFiles(file -> file.isFile() && file.getName().endsWith(".mp3"));

        if (archivos == null || archivos.length == 0) {
            return ResponseEntity.ok(new ArrayList<>()); // Devolver lista vacía si no hay canciones
        }

        // Convertir el array a una lista mutable
        List<File> archivosOrdenados = new ArrayList<>(Arrays.asList(archivos));

        // Ordenar los archivos por la última modificación (descendente)
        archivosOrdenados.sort((a, b) -> Long.compare(b.lastModified(), a.lastModified()));

        // Seleccionar las últimas 6 canciones
        List<Cancion> ultimasCanciones = new ArrayList<>();
        for (int i = 0; i < Math.min(10, archivosOrdenados.size()); i++) {
            File archivo = archivosOrdenados.get(i);
            String nombre = archivo.getName();
            String artista = extraerArtista(nombre);
            String duracion = obtenerDuracion(archivo);

            ultimasCanciones.add(new Cancion(nombre, artista, duracion));
        }

        return ResponseEntity.ok(ultimasCanciones);
    }
    // Método para descargar la canción desde un enlace de YouTube

    @PostMapping
    public ResponseEntity<String> descargarCancion(@RequestParam("link") String link) {
        try {
            String command = "yt-dlp -x --audio-format mp3 --audio-quality 0 " + link;
            Process process = Runtime.getRuntime().exec(command);

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            int exitCode = process.waitFor();
            if (exitCode == 0) {
                return ResponseEntity.ok("Canción descargada exitosamente");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al descargar la canción");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al ejecutar el proceso de descarga");
        }
    }



}
