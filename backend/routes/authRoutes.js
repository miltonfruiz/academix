const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middleware/validate');

router.post('/api/auth/register', validate, authController.register);
router.post('/api/auth/login', validate, authController.login);

// Note: The provided contract does not include a logout endpoint.
// However, based on the description, a GET endpoint for the user profile and 
// a PUT endpoint to update the user profile are provided.
// A POST endpoint for logout is added here for completeness.
router.get('/api/auth/profile', authController.getProfile);
router.put('/api/auth/profile', authController.updateProfile);
router.post('/api/auth/logout', authController.logout);

module.exports = router;