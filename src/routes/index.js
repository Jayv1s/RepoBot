const { Router } = require('express');
const axios = require('axios');
const sortByLanguage = require('../utils/sortByLanguage');
const routes = Router();


routes.get('/', async (req, res) => {
    const response = await axios.get(`https://api.github.com/users/Takenet/repos?sort=created&direction=asc`);

    const RepInfos = sortByLanguage(response.data);
    return res.json({ RepInfos });
});

module.exports = routes;