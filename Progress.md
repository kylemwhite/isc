# SmartClientTypeScriptDefinitionGenerator 

By Kyle White ( [KMW Tech Solutions, Inc.](http://kmwTech.com/) )

## Progress Report
 
Generated from SmartClient SNAPSHOT_v11.1d_2017-05-12 at 5/12/2017 7:00:36 AM by kwhite

To see the details, look in the [Errors.txt](./Errors.txt) file.

### Progress

|   |Item|Value|Description|
|---|--- |---  |---        |
||**Information**||**Informational only, not a problem**|
|1|Types|229|Number of types found in the referenceDocs.xml file|
|2|Interfaces|5|Number of interfaces found in the referenceDocs.xml file|
|3|Classes|309|Number of classes found in the referenceDocs.xml file|
|4|Objects|67|Number of objects found in the referenceDocs.xml file|
|5|Methods|3,555|Number of methods (instance and class) found in the referenceDocs.xml file|
|6|string values with quotes|216|String values surrounded by quotes. This indicates a literal string and is easy to generate.|
|7|string values without quotes|657|String values NOT surrounded by quotes. This usually indicates a reference to a constant somewhere.|
|8|string values with period|130|These usually are really references to a constant.|
|9|Arrays defined as 'Array of'|225|Since most arrays are described this way, this is assumed to be the 'correct' way.|
|10|String values where reference is found|0|Possible string values that refer to a constant where the constant was found.|
|11|Types Generated|229||
|12|Interfaces Generated|5||
|13|Objects Generated|30||
|14|Classes Generated|85||
|15|Methods Generated|503||
|16|Percentage of Types generated|100%||
|17|Percentage of Interfaces generated|100%||
|18|Percentage of Objects generated|45%||
|19|Percentage of Classes generated|28%||
|20|Percentage of Methods generated|14%||


### Issues with referenceDocs.xml file


|   |Item|Value|Description|
|---|--- |---  |---        |
||**Warnings**||**Does not prevent item from being generated but might indicate a problem or inconsistency in the docs**|
|1|Object attributes marked with W flag|240|Attributes on objects are always read only on the object (right?). There may be other methods in parent or container classes to modify the attribute.|
|2|Attributes missing R flag|45|Almost all attributes have an R flag except these. Is this on purpose?|
|3|Suspected optional parameters that are marked with optional='false'|19|Probably, although not necessarily, a mistake. Could lead to incorrect code generation.|
|4|Methods with bad flags|3|Method flags should only contain A|
||**Errors**||**May or may not be an error in the isc system but prevents proper code generation unless special handling is implemented**|
|1|Classes without inheritsFrom attribute|202|Although not an error in the isc system, this prevents automated code-generation from working because there's no way to tell if a class inherits from Class or if it is just missing the attribute|
|2|String values without reference|130|These are possible values of types that refer to a classAttr that doesn't exist. For example DateItem.DAY_MONTH|
|3|String types without baseType|83|Types that are really just strings should have their own type or have the baseType='string'.|
|4|Setter Methods with parameter type that does not match the attribute type|83|If a property has a setter, it should take the same type as the property. NOTE: Sometimes they are equivalent (i.e. string vs. URL) but still listed here in hopes of making the docs consistent.|
|5|Method params with missing name|15|All parameters should have a name.|
|6|Getter Methods with return type that does not match the attribute type|15|If a property has a getter, it should return the same type as the property. NOTE: Sometimes they are equivalent(i.e. string vs.URL) but still listed here hopes of making the docs consistent.|
|7|Arrays defined as 'Array[] of'|10|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|8|Arrays defined as 'array' or 'Array'|10|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|9|Method params missing type|7|All parameters should have a type.|
|10|Methods with required parameters after optional parameters|7|Required parameters should always be at the end of the parameter list.|
|11|Arrays defined as 'array of'|1|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|12|Method params with bad name|1|All parameters should have a name without special characters.|
|13|Arrays defined as 'array[] of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|