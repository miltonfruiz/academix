const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const authenticate = require('../middleware/auth');

router.get('/api/courses', authenticate, controller.getAll);
router.post('/api/courses', authenticate, controller.create);
router.get('/api/courses/:id', authenticate, controller.getOne);
router.put('/api/courses/:id', authenticate, controller.update);
router.delete('/api/courses/:id', authenticate, controller.remove);

router.get('/api/students', authenticate, controller.getAll);
router.post('/api/students', authenticate, controller.create);
router.get('/api/students/:id', authenticate, controller.getOne);
router.put('/api/students/:id', authenticate, controller.update);
router.delete('/api/students/:id', authenticate, controller.remove);

router.get('/api/enrollments', authenticate, controller.getAll);
router.post('/api/enrollments', authenticate, controller.create);
router.get('/api/enrollments/:id', authenticate, controller.getOne);
router.put('/api/enrollments/:id', authenticate, controller.update);
router.delete('/api/enrollments/:id', authenticate, controller.remove);

module.exports = router;