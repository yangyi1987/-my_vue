// 1. vue2.x 使用 Object.defineProperty() 实现 响应式原理

// data 为 Vue 中的 data 
let data = {}

// vm 为 vue 中的 vue 实例
let vm = {}

function handle(data, vm) {
  Object.keys(data).forEach(key =>{
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      // get set 访问器
      get () {
        return data[key]
      },
      set (val) {
        if(val !== data[key]) {
          data[key] = val;
          // 修改视图
        }
      }
    })
  })
} 


// vue3 使用 Proxy 实现响应式原理

function handleProxy(data) {
  let vm = new Proxy(data, {
    get(target, prop) {
      if(prop in target) {
        return target[prop];
      }
    },
    set(target,prop,val) {
      if(prop in target) {
        if(val !== target[prop]) {
          target[prop] = val;
          // 修改视图中的数据
        }
      }
    }
  })
  return vm;
}

