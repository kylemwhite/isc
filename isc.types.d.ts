// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped

declare namespace Isc {

    	/**
	 * Controls the navigation mode of records.
	 */
	export type NavigationMode = 
		/** Clicking anywhere on the record navigates */
		"TableView.WHOLE_RECORD"
		/** Only clicking directly on the navigation icon                                triggers navigation */
		| "TableView.NAVICON_ONLY"
		;

	export type Selected = 
		/** StatefulCanvas should show focused state */
		"StatefulCanvas.FOCUSED"
		/** StatefulCanvas is selected */
		| "StatefulCanvas.SELECTED"
		/** StatefulCanvas is not selected */
		| "StatefulCanvas.UNSELECTED"
		;

	/**
	 * An "Object literal" is JavaScript shorthand for defining a JavaScript Object with a set&#010 of properties.  For example, code like this:&#010 <pre>&#010    var request = {&#010        actionURL : "/foo.do",&#010        showPrompt:false&#010    };</pre>&#010 .. is equivalent to ..&#010 <pre>&#010    var request = new Object();&#010    request.actionURL = "/foo.do";&#010    request.showPrompt = false;</pre>&#010 In situations where a set of ${isc.DocUtils.linkForRef('type:Properties','properties')} may be passed to a&#010 method, the Object literal notation is much more compact.  For example:&#010 <pre>&#010    isc.RPCManager.sendRequest({&#010        actionURL : "/foo.do",&#010        showPrompt:false&#010    });</pre>&#010 <b>NOTE:</b> if you have a 'trailing comma' in an object literal, like so:&#010 <pre>&#010    var request = {&#010        actionURL : "/foo.do",&#010        showPrompt:false, // TRAILING COMMA&#010    };</pre>&#010 This is considered a syntax error by Internet Explorer, but not by Firefox.  This is by&#010 far the #1 cause of Internet Explorer-specific errors that do not occur in other&#010 browsers.  Pay special attention to this error, and, if you can, install the&#010 JSSyntaxScannerFilter into your development environment (as described in the&#010 ${isc.DocUtils.linkForRef('group:iscInstall','deployment instructions')}).
	 */
	export type ObjectLiteral = any;

	/**
	 * CSS class name to apply to some HTML element on this page. This is a string that should&#010 match the css class defined for the page in an external stylesheet or in inline&#010 html &lt;STYLE&gt; tags.&#010 <P>&#010 As a general rule, wherever it is possible to provide a CSS styleName (such as&#010 ${isc.DocUtils.linkForRef('attr:Canvas.styleName')} or ${isc.DocUtils.linkForRef('attr:Button.baseStyle')}, your CSS style can specify border,&#010 margins, padding, and any CSS attributes controlling background or text styling.  You&#010 should not specify any CSS properties related to positioning, clipping, sizing or&#010 visibility (such as "overflow", "position", "display", "visibility" and "float") - use&#010 SmartClient APIs for this kind of control.&#010 <P>&#010 Because text wrapping cannot be consistently controlled cross-browser from CSS alone,&#010 you should use SmartClient properties such as ${isc.DocUtils.linkForRef('attr:Button.wrap')} instead of the&#010 corresponding CSS properties, when provided.&#010 <P>&#010 Content contained within SmartClient components can use arbitrary CSS, with the&#010 caveat that the content should be tested on all supported browsers, just as content&#010 outside of SmartClient must be.&#010 <P>&#010 <b>Special note on CSS margins</b>: wherever possible, use CSS padding and border in&#010 lieu of CSS margins, or non-CSS approaches such as ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')},&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapTo')}, or absolute positioning (including specifying percentage left/top&#010 coordinates).  We recommend this because CSS specifies a very complicated and widely&#010 criticized "margin-collapse" behavior which has surprising effects when margins exist on&#010 both parents and children.  Compounding the problem, margins are implemented very&#010 differently on different browsers, especially when it comes to HTML margins.&#010 <p>&#010 <b>Note about CSS "box models"</b>&#010 <p>&#010 The CSS "box model" defines whether the size applied to a DOM element includes padding,&#010 borders or margins, or whether such settings effectively <b>increase</b> the size of the&#010 component beyond the size specified in CSS.&#010 <p>&#010 In SmartClient, the size configured for a component <i>includes</i> border, padding and&#010 margins if specified (in CSS terminology, the box model is "margin-box").  This allows&#010 CSS borders, margins and padding to be treated as purely visual properties with no&#010 effect on sizing or layout.
	 */
	export type CSSStyleName = any;

	/**
	 * An object containing the stored grouping information for a listGrid.&#010 Note that this object is not intended to be interrogated directly, but may be stored&#010 (for example) as a blob on the server for state persistence across sessions.
	 */
	export type ListGridGroupState = any;

	/**
	 * 3 character string containing the <code>"M"</code>, <code>"D"</code> and <code>"Y"</code>&#010  characters to indicate the format of strings being parsed into Date instances via&#010  <code>DateUtil.parseInput()</code>.&#010  <P>&#010  As an example - an input format of "MDY" would parse "01/02/1999" to Jan 2nd 1999&#010 &#010  <P>&#010  Note: In addition to these standard formats, a custom date string parser function may be&#010  passed directly to ${isc.DocUtils.linkForRef('classMethod:DateUtil.setInputFormat')} or passed into &#010 ${isc.DocUtils.linkForRef('classMethod:DateUtil.parseInput')} as the inputFormat parameter.&#010 
	 */
	export type DateInputFormat = any;

	export type PreserveOpenState = 
		/** Never try to automatically preserve the openState.  Nodes will be initially open &#010  or closed based solely on the ${isc.DocUtils.linkForRef('attr:Tree.openProperty')} optionally set by the server. */
		"never"
		/** If either the ${isc.DocUtils.linkForRef('attr:Tree.idField')} or ${isc.DocUtils.linkForRef('attr:Tree.nameProperty')} has been set on &#010  the Tree, (so that nodes have either unique ids or unique paths), &#010  preserve openState by respecting the ${isc.DocUtils.linkForRef('attr:Tree.openProperty')} set by the server, &#010  then applying the openState. */
		| "whenUnique"
		/** Like "whenUnique" but automatically preserves openState even if nodes cannot be&#010  uniquely identified.  This means that nodes at the same tree positions &#010  (eg 3rd child of 5th node under root) will be placed in the same openState, &#010  regardless of whether that node has anything to do with the node that previously &#010  was at that tree position. */
		| "always"
		;

	/**
	 * A means of identifying the properties in an exported dataset - either the property name&#010 or its title.
	 */
	export type PropertyIdentifier = 
		/** Identify properties by internal name */
		"name"
		/** Identify properties by localized descriptive title */
		| "title"
		;

	/**
	 * Used to name a validator or reference a standard, built-in ${isc.DocUtils.linkForRef('class:Validator')} - see list below.&#010 <p>&#010 To make use of a standard validator type for a field in a DataSource, or &#010 DynamicForm instance, specify the <code>validators</code> property to an array &#010 containing a validator definition where the <code>type</code> property is set to &#010 the appropriate type.  &#010 <p>&#010 A custom error message can be specified for any validator type by setting the&#010 <code>errorMessage</code> property on the validator definition object, and some&#010 validator types make use of additional properties on the validator definition &#010 object such as <code>max</code> or <code>min</code>.&#010 <p>&#010 For example, to use the <code>integerRange</code> validator type:<br><br><code>&#010 &nbsp;&nbsp;field:{<br>&#010 &nbsp;&nbsp;&nbsp;&nbsp;validators:[<br>&#010 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{type:"integerRange", min:1, max:100}<br>&#010 &nbsp;&nbsp;&nbsp;&nbsp;]<br>&#010 &nbsp;&nbsp;}&#010 </code>&#010 <p>&#010 Custom validators can be reused on the client by adding them to the global validator list,&#010 via the ${isc.DocUtils.linkForRef('classMethod:Validator.addValidatorDefinition')} method.
	 */
	export type ValidatorType = 
		/** Validation will fail if this field is non-empty and has a non-boolean value. */
		"isBoolean"
		/** Validation will fail if the value is not a string value. */
		| "isString"
		/** Tests whether the value for this field is a whole number.  If &#010 <code>validator.convertToInteger</code> is true, float values will be converted &#010 into integers and validation will succeed. */
		| "isInteger"
		/** Tests whether the value for this field is a valid floating point number. */
		| "isFloat"
		/** Tests whether the value for this field is a valid expression or function; if it is&#010 valid, creates a ${isc.DocUtils.linkForRef('group:stringMethods','stringMethod')} object with the value&#010 and set the resultingValue to the StringMethod. */
		| "isFunction"
		/** RequiredIf type validators should be specified with an <code>expression</code>&#010 property set to a ${isc.DocUtils.linkForRef('group:stringMethods','stringMethod')}, which takes four&#010 parameters:<ul>&#010 <li>item - the DynamicForm item on which the error occurred (may be null)&#010 <li>validator - a pointer to the validator object&#010 <li>value - the value of the field in question&#010 <li>record - the "record" object - the set of values being edited by the widget&#010 </ul>&#010 When validation is performed, the expression will be evaluated (or executed). If it&#010 returns <code>true</code>, the field will be treated as a required field, so validation&#010 will fail if the field has no value, or, in the case of a ${isc.DocUtils.linkForRef('class:FileItem')} or ${isc.DocUtils.linkForRef('class:UploadItem')}&#010 and if client-side validation is supported by the browser, if no file is selected for upload&#010 or the selected file is empty.&#010 <p>To allow server-side enforcement, a <code>required</code> validator can be used instead.&#010 With the exception of "binary" fields, conditional criteria can be specified with the&#010 ${isc.DocUtils.linkForRef('attr:Validator.applyWhen','applyWhen')} property.&#010 <p>See ${isc.DocUtils.linkForExampleId('conditionallyRequired')}.&#010 <p>&#010 &#010 <p><strong>NOTE:</strong> A requiredIf validator cannot be used to guarantee that a non-empty&#010 file is uploaded. The user's browser might not support client-side file validation.&#010 Using a requiredIf validator on a "binary" field may be appropriate in scenarios where the&#010 application does not technically require a non-empty file to be uploaded by the user.&#010 For example, in a bug tracking application, a file upload may be required if the&#010 "Have a test case?" checkbox is checked, but the value of the "Have a test case?" checkbox is&#010 not actually saved by the application; instead, whether the user is providing a test case is&#010 inferred by whether a non-empty test case file was uploaded. */
		| "requiredIf"
		/** Tests whether the value for this field matches the value of some other field.&#010 The field to compare against is specified via the <code>otherField</code> property&#010 on the validator object (should be set to a field name).&#010 <p>See ${isc.DocUtils.linkForExampleId('matchValue')}. */
		| "matchesField"
		/** Tests whether the value for this field matches any value from an arbitrary&#010 list of acceptable values.  The set of acceptable values is specified via&#010 the <code>list</code> property on the validator, which should be set to an array of&#010 values. If validator.list is not supplied, the valueMap for the field will be used.&#010 If there is no valueMap, not providing validator.list is an error. */
		| "isOneOf"
		/** Tests whether the value for this field is a whole number within the range &#010 specified.  The <code>max</code> and <code>min</code> properties on the validator&#010 are used to determine the acceptable range, inclusive. To specify the range as&#010 exclusive of the min/mix values, set <code>exclusive</code> to <code>true</code>.&#010 <p>See ${isc.DocUtils.linkForExampleId('validationBuiltins')}. */
		| "integerRange"
		/** This validator type applies to string values only.  If the value is a string value&#010 validation will fail if the string's length falls outside the range specified by &#010 <code>validator.max</code> and <code>validator.min</code>.&#010 <p>&#010 Note that non-string values will always pass validation by this validator type.&#010 <p>&#010 Note that the <code>errorMessage</code> for this validator will be evaluated as&#010 a dynamicString - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed, with <code>max</code> and <code>min</code> available as&#010 variables mapped to <code>validator.max</code> and <code>validator.min</code>. */
		| "lengthRange"
		/** Determine whether a string value contains some substring specified via &#010 <code>validator.substring</code>. */
		| "contains"
		/** Determine whether a string value does <b>not</b> contain some substring specified via &#010 <code>validator.substring</code>. */
		| "doesntContain"
		/** Determine whether a string value contains some substring multiple times.&#010 The substring to check for is specified via <code>validator.substring</code>.&#010 The <code>validator.operator</code> property allows you to specify how to test&#010 the number of substring occurrences. Valid values for this property are&#010 <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&lt;=</code>,&#010 <code>&gt;</code>, <code>&gt;=</code>.&#010 <p>&#010 The number of matches to check for is specified via <code>validator.count</code>. */
		| "substringCount"
		/** <code>regexp</code> type validators will determine whether the value specified &#010 matches a given regular expression.  The expression should be specified on the&#010 <code>validator</code> object as the <code>expression</code> property.&#010 <p>See ${isc.DocUtils.linkForExampleId('formsRegularExpression')}. */
		| "regexp"
		/** Validate against a regular expression mask, specified as <code>validator.mask</code>.&#010 If validation is successful a transformation can also be specified via the&#010 <code>validator.transformTo</code> property. This should be set to a string in the&#010 standard format for string replacement via the native JavaScript <code>replace()</code>&#010 method.&#010 <p>See ${isc.DocUtils.linkForExampleId('formsValueTransform')}. */
		| "mask"
		/** Tests whether the value for a date field is within the range specified.&#010 Range is inclusive, and is specified via <code>validator.min</code> and&#010 <code>validator.max</code>, which should be specified in&#010 <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema&#010 date format</a> or as a live JavaScript Date object (for client-only validators only).&#010 To specify the range as exclusive of the min/mix values, set <code>exclusive</code>&#010 to <code>true</code>.&#010 <p>&#010 Note that the <code>errorMessage</code> for this validator will be evaluated as&#010 a dynamicString - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed, with <code>max</code> and <code>min</code> available as&#010 variables mapped to <code>validator.max</code> and <code>validator.min</code>. */
		| "dateRange"
		/** Validate a field as a valid floating point value within a value range.&#010 Range is specified via <code>validator.min</code> and <code>validator.max</code>.&#010 Also checks precision, specified as number of decimal places in &#010 <code>validator.precision</code>. If <code>validator.roundToPrecision</code> is set &#010 a value that doesn't match the specified number of decimal places will be rounded&#010 to the nearest value that does.        &#010 <p>&#010 For backwards compatibility only. Use "floatRange" and/or "floatPrecision" instead. */
		| "floatLimit"
		/** Tests whether the value for this field is a floating point number within the range &#010 specified.  The <code>max</code> and <code>min</code> properties on the validator&#010 are used to determine the acceptable range, inclusive. To specify the range as&#010 exclusive of the min/mix values, set <code>exclusive</code> to <code>true</code>.&#010 <p>&#010 Note that the <code>errorMessage</code> for this validator will be evaluated as&#010 a dynamicString - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed, with <code>max</code> and <code>min</code> available as&#010 variables mapped to <code>validator.max</code> and <code>validator.min</code>. */
		| "floatRange"
		/** Tests whether the value for this field is a floating point number with the &#010 appropriate number of decimal places - specified in <code>validator.precision</code>&#010 If the value is of higher precision and <code>validator.roundToPrecision</code> &#010 is specified, the value will be rounded to the specified number of decimal places&#010 and validation will pass, otherwise validation will fail. */
		| "floatPrecision"
		/** A non-empty value is required for this field to pass validation.&#010 <p>In the case of a "binary" field, a non-empty file must be uploaded. */
		| "required"
		/** Change the state/appearance of this field. Desired appearance is specified via&#010 the <code>fieldAppearance</code> property on the validator object. See&#010 ${isc.DocUtils.linkForRef('type:FieldAppearance')} type for choices.&#010 <p>&#010 If <code>fieldAppearance</code> is not specified, the default is "readOnly". */
		| "readOnly"
		/** Change the visibility of this field. */
		| "visibility"
		/** Change the enable/disable state of this field. */
		| "enable"
		/** Returns true if the value for this field is unique.  The uniqueness check is performed across&#010 the whole DataSource unless you specify property <code>validator.criteriaFields</code> as a &#010 comma-separated string of field names; in that case, the uniqueness check is done in the &#010 context of those extra criteria, allowing you to check, for example, whether an employee &#010 number is unique for the department and location found on the record being validated.&#010 By default the uniqueness check is not case sensitive but this can be controlled through&#010 the ${isc.DocUtils.linkForRef('attr:Validator.caseSensitive','caseSensitive')} attribute.  You can specify the &#010 ${isc.DocUtils.linkForRef('attr:DataSource.operationBindings','operation')} to use for the uniqueness check with the &#010 ${isc.DocUtils.linkForRef('attr:Validator.operationId','operationId')} attribute.&#010 <p>&#010 Validators of this type have ${isc.DocUtils.linkForRef('attr:validatorDefinition.requiresServer','requiresServer')} &#010 set to <code>true</code> and do not run on the client.&#010 <p>&#010 Note when isUnique validator is executed as part of validation process during update &#010 operation, it will perform uniqueness check only for single row updates. If update targets &#010 ${isc.DocUtils.linkForRef('attr:OperationBinding.allowMultiUpdate','multiple records')}, then isUnique validator will &#010 be skipped. If uniqueness check is needed when updating multiple records, consider using &#010 ${isc.DocUtils.linkForRef('group:dmiOverview','custom DMI')} approach to add this check manually.&#010 <p>See ${isc.DocUtils.linkForExampleId('uniqueCheckValidation')}. */
		| "isUnique"
		/** Returns true if the record implied by a relation exists.  The relation can be &#010 derived automatically from the ${isc.DocUtils.linkForRef('attr:DataSourceField.foreignKey')} attribute of &#010 the field being validated, or you can specify it manually via &#010 <code>validator.relatedDataSource</code> and <code>validator.relatedField</code>.&#010 <p>&#010 You can specify at DataSource level that this validator should be automatically &#010 applied to all fields that specify a ${isc.DocUtils.linkForRef('attr:DataSourceField.foreignKey','foreignKey')} -&#010 see ${isc.DocUtils.linkForRef('attr:DataSource.validateRelatedRecords')}.&#010 <p>&#010 Validators of this type have ${isc.DocUtils.linkForRef('attr:validatorDefinition.requiresServer','requiresServer')} &#010 set to <code>true</code> and do not run on the client.&#010 <p>&#010 Note that this validation is generally unnecessary for data coming from a UI.  The &#010 typical UI uses a ${isc.DocUtils.linkForRef('class:SelectItem')} or ${isc.DocUtils.linkForRef('class:ComboBoxItem')} with an &#010 ${isc.DocUtils.linkForRef('attr:FormItem.optionDataSource','optionDataSource')} for user entry, such that the user &#010 can't accidentally enter a related record if that doesn't exist, and a typical SQL &#010 schema will include constraints that prevent a bad insert if the user attempts to &#010 circumvent the UI.  The primary purpose of declaring this validation explicitly is &#010 to provide clear, friendly error messages for use cases such as ${isc.DocUtils.linkForRef('class:BatchUploader')}, &#010 where values aren't individually chosen by the user. See also the example&#010 ${isc.DocUtils.linkForExampleId('hasRelatedValidation', 'Related Records')}. */
		| "hasRelatedRecord"
		/** This validator type is not for direct usage, instead ${isc.DocUtils.linkForRef('attr:DataSourceField.maxFileSize')} can &#010 be set and <code>maxFileSize</code> validator will be added automatically. Use &#010 ${isc.DocUtils.linkForRef('classAttr:DataSource.maxFileSizeExceededMessage')} to customize validation error message.&#010 <p>&#010 In supported browsers (Internet Explorer 10+, Chrome, Firefox, Safari 6+, Opera 11.1+), returns&#010 <code>true</code> if the file(s) selected by the user are not larger than the field's&#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.maxFileSize')}. If not supported by the browser, the validator will always&#010 return <code>true</code>.&#010 <p>&#010 Note that server-side enforcement of the <code>maxFileSize</code> is always required because&#010 the user's browser might not support client-side file size checks. Also, any client-side&#010 check can be bypassed by a malicious user. */
		| "maxFileSize"
		/** Custom client-side validator.  &#010 ${isc.DocUtils.linkForRef('method:Validator.condition')} will be called to verify data.&#010  */
		| "custom"
		/** Custom server-side validator that either evaluates the Velocity expression provided in &#010 ${isc.DocUtils.linkForRef('attr:Validator.serverCondition','serverCondition')} (see ${isc.DocUtils.linkForExampleId('velocityValidation')})&#010 or makes DMI call to ${isc.DocUtils.linkForRef('attr:Validator.serverObject','serverObject')} to evaluate condition&#010 (see ${isc.DocUtils.linkForExampleId('dmiValidation')}).&#010 <p>&#010 Validators of this type have ${isc.DocUtils.linkForRef('attr:validatorDefinition.requiresServer','requiresServer')} &#010 set to <code>true</code> and do not run on the client. */
		| "serverCustom"
		;

	export type TEXTAREA_WRAP = 
		/** don't allow wrapping at all */
		"TextAreaItem.OFF"
		/** when the entered text reaches the edge of the text area,                                  wrap visibly but don't include line breaks in the textarea&#010                                  value */
		| "TextAreaItem.SOFT"
		/** when the entered text reaches the edge of the text area,                                   insert a line break */
		| "TextAreaItem.HARD"
		;

	/**
	 * Names for the standard controls built into the RichTextEditor.  You can use these&#010 <code>ControlNames</code> in APIs like ${isc.DocUtils.linkForRef('attr:RichTextEditor.styleControls')} to control&#010 the order in which controls appear, to omit default controls or to show controls that&#010 are not shown by default.&#010 <p>&#010 Every <code>ControlName</code> is also the name of an ${isc.DocUtils.linkForRef('type:AutoChild')}, so all the&#010 built-in controls can be skinned or otherwise customized via the&#010 ${isc.DocUtils.linkForRef('group:autoChildUsage','AutoChild system')}. 
	 */
	export type ControlName = 
		/** A button to make the current selection bold. */
		"boldSelection"
		/** A button to make the current selection italic. */
		| "italicSelection"
		/** A button to make the current selection underlined. */
		| "underlineSelection"
		/** A select item allowing the user to change the font of the current text selection. */
		| "fontSelector"
		/** A select item allowing the user to change the font size of the current text selection. */
		| "fontSizeSelector"
		/** A button to left-align the selected text. */
		| "alignLeft"
		/** A button to right-align the selected text. */
		| "alignRight"
		/** A button to center the selected text. */
		| "alignCenter"
		/** A button to justify the selected line of text. */
		| "justify"
		/** A color-picker allowing the user to set the text color. */
		| "color"
		/** A color picker allowing the user to set the text background color. */
		| "backgroundColor"
		/** Within text, indents the paragraph. Within a list, increases the list level. */
		| "indent"
		/** Within text, outdents the paragraph. Within a list, decreases the list level. */
		| "outdent"
		/** Turns the current selection into an ordered list (HTML &lt;ol&gt;) or converts an unordered list to an ordered list. */
		| "orderedList"
		/** Turns the current selection into an unordered list (HTML &lt;ul&gt;) or converts an ordered list to an unordered list. */
		| "unorderedList"
		/** Shows the ${isc.DocUtils.linkForRef('attr:RichTextEditor.listPropertiesDialog','listPropertiesDialog')} to allow configuring the options of the currently selected HTML list. */
		| "listProperties"
		;

	/**
	 * Behavior of selection when row spanning is active.  See ${isc.DocUtils.linkForRef('attr:ListGrid.useRowSpanStyling')}.
	 */
	export type RowSpanSelectionMode = 
		/** when a cell is clicked on, select any cells in subsequent columns which                  are at least partially spanned by the clicked cell */
		"forward"
		/** when a cell is clicked on, selects any cells in any other columns which                  are at least partially spanned by the clicked cell */
		| "both"
		/** behaves like "forward", except as though the cell in the first column                    was clicked instead.  If the largest row spans are in the first&#010                    column and all cells in subsequent columns do not extend out of the&#010                    first cell's span, this creates a row-like selection model where the&#010                    span of the left-most cell defines the "row" of cells being selected. */
		| "outerSpan"
		;

	/**
	 * Selection model for ${isc.DocUtils.linkForRef('class:CubeGrid')} indicating which cells in the body should&#010 be selected when row or column headers are selected.
	 */
	export type AutoSelectionModel = 
		/** Rows and Columns will be selected on header selection */
		"both"
		/** Rows will be selected on row-header selection */
		| "rows"
		/** Columns will be selected on column-header selection */
		| "cols"
		/** Selecting row or column headers will not select cells in the body. */
		| "none"
		;

	/**
	 * Supported styles of drawing lines.
	 */
	export type LinePattern = 
		/** Solid line */
		"solid"
		/** Dotted line */
		| "dot"
		/** Dashed line */
		| "dash"
		/** Dotted line, with more tightly spaced dots */
		| "shortdot"
		/** Dashed line, with shorter, more tightly spaced dashes */
		| "shortdash"
		/** Dashed line, with longer, more widely spaced dashes */
		| "longdash"
		;

	/**
	 * For DataSources of type "sql" and "hibernate", specifies the kind of inheritance to use when a dataSource&#010 specifies ${isc.DocUtils.linkForRef('attr:DataSource.inheritsFrom','inheritsFrom')}.
	 */
	export type DSInheritanceMode = 
		/** Inherit fields by copying them onto the inheriting DataSource's underlying table.  When we &#010 import a DataSource with this inheritanceMode, we create actual columns for inherited fields&#010  on the table we create.  With this inheritanceMode, inherited fields are updatable. */
		"full"
		/** Do not physically inherit fields onto the inheriting DataSource's SQL table.  Columns will&#010 not be created for inherited fields on import, and all generated SQL operations will exclude&#010 inherited fields.  However, those fields are still part of the DataSource's schema so you&#010 can, for example, write ${isc.DocUtils.linkForRef('group:customQuerying','custom SQL')} that returns values for &#010 the inherited fields, and they will be delivered to the client. */
		| "none"
		;

	/**
	 * Entries for the ${isc.DocUtils.linkForRef('attr:DrawItem.knobs')} array. Each specified knobType will enable some UI &#010 allowing the user to manipulate the DrawItem directly.&#010 <p>&#010 <b>NOTE:</b> Not all knob types are supported by each DrawItem type. Refer to the DrawItem&#010 type's ${isc.DocUtils.linkForRef('attr:DrawItem.knobs','knobs')} attribute documentation for a list of the supported knob types.
	 */
	export type KnobType = 
		/** Display up to 8 control knobs at the corners specified by ${isc.DocUtils.linkForRef('attr:DrawItem.resizeKnobPoints')},&#010  allowing the user to drag-resize the item.&#010  See also ${isc.DocUtils.linkForRef('attr:DrawItem.cornerResizeKnob')} and ${isc.DocUtils.linkForRef('attr:DrawItem.sideResizeKnob')}. */
		"resize"
		/** Display a control knob for moving the item around. See also ${isc.DocUtils.linkForRef('attr:DrawItem.moveKnobPoint')}&#010  and ${isc.DocUtils.linkForRef('attr:DrawItem.moveKnobOffset')} */
		| "move"
		/** Control knob  to manipulate ${isc.DocUtils.linkForRef('attr:DrawLine.startPoint')}. */
		| "startPoint"
		/** Control knob to manipulate ${isc.DocUtils.linkForRef('attr:DrawLine.endPoint')}. */
		| "endPoint"
		/** Display a draggable control knob along with a DrawLine indicating the angle between controlPoint1&#010  and the startPoint. Dragging the knob will adjust controlPoint1. */
		| "controlPoint1"
		/** Display a draggable control knob along with a DrawLine indicating the angle between controlPoint2&#010  and the endPoint. Dragging the knob will adjust controlPoint2. */
		| "controlPoint2"
		/** Display a rotation knob above the top resize knob, allowing the user to rotate the item.&#010  See also ${isc.DocUtils.linkForRef('attr:DrawItem.rotateKnob')}. */
		| "rotate"
		;

