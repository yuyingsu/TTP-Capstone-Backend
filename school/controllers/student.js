const Student = require('../models/index');

module.exports = {
  list(req, res) {
    return Student
      .findAll()
      .then((students) => res.status(200).send(students))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Student
      .findByPk(req.params.id)
      .then((student) => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return res.status(200).send(student);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Student
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        image_url: req.body.url,
        gpa: req.body.gpa
      })
      .then((student) => res.status(201).send(student))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Student
      .findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return student
          .update({
            first_name: req.body.first_name || student.first_name,
            last_name: req.body.last_name || student.last_name,
            email: req.body.email || student.email,
            image_url: req.body.url || student.url,
            gpa: req.body.gpa || student.gpa,
          })
          .then(() => res.status(200).send(student))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Student
      .findByPk(req.params.id)
      .then(student => {
        if (!student) {
          return res.status(400).send({
            message: 'Student Not Found',
          });
        }
        return student
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

};