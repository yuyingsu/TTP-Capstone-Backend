var express = require('express');
var router = express.Router();

const campusController = require('../controllers/campus');
const studentController = require('../controllers/student');

/* Student Router */
router.get('/student', studentController.list);
router.get('/student/:id', studentController.getById);
router.post('/student', studentController.add);
router.put('/student/:id', studentController.update);
router.delete('/student/:id', studentController.delete);

/* Campus Router */
router.get('/campus', campusController.list);
router.get('/campus/:id', campusController.getById);
router.post('/campus', campusController.add);
router.put('/campus/:id', campusController.update);
router.delete('/campus/:id', campusController.delete);

module.exports = router;