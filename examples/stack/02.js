class Stack {
  constructor () {
    this.items = [];
  }
  push(element) {
    this.items(element);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}