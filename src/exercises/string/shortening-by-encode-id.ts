/**
 * Have you ever wondered how URL-shortening sites such as Bit.ly work? A simplified URL compression algorithm follows a certain structure,
 *
 * For the shortening part, the following algorithm can be used.
 * There are 62 possible letters and numbers,
 * consisting of 26 lowercase letters, 26 uppercase letters, and 10 numbers (0 to 9).
 */

const DICTIONARY = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

function encodeId(id: number) {
  const base = DICTIONARY.length;
  let encoded: string | number = '';

  if (id === 0) {
    return DICTIONARY[0];
  }

  while (id > 0) {
    encoded += DICTIONARY[id % base];
    id = Math.floor(id / base);
  }

  return reverseWord(encoded);
}

function reverseWord(str: string) {
  let reversed: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}
