'use strict';

var teams = require('../controllers/teams');

// The Package is past automatically as first parameter
module.exports = function(Teams, app, auth, database) {

    app.route('/teams')
        .get(teams.all);

    app.route('/teams/:teamId')
        .get(teams.show);

    // Finish with setting up the teamId param
    app.param('teamId', teams.team);

    app.get('/teams/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/teams/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/teams/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/teams/render', function(req, res, next) {
        Teams.render('teams', {
            package: 'teams'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
