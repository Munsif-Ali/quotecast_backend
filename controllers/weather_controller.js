const axios = require('axios');
require('dotenv').config();

const getWeather = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ message: 'City parameter is required' });
        }

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const weatherData = {
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind_speed: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        };

        res.json(weatherData);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
};

module.exports = { getWeather };