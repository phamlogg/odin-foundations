## Objects

Objects are used to store keyed collections of various data and more complex entities.

An object can be created with `{...}` brackets, where each of it's property is a `key: value` pair.

An empty object can be created using the following syntaxes:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {} // "object literal" syntax
```

When initializing an object, we can immediately pass in properties inside `{...}` as `key: value` pairs:

```javascript
let user = {    // initalizing the object
    name: "John",   // by key 'name', valued 'John'
    age: 30,    // by key 'age', valued '30'
}
```

Object property values are accessible using the dot notation:
```javascript
alert(user.name); 
alert(user.age);
```

The value can be of any type. Can add a boolean property as follows:
`user.isadmin = true;`

To remove a property, use the `delete` operator:
`delete user.age;`

Can also use multiword property names, but they must be quoted:

```javascript
let user = {
    name: "John",
    age: 30,
    "likes bird": true,
}
```

For multiword property values, must use square brackets `[...]`:
`user.["likes bird"] == true; // returns true`

To access property values at runtime that depends on user input, assign it to the varible `key` and access it with square brackets `user[key]`:

```javascript
let user = {
    name: "John",
    age: 30,
};

let key = prompt("What do you want to know about the user?", "name");

alert(user[key]); // returns "John" if user enters "name"
```
