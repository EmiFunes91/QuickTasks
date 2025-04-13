package com.emilio.quicktasks.service;

import com.emilio.quicktasks.entity.Usuario;

public interface UsuarioService {
    Usuario registrar(Usuario usuario);
    Usuario buscarPorEmail(String email);
}

