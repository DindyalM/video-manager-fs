const mongoose = require('mongoose');

//(CREATE)
var Player = mongoose.model('Player', {
    name: {type: String},
    rank: {type: Number},
    score: {type: Number}, 
    time:{type: Number},
    games_played:{type: Number},
    status: {type: String}
});

module.exports = { Player };

