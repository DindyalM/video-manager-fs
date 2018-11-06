const express = require('express');
var router = express.Router();

var { Player } = require('../models/players');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Player.find((err,docs) =>{
        if (!err) { res.send(docs); }
        else{console.log("Error" + JSON.stringify(err, undefined, 2)); }
    }); //retrieves all players from  players collection
});

module.exports = router;