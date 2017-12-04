
// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped
// Generated: 12/4/2017 7:00:12 AM by KWhite
// Generated from SmartClient version SNAPSHOT_v12.0d_2017-12-02

declare namespace Isc {

    
	/**
	 * Controls the navigation mode of records.
	 */
	export type NavigationMode = 
		/** Clicking anywhere on the record navigates */
		"wholeRecord"  // Original Value: TableView.WHOLE_RECORD, How found: Looked up constant string
		/** Only clicking directly on the navigation icon triggers navigation */
		| "navIconOnly"  // Original Value: TableView.NAVICON_ONLY, How found: Looked up constant string
		;

	export type Selected = 
		/** StatefulCanvas should show focused state */
		"Focused"  // Original Value: StatefulCanvas.FOCUSED, How found: Looked up constant string
		/** StatefulCanvas is selected */
		| "Selected"  // Original Value: StatefulCanvas.SELECTED, How found: Looked up constant string
		/** StatefulCanvas is not selected */
		| ""  // Original Value: StatefulCanvas.UNSELECTED, How found: Looked up constant string
		;


	/**
	 * A string which is a valid 
	 * JavaScript identifier, as specified by ECMA-262 Section 7.6.
	 * 
	 * NOTE: The String.isValidID
	 * 
	 * function can be used to test whether a name is a valid JavaScript identifier.
	 */
	export type Identifier = String; // baseType='String'


	/**
	 * An "Object literal" is JavaScript shorthand for defining a JavaScript Object with a set
	 * of properties. For example, code like this:
	 * 
	 * var request = {
	 * actionURL : "/foo.do",
	 * showPrompt:false
	 * };
	 * .. is equivalent to ..
	 * 
	 * var request = new Object();
	 * request.actionURL = "/foo.do";
	 * request.showPrompt = false;
	 * In situations where a set of Properties','properties may be passed to a
	 * method, the Object literal notation is much more compact. For example:
	 * 
	 * isc.RPCManager.sendRequest({
	 * actionURL : "/foo.do",
	 * showPrompt:false
	 * });
	 * NOTE: if you have a 'trailing comma' in an object literal, like so:
	 * 
	 * var request = {
	 * actionURL : "/foo.do",
	 * showPrompt:false, // TRAILING COMMA
	 * };
	 * This is considered a syntax error by Internet Explorer, but not by Firefox. This is by
	 * far the #1 cause of Internet Explorer-specific errors that do not occur in other
	 * browsers. Pay special attention to this error, and, if you can, install the
	 * JSSyntaxScannerFilter into your development environment (as described in the
	 * iscInstall','deployment instructions).
	 */
	export type ObjectLiteral = any; // baseType='<none>'


	/**
	 * An object containing the stored grouping information for a listGrid.
	 * Note that this object is not intended to be interrogated directly, but may be stored
	 * (for example) as a blob on the server for state persistence across sessions.
	 */
	export type ListGridGroupState = String; // baseType='String'


	/**
	 * CSS class name to apply to some HTML element on this page. This is a string that should
	 * match the css class defined for the page in an external stylesheet or in inline
	 * html &lt;STYLE&gt; tags.
	 * 
	 * As a general rule, wherever it is possible to provide a CSS styleName (such as
	 * Canvas.styleName or Button.baseStyle, your CSS style can specify border,
	 * margins, padding, and any CSS attributes controlling background or text styling. You
	 * should not specify any CSS properties related to positioning, clipping, sizing or
	 * visibility (such as "overflow", "position", "display", "visibility" and "float") - use
	 * SmartClient APIs for this kind of control.
	 * 
	 * Because text wrapping cannot be consistently controlled cross-browser from CSS alone,
	 * you should use SmartClient properties such as Button.wrap instead of the
	 * corresponding CSS properties, when provided.
	 * 
	 * Content contained within SmartClient components can use arbitrary CSS, with the
	 * caveat that the content should be tested on all supported browsers, just as content
	 * outside of SmartClient must be.
	 * 
	 * Special note on CSS margins: wherever possible, use CSS padding and border in
	 * lieu of CSS margins, or non-CSS approaches such as Layout.layoutMargin,
	 * Canvas.snapTo, or absolute positioning (including specifying percentage left/top
	 * coordinates). We recommend this because CSS specifies a very complicated and widely
	 * criticized "margin-collapse" behavior which has surprising effects when margins exist on
	 * both parents and children. Compounding the problem, margins are implemented very
	 * differently on different browsers, especially when it comes to HTML margins.
	 * 
	 * Note about CSS "box models"
	 * 
	 * The CSS "box model" defines whether the size applied to a DOM element includes padding,
	 * borders or margins, or whether such settings effectively increase the size of the
	 * component beyond the size specified in CSS.
	 * 
	 * In SmartClient, the size configured for a component includes border, padding and
	 * margins if specified (in CSS terminology, the box model is "margin-box"). This allows
	 * CSS borders, margins and padding to be treated as purely visual properties with no
	 * effect on sizing or layout.
	 */
	export type CSSStyleName = String; // baseType='String'


	/**
	 * 3 character string containing the "M", "D" and "Y"
	 * characters to indicate the format of strings being parsed into Date instances via
	 * DateUtil.parseInput().
	 * 
	 * As an example - an input format of "MDY" would parse "01/02/1999" to Jan 2nd 1999
	 * 
	 * 
	 * Note: In addition to these standard formats, a custom date string parser function may be
	 * passed directly to DateUtil.setInputFormat or passed into 
	 * DateUtil.parseInput as the inputFormat parameter.
	 * 
	 */
	export type DateInputFormat = String; // baseType='String'

	export type PreserveOpenState = 
		/** Never try to automatically preserve the openState. Nodes will be initially open 
	 * or closed based solely on the Tree.openProperty optionally set by the server. */
		"never"  // How found:  Original value
		/** If either the Tree.idField or Tree.nameProperty has been set on 
	 * the Tree, (so that nodes have either unique ids or unique paths), 
	 * preserve openState by respecting the Tree.openProperty set by the server, 
	 * then applying the openState. */
		| "whenUnique"  // How found:  Original value
		/** Like "whenUnique" but automatically preserves openState even if nodes cannot be
	 * uniquely identified. This means that nodes at the same tree positions 
	 * (eg 3rd child of 5th node under root) will be placed in the same openState, 
	 * regardless of whether that node has anything to do with the node that previously 
	 * was at that tree position. */
		| "always"  // How found:  Original value
		;


	/**
	 * A means of identifying the properties in an exported dataset - either the property name
	 * or its title.
	 */
	export type PropertyIdentifier = 
		/** Identify properties by internal name */
		"name"
		/** Identify properties by localized descriptive title */
		| "title"
		;


	/**
	 * Used to name a validator or reference a standard, built-in Validator - see list below.
	 * 
	 * To make use of a standard validator type for a field in a DataSource, or 
	 * DynamicForm instance, specify the validators property to an array 
	 * containing a validator definition where the type property is set to 
	 * the appropriate type. 
	 * 
	 * A custom error message can be specified for any validator type by setting the
	 * errorMessage property on the validator definition object, and some
	 * validator types make use of additional properties on the validator definition 
	 * object such as max or min.
	 * 
	 * For example, to use the integerRange validator type:
	 * &nbsp;&nbsp;field:{
	 * &nbsp;&nbsp;&nbsp;&nbsp;validators:[
	 * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{type:"integerRange", min:1, max:100}
	 * &nbsp;&nbsp;&nbsp;&nbsp;]
	 * &nbsp;&nbsp;}
	 * 
	 * 
	 * Custom validators can be reused on the client by adding them to the global validator list,
	 * via the Validator.addValidatorDefinition method.
	 */
	export type ValidatorType = 
		/** Validation will fail if this field is non-empty and has a non-boolean value. */
		"isBoolean"  // How found:  Original value
		/** Validation will fail if the value is not a string value. */
		| "isString"  // How found:  Original value
		/** Tests whether the value for this field is a whole number. If 
	 * validator.convertToInteger is true, float values will be converted 
	 * into integers and validation will succeed. */
		| "isInteger"  // How found:  Original value
		/** Tests whether the value for this field is a valid floating point number. */
		| "isFloat"  // How found:  Original value
		/** Tests whether the value for this field is a valid expression or function; if it is
	 * valid, creates a stringMethods','stringMethod object with the value
	 * and set the resultingValue to the StringMethod. */
		| "isFunction"  // How found:  Original value
		/** RequiredIf type validators should be specified with an expression
	 * property set to a stringMethods','stringMethod, which takes four
	 * parameters:
	 * item - the DynamicForm item on which the error occurred (may be null)
	 * validator - a pointer to the validator object
	 * value - the value of the field in question
	 * record - the "record" object - the set of values being edited by the widget
	 * 
	 * When validation is performed, the expression will be evaluated (or executed). If it
	 * returns true, the field will be treated as a required field, so validation
	 * will fail if the field has no value, or, in the case of a FileItem or UploadItem
	 * and if client-side validation is supported by the browser, if no file is selected for upload
	 * or the selected file is empty.
	 * To allow server-side enforcement, a required validator can be used instead.
	 * With the exception of "binary" fields, conditional criteria can be specified with the
	 * Validator.applyWhen','applyWhen property.
	 * See conditionallyRequired.
	 * 
	 * 
	 * <strong>NOTE:</strong> A requiredIf validator cannot be used to guarantee that a non-empty
	 * file is uploaded. The user's browser might not support client-side file validation.
	 * Using a requiredIf validator on a "binary" field may be appropriate in scenarios where the
	 * application does not technically require a non-empty file to be uploaded by the user.
	 * For example, in a bug tracking application, a file upload may be required if the
	 * "Have a test case?" checkbox is checked, but the value of the "Have a test case?" checkbox is
	 * not actually saved by the application; instead, whether the user is providing a test case is
	 * inferred by whether a non-empty test case file was uploaded. */
		| "requiredIf"  // How found:  Original value
		/** Tests whether the value for this field matches the value of some other field.
	 * The field to compare against is specified via the otherField property
	 * on the validator object (should be set to a field name).
	 * See matchValue. */
		| "matchesField"  // How found:  Original value
		/** Tests whether the value for this field matches any value from an arbitrary
	 * list of acceptable values. The set of acceptable values is specified via
	 * the list property on the validator, which should be set to an array of
	 * values. If validator.list is not supplied, the valueMap for the field will be used.
	 * If there is no valueMap, not providing validator.list is an error. */
		| "isOneOf"  // How found:  Original value
		/** Tests whether the value for this field is a whole number within the range 
	 * specified. The max and min properties on the validator
	 * are used to determine the acceptable range, inclusive. To specify the range as
	 * exclusive of the min/mix values, set exclusive to true.
	 * See validationBuiltins. */
		| "integerRange"  // How found:  Original value
		/** This validator type applies to string values only. If the value is a string value
	 * validation will fail if the string's length falls outside the range specified by 
	 * validator.max and validator.min.
	 * 
	 * Note that non-string values will always pass validation by this validator type.
	 * 
	 * Note that the errorMessage for this validator will be evaluated as
	 * a dynamicString - text within &#36;{...} will be evaluated as JS code
	 * when the message is displayed, with max and min available as
	 * variables mapped to validator.max and validator.min. */
		| "lengthRange"  // How found:  Original value
		/** Determine whether a string value contains some substring specified via 
	 * validator.substring. */
		| "contains"  // How found:  Original value
		/** Determine whether a string value does not contain some substring specified via 
	 * validator.substring. */
		| "doesntContain"  // How found:  Original value
		/** Determine whether a string value contains some substring multiple times.
	 * The substring to check for is specified via validator.substring.
	 * The validator.operator property allows you to specify how to test
	 * the number of substring occurrences. Valid values for this property are
	 * ==, !=, &lt;, &lt;=,
	 * &gt;, &gt;=.
	 * 
	 * The number of matches to check for is specified via validator.count. */
		| "substringCount"  // How found:  Original value
		/** regexp type validators will determine whether the value specified 
	 * matches a given regular expression. The expression should be specified on the
	 * validator object as the expression property.
	 * See formsRegularExpression. */
		| "regexp"  // How found:  Original value
		/** Validate against a regular expression mask, specified as validator.mask.
	 * If validation is successful a transformation can also be specified via the
	 * validator.transformTo property. This should be set to a string in the
	 * standard format for string replacement via the native JavaScript replace()
	 * method.
	 * See formsValueTransform. */
		| "mask"  // How found:  Original value
		/** Tests whether the value for a date field is within the range specified.
	 * Range is inclusive, and is specified via validator.min and
	 * validator.max, which should be specified in
	 * <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema
	 * date format</a> or as a live JavaScript Date object (for client-only validators only).
	 * To specify the range as exclusive of the min/mix values, set exclusive
	 * to true.
	 * 
	 * Note that the errorMessage for this validator will be evaluated as
	 * a dynamicString - text within &#36;{...} will be evaluated as JS code
	 * when the message is displayed, with max and min available as
	 * variables mapped to validator.max and validator.min. */
		| "dateRange"  // How found:  Original value
		/** Validate a field as a valid floating point value within a value range.
	 * Range is specified via validator.min and validator.max.
	 * Also checks precision, specified as number of decimal places in 
	 * validator.precision. If validator.roundToPrecision is set 
	 * a value that doesn't match the specified number of decimal places will be rounded
	 * to the nearest value that does. 
	 * 
	 * For backwards compatibility only. Use "floatRange" and/or "floatPrecision" instead. */
		| "floatLimit"  // How found:  Original value
		/** Tests whether the value for this field is a floating point number within the range 
	 * specified. The max and min properties on the validator
	 * are used to determine the acceptable range, inclusive. To specify the range as
	 * exclusive of the min/mix values, set exclusive to true.
	 * 
	 * Note that the errorMessage for this validator will be evaluated as
	 * a dynamicString - text within &#36;{...} will be evaluated as JS code
	 * when the message is displayed, with max and min available as
	 * variables mapped to validator.max and validator.min. */
		| "floatRange"  // How found:  Original value
		/** Tests whether the value for this field is a floating point number with the 
	 * appropriate number of decimal places - specified in validator.precision
	 * If the value is of higher precision and validator.roundToPrecision 
	 * is specified, the value will be rounded to the specified number of decimal places
	 * and validation will pass, otherwise validation will fail. */
		| "floatPrecision"  // How found:  Original value
		/** A non-empty value is required for this field to pass validation.
	 * In the case of a "binary" field, a non-empty file must be uploaded. */
		| "required"  // How found:  Original value
		/** Change the state/appearance of this field. Desired appearance is specified via
	 * the fieldAppearance property on the validator object. See
	 * FieldAppearance type for choices.
	 * 
	 * If fieldAppearance is not specified, the default is "readOnly". */
		| "readOnly"  // How found:  Original value
		/** Change the visibility of this field. */
		| "visibility"  // How found:  Original value
		/** Change the enable/disable state of this field. */
		| "enable"  // How found:  Original value
		/** Returns true if the value for this field is unique. The uniqueness check is performed across
	 * the whole DataSource unless you specify property validator.criteriaFields as a 
	 * comma-separated string of field names; in that case, the uniqueness check is done in the 
	 * context of those extra criteria, allowing you to check, for example, whether an employee 
	 * number is unique for the department and location found on the record being validated.
	 * By default the uniqueness check is not case sensitive but this can be controlled through
	 * the Validator.caseSensitive','caseSensitive attribute. You can specify the 
	 * DataSource.operationBindings','operation to use for the uniqueness check with the 
	 * Validator.operationId','operationId attribute.
	 * 
	 * Validators of this type have ValidatorDefinition.requiresServer','requiresServer 
	 * set to true and do not run on the client.
	 * 
	 * Note when isUnique validator is executed as part of validation process during update 
	 * operation, it will perform uniqueness check only for single row updates. If update targets 
	 * OperationBinding.allowMultiUpdate','multiple records, then isUnique validator will 
	 * be skipped. If uniqueness check is needed when updating multiple records, consider using 
	 * dmiOverview','custom DMI approach to add this check manually.
	 * See uniqueCheckValidation. */
		| "isUnique"  // How found:  Original value
		/** Returns true if the record implied by a relation exists. The relation can be 
	 * derived automatically from the DataSourceField.foreignKey attribute of 
	 * the field being validated, or you can specify it manually via 
	 * validator.relatedDataSource and validator.relatedField.
	 * 
	 * You can specify at DataSource level that this validator should be automatically 
	 * applied to all fields that specify a DataSourceField.foreignKey','foreignKey -
	 * see DataSource.validateRelatedRecords.
	 * 
	 * Validators of this type have ValidatorDefinition.requiresServer','requiresServer 
	 * set to true and do not run on the client.
	 * 
	 * Note that this validation is generally unnecessary for data coming from a UI. The 
	 * typical UI uses a SelectItem or ComboBoxItem with an 
	 * FormItem.optionDataSource','optionDataSource for user entry, such that the user 
	 * can't accidentally enter a related record if that doesn't exist, and a typical SQL 
	 * schema will include constraints that prevent a bad insert if the user attempts to 
	 * circumvent the UI. The primary purpose of declaring this validation explicitly is 
	 * to provide clear, friendly error messages for use cases such as BatchUploader, 
	 * where values aren't individually chosen by the user. See also the example
	 * hasRelatedValidation', 'Related Records. */
		| "hasRelatedRecord"  // How found:  Original value
		/** This validator type is not for direct usage, instead DataSourceField.maxFileSize can 
	 * be set and maxFileSize validator will be added automatically. Use 
	 * DataSource.maxFileSizeExceededMessage to customize validation error message.
	 * 
	 * In supported browsers (Internet Explorer 10+, Chrome, Firefox, Safari 6+, Opera 11.1+), returns
	 * true if the file(s) selected by the user are not larger than the field's
	 * DataSourceField.maxFileSize. If not supported by the browser, the validator will always
	 * return true.
	 * 
	 * Note that server-side enforcement of the maxFileSize is always required because
	 * the user's browser might not support client-side file size checks. Also, any client-side
	 * check can be bypassed by a malicious user. */
		| "maxFileSize"  // How found:  Original value
		/** Custom client-side validator. 
	 * Validator.condition will be called to verify data.
	 *  */
		| "custom"  // How found:  Original value
		/** Custom server-side validator that either evaluates the Velocity expression provided in 
	 * Validator.serverCondition','serverCondition (see velocityValidation)
	 * or makes DMI call to Validator.serverObject','serverObject to evaluate condition
	 * (see dmiValidation).
	 * 
	 * Validators of this type have ValidatorDefinition.requiresServer','requiresServer 
	 * set to true and do not run on the client. */
		| "serverCustom"  // How found:  Original value
		;

	export type TEXTAREA_WRAP = 
		/** don't allow wrapping at all */
		"OFF"  // Original Value: TextAreaItem.OFF, How found: Looked up constant string
		/** when the entered text reaches the edge of the text area, wrap visibly but don't include line breaks in the textarea
	 * value */
		| "SOFT"  // Original Value: TextAreaItem.SOFT, How found: Looked up constant string
		/** when the entered text reaches the edge of the text area, insert a line break */
		| "HARD"  // Original Value: TextAreaItem.HARD, How found: Looked up constant string
		;


	/**
	 * Names for the standard controls built into the RichTextEditor. You can use these
	 * ControlNames in APIs like RichTextEditor.styleControls to control
	 * the order in which controls appear, to omit default controls or to show controls that
	 * are not shown by default.
	 * 
	 * Every ControlName is also the name of an AutoChild, so all the
	 * built-in controls can be skinned or otherwise customized via the
	 * autoChildUsage','AutoChild system. 
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
		/** Shows the RichTextEditor.listPropertiesDialog','listPropertiesDialog to allow configuring the options of the currently selected HTML list. */
		| "listProperties"
		;


	/**
	 * Behavior of selection when row spanning is active. See ListGrid.useRowSpanStyling.
	 */
	export type RowSpanSelectionMode = 
		/** when a cell is clicked on, select any cells in subsequent columns which are at least partially spanned by the clicked cell */
		"forward"
		/** when a cell is clicked on, selects any cells in any other columns which are at least partially spanned by the clicked cell */
		| "both"
		/** behaves like "forward", except as though the cell in the first column was clicked instead. If the largest row spans are in the first
	 * column and all cells in subsequent columns do not extend out of the
	 * first cell's span, this creates a row-like selection model where the
	 * span of the left-most cell defines the "row" of cells being selected. */
		| "outerSpan"
		;


	/**
	 * A decimal (or "floating point") number, for example, 5.5. Null is allowed.
	 */
	export type Float = Number; // baseType='Number'


	/**
	 * A positive whole number or 0, for example, 5. Negative values are not allowed. Null is
	 * allowed.
	 */
	export type PositiveInteger = Integer; // baseType='Integer'


	/**
	 * Selection model for CubeGrid indicating which cells in the body should
	 * be selected when row or column headers are selected.
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
	 * A decimal (or "floating point") number, for example, 5.5. May not be null.
	 */
	export type double = Double; // baseType='Double'


	/**
	 * An Identifier that's unique in the global scope. For example, the 
	 * Canvas.ID','ID of a Canvas is a GlobalId.
	 */
	export type GlobalId = Identifier; // baseType='Identifier'


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
	 * For DataSources of type "sql" and "hibernate", specifies the kind of inheritance to use when a dataSource
	 * specifies DataSource.inheritsFrom','inheritsFrom.
	 */
	export type DSInheritanceMode = 
		/** Inherit fields by copying them onto the inheriting DataSource's underlying table. When we 
	 * import a DataSource with this inheritanceMode, we create actual columns for inherited fields
	 * on the table we create. With this inheritanceMode, inherited fields are updatable. */
		"full"
		/** Do not physically inherit fields onto the inheriting DataSource's SQL table. Columns will
	 * not be created for inherited fields on import, and all generated SQL operations will exclude
	 * inherited fields. However, those fields are still part of the DataSource's schema so you
	 * can, for example, write customQuerying','custom SQL that returns values for 
	 * the inherited fields, and they will be delivered to the client. */
		| "none"
		;


	/**
	 * Entries for the DrawItem.knobs array. Each specified knobType will enable some UI 
	 * allowing the user to manipulate the DrawItem directly.
	 * 
	 * NOTE: Not all knob types are supported by each DrawItem type. Refer to the DrawItem
	 * type's DrawItem.knobs','knobs attribute documentation for a list of the supported knob types.
	 */
	export type KnobType = 
		/** Display up to 8 control knobs at the corners specified by DrawItem.resizeKnobPoints,
	 * allowing the user to drag-resize the item.
	 * See also DrawItem.cornerResizeKnob and DrawItem.sideResizeKnob. */
		"resize"
		/** Display a control knob for moving the item around. See also DrawItem.moveKnobPoint
	 * and DrawItem.moveKnobOffset */
		| "move"
		/** Control knob to manipulate DrawLine.startPoint. */
		| "startPoint"
		/** Control knob to manipulate DrawLine.endPoint. */
		| "endPoint"
		/** Display a draggable control knob along with a DrawLine indicating the angle between controlPoint1
	 * and the startPoint. Dragging the knob will adjust controlPoint1. */
		| "controlPoint1"
		/** Display a draggable control knob along with a DrawLine indicating the angle between controlPoint2
	 * and the endPoint. Dragging the knob will adjust controlPoint2. */
		| "controlPoint2"
		/** Display a rotation knob above the top resize knob, allowing the user to rotate the item.
	 * See also DrawItem.rotateKnob. */
		| "rotate"
		;


	/**
	 * A decimal (or "floating point") number, for example, 5.5. Null is allowed.
	 */
	export type Double = Number; // baseType='Number'


	/**
	 * One of the four basic operations that can be performed on DataSource data: "fetch",
	 * "add", "update", "remove". Elsewhere called CRUD operations, where CRUD stands for
	 * "create", "retrieve", "update", "delete", which correspond to "add", "fetch", "update" and
	 * "remove" in SmartClient terminology. See dataSourceOperations for a full
	 * description.
	 * 
	 * There are also additional, non-CRUD operations explained below.
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
		/** perform some arbitrary custom logic that is not a CRUD operation. Format of the inputs and outputs is unconstrained, and the operation
	 * will be ignored for cache sync purposes by ResultSets. See 
	 * DataSource.performCustomOperation. */
		| "custom"
		/** Run server-side validation for "add" or "update" without actually adding or updating anything. See DataSource.validateData. */
		| "validate"
		/** Retrieve a file stored in a binary field in a DataSource record, and allow the browser to choose whether to view it directly or prompt the
	 * user to save. See binaryFields. */
		| "viewFile"
		/** Like "viewFile", but the HTTP header Content-Disposition is used to suggest that the browser show a save dialog. See binaryFields. */
		| "downloadFile"
		/** Takes a List of Maps and stores the data in Admin Console XML test data format */
		| "storeTestData"
		/** Upload formatted client data and export it to Excel, XML and other formats. Used automatically by 
	 * DataSource.exportClientData','exportClientData() 
	 * and cannot be used directly. Usable only with the SmartClient server
	 * framework. */
		| "clientExport"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.getFile, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "getFile"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.hasFile, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "hasFile"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.listFiles, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "listFiles"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.removeFile, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "removeFile"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.saveFile, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "saveFile"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.renameFile, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "renameFile"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.getFileVersion, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "getFileVersion"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.hasFileVersion, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "hasFileVersion"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.listFileVersions, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "listFileVersions"
		/** Use the DataSource as a fileSource','source for files. Used automatically by DataSource.removeFileVersion, and
	 * would not normally be used directly. Usable only with
	 * the SmartClient server framework. */
		| "removeFileVersion"
		;


	/**
	 * Name for a field.
	 * 
	 * Must be unique across all fields within its container as well as a valid JavaScript
	 * identifier, as specified by ECMA-262 Section 7.6.
	 * 
	 * NOTE: The String.isValidID
	 * 
	 * function can be used to test whether a name is a valid JavaScript identifier.
	 */
	export type FieldName = String; // baseType='String'


	/**
	 * Form METHOD parameters - how the form fields are submitted to the server
	 */
	export type FormMethod = 
		/** GET request -- URL encoding (~4K max) */
		"GET"  // Original Value: DynamicForm.GET, How found: Looked up constant string
		/** POST request -- separate field encoding (no max) */
		| "POST"  // Original Value: DynamicForm.POST, How found: Looked up constant string
		;


	/**
	 * The technique SmartClient Server's SQL DataSource should use to select a "page" of data 
	 * from a table.
	 */
	export type SQLPagingStrategy = 
		/** Specify the paging directly in the SQL query we generate. The way this is done varies 
	 * considerably from database to database: with some it is a straightforward built-in 
	 * facility while others require arcane tricks or simply don't support the idea. This is 
	 * the most efficient method, where available. Note that this strategy is not supported 
	 * for operations that make use of a OperationBinding.customSQL','customSQL clause, 
	 * because it depends upon being able to determine the size of the whole dataset without
	 * actually retrieving the whole dataset. Ordinary operations do this by means of an 
	 * automatically-generated "row count query", but we cannot generate such a query for a 
	 * customSQL operation. */
		"sqlLimit"
		/** Implement the paging behavior by use of the absolute() method of the
	 * JDBC ResultSet. */
		| "jdbcScroll"
		/** Implement the paging behavior by fetching the entire resultset from the database and
	 * dropping any unnecessary rows on the server before returning the data to the client.
	 * This approach is extremely inefficient, but also extremely straightforward; it is 
	 * intended as a fallback option, for situations where the more sophisticated approaches
	 * cause problems (a JDBC driver that throws vague exceptions when absolute()
	 * is called, for example) */
		| "dropAtServer"
		/** No paging behavior: we always return the entire resultset to the client. */
		| "none"
		;


