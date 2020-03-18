module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = "";
  let x = members.filter(g => {
    return typeof g == "string";
  })
  let t = x.map(ele => {
    return ele.trim().toUpperCase();
      })
  t.sort();
 
  q = t.map(el => {
    return el[0]
  })

  let w = q.join('');
  return w;
};
