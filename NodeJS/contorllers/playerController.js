const express = require('express');
var router = express.Router(); //import router from express
var ObjectId = require('mongoose').Types.ObjectId;


var { Player } = require('../models/players');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Player.find((err,docs) =>{
        if (!err) { res.send(docs); }
        else{console.log("Error" + JSON.stringify(err,undefined,2)); }
    }); //retrives all players from  players collection
});

//retrive using get
router.get("/:id", (req , res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with id: ${req.params.id}`); //400 invalid url !
    
        Player.findById(req.params.id, (err,doc) =>{
        if(!err){ res.send(doc); }
        else{ console.log('error in retriving player' + JSON.stringify(err,undefined,2)); }
    });
});

// retrive using and send JSON data to client end (READ)

router.post("/", (req, res) => {
    //object of mongooes model, player
    var ply = new Player({
        name: req.body.name,
        rank: req.body.rank,
        score: req.body.score, 
        time:req.body.time,
        games_played:req.body.games_played,
        status: req.body.status,   
    });

    ply.save((err,docs) => {
        if(!err){ res.send(docs); }
        else {console.log("Error in player save"+ JSON.stringify(err,undefined,2));}
    }); //inserts record into ply object
});

//UPDATE
router.put("/:id", (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with id: ${req.params.id}`);
    
    var ply = {
    name: req.body.name,
    rank: req.body.rank,
    score: req.body.score, 
    time:req.body.time,
    games_played:req.body.games_played,
    status: req.body.status, 
    };
    //new = ture means doc will contain new value
    Player.findByIdAndUpdate(req.params.id, { $set: ply }, { new: true }, (err,doc) => {
        if(!err){ res.send(doc); }
        else{console.log("Error in updating player"+ JSON.stringify(err,undefined,2));}
    });
});

//DELETE
router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no player record exists with that id + ${req.params.id}`);  

    Player.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log("Error in player delete" + JSON.stringify(err,undefined,2))}
    });
});


module.exports = router;