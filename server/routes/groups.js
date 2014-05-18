'use strict';

var groups= require('../controllers/groups');

module.exports = function(app, auth) {
    app.route('/groups')
        .get(groups.all);
};
