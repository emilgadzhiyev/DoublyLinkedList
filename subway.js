const DoublyLinkedList = require('./DoublyLinkedList.js');

const subway = new DoublyLinkedList();
subway.addToHead('28 May'); // 10.6.1967
subway.addToHead('Sakhil'); // 10.6.1967
subway.addToHead('IcheriShekher'); // 10.6.1967
subway.printList();
subway.addToTail('Gadzhlik'); // 10.6.1967
subway.addToTail('Nariman Narimanov'); // 10.6.1967
subway.addToTail('Khatai'); // 10.6.1967
subway.printList();
subway.removeHead();
subway.removeTail();
subway.printList();
subway.removeByData('TimesSquare');
subway.printList();