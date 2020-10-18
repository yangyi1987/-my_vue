class Vue {
  constructor(options){
    this.$options = options || {},
    this.$data = options.data|| {},
    this.el =  typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
    this._proxyData(this.$data);
  }
  _proxyData(data) {
    Object.keys(data).forEach(item => {
      Object.defineProperty(this, item, {
        configurable: true,
        enumerable: true,
        get () {
          return data[item];
        },
        set (val) {
          data[item] = val;
        }
      })
    })
  }
}