	/**
	 * The different ways in which the DrawItem.titleLabel','titleLabel of a DrawItem
	 * can be rotated with the item.
	 * 
	 * <strong>NOTE:</strong> The effect of the
	 * "withItemAlwaysUp" and "withLineAlwaysUp"
	 * 
	 * settings is not affected by the global rotation, if any (see DrawPane.rotation).
	 */
	export type TitleRotationMode = 
		/** the titleLabel is never rotated with the item. */
		"neverRotate"
		/** the titleLabel is rotated exactly to match the item's rotation (see DrawItem.rotation). */
		| "withItem"
		/** the titleLabel is rotated exactly to match the item's rotation, except that at certain rotations, the titleLabel is flipped
	 * by 180&deg; so that the title text is never upside down. */
		| "withItemAlwaysUp"
		/** (applies only to DrawLine and DrawLinePath) the titleLabel is rotated to match the line or center segment.
	 * 
	 * If used on a DrawItem that is not a DrawLine or DrawLinePath,
	 * then the effect is the same as
	 * "withItem".
	 *  */
		| "withLine"
		/** (applies only to DrawLine and DrawLinePath) the titleLabel is rotated to match the line or center segment, except that
	 * at certain rotations, the titleLabel is flipped by 180&deg; so that the
	 * title text is never upside down.
	 * 
	 * If used on a DrawItem that is not a DrawLine or DrawLinePath,
	 * then the effect is the same as
	 * "withItemAlwaysUp".
	 *  */
		| "withLineAlwaysUp"
		;


	/**
	 * The type of join to make between two SQL tables when resolving 
	 * DataSourceField.includeFrom','includeFrom fields.
	 */
	export type JoinType = 
		/** A regular inner join, whereby rows are only included in the resultset where the join can be satisified, so a missing row in the table being
	 * joined to results in the entire row being omitted. */
		"inner"
		/** An outer join. All outer joins generated by SmartClient's SQL subsystem are left outer joins, meaning that every row in the join-from (or "left")
	 * table that matches the criteria is included, and missing rows in the 
	 * join-to (or "right") table cause columns to be set to null. */
		| "outer"
		;


	/**
	 * What event / user interaction type caused cell editing to complete.
	 */
	export type EditCompletionEvent = 
		/** User clicked outside editor during edit. */
		"click_outside"  // Original Value: ListGrid.CLICK_OUTSIDE, How found: Looked up constant string
		/** User started editing another row by clicking on it */
		| "click"  // Original Value: ListGrid.CLICK, How found: Looked up constant string
		/** User started editing another row by double clicking */
		| "doubleClick"  // Original Value: ListGrid.DOUBLE_CLICK, How found: Looked up constant string
		/** Enter pressed. */
		| "enter"  // Original Value: ListGrid.ENTER_KEYPRESS, How found: Looked up constant string
		/** User pressed Escape. */
		| "escape"  // Original Value: ListGrid.ESCAPE_KEYPRESS, How found: Looked up constant string
		/** Up arrow key pressed. */
		| "arrow_up"  // Original Value: ListGrid.UP_ARROW_KEYPRESS, How found: Looked up constant string
		/** down arrow key. */
		| "arrow_down"  // Original Value: ListGrid.DOWN_ARROW_KEYPRESS, How found: Looked up constant string
		/** User pressed Tab. */
		| "tab"  // Original Value: ListGrid.TAB_KEYPRESS, How found: Looked up constant string
		/** User pressed Shift+Tab. */
		| "shift_tab"  // Original Value: ListGrid.SHIFT_TAB_KEYPRESS, How found: Looked up constant string
		/** Edit moved to a different field (same row) */
		| "field_change"  // Original Value: ListGrid.EDIT_FIELD_CHANGE, How found: Looked up constant string
		/** Edit completed via explicit function call */
		| "programmatic"  // Original Value: ListGrid.PROGRAMMATIC, How found: Looked up constant string
		;


	/**
	 * Controls where a drag-item should be dropped in relation to the target row
	 */
	export type ReorderPosition = 
		/** Drop the drag-item before the target-row */
		"before"  // Original Value: ListGrid.BEFORE, How found: Looked up constant string
		/** Drop the drag-item after the target-row */
		| "after"  // Original Value: ListGrid.AFTER, How found: Looked up constant string
		/** Drop the drag-item over (onto) the target-row */
		| "over"  // Original Value: ListGrid.OVER, How found: Looked up constant string
		;


	/**
	 * Controls how an object changes state when clicked
	 */
	export type SelectionType = 
		/** object moves to "down" state temporarily (normal button) */
		"button"  // Original Value: StatefulCanvas.BUTTON, How found: Looked up constant string
		/** object remains in "down" state until clicked again (checkbox) */
		| "checkbox"  // Original Value: StatefulCanvas.CHECKBOX, How found: Looked up constant string
		/** object moves to "down" state, causing another object to go up (radio) */
		| "radio"  // Original Value: StatefulCanvas.RADIO, How found: Looked up constant string
		;


	/**
	 * Controls the output of the JSONEncoder when instances of SmartClient classes (eg a ListGrid)
	 * are included in the data to be serialized.
	 */
	export type JSONInstanceSerializationMode = 
		/** instances will be shown as a specially formatted JSON listing the most relevant properties of the instance. Result is not expected to
	 * decode()/eval() successfully if instances are included. */
		"long"
		/** instances will be shown in a shorter format via a call to isc.echoLeaf. Result is not expected to decode()/eval() successfully if instances are
	 * included. */
		| "short"
		/** no output will be shown for instances (as though they were not present in the data). Result should decode()/eval() successfully (depending on other
	 * settings) */
		| "skip"
		;


	/**
	 * Where a DataBoundComponent.hiliteIcons','hilite icon will be placed relative to 
	 * normal cell content.
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
		"plain"  // Original Value: TableView.PLAIN, How found: Looked up constant string
		/** Grouped table is a set of rows embedded in a rounded rectangle */
		| "grouped"  // Original Value: TableView.GROUPED, How found: Looked up constant string
		;


	/**
	 * An object containing the stored grouping information for a detailViewer.
	 * Note that this object is not intended to be interrogated directly, but may be stored 
	 * (for example) as a blob on the server for state persistence across sessions.
	 */
	export type DetailViewerViewState = String; // baseType='String'


	/**
	 * A String of HTML, such as "<span class='somestyle'>text</span>".
	 * 
	 * In many contexts, such as Button.title and ListGrid.formatCellValue, an
	 * HTML String can be specified, allowing you to use normal HTML tags and CSS to do
	 * formatting or styling.
	 * 
	 * However, bear in mind that if you attempt any kind of layout or advanced styling in such
	 * an HTML string, different browsers may render the HTML differently - use SmartClient
	 * Layout','layout and Canvas.styleName','styling features wherever possible to
	 * avoid this. See also CSSStyleName.
	 */
	export type HTMLString = String; // baseType='String'


	/**
	 * What do we do with data that's been dropped into another list?
	 */
	export type DragDataAction = 
		/** Don't do anything, resulting in the same data being in both lists. */
		"none"
		/** Copy the data leaving the original in our list. */
		| "copy"  // Original Value: Canvas.COPY, How found: Looked up constant string
		/** Remove the data from this list so it can be moved into the other list. */
		| "move"  // Original Value: Canvas.MOVE, How found: Looked up constant string
		;


	/**
	 * Name of a SmartClient Class, that is, a Class that has been created via
	 * isc.defineClass, including Classes built into SmartClient, such as "ListGrid".
	 */
	export type SCClassName = String; // baseType='String'


	/**
	 * Passed as a parameter to Canvas.showClickMask to determine the masks behavior
	 * when clicked.
	 */
	export type ClickMaskMode = 
		/** When the mask receives a click, it will fire its click action, and cancel the event, leaving the clickMask up. */
		"hard"
		/** When the mask receives a click, it will fire its click action, then dismiss the clickMask and allow the event to proceed to its target. */
		| "soft"
		;


	/**
	 * Trees that dynamically load nodes keep track of whether each node has loaded its children.
	 */
	export type LoadState = 
		/** children have not been loaded and are not loading */
		"unloaded"  // Original Value: Tree.UNLOADED, How found: Looked up constant string
		/** currently in the process of loading */
		| "loading"  // Original Value: Tree.LOADING, How found: Looked up constant string
		/** folders only are already loaded */
		| "foldersLoaded"  // Original Value: Tree.FOLDERS_LOADED, How found: Looked up constant string
		/** already fully loaded */
		| "loaded"  // Original Value: Tree.LOADED, How found: Looked up constant string
		/** children form a ResultSet having only a partial cache (applies only to the "paged"
	 * ResultTree.fetchMode','fetchMode) */
		| "loadedPartialChildren"  // Original Value: Tree.LOADED_PARTIAL_CHILDREN, How found: Looked up constant string
		;


	/**
	 * The types of custom query that can be handled by SmartClient's built-in "sql" and 
	 * "hibernate" DataSources. Note, only applies to OperationBinding.operationType
	 * "custom".
	 */
	export type SQLType = 
		/** The custom SQL or HQL is read-only */
		"query"
		/** The custom SQL or HQL updates data */
		| "update"
		;


	/**
	 * A String to be used as a format specifier for a date, datetime, time or numeric field, via
	 * the DataSourceField.format','format and DataSourceField.exportFormat','exportFormat 
	 * properties. 
	 * 
	 * For fields with a numeric type, the format string is similar to java.text.NumberFormat (see
	 * <a href='http://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html' target='_blank'>DecimalFormat JavaDoc</a>),
	 * and for date, time, and datetime types, the format string is similar to
	 * java.text.SimpleDateFormat (see 
	 * <a href='http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html' target='_blank'>SimpleDateFormat JavaDoc</a>).
	 * 
	 * Note that all the client-side formatting described in this section is is done by the 
	 * NumberUtil.format','NumberUtil.format() and 
	 * DateUtil.format','DateUtil.format()
	 * 
	 * methods. These are static utility methods that your own code can call if you need to 
	 * programmatically format a date or number using a FormatString
	 * 
	 * There are 3 possible contexts where a FormatString may be interpreted, and each
	 * has slightly different limitations:
	 * 
	 * <h4>in-browser rendering &amp; client-driven exports</h4>
	 * Almost complete support for Java's SimpleDateFormat/DecimalFormat, as described below, with
	 * some small extensions for formatting with awareness of a FiscalCalendar.
	 * 
	 * This category includes cases where code running in the browser does the rendering and
	 * the rendered result is passed to the server, such as 
	 * ListGrid.exportClientData','client-driven export and
	 * RPCManager.exportContent','PDF export of the printed view.
	 * 
	 * <h4>Excel export</h4> 
	 * Almost the same as in-browser rendering, with minor limitations due to missing features in
	 * Excel. Exact differences are described under DataSourceField.exportFormat.
	 * 
	 * <h4>non-Excel server export</h4>
	 * For example, CSV, XML or JSON ExportFormat','export formats provided via
	 * DataSource.exportData. Full support for SimpleDateFormat/DecimalFormat
	 * as provided by whichever Java version you have installed on the server. However note that
	 * depending on the context of the export, the default behavior may be to ignore format
	 * strings, since formatting intended for end users wouldn't be desirable if data exchange is
	 * the goal. See the exportFormatting','Export Formatting overview for details.
	 * 
	 * 
	 * <h3>Date Format</h3>
	 * <table width="700" style="font-size:11px;border:1px solid black;">
	 * <tr><td style="color:white;background-color:black;">Format token</td>
	 * <td style="color:white;background-color:black;">Description</td>
	 * <td style="color:white;background-color:black;width:150px;">Sample value</td></tr>
	 * <tr><td>yy </td><td>Year as a two-digit number </td><td>"99" or "07"</td></tr>
	 * <tr><td>yyyy </td><td>Year as a four-digit number </td><td>"1999" or "2007"</td></tr>
	 * <tr><td>YY </td><td>Week year as a two-digit number (week year is the year associated with the entire week deemed to contain a given date, and it may differ from calendar year. For example, the week year of December 31 2012 is 2013)</td><td>"99" or "07"</td></tr>
	 * <tr><td>YYYY </td><td>Week year as a four-digit number </td><td>"1999" or "2007"</td></tr>
	 * <tr><td>LL </td><td>Fiscal year as a two-digit number (FiscalCalendar)</td><td>"99" or "07"</td></tr>
	 * <tr><td>LLLL </td><td>Fiscal year as a four-digit number </td><td>"1999" or "2007"</td></tr>
	 * <tr><td>M </td><td>Month in year </td><td>"1" to "12"</td></tr>
	 * <tr><td>MM </td><td>Month in year with leading zero if required </td><td>"01" to "12"</td></tr>
	 * <tr><td>MMM </td><td>Short month name (DateUtil.shortMonthNames) </td><td>"Jan" to "Dec"</td></tr>
	 * <tr><td>MMMM </td><td>Full month name (DateUtil.monthNames) </td><td>"January" to "December"</td></tr>
	 * <tr><td>w </td><td>Week in year </td><td>"1" to "52"</td></tr>
	 * <tr><td>ww </td><td>Week in year with leading zero if required </td><td>"01" to "52"</td></tr>
	 * <tr><td>C </td><td>Week in fiscal year (FiscalCalendar) </td><td>"7" or "29"</td></tr>
	 * <tr><td>CC </td><td>Week in fiscal year with leading zero if required </td><td>"07" or "29"</td></tr>
	 * <tr><td>d </td><td>Day of the month </td><td>"1" to "31"</td></tr>
	 * <tr><td>dd </td><td>Day of the month with leading zero if required </td><td>"01" to "31"</td></tr>
	 * <tr><td>ddd </td><td>Short day name (DateUtil.shortDayNames) </td><td>"Mon" to "Sun"</td></tr>
	 * <tr><td>dddd </td><td>Full day name. (DateUtil.dayNames) </td><td>"Monday" to "Sunday"</td></tr>
	 * <tr><td>E </td><td>Short day name ("EE" and "EEE" are equivalent; all are exactly the same as "ddd" - "E" is supported purely to conform with SimpleDateFormat)</td><td>"Mon" to "Sun"</td></tr>
	 * <tr><td>EEEE </td><td>Full day name (exactly the same as "dddd") </td><td>"Monday" to "Sunday"</td></tr>
	 * <tr><td>D </td><td>Day in year </td><td>"1" to "366"</td></tr>
	 * <tr><td>DD </td><td>Day in year with leading zero if required </td><td>"01" to "366"</td></tr>
	 * <tr><td>c </td><td>Day in fiscal year (FiscalCalendar) </td><td>"5" or "204"</td></tr>
	 * <tr><td>cc </td><td>Day in fiscal year with leading zero if required </td><td>"05" or "204"</td></tr>
	 * <tr><td>u </td><td>Day number in week (1 is Monday) </td><td>"1" to "7"</td></tr>
	 * <tr><td>H </td><td>Hour in day, 0-23 (24-hour clock) </td><td>"0" to "23"</td></tr>
	 * <tr><td>HH </td><td>Hour in day with leading zero if required (24-hour) </td><td>"00" to "23"</td></tr>
	 * <tr><td>h </td><td>Hour in day, 1-12 (12-hour clock) </td><td>"1" to "12"</td></tr>
	 * <tr><td>hh </td><td>Hour in day with leading zero if required (12-hour) </td><td>"01" to "12"</td></tr>
	 * <tr><td>m </td><td>Minute in hour </td><td>"0" to "59"</td></tr>
	 * <tr><td>mm </td><td>Minute in hour with leading zero if required </td><td>"00" to "59"</td></tr>
	 * <tr><td>s </td><td>Second in minute </td><td>"0" to "59"</td></tr>
	 * <tr><td>ss </td><td>Second in minute with leading zero if required </td><td>"00" to "59"</td></tr>
	 * <tr><td>S </td><td>Millisecond in minute </td><td>"0" to "999"</td></tr>
	 * <tr><td>SSS </td><td>Millisecond in minute with leading zero(s) if required</td><td>"000" to "999"</td></tr>
	 * <tr><td>a </td><td>The AM/PM designator (Time.AMIndicator) </td><td>" am" or " pm"</td></tr>
	 * </table>
	 * 
	 * Note that all text that doesn't represent tokens specified above will be passed through to
	 * the output, but such unmapped character sequences are reserved for future use. To
	 * future-proof your code, you may single quote "'" any text to escape it to ensure
	 * no formatting is applied, guaranting that it's passed through unaltered. Thus, a format of
	 * "h'h'" might end up as "5h". To create a single quote itself, use
	 * two in a row - for example "h o''clock".
	 * 
	 * <h3>Examples - various formatted versions of the datetime "2006-08-03 11:26:18"</h3>
	 * <table>
	 * <tr><td width="150">"M/d/yy"</td><td width="300">8/3/06</td></tr>
	 * <tr><td>"MMMM yyyy"</td><td>August 2006</td></tr>
	 * <tr><td>"HH:mm"</td><td>11:26</td></tr>
	 * <tr><td>"d MMM yyyy, H:ma"</td><td>3 Aug 2006, 11:26 am</td></tr>
	 * <tr><td>"dd/MM/yyyy"</td><td>03/08/2006</td></tr>
	 * <tr><td>"CC/LLLL"</td><td>53/2006 (assuming the fiscal year ends in the first week of August)</td></tr>
	 * </table>
	 * 
	 * <h3>SimpleDateFormat specifiers that we do not support:</h3>
	 * 
	 * Era designator, BC/AD (G)
	 * Day of week in month (F)
	 * Hour in day, 24-hour, with 1-based instead of normal 0-based numbering (hours are 1-24) (k)
	 * Hour in day, 12-hour, with 0-based instead of normal 1-based numbering (hours are 0-11) (K)
	 * Timezone (z, Z, X)
	 * 
	 * &nbsp;
	 * <h3>Number Format</h3>
	 * <table width="700" style="font-size:11px;border:1px solid black;">
	 * <tr><td style="color:white;background-color:black;">Format char</td>
	 * <td style="color:white;background-color:black;">Description</td>
	 * <tr><td>0 </td><td>Digit, zero is displayed</td></tr>
	 * <tr><td># </td><td>Digit, zero is not displayed</td></tr>
	 * <tr><td>- </td><td>Minus sign</td></tr>
	 * <tr><td>. </td><td>Decimal separator</td></tr>
	 * <tr><td>% </td><td>Multiply by 100 and show as percentage</td></tr>
	 * <tr><td>&#x2030; (\u2030) </td><td>Multiply by 1000 and show as per mille. See below.</td></tr>
	 * <tr><td>, </td><td>Indicates digit grouping should be used - eg 1,000,000. See below.</td></tr>
	 * <tr><td>; </td><td>Separates positive and negative subpatterns. See below.</td></tr>
	 * <tr><td>&#x00a4; (\u00A4) </td><td>As a prefix or suffix, indicates the local currency symbol should be used. Note that you must use special notation to include this character in an XML file (such as a .ds.xml file). See below.</td></tr>
	 * <tr><td>' </td><td>Used to quote special characters in a prefix or suffix, for example, "'#'#" formats 123 to "#123". To create a single quote itself, use two in a row: "# o''clock".</td></tr>
	 * </table>
	 * 
	 * All other characters in the format string are taken literally and output unchanged.
	 * 
	 * <h3>Examples</h3>
	 * <table style="font-size:11px;border:1px solid black;">
	 * <tr><td width="150" style="color:white;background-color:black;">Format string</td>
	 * <td width="150" style="color:white;background-color:black;">Zero value</td>
	 * <td width="150" style="color:white;background-color:black;">Positive value: 12345.678</td>
	 * <td width="150" style="color:white;background-color:black;">Negative value: -2345.123</td>
	 * <tr><td>"0.00"</td><td>0.00</td><td>12345.68</td><td>-2345.12</td></tr>
	 * <tr><td>",##0.00"</td><td>0.00</td><td>12,345.68</td><td>-2,345.12</td></tr>
	 * <tr><td>"0.###"</td><td>0</td><td>12345.678</td><td>-2345.123</td></tr>
	 * <tr><td>"&#x00a4;,0.00"</td><td>$0.00</td><td>$12,345.68</td><td>-$2345.12</td></tr>
	 * <tr><td>"0.0#%"</td><td>0.0%</td><td>1234567.8%</td><td>-234512.3%</td></tr>
	 * <tr><td>"0.0#&#x2030;"</td><td>0.0&#x2030;</td><td>12345678.0&#x2030;</td><td>-2345123.0&#x2030;</td></tr>
	 * <tr><td>"0.0#'%'"</td><td>0.0%</td><td>12345.68%</td><td>-2345.12%</td></tr>
	 * <tr><td>"0.00;(0.00)"</td><td>0.0%</td><td>12345.68</td><td>(2345.12)</td></tr>
	 * </table>
	 * Note, the above examples include cases where there are multiple '#' characters in the integer
	 * part of the number format (ie, to the left of the decimal separator, or the entire format 
	 * if there is no separator). We support this pattern simply because DecimalFormat
	 * does: the extra '#' characters are not significant. In other words, the format "##0.00" 
	 * produces exactly the same formatting as "0.00", and "##,###,###.##" produces exactly the 
	 * same formatting as ",#.##". However, multiple '0' characters in the integer part of the 
	 * format <em>are</em> significant, as are both '#' and '0' characters in the decimal part 
	 * of the format (ie, to the right of any decimal separator).
	 * 
	 * The ";" character marks the boundary between two subpatterns - the first to be used for 
	 * formatting positive numbers (and 0), the second for negative numbers. Specifying a separate
	 * pattern for negative numbers is optional: if no negative subpattern is specified, negative
	 * numbers are formatted like positive numbers, but with a leading "-" sign.
	 * 
	 * The "&#x00a4;" symbol (\u00A4) is documented in the Java DecimalFormat class as a placeholder for the currency
	 * symbol appropriate to the current locale. For client-driven exports, we replace it with
	 * 
	 * the NumberUtil.currencySymbol','localized currency symbol.
	 * Likewise, we use NumberUtil.decimalSymbol','decimalSymbol and
	 * NumberUtil.groupingSymbol','groupingSymbol to localize the formatting of numbers.
	 * 
	 * 
	 * Note that "\u00A4" is the correct way to specify this character in Javascript code. If you
	 * need to specify the character in an XML file - the common requirement is in a .ds.xml
	 * DataSource descriptor file - you must use the code "&amp;#x00A4;" instead.
	 * 
	 * The "&permil;" per mille symbol is specified as "\u2030" in Javascript code; in XML or HTML 
	 * you can use either the equivalent notation "&amp;#x2030;" or the special HTML code 
	 * "&amp;permil;".
	 * 
	 * 
	 * <h3>DecimalFormat features that we do not support:</h3>
	 * 
	 * Scientific notation
	 * Doubled currency symbol means "use international currency symbol"
	 * We do not support arbitrary digit grouping, by providing patterns of the '#' and ','
	 * characters, like DecimalFormat does. Grouping in SmartClient FormatStrings
	 * is enabled with a single "," character somewhere before or within the number-formatting
	 * part of the string - extra "," characters within the number-formatting part of the string 
	 * are tolerated, but they have no effect. Grouping in SmartClient always causes digits to 
	 * be gathered in groups of three
	 * 
	 */
	export type FormatString = String; // baseType='String'

	export type Overflow = 
		/** Content that extends beyond the widget's width or height is displayed.
	 * Note: To have the content be sized only by the drawn size of
	 * the content set the overflow to be Canvas.VISIBLE and specify
	 * a small size, allowing the size to expand to the size required
	 * by the content.
	 * Leaving the width / height for the widget undefined will use the
	 * default value of 100, and setting the size to zero may cause the
	 * widget not to draw. */
		"visible"  // Original Value: Canvas.VISIBLE, How found: Looked up constant string
		/** Content that extends beyond the widget's width or height is clipped (hidden). */
		| "hidden"  // Original Value: Canvas.HIDDEN, How found: Looked up constant string
		/** Horizontal and/or vertical scrollbars are displayed only if necessary. Content that extends beyond the remaining visible
	 * area is clipped. */
		| "auto"  // Original Value: Canvas.AUTO, How found: Looked up constant string
		/** Horizontal and vertical scrollbars are always drawn inside the widget. Content that extends beyond the remaining visible area
	 * is clipped, and can be accessed via scrolling. */
		| "scroll"  // Original Value: Canvas.SCROLL, How found: Looked up constant string
		/** Clip horizontally but extend the canvas's clip region vertically if necessary. Note: only supported for
	 * specific widget subclasses. */
		| "clip-h"  // Original Value: Canvas.CLIP_H, How found: Looked up constant string
		/** Clip vertically but extend the canvas's clip region horizontally if necessary. Note: only supported
	 * for specific widget subclasses. */
		| "clip-v"  // Original Value: Canvas.CLIP_V, How found: Looked up constant string
		;


	/**
	 * Standard component-type displayed within a ListGrid, as contained by ListGrid.gridComponents.
	 */
	export type ListGridComponent = 
		/** The standard filter-component displayed when ListGrid.showFilterEditor is true */
		"filterEditor"
		/** The header-component displayed when ListGrid.showHeader is true. */
		| "header"
		/** The body component for the grid. */
		| "body"
		/** The summary-row component displayed when ListGrid.showGridSummary is true. */
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
	 * Action to take if a user attempts to save the dataset produced by a BatchUploader
	 * whilst it still contains errors.
	 */
	export type PartialCommitOption = 
		/** Silently allow the partial commit to proceed (note that this will result in the user losing those records that contain errors) */
		"allow"
		/** Pop up a message window showing the BatchUploader.partialCommitError and prevent the partial commit */
		| "prevent"
		/** Pop up a confirmation window with the BatchUploader.partialCommitPrompt and allow the user to choose
	 * whether or not to proceed */
		| "prompt"
		/** Commit any records that are error-free and remove them from the grid. If any records had errors, leave them in the grid and leave the
	 * grid visible. If no records had errors, run normal cleanup as we would 
	 * for "allow". This option allows the user to fix errors iteratively,
	 * rather than having to fix everything upfront before committing */
		| "retain"
		;


	/**
	 * Mode of validation used for running validation on partially entered data.
	 */
	export type ValidationMode = 
		/** Assume provided data is complete and run all validation rules */
		"full"
		/** Validate only the data values that are present ignoring the absence of required fields, validators that refer to fields
	 * that are not present, and any conditional validators dependent
	 * on fields that are not present. */
		| "partial"
		;


