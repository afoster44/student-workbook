## What does Inheritance accomplish for us in C#?
Inheritance keeps our code clean and sticks to the Singleton Pattern in SOLID. Inheritance can allow us to make a "parent" class and continue to pass that parent to each child decreasing time to completion as well as neat code.
---
## How does Member inheritance work in C#? Does a class inherit all members of the base class?
Yes the Class will inherit all of the methods and properties of the parent class. If you are trying to inherit a parent class it could look something like this.
---
EX. public class Car : Vehicle
---
this could also allow us to make another class called....Truck : Vehicle. Each of these is a type of vehicle that would then extend the parent class of Vehicle.
---
## How does accessibility affect inheritance?
Accessibility can give us the advantage of making certain properties or methods explicitly private to a class so that way if you did not want those properties or methods to be implemented by a child class that is inheriting the methods and properties you could just go about making them private.
---
### Link to daily repository
https://github.com/afoster44/CS-Inheritance-vacation