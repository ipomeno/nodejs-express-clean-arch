import { usuarioTodosPort } from "../../../Ports/UsuarioPorts/usuarioTodosPort.js";


async function usuarioTodosController(request, response, next) {
  try {
    const usuarioOutput = await usuarioTodosPort();
    response.status(200).json(usuarioOutput);
  } catch (error) {
    next(error);
  }
}

function createUsuarioTodosController() {
  return [
    usuarioTodosController
  ];
}

export { createUsuarioTodosController };