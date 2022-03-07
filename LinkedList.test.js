const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list', () => {
    const ll = new LinkedList
    ll.insertAtHead(10)
    const oldHead = ll.head
    ll.insertAtHead(20)

    expect(ll.head.value).toBe(20)
    expect(ll.head.next).toBe(oldHead)
    expect(ll.length).toBe(2)

  })
})

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20)

      expect(ll.getByIndex(-1)).toBeNull()
    })
  })

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20)

      expect(ll.getByIndex(5)).toBeNull()
    })
  })

  describe('with index 0', () => {
    test('it returns head', () => {
      const ll = LinkedList.fromValues(10, 20)

      expect(ll.getByIndex(0).value).toBe(10)
    })
  })

  describe('with index i', () => {
    test('it returns the element in index i', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40)

      expect(ll.getByIndex(2).value).toBe(30)
    })
  })

})

describe('#insertByIndex', () => {
  describe('with index less than 0', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20)
      ll.insertAtIndex(-1, 30)
      expect(ll.length).toBe(2)
    })
  })

  describe('with index greater than list length', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20)
      ll.insertAtIndex(5, 30)
      expect(ll.length).toBe(2)
    })
  })

  describe('with index 0', () => {
    test('insert at the head', () => {
      const ll = LinkedList.fromValues(10, 20)
      ll.insertAtIndex(0, 30)

      expect(ll.head.value).toBe(30)
      expect(ll.head.next.value).toBe(10)
      expect(ll.length).toBe(3)
    })
  })

  describe('with index i', () => {
    test('insert at index i', () => {
      const ll = LinkedList.fromValues(10, 20, 40)
      ll.insertAtIndex(2, 30)
      const node = ll.getByIndex(2)
      expect(node.value).toBe(30)
      expect(node.next.value).toBe(40)
      expect(ll.length).toBe(4)
    })
  })

})

describe('#removeHead', () => {
  test('it removes the head', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40)
    ll.removeHead()

    expect(ll.head.value).toBe(20)
    expect(ll.length).toBe(3)

  })
})

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not remove anything', () => {
      const ll = LinkedList.fromValues(10, 20)
      ll.removeAtIndex(-1)
      expect(ll.length).toBe(2)
    })
  })

  describe('with index greater than list length', () => {
    test('it does not remove anything', () => {
      const ll = LinkedList.fromValues(10, 20)
      ll.removeAtIndex(5)
      expect(ll.length).toBe(2)
    })
  })

  describe('with index 0', () => {
    test('remove at the head', () => {
      const ll = LinkedList.fromValues(10, 20, 30)
      ll.removeAtIndex(0)

      expect(ll.head.value).toBe(20)
      expect(ll.head.next.value).toBe(30)
      expect(ll.length).toBe(2)
    })
  })

  describe('with index i', () => {
    test('remove at index i', () => {
      const ll = LinkedList.fromValues(10, 15, 20, 30)
      ll.removeAtIndex(1)
      const node = ll.getByIndex(1)
      expect(node.value).toBe(20)
      expect(node.next.value).toBe(30)
      expect(ll.length).toBe(3)
    })
  })

})

describe('#print', () => {
  test('it prints the linked list', () => {
    ll = LinkedList.fromValues(10, 20, 30, 40, 50)

    expect(ll.print()).toBe('10 -> 20 -> 30 -> 40 -> 50 -> null')
  })
})