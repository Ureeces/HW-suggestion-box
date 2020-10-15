const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv');

const suggestionRoutes = require('./routes/suggestionRoutes');

const port = process.env.PORT || 3000;

mongoose
    .connect('mongodb://localhost/suggestion-box', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(`MongoDB Error: ${err}`));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/suggestions', suggestionRoutes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});