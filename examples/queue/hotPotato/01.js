function Queue(){
  var items = [];
  this.enqueue = function (element) {
    items.push(element);
  }
  this.dequeue = function () {
    return items.shift();
  }
  this.isEmpty = function () {
    return this.items.length === 0;
  }
  this.size = function () {
    return items.length
  }
  this.print = function () {
    console.log(items)
  }
}


function hotPotato (list, num) {
  var  queue = new Queue();

  for (var i = 0; i < list.length; i++) {
    queue.enqueue(list[i])
  }
  // 删除
  var eliminated = '';
  // 让队列进行循环
  while (queue.size() > 1) {
    for (var j = 0; j < num; j++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log("被淘汰的",eliminated);

  }
  return queue.dequeue();
}

var names = ["a","b","c","d"];
var winner = hotPotato(names, 7);

console.log(winner);