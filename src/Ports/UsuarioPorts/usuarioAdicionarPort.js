import { createUsuarioAdicionarUseCase } from "../../UseCase/UsuarioUseCases/adicionarUsuarioUsecase.js";
import { createPerfilMemoryRepository } from "../../infra/Repository/PerfilMemoryRepository.js";
import { createUsuarioMemoryRepository } from "../../infra/Repository/UsuarioMemoryRepository.js";

async function usuarioAdicionarPort(usuario) {
  const usuarioAdicionarUseCase = createUsuarioAdicionarUseCase(
    createUsuarioMemoryRepository(),
    createPerfilMemoryRepository());

  return await usuarioAdicionarUseCase(usuario);
}

export { usuarioAdicionarPort };