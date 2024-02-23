import db from "../../infra/database/knex/db.js";
import { UsuarioKnexRepository } from "../../infra/Repository/UsuarioKnexRepository.js";
import { UsuarioMemoryRepository } from "../../infra/Repository/UsuarioMemoryRepository.js";
import { PerfilKnexRepository } from "../../infra/Repository/PerfilKnexRepository.js";
import { PerfilMemoryRepository } from "../../infra/Repository/PerfilMemoryRepository.js";

import { createLoginUseCase } from "../../UseCase/User/LoginUseCase.js";

/**
 * 
 * @param {import("../../UseCase/User/LoginUseCase.js").LoginInput} loginInput 
 * @returns {Promise<import("../../UseCase/User/LoginUseCase.js").LoginOutput>}
 */
export async function loginControllerPort(loginInput) {
  // const loginUseCase = createLoginUseCase(
  //   new UsuarioMemoryRepository(),
  //   new PerfilMemoryRepository());

  const loginUseCase = createLoginUseCase(
    new UsuarioKnexRepository(db),
    new PerfilKnexRepository(db));

  return await loginUseCase(loginInput);
}