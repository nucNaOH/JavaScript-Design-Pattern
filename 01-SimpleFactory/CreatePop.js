// 通过创建一个新对象人后包装增强其属性功能来实现
function createPop(type, text) {
    var o = new Object();
    o.content = text;
    o.show = function() {
        console.log(this.content);
    };
    if(type == 'alert') {
        // 警示框差异部分
    }
    if (type == 'prompt') {
        // 提示框差异部分
    }
    if (type == 'confirm') {
        // 确认框差异部分
    }

    return o;
}

var userNameAlert = createPop('alert', '用户名只能是26个字母和数字');
userNameAlert.show();
