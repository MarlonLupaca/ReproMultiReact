package com.repro.ApiRepro.controlador;

import com.repro.ApiRepro.Interfaces.UsuarioRepositorio;
import com.repro.ApiRepro.modelos.Usuario;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpStatus;

import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Controlador para manejar las operaciones relacionadas con los usuarios.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ControladorUsuarios {
    
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    /**
     * Obtiene la lista de todos los usuarios.
     *
     * @return una lista de usuarios
     */
    @GetMapping("/allUsers")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepositorio.findAll();
    }

    /**
     * Crea un nuevo usuario en el sistema.
     *
     * @param usuario el usuario a crear
     * @return una respuesta que indica el éxito o fracaso de la operación
     */
    @PostMapping("/usuarios")
    public ResponseEntity<Boolean> createUsuario(@RequestBody Usuario usuario) {
        EmailValidator emailValidator = EmailValidator.getInstance();

        if (!emailValidator.isValid(usuario.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(false);
        }

        try {
            Usuario nuevoUsuario = usuarioRepositorio.save(usuario);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
    }

    /**
     * Realiza el inicio de sesión de un usuario.
     *
     * @param email el correo electrónico del usuario
     * @param contraseña la contraseña del usuario
     * @return una respuesta que indica si las credenciales son válidas
     */
    @GetMapping("/usuarios/login/{email}/{contraseña}")
    public ResponseEntity<Usuario> loginUsuario(@PathVariable String email, @PathVariable String contraseña) {
        Optional<Usuario> usuarioOpt = usuarioRepositorio.findByEmailAndContraseña(email, contraseña);
        if (usuarioOpt.isPresent()) {
            return ResponseEntity.ok(usuarioOpt.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


    /**
     * Exporta la lista de usuarios a un archivo Excel.
     *
     * @return una respuesta que indica la ubicación del archivo Excel creado
     */
    @GetMapping("/allUsers/excel")
    public ResponseEntity<String> exportUsuariosToExcel() {
        List<Usuario> usuarios = usuarioRepositorio.findAll();
        String filePath = "src/main/resources/excelFiles/usuarios.xlsx";

        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("Usuarios");

            Row headerRow = sheet.createRow(0);
            headerRow.createCell(0).setCellValue("ID");
            headerRow.createCell(1).setCellValue("Nombre");
            headerRow.createCell(2).setCellValue("Email");

            int rowNum = 1;
            for (Usuario usuario : usuarios) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(usuario.getIdUsuario());
                row.createCell(1).setCellValue(usuario.getNombre());
                row.createCell(2).setCellValue(usuario.getEmail());
            }

            try (FileOutputStream fileOut = new FileOutputStream(filePath)) {
                workbook.write(fileOut);
            }

            return ResponseEntity.ok("Archivo Excel guardado exitosamente en " + filePath);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al crear el archivo Excel: " + e.getMessage());
        }
    }
    
    /**
     * Actualiza la información de un usuario por su ID.
     *
     * @param idUsuario el ID del usuario a actualizar
     * @param usuario los nuevos datos del usuario
     * @return una respuesta que indica el éxito o fracaso de la operación
     */
    @PutMapping("/usuarios/{idUsuario}")
    public ResponseEntity<String> updateUsuario(@PathVariable Long idUsuario, @RequestBody Usuario usuario) {
        Optional<Usuario> usuarioExistente = usuarioRepositorio.findById(idUsuario);
        
        if (usuarioExistente.isPresent()) {
            Usuario usuarioToUpdate = usuarioExistente.get();
            usuarioToUpdate.setNombre(usuario.getNombre());
            usuarioToUpdate.setEmail(usuario.getEmail());
            usuarioToUpdate.setContraseña(usuario.getContraseña());
            
            usuarioRepositorio.save(usuarioToUpdate);
            return ResponseEntity.ok("Usuario actualizado con éxito.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body("Usuario no encontrado.");
        }
    }
    
    
    
}
