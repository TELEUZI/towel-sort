const towelSort = matrix => Array.isArray(matrix) ?
    matrix.reduce((sortedArr, currentArr, currentIndex) =>
        sortedArr.concat(isOdd(currentIndex) ? currentArr : currentArr.reverse()), []) : [];

const isOdd = number => !(number % 2);

module.exports = towelSort;