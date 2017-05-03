## Isomorphic SmartClient TypeScript type definitions
Work in progress

The goal is to provide type safety in a TypeScript web application that utilizes the Isomorphic SmartClient library and provide a development experience similar to writing Java in SmartGWT (the GWT version of SmartClient). Documentation is provided in comments in JSDoc format and will show up in intellisense.

## To get started

Copy the *.d.ts files into wherever you normally have typings. I use /scripts/typings/isc/ as that's where it will most likely end up if/when I get a NuGet package going.

In your TypeScript files that reference the SmartClient library, add the reference, something like the following:

```typescript
/// <reference path="../../scripts/typings/isc/isc.index.d.ts" />
```
 In Visual Studio, you can drag the file into your source and it will create the reference.

## Usage

In your TypeScript file, with the appropriate reference, use Isc (capital I) to refer to the namespace and types. Use isc (lowercase i) to refer to static types, just like you would do in JavaScript. For example:

```typescript
/// <reference path="../../scripts/typings/isc/isc.index.d.ts" />

function MyFunc() {

    let MyLabel: Isc.Label;

    MyLabel = isc.Label.create({
        height: 50,
        styleName: "helloWorldText",
        padding: 4,
        backgroundColor: "#ffffd0",
        align: "center",
        valign: "center",
        wrap: false,
        showEdges: true,
        showShadow: true,
        icon: "icons/16/world.png",
        contents: "Hello world!"
    });

    let labelId = MyLabel.getID();  // .getID() actually comes from Canvas which Label extends (via Button)
}
```

If you screw up, the TypeScript compiler will let you know. Once the entire library is built, you could  throretically change the name of your JavaScript file to end with .ts and it will still work. Although it's very possible that you'll find bugs due to the type checking (I did).

## Structure
### Files
There are currently 4 files: types.d.ts, classes.d.ts, objects.d.ts and index.d.ts. The library is broken up this way because it is so large and it seemed a good way to break things up. As more classes and methods are generated, it might need to be broken up even further to keep the file sizes manageable.

### Interfaces
For each SmartClient class (classes inherit from Class, objects do not), there are three interfaces defined: *ClassName*, *ClassName*Static and *ClassName*Props.

* *ClassName*: This interface defines the properties and methods of an instance of the class (what SmartClient calls **Instance APIs**). Example: __Label__
* *ClassName*Static: This interface defines the properties and methods of the static class (what SmartClient calls **Class APIs**). Example: __LabelStatic__ which is what __isc.Label__ is.
* *ClassName*Props: This interface defines all of the instance methods (for overriding) and all of the instance properties that are marked with the I flag. All methods and properties are defined as optional. The static .create() methods are all inherited from ClassStatic.create(), defined as:

```TypeScript
export interface ClassStatic<T, P>  {
    // ...
    /** 
     * Create an instance of this class. All arguments passed to this method are passed on to the Class.init instance method. Unless Class.addPropertiesOnCreate is set to false, all arguments passed to this method must be Objects and all properties on those objects will be copied to the newly created instance before Class.init is called. If there are overlapping properties in the passed arguments, the last wins. Any return value from Class.init is thrown away. Note: Generally, you would not override this method. If you want to specify a constructor for your class, provide an override for Class.init for generic classes or Canvas.initWidget for any subclasses of UI components (i.e. descendants of Canvas).
     * @param {P} properties - Any arguments passed will be passed along to the init() routine of the instance. Unless Class.addPropertiesOnCreate is set to false, any arguments passed to this method must be of type Object.
     */
     create(properties?:P): T;
    // ...
}
```
So, instead of the paramter being defined as __[arguments 0-N]__ as in the SmartClient docs, it is instead defined as a *ClassName*Props object which is specific to the class being created. This allows the TypeScript compiler to type-check the parameter and make sure that you only pass in properties that have the I flag and methods that can be overridden in the class. Similarly, the return type is defined as T, so it will return the expected object type. Of course if you still want to pass in multiple properties instead of using the Props object, you can do so by casting the static class as any:

