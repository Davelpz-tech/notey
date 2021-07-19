const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('./Develop/db/db.json', 'UTF8', (err, data) => {
        const note_data = JSON.parse(data);
        res.send(note_data);
        if (err) {
            console.log(err)
        }
    });
})

router.post('/notes', (req, res) => {
    const { body } = req;

    fs.readFile('./Develop/db/db.json', 'UTF8', (err, data) => {
        const note_data = JSON.parse(data);
        note_data.push(body);
        body.id = uuid();
        res.send(note_data);
        if (err) {
            console.log(err)
        }

        fs.writeFile('./Develop/db/db.json', JSON.stringify(note_data), err => {
            if (err) {
                res.status(500).send(err);
            }
        });
    });
});

module.exports = router;