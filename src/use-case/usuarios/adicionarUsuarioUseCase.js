export async function adicionarUsuarioUseCase(usuarioRepository, usuario) {
  return await usuarioRepository.adicionar(usuario);
}