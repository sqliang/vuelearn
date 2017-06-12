var sha1 = require('sha1');

module.exports.post = function (req, res, next) {
    var name = req.body.account;
    var password = req.body.checkPass;
    password = sha1(password);
    var user = {
        name: name,
        password: password
    };
    

};