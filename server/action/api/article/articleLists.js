/**
 * API /api/article/a
 * 
 */
module.exports = function (req, res, next) {
    let articleLists = [
        {
            '_id': '5937b8173fa8952a4778a338',
            'contentToMark': '<p>决策树呀决策树1。。。</p>\n',
            'classify': '机器学习',
            'title': '决策树',
            'content': '决策树呀决策树。。。'
        },
        {
            '_id': '5937b8173fa8952a4778a358',
            'contentToMark': '<p>决策树呀决策树2。。。</p>\n',
            'classify': '神经网络',
            'title': '决策树',
            'content': '决策树呀决策树。。。'
        },
        {
            '_id': '5937b8173fa8952a4778a398',
            'contentToMark': '<p>决策树呀决策树3。。。</p>\n',
            'classify': '机器学习',
            'title': '卷积神经网络',
            'content': '决策树呀决策树。。。'
        },
        {
            '_id': '5937b8173fa8952a4778a358',
            'contentToMark': '<p>决策树呀决策树2。。。</p>\n',
            'classify': '神经网络',
            'title': '决策树',
            'content': '决策树呀决策树。。。'
        },
        {
            '_id': '5937b8173fa8952a4778a398',
            'contentToMark': '<p>决策树呀决策树3。。。</p>\n',
            'classify': '机器学习',
            'title': '卷积神经网络',
            'content': '决策树呀决策树。。。'
        },
        {
            '_id': '5937b8173fa8952a4778a358',
            'contentToMark': '<p>决策树呀决策树2。。。</p>\n',
            'classify': '神经网络',
            'title': '决策树',
            'content': '决策树呀决策树。。。'
        },
        {
            '_id': '5937b8173fa8952a4778a398',
            'contentToMark': '<p>决策树呀决策树3。。。</p>\n',
            'classify': '机器学习',
            'title': '卷积神经网络',
            'content': '决策树呀决策树。。。'
        }
    ];
    articleLists.forEach((article => {
        delete article.content;
        article.contentToMark = article.contentToMark.match(/<p>([\s\S]*?)<\/p>/g)[0];
    }));
    res.json({
        code: 200,
        articleLists
    });

};