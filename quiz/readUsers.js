const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function (user) {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let user = req.users.filter((user) => user.username === req.params.name)[0];
    res.send([{ id: user.id, email: user.email }]);
});

module.exports = router;