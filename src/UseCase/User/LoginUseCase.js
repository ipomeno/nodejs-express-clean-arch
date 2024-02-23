
/**
 * @typedef {Object} LoginOutput
 * @property {Usuario} user
 * @property {Perfil} profile
 */

/**
 * @typedef {Object} LoginInput
 * @property {string} email
 * @property {string} senha
 */

  /**
   * 
   * @param {Array<Usuario>|null} lista
   * @param string senha
   * @returns {Usuario}
   */
  function encontrarPorSenha(lista, senha) {
    if (!lista) {
      throw new Error("Nenhum usuário encontrado.");
    }

    if (!lista.hasOwnProperty('length') || (lista.length == 0)) {
      throw new Error("Nenhum usuário encontrado.");
    }

    const usuario = lista.find((usuario) => usuario.senha === senha);
    if (!usuario) {
      throw new Error("Senha inválida.");
    }

    return usuario;
  }

/**
 * 
 * @param {UsuarioRepositorio} UsuarioRepositorio 
 * @param {PerfilRepositorio} PerfilRepositorio 
 * @returns {function(LoginInput): Promise<LoginOutput>}
 */
function createLoginUseCase(usuarioRepository, perfilRepository) {
  return async function (loginInput) {
    const { email, senha } = loginInput;
    const lista = await usuarioRepository.listarPorEmail(email);
    const usuario = encontrarPorSenha(lista, senha);

    const result = await perfilRepository.temId(usuario.perfil_id);
    if (!result) {
      throw new Error(`Perfil de acesso não encontrado para o usuário ${usuario.id}::${usuario.email}`);
    }

    const perfil = await perfilRepository.encontrarPorId(usuario.perfil_id);
    return { usuario, perfil };
  }
}

export { createLoginUseCase };