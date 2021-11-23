function sortEvenOdd(arr) {
    arr.sort((a, b) => (a & 1) - (b & 1) || a - b);
}