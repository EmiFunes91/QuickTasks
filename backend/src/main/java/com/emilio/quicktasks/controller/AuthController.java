package com.emilio.quicktasks.controller;

import com.emilio.quicktasks.dto.LoginRequest;
import com.emilio.quicktasks.dto.RegisterRequest;
import com.emilio.quicktasks.dto.JwtResponse;
import com.emilio.quicktasks.entity.Usuario;
import com.emilio.quicktasks.security.JwtUtils;
import com.emilio.quicktasks.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UsuarioService usuarioService;
    private final JwtUtils jwtUtils;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/register")
    public ResponseEntity<?> registrar(@RequestBody RegisterRequest request) {
        Usuario nuevoUsuario = Usuario.builder()
                .nombre(request.getNombre())
                .email(request.getEmail())
                .password(request.getPassword())
                .roles(Set.of("USER"))
                .build();

        Usuario guardado = usuarioService.registrar(nuevoUsuario);
        return ResponseEntity.ok("Usuario registrado con ID: " + guardado.getId());
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Usuario usuario = usuarioService.buscarPorEmail(request.getEmail());

        if (!passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }

        String token = jwtUtils.generarToken(usuario.getEmail());
        return ResponseEntity.ok(new JwtResponse(token, usuario.getEmail()));
    }
}


