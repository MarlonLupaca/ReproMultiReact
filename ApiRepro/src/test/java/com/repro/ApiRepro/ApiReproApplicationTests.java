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
    }

    @Test
    void testGetAllUsuarios() throws Exception {
        // Simula la respuesta del repositorio
        given(usuarioRepositorio.findAll()).willReturn(Arrays.asList(usuario));

        // Realiza la petición y verifica el estado de la respuesta
        mockMvc.perform(MockMvcRequestBuilders.get("/api/allUsers")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].email", is("test@correo.com")));
    }

    @Test
    void testCreateUsuario() throws Exception {
        // Simula la respuesta del repositorio
        given(usuarioRepositorio.save(Mockito.any(Usuario.class))).willReturn(usuario);

        // Realiza la petición POST con un cuerpo JSON y verifica el estado de la respuesta
        String usuarioJson = "{ \"email\": \"nuevo@correo.com\", \"contraseña\": \"password123\" }";
        mockMvc.perform(MockMvcRequestBuilders.post("/api/usuarios")
                .contentType(MediaType.APPLICATION_JSON)
                .content(usuarioJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(true)));
    }

    @Test
    void testLoginUsuario() throws Exception {
        // Simula la respuesta del repositorio
        given(usuarioRepositorio.findByEmailAndContraseña("test@correo.com", "password123"))
                .willReturn(Optional.of(usuario));

        // Realiza la petición GET y verifica el estado de la respuesta
        mockMvc.perform(MockMvcRequestBuilders.get("/api/usuarios/login/test@correo.com/password123")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(true)));
    }

    @Test
    void testLoginUsuarioInvalido() throws Exception {
        // Simula una respuesta vacía cuando el usuario no existe
        given(usuarioRepositorio.findByEmailAndContraseña("invalido@correo.com", "password123"))
                .willReturn(Optional.empty());

        // Realiza la petición GET y verifica el estado de la respuesta
        mockMvc.perform(MockMvcRequestBuilders.get("/api/usuarios/login/invalido@correo.com/password123")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(false)));
    }
}
