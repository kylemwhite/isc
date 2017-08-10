# SmartClientTypeScriptDefinitionGenerator 

By Kyle White ( [KMW Tech Solutions, Inc.](http://kmwTech.com/) )

## Progress Report
 
Generated from SmartClient SNAPSHOT_v12.0d_2017-08-09 at 8/10/2017 7:01:42 AM by kwhite

To see the details, look in the [Errors.txt](./Errors.txt) file.

### Progress

|   |Item|Value|Description|
|---|--- |---  |---        |
||**Information**||**Informational only, not a problem**|
|1|Types|236|Number of types found in the referenceDocs.xml file|
|2|Interfaces|5|Number of interfaces found in the referenceDocs.xml file|
|3|Classes|306|Number of classes found in the referenceDocs.xml file|
|4|Objects|70|Number of objects found in the referenceDocs.xml file|
|5|Methods|3,561|Number of methods (instance and class) found in the referenceDocs.xml file|
|6|Excluded Classes|8|Number of classes excluded from generation for various reasons.|
|7|string values with quotes|216|String values surrounded by quotes. This indicates a literal string and is easy to generate.|
|8|string values without quotes|658|String values NOT surrounded by quotes. This usually indicates a reference to a constant somewhere.|
|9|string values with period|131|These usually are really references to a constant.|
|10|Arrays defined as 'Array of'|239|Since most arrays are described this way, this is assumed to be the 'correct' way.|
|11|String values where reference is found|131|Possible string values that refer to a constant where the constant was found.|
|12|OR specified as ' \| '|384|Since most ORs are defined this way, it is assumed to be the correct way.|
|13|Types Generated|236||
|14|Interfaces Generated|5||
|15|Objects Generated|69||
|16|Classes Generated|298||
|17|Methods Generated|3,294||
|18|Percentage of Types generated|100%||
|19|Percentage of Interfaces generated|100%||
|20|Percentage of Objects generated|99%||
|21|Percentage of Classes generated|97%||
|22|Percentage of Methods generated|93%||


### Issues with referenceDocs.xml file


|   |Item|Value|Description|
|---|--- |---  |---        |
||**Warnings**||**Does not prevent item from being generated but might indicate a problem or inconsistency in the docs**|
|1|Object attributes marked with W flag|288|Attributes on objects are always read only on the object (right?). There may be other methods in parent or container classes to modify the attribute.|
|2|Attributes missing R flag|45|Almost all attributes have an R flag except these. Is this on purpose?|
|3|Suspected optional parameters that are marked with optional='false'|18|Probably, although not necessarily, a mistake. Could lead to incorrect code generation.|
|4|Methods with bad flags|0|Method flags should only contain A|
|5|OR specified as ' or '|0|Since most ORs are NOT defined this way, it is assumed to be an incorrect way.|
|6|OR specified as ' \|\| '|0|Since most ORs are NOT defined this way, it is assumed to be an incorrect way.|
|7|OR specified as ', '|0|Since most ORs are NOT defined this way, it is assumed to be an incorrect way.|
||**Errors**||**May or may not be an error in the isc system but prevents proper code generation unless special handling is implemented**|
|1|Classes without inheritsFrom attribute|61|Although not an error in the isc system, this prevents automated code-generation from working because there's no way to tell if a class inherits from Class or if it is just missing the attribute|
|2|String types without baseType|47|Types that are really just strings should have their own type or have the baseType='string'.|
|3|Setter Methods with parameter type that does not match the attribute type|13|If a property has a setter, it should take the same type as the property. NOTE: Sometimes they are equivalent (i.e. string vs. URL) but still listed here in hopes of making the docs consistent.|
|4|Arrays defined as 'List of'|10|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|5|Arrays defined as 'array' or 'Array'|8|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|6|Getter Methods with return type that does not match the attribute type|1|If a property has a getter, it should return the same type as the property. NOTE: Sometimes they are equivalent(i.e. string vs.URL) but still listed here hopes of making the docs consistent.|
|7|Arrays defined as 'array of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|8|Arrays defined as 'Array[] of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|9|Arrays defined as 'array[] of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|10|Method params with missing name|0|All parameters should have a name.|
|11|Method params with bad name|0|All parameters should have a name without special characters.|
|12|Method params missing type|0|All parameters should have a type.|
|13|Methods with required parameters after optional parameters|0|Required parameters should always be at the end of the parameter list.|
|14|String values without reference|0|These are possible values of types that refer to a classAttr that doesn't exist. For example DateItem.DAY_MONTH|
