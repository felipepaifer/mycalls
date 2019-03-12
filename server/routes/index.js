const callsController = require('../controllers').calls;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'SAC SYSTEM API',
  }));

  app.post('/api/calls/new', callsController.create);
  app.get('/api/calls', callsController.listAll);
  app.put('/api/calls/:callId', callsController.update);
  app.delete('/api/calls/:callId', callsController.destroy);
  app.get('/api/calls/:id', callsController.retrieve);
};