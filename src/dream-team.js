module.exports = function createDreamTeam(members) {
  let team = "";
  let x = members.filter(g => {
    return typeof g == "string";
  })
  x.sort();
  q = x.map(el => {
    return el[0]
  })
  let w = q.join('');
  r = w.toUpperCase();
  return r;
};