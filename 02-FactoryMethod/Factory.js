// 安全模式创建工厂类
var Factory = function(type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}
// 在工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java : function (content) {
        this.content = content;
        // 创建对象时，通过闭包，直接执行，将内容按需求的样式插入到页面内
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'green';
            document.getElementById('containner').appendChild(div);
        })(content);
    },
    JavaScript : function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'red';
            document.getElementById('containner').appendChild(div);
        })(content);
    },
    php : function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content; 
            div.style.color = 'blue';
            document.getElementById('containner').appendChild(div);
        })(content);
    },
    UI : function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'purple';
            document.getElementById('containner').appendChild(div);
        })(content);
    }
}

//test
var data = [
    {type:'JavaScript', content:'JavaScript哪家强'},
    {type:'Java', content:'Java哪家强'},
    {type:'php', content:'PHP是世界上最好的编程语言'},
    {type:'JavaScript', content:'JavaScript一统天下'},
    {type:'UI', content:'UI哪家强'}
];

for (var i = 0, l = data.length; i < l; i++) {
    var o = data[i];
    Factory(o.type, o.content);
}
