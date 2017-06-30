/**
 * Created by baidu on 17/6/30.
 */
let jwt = require('jsonwebtoken');

module.exports = function (name) {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);// 有效期设置为7天
    let exp = parseInt(expiry.getTime() / 1000);
    const token = jwt.sign({
        name,
        exp
    },'aaa');
    return token;
}
