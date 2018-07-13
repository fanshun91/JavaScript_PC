/**
 * object.create() 创建一个新对象，
 * 第一个参数是对象的原型，第二个参数是对对象属性的描述
 * ::
 * Object.create(proto)
 * Object.create(proto, descriptors)
 */

// example 1, o1继承了对象的x和y属性
let o1 = Object.create({
  x: 1,
  y: 2
});

// example 2, o2（没有原型的对象）不继承任何属性和方法
let o2 = Object.create(null);

// example 3, o3（普通的控对象）
let o3 = Object.create(Object.prototype);

// 通过原型继承一个新对象（向下兼容）
function inherit(p) {
  if (p == null) {
    throw TypeError();
  }
  if (Object.create) {
    return Object.create(p);
  }

  // 如果create方法不存在
  let t = typeof p;
  if (t !== "object" && t !== "function") {
    throw TypeError();
  }
  function f() { }
  f.prototype = p;

  return new f();
}

// example 4, 创建一个新对象，具备x和y属性，同时继承z属性
let o = Object.create({ z: 0 }, {
  x: {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: true
  },
  y: {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: true
  }
}); 