```TypeScript
let myVar = (isc.Label as any).create(/* put whatever you want in here */);  // No type checking but allows multiple arguments just like JavaScript
```
These interfaces can be used when calling the static .create() methods so that properties may be passed in (as in the example above). The anonymous object passed into the create method is actually a type-checked __LabelProperties__ object.

 For each SmartClient object (not class), there is only one interface defined, named after the object. Since objects do not inherit from Class and typically don't have static methods, there's no need for an ObjectStatic or ObjectProps interface. 

### Errors.txt file
Along with the d.ts files, the generator creates a file named Errors.txt. This is intended to capture areas in the referenceDocs.xml file that could be improved to better facilitate code generation. Over time, I will add more tests and (hopefully) the referenceDocs.xml file will be improved so that we can get to a point where the code generator can be automated and not require any special rules.

## Limitations
So far, only a subset of the SmartClient Classes and objects are defined and of those only a small subset of methods are defined. For the classes and objects that are defined, ALL properties are defined. I will add more interfaces and methods as the referenceDocs improves and/or I need to make them for my own project.

If you want to use a SmartClient method that is not defined yet, you have a couple options:
1. Cast the SmartClient object as any, then you can do whatever you want (even screw up), just like with JavaScript. If it's a real method, then it'll work.

```TypeScript

(MyLabel as any).SetIcon("myIcon.png");  // Oops, spelled it wrong, this will fail but the compiler won't tell you.

(MyLabel as any).setIcon("myIcon.png");  // setIcon is a real method, this will work.

```
2. Create your own d.ts file (it doesn't work in a regular .ts file) and manually add to the intefrace. It would look something like this:

 ```typescript
 // MyIscExtensions.d.ts
 declare namespace Isc {
    export interface Label {
        setIcon(icon: string): void;  // This is a real method that is not defined yet.
    }
 }
 ```

 and put a reference to it in your TypeScript file like this

 ```typescript
/// <reference path="../../scripts/typings/isc/isc.index.d.ts" />
/// <reference path="../../scripts/MyIscExtensions.d.ts" />

function MyFunc() {

    let MyLabel: Isc.Label;

    MyLabel = isc.Label.create({
        height: 50,
        styleName: "helloWorldText",
        padding: 4,
        backgroundColor: "#ffffd0",
        align: "center",
        valign: "center",
        wrap: false,
        showEdges: true,
        showShadow: true,
        icon: "icons/16/world.png",
        contents: "Hello world!"
    });

    let labelId = MyLabel.getID();  // .getID() actually comes from Canvas which Label extends (via Button)

    // setIcon is defined in MyIscExtensions.d.ts and will show up in intellisense and compile.
    MyLabel.setIcon("myIcon.png");
}

```


## How this was built
The SmartClient library is huge and it would be impractical and error-prone to hand-code a type definition library that defines every property and method on every class. Fortunately, Isomorphic has an XML ([referenceDocs.xml](http://www.smartclient.com/smartclient-latest/isomorphic/system/reference/referenceDocs.xml)) file used for their documentation that contains all the necessary information. They use this file to generate the SmartGWT library. Similarly, I've used the same file to generate the TypeScript library files. The referenceDocs.xml file is not perfect means that there is a lot of customization required to get the proper code generated. Thus, I'm doing it in manageable sections. Simultaneously, Isomorphic is fixing the file to aid in code generation so we should be able to get the complete library generated soon.


## Testing
So far, this has only been tested with Visual Studio 2015. If you're using VS Code or anything else, please let me know if it works or if there are problems.


## Todo
1. Finish defining all classes and objects (by code generation).
2. Finish defining all methods for classes and objects
3. Define the SmartClient interfaces (IList etc.) and apply them to the relevant classes.
4. Do something more useful with the IRW flags like make some properties readonly, enfoce usage of setters and getters etc.
5. Create a complete working sample program.
6. Create unit tests.
7. Build an automated system to re-generate when SmartClient is updated.
8. Commit to DefinitelyTyped.

