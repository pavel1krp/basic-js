module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(element => {
    let q = element.filter(yshi => {
      return yshi == '^^';
    });

    cats = cats + q.length
  });

  return cats;
};
