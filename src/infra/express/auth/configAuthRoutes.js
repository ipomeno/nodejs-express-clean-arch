import { createLoginController } from "./loginController.js";

function configAuthRoutes(app) {
  app.post('/auth/login',  createLoginController() );
}

export { configAuthRoutes };