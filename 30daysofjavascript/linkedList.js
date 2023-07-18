function Node(data) {
    this.data = data;
    this.next = null;
}

const LinkedList = function () {
    this.head = null;
}

LinkedList.prototype.append = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

LinkedList.prototype.appendMiddle = function(prevNode,data){
    if(prevNode){
        const newNode = new Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }else{
        console.log('Previous node can not be null.');
    }

}

LinkedList.prototype.prepend = function (data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
}

LinkedList.prototype.delete = function(data){
    if(!this.head) return;
    if(this.head.data === data){
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while(current.next){
        if (current.next.data === data) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
}

LinkedList.prototype.toArray = function () {
    const result = [];
    let current = this.head;
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
}

LinkedList.prototype.print = function () {
    console.log(this.toArray().join(' -> '));
}

const linkList = new LinkedList();
linkList.append(1);
linkList.append(2);
linkList.prepend(3);
linkList.appendMiddle(linkList.head.next,4);
linkList.print();
linkList.delete(4);
linkList.print();