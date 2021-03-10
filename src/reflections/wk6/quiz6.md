# Understanding Persistent Relational Data

**1.** When using the Vue `cli` what is the command to initialize a project?
<!-- enter you answer in the space below -->
```
vue create *name of the folder*
```
**2.** Where can you find the scripts to startup you project on localhost?
<!-- enter you answer in the space below -->
```
npm run serve
```
**3.** What feature of Vue can be used to repeat an element using a collection of data?
<!-- enter you answer in the space below -->
```
Would this be the setup() {  
 const state = reactive({

})?
} 
```
**4.** What are the three tags that make up a Vue component?
<!-- enter you answer in the space below -->
```
Template, script and style
```
**5.** What does the `L` represent in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Liskov Substitution Principle...I actually don't understand this principle. I believe they are referring to ultimately 'DRY' coding. If you have a sub type S of type T but all of S is of type T then just have sub type S become type T?
```
**6.** Which component in Vue does the vue-router use to mount pages onto?
<!-- enter you answer in the space below -->
```
a router-link?
```
**7.** What is the difference between the `AppState` and the state object within a component?
<!-- enter you answer in the space below -->
```
There actually isn't one other than the state object lives within our component and the AppState has our data live in a completely different file.
```
**9.** What is the responsibility of `Services` in our Vue projects?
<!-- enter you answer in the space below -->
```
The exact same as our normal MVC builds...services will take care of any functionality needed.
```
**10.** Which file contains the root element of your Vue project?
<!-- enter you answer in the space below -->
```
go to the public folder and access the index.html there...you will see that there is a div with the id="app" this should be the base point of injection for Vue.
```
**11.** The ______ tag is used to alter the styling of your entire Vue project.  Adding the ______ attribute to this tag will limit it to just the component it exists.  Fill in the blank.
<!-- enter you answer in the space below -->
```
style/scoped
```
**12.** What is the Vue method used to create watchable objects such as `state` or `AppState`?
<!-- enter you answer in the space below -->
```
Hey this is Reactive({ takes in an object and deeply watches all properties values })!!! Doing this on Monday and have most of the answers...thanks guys! Sorry I get so wound up...thanks for hanging in there with me <3!!!
```