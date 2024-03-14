import { usuarioAdicionarPort } from "../../../Ports/UsuarioPorts/usuarioAdicionarPort.js";
import { createUsuarioAdicionarProtectMiddleware } from "./usuarioAdicionarMiddleware.js";

function usuarioAdapter(request) {
  const defaults = { id: 0, nome: '', email: '', senha: '', perfil_id: 0, ativo: false };
  const result = Object.assign(defaults, request.body);
  return result;
}

async function usuarioAdicionarController(request, response, next) {
  try {
    const usuarioInput = usuarioAdapter(request);
    const usuarioOutput = await usuarioAdicionarPort(usuarioInput);
    response.status(200).json(usuarioOutput);
  } catch (error) {
    next(error);
  }
}

function createUsuarioAdicionarController() {
  return [
    createUsuarioAdicionarProtectMiddleware(),
    usuarioAdicionarController
  ];
}

export { createUsuarioAdicionarController };