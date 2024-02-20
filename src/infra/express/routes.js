function createRoutes(app) {
  app.get('/', (req, res) => {
    res.json({message: 'olá mundo!!'});
  });
}

export { createRoutes };