	/**
	 * The Velocity variable names of the "pieces" of SQL that SmartClient generates to form a
	 * complete fetch or update query. You can use these variables in you own custom queries 
	 * and query clause overrides to build on the SmartClient functionality. See 
	 * customQuerying for a full discussion.
	 */
	export type DefaultQueryClause = 
		/** The column names to select, for a fetch operation only */
		"$defaultSelectClause"
		/** The table name(s) to select from or update */
		| "$defaultTableClause"
		/** The "where" condition, which will be derived from supplied criteria or a primary key value, depending on the type of 
	 * operation */
		| "$defaultWhereClause"
		/** The column names to update and the update values, for an update or add operation */
		| "$defaultValuesClause"
		/** The column names to sort by, for a fetch operation only */
		| "$defaultOrderClause"
		;


	/**
	 * A String containing a valid JavaScript expression that's automatically converted to a
	 * function with a return value matching the value of the last statement.
	 * 
	 * See stringMethods for an example.
	 */
	export type StringMethod = String; // baseType='String'


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
	 * For PickList items with PickListItemIconPlacement set such that the pickList does
	 * not render near-origin, possible location for rendering formItemIcons.
	 */
	export type PickListItemIconPlacement = 
		/** icon will be displayed in the ComboBoxItem.pickerNavigationBar','pickerNavigationBar only (and not rendered
	 * inline within the formItem itself) */
		"pickerNavigationBar"
		/** icon will be displayed inline within the form item itself (and not within the
	 * ComboBoxItem.pickerNavigationBar','pickerNavigationBar */
		| "formItem"
		/** icon will be displayed both inline (within the form item itself) and within the
	 * ComboBoxItem.pickerNavigationBar','pickerNavigationBar */
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
		/** selected rows should be shown with different appearance - see ListGrid.getCellStyle and optionally
	 * ListGrid.selectionCanvas. */
		"rowStyle"
		/** an extra, non-data column should be automatically added to the ListGrid, showing checkboxes that can be toggled to select rows.
	 * See ListGrid.getCheckboxField. */
		| "checkbox"
		;


	/**
	 * Algorithms to use when hashing field values (see DataSourceField.storeWithHash)
	 */
	export type HashAlgorithm = 
		/** Message Digest algorithm 5 */
		"MD5"
		/** Secure Hashing Algorithm (SHA-1) */
		| "SHA"
		;


	/**
	 * A Callback is an arbitrary action to be fired - usually passed into a 
	 * method to be fired asynchronously as a notificaction of some event.
	 * The callback can be defined in the following formats:
	 * a function
	 * A string containing an expression to evaluate
	 * An object with the following properties:
	 * - target: fire in the scope of this target - when the action fires,
	 * the target will be available as this.
	 * - methodName: if specified we'll check for a method on the target object with this 
	 * name.
	 * 
	 * Callbacks are fired via the Class.fireCallback method, which allows
	 * named parameters to be passed into the callback at runtime. If the Callback was specified
	 * as a string of script, these parameters are available as local variables at eval time.
	 * For specific SmartClient methods that make use of Callback objects, see
	 * local documentation for information on parameters and scope.
	 */
	export type Callback = any; // baseType='<none>'


	/**
	 * Strings to identify the various keys on the keyboard.
	 * 
	 * For alpha keys, the single (uppercase) character value is used, such as "Q"
	 * For Numeric keys, the number is used as in a single character string, like "1"
	 * Function keys are identified as "f1" - "f12"
	 * Non alpha-numeric character keys (such as the key for "[" / "{") are identified by
	 * their unmodified character value (the value obtained by hitting the key without 
	 * holding shift down), by default - exceptions are listed below.
	 * Additional key names:
	 * - Space 
	 * - Tab 
	 * - Enter
	 * - Escape
	 * - Backspace
	 * - Insert
	 * - Delete
	 * - Arrow_Up
	 * - Arrow_Down
	 * - Arrow_Left
	 * - Arrow_Right 
	 * - Home
	 * - End
	 * - Page_Up 
	 * - Page_Down 
	 * - Shift
	 * - Ctrl
	 * - Alt
	 * 
	 * [Note: Some keys may not be available for capture on every platform]
	 */
	export type KeyName = String; // baseType='String'


	/**
	 * Simple string identifiers for standard menu fields.
	 */
	export type MenuFieldID = 
		/** Displays the icon field for the menu. This field contains the items specified icon (if there is one), or if the item is checked, the
	 * checkmark icon for the item. */
		"icon"
		/** Displays the item's title */
		| "title"
		/** Displays the key field for the menu. This field contains the name or title of any shortcut keys for this menu item. */
		| "key"
		/** Field to display the submenu image for items that have a submenu. */
		| "subMenu"
		;


	/**
	 * An operator is used as part of a Criterion when specifying AdvancedCriteria.
	 * 
	 * This list of operators indicates the set of operators built into SmartClient DataSources,
	 * which can be used for both client and server-side filtering. You can extend the list of
	 * operators with DataSource.addSearchOperator.
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
		/** shortcut for "greaterThan" + "and" + "lessThan" (case insensitive) */
		| "iBetween"
		/** shortcut for "greaterOrEqual" + "and" + "lessOrEqual" (case insensitive) */
		| "iBetweenInclusive"
		/** Basic GLOB matching using wildcards (see DataSource.translatePatternOperators for more information on available patterns) */
		| "matchesPattern"
		/** Basic GLOB matching using wildcards (case insensitive) (see DataSource.translatePatternOperators for more information on available patterns) */
		| "iMatchesPattern"
		/** GLOB matching using wildcards. Value is considered to meet the criterion if it contains the pattern. See DataSource.translatePatternOperators
	 * for more information on available patterns) */
		| "containsPattern"
		/** GLOB mathcing using wildcards. Value is considered to meet the criterion if it starts with the pattern.See DataSource.translatePatternOperators
	 * for more information on available patterns) */
		| "startsWithPattern"
		/** GLOB mathcing using wildcards. Value is considered to meet the criterion if it starts with the pattern.See DataSource.translatePatternOperators
	 * for more information on available patterns) */
		| "endsWithPattern"
		/** GLOB matching using wildcards. Value is considered to meet the criterion if it contains the pattern. Matching is case insensitive. See
	 * DataSource.translatePatternOperators for more information on available patterns) */
		| "iContainsPattern"
		/** GLOB matching using wildcards. Value is considered to meet the criterion if it starts with the pattern. Matching is case insensitive.See 
	 * DataSource.translatePatternOperators for more information on available patterns) */
		| "iStartsWithPattern"
		/** GLOB matching using wildcards.Value is considered to meet the criterion if it ends with the pattern. Matching is case insensitive. See 
	 * DataSource.translatePatternOperators for more information on available patterns) */
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
		/** value is non-null. Note empty string ("") is non-null */
		| "notNull"
		/** value is in a set of values. Specify criterion.value as an Array */
		| "inSet"
		/** value is not in a set of values. Specify criterion.value as an Array */
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
		/** Greater than or equal to another field (specify fieldName as criterion.value) */
		| "greaterOrEqualField"
		/** Less than or equal to another field (specify fieldName as criterion.value) */
		| "lessOrEqualField"
		/** Contains as sub-string (match case) another field value (specify fieldName as criterion.value) */
		| "containsField"
		/** Starts with (match case) another field value (specify fieldName as criterion.value) */
		| "startsWithField"
		/** Ends with (match case) another field value (specify fieldName as criterion.value) */
		| "endsWithField"
		/** Contains as sub-string (case insensitive) another field value (specify fieldName as criterion.value) */
		| "iContainsField"
		/** Starts with (case insensitive) another field value (specify fieldName as criterion.value) */
		| "iStartsWithField"
		/** Ends with (case insensitive) another field value (specify fieldName as criterion.value) */
		| "iEndsWithField"
		/** Does not contain as sub-string (match case) another field value (specify fieldName as criterion.value) */
		| "notContainsField"
		/** Does not start with (match case) another field value (specify fieldName as criterion.value) */
		| "notStartsWithField"
		/** Does not end with (match case) another field value (specify fieldName as criterion.value) */
		| "notEndsWithField"
		/** Does not contain as sub-string (case insensitive) another field value (specify fieldName as criterion.value) */
		| "iNotContainsField"
		/** Does not start with (case insensitive) another field value (specify fieldName as criterion.value) */
		| "iNotStartsWithField"
		/** Does not end with (case insensitive) another field value (specify fieldName as criterion.value) */
		| "iNotEndsWithField"
		/** all subcriteria (criterion.criteria) are true */
		| "and"
		/** all subcriteria (criterion.criteria) are false */
		| "not"
		/** at least one subcriteria (criterion.criteria) is true */
		| "or"
		/** shortcut for "greaterThan" + "lessThan" + "and". Specify criterion.start and criterion.end */
		| "between"
		/** shortcut for "greaterOrEqual" + "lessOrEqual" + "and". Specify criterion.start and criterion.end */
		| "betweenInclusive"
		;


	/**
	 * Supported positioning of the chart Title.
	 */
	export type TitleAlign = 
		/** Align to the left of the chart title header */
		"left"
		/** Align centrally in the chart title header */
		| "center"
		/** Align to the right of the chart title header */
		| "right"
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
	 * The data URL MIME type to use when DrawPane.getDataURL is called to convert the
	 * drawing to a data URL.
	 */
	export type DataURLFormat = 
		/** Any MIME type supported by the browser is acceptable. Note: The exact MIME type used may depend on the browser, and may change from version to version of SmartClient. */
		"any"
		/** Generate an image/png data URL. */
		| "png"
		;


	/**
	 * Indicates the kind of value expected in a Criterion that uses this operator.
	 */
	export type OperatorValueType = 
		/** Criterion.value should contain a value of the same type as the field. */
		"fieldType"
		/** Criterion.value should be the name of another field in the record */
		| "fieldName"
		/** no criterion.value or other setting required (used for operators like isBlank or isNull). */
		| "none"
		/** Criterion.criteria should be an Array of criteria (used for logical operators like "and"). */
		| "criteria"
		/** Criterion.start and Criterion.end should contain start and end values, both of the same type as the field. */
		| "valueRange"
		/** Criterion.value should contain an Array of valid field values. */
		| "valueSet"
		/** Criterion.value should contain a value which is not necessarily the same type as the field (used for regexp and similar operators). 
	 * Operator.editorType can be specified as a FormItem to use to
	 * enter a value for the criterion. */
		| "custom"
		;


	/**
	 * Flag passed to functions as displayNodeType, telling the function whether it should work on
	 * folders, leaves or both at once.
	 */
	export type DisplayNodeType = 
		/** operate on both folders and leaves */
		"null"  // How found:  Original value
		/** operate on folders only, ignoring leaves */
		| "folders"
		/** operate on leaves only, ignoring folders */
		| "leaves"
		;


	/**
	 * A RelativeDateShortcut is a special string that represents a shortcut to a date phrase that can 
	 * be automatically mapped to a RelativeDateString for use in widgets that 
	 * leverage relative-dates, such as the RelativeDateItem.
	 * 
	 * Note that some shortcuts indicate a time period but do not directly indicate whether the value
	 * refers to the start or end of the time period in question. This ambiguity
	 * can be resolved by specifying an explicit RelativeDateRangePosition when calling APIs that 
	 * convert from RelativeDates to absolute date values. This is the case for $today, 
	 * $tomorrow, $yesterday, $weekAgo, $weekFromNow, $monthAgo
	 * and $monthFromNow. If a range position is not explicitly passed, these will all default
	 * to the start of the day in question.
	 * 
	 * Builtin options include
	 * 
	 * $now - this moment 
	 * $today - the current day. By default this resolves to the start of the current day though
	 * an explicit RelativeDateRangePosition may be used to specify the end of the current day.
	 * $startOfToday - the start of today
	 * $endOfToday - the end of today (one millisecond before the $startOfTomorrow) 
	 * $yesterday - the previous day.
	 * $startOfYesterday - the start of yesterday
	 * $endOfYesterday - the end of yesterday (one millisecond before the $startOfToday) 
	 * $tomorrow - the following day
	 * $startOfTomorrow - the start of tomorrow 
	 * $endOfTomorrow - the end of tomorrow 
	 * $weekAgo - the current day of the previous week 
	 * $weekFromNow - the current day of the next week 
	 * $startOfWeek - the start of the current week 
	 * $endOfWeek - the end of the current week 
	 * $monthAgo - the current day of the previous month 
	 * $monthFromNow - the current day of the following month 
	 * $startOfMonth - the start of the current month 
	 * $endOfMonth - the end of the current month 
	 * $startOfYear - the start of the current year 
	 * $endOfYear - the end of the current year 
	 * 
	 * 
	 * 
	 */
	export type RelativeDateShortcut = String; // baseType='String'


	/**
	 * A whole number, for example, 5. Decimal numbers, for example 5.5, are not allowed. May not
	 * be null.
	 */
	export type int = Integer; // baseType='Integer'


	/**
	 * What type of content is found at the HTMLFlow's HTMLFlow.contentsURL','contentsURL?
	 */
	export type ContentsType = 
		/** the contentsURL is assumed to be a standalone HTML page, and is loaded in an IFRAME. */
		"page"
		/** the default setting - indicates that HTML loaded from the contentsURL is assumed to be an HTML fragment rather than a complete page. */
		| "fragment"
		;


	/**
	 * Supported data point shapes for FacetChart.pointShapes are:
	 */
	export type PointShape = 
		"Oval"  // How found:  Original value
		| "Square"  // How found:  Original value
		| "Diamond"  // How found:  Original value
		| "Triangle"  // How found:  Original value
		;


	/**
	 * XMLDocument is the "parsed" or object form of XML, which allows XML to be navigated as
	 * a tree of nodes with attributes, namespaces and other metadata, as opposed to being
	 * manipulated as just a String.
	 * 
	 * XMLDocument is a native object supplied directly by the browser. The SmartClient-supported
	 * interfaces for this object are methods that take an XMLDocument as an argument (such as
	 * XMLTools.selectNodes). If you want to retrieve XML data and display it in a
	 * SmartClient component, read about clientDataIntegration','XML Data Binding. To
	 * extract data as JavaScript Objects from XML, see XMLTools.toJS. Direct
	 * manipulation of XMLDocument is subject to cross-browser inconsistencies, bugs, memory leaks
	 * and performance issues.
	 */
	export type XMLDocument = any; // baseType='<none>'


	/**
	 * Orientation of titles relative to the FormItem being labeled. Can be set a the
	 * DynamicForm level as a default, or on individual items.
	 */
	export type TitleOrientation = 
		"left"
		| "top"
		| "right"
		;


	/**
	 * An object containing the stored selection information for a listGrid.
	 * Note that this object is not intended to be interrogated directly, but may be stored
	 * (for example) as a blob on the server for state persistence across sessions.
	 */
	export type ListGridSelectedState = String; // baseType='String'


	/**
	 * When records are being dragged from within a ListGrid, what sort of drag-tracker
	 * should be displayed?
	 */
	export type DragTrackerMode = 
		/** Don't display a drag tracker at all */
		"none"
		/** Display an icon to represent the record(s) being dragged. Icon src is derived from ListGrid.getDragTrackerIcon */
		| "icon"
		/** Display a title for the record being dragged. Title derived from ListGrid.getDragTrackerTitle */
		| "title"
		/** Display the entire record being dragged */
		| "record"
		;


	/**
	 * Function to produce a summary value based on field values within a record.
	 * Example usage is record-level summaries in 
	 * ListGridFieldType','"summary" type ListGrid fields.
	 * 
	 * SummaryFunctions may be specified in one of 2 ways:
	 * as an explicit function or executable
	 * stringMethods','StringMethod. Takes 3 parameters:
	 * record the record for which the value is being calculated
	 * fields Array of listGridFields from which summaries should be calculated
	 * summaryField pointer to the summary type field on which the summary function
	 * is being run.
	 * As a registered RecordSummaryFunction identifier
	 * Note that DataSource.registerRecordSummaryFunction may be used to expand the
	 * set of registered RecordSummaryFunctions.
	 */
	export type RecordSummaryFunction = 
		/** Iterates through each field, picking up the numeric field values from the record and summing them. */
		"sum"  // How found:  Original value
		/** Iterates through each field, picking up the numeric field values from the record and calculating the mean value. */
		| "avg"  // How found:  Original value
		/** Iterates through each field, picking up the numeric field values from the record and calculating the maximum value. */
		| "max"  // How found:  Original value
		/** Iterates through each field, picking up the numeric field values from the record and calculating the minimum value. */
		| "min"  // How found:  Original value
		/** Iterates through each field, picking up the numeric field values from the record and multiplying them together. */
		| "multiplier"  // How found:  Original value
		;

	export type ImageStyle = 
		/** Center (and don't stretch at all) the image if smaller than its enclosing frame.CENTER:"center", */
		"center"  // Original Value: Canvas.CENTER, How found: Looked up constant string
		/** Tile (repeat) the image if smaller than its enclosing frame. */
		| "tile"  // Original Value: Canvas.TILE, How found: Looked up constant string
		/** Stretch the image to the size of its enclosing frame. */
		| "stretch"  // Original Value: Canvas.STRETCH, How found: Looked up constant string
		/** Allow the image to have natural size */
		| "normal"  // Original Value: Canvas.NORMAL, How found: Looked up constant string
		;


	/**
	 * Strategy for determining how to place maximum-sized labels for DrawItem.titleAutoFit.
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
	 * This string is the base CSS class name applied to a FormItem (or some part of a form item). 
	 * See the formItemStyling','formItem styling overview for more information about
	 * styling formItems.
	 * 
	 * The specified style name will be modified as the 'state' of the form item changes. 
	 * Developers should provide appropriately named CSS classes for each stateful style
	 * described below:
	 * If FormItem.showPending is true, when the current value differs from the
	 * value that would be restored by a call to DynamicForm.resetValues, this style
	 * will have the suffix "Pending" appended to it.
	 * If FormItem.showFocused is true, when the form item receives focus, this
	 * style will have the suffix "Focused" appended to it.
	 * If FormItem.showOver is true, roll-over will be indicated by appending the
	 * suffix "Over" appended to the style name. This applies to the
	 * FormItem.textBoxStyle','textBoxStyle and
	 * FormItem.controlStyle','controlStyle only.
	 * If FormItem.showErrorStyle is true, if the form item has errors, this
	 * style will have the suffix "Error" appended to it.
	 * If FormItem.showDisabled is true, when the form item is disabled, this
	 * style will have the suffix "Disabled" appended to it.
	 * Finally, if FormItem.showRTL is true, when the form item is in RTL mode, this
	 * style will have the suffix "RTL" appended to it.
	 * So for example if the cellStyle for some form item is set to "formCell" and showFocused
	 * is true, when the form item receives focus, the form item's cell will have the "formCellFocused"
	 * style applied to it.
	 */
	export type FormItemBaseStyle = String; // baseType='String'


	/**
	 * Policy for laying out tiles. 
	 * 
	 * Because a TileLayout can be either horizontally or vertically oriented, the general term
	 * "line" is used to mean either a row or column of tiles. 
	 * 
	 * NOTE: for typical form layouts (a variety of input fields and buttons in a
	 * tabular layout with col-spanning and row-spanning support), use a DynamicForm and
	 * see the formLayout topic.
	 */
	export type TileLayoutPolicy = 
		/** Each line has the same number of tiles, based on TileLayout.tilesPerLine if set, otherwise,
	 * based on fitting as many tiles per line as possible consistent with
	 * TileLayout.tileSize','tileSize and TileLayout.tileMargin. 
	 * 
	 * Tiles that do not specify a size will be sized to fill available space. */
		"fit"
		/** Tiles are laid out with varying numbers of tiles per line according to each tile's size,
	 * the TileLayout.tileMargin','tileMargin, and the available space.
	 * 
	 * Tiles are never resized by the TileLayout and TileLayout.tileSize is ignored. */
		| "flow"
		;

	export type MultiAutoChild = any; // baseType='<none>'


	/**
	 * Mode for escaping text values when using DataSource.recordsAsText or
	 * DataSource.recordsFromText.
	 */
	export type EscapingMode = 
		/** Literal double quotes in data values are doubled (""), as expected by Microsoft Excel when pasting text values */
		"double"
		/** double quotes in data values have a blackslash (\) prepended, similar to String escaping in JavaScript and Java */
		| "backslash"
		;


	/**
	 * Order of pickers and which pickers are present when using a DateItem with
	 * DateItem.useTextField false.
	 */
	export type DateItemSelectorFormat = 
		/** Output fields in day, month, year order. */
		"DMY"  // Original Value: DateItem.DAY_MONTH_YEAR, How found: Looked up constant string
		/** Output fields in month, day, year order. */
		| "MDY"  // Original Value: DateItem.MONTH_DAY_YEAR, How found: Looked up constant string
		/** Output fields in year, month, day order. */
		| "YMD"  // Original Value: DateItem.YEAR_MONTH_DAY, How found: Looked up constant string
		/** Output only day, month fields. */
		| "DM"  // Original Value: DateItem.DAY_MONTH, How found: Looked up constant string
		/** Output only month, day fields. */
		| "MD"  // Original Value: DateItem.MONTH_DAY, How found: Looked up constant string
		/** Output only year, month fields. */
		| "YM"  // Original Value: DateItem.YEAR_MONTH, How found: Looked up constant string
		/** Output only month, year fields. */
		| "MY"  // Original Value: DateItem.MONTH_YEAR, How found: Looked up constant string
		;


	/**
	 * Format for encoding dates in JSON. Note you can override JSONEncoder.encodeDate
	 * for a custom format.
	 */
	export type JSONDateFormat = 
		/** dates are is encoded as a String in <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema date format</a> in UTC,
	 * for example, "2005-08-02" for logical date fields or "2005-08-01T21:35:48.350"
	 * for datetime fields. See dateFormatAndStorage','Date format and\n storage for more information. */
		"xmlSchema"
		/** dates are encoded as raw JavaScript code for creating a Date object, that is:
	 * 
	 * new Date(1238792738633)
	 * 
	 * This is not strictly valid JSON, but if eval()d, will result in an identical date object,
	 * regardless of timezone. However, it does not preserve the distinction between
	 * logical dates vs full datetime values - use "logicalDateConstructor" mode for that. */
		| "dateConstructor"
		/** serializes Date instances in a way that preserves the distinction between logical dates, logical times, and full datetime values, as
	 * explained dateFormatAndStorage','here. Like 'dateConstructor' mode, this
	 * does not produce strictly valid JSON, and instead embeds JavaScript calls. 
	 * 
	 * In addition, unlike 'dateConstructor' mode, using eval() to reconstruct the original
	 * JavaScript objects will only work in the presence of SmartClient, and not just in a
	 * generic JavaScript interpreter. */
		| "logicalDateConstructor"
		;


	/**
	 * A Uniform Resource Identifier string, as defined by 
	 * <a href='https://tools.ietf.org/html/rfc3986' target='_blank'>https://tools.ietf.org/html/rfc3986</a>.
	 */
	export type URI = String; // baseType='String'


	/**
	 * String designating a standard time format for displaying the times associated with 
	 * dates strings.
	 */
	export type TimeDisplayFormat = 
		/** String will display with seconds and am/pm indicator:[H]H:MM:SS am|pm. 
	 * Example: 3:25:15 pm */
		"toTime"  // How found:  Original value
		/** String will display with seconds in 24 hour time: [H]H:MM:SS. 
	 * Example: 15:25:15 */
		| "to24HourTime"  // How found:  Original value
		/** String will display with seconds, with a 2 digit hour and am/pm indicator: 
	 * HH:MM:SS am|pm 
	 * Example: 03:25:15 pm */
		| "toPaddedTime"  // How found:  Original value
		/** String will display with seconds, with a 2 digit hour in 24 hour format: 
	 * HH:MM:SS 
	 * Examples: 15:25:15, 03:16:45 */
		| "toPadded24HourTime"  // How found:  Original value
		/** String will have no seconds and be in 12 hour format:[H]H:MM am|pm
	 * Example: 3:25 pm */
		| "toShortTime"  // How found:  Original value
		/** String will have no seconds and be in 24 hour format: [H]H:MM
	 * Example:15:25 */
		| "toShort24HourTime"  // How found:  Original value
		/** String will have no seconds and will display a 2 digit hour, in 12 hour clock format:
	 * HH:MM am|pm
	 * Example: 03:25 pm */
		| "toShortPaddedTime"  // How found:  Original value
		/** String will have no seconds and will display with a 2 digit hour in 24 hour clock format:
	 * HH:MM
	 * Examples: 15:25, 03:16 */
		| "toShortPadded24HourTime"  // How found:  Original value
		;

	export type SortDirection = 
		/** Sort in ascending order (eg: A-Z, larger items later in the list) */
		"ascending"
		/** Sort in descending order (eg: Z-A, larger items earlier in the list) */
		| "descending"
		;


