'use strict';

module.exports = function (app) {
    var uploadFile = require('../controllers/uploadFileController');

    app.route('/upload')
        .post(uploadFile.upload_a_file)
};
