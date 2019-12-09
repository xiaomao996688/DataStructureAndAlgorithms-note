class Stack {
  constructor () {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop(){
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.toString());
  }
}
function baseCover(decNumber, base){
  let remStack = new Stack();
  let remString = '';
  let rem;
  let digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rem = Math.floor(decNumber%base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/base);
  }
  while (!remStack.isEmpty()) {
    // console.log(digits[remStack.pop()])
    remString += digits[remStack.pop()];
  }
  console.log(remString);
  return remString;
}

baseCover(10,2)