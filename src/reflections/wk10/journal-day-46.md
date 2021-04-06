## What is a List in C#?
Lists are a super generic data set of a specific type. Normally a list would look like this.
---
Ex. List<House> Houses { get; set; } = new List<House>();
---
## What List methods seem like you might use them often? Why?
List.Add(), List.Find() and List.Exists() just to name a few. These are all super great methods...first Add is how we can simply add a new piece of data to our list...this could be a number or even an Object. Find will simply allow us to find a piece of data in that list to potentially change or remove. Exists can allow us a fast check and can be put inside of an if(List.Find()) because it will provide us a bool.
---
## How would you retrieve an item from a list? What method could you use?
List.Find() will allow you to find an item of a list. You can also access a list by 0 based indexing List<House>[0];
---
### Link to daily Github Repository
https://github.com/afoster44/CS-gregslist-webapis