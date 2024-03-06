function createUsuarioMemoryRepository() {

  const dataset = [
    {id: 1, nome: 'Roberto', email: 'roberto@gmail.com', senha: '123456', perfil_id: 1, cadastro: '2021-01-01', alteracao: '2021-01-01', ativo: true},
    {id: 1, nome: 'Fernanda', email: 'fernanda@gmail.com', senha: '456', perfil_id: 1, cadastro: '2021-01-01', alteracao: '2021-01-01', ativo: true},
  ];

  /**
   * 
   * @param {bigint} id 
   * @returns {Promise<Usuario>}
   */
  function encontrarPorId(id) {
    return new Promise((resolve, reject) => {
      try {
        const usuario = dataset.find((usuario) => usuario.id === id);
        resolve(usuario);
      }
      catch(error) {
        reject(error);
      }
    });
  }

  /**
   * 
   * @param {string} email 
   * @returns Promise<Array<Usuario>>
   */
  function listarPorEmail(email) {
    return new Promise((resolve, reject) => {
      try {
        const usuarios = dataset.filter((usuario) => usuario.email === email);
        resolve(usuarios);
      }
      catch(error) {
        reject(error);
      }
    })
  }

  /**
   * 
   * @param {bigint} id 
   * @returns Promise<boolean>
   */
  function existeId(id) {
    return new Promise((resolve, reject) => {
      try {
        const result = dataset.some((usuario) => usuario.id === id);
        resolve(result); 
      } catch (error) {
        reject(error);
      }
    })
  }

  return {
    encontrarPorId,
    listarPorEmail,
    existeId,
  }
}

export { createUsuarioMemoryRepository };