	/**
	 * For "fetch" operations, how simple search criteria should be interpreted for text fields 
	 * (and to some extent numeric fields, see the notes below). For greater flexibility, use 
	 * AdvancedCriteria.
	 */
	export type TextMatchStyle = 
		/** case-insensitive exact match ("foo" matches "foo" and "FoO", but not "FooBar") */
		"exact"
		/** case-sensitive exact match ("foo" matches only "foo") */
		| "exactCase"
		/** case-insenstive substring match ("foo" matches "foobar" and "BarFoo") */
		| "substring"
		/** case-insensitive prefix match ("foo" matches "FooBar" but not "BarFoo") 
	 * textMatchStyle behavior is consistent across the client and all three of the built-in
	 * server DataSource implementations - SQL, Hibernate and JPA - to the maximum extent that is
	 * practical. Known inconsistencies, some of which can be tweaked with configuration settings,
	 * are described below
	 * textMatchStyle can be disabled for any individual field with the 
	 * DataSourceField.ignoreTextMatchStyle declaration. This behavior is consistent
	 * across client and server implementations, with the proviso that case-sensitive behavior 
	 * is inherently inconsistent in the server-side implementations (see below for a more
	 * detailed discussion of this)
	 * textMatchStyle is forced to "exactCase" for DataSourceField.primaryKey','primaryKey 
	 * fields on update and remove operations, unless
	 * OperationBinding.allowMultiUpdate is in force. This means that a normal update
	 * or remove operation - which is constrained by a unique primaryKey value or combination, to 
	 * affect only a single data row - will use an equality match on all primaryKey fields. This
	 * is desirable because it makes index usage more likely. Note that this means the key values
	 * "foo" and "FOO" are distinct, which is a change from previous behavior. For most databases,
	 * this change will have no effect because most databases do not by default allow primaryKey 
	 * values that only differ in case anyway - if a table has a row with a PK of "foo" and you 
	 * try to insert a row with a PK of "FOO", most databases will fail with a constraint violation.
	 * However, if you are using a database hat allows key values that differ only in case, and you 
	 * need to support this for some reason, you can switch the framework back to the previous 
	 * behavior by setting property allow.case.sensitive.pks to true in
	 * your server.properties file. Note, we do not recommend this; in fact, we do 
	 * not recommend the use of text primaryKey fields at all. Where you have control ,we would 
	 * always recommend the use of automatically incrementing numeric sequence keys.
	 * textMatchStyle does not apply to boolean or temporal (date, datetime, time)
	 * DataSourceField.type','field types. Such fields are always checked for equality. If 
	 * you have a need for more complex matching, such as date-range checking, use AdvancedCriteria
	 * Critiera values for temporal fields must be real dates (Javascript Date
	 * objects on the client, instances of java.util.Date on the server). Attempting
	 * to match against a string or any other type of value will result in an "always fails" 
	 * clause being generated. This behavior is how the client code has always worked, but is a 
	 * change for the server-side DataSources, in the interests of consistency. The previous
	 * behavior was:
	 * SQLDataSource used to attempt to match the date column to the criteria value provided;
	 * if that value was an appropriately-formatted string, that attempt might have 
	 * worked, but it would be database-specific. If you have an application that depends on 
	 * this old behavior, you can switch it back on by adding the following to your
	 * server.properties file: 
	 * sql.temporal.fields.require.date.criteria: false
	 * HibernateDataSource and JPADataSource used to skip such clauses altogether, which 
	 * results in the opposite behavior (there is an implied "always succeeds" clause, because 
	 * the clause is not present in the query at all). If you have an application that depends on 
	 * this old behavior, you can switch it back on by adding the following to your
	 * server.properties file: 
	 * jpa.temporal.fields.require.date.criteria: false or 
	 * hibernate.temporal.fields.require.date.criteria: false, as appropriate
	 * 
	 * textMatchStyle does not apply to fields used in the joins generated to satisfy 
	 * DataSourceField.includeFrom','includeFrom declarations or entity relations in
	 * Hibernate or JPA. Again, such comparisons are always for equality
	 * textMatchStyle is applied to numeric fields only if the supplied criteria value
	 * is a string. So for a numeric field "myNumber", we will match 10, 100, 110 and 1000 if a 
	 * criteria value of "10" (the quoted string) is supplied, but we will only match 10 if a 
	 * criteria value of 10 (the actual number) is supplied
	 * This is a change in behavior for the server-side DataSource implementations, in the 
	 * interests of consistency with the client behavior. Previously, all three of the built-in
	 * DataSource implementations applied textMatchStyle to numeric fields regardless of the 
	 * criteria value's type. If you have an application that depends on this old behavior, 
	 * you can switch it back on by adding the following to your server.properties
	 * file: sql.substring.numeric.criteria: true or 
	 * hibernate.substring.numeric.criteria: true or 
	 * jpa.substring.numeric.criteria: true, as appropriate
	 * 
	 * "exactCase" matching cannot be made consistent across all database providers because 
	 * each database has its own idea of whether case-sensitive matching should be the default, 
	 * and how to switch it on and off (if that is even possible)
	 * Microsoft SQL Server must have case-sensitive matching enabled by setting a 
	 * case-sensitive collation when the database is created (there are more fine-grained 
	 * options, but we do not recommend them because of the scope for further inconsistency, 
	 * where "exactCase" works correctly on table A but not on table B). See 
	 * <a href=http://msdn.microsoft.com/en-us/library/ms175835.aspx>MSDN</a> for details
	 * HSQLDB has case sensitivity set with the SET IGNORECASE directive -
	 * <a href=http://www.hsqldb.org/doc/guide/ch09.html#set_ignorecase-section>see here</a>
	 * MySQL is case-insensitive, but since it provides an easy way to do per-query,
	 * case-sensitive matching in SQL, we work around it for that database, but only in
	 * SQL DataSources
	 * 
	 * If you are using Hibernate or JPA, whether "exactCase" works as expected depends 
	 * entirely on the underlying database. Unlike the SQL DataSource, where we have fine-grained
	 * control of the SQL that the database executes, we are constrained by what the ORM will 
	 * allow. This prevents us from compensating for database quirks, like we do with MySQL's
	 * case-insensitivity in the SQL DataSource
	 *  */
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
		/** no mask */
		| "none"
		;


	/**
	 * Event that will trigger inline editing.
	 */
	export type ListGridEditEvent = 
		/** A single mouse click triggers inline editing */
		"click"
		/** A double click triggers inline editing */
		| "doubleClick"
		/** No mouse event will trigger editing. Editing must be programmatically started via ListGrid.startEditing
	 * (perhaps from an external button) or may be triggered by
	 * keyboard navigation if ListGrid.editOnFocus is set. */
		| "none"
		;


	/**
	 * When the type for a parameter mentions "properties" as in "ListGrid Properties" or
	 * "RPCRequest Properties", it means that the expected value is a JavaScript Object
	 * containing any set of properties generally legal when creating an object of that type.
	 * 
	 * For example, the first parameter of RPCManager.sendRequest is of type
	 * "RPCRequest Properties". This means it should be called like:
	 * 
	 * isc.RPCManager.sendRequest({
	 * actionURL : "/foo.do",
	 * showPrompt:false
	 * });
	 * RPCRequest.actionURL','actionURL and RPCRequest.showPrompt','showPrompt are 
	 * properties of RPCRequest. 
	 * 
	 * Note that the notation shown above is an example of a
	 * ObjectLiteral','JavaScript object literal.
	 */
	export type Properties = any; // baseType='<none>'

	export type ColorPickerMode = 
		/** Display a palette of 40 basic colors from which to pick. */
		"simple"
		/** In addition to the 40 basic colors, the user can specify a color from anywhere in the spectrum, with an optional alpha component. */
		| "complex"
		;


	/**
	 * Indicates the format to be used for HTTP requests and responses when
	 * fulfilling DSRequests (eg, when DataSource.fetchData is called).
	 * 
	 * Note that RPCManager.startQueue','request queuing is only available for
	 * "iscServer" requests.
	 */
	export type DSDataFormat = 
		/** Make an HTTP request in a format recognized by the ISC server and expect ISC server
	 * response format. serverDataIntegration','Server-side integration can then be
	 * used to connect to any kind of data store or web service. */
		"iscServer"
		/** Expect XML responses. Request format depends on the setting for
	 * OperationBinding.dataProtocol','protocol. This is the correct setting when
	 * consuming RSS feeds, XML web services (whether SOAP, REST, XML-RPC or custom format),
	 * and XML flat files directly from the browser.
	 * 
	 * Values for "date", "time" or "datetime" fields in responses should be specified in the
	 * applicable <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema
	 * date format</a>.
	 * If no timezone is explicitly specified, dates / datetimes received by the client are 
	 * assumed to be GMT. Note that "date" type fields represent logical dates and may omit
	 * time information entirely, and "time" type fields may omit date information.
	 * See dateFormatAndStorage','Date and Time Format and storage for more information
	 * on how date values are serialized in requests sent to the server.
	 * 
	 * 
	 * A DSResponse will be derived from the returned XML via the process described under
	 * DataSource.transformResponse. */
		| "xml"
		/** Expect response in JSON <a href='http://json.org' target='_blank'>(Java Script Object Notation)</a>
	 * format, ready to be eval()'d. Response should either be a naked object literal:
	 * 
	 * { "property":"value1", "property2" : "value2", ... }
	 * 
	 * or a string that evals to return a valid response object:
	 * 
	 * var response = { "property":"value1", "property2" : "value2", ... }
	 * response;
	 * 
	 * 
	 * A DSResponse will be derived from the returned JSON via the process described under
	 * DataSource.transformResponse.
	 * 
	 * As with "xml" responses, values for "date" or "datetime" fields should be
	 * specified as a String in 
	 * <a target=_blank href="http://www.w3.org/TR/xmlschema-2/#dateTime">XML Schema date format</a>
	 * and may include a timezone. In the absence of a timezone they will be assumed to be GMT.
	 * 
	 * Request format depends on the setting for OperationBinding.dataProtocol','protocol. 
	 * See also XJSONDataSource. */
		| "json"
		/** SmartClient will not attempt to parse the response, instead,
	 * DataSource.transformResponse must be implemented.
	 * transformResponse will receive the "data" parameter as a String, and must
	 * parse this String into an Array of Objects, which should be set as
	 * DSResponse.data. Request format depends on the setting for
	 * OperationBinding.dataProtocol','protocol.
	 * 
	 * Note that, unlike either the "json" or "xml" settings of dataFormat, you
	 * are responsible for ensuring that parsed values are the correct type, for example, using
	 * the JavaScript built-ins parseInt and parseFloat on integer
	 * and decimal values respectively, and using new Date() to construct valid
	 * Dates. */
		| "custom"
		;

	export type Positioning = 
		/** The canvas is absolutely positioned with respect to its parent. */
		"absolute"  // Original Value: Canvas.ABSOLUTE, How found: Looked up constant string
		/** The canvas is relatively positioned according to the document flow. */
		| "relative"  // Original Value: Canvas.RELATIVE, How found: Looked up constant string
		;


	/**
	 * This is used for client-side or server-side summaries
	 * Client-side: Function to produce a summary value based on an array of records and a field definition. 
	 * An example usage is the ListGrid.showGridSummary','listGrid summary row, where
	 * a row is shown at the bottom of the listGrid containing summary information about each
	 * column.
	 * Server-side: Function used for getting summarized field value using 
	 * serverSummaries','Server Summaries feature or when 
	 * DataSourceField.includeFrom','Including values from multiple records
	 * 
	 * For the client-side SummaryFunctions may be specified in one of 2 ways:
	 * as an explicit function or executable
	 * stringMethods','StringMethod, which will be passed records (an array of records)
	 * and field (the field definition for which the summary is required).
	 * as a standard SummaryFunction identifier
	 * For valid ways to configure SummaryFunctions to use server-side feature see the
	 * serverSummaries','Server Summaries overview.
	 */
	export type SummaryFunction = 
		/** Client: iterates through the set of records, picking up and summing all numeric values for the specified field. Returns null to indicate invalid summary value if
	 * any non numeric field values are encountered.
	 * Server: acts exactly like SQL SUM function. */
		"sum"  // How found:  Original value
		/** Client: iterates through the set of records, picking up all numeric values for the specified field and determining the mean value. Returns null to indicate invalid
	 * summary value if any non numeric field values are encountered.
	 * Server: acts exactly like SQL AVG function. */
		| "avg"  // How found:  Original value
		/** Client: iterates through the set of records, picking up all values for the specified field and finding the maximum value. Handles numeric fields and
	 * date type fields only. Returns null to indicate invalid
	 * summary value if any non numeric/date field values are encountered.
	 * Server: acts exactly like SQL MAX function. */
		| "max"  // How found:  Original value
		/** Client: iterates through the set of records, picking up all values for the specified field and finding the minimum value. Handles numeric fields and
	 * date type fields only. Returns null to indicate invalid summary value if
	 * any non numeric field values are encountered.
	 * Server: acts exactly like SQL MIN function. */
		| "min"  // How found:  Original value
		/** Client: iterates through the set of records, picking up all numeric values for the specified field and multiplying them together.
	 * Returns null to indicate invalid summary value if
	 * any non numeric field values are encountered.
	 * Server: not supported. */
		| "multiplier"  // How found:  Original value
		/** Client: returns a numeric count of the total number of records passed in. Server: acts exactly like SQL COUNT function. */
		| "count"  // How found:  Original value
		/** Client: returns field.summaryValueTitle if specified, otherwise field.title
	 * Server: not supported. */
		| "title"  // How found:  Original value
		/** Client: Currently the same as the min function. Server: implemented as SQL MIN function. */
		| "first"  // How found:  Original value
		/** Client: iterates through the set of records, producing a string with each value concatenated to the end.
	 * Server: implemented as SQL CONCAT function. Supported only by SQLDataSource. Note that it 
	 * is natively supported only by Oracle DB driver, other drivers perform additional query to fetch 
	 * values for concatenation. See also DataSourceField.joinPrefix','joinPrefix, 
	 * DataSourceField.joinString','joinString and DataSourceField.joinSuffix','joinSuffix 
	 * related datasource field attributes. */
		| "concat"  // How found:  Original value
		;

	export type SkipJSONValidation = 
		/** Skip validation for all fields. In this mode, valueXPaths and getFieldValue implementations are skipped. */
		"full"
		/** Skip validation for fields with boolean, numeric, or string-drived types. Note that you must deliver all 
	 * DataSourceField.multiple:true values as arrays. */
		| "partial"
		/** Always do validation. */
		| "none"
		;


	/**
	 * Dictates the appearance of form items when FormItem.canEdit is set to
	 * false.
	 */
	export type ReadOnlyDisplayAppearance = 
		/** Item value should appear within the form as a static block of text, similar to the default appearance of a StaticTextItem. This appearance may be
	 * modified via FormItem.readOnlyTextBoxStyle and FormItem.clipStaticValue. */
		"static"
		/** Item should appear unchanged, but user interaction to edit the item will be disallowed. Note that some interactions will be allowed, such as selecting text
	 * within a read-only TextItem for copy and paste. Exact implementation may vary by
	 * form item type. */
		| "readOnly"
		/** Item will appear disabled. */
		| "disabled"
		;


	/**
	 * Is this page being viewed in landscape or portrait orientation? Typically used with
	 * mobile devices.
	 */
	export type PageOrientation = 
		/** Landscape orientation: page is wider than it is tall. */
		"landscape"
		/** Portrait orientation: page is taller than it is wide. */
		| "portrait"
		;

	export type LabelAlignment = 
		/** Justify label's left edge against its left coordinate (right in RTL configurations) */
		"start"  // Original Value: DrawLabel.START, How found: Looked up constant string
		/** Justify label's right edge against its left coordinate (left in RTL configurations) */
		| "end"  // Original Value: DrawLabel.END, How found: Looked up constant string
		/** Center label about its left coordinate */
		| "center"  // Original Value: DrawLabel.CENTER, How found: Looked up constant string
		/** Justify label's left edge against its left coordinate */
		| "left"  // Original Value: DrawLabel.LEFT, How found: Looked up constant string
		/** Justify label's right edge against its left coordinate */
		| "right"  // Original Value: DrawLabel.RIGHT, How found: Looked up constant string
		;


	/**
	 * When ListGrid.canHover','canHover and
	 * ListGrid.showHoverComponents','showHoverComponents are both true, HoverMode
	 * dictates the type of UI to be displayed when a user hovers over a row or cell.
	 * 
	 * There are a number of builtin HoverModes and you can override
	 * ListGrid.getCellHoverComponent','getCellHoverComponent() to create your own
	 * hover behaviors.
	 */
	export type HoverMode = 
		/** Show a single field's value in an HTMLFlow. Field to use is ListGrid.detailField. */
		"detailField"
		/** Show a DetailViewer displaying those fields from the record which are not already displayed in the grid. */
		| "details"
		/** Show a separate ListGrid containing related-records. See ListGridRecord.detailDS and ListGrid.recordDetailDSProperty for
	 * more information. */
		| "related"
		/** Show a DetailViewer displaying those fields from the record not already displayed in the grid, together with a separate
	 * ListGrid containing related-records. */
		| "detailRelated"
		;

	export type CriteriaPolicy = 
		/** Cache is dropped whenever criteria changes. */
		"dropOnChange"
		/** Cache is retained as long as the only changes to criteria make the criteria more restrictive as determined by
	 * ResultSet.compareCriteria. */
		| "dropOnShortening"
		;


	/**
	 * Standard pickers
	 */
	export type PickerIconName = 
		/** Picker icon to clear a field value. */
		"clear"
		/** Picker icon to start a search. */
		| "search"
		/** Picker icon to refresh a value. */
		| "refresh"
		/** Picker icon for date value. */
		| "date"
		/** Picker icon for a general combobox. */
		| "comboBox"
		;


	/**
	 * Supported styles of connector orientations.
	 */
	export type ConnectorOrientation = 
		/** Tail segments are always horizontal; best for left-to-right connectors */
		"horizontal"
		/** Tail segments are always vertical; best for top-to-bottom connectors */
		| "vertical"
		/** Tail segments flip orientation according to longer axis of bounding box: if the bounding box is wider than it is tall, center segment is vertical */
		| "auto"
		;

	export type Alignment = 
		/** Center within container. */
		"center"  // Original Value: Canvas.CENTER, How found: Looked up constant string
		/** Stick to left side of container. */
		| "left"  // Original Value: Canvas.LEFT, How found: Looked up constant string
		/** Stick to right side of container. */
		| "right"  // Original Value: Canvas.RIGHT, How found: Looked up constant string
		;

	export type ProcessValueType = 
		/** values that are not already strings are converted via toString() */
		"string"
		/** the strings "true" and "false" become boolean true and false. All other Strings non-empty String values are true, all numbers are true except 0, and
	 * all other non-null values are true */
		| "boolean"
		/** values are converted via toString() and parsing as a decimal number. Invalid values trigger a transition to the StateTask.failureElement */
		| "decimal"
		/** values are converted via toString(), parsing as a number, and rounding to nearest integer. Invalid values trigger a transition to the
	 * StateTask.failureElement */
		| "integer"
		/** any input which is not already a Record or Map becomes null */
		| "record"
		/** generic array type - will convert value to an array of the same type as the existing value */
		| "array"
		;


	/**
	 * When ListGrid.canExpandRecords','canExpandRecords is true, ExpansionMode
	 * dictates the type of UI to be displayed in the expanded portion of the row.
	 * 
	 * There are a number of builtin ExpansionModes and you can override
	 * ListGrid.getExpansionComponent','getExpansionComponent() to create your own
	 * expansion behaviors.
	 */
	export type ExpansionMode = 
		/** Show a single field's value in an HTMLFlow. Field to use is ListGrid.detailField. */
		"detailField"
		/** Show a DetailViewer displaying those fields from the record which are not already displayed in the grid. */
		| "details"
		/** Show a separate ListGrid containing related-records. See ListGridRecord.detailDS and ListGrid.recordDetailDSProperty for
	 * more information. */
		| "related"
		/** Show a DynamicForm to edit those fields from the record which are not already present in the grid. If the record is collapsed with
	 * unsaved changes and ListGrid.expansionEditorShowSaveDialog is not set, Edits
	 * will be saved automatically, or stored as editing','editValues if
	 * ListGrid.autoSaveEdits is false. Otherwise, a confirmation dialog is
	 * displayed. Can optionally show a
	 * ListGrid.showExpansionEditorSaveButton','save button and
	 * ListGrid.expansionEditorCollapseOnSave','auto-collapse when save is pressed.
	 * If a record fails validation on save and the field in question is not visible in
	 * the grid, the record is automatically expanded and validated to show the errors. */
		| "editor"
		/** Show a DetailViewer displaying those fields from the record not already displayed in the grid, together with a separate
	 * ListGrid containing related-records. */
		| "detailRelated"
		;


	/**
	 * String specifying a nested data field structure.
	 * 
	 * Each dataPath string is a slash-delimited set of field identifiers, for example
	 * "id1/id2/id3". DataPaths may be applied directly to a
	 * Canvas.dataPath','component, and/or to a databound component field specification.
	 * A datapath denotes a path to a nested field value in a hierarchical structure, giving
	 * developers the opportunity to easily view or edit nested data structures.
	 * Specifically:
	 * if the component is viewing or editing a record, the value for fields 
	 * will be derived from a nested structure of records
	 * if the component is bound to a dataSource, field attributes may be picked up by
	 * following the dataPath to a field definition on another dataSource
	 * Examples:
	 * If a dynamicForm is defined with the following fields:
	 * 
	 * [
	 * { name:"name" },
	 * { name:"street", dataPath:"address/street" }
	 * ]
	 * 
	 * If the "name" field is set to "Joe Smith" and the "street" field
	 * is set to "1221 High Street", when the values for this form are retrieved via a
	 * getValues() call they will return an object in the following format:
	 * 
	 * {name:"Joe Smith", address:{street:"1221 High Street"}}
	 * 
	 * 
	 * For databound components, dataPath also provides a way to pick up field attributes from nested
	 * dataSources. Given the following dataSource definitions:
	 * 
	 * isc.DataSource.create({
	 * ID:"contacts",
	 * fields:[
	 * {name:"name"},
	 * {name:"email"},
	 * {name:"organization"},
	 * {name:"phone"},
	 * {name:"address", type:"Address"}
	 * ]
	 * });
	 * 
	 * isc.DataSource.create({
	 * ID:"Address",
	 * fields:[
	 * {name:"street"},
	 * {name:"city"},
	 * {name:"state"},
	 * {name:"zip"}
	 * ]
	 * });
	 * 
	 * and a databound component bound to the 'contacts' dataSource, specifying a field with a dataPath
	 * of "address/street" would ensure the field attributes were derived from the 
	 * "street" field of the 'Address' dataSource.
	 * 
	 * dataPaths are also cumulative. In other words if a component has a specified dataPath, 
	 * the dataPath of any fields it contains will be appended to that component level path when
	 * accessing data. For example the following form:
	 * 
	 * isc.DynamicForm.create({
	 * dataPath:"contact",
	 * fields:[
	 * {dataPath:"address/email"}
	 * ]
	 * });
	 * 
	 * Might be used to edit a data structure similar to this:
	 * {contact:{name:'Ed Jones', address:{state:"CA", email:"ed@ed.jones.com"}}}
	 * Nested canvases can also have dataPaths specified, which will similarly be combined. See
	 * the Canvas.dataPath attribute for more information and examples of this.
	 */
	export type DataPath = String; // baseType='String'


	/**
	 * The types listed below are built-in types that DataBoundComponent','databound\n components understand and treat specially (using type-specific form controls, validators,
	 * formatters, sorting logic, etc). 
	 * 
	 * You can declare custom types via SimpleType','SimpleType.create(), with settings that
	 * will influence DataBound components. You can also create your own subclasses of databound
	 * components to add further custom, reusable behaviors based on field.type.
	 * 
	 * field.type can also be the ID of another DataSource, which allows you to
	 * model nested structures such as XML documents (in fact, XMLTools.loadXMLSchema
	 * models XML schema in this way). Nested DataSource declarations affect how XML and JSON data
	 * is deserialized into JavaScript objects in the 
	 * clientDataIntegration','client-side integration pipeline, so that you can load
	 * complex XML documents and have them deserialized into a correctly typed nested data
	 * structure.
	 * 
	 * Note: to declare related but separate objects, as in an "Account" object that can be
	 * related to both a "Contact" object and "Order" objects, use
	 * DataSourceField.foreignKey, not a nested structure declaration.
	 */
	export type FieldType = 
		/** Generic text, e.g. "John Doe". This is the default field type. Use field.length to set length. */
		"text"
		/** A boolean value, e.g. true */
		| "boolean"
		/** A whole number, e.g. 123 */
		| "integer"
		/** A floating point (decimal) number, e.g. 1.23 */
		| "float"
		/** A logical date, with no time value (such as a holiday or birthday). Represented on the client as a JavaScript Date object where
	 * time values are ignored. See dateFormatAndStorage for more
	 * information on date display and serialization formats. */
		| "date"
		/** A time of day, with no date. Represented on the client as a JavaScript Date object in UTC/GMT by default (see also
	 * dateFormatAndStorage and the Time class). */
		| "time"
		/** A date and time, accurate to the second. Represented on the client as a JavaScript Date object. See also
	 * dateFormatAndStorage. */
		| "datetime"
		/** A text value constrained to a set of legal values specified by the field's DataSourceField.valueMap','valueMap, as though a
	 * ValidatorType of "isOneOf" had been declared. */
		| "enum"
		/** An enum whose values are numeric. */
		| "intEnum"
		/** If you are using the SmartClient SQL datasource connector, a sequence is a unique, increasing whole number, incremented
	 * whenever a new record is added. Otherwise, sequence behaves
	 * identically to integer. This type is typically used with
	 * field.primaryKey to auto-generate unique primary keys.
	 * See also DataSourceField.sequenceName and 
	 * DataSource.sequenceMode */
		| "sequence"
		/** A string representing a well-formed URL. Some components will render this as an HTML link (using an anchor tag for example). */
		| "link"
		/** A string representing a well-formed URL that points to an image. Some components will render an IMG tag with the value of this field
	 * as the 'src' attribute to render the image. */
		| "image"
		/** Arbitrary binary data. When this field type is present, three additional fields are automatically generated. They are: &lt;fieldName&gt;_filename, &lt;fieldName&gt;_filesize, and
	 * &lt;fieldName&gt;_date_created where &lt;fieldName&gt; is the value of the name
	 * attribute of this field. These fields are marked as
	 * DataSourceField.hidden:true to suppress their rendering by default. You
	 * can show one or more of these fields by specifying the field with a hidden:false
	 * override in the fields array of the databound component.
	 * Stream / view file support for custom DataSources: a custom DataSource or DMI 
	 * must implement the "viewFile" and "downloadFile" operationTypes and return a single Record
	 * with a byte[] as the field value for the binary field. For more detail see
	 * the overview of binaryFields','Binary Fields. */
		| "binary"
		/** Binary data comprising an image. Causes ViewFileItem to be used when the field is displayed in a form, allowing the image to optionally
	 * be displayed inline. */
		| "imageFile"
		/** Fields of this type can contain any data value and have no default formatting or validation behavior. This is useful as the 
	 * SimpleType.inheritsFrom','parent type for SimpleTypes
	 * where you do not want any of the standard validation or formatting logic
	 * to be inherited from the standard built-in types. */
		| "any"
		/** Synonymous with "any". */
		| "custom"
		/** Fields of this type are automatically populated by the SmartClient Server with the current authenticated userId as part of "add" and "update" 
	 * operations. By default, fields of this type are hidden and not editable;
	 * the server ignores any value that the client sends in a field of this type.
	 * Note that the "authenticated user" can be set explicitly on the server-side 
	 * RPCManager using the setUserId() method, or it can come from
	 * the servlet API if you are using its built-in authentication scheme. See
	 * the server-side Javadocs for RPCManager. */
		| "modifier"
		/** Fields of this type are automatically populated by the SmartClient Server with the current date and time as part of "add" and "update" 
	 * operations. By default, fields of this type are hidden and not editable;
	 * the server ignores any value that the client sends in a field of this type. */
		| "modifierTimestamp"
		/** Fields of this type are automatically populated by the SmartClient Server with the current authenticated userId as part of "add" operations.
	 * By default, fields of this type are hidden and not editable;
	 * the server ignores any value that the client sends in a field of this type.
	 * The notes about type "modifier" also apply to fields of this type. */
		| "creator"
		/** Fields of this type are automatically populated by the SmartClient Server with the current date and time as part of an "add" operation (when
	 * the record is first created). By default, fields of this type are hidden
	 * and not editable; the server ignores any value that the client sends in a
	 * field of this type. */
		| "creatorTimestamp"
		/** Same as "text", but causes PasswordItem to be used by default for editing (hides typed-in value). */
		| "password"
		/** A special field type specifically for use with Unicode data in conjunction with the Microsoft SQL Server database. Field type "ntext" implies the 
	 * use of DataSourceField.sqlStorageStrategy','sqlStorageStrategy "ntext";
	 * other than that, this type is identical to "text" */
		| "ntext"
		/** An integer number with locale-based formatting, e.g. 12,345,678. See localizedNumberFormatting','Localized Number Formatting
	 * for more info. */
		| "localeInt"
		/** A float number with locale-based formatting, e.g. 12,345.67. See localizedNumberFormatting','Localized Number Formatting
	 * for more info. */
		| "localeFloat"
		/** A float number with locale-based formatting and using currency symbol, e.g. $12,345.67.
	 * See localizedNumberFormatting','Localized Number Formatting
	 * for more info. */
		| "localeCurrency"
		/** A telephone number. Uses FormItem.browserInputType "tel" to hint to the device to restrict input. On most mobile devices that have
	 * software keyboards, this cause a specialized keyboard to appear which
	 * only allows entry of normal phone numbers. When displayed read-only,
	 * a "phoneNumber" renders as an HTML link with the "tel:" URL scheme,
	 * which will invoke the native phone dialing interface on most mobile
	 * devices. In addition, the CSS style "sc_phoneNumber" is applied.
	 * 
	 * By default, "phoneNumber" fields do not include validators, however the
	 * following validator definition would limit to digits, dashes and the
	 * "+" character:
	 * xml:
	 * 
	 * &lt;validator type="regexp" expression="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
	 * errorMessage="Phone number should be in the correct format e.g. +#(###)###-##-##" /&gt;
	 * 
	 * 
	 * or directly in JavaScript:
	 * 
	 * 
	 * {type:"regexp", expression:"^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$", 
	 * errorMessage:"Phone number should be in the correct format e.g. +#(###)###-##-##"}
	 * 
	 * 
	 * 
	 * and adding "#" and "*" to the regular expressions above would allow for
	 * users to enter special keys sometimes used for extension numbers or
	 * pauses */
		| "phoneNumber"
		;


