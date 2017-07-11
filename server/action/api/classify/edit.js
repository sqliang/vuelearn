
module.exports.post = function (req, res, next) {
    let { id, classify } = req.body;

    res.json({
        code: 200,
        message: '编辑成功'
    });
}