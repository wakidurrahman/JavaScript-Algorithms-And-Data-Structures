// Reference type
// Context
// Scope
// Instantiation

/**
 * Reference type
 * Context
 * Scope
 * Instantiation
 */

// Reference
const object1 = { value: 10 };
const object2 = object1; // Reference: Objects are called the reference types an javascript.
const object3 = { value: 15 };

// Context

const object4 = {
  a: function () {
    console.log(this);
  },
};

// Instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

const wizardInit = new Wizard("Shelly", "Programmer"); // Instantiation.
