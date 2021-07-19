const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const UUID = require('uuid');

router.get('/api/notes', (req, res) => {
    fs.readFile('./Develop/db/db.json', 'UTF8', (err, data) => {
        let note_data = JSON.parse(data);
        res.send(note_data);
        if (err) {
            console.log(err)
        }
    });
})

router.post('/api/notes', (req, res) => {
    req.body.id = UUID.v1();

    fs.readFile('./Develop/db/db.json', 'UTF8', (err, data) => {
        let note_data = JSON.parse(data);
        note_data.push(req.body);

        fs.writeFile('./Develop/db/db.json', JSON.stringify(note_data), (err) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json(req.body);
        });
    });
});

module.exports = router;