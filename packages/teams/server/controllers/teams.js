'use strict';

var TeamList = [
    {
        id: 1,
        img: 'brazil.png',
        name: 'Brazil'
    },
    {
        id: 2,
        img: 'algeria.png',
        name: 'Algeria'
    }
];

exports.all = function (req, res) {
    res.json(TeamList);
};

exports.show = function(req, res) {
    res.jsonp(req.team);
};

exports.team = function(req, res, next, id) {
    req.team = TeamList[id - 1];
    next();
};


