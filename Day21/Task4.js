/*
Activity/Task 4: Merge Two Sorted Lists
*/

mergeLists = (l1, l2) => {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeLists(l1, l2.next);
        return l2;
    }
};

