
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2){
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
       
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab,ba),true);
console.log('\n');

const abc = { a: "1", b: "2", c: "3"};
console.log(eqObjects(ab,abc));
assertEqual(eqObjects(ab,abc),false);
console.log('\n');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd,dc));
assertEqual(eqObjects(cd,dc),true);
console.log('\n');

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd,cd2));
assertEqual(eqObjects(cd,cd2),false);
console.log('\n');