	/**
	 * The strategy to use when generating field names - for example, for new formula or summary 
	 * fields created using the built-in editors.
	 */
	export type FieldNamingStrategy = 
		/** generate names in the format fieldTypeX, where field type might be "formulaField" and X is an index specific to the field-type and component instance */
		"simple"
		/** generates a UUID for all generated field names */
		| "uuid"
		;


	/**
	 * A synonym for HTMLString.
	 */
	export type HTML = String; // baseType='String'


	/**
	 * Events registerable via Page.setEvent
	 */
	export type PageEvent = 
		/** Fires repeatedly (every 10 ms by default) when the system is idle (i.e.,
	 * not busy running other scripts) after the page is loaded. */
		"idle"
		/** Fires when the page has finished loading. It corresponds to the
	 * browser 'load' event normally handled by window.onload. */
		| "load"
		/** Fires when the page is exited or unloaded. It corresponds to the
	 * browser 'unload' event normally handled by window.onunload. */
		| "unload"
		/** Fires when the browser window is resized by the user. It corresponds
	 * to the browser 'resize' event normally handled by window.onresize. */
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
		/** Fires when the right mouse button is clicked on the page. If your event handler
	 * for this event returns false, the native browser context menu will be suppressed.
	 * Note: On the Macintosh platform, Command+Click may be used instead
	 * of right-button click to trigger a context menu event.
	 * On the Opera browser, Ctrl+Shift+Click should be used instead of
	 * right-button click. */
		| "showContextMenu"
		/** Fires when a user presses a key on the keyboard. */
		| "keyPress"
		/** Fires when the Page.getOrientation changes due to browser-window resize or rotation of a mobile device. */
		| "orientationChange"
		/** Fires when the FontLoader completes loading custom fonts. */
		| "fontsLoaded"
		/** Fires after a timeout if the FontLoader fails to load all custom
	 * fonts.
	 * 
	 * see classMethod:Page.setEvent()
	 * see classMethod:Page.clearEvent() */
		| "fontLoadingFailed"
		;


	/**
	 * The AutoTest subsystem relies on generating and parsing identifier strings to identify
	 * components on the page. A very common pattern is identifying a specific component
	 * within a list of possible candidates. There are many many cases where this pattern
	 * is used, for example - members in a layout,tabs in a tabset, sections in a section stack.
	 * 
	 * In order to make these identifiers as robust as possible across minor
	 * changes to an application, (such as skin changes, minor layout changes, etc) the
	 * system will store multiple pieces of information about a component when generating
	 * an identification string to retrieve it from a list of candidates.
	 * The system has a default strategy for choosing the order in which to look at these
	 * pieces of information but in some cases this can be overridden by setting
	 * a LocatorStrategy.
	 * 
	 * By default we use the following strategies in order to identify a component from a list of
	 * candidates:
	 * name: Does not apply in all cases but in cases where a specified
	 * name attribute has meaning we will use it - for example for
	 * SectionStackSection.name','sections in a section stack.
	 * title: If a title is specified for the component this may be used
	 * as a legitimate identifier if it is unique within the component - for example
	 * differently titled tabs within a tabset.
	 * index: Locating by index is typically less robust than by name or
	 * title as it is likely to be affected by layout changes on the page.
	 * 
	 * If an explicit strategy is specified, that will be used to locate the component if 
	 * possible. If no matching component is found using that strategy, we will continue to
	 * try the remaining strategies in order as described above. In other words setting
	 * a locatorStrategy to "title" will skip attempting to find a component by name, and
	 * instead attempt to find by title - or failing that by index.
	 * 
	 * Note that we also support matching by type (see LocatorTypeStrategy).
	 * Matching by type is used if we were unable to match by name or title or to disambiguate
	 * between multiple components with a matching title.
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
	 * You can use whatever cursors are valid for your deployment platforms, but keep in mind that
	 * visual representation may vary by browser and OS. See the
	 * <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' target='_blank'>MDN cursor page</a>
	 * for a live demonstration.
	 */
	export type Cursor = 
		/** Use the default arrow cursor for this browser/OS. */
		"default"  // Original Value: Canvas.DEFAULT, How found: Looked up constant string
		/** Use the default cursor for this element type in this browser/OS */
		| "auto"  // Original Value: Canvas.AUTO, How found: Looked up constant string
		/** Use the wait cursor. */
		| "wait"  // Original Value: Canvas.WAIT, How found: Looked up constant string
		/** Use the hand cursor. */
		| "hand"  // Original Value: Canvas.HAND, How found: Looked up constant string
		/** Use the "move" (crosshairs) cursor. */
		| "move"  // Original Value: Canvas.MOVE, How found: Looked up constant string
		/** Use the 'help' cursor. */
		| "help"  // Original Value: Canvas.HELP, How found: Looked up constant string
		/** Use the 'text' (i-beam) cursor. */
		| "text"  // Original Value: Canvas.TEXT, How found: Looked up constant string
		/** Use the normal hand pointer that appears when you hover over a link */
		| "pointer"  // Original Value: Canvas.POINTER, How found: Looked up constant string
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
	 * The possible types of sequence handling SmartClient Server can apply. This refers to the
	 * technique used to obtain the primary keys of the most recent insert, which the product 
	 * uses to enable automatic cache synchronization (updating client-side components bound to a 
	 * dataSource to reflect updates to that dataSource). Only applicable to
	 * DataSourceField','fields of FieldType','type "sequence".
	 * 
	 */
	export type SequenceMode = 
		/** Use the JDBC 3.0 API "getGeneratedKeys()" to get the most recent sequence value. Obviously, this is only an option for JDBC 3.0+ drivers */
		"jdbcDriver"
		/** Use a database-specific native technique to obtain the most recent sequence value. The actual technique used varies widely depending on
	 * the vagaries of the underlying database (and sometimes the vagaries of
	 * particular releases of a database product) */
		| "native"
		/** No automatic attempt is made to retrieve the most recent sequence value. You are expected to handle this by providing a 
	 * OperationBinding.cacheSyncOperation','cacheSyncOperation that is 
	 * able to return the entire row without needing generated PK values for
	 * context. For example, a query that uses MAX(pk) would be
	 * capable of this. To give a more complex example, say you have a 
	 * sequence value that is retrieved from a legacy system: you could store 
	 * that sequence value in the HTTP session and then have your custom 
	 * cacheSyncOperation reference that session attribute in 
	 * its WHERE clause. Also note that cacheSyncOperations, 
	 * like any other OperationBinding','DataSource operation, 
	 * can be OperationBinding.serverObject','written in Java or any 
	 * OperationBinding.script','JSR223-compliant scripting language -
	 * you do not have to use SQL */
		| "none"
		;

	export type ImportFormat = 
		/** XML format: same as that expected by the adminConsole for DataSource testData','test data */
		"xml"
		/** JSON format: a JSON Array of JSON Objects */
		| "json"
		/** Comma-separated values, or in general delimiter-separated values based on a provided delimiter. */
		| "csv"
		/** Auto-detect format */
		| "auto"
		;


	/**
	 * Mode of fetching records from the server.
	 * 
	 * Generally, "paged" mode should be used unless the maximum number of records is
	 * guaranteed to be small.
	 */
	export type FetchMode = 
		/** All records that match the current filter are fetched. Sorting is performed on the client. */
		"basic"
		/** Only requested ranges of records are fetched, with predictive fetch ahead. Sorting is performed on the server. */
		| "paged"
		/** All records available from the DataSource are fetched. Filtering by search criteria and sorting are both performed on the client. */
		| "local"
		;


	/**
	 * When relative dates are specified in a date range, typically in a RelativeDateItem or
	 * DateRangeItem, in order to make the range inclusive or exclusive, it is useful to be able 
	 * to specify whether we're referring to the start or end of the date in question.
	 */
	export type RelativeDateRangePosition = 
		/** Indicates this relative date should be treated as the start of the specified logical date. */
		"start"
		/** Indicates this relative date should be treated as the end of the specified logical date. */
		| "end"
		;


	/**
	 * The method of pooling to employ for ListGrid.canExpandRecords','expansionComponents.
	 * 
	 */
	export type ExpansionComponentPoolingMode = 
		/** auto-created, built-in components are destroyed when record are ListGrid.collapseRecord','collapsed. */
		"destroy"
		/** all expansion components are deparented from the grid when a record is ListGrid.collapseRecord','collapsed but are not destroyed. It is the responsibility
	 * of the developer to handle component destruction */
		| "none"
		;


	/**
	 * What to do when a user hits enter while editing a cell
	 */
	export type EnterKeyEditAction = 
		/** end editing (will save edit values if ListGrid.autoSaveEdits is true). */
		"done"
		/** edit the next editable cell in the record */
		| "nextCell"
		/** edit the same field in the next editable record */
		| "nextRow"
		/** edit the first editable cell in next editable record */
		| "nextRowStart"
		;


	/**
	 * How should field width be determined when ListGridField.autoFitWidth is true?
	 */
	export type AutoFitWidthApproach = 
		/** Size field to fit to the data value(s) contained in the field. */
		"value"
		/** Size field to fit the field title */
		| "title"
		/** Size field to fit either the field title or the data values in the field (whichever requires more space). */
		| "both"
		;


	/**
	 * HTML elements that make up a complete FormItem (note, not all FormItems use all of 
	 * these elements)
	 * 
	 */
	export type FormItemElementType = 
		/** The form item as a whole, including the text element, any icons, and any hint text for the item. This is the cell containing the 
	 * form item */
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
	 * An Identifier that must be locally unique within the containing TabSet.
	 */
	export type TabName = Identifier; // baseType='Identifier'


	/**
	 * Mode for applying criteria to a tree.
	 */
	export type TreeFilterMode = 
		/** only nodes that actually match criteria are shown. If a parent does not match the criteria, it will not be shown, even if it has children that do
	 * match the criteria */
		"strict"
		/** parent nodes are kept if they have children which match the criteria, or, in a tree with
	 * ResultTree.loadDataOnDemand','loadDataOnDemand:true, if they have
	 * not loaded children yet. */
		| "keepParents"
		;


	/**
	 * Valid display formats for dates. These strings are the names of formatters which can be
	 * passed to DateUtil.setNormalDisplayFormat() or 
	 * DateUtil.setShortDisplayFormat() and will be subsequently used as default long
	 * or short formatters for date objects by SmartClient components.
	 * Default set of valid display formats is as follows:
	 */
	export type DateDisplayFormat = 
		/** Default native browser 'toString()' implementation. May vary by browser.
	 * Example: Fri Nov 04 2005 11:03:00 GMT-0800 (Pacific Standard Time) */
		"toString"  // How found:  Original value
		/** Default native browser 'toLocaleString()' implementation. May vary by browser.
	 * Example: Friday, November 04, 2005 11:03:00 AM */
		| "toLocaleString"  // How found:  Original value
		/** Short date in format MM/DD/YYYY. Example: 11/4/2005 */
		| "toUSShortDate"  // How found:  Original value
		/** Short date with time in format MM/DD/YYYY HH:MM Example: 11/4/2005 11:03 */
		| "toUSShortDatetime"  // How found:  Original value
		/** Short date in format DD/MM/YYYY. Example: 4/11/2005 */
		| "toEuropeanShortDate"  // How found:  Original value
		/** Short date with time in format DD/MM/YYYY HH:MM Example: 4/11/2005 11:03 */
		| "toEuropeanShortDatetime"  // How found:  Original value
		/** Short date in format YYYY/MM/DD. Example: 2005/11/4 */
		| "toJapanShortDate"  // How found:  Original value
		/** Short date with time in format YYYY/MM/DD HH:MM Example: 2005/11/4 11:03 */
		| "toJapanShortDatetime"  // How found:  Original value
		/** Date in the format YYYY-MM-DD HH:MM:SS Example: 2005-11-04 11:09:15 */
		| "toSerializeableDate"  // How found:  Original value
		/** Date in the format &lt;YYYYMMDD&gt;T&lt;HHMMSS&gt;Z Example: 20051104T111001Z
	 * 
	 * 
	 * Note: In addition to these standard formats, custom formatting can be set by passing
	 * a function directly to DateUtil.setNormalDisplayFormat et al. This
	 * function will then be executed whenever the appropriate formatter method is called [eg
	 * Date.toNormalDate], in the scope of the date instance in question.
	 * 
	 * Custom formatting can also be applied by passing a FormatString instead of a 
	 * DateDisplayFormat string to DateUtil.setNormalDisplayFormat et al. See
	 * the FormatString docs for details. */
		| "toDateStamp"  // How found:  Original value
		;


	/**
	 * Special SCImgURL format for specifying sprited image configuration.
	 * 
	 * See also the "spriting" discussion in the skinning','skinning overview 
	 * documentation.
	 * 
	 * In order to generate HTML to render a properly scaled image sprite from a composite image
	 * file, this format allows developers to specify the image source, native size and
	 * offset of the sprite within the image, and the desired drawn size for the image.
	 * spriteConfigs have the following format:
	 * 
	 * "sprite:&lt;image URL&gt;;offset:&lt;Left&gt;,&lt;Top&gt;;size:&lt;Width&gt;,&lt;Height&gt;;cssClass:&lt;className&gt;"
	 * 
	 * Where supported, the sprite: prefix is used to identify a specified
	 * SCImgURL as a sprited image. 
	 * The media to load will be retrieved from the specified image URL. Standard 
	 * SCImgURL directory prefixes such as "[SKIN]" can be included in this URL.
	 * An explicit URL is not required - developers may also specify a css class which includes
	 * an explicit background-image attribute.
	 * The size: and offset: properties should specify the pixel size
	 * and position of the sprite within the composite image. Again these are not required
	 * and can be specified directly in the css class using width 
	 * and height and
	 * background-offset properties.
	 * The cssClass: denotes the css class to apply to the sprite. This is also
	 * optional - a sprite can be specified with an image URL and explicit sizing and offset
	 * coordinates, in which case no css class is actually required.
	 * (Of course for a valid sprite, it is expected that the image URL and size are specified
	 * either explicitly in the string, or within the css class definition. If the offset is
	 * omitted, it will be assumed to be zero on both axes).
	 * 
	 * Sprited image configuration and "stateful" images
	 * Many image URLs in SmartClient are "stateful", meaning that the actual URL used to fetch an
	 * image will vary according to the component's state (eg, "Disabled"), generally, by adding a
	 * suffix to the image URL.
	 * Component image attributes which support "stateful" suffixes are not guaranteed to 
	 * always support having their value set to a SCSpriteConfig string, as special handling
	 * is required both to ensure the stateful suffix is incorporated into the generated HTML
	 * correctly and that logic to update the images state at runtime handles this HTML being
	 * present in the DOM rather than a simple &lt;img...&gt; element.
	 * Where these are supported they will be documented as such. The handling will in these 
	 * cases is as follows:
	 * 
	 * if the configuration includes an explicit image URL, stateful suffixes are combined
	 * and appended using "_" characters as described in Img.src
	 * if the configuration inclues a cssClass, the stateful suffixes will be combined and
	 * appended to the class name (with no "_" characters), as with standard
	 * StatefulCanvas.baseStyle stateful suffixes
	 * 
	 */
	export type SCSpriteConfig = SCImgURL; // baseType='SCImgURL'


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
		"inherit"  // Original Value: Canvas.INHERIT, How found: Looked up constant string
		/** The widget will always be visible whether its parent is or not. */
		| "visible"  // Original Value: Canvas.VISIBLE, How found: Looked up constant string
		/** The widget will always be hidden even when its parent is visible. */
		| "hidden"  // Original Value: Canvas.HIDDEN, How found: Looked up constant string
		;


	/**
	 * An XMLElement represents one complete XML tag, including any subelements contained between
	 * the start and end tags.
	 * 
	 * XMLElement is a native object supplied directly by the browser. The SmartClient-supported
	 * interfaces for this object include methods that take an XMLElement as an argument (such as
	 * XMLTools.selectNodes). If you want to retrieve XML data and display it in a
	 * SmartClient component, read about clientDataIntegration','XML Data Binding. To
	 * extract data as JavaScript Objects from XML, see XMLTools.toJS. Direct
	 * manipulation of XMLElements objects is subject to cross-browser inconsistencies, bugs,
	 * memory leaks and performance issues.
	 */
	export type XMLElement = any; // baseType='<none>'


	/**
	 * While editing a ListGrid, what cell should we edit when the user attempts to navigate
	 * into a cell past the end of an editable row, via a Tab keypress, or a programmatic
	 * saveAndEditNextCell() call?
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
		/** Draw a line from the current point to the given (x,y) coordinate which becomes the new current point. Multiple (x,y) coordinates may be specified to draw a path, in which
	 * case the last point becomes the new current point. The args array for this command type is
	 * an array of one or more Points (two-element arrays of the X and Y coordinates). */
		| "lineto"
		/** Draw a segment of a specified circle. A straight line (the "initial line segment") is drawn from the current point to the start of the circular arc. The args array
	 * for this command type contains 4 values:
	 * <ol start="0">
	 * The center (cx,cy) Point (two-element array) of the circle.
	 * radius
	 * startAngle - Start angle in degrees
	 * endAngle - End angle in degrees
	 * 
	 * Note that the circletoCommand', '"circleto" Command example can be very helpful
	 * when learning how to write "circleto" commands. */
		| "circleto"
		;


	/**
	 * Acceleration effect for animations. Can either be a ratio function or a string.
	 * Ratio functions take a value between 0 and 1 which represents how much of the 
	 * animation's duration has elapsed, and return another value between 0 and 1 indicating
	 * how close the animation is to completion. For a completely linear animation, the 
	 * function would return the value it was passed. This allows you to bias animations to
	 * [for example] speed up toward the end of the animation.
	 * The following strings are also supported for common ratio bias effects:
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
	 * Specifies the layout of the combo box and buttons in a MultiComboBoxItem.
	 */
	export type MultiComboBoxLayoutStyle = 
		/** use a FlowLayout, showing values first, then the text entry area */
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
	 * What the JSONEncoder should do when it encounters a circular reference in an object
	 * structure.
	 */
	export type JSONCircularReferenceMode = 
		/** circular references in Arrays will be represented as a null entry, and objects will have a property with a null value */
		"omit"
		/** leave a string marker, the JSONEncoder.circularReferenceMarker, wherever a circular reference is found */
		| "marker"
		/** leave a string marker followed by the path to the first occurrence of the circular reference from the top of the object tree that was serialized.
	 * This potentially allows the original object graph to be reconstructed. */
		| "path"
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
		"normal"  // Original Value: DynamicForm.NORMAL, How found: Looked up constant string
		/** form encoding for forms with INPUT file elements, that is, forms that upload files ("multipart/form-data") */
		| "multipart"  // Original Value: DynamicForm.MULTIPART, How found: Looked up constant string
		;


	/**
	 * Type for controlling when a "recategorize" is applied to records being dropped
	 * on a databound component from another databound component.
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
	 * Name of a SmartClient Class that subclasses FormItem. Some values with this type:
	 * TextItem','"TextItem"
	 * SliderItem','"SliderItem", 
	 * CanvasItem','"CanvasItem"
	 * 
	 */
	export type FormItemClassName = String; // baseType='String'


	/**
	 * String specifying effect to apply during an animated show or hide.
	 */
	export type AnimateShowEffectId = 
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
	 * An object containing the open state for a treeGrid.
	 * Note that this object is not intended to be interrogated directly, but may be stored 
	 * (for example) as a blob on the server for state persistence across sessions.
	 */
	export type TreeGridOpenState = String; // baseType='String'


	/**
	 * Controls when primary keys are required for "update" and "remove" server operations, when allowMultiUpdate 
	 * has not been explicitly configured on either the OperationBinding.allowMultiUpdate','operationBinding.allowMultiUpdate or via the server-side API DSRequest.setAllowMultiUpdate().
	 */
	export type MultiUpdatePolicy = 
		/** having a PK is never required, even for requests from a browser. Note: dangerous setting 
	 * that allows end users to wipe out entire tables */
		"never"
		/** having a PK is required for requests that come from the client or are specifically marked 
	 * via dsRequest.setClientRequest(true) */
		| "clientRequest"
		/** having a PK is required for any request that is associated with an RPCManager, which 
	 * includes clientRequests and server-created DSRequests where an RPCManager was explicitly provided */
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
		/** Square endpoint, stops exactly at the line's end coordinates instead of extending 1/2 lineWidth further as "round" and "square" do */
		| "butt"
		;


	/**
	 * Property to govern when the 'over' styling is applied to
	 * a formItemIcon.
	 */
	export type IconOverTrigger = 
		/** Show rollover styling and media when the user is over the icon only */
		"icon"
		/** Show rollover styling and media when the user is over the icon or over the textBox (or control-table, if present) for this icon. Only has
	 * an effect when FormItem.showOver is true. */
		| "textBox"
		;


	/**
	 * Determines sizing model when sizing / positioning a canvas relative to its
	 * Canvas.percentBox','percentBox.
	 */
	export type PercentBoxModel = 
		/** use coordinates relative to the {Canvas.getVisibleHeight,visibleHeight} and width of the other canvas */
		"visible"
		/** use coordinates relative to the {Canvas.getViewportHeight,viewportHeight} and width of the other canvas */
		| "viewport"
		;


	/**
	 * An object containing the stored presentation information for the fields of a listGrid.
	 * Information contained in a ListGridFieldState object includes the
	 * visibility and widths of the listGrid's fields.
	 * Note that this object is a JavaScript string, and may be stored (for example) as a blob
	 * on the server for state persistence across sessions.
	 */
	export type ListGridFieldState = String; // baseType='String'


	/**
	 * Known chart types. These are visual representations of data, not separate data models,
	 * although some chart types are only capable of showing a single facet of data.
	 * 
	 * Concrete charting implementations may use any value for chartType but should
	 * support the provided chartType values for charts that correspond to the visual
	 * presentation described below, to enable easy switching between charting engines.
	 */
	export type ChartType = 
		/** Values represented by area, with stacked values representing multiple facet values. This is equivalent to ChartType "Line" with stacking enabled. */
		"Area"  // How found:  Original value
		/** Values represented by vertical columns. Typically supports stacking to represent two facets. May support simultaneous stacking and clustering for
	 * 3 facets. */
		| "Column"  // How found:  Original value
		/** Values represented by horizontal bars. Typically supports stacking to represent two facets. May support simultaneous stacking and clustering for
	 * 3 facets. */
		| "Bar"  // How found:  Original value
		/** Values represented by a lines between data points, or stacked areas for multiple facets. */
		| "Line"  // How found:  Original value
		/** Values represented on a circular background by a line around the center, or stacked areas for multiple facets */
		| "Radar"  // How found:  Original value
		/** Circular chart with wedges representing values. Multiple or stacked pies for multiple facets. */
		| "Pie"  // How found:  Original value
		/** Like a pie chart with a central hole. Multiple or stacked doughnuts for multiple facets. */
		| "Doughnut"  // How found:  Original value
		/** A chart with two continuous numeric axes and up to one discrete facet. */
		| "Scatter"  // How found:  Original value
		/** A chart with two continuous numeric axes and up to one discrete facet that also displays values from a third continuous, numeric domain
	 * represented as the sizes of the data point shapes. */
		| "Bubble"  // How found:  Original value
		/** Like a column chart, except instead of showing stacked or clustered values for each position on the horizontal axis, the data values are used together
	 * with the associated FacetChart.endValueMetric values to show a series
	 * of line segments. */
		| "Histogram"  // How found:  Original value
		;


	/**
	 * Determines how Java enums are translated to and from Javascript by the SmartClient server.
	 */
	export type EnumTranslateStrategy = 
		/** Translates to/from a String matching the constant name. This is the default if not set. */
		"name"
		/** Translates to/from a String matching the enum.toString(). */
		| "string"
		/** Translates to/from an integer matching the ordinal number of the constant within 
	 * the enumeration */
		| "ordinal"
		/** Translates to/from a Javascript object containing one property for each property defined 
	 * within the enum. The constant itself and the ordinal number are included in the JS object.
	 * By default they are called "_constant" and "_ordinal", but this can be overridden with 
	 * the DataSource.enumOrdinalProperty and DataSource.enumConstantProperty
	 * properties */
		| "bean"
		;


	/**
	 * Position of a ListGrid.recordDrop operation with respect to the target record.
	 */
	export type RecordDropPosition = 
		/** User dropped directly onto the record */
		"over"  // Original Value: ListGrid.OVER, How found: Looked up constant string
		/** User dropped before the record */
		| "before"  // Original Value: ListGrid.BEFORE, How found: Looked up constant string
		/** User dropped after the record */
		| "after"  // Original Value: ListGrid.AFTER, How found: Looked up constant string
		/** Drop position is not over a record */
		| "none"  // Original Value: ListGrid.NONE, How found: Looked up constant string
		;


