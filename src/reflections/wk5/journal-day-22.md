## 1. In simple terms what is a sub-document?
A schema inside of another schema.
---
## 2. When might you use a sub-document?
When you need information that was created seperately, but needs to have some of the same information.
--- 
## 3. How do you add to a collection of sub-documents? What about editing them?
You can either nest a Schema inside of a schema or create either an array of objects of sub documents or create a single instance of an object in the schema that has already been created by passing it in to the parent schema like new Parent(child). To edit we can find that particular instance of the schema or data that we want to target and async/await a findOne and then push that change!
---
## link to daily repository
Unfortunately I did not have a very good day and got over whelmed. Don't have any code for the day or the next couple of days.