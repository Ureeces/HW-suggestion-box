const Suggestion = require('../models/SuggestionsSchema');

module.exports = {
    getAllSuggestions: (req, res) => {
        Suggestion.find()
            .then((suggestions) => res.status(200).json({ confirmation: 'success', suggestions }))
            .catch((err) => res.status(400).json({ confirmation: 'failure', err }));
    },

    createSuggestion: (req, res) => {
        // Deconstruct body
        let {
            title,
            name,
            suggestion,
            anonymous
        } = req.body

        // Handle(s) for invalid input 
        // No Required Inputs
        if(!title || !name || !suggestion) {
            return res
            .status(400)
            .json({ confirmation: 'failure', message: 'Invalid Input: Needs title, name, and suggestion.' });
        }

        // Handle for existing suggestion
        Suggestion.findOne({ title: title }).then((suggestion) => {
            if(suggestion) {
                res.status(400).send('This suggestion has already been offered.');
            }
        });

        // Create the new suggestion
        const newSuggestion = new Suggestion({title, name, suggestion, anonymous});

        // Save the new suggestion
        newSuggestion.save()
            .then((suggestion) => res.status(200).json({ message: 'Suggestion successfully offered!', suggestion }))
            .catch((err) => res.status(500).json({ confirmation: 'failure', err }));
    }
}