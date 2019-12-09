## 栈
栈和队列都是动态的集合,在栈中,可以去掉的元素是最近插入的那个。栈实现了后进先出。
栈的基本结构[堆栈结构](./stack.png)
```js
// 堆栈的实现

function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  }
  this.pop = function() {
    return items.pop();
  }
  this.isEmpty = function() {
  	return items.length === 0; 
  }
  this.size = function() {
    return items.length;
  }
  this.clear = function() {
  	return this.items = [];
  }
  this.print = function() {
    console.log(items.toString())
  }
}

````