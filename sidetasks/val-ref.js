const a = 7;
let b = a;

b = 3;

function changeValue(value) {
  value = 10;
  return value;
}

b = changeValue(b);

console.log(a, b);
