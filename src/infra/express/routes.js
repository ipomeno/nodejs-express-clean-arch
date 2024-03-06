import { loginController } from "./controllers/usuarios/loginController.js";

function createRoutes(app) {
  app.get('/', (req, res) => {
    res.json({message: 'olá mundo!!'});
  });

  app.post('/auth/login', loginController); 
}

export { createRoutes };