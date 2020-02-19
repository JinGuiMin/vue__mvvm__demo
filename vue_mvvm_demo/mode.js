

// 发布订阅模式    [fn1,fn2,fn3]

// 绑定的方法都有一个update属性

function Dep() {
    this.subs = [];
}

Dep.prototype.addSub = function (sub) {//订阅,sub是个函数（事件）
    this.subs.push(sub)
}

// 调用的时候，事件依次执行,notify:通知
Dep.prototype.notify = function () {
    this.subs.forEach(sub => sub.update());
}

// 订阅,通过这个类Watcher ，通过这个类创建的实例都拥有update方法
function Watcher(fn) {
    this.fn = fn;
}
Watcher.prototype.update = function () {
    this.fn()
}

let watcher = new Watcher(function () {
    console.log(1)
});

let dep = new Dep();
dep.addSub(watcher)
dep.addSub(watcher)
dep.addSub(watcher)
dep.notify()




