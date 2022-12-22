const DICTIONARY01 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

function decodeId(id: string) {
  const base: number = DICTIONARY01.length;
  let decoded: string | number = 0;

  for (let i = 0; i < id.split('').length; i++) {
    decoded = decoded * base + DICTIONARY01.indexOf(id.charAt(i));
  }

  return decoded;
}

console.log(encodeId(11231230)); // prints 'VhU2'
console.log(decodeId('VhU2')); // prints '11231230'
