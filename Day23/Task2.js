/*
Activity/Task 2: Merge k Sorted Lists
*/

mergeKLists = (lists) => {
    if (lists == null || lists.length == 0) return null;
    return sortLinkedLists(lists, 0, lists.length - 1);
};

sortLinkedLists = (lists, lo, hi) => {
    if (lo >= hi) return lists[lo];
    let mid = Math.floor(lo + (hi - lo) / 2);
    let l1 = sortLinkedLists(lists, lo, mid);
    let l2 = sortLinkedLists(lists, mid + 1, hi);
    return merge(l1, l2);
};

merge = (l1, l2) => {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    }
    else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
};