	/**
	 * Policy for whether resize bars are shown on members by default.
	 */
	export type LayoutResizeBarPolicy = 
		/** resize bars are only shown on members marked Canvas.showResizeBar','showResizeBar:true */
		"marked"
		/** resize bars are shown on all resizable members that are not explicitly marked showResizeBar:false, except the last member. Appropriate for a
	 * LayoutPolicy of "fill" (VLayout, HLayout) since the overall space will
	 * always be filled. */
		| "middle"
		/** resize bars are shown on all resizable members that are not explicitly marked showResizeBar:false, including the last member. Can be appropriate for a
	 * LayoutPolicy of "none" (VStack, HStack) since the overall size of the
	 * layout is dictated by it's member's sizes. */
		| "all"
		/** resize bars are not shown even if members are marked with Canvas.showResizeBar','showResizeBar:true */
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
		/** a drop-down picklist that allows multiple choices by clicking on a checkbox next to each item */
		"picklist"
		/** a grid that displays all items in-place. Multiple selection is accomplished by ctrl-click or shift-click. */
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
	 * Enum to indicate selection change notification types. Used by
	 * ListGrid.reselectOnUpdateNotifications
	 */
	export type SelectionNotificationType = 
		/** No selection change notification should fire */
		"none"
		/** ListGrid.selectionChanged should fire but ListGrid.selectionUpdated should not fire. */
		| "selectionChanged"
		/** ListGrid.selectionChanged and ListGrid.selectionUpdated should both fire. */
		| "selectionUpdated"
		;


	/**
	 * Possible placements for pop-up choosers, menus, dialogs or other temporary UIs,
	 * which may need to expand to take up additional room for smaller screens.
	 */
	export type PanelPlacement = 
		/** classic placement for menus, pop-up lists and pickers in desktop interfaces: near the control that was clicked (a search field,
	 * MenuButton, etc). Note: this setting does not apply when there is
	 * no originating control (such as a dialog that appears due to session
	 * timeout), in which case centering will generally be used */
		"nearOrigin"
		/** fill the nearest containing panel managed by a device-aware layout such as SplitPane, which will generally be equivalent to "fillScreen" for a
	 * Browser.isHandset','handset-sized device. Note: this setting does not
	 * apply if there is no clear container for the component originating the UI,
	 * in which case, "fillScreen" will generally be used. */
		| "fillPanel"
		/** fill the entire screen */
		| "fillScreen"
		/** fill the bottom half of the screen. This is the default behavior on iOS6/7 for plain HTML &lt;select&gt;, but note that native apps rarely use
	 * this interface for picking from lists and it is not generally recommended. */
		| "halfScreen"
		/** this setting disables all panelPlacement sizing and positioning logic. Explicitly specified size and positioning will be used. */
		| "none"
		;


	/**
	 * Criteria for selecting only a matching set of records from a DataSource. Criteria can
	 * be applied on the client and server. Unless configured otherwise, criteria will generally
	 * be applied client-side by ResultSets via ResultSet.applyFilter. 
	 * 
	 * Client- and server-side systems built into SmartClient understand two criteria formats by
	 * default: simple key-value pairs (Criteria) or the AdvancedCriteria format. 
	 * 
	 * 
	 * Simple key-value Criteria are represented via a JavaScript Object where each property
	 * specifies the name and required value for a field. Multiple legal values for a field can be
	 * provided as an Array. For example:
	 * 
	 * var criteria = {
	 * field1 : "value1",
	 * field2 : ["value2", "value3"]
	 * }
	 * 
	 * Would select all records where field1 has value "value1" and where field2 has either
	 * "value2" or "value3".
	 * 
	 * 
	 * Use DataSource.combineCriteria to combine two Criteria objects (including Criteria and
	 * AdvancedCriteria) or DataSource.convertCriteria to convert simple Criteria to the
	 * AdvancedCriteria format.
	 * 
	 * 
	 * When writing custom client and server-side filtering logic, criteria must be a JavaScript
	 * Object but the properties of that Object can contain whatever data you want. 
	 * 
	 * When sent to the SmartClient server, the Java representation of the criteria is described
	 * RPCRequest.data','here. When sent to other servers, the
	 * DSProtocol','operationBinding.dataProtocol affects the format.
	 */
	export type Criteria = any; // baseType='<none>'


	/**
	 * A Uniform Resource Locator string, as defined by 
	 * <a href='https://www.w3.org/Addressing/URL/url-spec.html' target='_blank'>https://www.w3.org/Addressing/URL/url-spec.html</a>. For example,
	 * "https://www.smartclient.com/product/" is a valid URL.
	 */
	export type URL = URI; // baseType='URI'


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
	 * A decimal (or "floating point") number, for example, 5.5. May not be null.
	 */
	export type float = Float; // baseType='Float'


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
		/** RichTextEditor.fontControls','Font controls */
		"fontControls"
		/** RichTextEditor.formatControls','Text formatting controls */
		| "formatControls"
		/** RichTextEditor.styleControls','Text styling controls */
		| "styleControls"
		/** RichTextEditor.colorControls','Color controls */
		| "colorControls"
		/** RichTextEditor.bulletControls','HTML list controls */
		| "bulletControls"
		;


	/**
	 * A standard XPath expression as a string. To learn about XPath, try the following search:
	 * <a href="http://www.google.com/search?q=xpath+tutorial" target="_blank"
	 * >http://www.google.com/search?q=xpath+tutorial</a>
	 */
	export type XPathExpression = String; // baseType='String'


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
	 * A ValueMap defines the set of legal values for a field, and optionally allows you to provide
	 * a mapping from stored values to values as seen by the end user.
	 * 
	 * A valueMap can be specified as either an Array of legal values, or as an Object
	 * where each property maps a stored value to a user-displayable value. See
	 * DataSourceField.valueMap for how to express a ValueMap in
	 * componentXML','Component XML.
	 * 
	 * A ValueMap can be entirely static or entirely dynamic, with many options in between. For
	 * example, a ValueMap may be:
	 * 
	 * statically defined in a JavaScript or XML file. Such a valueMap changes only when
	 * application code is upgraded.
	 * generated dynamically by server code when the application first loads, for example,
	 * by generating JavaScript or XML dynamically in a .jsp or .asp file. Such a valueMap may be
	 * different for each session and for each user.
	 * loaded on demand from a DataSource, via the
	 * PickList.optionDataSource','optionDataSource property, or via a call to
	 * DataSource.fetchData where a valueMap is derived dynamically from the returned data
	 * (see DataSource.fetchData for an example). Such a valueMap may be updated at any
	 * time, for example, every time the user changes a related field while editing data.
	 * 
	 * See also the smartArchitecture','SmartClient Architecture Overview to understand
	 * the best architecture from a performance and caching perspective.
	 */
	export type ValueMap = any; // baseType='<none>'


	/**
	 * Different styles of selection that a list, etc. might support
	 */
	export type SelectionStyle = 
		/** don't select at all */
		"none"  // Original Value: Selection.NONE, How found: Looked up constant string
		/** select only one item at a time */
		| "single"  // Original Value: Selection.SINGLE, How found: Looked up constant string
		/** select one or more items */
		| "multiple"  // Original Value: Selection.MULTIPLE, How found: Looked up constant string
		/** select one or more items as a toggle so you don't need to hold down control keys to select
	 * more than one object */
		| "simple"  // Original Value: Selection.SIMPLE, How found: Looked up constant string
		;


	/**
	 * Interface to use for showing and editing the FilterBuilder.topOperator','top-level operator 
	 * of a FilterBuilder.
	 */
	export type TopOperatorAppearance = 
		/** radio buttons appear at the top of the form */
		"radio"
		/** a SelectItem appears with a "bracket" spanning all top-level clauses, exactly the same appearance used for showing
	 * FilterBuilder.showSubClauseButton','subClauses, if enabled. */
		| "bracket"
		/** each line in the FilterBuilder is a top-level item, with a SelectItem shown on the left that allows the user to choose between the main operator in force (either "and"
	 * or "or", depending on the setting of topOperator) and "and not". */
		| "inline"
		/** no interface is shown. The top-level operator is expected to be shown to the user outside the FilterBuilder, and, if editable, FilterBuilder.setTopOperator
	 * should be called to update it */
		| "none"
		;


	/**
	 * Supported positioning of the chart Legend.
	 */
	export type LegendAlign = 
		/** Align to the left of the legend section */
		"left"
		/** Align centrally in the legend section */
		| "center"
		/** Align to the right of the legend section */
		| "right"
		;


	/**
	 * When discovering a tree, the scanMode determines how to scan for the childrenProperty
	 * "node": take each node individually
	 * "branch": scan direct siblings as a group, looking for best fit
	 * "level": scan entire tree levels as a group, looking for best fit
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
		/** Window does not try to size members at all on either axis. Window body defaults to
	 * a Canvas if not autosizing. Otherwise a Layout is used with policies on both axes set
	 * to LayoutPolicy "none". */
		"none"  // Original Value: Window.NONE, How found: Looked up constant string
		/** Window body defaults to VLayout behavior. (Body is actually just a Layout with 
	 * Layout.vertical: true.) */
		| "vertical"  // Original Value: Window.VERTICAL, How found: Looked up constant string
		/** Window body defaults to HLayout behavior. (Body is actually just a Layout with 
	 * Layout.vertical: false.) */
		| "horizontal"  // Original Value: Window.HORIZONTAL, How found: Looked up constant string
		;


	/**
	 * One of the supported formats for data-export. If you are doing a 
	 * ListGrid.exportClientData','client export to one of the native spreadsheet
	 * formats (xls or ooxml), we also export Hilite','hilite-based coloring. So, if
	 * Hilites are causing a particular cell to be rendered as green text on a blue background, 
	 * the corresponding cell in the exported spreadsheet document will also be colored that way.
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
		"vertical"  // Original Value: Layout.VERTICAL, How found: Looked up constant string
		/** members laid out horizontally */
		| "horizontal"  // Original Value: Layout.HORIZONTAL, How found: Looked up constant string
		;


	/**
	 * An autoChild is an automatically generated subcomponent that a component creates to
	 * handle part of its presentation or functionality. An example is the Window component and
	 * its subcomponent the "header".
	 * 
	 * See autoChildUsage','Using AutoChildren for more information.
	 */
	export type AutoChild = any; // baseType='<none>'


	/**
	 * Enum used within the FilterBuilder class to indicate the role of a particular 
	 * value-field form item within a filter clause.
	 */
	export type ValueItemType = 
		/** This is the single form item that will populate the generated Criterion.value for this clause. This applies for operators with
	 * Operator.valueType of "fieldType" or "custom". */
		"value"
		/** This is the single form item that will populate the generated Criterion.value for Operator.valueType of "fieldName". */
		| "name"
		/** Indicates this item will generate the lower-bound value (or "start") when generating criteria with Operator.valueType "valueRange". */
		| "start"
		/** Indicates this item will generate the higher-bound value (or "end") when generating criteria with Operator.valueType "valueRange". */
		| "end"
		;


	/**
	 * Visual Builder's ApplicationMode determines the behavior of the visual components in the 
	 * application you are building
	 */
	export type ApplicationMode = 
		/** Components behave as they would in the running application; clicking a component in the visual design window will cause the response an 
	 * end-user would expect */
		"live"
		/** Components have special design-time behavior layered on top of ordinary run-time behavior; clicking a component in the visual design 
	 * window will cause the response an application builder would expect, 
	 * if any such special behavior is defined for that component */
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
	 * Specifies the starting point of a move knob with respect to its draw item. The move knob is
	 * positioned relative to the move knob point at the DrawItem.moveKnobOffset.
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
	 * The method of component-pooling to employ for ListGrid.showRecordComponents','recordComponents.
	 * 
	 */
	export type RecordComponentPoolingMode = 
		/** components are destroyed when the record is not being rendered. Best for large datasets where embedded components differ greatly per record. */
		"viewport"
		/** components are Canvas.clear','clear()ed when not in the viewport, but stay with a record until the record is dropped from cache. Best for guaranteed
	 * small datasets. */
		| "data"
		/** components are pooled and will be passed to ListGrid.updateRecordComponent','updateRecordComponent() with the
	 * recordChanged parameter set to true. Best for large datasets where
	 * embedded components are uniform across different records and can be efficiently
	 * reconfigured to work with a new record */
		| "recycle"
		;


	/**
	 * ListGrids format data for viewing and editing based on the type attribute of the
	 * field. This table describes how the ListGrid deals with the various built-in types.
	 */
	export type ListGridFieldType = 
		/** Simple text rendering for view. For editing a text entry field is shown. If the length of the field (as specified by the DataSourceField.length
	 * attribute) is larger than the value specified by ListGrid.longTextEditorThreshold, a
	 * text input icon is shown that, when clicked on (or field is focused in) opens a larger
	 * editor that expands outside the boundaries of the cell (textarea by default, but
	 * overrideable via ListGrid.longTextEditorType). */
		"text"
		/** For viewing and editing a checkbox is shown with a check mark for the true value and no check mark for the false value. This behavior
	 * may be suppressed by setting ListGridField.suppressValueIcon for the field. See
	 * ListGrid.booleanTrueImage for customization. */
		| "boolean"
		/** A whole number, e.g. 123. Consider setting ListGridField.editorType','editorType to use a SpinnerItem. */
		| "integer"
		/** A floating point (decimal) number, e.g. 1.23. Consider setting ListGridField.editorType','editorType to use a SpinnerItem. */
		| "float"
		/** Field value should be a Date instance representing a logical date, with no time of day information. See dateFormatAndStorage for
	 * details of the logical date type and how it is represented and manipulated.
	 * 
	 * Dates will be formatted using ListGridField.dateFormatter','ListGridField.dateFormatter
	 * if specified, otherwise
	 * ListGrid.dateFormatter','ListGrid.dateFormatter.
	 * If both these attributes are unset, dates are formatted
	 * using the standard DateUtil.setShortDisplayFormat','short display format for dates.
	 * 
	 * For editing, by default a DateItem is used with DateItem.useTextField set
	 * to true, providing textual date entry plus a pop-up date picker. The
	 * DateItem.dateFormatter','dateFormatter and DateItem.inputFormat','inputFormat
	 * for the editor will be picked up from the ListGridField, if specified. */
		| "date"
		/** Field value should be a Date instance representing a logical time, meaning time value that does not have a specific day and also has no timezone. See
	 * dateFormatAndStorage for details of the logical time type and how it is
	 * represented and manipulated.
	 * 
	 * Times will be formatted using ListGridField.timeFormatter','ListGridField.timeFormatter
	 * if specified,
	 * otherwise ListGrid.timeFormatter','ListGrid.timeFormatter.
	 * 
	 * If both these attributes are unset, times are formatted using the standard
	 * Time.shortDisplayFormat','short display format for times.
	 * 
	 * For editing, by default a TimeItem is used. The
	 * TimeItem.timeFormatter','timeFormatter for the editor will be picked up from
	 * the ListGridField, if specified. */
		| "time"
		/** Field value should be a Date instance representing a specific date and time value. See dateFormatAndStorage for details of the
	 * datetime type and how it is represented and manipulated.
	 * 
	 * Dates will be formatted using ListGridField.dateFormatter','ListGridField.dateFormatter
	 * if specified, otherwise
	 * ListGrid.datetimeFormatter','ListGrid.datetimeFormatter.
	 * If both these attributes are unset, dates are formatted
	 * using the standard DateUtil.setShortDatetimeDisplayFormat','short display format for
	 * datetime values.
	 * 
	 * For editing, by default a DateTimeItem is used, providing textual date entry plus
	 * a pop-up date picker. The DateItem.dateFormatter','dateFormatter and
	 * DateItem.inputFormat','inputFormat for the editor will be picked up from the
	 * ListGridField, if specified. */
		| "datetime"
		/** Same as text */
		| "sequence"
		/** Renders a clickable html link (using an HTML anchor tag: &lt;A&gt;). The target URL is the value of the field, which is also the default display value. You
	 * can override the display value by setting ListGridRecord.linkText or
	 * ListGridField.linkText.
	 * 
	 * Clicking the link opens the URL in a new window by default. To change this behavior,
	 * you can set field.target, which works identically to the "target"
	 * attribute on an HTML anchor (&lt;A&gt;) tag. See ListGridField.target for more
	 * information.
	 * 
	 * In inline edit mode, this type works like a text field.
	 * 
	 * To create a link not covered by this feature, consider using
	 * ListGridField.formatCellValue along with Canvas.linkHTML, or simply
	 * ListGrid.getCellStyle','styling the field to look like a link, and providing
	 * interactivity via ListGridField.recordClick','field.recordClick(). */
		| "link"
		/** Renders a different image in each row based on the value of the field. If this URL is not absolute, it is assumed to be relative to
	 * ListGridField.imageURLPrefix if specified. The size of the image is controlled by
	 * ListGridField.imageSize, ListGridField.imageWidth,
	 * ListGridField.imageHeight (and by the similarly-named global default
	 * attributes on the ListGrid itself).
	 * 
	 * You can also specify the following attributes on the field: activeAreaHTML, and
	 * extraStuff - these are passed to Canvas.imgHTML to generate the
	 * final URL.
	 * 
	 * Note if you want to display icons in addition to the normal cell value, you
	 * can use ListGridField.valueIcons','valueIcons instead. */
		| "image"
		/** Shows ListGridField.icon','field.icon in every cell, and also in the header. Useful for a field that is used as a button, for example, launches a detail
	 * window or removes a row. Implement a ListGridField.recordClick','field.recordClick
	 * to define a behavior for the button.
	 * 
	 * NOTE: for a field that shows different icons depending on the field value, see
	 * ListGridField.valueIcons.
	 * 
	 * type:"icon" also defaults to a small field width, accommodating just the icon
	 * with padding, and to a blank header title, so that the header shows the icon only.
	 * 
	 * ListGridField.iconWidth','field.iconWidth and related properties configure
	 * the size of the icon both in the header and in body cells.
	 * 
	 * If you want the icon to appear only in body cells and not in the header, set
	 * ListGridField.cellIcon','field.cellIcon instead, leaving field.icon null. */
		| "icon"
		/** For viewing, the grid renders a 'view' icon (looking glass) followed by a 'download' icon and then the name of the file is displayed in text. If the user clicks the
	 * 'view' icon, a new browser window is opened and the file is streamed to that browser
	 * instance, using DataSource.viewFile. For images and other file types with
	 * known handlers, the content is typically displayed inline - otherwise the browser will
	 * ask the user how to handle the content. If the download icon is clicked,
	 * DataSource.downloadFile is used to cause the browser to show a "save" dialog.
	 * There is no inline editing mode for this field type. */
		| "binary"
		/** Same as binary */
		| "imageFile"
		/** Show a calculated summary based on other field values within the current record. See ListGridField.recordSummaryFunction for more information */
		| "summary"
		/** Fields of this type can contain any data value and have no default formatting or validation behavior. This is useful as the 
	 * SimpleType.inheritsFrom','parent type for SimpleTypes
	 * where you do not want any of the standard validation or formatting logic
	 * to be inherited from the standard built-in types. */
		| "any"
		/** An integer number with locale-based formatting, e.g. 12,345,678. See localizedNumberFormatting','Localized Number Formatting
	 * for more info. */
		| "localeInt"
		/** A float number with locale-based formatting, e.g. 12,345.67. See localizedNumberFormatting','Localized Number Formatting
	 * for more info. */
		| "localeFloat"
		/** A float number with locale-based formatting and using currency symbol, e.g. $12,345.67.
	 * See localizedNumberFormatting','Localized Number Formatting
	 * for more info. */
		| "localeCurrency"
		/** A telephone number. Uses FormItem.browserInputType "tel" to hint to the device to restrict input. On most mobile devices that have
	 * software keyboards, this cause a specialized keyboard to appear which
	 * only allows entry of normal phone numbers. When displayed read-only,
	 * a "phoneNumber" renders as an HTML link with the "tel:" URL scheme,
	 * which will invoke the native phone dialing interface on most mobile
	 * devices. In addition, the CSS style "sc_phoneNumber" is applied.
	 * 
	 * By default, "phoneNumber" fields do not include validators, however the
	 * following validator definition would limit to digits, dashes and the
	 * "+" character:
	 * xml:
	 * 
	 * &lt;validator type="regexp" expression="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
	 * errorMessage="Phone number should be in the correct format e.g. +#(###)###-##-##" /&gt;
	 * 
	 * 
	 * or directly in JavaScript:
	 * 
	 * 
	 * {type:"regexp", expression:"^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$", 
	 * errorMessage:"Phone number should be in the correct format e.g. +#(###)###-##-##"}
	 * 
	 * 
	 * 
	 * and adding "#" and "*" to the regular expressions above would allow for
	 * users to enter special keys sometimes used for extension numbers or
	 * pauses */
		| "phoneNumber"
		;


	/**
	 * Object used to specify custom edge sizes or offsets.
	 * Specified as an object where defaultSize will map to the default edge size or 
	 * offset for the canvas (Canvas.edgeSize, or Canvas.edgeOffset and
	 * top, left, right and
	 * bottom will map to the
	 * EdgedCanvas.edgeTop','edgeTop/EdgedCanvas.edgeOffsetTop','edgeOffsetTop, 
	 * EdgedCanvas.edgeLeft','edgeLeft/EdgedCanvas.edgeOffsetLeft','edgeOffsetLeft,
	 * EdgedCanvas.edgeRight','edgeRight/EdgedCanvas.edgeOffsetRight','edgeOffsetRight,
	 * and EdgedCanvas.edgeBottom','edgeBottom/EdgedCanvas.edgeOffsetBottom','edgeOffsetBottom
	 * attributes on the paneContainer respectively. Note that not all these properties have to be
	 * set - if unset standard edge sizing rules will apply.
	 */
	export type EdgeSizes = any; // baseType='<none>'


	/**
	 * An object containing the "view state" information for a listGrid.
	 * This object contains state information reflecting
	 * - ListGridFieldState
	 * - ListGridSortState
	 * - ListGridSelectedState
	 * for the grid.
	 * Note that this object is a JavaScript string, and may be stored (for example) as a blob
	 * on the server for state persistence across sessions.
	 */
	export type ListGridViewState = String; // baseType='String'


	/**
	 * An autoTestLocator is an xpath-like string used by the AutoTest subsystem to robustly 
	 * identify DOM elements within a SmartClient application.
	 * 
	 * Typically AutoTestLocators will not be hand-written - they should be retrieved by a
	 * call to AutoTest.getLocator. Note also that the debugging','Developer Console
	 * has built-in functionality to create and display autoTestLocators for a live app.
	 */
	export type AutoTestLocator = String; // baseType='String'

	export type PromptStyle = 
		/** Displays a centered modal prompt with text specified by RPCRequest.prompt */
		"dialog"
		/** Changes the current cursor to the style specified by RPCRequest.promptCursor */
		| "cursor"
		;

	export type ProportionalResizeMode = 
		/** proportional resizing is never used */
		"none"
		/** proportional resizing is always used */
		| "always"
		/** proportional resize is off by default, but holding down one of the Canvas.proportionalResizeModifiers turns proportional resize on for a given
	 * resize interaction */
		| "modifier"
		/** proportional resize is on by default, but holding down one of the Canvas.proportionalResizeModifiers turns proportional resize off for a given
	 * resize interaction */
		| "modifierOff"
		;


	/**
	 * A String of CSS that can be added directly to a style attribute.
	 */
	export type CSSText = String; // baseType='String'

	export type VerticalAlignment = 
		/** At the top of the container */
		"top"  // Original Value: Canvas.TOP, How found: Looked up constant string
		/** Center within container. */
		| "center"  // Original Value: Canvas.CENTER, How found: Looked up constant string
		/** At the bottom of the container */
		| "bottom"  // Original Value: Canvas.BOTTOM, How found: Looked up constant string
		;

	export type TreeModelType = 
		/** In this model, each node has an ID unique across the whole tree and a parent ID that points to its parent. The name of the unique ID property can be specified
	 * via Tree.idField and the name of the parent ID property can be specified via
	 * Tree.parentIdField. The initial set of nodes can be passed in as a list to
	 * Tree.data and also added as a list later via Tree.linkNodes.
	 * Whether or not a given node is a folder is determined by the value of the property specified
	 * by Tree.isFolderProperty.
	 * 
	 * The "parent" modelType is best for integrating with relational storage (because nodes can
	 * map easily to rows in a table) and collections of Beans and is the model used for DataBound
	 * trees. */
		"parent"
		/** In this model, nodes specify their children as a list of nodes. The property that holds the children nodes is determined by Tree.childrenProperty.
	 * Nodes are not required to have an ID that is unique across the whole tree (in fact, no ID is
	 * required at all). Node names (specified by the Tree.nameProperty, unique within
	 * their siblings, are optional but not required. Whether or not a given node is a folder is
	 * determined by the presence of the children list (Tree.childrenProperty). */
		| "children"
		;


	/**
	 * Priority levels for log messages
	 */
	export type LogPriority = 
		/** unrecoverable error */
		1  // Original Value: Log.FATAL, How found: Looked up constant string
		/** error, may be recoverable */
		| 2  // Original Value: Log.ERROR, How found: Looked up constant string
		/** apparent problem, misused API, partial result */
		| 3  // Original Value: Log.WARN, How found: Looked up constant string
		/** significant events in normal operation */
		| 4  // Original Value: Log.INFO, How found: Looked up constant string
		/** diagnostics for developers */
		| 5  // Original Value: Log.DEBUG, How found: Looked up constant string
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
	 * An object containing the stored sort information for a listGrid.
	 * Note that this object is not intended to be interrogated directly, but may be stored
	 * (for example) as a blob on the server for state persistence across sessions.
	 */
	export type ListGridSortState = String; // baseType='String'


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
	 * An enum of time-units available for use with the RelativeDateItem,
	 * TimeItem and Calendar widgets.
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
	 * Event that will trigger inline editing. See EditProxy.inlineEditEvent.
	 */
	export type InlineEditEvent = 
		/** A single mouse click triggers inline editing */
		"click"
		/** A double click triggers inline editing */
		| "doubleClick"
		/** No mouse event will trigger inline editing, but it can still be triggered by a call to EditProxy.startInlineEditing. */
		| "none"
		/** A double click triggers inline editing. In addition, if the widget is selected, starting to type triggers inline editing. */
		| "dblOrKeypress"
		;


	/**
	 * What to do if the user hits escape while editing a cell.
	 */
	export type EscapeKeyEditAction = 
		/** cancels the current edit and discards edit values */
		"cancel"
		/** end editing (will save edit values if ListGrid.autoSaveEdits is true). */
		| "done"
		/** exit the editor (edit values will be left intact but not saved). */
		| "exit"
		/** do nothing special when the Escape key is pressed (ie, just ignore it) */
		| "ignore"
		;


