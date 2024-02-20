import { app, port } from './app.js';

function run() {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); 
  });
}

export { run };