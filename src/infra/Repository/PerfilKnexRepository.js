/**
 * @typedef {Object} Perfil
 * @property {bigint} id
 * @property {string} nome
 */

/**
 * 
 * @param {knex} knex 
 * @returns {object}
 */
function createPerfilKnexRepository(knex) {
  
  /**
   * 
   * @param {bigint} id 
   * @returns Promise<Perfil>
   */
  async function encontrarPorId(id) {
    return await knex('perfis')
      .select(
        'perfis.id',
        'perfis.nome',
        'perfis.cadastro',
        'perfis.alteracao')
      .where('perfis.id', id)
      .first();
  }

  /**
   * 
   * @param {bigint} id 
   * @returns Promise<boolean>
   */
  async function existeId(id) {
    const result = await knex('perfis')
      .where('perfis.id', id)
      .count('perfis.id', { as: 'count' });

    return parseInt(result[0].count) > 0;
  }

  return {
    encontrarPorId,
    existeId,
  }
}

export { createPerfilKnexRepository }