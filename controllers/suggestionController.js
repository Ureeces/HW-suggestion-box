const Suggestion = require('../models/SuggestionsSchema');

module.exports = {
    getAllSuggestions: (req, res) => {
        Suggestion.find()
            .then((suggestions) => res.status(200).json({ confirmation: 'success', suggestions }))
            .catch((err) => res.status(400).json({ confirmation: 'failure', err }));
    }
}