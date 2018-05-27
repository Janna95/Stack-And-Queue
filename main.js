
console.log("function Stack is FILO");
  
function Stack () {
    this.arr = [];
  
    this.isEmpty = function() {
      return this.arr.length == 0;
    };
    this.push = function(num){
       this.arr.push(num);
       console.log(this.arr);
     }; 
  
    this.pop = function() {
      if (this.isEmpty()) 
        return 'The Array is empty.';
      else 
        return this.arr.pop();  
    };
}

let myStack = new Stack(); 

  myStack.push(1);
  myStack.push(2);
  myStack.push(3);

  console.log(myStack.pop());
  console.log(myStack.pop()); 
  console.log(myStack.pop());
  console.log(myStack.pop()); 

let myStack222222 = new Stack();
myStack222222.push(1);
myStack.push(4);

console.log(myStack222222.pop()); 
console.log(myStack.pop()); 


console.log("function Q is FIFO");

function Q () {
  
  Stack.call(this);
  
  this.arr = [];
  this.pop = function() {
      if (this.isEmpty()) 
        return 'The Array is empty.';
      else 
        return this.arr.shift();
  }
}

let myQ = new Q();

myQ.push(1);
myQ.push(2);
myQ.push(3);

console.log(myQ.pop()); 
console.log(myQ.pop());
console.log(myQ.pop());
console.log(myQ.pop());

let myQ222222 = new Q();
myQ222222.push(11);
myQ.push(44);

console.log(myQ222222.pop()); 
console.log(myQ.pop()); 