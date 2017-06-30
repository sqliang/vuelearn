/**
 * Created by baidu on 17/6/12.
 */
let sha1 = require('sha1');
let createToken = require('./createToken');

module.exports.post = function (req, res, next) {
    let name = req.body.account;
    let password = sha1(req.body.checkPass);
    res.json({
        code: 200,
        token: createToken(name)
    });
};