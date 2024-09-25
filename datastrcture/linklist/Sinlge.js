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
      
      // console.log(output + 'null');  // Print the list with an arrow indicating the connection between nodes
    }
  }
  
  // Example usage
  const ll = new LinkedList();
  ll.append(10);
  ll.append(20);
  ll.append(30);
  
  ll.printList();

  class List {
    constructor(data) {
      this.head = {
        value: data,
        next: null
      }
      this.tail = this.head
      this.size = 1
    }
    appendNode(nodeData) {
      let newNode = {
        value : nodeData,
        next : null
      }
      this.tail.next = newNode
      this.tail = newNode
      this.size += 1;
    }

    traversing() {
      let currentNode = this.head;
      for(let i = 0 ; i< this.size; i++) {
        console.log(currentNode)
        currentNode = currentNode.next
      }
    }

    deleteNode(index) {
      let counter = 1
      let lead = this.head
      if(index == 1) {
        this.head = this.head
      }else {
        while(counter < index-1) {
          lead = lead.next
          counter++
        }

        
      }


    }
  }

  let list = new List(300)
  list.appendNode(400)
  list.appendNode(500)
  list.appendNode(600)
  list.appendNode(700)
  list.appendNode(800)
  list.deleteNode()
  list.traversing()
  