
module.exports.get = function (req, res, next) {
    let lists = [
        {
            '_id': '59368d543fa8952a4778a32f',
            'classify': '前端',
        },
        {
            '_id': '59368d5e3fa8952a4778a330',
            'classify': '随笔',
        },
        {
            '_id': '5937a1b13fa8952a4778a333',
            'classify': 'Linux',
        },
        {
            '_id': '5937a1c03fa8952a4778a334',
            'classify': '机器学习',
        },
        {
            '_id': '5937a1ce3fa8952a4778a335',
            'classify': '个性化推荐'
        },
        {
            '_id': '5937a1da3fa8952a4778a336',
            'classify': 'IOT',
        },
        {
            '_id': '5937a1f53fa8952a4778a337',
            'classify': '人工智能'
        }
    ];
    res.json({
        code: 200,
        lists
    });
}