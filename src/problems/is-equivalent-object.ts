// implementation of some property-based equality checking where each property of the object is compared.

function isEquivalentObj(a: { [key: string]: number | string }, b: { [key: string]: number | string }) {
  // Arrays of property names.
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If their property lengths are different, they're different objects
  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];
    // If the values of the property are different, not equal
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If everything matched, correct
  return true;
}
// However, this would still work for objects that have only a string or a number as the property.
isEquivalentObj({ hi: 12 }, { hi: 12 }); // Return true.
