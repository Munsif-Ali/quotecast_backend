const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth_middleware');
const { getWeather } = require('../controllers/weather_controller');
const { getRandomQuote } = require('../controllers/quote_controller');
const { generateTextFromGemini } = require('../controllers/gemini_controller');
const { getAllUsers } = require('../controllers/user_controller');
// Protected routes
router.get('/weather', authenticate, getWeather);
router.get('/quote', authenticate, getRandomQuote);
router.get('/generate-text', authenticate, generateTextFromGemini);

router.get('/get-all-users', getAllUsers);

module.exports = router;
