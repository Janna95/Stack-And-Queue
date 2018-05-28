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
        return 'The Array Is Empty.';
      else 
        return this.arr.pop();  
    };
}

let myStack = new Stack(); 


function Q () {
  
  Stack.call(this);
  
  this.arr = [];
  this.pop = function() {
      if (this.isEmpty()) 
        return 'The Array Is Empty.';
      else 
        return this.arr.shift();
  }
}

let myQ = new Q();

function addtoStack() {
  let valueToStack = document.getElementById("inputS").value;
  let newItem = document.createElement('div');
  let stack = document.getElementById('stack');

  myStack.push(valueToStack);
  newItem.innerHTML = myStack.arr[myStack.arr.length-1];
  newItem.className = "itemS";
  stack.appendChild(newItem);
}

function addtoQueue() {
  let valueToQueue = document.getElementById("inputQ").value;
  let newItem = document.createElement('div');
  let queue = document.getElementById('queue');

  myQ.push(valueToQueue);
  newItem.innerHTML = myQ.arr[myQ.arr.length-1];
  newItem.className = "itemQ";
  queue.appendChild(newItem);
}

function deleteFromS() {
  let stack = document.getElementById('stack')
  let items = document.getElementsByClassName('itemS');
  stack.removeChild(items[myStack.arr.length-1]);
  myStack.pop();
}

function deleteFromQ() {
  let queue = document.getElementById('queue');
  let items = document.getElementsByClassName('itemQ');
  queue.removeChild(items[0]);

  myQ.pop();
}