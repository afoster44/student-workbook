# C# Fundamentals


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```
The name space is a easy way to import and export public methods and data.
```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```
Structs are passed too one another as a reference and will not implicitly affect the original data where as classes do not get passes as a reference.
```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
public void Car Start() 
{
  Console.Write("Hey that's a nice car!");
}
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```public virtual.

```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
string is an indication of the Data Type of the method.
```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
An abstract class is only meant to be inherited by its children and should only be used if you are either barely using it or not using it at all.
```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```
It is used when you may need to add more code to the same method in a sub-class or method.
```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```
public, protected, internal and private.
```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
The class it was definied and that class only. So if you needed to modify and private property on a model you set up you may have a public method in that class that you could call on that would allow you to pass that information and change it.
```