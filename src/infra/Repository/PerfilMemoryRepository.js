export class PerfilMemoryRepository {
  constructor() {
    this.db = [
      {id: 1, nome: 'admin', cadastro: '2021-01-01', alteracao: '2021-01-01'},
    ];
  }

  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<Perfil>}
   */
  async encontrarPorId(id) {
    return this.db.find((perfil) => perfil.id === id);
  }

  /**
   * 
   * @param {string} nome 
   * @returns {Promise<Array<Perfil>>}
   */
  async listarPorNome(nome) {
    return this.db.filter((perfil) => perfil.nome === nome);
  }

  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<boolean>}
   */
  async temId(id) {
    return this.db.some((perfil) => perfil.id === id);
  }
}