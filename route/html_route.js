const path = require('path');
const router = require('express').Router();

//get /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'))
});
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

module.exports = router;