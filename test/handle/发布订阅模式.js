class EventEmitter {
  constructor() {
    // cache 内部: { property: [fn,fn2,fn3] }
    this.cache = {}
  }
  // 注册事件
  $on(eventType, fn) {
    this.cache[eventType] = this.cache[eventType]  || [];
    this.cache[eventType].push(fn);
  }

  // 触发事件
  $emit(eventType) {
    if(this.cache[eventType]) {
      this.cache[eventType].forEach(handel => {
        handel();
      })
    }
  }
}
