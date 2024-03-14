import { createUsuarioAdicionarController } from "./usuarioAdicionarController.js";
import { createUsuarioTodosController } from "./usuarioTodosController.js";

function configUsuarioRoutes(app) {
  app
  /*
  .use('/usuarios', [ 
    // autenticação de usuários
  ])
  */
  .post('/usuarios', createUsuarioAdicionarController())
  .get('/usuarios', createUsuarioTodosController());
}

export { configUsuarioRoutes };