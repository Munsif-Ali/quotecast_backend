const axios = require('axios');
require('dotenv').config();

const getRandomQuote = async (req, res) => {
    try {
        const response = await axios.get(process.env.QUOTE_API_URL);
        const quoteData = {
            content: response.data.quote,
            author: response.data.author
        };
        res.json(quoteData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quote', error: error.message });
    }
};

module.exports = { getRandomQuote };