import db from "../../infra/database/knex/db.js";

import { createPerfilKnexRepository } from "../../infra/Repository/PerfilKnexRepository.js";
import { createUsuarioKnexRepository } from "../../infra/Repository/UsuarioKnexRepository.js";

import { createUsuarioMemoryRepository } from "../../infra/Repository/UsuarioMemoryRepository.js";
import { createPerfilMemoryRepository } from "../../infra/Repository/PerfilMemoryRepository.js";
import { createAuthLoginUseCase } from "../../UseCase/AuthUseCases/AuthLoginUseCase.js";

/**
 * 
 * @param {import("../../infra/express/controllers/usuarios/LoginInput.js").LoginInput} loginInput 
 * @returns {import("../../UseCase/AuthUseCases/AuthLoginUseCase.js").LoginOutput}
 */
async function loginControllerPort(loginInput) {

  const authLoginUseCase = createAuthLoginUseCase(
      createUsuarioMemoryRepository(),
      createPerfilMemoryRepository());
  
  /*
  const authLoginUseCase = createAuthLoginUseCase(
    createUsuarioKnexRepository(db),
    createPerfilKnexRepository(db));
  */

  return await authLoginUseCase(loginInput);
}

export { loginControllerPort }