	/**
	 * Policy controlling how the Layout will manage member sizes on this axis.
	 * 
	 * Note that, by default, Layouts do not automatically expand the size of all members
	 * to match a member that overflows the layout on the breadth axis. This means that a
	 * DynamicForm or other component that can't shrink beyond a minimum width will 
	 * "stick out" of the Layout, wider than any other member and wider than automatically
	 * generated components like resizeBars or sectionHeaders (in a SectionStack).
	 * 
	 * This is by design: matching the size of overflowing members would cause expensive redraws
	 * of all members in the Layout, and with two or more members potentially overflowing, could
	 * turn minor browser size reporting bugs or minor glitches in custom components into
	 * infinite resizing loops.
	 * 
	 * If you run into this situation, you can either:
	 * set the overflowing member to Canvas.overflow','overflow: "auto", so that it
	 * scrolls if it needs more space
	 * set the Layout as a whole to Canvas.overflow','overflow:"auto", so that the
	 * whole Layout scrolls when the member overflows
	 * define a Canvas.resized','resized() handler to manually update the breadth
	 * of the layout
	 * set Layout.minBreadthMember to ensure that the available breadth used to
	 * expand all (other) members is artificially increased to match the current breadth of the
	 * minBreadthMember member; the layout will still be overflowed in this case
	 * and the reported size from Canvas.getWidth or Canvas.getHeight won't
	 * change, but all members should fill the visible width or height along the breadth axis
	 * 
	 * For the last approach, given the VLayout myLayout and a member 
	 * myWideMember, then we could define the following Canvas.resized','resized() handler on myLayout:
	 * 
	 * 
	 * resized : function () {
	 * var memberWidth = myWideMember.getVisibleWidth();
	 * this.setWidth(Math.max(this.getWidth(), memberWidth + offset));
	 * }
	 * where offset reflects the difference in width (due to margins, padding,
	 * etc.) between the layout and its widest member. In most cases, a fixed offset can
	 * be used, but it can also be computed via the calculation:
	 * 
	 * 
	 * myLayout.getWidth() - myLayout.getViewportWidth()
	 * 
	 * in an override of Canvas.draw','draw()
	 * for myLayout. (That calculation is not always valid inside the 
	 * Canvas.resized','resized() handler itself.)
	 * 
	 * Note: the HLayout case is similar- just substitute height where width appears above.
	 * 
	 * See also Layout.overflow.
	 */
	export type LayoutPolicy = 
		/** Layout does not try to size members on the axis at all, merely stacking them (length
	 * axis) and leaving them at default breadth. */
		"none"  // Original Value: Layout.NONE, How found: Looked up constant string
		/** Layout sizes members so that they fill the specified size of the layout. The rules
	 * are:
	 * 
	 * Any component given an initial pixel size, programmatically resized to a specific
	 * pixel size, or drag resized by user action is left at that exact size
	 * Any component that Button.autoFit','autofits is given exactly the space it
	 * needs, never forced to take up more.
	 * All other components split the remaining space equally, or according to their
	 * relative percentages.
	 * Any component that declares a Canvas.minWidth or Canvas.minHeight
	 * will never be sized smaller than that size
	 * Any component that declares a Canvas.maxWidth or Canvas.maxHeight
	 * will never be sized larger than that size
	 * 
	 * In addition, components may declare that they have 
	 * Canvas.canAdaptWidth','adaptive sizing, and may coordinate with the Layout to render
	 * at different sizes according to the amount of available space. */
		| "fill"  // Original Value: Layout.FILL, How found: Looked up constant string
		;


	/**
	 * Possible values for the current pane showing in a SplitPane. See
	 * SplitPane.currentPane for details.
	 */
	export type CurrentPane = 
		/** SplitPane.navigationPane is the most recently shown */
		"navigation"
		/** SplitPane.listPane is the most recently shown */
		| "list"
		/** SplitPane.detailPane is the most recently shown */
		| "detail"
		;


	/**
	 * How a component should be embedded within its record or cell
	 */
	export type EmbeddedPosition = 
		/** component should be placed underneath normal record or cell content, expanding the records. Expanding records can result in variable height rows,
	 * in which case ListGrid.virtualScrolling','virtualScrolling should be
	 * enabled. */
		"expand"
		/** component should be placed within the normal area of the record or cell. Percentage sizes will be treated as percentages of the record and
	 * Canvas.snapTo positioning settings are also allowed and refer to the
	 * rectangle of the record or cell. Note that for components embedded within cells,
	 * cell align and vAlign will be used if snapTo is unset (so top / left alignment
	 * of cell content will map to snapTo of "TL", etc). */
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
	 * OperationBinding.dataProtocol affects how the data in the DSRequest (DSRequest.data)
	 * is sent to the DataSource.dataURL. Listed below are the valid values for
	 * OperationBinding.dataProtocol and their behavior.
	 * 
	 * Note that, when using the SmartClient server, data is automatically translated from
	 * JavaScript to Java according to the rules described RPCRequest.data','here;
	 * dataProtocol does not apply and is ignored.
	 * 
	 * If you are integrating with a RestDataSource','REST server that requires the more
	 * obscure RPCRequest.httpMethods of "PUT", "DELETE" or "HEAD", you can specify these
	 * httpMethod settings via OperationBinding.requestProperties. dataProtocol settings
	 * that mention "GET" or "POST" are compatible with these additional HTTP methods as well.
	 * Typical DataSource.operationBindings','operationBindings for a REST server that uses
	 * "PUT" and "DELETE" are as follows:
	 * 
	 * operationBindings:[
	 * {operationType:"fetch", dataProtocol:"getParams"},
	 * {operationType:"add", dataProtocol:"postParams"},
	 * {operationType:"remove", dataProtocol:"getParams", requestProperties:{httpMethod:"DELETE"}},
	 * {operationType:"update", dataProtocol:"postParams", requestProperties:{httpMethod:"PUT"}}
	 * ],
	 * 
	 */
	export type DSProtocol = 
		/** Data is added to the dataURL, with each property in the data becoming an HTTP parameter,
	 * eg http://service.com/search?keyword=foo */
		"getParams"
		/** Data is POST'd to the dataURL, with each property becoming an HTTP parameter, 
	 * exactly as an HTML form would submit them if it had one input field per property in the
	 * data. */
		| "postParams"
		/** Data is serialized as XML via DataSource.xmlSerialize and POST'd as the
	 * HTTP request body with contentType "text/xml". */
		| "postXML"
		/** Data is serialized as XML via DataSource.xmlSerialize, wrapped in a SOAP
	 * envelope, and POST'd as the HTTP request body with contentType "text/xml". Generally
	 * only used in connection with a wsdlBinding','WSDL web service. */
		| "soap"
		/** dsRequest.data is assumed to be a String set up by DataSource.transformRequest
	 * and is POST'd as the HTTP request body. */
		| "postMessage"
		/** This setting entirely bypasses the SmartClient comm system. Instead of the DataSource sending
	 * an HTTP request to a URL, the developer is expected to implement
	 * DataSource.transformRequest to perform their own custom logic, and then call
	 * DataSource.processResponse to handle the results of this action.
	 * This dataProtocol setting can be used to implement access to in-browser
	 * resources such as HTML5 "localStorage", native APIs available to applications
	 * mobileDevelopment','packaged as native applications, or to implement the 
	 * dsFacade','DataSource Facade pattern. */
		| "clientCustom"
		;

	export type CharacterCasing = 
		/** No character translation */
		"default"  // Original Value: TextItem.DEFAULT, How found: Looked up constant string
		/** Map characters to uppercase */
		| "upper"  // Original Value: TextItem.UPPER, How found: Looked up constant string
		/** Map characters to lowercase */
		| "lower"  // Original Value: TextItem.LOWER, How found: Looked up constant string
		;


	/**
	 * Constants for the standard states for a StatefulCanvas.
	 */
	export type State = 
		/** state when mouse is not acting on this StatefulCanvas */
		""  // Original Value: StatefulCanvas.STATE_UP, How found: Looked up constant string
		/** state when mouse is down */
		| "Down"  // Original Value: StatefulCanvas.STATE_DOWN, How found: Looked up constant string
		/** state when mouse is over */
		| "Over"  // Original Value: StatefulCanvas.STATE_OVER, How found: Looked up constant string
		/** disabled */
		| "Disabled"  // Original Value: StatefulCanvas.STATE_DISABLED, How found: Looked up constant string
		;


	/**
	 * Indicates what SmartClient Server will do with a DataSource request if you call
	 * dsRequest.execute() in server code.
	 * 
	 * If you use a Java-based persistence layer not provided by SmartClient, such as
	 * EJB or your own custom object model, you don't need to set
	 * dataSource.serverType and should follow the
	 * serverDataIntegration','integration instructions.
	 */
	export type DSServerType = 
		/** Use SmartClient's sqlDataSource','built-in SQL connectors to talk directly
	 * to relational databases. */
		"sql"
		/** Use Hibernate, either using a real mapped bean or by automatically generating a 
	 * Hibernate configuration based on a SmartClient DataSource file 
	 * (dataSourceID.ds.xml). See hibernateIntegration for details. */
		| "hibernate"
		/** Use SmartClient's built-in JPA 2.0 connector. */
		| "jpa"
		/** Use SmartClient's built-in JPA 1.0 connector. */
		| "jpa1"
		/** Requests will be delivered to the server and you are expected to write Java code to
	 * create a valid response. Throws an error if the server side method dsRequest.execute()
	 * is called. This is appropriate if you intend an entirely custom implementation, and you
	 * want an error thrown if there is an attempt to call an operation you have not
	 * implemented. */
		| "generic"
		/** Requests will be delivered to the server and processed as 
	 * fileSource','FileSource operations, using directories or other DataSources
	 * which you configure via DataSource.projectFileKey or DataSource.projectFileLocations */
		| "projectFile"
		;


	/**
	 * Some interfaces, for example the FieldPicker','FieldPicker and 
	 * HiliteEditor','HiliteEditor widgets, can use data from an associated 
	 * DataBoundComponent to express live sample values at runtime.
	 */
	export type DefaultSampleRecord = 
		/** Uses the first record in the DataBoundComponent as sample data */
		"first"
		/** Uses the first open leaf-node in the DataBoundComponent as sample data */
		| "firstOpenLeaf"
		;


	/**
	 * When attempting to identify a component from within a list of possible candidates
	 * as described LocatorStrategy','here, if we are unable to find a unique match
	 * by name or title, we will use the recorded "type" of the component to verify
	 * an apparent match.
	 * 
	 * By default we check the following properties in order:
	 * Does the Class match?
	 * If this is not a Class.isFrameworkClass','framework class, does the
	 * core framework superclass match?
	 * Does the role match?
	 * 
	 * In some cases an explicit locatorTypeStrategy can be specified to modify this
	 * behavior. As with LocatorStrategy, if we are unable to match using the
	 * specified type strategy we continue to test against the remaining strategies in order - 
	 * so if a type strategy of "scClass" was specified but we were unable to find a match
	 * with the appropriate core superclass, we will attempt to match by role.
	 * Possible values are:
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
	 * Options for how values in the import dataset (for example, the CSV file) are transformed
	 * during import if the field is a DataSourceField.foreignKey','foreignKey mapped to a 
	 * DataSourceField.displayField','displayField
	 */
	export type FieldImportStrategy = 
		/** The import process expects values in the import dataset to be the real underlying key values, and performs no transformation */
		"key"
		/** The import process expects values in the import dataset to be display values, and it will transform them to the corresponding underlying keys */
		| "display"
		/** The import process will attempt to discover the best setting to use, based on the values in the first record, and use that setting for every remaining record
	 * in the import dataset */
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
	 * Boundary type for limiting where contiguous selection (via shift+click or drag selection)
	 * can be applied across Facet.selectionBoundary','facets or 
	 * FacetValue.selectionBoundary','facetValues.
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
		"up"  // Original Value: Canvas.UP, How found: Looked up constant string
		/** below */
		| "down"  // Original Value: Canvas.DOWN, How found: Looked up constant string
		/** to the left of */
		| "left"  // Original Value: Canvas.LEFT, How found: Looked up constant string
		/** to the right of */
		| "right"  // Original Value: Canvas.RIGHT, How found: Looked up constant string
		;


	/**
	 * when heuristically finding a property that appears to contain child objects,
	 * the ChildrenPropertyMode determines how to chose the property appears to contain child objects
	 */
	export type ChildrenPropertyMode = 
		/** assume the first object or array value we find is the children property */
		"any"
		/** assume the first array we find is the children property, no matter the contents */
		| "array"
		/** assume the first object or array of objects we find is the children property (don't allow arrays that don't have objects) */
		| "object"
		/** accept only an array of objects as the children property */
		| "objectArray"
		;


	/**
	 * The logical operator to use when combining criteria objects with the 
	 * DataSource.combineCriteria method.
	 */
	export type CriteriaCombineOperator = 
		"and"
		| "or"
		;


	/**
	 * A string used to define the value of a class attribute when it's referenced as one of the
	 * potential values of an enum type. For example, one documented value of Overflow is
	 * Canvas.HIDDEN, which is itself a class attribute with type Constant and
	 * the value "hidden".
	 */
	export type Constant = String; // baseType='String'


	/**
	 * Side of a component.
	 */
	export type Side = 
		/** Left side */
		"left"  // Original Value: Canvas.LEFT, How found: Looked up constant string
		/** Right side */
		| "right"  // Original Value: Canvas.RIGHT, How found: Looked up constant string
		/** Top side */
		| "top"  // Original Value: Canvas.TOP, How found: Looked up constant string
		/** Bottom side */
		| "bottom"  // Original Value: Canvas.BOTTOM, How found: Looked up constant string
		;


	/**
	 * An expression in the <a href=http://velocity.apache.org/engine/releases/velocity-1.5/user-guide.html>
	 * Velocity Template Language</a> (VTL). For more information on SmartClient's Velocity support, 
	 * see velocitySupport','Velocity support.
	 * 
	 * Note that a VelocityExpression must often evaluate to a particular type of value 
	 * to be useful. For example, DataSource.requires must evaluate to true or false 
	 * (Boolean objects or strings containing those two words), and Mail.messageData must
	 * evaluate to a Java Map object, or a Java List containing only 
	 * Maps.
	 */
	export type VelocityExpression = String; // baseType='String'


	/**
	 * Controls how ListGrid record drop events report their
	 * ListGrid.getRecordDropPosition','dropPosition, and where the drop indicator will be displayed
	 * if appropriate.
	 */
	export type RecordDropAppearance = 
		/** When the user drops onto a record, dropPosition will always be "over" */
		"over"  // Original Value: ListGrid.OVER, How found: Looked up constant string
		/** When the user drops onto a record, dropPosition will be either "before" or "after" depending on whether the mouse was over the top or bottom of
	 * the target record */
		| "between"  // Original Value: ListGrid.BETWEEN, How found: Looked up constant string
		/** When the user drops onto a record, if the drop occurs centered over the record, the dropPosition will be reported as "over", otherwise it will be
	 * "before" or "after" depending on whether the mouse was over the top or bottom of the
	 * target record. */
		| "both"  // Original Value: ListGrid.BOTH, How found: Looked up constant string
		/** No dropPosition will be reported */
		| "body"  // Original Value: ListGrid.BODY, How found: Looked up constant string
		;


	/**
	 * The type of drawing back-end used by a DrawPane to draw its DrawPane.drawItems','draw items
	 * on screen.
	 * 
	 * <h3>SVG and bitmap tradeoffs</h3>
	 * <ul style="list-style-type: lower-alpha;">
	 * SVG is best supported in IE9+ and Opera 12.16 and earlier, but may also be used in Chrome,
	 * Opera 15+, Firefox 4+, and Safari.
	 * SVG tends to be higher quality, especially when it comes to text and drawing on high-DPI
	 * displays and mobile devices.
	 * DrawItem.zIndex, DrawItem.bringToFront, and DrawItem.sendToBack
	 * are not supported on iOS devices in bitmap drawing mode due to platform limitations. These
	 * APIs are supported on iOS in SVG drawing mode.
	 * Incremental updates to just a few elements of a drawing are faster in SVG, whereas
	 * whole drawing refreshes are faster in bitmap mode.
	 * Browsers have limits on the maximum dimensions or area of the &lt;canvas&gt; element
	 * used in bitmap drawing. The limits on a &lt;canvas&gt; imposed by the browser translate to
	 * the same limits on the dimensions or area of a DrawPane using bitmap drawing.
	 * Internet Explorer, for example, limits the width and height of a &lt;canvas&gt; to 8192 pixels:
	 * <a href='http://msdn.microsoft.com/en-us/library/ie/ff975062(v=vs.85).aspx' target='_blank'>http://msdn.microsoft.com/en-us/library/ie/ff975062(v=vs.85).aspx</a>; therefore,
	 * in IE using bitmap drawing, a DrawPane can be at most 8192&times;8192 in size.
	 * To make larger drawings, you can either switch to SVG drawing, use multiple DrawPanes,
	 * or enable DrawPane.canDragScroll','drag-scrolling.
	 * In bitmap drawing, each pixel uses around 4 to 8 bytes of memory. Large bitmap drawings
	 * can therefore use a lot of memory. A 4000&times;2000 bitmap drawing will use around 31 to 61
	 * Megabytes of memory.
	 * Note: To minimize memory use when using bitmap drawing for a large drawing, it may be useful
	 * to employ <a href='http://en.wikipedia.org/wiki/Slicing_(interface_design)' target='_blank'>slicing</a> if
	 * possible. For example, if the drawing is mostly a solid color except for content located at
	 * a few small-area places on screen, a Canvas can be created with the solid background
	 * color and one DrawPane can be created for each content area. Each DrawPane
	 * is Canvas.addChild','added as a child to the Canvas. The Canvas.left','left
	 * and Canvas.top','top properties of the DrawPanes are used to absolutely-position
	 * them within the Canvas parent.
	 * 
	 */
	export type DrawingType = 
		/** Use Scalable Vector Graphics (SVG). SVG is a W3C standard supported by IE9+, Chrome, Firefox 4+, Safari, and Opera. */
		"svg"
		/** Use an HTML5 &lt;canvas&gt; element. "bitmap" drawing is supported by IE9+, Chrome, Firefox, Safari, and Opera. */
		| "bitmap"
		/** Use Vector Markup Language (VML). VML is a deprecated vector graphics technology supported only by Internet Explorer 6 through 9. In IE 6, 7, and 8, "vml" drawing is the only
	 * supported drawing back-end. */
		| "vml"
		;


	/**
	 * When ListGrid.allowRowSpanning is enabled, certain cells may span multiple
	 * rows. In this case, the cell displays the value from the record in the first row.
	 * If the grid is ListGrid.canEdit','editable (and the
	 * ListGridField.canEdit','field is also editable), these settings allow the user
	 * to specify what happens to the data when the user edits this cell.
	 * 
	 * Note that in this scenario, a user may begin an edit on the row-spanning cell directly
	 * (via double-click for example), or on a cell in another column in any of the rows
	 * spanned by the cell. The appropriate behavior with respect to user-experience and how
	 * the data is manipulated will depend on the application in question. Developers may
	 * of course entirely disable editing for the field via ListGridField.canEdit or
	 * ListGrid.canEditCell.
	 * 
	 * See also: ListGrid.useRowSpanStyling
	 */
	export type RowSpanEditMode = 
		/** This setting assumes that only the field-value for the first record spanned by this cell is significant. In this case the editor will only show for this
	 * cell if the user is editing the first spanned record. If the user initialized the edit
	 * on another spanned row, the editor will not show for this field. */
		"first"
		/** This setting assumes that each row's values are logically separate, so if a cell spans multiple rows, and a user initializes an edit on some cell in the
	 * second spanned row, the spanning cell will show an editor containing the value for
	 * the second spanned row. This may differ from the value displayed when not
	 * in edit mode (which is derived from the first spanned row by default). This setting may
	 * be useful for developers who which to implement their own logic on how to handle
	 * spanning cell display values and/or edit values (for example by using custom
	 * ListGridField.formatCellValue','formatting and applying custom logic to handle
	 * editing on ListGridField.editorEnter and ListGridField.editorExit). */
		| "each"
		;

	export type FieldAppearance = 
		/** Show in read-only appearance */
		"readOnly"  // Original Value: Validator.READONLY, How found: Looked up constant string
		/** Hide field */
		| "hidden"  // Original Value: Validator.HIDDEN, How found: Looked up constant string
		/** Disable field */
		| "disabled"  // Original Value: Validator.DISABLED, How found: Looked up constant string
		;


	/**
	 * what to do if there is more than one possible childrenProperty when using
	 * scanMode "branch" or "level"
	 * "node": continue, but pick childrenProperty on a per-node basis (will detect
	 * mixed) 
	 * "highest": continue, picking the childrenProperty that occurred most as the single
	 * choice
	 * "stop": if there's a tie, stop at this level (assume no further children)
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
	 * Possible values for Canvas.backgroundRepeat.
	 */
	export type BackgroundRepeat = 
		/** Tile the background image horizontally and vertically. */
		"repeat"  // Original Value: Canvas.REPEAT, How found: Looked up constant string
		/** Don't tile the background image at all. */
		| "no-repeat"  // Original Value: Canvas.NO_REPEAT, How found: Looked up constant string
		/** Repeat the background image horizontally but not vertically. */
		| "repeat-x"  // Original Value: Canvas.REPEAT_X, How found: Looked up constant string
		/** Repeat the background image vertically but not horizontally. */
		| "repeat-y"  // Original Value: Canvas.REPEAT_Y, How found: Looked up constant string
		;


	/**
	 * SmartClient supports multiple RPC transports for maximum compatibility and feature richness.
	 * All of transports use HTTP as the underlying protocol, but use different mechanisms for
	 * sending the HTTP request and processing the response. The transport is typically
	 * auto-selected for by based on the feature being used and the current browser settings. For
	 * advanced use cases, RPCRequest.transport and RPCManager.defaultTransport are
	 * exposed as override points.
	 * 
	 */
	export type RPCTransport = 
		/** Uses the XMLHttpRequest object to make the request to the server. Note that in some browsers with certain configurations, this transport may not be
	 * available. See platformDependencies for more information. This transport is
	 * not useful with file uploads. Cannot be used to target cross-domain URLs directly. */
		"xmlHttpRequest"
		/** Write a SCRIPT tag into the DOM with a SRC attribute that targets an arbitrary URL. This transport is the only one that allows direct cross-domain URL
	 * access. 
	 * 
	 * For RPCRequest.callback to work, the server being contacted must support the ability
	 * to generate JavaScript code in the response that will call a JavaScript function generated
	 * by SmartClient. SmartClient passes the name of the function to call via a URL parameter,
	 * which can be controlled with RPCRequest.callbackParam. This callback mechanism is
	 * sometimes called the "JSONP" (JSON with Padding) approach. */
		| "scriptInclude"
		/** Available with SmartClient Server only. An HTML form is dynamically assembled that targets a hidden IFRAME. This mechanism is supported on all
	 * browsers and cannot be disabled by end users. 
	 * 
	 * If using the SmartClient Server and using 
	 * serverDataIntegration','Server-side data integration, the "hiddenFrame" transport
	 * is automatically used for all RPCManager and DataSource requests if the "xmlHttpRequest"
	 * transport is not available.
	 * 
	 * Cannot be used to target cross-domain URLs directly. */
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
		/** No default drag appearance is indicated. Your custom dragging routines should
	 * implement some behavior that indicates that the user is in a dragging situation,
	 * and where the mouse is. */
		"none"
		/** A "drag tracker" object is automatically shown and moved around with the
	 * mouse. This is generally set to an icon that represents what is being dragged. The
	 * default tracker is a 10 pixel black square, but you can customize this icon. This
	 * dragAppearance is not recommended for use with drag resizing or drag moving. */
		| "tracker"
		/** The target object is actually moved, resized, etc. in real time. This is
	 * recommended for drag repositioning, but not for drag resizing of complex objects. */
		| "target"
		/** An outline the size of the target object is moved, resized, etc. with the
	 * mouse. This is recommended for drag resizing, especially for objects that take a
	 * significant amount of time to draw. */
		| "outline"
		;


	/**
	 * Whether the mock data is for a flat grid-like dataset or for a tree. If "grid" is
	 * specified, text shortcuts that would cause a hierarchy to be created (such as starting a
	 * line with "[+]") will not have special meaning and be considered to be just a normal
	 * data value.
	 */
	export type MockDataType = 
		/** Mock data for a ListGrid */
		"grid"
		/** Mock data for a TreeGrid */
		| "tree"
		;


	/**
	 * A whole number, for example, 5. Decimal numbers, for example 5.5, are not allowed. Null is
	 * allowed.
	 */
	export type Integer = Number; // baseType='Number'


	/**
	 * Strategies for calculating the FiscalYear within a FiscalCalendar from the
	 * specified FiscalCalendar.defaultDate and FiscalCalendar.defaultMonth
	 * If the specified fiscal year date starts in one calendar year and ends in the next.
	 */
	export type FiscalYearMode = 
		/** The fiscalYear value for the date range will match the calendar year in which the period ends. For example if the defaultDate and defaultMonth were set
	 * to represent April 1st, the fiscal year starting on April 1st 2020 would end on
	 * April 1st 2021. Setting the fiscalYearMode to end would mean the
	 * fiscalYear value for this block would be 2021. */
		"end"
		/** The fiscalYear value for the date range will match the calendar year in which the period starts. For example if the defaultDate and defaultMonth were set
	 * to represent April 1st, the fiscal year starting on April 1st 2020 would end on
	 * April 1st 2021. Setting the fiscalYearMode to start would mean the
	 * fiscalYear value for this block would be 2020. */
		| "start"
		;


	/**
	 * Properties that refer to images by URL, such as Img.src and Button.icon, are
	 * specially interpreted in SmartClient to allow for simpler and more uniform image URLs,
	 * and to allow applications to be restructured more easily.
	 * 
	 * the application image directory
	 * 
	 * When specifying URLs to image files via SmartClient component properties such as
	 * StretchImg.src, any relative path is assumed to be relative to the "application image
	 * directory" (appImgDir). The application image directory can be set via
	 * Page.setAppImgDir, and defaults to "images/", representing the typical practice of
	 * placing images in a subdirectory relative to the URL at which the application is accessed.
	 * 
	 * For applications that may be launched from multiple URLs, the appImgDir can be
	 * set to the correct relative path to the image directory by calling
	 * Page.setAppImgDir before any SmartClient components are created. This enables
	 * applications or components of an application to be launched from multiple locations, or to
	 * be relocated, without changing any image URLs supplied to SmartClient components.
	 * 
	 * the "[SKIN]" URL prefix
	 * 
	 * The special prefix "[SKIN]" can be used to refer to images within the skin folder
	 * whenever image URLs are supplied to SmartClient components.
	 * 
	 * The value of "[SKIN]" is the combination of:
	 * 
	 * the "skin directory", established in load_skin.js via Page.setSkinDir,
	 * plus..
	 * the setting for Canvas.skinImgDir','skinImgDir on the component where you set an
	 * image URL property
	 * 
	 * skinImgDir defaults to "images/", so creating an Img component with
	 * Img.src set to "[SKIN]myButton/button.gif" will expand to Page.getSkinDir() +
	 * "/images/myButton/button.gif".
	 * 
	 * Some components that use a large number of images use skinImgDir to group them
	 * together and make it possible to relocate all the media for the component with a single setting.
	 * For example, the TreeGrid class sets skinImgDir to "images/TreeGrid/".
	 * This allows TreeGrid.folderIcon to be set to just "[SKIN]folder.gif" but refer to
	 * Page.getSkinDir() + "/images/TreeGrid/folder.gif".
	 * 
	 * A custom subclass of TreeGrid can set skinImgDir to a different path, such as
	 * "/images/MyTreeGrid", to source all media from a different location.
	 * 
	 * TIPS:
	 * 
	 * subcomponents may not share the parent component's setting for skinImgDir. For
	 * example, the Window.minimizeButton has the default setting for "skinImgDir"
	 * ("images/"), so the Img.src','src property used with this component is set to
	 * "[SKIN]/Window/minimize.png" (in the "SmartClient" sample skin).
	 * for a particular image, the skinImgDir setting on the component may not be
	 * convenient. The prefix "[SKINIMG]" can be used to refer to Page.getSkinDir() +
	 * "/images" regardless of the setting for skinImgDir
	 * 
	 * Stateful image URLs
	 * 
	 * Many image URLs in SmartClient are "stateful", meaning that the actual URL used to fetch an
	 * image will vary according to the component's state (eg, "Disabled"), generally, by adding a
	 * suffix to the image URL. See the skinning','Skinning Overview for more
	 * information on statefulness and the Img.src documentation for information on how
	 * stateful image URLs are formed.
	 */
	export type SCImgURL = URL; // baseType='URL'


