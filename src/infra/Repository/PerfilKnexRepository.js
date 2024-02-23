/**
 * @typedef {Object} Perfil
 * @property {bigint} id
 * @property {string} nome
 */
export class PerfilKnexRepository {
  constructor(knex) {
    this.db = knex;
  }

  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<Perfil>}
   */
  async encontrarPorId(id) {
    return await this.db('perfis')
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
   * @param {string} nome 
   * @returns {Promise<boolean>}
   */
  async temId(id) {
    const result = await this.db('perfis')
      .where('perfis.id', id)
      .count('perfis.id', { as: 'count' });

    return parseInt(result[0].count) > 0;
  }
}