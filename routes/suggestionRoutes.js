const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Server is working!');
    return res.status(200).send('Server is working!');
})

module.exports = router;