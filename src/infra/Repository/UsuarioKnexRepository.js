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
 * 
 * @param {knex} knex 
 * @returns {object}
 */
function createUsuarioKnexRepository(knex) {

  /**
   * 
   * @param {bigint} id 
   * @returns Promise<Array<Usuario>>
   */
  async function encontrarPorId(id) {
    return await knex('usuarios')
      .select(
        'usuarios.id',
        'usuarios.nome',
        'usuarios.email',
        'usuarios.cpf',
        'usuarios.senha',
        'usuarios.telefone',
        'usuarios.perfil_id',
        'usuarios.cadastro',
        'usuarios.alteracao',
        'usuarios.ativo')
      .where('usuarios.id', id)
      .first();
  }

  /**
   * 
   * @param {string} email 
   * @returns Promise<Array<Usuario>>
   */
  async function listarPorEmail(email) {
    return await knex('usuarios')
      .select(
        'usuarios.id',
        'usuarios.nome',
        'usuarios.email',
        'usuarios.cpf',
        'usuarios.senha',
        'usuarios.telefone',
        'usuarios.perfil_id',
        'usuarios.cadastro',
        'usuarios.alteracao',
        'usuarios.ativo')
      .where('usuarios.email', email);
  }

  /**
   * 
   * @param {bigint} id 
   * @returns Promise<Boolean>
   */
  async function existeId(id) {
    const result = await this.db('usuarios')
      .where('usuarios.id', id)
      .count('usuarios.id', { as: 'count' });

    return parseint(result[0].count) > 0;
  }

  return {
    encontrarPorId,
    listarPorEmail,
    existeId
  };
}

export { createUsuarioKnexRepository };