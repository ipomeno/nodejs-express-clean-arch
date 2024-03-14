import { configAuthRoutes } from './auth/configAuthRoutes.js';
import { configUsuarioRoutes } from './usuarios/configUsuarioRoutes.js';


function createRoutes(app) {
  app.get('/', (req, res) => {
    res.json({message: 'olá mundo!!'});
  });

  const configs = [
    configAuthRoutes,
    configUsuarioRoutes
  ];

  for(const config of configs) {
    config(app);
  }
}

export { createRoutes };