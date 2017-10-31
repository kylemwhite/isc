# SmartClientTypeScriptDefinitionGenerator 

By Kyle White ( [KMW Tech Solutions, Inc.](http://kmwTech.com/) )

## Progress Report
 
Generated from SmartClient SNAPSHOT_v12.0d_2017-10-30 at 10/31/2017 7:01:29 AM by KWhite

To see the details, look in the [Errors.txt](./Errors.txt) file.

### Progress

|   |Item|Value|Description|
|---|--- |---  |---        |
||**Information**||**Informational only, not a problem**|
|1|Types|249|Number of types found in the referenceDocs.xml file|
|2|Interfaces|5|Number of interfaces found in the referenceDocs.xml file|
|3|Classes|297|Number of classes found in the referenceDocs.xml file|
|4|Objects|82|Number of objects found in the referenceDocs.xml file|
|5|Methods|3,565|Number of methods (instance and class) found in the referenceDocs.xml file|
|6|Excluded Types|2|Number of Types excluded from generation for various reasons.|
|7|Excluded Classes|2|Number of Classes excluded from generation for various reasons.|
|8|Excluded Methods|11|Number of Methods excluded from generation for various reasons.|
|9|Excluded Attributes|2|Number of Attributes excluded from generation for various reasons.|
|10|string values with quotes|216|String values surrounded by quotes. This indicates a literal string and is easy to generate.|
|11|string values without quotes|665|String values NOT surrounded by quotes. This usually indicates a reference to a constant somewhere.|
|12|string values with period|131|These usually are really references to a constant.|
|13|Arrays defined as 'Array of'|240|Since most arrays are described this way, this is assumed to be the 'correct' way.|
|14|String values where reference is found|131|Possible string values that refer to a constant where the constant was found.|
|15|OR specified as ' \| '|386|Since most ORs are defined this way, it is assumed to be the correct way.|
|16|Types Generated|247||
|17|Interfaces Generated|5||
|18|Objects Generated|77||
|19|Classes Generated|295||
|20|Methods Generated|3,292||
|21|Methods Skipped|183||
|22|Percentage of Types generated|111%|May be more than 100% because the Callbacks methods are generated as types.|
|23|Percentage of Interfaces generated|100%||
|24|Percentage of Objects generated|94%||
|25|Percentage of Classes generated|99%||
|26|Percentage of Methods generated|92%||
|27|Percentage of Methods skipped|5%||


### Issues with referenceDocs.xml file


|   |Item|Value|Description|
|---|--- |---  |---        |
||**Warnings**||**Does not prevent item from being generated but might indicate a problem or inconsistency in the docs**|
|1|Object attributes marked with W flag|288|Attributes on objects are always read only on the object (right?). There may be other methods in parent or container classes to modify the attribute.|
|2|Attributes missing R flag|46|Almost all attributes have an R flag except these. Is this on purpose?|
|3|Suspected optional parameters that are marked with optional='false'|18|Probably, although not necessarily, a mistake. Could lead to incorrect code generation.|
|4|Methods with bad flags|0|Method flags should only contain A|
|5|OR specified as ' or '|0|Since most ORs are NOT defined this way, it is assumed to be an incorrect way.|
|6|OR specified as ' \|\| '|0|Since most ORs are NOT defined this way, it is assumed to be an incorrect way.|
|7|OR specified as ', '|0|Since most ORs are NOT defined this way, it is assumed to be an incorrect way.|
||**Errors**||**May or may not be an error in the isc system but prevents proper code generation unless special handling is implemented**|
|1|Properties that override a base property with a different type|116|In TypeScript, a property cannot override a property with the same name in a base class if it has a different type. Some of these are probably intentional with good reason but many are just inconsistencies.|
|2|Methods that override a base method with a different signature|67|In TypeScript, a method cannot override a method with the same name in a base class if it has a different signature. Some of these are probably intentional with good reason but many are just inconsistencies.|
|3|Unknown types assumed to be string|23|Used as a Type but there is no definition for the type. Assumed to be and generated as [string].|
|4|String types without baseType|18|Types that are really just strings should have their own type or have the baseType='string'.|
|5|Unknown Types mapped to any|14|Used as a Type but there is no definition for the type. Generated as [any].|
|6|Setter Methods with parameter type that does not match the attribute type|12|If a property has a setter, it should take the same type as the property. NOTE: Sometimes they are equivalent (i.e. string vs. URL) but still listed here in hopes of making the docs consistent.|
|7|Arrays defined as 'List of'|10|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|8|Arrays defined as 'array' or 'Array'|8|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|9|Weird Types that require special handling|8|Types that would be difficult to make a general rule for.|
|10|Classes without inheritsFrom attribute|1|Although not an error in the isc system, this prevents automated code-generation from working because there's no way to tell if a class inherits from Class or if it is just missing the attribute. The only Class that should not have an inheritsFrom attribute is the base 'Class'.|
|11|Getter Methods with return type that does not match the attribute type|1|If a property has a getter, it should return the same type as the property. NOTE: Sometimes they are equivalent(i.e. string vs.URL) but still listed here hopes of making the docs consistent.|
|12|Arrays defined as 'array of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|13|Arrays defined as 'Array[] of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|14|Arrays defined as 'array[] of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|15|Method params with missing name|0|All parameters should have a name.|
|16|Method params with bad name|0|All parameters should have a name without special characters.|
|17|Method params missing type|0|All parameters should have a type.|
|18|Methods with required parameters after optional parameters|0|Required parameters should always be at the end of the parameter list.|
|19|String values without reference|0|These are possible values of types that refer to a classAttr that doesn't exist. For example DateItem.DAY_MONTH|
