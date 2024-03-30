export function deleteElementFromArray(arr, element) {
    const ix = arr.findIndex(a => a === element);
    if (ix !== -1) arr.splice(ix, 1);
    return arr;
}

export function add(a, b) {
    return a+b;
}