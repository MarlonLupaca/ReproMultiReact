package com.repro.ApiRepro;

import com.repro.ApiRepro.Interfaces.UsuarioRepositorio;
import com.repro.ApiRepro.modelos.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Optional;
import java.util.Arrays;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;

@SpringBootTest
@AutoConfigureMockMvc
public class ApiReproApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UsuarioRepositorio usuarioRepositorio;

    private Usuario usuario;

    @BeforeEach
    void setUp() {
        usuario = new Usuario();
        usuario.setIdUsuario((int) 1L);
        usuario.setEmail("test@correo.com");
        usuario.setContraseña("password123");
        usuario.setNombre("Test User");
    }

    /**
     * Test del endpoint para obtener todos los usuarios.
     * Verifica que el endpoint devuelva correctamente una lista de usuarios.
     */
    @Test
    void testGetAllUsuarios() throws Exception {
        given(usuarioRepositorio.findAll()).willReturn(Arrays.asList(usuario));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/allUsers")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].email", is("test@correo.com")));
    }

    /**
     * Test del endpoint para crear un usuario.
     * Verifica que el usuario sea creado correctamente y que el servicio responda con true.
     */
    @Test
    void testCreateUsuario() throws Exception {
        given(usuarioRepositorio.save(Mockito.any(Usuario.class))).willReturn(usuario);

        String usuarioJson = "{ \"nombre\": \"Nuevo Usuario\", \"email\": \"nuevo@correo.com\", \"contraseña\": \"password123\" }";
        mockMvc.perform(MockMvcRequestBuilders.post("/api/usuarios")
                .contentType(MediaType.APPLICATION_JSON)
                .content(usuarioJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(true)));
    }

    /**
     * Test del endpoint de login.
     * Verifica que un usuario existente pueda iniciar sesión correctamente.
     */
    @Test
    void testLoginUsuario() throws Exception {
        given(usuarioRepositorio.findByEmailAndContraseña("test@correo.com", "password123"))
                .willReturn(Optional.of(usuario));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/usuarios/login/test@correo.com/password123")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email", is("test@correo.com")));
    }

    /**
     * Test del endpoint de login con credenciales inválidas.
     * Verifica que el sistema responda con un error para credenciales incorrectas.
     */
    @Test
    void testLoginUsuarioInvalido() throws Exception {
        given(usuarioRepositorio.findByEmailAndContraseña("invalido@correo.com", "password123"))
                .willReturn(Optional.empty());

        mockMvc.perform(MockMvcRequestBuilders.get("/api/usuarios/login/invalido@correo.com/password123")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    /**
     * Test del endpoint para exportar usuarios a Excel.
     * Verifica que el endpoint responda correctamente cuando el archivo se crea.
     */
    @Test
    void testExportUsuariosToExcel() throws Exception {
        given(usuarioRepositorio.findAll()).willReturn(Arrays.asList(usuario));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/allUsers/excel")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").value("Archivo Excel guardado exitosamente en src/main/resources/excelFiles/usuarios.xlsx"));
    }

    /**
     * Test del endpoint para actualizar un usuario.
     * Verifica que la información del usuario se actualice correctamente.
     */
    @Test
    void testUpdateUsuario() throws Exception {
        given(usuarioRepositorio.findById(1L)).willReturn(Optional.of(usuario));

        String usuarioActualizadoJson = "{ \"nombre\": \"Usuario Actualizado\", \"email\": \"actualizado@correo.com\", \"contraseña\": \"newpassword123\" }";

        mockMvc.perform(MockMvcRequestBuilders.put("/api/usuarios/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(usuarioActualizadoJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").value("Usuario actualizado con éxito."));
    }

    /**
     * Test del endpoint para actualizar un usuario que no existe.
     * Verifica que el sistema devuelva un error al intentar actualizar un usuario inexistente.
     */
    @Test
    void testUpdateUsuarioInexistente() throws Exception {
        given(usuarioRepositorio.findById(99L)).willReturn(Optional.empty());

        String usuarioJson = "{ \"nombre\": \"Usuario Inexistente\", \"email\": \"inexistente@correo.com\", \"contraseña\": \"password123\" }";

        mockMvc.perform(MockMvcRequestBuilders.put("/api/usuarios/99")
                .contentType(MediaType.APPLICATION_JSON)
                .content(usuarioJson))
                .andExpect(status().isNotFound());
    }

    /**
     * Test del endpoint para obtener todas las multimedia.
     * Verifica que el endpoint devuelva correctamente una lista de multimedia.
     */
    @Test
    void testGetAllMultimedias() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/multimedias/allMultimedias")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
