const dataset = [
  {id: 1, nome: 'Roberto', email: 'roberto@gmail.com', senha: '123456', perfil_id: 1, cadastro: '2021-01-01', alteracao: '2021-01-01', ativo: true},
  {id: 2, nome: 'Fernanda', email: 'fernanda@gmail.com', senha: '456', perfil_id: 1, cadastro: '2021-01-01', alteracao: '2021-01-01', ativo: true},
];

function createUsuarioMemoryRepository() {

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

  function todos() {
    return new Promise((resolve, reject) => {
      try {
        resolve(dataset);
      } catch (error) {
        reject(error);
      }
    });
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

  /**
   * 
   * @param {Object} usuario 
   * @param {string} usuario.nome
   * @param {string} usuario.email
   * @param {string} usuario.senha
   * @param {bigint} usuario.perfil_id
   * @returns {Promise<Usuario>}
   */
  function adicionar(usuario) {
    return new Promise((resolve, reject) => {
      try {
        usuario.id = dataset.length + 1;
        usuario.cadastro = new Date().toISOString();
        usuario.alteracao = new Date().toISOString();
        usuario.ativo = true;

        dataset.push(usuario);
        resolve(usuario);
      } catch (error) {
        reject(error);
      }
    })
  }

  function alterar(usuario) {
    return new Promise((resolve, reject) => {
      try {
        const index = dataset.findIndex((u) => u.id === usuario.id);
        usuario = dataset[index] = Object.assign({}, usuario, dataset[index]);
        resolve(usuario);
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    encontrarPorId,
    listarPorEmail,
    existeId,
    adicionar,
    alterar,
    todos
  }
}

export { createUsuarioMemoryRepository };