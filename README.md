# Isomorphic SmartClient TypeScript type definitions
TypeScript type definitions for the Isomorphic SmartClient library (Work in progress)

The goal is to provide type safety in a TypeScript web application that utilizes the Isomorphic SmartClient library similar to writing Java in SmartGWT (the GWT version of SmartClient). Documentation is provided in comments in JSDoc and will show up in intellisense.

# To get started

Copy the *.d.ts files into whereever you normally have typeings. I use /scripts/typings/isc/ as that's where it will most likely end up if/when I get a NuGet package going.

In your TypeScript files that reference the SmartClient library, add the reference, something like the following (in Visual Studio, you can drag the file into your source and it will create the reference)

```typescript
/// <reference path="../../scripts/typings/isc/isc.index.d.ts" />
```
# Usage

In your TypeScript file, with the appropriate reference, use Isc (capitol I) to refer to the namespace and types. Use isc (lowercase i) to refer to static types, just like you would see in the showcase examples. For example:

```typescript
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
}
```

If you screw up, the TypeScript compiler will let you know.
