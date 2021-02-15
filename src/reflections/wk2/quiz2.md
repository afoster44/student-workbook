# Intro to JavaScript

**1.** Which keywords are used to declare a variable in JavaScript?
<!-- enter you answer in the space below -->
```
let, const and var
```
**2.** What is the definition of a function?
<!-- enter you answer in the space below -->
```
A block of reusable code for a reptitive task
```
**3.** What are the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Easily stated: 
S: The Single Responsibility Principle
O: The Open-Closed Principle
L: The Liskov Substitution Principle
I: The Interface Segregation Principle
D: The Dependency Inversion Principle
```
**4.** Given this array: 
```js
let fruit = ['apple', 'banana', 'pineapple',  'orange', 'strawberry']
``` 
What index is the pineapple's current position? How do you know?
<!-- enter you answer in the space below -->
```
2nd or => [2]
```
**5.** With these two objects: 
```js
let you = { name:"You", hair: true, friends: [] }
let them = { name:"Them", hair: false, friends: [] }
```
how would you .push the `them` object into the `you` object's array of friends?
<!-- enter you answer in the space below -->
```
you.push(them)
```

**6.** Give an example of a JavaScript `Conditional`:
<!-- enter you answer in the space below -->
```
if(num < 2){
  num++;
} else return num;
```
**7.** In the `for loop` below, what is the name of the piece belongs inside the empty "______" space? What would you put here to increase `i` by one on every iteration?
```js
for ( let i = 0; i < arr.length; _______ ) {
  //...
```
<!-- enter you answer in the space below -->
```
MDN labels it the incrementor expression...I was going to just say incrementor or decrementor, but apparently they label each piece an expression of sorts.
```
**8.** What does the `DOM` acronym stand for? Which file is first accessed to render the `DOM`?
<!-- enter you answer in the space below -->
```
DOM A.K.A Document Object Model.
```

**9.** What are the `9` ECMAScript types as defined by MDN?
<!-- enter you answer in the space below -->
```
undefined, boolean, number, string, bigint, symbol, null, object and function
```
**10.** When it comes to functions or methods, what is the difference between a `parameter` and an `argument`?
<!-- enter you answer in the space below -->
```
A parameter is like the placeholder and the argument is going to be our variable from global memory that will be passed to our function through our parameter. The parameter will be located in the function definition parenths when first declaring our function. The arguments would be located in our parenths where we invoke the function.
```
**11.** What is the difference between a `primitive` value and a `reference` value?
<!-- enter you answer in the space below -->
```
Primitive values are our 6 basic data types including numbers, strings, booleans, null, undefined and symbol. Our Reference value is Objects. The difference is in how Javascript stores them I believe. Primitive values get accessed by and Reference values are accessed by reference which means we aren't actually working on the object itself.
```