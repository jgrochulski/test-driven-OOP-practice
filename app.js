const LinkedList = require('./LinkedList')

// const ll = new LinkedList
// ll.insertAtHead(10)
// ll.insertAtHead(20)

const ll = LinkedList.fromValues(10, 20, 30, 40, 50, 60)
// console.log(ll)

ll.print()

// console.log(ll.getByIndex(2).value)

ll.insertAtIndex(2, 25)

ll.print()

ll.removeAtIndex(2)

ll.print()