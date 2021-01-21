const Campus = require('../models/index');

module.exports = {
  list(req, res) {
    return Campus
      .findAll()
      .then((campuses) => res.status(200).send(campuses))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Campus
      .findByPk(req.params.id)
      .then((campus) => {
        if (!campus) {
          return res.status(404).send({
            message: 'Campus Not Found',
          });
        }
        return res.status(200).send(campus);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Campus
      .create({
        name: req.body.name,
        image_url: req.body.url,
        address: req.body.address,
        description: req.body.description
      })
      .then((campus) => res.status(201).send(campus))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Campus
      .findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(404).send({
            message: 'Campus Not Found',
          });
        }
        return campus
          .update({
            name: req.body.name || campus.name,
            image_url: req.body.url || campus.image_url,
            address: req.body.address || campus.address,
            description: req.body.description || campus.description
          })
          .then(() => res.status(200).send(campus))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Campus
      .findByPk(req.params.id)
      .then(campus => {
        if (!campus) {
          return res.status(400).send({
            message: 'Campus Not Found',
          });
        }
        return campus
          .destroy()
          .then(() => res.status(200).send(campus))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};