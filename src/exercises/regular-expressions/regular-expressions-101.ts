/**
 * Regular Expressions
 *
 * Regular expressions (regexes) are a set of characters that define a search pattern.
 *
 * The constructor for the RegExp object takes two parameters:
 * the regular expression and the optional match settings, as shown here:
 *
 * i ==> Perform case-insensitive matching
 * g ==> Perform a global match (find all matches rather than stopping after first match)
 * m ==> Perform multiline matching
 *
 * RegExp has the following two functions:
 * 1. search(): Tests for matches in a string. This returns the index of the match.
 * 2. match(): Tests for matches. This returns all the matches.
 *
 * The JavaScript String object also has the following two regex-related functions that accept the RegExp object as an argument:
 * 1. exec(): Tests for matches in a string. This returns the first match.
 * 2. test(): Tests for matches in a string. This returns true or false.
 */

// The following are five regexes that developers often use.

// 1. Any Numeric Characters
const numeric = /\d+/;
numeric.test('123444'); // returns true
numeric.test('333ass'); // returns true
numeric.test('5asdasd'); // returns true
numeric.test('asdasd'); // returns false

// 2. Only Numeric Characters
const onlyNumeric = /^\d+$/;
onlyNumeric.test('123'); // true
onlyNumeric.test('123a'); // false
onlyNumeric.test('a'); // false

// 3. Floating Numeric Characters
const floatNumeric = /^[0-9]*.[0-9]*[1-9]+$/;

floatNumeric.test('12'); // true
floatNumeric.test('1'); // false
floatNumeric.test('12.3'); // true

// 4. Only Alpha Numeric Characters
const alphaNumeric = /[a-zA-Z0-9]/;
alphaNumeric.test('somethingELSE'); // true
alphaNumeric.test('hello'); // true
alphaNumeric.test('112a'); // true
alphaNumeric.test('112'); // true
alphaNumeric.test('^'); // false

// 5. Query String

const url = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
let queryString = {};
url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});
console.log(queryString);

// http://your.domain/product.aspx: undefined, category: '4', product_id: '2140', query: 'lcd+tv'