	/**
	 * Strategy to apply when there is too little room for labels to be shown for all data points with
	 * comfortable padding (FacetChart.minLabelGap).
	 */
	export type LabelCollapseMode = 
		/** Show all labels regardless, even though they will overlap */
		"none"
		/** Show significant time values such as the first day of the month or week. Data values in Records must be true Date objects, not Strings. */
		| "time"
		/** Pick round numbers in the range and show labels for just those numbers. Best for continuous datasets that are not time-based */
		| "numeric"
		/** Pick periodic values from the dataset and show labels for those. Best when the there are no particular points that would clearly be the best to label */
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
	 * CSS color specification applied to a specific HTML element on this page.
	 * 
	 * This is a string matching the syntax as specified in CSS1, and can be
	 * formatted in one of the following ways:
	 * 
	 * A keyword color, &ldquo;white&rdquo;
	 * Six-digit hex notation, &ldquo;#ffffff&rdquo;
	 * Three-digit hex notation, &ldquo;#fff&rdquo;
	 * 8-bit decimal notation, &ldquo;rgb(255, 255, 255)&rdquo;
	 * Percentage notation, &ldquo;rgb(100%, 100%, 100%)&rdquo;
	 * 
	 * 
	 * Note that when working with FacetCharts, it's required that colors be specified
	 * using the six-digit hex format listed above, rather than any of the others, since the
	 * Framework needs to perform math on the subfields. Affected properties include
	 * FacetChart.dataColors, and affected methods include 
	 * overrides of FacetChart.getDataColor and FacetChart.getDataLineColor.
	 * 
	 */
	export type CSSColor = String; // baseType='String'

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
		/** Expand the chart to accommodate FacetChart.barMargin, FacetChart.minBarThickness, and FacetChart.getMinClusterSize. */
		| "clusters"
		/** Expand the chart to make room for both labels and clusters (whichever requires more space). */
		| "both"
		;


	/**
	 * A string of known format used to specify a datetime offset. For example, a 
	 * RelativeDateString that represents "one year from today" is written as "+1y".
	 * 
	 * RelativeDateStrings are comprised of the following parts:
	 * 
	 * direction: the direction in which the quantity applies - one of + or - 
	 * quantity: the number of units of time to apply - a number 
	 * timeUnit: an abbreviated timeUnit to use - one of ms/MS (millisecond), s/S (second), 
	 * mn/MN (minute), h/H (hour), d/D (day), w/W (week), m/M (month), q/Q (quarter, 3-months), 
	 * y/Y (year), dc/DC (decade) or c/C (century). 
	 * The timeUnit is case sensitive. A lowercase timeUnit implies an exact offset, so +1d
	 * refers to the current date / time increased by exactly 24 hours. If the timeUnit is 
	 * uppercase, it refers to the start or end boundary of the period of time in question, so
	 * +1D would refer to the end of the day (23:39:59:999) tomorrow, and
	 * -1D would refer to the start of the day (00:00:00:000) yesterday.
	 * [qualifier]: an optional timeUnit encapsulated in square-brackets and used to offset 
	 * the calculation - eg. if +1d is "plus one day", +1d[W] is "plus one day from the 
	 * end of the current week". You may also specify another complete RelativeDateString as the
	 * [qualifier], which offers more control - eg, +1d[+1W] indicates "plus one day from 
	 * the end of NEXT week".
	 * 
	 * 
	 * This format is very flexible. Here are a few example relative date strings:
	 * +0D: End of today. There are often multiple ways to represent the same time
	 * using this system - for example this could also be written as -1ms[+1D]
	 * -0D: Beginning of today.
	 * +1W: End of next week.
	 * +1w[-0W]: Beginning of next week.
	 * +1w[-0D]: Beginning of the current day of next week.
	 */
	export type RelativeDateString = String; // baseType='String'


	/**
	 * An ordinary JavaScript as obtained by "new Object()" or via 
	 * ObjectLiteral','Object Literal syntax.
	 * 
	 * Methods that return Objects or take Objects as parameters make use of the ability of a
	 * JavaScript Object to contain an arbitrary set of named properties, without requiring
	 * declaration in advance. This capability makes it possible to use a JavaScript Object much
	 * like a HashMap in Java or .NET, but without the need to call get() or set() to create and
	 * retrieve properties.
	 * 
	 * For example if you created an Object using ObjectLiteral','Object Literal syntax
	 * like so:
	 * 
	 * var request = {
	 * actionURL : "/foo.do",
	 * showPrompt:false
	 * };
	 * 
	 * You could then access it's properties like so:
	 * 
	 * var myActionURL = request.actionURL;
	 * var myShowPrompt = request.showPrompt;
	 * 
	 * .. and you could assign new values to those properties like so:
	 * 
	 * request.actionURL = "newActionURL";
	 * request.showPrompt = newShowPromptSetting;
	 * 
	 * Note that while JavaScript allows you to get and set properties in this way on any Object,
	 * SmartClient components require that if a setter or getter exists, it must be called, or no
	 * action will occur. For example, if you had a ListGrid and you wanted to change the
	 * ListGrid.showHeader','showHeader property:
	 * 
	 * myListGrid.setShowHeader(false); // correct
	 * myListGrid.showHeader = false; // incorrect (nothing happens)
	 * 
	 * All documented attributes have flags','flags (eg IRW) that indicate when direct
	 * property access is allowed or not.
	 */
	export type Object = any; // baseType='<none>'


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
	 * Appearance when a component is in Canvas.setEditMode','edit mode and is
	 * selected. 
	 * 
	 * Modes such as "tintMask" or "outlineMask" create an 
	 * EditProxy.editMask','"edit mask" that is layered over the selected component, and 
	 * blocks all normal interaction with the component, so that behaviors like
	 * EditProxy.supportsInlineEdit can completely take the place of the component's
	 * normal interactivity.
	 * 
	 * "outlineEdges" mode allows normal interaction with the component, which allows the end
	 * user to do things like ListGrid.canFreezeFields','freeze ListGrid fields, which
	 * the GridEditProxy can implement as a 
	 * GridEditProxy.saveFieldFrozenState','persistent change to grid\'s configuration.
	 */
	export type SelectedAppearance = 
		/** editMask on top of the component is updated with EditProxy.selectedTintColor and EditProxy.selectedTintOpacity */
		"tintMask"
		/** editMask on top of the component is updated with EditProxy.selectedBorder */
		| "outlineMask"
		/** MultiAutoChild is created on top of the component. This constructs a border around the component using 4 separate outlineEdge components so that interactivity is not blocked. */
		| "outlineEdges"
		/** no change in appearance. Override EditProxy.showSelectedAppearance to create a custom appearance. */
		| "none"
		;


	/**
	 * Default buttons that you can use in your Dialogs.
	 * 
	 * 
	 * 
	 * Refer to these buttons via the syntax isc.Dialog.OK when passing them into
	 * Dialog.buttons or into the properties argument of helper
	 * methods such as isc.say.
	 * 
	 * 
	 * All buttons added via setButtons will fire the
	 * Dialog.buttonClick','buttonClick event (whether they are built-in or custom
	 * buttons). Built-in buttons automatically close a Dialog, with the exception of the
	 * "Apply" button.
	 */
	export type DialogButtons = 
		/** Dismisses dialog by calling Dialog.okClick. Title derived from Dialog.OK_BUTTON_TITLE. */
		"OK"  // How found:  Original value
		/** Does not dismiss dialog. Calls Dialog.applyClick
	 * Title derived from Dialog.APPLY_BUTTON_TITLE. */
		| "APPLY"  // How found:  Original value
		/** Dismisses dialog by calling Dialog.yesClick. Title derived from Dialog.YES_BUTTON_TITLE. */
		| "YES"  // How found:  Original value
		/** Dismisses dialog by calling Dialog.noClick. Title derived from Dialog.NO_BUTTON_TITLE. */
		| "NO"  // How found:  Original value
		/** Dismisses dialog by calling Dialog.cancelClick. Title derived from Dialog.CANCEL_BUTTON_TITLE. */
		| "CANCEL"  // How found:  Original value
		/** Dismisses dialog by calling Dialog.doneClick. Title derived from Dialog.DONE_BUTTON_TITLE. */
		| "DONE"  // How found:  Original value
		;


	/**
	 * How should fields of ListGridFieldType','type:"icon" be sized by default?
	 */
	export type AutoFitIconFieldType = 
		/** Apply no special sizing to icon fields - treat them like any other field in the grid */
		"none"
		/** size the field to accommodate the width of the icon */
		| "iconWidth"
		/** size the field to accommodate the title (or the width of the icon if it exceeds the width of the title. */
		| "title"
		;


	/**
	 * DynamicForms automatically choose the FormItem type for a field based on the
	 * type property of the field. The table below describes the default FormItem
	 * chosen for various values of the type property.
	 * 
	 * You can also set FormItem.editorType','field.editorType to the classname of a
	 * FormItem to override this default mapping. You can alternatively override
	 * DynamicForm.getEditorType to create a form with different rules for which
	 * FormItems are chosen.
	 * 
	 */
	export type FormItemType = 
		/** Rendered as a TextItem, unless the length of the field (as specified by DataSourceField.length attribute) is larger than the value
	 * specified by DynamicForm.longTextEditorThreshold, a
	 * TextAreaItem is shown. */
		"text"
		/** Rendered as a CheckboxItem */
		| "boolean"
		/** Same as text by default. Consider setting editorType:SpinnerItem. */
		| "integer"
		/** Same as text by default. Consider setting editorType:SpinnerItem. */
		| "float"
		/** Rendered as a DateItem */
		| "date"
		/** Rendered as a TimeItem */
		| "time"
		/** Rendered as a SelectItem. Also true for any field that specifies a FormItem.valueMap. 
	 * Consider setting editorType:ComboBoxItem. */
		| "enum"
		/** Same as text */
		| "sequence"
		/** If DataSourceField.canEdit:false is set on the field, the value is rendered as a LinkItem. Otherwise the field 
	 * is rendered as a TextItem. */
		| "link"
		/** Rendered as an image if not editable, or as a TextItem to edit the URL or partial URL if editable */
		| "image"
		/** Rendered as a FileItem, or a ViewFileItem if not editable */
		| "imageFile"
		/** Rendered as a FileItem, or a ViewFileItem if not editable */
		| "binary"
		;


	/**
	 * Approach to force a text value to be interpreted as text rather than parsed as a date, time
	 * or other structured types, as can happen with Microsoft Excel. For background information,
	 * see excelPasting.
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
		/** Look for drop targets by intersection of the entire rect of the drag target with the droppable target. */
		| "rect"
		;


	/**
	 * Flags to set automatic removal of events from the page event registry.
	 */
	export type FireStyle = 
		/** Call the registered handler any time the event occurs */
		"null"  // How found:  Original value
		/** Call the registered handler the first time the event occurs, then unregister the handler as though
	 * Page.clearEvent had been called */
		| "once"  // Original Value: Page.FIRE_ONCE, How found: Looked up constant string
		;


	/**
	 * An edge or corner of a rectange, or it's center. Used in APIs such as
	 * Canvas.resizeFrom and Canvas.getEventEdge.
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
	 * AutoComplete behavior for FormItem','FormItems.
	 */
	export type AutoComplete = 
		/** Disable browser autoComplete. Note that some browsers will disregard this setting and still perform native autoComplete for certain items - typically
	 * only for log in / password forms. See the discussion FormItem.autoComplete','here. */
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
		/** Show TableView.titleField','title field only */
		"titleOnly"  // Original Value: TableView.TITLE_ONLY, How found: Looked up constant string
		/** Show TableView.titleField','title and TableView.descriptionField','description
	 * fields only */
		| "titleAndDescription"  // Original Value: TableView.TITLE_DESCRIPTION, How found: Looked up constant string
		/** Show TableView.titleField','title, TableView.descriptionField','description and
	 * TableView.infoField','info fields only */
		| "summaryInfo"  // Original Value: TableView.SUMMARY_INFO, How found: Looked up constant string
		/** Show TableView.titleField','title, TableView.descriptionField','description and
	 * TableView.dataField','data fields only */
		| "summaryData"  // Original Value: TableView.SUMMARY_DATA, How found: Looked up constant string
		/** Show TableView.titleField','title, TableView.descriptionField','description,
	 * TableView.infoField','info and
	 * TableView.dataField','data fields similar to
	 * the iPhoneOS Mail application */
		| "summaryFull"  // Original Value: TableView.SUMMARY_FULL, How found: Looked up constant string
		;


	/**
	 * Possible layout modes for UI components that are sensitive to the device type being used
	 * (a.k.a. "responsive design"). See for example SplitPane.deviceMode.
	 */
	export type DeviceMode = 
		/** mode intended for handset-size devices (phones). Generally only one UI panel will be shown at a time. */
		"handset"
		/** mode intended for tablet-size devices. Generally, up to two panels are shown side by side in "landscape" PageOrientation, and only one
	 * panel is shown in "portrait" orientation. */
		| "tablet"
		/** mode intended for desktop browsers. Three or more panels may be shown simultaneously. */
		| "desktop"
		;


	/**
	 * An object containing the "view state" information for a treeGrid. In addition to the 
	 * state data contained by a ListGridViewState object, this will also contain the 
	 * current open state of the treeGrid in question.
	 * Note that this object is not intended to be interrogated directly, but may be stored 
	 * (for example) as a blob on the server for view state persistence across sessions.
	 */
	export type TreeGridViewState = String; // baseType='String'


	/**
	 * Options for how values are stored for a field that is
	 * ListGridField.multiple','multiple:true. See DataSourceField.multipleStorage.
	 */
	export type MultipleFieldStorage = 
		/** values are saved as a simple delimeter-separated string. Delimeter can be configured via DataSourceField.multipleStorageSeparator. An empty
	 * array is stored as "", and null as the database null value. */
		"simpleString"
		/** values are serialized to JSON. Empty array as a distinct value from null (it appears as the text "[]"). */
		| "json"
		/** no transformation is applied to values; server-side field value remains a Java List when passed to the execute(Fetch|Add|Update|Remove) method of the server-side
	 * DataSource class */
		| "none"
		;

	/*
	 * These come from the Callbacks class methods but are really used as types.
	/*
	/**  
	 *  A Callback fired when DataSource.hasFileVersion completes.
	 * 
	 * 
	 * @param {DSResponse} dsResponse - A DSResponse instance with metadata about the returned data.
	 * @param {boolean} data - Whether the file version exists.
	 * @param {DSRequest} dsRequest - The DSRequest that was sent.
	 */
	export type HasFileVersionCallback = (dsResponse:DSResponse, data:boolean, dsRequest:DSRequest) => void; 

	/**  
	 *  A Callback to evaluate when a screen is loaded via RPCManager.loadScreen.
	 * 
	 * 
	 * @param {Canvas} screen - The last top-level component loaded
	 * @param {RPCResponse} rpcResponse - 
	 * @param {Map<any,} suppressedGlobals - A collection of suppressed globals.
	 */
	export type LoadScreenCallback = (screen?:Canvas, rpcResponse?:RPCResponse, suppressedGlobals?:Map<any, any> /* Map */) => void; 

	/**  
	 *  Callback fired with the PaletteNode','PaletteNodes obtained asynchronously.
	 * 
	 * @param {Array<PaletteNode>} paletteNodes - an array of PaletteNodes
	 */
	export type PaletteNodeCallback = (paletteNodes:Array<PaletteNode> /* Array of PaletteNode */) => void; 

	/**  
	 *  A Callback fired when DataSource.hasFile completes.
	 * 
	 * 
	 * @param {DSResponse} dsResponse - A DSResponse instance with metadata about the returned data.
	 * @param {boolean} data - Whether the file exists.
	 * @param {DSRequest} dsRequest - The DSRequest that was sent.
	 */
	export type HasFileCallback = (dsResponse:DSResponse, data:boolean, dsRequest:DSRequest) => void; 

	/**  
	 *  A Callback fired when Sound.load completes.
	 * 
	 * 
	 */
	export type CanPlayCallback = () => void; 

	/**  
	 *  Callback fired when DataSource.getFileVersion completes.
	 * 
	 * 
	 * @param {DSResponse} dsResponse - A DSResponse instance with metadata about the returned data.
	 * @param {String} data - The file contents, or null if there was an error (such as file not found).
	 * @param {DSRequest} dsRequest - The DSRequest that was sent.
	 */
	export type GetFileVersionCallback = (dsResponse:DSResponse, data:String, dsRequest:DSRequest) => void; 

	/**  
	 *  A Callback to evaluate when an RPCRequest completes.
	 * 
	 * Parameters passed to this callback are:
	 * 
	 * rpcResponse: an RPCResponse encapsulating the server response to your
	 * request
	 * data: just the "data" property from the RPCResponse, for convenience
	 * rpcRequest: the RPCRequest that was sent. You can use
	 * RPCRequest.clientContext to track state during the server turnaround.
	 * 
	 * For example, to take the data returned by the server and display it in a previously created
	 * ListGrid with the ID "myGrid":
	 * 
	 * isc.RPCManager.send("getData", "myGrid.setData(data)");
	 * 
	 * Or
	 * 
	 * isc.RPCManager.send("getData", function (rpcResponse, data, rpcRequest) { 
	 * myGrid.setData(data)
	 * });
	 * 
	 * 
	 * 
	 * @param {RPCResponse} response - response a RPCResponse encapsulating the server response to your request
	 * @param {any} rawData - rawData The "data" property from the RPCResponse, for convenience. The data can also be obtained via {@link RPCResponse#getDataAsMap()}, {@link RPCResponse#getDataAsString()},
	 * or {@link RPCResponse#getDataAsObject()}, depending on the type of data that is expected to be
	 * returned from the server.
	 * @param {RPCRequest} request - the RPCRequest that was sent.
	 */
	export type RPCCallback = (response:RPCResponse, rawData:any /* Any */, request:RPCRequest) => void; 

	/**  
	 *  Callback to execute after the section has been collapsed.
	 * 
	 */
	export type CollapseSectionCallback = () => void; 

	/**  
	 *  A Callback fired when Sound.play completes.
	 * 
	 * 
	 */
	export type PlaybackCompleteCallback = () => void; 

	/**  
	 *  Callback to execute after the section has been expanded.
	 * 
	 */
	export type ExpandSectionCallback = () => void; 

	/**  
	 *  A notification Callback fired by the TabIndexManager to allow 
	 * application code to react to the numeric tab-index of some registered target being
	 * modified.
	 * 
	 * @param {String} ID - the ID String passed to TabIndexManager.addTarget when the callback was registered.
	 */
	export type TabIndexUpdatedCallback = (ID:String) => void; 

	/**  
	 *  Callback for DrawPane.getDataURL.
	 * 
	 * @param {String} dataURL - the data URL
	 */
	export type DataURLCallback = (dataURL:String) => void; 

	/**  
	 *  Callback required for the property Validator.condition and
	 * ValidatorDefinition.condition.
	 * 
	 * @param {DataSourceField | ListGridField | FormItem} item - FormItem, DataSourceField or ListGridField on which this validator was 
	 * declared. NOTE: FormItem will not
	 * be available during a save performed without a
	 * form (eg programmatic save) or if the field 
	 * is not available in the form.
	 * @param {Validator} validator - Validator declaration from eg DataSourceField.validators.
	 * @param {any} value - value to validate
	 * @param {Object} record - Field values for record being validated.
	 * @param {Object} additionalContext - Object containing extra context which may be useful to the condition function. Contains the following properties:
	 * component: the DynamicForm or ListGrid being validated
	 * rowNum: the row number of the cell being validated (only if component is a ListGrid)
	 * colNum: the column number of the cell being validated (only if component is a ListGrid)
	 * @return {boolean} whether the value passed validation.  True for passed, false for fail.
	 */
	export type ValidatorConditionCallback = (item:DataSourceField | ListGridField | FormItem, validator:Validator, value:any /* Any */, record:Object, additionalContext:Object) => boolean; 

	/**  
	 *  Callback fired when DataSource.getFile completes.
	 * 
	 * 
	 * @param {DSResponse} dsResponse - A DSResponse instance with metadata about the returned data.
	 * @param {String} data - The file contents, or null if there was an error (such as file not found).
	 * @param {DSRequest} dsRequest - The DSRequest that was sent.
	 */
	export type GetFileCallback = (dsResponse:DSResponse, data:String, dsRequest:DSRequest) => void; 

	/**  
	 *  A Callback to evaluate when form validation completes.
	 * 
	 * The available parameters are:
	 * 
	 * @param {Map<any,} errorMap - null if validation succeeded for all fields, or an object mapping field names to the associated
	 * errors, for those fields that failed validation.
	 */
	export type ValidationStatusCallback = (errorMap:Map<any, any> /* Map */) => void; 

	/**  
	 *  A Callback fired by the TabIndexManager when application code or user
	 * action attempts to synthetically shift focus to some registered target. 
	 * See TabIndexManager.shiftFocus.
	 * 
	 * A typical implementation will shift focus to some native element associated
	 * with the registered target, or if this is not currently possible, return false.
	 * 
	 * 
	 * @param {String} ID - The ID String passed to TabIndexManager.addTarget when the callback was registered.
	 * @return {boolean} Return true if focus could be successfully moved to the desired                  target. Returning false indicates the target could not accept focus and&#010                  will often cause the TabIndexManager to find the next registered target&#010                  and attempt to shift focus there.
	 */
	export type ShiftFocusCallback = (ID:String) => boolean; 

	/**  
	 *  Callback fired when DataSource methods that send DSRequests complete (such as DataSource.fetchData).
	 * 
	 * 
	 * @param {DSResponse} dsResponse - a DSResponse instance with metadata about the returned data
	 * @param {any} data - data returned to satisfy the DataSource request. See the dataSourceOperations','DataSource operations topic for expected results
	 * for each type of DataSource operation
	 * @param {DSRequest} dsRequest - the DSRequest that was sent. You can use DSRequest.clientContext to track state during the server turnaround.
	 */
	export type DSCallback = (dsResponse:DSResponse, data:any /* Any */, dsRequest:DSRequest) => void; 

	/**  
	 *  Callback for RPCManager.exportImage.
	 * 
	 * @param {String} imageData - image data from the server, in base64 format
	 */
	export type ExportImageCallback = (imageData:String) => void; 

	/**  
	 *  Callback required for the property ValidatorDefinition.action.
	 * 
	 * 
	 * @param {boolean} result - The result of the validator. The value will be null if the validator was skipped because of conditional criteria.
	 * @param {DataSourceField | FormItem} item - FormItem or DataSourceField on which this validator was declared. NOTE: FormItem will not
	 * be available during a save performed without a
	 * form (eg programmatic save) or if the field 
	 * is not available in the form.
	 * @param {Validator} validator - Validator declaration from eg DataSourceField.validators.
	 * @param {Record} record - Record that was validated
	 * @param {DataBoundComponent} component - The DataBoundComponent holding the item such DynamicForm or ListGrid.
	 */
	export type ValidatorActionCallback = (result:boolean, item:DataSourceField | FormItem, validator:Validator, record:Record, component:DataBoundComponent) => void; 

	/**  
	 *  Callback executed when a PrintCanvas.setHTML','supplied html is rendered into
	 * a printCanvas.
	 * 
	 * 
	 * @param {PrintCanvas} printPreview - The canvas being printed.
	 */
	export type PrintCanvasCallback = (printPreview:PrintCanvas) => void; 

	/**  
	 *  A Callback called when the move completes.
	 * 
	 * 
	 * @param {boolean} earlyFinish - true if the animation was cut short. To quit an animation early, simply call the non-animated version of the same
	 * API, so for example call Canvas.hide to cut short
	 * an animation from Canvas.animateHide already in
	 * progress.
	 */
	export type AnimationCallback = (earlyFinish:boolean) => void; 

	/**  
	 *  Callback required for the property DataSourceField.getFieldValue.
	 * 
	 * 
	 * @param {Object | XMLElement} record - record object selected from web service response data by OperationBinding.recordXPath','recordXPath
	 * @param {any} value - default value derived by the method described in DataSourceField.valueXPath
	 * @param {DataSourceField} field - DataSourceField definition
	 * @param {FieldName} fieldName - name of the DataSource field
	 */
	export type GetFieldValueCallback = (record:Object | XMLElement, value:any /* Any */, field:DataSourceField, fieldName:FieldName) => void; 

	/**  
	 *  Callback executed when a message is sent to a channel that you have
	 * Messaging.subscribe','subscribed to.
	 * 
	 * @param {any} data - data contained in the message
	 */
	export type MessagingCallback = (data:any /* Any */) => void; 

	/**  
	 *  Callback to execute after the section has been hidden.
	 * 
	 */
	export type HideSectionCallback = () => void; 

	/**  
	 *  Callback to fire when a queue of requests sent via 
	 * {@link com.smartgwt.client.rpc.RPCManager#sendQueue(RPCQueueCallback)} returns.
	 * Note that the Array of RPCResponses passed to this callback
	 * will actually be DSResponse objects for any requests that were actually 
	 * DSRequests. 
	 * 
	 * 
	 * 
	 * @param {Array<RPCResponse>} response - array of responses returned from the sent queue of requests
	 */
	export type RPCQueueCallback = (response:Array<RPCResponse> /* Array of RPCResponse */) => void; 

	/**  
	 *  Generic callback interface.
	 * 
	 * 
	 */
	export type Function = () => void; 

	/**  
	 *  Generic callback interface.
	 * 
	 * 
	 * @param {DataSource} clientOnly - Client only Data Source.
	 */
	export type ClientOnlyDataSourceCallback = (clientOnly:DataSource) => void; 

	/**  
	 *  A Callback to evaluate when an {Process.loadProcess} method completes.
	 * 
	 * Loaded process passed as a parameter to this callback are:
	 * 
	 * 
	 * @param {DSResponse} dsResponse - a DSResponse instance with metadata about the returned data
	 * @param {Process} process - 
	 */
	export type ProcessCallback = (dsResponse:DSResponse, process:Process) => void; 

	/**  
	 *  Callback to execute after the section has been shown.
	 * 
	 */
	export type ShowSectionCallback = () => void; 



}