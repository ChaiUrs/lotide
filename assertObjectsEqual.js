
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1 [i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for(let key of Object.keys(object1)) {
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;    
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require(`util`).inspect; // add this line to use the util library's inspect function.
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "4", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));  //should print "false"
assertObjectsEqual(eqObjects(ab, ba), false); //assertion fails

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(ab, ba)); //should print "true"
assertObjectsEqual(eqObjects(cd, dc), true); //assertion passes
