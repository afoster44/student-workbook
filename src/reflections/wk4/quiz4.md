# UnderStanding Asynchronous Code, and API's

**1.** What is the difference between `asynchronous` code and `synchronous` code?
<!-- enter you answer in the space below -->
```
Synchronous code happens line by line naturally in Javascript. Asyncrounous code introduces code that can happen either while other code has loaded first, or awaited on with the await keyword.
```
**2.** What is an event listener?
<!-- enter you answer in the space below -->
```
The event listener follows our Observer Pattern. It looks for a reassignment to data in our Proxy State. When there is a reassignment of data we can then run a function when that change happens.
```
**3.** What does the `O` represent in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Stands for the Open-Closed Principale. Meaning that we should keep directly unrelevant data or functions outside of our class, and just add them in the instances of the class so we don't break this rule.
```
**4.** What is a callback / higher order function?
<!-- enter you answer in the space below -->
```
A function that is defined and then later used by another function. It can also be a function declared and then passed as a argument to another function.
```
**5.** What is a `promise`? How do you capture an error from a `promise`?
<!-- enter you answer in the space below -->
```
A promise is build in to Javascript for Async code. The promise does what it says and returns either a resolution or a failure. To catch either you can now use the try/catch method.
```
**6.** Name three processes used to make requests over `HTTP`?
<!-- enter you answer in the space below -->
```
Get, put and post? I am just confused and don't believe that is the answer because there is still delete.
```
**7.** What does the `API` acronym stand for?
<!-- enter you answer in the space below -->
```
API stands for Application Programming Interface. This allows to programs to talk to one another.
```
**8.** In the `MVC` design pattern, who is responsible for making calls to `APIs`?
<!-- enter you answer in the space below -->
```
The axios server is what makes the calls to our APIs.
```
**9.** What is the purpose of encapsulation in programming?
<!-- enter you answer in the space below -->
```
Encapsulation is all designed to keep our "private parts private, and our public parts public" lol...how D$ likes to put it hahaha. Encapsulation is the idea of keeping our data deep inside a layer of files to keep the access private.
```
**10.** What is `HTTP` response code for a successful request?
<!-- enter you answer in the space below -->
```
I believe this is a 200 green light baby!
```
**11.** What is a 500 error?
<!-- enter you answer in the space below -->
```
Not even MDN had the best answer on this. Seems like a good error to basically say that for reasons unknown the response failed? Or that maybe their wasn't a better error?
```