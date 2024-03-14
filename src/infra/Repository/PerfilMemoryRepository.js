const dataset = [
  {id: 1, nome: 'admin', cadastro: '2021-01-01', alteracao: '2021-01-01'},
];

function createPerfilMemoryRepository() {
  
  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<Perfil>}
   */
  async function encontrarPorId(id) {
    return new Promise((resolve, reject) => {
      try {
        const perfil = dataset.find((perfil) => perfil.id === id);
        resolve(perfil);
      }
      catch(error) {
        reject(error);
      }
    })
  }

  /**
   * 
   * @param {string} nome 
   * @returns {Promise<Array<Perfil>>}
   */
  async function listarPorNome(nome) {
    return new Promise((resolve, reject) => {
      try {
        const perfis = dataset.filter((perfil) => perfil.nome === nome);
        resolve(perfis);
      }
      catch(error) {
        reject(error);
      }
    })
  }

  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<boolean>}
   */
  async function existeId(id) {
    return new Promise((resolve, reject) => {
      try {
        const result = dataset.some((perfil) => perfil.id === id);
        resolve(result); 
      } catch (error) {
        reject(error);
      }
    })
  }

  return {
    encontrarPorId,
    listarPorNome,
    existeId,
  }
}

export { createPerfilMemoryRepository };