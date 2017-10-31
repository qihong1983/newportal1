Mock.mock('http://g.cn', {
	'data|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});

Mock.mock('http://a.cn', {
	"status|1": true,
	"msg": "成功", 
	'data|1-12': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});

Mock.mock('http://a.cn/api/getlist.do', {
    "status|1": true,
    "msg": "成功1111", 
    'data|1-12': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});
