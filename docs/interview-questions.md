# Theoretical Questions

`Q001:` What is `typeof` Operator?

Answer: JavaScript provides a `typeof` operator that can examine a value tell you what type is is:

```

let a;
typeof a; // 'undefined'

a = "hello world";
typeof a; // "string";


a = 44;
typeof a; // "number"

a = null;
typeof a; // 'object'

a = true;
typeof a; // "boolean";

a = undefined;
typeof a; // "undefined";

a = { b: 'c'};
typeof a; // "object"


```

`Q002:` What is the `object` type?

Answer: The `object` type refers to a compound value where you can set properties(named locations) that each hold their own values of any type.

```
const obj = {
  a: 'Hello World" ,
  b: 42,
  c: true
};

obj.a;
obj.b;
obj.c;

obj['a'];
obj['b'];
obj['c'];

```


`Q003:` Explain `arrays` in JavaScript.

Answer: An `array` is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions:

```

const arr = [
  'hello world',
  42,
  true
];

arr[0]; // 'hello world';
arr[1]; // 42
arr[3]; // true
arr.length? // 3


typeof arr; // "object";

```