	/**
	 * One of the four basic operations that can be performed on DataSource data: "fetch",&#010 "add", "update", "remove".  Elsewhere called CRUD operations, where CRUD stands for&#010 "create", "retrieve", "update", "delete", which correspond to "add", "fetch", "update" and&#010 "remove" in SmartClient terminology.  See ${isc.DocUtils.linkForRef('group:dataSourceOperations')} for a full&#010 description.&#010 <p>&#010 There are also additional, non-CRUD operations explained below.
	 */
	export type DSOperationType = 
		/** Fetch one or more records that match a set of search criteria. */
		"fetch"
		/** Store new records */
		| "add"
		/** Update an existing record */
		| "update"
		/** Remove (delete) an existing record */
		| "remove"
		/** perform some arbitrary custom logic that is not a CRUD operation.                       Format of the inputs and outputs is unconstrained, and the operation&#010                       will be ignored for cache sync purposes by ${isc.DocUtils.linkForRef('class:ResultSet')}s.  See &#010                       ${isc.DocUtils.linkForRef('method:DataSource.performCustomOperation')}. */
		| "custom"
		/** Run server-side validation for "add" or "update" without actually                       adding or updating anything.  See ${isc.DocUtils.linkForRef('method:DataSource.validateData')}. */
		| "validate"
		/** Retrieve a file stored in a binary field in a DataSource record, and                       allow the browser to choose whether to view it directly or prompt the&#010                       user to save.  See ${isc.DocUtils.linkForRef('group:binaryFields')}. */
		| "viewFile"
		/** Like "viewFile", but the HTTP header Content-Disposition is used to                       suggest that the browser show a save dialog.  See ${isc.DocUtils.linkForRef('group:binaryFields')}. */
		| "downloadFile"
		/** Takes a List of Maps and stores the data in Admin Console XML test                       data format */
		| "storeTestData"
		/** Upload formatted client data and export it to Excel, XML and other                        formats.  Used automatically by &#010                       ${isc.DocUtils.linkForRef('method:DataSource.exportClientData','exportClientData()')} &#010                       and cannot be used directly.  Usable only with the SmartClient server&#010                       framework. */
		| "clientExport"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.getFile')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "getFile"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.hasFile')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "hasFile"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.listFiles')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "listFiles"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.removeFile')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "removeFile"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.saveFile')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "saveFile"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.renameFile')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "renameFile"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.getFileVersion')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "getFileVersion"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.hasFileVersion')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "hasFileVersion"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.listFileVersions')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "listFileVersions"
		/** Use the DataSource as a ${isc.DocUtils.linkForRef('group:fileSource','source for files')}.                       Used automatically by ${isc.DocUtils.linkForRef('method:DataSource.removeFileVersion')}, and&#010                       would not normally be used directly. Usable only with&#010                       the SmartClient server framework. */
		| "removeFileVersion"
		;

	/**
	 * Form METHOD parameters - how the form fields are submitted to the server
	 */
	export type FormMethod = 
		/** GET request -- URL encoding (~4K max) */
		"DynamicForm.GET"
		/** POST request -- separate field encoding (no max) */
		| "DynamicForm.POST"
		;

	/**
	 * The technique SmartClient Server's SQL DataSource should use to select a "page" of data &#010 from a table.
	 */
	export type SQLPagingStrategy = 
		/** Specify the paging directly in the SQL query we generate.  The way this is done varies &#010 considerably from database to database: with some it is a straightforward built-in &#010 facility while others require arcane tricks or simply don't support the idea.  This is &#010 the most efficient method, where available.  Note that this strategy is not supported &#010 for operations that make use of a ${isc.DocUtils.linkForRef('attr:OperationBinding.customSQL','customSQL')} clause, &#010 because it depends upon being able to determine the size of the whole dataset without&#010 actually retrieving the whole dataset.  Ordinary operations do this by means of an &#010 automatically-generated "row count query", but we cannot generate such a query for a &#010 <code>customSQL</code> operation. */
		"sqlLimit"
		/** Implement the paging behavior by use of the <code>absolute()</code> method of the&#010 JDBC <code>ResultSet</code>. */
		| "jdbcScroll"
		/** Implement the paging behavior by fetching the entire resultset from the database and&#010 dropping any unnecessary rows on the server before returning the data to the client.&#010 This approach is extremely inefficient, but also extremely straightforward; it is &#010 intended as a fallback option, for situations where the more sophisticated approaches&#010 cause problems (a JDBC driver that throws vague exceptions when <code>absolute()</code>&#010 is called, for example) */
		| "dropAtServer"
		/** No paging behavior: we always return the entire resultset to the client. */
		| "none"
		;

	/**
	 * The different ways in which the ${isc.DocUtils.linkForRef('attr:DrawItem.titleLabel','titleLabel')} of a ${isc.DocUtils.linkForRef('class:DrawItem')}&#010 can be rotated with the item.&#010 <p>&#010 <strong>NOTE:</strong> The effect of the&#010 "withItemAlwaysUp" and "withLineAlwaysUp"&#010 &#010 settings is not affected by the global rotation, if any (see ${isc.DocUtils.linkForRef('attr:DrawPane.rotation')}).
	 */
	export type TitleRotationMode = 
		/** the <code>titleLabel</code> is never rotated with the item. */
		"neverRotate"
		/** the <code>titleLabel</code> is rotated exactly to match the item's rotation (see ${isc.DocUtils.linkForRef('attr:DrawItem.rotation')}). */
		| "withItem"
		/** the <code>titleLabel</code> is rotated exactly to match the item's rotation, except that at certain rotations, the <code>titleLabel</code> is flipped&#010 by 180&deg; so that the title text is never upside down. */
		| "withItemAlwaysUp"
		/** (applies only to ${isc.DocUtils.linkForRef('class:DrawLine')} and ${isc.DocUtils.linkForRef('class:DrawLinePath')}) the <code>titleLabel</code> is rotated to match the line or center segment.&#010 <p>&#010 If used on a <code>DrawItem</code> that is not a <code>DrawLine</code> or <code>DrawLinePath</code>,&#010 then the effect is the same as&#010 "withItem".&#010  */
		| "withLine"
		/** (applies only to ${isc.DocUtils.linkForRef('class:DrawLine')} and ${isc.DocUtils.linkForRef('class:DrawLinePath')}) the <code>titleLabel</code> is rotated to match the line or center segment, except that&#010 at certain rotations, the <code>titleLabel</code> is flipped by 180&deg; so that the&#010 title text is never upside down.&#010 <p>&#010 If used on a <code>DrawItem</code> that is not a <code>DrawLine</code> or <code>DrawLinePath</code>,&#010 then the effect is the same as&#010 "withItemAlwaysUp".&#010  */
		| "withLineAlwaysUp"
		;

	/**
	 * The type of join to make between two SQL tables when resolving &#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.includeFrom','includeFrom')} fields.
	 */
	export type JoinType = 
		/** A regular inner join, whereby rows are only included in the resultset                   where the join can be satisified, so a missing row in the table being&#010                   joined to results in the entire row being omitted. */
		"inner"
		/** An outer join.  All outer joins generated by SmartClient's SQL subsystem                   are left outer joins, meaning that every row in the join-from (or "left")&#010                   table that matches the criteria is included, and missing rows in the &#010                   join-to (or "right") table cause columns to be set to null. */
		| "outer"
		;

	/**
	 * What event / user interaction type caused cell editing to complete.
	 */
	export type EditCompletionEvent = 
		/** User clicked outside editor during edit. */
		"ListGrid.CLICK_OUTSIDE"
		/** User started editing another row by clicking on it */
		| "ListGrid.CLICK"
		/** User started editing another row by double                               clicking */
		| "ListGrid.DOUBLE_CLICK"
		/** Enter pressed. */
		| "ListGrid.ENTER_KEYPRESS"
		/** User pressed Escape. */
		| "ListGrid.ESCAPE_KEYPRESS"
		/** Up arrow key pressed. */
		| "ListGrid.UP_ARROW_KEYPRESS"
		/** down arrow key. */
		| "ListGrid.DOWN_ARROW_KEYPRESS"
		/** User pressed Tab. */
		| "ListGrid.TAB_KEYPRESS"
		/** User pressed Shift+Tab. */
		| "ListGrid.SHIFT_TAB_KEYPRESS"
		/** Edit moved to a different field (same row) */
		| "ListGrid.EDIT_FIELD_CHANGE"
		/** Edit completed via explicit function call */
		| "ListGrid.PROGRAMMATIC"
		;

	/**
	 * Controls where a drag-item should be dropped in relation to the target row
	 */
	export type ReorderPosition = 
		/** Drop the drag-item before the target-row */
		"ListGrid.BEFORE"
		/** Drop the drag-item after the target-row */
		| "ListGrid.AFTER"
		/** Drop the drag-item over (onto) the target-row */
		| "ListGrid.OVER"
		;

	/**
	 * Controls how an object changes state when clicked
	 */
	export type SelectionType = 
		/** object moves to "down" state temporarily (normal button) */
		"StatefulCanvas.BUTTON"
		/** object remains in "down" state until clicked again (checkbox) */
		| "StatefulCanvas.CHECKBOX"
		/** object moves to "down" state, causing another object to go up (radio) */
		| "StatefulCanvas.RADIO"
		;

	/**
	 * Controls the output of the JSONEncoder when instances of SmartClient classes (eg a ListGrid)&#010 are included in the data to be serialized.
	 */
	export type JSONInstanceSerializationMode = 
		/** instances will be shown as a specially formatted JSON listing the most               relevant properties of the instance. Result is not expected to&#010               decode()/eval() successfully if instances are included. */
		"long"
		/** instances will be shown in a shorter format via a call to ${isc.DocUtils.linkForRef('classMethod:isc.echoLeaf')}.                Result is not expected to decode()/eval() successfully if instances are&#010                included. */
		| "short"
		/** no output will be shown for instances (as though they were not present in the               data).  Result should decode()/eval() successfully (depending on other&#010               settings) */
		| "skip"
		;

	/**
	 * Where a ${isc.DocUtils.linkForRef('attr:DataBoundComponent.hiliteIcons','hilite icon')} will be placed relative to &#010 normal cell content.
	 */
	export type HiliteIconPosition = 
		/** icon will be placed before the normal cell contents */
		"before"
		/** icon will be placed after the normal cell contents */
		| "after"
		/** icon will be shown instead of the normal cell contents */
		| "replace"
		;

	/**
	 * Controls the display mode of TableView record display
	 */
	export type TableMode = 
		/** The default mode which displays a list of rows */
		"TableView.PLAIN"
		/** Grouped table is a set of rows embedded in a rounded rectangle */
		| "TableView.GROUPED"
		;

	/**
	 * An object containing the stored grouping information for a detailViewer.&#010 Note that this object is not intended to be interrogated directly, but may be stored &#010 (for example) as a blob on the server for state persistence across sessions.
	 */
	export type DetailViewerViewState = any;

	/**
	 * A String of HTML, such as "<span class='somestyle'>text</span>".&#010 <P>&#010 In many contexts, such as ${isc.DocUtils.linkForRef('attr:Button.title')} and ${isc.DocUtils.linkForRef('method:ListGrid.formatCellValue')}, an&#010 HTML String can be specified, allowing you to use normal HTML tags and CSS to do&#010 formatting or styling.&#010 <P>&#010 However, bear in mind that if you attempt any kind of layout or advanced styling in such&#010 an HTML string, different browsers may render the HTML differently - use SmartClient&#010 ${isc.DocUtils.linkForRef('class:Layout','layout')} and ${isc.DocUtils.linkForRef('attr:Canvas.styleName','styling')} features wherever possible to&#010 avoid this.  See also ${isc.DocUtils.linkForRef('type:CSSStyleName')}.
	 */
	export type HTMLString = any;

	/**
	 * What do we do with data that's been dropped into another list?
	 */
	export type DragDataAction = 
		/** Don't do anything, resulting in the same data being in both lists. */
		"none"
		/** Copy the data leaving the original in our list. */
		| "Canvas.COPY"
		/** Remove the data from this list so it can be moved into the other list. */
		| "Canvas.MOVE"
		;

	/**
	 * Name of a SmartClient Class, that is, a Class that has been created via&#010 ${isc.DocUtils.linkForRef('classMethod:isc.defineClass')}, including Classes built into SmartClient, such as "ListGrid".
	 */
	export type SCClassName = any;

	/**
	 * Passed as a parameter to ${isc.DocUtils.linkForRef('method:Canvas.showClickMask')} to determine the masks behavior&#010 when clicked.
	 */
	export type ClickMaskMode = 
		/** When the mask receives a click, it will fire its click action,                   and cancel the event, leaving the clickMask up. */
		"hard"
		/** When the mask receives a click, it will fire its click action,                   then dismiss the clickMask and allow the event to proceed to its target. */
		| "soft"
		;

	/**
	 * Trees that dynamically load nodes keep track of whether each node has loaded its children.
	 */
	export type LoadState = 
		/** children have not been loaded and are not loading */
		"Tree.UNLOADED"
		/** currently in the process of loading */
		| "Tree.LOADING"
		/** folders only are already loaded */
		| "Tree.FOLDERS_LOADED"
		/** already fully loaded */
		| "Tree.LOADED"
		/** children form a ResultSet having only a partial            cache (applies only to the "paged"&#010            ${isc.DocUtils.linkForRef('attr:ResultTree.fetchMode','fetchMode')}) */
		| "Tree.LOADED_PARTIAL_CHILDREN"
		;

	/**
	 * A String to be used as a format specifier for a date, datetime, time or numeric field, via&#010 the ${isc.DocUtils.linkForRef('attr:DataSourceField.format','format')} and ${isc.DocUtils.linkForRef('attr:DataSourceField.exportFormat','exportFormat')} &#010 properties.  &#010 <p>&#010 For fields with a numeric type, the format string is similar to java.text.NumberFormat (see&#010 <a href='http://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html' target='_blank'>DecimalFormat JavaDoc</a>),&#010 and for date, time, and datetime types, the format string is similar to&#010 java.text.SimpleDateFormat (see &#010 <a href='http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html' target='_blank'>SimpleDateFormat JavaDoc</a>).&#010 <p>&#010 Note that all the client-side formatting described in this section is is done by the &#010 ${isc.DocUtils.linkForRef('classMethod:NumberUtil.format','NumberUtil.format()')} and &#010 ${isc.DocUtils.linkForRef('classMethod:DateUtil.format','DateUtil.format()')}&#010 &#010 methods.  These are static utility methods that your own code can call if you need to &#010 programmatically format a date or number using a <code>FormatString</code>&#010 <p>&#010 There are 3 possible contexts where a <code>FormatString</code> may be interpreted, and each&#010 has slightly different limitations:&#010&#010 <h4>in-browser rendering &amp; client-driven exports</h4>&#010 Almost complete support for Java's SimpleDateFormat/DecimalFormat, as described below, with&#010 some small extensions for formatting with awareness of a ${isc.DocUtils.linkForRef('object:FiscalCalendar')}.&#010 <p>&#010 This category includes cases where code running in the browser does the rendering and&#010 the rendered result is passed to the server, such as &#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData','client-driven export')} and&#010 ${isc.DocUtils.linkForRef('classMethod:RPCManager.exportContent','PDF export of the printed view')}.&#010&#010 <h4>Excel export</h4> &#010 Almost the same as in-browser rendering, with minor limitations due to missing features in&#010 Excel.  Exact differences are described under ${isc.DocUtils.linkForRef('attr:DataSourceField.exportFormat')}.&#010&#010 <h4>non-Excel server export</h4>&#010 For example, CSV, XML or JSON ${isc.DocUtils.linkForRef('type:ExportFormat','export formats')} provided via&#010 ${isc.DocUtils.linkForRef('method:DataSource.exportData')}.  Full support for SimpleDateFormat/DecimalFormat&#010 as provided by whichever Java version you have installed on the server.  However note that&#010 depending on the context of the export, the default behavior may be to ignore format&#010 strings, since formatting intended for end users wouldn't be desirable if data exchange is&#010 the goal.  See the ${isc.DocUtils.linkForRef('group:exportFormatting','Export Formatting overview')} for details.&#010&#010 <P>&#010 <h3>Date Format</h3>&#010 <table width="700" style="font-size:11px;border:1px solid black;">&#010 <tr><td style="color:white;background-color:black;"><b>Format token</b></td>&#010     <td style="color:white;background-color:black;"><b>Description</b></td>&#010     <td style="color:white;background-color:black;width:150px;"><b>Sample value</b></td></tr>&#010 <tr><td>yy     </td><td>Year as a two-digit number                            </td><td>"99"   or "07"</td></tr>&#010 <tr><td>yyyy   </td><td>Year as a four-digit number                           </td><td>"1999" or "2007"</td></tr>&#010 <tr><td>YY     </td><td>Week year as a two-digit number (week year is the year associated with the entire week deemed to contain a given date, and it may differ from calendar year.  For example, the week year of December 31 2012 is 2013)</td><td>"99"   or "07"</td></tr>&#010 <tr><td>YYYY   </td><td>Week year as a four-digit number                      </td><td>"1999" or "2007"</td></tr>&#010 <tr><td>LL     </td><td>Fiscal year as a two-digit number (${isc.DocUtils.linkForRef('object:FiscalCalendar')})</td><td>"99"   or "07"</td></tr>&#010 <tr><td>LLLL   </td><td>Fiscal year as a four-digit number                    </td><td>"1999" or "2007"</td></tr>&#010 <tr><td>M      </td><td>Month in year                                         </td><td>"1"  to "12"</td></tr>&#010 <tr><td>MM     </td><td>Month in year with leading zero if required           </td><td>"01" to "12"</td></tr>&#010 <tr><td>MMM    </td><td>Short month name (${isc.DocUtils.linkForRef('classAttr:DateUtil.shortMonthNames')})        </td><td>"Jan" to "Dec"</td></tr>&#010 <tr><td>MMMM   </td><td>Full month name (${isc.DocUtils.linkForRef('classAttr:DateUtil.monthNames')})              </td><td>"January" to "December"</td></tr>&#010 <tr><td>w      </td><td>Week in year                                          </td><td>"1"  to "52"</td></tr>&#010 <tr><td>ww     </td><td>Week in year with leading zero if required            </td><td>"01" to "52"</td></tr>&#010 <tr><td>C      </td><td>Week in fiscal year (${isc.DocUtils.linkForRef('object:FiscalCalendar')})           </td><td>"7"  or "29"</td></tr>&#010 <tr><td>CC     </td><td>Week in fiscal year with leading zero if required     </td><td>"07" or "29"</td></tr>&#010 <tr><td>d      </td><td>Day of the month                                      </td><td>"1"  to "31"</td></tr>&#010 <tr><td>dd     </td><td>Day of the month with leading zero if required        </td><td>"01" to "31"</td></tr>&#010 <tr><td>ddd    </td><td>Short day name (${isc.DocUtils.linkForRef('classAttr:DateUtil.shortDayNames')})        </td><td>"Mon" to "Sun"</td></tr>&#010 <tr><td>dddd   </td><td>Full day name. (${isc.DocUtils.linkForRef('classAttr:DateUtil.dayNames')})             </td><td>"Monday" to "Sunday"</td></tr>&#010 <tr><td>E      </td><td>Short day name ("EE" and "EEE" are equivalent; all are exactly the same as "ddd" - "E" is supported purely to conform with SimpleDateFormat)</td><td>"Mon" to "Sun"</td></tr>&#010 <tr><td>EEEE   </td><td>Full day name (exactly the same as "dddd")            </td><td>"Monday" to "Sunday"</td></tr>&#010 <tr><td>D      </td><td>Day in year                                           </td><td>"1"  to "366"</td></tr>&#010 <tr><td>DD     </td><td>Day in year with leading zero if required             </td><td>"01" to "366"</td></tr>&#010 <tr><td>c      </td><td>Day in fiscal year (${isc.DocUtils.linkForRef('object:FiscalCalendar')})            </td><td>"5"  or "204"</td></tr>&#010 <tr><td>cc     </td><td>Day in fiscal year with leading zero if required      </td><td>"05" or "204"</td></tr>&#010 <tr><td>u      </td><td>Day number in week (1 is Monday)                      </td><td>"1" to "7"</td></tr>&#010 <tr><td>H      </td><td>Hour in day, 0-23 (24-hour clock)                     </td><td>"0"  to "23"</td></tr>&#010 <tr><td>HH     </td><td>Hour in day with leading zero if required (24-hour)   </td><td>"00" to "23"</td></tr>&#010 <tr><td>h      </td><td>Hour in day, 1-12 (12-hour clock)                     </td><td>"1"  to "12"</td></tr>&#010 <tr><td>hh     </td><td>Hour in day with leading zero if required (12-hour)   </td><td>"01" to "12"</td></tr>&#010 <tr><td>m      </td><td>Minute in hour                                        </td><td>"0"  to "59"</td></tr>&#010 <tr><td>mm     </td><td>Minute in hour with leading zero if required          </td><td>"00" to "59"</td></tr>&#010 <tr><td>s      </td><td>Second in minute                                      </td><td>"0"  to "59"</td></tr>&#010 <tr><td>ss     </td><td>Second in minute with leading zero if required        </td><td>"00" to "59"</td></tr>&#010 <tr><td>S      </td><td>Millisecond in minute                                 </td><td>"0"  to "999"</td></tr>&#010 <tr><td>SSS    </td><td>Millisecond in minute with leading zero(s) if required</td><td>"000" to "999"</td></tr>&#010 <tr><td>a      </td><td>The AM/PM designator (${isc.DocUtils.linkForRef('classAttr:Time.AMIndicator')})        </td><td>" am" or " pm"</td></tr>&#010 </table>&#010 <p>&#010 Note that all text that doesn't represent tokens specified above will be passed through to&#010 the output, but such unmapped character sequences are reserved for future use.  To&#010 future-proof your code, you may single quote <code>"'"</code> any text to escape it to ensure&#010 no formatting is applied, guaranting that it's passed through unaltered.  Thus, a format of&#010 <code>"h'h'"</code> might end up as <code>"5h"</code>.  To create a single quote itself, use&#010 two in a row - for example <code>"h o''clock"</code>.&#010 <p>&#010 <h3>Examples - various formatted versions of the datetime "2006-08-03 11:26:18"</h3>&#010 <table>&#010 <tr><td width="150">"M/d/yy"</td><td width="300">8/3/06</td></tr>&#010 <tr><td>"MMMM yyyy"</td><td>August 2006</td></tr>&#010 <tr><td>"HH:mm"</td><td>11:26</td></tr>&#010 <tr><td>"d MMM yyyy, H:ma"</td><td>3 Aug 2006, 11:26 am</td></tr>&#010 <tr><td>"dd/MM/yyyy"</td><td>03/08/2006</td></tr>&#010 <tr><td>"CC/LLLL"</td><td>53/2006 (assuming the fiscal year ends in the first week of August)</td></tr>&#010 </table>&#010 <p>&#010 <h3><code>SimpleDateFormat</code> specifiers that we do <b>not</b> support:</h3>&#010 <ul>&#010 <li>Era designator, BC/AD (G)</li>&#010 <li>Day of week in month (F)</li>&#010 <li>Hour in day, 24-hour, with 1-based instead of normal 0-based numbering (hours are 1-24) (k)</li>&#010 <li>Hour in day, 12-hour, with 0-based instead of normal 1-based numbering (hours are 0-11) (K)</li>&#010 <li>Timezone (z, Z, X)</li>&#010 </ul>&#010 <p>&nbsp;<p>&#010 <h3>Number Format</h3>&#010 <table width="700" style="font-size:11px;border:1px solid black;">&#010 <tr><td style="color:white;background-color:black;"><b>Format char</b></td>&#010     <td style="color:white;background-color:black;"><b>Description</b></td>&#010 <tr><td>0          </td><td>Digit, zero is displayed</td></tr>&#010 <tr><td>#          </td><td>Digit, zero is not displayed</td></tr>&#010 <tr><td>-          </td><td>Minus sign</td></tr>&#010 <tr><td>.          </td><td>Decimal separator</td></tr>&#010 <tr><td>%          </td><td>Multiply by 100 and show as percentage</td></tr>&#010 <tr><td>&#x2030; (\u2030) </td><td>Multiply by 1000 and show as per mille.  See below.</td></tr>&#010 <tr><td>,          </td><td>Indicates digit grouping should be used - eg 1,000,000.  See below.</td></tr>&#010 <tr><td>;          </td><td>Separates positive and negative subpatterns.  See below.</td></tr>&#010 <tr><td>&#x00a4; (\u00A4) </td><td>As a prefix or suffix, indicates the local currency symbol should be used.  Note that you must use special notation to include this character in an XML file (such as a .ds.xml file).  See below.</td></tr>&#010 <tr><td>'          </td><td>Used to quote special characters in a prefix or suffix, for example, "'#'#" formats 123 to "#123". To create a single quote itself, use two in a row: "# o''clock".</td></tr>&#010 </table>&#010 <p>&#010 All other characters in the format string are taken literally and output unchanged.&#010 <p>&#010 <h3>Examples</h3>&#010 <table style="font-size:11px;border:1px solid black;">&#010 <tr><td width="150" style="color:white;background-color:black;"><b>Format string</b></td>&#010     <td width="150" style="color:white;background-color:black;"><b>Zero value</b></td>&#010     <td width="150" style="color:white;background-color:black;"><b>Positive value: 12345.678</b></td>&#010     <td width="150" style="color:white;background-color:black;"><b>Negative value: -2345.123</b></td>&#010 <tr><td>"0.00"</td><td>0.00</td><td>12345.68</td><td>-2345.12</td></tr>&#010 <tr><td>",##0.00"</td><td>0.00</td><td>12,345.68</td><td>-2,345.12</td></tr>&#010 <tr><td>"0.###"</td><td>0</td><td>12345.678</td><td>-2345.123</td></tr>&#010 <tr><td>"&#x00a4;,0.00"</td><td>$0.00</td><td>$12,345.68</td><td>-$2345.12</td></tr>&#010 <tr><td>"0.0#%"</td><td>0.0%</td><td>1234567.8%</td><td>-234512.3%</td></tr>&#010 <tr><td>"0.0#&#x2030;"</td><td>0.0&#x2030;</td><td>12345678.0&#x2030;</td><td>-2345123.0&#x2030;</td></tr>&#010 <tr><td>"0.0#'%'"</td><td>0.0%</td><td>12345.68%</td><td>-2345.12%</td></tr>&#010 <tr><td>"0.00;(0.00)"</td><td>0.0%</td><td>12345.68</td><td>(2345.12)</td></tr>&#010 </table><br>&#010 Note, the above examples include cases where there are multiple '#' characters in the integer&#010 part of the number format (ie, to the left of the decimal separator, or the entire format &#010 if there is no separator).  We support this pattern simply because <code>DecimalFormat</code>&#010 does: the extra '#' characters are not significant.  In other words, the format "##0.00" &#010 produces exactly the same formatting as "0.00", and "##,###,###.##" produces exactly the &#010 same formatting as ",#.##".  However, multiple '0' characters in the integer part of the &#010 format <em>are</em> significant, as are both '#' and '0' characters in the decimal part &#010 of the format (ie, to the right of any decimal separator).&#010 <p>&#010 The ";" character marks the boundary between two subpatterns - the first to be used for &#010 formatting positive numbers (and 0), the second for negative numbers.  Specifying a separate&#010 pattern for negative numbers is optional: if no negative subpattern is specified, negative&#010 numbers are formatted like positive numbers, but with a leading "-" sign.&#010 <p>&#010 The "&#x00a4;" symbol (\u00A4) is documented in the Java DecimalFormat class as a placeholder for the currency&#010 symbol appropriate to the current locale.  For client-driven exports, we replace it with&#010 &#010 the ${isc.DocUtils.linkForRef('classAttr:NumberUtil.currencySymbol','localized currency symbol')}.&#010 Likewise, we use ${isc.DocUtils.linkForRef('classAttr:NumberUtil.decimalSymbol','decimalSymbol')} and&#010 ${isc.DocUtils.linkForRef('classAttr:NumberUtil.groupingSymbol','groupingSymbol')} to localize the formatting of numbers.&#010 &#010 &#010 Note that "\u00A4" is the correct way to specify this character in Javascript code.  If you&#010 need to specify the character in an XML file - the common requirement is in a .ds.xml&#010 DataSource descriptor file - you must use the code "&amp;#x00A4;" instead.&#010 <p>&#010 The "&permil;" per mille symbol is specified as "\u2030" in Javascript code; in XML or HTML &#010 you can use either the equivalent notation "&amp;#x2030;" or the special HTML code &#010 "&amp;permil;".&#010&#010 <p>&#010 <h3><code>DecimalFormat</code> features that we do <b>not</b> support:</h3>&#010 <ul>&#010 <li>Scientific notation</li>&#010 <li>Doubled currency symbol means "use international currency symbol"</li>&#010 <li>We do not support arbitrary digit grouping, by providing patterns of the '#' and ','&#010 characters, like <code>DecimalFormat</code> does.  Grouping in SmartClient FormatStrings&#010 is enabled with a single "," character somewhere before or within the number-formatting&#010 part of the string - extra "," characters within the number-formatting part of the string &#010 are tolerated, but they have no effect.  Grouping in SmartClient always causes digits to &#010 be gathered in groups of three</li>&#010 </ul>
	 */
	export type FormatString = any;

	export type Overflow = 
		/** Content that extends beyond the widget's width or height is                              displayed.&#010                              Note: To have the content be sized only by the drawn size of&#010                              the content set the overflow to be Canvas.VISIBLE and specify&#010                              a small size, allowing the size to expand to the size required&#010                              by the content.&#010                              Leaving the width / height for the widget undefined will use the&#010                              default value of 100, and setting the size to zero may cause the&#010                              widget not to draw. */
		"Canvas.VISIBLE"
		/** Content that extends beyond the widget's width or height is                              clipped (hidden). */
		| "Canvas.HIDDEN"
		/** Horizontal and/or vertical scrollbars are displayed only if                              necessary. Content that extends beyond the remaining visible&#010                              area is clipped. */
		| "Canvas.AUTO"
		/** Horizontal and vertical scrollbars are always drawn inside the                              widget. Content that extends beyond the remaining visible area&#010                              is clipped, and can be accessed via scrolling. */
		| "Canvas.SCROLL"
		/** Clip horizontally but extend the canvas's clip region                              vertically if necessary. <br><b>Note:</b> only supported for&#010                              specific widget subclasses. */
		| "Canvas.CLIP_H"
		/** Clip vertically but extend the canvas's clip region                              horizontally if necessary. <br><b>Note:</b> only supported&#010                              for specific widget subclasses. */
		| "Canvas.CLIP_V"
		;

	/**
	 * Standard component-type displayed within a ListGrid, as contained by ${isc.DocUtils.linkForRef('attr:ListGrid.gridComponents')}.
	 */
	export type ListGridComponent = 
		/** The standard filter-component displayed when ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')}   is true */
		"filterEditor"
		/** The header-component displayed when ${isc.DocUtils.linkForRef('attr:ListGrid.showHeader')} is true. */
		| "header"
		/** The body component for the grid. */
		| "body"
		/** The summary-row component displayed when ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')} is   true. */
		| "summaryRow"
		;

	/**
	 * Algorithms for drawing lines between points.
	 */
	export type DataLineType = 
		/** simple straight lines between points that are adjacent in the dataset */
		"straight"
		/** smooth spline curve between points that are adjacent in the dataset */
		| "smooth"
		;

	/**
	 * Mode of validation used for running validation on partially entered data.
	 */
	export type ValidationMode = 
		/** Assume provided data is complete and run all validation rules */
		"full"
		/** Validate only the data values that are present ignoring the                  absence of required fields, validators that refer to fields&#010                  that are not present, and any conditional validators dependent&#010                  on fields that are not present. */
		| "partial"
		;

	/**
	 * Event on a listGrid header to trigger auto-fit of the listgrid field.
	 */
	export type AutoFitEvent = 
		/** React to a double click on the listGrid header. */
		"doubleClick"
		/** React to a click on the listGrid header. */
		| "click"
		/** No event will trigger auto-fit. */
		| "none"
		;

	/**
	 * For PickList items with ${isc.DocUtils.linkForRef('type:PickListItemIconPlacement')} set such that the pickList does&#010 not render near-origin, possible location for rendering formItemIcons.
	 */
	export type PickListItemIconPlacement = 
		/** icon will be displayed in the ${isc.DocUtils.linkForRef('attr:ComboBoxItem.pickerNavigationBar','pickerNavigationBar')} only (and not rendered&#010  inline within the formItem itself) */
		"pickerNavigationBar"
		/** icon will be displayed inline within the form item itself (and not within the&#010  ${isc.DocUtils.linkForRef('attr:ComboBoxItem.pickerNavigationBar','pickerNavigationBar')} */
		| "formItem"
		/** icon will be displayed both inline (within the form item itself) and within the&#010  ${isc.DocUtils.linkForRef('attr:ComboBoxItem.pickerNavigationBar','pickerNavigationBar')} */
		| "both"
		;

	/**
	 * Supported styles for arrowheads.
	 */
	export type ArrowStyle = 
		/** Filled triangle. */
		"block"
		/** Two lines are drawn on each side of the path. */
		| "open"
		;

	/**
	 * How data selection should be presented to the user.
	 */
	export type SelectionAppearance = 
		/** selected rows should be shown with different appearance - see                   ${isc.DocUtils.linkForRef('method:ListGrid.getCellStyle')} and optionally&#010                   ${isc.DocUtils.linkForRef('attr:ListGrid.selectionCanvas')}. */
		"rowStyle"
		/** an extra, non-data column should be automatically added to the ListGrid,                   showing checkboxes that can be toggled to select rows.&#010                   See ${isc.DocUtils.linkForRef('method:ListGrid.getCheckboxField')}. */
		| "checkbox"
		;

	/**
	 * Algorithms to use when hashing field values (see ${isc.DocUtils.linkForRef('attr:DataSourceField.storeWithHash')})
	 */
	export type HashAlgorithm = 
		/** Message Digest algorithm 5 */
		"MD5"
		/** Secure Hashing Algorithm (SHA-1) */
		| "SHA"
		;

	/**
	 * Strings to identify the various keys on the keyboard.&#010 <ul>&#010 <li>  For alpha keys, the single (uppercase) character value is used, such as "Q"&#010 <li>  For Numeric keys, the number is used as in a single character string, like "1"&#010 <li>  Function keys are identified as <code>"f1"</code> - <code>"f12"</code>&#010 <li>  Non alpha-numeric character keys (such as the key for "[" / "{") are identified by&#010       their unmodified character value (the value obtained by hitting the key without &#010       holding shift down), by default - exceptions are listed below.&#010 <li>  Additional key names:<br>&#010      - <code>Space</code><br>    &#010      - <code>Tab</code><br>    &#010      - <code>Enter</code><br>&#010      - <code>Escape</code><br>&#010      - <code>Backspace</code><br>&#010      - <code>Insert</code><br>&#010      - <code>Delete</code><br>&#010      - <code>Arrow_Up</code><br>&#010      - <code>Arrow_Down</code><br>&#010      - <code>Arrow_Left</code><br>&#010      - <code>Arrow_Right</code><br>            &#010      - <code>Home</code><br>&#010      - <code>End</code><br>&#010      - <code>Page_Up</code><br>    &#010      - <code>Page_Down</code><br>   &#010      - <code>Shift</code><br>&#010      - <code>Ctrl</code><br>&#010      - <code>Alt</code>&#010 </ul>&#010 [Note: Some keys may not be available for capture on every platform]
	 */
	export type KeyName = any;

	/**
	 * A <code>Callback</code> is an arbitrary action to be fired - usually passed into a &#010 method to be fired asynchronously as a notificaction of some event.<br>&#010 The <code>callback</code> can be defined in the following formats:<ul>&#010 <li>a function</li>&#010 <li>A string containing an expression to evaluate</li>&#010 <li>An object with the following properties:<br>&#010     - target: fire in the scope of this target - when the action fires,&#010       the target will be available as <code>this</code>.<br>&#010     - methodName: if specified we'll check for a method on the target object with this &#010       name.<br>&#010  </li></ul>&#010 <code>Callbacks</code> are fired via the ${isc.DocUtils.linkForRef('classMethod:Class.fireCallback')} method, which allows&#010 named parameters to be passed into the callback at runtime. If the Callback was specified&#010 as a string of script, these parameters are available as local variables at eval time.<br>&#010 For specific SmartClient methods that make use of <code>Callback</code> objects, see&#010 local documentation for information on parameters and scope.
	 */
	export type Callback = any;

	/**
	 * Simple string identifiers for standard menu fields.
	 */
	export type MenuFieldID = 
		/** Displays the icon field for the menu. This field contains the items                  specified icon (if there is one), or if the item is checked, the&#010                  checkmark icon for the item. */
		"icon"
		/** Displays the item's title */
		| "title"
		/** Displays the key field for the menu. This field contains the name or                title of any shortcut keys for this menu item. */
		| "key"
		/** Field to display the submenu image for items that have a submenu. */
		| "subMenu"
		;

	/**
	 * An operator is used as part of a ${isc.DocUtils.linkForRef('object:Criterion')} when specifying ${isc.DocUtils.linkForRef('object:AdvancedCriteria')}.&#010 <P>&#010 This list of operators indicates the set of operators built into SmartClient DataSources,&#010 which can be used for both client and server-side filtering.   You can extend the list of&#010 operators with ${isc.DocUtils.linkForRef('method:DataSource.addSearchOperator')}.
	 */
	export type OperatorId = 
		/** exactly equal to */
		"equals"
		/** not equal to */
		| "notEqual"
		/** exactly equal to, if case is disregarded */
		| "iEquals"
		/** not equal to, if case is disregarded */
		| "iNotEqual"
		/** Greater than */
		| "greaterThan"
		/** Less than */
		| "lessThan"
		/** Greater than or equal to */
		| "greaterOrEqual"
		/** Less than or equal to */
		| "lessOrEqual"
		/** Contains as sub-string (match case) */
		| "contains"
		/** Starts with (match case) */
		| "startsWith"
		/** Ends with (match case) */
		| "endsWith"
		/** Contains as sub-string (case insensitive) */
		| "iContains"
		/** Starts with (case insensitive) */
		| "iStartsWith"
		/** Ends with (case insensitive) */
		| "iEndsWith"
		/** Does not contain as sub-string (match case) */
		| "notContains"
		/** Does not start with (match case) */
		| "notStartsWith"
		/** Does not end with (match case) */
		| "notEndsWith"
		/** Does not contain as sub-string (case insensitive) */
		| "iNotContains"
		/** Does not start with (case insensitive) */
		| "iNotStartsWith"
		/** Does not end with (case insensitive) */
		| "iNotEndsWith"
		/** shortcut for "greaterOrEqual" + "and" + "lessOrEqual" (case insensitive) */
		| "iBetweenInclusive"
		/** Basic GLOB matching using wildcards        (see ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')} for more information on available patterns) */
		| "matchesPattern"
		/** Basic GLOB matching using wildcards (case insensitive)        (see ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')} for more information on available patterns) */
		| "iMatchesPattern"
		/** GLOB matching using wildcards. Value is considered to meet the        criterion if it contains the pattern. See ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')}&#010        for more information on available patterns) */
		| "containsPattern"
		/** GLOB mathcing using wildcards. Value is considered to meet the        criterion if it starts with the pattern.See ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')}&#010        for more information on available patterns) */
		| "startsWithPattern"
		/** GLOB mathcing using wildcards. Value is considered to meet the        criterion if it starts with the pattern.See ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')}&#010        for more information on available patterns) */
		| "endsWithPattern"
		/** GLOB matching using wildcards. Value is considered to meet the        criterion if it contains the pattern. Matching is case insensitive. See&#010        ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')} for more information on available patterns) */
		| "iContainsPattern"
		/** GLOB matching using wildcards. Value is considered to meet the        criterion if it starts with the pattern.  Matching is case insensitive.See &#010        ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')} for more information on available patterns) */
		| "iStartsWithPattern"
		/** GLOB matching using wildcards.Value is considered to meet the        criterion if it ends with the pattern. Matching is case insensitive. See &#010        ${isc.DocUtils.linkForRef('attr:DataSource.translatePatternOperators')} for more information on available patterns) */
		| "iEndsWithPattern"
		/** Regular expression match */
		| "regexp"
		/** Regular expression match (case insensitive) */
		| "iregexp"
		/** value is either null or the empty string. For numeric fields it behaves as isNull */
		| "isBlank"
		/** value is neither null nor the empty string ("") */
		| "notBlank"
		/** value is null */
		| "isNull"
		/** value is non-null.  Note empty string ("") is non-null */
		| "notNull"
		/** value is in a set of values.  Specify criterion.value as an Array */
		| "inSet"
		/** value is not in a set of values.  Specify criterion.value as an Array */
		| "notInSet"
		/** matches another field (match case, specify fieldName as criterion.value) */
		| "equalsField"
		/** does not match another field (match case, specify fieldName as criterion.value) */
		| "notEqualField"
		/** matches another field (case insensitive, specify fieldName as criterion.value) */
		| "iEqualsField"
		/** does not match another field (case insensitive, specify fieldName as criterion.value) */
		| "iNotEqualField"
		/** Greater than another field (specify fieldName as criterion.value) */
		| "greaterThanField"
		/** Less than another field (specify fieldName as criterion.value) */
		| "lessThanField"
		/** Greater than or equal to another field        (specify fieldName as criterion.value) */
		| "greaterOrEqualField"
		/** Less than or equal to another field        (specify fieldName as criterion.value) */
		| "lessOrEqualField"
		/** Contains as sub-string (match case) another field value        (specify fieldName as criterion.value) */
		| "containsField"
		/** Starts with (match case) another field value        (specify fieldName as criterion.value) */
		| "startsWithField"
		/** Ends with (match case) another field value        (specify fieldName as criterion.value) */
		| "endsWithField"
		/** Contains as sub-string (case insensitive) another field value        (specify fieldName as criterion.value) */
		| "iContainsField"
		/** Starts with (case insensitive) another field value        (specify fieldName as criterion.value) */
		| "iStartsWithField"
		/** Ends with (case insensitive) another field value        (specify fieldName as criterion.value) */
		| "iEndsWithField"
		/** Does not contain as sub-string (match case) another field value        (specify fieldName as criterion.value) */
		| "notContainsField"
		/** Does not start with (match case) another field value        (specify fieldName as criterion.value) */
		| "notStartsWithField"
		/** Does not end with (match case) another field value        (specify fieldName as criterion.value) */
		| "notEndsWithField"
		/** Does not contain as sub-string (case insensitive) another field value        (specify fieldName as criterion.value) */
		| "iNotContainsField"
		/** Does not start with (case insensitive) another field value        (specify fieldName as criterion.value) */
		| "iNotStartsWithField"
		/** Does not end with (case insensitive) another field value        (specify fieldName as criterion.value) */
		| "iNotEndsWithField"
		/** all subcriteria (criterion.criteria) are true */
		| "and"
		/** all subcriteria (criterion.criteria) are false */
		| "not"
		/** at least one subcriteria (criterion.criteria) is true */
		| "or"
		/** shortcut for "greaterThan" + "lessThan" + "and".  Specify criterion.start         and criterion.end */
		| "between"
		/** shortcut for "greaterOrEqual" + "lessOrEqual" + "and".  Specify         criterion.start and criterion.end */
		| "betweenInclusive"
		;

	/**
	 * The names of the Calendar views.
	 */
	export type ViewName = 
		/** day view */
		"day"
		/** week view */
		| "week"
		/** month view */
		| "month"
		/** timeline view */
		| "timeline"
		;

	/**
	 * The data URL MIME type to use when ${isc.DocUtils.linkForRef('method:DrawPane.getDataURL')} is called to convert the&#010 drawing to a data URL.
	 */
	export type DataURLFormat = 
		/** Any MIME type supported by the browser is acceptable. Note: The exact MIME type used may depend on the browser, and may change from version to version of SmartClient. */
		"any"
		/** Generate an <code>image/png</code> data URL. */
		| "png"
		;

	/**
	 * Indicates the kind of value expected in a ${isc.DocUtils.linkForRef('object:Criterion')} that uses this operator.
	 */
	export type OperatorValueType = 
		/** ${isc.DocUtils.linkForRef('attr:Criterion.value')} should contain a value of the same type as the                    field. */
		"fieldType"
		/** ${isc.DocUtils.linkForRef('attr:Criterion.value')} should be the name of another field in the record */
		| "fieldName"
		/** no criterion.value or other setting required (used for operators like                    isBlank or isNull). */
		| "none"
		/** ${isc.DocUtils.linkForRef('attr:Criterion.criteria')} should be an Array of criteria (used for logical                   operators like "and"). */
		| "criteria"
		/** ${isc.DocUtils.linkForRef('attr:Criterion.start')} and ${isc.DocUtils.linkForRef('attr:Criterion.end')} should contain start and                     end values, both of the same type as the field. */
		| "valueRange"
		/** ${isc.DocUtils.linkForRef('attr:Criterion.value')} should contain an Array of valid field values. */
		| "valueSet"
		/** ${isc.DocUtils.linkForRef('attr:Criterion.value')} should contain a value which is not necessarily the                 same type as the field (used for regexp and similar operators).  &#010                 ${isc.DocUtils.linkForRef('attr:Operator.editorType')} can be specified as a FormItem to use to&#010                 enter a value for the criterion. */
		| "custom"
		;

	/**
	 * Flag passed to functions as displayNodeType, telling the function whether it should work on&#010 folders, leaves or both at once.
	 */
	export type DisplayNodeType = 
		/** operate on both folders and leaves */
		"null"
		/** operate on folders only, ignoring leaves */
		| "folders"
		/** operate on leaves only, ignoring folders */
		| "leaves"
		;

	/**
	 * A RelativeDateShortcut is a special string that represents a shortcut to a date phrase that can &#010 be automatically mapped to a ${isc.DocUtils.linkForRef('type:RelativeDateString')} for use in widgets that &#010 leverage relative-dates, such as the ${isc.DocUtils.linkForRef('class:RelativeDateItem')}.&#010 <P>&#010 Note that some shortcuts indicate a time period but do not directly indicate whether the value&#010 refers to the start or end of the time period in question. This ambiguity&#010 can be resolved by specifying an explicit ${isc.DocUtils.linkForRef('type:RelativeDateRangePosition')} when calling APIs that &#010 convert from RelativeDates to absolute date values. This is the case for <i>$today</i>, &#010 <i>$tomorrow</i>, <i>$yesterday</i>, <i>$weekAgo</i>, <i>$weekFromNow</i>, <i>$monthAgo</i>&#010 and <i>$monthFromNow</i>. If a range position is not explicitly passed, these will all default&#010 to the start of the day in question.&#010 <P>&#010 Builtin options include&#010 <ul>&#010 <li> $now - this moment </li>&#010 <li> $today - the current day. By default this resolves to the start of the current day though&#010   an explicit ${isc.DocUtils.linkForRef('type:RelativeDateRangePosition')} may be used to specify the end of the current day.</li>&#010 <li> $startOfToday - the start of today</li>&#010 <li> $endOfToday - the end of today (one millisecond before the $startOfTomorrow) </li>&#010 <li> $yesterday - the previous day.</li>&#010 <li> $startOfYesterday - the start of yesterday</li>&#010 <li> $endOfYesterday - the end of yesterday (one millisecond before the $startOfToday) </li>&#010 <li> $tomorrow - the following day</li>&#010 <li> $startOfTomorrow - the start of tomorrow </li>&#010 <li> $endOfTomorrow - the end of tomorrow </li>&#010 <li> $weekAgo - the current day of the previous week </li>&#010 <li> $weekFromNow - the current day of the next week </li>&#010 <li> $startOfWeek - the start of the current week </li>&#010 <li> $endOfWeek - the end of the current week </li>&#010 <li> $monthAgo - the current day of the previous month </li>&#010 <li> $monthFromNow - the current day of the following month </li>&#010 <li> $startOfMonth - the start of the current month </li>&#010 <li> $endOfMonth - the end of the current month </li>&#010 <li> $startOfYear - the start of the current year </li>&#010 <li> $endOfYear - the end of the current year </li>&#010 </ul>&#010 &#010 <P>
	 */
	export type RelativeDateShortcut = any;

	/**
	 * What type of content is found at the ${isc.DocUtils.linkForRef('class:HTMLFlow')}'s ${isc.DocUtils.linkForRef('attr:HTMLFlow.contentsURL','contentsURL')}?
	 */
	export type ContentsType = 
		/** the <code>contentsURL</code> is assumed to be a standalone HTML page, and is loaded in an IFRAME. */
		"page"
		/** the default setting - indicates that HTML loaded from the <code>contentsURL</code> is assumed to be an HTML fragment rather than a complete page. */
		| "fragment"
		;

	/**
	 * Supported data point shapes for ${isc.DocUtils.linkForRef('attr:FacetChart.pointShapes')} are:
	 */
	export type PointShape = 
		"Oval"
		| "Square"
		| "Diamond"
		| "Triangle"
		;

	/**
	 * XMLDocument is the "parsed" or object form of XML, which allows XML to be navigated as&#010 a tree of nodes with attributes, namespaces and other metadata, as opposed to being&#010 manipulated as just a String.&#010 <P> &#010 XMLDocument is a native object supplied directly by the browser.  The SmartClient-supported&#010 interfaces for this object are methods that take an XMLDocument as an argument (such as&#010 ${isc.DocUtils.linkForRef('classMethod:XMLTools.selectNodes')}).  If you want to retrieve XML data and display it in a&#010 SmartClient component, read about ${isc.DocUtils.linkForRef('group:clientDataIntegration','XML Data Binding')}.  To&#010 extract data as JavaScript Objects from XML, see ${isc.DocUtils.linkForRef('classMethod:XMLTools.toJS')}.  Direct&#010 manipulation of XMLDocument is subject to cross-browser inconsistencies, bugs, memory leaks&#010 and performance issues.
	 */
	export type XMLDocument = any;

	/**
	 * Orientation of titles relative to the FormItem being labeled.  Can be set a the&#010 DynamicForm level as a default, or on individual items.
	 */
	export type TitleOrientation = 
		"left"
		| "top"
		| "right"
		;

	/**
	 * An object containing the stored selection information for a listGrid.&#010 Note that this object is not intended to be interrogated directly, but may be stored&#010 (for example) as a blob on the server for state persistence across sessions.
	 */
	export type ListGridSelectedState = any;

	/**
	 * When records are being dragged from within a ListGrid, what sort of drag-tracker&#010 should be displayed?
	 */
	export type DragTrackerMode = 
		/** Don't display a drag tracker at all */
		"none"
		/** Display an icon to represent the record(s) being dragged. Icon src is              derived from ${isc.DocUtils.linkForRef('method:ListGrid.getDragTrackerIcon')} */
		| "icon"
		/** Display a title for the record being dragged. Title derived from              ${isc.DocUtils.linkForRef('method:ListGrid.getDragTrackerTitle')} */
		| "title"
		/** Display the entire record being dragged */
		| "record"
		;

	/**
	 * Function to produce a summary value based on field values within a record.&#010 Example usage is record-level summaries in &#010 ${isc.DocUtils.linkForRef('type:ListGridFieldType','"summary" type ListGrid fields')}.&#010 <P>&#010 SummaryFunctions may be specified in one of 2 ways:<ul>&#010 <li>as an explicit function or executable&#010 ${isc.DocUtils.linkForRef('group:stringMethods','StringMethod')}. Takes 3 parameters:&#010 <br><code>record</code> the record for which the value is being calculated&#010 <br><code>fields</code> Array of listGridFields from which summaries should be calculated&#010 <br><code>summaryField</code> pointer to the summary type field on which the summary function&#010 is being run.</li>&#010 <li>As a registered RecordSummaryFunction identifier</li></ul>&#010 Note that ${isc.DocUtils.linkForRef('classMethod:DataSource.registerRecordSummaryFunction')} may be used to expand the&#010 set of registered RecordSummaryFunctions.
	 */
	export type RecordSummaryFunction = 
		/** Iterates through each field, picking up the numeric field values from the record and summing them. */
		"sum"
		/** Iterates through each field, picking up the numeric field values from the record and calculating the mean value. */
		| "avg"
		/** Iterates through each field, picking up the numeric field values from the record and calculating the maximum value. */
		| "max"
		/** Iterates through each field, picking up the numeric field values from the record and calculating the minimum value. */
		| "min"
		/** Iterates through each field, picking up the numeric field values from the record and multiplying them together. */
		| "multiplier"
		;

	export type ImageStyle = 
		/** Center (and don't stretch at all) the image if smaller than its enclosing frame.CENTER:"center", */
		"Canvas.CENTER"
		/** Tile (repeat) the image if smaller than its enclosing frame. */
		| "Canvas.TILE"
		/** Stretch the image to the size of its enclosing frame. */
		| "Canvas.STRETCH"
		/** Allow the image to have natural size */
		| "Canvas.NORMAL"
		;

	/**
	 * Strategy for determining how to place maximum-sized labels for ${isc.DocUtils.linkForRef('attr:DrawItem.titleAutoFit')}.
	 */
	export type TitleAutoFitRotationMode = 
		/** do not rotate */
		"never"
		/** rotate only if doing so would allow label to be larger */
		| "auto"
		/** always rotate */
		| "always"
		;

	/**
	 * This string is the base CSS class name applied to a FormItem  (or some part of a form item). &#010 See the ${isc.DocUtils.linkForRef('group:formItemStyling','formItem styling overview')} for more information about&#010 styling formItems.&#010 <P>&#010 The specified style name will be modified as the 'state' of the form item changes. &#010 Developers should provide appropriately named CSS classes for each stateful style&#010 described below:<ul>&#010 <li>If ${isc.DocUtils.linkForRef('attr:FormItem.showPending')} is true, when the current value differs from the&#010     value that would be restored by a call to ${isc.DocUtils.linkForRef('method:DynamicForm.resetValues')}, this style&#010     will have the suffix "Pending"  appended to it.</li>&#010 <li>If ${isc.DocUtils.linkForRef('attr:FormItem.showFocused')} is true, when the form item receives focus, this&#010     style will have the suffix "Focused" appended to it.</li>&#010 <li>If ${isc.DocUtils.linkForRef('attr:FormItem.showOver')} is true, roll-over will be indicated by appending the&#010     suffix "Over" appended to the style name. This applies to the&#010     ${isc.DocUtils.linkForRef('attr:FormItem.textBoxStyle','textBoxStyle')} and&#010     ${isc.DocUtils.linkForRef('attr:FormItem.controlStyle','controlStyle')} only.</li>&#010 <li>If ${isc.DocUtils.linkForRef('attr:FormItem.showErrorStyle')} is true, if the form item has errors, this&#010     style will have the suffix "Error" appended to it.</li>&#010 <li>If ${isc.DocUtils.linkForRef('attr:FormItem.showDisabled')} is true, when the form item is disabled, this&#010     style will have the suffix "Disabled" appended to it.</li>&#010 <li>Finally, if ${isc.DocUtils.linkForRef('attr:FormItem.showRTL')} is true, when the form item is in RTL mode, this&#010     style will have the suffix "RTL" appended to it.</ul>&#010 So for example if the cellStyle for some form item is set to "formCell" and showFocused&#010 is true, when the form item receives focus, the form item's cell will have the "formCellFocused"&#010 style applied to it.
	 */
	export type FormItemBaseStyle = any;

	/**
	 * Policy for laying out tiles. &#010 <P>&#010 Because a TileLayout can be either horizontally or vertically oriented, the general term&#010 "line" is used to mean either a row or column of tiles. &#010 <P>&#010 <b>NOTE</b>: for typical form layouts (a variety of input fields and buttons in a&#010 tabular layout with col-spanning and row-spanning support), use a ${isc.DocUtils.linkForRef('class:DynamicForm')} and&#010 see the ${isc.DocUtils.linkForRef('group:formLayout')} topic.
	 */
	export type TileLayoutPolicy = 
		/** Each line has the same number of tiles, based on ${isc.DocUtils.linkForRef('attr:TileLayout.tilesPerLine')} if set, otherwise,&#010 based on fitting as many tiles per line as possible consistent with&#010 ${isc.DocUtils.linkForRef('attr:TileLayout.tileSize','tileSize')} and ${isc.DocUtils.linkForRef('attr:TileLayout.tileMargin')}. &#010 <P>&#010 Tiles that do not specify a size will be sized to fill available space. */
		"fit"
		/** Tiles are laid out with varying numbers of tiles per line according to each tile's size,&#010 the ${isc.DocUtils.linkForRef('attr:TileLayout.tileMargin','tileMargin')}, and the available space.&#010 <P>&#010 Tiles are never resized by the TileLayout and ${isc.DocUtils.linkForRef('attr:TileLayout.tileSize')} is ignored. */
		| "flow"
		;

	export type MultiAutoChild = any;

	/**
	 * Mode for escaping text values when using ${isc.DocUtils.linkForRef('method:DataSource.recordsAsText')} or&#010 ${isc.DocUtils.linkForRef('method:DataSource.recordsFromText')}.
	 */
	export type EscapingMode = 
		/** Literal double quotes in data values are doubled (""), as expected by Microsoft                 Excel when pasting text values */
		"double"
		/** double quotes in data values have a blackslash (\) prepended, similar to                    String escaping in JavaScript and Java */
		| "backslash"
		;

	/**
	 * Order of pickers and which pickers are present when using a DateItem with&#010 ${isc.DocUtils.linkForRef('attr:DateItem.useTextField')} false.
	 */
	export type DateItemSelectorFormat = 
		/** Output fields in day, month, year order. */
		"DateItem.DAY_MONTH_YEAR"
		/** Output fields in month, day, year order. */
		| "DateItem.MONTH_DAY_YEAR"
		/** Output fields in year, month, day order. */
		| "DateItem.YEAR_MONTH_DAY"
		/** Output only day, month fields. */
		| "DateItem.DAY_MONTH"
		/** Output only month, day fields. */
		| "DateItem.MONTH_DAY"
		/** Output only year, month fields. */
		| "DateItem.YEAR_MONTH"
		/** Output only month, year fields. */
		| "DateItem.MONTH_YEAR"
		;

	/**
	 * Format for encoding dates in JSON.  Note you can override ${isc.DocUtils.linkForRef('method:JSONEncoder.encodeDate')}&#010 for a custom format.
	 */
	export type JSONDateFormat = 
		/** dates are is encoded as a String in <a target=_blank        href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema date format</a> in UTC,&#010        for example, "2005-08-02" for logical date fields or "2005-08-01T21:35:48.350"&#010        for <code>datetime</code> fields. See ${isc.DocUtils.linkForRef('group:dateFormatAndStorage','Date format and\n        storage')} for more information. */
		"xmlSchema"
		/** dates are encoded as raw JavaScript code for creating a Date object,        that is:&#010        <pre>&#010        new Date(1238792738633)&#010        </pre>&#010        This is not strictly valid JSON, but if eval()d, will result in an identical date object,&#010        regardless of timezone.  However, it does not preserve the distinction between&#010        logical dates vs full datetime values - use "logicalDateConstructor" mode for that. */
		| "dateConstructor"
		/** serializes Date instances in a way that preserves the        distinction between logical dates, logical times, and full datetime values, as&#010        explained ${isc.DocUtils.linkForRef('group:dateFormatAndStorage','here')}.  Like 'dateConstructor' mode, this&#010        does not produce strictly valid JSON, and instead embeds JavaScript calls.  &#010        <p>&#010        In addition, unlike 'dateConstructor' mode, using eval() to reconstruct the original&#010        JavaScript objects will only work in the presence of SmartClient, and not just in a&#010        generic JavaScript interpreter. */
		| "logicalDateConstructor"
		;

	/**
	 * String designating a standard time format for displaying the times associated with &#010 dates strings.
	 */
	export type TimeDisplayFormat = 
		/** String will display with seconds and am/pm indicator:<code>[H]H:MM:SS am|pm</code>. <br>&#010  Example: <code>3:25:15 pm</code> */
		"toTime"
		/** String will display with seconds in 24 hour time: <code>[H]H:MM:SS</code>. <br>&#010  Example: <code>15:25:15</code> */
		| "to24HourTime"
		/** String will display with seconds, with a 2 digit hour and am/pm indicator: &#010  <code>HH:MM:SS am|pm</code> <br>&#010  Example: <code>03:25:15 pm</code> */
		| "toPaddedTime"
		/** String will display with seconds, with a 2 digit hour in 24 hour format: &#010  <code>HH:MM:SS</code> <br>&#010  Examples: <code>15:25:15</code>, <code>03:16:45</code> */
		| "toPadded24HourTime"
		/** String will have no seconds and be in 12 hour format:<code>[H]H:MM am|pm</code><br>&#010  Example: <code>3:25 pm</code> */
		| "toShortTime"
		/** String will have no seconds and be in 24 hour format: <code>[H]H:MM</code><br>&#010  Example:<code>15:25</code> */
		| "toShort24HourTime"
		/** String will have no seconds and will display a 2 digit hour, in 12 hour clock format:&#010  <code>HH:MM am|pm</code><br>&#010  Example: <code>03:25 pm</code> */
		| "toShortPaddedTime"
		/** String will have no seconds and will display with a 2 digit hour in 24 hour clock format:&#010 <code>HH:MM</code><br>&#010 Examples: <code>15:25</code>, <code>03:16</code> */
		| "toShortPadded24HourTime"
		;

	export type SortDirection = 
		/** Sort in ascending order (eg: A-Z, larger items later in the list) */
		"ascending"
		/** Sort in descending order (eg: Z-A, larger items earlier in the list) */
		| "descending"
		;

	/**
	 * For "fetch" operations, how simple search criteria should be interpreted for text fields &#010 (and to some extent numeric fields, see the notes below).  For greater flexibility, use &#010 ${isc.DocUtils.linkForRef('object:AdvancedCriteria')}.
	 */
	export type TextMatchStyle = 
		/** case-insensitive exact match ("foo" matches "foo" and "FoO", but not "FooBar") */
		"exact"
		/** case-sensitive exact match ("foo" matches only "foo") */
		| "exactCase"
		/** case-insenstive substring match ("foo" matches "foobar" and "BarFoo") */
		| "substring"
		/** case-insensitive prefix match ("foo" matches "FooBar" but not "BarFoo") <p>&#010 textMatchStyle behavior is consistent across the client and all three of the built-in&#010 server DataSource implementations - SQL, Hibernate and JPA - to the maximum extent that is&#010 practical.  Known inconsistencies, some of which can be tweaked with configuration settings,&#010 are described below<ul>&#010 <li>textMatchStyle can be disabled for any individual field with the &#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.ignoreTextMatchStyle')} declaration.  This behavior is consistent&#010 across client and server implementations, with the proviso that case-sensitive behavior &#010 is inherently inconsistent in the server-side implementations (see below for a more&#010 detailed discussion of this)</li>&#010 <li>textMatchStyle is forced to "exactCase" for ${isc.DocUtils.linkForRef('attr:DataSourceField.primaryKey','primaryKey')} &#010 fields on <code>update</code> and <code>remove</code> operations, unless&#010 ${isc.DocUtils.linkForRef('attr:OperationBinding.allowMultiUpdate')} is in force.  This means that a normal update&#010 or remove operation - which is constrained by a unique primaryKey value or combination, to &#010 affect only a single data row - will use an equality match on all primaryKey fields.  This&#010 is desirable because it makes index usage more likely.  Note that this means the key values&#010 "foo" and "FOO" are distinct, which is a change from previous behavior.  For most databases,&#010 this change will have no effect because most databases do not by default allow primaryKey &#010 values that only differ in case anyway - if a table has a row with a PK of "foo" and you &#010 try to insert a row with a PK of "FOO", most databases will fail with a constraint violation.&#010 However, if you are using a database hat allows key values that differ only in case, and you &#010 need to support this for some reason, you can switch the framework back to the previous &#010 behavior by setting property <code>allow.case.sensitive.pks</code> to <code>true</code> in&#010 your <code>server.properties</code> file.  Note, we do not recommend this; in fact, we do &#010 not recommend the use of text primaryKey fields at all.  Where you have control ,we would &#010 always recommend the use of automatically incrementing numeric sequence keys.</li>&#010 <li>textMatchStyle does not apply to boolean or temporal (date, datetime, time)&#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.type','field types')}.  Such fields are always checked for equality.  If &#010 you have a need for more complex matching, such as date-range checking, use AdvancedCriteria</li>&#010 <li>Critiera values for temporal fields <b>must</b> be real dates (Javascript <code>Date</code>&#010 objects on the client, instances of <code>java.util.Date</code> on the server).  Attempting&#010 to match against a string or any other type of value will result in an "always fails" &#010 clause being generated.  This behavior is how the client code has always worked, but is a &#010 change for the server-side DataSources, in the interests of consistency.  The previous&#010 behavior was:<ul>&#010   <li>SQLDataSource used to attempt to match the date column to the criteria value provided;&#010   if that value was an appropriately-formatted string, that attempt <i>might</i> have &#010   worked, but it would be database-specific.  If you have an application that depends on &#010   this old behavior, you can switch it back on by adding the following to your&#010   <code>server.properties</code> file: &#010   <code>sql.temporal.fields.require.date.criteria: false</code></li>&#010   <li>HibernateDataSource and JPADataSource used to skip such clauses altogether, which &#010   results in the opposite behavior (there is an implied "always succeeds" clause, because &#010   the clause is not present in the query at all).  If you have an application that depends on &#010   this old behavior, you can switch it back on by adding the following to your&#010   <code>server.properties</code> file: &#010   <code>jpa.temporal.fields.require.date.criteria: false</code> or &#010   <code>hibernate.temporal.fields.require.date.criteria: false</code>, as appropriate</li>&#010 </ul></li>&#010 <li>textMatchStyle does not apply to fields used in the joins generated to satisfy &#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.includeFrom','includeFrom')} declarations or entity relations in&#010 Hibernate or JPA.  Again, such comparisons are always for equality</li>&#010 <li>textMatchStyle is applied to numeric fields <b>only</b> if the supplied criteria value&#010 is a string.  So for a numeric field "myNumber", we will match 10, 100, 110 and 1000 if a &#010 criteria value of "10" (the quoted string) is supplied, but we will only match 10 if a &#010 criteria value of 10 (the actual number) is supplied<ul>&#010   <li>This is a change in behavior for the server-side DataSource implementations, in the &#010   interests of consistency with the client behavior.  Previously, all three of the built-in&#010   DataSource implementations applied textMatchStyle to numeric fields regardless of the &#010   criteria value's type.  If you have an application that depends on this old behavior, &#010   you can switch it back on by adding the following to your <code>server.properties</code>&#010   file: <code>sql.substring.numeric.criteria: true</code> or &#010   <code>hibernate.substring.numeric.criteria: true</code> or &#010   <code>jpa.substring.numeric.criteria: true</code>, as appropriate</li>&#010 </ul></li>&#010 <li>"exactCase" matching cannot be made consistent across all database providers because &#010 each database has its own idea of whether case-sensitive matching should be the default, &#010 and how to switch it on and off (if that is even possible)<ul>&#010   <li>Microsoft SQL Server must have case-sensitive matching enabled by setting a &#010   case-sensitive collation when the database is created (there are more fine-grained &#010   options, but we do not recommend them because of the scope for further inconsistency, &#010   where "exactCase" works correctly on table A but not on table B).  See &#010   <a href=http://msdn.microsoft.com/en-us/library/ms175835.aspx>MSDN</a> for details</li>&#010   <li>HSQLDB has case sensitivity set with the <code>SET IGNORECASE</code> directive -&#010   <a href=http://www.hsqldb.org/doc/guide/ch09.html#set_ignorecase-section>see here</a></li>&#010   <li>MySQL is case-insensitive, but since it provides an easy way to do per-query,&#010   case-sensitive matching in SQL, we work around it for that database, but <b>only</b> in&#010   SQL DataSources</li>&#010 </ul></li>&#010 <li>If you are using Hibernate or JPA, whether "exactCase" works as expected depends &#010 entirely on the underlying database.  Unlike the SQL DataSource, where we have fine-grained&#010 control of the SQL that the database executes, we are constrained by what the ORM will &#010 allow.  This prevents us from compensating for database quirks, like we do with MySQL's&#010 case-insensitivity in the SQL DataSource</li>&#010 </ul> */
		| "startsWith"
		;

	/**
	 * Hoop selection modes.
	 */
	export type HoopSelectionStyle = 
		/** Components completely enclosed by the hoop are selected */
		"encloses"
		/** Components enclosed or intersected by the hoop are selected */
		| "intersects"
		;

	/**
	 * What kind of mask to use for masking dragged element.
	 */
	export type DragMaskType = 
		/** creates an element with ordinary HTML content that will block events */
		"div"
		/** creates an iframe with empty content */
		| "iframe"
		/** hides the contents of this widget temporarily */
		| "hide"
		;

	/**
	 * Event that will trigger inline editing.
	 */
	export type ListGridEditEvent = 
		/** A single mouse click triggers inline editing */
		"click"
		/** A double click triggers inline editing */
		| "doubleClick"
		/** No mouse event will trigger editing.  Editing must be                      programmatically started via ${isc.DocUtils.linkForRef('method:ListGrid.startEditing')}&#010                      (perhaps from an external button) or may be triggered by&#010                      keyboard navigation if ${isc.DocUtils.linkForRef('attr:ListGrid.editOnFocus')} is set. */
		| "none"
		;

	/**
	 * When the type for a parameter mentions "properties" as in "ListGrid Properties" or&#010 "RPCRequest Properties", it means that the expected value is a JavaScript Object&#010 containing any set of properties generally legal when creating an object of that type.&#010 <P>&#010 For example, the first parameter of ${isc.DocUtils.linkForRef('classMethod:RPCManager.sendRequest')} is of type&#010 "RPCRequest Properties".  This means it should be called like:&#010 <pre>&#010    isc.RPCManager.sendRequest({&#010        actionURL : "/foo.do",&#010        showPrompt:false&#010    });</pre>&#010 ${isc.DocUtils.linkForRef('attr:RPCRequest.actionURL','actionURL')} and ${isc.DocUtils.linkForRef('attr:RPCRequest.showPrompt','showPrompt')} are &#010 properties of ${isc.DocUtils.linkForRef('class:RPCRequest')}.  &#010 <P>&#010 Note that the notation shown above is an example of a&#010 ${isc.DocUtils.linkForRef('type:ObjectLiteral','JavaScript object literal')}.
	 */
	export type Properties = any;

	export type ColorPickerMode = 
		/** Display a palette of 40 basic colors from which to pick. */
		"simple"
		/** In addition to the 40 basic colors, the user can specify a color from anywhere in the spectrum, with an optional alpha component. */
		| "complex"
		;

	/**
	 * Indicates the format to be used for HTTP requests and responses when&#010 fulfilling DSRequests (eg, when ${isc.DocUtils.linkForRef('method:DataSource.fetchData')} is called).&#010 <P>&#010 Note that ${isc.DocUtils.linkForRef('classMethod:RPCManager.startQueue','request queuing')} is only available for&#010 "iscServer" requests.
	 */
	export type DSDataFormat = 
		/** Make an HTTP request in a format recognized by the ISC server and expect ISC server&#010 response format.  ${isc.DocUtils.linkForRef('group:serverDataIntegration','Server-side integration')} can then be&#010 used to connect to any kind of data store or web service. */
		"iscServer"
		/** Expect XML responses.  Request format depends on the setting for&#010 ${isc.DocUtils.linkForRef('attr:OperationBinding.dataProtocol','protocol')}.  This is the correct setting when&#010 consuming RSS feeds, XML web services (whether SOAP, REST, XML-RPC or custom format),&#010 and XML flat files directly from the browser.&#010 <P>&#010 Values for "date", "time" or "datetime" fields in responses should be specified in the&#010 applicable <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema&#010 date format</a>.&#010 If no timezone is explicitly specified, dates / datetimes received by the client are &#010 assumed to be GMT. Note that "date" type fields represent logical dates and may omit&#010 time information entirely, and "time" type fields may omit date information.&#010 See ${isc.DocUtils.linkForRef('group:dateFormatAndStorage','Date and Time Format and storage')} for more information&#010 on how date values are serialized in requests sent to the server.&#010  &#010 <P>&#010 A DSResponse will be derived from the returned XML via the process described under&#010 ${isc.DocUtils.linkForRef('method:DataSource.transformResponse')}. */
		| "xml"
		/** Expect response in JSON <a href='http://json.org' target='_blank'>(Java Script Object Notation)</a>&#010 format, ready to be eval()'d. Response should either be a naked object literal:&#010 <pre>&#010     { "property":"value1", "property2" : "value2", ... }&#010 </pre>&#010 or a string that evals to return a valid response object:&#010 <pre>&#010     var response = { "property":"value1", "property2" : "value2", ... }&#010     response;&#010 </pre>&#010 <P>&#010 A DSResponse will be derived from the returned JSON via the process described under&#010 ${isc.DocUtils.linkForRef('method:DataSource.transformResponse')}.&#010 <P>&#010 As with <code>"xml"</code> responses, values for "date" or "datetime" fields should be&#010 specified as a String in &#010 <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema date format</a>&#010 and may include a timezone.  In the absence of a timezone they will be assumed to be GMT.&#010 <P>&#010 Request format depends on the setting for ${isc.DocUtils.linkForRef('attr:OperationBinding.dataProtocol','protocol')}.  &#010 See also ${isc.DocUtils.linkForRef('class:XJSONDataSource')}. */
		| "json"
		/** SmartClient will not attempt to parse the response, instead,&#010 ${isc.DocUtils.linkForRef('method:DataSource.transformResponse')} must be implemented.&#010 <code>transformResponse</code> will receive the "data" parameter as a String, and must&#010 parse this String into an Array of Objects, which should be set as&#010 ${isc.DocUtils.linkForRef('attr:DSResponse.data')}.  Request format depends on the setting for&#010 ${isc.DocUtils.linkForRef('attr:OperationBinding.dataProtocol','protocol')}.&#010 <P>&#010 Note that, unlike either the "json" or "xml" settings of <code>dataFormat</code>, you&#010 are responsible for ensuring that parsed values are the correct type, for example, using&#010 the JavaScript built-ins <code>parseInt</code> and <code>parseFloat</code> on integer&#010 and decimal values respectively, and using <code>new Date()</code> to construct valid&#010 Dates. */
		| "custom"
		;

	export type Positioning = 
		/** The canvas is absolutely positioned with respect to its parent. */
		"Canvas.ABSOLUTE"
		/** The canvas is relatively positioned according to the document flow. */
		| "Canvas.RELATIVE"
		;

	/**
	 * This is used for client-side or server-side summaries&#010 <ul><li> Client-side: Function to produce a summary value based on an array of records and a field definition. &#010 An example usage is the ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary','listGrid summary row')}, where&#010 a row is shown at the bottom of the listGrid containing summary information about each&#010 column.</li>&#010 <li>Server-side: Function used for getting summarized field value using &#010 ${isc.DocUtils.linkForRef('group:serverSummaries','Server Summaries feature')} or when &#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.includeFrom','Including values from multiple records')}</li></ul>&#010 <P>&#010 For the client-side SummaryFunctions may be specified in one of 2 ways:<ul>&#010 <li>as an explicit function or executable&#010 ${isc.DocUtils.linkForRef('group:stringMethods','StringMethod')}, which will be passed <code>records</code> (an array of records)&#010 and <code>field</code> (the field definition for which the summary is required).</li>&#010 <li>as a standard SummaryFunction identifier</li></ul>&#010 For valid ways to configure SummaryFunctions to use server-side feature see the&#010 ${isc.DocUtils.linkForRef('group:serverSummaries','Server Summaries overview')}.
	 */
	export type SummaryFunction = 
		/** <i>Client:</i> iterates through the set of records, picking up and summing all numeric values for the specified field. Returns null to indicate invalid summary value if&#010 any non numeric field values are encountered.<br>&#010 <i>Server:</i> acts exactly like SQL SUM function. */
		"sum"
		/** <i>Client:</i> iterates through the set of records, picking up all numeric values for the specified field and determining the mean value. Returns null to indicate invalid&#010 summary value if any non numeric field values are encountered.<br>&#010 <i>Server:</i> acts exactly like SQL AVG function. */
		| "avg"
		/** <i>Client:</i> iterates through the set of records, picking up all values for the specified field and finding the maximum value. Handles numeric fields and&#010 date type fields only. Returns null to indicate invalid&#010 summary value if any non numeric/date field values are encountered.<br>&#010 <i>Server:</i> acts exactly like SQL MAX function. */
		| "max"
		/** <i>Client:</i> iterates through the set of records, picking up all values for the specified field and finding the minimum value.  Handles numeric fields and&#010 date type fields only. Returns null to indicate invalid summary value if&#010 any non numeric field values are encountered.<br>&#010 <i>Server:</i> acts exactly like SQL MIN function. */
		| "min"
		/** <i>Client:</i> iterates through the set of records, picking up all numeric values for the specified field and multiplying them together.&#010 Returns null to indicate invalid summary value if&#010 any non numeric field values are encountered.<br>&#010 <i>Server:</i> <b>not supported</b>. */
		| "multiplier"
		/** <i>Client:</i> returns a numeric count of the total number of records passed in.<br> <i>Server:</i> acts exactly like SQL COUNT function. */
		| "count"
		/** <i>Client:</i> returns <code>field.summaryValueTitle</code> if specified, otherwise <code>field.title</code><br>&#010 <i>Server:</i> <b>not supported</b>. */
		| "title"
		/** <i>Client:</i> Currently the same as the <b>min</b> function.<br> <i>Server:</i> implemented as SQL MIN function. */
		| "first"
		/** <i>Client:</i> iterates through the set of records, producing a string with each value concatenated to the end.<br>&#010 <i>Server:</i> implemented as SQL CONCAT function. Supported only by SQLDataSource. Note that it &#010 is natively supported only by Oracle DB driver, other drivers perform additional query to fetch &#010 values for concatenation. See also ${isc.DocUtils.linkForRef('attr:DataSourceField.joinPrefix','joinPrefix')}, &#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.joinString','joinString')} and ${isc.DocUtils.linkForRef('attr:DataSourceField.joinSuffix','joinSuffix')} &#010 related datasource field attributes. */
		| "concat"
		;

	export type SkipJSONValidation = 
		/** Skip validation for all fields.  In this mode, valueXPaths and                      getFieldValue implementations are skipped. */
		"full"
		/** Skip validation for fields with boolean, numeric, or string-drived                     types.  Note that you must deliver all &#010                     ${isc.DocUtils.linkForRef('attr:DataSourceField.multiple')}:true values as arrays. */
		| "partial"
		/** Always do validation. */
		| "none"
		;

	/**
	 * Dictates the appearance of form items when ${isc.DocUtils.linkForRef('attr:FormItem.canEdit')} is set to&#010 <code>false</code>.
	 */
	export type ReadOnlyDisplayAppearance = 
		/** Item value should appear within the form as a static block of text, similar to the default appearance of a ${isc.DocUtils.linkForRef('class:StaticTextItem')}. This appearance may be&#010 modified via ${isc.DocUtils.linkForRef('attr:FormItem.readOnlyTextBoxStyle')} and ${isc.DocUtils.linkForRef('attr:FormItem.clipStaticValue')}. */
		"static"
		/** Item should appear unchanged, but user interaction to edit the item will be disallowed. Note that some interactions will be allowed, such as selecting text&#010 within a read-only ${isc.DocUtils.linkForRef('class:TextItem')} for copy and paste. Exact implementation may vary by&#010 form item type. */
		| "readOnly"
		/** Item will appear disabled. */
		| "disabled"
		;

	/**
	 * Is this page being viewed in landscape or portrait orientation? Typically used with&#010 mobile devices.
	 */
	export type PageOrientation = 
		/** Landscape orientation: page is wider than it is tall. */
		"landscape"
		/** Portrait orientation: page is taller than it is wide. */
		| "portrait"
		;

	export type LabelAlignment = 
		/** Justify label's left edge against its left coordinate                           (right in RTL configurations) */
		"DrawLabel.START"
		/** Justify label's right edge against its left coordinate                           (left in RTL configurations) */
		| "DrawLabel.END"
		/** Center label about its left coordinate */
		| "DrawLabel.CENTER"
		/** Justify label's left edge against its left coordinate */
		| "DrawLabel.LEFT"
		/** Justify label's right edge against its left coordinate */
		| "DrawLabel.RIGHT"
		;

	/**
	 * When ${isc.DocUtils.linkForRef('attr:ListGrid.canHover','canHover')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHoverComponents','showHoverComponents')} are both true, HoverMode&#010 dictates the type of UI to be displayed when a user hovers over a row or cell.&#010 <P>&#010 There are a number of builtin HoverModes and you can override&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getCellHoverComponent','getCellHoverComponent()')} to create your own&#010 hover behaviors.
	 */
	export type HoverMode = 
		/** Show a single field's value in an ${isc.DocUtils.linkForRef('class:HTMLFlow')}. Field      to use is ${isc.DocUtils.linkForRef('attr:ListGrid.detailField')}. */
		"detailField"
		/** Show a ${isc.DocUtils.linkForRef('class:DetailViewer')} displaying those fields from the      record which are not already displayed in the grid. */
		| "details"
		/** Show a separate ${isc.DocUtils.linkForRef('class:ListGrid')} containing related-records.      See ${isc.DocUtils.linkForRef('attr:ListGridRecord.detailDS')} and ${isc.DocUtils.linkForRef('attr:ListGrid.recordDetailDSProperty')} for&#010      more information. */
		| "related"
		/** Show a ${isc.DocUtils.linkForRef('class:DetailViewer')} displaying those fields      from the record not already displayed in the grid, together with a separate&#010      ${isc.DocUtils.linkForRef('class:ListGrid')} containing related-records. */
		| "detailRelated"
		;

	export type CriteriaPolicy = 
		/** Cache is dropped whenever criteria changes. */
		"dropOnChange"
		/** Cache is retained as long as the only changes to criteria                              make the criteria more restrictive as determined by&#010                              ${isc.DocUtils.linkForRef('method:ResultSet.compareCriteria')}. */
		| "dropOnShortening"
		;

	/**
	 * Supported styles of connector orientations.
	 */
	export type ConnectorOrientation = 
		/** Tail segments are always horizontal; best for left-to-right connectors */
		"horizontal"
		/** Tail segments are always vertical; best for top-to-bottom connectors */
		| "vertical"
		/** Tail segments flip orientation according to longer axis of bounding box: if the               bounding box is wider than it is tall, center segment is vertical */
		| "auto"
		;

	export type Alignment = 
		/** Center within container. */
		"Canvas.CENTER"
		/** Stick to left side of container. */
		| "Canvas.LEFT"
		/** Stick to right side of container. */
		| "Canvas.RIGHT"
		;

	export type ProcessValueType = 
		/** values that are not already strings are converted via toString() */
		"string"
		/** the strings "true" and "false" become boolean true and false.  All other                 Strings non-empty String values are true, all numbers are true except 0, and&#010                 all other non-null values are true */
		| "boolean"
		/** values are converted via toString() and parsing as a decimal number.                 Invalid values trigger a transition to the ${isc.DocUtils.linkForRef('attr:StateTask.failureElement')} */
		| "decimal"
		/** values are converted via toString(), parsing as a number, and rounding to                 nearest integer.  Invalid values trigger a transition to the&#010                 ${isc.DocUtils.linkForRef('attr:StateTask.failureElement')} */
		| "integer"
		/** any input which is not already a Record or Map becomes null */
		| "record"
		/** generic array type - will convert value to an array of the same type as the               existing value */
		| "array"
		;

	/**
	 * When ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords','canExpandRecords')} is true, ExpansionMode&#010 dictates the type of UI to be displayed in the expanded portion of the row.&#010 <P>&#010 There are a number of builtin ExpansionModes and you can override&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getExpansionComponent','getExpansionComponent()')} to create your own&#010 expansion behaviors.
	 */
	export type ExpansionMode = 
		/** Show a single field's value in an ${isc.DocUtils.linkForRef('class:HTMLFlow')}. Field      to use is ${isc.DocUtils.linkForRef('attr:ListGrid.detailField')}. */
		"detailField"
		/** Show a ${isc.DocUtils.linkForRef('class:DetailViewer')} displaying those fields from the      record which are not already displayed in the grid. */
		| "details"
		/** Show a separate ${isc.DocUtils.linkForRef('class:ListGrid')} containing related-records.      See ${isc.DocUtils.linkForRef('attr:ListGridRecord.detailDS')} and ${isc.DocUtils.linkForRef('attr:ListGrid.recordDetailDSProperty')} for&#010      more information. */
		| "related"
		/** Show a ${isc.DocUtils.linkForRef('class:DynamicForm')} to edit those fields from the      record which are not already present in the grid.  If the record is collapsed with&#010      unsaved changes and ${isc.DocUtils.linkForRef('attr:ListGrid.expansionEditorShowSaveDialog')} is not set, Edits&#010      will be saved automatically, or stored as ${isc.DocUtils.linkForRef('group:editing','editValues')} if&#010      ${isc.DocUtils.linkForRef('attr:ListGrid.autoSaveEdits')} is false.  Otherwise, a confirmation dialog is&#010      displayed.  Can optionally show a&#010      ${isc.DocUtils.linkForRef('attr:ListGrid.showExpansionEditorSaveButton','save button')} and&#010      ${isc.DocUtils.linkForRef('attr:ListGrid.expansionEditorCollapseOnSave','auto-collapse')} when save is pressed.&#010      If a record fails validation on save and the field in question is not visible in&#010      the grid, the record is automatically expanded and validated to show the errors. */
		| "editor"
		/** Show a ${isc.DocUtils.linkForRef('class:DetailViewer')} displaying those fields      from the record not already displayed in the grid, together with a separate&#010      ${isc.DocUtils.linkForRef('class:ListGrid')} containing related-records. */
		| "detailRelated"
		;

	/**
	 * String specifying a nested data field structure.&#010 <P>&#010 Each dataPath string is a slash-delimited set of field identifiers, for example&#010 <code>"id1/id2/id3"</code>. DataPaths may be applied directly to a&#010 ${isc.DocUtils.linkForRef('attr:Canvas.dataPath','component')}, and/or to a databound component field specification.&#010 A datapath denotes a path to a nested field value in a hierarchical structure, giving&#010 developers the opportunity to easily view or edit nested data structures.&#010 Specifically:&#010 <ul><li>if the component is viewing or editing a record, the value for fields &#010         will be derived from a nested structure of records</li>&#010     <li>if the component is bound to a dataSource, field attributes may be picked up by&#010         following the dataPath to a field definition on another dataSource</li></ul>&#010 <b>Examples:</b><br>&#010 If a dynamicForm is defined with the following fields:&#010 <pre>&#010    [&#010      { name:"name" },&#010      { name:"street", dataPath:"address/street" }&#010    ]&#010 </pre>&#010 If the <code>"name"</code> field is set to <i>"Joe Smith"</i> and the <code>"street"</code> field&#010 is set to <i>"1221 High Street"</i>, when the values for this form are retrieved via a&#010 <code>getValues()</code> call they will return an object in the following format:&#010 <pre>&#010    {name:"Joe Smith", address:{street:"1221 High Street"}}&#010 </pre>&#010 <P>&#010 For databound components, dataPath also provides a way to pick up field attributes from nested&#010 dataSources. Given the following dataSource definitions:&#010 <pre>&#010  isc.DataSource.create({&#010      ID:"contacts",&#010      fields:[&#010          {name:"name"},&#010          {name:"email"},&#010          {name:"organization"},&#010          {name:"phone"},&#010          {name:"address", type:"Address"}&#010      ]&#010  });&#010 &#010  isc.DataSource.create({&#010      ID:"Address",&#010      fields:[&#010          {name:"street"},&#010          {name:"city"},&#010          {name:"state"},&#010          {name:"zip"}&#010      ]&#010  });&#010  </pre>&#010 and a databound component bound to the 'contacts' dataSource, specifying a field with a dataPath&#010 of <code>"address/street"</code> would ensure the field attributes were derived from the &#010 "street" field of the 'Address' dataSource.&#010 <P>&#010 dataPaths are also cumulative. In other words if a component has a specified dataPath, &#010 the dataPath of any fields it contains will be appended to that component level path when&#010 accessing data. For example the following form:&#010 <pre>&#010 isc.DynamicForm.create({&#010     dataPath:"contact",&#010     fields:[&#010          {dataPath:"address/email"}&#010     ]&#010 });&#010 </pre>&#010 Might be used to edit a data structure similar to this:&#010 <pre>{contact:{name:'Ed Jones', address:{state:"CA", email:"ed@ed.jones.com"}}}</pre>&#010 Nested canvases can also have dataPaths specified, which will similarly be combined. See&#010 the ${isc.DocUtils.linkForRef('attr:Canvas.dataPath')} attribute for more information and examples of this.
	 */
	export type DataPath = any;

	/**
	 * The types listed below are built-in types that ${isc.DocUtils.linkForRef('interface:DataBoundComponent','databound\n components')} understand and treat specially (using type-specific form controls, validators,&#010 formatters, sorting logic, etc).  &#010 <P>&#010 You can declare custom types via ${isc.DocUtils.linkForRef('class:SimpleType','SimpleType.create()')}, with settings that&#010 will influence DataBound components.  You can also create your own subclasses of databound&#010 components to add further custom, reusable behaviors based on field.type.&#010 <P>&#010 <code>field.type</code> can also be the ID of another ${isc.DocUtils.linkForRef('class:DataSource')}, which allows you to&#010 model nested structures such as XML documents (in fact, ${isc.DocUtils.linkForRef('classMethod:XMLTools.loadXMLSchema')}&#010 models XML schema in this way).  Nested DataSource declarations affect how XML and JSON data&#010 is deserialized into JavaScript objects in the &#010 ${isc.DocUtils.linkForRef('group:clientDataIntegration','client-side integration')} pipeline, so that you can load&#010 complex XML documents and have them deserialized into a correctly typed nested data&#010 structure.&#010 <P>&#010 Note: to declare related but <i>separate</i> objects, as in an "Account" object that can be&#010 related to both a "Contact" object and "Order" objects, use&#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.foreignKey')}, <b>not</b> a nested structure declaration.
	 */
	export type FieldType = 
		/** Generic text, e.g. <code>"John Doe"</code>. This is the default field type.                    Use <code>field.length</code> to set length. */
		"text"
		/** A boolean value, e.g. <code>true</code> */
		| "boolean"
		/** A whole number, e.g. <code>123</code> */
		| "integer"
		/** A floating point (decimal) number, e.g. <code>1.23</code> */
		| "float"
		/** A logical date, with no time value (such as a holiday or birthday).                    Represented on the client as a JavaScript <code>Date</code> object where&#010                    time values are ignored.  See ${isc.DocUtils.linkForRef('group:dateFormatAndStorage')} for more&#010                    information on date display and serialization formats. */
		| "date"
		/** A time of day, with no date.  Represented on the client as a JavaScript                    <code>Date</code> object in UTC/GMT by default (see also&#010                    ${isc.DocUtils.linkForRef('group:dateFormatAndStorage')} and the ${isc.DocUtils.linkForRef('class:Time')} class). */
		| "time"
		/** A date and time, accurate to the second. Represented on the client as a                     JavaScript <code>Date</code> object. See also&#010                    ${isc.DocUtils.linkForRef('group:dateFormatAndStorage')}. */
		| "datetime"
		/** A text value constrained to a set of legal values specified by the                    field's ${isc.DocUtils.linkForRef('attr:DataSourceField.valueMap','valueMap')}, as though a&#010                    ${isc.DocUtils.linkForRef('type:ValidatorType')} of "isOneOf" had been declared. */
		| "enum"
		/** An enum whose values are numeric. */
		| "intEnum"
		/** If you are using the SmartClient SQL datasource connector, a                    <code>sequence</code> is a unique, increasing whole number, incremented&#010                    whenever a new record is added. Otherwise, <code>sequence</code> behaves&#010                    identically to <code>integer</code>. This type is typically used with&#010                    <code>field.primaryKey</code> to auto-generate unique primary keys.&#010                    See also ${isc.DocUtils.linkForRef('attr:DataSourceField.sequenceName')} and &#010                    ${isc.DocUtils.linkForRef('attr:DataSource.sequenceMode')} */
		| "sequence"
		/** A string representing a well-formed URL.  Some components                    will render this as an HTML link (using an anchor tag for example). */
		| "link"
		/** A string representing a well-formed URL that points to an                    image.  Some components will render an IMG tag with the value of this field&#010                    as the 'src' attribute to render the image. */
		| "image"
		/** Arbitrary binary data.  When this field type is present, three additional fields are automatically generated.  They are: &lt;fieldName&gt;_filename, &lt;fieldName&gt;_filesize, and&#010 &lt;fieldName&gt;_date_created where &lt;fieldName&gt; is the value of the <code>name</code>&#010 attribute of this field.  These fields are marked as&#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.hidden')}<code>:true</code> to suppress their rendering by default.  You&#010 can show one or more of these fields by specifying the field with a <code>hidden:false</code>&#010 override in the fields array of the databound component.&#010 <i>Stream / view file support for custom DataSources</i>: a custom DataSource or ${isc.DocUtils.linkForRef('class:DMI')} &#010 must implement the "viewFile" and "downloadFile" operationTypes and return a single Record&#010 with a byte[] as the field value for the binary field.  For more detail see&#010 the overview of ${isc.DocUtils.linkForRef('group:binaryFields','Binary Fields')}. */
		| "binary"
		/** Binary data comprising an image.  Causes ${isc.DocUtils.linkForRef('class:ViewFileItem')} to be used                    when the field is displayed in a form, allowing the image to optionally&#010                    be displayed inline. */
		| "imageFile"
		/** Fields of this type can contain any data value and have no default                     formatting or validation behavior. This is useful as the &#010                    ${isc.DocUtils.linkForRef('attr:SimpleType.inheritsFrom','parent type')} for SimpleTypes&#010                    where you do not want any of the standard validation or formatting logic&#010                    to be inherited from the standard built-in types. */
		| "any"
		/** Synonymous with "any". */
		| "custom"
		/** Fields of this type are automatically populated by the SmartClient Server                     with the current authenticated userId as part of "add" and "update" &#010                    operations.  By default, fields of this type are hidden and not editable;&#010                    the server ignores any value that the client sends in a field of this type.&#010                    Note that the "authenticated user" can be set explicitly on the server-side &#010                    <code>RPCManager</code> using the setUserId() method, or it can come from&#010                    the servlet API if you are using its built-in authentication scheme.  See&#010                    the server-side Javadocs for <code>RPCManager</code>. */
		| "modifier"
		/** Fields of this type are automatically populated by the SmartClient                    Server with the current date and time as part of "add" and "update" &#010                    operations.  By default, fields of this type are hidden and not editable;&#010                    the server ignores any value that the client sends in a field of this type. */
		| "modifierTimestamp"
		/** Fields of this type are automatically populated by the SmartClient Server                     with the current authenticated userId as part of "add" operations.&#010                    By default, fields of this type are hidden and not editable;&#010                    the server ignores any value that the client sends in a field of this type.&#010                    The notes about type "modifier" also apply to fields of this type. */
		| "creator"
		/** Fields of this type are automatically populated by the SmartClient                    Server with the current date and time as part of an "add" operation (when&#010                    the record is first created).  By default, fields of this type are hidden&#010                    and not editable; the server ignores any value that the client sends in a&#010                    field of this type. */
		| "creatorTimestamp"
		/** Same as "text", but causes ${isc.DocUtils.linkForRef('class:PasswordItem')} to be used by default for                    editing (hides typed-in value). */
		| "password"
		/** A special field type specifically for use with Unicode data in conjunction                    with the Microsoft SQL Server database.  Field type "ntext" implies the &#010                    use of ${isc.DocUtils.linkForRef('attr:DataSourceField.sqlStorageStrategy','sqlStorageStrategy')} "ntext";&#010                    other than that, this type is identical to "text" */
		| "ntext"
		/** An integer number with locale-based formatting, e.g. <code>12,345,678</code>.                    See ${isc.DocUtils.linkForRef('group:localizedNumberFormatting','Localized Number Formatting')}&#010                    for more info. */
		| "localeInt"
		/** A float number with locale-based formatting, e.g. <code>12,345.67</code>.                    See ${isc.DocUtils.linkForRef('group:localizedNumberFormatting','Localized Number Formatting')}&#010                    for more info. */
		| "localeFloat"
		/** A float number with locale-based formatting and using currency                    symbol, e.g. <code>$12,345.67</code>.&#010                    See ${isc.DocUtils.linkForRef('group:localizedNumberFormatting','Localized Number Formatting')}&#010                    for more info. */
		| "localeCurrency"
		/** A telephone number.  Uses ${isc.DocUtils.linkForRef('attr:FormItem.browserInputType')} "tel" to                    hint to the device to restrict input.  On most mobile devices that have&#010                    software keyboards, this cause a specialized keyboard to appear which&#010                    only allows entry of normal phone numbers.  When displayed read-only,&#010                    a "phoneNumber" renders as an HTML link with the "tel:" URL scheme,&#010                    which will invoke the native phone dialing interface on most mobile&#010                    devices.  In addition, the CSS style "sc_phoneNumber" is applied.&#010                    <p>&#010                    By default, "phoneNumber" fields do not include validators, however the&#010                    following validator definition would limit to digits, dashes and the&#010                    "+" character:&#010                    xml:&#010                    <p>&#010                    &lt;validator type="regexp" expression="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"&#010                        errorMessage="Phone number should be in the correct format e.g. +#(###)###-##-##" /&gt;&#010                    &#010                        <p>&#010                        or directly in JavaScript:&#010                        <p>&#010 <pre>&#010 {type:"regexp", expression:"^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$", &#010     errorMessage:"Phone number should be in the correct format e.g. +#(###)###-##-##"}&#010 </pre>&#010                    &#010                    &#010                    and adding "#" and "*" to the regular expressions above would allow for&#010                    users to enter special keys sometimes used for extension numbers or&#010                    pauses */
		| "phoneNumber"
		;

	/**
	 * The strategy to use when generating field names - for example, for new formula or summary &#010 fields created using the built-in editors.
	 */
	export type FieldNamingStrategy = 
		/** generate names in the format fieldTypeX, where field type might be          "formulaField" and X is an index specific to the field-type and component instance */
		"simple"
		/** generates a UUID for all generated field names */
		| "uuid"
		;

	/**
	 * Events registerable via ${isc.DocUtils.linkForRef('classMethod:Page.setEvent')}
	 */
	export type PageEvent = 
		/** Fires repeatedly (every 10 ms by default) when the system is idle (i.e.,&#010        not busy running other scripts) after the page is loaded. */
		"idle"
		/** Fires when the page has finished loading. It corresponds to the&#010        browser 'load' event normally handled by window.onload. */
		| "load"
		/** Fires when the page is exited or unloaded. It corresponds to the&#010        browser 'unload' event normally handled by window.onunload. */
		| "unload"
		/** Fires when the browser window is resized by the user. It corresponds&#010        to the browser 'resize' event normally handled by window.onresize. */
		| "resize"
		/** Fires when the left mouse button is pressed on the Page. */
		| "mouseDown"
		/** Fires when the right mouse button is pressed on the Page. */
		| "rightMouseDown"
		/** Fires when the mouse moves on the Page. */
		| "mouseMove"
		/** Fires when the left mouse button released on the Page. */
		| "mouseUp"
		/** Fires when the user clicks the mouse on the Page. */
		| "click"
		/** Fires when the uesr double-clicks on the Page. */
		| "doubleClick"
		/** Fires when the right mouse button is clicked on the page.  If your event handler&#010        for this event returns false, the native browser context menu will be suppressed.<br>&#010        Note: On the Macintosh platform, <code>Command+Click</code> may be used instead&#010        of right-button click to trigger a context menu event.<br>&#010        On the Opera browser, <code>Ctrl+Shift+Click</code> should be used instead of&#010        right-button click. */
		| "showContextMenu"
		/** Fires when a user presses a key on the keyboard. */
		| "keyPress"
		/** Fires when the ${isc.DocUtils.linkForRef('classMethod:Page.getOrientation')} changes due        to browser-window resize or rotation of a mobile device.&#010&#010 see classMethod:Page.setEvent()&#010 see classMethod:Page.clearEvent() */
		| "orientationChange"
		;

	/**
	 * The AutoTest subsystem relies on generating and parsing identifier strings to identify&#010 components on the page. A very common pattern is identifying a specific component&#010 within a list of possible candidates. There are many many cases where this pattern&#010 is used, for example - members in a layout,tabs in a tabset, sections in a section stack.&#010 <P>&#010 In order to make these identifiers as robust as possible across minor&#010 changes to an application, (such as skin changes, minor layout changes, etc) the&#010 system will store multiple pieces of information about a component when generating&#010 an identification string to retrieve it from a list of candidates.&#010 The system has a default strategy for choosing the order in which to look at these&#010 pieces of information but in some cases this can be overridden by setting&#010 a <code>LocatorStrategy</code>.&#010 <p>&#010 By default we use the following strategies in order to identify a component from a list of&#010 candidates:&#010 <UL><li><code>name</code>: Does not apply in all cases but in cases where a specified&#010   <code>name</code> attribute has meaning we will use it - for example for&#010  ${isc.DocUtils.linkForRef('attr:SectionStackSection.name','sections in a section stack')}.</li>&#010 <li><code>title</code>: If a title is specified for the component this may be used&#010   as a legitimate identifier if it is unique within the component - for example&#010   differently titled tabs within a tabset.</li>&#010 <li><code>index</code>: Locating by index is typically less robust than by name or&#010   title as it is likely to be affected by layout changes on the page.</li>&#010 </UL>&#010 If an explicit strategy is specified, that will be used to locate the component if &#010 possible. If no matching component is found using that strategy, we will continue to&#010 try the remaining strategies in order as described above. In other words setting&#010 a locatorStrategy to "title" will skip attempting to find a component by name, and&#010 instead attempt to find by title - or failing that by index.&#010 <P>&#010 Note that we also support matching by type (see ${isc.DocUtils.linkForRef('type:LocatorTypeStrategy')}).&#010 Matching by type is used if we were unable to match by name or title or to disambiguate&#010 between multiple components with a matching title.
	 */
	export type LocatorStrategy = 
		/** Match by name if possible. */
		"name"
		/** Match by title if possible. */
		| "title"
		/** Match by index */
		| "index"
		;

	/**
	 * You can use whatever cursors are valid for your deployment platforms, but keep in mind that&#010 visual representation may vary by browser and OS. See the&#010 <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' target='_blank'>MDN <code>cursor</code> page</a>&#010 for a live demonstration.
	 */
	export type Cursor = 
		/** Use the default arrow cursor for this browser/OS. */
		"Canvas.DEFAULT"
		/** Use the default cursor for this element type in this browser/OS */
		| "Canvas.AUTO"
		/** Use the wait cursor. */
		| "Canvas.WAIT"
		/** Use the hand cursor. */
		| "Canvas.HAND"
		/** Use the "move" (crosshairs) cursor. */
		| "Canvas.MOVE"
		/** Use the 'help' cursor. */
		| "Canvas.HELP"
		/** Use the 'text' (i-beam) cursor. */
		| "Canvas.TEXT"
		/** Use the normal hand pointer that appears when you hover over a link */
		| "POINTER"
		| "arrow"
		| "all-scroll"
		/** Use the 'crosshair' ( + ) cursor. */
		| "crosshair"
		/** Use the column resize cursor (horizontal double-tipped arrow) */
		| "col-resize"
		/** Use the row resize cursor (vertical double-tipped arrow) */
		| "row-resize"
		/** Use the "east resize" cursor. */
		| "e-resize"
		/** Use the "west resize" cursor. */
		| "w-resize"
		/** Use the "north resize" cursor. */
		| "n-resize"
		/** Use the "south resize" cursor. */
		| "s-resize"
		/** Use the "south-east resize" cursor. */
		| "se-resize"
		/** Use the "north-east resize" cursor. */
		| "ne-resize"
		/** Use the "north-west resize" cursor. */
		| "nw-resize"
		/** Use the "south-west resize" cursor. */
		| "sw-resize"
		/** Use the "not-allowed" cursor. */
		| "not-allowed"
		;

	/**
	 * The possible types of sequence handling SmartClient Server can apply.  This refers to the&#010 technique used to obtain the primary keys of the most recent insert, which the product &#010 uses to enable automatic cache synchronization (updating client-side components bound to a &#010 dataSource to reflect updates to that dataSource).  Only applicable to&#010 ${isc.DocUtils.linkForRef('class:DataSourceField','fields')} of ${isc.DocUtils.linkForRef('type:FieldType','type')} "sequence".&#010 <P>
	 */
	export type SequenceMode = 
		/** Use the JDBC 3.0 API "getGeneratedKeys()" to get the most recent                      sequence value.  Obviously, this is only an option for JDBC 3.0+ drivers */
		"jdbcDriver"
		/** Use a database-specific native technique to obtain the most recent                     sequence value.  The actual technique used varies widely depending on&#010                     the vagaries of the underlying database (and sometimes the vagaries of&#010                     particular releases of a database product) */
		| "native"
		/** No automatic attempt is made to retrieve the most recent sequence value.                     You are expected to handle this by providing a  &#010                     ${isc.DocUtils.linkForRef('attr:OperationBinding.cacheSyncOperation','cacheSyncOperation')} that is &#010                     able to return the entire row without needing generated PK values for&#010                     context. For example, a query that uses <code>MAX(pk)</code> would be&#010                     capable of this.  To give a more complex example, say you have a &#010                     sequence value that is retrieved from a legacy system: you could store &#010                     that sequence value in the HTTP session and then have your custom &#010                     <code>cacheSyncOperation</code> reference that session attribute in &#010                     its <code>WHERE</code> clause.  Also note that cacheSyncOperations, &#010                     like any other ${isc.DocUtils.linkForRef('class:OperationBinding','DataSource operation')}, &#010                     can be ${isc.DocUtils.linkForRef('attr:OperationBinding.serverObject','written in Java')} or any &#010                     ${isc.DocUtils.linkForRef('attr:OperationBinding.script','JSR223-compliant scripting language')} -&#010                     you do not have to use SQL */
		| "none"
		;

	/**
	 * Mode of fetching records from the server.&#010 <P>&#010 Generally, "paged" mode should be used unless the maximum number of records is&#010 guaranteed to be small.
	 */
	export type FetchMode = 
		/** All records that match the current filter are fetched.  Sorting is                performed on the client. */
		"basic"
		/** Only requested ranges of records are fetched, with predictive fetch                ahead.  Sorting is performed on the server. */
		| "paged"
		/** All records available from the DataSource are fetched.  Filtering by                search criteria and sorting are both performed on the client. */
		| "local"
		;

	/**
	 * When  relative dates are specified in a date range, typically in a RelativeDateItem or&#010 DateRangeItem, in order to make the range inclusive or exclusive, it is useful to be able &#010 to specify whether we're referring to the start or end of the date in question.
	 */
	export type RelativeDateRangePosition = 
		/** Indicates this relative date should be treated as the start of the specified    logical date. */
		"start"
		/** Indicates this relative date should be treated as the end of the specified logical    date. */
		| "end"
		;

	/**
	 * The method of pooling to employ for ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords','expansionComponents')}.&#010 <P>
	 */
	export type ExpansionComponentPoolingMode = 
		/** auto-created, built-in components are destroyed when record are        ${isc.DocUtils.linkForRef('method:ListGrid.collapseRecord','collapsed')}. */
		"destroy"
		/** all expansion components are deparented from the grid when a record is        ${isc.DocUtils.linkForRef('method:ListGrid.collapseRecord','collapsed')} but are not destroyed.  It is the responsibility&#010        of the developer to handle component destruction */
		| "none"
		;

	/**
	 * What to do when a user hits enter while editing a cell
	 */
	export type EnterKeyEditAction = 
		/** end editing (will save edit values if ${isc.DocUtils.linkForRef('attr:ListGrid.autoSaveEdits')}  is true). */
		"done"
		/** edit the next editable cell in the record */
		| "nextCell"
		/** edit the same field in the next editable record */
		| "nextRow"
		/** edit the first editable cell in next editable record */
		| "nextRowStart"
		;

	/**
	 * How should field width be determined when ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth')} is true?
	 */
	export type AutoFitWidthApproach = 
		/** Size field to fit to the data value(s) contained in the field. */
		"value"
		/** Size field to fit the field title */
		| "title"
		/** Size field to fit either the field title or the data values in the field  (whichever requires more space). */
		| "both"
		;

	/**
	 * HTML elements that make up a complete FormItem (note, not all FormItems use all of &#010 these elements)&#010 <P>
	 */
	export type FormItemElementType = 
		/** The form item as a whole, including the text element, any icons,                      and any hint text for the item. This is the cell containing the &#010                     form item */
		"cell"
		/** The "control" cell containing the text box and picker */
		| "control"
		/** The cell containing the item's picker icon, if it has one */
		| "pickerIcon"
		/** The item's native text box, if it has one */
		| "textBox"
		/** The cell containing the title */
		| "title"
		;

	export type SendMethod = 
		/** GET method (regular URL encoding) */
		"GET"
		/** POST method (form field encoding) */
		| "POST"
		;

	/**
	 * Mode for applying criteria to a tree.
	 */
	export type TreeFilterMode = 
		/** only nodes that actually match criteria are shown.  If a parent does not                 match the criteria, it will not be shown, even if it has children that do&#010                 match the criteria */
		"strict"
		/** parent nodes are kept if they have children which match the criteria,                      or, in a tree with&#010                      ${isc.DocUtils.linkForRef('attr:ResultTree.loadDataOnDemand','loadDataOnDemand:true')}, if they have&#010                      not loaded children yet. */
		| "keepParents"
		;

	/**
	 * Valid display formats for dates.  These strings are the names of formatters which can be&#010 passed to <code>DateUtil.setNormalDisplayFormat()</code> or &#010 <code>DateUtil.setShortDisplayFormat()</code> and will be subsequently used as default long&#010 or short formatters for date objects by SmartClient components.<br>&#010 Default set of valid display formats is as follows:<br><br>
	 */
	export type DateDisplayFormat = 
		/** Default native browser 'toString()' implementation. May vary by browser.<br>&#010 <i>Example</i>: <code>Fri Nov 04 2005 11:03:00 GMT-0800 (Pacific Standard Time)</code> */
		"toString"
		/** Default native browser 'toLocaleString()' implementation. May vary by browser.&#010 <i>Example</i>: <code>Friday, November 04, 2005 11:03:00 AM</code> */
		| "toLocaleString"
		/** Short date in format MM/DD/YYYY.<br> <i>Example</i>: <code>11/4/2005</code> */
		| "toUSShortDate"
		/** Short date with time in format MM/DD/YYYY HH:MM<br> <i>Example</i>: <code>11/4/2005 11:03</code> */
		| "toUSShortDatetime"
		/** Short date in format DD/MM/YYYY.<br> <i>Example</i>: <code>4/11/2005</code> */
		| "toEuropeanShortDate"
		/** Short date with time in format DD/MM/YYYY HH:MM<br> <i>Example</i>: <code>4/11/2005 11:03</code> */
		| "toEuropeanShortDatetime"
		/** Short date in format YYYY/MM/DD.<br> <i>Example</i>: <code>2005/11/4</code> */
		| "toJapanShortDate"
		/** Short date with time in format YYYY/MM/DD HH:MM<br> <i>Example</i>: <code>2005/11/4 11:03</code> */
		| "toJapanShortDatetime"
		/** Date in the format YYYY-MM-DD HH:MM:SS<br> <i>Example</i>: <code>2005-11-04 11:09:15</code> */
		| "toSerializeableDate"
		/** Date in the format &lt;YYYYMMDD&gt;T&lt;HHMMSS&gt;Z <i>Example</i>: <code>20051104T111001Z</code>&#010 <br>&#010 <br>&#010 Note: In addition to these standard formats, custom formatting can be set by passing&#010 a function directly to ${isc.DocUtils.linkForRef('classMethod:DateUtil.setNormalDisplayFormat')} et al. This&#010 function will then be executed whenever the appropriate formatter method is called [eg&#010 ${isc.DocUtils.linkForRef('method:Date.toNormalDate')}], in the scope of the date instance in question.&#010 <p>&#010 Custom formatting can also be applied by passing a ${isc.DocUtils.linkForRef('type:FormatString')} instead of a &#010 <code>DateDisplayFormat</code> string to ${isc.DocUtils.linkForRef('classMethod:DateUtil.setNormalDisplayFormat')} et al. See&#010 the <code>FormatString</code> docs for details. */
		| "toDateStamp"
		;

	/**
	 * The direction in which an item should lay out it's fields.
	 */
	export type DateFieldLayout = 
		/** fields are placed horizontally */
		"horizontal"
		/** fields are placed vertically */
		| "vertical"
		;

	export type Visibility = 
		/** The widget visibility will match that of its parent (usually visible). */
		"Canvas.INHERIT"
		/** The widget will always be visible whether its parent is or not. */
		| "Canvas.VISIBLE"
		/** The widget will always be hidden even when its parent is visible. */
		| "Canvas.HIDDEN"
		;

	/**
	 * An XMLElement represents one complete XML tag, including any subelements contained between&#010 the start and end tags.&#010 <P>&#010 XMLElement is a native object supplied directly by the browser.  The SmartClient-supported&#010 interfaces for this object include methods that take an XMLElement as an argument (such as&#010 ${isc.DocUtils.linkForRef('classMethod:XMLTools.selectNodes')}).  If you want to retrieve XML data and display it in a&#010 SmartClient component, read about ${isc.DocUtils.linkForRef('group:clientDataIntegration','XML Data Binding')}.  To&#010 extract data as JavaScript Objects from XML, see ${isc.DocUtils.linkForRef('classMethod:XMLTools.toJS')}.  Direct&#010 manipulation of XMLElements objects is subject to cross-browser inconsistencies, bugs,&#010 memory leaks and performance issues.
	 */
	export type XMLElement = any;

	/**
	 * While editing a ListGrid, what cell should we edit when the user attempts to navigate&#010  into a cell past the end of an editable row, via a Tab keypress, or a programmatic&#010  saveAndEditNextCell() call?
	 */
	export type RowEndEditAction = 
		/** navigate to the first editable cell in the same record */
		"same"
		/** navigate to the first editable cell in the next record */
		| "next"
		/** complete the edit. */
		| "done"
		/** Leave focus in the cell being edited (take no action) */
		| "stop"
		/** take no action */
		| "none"
		;

	export type DrawShapeCommandType = 
		/** Draws a straight line from the current point to the last "moveto" point. There are no arguments. */
		"close"
		/** Start a new sub-path at a given (x,y) coordinate. The args array for this command type is a two-element array of the X and Y coordinates. */
		| "moveto"
		/** Draw a line from the current point to the given (x,y) coordinate which becomes the new current point. Multiple (x,y) coordinates may be specified to draw a path, in which&#010 case the last point becomes the new current point. The args array for this command type is&#010 an array of one or more Points (two-element arrays of the X and Y coordinates). */
		| "lineto"
		/** Draw a segment of a specified circle. A straight line (the "initial line segment") is drawn from the current point to the start of the circular arc. The args array&#010 for this command type contains 4 values:&#010 <ol start="0">&#010 <li>The center (cx,cy) Point (two-element array) of the circle.</li>&#010 <li>radius</li>&#010 <li>startAngle - Start angle in degrees</li>&#010 <li>endAngle - End angle in degrees</li>&#010 </ol>&#010 Note that the ${isc.DocUtils.linkForExampleId('circletoCommand', '"circleto" Command example')} can be very helpful&#010 when learning how to write "circleto" commands. */
		| "circleto"
		;

	/**
	 * Acceleration effect for animations. Can either be a ratio function or a string.&#010 Ratio functions take a value between 0 and 1 which represents how much of the &#010 animation's duration has elapsed, and return another value between 0 and 1 indicating&#010 how close the animation is to completion. For a completely linear animation, the &#010 function would return the value it was passed. This allows you to bias animations to&#010 [for example] speed up toward the end of the animation.<br>&#010 The following strings are also supported for common ratio bias effects:
	 */
	export type AnimationAcceleration = 
		/** - animation will speed up as time elapses */
		"smoothStart"
		/** - animation will slow down as time elapses */
		| "smoothEnd"
		/** - animation will speed up in the middle */
		| "smoothStartEnd"
		/** - no bias */
		| "none"
		;

	/**
	 * What the ${isc.DocUtils.linkForRef('class:JSONEncoder')} should do when it encounters a circular reference in an object&#010 structure.
	 */
	export type JSONCircularReferenceMode = 
		/** circular references in Arrays will be represented as a null entry, and objects               will have a property with a null value */
		"omit"
		/** leave a string marker, the ${isc.DocUtils.linkForRef('attr:JSONEncoder.circularReferenceMarker')},                 wherever a circular reference is found */
		| "marker"
		/** leave a string marker <i>followed by</i> the path to the first occurrence of               the circular reference from the top of the object tree that was serialized.&#010               This potentially allows the original object graph to be reconstructed. */
		| "path"
		;

	/**
	 * Specifies the layout of the combo box and buttons in a MultiComboBoxItem.
	 */
	export type MultiComboBoxLayoutStyle = 
		/** use a ${isc.DocUtils.linkForRef('class:FlowLayout')}, showing values first, then the text entry area */
		"flow"
		/** use a FlowLayout, with the text entry first and values shown afterwards */
		| "flowReverse"
		/** Use a horizontal layout with the combo box on the right */
		| "horizontal"
		/** Use a horizontal layout with the combo box on the left */
		| "horizontalReverse"
		/** Use a vertical layout */
		| "vertical"
		/** Use a vertical layout with the combo box at the bottom */
		| "verticalReverse"
		;

	/**
	 * Controls whether and when individual items are selected when clicking on a form in editMode.
	 */
	export type SelectItemsMode = 
		/** select an individual item if the item itself it clicked on, but not its title cell */
		"item"
		/** select an individual item if either the item or its title cell is clicked on. NOTE: this mode is not the default because it can be make it difficult to select the form as a whole */
		| "itemOrTitle"
		/** never allow selection of an individual item */
		| "never"
		;

	/**
	 * Settings for whether multiple sections can be in the expanded state simultaneously.
	 */
	export type VisibilityMode = 
		/** Only one section can be expanded at a time. */
		"mutex"
		/** Multiple sections can be expanded at the same time, and will share space. */
		| "multiple"
		;

	/**
	 * Form encoding types - these translate to Form ENCTYPE parameters.
	 */
	export type Encoding = 
		/** normal form encoding ("application/x-www-form-urlencoded") */
		"DynamicForm.NORMAL"
		/** form encoding for forms with INPUT file elements, that is, forms                              that upload files ("multipart/form-data") */
		| "DynamicForm.MULTIPART"
		;

	/**
	 * Type for controlling when a "recategorize" is applied to records being dropped&#010 on a databound component from another databound component.
	 */
	export type RecategorizeMode = 
		/** recategorize is always applied */
		"always"
		/** recategorize if normal checks pass */
		| "checked"
		/** never recategorize */
		| "never"
		;

	/**
	 * An object containing the open state for a treeGrid.&#010 Note that this object is not intended to be interrogated directly, but may be stored &#010 (for example) as a blob on the server for state persistence across sessions.
	 */
	export type TreeGridOpenState = any;

	/**
	 * Controls when primary keys are required for "update" and "remove" server operations, when allowMultiUpdate &#010 has not been explicitly configured on either the ${isc.DocUtils.linkForRef('attr:OperationBinding.allowMultiUpdate','operationBinding.allowMultiUpdate')} or via the server-side API <code>DSRequest.setAllowMultiUpdate()</code>.
	 */
	export type MultiUpdatePolicy = 
		/** having a PK is never required, even for requests from a browser.  Note: dangerous setting &#010 that allows end users to wipe out entire tables */
		"never"
		/** having a PK is required for requests that come from the client or are specifically marked &#010 via dsRequest.setClientRequest(true) */
		| "clientRequest"
		/** having a PK is required for any request that is associated with an RPCManager, which &#010 includes clientRequests and server-created DSRequests where an RPCManager was explicitly provided */
		| "rpcManager"
		/** having a PK is always required no matter what */
		| "always"
		;

	/**
	 * Supported styles of drawing the endpoints of a line
	 */
	export type LineCap = 
		/** Semicircular rounding */
		"round"
		/** Squared-off endpoint */
		| "square"
		/** Square endpoint, stops exactly at the line's end coordinates instead                   of extending 1/2 lineWidth further as "round" and "square" do */
		| "butt"
		;

	/**
	 * Property to govern when the 'over' styling is applied to&#010 a formItemIcon.
	 */
	export type IconOverTrigger = 
		/** Show rollover styling and media when the user is over the icon only */
		"icon"
		/** Show rollover styling and media when the user is over the icon  or over the textBox (or control-table, if present) for this icon. Only has&#010  an effect when ${isc.DocUtils.linkForRef('attr:FormItem.showOver')} is true. */
		| "textBox"
		;

	/**
	 * Supported positioning of the chart Title.
	 */
	export type titleAlign = 
		/** Align to the left of the chart title header */
		"left"
		/** Align centrally in the chart title header */
		| "center"
		/** Align to the right of the chart title header */
		| "right"
		;

	/**
	 * Determines sizing model when sizing / positioning a canvas relative to its&#010 ${isc.DocUtils.linkForRef('attr:Canvas.percentBox','percentBox')}.
	 */
	export type PercentBoxModel = 
		/** use coordinates relative to the {${isc.DocUtils.linkForRef('method:Canvas.getVisibleHeight')},visibleHeight} and width of the other canvas */
		"visible"
		/** use coordinates relative to the {${isc.DocUtils.linkForRef('method:Canvas.getViewportHeight')},viewportHeight} and width of the other canvas */
		| "viewport"
		;

	/**
	 * An object containing the stored presentation information for the fields of a listGrid.&#010 Information contained in a <code>ListGridFieldState</code> object includes the&#010 visibility and widths of the listGrid's fields.<br>&#010 Note that this object is a JavaScript string, and may be stored (for example) as a blob&#010 on the server for state persistence across sessions.
	 */
	export type ListGridFieldState = any;

	/**
	 * Known chart types.  These are visual representations of data, not separate data models,&#010 although some chart types are only capable of showing a single facet of data.&#010 <P>&#010 Concrete charting implementations may use any value for <code>chartType</code> but should&#010 support the provided <code>chartType</code> values for charts that correspond to the visual&#010 presentation described below, to enable easy switching between charting engines.
	 */
	export type ChartType = 
		/** Values represented by area, with stacked values representing multiple                   facet values. This is equivalent to ChartType "Line" with stacking enabled. */
		"Area"
		/** Values represented by vertical columns.  Typically supports stacking to                  represent two facets.  May support simultaneous stacking and clustering for&#010                  3 facets. */
		| "Column"
		/** Values represented by horizontal bars.  Typically supports stacking to                  represent two facets.  May support simultaneous stacking and clustering for&#010                  3 facets. */
		| "Bar"
		/** Values represented by a lines between data points, or stacked areas for                  multiple facets. */
		| "Line"
		/** Values represented on a circular background by a line around the center, or                  stacked areas for multiple facets */
		| "Radar"
		/** Circular chart with wedges representing values.  Multiple or stacked pies                  for multiple facets. */
		| "Pie"
		/** Like a pie chart with a central hole.  Multiple or stacked doughnuts for                  multiple facets. */
		| "Doughnut"
		/** A chart with two continuous numeric axes and up to one discrete facet. */
		| "Scatter"
		/** A chart with two continuous numeric axes and up to one discrete facet                  that also displays values from a third continuous, numeric domain&#010                  represented as the sizes of the data point shapes. */
		| "Bubble"
		/** Like a column chart, except instead of showing stacked or clustered values                  for each position on the horizontal axis, the data values are used together&#010                  with the associated ${isc.DocUtils.linkForRef('attr:FacetChart.endValueMetric')} values to show a series&#010                  of line segments. */
		| "Histogram"
		;

	/**
	 * Determines how Java enums are translated to and from Javascript by the SmartClient server.
	 */
	export type EnumTranslateStrategy = 
		/** Translates to/from a String matching the constant name. This is the default if not set. */
		"name"
		/** Translates to/from a String matching the <code>enum.toString()</code>. */
		| "string"
		/** Translates to/from an integer matching the ordinal number of the constant within &#010   the enumeration */
		| "ordinal"
		/** Translates to/from a Javascript object containing one property for each property defined &#010   within the enum. The constant itself and the ordinal number are included in the JS object.&#010   By default they are called "_constant" and "_ordinal", but this can be overridden with &#010   the ${isc.DocUtils.linkForRef('attr:DataSource.enumOrdinalProperty')} and ${isc.DocUtils.linkForRef('attr:DataSource.enumConstantProperty')}&#010   properties */
		| "bean"
		;

	/**
	 * Position of a ${isc.DocUtils.linkForRef('method:ListGrid.recordDrop')} operation with respect to the target record.
	 */
	export type RecordDropPosition = 
		/** User dropped directly onto the record */
		"ListGrid.OVER"
		/** User dropped before the record */
		| "ListGrid.BEFORE"
		/** User dropped after the record */
		| "ListGrid.AFTER"
		/** Drop position is not over a record */
		| "ListGrid.NONE"
		;

	/**
	 * Supported positioning of the chart Legend.
	 */
	export type legendAlign = 
		/** Align to the left of the legend section */
		"left"
		/** Align centrally in the legend section */
		| "center"
		/** Align to the right of the legend section */
		| "right"
		;

	/**
	 * Policy for whether resize bars are shown on members by default.
	 */
	export type LayoutResizeBarPolicy = 
		/** resize bars are only shown on members marked                 ${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar','showResizeBar:true')} */
		"marked"
		/** resize bars are shown on all resizable members that are not explicitly marked              showResizeBar:false, except the last member.  Appropriate for a&#010              ${isc.DocUtils.linkForRef('type:LayoutPolicy')} of "fill" (VLayout, HLayout) since the overall space will&#010              always be filled. */
		| "middle"
		/** resize bars are shown on all resizable members that are not explicitly marked              showResizeBar:false, including the last member.  Can be appropriate for a&#010              ${isc.DocUtils.linkForRef('type:LayoutPolicy')} of "none" (VStack, HStack) since the overall size of the&#010              layout is dictated by it's member's sizes. */
		| "all"
		/** resize bars are not shown even if members are marked with                 ${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar','showResizeBar:true')} */
		| "none"
		;

	export type DrawPosition = 
		/** insert before the target element */
		"beforeBegin"
		/** insert as the target element's first child */
		| "afterBegin"
		/** insert as the target element's last child */
		| "beforeEnd"
		/** insert after the target element */
		| "afterEnd"
		/** replace the target element */
		| "replace"
		;

	/**
	 * Appearance for a SelectItem that allows multiple selection
	 */
	export type MultipleAppearance = 
		/** a drop-down picklist that allows multiple choices by              clicking on a checkbox next to each item */
		"picklist"
		/** a grid that displays all items in-place. Multiple selection is               accomplished by ctrl-click or shift-click. */
		| "grid"
		;

	/**
	 * Navigation direction.
	 */
	export type NavigationDirection = 
		/** Back */
		"back"
		/** Forward */
		| "forward"
		/** none */
		| "none"
		;

	/**
	 * Enum to indicate selection change notification types. Used by&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.reselectOnUpdateNotifications')}
	 */
	export type SelectionNotificationType = 
		/** No selection change notification should fire */
		"none"
		/** ${isc.DocUtils.linkForRef('method:ListGrid.selectionChanged')} should fire but  ${isc.DocUtils.linkForRef('method:ListGrid.selectionUpdated')} should not fire. */
		| "selectionChanged"
		/** ${isc.DocUtils.linkForRef('method:ListGrid.selectionChanged')} and  ${isc.DocUtils.linkForRef('method:ListGrid.selectionUpdated')} should both fire. */
		| "selectionUpdated"
		;

	/**
	 * Possible placements for pop-up choosers, menus, dialogs or other temporary UIs,&#010 which may need to expand to take up additional room for smaller screens.
	 */
	export type PanelPlacement = 
		/** classic placement for menus, pop-up lists and pickers in desktop                     interfaces: near the control that was clicked (a search field,&#010                     ${isc.DocUtils.linkForRef('class:MenuButton')}, etc).  Note: this setting does not apply when there is&#010                     no originating control (such as a dialog that appears due to session&#010                     timeout), in which case centering will generally be used */
		"nearOrigin"
		/** fill the nearest containing panel managed by a device-aware layout such as                    ${isc.DocUtils.linkForRef('class:SplitPane')}, which will generally be equivalent to "fillScreen" for a&#010                    ${isc.DocUtils.linkForRef('classAttr:Browser.isHandset','handset-sized device')}.  Note: this setting does not&#010                    apply if there is no clear container for the component originating the UI,&#010                    in which case, "fillScreen" will generally be used. */
		| "fillPanel"
		/** fill the entire screen */
		| "fillScreen"
		/** fill the bottom half of the screen.  This is the default behavior on iOS6/7                     for plain HTML &lt;select&gt;, but note that native apps rarely use&#010                     this interface for picking from lists and it is not generally recommended. */
		| "halfScreen"
		/** this setting disables all panelPlacement sizing and positioning logic.                     Explicitly specified size and positioning will be used. */
		| "none"
		;

	/**
	 * Criteria for selecting only a matching set of records from a DataSource.  Criteria can&#010 be applied on the client and server.  Unless configured otherwise, criteria will generally&#010 be applied client-side by ${isc.DocUtils.linkForRef('class:ResultSet')}s via ${isc.DocUtils.linkForRef('method:ResultSet.applyFilter')}.  &#010 <P>&#010 Client- and server-side systems built into SmartClient understand two criteria formats by&#010 default: simple key-value pairs (Criteria) or the ${isc.DocUtils.linkForRef('object:AdvancedCriteria')} format.  &#010 <P>&#010 &#010 Simple key-value Criteria are represented via a JavaScript Object where each property&#010 specifies the name and required value for a field.  Multiple legal values for a field can be&#010 provided as an Array.  For example:&#010 <pre>&#010 var criteria = {&#010    field1 : "value1",&#010    field2 : ["value2", "value3"]&#010 }&#010 </pre>&#010 Would select all records where field1 has value "value1" and where field2 has <i>either</i>&#010 "value2" or "value3".&#010 &#010 <P>&#010 Use ${isc.DocUtils.linkForRef('classMethod:DataSource.combineCriteria')} to combine two Criteria objects (including Criteria and&#010 AdvancedCriteria) or ${isc.DocUtils.linkForRef('classMethod:DataSource.convertCriteria')} to convert simple Criteria to the&#010 AdvancedCriteria format.&#010 <P>&#010 &#010 When writing custom client and server-side filtering logic, criteria must be a JavaScript&#010 Object but the properties of that Object can contain whatever data you want.  &#010 &#010 When sent to the SmartClient server, the Java representation of the criteria is described&#010 ${isc.DocUtils.linkForRef('attr:RPCRequest.data','here')}.  When sent to other servers, the&#010 ${isc.DocUtils.linkForRef('type:DSProtocol','operationBinding.dataProtocol')} affects the format.
	 */
	export type Criteria = any;

	/**
	 * Possible values for the state of ListGrid groups when groupBy is called
	 */
	export type GroupStartOpen = 
		/** open all groups */
		"all"
		/** open the first group */
		| "first"
		/** start with all groups closed */
		| "none"
		;

	/**
	 * The type of date/time editing style to use when editing an event.
	 */
	export type DateEditingStyle = 
		/** allows editing of the logical start and end dates of the event */
		"date"
		/** allows editing of both date and time */
		| "datetime"
		/** allows editing of the time portion of the event only */
		| "time"
		;

	export type StandardControlGroup = 
		/** ${isc.DocUtils.linkForRef('attr:RichTextEditor.fontControls','Font controls')} */
		"fontControls"
		/** ${isc.DocUtils.linkForRef('attr:RichTextEditor.formatControls','Text formatting controls')} */
		| "formatControls"
		/** ${isc.DocUtils.linkForRef('attr:RichTextEditor.styleControls','Text styling controls')} */
		| "styleControls"
		/** ${isc.DocUtils.linkForRef('attr:RichTextEditor.colorControls','Color controls')} */
		| "colorControls"
		/** ${isc.DocUtils.linkForRef('attr:RichTextEditor.bulletControls','HTML list controls')} */
		| "bulletControls"
		;

	/**
	 * A standard XPath expression as a string. To learn about XPath, try the following search:&#010 <a href="http://www.google.com/search?q=xpath+tutorial" target="_blank"&#010 >http://www.google.com/search?q=xpath+tutorial</a>
	 */
	export type XPathExpression = any;

	/**
	 * Possible values to change the behavior of how data will fill the ListGrid.
	 */
	export type Autofit = 
		/** expand vertically to accommodate records. */
		"vertical"
		/** expand horizontally to accommodate fields. */
		| "horizontal"
		/** expand horizontally and vertically to accommodate content. */
		| "both"
		;

	/**
	 * A ValueMap defines the set of legal values for a field, and optionally allows you to provide&#010 a mapping from stored values to values as seen by the end user.&#010 <P>&#010 A valueMap can be specified as either an Array of legal values, or as an ${isc.DocUtils.linkForRef('type:Object')}&#010 where each property maps a stored value to a user-displayable value.  See&#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.valueMap')} for how to express a ValueMap in&#010 ${isc.DocUtils.linkForRef('group:componentXML','Component XML')}.&#010 <P>&#010 A ValueMap can be entirely static or entirely dynamic, with many options in between.  For&#010 example, a ValueMap may be:&#010 <ul>&#010 <li> statically defined in a JavaScript or XML file.  Such a valueMap changes only when&#010 application code is upgraded.&#010 <li> generated dynamically by server code when the application first loads, for example,&#010 by generating JavaScript or XML dynamically in a .jsp or .asp file.  Such a valueMap may be&#010 different for each session and for each user.&#010 <li> loaded on demand from a DataSource, via the&#010 ${isc.DocUtils.linkForRef('attr:PickList.optionDataSource','optionDataSource')} property, or via a call to&#010 ${isc.DocUtils.linkForRef('method:DataSource.fetchData')} where a valueMap is derived dynamically from the returned data&#010 (see ${isc.DocUtils.linkForRef('method:DataSource.fetchData')} for an example).  Such a valueMap may be updated at any&#010 time, for example, every time the user changes a related field while editing data.&#010 </ul>&#010 See also the ${isc.DocUtils.linkForRef('group:smartArchitecture','SmartClient Architecture Overview')} to understand&#010 the best architecture from a performance and caching perspective.
	 */
	export type ValueMap = any;

	/**
	 * Different styles of selection that a list, etc. might support
	 */
	export type SelectionStyle = 
		/** don't select at all */
		"Selection.NONE"
		/** select only one item at a time */
		| "Selection.SINGLE"
		/** select one or more items */
		| "Selection.MULTIPLE"
		/** select one or more items as a toggle           so you don't need to hold down control keys to select &#010                                  more than one object */
		| "Selection.SIMPLE"
		;

	/**
	 * Interface to use for showing and editing the ${isc.DocUtils.linkForRef('attr:FilterBuilder.topOperator','top-level operator')} &#010 of a FilterBuilder.
	 */
	export type TopOperatorAppearance = 
		/** radio buttons appear at the top of the form */
		"radio"
		/** a SelectItem appears with a "bracket" spanning all top-level clauses, exactly the same appearance used for showing&#010 ${isc.DocUtils.linkForRef('attr:FilterBuilder.showSubClauseButton','subClauses')}, if enabled. */
		| "bracket"
		/** each line in the FilterBuilder is a top-level item, with a SelectItem shown on the left that allows the user to choose between the main operator in force (either "and"&#010 or "or", depending on the setting of topOperator) and "and not". */
		| "inline"
		/** no interface is shown.  The top-level operator is expected to be shown to the user outside the FilterBuilder, and, if editable, ${isc.DocUtils.linkForRef('method:FilterBuilder.setTopOperator')}&#010 should be called to update it */
		| "none"
		;

	/**
	 * When discovering a tree, the scanMode determines how to scan for the childrenProperty&#010 "node": take each node individually&#010 "branch": scan direct siblings as a group, looking for best fit&#010 "level": scan entire tree levels as a group, looking for best fit
	 */
	export type ScanMode = 
		/** take each node individually */
		"node"
		/** scan direct siblings as a group, looking for best fit */
		| "branch"
		/** scan entire tree levels as a group, looking for best fit */
		| "level"
		;

	/**
	 * An event that triggers title editing in a TabSet.
	 */
	export type TabTitleEditEvent = 
		/** Start editing when the user single-clicks a tab title */
		"click"
		/** Start editing when the user double-clicks a tab title */
		| "doubleClick"
		;

	/**
	 * Policy controlling how the window will manage content within its body.
	 */
	export type ContentLayoutPolicy = 
		/** Window does not try to size members at all on either axis.  Window body defaults to&#010 a Canvas if not autosizing.  Otherwise a Layout is used with policies on both axes set&#010 to ${isc.DocUtils.linkForRef('type:LayoutPolicy')} "none".&#010NONE: "none", // NOTE: constant declared by Canvas */
		"Window.NONE"
		/** Window body defaults to VLayout behavior.  (Body is actually just a Layout with &#010 ${isc.DocUtils.linkForRef('attr:Layout.vertical')}: true.)&#010VERTICAL: "vertical", // NOTE: constant declared by Canvas */
		| "Window.VERTICAL"
		/** Window body defaults to HLayout behavior.  (Body is actually just a Layout with &#010 ${isc.DocUtils.linkForRef('attr:Layout.vertical')}: false.)&#010HORIZONTAL: "horizontal" // NOTE: constant declared by Canvas */
		| "Window.HORIZONTAL"
		;

	/**
	 * One of the supported formats for data-export.  If you are doing a &#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData','client export')} to one of the native spreadsheet&#010 formats (xls or ooxml), we also export ${isc.DocUtils.linkForRef('object:Hilite','hilite-based')} coloring.  So, if&#010 Hilites are causing a particular cell to be rendered as green text on a blue background, &#010 the corresponding cell in the exported spreadsheet document will also be colored that way.
	 */
	export type ExportFormat = 
		/** Export data as XML records */
		"xml"
		/** Export data as JSON objects */
		| "json"
		/** Export data in comma-separated format */
		| "csv"
		/** Export data in native Microsoft Excel 97 format */
		| "xls"
		/** Export data in native Microsoft Excel 2007 format (also called XLSX) */
		| "ooxml"
		;

	export type Orientation = 
		/** members laid out vertically */
		"Layout.VERTICAL"
		/** members laid out horizontally */
		| "Layout.HORIZONTAL"
		;

	/**
	 * String specifying effect to apply during an animated show or hide.
	 */
	export type animateShowEffectId = 
		/** content slides into or out of view as the widget grows or shrinks */
		"slide"
		/** content is revealed or wiped as the widget grows or shrinks */
		| "wipe"
		/** widget's opacity smoothly fades into or out of view */
		| "fade"
		/** widget moves into position from offscreen */
		| "fly"
		;

	/**
	 * An autoChild is an automatically generated subcomponent that a component creates to&#010 handle part of its presentation or functionality.  An example is the Window component and&#010 its subcomponent the "header".&#010 <P>&#010 See ${isc.DocUtils.linkForRef('group:autoChildUsage','Using AutoChildren')} for more information.
	 */
	export type AutoChild = any;

	/**
	 * Enum used within the ${isc.DocUtils.linkForRef('class:FilterBuilder')} class to indicate the role of a particular &#010 value-field form item within a filter clause.
	 */
	export type ValueItemType = 
		/** This is the single form item that will populate the generated   ${isc.DocUtils.linkForRef('attr:Criterion.value')} for this clause. This applies for operators with&#010  ${isc.DocUtils.linkForRef('attr:Operator.valueType')} of <code>"fieldType"</code> or <code>"custom"</code>. */
		"value"
		/** This is the single form item that will populate the generated   ${isc.DocUtils.linkForRef('attr:Criterion.value')} for ${isc.DocUtils.linkForRef('attr:Operator.valueType')} of <code>"fieldName"</code>. */
		| "name"
		/** Indicates this item will generate the lower-bound value (or "start") when generating  criteria with ${isc.DocUtils.linkForRef('attr:Operator.valueType')} <code>"valueRange"</code>. */
		| "start"
		/** Indicates this item will generate the higher-bound value (or "end") when generating  criteria with ${isc.DocUtils.linkForRef('attr:Operator.valueType')} <code>"valueRange"</code>. */
		| "end"
		;

	/**
	 * Visual Builder's ApplicationMode determines the behavior of the visual components in the &#010 application you are building
	 */
	export type ApplicationMode = 
		/** Components behave as they would in the running application; clicking                        a component in the visual design window will cause the response an &#010                       end-user would expect */
		"live"
		/** Components have special design-time behavior layered on top of                        ordinary run-time behavior; clicking a component in the visual design &#010                       window will cause the response an application builder would expect, &#010                       if any such special behavior is defined for that component */
		| "edit"
		;

	/**
	 * Strategy for determining whether to rotate the X-axis labels by 90 degrees.
	 */
	export type LabelRotationMode = 
		/** do not rotate labels */
		"never"
		/** rotate labels if needed in order to make them legible and non-overlapping */
		| "auto"
		/** always rotate labels */
		| "always"
		;

	/**
	 * Specifies the starting point of a move knob with respect to its draw item. The move knob is&#010 positioned relative to the move knob point at the ${isc.DocUtils.linkForRef('attr:DrawItem.moveKnobOffset')}.
	 */
	export type MoveKnobPoint = 
		/** Top Left corner */
		"TL"
		/** Top Right corner */
		| "TR"
		/** Bottom Left corner */
		| "BL"
		/** Bottom Right corner */
		| "BR"
		;

	/**
	 * The method of component-pooling to employ for ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','recordComponents')}.&#010 <P>
	 */
	export type RecordComponentPoolingMode = 
		/** components are destroyed when the record is not being rendered.  Best        for large datasets where embedded components differ greatly per record. */
		"viewport"
		/** components are ${isc.DocUtils.linkForRef('method:Canvas.clear','clear()ed')} when not in the viewport, but        stay with a record until the record is dropped from cache.  Best for guaranteed&#010        small datasets. */
		| "data"
		/** components are pooled and will be passed to       ${isc.DocUtils.linkForRef('method:ListGrid.updateRecordComponent','updateRecordComponent()')} with the&#010       <code>recordChanged</code> parameter set to true.  Best for large datasets where&#010       embedded components are uniform across different records and can be efficiently&#010       reconfigured to work with a new record */
		| "recycle"
		;

	/**
	 * ListGrids format data for viewing and editing based on the <i>type</i> attribute of the&#010 field.  This table describes how the ListGrid deals with the various built-in types.
	 */
	export type ListGridFieldType = 
		/** Simple text rendering for view.  For editing a text entry field is shown. If the length of the field (as specified by the ${isc.DocUtils.linkForRef('attr:DataSourceField.length')}&#010 attribute) is larger than the value specified by ${isc.DocUtils.linkForRef('attr:ListGrid.longTextEditorThreshold')}, a&#010 text input icon is shown that, when clicked on (or field is focused in) opens a larger&#010 editor that expands outside the boundaries of the cell (textarea by default, but&#010 overrideable via ${isc.DocUtils.linkForRef('attr:ListGrid.longTextEditorType')}). */
		"text"
		/** For viewing and editing a checkbox is shown with a check mark for the <code>true</code> value and no check mark for the <code>false</code> value. This behavior&#010 may be suppressed by setting ${isc.DocUtils.linkForRef('attr:ListGridField.suppressValueIcon')} for the field. See&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} for customization. */
		| "boolean"
		/** A whole number, e.g. <code>123</code>. Consider setting ${isc.DocUtils.linkForRef('attr:ListGridField.editorType','editorType')} to use a ${isc.DocUtils.linkForRef('class:SpinnerItem')}. */
		| "integer"
		/** A floating point (decimal) number, e.g. <code>1.23</code>.  Consider setting ${isc.DocUtils.linkForRef('attr:ListGridField.editorType','editorType')} to use a ${isc.DocUtils.linkForRef('class:SpinnerItem')}. */
		| "float"
		/** Field value should be a <code>Date</code> instance representing a logical date, with no time of day information.  See ${isc.DocUtils.linkForRef('group:dateFormatAndStorage')} for&#010 details of the logical date type and how it is represented and manipulated.&#010 <P>&#010 Dates will be formatted using ${isc.DocUtils.linkForRef('attr:ListGridField.dateFormatter','ListGridField.dateFormatter')}&#010 if specified, otherwise&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.dateFormatter','ListGrid.dateFormatter')}.&#010 If both these attributes are unset, dates are formatted&#010 using the standard ${isc.DocUtils.linkForRef('classMethod:DateUtil.setShortDisplayFormat','short display format')} for dates.&#010 <P>&#010 For editing, by default a ${isc.DocUtils.linkForRef('class:DateItem')} is used with ${isc.DocUtils.linkForRef('attr:DateItem.useTextField')} set&#010 to true, providing textual date entry plus a pop-up date picker. The&#010 ${isc.DocUtils.linkForRef('attr:DateItem.dateFormatter','dateFormatter')} and ${isc.DocUtils.linkForRef('attr:DateItem.inputFormat','inputFormat')}&#010 for the editor will be picked up from the ListGridField, if specified. */
		| "date"
		/** Field value should be a <code>Date</code> instance representing a logical time, meaning time value that does not have a specific day and also has no timezone.  See&#010 ${isc.DocUtils.linkForRef('group:dateFormatAndStorage')} for details of the logical time type and how it is&#010 represented and manipulated.&#010 <P>&#010 Times will be formatted using ${isc.DocUtils.linkForRef('attr:ListGridField.timeFormatter','ListGridField.timeFormatter')}&#010 if specified,&#010 otherwise ${isc.DocUtils.linkForRef('attr:ListGrid.timeFormatter','ListGrid.timeFormatter')}.&#010 <P>&#010 If both these attributes are unset, times are formatted using the standard&#010 ${isc.DocUtils.linkForRef('classAttr:Time.shortDisplayFormat','short display format')} for times.&#010 <P>&#010 For editing, by default a ${isc.DocUtils.linkForRef('class:TimeItem')} is used. The&#010 ${isc.DocUtils.linkForRef('attr:TimeItem.timeFormatter','timeFormatter')} for the editor will be picked up from&#010 the ListGridField, if specified. */
		| "time"
		/** Field value should be a <code>Date</code> instance representing a specific date and time value.  See ${isc.DocUtils.linkForRef('group:dateFormatAndStorage')} for details of the&#010 datetime type and how it is represented and manipulated.&#010 <P>&#010 Dates will be formatted using ${isc.DocUtils.linkForRef('attr:ListGridField.dateFormatter','ListGridField.dateFormatter')}&#010 if specified, otherwise&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.datetimeFormatter','ListGrid.datetimeFormatter')}.&#010 If both these attributes are unset, dates are formatted&#010 using the standard ${isc.DocUtils.linkForRef('classMethod:DateUtil.setShortDatetimeDisplayFormat','short display format')} for&#010 datetime values.&#010 <P>&#010 For editing, by default a ${isc.DocUtils.linkForRef('class:DateTimeItem')} is used, providing textual date entry plus&#010 a pop-up date picker.  The ${isc.DocUtils.linkForRef('attr:DateItem.dateFormatter','dateFormatter')} and&#010 ${isc.DocUtils.linkForRef('attr:DateItem.inputFormat','inputFormat')} for the editor will be picked up from the&#010 ListGridField, if specified. */
		| "datetime"
		/** Same as <code>text</code> */
		| "sequence"
		/** Renders a clickable html link (using an HTML anchor tag: &lt;A&gt;). The target URL is the value of the field, which is also the default display value.  You&#010 can override the display value by setting ${isc.DocUtils.linkForRef('attr:ListGridRecord.linkText')} or&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.linkText')}.&#010 <P>&#010 Clicking the link opens the URL in a new window by default.  To change this behavior,&#010 you can set <code>field.target</code>, which works identically to the "target"&#010 attribute on an HTML anchor (&lt;A&gt;) tag.  See ${isc.DocUtils.linkForRef('attr:ListGridField.target')} for more&#010 information.&#010 <P>&#010 In inline edit mode, this type works like a text field.&#010 <P>&#010 To create a link not covered by this feature, consider using&#010 ${isc.DocUtils.linkForRef('method:ListGridField.formatCellValue')} along with ${isc.DocUtils.linkForRef('method:Canvas.linkHTML')}, or simply&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getCellStyle','styling the field')} to look like a link, and providing&#010 interactivity via ${isc.DocUtils.linkForRef('method:ListGridField.recordClick','field.recordClick()')}. */
		| "link"
		/** Renders a different image in each row based on the value of the field.  If this URL is not absolute, it is assumed to be relative to&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.imageURLPrefix')} if specified. The size of the image is controlled by&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.imageSize')}, ${isc.DocUtils.linkForRef('attr:ListGridField.imageWidth')},&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.imageHeight')} (and by the similarly-named global default&#010 attributes on the ListGrid itself).&#010 <P>&#010 You can also specify the following attributes on the field: <code>activeAreaHTML</code>, and&#010 <code>extraStuff</code> - these are passed to ${isc.DocUtils.linkForRef('method:Canvas.imgHTML')} to generate the&#010 final URL.&#010 <P>&#010 Note if you want to display icons <b>in addition to</b> the normal cell value, you&#010 can use ${isc.DocUtils.linkForRef('attr:ListGridField.valueIcons','valueIcons')} instead. */
		| "image"
		/** Shows ${isc.DocUtils.linkForRef('attr:ListGridField.icon','field.icon')} in every cell, and also in the header.  Useful for a field that is used as a button, for example, launches a detail&#010 window or removes a row.  Implement a ${isc.DocUtils.linkForRef('method:ListGridField.recordClick','field.recordClick')}&#010 to define a behavior for the button.&#010 <P>&#010 NOTE: for a field that shows different icons depending on the field value, see&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.valueIcons')}.&#010 <P>&#010 <code>type:"icon"</code> also defaults to a small field width, accommodating just the icon&#010 with padding, and to a blank header title, so that the header shows the icon only.&#010 <P>&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.iconWidth','field.iconWidth')} and related properties configure&#010 the size of the icon both in the header and in body cells.&#010 <P>&#010 If you want the icon to appear only in body cells and not in the header, set&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.cellIcon','field.cellIcon')} instead, leaving field.icon null. */
		| "icon"
		/** For viewing, the grid renders a 'view' icon (looking glass) followed by a 'download' icon and then the name of the file is displayed in text.  If the user clicks the&#010 'view' icon, a new browser window is opened and the file is streamed to that browser&#010 instance, using ${isc.DocUtils.linkForRef('method:DataSource.viewFile')}.  For images and other file types with&#010 known handlers, the content is typically displayed inline - otherwise the browser will&#010 ask the user how to handle the content.  If the download icon is clicked,&#010 ${isc.DocUtils.linkForRef('method:DataSource.downloadFile')} is used to cause the browser to show a "save" dialog.&#010 There is no inline editing mode for this field type. */
		| "binary"
		/** Same as <code>binary</code> */
		| "imageFile"
		/** Show a calculated summary based on other field values within the  current record. See ${isc.DocUtils.linkForRef('attr:ListGridField.recordSummaryFunction')} for more information */
		| "summary"
		/** Fields of this type can contain any data value and have no default  formatting or validation behavior. This is useful as the &#010 ${isc.DocUtils.linkForRef('attr:SimpleType.inheritsFrom','parent type')} for SimpleTypes&#010 where you do not want any of the standard validation or formatting logic&#010 to be inherited from the standard built-in types. */
		| "any"
		/** An integer number with locale-based formatting, e.g. <code>12,345,678</code>. See ${isc.DocUtils.linkForRef('group:localizedNumberFormatting','Localized Number Formatting')}&#010 for more info. */
		| "localeInt"
		/** A float number with locale-based formatting, e.g. <code>12,345.67</code>. See ${isc.DocUtils.linkForRef('group:localizedNumberFormatting','Localized Number Formatting')}&#010 for more info. */
		| "localeFloat"
		/** A float number with locale-based formatting and using currency symbol, e.g. <code>$12,345.67</code>.&#010 See ${isc.DocUtils.linkForRef('group:localizedNumberFormatting','Localized Number Formatting')}&#010 for more info. */
		| "localeCurrency"
		/** A telephone number.  Uses ${isc.DocUtils.linkForRef('attr:FormItem.browserInputType')} "tel" to hint to the device to restrict input.  On most mobile devices that have&#010 software keyboards, this cause a specialized keyboard to appear which&#010 only allows entry of normal phone numbers.  When displayed read-only,&#010 a "phoneNumber" renders as an HTML link with the "tel:" URL scheme,&#010 which will invoke the native phone dialing interface on most mobile&#010 devices.  In addition, the CSS style "sc_phoneNumber" is applied.&#010 <p>&#010 By default, "phoneNumber" fields do not include validators, however the&#010 following validator definition would limit to digits, dashes and the&#010 "+" character:&#010 xml:&#010 <p>&#010     &lt;validator type="regexp" expression="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"&#010         errorMessage="Phone number should be in the correct format e.g. +#(###)###-##-##" /&gt;&#010     &#010 <p>&#010 or directly in JavaScript:&#010 <p>&#010 <pre>&#010 {type:"regexp", expression:"^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$", &#010     errorMessage:"Phone number should be in the correct format e.g. +#(###)###-##-##"}&#010 </pre>&#010 &#010 &#010 and adding "#" and "*" to the regular expressions above would allow for&#010 users to enter special keys sometimes used for extension numbers or&#010 pauses */
		| "phoneNumber"
		;

	/**
	 * Object used to specify custom edge sizes or offsets.&#010 Specified as an object where <code>defaultSize</code> will map to the default edge size or &#010 offset for the canvas (${isc.DocUtils.linkForRef('attr:Canvas.edgeSize')}, or ${isc.DocUtils.linkForRef('attr:Canvas.edgeOffset')} and&#010 <code>top</code>, <code>left</code>, <code>right</code> and&#010 <code>bottom</code> will map to the&#010 ${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeTop','edgeTop')}/${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeOffsetTop','edgeOffsetTop')}, &#010 ${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeLeft','edgeLeft')}/${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeOffsetLeft','edgeOffsetLeft')},&#010 ${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeRight','edgeRight')}/${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeOffsetRight','edgeOffsetRight')},&#010 and ${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeBottom','edgeBottom')}/${isc.DocUtils.linkForRef('attr:EdgedCanvas.edgeOffsetBottom','edgeOffsetBottom')}&#010 attributes on the paneContainer respectively. Note that not all these properties have to be&#010 set - if unset standard edge sizing rules will apply.
	 */
	export type EdgeSizes = any;

	/**
	 * An object containing the "view state" information for a listGrid.<br>&#010 This object contains state information reflecting<br>&#010 - ${isc.DocUtils.linkForRef('type:ListGridFieldState')}<br>&#010 - ${isc.DocUtils.linkForRef('type:ListGridSortState')}<br>&#010 - ${isc.DocUtils.linkForRef('type:ListGridSelectedState')}<br>&#010 for the grid.<br>&#010 Note that this object is a JavaScript string, and may be stored (for example) as a blob&#010 on the server for state persistence across sessions.
	 */
	export type ListGridViewState = any;

	/**
	 * An autoTestLocator is an xpath-like string used by the AutoTest subsystem to robustly &#010 identify DOM elements within a SmartClient application.&#010 <P>&#010 Typically AutoTestLocators will not be hand-written - they should be retrieved by a&#010 call to ${isc.DocUtils.linkForRef('classMethod:AutoTest.getLocator')}. Note also that the ${isc.DocUtils.linkForRef('group:debugging','Developer Console')}&#010 has built-in functionality to create and display autoTestLocators for a live app.
	 */
	export type AutoTestLocator = any;

	export type PromptStyle = 
		/** Displays a centered modal prompt with text specified by                 ${isc.DocUtils.linkForRef('attr:RPCRequest.prompt')} */
		"dialog"
		/** Changes the current cursor to the style specified by                 ${isc.DocUtils.linkForRef('attr:RPCRequest.promptCursor')} */
		| "cursor"
		;

	export type ProportionalResizeMode = 
		/** proportional resizing is never used */
		"none"
		/** proportional resizing is always used */
		| "always"
		/** proportional resize is off by default, but holding down one of the ${isc.DocUtils.linkForRef('attr:Canvas.proportionalResizeModifiers')} turns proportional resize on for a given&#010 resize interaction */
		| "modifier"
		/** proportional resize is on by default, but holding down one of the ${isc.DocUtils.linkForRef('attr:Canvas.proportionalResizeModifiers')} turns proportional resize off for a given&#010 resize interaction */
		| "modifierOff"
		;

	/**
	 * A String of CSS that can be added directly to a <code>style</code> attribute.
	 */
	export type CSSText = any;

	export type VerticalAlignment = 
		/** At the top of the container */
		"Canvas.TOP"
		/** Center within container. */
		| "Canvas.CENTER"
		/** At the bottom of the container */
		| "Canvas.BOTTOM"
		;

	export type TreeModelType = 
		/** In this model, each node has an ID unique across the whole tree and a parent ID that points to its parent.  The name of the unique ID property can be specified&#010 via ${isc.DocUtils.linkForRef('attr:Tree.idField')} and the name of the parent ID property can be specified via&#010 ${isc.DocUtils.linkForRef('attr:Tree.parentIdField')}.  The initial set of nodes can be passed in as a list to&#010 ${isc.DocUtils.linkForRef('attr:Tree.data')} and also added as a list later via ${isc.DocUtils.linkForRef('method:Tree.linkNodes')}.&#010 Whether or not a given node is a folder is determined by the value of the property specified&#010 by ${isc.DocUtils.linkForRef('attr:Tree.isFolderProperty')}.&#010 <br><br>&#010 The "parent" modelType is best for integrating with relational storage (because nodes can&#010 map easily to rows in a table) and collections of Beans and is the model used for DataBound&#010 trees. */
		"parent"
		/** In this model, nodes specify their children as a list of nodes.  The property that holds the children nodes is determined by ${isc.DocUtils.linkForRef('attr:Tree.childrenProperty')}.&#010 Nodes are not required to have an ID that is unique across the whole tree (in fact, no ID is&#010 required at all).  Node names (specified by the ${isc.DocUtils.linkForRef('attr:Tree.nameProperty')}, unique within&#010 their siblings, are optional but not required.  Whether or not a given node is a folder is&#010 determined by the presence of the children list (${isc.DocUtils.linkForRef('attr:Tree.childrenProperty')}). */
		| "children"
		;

	/**
	 * Priority levels for log messages
	 */
	export type LogPriority = 
		/** unrecoverable error */
		"Log.FATAL"
		/** error, may be recoverable */
		| "Log.ERROR"
		/** apparent problem, misused API, partial result */
		| "Log.WARN"
		/** significant events in normal operation */
		| "Log.INFO"
		/** diagnostics for developers */
		| "Log.DEBUG"
		;

	/**
	 * Supported styles of connector styles.
	 */
	export type ConnectorStyle = 
		/** Center segment is drawn diagonally between tail connector segments */
		"diagonal"
		/** Center segment is drawn perpendicular to tail connector segments */
		| "rightAngle"
		;

	/**
	 * An object containing the stored sort information for a listGrid.&#010 Note that this object is not intended to be interrogated directly, but may be stored&#010 (for example) as a blob on the server for state persistence across sessions.
	 */
	export type ListGridSortState = any;

	/**
	 * The style of list item marker for a list.
	 */
	export type ListStyleType = 
		/** A filled, black dot (&bull;) */
		"disc"
		/** An unfilled circle (&#9702;) */
		| "circle"
		/** A filled, black square (&#9632;) */
		| "square"
		/** Numbers (1., 2., 3., etc.) */
		| "decimal"
		/** Uppercase Roman numerals (I., II., III., IV., etc.) */
		| "upper-roman"
		/** Lowercase Roman numerals (i., ii., iii., iv., etc.) */
		| "lower-roman"
		/** Uppercase letters (A., B., C., etc.) */
		| "upper-alpha"
		/** Lowercase letters (a., b., c., etc.) */
		| "lower-alpha"
		/** An image used in place of a marker. */
		| "custom-image"
		;

	/**
	 * An enum of time-units available for use with the ${isc.DocUtils.linkForRef('class:RelativeDateItem')},&#010 ${isc.DocUtils.linkForRef('class:TimeItem')} and ${isc.DocUtils.linkForRef('class:Calendar')} widgets.
	 */
	export type TimeUnit = 
		/** a millisecond time-unit */
		"millisecond"
		/** a second time-unit */
		| "second"
		/** a minute time-unit */
		| "minute"
		/** an hour time-unit */
		| "hour"
		/** a day time-unit */
		| "day"
		/** a week time-unit */
		| "week"
		/** a month time-unit */
		| "month"
		/** a quarter (3 month) time-unit */
		| "quarter"
		/** a year time-unit */
		| "year"
		;

	/**
	 * Event that will trigger inline editing.  See ${isc.DocUtils.linkForRef('attr:EditProxy.inlineEditEvent')}.
	 */
	export type InlineEditEvent = 
		/** A single mouse click triggers inline editing */
		"click"
		/** A double click triggers inline editing */
		| "doubleClick"
		/** No mouse event will trigger inline editing, but it can still                            be triggered by a call to ${isc.DocUtils.linkForRef('method:EditProxy.startInlineEditing')}. */
		| "none"
		/** A double click triggers inline editing.  In addition, <i>if                            the widget is selected</i>, starting to type triggers inline editing. */
		| "dblOrKeypress"
		;

	/**
	 * What to do if the user hits escape while editing a cell.
	 */
	export type EscapeKeyEditAction = 
		/** cancels the current edit and discards edit values */
		"cancel"
		/** end editing (will save edit values if ${isc.DocUtils.linkForRef('attr:ListGrid.autoSaveEdits')}  is true). */
		| "done"
		/** exit the editor (edit values will be left intact but not saved). */
		| "exit"
		/** do nothing special when the Escape key is pressed (ie, just ignore it) */
		| "ignore"
		;

	/**
	 * Policy controlling how the Layout will manage member sizes on this axis.&#010 <P>&#010 Note that, by default, Layouts do <i>not</i> automatically expand the size of all members&#010 to match a member that overflows the layout on the breadth axis.  This means that a&#010 ${isc.DocUtils.linkForRef('class:DynamicForm')} or other component that can't shrink beyond a minimum width will &#010 "stick out" of the Layout, wider than any other member and wider than automatically&#010 generated components like resizeBars or sectionHeaders (in a ${isc.DocUtils.linkForRef('class:SectionStack')}).&#010 <P>&#010 This is by design: matching the size of overflowing members would cause expensive redraws&#010 of all members in the Layout, and with two or more members potentially overflowing, could&#010 turn minor browser size reporting bugs or minor glitches in custom components into&#010 infinite resizing loops.&#010 <P>&#010 If you run into this situation, you can either:<ul>&#010 <li>set the overflowing member to ${isc.DocUtils.linkForRef('attr:Canvas.overflow','overflow')}: "auto", so that it&#010 scrolls if it needs more space&#010 <li>set the Layout as a whole to ${isc.DocUtils.linkForRef('attr:Canvas.overflow','overflow')}:"auto", so that the&#010 whole Layout scrolls when the member overflows&#010 <li>define a ${isc.DocUtils.linkForRef('method:Canvas.resized','resized()')} handler to manually update the breadth&#010 of the layout&#010 <li>set ${isc.DocUtils.linkForRef('attr:Layout.minBreadthMember')} to ensure that the available breadth used to&#010 expand all (other) members is artificially increased to match the current breadth of the&#010 <code>minBreadthMember</code> member; the layout will still be overflowed in this case&#010 and the reported size from ${isc.DocUtils.linkForRef('method:Canvas.getWidth')} or ${isc.DocUtils.linkForRef('method:Canvas.getHeight')} won't&#010 change, but all members should fill the visible width or height along the breadth axis&#010 </ul><P>&#010 For the last approach, given the VLayout <code>myLayout</code> and a member <code>&#010 myWideMember</code>, then we could define the following ${isc.DocUtils.linkForRef('method:Canvas.resized','resized()')} handler on <code>myLayout</code>:&#010 &#010 <pre>&#010 resized : function () {&#010     var memberWidth = myWideMember.getVisibleWidth();&#010     this.setWidth(Math.max(this.getWidth(), memberWidth + offset));&#010 }</pre>&#010 where <code>offset</code> reflects the difference in width (due to margins, padding,&#010 etc.) between the layout and its widest member.  In most cases, a fixed offset can&#010 be used, but it can also be computed via the calculation:&#010 <P>&#010 <pre>&#010     myLayout.getWidth() - myLayout.getViewportWidth()&#010 </pre>&#010 in an override of ${isc.DocUtils.linkForRef('method:Canvas.draw','draw()')}&#010 for <code>myLayout</cOde>.  (That calculation is not always valid inside the &#010 ${isc.DocUtils.linkForRef('method:Canvas.resized','resized()')} handler itself.)&#010 <P>&#010 Note: the HLayout case is similar- just substitute height where width appears above.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:Layout.overflow')}.
	 */
	export type LayoutPolicy = 
		/** Layout does not try to size members on the axis at all, merely stacking them (length&#010  axis) and leaving them at default breadth. */
		"Layout.NONE"
		/** Layout sizes members so that they fill the specified size of the layout.  The rules&#010  are:&#010  <ul>&#010  <li> Any component given an initial pixel size, programmatically resized to a specific&#010  pixel size, or drag resized by user action is left at that exact size&#010  <li> Any component that ${isc.DocUtils.linkForRef('attr:Button.autoFit','autofits')} is given exactly the space it&#010  needs, never forced to take up more.&#010  <li> All other components split the remaining space equally, or according to their&#010  relative percentages.&#010  <li> Any component that declares a ${isc.DocUtils.linkForRef('attr:Canvas.minWidth')} or ${isc.DocUtils.linkForRef('attr:Canvas.minHeight')}&#010  will never be sized smaller than that size&#010  <li> Any component that declares a ${isc.DocUtils.linkForRef('attr:Canvas.maxWidth')} or ${isc.DocUtils.linkForRef('attr:Canvas.maxHeight')}&#010  will never be sized larger than that size&#010  </ul>&#010  In addition, components may declare that they have &#010  ${isc.DocUtils.linkForRef('attr:Canvas.canAdaptWidth','adaptive sizing')}, and may coordinate with the Layout to render&#010  at different sizes according to the amount of available space. */
		| "Layout.FILL"
		;

	/**
	 * Possible values for the current pane showing in a ${isc.DocUtils.linkForRef('class:SplitPane')}.  See&#010 ${isc.DocUtils.linkForRef('attr:SplitPane.currentPane')} for details.
	 */
	export type CurrentPane = 
		/** ${isc.DocUtils.linkForRef('attr:SplitPane.navigationPane')} is the most recently shown */
		"navigation"
		/** ${isc.DocUtils.linkForRef('attr:SplitPane.listPane')} is the most recently shown */
		| "list"
		/** ${isc.DocUtils.linkForRef('attr:SplitPane.detailPane')} is the most recently shown */
		| "detail"
		;

	/**
	 * How a component should be embedded within its record or cell
	 */
	export type EmbeddedPosition = 
		/** component should be placed underneath normal record or cell content,        expanding the records.  Expanding records can result in variable height rows,&#010        in which case ${isc.DocUtils.linkForRef('attr:ListGrid.virtualScrolling','virtualScrolling')} should be&#010        enabled. */
		"expand"
		/** component should be placed within the normal area of the record or cell.        Percentage sizes will be treated as percentages of the record and&#010        ${isc.DocUtils.linkForRef('attr:Canvas.snapTo')} positioning settings are also allowed and refer to the&#010        rectangle of the record or cell. Note that for components embedded within cells,&#010        cell align and vAlign will be used if snapTo is unset (so top / left alignment&#010        of cell content will map to snapTo of "TL", etc). */
		| "within"
		;

	/**
	 * Supported regression algorithms for fitting the data points of a scatter plot.
	 */
	export type RegressionLineType = 
		/** linear regression */
		"line"
		/** polynomial regression */
		| "polynomial"
		;

	/**
	 * Method to use for displaying the exported data.
	 */
	export type ExportDisplay = 
		/** Show the Save As dialog and download the file */
		"download"
		/** Show the data in a new browser window */
		| "window"
		/** Return the data for further programmatic processing in the browser */
		| "return"
		;

	/**
	 * ${isc.DocUtils.linkForRef('attr:OperationBinding.dataProtocol')} affects how the data in the DSRequest (${isc.DocUtils.linkForRef('attr:DSRequest.data')})&#010 is sent to the ${isc.DocUtils.linkForRef('attr:DataSource.dataURL')}.  Listed below are the valid values for&#010 ${isc.DocUtils.linkForRef('attr:OperationBinding.dataProtocol')} and their behavior.&#010 <P>&#010 Note that, when using the SmartClient server, data is automatically translated from&#010 JavaScript to Java according to the rules described ${isc.DocUtils.linkForRef('attr:RPCRequest.data','here')};&#010 dataProtocol does not apply and is ignored.&#010 <P>&#010 If you are integrating with a ${isc.DocUtils.linkForRef('class:RestDataSource','REST')} server that requires the more&#010 obscure ${isc.DocUtils.linkForRef('attr:RPCRequest.httpMethod')}s of "PUT", "DELETE" or "HEAD", you can specify these&#010 httpMethod settings via ${isc.DocUtils.linkForRef('attr:OperationBinding.requestProperties')}.  dataProtocol settings&#010 that mention "GET" or "POST" are compatible with these additional HTTP methods as well.&#010 Typical ${isc.DocUtils.linkForRef('attr:DataSource.operationBindings','operationBindings')} for a REST server that uses&#010 "PUT" and "DELETE" are as follows:&#010 <pre>&#010    operationBindings:[&#010       {operationType:"fetch", dataProtocol:"getParams"},&#010       {operationType:"add", dataProtocol:"postParams"},&#010       {operationType:"remove", dataProtocol:"getParams", requestProperties:{httpMethod:"DELETE"}},&#010       {operationType:"update", dataProtocol:"postParams", requestProperties:{httpMethod:"PUT"}}&#010    ],&#010 </pre>
	 */
	export type DSProtocol = 
		/** Data is added to the dataURL, with each property in the data becoming an HTTP parameter,&#010   eg http://service.com/search?keyword=foo */
		"getParams"
		/** Data is POST'd to the dataURL, with each property becoming an HTTP parameter, &#010   exactly as an HTML form would submit them if it had one input field per property in the&#010   data. */
		| "postParams"
		/** Data is serialized as XML via ${isc.DocUtils.linkForRef('method:DataSource.xmlSerialize')} and POST'd as the&#010   HTTP request body with contentType "text/xml". */
		| "postXML"
		/** Data is serialized as XML via ${isc.DocUtils.linkForRef('method:DataSource.xmlSerialize')}, wrapped in a SOAP&#010   envelope, and POST'd as the HTTP request body with contentType "text/xml".  Generally&#010   only used in connection with a ${isc.DocUtils.linkForRef('group:wsdlBinding','WSDL web service')}. */
		| "soap"
		/** dsRequest.data is assumed to be a String set up by ${isc.DocUtils.linkForRef('method:DataSource.transformRequest')}&#010   and is POST'd as the HTTP request body. */
		| "postMessage"
		/** This setting entirely bypasses the SmartClient comm system. Instead of the DataSource sending&#010   an HTTP request to a URL, the developer is expected to implement&#010   ${isc.DocUtils.linkForRef('method:DataSource.transformRequest')} to perform their own custom logic, and then call&#010   ${isc.DocUtils.linkForRef('method:DataSource.processResponse')} to handle the results of this action.&#010   This <code>dataProtocol</code> setting can be used to implement access to in-browser&#010   resources such as HTML5 "localStorage", native APIs available to applications&#010   ${isc.DocUtils.linkForRef('group:mobileDevelopment','packaged as native applications')}, or to implement the &#010   ${isc.DocUtils.linkForRef('group:dsFacade','DataSource Facade pattern')}. */
		| "clientCustom"
		;

	export type CharacterCasing = 
		/** No character translation */
		"TextItem.DEFAULT"
		/** Map characters to uppercase */
		| "TextItem.UPPER"
		/** Map characters to lowercase */
		| "TextItem.LOWER"
		;

	/**
	 * Constants for the standard states for a StatefulCanvas.
	 */
	export type State = 
		/** state when mouse is not acting on this StatefulCanvas */
		"StatefulCanvas.STATE_UP"
		/** state when mouse is down */
		| "StatefulCanvas.STATE_DOWN"
		/** state when mouse is over */
		| "StatefulCanvas.STATE_OVER"
		/** disabled */
		| "StatefulCanvas.STATE_DISABLED"
		;

	/**
	 * Indicates what SmartClient Server will do with a DataSource request if you call&#010 dsRequest.execute() in server code.&#010 <P>&#010 If you use a Java-based persistence layer not provided by SmartClient, such as&#010 EJB or your own custom object model, you don't need to set&#010 <code>dataSource.serverType</code> and should follow the&#010 ${isc.DocUtils.linkForRef('group:serverDataIntegration','integration instructions')}.
	 */
	export type DSServerType = 
		/** Use SmartClient's ${isc.DocUtils.linkForRef('group:sqlDataSource','built-in SQL connectors')} to talk directly&#010 to relational databases. */
		"sql"
		/** Use Hibernate, either using a real mapped bean or by automatically generating a &#010 Hibernate configuration based on a SmartClient DataSource file &#010 (<i>dataSourceID</i>.ds.xml).  See ${isc.DocUtils.linkForRef('group:hibernateIntegration')} for details. */
		| "hibernate"
		/** Use SmartClient's built-in JPA 2.0 connector. */
		| "jpa"
		/** Use SmartClient's built-in JPA 1.0 connector. */
		| "jpa1"
		/** Requests will be delivered to the server and you are expected to write Java code to&#010 create a valid response.  Throws an error if the server side method dsRequest.execute()&#010 is called. This is appropriate if you intend an entirely custom implementation, and you&#010 want an error thrown if there is an attempt to call an operation you have not&#010 implemented. */
		| "generic"
		/** Requests will be delivered to the server and processed as &#010 ${isc.DocUtils.linkForRef('group:fileSource','FileSource operations')}, using directories or other DataSources&#010 which you configure via ${isc.DocUtils.linkForRef('attr:DataSource.projectFileKey')} or ${isc.DocUtils.linkForRef('attr:DataSource.projectFileLocations')} */
		| "projectFile"
		;

	/**
	 * Some interfaces, for example the ${isc.DocUtils.linkForRef('class:FieldPicker','FieldPicker')} and &#010 ${isc.DocUtils.linkForRef('class:HiliteEditor','HiliteEditor')} widgets, can use data from an associated &#010 DataBoundComponent to express live sample values at runtime.
	 */
	export type DefaultSampleRecord = 
		/** Uses the first record in the DataBoundComponent as sample data */
		"first"
		/** Uses the first open leaf-node in the DataBoundComponent as sample data */
		| "firstOpenLeaf"
		;

	/**
	 * When attempting to identify a component from within a list of possible candidates&#010 as described ${isc.DocUtils.linkForRef('type:LocatorStrategy','here')}, if we are unable to find a unique match&#010 by name or title, we will use the recorded "type" of the component to verify&#010 an apparent match.&#010 <P>&#010 By default we check the following properties in order:&#010 <ul><li>Does the Class match?</li>&#010     <li>If this is not a ${isc.DocUtils.linkForRef('classAttr:Class.isFrameworkClass','framework class')}, does the&#010         core framework superclass match?</li>&#010     <li>Does the <code>role</code> match?</li>&#010 </ul>&#010 In some cases an explicit locatorTypeStrategy can be specified to modify this&#010 behavior. As with ${isc.DocUtils.linkForRef('type:LocatorStrategy')}, if we are unable to match using the&#010 specified type strategy we continue to test against the remaining strategies in order - &#010 so if a type strategy of "scClass" was specified but we were unable to find a match&#010 with the appropriate core superclass, we will attempt to match by role.&#010 Possible values are:
	 */
	export type LocatorTypeStrategy = 
		/** Match by class if possible */
		"Class"
		/** Ignore specific class and match by the SmartClient framework superclass. */
		| "scClass"
		/** Ignore class altogether and attempt to match by role */
		| "role"
		/** Don't attempt to compare type in any way */
		| "none"
		;

	/**
	 * Options for how values in the import dataset (for example, the CSV file) are transformed&#010 during import if the field is a ${isc.DocUtils.linkForRef('attr:DataSourceField.foreignKey','foreignKey')} mapped to a &#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.displayField','displayField')}
	 */
	export type FieldImportStrategy = 
		/** The import process expects values in the import dataset to be the real         underlying key values, and performs no transformation */
		"key"
		/** The import process expects values in the import dataset to be display         values, and it will transform them to the corresponding underlying keys */
		| "display"
		/** The import process will attempt to discover the best setting to use, based        on the values in the first record, and use that setting for every remaining record&#010        in the import dataset */
		| "auto"
		;

	/**
	 * One of the supported formats for image export.
	 */
	export type ExportImageFormat = 
		/** Export as PNG */
		"png"
		/** Export as JPEG */
		| "jpeg"
		;

	/**
	 * Boundary type for limiting where contiguous selection (via shift+click or drag selection)&#010 can be applied across ${isc.DocUtils.linkForRef('attr:Facet.selectionBoundary','facets')} or &#010 ${isc.DocUtils.linkForRef('attr:FacetValue.selectionBoundary','facetValues')}.
	 */
	export type SelectionBoundary = 
		/** selection boundary applies to the bottom / right of the cells */
		"after"
		/** selection boundary applies to the top / left of the cells */
		| "before"
		/** selection boundary applies to both edges. */
		| "both"
		;

	export type Direction = 
		/** above */
		"Canvas.UP"
		/** below */
		| "Canvas.DOWN"
		/** to the left of */
		| "Canvas.LEFT"
		/** to the right of */
		| "Canvas.RIGHT"
		;

	/**
	 * when heuristically finding a property that appears to contain child objects,&#010 the ChildrenPropertyMode determines how to chose the property appears to contain child objects
	 */
	export type ChildrenPropertyMode = 
		/** assume the first object or array value we find is the children property */
		"any"
		/** assume the first array we find is the children property, no matter the contents */
		| "array"
		/** assume the first object or array of objects we find is the children property          (don't allow arrays that don't have objects) */
		| "object"
		/** accept only an array of objects as the children property */
		| "objectArray"
		;

	/**
	 * The logical operator to use when combining criteria objects with the &#010 ${isc.DocUtils.linkForRef('classMethod:DataSource.combineCriteria')} method.
	 */
	export type CriteriaCombineOperator = 
		"and"
		| "or"
		;

	/**
	 * Side of a component.
	 */
	export type Side = 
		/** Left side */
		"Canvas.LEFT"
		/** Right side */
		| "Canvas.RIGHT"
		/** Top side */
		| "Canvas.TOP"
		/** Bottom side */
		| "Canvas.BOTTOM"
		;

	/**
	 * An expression in the <a href=http://velocity.apache.org/engine/releases/velocity-1.5/user-guide.html>&#010 Velocity Template Language</a> (VTL).  For more information on SmartClient's Velocity support, &#010 see ${isc.DocUtils.linkForRef('group:velocitySupport','Velocity support')}.&#010 <p>&#010 Note that a <code>VelocityExpression</code> must often evaluate to a particular type of value &#010 to be useful.  For example, ${isc.DocUtils.linkForRef('attr:DataSource.requires')} must evaluate to true or false &#010 (Boolean objects or strings containing those two words), and ${isc.DocUtils.linkForRef('attr:Mail.messageData')} must&#010 evaluate to a Java <code>Map</code> object, or a Java <code>List</code> containing only &#010 <code>Map</code>s.
	 */
	export type VelocityExpression = any;

	/**
	 * Controls how ListGrid record drop events report their&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getRecordDropPosition','dropPosition')}, and where the drop indicator will be displayed&#010 if appropriate.
	 */
	export type RecordDropAppearance = 
		/** When the user drops onto a record, dropPosition will always be "over" */
		"ListGrid.OVER"
		/** When the user drops onto a record, dropPosition will be either   "before" or "after" depending on whether the mouse was over the top or bottom of&#010   the target record */
		| "ListGrid.BETWEEN"
		/** When the user drops onto a record, if the drop occurs centered over the   record, the dropPosition will be reported as "over", otherwise it will be&#010   "before" or "after" depending on whether the mouse was over the top or bottom of the&#010   target record. */
		| "ListGrid.BOTH"
		/** No dropPosition will be reported */
		| "ListGrid.BODY"
		;

	/**
	 * The type of drawing back-end used by a ${isc.DocUtils.linkForRef('class:DrawPane')} to draw its ${isc.DocUtils.linkForRef('attr:DrawPane.drawItems','draw items')}&#010 on screen.&#010&#010 <h3>SVG and bitmap tradeoffs</h3>&#010 <ul style="list-style-type: lower-alpha;">&#010 <li>SVG is best supported in IE9+ and Opera 12.16 and earlier, but may also be used in Chrome,&#010 Opera 15+, Firefox 4+, and Safari.&#010 <li>SVG tends to be higher quality, especially when it comes to text and drawing on high-DPI&#010 displays and mobile devices.&#010 <li>${isc.DocUtils.linkForRef('attr:DrawItem.zIndex')}, ${isc.DocUtils.linkForRef('method:DrawItem.bringToFront')}, and ${isc.DocUtils.linkForRef('method:DrawItem.sendToBack')}&#010 are not supported on iOS devices in bitmap drawing mode due to platform limitations. These&#010 APIs are supported on iOS in SVG drawing mode.&#010 <li>Incremental updates to just a few elements of a drawing are faster in SVG, whereas&#010 whole drawing refreshes are faster in bitmap mode.&#010 <li>Browsers have limits on the maximum dimensions or area of the &lt;canvas&gt; element&#010 used in bitmap drawing. The limits on a &lt;canvas&gt; imposed by the browser translate to&#010 the same limits on the dimensions or area of a <code>DrawPane</code> using bitmap drawing.&#010 Internet Explorer, for example, limits the width and height of a &lt;canvas&gt; to 8192 pixels:&#010 <a href='http://msdn.microsoft.com/en-us/library/ie/ff975062(v=vs.85).aspx' target='_blank'>http://msdn.microsoft.com/en-us/library/ie/ff975062(v=vs.85).aspx</a>; therefore,&#010 in IE using bitmap drawing, a <code>DrawPane</code> can be at most 8192&times;8192 in size.&#010 To make larger drawings, you can either switch to SVG drawing, use multiple <code>DrawPane</code>s,&#010 or enable ${isc.DocUtils.linkForRef('attr:DrawPane.canDragScroll','drag-scrolling')}.&#010 <li>In bitmap drawing, each pixel uses around 4 to 8 bytes of memory. Large bitmap drawings&#010 can therefore use a lot of memory. A 4000&times;2000 bitmap drawing will use around 31 to 61&#010 Megabytes of memory.<br>&#010 Note: To minimize memory use when using bitmap drawing for a large drawing, it may be useful&#010 to employ <a href='http://en.wikipedia.org/wiki/Slicing_(interface_design)' target='_blank'>slicing</a> if&#010 possible. For example, if the drawing is mostly a solid color except for content located at&#010 a few small-area places on screen, a ${isc.DocUtils.linkForRef('class:Canvas')} can be created with the solid background&#010 color and one <code>DrawPane</code> can be created for each content area. Each <code>DrawPane</code>&#010 is ${isc.DocUtils.linkForRef('method:Canvas.addChild','added as a child')} to the <code>Canvas</code>. The ${isc.DocUtils.linkForRef('attr:Canvas.left','left')}&#010 and ${isc.DocUtils.linkForRef('attr:Canvas.top','top')} properties of the <code>DrawPane</code>s are used to absolutely-position&#010 them within the <code>Canvas</code> parent.&#010 </ul>
	 */
	export type DrawingType = 
		/** Use Scalable Vector Graphics (SVG). SVG is a W3C standard supported by IE9+, Chrome, Firefox 4+, Safari, and Opera. */
		"svg"
		/** Use an HTML5 &lt;canvas&gt; element. "bitmap" drawing is supported by IE9+, Chrome, Firefox, Safari, and Opera. */
		| "bitmap"
		/** Use Vector Markup Language (VML). VML is a deprecated vector graphics technology supported only by Internet Explorer 6 through 9. In IE 6, 7, and 8, "vml" drawing is the only&#010 supported drawing back-end. */
		| "vml"
		;

	/**
	 * When ${isc.DocUtils.linkForRef('attr:ListGrid.allowRowSpanning')} is enabled, certain cells may span multiple&#010 rows. In this case, the cell displays the value from the record in the first row.&#010 If the grid is ${isc.DocUtils.linkForRef('attr:ListGrid.canEdit','editable')} (and the&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.canEdit','field is also editable')}), these settings allow the user&#010 to specify what happens to the data when the user edits this cell.&#010 <P>&#010 Note that in this scenario, a user may begin an edit on the row-spanning cell directly&#010 (via double-click for example), or on a cell in another column in any of the rows&#010 spanned by the cell. The appropriate behavior with respect to user-experience and how&#010 the data is manipulated will depend on the application in question. Developers may&#010 of course entirely disable editing for the field via ${isc.DocUtils.linkForRef('attr:ListGridField.canEdit')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.canEditCell')}.&#010 <P>&#010 See also: ${isc.DocUtils.linkForRef('attr:ListGrid.useRowSpanStyling')}
	 */
	export type RowSpanEditMode = 
		/** This setting assumes that only the field-value for the first record  spanned by this cell is significant. In this case the editor will only show for this&#010  cell if the user is editing the first spanned record. If the user initialized the edit&#010  on another spanned row, the editor will not show for this field. */
		"first"
		/** This setting assumes that each row's values are logically separate, so if  a cell spans multiple rows, and a user initializes an edit on some cell in the&#010  second spanned row, the spanning cell will show an editor containing the value for&#010  the second spanned row. This may differ from the value displayed when not&#010  in edit mode (which is derived from the first spanned row by default). This setting may&#010  be useful for developers who which to implement their own logic on how to handle&#010  spanning cell display values and/or edit values (for example by using custom&#010  ${isc.DocUtils.linkForRef('method:ListGridField.formatCellValue','formatting')} and applying custom logic to handle&#010  editing on ${isc.DocUtils.linkForRef('method:ListGridField.editorEnter')} and ${isc.DocUtils.linkForRef('method:ListGridField.editorExit')}). */
		| "each"
		;

	export type FieldAppearance = 
		/** Show in read-only appearance */
		"Validator.READONLY"
		/** Hide field */
		| "Validator.HIDDEN"
		/** Disable field */
		| "Validator.DISABLED"
		;

	/**
	 * what to do if there is more than one possible childrenProperty when using&#010 scanMode "branch" or "level"&#010 "node": continue, but pick childrenProperty on a per-node basis (will detect&#010             mixed) &#010 "highest": continue, picking the childrenProperty that occurred most as the single&#010            choice&#010 "stop": if there's a tie, stop at this level (assume no further children)
	 */
	export type TieMode = 
		/** continue, but pick childrenProperty on a per-node basis (will detect mixed) */
		"node"
		/** continue, picking the childrenProperty that occurred most as the single choice */
		| "highest"
		/** if there's a tie, stop at this level (assume no further children) */
		| "stop"
		;

	/**
	 * Operators that can evaluate a set of criteria and produce a combined result.
	 */
	export type LogicalOperator = 
		/** true if all criteria are true */
		"and"
		/** true if any criteria are true */
		| "or"
		/** true if all criteria are false */
		| "not"
		;

	/**
	 * Possible values for ${isc.DocUtils.linkForRef('attr:Canvas.backgroundRepeat')}.
	 */
	export type BackgroundRepeat = 
		/** Tile the background image horizontally and vertically. */
		"Canvas.REPEAT"
		/** Don't tile the background image at all. */
		| "Canvas.NO_REPEAT"
		/** Repeat the background image horizontally but not vertically. */
		| "Canvas.REPEAT_X"
		/** Repeat the background image vertically but not horizontally. */
		| "Canvas.REPEAT_Y"
		;

	/**
	 * SmartClient supports multiple RPC transports for maximum compatibility and feature richness.&#010 All of transports use HTTP as the underlying protocol, but use different mechanisms for&#010 sending the HTTP request and processing the response.  The transport is typically&#010 auto-selected for by based on the feature being used and the current browser settings.  For&#010 advanced use cases, ${isc.DocUtils.linkForRef('attr:RPCRequest.transport')} and ${isc.DocUtils.linkForRef('classAttr:RPCManager.defaultTransport')} are&#010 exposed as override points.&#010 <p>
	 */
	export type RPCTransport = 
		/** Uses the XMLHttpRequest object to make the request to the server. Note that in some browsers with certain configurations, this transport may not be&#010 available.  See ${isc.DocUtils.linkForRef('group:platformDependencies')} for more information.  This transport is&#010 not useful with file uploads.  Cannot be used to target cross-domain URLs directly. */
		"xmlHttpRequest"
		/** Write a SCRIPT tag into the DOM with a SRC attribute that targets an arbitrary URL.  This transport is the only one that allows direct cross-domain URL&#010 access.  &#010 <P>&#010 For ${isc.DocUtils.linkForRef('attr:RPCRequest.callback')} to work, the server being contacted must support the ability&#010 to generate JavaScript code in the response that will call a JavaScript function generated&#010 by SmartClient.  SmartClient passes the name of the function to call via a URL parameter,&#010 which can be controlled with ${isc.DocUtils.linkForRef('attr:RPCRequest.callbackParam')}.  This callback mechanism is&#010 sometimes called the "JSONP" (JSON with Padding) approach. */
		| "scriptInclude"
		/** Available with SmartClient Server only.  An HTML form is dynamically assembled that targets a hidden IFRAME.  This mechanism is supported on all&#010 browsers and cannot be disabled by end users.  &#010 <P>&#010 If using the SmartClient Server and using &#010 ${isc.DocUtils.linkForRef('group:serverDataIntegration','Server-side data integration')}, the "hiddenFrame" transport&#010 is automatically used for all RPCManager and DataSource requests if the "xmlHttpRequest"&#010 transport is not available.&#010 <P>&#010 Cannot be used to target cross-domain URLs directly. */
		| "hiddenFrame"
		;

	/**
	 * Do we display an arrow for the sorted field ?
	 */
	export type SortArrow = 
		/** Don't show a sort arrow at all. */
		"none"
		/** Display sort arrow in the upper-right corner (above the scrollbar) only. */
		| "corner"
		/** Display sort arrow above each field header only. */
		| "field"
		/** Display sort arrow above each field header AND in corner above scrollbar.BOTH:"both", // NOTE: Canvas establishes this constant */
		| "both"
		;

	/**
	 * Different types of effects for showing dragging behavior.
	 */
	export type DragAppearance = 
		/** No default drag appearance is indicated. Your custom dragging routines should&#010      implement some behavior that indicates that the user is in a dragging situation,&#010      and where the mouse is. */
		"none"
		/** A "drag tracker" object is automatically shown and moved around with the&#010      mouse. This is generally set to an icon that represents what is being dragged. The&#010      default tracker is a 10 pixel black square, but you can customize this icon. This&#010      dragAppearance is not recommended for use with drag resizing or drag moving. */
		| "tracker"
		/** The target object is actually moved, resized, etc. in real time. This is&#010      recommended for drag repositioning, but not for drag resizing of complex objects. */
		| "target"
		/** An outline the size of the target object is moved, resized, etc. with the&#010      mouse. This is recommended for drag resizing, especially for objects that take a&#010      significant amount of time to draw. */
		| "outline"
		;

	/**
	 * Whether the mock data is for a flat grid-like dataset or for a tree.  If "grid" is&#010 specified, text shortcuts that would cause a hierarchy to be created (such as starting a&#010 line with "[+]") will not have special meaning and be considered to be just a normal&#010 data value.
	 */
	export type MockDataType = 
		/** Mock data for a ListGrid */
		"grid"
		/** Mock data for a TreeGrid */
		| "tree"
		;

	/**
	 * Strategies for calculating the FiscalYear within a ${isc.DocUtils.linkForRef('object:FiscalCalendar')} from the&#010 specified ${isc.DocUtils.linkForRef('attr:FiscalCalendar.defaultDate')} and ${isc.DocUtils.linkForRef('attr:FiscalCalendar.defaultMonth')}&#010 If the specified fiscal year date starts in one calendar year and ends in the next.
	 */
	export type FiscalYearMode = 
		/** The fiscalYear value for the date range will match the calendar year  in which the period ends. For example if the defaultDate and defaultMonth were set&#010  to represent April 1st, the fiscal year starting on April 1st 2020 would end on&#010  April 1st 2021. Setting the fiscalYearMode to <code>end</code> would mean the&#010  fiscalYear value for this block would be 2021. */
		"end"
		/** The fiscalYear value for the date range will match the calendar year  in which the period starts. For example if the defaultDate and defaultMonth were set&#010  to represent April 1st, the fiscal year starting on April 1st 2020 would end on&#010  April 1st 2021. Setting the fiscalYearMode to <code>start</code> would mean the&#010  fiscalYear value for this block would be 2020. */
		| "start"
		;

	/**
	 * Properties that refer to images by URL, such as ${isc.DocUtils.linkForRef('attr:Img.src')} and ${isc.DocUtils.linkForRef('attr:Button.icon')}, are&#010 specially interpreted in SmartClient to allow for simpler and more uniform image URLs,&#010 and to allow applications to be restructured more easily.&#010 <P>&#010 <b>the application image directory</b>&#010 <P>&#010 When specifying URLs to image files via SmartClient component properties such as&#010 ${isc.DocUtils.linkForRef('attr:StretchImg.src')}, any relative path is assumed to be relative to the "application image&#010 directory" (<code>appImgDir</code>).  The application image directory can be set via&#010 ${isc.DocUtils.linkForRef('classMethod:Page.setAppImgDir')}, and defaults to "images/", representing the typical practice of&#010 placing images in a subdirectory relative to the URL at which the application is accessed.&#010 <P>&#010 For applications that may be launched from multiple URLs, the <code>appImgDir</code> can be&#010 set to the correct relative path to the image directory by calling&#010 ${isc.DocUtils.linkForRef('classMethod:Page.setAppImgDir')} before any SmartClient components are created.  This enables&#010 applications or components of an application to be launched from multiple locations, or to&#010 be relocated, without changing any image URLs supplied to SmartClient components.&#010 <P>&#010 <b>the "[SKIN]" URL prefix</b>&#010 <P>&#010 The special prefix "[SKIN]" can be used to refer to images within the skin folder&#010 whenever image URLs are supplied to SmartClient components.&#010 <P>&#010 The value of "[SKIN]" is the combination of:&#010 <ul>&#010 <li> the "skin directory", established in <code>load_skin.js</code> via ${isc.DocUtils.linkForRef('classMethod:Page.setSkinDir')},&#010 plus..&#010 <li> the setting for ${isc.DocUtils.linkForRef('attr:Canvas.skinImgDir','skinImgDir')} on the component where you set an&#010 image URL property&#010 </ul>&#010 <code>skinImgDir</code> defaults to "images/", so creating an ${isc.DocUtils.linkForRef('class:Img')} component with&#010 ${isc.DocUtils.linkForRef('attr:Img.src')} set to "[SKIN]myButton/button.gif" will expand to <code>Page.getSkinDir() +&#010 "/images/myButton/button.gif"</code>.&#010 <P>&#010 Some components that use a large number of images use <code>skinImgDir</code> to group them&#010 together and make it possible to relocate all the media for the component with a single setting.&#010 For example, the ${isc.DocUtils.linkForRef('class:TreeGrid')} class sets <code>skinImgDir</code> to "images/TreeGrid/".&#010 This allows ${isc.DocUtils.linkForRef('attr:TreeGrid.folderIcon')} to be set to just "[SKIN]folder.gif" but refer to&#010 <code>Page.getSkinDir() + "/images/TreeGrid/folder.gif"</code>.&#010 <P>&#010 A custom subclass of TreeGrid can set <code>skinImgDir</code> to a different path, such as&#010 "/images/MyTreeGrid", to source all media from a different location.&#010 <P>&#010 TIPS:&#010 <ul>&#010 <li> subcomponents may not share the parent component's setting for skinImgDir.  For&#010 example, the ${isc.DocUtils.linkForRef('attr:Window.minimizeButton')} has the default setting for "skinImgDir"&#010 ("images/"), so the ${isc.DocUtils.linkForRef('attr:Img.src','src')} property used with this component is set to&#010 "[SKIN]/Window/minimize.png" (in the "SmartClient" sample skin).&#010 <li> for a particular image, the skinImgDir setting on the component may not be&#010 convenient.  The prefix "[SKINIMG]" can be used to refer to <code>Page.getSkinDir() +&#010 "/images"</code> regardless of the setting for <code>skinImgDir</code>&#010 </ul>&#010 <B>Stateful image URLs</B>&#010 <P>&#010 Many image URLs in SmartClient are "stateful", meaning that the actual URL used to fetch an&#010 image will vary according to the component's state (eg, "Disabled"), generally, by adding a&#010 suffix to the image URL.  See the ${isc.DocUtils.linkForRef('group:skinning','Skinning Overview')} for more&#010 information on statefulness and the ${isc.DocUtils.linkForRef('attr:Img.src')} documentation for information on how&#010 stateful image URLs are formed.
	 */
	export type SCImgURL = any;

	/**
	 * Strategy to apply when there is too little room for labels to be shown for all data points with&#010 comfortable padding (${isc.DocUtils.linkForRef('attr:FacetChart.minLabelGap')}).
	 */
	export type LabelCollapseMode = 
		/** Show all labels regardless, even though they will overlap */
		"none"
		/** Show significant time values such as the first day of the month or week.  Data values in Records must be true Date objects, not Strings. */
		| "time"
		/** Pick round numbers in the range and show labels for just those numbers.  Best for continuous datasets that are not time-based */
		| "numeric"
		/** Pick periodic values from the dataset and show labels for those.  Best when the there are no particular points that would clearly be the best to label */
		| "sample"
		;

	/**
	 * An axis or "side" of a table.
	 */
	export type Axis = 
		/** Row axis */
		"row"
		/** Column axis */
		| "column"
		;

	/**
	 * CSS color specification applied to a specific HTML element on this page.&#010 <P>&#010 This is a string matching the syntax as specified in CSS1, and can be&#010 formatted in one of the following ways:&#010 <ul>&#010 <li>A keyword color, &ldquo;white&rdquo;</li>&#010 <li>Six-digit hex notation, &ldquo;#ffffff&rdquo;</li>&#010 <li>Three-digit hex notation, &ldquo;#fff&rdquo;</li>&#010 <li>8-bit decimal notation, &ldquo;rgb(255, 255, 255)&rdquo;</li>&#010 <li>Percentage notation, &ldquo;rgb(100%, 100%, 100%)&rdquo;</li>&#010 </ul>&#010 <P>&#010 Note that when working with ${isc.DocUtils.linkForRef('class:FacetChart')}s, it's required that colors be specified&#010 using the six-digit hex format listed above, rather than any of the others, since the&#010 Framework needs to perform math on the subfields.  Affected properties include&#010 ${isc.DocUtils.linkForRef('attr:FacetChart.dataColors')}, and affected methods include &#010 overrides of ${isc.DocUtils.linkForRef('method:FacetChart.getDataColor')} and ${isc.DocUtils.linkForRef('method:FacetChart.getDataLineColor')}.&#010 
	 */
	export type CSSColor = any;

	export type ZoomStartPosition = 
		/** start at the beginning of the range */
		"start"
		/** start at the end of the range */
		| "end"
		;

	/**
	 * What should drive the automatic horizontal expansion of the chart?
	 */
	export type AutoScrollDataApproach = 
		/** Expand the chart to make room for data label facet value. */
		"labels"
		/** Expand the chart to accommodate ${isc.DocUtils.linkForRef('attr:FacetChart.barMargin')}, ${isc.DocUtils.linkForRef('attr:FacetChart.minBarThickness')},                   and ${isc.DocUtils.linkForRef('method:FacetChart.getMinClusterSize')}. */
		| "clusters"
		/** Expand the chart to make room for both labels and clusters (whichever requires                more space). */
		| "both"
		;

	/**
	 * A string of known format used to specify a datetime offset.  For example, a &#010 RelativeDateString that represents "one year from today" is written as <code>"+1y"</code>.&#010 <P>&#010 RelativeDateStrings are comprised of the following parts:&#010 <ul>&#010 <li>direction: the direction in which the quantity applies - one of + or - </li>&#010 <li>quantity: the number of units of time to apply - a number </li>&#010 <li>timeUnit: an abbreviated timeUnit to use - one of ms/MS (millisecond), s/S (second), &#010      mn/MN (minute), h/H (hour), d/D (day), w/W (week), m/M (month), q/Q (quarter, 3-months), &#010      y/Y (year), dc/DC (decade) or c/C (century). <br>&#010      The timeUnit is case sensitive. A lowercase timeUnit implies an exact offset, so <code>+1d</code>&#010      refers to the current date / time increased by exactly 24 hours. If the timeUnit is &#010      uppercase, it refers to the start or end boundary of the period of time in question, so&#010      <code>+1D</code> would refer to the end of the day (23:39:59:999) tomorrow, and&#010      <code>-1D</code> would refer to the start of the day (00:00:00:000) yesterday.</li>&#010 <li>[qualifier]: an optional timeUnit encapsulated in square-brackets and used to offset &#010      the calculation - eg. if +1d is "plus one day", +1d[W] is "plus one day from the &#010      end of the current week".  You may also specify another complete RelativeDateString as the&#010      [qualifier], which offers more control - eg, +1d[+1W] indicates "plus one day from &#010      the end of NEXT week".</li>&#010 </ul>&#010 <P>&#010 This format is very flexible. Here are a few example relative date strings:<br>&#010 <code>+0D</code>: End of today. There are often multiple ways to represent the same time&#010  using this system - for example this could also be written as <code>-1ms[+1D]</code><br>&#010 <code>-0D</code>: Beginning of today.<br>&#010 <code>+1W</code>: End of next week.<br>&#010 <code>+1w[-0W]</code>: Beginning of next week.<br>&#010 <code>+1w[-0D]</code>: Beginning of the current day of next week.
	 */
	export type RelativeDateString = any;

	/**
	 * An ordinary JavaScript as obtained by "new Object()" or via &#010 ${isc.DocUtils.linkForRef('type:ObjectLiteral','Object Literal')} syntax.&#010 <P>&#010 Methods that return Objects or take Objects as parameters make use of the ability of a&#010 JavaScript Object to contain an arbitrary set of named properties, without requiring&#010 declaration in advance.  This capability makes it possible to use a JavaScript Object much&#010 like a HashMap in Java or .NET, but without the need to call get() or set() to create and&#010 retrieve properties.&#010 <P>&#010 For example if you created an Object using ${isc.DocUtils.linkForRef('type:ObjectLiteral','Object Literal')} syntax&#010 like so:&#010 <pre>&#010    var request = {&#010        actionURL : "/foo.do",&#010        showPrompt:false&#010    };&#010 </pre>&#010 You could then access it's properties like so:&#010 <pre>&#010    var myActionURL = request.actionURL;&#010    var myShowPrompt = request.showPrompt;&#010 </pre>&#010 .. and you could assign new values to those properties like so:&#010 <pre>&#010    request.actionURL = "<i>newActionURL</i>";&#010    request.showPrompt = <i>newShowPromptSetting</i>;&#010 </pre>&#010 Note that while JavaScript allows you to get and set properties in this way on any Object,&#010 SmartClient components require that if a setter or getter exists, it must be called, or no&#010 action will occur.  For example, if you had a ${isc.DocUtils.linkForRef('class:ListGrid')} and you wanted to change the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHeader','showHeader')} property:&#010 <pre>&#010     myListGrid.setShowHeader(false); // correct&#010     myListGrid.showHeader = false; // incorrect (nothing happens)&#010 </pre>&#010 All documented attributes have ${isc.DocUtils.linkForRef('group:flags','flags')} (eg IRW) that indicate when direct&#010 property access is allowed or not.
	 */
	export type Object = any;

	/**
	 * Specifies the position of a resize knob with respect to its draw item.
	 */
	export type ResizeKnobPoint = 
		/** Top Left corner */
		"TL"
		/** Top Right corner */
		| "TR"
		/** Bottom Left corner */
		| "BL"
		/** Bottom Right corner */
		| "BR"
		/** Centered on the top edge */
		| "T"
		/** Centered on the bottom edge */
		| "B"
		/** Centered on the left edge */
		| "R"
		/** Centered on thie right edge */
		| "L"
		;

	/**
	 * Appearance when a component is in ${isc.DocUtils.linkForRef('method:Canvas.setEditMode','edit mode')} and is&#010 selected.  &#010 <p>&#010 Modes such as "tintMask" or "outlineMask" create an &#010 ${isc.DocUtils.linkForRef('attr:EditProxy.editMask','"edit mask"')} that is layered over the selected component, and &#010 blocks all normal interaction with the component, so that behaviors like&#010 ${isc.DocUtils.linkForRef('attr:EditProxy.supportsInlineEdit')} can completely take the place of the component's&#010 normal interactivity.&#010 <p>&#010 "outlineEdges" mode allows normal interaction with the component, which allows the end&#010 user to do things like ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','freeze ListGrid fields')}, which&#010 the ${isc.DocUtils.linkForRef('class:GridEditProxy')} can implement as a &#010 ${isc.DocUtils.linkForRef('attr:GridEditProxy.saveFieldFrozenState','persistent change to grid\'s configuration')}.
	 */
	export type SelectedAppearance = 
		/** editMask on top of the component is updated with ${isc.DocUtils.linkForRef('attr:EditProxy.selectedTintColor')}                       and ${isc.DocUtils.linkForRef('attr:EditProxy.selectedTintOpacity')} */
		"tintMask"
		/** editMask on top of the component is updated with ${isc.DocUtils.linkForRef('attr:EditProxy.selectedBorder')} */
		| "outlineMask"
		/** MultiAutoChild is created on top of the component.  This constructs a border around                       the component using 4 separate <code>outlineEdge</code> components so that interactivity is not blocked. */
		| "outlineEdges"
		/** no change in appearance.  Override ${isc.DocUtils.linkForRef('method:EditProxy.showSelectedAppearance')} to create a custom appearance. */
		| "none"
		;

	/**
	 * Default buttons that you can use in your Dialogs.&#010 <p>&#010 &#010 &#010 Refer to these buttons via the syntax <code>isc.Dialog.OK</code> when passing them into&#010 ${isc.DocUtils.linkForRef('attr:Dialog.buttons')} or into the <code>properties</code> argument of helper&#010 methods such as ${isc.DocUtils.linkForRef('classMethod:isc.say')}.&#010 &#010 <p>&#010 All buttons added via <code>setButtons</code> will fire the&#010 ${isc.DocUtils.linkForRef('method:Dialog.buttonClick','buttonClick event')} (whether they are built-in or custom&#010 buttons).  Built-in buttons automatically close a Dialog, with the exception of the&#010 "Apply" button.
	 */
	export type DialogButtons = 
		/** Dismisses dialog by calling ${isc.DocUtils.linkForRef('method:Dialog.okClick')}.              Title derived from ${isc.DocUtils.linkForRef('classAttr:Dialog.OK_BUTTON_TITLE')}. */
		"OK"
		/** Does not dismiss dialog.            Calls ${isc.DocUtils.linkForRef('method:Dialog.applyClick')}&#010              Title derived from ${isc.DocUtils.linkForRef('classAttr:Dialog.APPLY_BUTTON_TITLE')}. */
		| "APPLY"
		/** Dismisses dialog by calling ${isc.DocUtils.linkForRef('method:Dialog.yesClick')}.              Title derived from ${isc.DocUtils.linkForRef('classAttr:Dialog.YES_BUTTON_TITLE')}. */
		| "YES"
		/** Dismisses dialog by calling ${isc.DocUtils.linkForRef('method:Dialog.noClick')}.              Title derived from ${isc.DocUtils.linkForRef('classAttr:Dialog.NO_BUTTON_TITLE')}. */
		| "NO"
		/** Dismisses dialog by calling ${isc.DocUtils.linkForRef('method:Dialog.cancelClick')}.                  Title derived from ${isc.DocUtils.linkForRef('classAttr:Dialog.CANCEL_BUTTON_TITLE')}. */
		| "CANCEL"
		/** Dismisses dialog by calling ${isc.DocUtils.linkForRef('method:Dialog.doneClick')}.                   Title derived from ${isc.DocUtils.linkForRef('classAttr:Dialog.DONE_BUTTON_TITLE')}. */
		| "DONE"
		;

	/**
	 * How should fields of ${isc.DocUtils.linkForRef('type:ListGridFieldType','type:"icon"')} be sized by default?
	 */
	export type AutoFitIconFieldType = 
		/** Apply no special sizing to icon fields - treat them like any other   field in the grid */
		"none"
		/** size the field to accommodate the width of the icon */
		| "iconWidth"
		/** size the field to accommodate the title (or the width of the icon if   it exceeds the width of the title. */
		| "title"
		;

	/**
	 * DynamicForms automatically choose the FormItem type for a field based on the&#010 <code>type</code> property of the field.  The table below describes the default FormItem&#010 chosen for various values of the <code>type</code> property.&#010 <P>&#010 You can also set ${isc.DocUtils.linkForRef('attr:FormItem.editorType','field.editorType')} to the classname of a&#010 ${isc.DocUtils.linkForRef('class:FormItem')} to override this default mapping.  You can alternatively override&#010 ${isc.DocUtils.linkForRef('method:DynamicForm.getEditorType')} to create a form with different rules for which&#010 FormItems are chosen.&#010 <P>
	 */
	export type FormItemType = 
		/** Rendered as a ${isc.DocUtils.linkForRef('class:TextItem')}, unless the length of the field (as specified by ${isc.DocUtils.linkForRef('attr:DataSourceField.length')} attribute) is larger than the value&#010 specified by ${isc.DocUtils.linkForRef('attr:DynamicForm.longTextEditorThreshold')}, a&#010 ${isc.DocUtils.linkForRef('class:TextAreaItem')} is shown. */
		"text"
		/** Rendered as a ${isc.DocUtils.linkForRef('class:CheckboxItem')} */
		| "boolean"
		/** Same as <code>text</code> by default.                      Consider setting editorType:${isc.DocUtils.linkForRef('class:SpinnerItem')}. */
		| "integer"
		/** Same as <code>text</code> by default.                      Consider setting editorType:${isc.DocUtils.linkForRef('class:SpinnerItem')}. */
		| "float"
		/** Rendered as a ${isc.DocUtils.linkForRef('class:DateItem')} */
		| "date"
		/** Rendered as a ${isc.DocUtils.linkForRef('class:TimeItem')} */
		| "time"
		/** Rendered as a ${isc.DocUtils.linkForRef('class:SelectItem')}.  Also true for any field that                    specifies a ${isc.DocUtils.linkForRef('attr:FormItem.valueMap')}.  &#010                    Consider setting editorType:${isc.DocUtils.linkForRef('class:ComboBoxItem')}. */
		| "enum"
		/** Same as <code>text</code> */
		| "sequence"
		/** If ${isc.DocUtils.linkForRef('attr:DataSourceField.canEdit')}<code>:false</code> is set on the field,                    the value is rendered as a ${isc.DocUtils.linkForRef('class:LinkItem')}.  Otherwise the field &#010                    is rendered as a ${isc.DocUtils.linkForRef('class:TextItem')}. */
		| "link"
		/** Rendered as an image if not editable, or as a ${isc.DocUtils.linkForRef('class:TextItem')} to edit                    the URL or partial URL if editable */
		| "image"
		/** Rendered as a ${isc.DocUtils.linkForRef('class:FileItem')}, or a ${isc.DocUtils.linkForRef('class:ViewFileItem')} if not editable */
		| "imageFile"
		/** Rendered as a ${isc.DocUtils.linkForRef('class:FileItem')}, or a ${isc.DocUtils.linkForRef('class:ViewFileItem')} if not editable */
		| "binary"
		;

	/**
	 * Approach to force a text value to be interpreted as text rather than parsed as a date, time&#010 or other structured types, as can happen with Microsoft Excel.  For background information,&#010 see ${isc.DocUtils.linkForRef('group:excelPasting')}.
	 */
	export type ForceTextApproach = 
		/** a leading space character is added */
		"leadingSpace"
		/** text value is turned into a trivial Excel formula (eg "car" becomes ="car"). In Excel, this renders just the value "car" but editing the cell reveals the formula. */
		| "formula"
		;

	/**
	 * Different styles of determining intersection: with mouse or entire rect of target
	 */
	export type DragIntersectStyle = 
		/** Look for drop targets that are under the current mouse cursor position. */
		"mouse"
		/** Look for drop targets by intersection of the entire rect of the drag               target with the droppable target. */
		| "rect"
		;

	/**
	 * Flags to set automatic removal of events from the page event registry.
	 */
	export type FireStyle = 
		/** Call the registered handler any time the event occurs */
		"null"
		/** Call the registered handler the first time the event                               occurs, then unregister the handler as though&#010                               ${isc.DocUtils.linkForRef('classMethod:Page.clearEvent')} had been called */
		| "Page.FIRE_ONCE"
		;

	/**
	 * An edge or corner of a rectange, or it's center.  Used in APIs such as&#010 ${isc.DocUtils.linkForRef('attr:Canvas.resizeFrom')} and ${isc.DocUtils.linkForRef('classMethod:Canvas.getEventEdge')}.
	 */
	export type EdgeName = 
		/** top edge */
		"T"
		/** bottom edge */
		| "B"
		/** left edge */
		| "L"
		/** right edge */
		| "R"
		/** top-left corner */
		| "TL"
		/** top-right corner */
		| "TR"
		/** bottom-left corner */
		| "BL"
		/** bottom-right corner */
		| "BR"
		/** center */
		| "C"
		;

	/**
	 * AutoComplete behavior for ${isc.DocUtils.linkForRef('class:FormItem','FormItems')}.
	 */
	export type AutoComplete = 
		/** Disable browser autoComplete. Note that some browsers will disregard    this setting and still perform native autoComplete for certain items - typically&#010    only for log in / password forms. See the discussion ${isc.DocUtils.linkForRef('attr:FormItem.autoComplete','here')}. */
		"none"
		/** Allow native browser autoComplete. */
		| "native"
		;

	/**
	 * The style of line-breaks to use when exporting data
	 */
	export type LineBreakStyle = 
		/** Use the default line-break style of the server OS */
		"default"
		/** Use UNIX-style line-breaks (LF only) */
		| "unix"
		/** Use MAC-style line-breaks (CR only) */
		| "mac"
		/** Use DOS-style line-breaks (both CR & LF) */
		| "dos"
		;

	/**
	 * Controls the style of TableView record display
	 */
	export type RecordLayout = 
		/** Show ${isc.DocUtils.linkForRef('attr:TableView.titleField','title field')} only */
		"TableView.TITLE_ONLY"
		/** Show ${isc.DocUtils.linkForRef('attr:TableView.titleField','title')} and                                       ${isc.DocUtils.linkForRef('attr:TableView.descriptionField','description')} fields only */
		| "TableView.TITLE_DESCRIPTION"
		/** Show ${isc.DocUtils.linkForRef('attr:TableView.titleField','title')},                                       ${isc.DocUtils.linkForRef('attr:TableView.descriptionField','description')} and&#010                                      ${isc.DocUtils.linkForRef('attr:TableView.infoField','info')} fields only */
		| "TableView.SUMMARY_INFO"
		/** Show ${isc.DocUtils.linkForRef('attr:TableView.titleField','title')},                                       ${isc.DocUtils.linkForRef('attr:TableView.descriptionField','description')} and&#010                                      ${isc.DocUtils.linkForRef('attr:TableView.dataField','data')} fields only */
		| "TableView.SUMMARY_DATA"
		/** Show ${isc.DocUtils.linkForRef('attr:TableView.titleField','title')},                                       ${isc.DocUtils.linkForRef('attr:TableView.descriptionField','description')},&#010                                      ${isc.DocUtils.linkForRef('attr:TableView.infoField','info')} and&#010                                      ${isc.DocUtils.linkForRef('attr:TableView.dataField','data')} fields similar to the&#010                                      iPhoneOS Mail application */
		| "TableView.SUMMARY_FULL"
		;

	/**
	 * Possible layout modes for UI components that are sensitive to the device type being used&#010 (a.k.a. "responsive design").  See for example ${isc.DocUtils.linkForRef('attr:SplitPane.deviceMode')}.
	 */
	export type DeviceMode = 
		/** mode intended for handset-size devices (phones).  Generally only one UI                  panel will be shown at a time. */
		"handset"
		/** mode intended for tablet-size devices.  Generally, up to two panels are                 shown side by side in "landscape" ${isc.DocUtils.linkForRef('type:PageOrientation')}, and only one&#010                 panel is shown in "portrait" orientation. */
		| "tablet"
		/** mode intended for desktop browsers.  Three or more panels may be shown                  simultaneously. */
		| "desktop"
		;

	/**
	 * An object containing the "view state" information for a treeGrid. In addition to the &#010 state data contained by a ${isc.DocUtils.linkForRef('type:ListGridViewState')} object, this will also contain the &#010 current open state of the treeGrid in question.<br>&#010 Note that this object is not intended to be interrogated directly, but may be stored &#010 (for example) as a blob on the server for view state persistence across sessions.
	 */
	export type TreeGridViewState = any;

	/**
	 * Options for how values are stored for a field that is&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.multiple','multiple:true')}.  See ${isc.DocUtils.linkForRef('attr:DataSourceField.multipleStorage')}.
	 */
	export type MultipleFieldStorage = 
		/** values are saved as a simple delimeter-separated string.  Delimeter        can be configured via ${isc.DocUtils.linkForRef('attr:DataSourceField.multipleStorageSeparator')}.  An empty&#010        array is stored as "", and null as the database <code>null</code> value. */
		"simpleString"
		/** values are serialized to JSON.  Empty array as a distinct value         from null (it appears as the text "[]"). */
		| "json"
		/** no transformation is applied to values; server-side field value remains a Java        List when passed to the execute(Fetch|Add|Update|Remove) method of the server-side&#010        DataSource class */
		| "none"
		;



}

//declare var isc: Isc.IscStatic;

declare module "isc" {
//    export = Isc;
}
