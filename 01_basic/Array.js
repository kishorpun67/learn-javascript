// Define a Node class
class Node {
    constructor(data) {
      this.data = data;   // Store the data value
      this.next = null;   // Reference to the next node, initially null
    }
  }
  
  // Define a LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;  // Head of the linked list, initially null
    }
  
    // Method to add a new node at the end of the list
    append(data) {
      const newNode = new Node(data);  // Create a new node with the given data
  
      if (!this.head) {  // If the list is empty, make the new node the head
        this.head = newNode;
        
        return;
      }
  
      let current = this.head;  // Start with the head node
      while (current.next) {    // Traverse to the end of the list
        current = current.next;
      }
  
      current.next = newNode;  // Append the new node at the end
    }
  
    // Method to print the linked list
    printList() {
      let current = this.head;  // Start with the head node
      let output = '';
      
      while (current) {         // Traverse the list
        output += `${current.data} -> `;
        current = current.next;
      }
      
      console.log(output + 'null');  // Print the list with an arrow indicating the connection between nodes
    }
  }
  
  // Example usage
  const ll = new LinkedList();
  ll.append(10);
  ll.append(20);
  ll.append(30);
  
  ll.printList();
  

  for(let i=1; i<=5; i++) {
    let row =  ""
    for(let j=1; j<=i; j++) {
      row += "* "
    }
    console.log(row)
  }



class List{
  constructor(data) {
    this.head = {
      value:data,
      next:null
    }
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(data) {
    let  newNode  = {
      value : data,
      next :null
    }


    this.tail.next = newNode
    this.tail = newNode
    this.size += 1
  }

  traverse() 
  {
    let counter = 0 
    let currrentNode = this.head
    while(counter < this.size) {
      console.log(currrentNode);
      currrentNode = currrentNode.next
      counter++
      // console.log(currrentNode)
    }
  }
}

let list = new List(200)
list.appendNode(30)
list.appendNode(340)

list.traverse()
// console.log(list)


