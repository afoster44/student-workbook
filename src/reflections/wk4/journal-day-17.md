## 1. What are the three states of a Promise?
async, await and promises ?!!? I think thats it.
---
## 2. How do promises seek to resolve the issues of "callback hell"?
Promises bring in the async functionality to our functions. We can then instead of writing a .then() we can build our function with the async keyword and use the try/catch ...methods?! this then takes care of all of the nasty hanging '})' if we have multiple gets in one function.
---
## 3. What is the difference between .then() and .catch()?
Then takes care of our resolution of our get and catch can be called to handle our errors.