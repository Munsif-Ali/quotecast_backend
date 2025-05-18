const axios = require('axios');
require('dotenv').config();

const generateTextFromGemini = async (req, res) => {
    try {
        const { weather, quote } = req.body;

        if (!weather || !quote) {
            return res.status(400).json({ message: 'Weather and quote data are required' });
        }

        const prompt = `Create an Affirmation message based on the following weather and quote:
    
    Weather in ${weather.city}, ${weather.country}:
    - Temperature: ${weather.temperature}°C (feels like ${weather.feels_like}°C)
    - Humidity: ${weather.humidity}%
    - Wind: ${weather.wind_speed} m/s
    - Description: ${weather.description}
    
    Quote: "${quote.content}" - ${quote.author}
    
    Generate a thoughtful message that connects the current weather conditions with the provided quote. Keep it positive and uplifting, about 2-3 sentences.`;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            }
        );

        const generatedText = response.data.candidates[0].content.parts[0].text;
        res.json({ generatedText });
    } catch (error) {
        console.error('Error generating text with Gemini:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error generating text with Gemini', error: error.message });
    }
};




module.exports = { generateTextFromGemini };