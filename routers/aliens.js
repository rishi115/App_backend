const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('rakesh kumar');
})

module.exports = router;
