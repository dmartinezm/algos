function ransome(magazine, note) {
  let magHash = makeHash(magazine);
  let noteHash = makeHash(note);
  let counter = 0;
  for (let element in noteHash) {
    if (magHash[element] >= noteHash[element]) {
      counter += 0;
    } else {
      counter += 1;
    }
  }
  return counter > 0 ? "NO" : "YES";
}

function makeHash(string) {
  let map = {};

  string
    .split(" ")
    .forEach(element =>
      element in map ? (map[element] += 1) : (map[element] = 1)
    );
  return map;
}

// ransome("give me one grand today night", "give me today");
module.exports = ransome;
