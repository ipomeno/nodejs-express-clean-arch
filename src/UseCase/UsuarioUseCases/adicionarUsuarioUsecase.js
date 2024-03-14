/**
 * 
 * @param {UsuarioRepository} usuarioRepository
 * @param {PerfilRepository} perfilRepository
 * @returns 
 */
function createUsuarioAdicionarUseCase(usuarioRepository, perfilRepository) {
  return async function usuarioAdicionarUseCase(usuario) {
    const perfil = await perfilRepository.encontrarPorId(usuario.perfil_id);
    if (!perfil) {
      throw new Error(`Perfil de acesso não encontrado para o usuário ${usuario.id}::${usuario.perfil_id}.`);
    }

    const usuarioAdicionado = await usuarioRepository.adicionar(usuario);
    return usuarioAdicionado;
  }
}

export { createUsuarioAdicionarUseCase };