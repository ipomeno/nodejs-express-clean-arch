function createUsuarioTodosUseCase(usuarioRepository) {
  return async function usuarioTodosUseCase() {
    return await usuarioRepository.todos();
  }
}

export { createUsuarioTodosUseCase };