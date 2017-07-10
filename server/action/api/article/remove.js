
module.exports.post = function (req, res, next) {
    let { id } = req.body;

    res.json({
        code: 200,
        message: '删除成功'
    });
}