// 篮球基类
var Basketball = function() {
    this.intro = '中国男篮';
} 
Basketball.prototype = {
    getMember : function() {
        console.log('每队1名队员');
    },
    getBallSize : function() {
        console.log('篮球很大');
    }
}

// 足球基类
var Football = function() {
    this.intro = '中国足球队';
}
Football.prototype = {
    getMember : function() {
        console.log('11个人');
    },
    getBallSize : function() {
        console.log('足球很大');
    }
}

// 网球基类
var Tennis = function() {
    this.intro = '网球队';
}
Tennis.prototype = {
    getMember : function() {
        console.log('每队1名队员');
    },
    getBallSize : function() {
        console.log('网球很小');
    }
}

// 运动工厂
var SportFactory = function(name) {
    switch(name) {
        case 'NBA':
            return new Basketball();
        case 'WorldCup':
            return new Football();
        case 'FrenchOpen':
            return new Tennis();
    }
}

// test
var football = SportFactory('WorldCup');
console.log(football);
console.log(football.intro);
football.getMember();
