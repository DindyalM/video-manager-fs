const mongoose = require('mongoose');

var Player = mongoose.model('Player', {
    name: {type: String},
    rank: {type: Number},
    score: {type: Number}, 
    time:{type: Number},
    games_played:{type: Number},
    Status: {type: String}
});

module.exports = { Player };

