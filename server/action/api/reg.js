var sha1 = require('sha1');
var createToken = require('./createToken');

module.exports.post = function (req, res, next) {
    var name = req.body.account;
    var password = req.body.checkPass;
    password = sha1(password);
    var user = {
        name: name,
        password: password
    };

    res.json({
        code: 200,
        token: createToken(name)
    });
    

};