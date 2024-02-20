export default function () {

  async function contar(filter) {
    return 0;
  }

  async function existeById(usuarioId) {
    return false;
  }

  async function adicionar(usuario) {
    return usuario;
  }

  async function alterar(usuario) {
    return usuario;
  }

  async function remover(usuarioId) {
    return false;
  }

  return {
    contar, existeById, adicionar, 
    alterar, remover
  };
}