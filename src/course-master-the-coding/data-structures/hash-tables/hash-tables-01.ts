type userType = {
  age: number;
  name: string;
  magic: boolean;
  spell?: string;
  scream: (message: string) => void;
};

const user: userType = {
  age: 34,
  name: 'Hash Tables',
  magic: true,
  scream: function (message) {
    console.log(message);
  },
};

user.age;
user.spell = 'Hello';
user.scream('Hello World');

// Map --> Gives you some order
// Set --> No duplicate keys.
