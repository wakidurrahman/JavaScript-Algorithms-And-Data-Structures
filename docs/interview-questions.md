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

`Q004:` What is `scope` in JavaScript?

Answer: In JavaScript, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

1. A variable name has to be unique within the same scope.
2. A scope can be nested inside another scope.
3. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.


`Q005:` What is `scope` in JavaScript?
