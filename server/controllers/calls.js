const Call = require('../models').Call;

module.exports = {
  create(req, res){
    return Call
      .create({
        date: req.body.date,
        time: req.body.time,
        type: req.body.type,
        location: req.body.location,
        reason: req.body.reason,
        description: req.body.description
      })
      .then(call => res.status(200).send(call))
      .catch(error => res.status(400).send(error));
  },
  listAll(req, res){
    return Call
      .all({
        order: [
          ['date', 'DESC'],
          ['time', 'DESC']
        ]
      })
      .then(call => res.status(200).send(call))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res){
    return Call
      .findById(req.params.id)
      .then(call => res.status(200).send(call))
      .catch(error => res.status(400).send(error));
  },

  update(req, res){
    return Call
      .findById(req.params.callId)
      .then(call => {
        if (!call){
          return res.status(404).send({
            message: "Call not found"
          });
        }

        return call
          .update({
            type: req.body.type || call.type,
            location: req.body.location || call.location,
            reason: req.body.reason || call.reason,
            description: req.body.description || call.description
          })
          .then(() => res.status(200).send(call))
          .catch((error) => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res){
    return Call
      .findById(req.params.callId)
      .then(call => {
        if (!call){
          return res.status(400).send({
            message: 'Call not found'
          });
        }

        return call
          .destroy()
          .then(() => res.status(200).send({
            message: { call }
          }))
          .catch((error) => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}