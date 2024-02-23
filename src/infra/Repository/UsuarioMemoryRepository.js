export class UsuarioMemoryRepository {
  constructor() {
    this.db = [
      {id: 1, nome: 'Roberto', email: 'roberto@gmail.com', senha: '123456', perfil_id: 1, cadastro: '2021-01-01', alteracao: '2021-01-01', ativo: true},
      {id: 1, nome: 'Fernanda', email: 'fernanda@gmail.com', senha: '456', perfil_id: 1, cadastro: '2021-01-01', alteracao: '2021-01-01', ativo: true},
    ];
  }

  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<Usuario>}
   */
  async encontrarPorId(id) {
    return this.db.find((usuario) => usuario.id === id);
  }

  /**
   * 
   * @param {string} email 
   * @returns {Promise<Array<Usuario>>}
   */
  async listarPorEmail(email) {
    return this.db.filter((usuario) => usuario.email === email);
  }

  /**
   * 
   * @param {bigint} id  
   * @returns {Promise<boolean>}
   */
  async existeId(id) {
    return this.db.some((usuario) => usuario.id === id);
  }
}