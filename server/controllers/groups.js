'use strict';

exports.all = function(req, res) {
    res.json([
        {
            name: 'Group A',
            teams: [
                {
                    id: 1,
                    name: ' Brazil'
                },
                {
                    id: 2,
                    name: ' Croatia'
                },
                {
                    id: 3,
                    name: ' Mexico'
                },
                {
                    id: 4,
                    name: ' Cameroon'
                }
            ]
        },
        {
            name: 'Group B'
        },
        {
            name: 'Group C'
        }
    ]);
};