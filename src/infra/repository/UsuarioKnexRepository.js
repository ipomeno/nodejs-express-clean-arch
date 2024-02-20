/**
 * @typedef {Object} Usuario 
 * @property {bigint} id
 * @property {string} nome
 * @property {string} email
 * @property {string} senha
 * @property {bigint} perfil_id
 * @property {string} cadastro
 * @property {string} alteracao
 */

/**
 * 
 * @param {Knex} db 
 * @returns {Object}
 */
export default function (db) {
  /**
   * Conta a quantidade de usuários num determinado filtro.
   * 
   * @param {object} filter 
   * @param {bigint} filter.id
   * @param {string} filter.nome
   * @param {string} filter.email
   * @param {bigint} filter.perfil_id
   */
  async function contar(filter) {
    const result = await db('usuario')
      .where((builder) => {
        if (filter.id) {
          builder.where('usuarios.id', filter.id);
        }
        if (filter.nome) {
          builder.where('usuarios.nome', 'like', `%${filter.nome}%`);
        }
        if (filter.email) {
          builder.where('usuarios.email', 'like', `%${filter.email}%`);
        }
        if (filter.perfil_id) {
          builder.where('usuarios.perfil_id', filter.perfil_id);
        }
      })
      .count('usuarios.id', { as: 'count'});

    return parseInt(result[0].count);
  }

  /**
   * Verifica se um usuário existe no banco de dados para um ID.
   * 
   * @param {bigint} existe 
   * @returns Promise<boolean>
   */
  async function existeById(usuarioId) { 
    const result = await db('usuario')
      .where({ 'usuarios.id': id, })
      .count('usuarios.id', { as: 'count'});

    return parseInt(result[0].count) > 0;
  }

  /**
   * Adiciona um usuário usando seu ID.
   * @param {Usuario} usuario 
   * @returns {Promise<Usuario>}
   */
  async function adicionar(usuario) {
    await db('usuario').insert(usuario);
    return usuario;
  }

  /**
   * Altera os dados do usuário usando seu ID
   * @param {Usuario} usuario 
   * @returns {Promise<Usuario>}
   */
  async function alterar(usuario) {
    await db('usuario')
      .where({ id: usuario.id })
      .update(usuario);

    return usuario;
  }

  /**
   * Remove um usuário pelo seu ID
   * @param {bigint} usuarioId 
   * @returns {Promise<boolean>}
   */
  async function remover(usuarioId) {
    return await db('usuario')
      .where({ id: usuarioId })
      .delete();
  }

  return {
    contar, existeById, adicionar, 
    alterar, remover
  }
}