require('dotenv').config()

module.exports = {
    index
}

async function index(req, res) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`);
    const data = await response.json()    
    res.json(data)
}