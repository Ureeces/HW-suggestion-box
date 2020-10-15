const express = require('express');
const router = express.Router();

const {
    getAllSuggestions,
    // getSuggestionsByName,
    // getSingleSuggestion,
    createSuggestion,
    // updateSuggestion,
    // deleteSuggestion
} = require('../controllers/suggestionController');

router.get('/', (req, res) => {
    console.log('Server is working!');
    return res.status(200).send('Server is working!');
})

router.get('/all-suggestions', getAllSuggestions);

router.post('/create-suggestion', createSuggestion);
module.exports = router;