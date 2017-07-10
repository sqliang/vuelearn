
module.exports.post = function (req, res, next) {
    let oneArticle = {
        '_id': '5937b8173fa8952a4778a338',
        'contentToMark': '<p>决策树呀决策树。。。</p>\n',
        'classify': '机器学习',
        'title': '决策树',
        'content': '决策树呀决策树。。。'
    };
    res.json({
        code: 200,
        oneArticle
    });
};