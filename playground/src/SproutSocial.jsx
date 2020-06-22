const areArraysEqual = (arr1, arr2, attr) => {
  // your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  const arr1WODup = [...new Set(arr1)];
  const arr2WODup = [...new Set(arr2)];
  if (arr1WODup.length !== arr2WODup.length) return false;
  for (let i = 0; i < arr1WODup.length; i++) {
    if (Object.prototype.toString.call(arr1WODup[i]) !== '[object Object]' && !arr2WODup.includes(arr1WODup[i])) return false;
    if (arr1WODup[i][attr] !== arr2WODup[i][attr]) return false; 
  }
  return true;
};
  
  QUnit.test('Exactness', ( assert ) => {
    assert.ok(areArraysEqual([1, 2, 3], [1, 2, 3]));
    assert.notOk(areArraysEqual([1, 2, 3], [1, 2]));
    assert.notOk(areArraysEqual([1, 2], [1, 2, 3]));
    assert.notOk(areArraysEqual([1, 2, 4, 4], [1, 2, 3, 4]));
  });
  
  QUnit.test('Exceptions', ( assert ) => {
    assert.ok(areArraysEqual([], []));
    assert.notOk(areArraysEqual(1, 1));
    assert.notOk(areArraysEqual([]));
    assert.notOk(areArraysEqual([], true));
    assert.notOk(areArraysEqual([], undefined));
    assert.notOk(areArraysEqual(null, []));
    assert.notOk(areArraysEqual([], "string"));
    assert.notOk(areArraysEqual([], {}));
  });
  
  QUnit.test('Order does not matter', ( assert ) => {
    assert.ok(areArraysEqual([1, 10, 2, 21], [1, 2, 10, 21]));
  });
  
  QUnit.test('Duplicates do not matter', ( assert ) => {
    assert.ok(areArraysEqual([1, 10, 2, 21], [1, 2, 2, 10, 21]));
  });
      
  QUnit.test('Compare Collections based on property', ( assert ) => {
    const groupOne = [
      { name: 'Anthony', age: 21 },
      { name: 'Flea', age: 37 }
    ];
    const groupTwo = [
      { name: 'Chad', age: 21 },
      { name: 'John', age: 37 }
    ];
    assert.ok(areArraysEqual(groupOne, groupTwo, 'age'));
    assert.notOk(areArraysEqual(groupOne, groupTwo, 'name'));
  });
  // https://codepen.io/team/Sprout/collab/MWKyyOr?editors=0011