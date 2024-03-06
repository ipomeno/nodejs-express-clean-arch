/**
 * @typedef {Object} Usuario 
 * @property {bigint} id
 * @property {string} nome
 * @property {string} cpf
 * @property {string} telefone
 * @property {string} email
 * @property {string} senha
 * @property {bigint} perfil_id
 * @property {string} cadastro
 * @property {string} alteracao
 */

/**
 * @typedef {Object} Perfil
 * @property {bigint} id
 * @property {string} nome
 */

/**
 * @typedef {Object} LoginOutput
 * @property {Usuario} usuario
 * @property {Perfil} perfil
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
function createAuthLoginUseCase(usuarioRepository, perfilRepository) {
  /**
   * 
   * @param {import("../../infra/express/controllers/usuarios/LoginInput").LoginInput} loginInput 
   * @returns Promise<LoginOutput>
   */
  async function authLoginUseCase(loginInput) {
    const { email, senha } = loginInput;
    const lista = await usuarioRepository.listarPorEmail(email);
    const usuario = encontrarPorSenha(lista, senha);

    const result = await perfilRepository.existeId(usuario.perfil_id);
    if (!result) {
      throw new Error(`Perfil de acesso não encontrado para o usuário ${usuario.id}::${usuario.email}`);
    }

    const perfil = await perfilRepository.encontrarPorId(usuario.perfil_id);
    return { usuario, perfil };
  }

  return authLoginUseCase;
}

export { createAuthLoginUseCase };