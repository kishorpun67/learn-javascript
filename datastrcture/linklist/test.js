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
        // console.log(currentNode)  
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
        let nextNode = lead.next.next
        lead.next = nextNode
      }

    }
  }

  let list = new List(300)
  list.appendNode(400)
  list.appendNode(500)
  list.appendNode(600)
  list.appendNode(700)
  list.appendNode(800)
  list.traversing()
  list.deleteNode(2)
// console.log(list);


var mergeTwoLists = function(list1, list2) {
    let currentList =[];
    let i = 0;
    let  j = 0;
    while(i < list1.length && j<list2.length) {
        if(list1[i] < list2[j]) {
            currentList.push(list1[i])
            i++
        } else if (list2[j] < list1[i]) {
          currentList.push(list[j])
            j++
        }else{
            currentList.push(list1[i])
            currentList.push(list2[j])
            i++
            j++
        }
    }
    while(i< list1.length) {
      currentList.push(list1[i])
      i++
    }
    while(j< list2.length) {
      currentList.push(list2[j])
      j++
    }
    
    return  currentList;
     
};

let result = mergeTwoLists([1,2,3], [1,3,4])
console.log(result);