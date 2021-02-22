# Application Architecture, MVC Design Pattern

**1.** What are the Pillars of Object Oriented Programming (`OOP`)?
<!-- enter you answer in the space below -->
```
Via free code camp the Pillars are Encapsulation, abstraction, inheritance and polymorphism. Just so you know I actually went through and read up on the pillars polymorphism is basically reffering to muyltiple instance of a class. How they can all be children of a parent and be the same but all different.
```
**2.** How would you access the `name` of the below object using the `property` variable?
```js
let staff = {
  name: "Tim",
  age: 26,
  job: "Code Monkey"
  }
let property = 'name'
```
<!-- enter you answer in the space below -->
```
staff['property'] // ???
```
**3.** What is Encapsulation?
<!-- enter you answer in the space below -->
```
Encapsulation in a way of my own words is making something private...whether that is through making a class or a function the key is allowing the user to not be able to easily access this info.
```
**4.** What does the S stand for in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Having one single responsiblity which is one of the larger points of the MVC pattern.
```
**5.** What the difference between a `class` and an instance of a `class`?
<!-- enter you answer in the space below -->
```
A class is refering to the parent and an instance would be referring to all of the children. Meaning the class would just be the in a sense constructor for all of the new instance of that class to be created.
```
**6.** What is a `Proxy` object?
<!-- enter you answer in the space below -->
```
The Proxy object is known as the ProxyState where all of your data lives. This is located in the AppState.js file.
```

**7.** What is the purpose of the `MVC` pattern?
<!-- enter you answer in the space below -->
```
Architecture as well as providing encapsulation.
```
**8.** What is the job of the `Controller` in the `MVC` Pattern?
<!-- enter you answer in the space below -->
```
The Controller handles the transfer of data from the view to the Services. It is also the last place the data reaches before it is viewed again. Normally where we would _draw()
```

**9.** What is the job of the `Service` in `MVC`?
<!-- enter you answer in the space below -->
```
The service handles the manipulation of all of our data. This is where you would write your actual buisness logic inside of your functions.
```
**10.** What is the job of the `Model` in `MVC`?
<!-- enter you answer in the space below -->
```
The Model is where I build out all of the actual objects that will live in the ProxyState or Proxy model if I understand that correctly. We also build templates here where we can dynamically inject html with javascript!
```

