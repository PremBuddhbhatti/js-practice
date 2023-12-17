// custom itrator function, we dont have access to js loops

function positiveInts(n) {
  var i = 1;
  var max = (n < 1 || typeof n !== "number") ? 1 : n;
  return {
     next: function() {
        if (i > max) return {value: undefined, done: true}
        return {value: i++, done: false} // we will need to maintain next value 
     }
  }
}

var seq = positiveInts(3);

console.log(seq.next()); // {value: 1, done: false}
console.log(seq.next()); // {value: 2, done: false}
console.log(seq.next()); // {value: 3, done: false}
console.log(seq.next()); // {value: undefined, done: true}

function* myGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

const gen = myGenerator(3,9);

for (const val of gen) {
  console.log(val);
}