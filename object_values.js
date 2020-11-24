const object1 = {
  a: 'somestring',
  b: 90,
  c: true
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
for (var j of Object.values(object1)){
  alert(j);
}
