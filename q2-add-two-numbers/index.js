/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var list = [];
    var carry = 0;
    var currentNode = null;
    while(l1 !== null || l2 !== null || carry !== 0){
        var node = {};
        var sum = (l1 === null? 0 : l1.val) + (l2 === null? 0 : l2.val) + carry;
        node.val = sum % 10;
        carry = Math.floor(sum / 10);
        list.push(node.val);
        if(currentNode === null){
            currentNode = node;
        }else{
            currentNode.next = node;
            currentNode = currentNode.next;
        }

        l1 = (l1 === null) ? l1 : l1.next;
        l2 = (l2 === null) ? l2 : l2.next;
    }

    return list;
};