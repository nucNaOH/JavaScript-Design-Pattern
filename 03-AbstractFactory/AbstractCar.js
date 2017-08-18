// 汽车类是抽象类，当使用其实例对象的方法时会（代码模拟）抛出错误
var Car = function () {};
Car.prototype = {
	getPrice : function () {
		return new Error('抽象类方法不能调用');
	},
	getSpeed : function () {
		return new Error('抽象类方法不能调用');
	}
};