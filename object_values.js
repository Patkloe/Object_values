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

// how to navigate in an object key and object values

var obj = {1:"a",2:"b",3:"c",4:"d",5:"e"};
for(var i in obj){
  console.log("keys :" + " " +i);
  console.log("values :" + " " +obj[i]);
}

var keys = Object.keys(obj);
console.log("recuperation : " + " " + keys[0]);
var size = keys.length;
console.log("size : " + " " + size);
console.log("recuperation : " + " " + keys[4]);
