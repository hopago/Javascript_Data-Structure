// 배열이 없었다면 어떻게 할까?

class LinkedList {
    length = 0;
    head = null;

    add(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
                console.log(`현재: ${JSON.stringify(current)}`);
            }

            current.next = new Node(value);
        }

        this.length++;

        return this.length;
    }

    search(value) {
        
    }

    remove(value) {

    }
}

class Node {
    next = null;
    constructor(value) {
        this.value = value;
    }
}

const ll = new LinkedList();
console.log(ll.length);

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.search(3);
ll.search(7); // null
ll.remove(4);
ll.search(4); // null