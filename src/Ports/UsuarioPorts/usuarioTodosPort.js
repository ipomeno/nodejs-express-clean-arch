import { createUsuarioTodosUseCase } from "../../UseCase/UsuarioUseCases/usuarioTodosUseCase.js";
import { createUsuarioMemoryRepository } from "../../infra/Repository/UsuarioMemoryRepository.js";

async function usuarioTodosPort() {
  const usuarioRepository = createUsuarioMemoryRepository();
  const usuarioTodosUseCase = createUsuarioTodosUseCase(usuarioRepository);

  return await usuarioTodosUseCase();
}

export { usuarioTodosPort };