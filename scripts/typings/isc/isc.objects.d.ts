/// <reference path="isc.classes.d.ts" />
/// <reference path="isc.interfaces.d.ts" />
/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped
// Generated: 6/27/2017 8:09:05 AM by KWhite
// Generated from SmartClient version SNAPSHOT_v11.1d_2017-06-25

declare namespace Isc {

    
	/**
	 * Definition of a simple linear gradient defined by 2 colors and a SimpleGradient.direction','direction. 
	 */
	export interface SimpleGradient extends Gradient {
		/** 
		 * (Read only) Angle of the direction vector in degrees. The default of 0.0 causes the gradient to sweep
		 * from the start color on the left to the end color on the right. Positive direction angles
		 * correspond to clockwise rotations of the default gradient.
		 * Flags: IR
		 */
		readonly direction?: number /* float */;
		/** 
		 * (Read only) The end color of the gradient.
		 * Flags: IR
		 */
		readonly endColor?: string /* CSSColor */;
		/** 
		 * (Read only) The start color of the gradient.
		 * Flags: IR
		 */
		readonly startColor?: string /* CSSColor */;
	} // SimpleGradient

	export interface SimpleGradientStatic extends GradientStatic {
	} // SimpleGradientStatic


	/**
	 * Properties for a navigation item in a NavPanel. 
	 */
	export interface NavItem extends TreeNode {
		/** 
		 * (Read only) CSS style name used for this NavItem. If set and this NavItem
		 * is a NavItem.isHeader','header, this overrides the NavPanel's
		 * NavPanel.headerStyle.
		 * Flags: IR
		 */
		readonly customStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) Icon to show for this NavItem. If not specified, the
		 * TreeGrid.folderIcon','navGrid\'s folderIcon is used.
		 * Flags: IR
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * (Read only) An optional ID for this NavItem. If specified, this must be unique within
		 * the NavPanel.
		 * Flags: IR
		 */
		readonly id?: string /* Identifier */;
		/** 
		 * (Read only) If set, this NavItem will be styled like a header. In this case NavItem.pane
		 * is ignored and nothing happens when the header is clicked. However, NavItem.items can
		 * still be configured to place items hierarchically under the header.
		 * Flags: IR
		 */
		readonly isHeader?: boolean /* Boolean */;
		/** 
		 * (Read only) If set, this NavItem will be styled as a separator. A separator does not
		 * have a NavItem.pane','pane and nothing happens when the separator is clicked.
		 * Flags: IR
		 */
		readonly isSeparator?: boolean /* Boolean */;
		/** 
		 * (Read only) Optional subitems of this NavItem.
		 * Flags: IR
		 */
		readonly items?: Array<NavItem> /* Array of NavItem */;
		/** 
		 * (Read only) Component to display in the NavPanel.navDeck when this NavItem is
		 * selected.
		 * 
		 * A component can be provided directly, or its ID can be provided.
		 * Flags: IR
		 */
		readonly pane?: Canvas | string /* Canvas | Identifier */;
		/** 
		 * (Read only) Title to show for this NavItem.
		 * Flags: IR
		 */
		readonly title?: string /* HTMLString */;
	} // NavItem

	export interface NavItemStatic extends TreeNodeStatic {
	} // NavItemStatic


	/**
	 * An object representing a relative date, useful for representing date ranges etc in criteria.
	 * RelativeDate objects may be created directly by SmartClient components such as the
	 * RelativeDateItem.
	 * 
	 * RelativeDate objects will have "_constructor" set to "RelativeDate"
	 * and must have a specified RelativeDate.value. Any other attributes are optional. 
	 */
	export interface RelativeDate {
		/** 
		 * (Read only) If this relative date has its value specified as a RelativeDateShortcut which doesn't
		 * specify an exact time-period boundary - for example "$yesterday", this attribute
		 * may be set to specify whether the date should be interpreted as the start or end boundary of
		 * the time period.
		 * Flags: IR
		 */
		readonly rangePosition?: RelativeDateRangePosition;
		/** 
		 * (Read only) The value of this relative date, specified as a RelativeDateString 
		 * or RelativeDateShortcut.
		 * Flags: IR
		 */
		readonly value?: string | RelativeDateShortcut /* RelativeDateString | RelativeDateShortcut */;
	} // RelativeDate

	export interface RelativeDateStatic {
	} // RelativeDateStatic


	/**
	 * Configuration object for effect to apply during an animated show or hide. 
	 */
	export interface AnimateShowEffect {
		/** 
		 * (Read only) Effect to apply
		 * Flags: IR
		 */
		readonly effect?: string /* AnimateShowEffectId */;
		/** 
		 * (Read only) For hide animations of type "wipe and 
		 * "slide" this attribute specifies where the wipe / slide should finish.
		 * Valid options are "T" (vertical animation upwards to the top of the canvas,
		 * the default behavior) and "L" (horizontal animation to the left of the
		 * canvas).
		 * Flags: IR
		 */
		readonly endsAt?: string /* String */;
		/** 
		 * (Read only) For show animations of type "wipe" and
		 * "slide" this attribute specifies where the wipe / slide should originate.
		 * Valid values are "T" (vertical animation from the top down, the 
		 * default behavior), and "L" (horizontal animation from the left side).
		 * Flags: IR
		 */
		readonly startFrom?: string /* String */;
	} // AnimateShowEffect

	export interface AnimateShowEffectStatic {
	} // AnimateShowEffectStatic


	/**
	 * Settings to control EditContext serialization. 
	 */
	export interface SerializationSettings {
		/** 
		 * (Read only) Overrides the default indention setting during serialization. XML defaults
		 * to indented and JSON defaults to non-indented.
		 * Flags: IR
		 */
		readonly indent?: boolean /* Boolean */;
		/** 
		 * (Read only) Overrides the default component output setting during serialization. By default
		 * Canvas and DrawItem components are serialized individually and referenced by their
		 * containers.
		 * Flags: IR
		 */
		readonly outputComponentsIndividually?: boolean /* Boolean */;
		/** 
		 * (Read only) When true specify DataSources in full rather than assuming they can be
		 * downloaded from the server.
		 * Flags: IR
		 */
		readonly serverless?: boolean /* Boolean */;
	} // SerializationSettings

	export interface SerializationSettingsStatic {
	} // SerializationSettingsStatic


	/**
	 * A library of functions for determining the types of other objects.
	 * 
	 * The "isA" methods for the basic JavaScript types are much faster and more consistent across
	 * platforms than JavaScript's "typeof" operator.
	 * 
	 * An isA method is automatically created for every ISC Class and Interface definition, for
	 * example, isA.Canvas(). 
	 */
	export interface isA {
	} // isA

	export interface isAStatic {

	/* Methods */
		/**  
		 * 
		 * Is object an Array object?
		 * 
		 * NOTE: if you prefer, you can call this as isAn.Array()
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is an Array
		 */
		Array(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a Boolean object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Boolean
		 */
		Boolean(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a class object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Class Object
		 */
		ClassObject(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a Date object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Date
		 */
		Date(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object an Array with no items?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is an empty array
		 */
		emptyArray(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object an object with no properties (i.e.: {})?
		 * 
		 * Note that an object that has properties with null values is considered non-empty, eg 
		 * { propName:null } is non-empty.
		 * 
		 * NOTE: if you prefer, you can call this as isAn.emptyObject()
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is the empty object
		 */
		emptyObject(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object the empty string?
		 * 
		 * NOTE: if you prefer, you can call this as isAn.emptyString()
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a null string
		 */
		emptyString(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a Function object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Function
		 */
		Function(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object an instance of some class?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is an instance of some class
		 */
		Instance(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object an interface object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Interface Object
		 */
		Interface(object:any /* Object */): boolean; 

		/**  
		 *  Does object implement the List interface?
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} <code>true</code> if the object is an Array or belongs to another class that                   implements the <code>List</code> API.
		 */
		List(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a non-empty String?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a non-empty string
		 */
		nonemptyString(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a Number object?
		 * 
		 * NOTE: this returns false if object is an invalid number (isNaN(object) == true)
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Number
		 */
		Number(object:any /* Object */): boolean; 

		/**  
		 *  Returns whether the passed value is a non-null Object.
		 * 
		 * Returns false for values that are Numbers, Strings, Booleans, Functions or are null or
		 * undefined. 
		 * 
		 * Returns true for Object, Array, Regular Expression, Date and other kinds of
		 * native objects which are considered to extend from window.Object.
		 * 
		 * 
		 * @param {any} object - value to test for whether it's an object
		 * @return {boolean} whether passed value is an Object
		 */
		Object(object:any /* Any */): boolean; 

		/**  
		 * 
		 * Is object a Regular Expression (RegExp) object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a Boolean
		 */
		RegularExpression(object:any /* Object */): boolean; 

		/**  
		 * 
		 * Is object a String object?
		 * 
		 * 
		 * @param {any} object - object to test
		 * @return {boolean} true == <code>object</code> is a String
		 */
		String(object:any /* Object */): boolean; 

	} // isAStatic


	/**
	 * An object representing the start date for fiscal years in the current locale.
	 * 
	 * A fiscal year spans a configurable date range - it may not exactly
	 * match a calendar year in length and it can start on any date within the calendar year
	 * and potentially end in the next calendar year.
	 * 
	 * Developers may specify explicit fiscal year start dates by adding FiscalYear
	 * objects to the FiscalCalendar.fiscalYears','fiscal years array.
	 * If none are provided, or if there is no entry for the given year, one is
	 * manufactured based on the default FiscalCalendar.defaultMonth','month
	 * and FiscalCalendar.defaultDate','date. 
	 */
	export interface FiscalCalendar {
		/** 
		 * The default one-based day-number in the FiscalCalendar.defaultMonth','specified month
		 * to use for calculating fiscal dates when no FiscalCalendar.fiscalYears','fiscal years
		 * are provided. This value together
		 * with FiscalCalendar.defaultMonth will be used as the start date for the
		 * fiscal years where no explicitly specified fiscalYear configuration is present.
		 * 
		 * See also FiscalCalendar.defaultYearMode.
		 * Flags: IRW
		 */
		readonly defaultDate?: number /* integer */;
		/** 
		 * The default zero-based month-number to use for calculating fiscal dates when no
		 * FiscalCalendar.fiscalYears','fiscal years are provided. This value together
		 * with FiscalCalendar.defaultDate will be used as the start date for the
		 * fiscal years where no explicitly specified fiscalYear configuration is present.
		 * 
		 * See also FiscalCalendar.defaultYearMode.
		 * Flags: IRW
		 */
		readonly defaultMonth?: number /* integer */;
		/** 
		 * This attribute controls how the displayed fiscalYear value should be calculated for
		 * dates falling within a period not explicitly listed in the
		 * FiscalCalendar.fiscalYears','fiscal years array.
		 * 
		 * The FiscalCalendar.defaultMonth and FiscalCalendar.defaultDate will be
		 * used to calculate the start of the fiscal year period. The defaultYearMode
		 * determines whether the reported fiscalYear for this period matches the year in which
		 * the period starts or the year in which it ends (so whether a fiscal year spanning
		 * dates within both 2020 and 2021 is reported as fiscalYear 2020 or 2021).
		 * Flags: IRW
		 */
		readonly defaultYearMode?: FiscalYearMode;
		/** 
		 * An array of FiscalYear','FiscalYear objects which each represent the start date of a
		 * single fiscal year.
		 * Flags: IRW
		 */
		readonly fiscalYears?: Array<FiscalYear> /* Array of FiscalYear */;
	} // FiscalCalendar

	export interface FiscalCalendarStatic {
	} // FiscalCalendarStatic


	/**
	 * A class used to define a shadow used in a Draw&lt;Shape&gt; Types. 
	 */
	export interface Shadow {
		readonly blur?: number /* int */;
		readonly color?: string /* CSSColor */;
		readonly offset?: Point;
	} // Shadow

	export interface ShadowStatic {
	} // ShadowStatic


	/**
	 * Configuration of an HTML list in a RichTextEditor. 
	 */
	export interface ListProperties {
		/** 
		 * (Read only) When the list item marker ListProperties.style','style is "custom-image", the image
		 * to use for the markers.
		 * Flags: IR
		 */
		readonly image?: string /* SCImgURL */;
		/** 
		 * (Read only) For ordered lists, the number to start the first item with. Must be non-negative.
		 * Flags: IR
		 */
		readonly startNumber?: number /* int */;
		/** 
		 * (Read only) The style of list item marker. If "custom-image", the ListProperties.image','image
		 * should be specified.
		 * Flags: IR
		 */
		readonly style?: ListStyleType;
	} // ListProperties

	export interface ListPropertiesStatic {
	} // ListPropertiesStatic


	/**
	 * Group Summary. 
	 */
	export interface GroupSummary {
	} // GroupSummary

	export interface GroupSummaryStatic {
	} // GroupSummaryStatic


	/**
	 * X/Y position in pixels, specified as an Array with two members, for example: [30, 50] 
	 */
	export interface Point {
		/** 
		 * (Read only) The x coordinate of this point.
		 * Flags: IR
		 */
		readonly x?: number /* int */;
		/** 
		 * (Read only) The y coordinate of this point.
		 * Flags: IR
		 */
		readonly y?: number /* int */;
	} // Point

	export interface PointStatic {
	} // PointStatic


	/**
	 * Request sent to the server to initiate a 
	 * dataSourceOperations','DataSource operation. All properties which are legal on
	 * RPCRequest are legal, in addition to the properties listed here. 
	 */
	export interface DSRequest extends RPCRequest {
		/** 
		 * (Read only, Advanced) For fetch, add or update operation, an optional comma separated list of fields to fetch from another,
		 * related DataSource.
		 * 
		 * Fields should be specified in the format 
		 * "localFieldName!relatedDataSourceID.relatedDataSourceFieldName".
		 * where relatedDataSourceID is the ID of the related dataSource, and
		 * relatedDataSourceFieldName is the field for which you want to
		 * fetch related values. The returned field values will be stored on 
		 * the data returned to the client under the specified localFieldName.
		 * Note that this will be applied in addition to any specified DSRequest.outputs.
		 * 
		 * Note that as with DataSourceField.includeFrom, the related dataSource must be
		 * linked to the primary datasource via a foreignKey relationship.
		 * 
		 * Note additionalOutputs sent in request from the browser can be completely disabled in 
		 * server_properties','server.properties by setting
		 * datasource.allowClientAdditionalOutputs:
		 * 
		 * datasource.allowClientAdditionalOutputs: false
		 * 
		 * In this case DSRequest.additionalOutputs sent from the browser will be cleared before 
		 * executing request. Note that programatically configured additionalOutputs are always allowed, but 
		 * you can't modify them from within a DMI method, so the only way to execute a request 
		 * with additionalOutputs that differ from what was sent by the client is to create a new DSRequest
		 * Flags: IRA
		 */
		readonly additionalOutputs?: string /* String */;
		/** 
		 * (Read only) A callback method that will be called with an instance of DSResponse, as sent by the server.
		 * Queuing does not affect callbacks in any way - your specified callback will be invoked for 
		 * each DSRequest that contained a callback regardless of whether the request was sent as part
		 * of a queue or not.
		 * 
		 * Note that if the request encounters an error (such as 500 server error), by default the
		 * callback will not be fired. Instead, RPCManager.handleError is called to
		 * invoke the default system-wide error handling. Set RPCRequest.willHandleError','willHandleError:true to have your
		 * callback invoked regardless of whether there are errors; however, make sure your callback
		 * properly handles malformed responses when RPCResponse.status is non-zero. See the
		 * errorHandling','error handling overview below for more details.
		 * Flags: IR, Group: errorHandling
		 */
		readonly callback?: DSCallback;
		/** 
		 * An object to be held onto for the duration of the DSRequest turnaround to track
		 * application-specific context.
		 * 
		 * When a DataSource request completes, the clientContext is available in the
		 * DSCallback as dsResponse.clientContext. The
		 * clientContext is never sent to the server.
		 * 
		 * The clientContext is useful for holding onto state that will be used when the
		 * DSCallback fires, such as the name of a component that will receive the
		 * returned data.
		 * Flags: IRW
		 */
		readonly clientContext?: any /* Object */;
		/** 
		 * (Read only) For requests submitted by a DataBoundComponent, the Canvas.ID of the
		 * submitting component.
		 * 
		 * This ID will be present for operations including automatic saves by a ListGrid 
		 * editing','during editing, or calls to
		 * DynamicForm.saveData','form.saveData(). It will not be present for a direct
		 * call to a DataSource method such as DataSource.fetchData.
		 * 
		 * Note this is the component's String ID - you can retrieve the component itself
		 * via Canvas.getById.
		 * 
		 * This property should be used for debugging purposes only - do not use it to trigger
		 * differences in server-side behavior, instead, use DSRequest.operationId because only
		 * operationId is considered when assessing
		 * dsRequestEquivalence','request equivalence.
		 * Flags: IR
		 */
		readonly componentId?: string /* String */;
		/** 
		 * (Read only) Data, such as search criteria or an updated record, to be acted upon. Contents differ by
		 * operationType, see dataSourceOperations','DataSource Operations for
		 * details.
		 * 
		 * This field is generally filled in by passing the "data" argument to methods such as
		 * ListGrid.fetchData.
		 * Flags: IR
		 */
		readonly data?: any | Array<any> /* Object | Array of Object */;
		/** 
		 * DataSource.dataProtocol','DataProtocol for this particular request.
		 * 
		 * Note: Typically developers should use DataSource.operationBindings','operation bindings
		 * to specify an explicit data protocol for a request.
		 * 
		 * One exception: advanced developers may wish to have a custom 
		 * DataSource.transformRequest','request transformer with entirely client-side
		 * handling for some requests. This may be achieved by setting the request's
		 * dataProtocol to DSProtocol','"clientCustom" within transformRequest,
		 * and also triggering application code which will fire DataSource.processResponse
		 * when complete.
		 * 
		 * The DataSource.getDataProtocol method may be used to determine what data protocol
		 * will be used to handle a specific request based on this property (if set), otherwise the
		 * settings at the OperationBinding.dataProtocol','operationBinding or 
		 * DataSource.dataProtocol','dataSource levels.
		 * Flags: IRW
		 */
		readonly dataProtocol?: DSProtocol;
		/** 
		 * (Read only) DataSource this DSRequest will act on.
		 * 
		 * This property is generally automatically populated, for example when calling
		 * DataSource.fetchData the dataSource property is set to the target
		 * DataSource.
		 * Flags: IR
		 */
		readonly dataSource?: string /* String */;
		/** 
		 * (Read only) End row of requested results, used only with fetch operations.
		 * 
		 * Note that startRow and endRow are zero-based, inclusive at the beginning and exclusive at
		 * the end (like substring), so startRow: 0, endRow: 1 is a request for the first record.
		 * Flags: IR, Group: paging
		 */
		readonly endRow?: number;
		/** 
		 * (Read only) The format in which the data should be exported. See ExportFormat for more 
		 * information.
		 * Flags: IR
		 */
		readonly exportAs?: ExportFormat;
		/** 
		 * (Read only) When using RPCManager.exportContent to produce a .pdf from a SmartClient UI, this property allows 
		 * dynamic CSS to be passed to the server. Since the exportContent() system already provides 
		 * a way to specify a custom skin or additional stylesheet for export, exportCSS should only be
		 * used for small bits of CSS that are necessarily dynamic.
		 * 
		 * For example, when printing a very wide page, such as a grid with many columns or a very wide chart,
		 * you could send the string "@page {size: A4 landscape; }" as exportCSS to cause the
		 * generated PDF to use landscape mode, so that all content fits without clipping.
		 * Flags: IR
		 */
		readonly exportCSS?: string /* String */;
		/** 
		 * (Read only) Only applies to request properties passed to ListGrid.exportClientData.
		 * If specified this property contains an arbitrary set of data to be exported.
		 * Flags: IR
		 */
		readonly exportData?: Array<any> /* Array of Record */;
		/** 
		 * (Read only) When exporting via ListGrid.exportClientData to an XLS or
		 * OOXML spreadsheet, forces dates to export as a string rather than a true date
		 * value.
		 * 
		 * If a date value is provided to a spreadsheet as a string, Excel or other spreadsheet
		 * applications may not recognize them as being date values that are valid for use in
		 * date-specific functions in formulas, filters, etc.
		 * 
		 * For this reason, the default behavior of exportClientData is to provide date
		 * values to the spreadsheet as true date values. If
		 * FormatString','Format Strings are provided via properties like
		 * DataSourceField.format','dataSourceField.format these will be translated to Excel /
		 * OpenOffice format strings and used when generating spreadsheets. Other formatting logic,
		 * such as ListGridField.formatCellValue','cell formatters, will not be used since they
		 * cannot be automatically translated to an Excel format string. If no translatable format
		 * string is available, date values will be provided to the spreadsheet with no formatter and
		 * the spreadsheet program's default formatting for date values will be used.
		 * 
		 * If exportDatesAsFormattedString is set to true, date fields will appear as
		 * strings that exactly match the formatting shown in the DataBoundComponent.
		 * As noted above, this means the spreadsheet program will not recognize the value as
		 * a date.
		 * Flags: IR, Group: exportFormatting
		 */
		readonly exportDatesAsFormattedString?: boolean;
		/** 
		 * (Read only) The character to use as a field-separator in CSV exports. The default delimiter is comma.
		 * Flags: IR
		 */
		readonly exportDelimiter?: string /* String */;
		/** 
		 * (Read only) Specifies whether the exported data will be downloaded as an attachment or displayed in a 
		 * new browser window. See ExportDisplay for more information.
		 * Flags: IR
		 */
		readonly exportDisplay?: ExportDisplay;
		/** 
		 * (Read only) The list of field names to export. If provided, the field list in the exported output is 
		 * limited and sorted as per the list.
		 * 
		 * If exportFields is not provided: 
		 * If we are exporting via DSRequest.exportData','exportData(), the field list in the exported
		 * output is every non-hidden field defined in the DataSource, in DataSource definition order
		 * If we are exporting via ListGrid.exportClientData','exportClientData() and we are not 
		 * exporting to OOXML, or we are exporting to OOXML but we are not 
		 * DSRequest.exportStreaming','streaming, the field list in the exported output is based on the 
		 * client data sent up, taking every row into account (so if there is a value for field "foo"
		 * only in row 57, we will output a column "foo", the cells of which are empty except for 
		 * row 57)
		 * If we are exporting via ListGrid.exportClientData','exportClientData() and we are 
		 * exporting to OOXML and streaming is in force (the default for OOXML), the field list in 
		 * the exported output is based on the client data sent up, taking just the first row into 
		 * account (so if there is a value for field "foo" only in row 57, we will not output a column
		 * "foo" at all) 
		 * 
		 * Flags: IR
		 */
		readonly exportFields?: Array<string> /* Array of String */;
		/** 
		 * (Read only) The name of the file to save the exported data into. If 
		 * DSRequest.exportToFilesystem','exportToFilesystem is set, this is the name of the 
		 * file the server creates on its filesystem. If DSRequest.exportToClient','exportToClient
		 * is set, this is the filename that will appear to the browser.
		 * 
		 * If the exportFilename that you specify does not include an extension, one will be added to
		 * it based on the ExportFormat specified by DSRequest.exportAs.
		 * Flags: IR
		 */
		readonly exportFilename?: string /* String */;
		/** 
		 * (Read only) Optional text to appear at the end of the file.
		 * Flags: IR
		 */
		readonly exportFooter?: string /* String */;
		/** 
		 * (Read only) Optional text to appear at the beginning of the file.
		 * Flags: IR
		 */
		readonly exportHeader?: string /* String */;
		/** 
		 * This property allows omitting column names from CSV and Excel exports (no effect on JSON or XML exports).
		 * Flags: IRW
		 */
		readonly exportHeaderless?: boolean /* Boolean */;
		/** 
		 * (Read only) The image format in which the SVG graphic should be exported.
		 * Flags: IR
		 */
		readonly exportImageFormat?: ExportImageFormat;
		/** 
		 * (Read only) If exporting in ExportImageFormat','JPEG format, the output JPEG quality level.
		 * This is a number from 0 to 1, with 1 representing the best quality and 0 representing the
		 * least quality but smallest file size.
		 * Flags: IR
		 */
		readonly exportImageQuality?: number /* float */;
		/** 
		 * (Read only) If DSRequest.exportToFilesystem','exportToFilesystem is set, optionally specifies a 
		 * path to use when saving the file. This path is relative to the default export path, which
		 * is set using the server_properties','server.properties setting export.location; this
		 * is the project webRoot by default. For example, with the default setting of 
		 * export.location, an exportPath of "shared/ds" and 
		 * an DSRequest.exportFilename','exportFilename of "exportedData.csv",
		 * SmartClient Server would export to file $webRoot/shared/ds/exportedData.csv.
		 * 
		 * If you do not specify this property, SmartClient Server will export to the file indicated 
		 * by exportFilename directly in the default export location.
		 * 
		 * This property is only applicable when DSRequest.exportToFilesystem','exportToFilesystem
		 * is set.
		 * Flags: IR
		 */
		readonly exportPath?: string /* String */;
		/** 
		 * Determines the PropertyIdentifier to be used in the exported data. This
		 * essentially means, should we export internal field names like "countryCode" or
		 * "EMPLOYEE_NO", or localized descriptive field titles like "code du pays" or
		 * "Employee Number". This setting has a lot in common with DSRequest.exportRawValues;
		 * both are largely dependent on whether the exported data is intended for direct consumption by
		 * an end user (in which case it is appropriate to export formatted values and localized field
		 * titles), or for interface to some downstream computer system (in which case you probably
		 * want raw, unformatted values and internal field names).
		 * 
		 * If this property is not set, the following defaults apply:
		 * If the export format is a native spreadsheet format (XLS or OOXML), localized field 
		 * titles are used
		 * If the export format is CSV, XML or JSON and this is a client-driven export (ie it was
		 * initiated by a call to ListGrid.exportClientData','exportClientData()), 
		 * localized field titles are used
		 * If the export format is CSV, XML or JSON and this is not a client-driven export,
		 * internal field names are used 
		 * 
		 * Flags: IRW, Group: exportFormatting
		 */
		readonly exportPropertyIdentifier?: PropertyIdentifier;
		/** 
		 * Whether formatting settings should be applied to data being exported. Default behavior and
		 * the effect of setting of exportRawValues is described in the
		 * exportFormatting','Export Formatting overview.
		 * Flags: IRW, Group: exportFormatting
		 */
		readonly exportRawValues?: boolean /* Boolean */;
		/** 
		 * (Read only) When set, causes the results of the DSRequest to be exported to a file, whose name 
		 * and format are indicated by DSRequest.exportFilename and 
		 * DSRequest.exportAs respectively. When no exportFilename is provided, the default is
		 * Results.csv and the default value of exportAs is csv. 
		 * 
		 * The export field-list can also be configured, see DSRequest.exportFields. Formats 
		 * for exported date and numeric are controlled by several settings - see 
		 * exportFormatting for an overview.
		 * 
		 * Once the operation completes, DSRequest.exportDisplay specifies whether the exported
		 * data should be downloaded to the file-system or displayed in a new window. The default value
		 * of exportDisplay is "download" which displays the Save As dialog. See ExportDisplay 
		 * for more information.
		 * 
		 * You can configure the style of LineBreakStyle','line-breaks to use when 
		 * generating the output, the DSRequest.exportDelimiter','delimiter to use when exporting
		 * to CSV and the DSRequest.exportTitleSeparatorChar','separator-character to use in 
		 * field-titles when exporting to XML.
		 * 
		 * Additionally, you can output arbitrary text before and after the exported data by setting 
		 * DSRequest.exportHeader','exportHeader and DSRequest.exportFooter','exportFooter.
		 * 
		 * Note that for security reasons, an export initiated using dsRequest properties does not
		 * provide support for JSON format (see 
		 * <a href="http://forums.smartclient.com/showthread.php?t=235">this post</a> for more detail). 
		 * However, you can use operationBinding.exportAs:"json" in a server-side .ds.xml file to force 
		 * JSON export to be allowed.
		 * 
		 * As well as setting dsRequest.exportResults and related properties, exports can be initiated
		 * in two other ways, via OperationBindings and via custom server code which sets 
		 * export-related properties on the DSResponse. Both of those methods support exporting
		 * to JSON format.
		 * 
		 * Format Examples
		 * XML format
		 * 
		 * &lt;List&gt;
		 * &lt;Object&gt;
		 * &lt;id&gt;10101&lt;/id&gt;
		 * &lt;displayName&gt;Record 10101&lt;/displayName&gt;
		 * &lt;/Object&gt;
		 * &lt;/List&gt;
		 * 
		 * JSON Format
		 * 
		 * [
		 * { id: 10101, displayName: "Record 10101" }
		 * ]
		 * 
		 * CSV Format
		 * 
		 * id,displayName
		 * 10101,"Record 10101"
		 * 
		 * Flags: IR
		 */
		readonly exportResults?: boolean /* Boolean */;
		/** 
		 * (Read only) When you erxport a ListGrid that has ListGrid.headerSpans','headerSpans,
		 * should headerSpans also be exported. See DSRequest.exportSpanTitleSeparator for details of
		 * of what it means to export headerSpans to different export targets.
		 * Flags: IR
		 */
		readonly exportShowHeaderSpanTitles?: boolean /* Boolean */;
		/** 
		 * (Read only) When you export a ListGrid that has ListGrid.headerSpans','headerSpans
		 * defined and DSRequest.exportShowHeaderSpanTitles is true, the behavior is dependent
		 * on the export type. Direct exports to Excel formats (both XLS and OOXML) place the 
		 * headerSpans in merged cells in the spreadsheet, giving the same visual effect as the 
		 * original ListGrid. This is not possible with exports to CSV format; instead, we alter the 
		 * exported headers so that they contain the titles of the ancestor headerSpan(s).
		 * 
		 * For example, if you had a field titled "Population" inside a headerSpan titled "National",
		 * nested inside another headerSpan titled "Demographics", that would result in the exported
		 * field being titled "Demographics - National - Population".
		 * 
		 * The exportSpanTitleSeparator property allows you to override the separator 
		 * string used when constructing these amalgamated headers.
		 * Flags: IR
		 */
		readonly exportSpanTitleSeparator?: string /* String */;
		/** 
		 * (Read only) When exporting to OOXML format (this is the standard file format used by Excel 2007 and 
		 * later), we default to using streaming mode, for memory efficiency. You can override this 
		 * for individual exports by setting this flag false. You may wish to do this if you need to
		 * grab the spreadsheet object in a DMI and do something with it. The underlying object in 
		 * use - POI's SXSSFWorkbook - is intended for write only and cannot usefully be
		 * read.
		 * 
		 * You can switch off Excel streaming altogether by setting "excel.useStreaming" false in 
		 * server.properties.
		 * 
		 * Note, OOXML is the only native Excel format that supports streaming: when exporting to
		 * the older XLS format, we build the spreadsheet in its entirety in server-side memory 
		 * before writing it to disk or returning it to the client. This is unlikely to change:
		 * streaming the XLS format is impractical bcause it is a self-referential binary format, and
		 * in any case the problem of huge exports overflowing JVM memory is less likely to arise with 
		 * XLS, because it is innately limited to 65535 rows.
		 * Flags: IR
		 */
		readonly exportStreaming?: boolean;
		/** 
		 * (Read only) The character with which to replace spaces in field-titles when exporting to XML. If not
		 * specified in the request, the server uses "".
		 * Flags: IR
		 */
		readonly exportTitleSeparatorChar?: string /* String */;
		/** 
		 * (Read only) If set, SmartClient Server will export data back to the client, either as a file download 
		 * or as content in a new browser window, depending on the setting of
		 * DSRequest.exportDisplay','exportDisplay.
		 * 
		 * Note that it is perfectly valid to specify both this property and 
		 * DSRequest.exportToFilesystem','exportToFilesystem; in this case the data is both 
		 * exported to a file on the server filesystem, and downloaded to the client. If you specify 
		 * <em>neither</em> property, the export no-ops.
		 * Flags: IR
		 */
		readonly exportToClient?: boolean /* Boolean */;
		/** 
		 * (Read only) If set, SmartClient Server will export data to a file on the server filesystem. The
		 * file we export to is determined by the DSRequest.exportFilename','exportFilename and 
		 * DSRequest.exportPath','exportPath. Note that filesystem exports are disabled by 
		 * default, for security reasons. To enable them, set export.allow.filesystem to
		 * true in your server.properties file. If you enable filesystem exports, you 
		 * should also consider setting a default export path, as described in the 
		 * DSRequest.exportPath','exportPath documentation.
		 * 
		 * Note that it is perfectly valid to specify both this property and 
		 * DSRequest.exportToClient','exportToClient; in this case the data is both exported to a
		 * file on the server filesystem <em>and</em> downloaded to the client. If you specify 
		 * <em>neither</em> property, the export no-ops.
		 * 
		 * It is possible to redirect the filesystem export to make use of an OutputStream
		 * you provide. You use this when you want to make some use of the export document other than 
		 * writing it to a disk file - for example, attaching it to an email or writing it to a 
		 * database table. See the server-side Javadocs for DSRequest.setExportTo().
		 * Flags: IR
		 */
		readonly exportToFilesystem?: boolean /* Boolean */;
		/** 
		 * (Read only) For server-side export with ExportFormat "xls" or "ooxml" only, timezone to use
		 * when saving values from FieldType "datetime" to the spreadsheet.
		 * 
		 * This setting exists because MS Excel&trade; has no concept of providing a true datetime value
		 * that is timezone-independent and will display in the local timezone where the Excel program is
		 * launched. Instead, datetime values must be provided as a rendered string, which implies
		 * rendering in a particular timezone when the spreadsheet is generated.
		 * 
		 * exportTZ can either be specified as a timezone offset in the same format
		 * expected by Time.setDefaultDisplayTimezone (for example, "+01:00" for one hour after
		 * GMT) or as the special constants "client" (meaning the current client display timezone) or
		 * "server" (meaning the timezone of the server).
		 * 
		 * Default if unspecified is "server".
		 * 
		 * This setting does not affect fields of type "date" or "time", which are timezone-independent
		 * values. See dateFormatAndStorage for more information on how SmartClient
		 * handles date, time and datetime values.
		 * 
		 * All non-spreadsheet export formats always use UTC. This setting also does not affect
		 * client-driven exports (DataSource.exportClientData), which always use client-side
		 * time.
		 * Flags: IR, Group: exportFormatting
		 */
		readonly exportTZ?: string /* String */;
		/** 
		 * (Read only) This flag has a different meaning depending on whether you are doing a client-driven or
		 * server-driven export.
		 * 
		 * For ListGrid.exportClientData','exportClientData() calls (client-driven), ordinarily
		 * any fields that have a ListGridField.displayField','displayField defined
		 * have the value of that displayField exported, rather than the underlying value in the 
		 * ListGridField.valueField','valueField. If you set the exportValueFields
		 * property, we export both the underlying value and the displayField value.
		 * 
		 * Again for exportClientData() calls, any fields that have a
		 * ListGridField.valueMap','valueMap defined ordinarily have the mapped value of the 
		 * field exported, rather than the underlying data value. If you set the 
		 * exportValueFields property, we instead export the underlying data value. 
		 * Note, there is only one field in this scenario, not a valueField and a 
		 * separate displayField, so we export either the underlying data value or
		 * the mapped value, not both as in the displayField/valueField case 
		 * described above.
		 * 
		 * For DataBoundComponent.exportData','exportData() calls (server-driven), we ordinarily
		 * export the underlying data value of all fields. However, if you set the 
		 * exportValueFields property explicitly to false, any fields that
		 * have a DataSource-defined DataSourceField.valueMap','valueMap will have the mapped
		 * value exported instead. This is similar to the client-side treatment of valueMaps, except
		 * that the defaults are reversed.
		 * Flags: IR
		 */
		readonly exportValueFields?: boolean;
		/** 
		 * A set of key:value pairs, mapping field names to expressions that will be evaluated 
		 * server-side to derive a value for that field. This property allows for client-driven 
		 * transactionChaining','Transaction Chaining, with some restrictions for security
		 * reasons:
		 * Normal OperationBinding.values','server-side Transaction Chaining settings for a 
		 * field take precedence over this property, so server-defined rules cannot be overridden 
		 * from the client
		 * Arbitrary Velocity expressions are not allowed in DSRequests sent from the client 
		 * (fieldValueExpressions is also a valid property on a server-side DSRequest,
		 * and normal Velocity expressions <em>are</em> allowed in that case - see the server-side
		 * Javadoc for DSRequest.setFieldValueExpressions()). For client-originated 
		 * requests, only the following bindings are allowed - see the 
		 * velocitySupport','Velocity overview for details of what these values mean:
		 * $currentDate
		 * $transactionDate
		 * $userId
		 * $masterId - see DSRequestModifier.value for details
		 * References to specific fields in prior responses, via $responseData.first and 
		 * $responseData.last, with or without parameters. For example, 
		 * $responseData.first("myDataSource", "fetch")[0].myField. See the
		 * velocitySupport','Velocity overview for details of $responseData
		 * References to certain metadata properties of prior responses, via $responses.first 
		 * and $responses.last, with or without parameters. For example, 
		 * $responses.last("myDataSource", "fetch").totalRows. Note that the only 
		 * properties allowed in a client-driven fieldValueExpression are:
		 * "startRow", "endRow", "totalRows" and "status"; this restriction does not apply to 
		 * server-driven fieldValueExpressions. See the Velocity overview for 
		 * details of $responses
		 * 
		 * Normal DataSourceField.editRequiresRole','declarative security rules apply: if a
		 * field is not valid for writing, its fieldValueExpression will be ignored.
		 * Again, this only applies to client-originated requests.
		 * 
		 * Note, it is possible to globally disable fieldValueExpression in 
		 * client-originated requests by setting a flag in your server.properties file:
		 * dataSource.allowClientFieldValueExpressions: false
		 * Flags: IRW, Group: transactionChaining
		 */
		readonly fieldValueExpressions?: any /* Object */;
		/** 
		 * Specifies should related updates have to be generated.
		 * If not set (or set to null) then related updates will be generated only for
		 * "add" and "update" operations. This property has to be explicitly set to true
		 * to generate related updates for "remove" operation.<p/>
		 * This functionality loads related objects from database thus affecting operation performance.
		 * For "add" and "update" operations related objects are loaded anyway and performance impact is minimal.
		 * Simple "remove" operation does not need to load related objects. Depending on database structure
		 * performance impact can be significant if this property is set to true.
		 * 
		 * Note this feature works only with Hibernate/JPA data sources, see 
		 * jpaHibernateRelations','JPA & Hibernate Relations for instructions how to 
		 * set up relations. Table below uses "country -&gt; cities" sample data model.
		 * 
		 * <table border=1 class="normal">
		 * <tr>
		 * <td width="20%">Relation and Operation type</td>
		 * <td width="40%">Loading complete related objects</td>
		 * <td width="40%">Loading related IDs</td>
		 * </tr>
		 * <tr>
		 * <td>Many-to-one (cities -&gt; country): ADD/UPDATE</td>
		 * <td>If operation affected country, for example new city added with existing 
		 * countryId, then relatedUpdate is generated. Otherwise if city is added or updated without 
		 * countryId set, relatedUpdate is not generated.
		 * Note that if provided countryId does not exist, it is created.</td>
		 * <td>Same as with complete related objects, except if provided countryId does not exist, 
		 * then it is not created, but reset to NULL.</td>
		 * </tr>
		 * <tr>
		 * <td>Many-to-one (cities -&gt; country): REMOVE</td>
		 * <td colSpan=2>Removes record, depending on setting generates or not relatedUpdate for parent record.
		 * For example if city record is removed and countryId is sent to the server in remove request, then 
		 * country record will be generated in relatedUpdates.</td>
		 * </tr>
		 * <tr>
		 * <td>One-to-many (country -&gt; cities): ADD/UPDATE</td>
		 * <td>If add or update operation provides value sets for cities as well as for country, then 
		 * cities are created/updated if necessary and relatedUpdates are generated.
		 * Note that all fields in cities value sets can be sent to server.
		 * <td>Same as with complete related objects, except you can only sent primary key values for cities.</td>
		 * <tr>
		 * <td>One-to-many (country -&gt; cities): REMOVE</td>
		 * <td colSpan=2>Removes country, depending on setting returns or not relatedUpdates for the cities of removed country, 
		 * which can be either REMOVE operations of all cities if cascade enabled, or UPDATE operations setting countryId=null to 
		 * all cities if cascade is disabled</td>
		 * </tr>
		 * </table>
		 * 
		 * Note that Many-to-Many works the same way as One-to-Many.
		 * Flags: IRW
		 */
		readonly generateRelatedUpdates?: boolean;
		/** 
		 * (Read only) List of fields to group by when using serverSummaries','server-side summarization.
		 * 
		 * Valid only for an operation of type "fetch". See the 
		 * serverSummaries','Server Summaries overview for details and examples of usage.
		 * Flags: IR, Group: serverSummaries
		 */
		readonly groupBy?: Array<string> /* Array of String */;
		/** 
		 * For DataSources using SOAP messaging with a WSDL web service, data to be serialized to form
		 * SOAP headers, as a map from the header part name to the data. See
		 * WSRequest.headerData for more information.
		 * 
		 * SOAP headers typically contain request metadata such as a session id for authentication, and
		 * so dsRequest.headerData is typically populated by
		 * DataSource.transformRequest, or, for data that applies to every request sent to the
		 * server, by WebService.getHeaderData.
		 * 
		 * Note that this only applies to SOAP headers. General HTTP headers for requests may be
		 * modified using RPCRequest.httpHeaders.
		 * Flags: IRW
		 */
		readonly headerData?: any /* Object */;
		/** 
		 * This property is for advanced use in integrating trees that 
		 * TreeGrid.loadDataOnDemand','load data on demand using data paging.
		 * When this flag is set, a server fetch operation is expected to return all of the tree nodes
		 * that either match the provided criteria or have one or more children that match the
		 * criteria.
		 * 
		 * A ResultTree with ResultTree.fetchMode','fetchMode:"paged" and with
		 * ResultTree.keepParentsOnFilter','keepParentsOnFilter enabled will automatically set
		 * this property to true on all DSRequests that it sends to the server.
		 * 
		 * Currently, no built-in server-side connectors (SQL, JPA, Hibernate) implement support for
		 * the keepParentsOnFilter flag.
		 * Flags: IRW, Group: treeDataBinding
		 */
		readonly keepParentsOnFilter?: boolean /* Boolean */;
		/** 
		 * (Read only) The style of line-breaks to use in the exported output. See LineBreakStyle for
		 * more information.
		 * Flags: IR
		 */
		readonly lineBreakStyle?: string /* String */;
		/** 
		 * (Read only) For an update or remove operation, the original values from the
		 * record that is being updated or removed. oldValues is automatically added to
		 * DSRequests submitted by DataBound Components. Available on the server via
		 * DSRequest.getOldValues().
		 * 
		 * The server can compare the oldValues to the most recent stored values in order
		 * to detect that the user was looking at stale values when the user submitted changes (NOTE:
		 * this means of detecting concurrent edit is sometimes called "optimistic concurrency" or
		 * "long transactions"). 
		 * 
		 * In applications where a policy of "last update wins" is not appropriate when updating
		 * certain fields, special UI can be shown for this case. For example, on detecting concurrent
		 * edit, the server may send back a special dsResponse.status code that the client
		 * application detects, offering the user a choice of proceeding with the operation,
		 * discarding edits, or reconciling new and old values in a special interface.
		 * Flags: IR
		 */
		readonly oldValues?: any /* Record */;
		/** 
		 * (Read only) When a DataBoundComponent sends a DSRequest, the
		 * dsRequest.operationId will be automatically picked up from the
		 * fetchOperation, addOperation, etc properties of the
		 * DataBoundComponent. 
		 * 
		 * The operationId serves as an identifier that you can use to create
		 * variations on the 4 basic DataSource operations that are used by different components in
		 * different parts of your application. For example, you may be using a standard
		 * fetch operation in one part of your application, however on another screen you
		 * want to perform a fetch operation on the same DataSource but interpret search
		 * criteria differently (eg full text search). 
		 * 
		 * If you declare more than one OperationBinding for the same
		 * OperationBinding.operationType, you can specify an operationId
		 * OperationBinding.operationId','on the operationBinding which will cause that
		 * operationBinding to be used for dsRequests containing a matching operationId.
		 * This allows all the possible settings of an operationBinding, including
		 * OperationBinding.wsOperation','wsOperation or dmiOverview','DMI settings, to be switched on a
		 * per-component or per-request basis. 
		 * 
		 * For example, by setting the fetchOperation on a particular ListGrid, you could
		 * cause it to invoke a different server method via DMI, different
		 * OperationBinding.dataURL','dataURL or different 
		 * OperationBinding.wsOperation','web service operation.
		 * 
		 * The operationId can also be directly received by the server in order to affect
		 * behavior. When using the SmartClient Server, operationId can be accessed via
		 * dsRequest.getOperationId(). The RestDataSource will also send the
		 * operationId to the server as part of the
		 * RestDataSource.metaDataPrefix','request metadata. 
		 * 
		 * Note that if you DataSource.fetchData','manually invoke a DataSource operation, you can
		 * also specify operationId via the requestProperties parameter.
		 * 
		 * Note that the operationId has special significance in terms of whether two
		 * DSRequests are considered equivalent for caching and synchronization purposes - see
		 * dsRequestEquivalence.
		 * Flags: IR, Group: operations
		 */
		readonly operationId?: string /* String */;
		/** 
		 * (Read only) Type of operation being performed: "fetch", "add", "remove", "update" or "custom".
		 * 
		 * This property is generally automatically populated, for example when calling
		 * fetchData() on a DataSource or DataBound component the operationType is
		 * automatically set to "fetch". Note that "custom" operations are never generated
		 * automatically, they are always fired by your code.
		 * Flags: IR
		 */
		readonly operationType?: DSOperationType;
		/** 
		 * (Read only) The list of fields to return in the response, specified as a comma-separated string (eg,
		 * "foo, bar, baz"). You can use this property to indicate to the server that 
		 * you are only interested in a subset of the fields that would normally be returned.
		 * 
		 * Note that you cannot use this property to request a <em>superset</em> of the fields that
		 * would normally be returned, because that would be a security hole. It is possible to 
		 * configure individual OperationBindings to return extra fields, but this must
		 * be done in the server's DataSource descriptor; it cannot be altered on the fly
		 * from the client side.
		 * Flags: IR
		 */
		readonly outputs?: string /* String */;
		/** 
		 * (Read only) For advanced use in integrating trees that 
		 * TreeGrid.loadDataOnDemand','load data on demand with web services,
		 * parentNode is automatically set in "fetch" DSRequests issued by a
		 * databound TreeGrid that is loading children for that parentNode.
		 * 
		 * This is sometimes needed if a web service requires that additional properties beyond the
		 * ID of the parentNode must be passed in order to accomplished level-by-level loading.
		 * A custom implementation of DataSource.transformRequest can access
		 * dsRequest.parentNode and add any such properties to DSRequest.data.
		 * 
		 * parentNode will also be automatically set by a TreeGrid performing databound
		 * reparenting of nodes, as implemented by TreeGrid.folderDrop.
		 * 
		 * This property can only be read. There is no meaning to setting this property
		 * yourself.
		 * Flags: R
		 */
		readonly parentNode?: TreeNode;
		/** 
		 * (Read only) Indicates that a validation request is being made for a record that will ultimately be 
		 * saved with an "add" request, as opposed to an "update" request. This context is necessary
		 * for some validators because the nature of the validation depends on whether we are adding
		 * or updating a record. The system sets this flag when processing interim validations, such
		 * as those fired when DynamicForm.validateOnChange is in force.
		 * Flags: IR
		 */
		readonly pendingAdd?: boolean;
		/** 
		 * Sets DataSource.progressiveLoading','progressive loading mode for this specific
		 * request, overriding the OperationBinding- and DataSource-level settings. Note that this 
		 * setting applies only to fetch requests - it has no effect if specified on any other kind 
		 * of request.
		 * Flags: IRW, Group: progressiveLoading
		 */
		readonly progressiveLoading?: boolean;
		/** 
		 * (Read only, Advanced) Automatically generated unique ID for this request. This ID will be required by developers 
		 * making use of the DSProtocol','"clientCustom" dataProtocol.
		 * Flags: RA
		 */
		readonly requestId?: string /* String */;
		/** 
		 * (Read only) For advanced use in integrating dataset paging with web services,
		 * the ResultSet that issued this "fetch" DSRequest is automatically made available as the
		 * resultSet property.
		 * 
		 * This property can only be read. There is no meaning to setting this property
		 * yourself.
		 * Flags: R
		 */
		readonly resultSet?: ResultSet;
		/** 
		 * (Read only) For advanced use in integrating trees that 
		 * ResultTree.loadDataOnDemand','load data on demand with web services,
		 * the ResultTree that issued this "fetch" DSRequest is automatically made available as the
		 * resultTree property.
		 * 
		 * This property can only be read. There is no meaning to setting this property
		 * yourself.
		 * Flags: R
		 */
		readonly resultTree?: ResultTree;
		/** 
		 * This is a per-request flag for explicitly controlling whether the cache is used (bypassing
		 * it when not wanted, or using it when settings would indicate otherwise). See 
		 * DataSource.cacheAllData, DataSource.cacheAllOperationId and
		 * DataSource.cacheAcrossOperationIds for caching management for all requests of a 
		 * dataSource.
		 * Flags: IRW
		 */
		readonly shouldUseCache?: boolean;
		/** 
		 * (Read only) Field name to sortBy, prefixed with optional "-" indicating descending sort. For example, to
		 * sort by the field "userName" in ascending order, set sortBy to just
		 * "userName". For descending sort on "userName", set sortBy to "-userName". 
		 * 
		 * To sort by multiple fields, an array of field names is also supported. For example, to sort
		 * by the field "department" in ascending order, followed by the field "userName" in descending
		 * order, set sortBy to: 
		 * 
		 * [ "department", "-userName" ]
		 * 
		 * Additionally, this property supports an array of SortSpecifier objects. Setting 
		 * sortBy to the following SortSpecifier array results in the same multi-level
		 * sort mentioned above:
		 * 
		 * 
		 * [
		 * &nbsp;&nbsp;{ property: "department", direction: "ascending" },
		 * &nbsp;&nbsp;{ property: "userName", direction: "descending" }
		 * ]
		 * 
		 * Flags: IR
		 */
		readonly sortBy?: string | Array<string> | Array<SortSpecifier> /* FieldName | Array of FieldName | Array of SortSpecifiers */;
		/** 
		 * (Read only) Starting row of requested results, used only with fetch operations. If unset, 0 is assumed.
		 * 
		 * Note that startRow and endRow are zero-based, inclusive at the beginning and exclusive at
		 * the end (like substring), so startRow: 0, endRow: 1 is a request for the first record.
		 * Flags: IR, Group: paging
		 */
		readonly startRow?: number;
		/** 
		 * (Read only) If true, results will be streamed on the server, rather than all records being read into 
		 * server memory at once; this approach is appropriate for retrieving or exporting large
		 * datasets without swamping the server. 
		 * 
		 * Although this property can be set without any particular concerns (small datasets can be 
		 * streamed just as readily as large ones), bear in mind that although streaming enables the
		 * processing of very large datasets, processing and downloading very large datasets in a 
		 * normal client/server flow will very rarely give an acceptable user experience. Streaming
		 * is of more practical use in a batch setting - for example, a disconnected 
		 * DSRequest.exportToFilesystem','export.
		 * 
		 * Note that streaming requires specific server support; of SmartClient's built-in DataSource
		 * types, only SQLDataSource is able to stream results. This property is ignored
		 * by other DataSource types. If you wish to implement the necessary server-side behavior to 
		 * support streaming with a custom DataSource, see the the server-side Javadocs for 
		 * DSResponse.hasNextRecord() and DSResponse.nextRecordAsObject().
		 * 
		 * See also the server-side documentation for DSResponse, 
		 * SQLDataSource and StreamingResponseIterator.
		 * 
		 * Note, that streaming results does not support fields with SummaryFunction','"concat" summary function 
		 * on non-Oracle databases. Such fields will be skipped.
		 * Flags: IR
		 */
		readonly streamResults?: boolean;
		/** 
		 * (Read only) A mapping from field names to SummaryFunction','summary functions to be applied
		 * to each field.
		 * 
		 * Valid only for an operation of type "fetch". See the 
		 * serverSummaries','Server Summaries overview for examples of usage.
		 * Flags: IR, Group: serverSummaries
		 */
		readonly summaryFunctions?: any /* Object<String,SummaryFunction> */;
		/** 
		 * (Read only) For "fetch" operations, how search criteria should be interpreted for text fields: one of
		 * "exact" for exact match, "exactCase" for case-sensitive exact match, "startsWith" for 
		 * matching at the beginning only, or "substring" for substring match. All 
		 * textMatchStyle settings except "exactCase" are case-insensitive; use
		 * AdvancedCriteria for greater control over matching.
		 * 
		 * This property defaults to the value of DataSource.defaultTextMatchStyle if it is not
		 * explicitly provided on the DSRequest. Note, however, that DSRequests issued 
		 * by ListGrids and other DataBoundComponent','components will generally have a 
		 * setting for textMatchStyle on the component itself 
		 * (see ListGrid.autoFetchTextMatchStyle, for example).
		 * 
		 * This setting is respected by the built-in server-side connectors for SQL, JPA and Hibernate.
		 * A custom server-side DataSource implementation should generally respect this flag as well,
		 * or server-side filtering will not match client-side filtering, which will require
		 * ResultSet.useClientFiltering','disabling client-side filtering, a huge performance
		 * loss.
		 * Flags: IR
		 */
		readonly textMatchStyle?: TextMatchStyle;
		/** 
		 * (Read only) When useFlatFields is set for a request to be sent to a WSDL web service, when
		 * creating the input XML message to send to the web service, properties in
		 * DSRequest.data','request.data will be used as the values for XML elements of the same name, at
		 * any level of nesting.
		 * 
		 * useFlatFields allows you to ignore gratuitous XML message structure, such as
		 * extra levels of nested elements, and provides some insulation against changes in the
		 * required structure of the input message.
		 * 
		 * For example, given this input message:
		 * 
		 * &lt;FindServices&gt;
		 * &lt;searchFor&gt;search text&lt;/searchFor&gt;
		 * &lt;Options&gt;
		 * &lt;caseSensitive&gt;false&lt;/caseSensitive&gt;
		 * &lt;/Options&gt;
		 * &lt;IncludeInSearch&gt;
		 * &lt;serviceName&gt;true&lt;/serviceName&gt;
		 * &lt;documentation&gt;true&lt;/documentation&gt;
		 * &lt;keywords&gt;true&lt;/keywords&gt;
		 * &lt;/IncludeInSearch&gt;
		 * &lt;/FindServices&gt;
		 * 
		 * If useFlatFields were not set, in order to fill out this message
		 * correctly, request.data would need to be:
		 * {
		 * searchFor: "search text",
		 * Options : {
		 * caseSensitive: false,
		 * },
		 * IncludeInSearch : {
		 * serviceName: true,
		 * documentation : true,
		 * keywords : true
		 * }
		 * }
		 * However if useFlatFields were set, request.data could be just:
		 * {
		 * searchFor: "search text",
		 * caseSensitive: false,
		 * serviceName: true,
		 * documentation : true,
		 * keywords : true
		 * }
		 * useFlatFields is often set when the input data comes from a DynamicForm
		 * to avoid the cumbersome and fragile process of mapping input fields to an XML structure.
		 * 
		 * OperationBinding.useFlatFields can also be set to cause all dsRequests of a
		 * particular type to useFlatFields automatically.
		 * 
		 * For DataBoundComponent','DataBoundComponents, 
		 * DataBoundComponent.useFlatFields','component.useFlatFields can be set use "flattened"
		 * binding to fields of a WSDL message or XML Schema.
		 * 
		 * Note that useFlatFields is not generally recommended for use with XML input
		 * messages where multiple simple type fields exist with the same name, however if used in this
		 * way, the first field to use a given name wins. "first" means the first field encountered in a
		 * depth first search. "wins" means only the first field will be populated in the generated
		 * XML message.
		 * Flags: IR, Group: flatFields
		 */
		readonly useFlatFields?: boolean /* Boolean */;
		/** 
		 * Cause the DSRequest.useFlatFields','useFlatFields XML serialization behavior to be used
		 * for all soap headers in the request. See also DSRequest.headerData.
		 * Flags: IRW, Group: flatFields
		 */
		readonly useFlatHeaderFields?: boolean;
		/** 
		 * (Read only) Should the HTTP response to this request be formatted using the
		 * strict JSON subset of the javascript language?
		 * If set to true, responses returned by the server should match the format described
		 * <a href='http://www.json.org/js.html' target='_blank'>here</a>.
		 * 
		 * Only applies to requests sent a server with
		 * DataSource.dataFormat set to "json" or "iscServer".
		 * Flags: IR
		 */
		readonly useStrictJSON?: boolean;
		/** 
		 * (Read only) Mode of validation for entered data.
		 * Flags: IR
		 */
		readonly validationMode?: ValidationMode;
	} // DSRequest

	export interface DSRequestStatic extends RPCRequestStatic {
	} // DSRequestStatic


	/**
	 * An object that modifies a dsRequest based on several available 
	 * values, including preceding responses from the same queue. 
	 * 
	 * Some elements of this feature are only available with Power or better licenses. See
	 * <a href=http://smartclient.com/product>smartclient.com/product</a> for details.
	 * 
	 * You provide a list of DSRequestModifiers as the 
	 * OperationBinding.criteria or OperationBinding.values
	 * of an OperationBinding. The ability to modify a request based on responses to 
	 * earlier requests in the same queue is called transactionChaining.
	 * 
	 * A DSRequestModifier consists of a DSRequestModifier.fieldName','fieldName, usually a
	 * DSRequestModifier.value','value and possibly an DSRequestModifier.operator','operator
	 * and DSRequestModifier.start','start and/or DSRequestModifier.end','end values 
	 * (applicable to advanced criteria only). The value, start and end settings can be static, or - 
	 * with Power or better licenses - they can be expressions in the Velocity template language, 
	 * which will be resolved at runtime, immediately before the DSRequest is executed. 
	 * 
	 * See below some examples of OperationBinding.criteria declarations:
	 * 
	 * &lt;operationBindings&gt;
	 * &lt;operationBinding operationType="fetch" operationId="..."&gt;
	 * &lt;criteria fieldName="lifeSpan" value="10"/&gt;
	 * &lt;criteria fieldName="scientificName" value="Gazella thomsoni"/&gt;
	 * &lt;/operationBinding&gt;
	 * 
	 * &lt;operationBinding operationType="fetch" operationId="..."&gt;
	 * &lt;criteria fieldName="lifeSpan" operator="greaterThan" value="10" /&gt;
	 * &lt;/operationBinding&gt;
	 * 
	 * &lt;operationBinding operationType="fetch" operationId="..."&gt;
	 * &lt;criteria _constructor="AdvancedCriteria" operator="or"&gt;
	 * &lt;criteria&gt;
	 * &lt;Criterion fieldName="lifeSpan" operator="greaterThan" value="10" /&gt;
	 * &lt;Criterion fieldName="scientificName" operator="contains" value="Octopus" /&gt;
	 * &lt;/criteria&gt;
	 * &lt;/criteria&gt;
	 * &lt;/operationBinding&gt;
	 * &lt;/operationBindings&gt;
	 *  
	 */
	export interface DSRequestModifier {
		/** 
		 * (Read only) The value to use for the end of a range. This property only applies to criteria, and it 
		 * only applies to operators of type "rangeCheck" - for example, the "between" operator.
		 * It is ignored if specified as part of a OperationBinding.values attribute, or for 
		 * an inapplicable operator type.
		 * 
		 * The same rules apply to this attribute as apply to DSRequestModifier.value','value, so
		 * you can use Velocity expressions if you have a Power or better license.
		 * Flags: IR, Group: transactionChaining
		 */
		readonly end?: string /* String */;
		/** 
		 * (Read only) The name of the field to add or replace on the DSRequest - whether this appears in the DSRequest's
		 * values or criteria depends on whether this is part of a OperationBinding.values or
		 * OperationBinding.criteria attribute.
		 * Flags: IR
		 */
		readonly fieldName?: string /* FieldName */;
		/** 
		 * (Read only) The name of the operator to apply when constructing criteria. This property only applies 
		 * to criteria; it is ignored if specified as part of a OperationBinding.values 
		 * attribute.
		 * Flags: IR
		 */
		readonly operator?: string /* String */;
		/** 
		 * (Read only) The value to use for the start of a range. This property only applies to criteria, and it 
		 * only applies to operators of type "rangeCheck" - for example, the "between" operator.
		 * It is ignored if specified as part of a OperationBinding.values attribute, or for 
		 * an inapplicable operator type.
		 * 
		 * The same rules apply to this attribute as apply to DSRequestModifier.value','value, so
		 * you can use Velocity expressions if you have a Power or better license.
		 * Flags: IR, Group: transactionChaining
		 */
		readonly start?: string /* String */;
		/** 
		 * (Read only) The value to assign to the field named by DSRequestModifier.fieldName','fieldName. This
		 * value can be static, and for Pro licenses that is the only option. With Power and better
		 * licenses, this value can be an expression in the Velocity template language. In this latter
		 * case, all the standard velocitySupport','Velocity context variables provided by
		 * SmartClient Server are available to you.
		 * 
		 * There is also one additional Velocity context variable available in this specific case: 
		 * $masterId. If there is a DataSourceField.foreignKey','foreignKey from the 
		 * DataSource for the current operation to another DataSource for which an add or update 
		 * operation has taken place earlier in the queue, this is the value of the target field of 
		 * the foreign key, taken from the response data of that earlier operation (the most recent 
		 * one, if there are several). This is useful because it will typically yield the (possibly 
		 * just generated) primary key of the "master" record.
		 * 
		 * Consider a queued batch of "add" operations for an order header and its details. The 
		 * detail additions need to know the unique primary key that was assigned to the order, but 
		 * this will typically be generated at the time of inserting the order row into the database,
		 * so it is not known up-front. However, this value will be in the response to the DSRequest
		 * that added the order header, so it is accessible via $responseData; if there is a 
		 * declared foreign key relationship from the detail DataSource to the header DataSource, the 
		 * header's unique key value will also be accesible as $masterId. See this example: 
		 * queuedAdd.
		 * 
		 * $responseData - which is an instance of 
		 * com.isomorphic.velocity.ResponseDataHandler - exposes various overloads of
		 * first() and last() APIs that can be called to obtain the actual 
		 * record data of prior responses. These methods return an instance of 
		 * com.isomorphic.velocity.ResponseDataWrapper, which allows convenient handling
		 * of response data whether it is a single record or a list. Response data can be treated as
		 * a single record even if it is a List, so you can access the response data directly, with no
		 * need for an index; when you do this, and the data is actually a List or array, you get the 
		 * first record. If the response data is a list or array, you can also access individual 
		 * records in that list using Velocity index notation, and you can use the special value 
		 * "last" to access the last element of a List or array.
		 * 
		 * Examples of the Velocity syntax needed:
		 * 
		 * $responseData.first.myField is the myField property of the first response in
		 * the queue. Note, this works whether that response returned a single record or a list. If it
		 * returned a list, this Velocity expression gets the first record in the list. This is a
		 * particularly useful shorthand for 'add' and 'update' operations, where the response data 
		 * is typically a List containing a single record
		 * 
		 * $responseData.first('order').myField is the myField property of the first response to an 
		 * operation (any operation) on the "order" DataSource
		 * 
		 * $responseData.first('order', 'add').myField is the myField property of the first 
		 * response to an "add" operation on the "order" DataSource
		 * 
		 * $responseData.first('order', 'fetch').last.myField
		 * is the myField property of the last record in the response data of the first fetch in the 
		 * queue (fetch operations always return a List of records)
		 * 
		 * $responseData.first('order', 'fetch')[0].myField is the myField property of a
		 * specific record (in this case, the first) in the response data of the first response in the 
		 * queue. Note that this is shown for completeness only: there is no need to use index 
		 * notation to explicitly request the first record, unless you are iterating over the entire 
		 * list or have some other out-of-the-ordinary use case. The first record is assumed if you 
		 * omit the index notation, so this example is equivalent to the simpler: 
		 * $responseData.first('order', 'fetch')[0].myField
		 * 
		 * All of these syntactic variations are also available on the $responseData.last object - 
		 * "last" here meaning the most recent response matching the DataSource and operation type (if 
		 * applicable). Note, "last" potentially has three different meanings, depending on context:
		 * If your DataSource contains a field that is actually called "last", the following expression 
		 * would be the correct way to obtain the value of the field called "last", on the last record
		 * of the last (most recent) response:
		 * $responseData.last.last.last
		 * 
		 * Please see the server-side Javadoc for the 
		 * com.isomorphic.velocity.ResponseDataHandler class.
		 * Flags: IR, Group: transactionChaining
		 */
		readonly value?: string /* String */;
	} // DSRequestModifier

	export interface DSRequestModifierStatic {
	} // DSRequestModifierStatic


	/**
	 * A JavaScript object specifying a range of dates. Values are DateRange.start','start
	 * and DateRange.end','end. If either value is omitted, the range is assumed to be
	 * open-ended in that direction - so if dateRange.start is omitted, the range will include any
	 * date earlier than the value specified in dateRange.end. 
	 */
	export interface DateRange {
		/** 
		 * (Read only) The end of this DateRange.
		 * Flags: IR
		 */
		readonly end?: RelativeDate | Date;
		/** 
		 * (Read only) The start of this DateRange.
		 * Flags: IR
		 */
		readonly start?: RelativeDate | Date;
	} // DateRange

	export interface DateRangeStatic {
	} // DateRangeStatic


	/**
	 * A Javascript object defining the details of a single sort operation.
	 * 
	 * You can convert between SortSpecifiers and the string format required by 
	 * DSRequest.sortBy by calling DataSource.getSortBy and 
	 * DataSource.getSortSpecifiers. 
	 */
	export interface SortSpecifier {
		/** 
		 * (Read only) A DataBoundComponent providing the context for the sort-normalizer.
		 * Flags: IR
		 */
		readonly context?: DataBoundComponent;
		/** 
		 * (Read only) The direction in which this specifier should sort.
		 * Flags: IR
		 */
		readonly direction?: SortDirection;
		/** 
		 * (Read only) A normalizer function which this sortSpecifier will use to sort.
		 * Flags: IR
		 */
		readonly normalizer?: any /* Function */;
		/** 
		 * (Read only) The property name, eg a ListGridField','field name, to which this sortSpecifier applies.
		 * Flags: IR
		 */
		readonly property?: string /* String */;
	} // SortSpecifier

	export interface SortSpecifierStatic {
	} // SortSpecifierStatic


	/**
	 * Defines a set of properties that are applicable to
	 * FacetChart.extraAxisMetrics','additional value axes of a FacetChart.
	 * 
	 * These properties behave identically to the same-named properties of FacetChart. Two
	 * exceptions are the properties
	 * MetricSettings.gradationLineProperties','gradationLineProperties and
	 * MetricSettings.gradationZeroLineProperties','gradationZeroLineProperties
	 * because they are used to draw tick marks along an extra value axis instead of lines
	 * through the chart rectangle. Also the default behavior of the
	 * MetricSettings.dataColors','dataColors property is different, in that the
	 * default is to use unused colors from, and in the order of, the 
	 * FacetChart.dataColors','main data colors array.
	 * 
	 * The extra value axes that are not positioned directly adjacent to the
	 * FacetChart.showChartRect','chart rect. of the FacetChart may additionally
	 * have an axis line to connect the gradation tick marks. Whether to draw this
	 * line is controlled by the MetricSettings.showAxisLine','showAxisLine property,
	 * and the properties of the line are specified using
	 * MetricSettings.axisLineProperties','axisLineProperties. The default is to draw
	 * the axis lines whenever the chart rect. is drawn and to draw the line using the same
	 * properties as the lines of the chart rect. (for example, lineColor and lineWidth).
	 * 
	 * The extra value axis charts may be 
	 * MetricSettings.multiFacet','single- or multi-facet charts. If the underlying
	 * FacetChart.data','data is multi-facet then the extra value axes may use the facet
	 * whose values are labelled on the data axis or the facet used to create the legend (the
	 * first and second facets, respectively). Both types of charts vary the first facet to
	 * get a data series to plot. Multi-facet charts also vary the second facet, but
	 * single-facet charts keep the second facet fixed at a constant FacetValue.
	 * 
	 * The exact facet value to use for the second facet is specified using the
	 * MetricSettings.fixedFacetValue','fixedFacetValue property. 
	 */
	export interface MetricSettings {
		/** 
		 * (Read only) Properties for the axis line drawn if this extra value axis is not positioned
		 * directly adjacent to the chart rect. The default is to match the
		 * DrawItem.lineCap','lineCap, DrawItem.lineColor','lineColor,
		 * DrawItem.lineOpacity','lineOpacity, DrawItem.linePattern','linePattern,
		 * and DrawItem.lineWidth','lineWidth of the FacetChart's
		 * FacetChart.chartRectProperties','chart rect. for each axis line.
		 * Flags: IR
		 */
		readonly axisLineProperties?: DrawLineProps /* DrawLine Properties */;
		/** 
		 * (Read only) Same as FacetChart.axisStartValue but affects only one metric.
		 * Flags: IR
		 */
		readonly axisStartValue?: number /* Float */;
		/** 
		 * See ChartType for a list of known types - Column, Bar, Line, Pie, Doughnut,
		 * Area, Radar, and Histogram charts are supported.
		 * Flags: IRW
		 */
		readonly chartType?: ChartType;
		/** 
		 * An array of colors to use for a series of visual elements representing data (eg columns,
		 * bars, pie slices), any of which may be adjacent to any other.
		 * 
		 * Colors must be in the format of a leading hash (#) plus 6 hexadecimal digits, for example, 
		 * "#FFFFFF" is white, "#FF0000" is pure red.
		 * Flags: IRW
		 */
		readonly dataColors?: Array<string> /* Array of CSSColor */;
		/** 
		 * (Read only) Properties for lines that show data (as opposed to gradations or borders around the data
		 * area).
		 * Flags: IR
		 */
		readonly dataLineProperties?: DrawLineProps /* DrawLine Properties */;
		/** 
		 * (Read only) Properties for lines that outline a data shape (in filled charts such as area or radar
		 * charts).
		 * Flags: IR
		 */
		readonly dataOutlineProperties?: DrawItemProps /* DrawItem Properties */;
		/** 
		 * (Read only) Common properties to apply for all data points (see MetricSettings.showDataPoints).
		 * Flags: IR
		 */
		readonly dataPointProperties?: DrawItemProps /* DrawItem Properties */;
		/** 
		 * (Read only) Size in pixels for data points drawn for line, area, radar and other chart types.
		 * Flags: IR
		 */
		readonly dataPointSize?: number /* int */;
		/** 
		 * (Read only) Properties for data shapes (filled areas in area or radar charts).
		 * Flags: IR
		 */
		readonly dataShapeProperties?: DrawPathProps /* DrawPath Properties */;
		/** 
		 * (Read only) The FacetChart.decimalPrecision used to render the numeric labels of this metric axis.
		 * Flags: IR
		 */
		readonly decimalPrecision?: number /* int */;
		/** 
		 * Whether shapes are filled, for example, whether a multi-series line chart appears as a
		 * stack of filled regions as opposed to just multiple lines.
		 * 
		 * If unset, fills will be automatically used when there are multiple facets and stacking
		 * is active (so Line and Radar charts will show stacked regions). 
		 * 
		 * You can explicitly set filled:false to create multi-facet Line or Radar charts where
		 * translucent regions overlap, or filled:true to fill in a single-facet Line or Radar
		 * chart.
		 * Flags: IRW
		 */
		readonly filled?: boolean;
		/** 
		 * (Read only) For a MetricSettings.multiFacet','single-facet chart of an extra value axis, this property provides a constant facet value
		 * for the second facet. By varying the value of the other facet in multi-facet data, the chart
		 * obtains the series of values to plot. The default facet value is the first facet value of the second facet.
		 * Flags: IR
		 */
		readonly fixedFacetValue?: string | number /* String | Number */;
		/** 
		 * (Read only) Properties for gradation labels
		 * Flags: IR
		 */
		readonly gradationLabelProperties?: DrawLabelProps /* DrawLabel Properties */;
		/** 
		 * (Read only) Properties for gradation lines
		 * Flags: IR
		 */
		readonly gradationLineProperties?: DrawLineProps /* DrawLine Properties */;
		/** 
		 * (Read only) Properties for the gradation line drawn for zero (slightly thicker by default).
		 * Flags: IR
		 */
		readonly gradationZeroLineProperties?: DrawLineProps /* DrawLine Properties */;
		/** 
		 * (Read only) For MetricSettings.multiFacet','single-facet charts embedded in a multi-facet main
		 * chart, the legendLabel defines the text of the legend label for this chart.
		 * The default text is the FacetValue.title','title of the metric facet value of this
		 * value axis concatenated with the FacetValue.title','title of the
		 * MetricSettings.fixedFacetValue','fixed facet value in parentheses. Set the
		 * legendLabel to provide custom text for the legend label.
		 * Flags: IR
		 */
		readonly legendLabel?: string /* String */;
		/** 
		 * (Read only) When MetricSettings.useLogGradations, base value for logarithmic gradation lines. Gradation
		 * lines will be shown at every power of this value plus intervening values specified by
		 * MetricSettings.logGradations.
		 * Flags: IR
		 */
		readonly logBase?: number /* int */;
		/** 
		 * (Read only) When MetricSettings.useLogGradations is set, gradation lines to show in between powers,
		 * expressed as a series of integer or float values between 1 and MetricSettings.logBase.
		 * 
		 * Some common possibilities (for base 10):
		 * 
		 * [ 1 ] // show only orders of magnitude (0.1, 1, 10, 100, etc)
		 * [ 1, 5 ] // show only orders of magnitude plus halfway mark
		 * [ 1, 2, 4, 8 ] // show powers of 2 between orders
		 * [ 1, 2.5, 5, 7.5 ] // show quarters
		 * 
		 * Or base 2:
		 * 
		 * [ 1 ]
		 * [ 1, 1.5 ]
		 * 
		 * Flags: IR
		 */
		readonly logGradations?: Array<number> /* Array of Float */;
		/** 
		 * (Read only) Whether to use logarithmic scaling for values.
		 * 
		 * Logarithmic scale charts show an equivalent percentage increase as equivalent distance
		 * on the chart. That is, 10 and 100 are the same distance apart as 100 and 1000 (each
		 * being a 10 times or 1000% increase).
		 * Flags: IR
		 */
		readonly logScale?: boolean /* Boolean */;
		/** 
		 * (Read only) When this property is set to the metric of another MetricSettings object, the extra
		 * value axis and chart corresponding to these settings will use the same scale for the
		 * gradations as the extra value axis and chart of the other MetricSettings object. The
		 * value of matchGradations can only be one of the metrics of the metric
		 * facet whose values will be displayed by the chart.
		 * Flags: IR
		 */
		readonly matchGradations?: string /* String */;
		/** 
		 * (Read only) Same as FacetChart.minDataSpreadPercent but affects only one metric. Default of
		 * null means that the chart-wide setting facetChart.minDataSpreadPercent
		 * will be used.
		 * Flags: IR
		 */
		readonly minDataSpreadPercent?: number /* Integer */;
		/** 
		 * (Read only) Whether this extra value axis plots values while varying the facet values of just the
		 * first facet (single-facet) or both first and second facets (multi-facet).
		 * Flags: IR
		 */
		readonly multiFacet?: boolean /* Boolean */;
		/** 
		 * For multi-facet charts, render data values as a proportion of the sum of all data
		 * values that have the same label.
		 * 
		 * Gradation labels will be switched to show percentage instead of absolute values.
		 * 
		 * This setting is valid only for Column, Bar, Area and Radar chart types and only in
		 * MetricSettings.stacked','stacked mode. Stacked columns will be as tall as the chart rect and
		 * stacked bars will be as wide as the chart rect. Area and Radar charts will be
		 * completely filled except for facet values where all values are 0.
		 * Flags: IRW
		 */
		readonly proportional?: boolean;
		/** 
		 * (Read only) Default title for the value axis label when the chart is in
		 * MetricSettings.proportional','proportional rendering mode. This title will be used unless the
		 * FacetChart.getLegendFacet','legend facet defines a
		 * Facet.proportionalTitle','proportionalTitle.
		 * Flags: IR, Group: i18nMessages
		 */
		readonly proportionalAxisLabel?: string /* String */;
		/** 
		 * (Read only) Properties for shadows.
		 * Flags: IR
		 */
		readonly shadowProperties?: DrawOvalProps /* DrawOval Properties */;
		/** 
		 * (Read only) Whether to show the extra value axis.
		 * Flags: IR
		 */
		readonly showAxis?: boolean /* Boolean */;
		/** 
		 * (Read only) Whether to show an axis line for this extra value axis if it is not placed
		 * directly adjacent to the chart rect. The default setting is the value
		 * of the FacetChart.showChartRect','showChartRect property of the FacetChart.
		 * Flags: IR
		 */
		readonly showAxisLine?: boolean;
		/** 
		 * (Read only) For Line, Area, Radar, Scatter or Bubble charts, whether to show data points for each
		 * individual data value.
		 * 
		 * If shown, the MetricSettings.pointClick and MetricSettings.getPointHoverHTML APIs can be used to create
		 * interactivity.
		 * Flags: IR
		 */
		readonly showDataPoints?: boolean /* Boolean */;
		/** 
		 * (Read only) Should data values be shown as text labels near the shape representing the value, for example,
		 * above columns of a column chart, or adjacent to points in a line chart?
		 * 
		 * If set to false, then data values will not be shown.
		 * 
		 * If set to true, data values will be shown unless the data density is high enough that
		 * labels will potentially overlap, in which case, data values will not be shown and
		 * hovers will be shown instead, in the same way as MetricSettings.showValueOnHover shows hovers.
		 * Flags: IR
		 */
		readonly showDataValues?: boolean;
		/** 
		 * (Read only) Whether to automatically show shadows for various charts.
		 * Flags: IR
		 */
		readonly showShadows?: boolean /* Boolean */;
		/** 
		 * (Read only) Whether to show the MetricSettings.valueTitle','valueTitle (or, in the case of
		 * MetricSettings.proportional','proportional rendering mode,
		 * MetricSettings.proportionalAxisLabel) as a label on this extra value axis.
		 * Flags: IR
		 */
		readonly showValueAxisLabel?: boolean;
		/** 
		 * (Read only) Shows the value of the nearest data value in a floating label whenever the mouse moves
		 * within the main chart area. The visual element representing the data
		 * value will also be emphasized by brightening or highlighting it (appearance differs by
		 * chart type).
		 * 
		 * Calculates nearest value based on FacetChart.getNearestDrawnValue.
		 * 
		 * The data value will be formatted using FacetChart.formatDataValue.
		 * The label's appearance is controlled by FacetChart.hoverLabelProperties.
		 * Flags: IR
		 */
		readonly showValueOnHover?: boolean;
		/** 
		 * If the ChartType is "Column" then the metric settings may include
		 * a setting for FacetChart.stacked.
		 * 
		 * Flags: IRW
		 */
		readonly stacked?: boolean;
		/** 
		 * (Read only) Whether to use classic logarithmic gradations, where each order of magnitude is shown as
		 * a gradation as well as a few intervening lines. Gradations also begin and end on an order
		 * of magnitude. For example, 1,2,4,6,8,10,20,40,60,80,100.
		 * 
		 * Default gradations can be overridden via MetricSettings.logBase and MetricSettings.logGradations.
		 * Flags: IR
		 */
		readonly useLogGradations?: boolean /* Boolean */;
		/** 
		 * (Read only) Properties for labels of value axis.
		 * Flags: IR
		 */
		readonly valueAxisLabelProperties?: DrawLabelProps /* DrawLabel Properties */;
		/** 
		 * (Read only) Properties for a "value line" - a line shows where a particular discrete value is
		 * placed, eg, vertical lines connecting points of a line chart to the X axis, or radial
		 * lines in a Radar chart.
		 * Flags: IR
		 */
		readonly valueLineProperties?: DrawLineProps /* DrawLine Properties */;
		/** 
		 * (Read only) A label for the data values, such as "Sales in Thousands", typically used as the label for
		 * the value axis.
		 * Flags: IR
		 */
		readonly valueTitle?: string /* String */;
		/** 
		 * (Read only) Same as FacetChart.xAxisEndValue but affects only one metric.
		 * Flags: IR
		 */
		readonly xAxisEndValue?: number /* Float */;

		/* Instance Method Overrides */
		/**  
		 *  Return the text string to display in MetricSettings.gradationLabelProperties','gradation labels
		 * given the raw value for the metric to show on the value axis. This formatter will only
		 * be called if the axis has gradation labels, meaning labels drawn at regular intervals not
		 * associated with any particular facet value.
		 * 
		 * Note that the rendering of values in hovers or via MetricSettings.showDataValues is handled by
		 * MetricSettings.formatDataValue.
		 * 
		 * @param {any} value - raw value of the metric
		 * @return {string} the text to display.
		 */
		formatAxisValue?(value:any /* Any */): string /* String */; 

		/**  
		 *  Return the text string to display in MetricSettings.showValueOnHover','hovers or via MetricSettings.showDataValues
		 * given the raw value for the metric displayed on the value axis.
		 * 
		 * Note that the rendering of values for gradation labels is handled by
		 * MetricSettings.formatAxisValue.
		 * 
		 * @param {any} value - raw value of the metric
		 * @return {string} the text to display.
		 */
		formatDataValue?(value:any /* Any */): string /* String */; 

		/**  
		 *  Get a color from the MetricSettings.dataColors Array.
		 * 
		 * 
		 * Override to provide a dynamic color generation scheme - must return a color in the format of
		 * of a leading hash (#) plus 6 hexadecimal digits as specified for MetricSettings.dataColors.
		 * 
		 * 
		 * 
		 * @param {number} index - index of the legend facet value to be colored
		 * @param {string} facetValueId - id of the legend facet value to be colored
		 * @param {string} purpose - purpose for the requested color - such as "legend", "line", "area", "points", etc.
		 * @return {string} 
		 */
		getDataColor?(index:number /* Number */, facetValueId:string | number | Date /* String | Number | Date */, purpose:string /* String */): string /* CSSColor */; 

		/**  
		 *  Get a gradient from the MetricSettings.dataGradients Array.
		 * 
		 * Override to provide a dynamic gradient generation scheme.
		 * 
		 * 
		 * @param {number} index - index of the legend facet value to be colored
		 * @param {string} facetValueId - id of the legend facet value to be colored
		 * @param {string} purpose - purpose for the requested gradient - such as "legend", "line", "area", "points", etc.
		 * @return {string} the gradient identifier
		 */
		getDataGradient?(index:number /* Number */, facetValueId:string | number | Date /* String | Number | Date */, purpose:string /* String */): string /* String */; 

		/**  
		 *  Specifies the color to use for data lines in the chart. No default implementation. If not
		 * defined or null is returned, the Framework will default to value of MetricSettings.getDataColor.
		 * 
		 * 
		 * Note that this method is simply an override point, since it has no default implementation -
		 * must return a color in the format of of a leading hash (#) plus 6 hexadecimal digits as
		 * specified for MetricSettings.dataColors.
		 * 
		 * 
		 * 
		 * @param {number} index - index of the legend facet value to be colored
		 * @param {string} facetValueId - id of the legend facet value to be colored
		 * @param {string} purpose - purpose for the requested color - such as "legend", "line", "area", "points", etc.
		 * @return {string} color to use for data lines or null to default to                     ${isc.DocUtils.linkForRef('method:MetricSettings.getDataColor')}
		 */
		getDataLineColor?(index:number /* Number */, facetValueId:string | number | Date /* String | Number | Date */, purpose:string /* String */): string /* CSSColor */; 

		/**  
		 *  Specifies the width to use for data lines in the chart. No default implementation. If not
		 * defined or null is returned, the line width will be set by the appropriate chart properties,
		 * such as FacetChart.dataLineProperties, FacetChart.barProperties, or FacetChart.bubbleProperties.
		 * 
		 * 
		 * Note that this method is simply an override point, since it has no default implementation.
		 * 
		 * 
		 * 
		 * @param {number} index - index of the legend facet value to target
		 * @param {string} facetValueId - id of the legend facet value to target
		 * @param {string} purpose - purpose for the requested width - such as "legend", "line", "area", "points", etc.
		 * @return {number} width to use for data lines or null to use ${isc.DocUtils.linkForRef('type:ChartType')} default
		 */
		getDataLineWidth?(index:number /* Number */, facetValueId:string | number | Date /* String | Number | Date */, purpose:string /* String */): number /* int */; 

		/**  
		 *  Return an array of the gradation values used in the current chart. Pass these values
		 * to MetricSettings.getXCoord / MetricSettings.getYCoord (depending on the orientation of the chart)
		 * to discover the coordinates where gradations are drawn.
		 * 
		 * This is only allowed to be called when FacetChart.chartDrawn fires.
		 * 
		 * 
		 * @return {Array<number>} an array of gradation values used in the current chart.
		 */
		getGradations?(): Array<number> /* Array of float */; 

		/**  
		 *  When MetricSettings.showDataPoints is true and the mouse hovers over a point, this method is called
		 * and may return HTML to show in a hover.
		 * 
		 * 
		 * @param {number} value - the value at the point
		 * @param {any} record - the record at the point
		 * @param {string} metricId - the ID of the metric at the point
		 * @return {string} String of HTML to show in a hover
		 */
		getPointHoverHTML?(value:number /* float */, record:any /* Record */, metricId:string /* String */): string /* String */; 

		/**  
		 *  Returns the X coordinate where the passed data value either was or would be drawn.
		 * For example, this would be the X coordinate where a bar would end in a bar
		 * chart.
		 * 
		 * This is only allowed to be called after FacetChart.chartDrawn fires.
		 * 
		 * If the FacetChart.chartType','chartType is
		 * "Bar", "Bubble", or "Scatter"
		 * 
		 * then the value argument should be a number. For other rectangular charts,
		 * this method expects a FacetValueMap that uniquely identifies the data cell whose
		 * X-axis coordinate is to be retrieved.
		 * 
		 * Note that when FacetChart.canZoom','canZoom is enabled, this API is valid only for
		 * data values between FacetChart.zoomStartValue','zoomStartValue and
		 * FacetChart.zoomEndValue','zoomEndValue.
		 * 
		 * 
		 * @param {number} value - the value to be drawn.
		 * @return {number} the X coordinate where the passed data value would be drawn; or null if the passed <code>FacetValueMap</code> does not identify a currently-drawn data cell.
		 */
		getXCoord?(value:number | FacetValueMap /* float | FacetValueMap */): number /* Float */; 

		/**  
		 *  Returns the Y coordinate where the passed data value either was or would be drawn.
		 * For example, this would be the Y coordinate that a line would pass through on
		 * a line chart, or the top of a column on a column chart.
		 * 
		 * This is only allowed to be called after FacetChart.chartDrawn fires.
		 * 
		 * If the FacetChart.chartType','chartType is
		 * "Area", "Bubble", "Column", "Histogram", "Line", or "Scatter"
		 * 
		 * then the value argument should be a number. For
		 * "Bar"
		 * charts this method expects a FacetValueMap that uniquely identifies the data cell
		 * whose Y-axis coordinate is to be retrieved.
		 * 
		 * 
		 * @param {number} value - the value to be drawn.
		 * @return {number} the Y coordinate where the passed data value would be drawn.
		 */
		getYCoord?(value:number /* float */): number /* float */; 

		/**  
		 *  When MetricSettings.showDataPoints is true, fires when a point is clicked on.
		 * 
		 * 
		 * @param {number} value - the value at the point
		 * @param {any} record - the record at the point
		 * @param {string} metricId - the ID of the metric at the point
		 */
		pointClick?(value:number /* float */, record:any /* Record */, metricId:string /* String */): void; 

		/**  
		 *  Method to change the current ChartType','chartType.
		 * Will redraw the chart if drawn. 
		 * Will use default settings for the new chart type for MetricSettings.stacked','stacked
		 * and MetricSettings.filled','filled if those values are null.
		 * 
		 * Note that for FacetChart.extraAxisMetrics','multi-axis charts this method changes the
		 * chartType for the main value axis only.
		 * 
		 * 
		 * @param {ChartType} chartType - new chart type
		 */
		setChartType?(chartType:ChartType): void; 

		/**  
		 *  Setter for MetricSettings.dataColors.
		 * 
		 * @param {Array<string>} dataColors - New set of data colors
		 */
		setDataColors?(dataColors:Array<string> /* Array of CSSColor */): void; 

		/**  
		 *  Method to change MetricSettings.filled','filled.
		 * Use null to apply a default value for the current ChartType','chartType.
		 * 
		 * 
		 * @param {boolean} filled - new value
		 */
		setFilled?(filled:boolean /* Boolean */): void; 

		/**  
		 *  Setter for MetricSettings.proportional.
		 * 
		 * @param {boolean} proportional - Whether the chart should now use proportional mode.
		 */
		setProportional?(proportional:boolean): void; 

		/**  
		 *  Method to change MetricSettings.stacked','stacked. Use null to
		 * apply a default value for the current ChartType','chartType.
		 * 
		 * 
		 * @param {boolean} stacked - new value
		 */
		setStacked?(stacked:boolean /* Boolean */): void; 

	} // MetricSettings

	export interface MetricSettingsStatic {
	} // MetricSettingsStatic


	/**
	 * An object representing a user-created and user-modifiable hilite, which can be created and
	 * edited with a HiliteEditor either directly or via the
	 * ListGrid.canEditHilites behavior.
	 * 
	 * See hiliting for an overview. 
	 */
	export interface Hilite {
		/** 
		 * When edited via a HiliteEditor, the value for the background color of this 
		 * hilite. If this is omitted, it will be automatically derived from the backgroundColor
		 * attribute of Hilite.cssText. When a hilite is saved in a HiliteEditor, both 
		 * attributes are set automatically.
		 * Flags: IRW, Group: hiliting
		 */
		readonly backgroundColor?: string /* String */;
		/** 
		 * (Read only) Can highlight be edited from header context menu? Setting attribute to
		 * false prevents editing. A null or true
		 * value allows editing.
		 * Flags: IR, Group: hiliting
		 */
		readonly canEdit?: boolean /* Boolean */;
		/** 
		 * (Read only) Criteria defining what records this hilite should apply to.
		 * Flags: IR, Group: hiliting
		 */
		readonly criteria?: Criteria | AdvancedCriteria;
		/** 
		 * (Read only) CSS text to be applied to cells where this hilite is applied, for example,
		 * "background-color:#FF0000"
		 * Flags: IR, Group: hiliting
		 */
		readonly cssText?: string /* CSSText */;
		/** 
		 * Whether this hilite is currently disabled.
		 * 
		 * Hilites can be programmatically enabled and disabled via DataBoundComponent.enableHilite.
		 * Flags: IRW, Group: hiliting
		 */
		readonly disabled?: boolean /* Boolean */;
		/** 
		 * (Read only) Name of the field, or array of fieldNames, this hilite should be applied to. 
		 * 
		 * If unset, hilite is applied to every field of the record.
		 * Flags: IR, Group: hiliting
		 */
		readonly fieldName?: string | Array<string> /* FieldName | Array of FieldName */;
		/** 
		 * (Read only) HTML to append to the end of cell values where this hilite is applied.
		 * Flags: IR, Group: hiliting
		 */
		readonly htmlAfter?: string /* HTML */;
		/** 
		 * (Read only) HTML to pre-pend to cell values where this hilite is applied.
		 * Flags: IR, Group: hiliting
		 */
		readonly htmlBefore?: string /* HTML */;
		/** 
		 * (Read only) Value to show in place of the actual value from the record, for a record that matches
		 * this hilite.
		 * 
		 * This can be used to take ranges of numeric values and simplify them to "Low", "Medium",
		 * "High" or similar textual values, translate very small or very large values to "Outlier" or
		 * "Negligible", and similar use cases.
		 * Flags: IR, Group: hiliting
		 */
		readonly htmlValue?: string /* String */;
		/** 
		 * (Read only) URL of an icon to show when this hilite is applied to a cell. Position of the icon 
		 * is controlled by DataBoundComponent.hiliteIconPosition or 
		 * ListGridField.hiliteIconPosition.
		 * Flags: IR, Group: hiliting
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * (Read only) Unique id for this hilite definition. 
		 * 
		 * For hilites that include Hilite.criteria this is not required.
		 * 
		 * If you are explicitly marking records for hiliting, set
		 * DataBoundComponent.hiliteProperty on the record to this id.
		 * Flags: IR, Group: hiliting
		 */
		readonly id?: string /* String */;
		/** 
		 * (Read only) HTML which replaces the cell's textual value where this hilite is applied.
		 * 
		 * Note that sorting, filtering, etc behavior will still operate on the underlying value.
		 * For example, if there is a date field with the FilterEditor enabled, the default search
		 * interface will still offer date-range based filtering even if hilites have caused values
		 * to be displayed as text such as "current" or "past due".
		 * Flags: IR, Group: hiliting
		 */
		readonly replacementValue?: string /* HTML */;
		/** 
		 * When edited via a HiliteEditor, the value for the foreground color of this 
		 * hilite. If this is omitted, it will be automatically derived from the textColor
		 * attribute of Hilite.cssText. When a hilite is saved in a HiliteEditor, both 
		 * attributes are set automatically.
		 * Flags: IRW, Group: hiliting
		 */
		readonly textColor?: string /* String */;
		/** 
		 * User-visible title for this hilite. Used for interfaces such as menus that can enable or
		 * disable hilites.
		 * Flags: IRW, Group: hiliting
		 */
		readonly title?: string /* String */;
	} // Hilite

	export interface HiliteStatic {
	} // HiliteStatic


	/**
	 * Represents the position of a Portlet within a PortalLayout, indicating the
	 * column, row, and position within the row. 
	 */
	export interface PortalPosition {
		/** 
		 * (Read only) The column number occupied by a Portlet within a PortalLayout.
		 * Flags: IR
		 */
		readonly colNum?: number /* int */;
		/** 
		 * (Read only) The position occupied by a Portlet within a PortalLayout row
		 * (generally 0, unless there is more than one Portlet in the row).
		 * Flags: IR
		 */
		readonly position?: number /* int */;
		/** 
		 * (Read only) The row number occupied by a Portlet within a PortalLayout column.
		 * Flags: IR
		 */
		readonly rowNum?: number /* int */;
	} // PortalPosition

	export interface PortalPositionStatic {
	} // PortalPositionStatic


	/**
	 * A Record is an ordinary JavaScript Object with properties that are treated as data to
	 * be displayed and edited by a DataBoundComponent. 
	 * 
	 * DataBoundComponents have a concept of DataBoundComponent.fields','named fields,
	 * where values for each field are found under the same-named property in a Record.
	 * 
	 * A Record is always an ordinary JavaScript Object regardless of how the record is 
	 * loaded (static data, java server, XML web service, etc), and so supports the
	 * normal behaviors of JavaScript Objects, including accessing and assigning to properties
	 * via dot notation:
	 * 
	 * var fieldValue = record.fieldName;
	 * record.fieldName = newValue;
	 * 
	 * 
	 * The concept of working with Records is common to all DataBoundComponents, although
	 * individual DataBoundComponents may work with singular records (DynamicForm) or
	 * may work with lists (ListGrid), trees (TreeGrid), or cubes
	 * (CubeGrid) of records.
	 * 
	 * Individual DataComponents may also look for special properties on Records which
	 * control styling or behavior for those records, such as
	 * ListGrid.recordEditProperty','record.canEdit. 
	 */
	export interface Record {
	} // Record

	export interface RecordStatic {
	} // RecordStatic


	/**
	 * Defines one level of headers shown above the event area in a Timeline. 
	 */
	export interface HeaderLevel {
		/** 
		 * (Read only) If set, the width for each of the spans in this headerLevel. Note that this setting only 
		 * has an effect on the innermost headerLevel.
		 * Flags: IR
		 */
		readonly headerWidth?: number /* integer */;
		/** 
		 * (Read only) Optional sparse array of titles for the spans on this headerLevel. If a given span in this
		 * headerLevel has a corresponding entry in this array, it will be used as the span's title.
		 * 
		 * If not specified, default titles are generated (eg "Q1" for unit "quarter") and then passed
		 * into the HeaderLevel.titleFormatter','formatter function, if one has been installed,
		 * for further customization.
		 * Flags: IR
		 */
		readonly titles?: Array<string> /* Array of String */;
		/** 
		 * (Read only) Unit of time shown at this level of header.
		 * Flags: IR
		 */
		readonly unit?: TimeUnit;

		/* Instance Method Overrides */
		/**  
		 *  An optional function for providing formatted HTML for the title of a given span in this 
		 * HeaderLevel. If unset, Timelines use the HeaderLevel.titles','titles array, if one is
		 * set, or generate default titles based on the unit-type and date-range.
		 * 
		 * Note that this method will not run for spans in this headerLevel that have a non-null entry 
		 * in the HeaderLevel.titles','titles array.
		 * 
		 * 
		 * @param {HeaderLevel} headerLevel - a reference to this headerLevel
		 * @param {Date} startDate - the start of the date-range covered by this span in this level
		 * @param {Date} endDate - the end of the date-range covered by this span in this level - may be null
		 * @param {string} defaultValue - the default title as generated by the Timeline
		 * @param {Calendar} viewer - a reference to the Calendar or Timeline
		 * @return {string} The formatted title for the values passed in
		 */
		titleFormatter?(headerLevel:HeaderLevel, startDate:Date, endDate:Date, defaultValue:string /* String */, viewer:Calendar): string /* HTMLString */; 

	} // HeaderLevel

	export interface HeaderLevelStatic {
	} // HeaderLevelStatic


	/**
	 * Encapsulates a client/server RPC request. You'll need to provide an instance of this class (or a
	 * constructor for it) to the RPCManager.sendRequest method. If you use the 
	 * RPCManager.send method, an instance of RPCRequest will be created for you. 
	 */
	export interface RPCRequest {
		/** 
		 * Overrides RPCManager.actionURL for this request only. If you're using queuing, note that queues
		 * as per-URL - in other words all RPCRequests in a queue must go to a single URL. If you attempt
		 * to send a request with an actionURL that is different from those already in the queue, it
		 * will be sent to the server separately, ahead of the queue, and a warning will be logged to
		 * the Developer Console.
		 * Flags: IRW
		 */
		readonly actionURL?: string /* URL */;
		/** 
		 * (Read only, Advanced) Advanced flag to avoid a potential memory leak in Internet Explorer 9 for requests
		 * with JSON formatted responses.
		 * 
		 * This attribute may be set to false to explicitly enable the 
		 * workaround described RPCManager.allowIE9Leak','here for this request, 
		 * avoiding a potential memory leak in Internet Explorer 9.
		 * 
		 * This workaround has a limitation in that if parsing the JSON response generates
		 * certain object types including JavaScript Date or function
		 * objects, attempts to interact with these objects can subsequently lead to a 
		 * JavaScript error with the message "Can't execute code from a freed script".
		 * 
		 * This workaround therefore may not be suitable for all transactions or dataSources
		 * within a given application.
		 * 
		 * This property may also be set globally within an application (via 
		 * RPCManager.allowIE9Leak)_.
		 * 
		 * Note: This memory leak and workaround is discussed further in the online 
		 * <a href="http://forums.smartclient.com/showthread.php?t=8159">SmartClient FAQ</a>.
		 * Flags: IRA
		 */
		readonly allowIE9Leak?: boolean;
		/** 
		 * (Advanced) For xmlHttp transport + httpMethod: "GET" only, set to true to force a conditional
		 * GET request even if the browser thinks it has a current cached response.
		 * Flags: IRWA
		 */
		readonly bypassCache?: boolean /* Boolean */;
		/** 
		 * If you expect to receive a response to your RPC request, you can specify a callback that
		 * will be called with an instance or RPCResponse class as sent by the server. Queuing does
		 * not affect callbacks in any way - your specified callback will be invoked for each
		 * RPCRequest that contained a callback regardless of whether the request was sent as part of a
		 * queue or not.
		 * 
		 * Note that if the request encounters an error (such as 500 server error), by default the
		 * callback will not be fired, instead, RPCManager.handleError is called to
		 * invoke the default system-wide error handling. Set RPCRequest.willHandleError:true to have your
		 * callback invoked regardless of whether there are errors, however, make sure your callback
		 * properly handles malformed responses when RPCResponse.status is non-zero. See the
		 * errorHandling','error handling overview for more details.
		 * Flags: IRW, Group: errorHandling
		 */
		readonly callback?: any /* RPCCallback */;
		/** 
		 * For use only with the RPCTransport','scriptInclude transport, this attribute
		 * specifies the name of the URL parameter which is used to specify the callback function that
		 * the server is expected to call by writing out JavaScript code. The actual function to call
		 * is automatically generated and differs for every request (to allow concurrency).
		 * 
		 * For example, with callbackParam set to it's default value of "callback", the
		 * server might be contacted with a URL like:
		 * 
		 * loadData?callback=isc_scriptIncludeCallback_5
		 * 
		 * .. then the server's response should look like:
		 * 
		 * isc_scriptIncludeCallback_5({ .. data .. });
		 * 
		 * The name "isc_scriptIncludeCallback_5" is automatically generated and will differ each time
		 * the server is contacted.
		 * 
		 * SmartClient makes of this server-provided callback mechanism, then calls
		 * RPCRequest.callback normally.
		 * 
		 * rpcRequest.callbackParam is ignored by all transport other than
		 * scriptInclude.
		 * Flags: IRW
		 */
		readonly callbackParam?: string /* String */;
		/** 
		 * An object to be held onto for the duration of the RPC turnaround to track
		 * application-specific context.
		 * 
		 * When an RPC turnaround completes, the clientContext is available in the
		 * Callbacks.RPCCallback','RPCCallback as rpcResponse.clientContext. The
		 * clientContext is never sent to the server.
		 * 
		 * The clientContext is useful for holding onto state that will be used when the
		 * Callbacks.RPCCallback','RPCCallback fires, such as the name of a component that will receive the
		 * returned data.
		 * Flags: IRW
		 */
		readonly clientContext?: any /* Object */;
		/** 
		 * (Advanced) For use during relogin','Relogin, this property marks this request an attempt to
		 * login, therefore a response containing the loginRequiredMarker is a normal
		 * condition and should result in the status code RPCResponse.STATUS_LOGIN_INCORRECT
		 * rather than a call to RPCManager.loginRequired','loginRequired().
		 * 
		 * It is not required to set containsCredentials, however, it does typically
		 * simplify relogin logic by separating the handling of RPCs that are login attempts from RPCs
		 * that are not.
		 * Flags: IRWA, Group: relogin
		 */
		readonly containsCredentials?: boolean /* Boolean */;
		/** 
		 * Valid with the xmlHttpRequest transport only and only when
		 * RPCRequest.httpMethod is set to "POST".
		 * Flags: IRW
		 */
		readonly contentType?: string /* String */;
		/** 
		 * This attribute specifies the payload of the RPCRequest. 
		 * 
		 * When using the iscServer','SmartClient server,
		 * any JavaScript simple type or arbitrarily nested set of Objects and Arrays can be sent
		 * to server and automatically translated to Java Objects. 
		 * 
		 * 
		 * 
		 * Here are the 
		 * mapping of JavaScript types to their corresponding server object types:
		 * 
		 * <table class='normal' border='1'>
		 * <tr><td>JS Type</td> <td>Java Type</td></tr>
		 * <tr><td>Object: {}</td> <td>Map</td></tr>
		 * <tr><td>Array: []</td> <td>List</td></tr>
		 * <tr><td>String</td> <td>String</td></tr>
		 * <tr><td>Number</td> <td>Long|Double</td></tr>
		 * <tr><td>Boolean</td> <td>Boolean</td></tr>
		 * <tr><td>Date</td> <td>java.util.Date</td></tr>
		 * <tr><td>String</td> <td>com.smartgwt.client.types.ValueEnum</td></tr>
		 * 
		 * </table>
		 * 
		 * Note that the order of keys/values in the Maps created on the server is not guaranteed
		 * because JavaScript Object literals do not guarantee order.
		 * 
		 * When using JPA or Hibernate Java value used can be affected by the Java Bean declaration. 
		 * See dsRequestBeanTypes for details.
		 * 
		 * Server->client conversion follows this table as well, with some extras. See the toJS()
		 * method on JSTranslater in the server documentation for a description of additional
		 * behaviors.
		 * 
		 * When not communicating with the SmartClient server, rpcRequest.data
		 * becomes simple HTTP parameters or an HTTP request body - see RPCRequest.useSimpleHttp
		 * for details.
		 * Flags: IRW
		 */
		readonly data?: string | any | any /* String | Record | Object */;
		/** 
		 * (Advanced) If enabled, causes the RPCRequest to download the requested resource as a file, either 
		 * showing the browser's Save dialog or displaying the file-content in 
		 * RPCRequest.downloadToNewWindow','a new browser window.
		 * 
		 * Setting this attribute to true means that no callback will be fired and implies that the 
		 * request will silently use RPCRequest.transport','transport: "hiddenFrame".
		 * Flags: IRWA
		 */
		readonly downloadResult?: boolean /* Boolean */;
		/** 
		 * (Advanced) When RPCRequest.downloadResult','downloadResult is true, setting this attribute to
		 * true causes the content of the downloaded file to be displayed in a new browser window.
		 * Flags: IRWA
		 */
		readonly downloadToNewWindow?: boolean /* Boolean */;
		/** 
		 * (Advanced) This works similarly to RPCRequest.serverOutputAsString except the resulting String
		 * is automatically evaluated as JavaScript. The result of the evaluation is then passed to
		 * any specified RPCRequest.callback as RPCResponse.data.
		 * 
		 * This feature can be used to dynamically load new application modules into a running
		 * application. An RPCRequest with evalResult enabled can be used to fetch a
		 * static .js file or JavaScript dynamically generated by the server. The returned JavaScript
		 * can contain anything that a JavaScript file loaded at init time can contain, including new
		 * views and new SmartClient class definitions.
		 * 
		 * Example usage with RPCManager.sendRequest:
		 * 
		 * isc.RPCManager.sendRequest({
		 * evalResult:true,
		 * actionURL:"js/loadLabel.js",
		 * evalVars:{var1:"A Value"}
		 * });
		 * 
		 * This call would execute the code from loadLabel.js, and make the variable
		 * var1 available to that code. Therefore if the .js file contained this code:
		 * 
		 * isc.Label.create({
		 * contents:var1
		 * })
		 * 
		 * A label would be created with contents set to the value of var1 - the string
		 * "A Value".
		 * 
		 * 
		 * This feature relies on the XMLHttpRequest object which can be disabled by end-users in some
		 * supported browsers. See platformDependencies for more information.
		 * Flags: IRWA, Group: viewLoading
		 */
		readonly evalResult?: boolean /* Boolean */;
		/** 
		 * (Advanced) If you've set RPCRequest.evalResult : true, then the property values of this object
		 * will be available in the evaluation scope of the result under the variable names
		 * specified by the property names. 
		 * 
		 * So e.g. if evalVars is: {foo: "bar"} then a reference to the
		 * variable foo in the result will evaluate to "bar".
		 * Flags: IRWA, Group: viewLoading
		 */
		readonly evalVars?: any /* Object */;
		/** 
		 * HTTP headers to send, as a Object mapping Header name -> Header value, eg
		 * { "Content-Type" : "text/xml" }
		 * 
		 * Valid with the xmlHttpRequest RPCRequest.transport','transport only.
		 * Flags: IRW
		 */
		readonly httpHeaders?: any /* Object */;
		/** 
		 * Selects the HTTP method that will be used for the request. Typical values are "POST" and
		 * "GET".
		 * 
		 * The more obscure "PUT", "DELETE" and "HEAD" methods are also valid, however, none of these
		 * are supported by the Safari browser previous to version 3.0.
		 * Flags: IRW
		 */
		readonly httpMethod?: string /* String */;
		/** 
		 * (Read only) The proxy URL to use for this request (if RPCRequest.useHttpProxy is set for this
		 * request). If unset, the value of RPCManager.httpProxyURL will be used instead.
		 * Flags: IR
		 */
		readonly httpProxyURL?: string /* String */;
		/** 
		 * (Advanced) When set to true, no reply is expected from the server. However, if a reply is received, it will
		 * be processed.
		 * 
		 * Note: setting this to true, forces RPCRequest.sendNoQueue to true for
		 * this request.
		 * Flags: IRWA
		 */
		readonly ignoreTimeout?: boolean /* Boolean */;
		/** 
		 * (Advanced) If enabled, the server omits any key/value pairs in map that have null values from the
		 * response. This can reduce the size of the response when many fields have null values.
		 * 
		 * To enable this globally for all responses you can set RPCManager.omitNullMapValuesInResponse
		 * in server_properties','server.properties.
		 * Flags: IRWA
		 */
		readonly omitNullMapValuesInResponse?: boolean /* Boolean */;
		/** 
		 * Values to be sent as simple HTTP params, as a JavaScript Object where each property/value
		 * pair will become an HTTP parameter name and value. These parameters are then accessible on
		 * the server, for example, using servletRequest.getParameter(paramName) in Java Servlets. 
		 * 
		 * Array-valued parameters will be submitted as multiple instances of the same parameter,
		 * similar to an HTML form with a multi-select (?paramName=value1&amp;paramName=value2 ...),
		 * accessible as getParameterValues(paramName) in Java Servlets. Any non-atomic type, such as
		 * an Object, will be serialized to <a href='http://www.json.org/' target='_blank'>JSON</a> by the
		 * JSONEncoder. If this isn't desirable, serialize the data in advance so that the
		 * value provided in rpcRequest.params is a String.
		 * 
		 * Note that this API is primarily used in combination with RPCRequest.useSimpleHttp -
		 * when contacting the SmartClient Server, use RPCRequest.data instead, which provides
		 * full JavaScript &lt;-&gt; Java translation of arbitrary structures.
		 * rpcRequest.params can also be used with the SmartClient Server, where it
		 * provides an an opportunity to send additional data aside from the main
		 * RPCRequest.data payload. This is useful for adding data to DataSource requests which
		 * will be kept separate from the automatically sent DataSource data, or for making parts of
		 * the request visible in the URL for HTTP-level logging or layer 4 switches.
		 * 
		 * Note that in contrast to RPCRequest.data object, the data in
		 * rpcRequest.params is not deserialized by the SmartClient server, and
		 * all values arrive on the server as String type (like HTTP parameters always do).
		 * 
		 * 
		 * The params value can also be specified as a componentID or component instance that provides
		 * a method getValues() that returns an Object containing parameter names and values.
		 * SmartClient components DynamicForm, ValuesManager are two such
		 * classes. Lastly, you may specify the ID of a native form element (retrievable via
		 * getElementById()) and the params will be populated from there. If there is an error
		 * resolving your params directive, it will be logged to the Developer Console.
		 * 
		 * 
		 * Note: The params are submitted once per http transaction. If you are using 
		 * RPCManager.startQueue','request queuing to bundle multiple RPCRequests or DSRequests
		 * into a single HTTP turnaround, the params from the various RPCRequests will be merged,
		 * with the later-queued transactions winning on parameter name collisions. A warning will be
		 * logged in the Developer Console if multiple RPCRequests specified params.
		 * Flags: IRW
		 */
		readonly params?: any /* Object */;
		/** 
		 * (Advanced) When set to true, assume the request is not going to the SmartClient server, and hence send
		 * a simple HTTP request. Values specified in RPCRequest.params are sent to to the
		 * server as HTTP request parameters. If RPCRequest.httpMethod method is POST and
		 * RPCRequest.data is supplied, it is assumed to be a string to post as the HTTP
		 * requestBody.
		 * 
		 * Setting this to true automatically defaults RPCRequest.serverOutputAsString to true
		 * as well.
		 * Flags: IRWA
		 */
		readonly paramsOnly?: boolean;
		/** 
		 * Overrides RPCManager.defaultPrompt for this request only. If you're using queuing, note that the
		 * prompt string from the first request in the queue is the one that is shown to the user.
		 * Flags: IRW, Group: rpcPrompt
		 */
		readonly prompt?: string /* HTMLString */;
		/** 
		 * Controls the cursor shown when RPCManager.promptStyle is set to
		 * "cursor" for this request only. Defaults to RPCManager.promptCursor.
		 * Flags: IRW, Group: rpcPrompt
		 */
		readonly promptCursor?: string /* String */;
		/** 
		 * (Advanced) Overrides RPCManager.promptDelay for this request only. Defaults to RPCManager.promptDelay.
		 * 
		 * If you're using queuing, note that the promptDelay of the first request is used for the entire queue.
		 * Flags: IRWA, Group: rpcPrompt
		 */
		readonly promptDelay?: number;
		/** 
		 * Controls the prompt style for this request only. Defaults to
		 * RPCManager.promptStyle.
		 * Flags: IRW, Group: rpcPrompt
		 */
		readonly promptStyle?: PromptStyle;
		/** 
		 * (Advanced) When set to true, this request is sent to the server immediately, bypassing any current queue.
		 * Flags: IRWA
		 */
		readonly sendNoQueue?: boolean /* Boolean */;
		/** 
		 * (Advanced) Setting this flag makes the body of the HTTP response available as a String in the
		 * RPCRequest.callback as RPCResponse.data. This is typically only useful if you
		 * are sending a request that will not be received by the SmartClient Java Server,
		 * however in that case, set RPCRequest.useSimpleHttp:true instead, which implies
		 * serverOutputAsString:true.
		 * 
		 * serverOutputAsString:true allows you to, for example, load the contents of
		 * static files off your webserver into a string for processing on the client with no server
		 * support. The RPCRequest.actionURL must be in the same domain as the current page for
		 * this to work.
		 * 
		 * This feature relies on the XMLHttpRequest object which can be disabled by end-users in some
		 * supported browsers. See platformDependencies for more information.
		 * 
		 * Generally this API is used for either nonJavaBackend','non-Java backends 
		 * or for advanced usage such as content that requires processing before it can be used in
		 * SmartClient components (such as client-side web scraping). Note that SmartClient provides
		 * higher-level APIs for loading common types of data, see eg HTMLFlow for HTML content,
		 * ViewLoader for loading SmartClient components, XMLTools.loadXML for loading
		 * XML, RPCRequest.evalResult for loading <a href='http://www.json.org/' target='_blank'>JSON</a>, and
		 * DataSource for loading structured data in various formats.
		 * Flags: IRWA
		 */
		readonly serverOutputAsString?: boolean /* Boolean */;
		/** 
		 * Overrides RPCManager.showPrompt for this request only.
		 * 
		 * If you're using queuing, note that if any of the requests in the queue specify
		 * showPrompt:true, then a prompt will be shown for the entire queue with the prompt text of
		 * the first request in the queue to specify a custom prompt if promptStyle is set to "dialog".
		 * 
		 * If promptStyle is set to "cursor" for the request that specified showPrompt: true, then the
		 * entire queue uses the "cursor" style for the prompt.
		 * Flags: IRW, Group: rpcPrompt
		 */
		readonly showPrompt?: boolean /* Boolean */;
		/** 
		 * (Advanced) If RPCRequest.evalResult is set, setting this property to true causes
		 * Canvas.autoDraw to be set to false for the duration of the result evaluation -
		 * which is generally what you want if you're returning new components from the server.
		 * 
		 * This also effects components loaded via the RPCManager.loadScreen API.
		 * Flags: IRWA
		 */
		readonly suppressAutoDraw?: boolean /* Boolean */;
		/** 
		 * (Advanced) Sets the timeout on this request. Default is to use RPCManager.defaultTimeout. 
		 * 
		 * If you're using RPCManager.startQueue','queuing, note that the timeout setting derived
		 * from the last request in the queue is used for the entire queue. If you want to override
		 * the timeout for the queue, make sure to set your override at least on the last request in
		 * the queue.
		 * 
		 * For the "xmlHttpRequest" RPCRequest.transport','transport, this timeout can only happen
		 * if the server actually fails to respond within the specified number of milliseconds. For
		 * the "hiddenFrame" transport, this timeout will occur for non-200 (HTTP_OK) responses.
		 * 
		 * If timeout is set to zero, the RPCManager will not enforce a timeout for this
		 * request. However, note that all browsers enforce their own timeouts on HTTP requests, and
		 * may have different timeouts for different kinds of failures (no response at all from server,
		 * hung response after receiving headers, hung response after receiving partial data, etc).
		 * Also, intervening web proxies or firewalls may impose timeouts of their own.
		 * 
		 * As a rough rule of thumb, if your server response will have a lengthy pause before data
		 * begins to be sent, 1-2 minutes is the maximum allowable pause for a public site and still may
		 * not work for a minority of users, but up to 4 minutes may be allowable in a controlled
		 * environment (intranet or extranet with well-known user base).
		 * 
		 * Above these limits, your code should return some kind of immediate response to the browser,
		 * then kick off a server-side process to complete processing. The browser can then either
		 * poll for completion, or use a server-push notification system such as SmartClient Real-Time
		 * Messaging (see <a href='http://smartclient.com/product' target='_blank'>http://smartclient.com/product</a>).
		 * Flags: IRWA
		 */
		readonly timeout?: number /* int */;
		/** 
		 * (Advanced) Selects the transport used for this RPCRequest. If unset, the value of
		 * RPCManager.defaultTransport will be used.
		 * 
		 * If you're using queueing, note that all requests in the queue must use the same transport.
		 * If you attempt to send a request via a different transport than those that are currently on
		 * the queue, it will be sent to the server separately, ahead of the queue, and a warning will
		 * be logged to the Developer Console.
		 * 
		 * If you specify an unknown transport, an error will be logged to the DeveloperConsole and
		 * RPCManager.defaultTransport will be used instead.
		 * 
		 * If you specify the xmlHttpRequest transport and it is not available, a warning will be
		 * logged to the Developer Console and the RPCManager will attempt to use the
		 * hiddenFrame transport instead for this request. Note that some features like
		 * RPCRequest.serverOutputAsString require the xmlHttpRequest transport and will not
		 * work if the xmlHttpRequest transport is unavailable (this can happen if the end user is
		 * using Internet Explorer and has disabled ActiveX). You can check whether or not the
		 * xmlHttpRequest transport is currently available by calling
		 * RPCManager.xmlHttpRequestAvailable.
		 * Flags: IRWA
		 */
		readonly transport?: RPCTransport;
		/** 
		 * (Read only) Indicates whether this request should use the HttpProxyServlet in order to enable contacting
		 * hosts other than the origin server (available only in Pro Edition or better).
		 * 
		 * When various UI components issues requests automatically, or when a call to
		 * RPCManager.sendProxied is made, the HttpProxy will automatically be used for a URL
		 * that starts with "http" and uses a hostname other than "localhost" or
		 * window.location.hostname, or if the port number differs.
		 * 
		 * rpcRequest.useHttpProxy should only be used to force requests to go through the
		 * HttpProxy when the above rules don't work, or to avoid using the HttpProxy when contacting
		 * hosts that allow cross-site calls via the
		 * <a href='http://www.google.com/search?q=http+access+control' target='_blank'>Http Access Control</a>
		 * standard.
		 * 
		 * You can also set RPCManager.useHttpProxy:false to avoid ever using the
		 * HttpProxyServlet.
		 * Flags: IR
		 */
		readonly useHttpProxy?: boolean;
		/** 
		 * (Advanced) When set to true, assume the request is not going to the SmartClient server, and hence send
		 * a simple HTTP request that does not use SmartClient-specific request encoding.
		 * 
		 * Values specified in RPCRequest.params are sent to to the server as HTTP request
		 * parameters. If RPCRequest.httpMethod is "GET", parameters appear in the request URL, otherwise
		 * if httpMethod is "POST", parameters are encoded in the request body (exactly like an HTML form
		 * does). These parameters are then accessible via typical server-side APIs for retrieving
		 * HTTP parameters, eg, servletRequest.getParameter(paramName) in Java Servlets. 
		 * 
		 * Note that if RPCRequest.httpMethod method is POST and RPCRequest.data is supplied,
		 * RPCRequest.data is assumed to be a string to post as the HTTP request body, and
		 * RPCRequest.params are sent as URL parameters instead. This usage is for sending
		 * custom request bodies such as the XML payloads used for SOAP. In this case,
		 * RPCRequest.contentType is typically also set to indicate the content type of the
		 * request body.
		 * 
		 * Setting useSimpleHttp to true also automatically sets
		 * RPCRequest.serverOutputAsString to true as well.
		 * Flags: IRWA
		 */
		readonly useSimpleHttp?: boolean /* Boolean */;
		/** 
		 * (Advanced) Selects the default http transport for this RPCRequest. If set to true, this request will use
		 * XMLHttpRequest for the transport to the server. If set to false it will use a hidden frame. If
		 * left unset, the transport mechanism is determined from the RPCManager default set in 
		 * RPCManager.useXmlHttpRequest
		 * 
		 * If you're using queueing, note that all requests in the queue must use the same transport.
		 * If you attempt to send a request via a different transport than those that are currently on
		 * the queue, it will be sent to the server separately, ahead of the queue, and a warning will
		 * be logged to the Developer Console.
		 * 
		 * If you specify true for this attribute and XMLHttp is not available, a warning
		 * will be logged to the Developer Console and RPCManager will attempt to use the frames
		 * transport for this request. Note that some features like
		 * RPCRequest.serverOutputAsString require the XMLHttp transport and will not work if the
		 * XMLHttp transport is unavailable (this can happen if the end user is using Internet Explorer
		 * and has disabled ActiveX). You can query the availability of XMLHttp by calling
		 * RPCManager.xmlHttpRequestAvailable
		 * Flags: IRWA
		 */
		readonly useXmlHttpRequest?: boolean;
		/** 
		 * With willHandleError:false, rpcResponses that indicate an error go through centralized
		 * handling in the RPCManager and rpcRequest.callback is never invoked.
		 * 
		 * Setting willHandleError:true means that your rpcRequest.callback will receive rpcResponses
		 * that have an error status and must handle them.
		 * 
		 * See also the error handling section in the RPCManager docs.
		 * Flags: IRW, Group: errorHandling
		 */
		readonly willHandleError?: boolean /* Boolean */;
		/** 
		 * (Read only, Advanced) In browsers that support <a href='http://www.w3.org/TR/cors/' target='_blank'>Cross-Origin Resource Sharing</a>
		 * and <a href='http://caniuse.com/#feat=xhr2' target='_blank'>XMLHttpRequest 2</a>,
		 * and where the service at the RPCRequest.actionURL','actionURL allows the origin to send credentials
		 * (see <a href='http://www.w3.org/TR/cors/#access-control-allow-credentials-response-header' target='_blank'>Access-Control-Allow-Credentials</a>),
		 * should <a href='http://www.w3.org/TR/cors/#user-credentials' target='_blank'>user credentials</a> such as cookies,
		 * HTTP authentication, and client-side SSL certificates be sent with the actual CORS request?
		 * 
		 * This setting only applies when the request RPCRequest.transport','transport is
		 * "xmlHttpRequest".
		 * 
		 * 
		 * Note that Internet Explorer 10 and 11 do not send cookies as part of user credentials:
		 * <a href='https://connect.microsoft.com/IE/Feedback/Details/759587/' target='_blank'>IE10 doesn't support cookies on cross origin XMLHttpRequest withCredentials=true</a>.
		 * Flags: IRA
		 */
		readonly withCredentials?: boolean /* Boolean */;
	} // RPCRequest

	export interface RPCRequestStatic {
		/** 
		 * If true, an image is shown to the right of the cursor when RPCRequest.promptStyle is
		 * set to "cursor", otherwise the cursor itself is modified via css to the value of
		 * RPCRequest.promptCursor.
		 * 
		 * If left unspecified, the default value is set by RPCManager.useCursorTracker.
		 * Flags: IRW, Group: rpcPrompt
		 */
		readonly useCursorTracker?: boolean;
	} // RPCRequestStatic


	/**
	 * Sets up a real inheritance structure for Javascript objects.
	 * We separate out class objects from prototypes, so each gets its own inheritance chain. 
	 * This allows us to set up superclass calls, maintain class vs. instance variables and more!
	 * 
	 * The ClassFactory is a singleton object that holds the miscellaneous pieces of our inheritance
	 * mechanism.
	 * 
	 * Your main interaction with the ClassFactory is to create new classes:
	 * ClassFactory.defineClass("MyClass", "mySuperClass"); 
	 */
	export interface ClassFactory {
	} // ClassFactory

	export interface ClassFactoryStatic {

	/* Methods */
		/**  
		 * 
		 * Create a new SmartClient class, which can then be used to create instances of this
		 * object type, via Class.create.
		 * 
		 * The new Class is returned by defineClass, is available as
		 * isc.ClassName and is also available in global scope if not in
		 * isc','portal mode. Typically, Class.addProperties is then
		 * called to establish different defaults in the new class, or to add methods. For
		 * example:
		 * 
		 * isc.defineClass("MyListGrid", "ListGrid").addProperties({
		 * headerHeight : 40, // change default for listGrid.headerHeight
		 * 
		 * // override listGrid.recordClick
		 * recordClick : function (viewer, record) { 
		 * isc.say(record.description);
		 * }
		 * })
		 * isc.MyListGrid.create(); // create an instance of the new class
		 * 
		 * 
		 * See also Class.Super','Super() for calling superclass methods.
		 * 
		 * NOTE: isc.defineClass() also creates a new function
		 * isA','class:isA.ClassName() object for identifying instances of
		 * this Class.
		 * 
		 * 
		 * @param {string} className - Name for the new class.
		 * @param {Class} superClass - Optional SuperClass Class object or name
		 * @return {Class} Returns the new Class object.
		 */
		defineClass(className:string /* String */, superClass?:Class): Class; 

		/**  
		 * 
		 * Given a class name, return a pointer to the Class object for that class
		 * 
		 * 
		 * @param {string} className - name of a class
		 * @return {Class} Class object, or null if not found
		 */
		getClass(className:string /* String */): Class; 

		/**  
		 * 
		 * Given the name of a class, create an instance of that class.
		 * 
		 * 
		 * @param {string} className - Name of a class. (ClassObject) Actual class object to use.
		 * @param {any} props - Properties to apply to the instance.
		 * @param {any} props2 - More properties to apply to the instance.
		 * @param {any} props3 - Yet more properties to apply to the instance.
		 * @return {Class} Pointer to the new class.
		 */
		newInstance(className:string /* String */, props?:any /* Object */, props2?:any /* Object */, props3?:any /* Object */): Class; 

		/**  
		 * 
		 * Intentionally clobber an existing SmartClient Class, if it already exists. Works 
		 * identically to ClassFactory.defineClass, except that no warning is logged to the
		 * console.
		 * 
		 * 
		 */
		overwriteClass(): void; 

	} // ClassFactoryStatic


	/**
	 * Defines a simple gradient vertical gradient between Gradient.startColor','two
	 * Gradient.endColor','colors, or using Gradient.colorStops','colorStops. See
	 * SimpleGradient, LinearGradient and RadialGradient for further
	 * properties to define more advanced gradients. 
	 */
	export interface Gradient {
		/** 
		 * (Read only) An array of color stops for this gradient.
		 * Flags: IR
		 */
		readonly colorStops?: Array<ColorStop> /* Array of ColorStop */;
		/** 
		 * (Read only) An end color for the gradient. If both Gradient.startColor','startColor and endColor
		 * are set then Gradient.colorStops','colorStops is ignored.
		 * Flags: IR
		 */
		readonly endColor?: string /* CSSColor */;
		/** 
		 * (Read only) Identifier which can be used by one or more DrawItems when gradient is assigned
		 * to DrawPane.gradients. The ID property is optional when gradient is assigned directly
		 * to a DrawItem.
		 * 
		 * The ID must be unique within DrawPane.gradients if defined.
		 * Flags: IR
		 */
		readonly id?: string /* Identifier */;
		/** 
		 * (Read only) A start color for the gradient. If both startColor and Gradient.endColor','endColor
		 * are set then Gradient.colorStops','colorStops is ignored.
		 * Flags: IR
		 */
		readonly startColor?: string /* CSSColor */;
	} // Gradient

	export interface GradientStatic {
	} // GradientStatic


	/**
	 * Flags for XML serialization 
	 */
	export interface SerializationContext {
		/** 
		 * (Read only) Enables flat serialization mode, as described for DSRequest.useFlatFields.
		 * Flags: IR
		 */
		readonly useFlatFields?: boolean;
	} // SerializationContext

	export interface SerializationContextStatic {
	} // SerializationContextStatic


	/**
	 * Holds the information of a drawing command. 
	 */
	export interface DrawShapeCommand {
		/** 
		 * (Read only) The command arguments. The number of arguments and their types depend on this command's DrawShapeCommand.type','type.
		 * Flags: IR
		 */
		readonly args?: Array<any> /* Array */;
		/** 
		 * (Read only) The command type.
		 * Flags: IR
		 */
		readonly type?: DrawShapeCommandType;
	} // DrawShapeCommand

	export interface DrawShapeCommandStatic {
	} // DrawShapeCommandStatic


	/**
	 * Defines a set of properties that specify how the tree will be explored by Tree.discoverTree 
	 */
	export interface DiscoverTreeSettings {
		/** 
		 * (Read only) When heuristically finding a property that appears to contain child objects, the childrenMode
		 * determines how to chose the property that appears to contain child objects
		 * Flags: IR
		 */
		readonly childrenMode?: ChildrenPropertyMode;
		/** 
		 * For string leaf nodes (if allowed), the name of the property to store the string under
		 * in the auto-created object
		 * Flags: IRW
		 */
		readonly nameProperty?: string /* String */;
		/** 
		 * What to rename the array of children once discovered.
		 * If not set, it will default to the value of Tree.childrenProperty inside discoverTree()
		 * Flags: IRW
		 */
		readonly newChildrenProperty?: string /* String */;
		/** 
		 * Determines how to scan for the Tree.childrenProperty
		 * Flags: IRW
		 */
		readonly scanMode?: ScanMode;
		/** 
		 * What to do if there is more than one possible Tree.childrenProperty
		 * when using scanMode "branch" or "level"
		 * Flags: IRW
		 */
		readonly tieMode?: TieMode;
		/** 
		 * Each discovered child is labeled with a configurable "typeProperty" set to the value
		 * of the property that held the children
		 * Flags: IRW
		 */
		readonly typeProperty?: string /* String */;
	} // DiscoverTreeSettings

	export interface DiscoverTreeSettingsStatic {
	} // DiscoverTreeSettingsStatic


	/**
	 * An object representing a component that is currently being edited within an
	 * EditContext.
	 * 
	 * An EditNode is essentially a copy of a PaletteNode, initially with the same properties
	 * as the PaletteNode from which it was generated. However unlike a PaletteNode, an EditNode 
	 * always has a EditNode.liveObject','liveObject - the object created from the 
	 * PaletteNode.defaults or other properties defined on a paletteNode.
	 * 
	 * Like a Palette, an EditContext may use properties such as PaletteNode.icon or 
	 * PaletteNode.title to display EditNodes.
	 * 
	 * An EditContext generally offers some means of editing EditNodes and, as edits are made,
	 * updates EditNode.defaults with the information required to re-create the component. 
	 */
	export interface EditNode extends PaletteNode {
		/** 
		 * See PaletteNode.canDuplicate.
		 * Flags: IRW
		 */
		readonly canDuplicate?: boolean /* Boolean */;
		/** 
		 * (Read only) Properties required to recreate the current EditNode.liveObject.
		 * Flags: IR
		 */
		readonly defaults?: Properties;
		/** 
		 * (Read only) Properties to be applied to the
		 * EditNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * 
		 * Note that the editProxy is created the first time a component is placed into
		 * editMode, so any editProxyProperties must be set before then.
		 * Flags: IR
		 */
		readonly editProxyProperties?: EditProxyProps /* EditProxy Properties */;
		/** 
		 * (Read only) Live version of the object created from the EditNode.defaults. For example, 
		 * if EditNode.type is "ListGrid", liveObject would be a ListGrid.
		 * Flags: IR
		 */
		readonly liveObject?: any /* Object */;
		/** 
		 * (Read only) SCClassName of the EditNode.liveObject
		 * , for example, "ListGrid".
		 * Flags: IR
		 */
		readonly type?: string /* SCClassName */;
		/** 
		 * (Read only) Shortcut property to be applied to the
		 * EditNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * Flags: IR
		 */
		readonly useEditMask?: boolean /* Boolean */;
	} // EditNode

	export interface EditNodeStatic extends PaletteNodeStatic {
	} // EditNodeStatic


	/**
	 * Settings for use with SimpleType.applySummaryFunction. 
	 */
	export interface SummaryConfiguration {
		/** 
		 * The field value to treat as the bad result of a user formula or summary evaluation.
		 * If a summary function actually uses the value (rather than say "count"), this usually
		 * means that the value will simply be skipped rather than voiding evaluation of the
		 * entire summary.
		 * Flags: IRW
		 */
		readonly badFormulaResultValue?: string /* String */;
		/** 
		 * (Advanced) The field value to treat as an invalid value from a summary row (see 
		 * ListGrid.showGridSummary or ListGrid.showGroupSummary) or as an invalid value
		 * in a summary-type field (see ListGridFieldType','listGridFieldType:"summary").
		 * If a summary function actually uses the value (rather than say "count"), this usually
		 * means that the value will simply be skipped rather than voiding evaluation of the
		 * entire summary.
		 * Flags: IRWA
		 */
		readonly invalidSummaryValue?: string /* String */;
	} // SummaryConfiguration

	export interface SummaryConfigurationStatic {
	} // SummaryConfigurationStatic


	/**
	 * Returns information about how a data value is rendered in a chart. 
	 */
	export interface DrawnValue {
		/** 
		 * (Read only) For bar and column charts, thickness of the bar representing this data value.
		 * Flags: IR
		 */
		readonly barThickness?: number /* int */;
		/** 
		 * (Read only) For pie mode only, start angle of the segment for the data value.
		 * Flags: IR
		 */
		readonly endAngle?: number /* int */;
		/** 
		 * (Read only) FacetValues for the data value.
		 * Flags: IR
		 */
		readonly facetValues?: FacetValueMap;
		/** 
		 * (Read only) For pie mode only, the radius of the segment for the data value.
		 * Flags: IR
		 */
		readonly radius?: number /* Double */;
		/** 
		 * (Read only) The data record of the data point from which this drawnValue was created.
		 * 
		 * Note that a chart with an Facet.inlinedValues','inlined facet or a
		 * FacetChart.extraAxisMetrics','multi-axis chart may define multiple data points in
		 * the same record, each of which will correspond to a different drawnValue.
		 * The way to uniquely identify the data value of this particular drawnValue
		 * is to use the DrawnValue.facetValues.
		 * Flags: IR
		 */
		readonly record?: CellRecord;
		/** 
		 * (Read only) For pie mode only, start angle of the segment for the data value.
		 * Flags: IR
		 */
		readonly startAngle?: number /* int */;
		/** 
		 * (Read only) Data value this drawnValue represents.
		 * Flags: IR
		 */
		readonly value?: number /* float */;
		/** 
		 * (Read only) X coordinate where the data value is rendered. In pie mode, returns the X coordinate of the
		 * center of the pie where the data value appears.
		 * Flags: IR
		 */
		readonly x?: number /* int */;
		/** 
		 * (Read only) Y coordinate where the data value is rendered. In pie mode, returns the Y coordinate of the
		 * center of the pie where the data value appears.
		 * Flags: IR
		 */
		readonly y?: number /* int */;
	} // DrawnValue

	export interface DrawnValueStatic {
	} // DrawnValueStatic


	/**
	 * A Javascript object defining the details of a single group operation. Used by the 
	 * MultiGroupDialog','MultiGroupDialog to edit multi-level grouping scenarios for
	 * use by components that support grouping. 
	 */
	export interface GroupSpecifier {
		/** 
		 * (Read only) A DataBoundComponent providing the context for the group-normalizer.
		 * Flags: IR
		 */
		readonly context?: DataBoundComponent;
		/** 
		 * (Read only) The grouping mode applied by this specifier. The list of available modes can come either 
		 * from the associated ListGridField.groupingModes','field or from it's specified 
		 * SimpleType.groupingModes','data-type.
		 * Flags: IR
		 */
		readonly grouping?: string /* String */;
		/** 
		 * (Read only) A normalizer function which this groupSpecifier will use to group.
		 * Flags: IR
		 */
		readonly normalizer?: any /* Function */;
		/** 
		 * (Read only) The property name, eg a ListGridField','field name, to which this groupSpecifier applies.
		 * Flags: IR
		 */
		readonly property?: string /* String */;
	} // GroupSpecifier

	export interface GroupSpecifierStatic {
	} // GroupSpecifierStatic


	/**
	 * Definition of a linear gradient between two points, (LinearGradient.x1','x1, LinearGradient.y1','y1)
	 * and (LinearGradient.x2','x2, LinearGradient.y2','y2). 
	 */
	export interface LinearGradient extends Gradient {
		/** 
		 * (Read only) X coordinate of the start point. This can be a number or a percentage of the width of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		readonly x1?: string /* String */;
		/** 
		 * (Read only) X coordinate of the end point. This can be a number or a percentage of the width of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		readonly x2?: string /* String */;
		/** 
		 * (Read only) Y coordinate of the start point. This can be a number or a percentage of the height of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		readonly y1?: string /* String */;
		/** 
		 * (Read only) Y coordinate of the end point. This can be a number or a percentage of the height of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		readonly y2?: string /* String */;
	} // LinearGradient

	export interface LinearGradientStatic extends GradientStatic {
	} // LinearGradientStatic


	/**
	 * A CellRecord represents the data for one cell of the body area.
	 * 
	 * Each CellRecord should be an object that minimally has a property named after each
	 * visible facetId with the value being a facetValueId from that facet, and also a value
	 * for CubeGrid.valueProperty.
	 * 
	 * Cell records can contain any other properties desired, such as cell ids, or values for
	 * facets not initially shown. 
	 */
	export interface CellRecord {
		/** 
		 * (Read only) Default property name denoting whether this record is enabled. Property name may be
		 * modified for some grid via ListGrid.recordEnabledProperty.
		 * Flags: IR
		 */
		readonly enabled?: boolean;
	} // CellRecord

	export interface CellRecordStatic {
	} // CellRecordStatic


	/**
	 * Section descriptor used by a SectionStack to describe a section of items which are shown
	 * or hidden together along with their associated header. 
	 * 
	 * A section header (see SectionStack.sectionHeaderClass) is created from this descriptor when
	 * the SectionStack is drawn. Any changes after creation must be made to the section header:
	 * SectionStack.getSectionHeader.
	 * 
	 * Additional SectionHeader properties set on the SectionStackSection not explicitly documented such as
	 * "iconAlign" or "prompt" is supported. 
	 */
	export interface SectionStackSection {
		/** 
		 * (Read only) This attribute controls whether or not the expand/collapse UI control is shown on the
		 * header of this section. Any section can still be expanded/collapsed programmatically,
		 * regardless of this setting.
		 * Flags: I
		 */
		readonly canCollapse?: boolean /* Boolean */;
		/** 
		 * (Read only) When explicitly set to false, disallows drop before this member in the Layout.
		 * Flags: I, Group: layoutMember
		 */
		readonly canDropBefore?: boolean;
		/** 
		 * (Read only) If set to false, then this sectionHeader will not be able to be dragged to perform a drag
		 * reorder, if SectionStack.canReorderSections is true.
		 * You can also disable dropping other sections before this one by setting 
		 * Canvas.canDropBefore','canDropBefore to false.
		 * Flags: I
		 */
		readonly canReorder?: boolean;
		/** 
		 * (Read only) If true, the header for this Section will be included in the page's tab
		 * order for accessibility. May also be set at the SectionStack level via 
		 * SectionStack.canTabToHeaders.
		 * 
		 * See accessibility.
		 * Flags: IR
		 */
		readonly canTabToHeader?: boolean;
		/** 
		 * (Read only) If the title for this section header is too large for the available space, should the title be
		 * clipped?
		 * 
		 * This feature is supported only in browsers that support the CSS UI text-overflow
		 * property (IE6+, Firefox 7+, Safari, Chrome, Opera 9+).
		 * Flags: IR
		 */
		readonly clipTitle?: boolean /* Boolean */;
		/** 
		 * (Read only) Custom controls to be shown on top of this section header.
		 * 
		 * These controls are shown in the SectionHeader.controlsLayout.
		 * 
		 * Note that this is an init-time property. If you need to dynamically change what 
		 * controls are displayed to the user, we would recommend embedding the
		 * controls in a Layout or similar container. 
		 * This will allow you to show/hide or add/remove members at runtime
		 * by manipulating the existing control(s) set up at init time.
		 * Flags: IR
		 */
		readonly controls?: Array<Canvas> /* Array of Canvas */;
		/** 
		 * (Read only) Sections default to the collapsed state unless SectionStackSection.showHeader is
		 * set to false in which case they default to the expanded state. This
		 * attribute allows you to explicitly control the expand/collapse state of the
		 * section by overriding the above default behavior.
		 * Flags: I
		 */
		readonly expanded?: boolean;
		/** 
		 * (Read only) Sections default to the visible state. This
		 * attribute allows you to explicitly control the visible/hidden state of the
		 * section by overriding the above default behavior.
		 * Flags: I
		 */
		readonly hidden?: boolean;
		/** 
		 * (Read only) Base filename of the icon that represents open and closed states. The default settings
		 * also change the icon for disabled sections, so a total of four images are required
		 * (opened, closed, Disabled_opened, Disabled_closed).
		 * 
		 * Not shown if SectionStackSection.canCollapse is false.
		 * Flags: IR
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * (Read only) Optional ID for the section. If SectionStack.useGlobalSectionIDs is true, this property will
		 * be applied to the generated SectionStackHeader widget as a standard widget ID, meaning
		 * it should be unique within a page.
		 * 
		 * Backcompat Note: Section stack sections may be uniquely identified within a stack
		 * via the SectionStackSection.name attribute (introduced in Jan 2010). Prior to this,
		 * the section ID attribute was used in this way (and would not be applied to the section header 
		 * as a widget ID). For backwards compatibility this is still supported: If 
		 * section.name is unspecified for a section but section.ID is set,
		 * the ID will be used as a default name attribute for the section. For backwards compatibility
		 * we also disable the standard behavior of having the section.ID being applied to the generated
		 * section header (thereby avoiding the page-level uniqueness requirement) by defaulting 
		 * SectionStack.useGlobalSectionIDs to false.
		 * Flags: IR
		 */
		readonly ID?: string /* String */;
		/** 
		 * (Read only) List of Canvases that constitute the section. These Canvases will be shown and hidden
		 * together.
		 * Flags: I
		 */
		readonly items?: Array<Canvas> /* Array of Canvas */;
		/** 
		 * (Read only) Identifier for the section. This can be used later in calls to SectionStack APIs such as
		 * SectionStack.expandSection and SectionStack.collapseSection. Note that if no name
		 * is specified for the section, one will be auto-generated when the section is created.
		 * This property should be a string which may be used as a valid JavaScript identifier
		 * (should start with a letter and not contain space or special characters such as "*").
		 * Flags: IR
		 */
		readonly name?: string /* String */;
		/** 
		 * (Read only) If set to false, then the items in this section will not be resized by sectionHeader
		 * repositioning. You may also set this flag directly on any of the items in any section to
		 * cause that item to not be resizeable.
		 * Flags: I
		 */
		readonly resizeable?: boolean;
		/** 
		 * If true and the title is clipped, then a hover containing the full title of this section header
		 * is enabled.
		 * Flags: IRW, Group: hovers
		 */
		readonly showClippedTitleOnHover?: boolean /* Boolean */;
		/** 
		 * (Read only) If true, a header will be shown for this section. If false, no header will be shown.
		 * Flags: I
		 */
		readonly showHeader?: boolean /* Boolean */;
		/** 
		 * (Read only) Title to show for the section
		 * Flags: IR
		 */
		readonly title?: string /* HTMLString */;
	} // SectionStackSection

	export interface SectionStackSectionStatic {
	} // SectionStackSectionStatic


	/**
	 * An object containing details for mouse events occurring over a FormItem. 
	 */
	export interface FormItemEventInfo {
		/** 
		 * (Read only) If this event occurred over a formItemIcon this attribute contains the 
		 * FormItemIcon.name for the icon.
		 * Flags: IR
		 */
		readonly icon?: string /* String */;
		/** 
		 * (Read only) Item over which the event occurred.
		 * Flags: R
		 */
		readonly item?: FormItem;
		/** 
		 * (Read only) True if the event occurred over the item's data or input element. Note that it can be bad 
		 * practice to implement custom context menus when overElement is true, since this will
		 * replace browser-default menus that users might expect.
		 * Flags: R
		 */
		readonly overElement?: boolean /* Boolean */;
		/** 
		 * (Read only) True if the event occurred over the form's 
		 * DynamicForm.errorItemProperties','single error item.
		 * Flags: R
		 */
		readonly overInlineError?: boolean /* Boolean */;
		/** 
		 * (Read only) True if the event occurred over the main body of the item (for example the text-box), rather
		 * than over the title or within the form item's cell in the DynamicForm but outside the
		 * text box area.
		 * Flags: R
		 */
		readonly overItem?: boolean /* Boolean */;
		/** 
		 * (Read only) True if the event occurred within the item's FormItem.textBoxStyle','textBox.
		 * Flags: R
		 */
		readonly overTextBox?: boolean /* Boolean */;
		/** 
		 * (Read only) True if the event occurred over the item's title.
		 * Flags: R
		 */
		readonly overTitle?: boolean /* Boolean */;
	} // FormItemEventInfo

	export interface FormItemEventInfoStatic {
	} // FormItemEventInfoStatic


	/**
	 * Definition of a radial gradient. 
	 */
	export interface RadialGradient extends Gradient {
		/** 
		 * (Read only) x coordinate of outer radial
		 * Flags: IR
		 */
		readonly cx?: string /* String */;
		/** 
		 * (Read only) y coordinate of outer radial
		 * Flags: IR
		 */
		readonly cy?: string /* String */;
		/** 
		 * (Read only) x coordinate of inner radial
		 * Flags: IR
		 */
		readonly fx?: string /* String */;
		/** 
		 * (Read only) y coordinate of inner radial
		 * Flags: IR
		 */
		readonly fy?: string /* String */;
		/** 
		 * (Read only) radius
		 * Flags: IR
		 */
		readonly r?: string /* String */;
	} // RadialGradient

	export interface RadialGradientStatic extends GradientStatic {
	} // RadialGradientStatic


	/**
	 * Identifier for a key pressed by the user, optionally specifying whether the Shift, Control,
	 * and/or Alt keys should be held or not held when the key is pressed, used by various methods. 
	 */
	export interface KeyIdentifier {
		/** 
		 * (Read only) If set, whether the Alt key must be held down.
		 * Flags: IR
		 */
		readonly altKey?: boolean /* Boolean */;
		/** 
		 * (Read only) If set, whether the Control key must be held down.
		 * Flags: IR
		 */
		readonly ctrlKey?: boolean /* Boolean */;
		/** 
		 * (Read only) Name of the key.
		 * Flags: IR
		 */
		readonly keyName?: KeyName;
		/** 
		 * (Read only) If set, whether the Shift key must be held down.
		 * Flags: IR
		 */
		readonly shiftKey?: boolean /* Boolean */;
	} // KeyIdentifier

	export interface KeyIdentifierStatic {
	} // KeyIdentifierStatic


	/**
	 * Object specifying an item in a Menu. Each MenuItem can have a
	 * MenuItem.title','title, MenuItem.icon','icon, MenuItem.keys','shortcut\n keys, optional MenuItem.submenu and various other settings. Alternatively, a
	 * MenuItem can contain an arbitrary widget via MenuItem.embeddedComponent.
	 * 
	 * MenuItems are specified as plain Object','JavaScript Objects, usually with
	 * ObjectLiteral notation. For example:
	 * 
	 * isc.Menu.create({
	 * items : [
	 * {title: "item1", click: "alert(1)"},
	 * {title: "item2"}
	 * ]
	 * });
	 * 
	 * Do not use isc.MenuItem.create() - this is invalid.
	 * 
	 * 
	 * 
	 * Alternatively, Menus support binding to a Menu.dataSource','DataSource.
	 * 
	 * As another option, here's a sample of a Menu in componentXML','Component XML:
	 * 
	 * &lt;Menu&gt;
	 * &lt;items&gt;
	 * &lt;MenuItem title="item1" click="alert(1)"/&gt;
	 * &lt;MenuItem title="item2"/&gt;
	 * &lt;/items&gt;
	 * &lt;/Menu&gt;
	 *  
	 */
	export interface MenuItem extends ListGridRecord {
		/** 
		 * (Read only) Whether a click on this specific menuItem automatically dismisses the menu. See
		 * Menu.autoDismiss.
		 * Flags: IR, Group: menuBasic
		 */
		readonly autoDismiss?: boolean /* Boolean */;
		/** 
		 * (Read only) A MenuItem that has a submenu normally cannot be selected, instead clicking or hitting Enter
		 * while keyboard focus is on the item shows the submenu. Setting canSelectParent:true allows
		 * a menu item with a submenu to be selected directly.
		 * Flags: IR
		 */
		readonly canSelectParent?: boolean;
		/** 
		 * (Read only) If true, this item displays a standard checkmark image to the left of its title. You
		 * can set the checkmark image URL by setting Menu.checkmarkImage.
		 * 
		 * If you need to set this state dynamically, use MenuItem.checkIf instead.
		 * Flags: IR, Group: menuIcons
		 */
		readonly checked?: boolean;
		/** 
		 * (Read only) The filename for this item's custom icon when the item is disabled. If both this property
		 * and MenuItem.checked are both specified, only the icon specified by this property
		 * will be displayed. The path to the loaded skin directory and the skinImgDir are prepended
		 * to this filename to form the full URL.
		 * 
		 * If you need to set this state dynamically, use MenuItem.dynamicIcon instead.
		 * Flags: IR, Group: menuIcons
		 */
		readonly disabledIcon?: string /* String */;
		/** 
		 * (Read only) Arbitrary UI component that should appear in this MenuItem. See
		 * ListGridRecord.embeddedComponent for an overview and options for controlling placement.
		 * 
		 * When embeddedComponent is used in a MenuItem certain default behaviors apply:
		 * 
		 * MenuItem.autoDismiss defaults to false and clicks on embeddedComponents are 
		 * not bubbled to the menuItem - if an interaction with an embeddedComponent is 
		 * expected to dismiss the menu, custom code should call menu.Menu.hide','hide or 
		 * Menu.hideAllMenus','hideAllMenus as appropriate, before proceeding
		 * the default behavior for MenuItem.embeddedComponentPosition is "expand".
		 * the component is placed over the title and key fields by default
		 * - use MenuItem.embeddedComponentFields to override
		 * rollOver styling is disabled by default (as though ListGridRecord.showRollOver were
		 * set to false)
		 * 
		 * Flags: IR, Group: menuBasic
		 */
		readonly embeddedComponent?: Canvas;
		/** 
		 * (Read only) See ListGridRecord.embeddedComponentFields. Default for a MenuItem is to cover the
		 * title and key fields, leaving the icon and submenu fields visible.
		 * Flags: IR, Group: menuBasic
		 */
		readonly embeddedComponentFields?: Array<string> /* Array of String */;
		/** 
		 * (Read only) See ListGridRecord.embeddedComponentPosition, except that when used in a
		 * menuItem, default behavior is EmbeddedPosition "expand".
		 * Flags: IR, Group: menuBasic
		 */
		readonly embeddedComponentPosition?: EmbeddedPosition;
		/** 
		 * (Read only) Affects the visual style and interactivity of the menu item. If set to
		 * false, the menu item will not respond to mouse rollovers or clicks.
		 * 
		 * If you need to set this state dynamically, use MenuItem.enableIf instead.
		 * Flags: IR, Group: menuBasic
		 */
		readonly enabled?: boolean /* Boolean */;
		/** 
		 * (Read only) Criteria to be evaluated to determine whether this MenuItem should be disabled. Re-evaluated
		 * each time the menu is shown.
		 * 
		 * A basic criteria uses textMatchStyle:"exact". When specified in
		 * componentXML','Component XML this property allows
		 * xmlCriteriaShorthand','shorthand formats for defining criteria.
		 * Flags: IR, Group: ruleCriteria
		 */
		readonly enableWhen?: AdvancedCriteria;
		/** 
		 * (Read only) If false, no submenus will be fetched for this MenuItem. This can be set globally via
		 * Menu.fetchSubmenus.
		 * Flags: IR
		 */
		readonly fetchSubmenus?: boolean /* Boolean */;
		/** 
		 * (Read only) The filename for this item's custom icon. If both this property and
		 * MenuItem.checked are both specified, only the icon specified by this property will be
		 * displayed. The path to the loaded skin directory and the skinImgDir are prepended to
		 * this filename to form the full URL. If this item is disabled, and MenuItem.disabledIcon
		 * is set, then that icon will be used instead.
		 * 
		 * If you need to set this state dynamically, use MenuItem.dynamicIcon instead.
		 * Flags: IR, Group: menuIcons
		 */
		readonly icon?: string /* String */;
		/** 
		 * (Read only) The height applied to this item's icon. The default of 16 can be changed
		 * for all MenuItems by overriding Menu.iconHeight.
		 * Flags: IR, Group: menuIcons
		 */
		readonly iconHeight?: number;
		/** 
		 * (Read only) The width applied to this item's icon. The default of 16 can be changed
		 * for all MenuItems by overriding Menu.iconWidth.
		 * Flags: IR, Group: menuIcons
		 */
		readonly iconWidth?: number;
		/** 
		 * (Read only) When set to true, this menu item shows a horizontal separator instead of
		 * the MenuItem.title text. Typically specified as the only property of a menu item,
		 * since the separator will not respond to mouse events.
		 * Flags: IR, Group: menuBasic
		 */
		readonly isSeparator?: boolean /* Boolean */;
		/** 
		 * (Read only) Shortcut key(s) to fire the menu item action. Each key can be defined as a KeyIdentifier.
		 * To apply multiple shortcut keys to this item, set this property to an array of such key
		 * identifiers.
		 * Flags: IR, Group: menuKeys
		 */
		readonly keys?: KeyIdentifier | Array<string> /* KeyIdentifier | Array of KeyIdentifer */;
		/** 
		 * (Read only) A string to display in the shortcut-key column for this item. If not
		 * specified, the first KeyName value in MenuItem.keys will be used by default.
		 * Flags: IR, Group: menuKeys
		 */
		readonly keyTitle?: string /* String */;
		/** 
		 * (Read only) When used in an AdaptiveMenu, should this MenuItem show only it's
		 * MenuItem.icon','icon when displayed inline?
		 * Flags: IR
		 */
		readonly showIconOnlyInline?: boolean;
		/** 
		 * (Read only) A reference to another menu, to display as a submenu when the mouse cursor hovers over
		 * this menu item.
		 * Flags: IR, Group: menuBasic
		 */
		readonly submenu?: Menu;
		/** 
		 * (Read only) The text displayed for the menu item
		 * Flags: IR, Group: menuBasic
		 */
		readonly title?: string /* HTML */;

		/* Instance Method Overrides */
		/**  
		 *  Action to fire when this menu is activated.
		 * 
		 */
		action?(): void; 

		/**  
		 *  Contains the condition that will check or uncheck the current menuItem. The handler must be specified
		 * as a function or string of script. Return false to uncheck the menuItem or true to check it
		 * 
		 * If you don't need to set this state dynamically, use MenuItem.checked instead.
		 * 
		 * May be defined as a stringMethods','stringMethod.
		 * 
		 * 
		 * @param {Canvas} target - Menu.target','target attribute for the top level menu.
		 * @param {Menu} menu - Menu','menu contains the reference to the menu that contains the current item
		 * @param {MenuItem} item - contains the reference to the current item
		 * @return {boolean} Return true to show a checkmark by this menu item
		 */
		checkIf?(target:Canvas, menu:Menu, item:MenuItem): boolean; 

		/**  
		 *  Executed when this menu item is clicked by the user. The click handler must be specified
		 * as a function or string of script. Return false to suppress the Menu.itemClick
		 * handler if specified.
		 * 
		 * 
		 * @param {Canvas} target - for a menu shown as a context menu, the Canvas the menu was shown on. Otherwise the Menu instance of which this
		 * MenuItem is a member.
		 * @param {MenuItem} item - The MenuItem that was clicked on.
		 * @param {Menu} menu - The Menu instance of which this MenuItem is a member.
		 * @param {number} colNum - Index of the column the user clicked. May be null if the user activated the menu via a keyboard event.
		 */
		click?(target:Canvas, item:MenuItem, menu:Menu, colNum?:number): void; 

		/**  
		 *  Contains the condition that will change the current items' icon when met. The handler must be specified
		 * as a function or string of script.
		 * 
		 * If you don't need to set this state dynamically, use MenuItem.icon instead.
		 * 
		 * May be defined as a stringMethods','stringMethod.
		 * 
		 * 
		 * @param {Canvas} target - Menu.target','target attribute for the top level menu.
		 * @param {Menu} menu - Menu','menu contains the reference to the menu that contains the current item
		 * @param {MenuItem} item - contains the reference to the current item
		 * @return {string} the url of this menuItems icon
		 */
		dynamicIcon?(target:Canvas, menu:Menu, item:MenuItem): string /* SCImgURL */; 

		/**  
		 *  Contains the condition that will change the current items' title when met. The handler must be specified
		 * as a function or string of script.
		 * 
		 * If you don't need to set this state dynamically, use MenuItem.title instead.
		 * 
		 * May be defined as a stringMethods','stringMethod.
		 * 
		 * 
		 * @param {Canvas} target - Menu.target','target attribute for the top level menu.
		 * @param {Menu} menu - Menu','menu contains the reference to the menu that contains the current item
		 * @param {MenuItem} item - contains the reference to the current item
		 * @return {string} the title of this menuItem
		 */
		dynamicTitle?(target:Canvas, menu:Menu, item:MenuItem): string /* String */; 

		/**  
		 *  Contains the condition that will enable or disable the current menuItem. The handler must be specified
		 * as a function or string of script. Return false to disable the menuItem or true to enable it
		 * 
		 * If you don't need to set this state dynamically, use MenuItem.enabled instead.
		 * 
		 * May be defined as a stringMethods','stringMethod.
		 * 
		 * 
		 * @param {Canvas} target - Menu.target','target attribute for the top level menu.
		 * @param {Menu} menu - Menu','menu contains the reference to the menu that contains the current item
		 * @param {MenuItem} item - contains the reference to the current item
		 * @return {boolean} Return true to show a checkmark by this menu item
		 */
		enableIf?(target:Canvas, menu:Menu, item:MenuItem): boolean; 

	} // MenuItem

	export interface MenuItemStatic extends ListGridRecordStatic {
	} // MenuItemStatic


	/**
	 * Settings for generating printable HTML for components. 
	 */
	export interface PrintProperties {
		/** 
		 * (Read only) An array of Strings indicating the classNames of controls that should be specifically
		 * included when printing, even if a superclass is listed in PrintProperties.omitControls.
		 * Flags: IR, Group: printing
		 */
		readonly includeControls?: Array<string> /* Array of String */;
		/** 
		 * (Read only) An array of Strings indicating the classNames of controls that should be omitted from
		 * printing. By default, omitControls includes all button-based controls, menus
		 * and similar interactive controls that are typically useless in printed output.
		 * 
		 * All subclasses of the specified classes are also omitted.
		 * 
		 * See also PrintProperties.includeControls.
		 * Flags: IR, Group: printing
		 */
		readonly omitControls?: Array<string> /* Array of String */;
		/** 
		 * (Read only) If true, generates HTML for export.
		 * 
		 * Some components, specifically DrawPane and FacetChart on IE8 and earlier, need to generate
		 * different HTML for export versus in-browser print preview. When using RPCManager.exportContent
		 * the printForExport property is set to true automatically. If not using RPCManager.exportContent(),
		 * but the generated HTML will be sent for export, the PrintProperties passed to
		 * Canvas.getPrintHTML must have printForExport:true.
		 * Flags: IR, Group: printing
		 */
		readonly printForExport?: boolean /* Boolean */;
	} // PrintProperties

	export interface PrintPropertiesStatic {
	} // PrintPropertiesStatic


	/**
	 * Lane shown in a Timeline view, or in a Calendar.dayView','day view when 
	 * Calendar.showDayLanes','showDayLanes is true. Each lane is a row or column, 
	 * respectively, that can contain a set of CalendarEvents. CalendarEvents are placed in
	 * lanes by matching the Lane.name property to the value of the 
	 * Calendar.laneNameField property on the CalendarEvent.
	 * 
	 * Lanes are typically used to show tasks assigned to different people, broadcasts planned for
	 * different channels, and similar displays. 
	 */
	export interface Lane {
		/** 
		 * The base name for the CSS class applied to Calendar.eventCanvas','events when they're
		 * rendered in this lane. See Calendar.eventStyleName.
		 * 
		 * If set directly on a Lane.sublanes','sublane, overrides the corresponding value on
		 * the parent Calendar.lanes','lane. See 
		 * Calendar.getEventCanvasStyle','getEventCanvasStyle() for more information.
		 * Flags: IRW, Group: appearance
		 */
		readonly eventStyleName?: string /* CSSStyleName */;
		/** 
		 * (Read only) In Timelines, the height of this Lane's row. Has no effect when set on a Lane 
		 * being displayed in a Calendar.dayView','day view as a result of 
		 * Calendar.showDayLanes being true.
		 * 
		 * If set directly on a Lane.sublanes','sublane, overrides the default behavior of 
		 * dividing the height equally among the lane's sublanes. Each sublane is still initially 
		 * assigned an equal slice of the parent height, and the value for this sublane is 
		 * then updated. So the overall height of the parent lane will change by the delta between the 
		 * initial slice and the specified one.
		 * Flags: IR
		 */
		readonly height?: number /* Number */;
		/** 
		 * (Read only) To determine whether a CalendarEvent should be placed in this lane, the value of this 
		 * attribute is compared with the Calendar.laneNameField property on the CalendarEvent.
		 * Flags: IR
		 */
		readonly name?: string /* String */;
		/** 
		 * (Read only) Array of Lane objects that will share the available space in the parent Lane,
		 * vertically in Calendar.timelineView','timelines and horizontally in 
		 * Calendar.dayView','day views.
		 * 
		 * Only one level of sublanes is supported, so this attribute only has an effect on
		 * Calendar.lanes','top-level lanes.
		 * 
		 * Note that this feature is mutually exclusive with the 
		 * Calendar.eventAutoArrange','auto arrangement of events that share time.
		 * Flags: IR
		 */
		readonly sublanes?: Array<Lane> /* Array of Lane */;
		/** 
		 * (Read only) Title to show for this lane. Has no effect if set directly on Lane.sublanes','sublanes.
		 * Flags: IR
		 */
		readonly title?: string /* HTMLString */;
		/** 
		 * (Read only) When set on a Lane being displayed in a Calendar.dayView','day view as a result of 
		 * Calendar.showDayLanes being set, dictates the width of the Lane's column. Has no 
		 * effect in Timelines.
		 * 
		 * If set directly on a Lane.sublanes','sublane, overrides the default behavior of 
		 * dividing the width equally among the lane's sublanes. Each sublane is still initially 
		 * assigned an equal slice of the original parent width, and the value for this sublane is then
		 * updated. So the overall width of the parent lane will change by the delta between the 
		 * initial slice and the specified one.
		 * Flags: IR
		 */
		readonly width?: number /* Number */;
	} // Lane

	export interface LaneStatic {
	} // LaneStatic


	/**
	 * A header span appears as a second level of headers in a ListGrid, spanning one or more
	 * ListGrid columns and their associated headers.
	 * 
	 * See ListGrid.headerSpans.
	 * 
	 * In addition to the properties documented here, all other properties specified on the
	 * headerSpan object will be passed to the Class.create','create() method of the
	 * ListGrid.headerSpanConstructor. This allows you to set properties such as
	 * Button.baseStyle or StretchImgButton.src directly in a
	 * headerSpan. 
	 */
	export interface HeaderSpan {
		/** 
		 * (Read only) Horizontal alignment of the title of this headerSpan.
		 * Flags: IR, Group: headerSpan
		 */
		readonly align?: Alignment;
		/** 
		 * (Read only) List of fields that this header spans. Fields should be identified by their value for
		 * ListGridField.name.
		 * 
		 * Developers may define multiple levels of header-spans by specifying HeaderSpan.spans
		 * however a span cannot be specified with both fields and spans.
		 * Flags: IR, Group: headerSpan
		 */
		readonly fields?: Array<string> /* Array of String */;
		/** 
		 * Custom base style to apply to the header button created for this span instead
		 * of ListGrid.headerBaseStyle.
		 * 
		 * Note that depending on the header button constructor, you may have to specify
		 * HeaderSpan.headerTitleStyle as well.
		 * Flags: IRW, Group: appearance
		 */
		readonly headerBaseStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) Optional title for the headerSpan button for this headerSpan. If specified this will be
		 * displayed in the headerSpan button instead of HeaderSpan.title. Set to an empty
		 * string to suppress the title in the header button entirely.
		 * Flags: IR, Group: headerSpan
		 */
		readonly headerTitle?: string /* String */;
		/** 
		 * Custom titleStyle to apply to the header button created for this span instead of
		 * ListGrid.headerTitleStyle.
		 * 
		 * Note that this will typically only have an effect if
		 * ListGrid.headerButtonConstructor is set to StretchImgButton or a subclass
		 * thereof.
		 * Flags: IRW, Group: appearance
		 */
		readonly headerTitleStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) Height of this headerSpan. Defaults to ListGrid.headerSpanHeight.
		 * Flags: IR, Group: headerSpan
		 */
		readonly height?: number /* integer */;
		/** 
		 * (Read only) Name for this headerSpan, for use in APIs like ListGrid.setHeaderSpanTitle.
		 * 
		 * Name is optional, but if specified, must be unique for this ListGrid (but not globally
		 * unique) as well as a valid JavaScript identifier, as specified by ECMA-262 Section 7.6
		 * (the String.isValidID
		 * function can be used to test whether a name is a valid JavaScript identifier).
		 * Flags: IR, Group: headerSpan
		 */
		readonly name?: string /* Identifier */;
		/** 
		 * (Read only) This property allows developer to "nest" header spans, grouping fields together by
		 * multiple layers of granularity.
		 * 
		 * For example a group of fields could be nested within two layers of header spans as follows:
		 * 
		 * 
		 * { title:"Europe", spans:[
		 * {title:"France", fields:["Paris", "Lyon"]},
		 * {title:"UK", fields:["London", "Glasgow"]},
		 * {title:"Spain", fields:["Barcelona"]}
		 * ]
		 * }
		 * 
		 * 
		 * 
		 * Note that a span definition can not include both spans
		 * and HeaderSpan.fields','fields.
		 * Flags: IR, Group: headerSpan
		 */
		readonly spans?: Array<HeaderSpan> /* Array of HeaderSpan */;
		/** 
		 * (Read only) A title for this headerSpan, to display in the headerSpan button for this headerSpan
		 * and in other contexts such as the ListGrid.canPickFields','menu for picking visible fields.
		 * 
		 * Note: if you want to use HTML tags to affect the display of the header, you should do so
		 * via HeaderSpan.headerTitle instead so that other places where the title
		 * appears in the UI are not affected. Refer to discussion at ListGridField.title.
		 * Flags: IR, Group: headerSpan
		 */
		readonly title?: string /* String */;
		/** 
		 * (Read only) Vertical alignment of the title of this headerSpan.
		 * 
		 * Defaults to listGrid.headerSpanVAlign if unset.
		 * Flags: IR, Group: headerSpan
		 */
		readonly valign?: VerticalAlignment;
		/** 
		 * (Read only) Should the span title wrap if there is not enough space horizontally to accommodate it.
		 * If unset, default behavior is derived from ListGrid.wrapHeaderSpanTitles. (This
		 * is a soft-wrap - if set the title will wrap at word boundaries.)
		 * Flags: IR
		 */
		readonly wrap?: boolean /* Boolean */;
	} // HeaderSpan

	export interface HeaderSpanStatic {
	} // HeaderSpanStatic


	/**
	 * An auto-generated subclass of TreeNode representing the group nodes
	 * in a grouped ListGrid. 
	 */
	export interface GroupNode {
	} // GroupNode

	export interface GroupNodeStatic {
	} // GroupNodeStatic


	/**
	 * 
	 * A JavaScript Object where each property name is a facetId and each property value is a
	 * facetValueId for that facet.
	 * 
	 * 
	 * 
	 * The facetId &rarr; facetValueId mappings in a FacetValueMap describe a specific slice of the
	 * dataset. If mappings are included for all facets, a FacetValueMap describes a unique
	 * cell. If some facets are omitted, it describes a row, column, or set of rectangular
	 * areas, or equivalently, a particular row or column header (if all facetIds in the map are
	 * displayed on the same axis)
	 * 
	 * FacetValueMaps are used in various contexts to describe headers, datasets to be loaded,
	 * screen regions, etc. 
	 */
	export interface FacetValueMap {
	} // FacetValueMap

	export interface FacetValueMapStatic {
	} // FacetValueMapStatic


	/**
	 * An object representing a user-created and user-modifiable formula, which can be created and
	 * edited with a FormulaBuilder either directly or via the
	 * ListGrid.canAddFormulaFields behavior. 
	 */
	export interface UserFormula {
		/** 
		 * (Read only) Object mapping from variable names to fieldNames. All variable names must be single-letter
		 * capital characters (eg A). For example, for a formula that should divide the field
		 * "population" over the field "area", the formula might be "E/L" and formula vars would be:
		 * 
		 * 
		 * {
		 * E: "population",
		 * L: "area"
		 * }
		 * 
		 * 
		 * 
		 * 
		 * When used in ListGridField.userFormula context, field names are evaluated against the
		 * grid record.
		 * 
		 * When used in FormItem.formula or ListGridField.editorFormula this property is
		 * not used for formula mapping. Instead, field names are evaluated directly against the
		 * current Canvas.ruleScope','rule context.
		 * Flags: IR
		 */
		readonly formulaVars?: any /* Map */;
		/** 
		 * Formula to be evaluated.
		 * 
		 * There are two contexts where a UserFormula is used: ListGridField.userFormula and
		 * FormItem.formula or ListGridField.editorFormula. For the grid field formula
		 * all variables used by the formula must be single-letter capital characters (eg A). These
		 * are derived from field values for the record in question - see UserFormula.formulaVars.
		 * 
		 * In addition to these variables, the keyword record may be used to
		 * refer directly to the record for which the formula is being displayed.
		 * 
		 * In the second usage context variables are dot-separated (.) names representing the nested
		 * hierarchy path to the desired value within the Canvas.ruleScope','rule context. No
		 * mapping with UserFormula.formulaVars is needed.
		 * Flags: IRW
		 */
		readonly text?: string /* String */;
	} // UserFormula

	export interface UserFormulaStatic {
	} // UserFormulaStatic


	/**
	 * Encapsulates state of a NavigationBar's view. A NavigationBarViewState
	 * object is created to pass to NavigationBar.setViewState so that multiple properties
	 * of the NavigationBar can be changed at once. 
	 */
	export interface NavigationBarViewState {
		/** 
		 * The new NavigationBar.alwaysShowLeftButtonTitle setting. If unset, the
		 * alwaysShowLeftButtonTitle setting is not changed.
		 * Flags: IRW
		 */
		readonly alwaysShowLeftButtonTitle?: boolean /* Boolean */;
		/** 
		 * The new NavigationBar.controls setting. If unset, the controls array
		 * is not changed.
		 * Flags: IRW
		 */
		readonly controls?: Array<string> | Array<Canvas> /* Array of String | Array of Canvas */;
		/** 
		 * The new NavigationBar.leftButtonTitle setting. If unset, the
		 * leftButtonTitle is not changed.
		 * Flags: IRW
		 */
		readonly leftButtonTitle?: string /* HTMLString */;
		/** 
		 * The new NavigationBar.shortLeftButtonTitle setting. If unset, the
		 * shortLeftButtonTitle is not changed.
		 * Flags: IRW
		 */
		readonly shortLeftButtonTitle?: string /* HTMLString */;
		/** 
		 * The new NavigationBar.showLeftButton setting. If unset, the
		 * showLeftButton setting is not changed.
		 * Flags: IRW
		 */
		readonly showLeftButton?: boolean /* Boolean */;
		/** 
		 * The new NavigationBar.title setting. If unset, the title is not changed.
		 * Flags: IRW
		 */
		readonly title?: string /* HTMLString */;
	} // NavigationBarViewState

	export interface NavigationBarViewStateStatic {
	} // NavigationBarViewStateStatic


	/**
	 * A set of properties that can be used to create an image. 
	 */
	export interface ImgProperties {
		/** 
		 * Specifies the additional attributes to write in the tag.
		 * Flags: IRW
		 */
		readonly extraStuff?: string /* String */;
		/** 
		 * Specifies the height of the image.
		 * Flags: IRW
		 */
		readonly height?: number;
		/** 
		 * Specifies the image-specific image directory to override the default.
		 * Flags: IRW
		 */
		readonly imgDir?: string /* URL */;
		/** 
		 * Specifies the name of the image. This is an identifier unique to the canvas, and subsequent
		 * calls to Canvas.getImage and
		 * Canvas.setImage
		 * with this name will act on the image object created using this ImgProperties object.
		 * Flags: IRW
		 */
		readonly name?: string /* String */;
		/** 
		 * Specifies the URL of the image local to the skin or application directory.
		 * Flags: IRW
		 */
		readonly src?: string /* URL */;
		/** 
		 * Specifies the width of the image.
		 * Flags: IRW
		 */
		readonly width?: number;
	} // ImgProperties

	export interface ImgPropertiesStatic {
	} // ImgPropertiesStatic


	/**
	 * Extra methods added to the Number object, available on all number variables. 
	 */
	export interface Number {

		/* Instance Method Overrides */
		/**  
		 *  Returns true if the number parameter falls between the 'first' and 'second' paramters.
		 * 
		 * 
		 * @param {number} number - Number object to be evaluated
		 * @param {number} first - Number at the lower boundary
		 * @param {number} second - Number at the upper boundary
		 * @param {number} inclusive - Whether or not the numbers at either end of the boundary should be included in the comparison
		 * @return {boolean} True if the given <code>number</code> falls inside the given range, false otherwise @example n = 3; bool = n.isBetween(3, 3, 6, true); // true&#010 @example n = 3; bool = n.isBetween(3, 3, 6);       // false
		 */
		isBetween?(number:number, first?:number, second?:number, inclusive?:number): boolean /* Boolean */; 

	} // Number

	export interface NumberStatic {
	} // NumberStatic


	/**
	 * A ListGridRecord is a JavaScript Object whose properties contain values for each
	 * ListGridField. A ListGridRecord may have additional properties which affect the
	 * record's appearance or behavior, or which hold data for use by custom logic or other,
	 * related components.
	 * 
	 * For example a ListGrid that defines the following fields:
	 * 
	 * fields : [
	 * {name: "field1"},
	 * {name: "field2"}
	 * ],
	 * 
	 * Might have the following data:
	 * 
	 * data : [
	 * {field1: "foo", field2: "bar", customProperty:5},
	 * {field1: "field1 value", field2: "field2 value", enabled:false}
	 * ]
	 * 
	 * Each line of code in the data array above creates one JavaScript Object via
	 * JavaScript {type:ObjectLiteral,object literal} notation. These JavaScript Objects are
	 * used as ListGridRecords.
	 * 
	 * Both records shown above have properties whose names match the name property of a
	 * ListGridField, as well as additional properties. The second record will be disabled due to
	 * enabled:false; the first record has a property "customProperty" which will
	 * have no effect by default but which may be accessed by custom logic.
	 * 
	 * After a ListGrid is created and has loaded data, records may be accessed via
	 * ListGrid.data, for example, listGrid.data.get(0) retrieves the first record.
	 * ListGridRecords are also passed to many events, such as
	 * ListGrid.cellClick','cellClick().
	 * 
	 * A ListGridRecord is always an ordinary JavaScript Object regardless of how the grid's
	 * dataset is loaded (static data, java server, XML web service, etc), and so supports the
	 * normal behaviors of JavaScript Objects, including accessing and assigning to properties
	 * via dot notation:
	 * 
	 * var fieldValue = record.fieldName;
	 * record.fieldName = newValue;
	 * 
	 * 
	 * Note however that simply assigning a value to a record won't cause the display to be
	 * automatically refreshed - ListGrid.refreshCell needs to be called. Also,
	 * consider editing','editValues vs saved values when directly modifying
	 * ListGridRecords.
	 * 
	 * See the attributes in the API tab for the full list of special properties on
	 * ListGridRecords that will affect the grid's behavior. 
	 */
	export interface ListGridRecord extends Record {
		/** 
		 * Name of a CSS style to use as the ListGrid.baseStyle for all cells for this
		 * particular record.
		 * 
		 * The styleName specified with have suffixes appended to it as the record changes state
		 * ("Over", "Selected" and so forth) as described by ListGrid.getCellStyle. For a
		 * single, fixed style for a record, use ListGridRecord.customStyle instead.
		 * 
		 * See ListGrid.getCellStyle for an overview of various ways to customize styling,
		 * both declarative and programmatic.
		 * 
		 * If this property is changed after draw(), to refresh the grid call
		 * ListGrid.refreshRow (or ListGrid.markForRedraw if several rows are
		 * being refreshed).
		 * 
		 * If your application's data uses the "_baseStyle" attribute for something else, the
		 * property name can be changed via ListGrid.recordBaseStyleProperty.
		 * Flags: IRW
		 */
		readonly _baseStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) Default property name denoting whether this record can be edited. Property name may be
		 * modified for the grid via ListGrid.recordEditProperty.
		 * Flags: IR, Group: editing
		 */
		readonly _canEdit?: boolean;
		/** 
		 * Default property name denoting whether this record can be removed. Property name may be
		 * modified for the grid via ListGrid.recordCanRemoveProperty.
		 * Flags: IRW, Group: editing
		 */
		readonly _canRemove?: boolean;
		/** 
		 * (Read only) Has no effect unless ListGrid.showBackgroundComponents is true.
		 * 
		 * Canvas created and embedded in the body behind a given record. When set, either as
		 * a Canvas or Canvas Properties, will be constructed if necessary, combined with the
		 * autoChild properties specified for ListGrid.backgroundComponent and displayed
		 * behind this record in the page's z-order, meaning
		 * it will only be visible if the cell styling is transparent.
		 * Flags: IR, Group: rowEffects
		 */
		readonly backgroundComponent?: Canvas;
		/** 
		 * (Read only) When set to false, other records cannot be dropped on (i.e., inserted
		 * via drag and drop) immediately before this record.
		 * Flags: IR
		 */
		readonly canAcceptDrop?: boolean;
		/** 
		 * (Read only) When set to false, this record cannot be dragged. If canDrag is false for
		 * any record in the current selection, none of the records will be draggable.
		 * Flags: IR
		 */
		readonly canDrag?: boolean;
		/** 
		 * (Read only) Default property name denoting whether this record can be expanded. Property name may be
		 * modified for the grid via ListGrid.canExpandRecordProperty.
		 * Flags: IR, Group: expansionField
		 */
		readonly canExpand?: boolean;
		/** 
		 * (Read only) Default property name denoting whether this record can be selected. Property name may be
		 * modified for the grid via ListGrid.recordCanSelectProperty.
		 * Flags: IR
		 */
		readonly canSelect?: boolean;
		/** 
		 * Name of a CSS style to use for all cells for this particular record.
		 * 
		 * Note that using this property assigns a single, fixed style to the record, so rollover
		 * and selection styling are disabled. To provide a series of stateful styles for a record
		 * use ListGridRecord._baseStyle instead.
		 * 
		 * See ListGrid.getCellStyle for an overview of various ways to customize styling,
		 * both declarative and programmatic.
		 * 
		 * If this property is changed after draw(), to refresh the grid call
		 * ListGrid.refreshRow (or ListGrid.markForRedraw if several rows are
		 * being refreshed).
		 * 
		 * If your application's data uses the "customStyle" attribute for something else, the
		 * property name can be changed via ListGrid.recordCustomStyleProperty.
		 * Flags: IRW
		 */
		readonly customStyle?: string /* CSSStyleName */;
		/** 
		 * (Advanced) The default value of ListGrid.recordDetailDSProperty.
		 * Flags: IRWA
		 */
		readonly detailDS?: DataSource;
		/** 
		 * (Read only) A component that should be rendered on top of this record, similar to a
		 * ListGrid.showRecordComponents','record component but statically defined on the record.
		 * 
		 * The embedded component will default to covering all fields of the record, but specific fields
		 * can be specified via ListGridRecord.embeddedComponentFields.
		 * 
		 * By default, the embeddedComponent will fill the entire vertical and horizontal space of the
		 * record (or of the specified fields). ListGridRecord.embeddedComponentPosition can be set to control
		 * exact sizing behavior.
		 * 
		 * 
		 * When creating a component to use as an embedded component the component will most likely
		 * end up drawing before the record it is due to be embedded within, therefore it is recommended
		 * to set Canvas.autoDraw','autoDraw to false on the embedded component.
		 * 
		 * 
		 * When a record with an embeddedComponent is eliminated from view by filtering or
		 * because it is not currently rendered due to ListGrid.showAllRecords','incremental rendering, the
		 * ListGrid may Canvas.hide or Canvas.clear it.
		 * 
		 * If the current dataset is completely replaced (by a call to ListGrid.setData or
		 * ListGrid.setDataSource, for example), any embedded component is
		 * Canvas.deparent','deparented (which implies being Canvas.clear','clear()ed).
		 * 
		 * When a ListGrid is Canvas.destroy','destroyed, it will destroy() all embedded components
		 * regardless of whether they are currently visible. Use a call to ListGrid.setData immediately
		 * before destroying the ListGrid to avoid this effect when unwanted.
		 * 
		 * For more advanced control over the lifecycle of components displayed over records, including
		 * deferred creation and pooling, use the ListGrid.showRecordComponents','record components
		 * subsystem.
		 * Flags: IR, Group: appearance
		 */
		readonly embeddedComponent?: Canvas;
		/** 
		 * (Read only) Fields where the ListGridRecord.embeddedComponent will be displayed, if specified.
		 * 
		 * Regardless of the order of fields specified, the component will appear from whichever field is
		 * earlier in the current visible order to whichever field is later, inclusive of the specified
		 * fields.
		 * 
		 * To have the component appear in just one field, either specify a single-element Array or
		 * specific a two element Array with both fields the same.
		 * 
		 * If either field is hidden or invalid (no such field), the component will occupy only a single
		 * field. If both fields are hidden, the component will be hidden until one or more of the fields
		 * are shown.
		 * Flags: IR, Group: appearance
		 */
		readonly embeddedComponentFields?: Array<string> /* Array of String */;
		/** 
		 * (Read only) Sizing policy applied to the embedded component. Default behavior if unspecified is the same
		 * as EmbeddedPosition "within" (fill space allocated to the record, including the ability
		 * use percentage sizing and snapTo offset). Use "expand" to have the record expand to accomodate
		 * the embedded components' specified sizes instead.
		 * Flags: IR, Group: appearance
		 */
		readonly embeddedComponentPosition?: EmbeddedPosition;
		/** 
		 * (Read only) Default property name denoting whether this record is enabled. Property name may be
		 * modified for some grid via ListGrid.recordEnabledProperty.
		 * Flags: IR
		 */
		readonly enabled?: boolean;
		/** 
		 * If specified as false this record should be ignored when calculating summary totals
		 * to be shown in the ListGrid.showGridSummary','summary row for this grid.
		 * 
		 * Note that includeInSummary is the default property name for this attribute,
		 * but it may be modified via ListGrid.includeInSummaryProperty.
		 * Flags: IRW
		 */
		readonly includeInSummary?: boolean;
		/** 
		 * This attribute will automatically be set to true for the record representing the
		 * grid-level summary row shown if ListGrid.showGridSummary is true.
		 * 
		 * Note that isGridSummary is the default property name for this attribute but
		 * it may be modified by setting ListGrid.gridSummaryRecordProperty
		 * Flags: IRW
		 */
		readonly isGridSummary?: boolean /* Boolean */;
		/** 
		 * This attribute will automatically be set to true for records representing
		 * group-level summary rows shown if ListGrid.showGroupSummary is true.
		 * 
		 * Note that isGroupSummary is the default property name for this attribute but
		 * it may be modified by setting ListGrid.groupSummaryRecordProperty
		 * Flags: IRW
		 */
		readonly isGroupSummary?: boolean /* Boolean */;
		/** 
		 * (Read only) Default property name denoting a separator row.
		 * When set to true, defines a horizontal separator in the listGrid
		 * object. Typically this is specified as the only property of a record object, since a
		 * record with isSeparator:true will not display any values.
		 * Note: this attribute name is governed by ListGrid.isSeparatorProperty.
		 * Flags: IR
		 */
		readonly isSeparator?: boolean;
		/** 
		 * The HTML to display in this row for fields with fieldType set to link. This overrides
		 * ListGridField.linkText.
		 * Flags: IRW, Group: display_values
		 */
		readonly linkText?: string /* String */;
		/** 
		 * (Read only) Set to false to disable rollover for this individual record when ListGrid.showRollOver
		 * is true.
		 * 
		 * Note this property can be renamed to prevent collision with data members - see
		 * ListGrid.recordShowRollOverProperty.
		 * Flags: IR, Group: appearance
		 */
		readonly showRollOver?: boolean /* Boolean */;
		/** 
		 * Default property name denoting the single value to display for all fields of this row.
		 * If this property is set for some record, the record will be displayed as a single
		 * cell spanning every column in the grid, with contents set to the value of this
		 * property.
		 * Note: this attribute name is governed by ListGrid.singleCellValueProperty.
		 * Flags: IRW
		 */
		readonly singleCellValue?: string /* HTML */;
	} // ListGridRecord

	export interface ListGridRecordStatic extends RecordStatic {
	} // ListGridRecordStatic


	/**
	 * An object containing properties that is used in Gradient types 
	 */
	export interface ColorStop {
		/** 
		 * (Read only) eg #ff0000 or red or rgb(255,0,0)
		 * Flags: IR
		 */
		readonly color?: string /* CSSColor */;
		/** 
		 * (Read only) The relative offset for the color.
		 * Flags: IR
		 */
		readonly offset?: number /* float */;
		/** 
		 * (Read only) 0 is transparent, 1 is fully opaque
		 * Flags: IR
		 */
		readonly opacity?: number /* float */;
	} // ColorStop

	export interface ColorStopStatic {
	} // ColorStopStatic


	/**
	 * An object representing a criterion to apply to a record. 
	 * 
	 * A criterion is part of the definition of an AdvancedCriteria object, which is used to
	 * filter records according to search criteria. 
	 * 
	 * A criterion consists of an Criterion.operator and typically a
	 * DataSourceField.name','fieldName from a
	 * Record and a Criterion.value','value to compare to. However some operators
	 * either don't require a value (eg, isNull) or act on other criteria rather than directly on a
	 * Record's fields (eg, the "and" and "or" logical operators).
	 * 
	 * A shortcut form is also allowed where only fieldName and value
	 * values are provided. In this case the operator is assumed to be "equals". 
	 */
	export interface Criterion {
		/** 
		 * (Read only) For a criterion with an operator that acts on other criteria (eg "and", "or"), a list of
		 * sub-criteria that are grouped together by the operator.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly criteria?: Array<Criterion> /* Array of Criterion */;
		/** 
		 * (Read only) End value of a criterion with an operator of type "valueRange".
		 * Flags: IR, Group: advancedFilter
		 */
		readonly end?: any /* Any */;
		/** 
		 * (Read only) Name of the field in each Record that this criterion applies to. Not applicable for a
		 * criterion with Criterion.criteria','sub-criteria. Can be specified as a dataPath to 
		 * allow matching nested objects. Use '/' as delimiters for dataPath. See 
		 * DataPath','dataPath for more information.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly fieldName?: string /* String */;
		/** 
		 * (Read only) Operator this criterion applies.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly operator?: OperatorId;
		/** 
		 * (Read only) Start value of a criterion with an operator of type "valueRange".
		 * Flags: IR, Group: advancedFilter
		 */
		readonly start?: any /* Any */;
		/** 
		 * (Read only) Value to be used in the application of this criterion.
		 * 
		 * Value may be required or not required, or may be an Array, according to the
		 * OperatorValueType of the operator.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly value?: any /* Any */;
		/** 
		 * (Read only) Wherever dynamicCriteria are supported, valuePath can be
		 * specified as a path in the current Canvas.ruleScope as an alternative to setting a fixed
		 * Criterion.value.
		 * 
		 * Note: valuePath vs setting a path for Criterion.fieldName:
		 * 
		 * use a path for criterion.fieldName when criteria will be matched against a
		 * nested data structure.
		 * use criterion.valuePath when the values used in filtering should be
		 * dynamically derived based on the Canvas.ruleScope. This does not imply that the
		 * criteria will be matched against a nested structure.
		 * 
		 * Flags: IR
		 */
		readonly valuePath?: string /* String */;
	} // Criterion

	export interface CriterionStatic {
	} // CriterionStatic


	/**
	 * An object literal with a particular set of properties used to configure the display of
	 * and interaction with the columns of a TreeGrid.
	 * TreeGrid is a subclass of ListGrid and as a result, for all fields except
	 * the field containing the Tree itself (specified by
	 * TreeGridField.treeField, all properties settable on
	 * ListGridField apply to TreeGridField as well.
	 * 
	 * This class documents just those properties that are specific to TreeGridFields - see
	 * ListGridField for the set of inherited properties. 
	 */
	export interface TreeGridField {
		/** 
		 * (Read only) Dictates whether the data in this field be exported. Explicitly set this
		 * to false to prevent exporting. Has no effect if the underlying 
		 * DataSourceField.canExport','dataSourceField is explicitly set to 
		 * canExport: false.
		 * Flags: IR
		 */
		readonly canExport?: boolean /* Boolean */;
		/** 
		 * The field containing treeField: true will display the Tree. If no
		 * field specifies this property, if a field named after the Tree.titleProperty of
		 * the Tree is present in TreeGrid.fields, that field will show the tree. Note that
		 * when using a DataSource, you typically define the title field via
		 * DataSource.titleField and the generated ResultTree automatically uses this
		 * field.
		 * 
		 * If none of the above rules apply, the first field in TreeGrid.fields is assigned to
		 * display the Tree.
		 * Flags: IRW, Group: treeField
		 */
		readonly treeField?: boolean /* Boolean */;
	} // TreeGridField

	export interface TreeGridFieldStatic {
	} // TreeGridFieldStatic


	/**
	 * An ordinary JavaScript object containing properties that configures the display of
	 * and interaction with the columns of a ListGrid. 
	 */
	export interface ListGridField {
		/** 
		 * Horizontal alignment for field's column header: "left", "right"
		 * or "center". Applied to the column header title and cells by default. A separate
		 * alignment for cells can be specified via ListGridField.cellAlign.
		 * If null, values are left-aligned. If this field is editable, the
		 * alignment of cells in the body will also be reflected in any editors for the field.
		 * Flags: IRW, Group: appearance
		 */
		readonly align?: Alignment;
		/** 
		 * (Read only) Per-field setting for ListGrid.allowFilterOperators. Can be used to enable
		 * the filter operators UI for a particular field if the ListGrid-level setting is not
		 * enabled, or to disable filter operators for a particular field if the ListGrid-level setting
		 * is enabled.
		 * Flags: IR
		 */
		readonly allowFilterOperators?: boolean /* Boolean */;
		/** 
		 * (Read only) Per-field setting for ListGrid.alwaysShowOperatorIcon. Can be used to force a particular
		 * field to always show it's ListGrid.operatorIcon','operatorIcon, even if it has no 
		 * filter-value, or is using the default ListGridField.filterOperator','search operator.
		 * Flags: IR
		 */
		readonly alwaysShowOperatorIcon?: boolean /* Boolean */;
		/** 
		 * If ListGridField.userFormula is set for this field, and this grid is showing
		 * ListGrid.showGroupSummary','group summaries or a
		 * ListGrid.showGridSummary','grid summary, this property determines what field value
		 * should be present in those summary rows. Should the field apply the user-formula to the
		 * calculated summary row, or should it apply a standard grid or group summary to the
		 * user-formula values displayed in the grid?
		 * 
		 * Default behavior may be specified at the grid level via ListGrid.applyFormulaAfterSummary
		 * Flags: IRW
		 */
		readonly applyAfterSummary?: boolean /* Boolean */;
		/** 
		 * Whether to allow browser autoComplete when editing this field.
		 * 
		 * If unset, defaults to listGrid.autoComplete
		 * Flags: IRW
		 */
		readonly autoComplete?: AutoComplete;
		/** 
		 * If true, automatically fetches records and derives a valueMap from
		 * ListGridField.optionDataSource.
		 * 
		 * Same as ListGrid.autoFetchDisplayMap, but defined on a per-field basis.
		 * Flags: IRW, Group: display_values
		 */
		readonly autoFetchDisplayMap?: boolean;
		/** 
		 * (Read only) Should this listGrid field autofit its width to either titles or content?
		 * 
		 * This overrides the ListGrid.autoFitFieldWidths attribute on a per-field basis.
		 * 
		 * Note that if ListGrid.showRecordComponents','showing record components, per-cell record
		 * components are not taken into account when determining the size for column auto fit.
		 * The default ListGrid.getDefaultFieldWidth implementation looks at cell content
		 * only. We typically recommend that, for fields showing record-components, 
		 * ListGridField.autoFitWidth and ListGridField.canAutoFitWidth be disabled, or if 
		 * the record components are of a predictable size, a ListGridField.defaultWidth
		 * be specified.
		 * This is particularly pertinent where ListGrid.recordComponentPosition
		 * is set to "within", in which case cells' content is often empty or completely covered
		 * by record-components.
		 * Flags: IR, Group: autoFitFields
		 */
		readonly autoFitWidth?: boolean /* Boolean */;
		/** 
		 * When a user requests column autofitting via the
		 * ListGrid.getHeaderContextMenuItems','header contextMenu or via a
		 * ListGrid.headerAutoFitEvent','mouse gesture, what autofit approach is used. If set, this
		 * setting overrides the autoFitWidthApproach specified at the ListGrid level.
		 * Flags: IRW, Group: autoFitFields
		 */
		readonly autoFitWidthApproach?: AutoFitWidthApproach;
		/** 
		 * (Read only) Whether this field should be automatically frozen when other fields are frozen. When
		 * true, the field will be automatically frozen to the extreme of the grid. The
		 * automatically generated ListGrid.checkboxField','checkbox,
		 * ListGrid.expansionField','expansion and
		 * ListGrid.rowNumberField','rowNumber fields are examples of fields that specify
		 * autoFreeze: true.
		 * 
		 * You can control the position of this field in the array of frozen fields by providing a
		 * ListGridField.getAutoFreezePosition implementation.
		 * Flags: IR, Group: frozenFields
		 */
		readonly autoFreeze?: boolean;
		/** 
		 * Custom base style to apply to all cells in this field instead of ListGrid.baseStyle
		 * To override the baseStyle at the row level, use
		 * ListGrid.recordBaseStyleProperty','record[listGrid.recordBaseStyleProperty]
		 * instead.
		 * Flags: IRW, Group: appearance
		 */
		readonly baseStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) Should the user be allowed to perform one-time autofitting of this field via
		 * a header context-menu option?
		 * 
		 * When enabled, the default header context menu for this field will
		 * include an item to auto-fit the field and users will be able to autofit the field
		 * via the ListGrid.headerAutoFitEvent.
		 * 
		 * If unset, these behaviors are enabled when ListGrid.canAutoFitFields is true.
		 * 
		 * If this property is set to false, and ListGrid.canAutoFitFields is true,
		 * this field will be ommitted from auto-fit when the user selects the header menu 
		 * option to ListGrid.autoFitAllText','auto fit all fields.
		 * 
		 * Note - this property governs user-initiated auto-fit only. It has no impact on
		 * autoFit set up via ListGridField.autoFitWidth and ListGrid.autoFitFieldWidths.
		 * 
		 * Note that if ListGrid.showRecordComponents','showing record components, per-cell record
		 * components are not taken into account when determining the size for column auto fit.
		 * The default ListGrid.getDefaultFieldWidth implementation looks at cell content
		 * only. We typically recommend that, for fields showing record-components, 
		 * ListGridField.autoFitWidth and ListGrid.canAutoFitFields be disabled, or if 
		 * the record components are of a predictable size, a ListGridField.defaultWidth
		 * be specified.
		 * This is particularly pertinent where ListGrid.recordComponentPosition
		 * is set to "within", in which case cells' content is often empty or completely covered
		 * by record-components.
		 * Flags: IR
		 */
		readonly canAutoFitWidth?: boolean /* Boolean */;
		/** 
		 * (Read only) Whether this field can be dragResized using the mouse. If unset, the default behavior
		 * is governed by ListGrid.canResizeFields.
		 * Flags: IR
		 */
		readonly canDragResize?: boolean;
		/** 
		 * Can this field be edited? May be overridden by setting the 'canEdit' property at the
		 * listGrid level. If not explicitly set and this grid is bound to a dataSource, the
		 * ListGrid.canEditFieldAttribute may be used to set default editability at the field level.
		 * 
		 * For more dynamic control over whether fields can be edited, see
		 * ListGrid.canEditCell.
		 * 
		 * 
		 * Flags: IRW, Group: editing
		 */
		readonly canEdit?: boolean;
		/** 
		 * (Read only) Can formula be edited from header context menu? Setting attribute to
		 * false prevents editing. A null or true
		 * value allows editing.
		 * 
		 * Has no effect when ListGrid.canAddFormulaFields is false.
		 * Flags: IR
		 */
		readonly canEditFormula?: boolean /* Boolean */;
		/** 
		 * (Read only) Can summary be edited from header context menu? Setting attribute to
		 * false prevents editing. A null or true
		 * value allows editing.
		 * 
		 * Has no effect when ListGrid.canAddSummaryFields is false.
		 * Flags: IR
		 */
		readonly canEditSummary?: boolean /* Boolean */;
		/** 
		 * (Read only) Dictates whether the data in this field be exported. Explicitly set this
		 * to false to prevent exporting. Has no effect if the underlying
		 * DataSourceField.canExport','dataSourceField is explicitly set to
		 * canExport: false.
		 * Flags: IR
		 */
		readonly canExport?: boolean /* Boolean */;
		/** 
		 * If showing a filter row for this ListGrid, should the filter criteria for this
		 * field be editable
		 * Flags: IRW, Group: filterEditor
		 */
		readonly canFilter?: boolean;
		/** 
		 * (Read only) Whether this field should display freezing/unfreezing options in its header context menu.
		 * See frozenFields.
		 * Flags: IR, Group: frozenFields
		 */
		readonly canFreeze?: boolean;
		/** 
		 * Determines whether this field will be groupable in the header context menu.
		 * Flags: IRW
		 */
		readonly canGroupBy?: boolean /* Boolean */;
		/** 
		 * (Read only) If set to false, this field will be omitted from the column picker that appears in the
		 * header context menu when ListGrid.canPickFields is enabled. This means that the
		 * end user will not be able to hide it if it's currently shown, or show it if it's
		 * currently hidden.
		 * 
		 * If this property is set to false, and the 
		 * ListGrid.useAdvancedFieldPicker','advanced field picker is shown, if the field
		 * is ListGridField.hidden, the field will not show in the list of available fields. If the
		 * field is visible, it will be displayed in the list of currently visible fields, but
		 * the advanced field picker user interface will disallow hiding it.
		 * Flags: IR, Group: appearance
		 */
		readonly canHide?: boolean;
		/** 
		 * Determines whether this field can be hilited. Set to false to prevent this
		 * field from appearing in HiliteEditor.
		 * Flags: IRW
		 */
		readonly canHilite?: boolean;
		/** 
		 * (Read only) Whether this field can be reordered using the mouse. If unset, the default behavior is
		 * governed by ListGrid.canReorderFields. Note that setting this property to
		 * false will lock this field from being moved - that is, the user is
		 * prevented from moving this field directly by dragging with the mouse, or by dropping another
		 * field onto this field. However, unless this field is at the extreme edge of the grid,
		 * or all fields between it and the extreme edge of the grid are also
		 * canReorder: false, (ie, if there are unlocked fields on either side of this
		 * field), then it is possible that this locked field may be
		 * reordered automatically, as a result of the user dragging one unlocked field onto another
		 * unlocked field.
		 * Flags: IR
		 */
		readonly canReorder?: boolean;
		/** 
		 * Enables or disables sorting by this column. If false, interactive
		 * sorting via header-clicks or menu-items will have no effect, but direct scripted calls
		 * to ListGrid.sort','sort() or ListGrid.setSort','setSort() will work as
		 * expected.
		 * Flags: IRW, Group: sorting
		 */
		readonly canSort?: boolean /* Boolean */;
		/** 
		 * When true, this field can only be used for sorting if the data is entirely client-side.
		 * Flags: IRW
		 */
		readonly canSortClientOnly?: boolean /* Boolean */;
		/** 
		 * (Advanced) Allows a boolean or ValueMap','valueMapped field to be edited without going into
		 * edit mode. When this attribute is set, clicking on the field will change the value - for
		 * boolean fields toggling between true and false, and for valueMapped
		 * fields, advancing the value to the next option in the valueMap.
		 * 
		 * To enable this feature, ListGrid.canEdit must be set to true.
		 * For boolean type fields canToggle is true by default, meaning setting
		 * canEdit to true implies the user can toggle the value via a single click
		 * without going into edit mode. You can disable this by explicitly setting
		 * canToggle to false for a boolean field.
		 * Note that you can enable toggling only (without allowing the user to edit other fields)
		 * by just setting ListGrid.editEvent','grid.editEvent:"none".
		 * 
		 * If ListGrid.editEvent is set to "click", when the user clicks on the field,
		 * the value will be toggled, and inline editing will be triggered as usual.
		 * Otherwise the toggled value will be saved immediately to the server, or if
		 * ListGrid.autoSaveEdits has been set to false, will be stored as an edit value
		 * for the record.
		 * Flags: IRWA, Group: editing
		 */
		readonly canToggle?: boolean /* Boolean */;
		/** 
		 * Horizontal alignment for cells in this field's column: "left", "right"
		 * or "center".
		 * If null, alignment is derived from ListGridField.align. If this field is editable,
		 * the alignment of cells in the body will also be reflected in any editors for the field.
		 * Flags: IRW, Group: appearance
		 */
		readonly cellAlign?: Alignment;
		/** 
		 * (Read only) For a field of type:"icon" only, set the icon that appears in body cells. Unless
		 * setting ListGridField.icon','field.icon, setting field.cellIcon will not show an
		 * icon in the header.
		 * 
		 * To change this property after fields have been passed to ListGrid.setFields,
		 * use ListGrid.setFieldCellIcon.
		 * Flags: IR
		 */
		readonly cellIcon?: string /* SCImgURL */;
		/** 
		 * (Read only, Advanced) dataPath for this field. This property allows the grid to display details of nested data
		 * structures in a flat list of columns.
		 * Flags: IRA, Group: data
		 */
		readonly dataPath?: string /* String */;
		/** 
		 * Display format to use for date type values within this field.
		 * 
		 * The ListGridField.timeFormatter may also be used to format underlying Date values as
		 * times (omitting the date part entirely). If both dateFormatter and
		 * timeFormatter are specified on a field, for
		 * fields specified as ListGridField.type','type "time" the
		 * timeFormatter will be used, otherwise the dateFormatter
		 * 
		 * If field.dateFormatter and field.timeFormatter is unspecified,
		 * date display format may be defined at the component level via
		 * ListGrid.dateFormatter','ListGrid.dateFormatter, or for fields of type "datetime"
		 * ListGrid.datetimeFormatter','ListGrid.datetimeFormatter. Otherwise the
		 * default is to use the system-wide default short date format, configured via
		 * DateUtil.setShortDisplayFormat. Specify any valid DateDisplayFormat to
		 * change the format used by this item.
		 * 
		 * If this field is editable the dateFormatter will also be passed to the editor created
		 * to edit this field. Note that you can also specify an explicit ListGridField.inputFormat
		 * which will be passed through to the editor as well, though this is not typically required
		 * as the input format should be automatically derived by the SmartClient system
		 * for standard DateDisplayFormats.
		 * Flags: IRW
		 */
		readonly dateFormatter?: DateDisplayFormat;
		/** 
		 * Applies only to fields of type "float" and enforces a minimum number of digits shown after
		 * the decimal point.
		 * 
		 * For example, a field value of 343.1, 343.104 and 343.09872677 would all be shown as 343.10
		 * if decimalPad is 2.
		 * 
		 * The original unpadded value is always shown when the value is edited.
		 * Flags: IRW, Group: appearance
		 */
		readonly decimalPad?: number;
		/** 
		 * Applies only to fields of type "float" and affects how many significant digits are shown.
		 * 
		 * For example, with decimalPrecision 3, if the field value is 343.672677, 343.673 is shown.
		 * 
		 * If the value is 125.2, 125.2 is shown - decimalPrecision will not cause extra zeros to be
		 * added. Use DataSourceField.decimalPad for this.
		 * 
		 * A number is always shown with its original precision when edited.
		 * Flags: IRW, Group: appearance
		 */
		readonly decimalPrecision?: number;
		/** 
		 * (Advanced) If this ListGrid is showing a filter row, this property can be used to apply a default
		 * value to show in the filter editor for this field.
		 * Flags: IRWA, Group: filterEditor
		 */
		readonly defaultFilterValue?: any /* Any */;
		/** 
		 * (Read only) Default groupingMode used when the user does not specify a mode or grouping is triggered
		 * programmatically and ListGridField.groupingMode','field.groupingMode is unset.
		 * See ListGridField.groupingModes','field.groupingModes.
		 * Flags: IR, Group: grouping
		 */
		readonly defaultGroupingMode?: string /* Identifier */;
		/** 
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.defaultIconSrc.
		 * Flags: IRA, Group: editing
		 */
		readonly defaultIconSrc?: string /* String */;
		/** 
		 * If this field ListGridField.canEdit','can be edited, this property can be used to
		 * specify a default value for this field's editor when adding new rows to the grid.
		 * Flags: IRW, Group: editing
		 */
		readonly defaultValue?: any /* Any */;
		/** 
		 * (Read only) Optional "default width" for this field. If set, this value will be returned by the
		 * ListGrid.getDefaultFieldWidth method, and used as the autoFit size for
		 * the field's content.
		 * Flags: IR, Group: autoFitFields
		 */
		readonly defaultWidth?: number /* Integer */;
		/** 
		 * Specifies the ListGridField.optionDataSource field used to retrieve the display
		 * values that are to be mapped from the internal values specified by ListGridField.valueField.
		 * 
		 * If no optionDataSource is defined for the field, the cell will display
		 * the displayField value for the current record instead of the underlying value for
		 * this field. This approach can be used for situations where field values need a stored
		 * value to displayed value mapping, but the set of all possible values is too large to
		 * load as a ValueMap - see ListGridField.optionDataSource for more details
		 * on this approach. Note that if this field is editable this will also be applied to this
		 * field's editors. largeValueMapSQL', 'This sample illustrates this
		 * approach achieved via a server-side SQL join.
		 * 
		 * The display value for a record with a specified displayField can be
		 * picked up via ListGrid.getDisplayValue.
		 * Flags: IRW, Group: display_values
		 */
		readonly displayField?: string /* String */;
		/** 
		 * (Advanced) For fields of type "date", set this property to a valid
		 * DateDisplayFormat to specify how the date should be formatted.
		 * For fields of type "time", set this property to a valid
		 * TimeDisplayFormat','TimeDisplayFormat to specify how the time should be formatted.
		 * If unset, display format may be set at the listGrid level via ListGrid.dateFormatter
		 * or ListGrid.timeFormatter.
		 * 
		 * If this field is editable the displayFormat will also be passed to the editor created
		 * to edit this field. For dates you may also need to set ListGridField.inputFormat.
		 * Flags: IRWA
		 */
		readonly displayFormat?: any /* Varies */;
		/** 
		 * (Advanced) If a ListGridField.displayField is set, should this field show record values from
		 * the displayField?
		 * 
		 * If ListGridField.displayField is specified, and there is no separate
		 * ListGridField.optionDataSource, by default we will show display-field values
		 * from the same record. Setting this property to false would disable this behavior.
		 * 
		 * Alternatively, if there is a ListGridField.optionDataSource (and
		 * ListGridField.autoFetchDisplayMap is false), the displayField would be ignored
		 * for the field and the underlying ListGridField.name','record[fieldName] value would
		 * be displayed to the user. This property may be set to true to override this behavior and
		 * pick up values from the displayField for display in this field even when there
		 * is an optionDataSource set.
		 * 
		 * Note that this property has no effect on fields with an explicitly specified valueMap, or
		 * with an optionDataSource where ListGridField.autoFetchDisplayMap is true.
		 * Flags: IRWA
		 */
		readonly displayValueFromRecord?: boolean;
		/** 
		 * (Read only) Shortcut to configure a FormItem.formula for the ListGridField.editorType','editor used when this
		 * field is ListGrid.canEdit','edited.
		 * Flags: IR
		 */
		readonly editorFormula?: UserFormula;
		/** 
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.iconHeight.
		 * If this property unset, the iconHeight property from the editor can be picked up from
		 * ListGridField.iconHeight instead.
		 * Flags: IRA, Group: editing
		 */
		readonly editorIconHeight?: number;
		/** 
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.iconWidth.
		 * If this property unset, the iconWidth property from the editor can be picked up from
		 * ListGridField.iconWidth instead.
		 * Flags: IRA, Group: editing
		 */
		readonly editorIconWidth?: number;
		/** 
		 * (Advanced) When some cell in this field is being edited, this property can be used to apply
		 * an explicit FormItem.imageURLPrefix to the editor in question.
		 * This can be used to modify the valueIcons within the editor.
		 * If unset, but ListGridField.imageURLPrefix is specified, that will be used
		 * instead.
		 * Flags: IRWA, Group: editing
		 */
		readonly editorImageURLPrefix?: string /* String */;
		/** 
		 * (Advanced) When some cell in this field is being edited, this property can be used to apply
		 * an explicit FormItem.imageURLSuffix to the editor in question.
		 * This can be used to modify the valueIcons within the editor.
		 * If unset, but ListGridField.imageURLPrefix is specified, that will be used
		 * instead.
		 * Flags: IRWA, Group: editing
		 */
		readonly editorImageURLSuffix?: string /* String */;
		/** 
		 * (Advanced) Properties to apply the the form item created to edit this field. (Only used if
		 * this field is editable).
		 * 
		 * For example, if you have a field "shoeSize" with DataSourceField.editorType set
		 * to "SpinnerItem" in order to use a SpinnerItem as your field editor, and you want to pass the
		 * SpinnerItem.step property to the created SpinnerItem:
		 * 
		 * fields : [
		 * { name:"shoeSize", editorType:"SpinnerItem",
		 * editorProperties : { step:0.5 } },
		 * ... other fields ...
		 * ]
		 * 
		 * Flags: IRWA, Group: editing
		 */
		readonly editorProperties?: FormItemProps /* FormItem Properties */;
		/** 
		 * (Read only) Shortcut to configure a FormItem.textFormula for the ListGridField.editorType','editor used when this
		 * field is ListGrid.canEdit','edited.
		 * Flags: IR
		 */
		readonly editorTextFormula?: UserSummary;
		/** 
		 * (Advanced) Name of form item class to use for the form item created to edit this field.
		 * (Only used if this field is editable).
		 * Note: If this is not specified, the edit-form item type may be derived from the
		 * editorType property, typically inherited from datasource fields, or
		 * from the type of the field (showing the appropriate form item for
		 * the data-type). See the editing overview for more on editing ListGrid
		 * fields.
		 * Flags: IRWA, Group: editing
		 */
		readonly editorType?: string /* FormItemClassName */;
		/** 
		 * When some cell in this field is being edited, setting this property will specify the
		 * height for value icons in the cell's editor. If unset, the editor's valueIcon width and
		 * height will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly editorValueIconHeight?: number;
		/** 
		 * When some cell in this field is being edited, setting this property will specify the
		 * value icons to display in the cell's editor. If unset, the editor's valueIcons
		 * will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly editorValueIcons?: any /* Map<String,String> */;
		/** 
		 * When some cell in this field is being edited, setting this property will specify the
		 * width for value icons in the cell's editor. If unset, the editor's valueIcon width and
		 * height will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly editorValueIconWidth?: number;
		/** 
		 * A valueMap to use for editors shown for this field. By default if this is not
		 * specified ListGridField.valueMap','field.valueMap will be used instead.
		 * 
		 * Dynamic valueMaps can be provided by implementing ListGrid.getEditorValueMap.
		 * Flags: IRW, Group: editing
		 */
		readonly editorValueMap?: ValueMap;
		/** 
		 * The value to display for a cell whose value is null or the empty string after
		 * applying ListGridField.formatCellValue','formatting and valueMap (if any).
		 * 
		 * This is the field-specific attribute. You may also set the emptyCellValue at the grid
		 * level to define the emptyCellValue for all empty fields in the grid.
		 * Flags: IRW, Group: display_values
		 */
		readonly emptyCellValue?: string /* HTMLString */;
		/** 
		 * What to do when a user hits enter while editing this field?
		 * Overrides the enterKeyEditAction as specified at the listGrid level while
		 * focus is in this field.
		 * Flags: IRW, Group: editing
		 */
		readonly enterKeyEditAction?: EnterKeyEditAction;
		/** 
		 * By default HTML values in ListGrid cells will be interpreted by the browser.
		 * Setting this flag to true will causes HTML characters to be escaped, meaning the
		 * raw value of the field (for example "&lt;b&gt;AAA&lt;/b&gt;") is displayed
		 * to the user rather than the interpreted HTML (for example "AAA")
		 * Flags: IRW
		 */
		readonly escapeHTML?: boolean;
		/** 
		 * What to do when a user hits escape while editing this field?
		 * Overrides the escapeKeyEditAction as specified at the listGrid level while
		 * focus is in this field.
		 * Flags: IRW, Group: editing
		 */
		readonly escapeKeyEditAction?: EscapeKeyEditAction;
		/** 
		 * (Read only) If true, then this field is excluded from the bound component's view state. In addition,
		 * the field will not be selected as the default title field
		 * by DataBoundComponent.getTitleField
		 * if DataBoundComponent.titleField is not provided.
		 * Flags: IR, Group: viewState
		 */
		readonly excludeFromState?: boolean /* Boolean */;
		/** 
		 * When exporting data to Excel/OpenOffice format using ListGrid.exportData or
		 * ListGrid.exportClientData with ListGrid.exportFieldWidths set,
		 * set this flag false to cause this field to "opt out" of width export. Fields that opt out
		 * in this way have the corresponding spreadsheet column autosized (ie, made just wide enough
		 * that content is not clipped).
		 * 
		 * This setting has no effect if listGrid.exportFieldWidths is not set.
		 * Flags: IRW
		 */
		readonly exportFieldWidth?: boolean;
		/** 
		 * (Read only) FormatString used during exports for numeric or date formatting. See
		 * DataSourceField.exportFormat.
		 * Flags: IR, Group: exportFormatting
		 */
		readonly exportFormat?: string /* FormatString */;
		/** 
		 * (Read only) Dictates whether the data in this field should be exported raw by
		 * ListGrid.exportClientData','exportClientData(). If set to true for a
		 * field, the values in the field-formatters will not be executed for data in this field.
		 * Decreases the time taken for large exports.
		 * Flags: IR
		 */
		readonly exportRawValues?: boolean /* Boolean */;
		/** 
		 * (Advanced) If this ListGrid is showing a filter row
		 * (ListGrid.showFilterEditor','showFilterEditor:true), this property
		 * can be used to specify properties for the appropriate filter form item.
		 * Flags: IRWA, Group: filterEditor
		 */
		readonly filterEditorProperties?: FormItemProps /* FormItem Properties */;
		/** 
		 * (Advanced) If this ListGrid is showing a filter row, this property can be used to
		 * specify the form item class to use for the filter form item associated with this
		 * field
		 * (Only used if this field is not canFilter:false).
		 * Note: If this is not specified, the edit-form item type may be derived from the
		 * 'editorType' property, typically inherited from datasource fields, or from the
		 * 'type' of the field (showing the appropriate form item for the data-type).
		 * Flags: IRWA, Group: filterEditor
		 */
		readonly filterEditorType?: string /* FormItemClassName */;
		/** 
		 * If this listGrid is showing a filter row, this property can be used to specify a
		 * mapping of internal data to/from display values to be in the appropriate filter
		 * row form item.
		 * Flags: IRW, Group: filterEditor
		 */
		readonly filterEditorValueMap?: any /* Object */;
		/** 
		 * (Advanced) If we're showing the filterEditor (listGrid.showFilterEditor is true), this property
		 * determines whether this list should be filtered every time the user edits the value of
		 * the filter editor for this field.
		 * 
		 * The ListGrid.fetchDelay governs the delay in milliseconds between the user editing the
		 * filter editor value, and the new filter being applied to the grid.
		 * Flags: IRWA, Group: filterEditor
		 */
		readonly filterOnKeypress?: boolean;
		/** 
		 * (Read only) With the ListGrid.showFilterEditor','FilterEditor showing, the Operator to
		 * use when matching values for this field.
		 * 
		 * Note that you can set all FilterEditor fields to default to either substring or exact
		 * match via ListGrid.autoFetchTextMatchStyle','autoFetchTextMatchStyle, but if you 
		 * want a mix of exact vs substring match on different fields, you need to use this 
		 * property, and your ListGrid will produce AdvancedCriteria rather than the 
		 * simpler Criteria format. This is automatically and transparently handled by the 
		 * SmartClient Server's SQLDataSource and HibernateDataSource in Power Edition or above, 
		 * but if you have your own filtering implementation, it will need to be able to handle 
		 * AdvancedCriteria.
		 * Flags: IR
		 */
		readonly filterOperator?: OperatorId;
		/** 
		 * (Read only) FormatString for numeric or date formatting. See DataSourceField.format.
		 * Flags: IR, Group: exportFormatting
		 */
		readonly format?: string /* FormatString */;
		/** 
		 * (Read only) Optional stringMethod to format the summary value displayed
		 * in the ListGrid.showGridSummary','grid summary.
		 * Takes a single parameter value and should return the formatted version
		 * of that value. If specified this will be applied instead of any formatting logic applied
		 * via ListGridField.formatCellValue, ListGrid.formatCellValue, etc.
		 * 
		 * Note that for fields with a specified summary function of "count", if no custom formatting
		 * is applied, we default to formatting the count value by appending
		 * field.pluralTitle if defined, otherwise field.title to the
		 * numeric count value returned by the standard count function. To change this behavior for
		 * such fields, specify an explicit 'formatGridSummary' and/or 'formatGroupSummary' method
		 * Flags: IR
		 */
		readonly formatGridSummary?: string /* StringMethod */;
		/** 
		 * (Read only) Optional stringMethod to format the group level summary values for this field displayed via
		 * ListGrid.showGroupSummary.
		 * Takes a single parameter value and should return the formatted version
		 * of that value. If specified this will be applied instead of any formatting logic applied
		 * via ListGridField.formatCellValue, ListGrid.formatCellValue, etc.
		 * 
		 * Note that for fields with a specified summary function of "count", if no custom formatting
		 * is applied, we default to formatting the count value by appending
		 * field.pluralTitle if defined, otherwise field.title to the
		 * numeric count value returned by the standard count function. To change this behavior for
		 * such fields, specify an explicit 'formatGridSummary' and/or 'formatGroupSummary' method
		 * Flags: IR
		 */
		readonly formatGroupSummary?: string /* StringMethod */;
		/** 
		 * (Read only) Whether this field should be "frozen" for the purposes of horizontal scrolling. See
		 * frozenFields.
		 * Flags: IR, Group: frozenFields
		 */
		readonly frozen?: boolean;
		/** 
		 * (Read only) Granularity of grouping for numeric fields.
		 * 
		 * Groups will be formed based on ranges of values of size groupGranularity. For
		 * example, if groupGranularity were 1000, groups would be 0-1000, 1000-2000, etc.
		 * Flags: IR, Group: grouping
		 */
		readonly groupGranularity?: number /* integer */;
		/** 
		 * (Read only) For a field that allows multiple ListGridField.groupingModes','grouping modes,
		 * the current grouping mode.
		 * 
		 * This property is set when a user chooses a particular grouping mode, and may be set on
		 * ListGrid creation to affect the initial grouping.
		 * Flags: IR, Group: grouping
		 */
		readonly groupingMode?: string /* Identifier */;
		/** 
		 * (Read only) If this field can be grouped, this attribute represents the set of grouping styles that 
		 * are available. For example, a "date" field might be able to be 
		 * grouped by week or month, as well as by the date itself.
		 * 
		 * If groupingModes are present and
		 * ListGrid.canGroupBy','grouping is enabled, the menu for this field includes a
		 * submenu of possible grouping modes generated from the groupingModes valueMap.
		 * When the user selects a particular grouping mode,
		 * ListGridField.groupingMode','field.groupingMode is set to the user's chosen mode,
		 * and this choice can be detected via the field parameter to
		 * ListGridField.getGroupValue in order to provide different modes of grouping.
		 * 
		 * The user may also choose to group records without specifying a grouping mode, in this case,
		 * the ListGridField.defaultGroupingMode is used.
		 * 
		 * Note that getGroupValue, groupingModes et al can be specified on
		 * SimpleType declarations. See this list of
		 * builtinGroupingModes','builtin grouping modes for more information.
		 * Flags: IR, Group: grouping
		 */
		readonly groupingModes?: ValueMap;
		/** 
		 * (Read only) For fields of type:"float" or derived from float, number of digits after the decimal point
		 * to consider when grouping.
		 * 
		 * For example, groupPrecision:2 indicates that 45.238 and 45.231 group together,
		 * but 45.22 and 45.27 are separate.
		 * 
		 * See also ListGridField.groupGranularity','groupGranularity for grouping by broader
		 * ranges.
		 * Flags: IR, Group: grouping
		 */
		readonly groupPrecision?: number /* integer */;
		/** 
		 * Custom base style to apply to this field's header button instead of
		 * ListGrid.headerBaseStyle.
		 * Note that depending on the header button constructor, you may have to override
		 * ListGridField.headerTitleStyle as well.
		 * Flags: IRW, Group: appearance
		 */
		readonly headerBaseStyle?: string /* CSSStyleName */;
		/** 
		 * Delay in ms for hovers shown over this field's header.
		 * 
		 * If unset, any ListGridField.hoverDelay will be used for both header hovers
		 * and hovers shown over cells in the grid's body.
		 * Flags: IRW
		 */
		readonly headerHoverDelay?: number /* integer */;
		/** 
		 * (Read only) Optional title for the header button for this field. If specified this will be
		 * displayed in the header button instead of ListGridField.title or
		 * ListGridField.name. Set to an empty string to suppress the title in the
		 * header button entirely.
		 * Flags: IR, Group: appearance
		 */
		readonly headerTitle?: string /* String */;
		/** 
		 * Custom titleStyle to apply to this field's header button instead of
		 * ListGrid.headerTitleStyle.
		 * Note that this will typically only have an effect if
		 * ListGrid.headerButtonConstructor is set to StretchImgButton or a subclass
		 * thereof.
		 * Flags: IRW, Group: appearance
		 */
		readonly headerTitleStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) Marks field as initially hidden.
		 * The user will still be able to show the field via a context menu. 
		 * This may be suppressed by setting ListGridField.canHide to false, or by 
		 * setting ListGrid.canPickFields to false to suppress the
		 * field-picker entirely.
		 * 
		 * To mark a field as completely hidden (not shown to a user at all, in any component), set
		 * DataSourceField.hidden instead.
		 * Flags: IR, Group: appearance
		 */
		readonly hidden?: boolean /* Boolean */;
		/** 
		 * (Read only) If set to true, custom HTML applied as part of hiliting will be applied after
		 * ListGrid.formatCellValue','formatting for each cell in this column. If false, hilite
		 * HTML will be applied before formatting.
		 * 
		 * This attribute overrides ListGrid.hiliteHTMLAfterFormat as defined at the
		 * component level.
		 * Flags: IR
		 */
		readonly hiliteHTMLAfterFormat?: boolean /* Boolean */;
		/** 
		 * Height for hilite icons for this field.
		 * Overrides ListGrid.hiliteIconSize, ListGrid.hiliteIconHeight, and
		 * ListGridField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconHeight?: number;
		/** 
		 * How much padding should there be on the left of DataBoundComponent.hiliteIcons','hilite icons
		 * for this field?
		 * Overrides ListGrid.hiliteIconLeftPadding
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconLeftPadding?: number;
		/** 
		 * (Read only) When ListGrid.hiliteIcons are present, where the hilite icon will be placed
		 * relative to the field value. See HiliteIconPosition.
		 * Overrides ListGrid.hiliteIconPosition.
		 * Flags: IR, Group: hiliting
		 */
		readonly hiliteIconPosition?: HiliteIconPosition;
		/** 
		 * How much padding should there be on the right of DataBoundComponent.hiliteIcons','hilite icons
		 * for this field?
		 * Overrides ListGrid.hiliteIconRightPadding
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconRightPadding?: number;
		/** 
		 * Default width and height of ListGrid.hiliteIcons','hilite icons in this field.
		 * Takes precedence over hiliteIconWidth, hiliteIconHeight and hiliteIconSize specified at
		 * the component level.
		 * Can be overridden via ListGridField.hiliteIconWidth and
		 * ListGridField.hiliteIconHeight
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconSize?: number;
		/** 
		 * Width for hilite icons for this field.
		 * Overrides ListGrid.hiliteIconSize, ListGrid.hiliteIconWidth, and
		 * ListGridField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconWidth?: number;
		/** 
		 * Delay in ms for hovers shown for cells in this field. If unset, the grid's
		 * hoverDelay will be used.
		 * 
		 * This property also governes the hoverDelay for the header button. Developers wishing
		 * to have a different delay for hovers on the header can use ListGridField.headerHoverDelay
		 * in addition to this property.
		 * Flags: IRW
		 */
		readonly hoverDelay?: number /* integer */;
		/** 
		 * Specifies the width of the canvas shown when the mouse hovers over cells in this field. 
		 * 
		 * If unset, default behavior is derived from ListGrid.headerHoverWidth.
		 * Flags: IRW
		 */
		readonly hoverWidth?: number /* Integer */;
		/** 
		 * This property may be set to customize the wrap attribute for the
		 * canvas shown when the mouse hovers over cells in this field. Note that this causes a 
		 * soft-wrap - if set, the hover text will wrap at word boundaries.
		 * 
		 * If unset, default behavior is derived from ListGrid.headerHoverWrap.
		 * Flags: IRW
		 */
		readonly hoverWrap?: boolean /* Boolean */;
		/** 
		 * (Read only) Optional icon to show next to the title for this field.
		 * Should be set to a URL to an image. Relative paths will be evaluated starting at
		 * the imgDir of this component. This URL is partial - it may be updated to indicate
		 * the current disabled (etc) state of the field.
		 * 
		 * If ListGridField.type','field.type is set to "icon", this icon will also be shown
		 * in every cell of this field - see also ListGridField.cellIcon','field.cellIcon.
		 * 
		 * To change this property after fields have been passed to ListGrid.setFields,
		 * use ListGrid.setFieldIcon.
		 * Flags: IR
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * (Read only) If ListGridField.icon is specified, this property can be used to specify the
		 * height of the icon to be displayed in the ListGrid header button.
		 * (See StatefulCanvas.iconHeight)
		 * If this field is editable, and ListGridField.editorIconHeight is unset, this
		 * property will be passed onto the editors for this field as FormItem.iconWidth,
		 * which will effect the default size for ListGridField.icons','icons displayed
		 * in the editor.
		 * Flags: IR
		 */
		readonly iconHeight?: number /* integer */;
		/** 
		 * (Read only) If this field is showing an icon, should it appear to the left or right of the title?
		 * Valid options are "left" or "right"
		 * Flags: IR
		 */
		readonly iconOrientation?: string /* String */;
		/** 
		 * (Read only, Advanced) If this field is editable, this property can be used to specify
		 * FormItem.icons','icons to be displayed in the editors displayed for this field
		 * Flags: IRA, Group: editing
		 */
		readonly icons?: Array<FormItemIcon> /* Array of FormItemIcon Properties */;
		/** 
		 * (Read only) If ListGridField.icon is specified, this property can be used to specify the
		 * size of the icon to be displayed in the ListGrid header button.
		 * (See StatefulCanvas.iconSize)
		 * Flags: IR
		 */
		readonly iconSize?: number /* integer */;
		/** 
		 * (Read only) Pixels between icon and title text.
		 * Flags: IR, Group: buttonIcon
		 */
		readonly iconSpacing?: number /* int */;
		/** 
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.iconVAlign.
		 * Flags: IRA, Group: editing
		 */
		readonly iconVAlign?: string /* String */;
		/** 
		 * (Read only) If ListGridField.icon is specified, this property can be used to specify the
		 * width of the icon to be displayed in the ListGrid header button.
		 * (See StatefulCanvas.iconWidth)
		 * If this field is editable, and ListGridField.editorIconWidth is unset, this
		 * property will be passed onto the editors for this field as FormItem.iconWidth,
		 * which will effect the default size for ListGridField.icons','icons displayed
		 * in the editor.
		 * Flags: IR
		 */
		readonly iconWidth?: number /* integer */;
		/** 
		 * If the user is navigating through the grid using the keyboard, record click or double click
		 * events may be generated via keyboard interactions (see ListGrid.generateClickOnSpace,
		 * ListGrid.generateClickOnEnter, ListGrid.generateDoubleClickOnSpace,
		 * ListGrid.generateDoubleClickOnEnter and ListGrid.arrowKeyAction).
		 * 
		 * These synthetic events have both a target row and column.
		 * Setting this flag to true ensures that this field will never be considered the target for
		 * a keyboard click event.
		 * Flags: IRW, Group: events
		 */
		readonly ignoreKeyboardClicks?: boolean;
		/** 
		 * Height of image shown for fieldTypes image and imageFile in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageHeight is "logoHeight",
		 * record.logoHeight will control the height of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly imageHeight?: number;
		/** 
		 * Size of images shown for fieldTypes image and imageFile in this field.
		 * This setting overrides the global ListGrid default ListGrid.imageSize.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageSize is "logoSize",
		 * record.logoSize will control the size of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly imageSize?: number;
		/** 
		 * (Advanced) If this field has type [ListGridFieldType] set to "image"
		 * and the URL for the image displayed is not absolute, the path of the URL will be relative
		 * to this string
		 * Alternatively, if this field displays any valueIcons, this prefix will be applied to
		 * the beginning of any ListGridField.valueIcons when determining the
		 * URL for the image.
		 * Flags: IRWA, Group: imageColumns
		 */
		readonly imageURLPrefix?: string /* String */;
		/** 
		 * (Advanced) If any cells in this field are showing a value icon (see: ListGridField.valueIcons)
		 * or this is has ListGridFieldType set to "image", this the value
		 * of this property will be appended to the end of the URL for the icon displayed.
		 * Typical usage might be to append a file type such as ".gif" to the
		 * filename of the image.
		 * For editable fields, this property will also be passed through to any editors as
		 * FormItem.imageURLSuffix.
		 * Flags: IRWA, Group: imageColumns
		 */
		readonly imageURLSuffix?: string /* String */;
		/** 
		 * Width of images shown for fieldTypes image and imageFile in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * width. For example, if field.imageWidth is "logoWidth",
		 * record.logoWidth will control the width of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly imageWidth?: number;
		/** 
		 * (Read only) Indicates this field's values should be fetched from another, related DataSource.
		 * The individual field will inherit settings such as ListGridField.type','field.type
		 * and ListGridField.title','field.title from the related DataSource just like
		 * fields from the primary DataSource.
		 * 
		 * When ListGrid.fetchData','fechData() is called, the automatically created DSRequest will
		 * specify DSRequest.additionalOutputs requesting the field, and any Criteria
		 * generated by the component will likewise refer to the field from the related DataSource.
		 * 
		 * It's an error to use this property if the ListGrid does not have a DataSource at all.
		 * The related DataSource must be loaded or a warning will be logged and the field
		 * definition ignored.
		 * 
		 * This value is expected to be set to the following format
		 * dataSourceID.fieldName where dataSourceID is the ID of the
		 * related dataSource and fieldName is the name of the field from that dataSource
		 * from which you wish to retrieve values. Note that if this property is set and
		 * ListGridField.name','field.name is not explicitly specified, this field's name will
		 * default to the fieldName value from this property.
		 * 
		 * Note about automatic cache updates: "update" and "add" operations
		 * submitted automatically by this ListGrid will include
		 * dsRequest.additionalOutputs to ensure all data necessary
		 * for cache updates is returned by the server.
		 * 
		 * If your grid shows data that can be edited elsewhere in the UI (not by
		 * inline editing), to avoid problems with ResultSet automatic
		 * cache synchronization, you may need to switch from using
		 * listGridField.includeFrom to
		 * dataSourceField.includeFrom. This is because
		 * server responses to "add" and "update" operations which are initiated
		 * outside of this grid do not know about the
		 * listGridField.includeFrom setting, and so will not
		 * automatically return data for fields included in this way. Switching
		 * to dataSourceField.includeFrom ensures the field is
		 * always included in server responses, avoiding the issue.
		 * Flags: IR, Group: display_values
		 */
		readonly includeFrom?: string /* String */;
		/** 
		 * (Read only) If a listGrid is showing a field of type summary, should this field be passed to the
		 * recordSummaryFunction when calculating the summary value to display.
		 * If unset, fields are included if they are of type "integer" or "float" only (since most
		 * summary functions perform numeric calculations). See also
		 * ListGridField.includeInRecordSummaryFields.
		 * Flags: IR
		 */
		readonly includeInRecordSummary?: boolean;
		/** 
		 * (Read only) If this listGrid has any fields of type "summary" and
		 * this field will be ListGridField.includeInRecordSummary','included in summary calculations
		 * by default, this attribute provides an opportunity to explicitly specify which summary fields
		 * the record should be displayed in.
		 * 
		 * Specified as an array of fieldNames. If set, this field value will only be included for
		 * record summary value calculations for summary fields who's name is included in this array.
		 * Flags: IR
		 */
		readonly includeInRecordSummaryFields?: Array<string> /* Array of FieldName */;
		/** 
		 * (Read only) In an editable ListGrid, initial value for this field when the user begins editing a new
		 * record.
		 * 
		 * initialValue applies only if a new record is created by end user action (such
		 * as navigating past the end of the data when ListGrid.listEndEditAction is "next") or
		 * by a call to ListGrid.startEditingNew that does not specify the
		 * initialValues argument.
		 * Flags: IR, Group: editing
		 */
		readonly initialValue?: any /* Any */;
		/** 
		 * (Advanced) For fields of type "date" or "datetime", if this is an editable
		 * listGrid, this property allows you to specify the DateItem.inputFormat','inputFormat
		 * applied to the editor for this field.
		 * Flags: IRWA
		 */
		readonly inputFormat?: string /* DateInputFormat */;
		/** 
		 * (Read only, Advanced) If set to true and ListGrid.canRemoveRecords is true, this field will be rendered
		 * as the remove-field for this grid. In most common usage scenarios this field will essentially
		 * be a placeholder indicating where the remove field should be rendered, meaning properties
		 * other than isRemoveField, such as name or title, may
		 * be left unset.
		 * Flags: IRA
		 */
		readonly isRemoveField?: boolean;
		/** 
		 * (Advanced) If ListGrid.showHeaderMenuButton is true, when auto-fitting fields to
		 * the title width via ListGrid.autoFitFieldWidths or ListGridField.autoFitWidth,
		 * should the button be sized such that there is enough space for the header menu button to
		 * show without covering the field title?
		 * 
		 * May be explicitly specified at the ListGridField.leaveHeaderMenuButtonSpace','field level
		 * or at the ListGrid.leaveHeaderMenuButtonSpace','grid level. If not explicitly
		 * specified space will be left for fields with
		 * ListGridField.align set to "left" or "right", but not for
		 * fields with align set to "center".
		 * Flags: IWA, Group: headerMenuButton
		 */
		readonly leaveHeaderMenuButtonSpace?: boolean;
		/** 
		 * The HTML to display in cells of this field if the fieldType is set to link.
		 * 
		 * This property sets linkText that will be the same for all records. You can set linkText
		 * on a per-record basis via ListGridRecord.linkText.
		 * Flags: IRW, Group: display_values
		 */
		readonly linkText?: string /* String */;
		/** 
		 * Name of the property in a ListGridRecord that holds the HTML to display in cells of this
		 * field if the fieldType is set to "link".
		 * Flags: IRW, Group: display_values
		 */
		readonly linkTextProperty?: string /* String */;
		/** 
		 * (Advanced) If this field has type [ListGridFieldType] set to "link",
		 * setting this property will apply a standard prefix to the link URL for cells in this field.
		 * Flags: IRWA
		 */
		readonly linkURLPrefix?: string /* String */;
		/** 
		 * (Advanced) If this field has type [ListGridFieldType] set to "link",
		 * setting this property will apply a standard suffix to the link URL for cells in this field.
		 * Flags: IRWA
		 */
		readonly linkURLSuffix?: string /* String */;
		/** 
		 * When ListGrid.showHeader is false and a field is subject to autofitting (see
		 * ListGrid.autoFitFieldWidths), sets the maximum width of the field. The actual
		 * allowed minimum will be the larger of this property and ListGridField.minWidth. (That is,
		 * ListGridField.minWidth dominates this property.)
		 * Flags: IRW, Group: appearance
		 */
		readonly maxWidth?: number /* Number */;
		/** 
		 * When a field is subject to autofitting (see ListGrid.autoFitFieldWidths), sets the
		 * minimum width of the field. The actual allowed minimum will be the maximum of:
		 * this property,
		 * ListGridField.width (if a number),
		 * the aufofit value determined by the widest value content in this field's column
		 * ListGrid.minFieldWidth
		 * 
		 * Flags: IRW, Group: appearance
		 */
		readonly minWidth?: number /* Number */;
		/** 
		 * (Read only) Indicates that this field should always be Array-valued. This property will be
		 * passed through to the generated edit-item when editing the field - so if
		 * ListGridField.valueMap is set, the default editor will be a SelectItem with
		 * SelectItem.multiple set to true.
		 * 
		 * Note that for databound grids it typically makes sense to set DataSourceField.multiple
		 * rather than setting the property directly on the ListGridField object.
		 * Flags: IR, Group: editing
		 */
		readonly multiple?: boolean /* Boolean */;
		/** 
		 * (Read only) Name of this field. Must be unique within this ListGrid as well as a valid JavaScript
		 * identifier - see FieldName for details and how to check for validity.
		 * 
		 * The name of field is also the property in each record which holds the value for that
		 * field.
		 * 
		 * If a ListGrid.dataSource is specified and the DataSource has a field with the
		 * same name, the ListGridField and DataSourceField are merged, with any properties on the
		 * ListGridField overriding those on the DataSourceField.
		 * Flags: IR, Group: data
		 */
		readonly name?: string /* FieldName */;
		/** 
		 * (Read only) This value is managed by the menu item titled ListGrid.filterUsingText','"Filter using"
		 * in the ListGrid.showHeaderContextMenu','headerContextMenu that appears when 
		 * ListGrid.allowFilterOperators','allowFilterOperators has been set to true.
		 * 
		 * If you need to reset this filter operator you should call ListGrid.setFieldProperties','listGrid.setFieldProperties, as in this example:
		 * 
		 * listGrid.setFieldProperties(fieldName, {operator: null});
		 * 
		 * Flags: R
		 */
		readonly operator?: string /* String */;
		/** 
		 * If ListGridField.optionDataSource is set for this ListGridField, criteria specified in this
		 * attribute will be passed to the dataSource when performing the fetch operation to
		 * determine data-value to display-value mappings
		 * Flags: IRW, Group: display_values
		 */
		readonly optionCriteria?: Criteria;
		/** 
		 * Derive a ValueMap by fetching records from another DataSource and extracting
		 * the ListGridField.valueField','valueField and
		 * ListGridField.displayField','displayField in the loaded records, to derive one
		 * valueMap entry per record loaded from the optionDataSource.
		 * 
		 * Unlike the similar use of PickList.optionDataSource for PickList','pickLists
		 * used during editing or filtering, listGridField.optionDataSource causes the
		 * entire set of records from the optionDataSource to be fetched, without paging.
		 * Hence listGridField.optionDataSource is appropriate only for smaller valueMaps. For very
		 * large valueMap situations, such as an accountId field that should be displayed as an
		 * accountName where there are thousands of accounts, the correct approach is:
		 * 
		 * do not set listGridField.optionDataSource
		 * declare two fields in the DataSource, eg "accountId" and "accountName".
		 * Set the ListGridField.displayField attribute on the data field to the
		 * name of the display field.
		 * When fetching records for display in a grid, have your server send back values for
		 * both fields, but show only the data field ("accountId") in the grid.
		 * 
		 * In this case the cells in the accountId field will show the record value from the
		 * accountName field. This approach means the valueMap will never be loaded in its
		 * entirety, instead, each loaded record contains the valueMapping for that one record, as
		 * a pair of fields within the record.
		 * 
		 * If you are using the SmartClient Server Framework with the SQL or JPA/Hibernate built-in
		 * connectors, this entire approach can be achieved very easily using the
		 * DataSourceField.includeFrom setting - see the
		 * DataSourceField.includeFrom','docs for includeFrom for details.
		 * 
		 * Notes:
		 * 
		 * When using the above approach, it is key that the server return both
		 * the underlying stored value and the display value, as suggested above.
		 * This approach allows the PickList.optionDataSource property to be used to
		 * provide paged valueMaps during inline editing and
		 * ListGrid.showFilterEditor','inline filtering. This can be achieved by setting the
		 * optionDataSource attribute on the form item used to edit the field
		 * via ListGridField.editorProperties (for editing) or
		 * ListGridField.filterEditorProperties','field.filterEditorProperties (for
		 * filtering), without specifying an optionDataSource at the listGridField level.
		 * Alternatively developers can use ListGridField.autoFetchDisplayMap to
		 * suppress the fetch against the optionDataSource at the listGrid level.
		 * Setting listGridField.optionDataSource to the same dataSource as the
		 * listGrid is not the same as omitting the optionDataSource setting entirely. Unless
		 * ListGridField.autoFetchDisplayMap has been set to explicitly disable fetching,
		 * a fetch will be performed against the dataSource to build a valueMap which will be used
		 * as the definitive mapping from data to display values, rather than picking up the display
		 * values from the records themselves. This distinction is required to support cases where
		 * the ListGridField.valueField points to a different field in the grid (useful for
		 * hierarchical relationships, for example), or where ListGridField.optionCriteria or
		 * ListGridField.optionOperationId are specified and return different data from
		 * the records displayed within the grid.
		 * If a displayField is specified, with no associated optionDataSource, and the field is
		 * editable, updating the edit value for the field may not automatically update the displayField
		 * edit value, meaning the user may not realize the edit value has been modified.
		 * If the new value came from the user editing the field, and the edit item has
		 * a valueMap or optionDataSource specified, the display value is picked up automatically and
		 * stored out on the displayField for the record. However if the value was set programmatically,
		 * the developer should also set the edit value for the display field to ensure the displayed
		 * value reflects the new edit value. Note that when this occurs, a warning will be logged
		 * which can be disabled via ListGrid.warnOnUnmappedValueFieldChange.
		 * For very advanced usage a developer can use ListGridField.displayValueFromRecord
		 * to explicitly tell the grid whether or not to display the display field value for the record
		 * in this field when a displayField is specified. See documentation on that property for more
		 * information
		 * 
		 * Flags: IRW, Group: display_values
		 */
		readonly optionDataSource?: string /* String */;
		/** 
		 * (Read only) If this field has an optionDataSource specified and
		 * ListGridField.autoFetchDisplayMap','autoFetchDisplayMap is set, this attribute
		 * provides a way to customize the dataSource request issued to fetch the display map from
		 * the option dataSource. This provides, among other capabilities, a way to trigger the
		 * server to return summary records.
		 * Flags: IR, Group: display_values
		 */
		readonly optionFilterContext?: DSRequest /* DSRequest Properties */;
		/** 
		 * (Read only) If this field has an optionDataSource specified and
		 * ListGridField.autoFetchDisplayMap','autoFetchDisplayMap is set, this attribute
		 * provides a way to customize the DSRequest.operationId passed to
		 * dataSource.fetchData() when retrieving the display map from the option
		 * dataSource.
		 * Flags: IR, Group: display_values
		 */
		readonly optionOperationId?: string /* String */;
		/** 
		 * (Read only) For fields with an ListGridField.optionDataSource, where
		 * ListGridField.autoFetchDisplayMap is true, this property will govern
		 * the textMatchStyle attribute of the DSRequest parameter passed to
		 * DataSource.fetchData when retrieving the remote data set to be used as
		 * a basis for this field's valueMap.
		 * Flags: IR, Group: display_values
		 */
		readonly optionTextMatchStyle?: TextMatchStyle;
		/** 
		 * (Read only) Only applies to fields of type "summary".
		 * This attribute is set on a summary field, when calculating the summary value from
		 * some record, the summary function will only be passed the fields before this summary field.
		 * This may be useful for displaying running totals across a record.
		 * 
		 * Note that this feature would typically be used with
		 * ListGrid.canReorderFields','canReorderFields:false
		 * Flags: IR
		 */
		readonly partialSummary?: boolean;
		/** 
		 * (Read only) Causes a tooltip hover to appear on the header generated for this field (effectively
		 * sets Canvas.prompt for the header).
		 * Flags: IR
		 */
		readonly prompt?: string /* HTMLString */;
		/** 
		 * (Read only) Only applies to fields of type "summary".
		 * Fields of this type will display a calculated value based on the other field values
		 * within the current record.
		 * 
		 * This attribute specifies how the summary field value will be calculated. See
		 * RecordSummaryFunction for valid options.
		 * 
		 * A subset of the ListGrid's fields will be passed to the RecordSummaryFunction.
		 * Which fields to include is determined based on ListGridField.includeInRecordSummary
		 * 
		 * If ListGrid.showGridSummary or ListGrid.showGroupSummary is true, this
		 * field's value in the summary row[s] will still be calculated by calling this method.
		 * In this case, the record object passed in will contain summary values for each field.
		 * If custom handling is required for this case, it may be detected by checking the
		 * record object's ListGridRecord.isGroupSummary and ListGridRecord.isGridSummary
		 * attributes.
		 * Flags: IR
		 */
		readonly recordSummaryFunction?: RecordSummaryFunction;
		/** 
		 * When the user edits cells in this field, is this value required to be non-empty
		 * in order for validation to pass.
		 * Note: for databound listGrids, this property may be specified on the
		 * DataSourceField, enabling both client and server side validation.
		 * Flags: IRW, Group: gridValidation
		 */
		readonly required?: boolean /* Boolean */;
		/** 
		 * Whether this field should be included in the printable representation of the grid.
		 * Flags: IRW, Group: printing
		 */
		readonly shouldPrint?: boolean;
		/** 
		 * (Advanced) When set to false, don't apply alternate-row styling to this field.
		 * Flags: IRWA
		 */
		readonly showAlternateStyle?: boolean;
		/** 
		 * When set to false, this field will not show a context menu in its header.
		 * Flags: IRW
		 */
		readonly showDefaultContextMenu?: boolean /* Boolean */;
		/** 
		 * (Read only) If using an icon for this button, whether to switch the icon image if the button becomes
		 * disabled.
		 * Flags: IR, Group: buttonIcon
		 */
		readonly showDisabledIcon?: boolean /* Boolean */;
		/** 
		 * (Read only) If using an icon for this button, whether to switch the icon image when the mouse goes
		 * down on the button.
		 * Flags: IR, Group: buttonIcon
		 */
		readonly showDownIcon?: boolean /* Boolean */;
		/** 
		 * (Read only) For a field of type:"imageFile", indicates whether to stream the image and display it
		 * inline or to display the View and Download icons.
		 * Flags: IR
		 */
		readonly showFileInline?: boolean;
		/** 
		 * (Read only) If using an icon for this button, whether to switch the icon image when the button
		 * receives focus.
		 * 
		 * If StatefulCanvas.showFocusedAsOver is true, the "Over" icon will be
		 * displayed when the canvas has focus, otherwise a separate "Focused" icon
		 * will be displayed
		 * Flags: IR, Group: buttonIcon
		 */
		readonly showFocusedIcon?: boolean /* Boolean */;
		/** 
		 * (Read only) If ListGrid.showGridSummary is true, should this field show a summary value.
		 * If unset, this field will show a summary value in the summary row if an
		 * explicit ListGridField.summaryFunction is specified or if a
		 * SimpleType.getDefaultSummaryFunction','default summary function is defined
		 * for the specified field type.
		 * Flags: IR
		 */
		readonly showGridSummary?: boolean /* Boolean */;
		/** 
		 * (Read only) If ListGrid.showGroupSummary is true, should this field show a summary value
		 * in a summary row when the grid is grouped?
		 * If unset, this field will show a summary value in the summary row if an
		 * explicit ListGridField.summaryFunction is specified or if a
		 * SimpleType.getDefaultSummaryFunction','default summary function is defined
		 * for the specified field type.
		 * Flags: IR
		 */
		readonly showGroupSummary?: boolean;
		/** 
		 * Determines whether hiliting for this field is shown in a group summary.
		 * Set to false to prevent this field from showing hilite in a group summary.
		 * 
		 * All hilites in group summary rows can be controlled with the
		 * ListGrid.showHilitesInGroupSummary property.
		 * Flags: IRW
		 */
		readonly showHilitesInGroupSummary?: boolean /* Boolean */;
		/** 
		 * Whether to show hovers for this field. The default hover will be the contents of the
		 * cell the user is hovering over, and can be customized via
		 * ListGridField.hoverHTML','field.hoverHTML().
		 * 
		 * ListGrid.canHover can be set to true to cause hovers to be shown for all fields
		 * by default. In this case, field.showHover can be set to false to suppress
		 * hovers for an individual field.
		 * 
		 * All hovers can be disabled, regardless of other settings, by setting
		 * ListGrid.showHover to false.
		 * Flags: IRW
		 */
		readonly showHover?: boolean;
		/** 
		 * (Advanced) When set to true and showHover is also true for the field, shows a widget hovering at 
		 * the mouse point.
		 * 
		 * A number of builtin modes are provided - see HoverMode.
		 * 
		 * Also supported at the ListGrid.showHoverComponents','ListGrid-level.
		 * Flags: IRWA, Group: hoverComponents
		 */
		readonly showHoverComponents?: boolean /* Boolean */;
		/** 
		 * (Read only) If using an icon for this button, whether to switch the icon image on mouse rollover.
		 * Flags: IR, Group: buttonIcon
		 */
		readonly showRollOverIcon?: boolean /* Boolean */;
		/** 
		 * (Read only) If using an icon for this button, whether to switch the icon image when the button
		 * becomes selected.
		 * Flags: IR, Group: buttonIcon
		 */
		readonly showSelectedIcon?: boolean /* Boolean */;
		/** 
		 * This property may be set to false to explicitly suppress display of
		 * the field title in the column header button for the field.
		 * Flags: IRW
		 */
		readonly showTitle?: boolean;
		/** 
		 * If this field has a valueIcons property specified, setting this property causes
		 * the valueIcon for each value to be displayed in the cell without also showing the
		 * record's value for the field.
		 * 
		 * If unset the default behavior is to show the icon only if an explicit valueMap is
		 * specified as well in addition to a valueIcons map, otherwise show both the valueIcon and
		 * value for the cell.
		 * 
		 * Note that if this field is editable FormItem.showValueIconOnly will be passed
		 * through to editors displayed in this field.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly showValueIconOnly?: boolean;
		/** 
		 * For a field with displayField configured, should client-side sorting
		 * be performed on the display field value? Unless explicitly set to false
		 * the display field value is used.
		 * Flags: IRW, Group: display_values
		 */
		readonly sortByDisplayField?: boolean;
		/** 
		 * If ListGridField.valueMap is set, and the grid is ListGrid.setSort','sorted
		 * by this field, should the data be sorted by the underlying data value or the
		 * mapped display value. If unset, will sort by display value. Set to false
		 * to sort by underlying data value. Note that this has no effect if
		 * a ListGridField.sortNormalizer has been specified.
		 * Flags: IRW
		 */
		readonly sortByMappedValue?: boolean;
		/** 
		 * Specifies the default sorting direction for this column. If specified on the
		 * ListGrid.sortField','default sort field for the listGrid, sorting occurs
		 * automatically, otherwise this will be the default direction when the user clicks the
		 * field header, or calls ListGrid.sort without specifying an explicit sort
		 * direction.
		 * 
		 * Overrides ListGrid.sortDirection
		 * Flags: IRW, Group: sorting
		 */
		readonly sortDirection?: SortDirection;
		/** 
		 * (Read only) If ListGrid.showGridSummary or ListGrid.showGroupSummary is true,
		 * this attribute can be used to specify
		 * an explicit SummaryFunction for calculating the summary value to
		 * display.
		 * 
		 * If an array of summaryFunctions is specified, they will be executed in turn and the
		 * grid will show multiple summary rows at the grid or group level (or both)
		 * containing the resulting values.
		 * Flags: IR
		 */
		readonly summaryFunction?: SummaryFunction | Array<SummaryFunction> /* SummaryFunction | Array of SummaryFunction */;
		/** 
		 * (Advanced) Optional long summary title for this field, provided in addition to
		 * ListGridField.title. This gives the developer an option to use a very short,
		 * or empty title for the ListGrid column (where space may be a factor), but have a longer
		 * value available to be used elsewhere.
		 * 
		 * By default this value will be used for the title of the context-menu item
		 * for showing/hiding the listGrid field when the user right-clicks on the ListGrid header.
		 * Flags: IRWA, Group: appearance
		 */
		readonly summaryTitle?: string /* String */;
		/** 
		 * The value to display for a ListGridField when it appears in the ListGrid.summaryRow','summaryRow. The
		 * default for normal fields is null and for special fields, like the ListGrid.checkboxField','checkboxField,
		 * the default is to show a blank value (a non-breaking space).
		 * Flags: IRW
		 */
		readonly summaryValue?: string /* HTMLString */;
		/** 
		 * (Read only) If ListGrid.showGridSummary or ListGrid.showGroupSummary is true and the
		 * ListGridField.summaryFunction is set to "title", this attribute may be
		 * set to a string to display in the group and/or grid summary. If unspecified the
		 * ListGridField.title will show up in the summary.
		 * Flags: IR
		 */
		readonly summaryValueTitle?: string /* String */;
		/** 
		 * If this field has a valueIcons property specified, setting this property to true will
		 * prevent the valueIcon being written out into this field's cells.
		 * 
		 * Note this property may also be set to false to avoid showing the standard
		 * ListGrid.booleanTrueImage and ListGrid.booleanFalseImage for fields of type
		 * boolean.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly suppressValueIcon?: boolean;
		/** 
		 * By default, clicking a link rendered by this item opens it in a new browser window. You
		 * can alter this behavior by setting this property. The value of this property will be
		 * passed as the value to the target attribute of the anchor tag used to render
		 * the link.
		 * 
		 * If you set listGridField.target to "javascript", the default behavior is to catch and
		 * consume mouse-clicks that would result in the link being followed. Instead, the
		 * ListGrid.cellClick event is fired for the containing cell.
		 * Flags: IRW
		 */
		readonly target?: string /* String */;
		/** 
		 * (Advanced) Time-format to apply to date type values within this field. If specified, any
		 * dates displayed in this field will be formatted as times using the appropriate format.
		 * This is most commonly only applied to fields specified as type "time" though
		 * if no explicit ListGridField.dateFormatter is specified it will be respected for other
		 * fields as well.
		 * 
		 * If unspecified, a timeFormatter may be defined
		 * ListGrid.timeFormatter','at the component level and will be respected by fields
		 * of type "time".
		 * 
		 * If this field is editable, the timeFormatter will also be passed to the editor created to
		 * edit this field as FormItem.timeFormatter.
		 * Flags: IRWA, Group: appearance
		 */
		readonly timeFormatter?: TimeDisplayFormat;
		/** 
		 * A title for this field, to display in the header for the field and in other
		 * contexts such as the ListGrid.canPickFields','menu for picking visible fields.
		 * 
		 * Note: if you want to use HTML tags to affect the display of the header, you should do so
		 * via ListGridField.headerTitle instead so that other places where the title
		 * appears in the UI are not affected. For example, you might set headerTitle
		 * to an empty string to suppress the header title on a narrow column, but you would retain
		 * the normal title in the title property to avoid a blank menu item in the
		 * field picker menu, DataBoundComponent.editHilites','hilite editor and other contexts.
		 * 
		 * Alternately you can specify a ListGridField.getFieldTitle method on the field to return the
		 * HTML for the field title.
		 * Flags: IRW, Group: appearance
		 */
		readonly title?: string /* String */;
		/** 
		 * (Read only) ListGrids picks a renderer for the view and edit mode of a field based on this attribute.
		 * See ListGridFieldType for a summary of how types are rendered.
		 * Flags: IR, Group: appearance
		 */
		readonly type?: ListGridFieldType;
		/** 
		 * Formula definition for this field.
		 * 
		 * Advanced applications that wish to save formulas separately from a grid's
		 * ListGrid.getViewState','viewState can provide a UserFormula as part of the field
		 * definition, and may subsequently access the formula is updated via the
		 * ListGrid.formulaUpdated notification.
		 * Flags: IRW
		 */
		readonly userFormula?: UserFormula;
		/** 
		 * Summary definition for this field.
		 * 
		 * Advanced applications that wish to save summaries separately from a grid's
		 * ListGrid.getViewState','viewState can provide a UserSummary as part of the
		 * field definition, and may subsequently access the summary is updated via the
		 * ListGrid.summaryUpdated notification.
		 * Flags: IRW
		 */
		readonly userSummary?: UserSummary;
		/** 
		 * If set to true, any ListGridField.validators for this field will be run whenever
		 * the value of the field is changed.
		 * 
		 * Analogous to the FormItem.validateOnChange property.
		 * Flags: IRW, Group: gridValidation
		 */
		readonly validateOnChange?: boolean;
		/** 
		 * Array of Validator objects for this field. When the user edits cells in
		 * this field, these validators will be applied to the edited value.
		 * Note: for databound listGrids, this property may be specified on the
		 * DataSourceField, enabling both client and server side validation.
		 * Flags: IRW, Group: gridValidation
		 */
		readonly validators?: Array<Validator> /* Array of Validator */;
		/** 
		 * Specifies the ListGridField.optionDataSource field used to retrieve the stored
		 * values that are to be mapped to the display values (specified by
		 * ListGridField.displayField). Note that if this field is editable this will also
		 * be applied to this field's editors.
		 * Flags: IRW, Group: display_values
		 */
		readonly valueField?: string /* String */;
		/** 
		 * Height for value icons for this listGrid field.
		 * Overrides ListGrid.valueIconSize, ListGrid.valueIconHeight, and
		 * ListGridField.valueIconSize.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIconHeight?: number;
		/** 
		 * How much padding should there be on the left of valueIcons for this field
		 * Overrides ListGrid.valueIconLeftPadding
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIconLeftPadding?: number;
		/** 
		 * If we're showing a valueIcon for this field should it appear to the left or the right
		 * of the text? By default the icon will appear to the left of the textual value -
		 * set this to "right" to show the icon on the right of the text.
		 * Has no effect if ListGridField.showValueIconOnly is true
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIconOrientation?: string /* String */;
		/** 
		 * How much padding should there be on the right of valueIcons for this field
		 * Overrides ListGrid.valueIconRightPadding
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIconRightPadding?: number;
		/** 
		 * This property is a mapping from data values for this field to SCImgURL','urls for
		 * icons to display for those data values. 
		 * 
		 * For example, given a field named "status" with possible values
		 * "Normal", "Slow", "Offline", the follow definition would show various icons for that
		 * field:
		 * 
		 * 
		 * 
		 * fields : [
		 * { name:"status",
		 * valueIcons: {
		 * Normal : "greenIcon.png",
		 * Slow : "yellowIcon.png",
		 * Offline : "redIcon.png"
		 * }
		 * },
		 * ... other fields ...
		 * ]
		 * 
		 * 
		 * 
		 * 
		 * If a simple value-to-URL mapping is not enough, you can override ListGrid.getValueIcon
		 * to customize the behavior. You can even specify an empty valueIcons map
		 * and use ListGrid.getValueIcon to return arbitrary icons with no fixed mapping.
		 * 
		 * valueIcons can either be displayed alongside the normal value or can
		 * replace the normal field value so that only the icon is shown. See
		 * ListGridField.showValueIconOnly. When placed alongside the value, use
		 * ListGridField.valueIconOrientation to control left- vs right-side placement.
		 * 
		 * If inline editing is enabled for this field, editors displayed for this field will also
		 * show valueIcons. This may be overridden by explicitly setting
		 * ListGridField.editorValueIcons.
		 * 
		 * Note that the following attributes related to valueIcon styling will also be picked up
		 * by the editor from the ListGridField object unless explicitly specified via the
		 * equivalent editor_ attributes:
		 * ListGridField.valueIconWidth
		 * ListGridField.valueIconHeight
		 * ListGridField.valueIconSize
		 * ListGridField.valueIconLeftPadding
		 * ListGridField.valueIconRightPadding
		 * ListGridField.imageURLPrefix
		 * ListGridField.imageURLSuffix
		 * 
		 * If ListGridField.valueIconClick is defined for the field, a pointer
		 * cursor will be shown when the user rolls over the valueIcon, and the valueIconClick
		 * method will execute when the user clicks the icon.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIcons?: any /* Map<String,String> */;
		/** 
		 * Default width and height of value icons in this field.
		 * Takes precedence over valueIconWidth, valueIconHeight and valueIconSize specified at
		 * the ListGrid level.
		 * Can be overridden via ListGridField.valueIconWidth and {ListGridField.valueIconHeight}
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIconSize?: number;
		/** 
		 * Width for value icons for this listGrid field.
		 * Overrides ListGrid.valueIconSize, ListGrid.valueIconWidth, and
		 * ListGridField.valueIconSize.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly valueIconWidth?: number;
		/** 
		 * Array of legal values for this field, or an Object where each property maps a stored
		 * value to a user-displayable value.
		 * Note that if this field is editable (see ListGrid.canEdit,
		 * ListGridField.canEdit), editors displayed for this field will pick up their
		 * valueMap either from this value or from ListGridField.editorValueMap.
		 * 
		 * See also DataSourceField.valueMap.
		 * Flags: IRW, Group: display_values
		 */
		readonly valueMap?: any | Array<string> /* Object | Array of String */;
		/** 
		 * The width of this field, specified as either an absolute number of pixels,
		 * a percentage of the remaining space like "25%", or "*" to split remaining space among
		 * all fields which have "*". 
		 * Caution: stretch sizes are currently ignored if the field is being autofitted
		 * (see ListGrid.autoFitFieldWidths), unless ListGrid.showHeader is false.
		 * 
		 * Note: if autofitting is active for a field, the width will default to the numerical
		 * autofit width for that field (so it will not be stretched larger to fill available
		 * space). Otherwise, if not autofitting, the width will default to "*" causing it to be
		 * automatically stretched.
		 * 
		 * See also ListGrid.minFieldWidth to ensure no field goes below a minimum size.
		 * 
		 * Use ListGrid.resizeField to programmatically change field width after creation.
		 * 
		 * Use ListGrid.getFieldWidth to access the rendered field width after
		 * the ListGrid is drawn.
		 * Flags: IRW, Group: appearance
		 */
		readonly width?: number | string /* Number | String */;
		/** 
		 * Should the field title wrap if there is not enough space horizontally to accommodate it.
		 * If unset, default behavior is derived from ListGrid.wrapHeaderTitles. (This is a
		 * soft-wrap - if set the title will wrap at word boundaries.)
		 * 
		 * Notes:
		 * If autofitting is active, ListGridField.width and ListGridField.minWidth can be set to control the
		 * minimum field width - see the links for details.
		 * This feature is incompatible with ListGrid.clipHeaderTitles, and
		 * clipHeaderTitles will be disabled for wrapping fields.
		 * Flags: IRW
		 */
		readonly wrap?: boolean /* Boolean */;

		/* Instance Method Overrides */
		/**  
		 *  Callback fired when field changes value as the result of a cell edit. Fired only on
		 * successful save of edit, when the new value doesn't match the value before editing.
		 * 
		 * Same signature as ListGrid.cellChanged, but defined on a per-field
		 * basis.
		 * 
		 * 
		 * @param {ListGridRecord} record - record for the cell being changed
		 * @param {any} newValue - new value for the cell
		 * @param {any} oldValue - old value for the cell
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number of the cell
		 * @param {ListGrid} grid - grid where cell was changed.
		 */
		cellChanged?(record:ListGridRecord, newValue:any /* Any */, oldValue:any /* Any */, rowNum:number, colNum:number, grid:ListGrid): void; 

		/**  
		 *  If this field is editable, any FormItem.change','change handler specified
		 * on the ListGridField will be passed onto the editors for this field.
		 * 
		 * Note that if ListGridField.canToggle is true, the user may change the value of
		 * a boolean field without going into edit mode by single clicking on the field. In this
		 * case the ListGridField.change and ListGridField.changed handlers will
		 * fire but the form and item parameters will be null.
		 * 
		 * 
		 * @param {DynamicForm} form - the managing DynamicForm instance
		 * @param {FormItem} item - the editor (form item) itself (also available as "this"). Note that in addition to the standard FormItem APIs available
		 * on the editor, it also has:
		 * - a pointer back to the containing listGrid
		 * [item.grid]
		 * - the colNum being edited [item.colNum]
		 * - the rowNum being edited [item.rowNum]
		 * @param {any} value - The new value of the form item
		 * @param {any} oldValue - The previous value of the form item
		 * @return {boolean} The change may be cancelled by returning false
		 */
		change?(form:DynamicForm, item:FormItem, value:any /* Any */, oldValue:any /* Any */): boolean /* Boolean */; 

		/**  
		 *  If this field is editable, any FormItem.changed','changed handler specified
		 * on the ListGridField will be passed onto the editors for this field.
		 * Note that if ListGridField.canToggle is true, the user may change the value of
		 * a boolean field without going into edit mode by single clicking on the field. In this
		 * case the ListGridField.change and ListGridField.changed handlers will
		 * fire but the form and item parameters will be null.
		 * 
		 * 
		 * @param {DynamicForm} form - the managing DynamicForm instance
		 * @param {FormItem} item - the editor (form item) itself (also available as "this"). Note that in addition to the standard FormItem APIs available
		 * on the editor, it also has:
		 * - a pointer back to the containing listGrid
		 * [item.grid]
		 * - the colNum being edited [item.colNum]
		 * - the rowNum being edited [item.rowNum]
		 * @param {any} value - The current value (after the change).
		 */
		changed?(form:DynamicForm, item:FormItem, value:any /* Any */): void; 

		/**  
		 *  If this field ListGridField.canEdit','can be edited, this property can be used to
		 * set a dynamic default value which will show up in editors for this field.
		 * Will be applied to the editor for the field as FormItem.defaultDynamicValue
		 * 
		 * 
		 * @param {FormItem} item - The editor for the cell itself (also available as "this"). Note that in addition to the standard FormItem APIs available
		 * on the editor, it also has:
		 * - a pointer back to the containing listGrid
		 * [item.grid]
		 * - the colNum being edited [item.colNum]
		 * - the rowNum being edited [item.rowNum]
		 * @param {DynamicForm} form - the managing DynamicForm instance
		 * @param {any} values - the current set of values for the form as a whole
		 */
		defaultDynamicValue?(item:FormItem, form:DynamicForm, values:any /* Object */): void; 

		/**  
		 * (Advanced)  Callback fired when the user first starts editing a cell.
		 * 
		 * This callback is typically used to establish dynamic default values via
		 * ListGrid.setEditValue or ListGrid.setEditValues.
		 * 
		 * 
		 * @param {ListGridRecord} record - record for the cell being edited. Will be null for a new, unsaved record.
		 * @param {any} value - value for the cell being edited
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number of the cell
		 * @param {ListGrid} grid - ListGrid to which this field belongs
		 */
		editorEnter?(record:ListGridRecord, value:any /* Any */, rowNum:number /* int */, colNum:number /* int */, grid:ListGrid): void; 

		/**  
		 * (Advanced)  Callback fired when the user attempts to navigate away from the current edit cell,
		 * or complete the current edit.
		 * Return false from this method to cancel the default behavior (Saving / cancelling the
		 * current edit / moving to the next edit cell)
		 * 
		 * 
		 * @param {EditCompletionEvent} editCompletionEvent - What interaction triggered this edit cell exit
		 * @param {ListGridRecord} record - record for the cell being edited
		 * @param {any} newValue - new value for the cell being edited
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number of the cell
		 * @param {ListGrid} grid - ListGrid to which this field belongs
		 * @return {boolean} Returning false from this method will cancel the default behavior                      (for example saving the row) and leave the editor visible and focus&#010                      in this edit cell.
		 */
		editorExit?(editCompletionEvent:EditCompletionEvent, record:ListGridRecord, newValue:any /* Any */, rowNum:number /* int */, colNum:number /* int */, grid:ListGrid): boolean; 

		/**  
		 *  Return the HTML to display in cells of this field.
		 * 
		 * Given the raw value for this field as taken from the record Formatter to apply to the
		 * static values displayed in cells for this field.
		 * 
		 * Example usage: formatting a currency value stored in cents (so "100" to "$1.00")
		 * The value passed to this method is the raw value for the cell.
		 * Takes precedence over formatCellValue defined at the grid level for cells
		 * in this field.
		 * 
		 * Note: this formatter will not be applied to the values displayed in cells being edited.
		 * The ListGridField.formatEditorValue','formatEditorValue() is provided for that purpose.
		 * 
		 * 
		 * @param {any} value - raw value for the cell, from the record for the row
		 * @param {ListGridRecord} record - Record object for the cell. Note: If this is a new row that has not been saved, in an
		 * editable grid, it has no associated record object. In this case the edit values will
		 * be passed in as this parameter (see ListGrid.getEditValues)
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number for the cell.
		 * @param {ListGrid} grid - the ListGrid displaying the cell
		 * @return {string} HTML to display in the cell
		 */
		formatCellValue?(value:any /* Any */, record:ListGridRecord, rowNum:number, colNum:number, grid:ListGrid): string /* HTMLString */; 

		/**  
		 *  Return the value to display in cells of this field which are being edited.
		 * 
		 * Example usage: converting a stored value in cents (100) to a dollar-and-cents
		 * value in the editor (1.00)
		 * 
		 * The value passed to this method is the raw value for the cell.
		 * 
		 * formatEditorValue takes precedence over ListGrid.formatEditorValue
		 * defined at the grid level for cells in this field.
		 * 
		 * To convert the formatted value displayed within an editor back to a raw value, implement
		 * ListGridField.parseEditorValue as well.
		 * 
		 * 
		 * @param {any} value - raw value for the cell being edited
		 * @param {ListGridRecord} record - Record object for the cell. Note: If this is a new row that has not been saved, in an
		 * editable grid, it has no associated record object. In this case the edit values will
		 * be passed in as this parameter.
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number for the cell.
		 * @param {ListGrid} grid - A pointer to the ListGrid displaying the cell
		 * @return {any} formatted value to display in the editor
		 */
		formatEditorValue?(value:any /* Any */, record:ListGridRecord, rowNum:number, colNum:number, grid:ListGrid /* ListGrid Instance */): any /* Any */; 

		/**  
		 *  When a field has ListGridField.autoFreeze','autoFreeze set to true, developers can
		 * implement this method to indicate where in the frozen-fields array this field should
		 * appear.
		 * 
		 * Some automatically generated fields, such as
		 * ListGrid.rowNumberField','rowNumberField,
		 * ListGrid.expansionField','expansionField and
		 * ListGrid.checkboxField','checkboxField, provide default implementations of this
		 * method.
		 * 
		 * @return {number} the index at which this autoFreeze field should appear in the frozen body
		 */
		getAutoFreezePosition?(): number; 

		/**  
		 *  Optional stringMethod to get a ListGridField.valueMap for a specific field.
		 * If present this method will be called from ListGrid.getEditorValueMap and the resulting
		 * valueMap will be used instead of any static specified valueMap for the field.
		 * 
		 * @param {any} values - Field values for record being edited. Note that this will include the current edit values for fields that have not yet been saved.
		 * May be null, if editing a new record.
		 * @param {ListGridField} field - pointer to the listGridField
		 * @param {ListGrid} grid - pointer back to this ListGrid instance.
		 * @return {ValueMap} ValueMap for the field (or null if no valueMap required)
		 */
		getEditorValueMap?(values:any /* Object */, field:ListGridField, grid:ListGrid): ValueMap; 

		/**  
		 *  If your derivation of the field title is more complex than specifying a static string,
		 * you can specify a getFieldTitle() method on your field to return the title string.
		 * Otherwise you can use the ListGridField.title attribute on the field to specify the title.
		 * 
		 * You can use ListGrid.setFieldProperties','setFieldProperties() to dynamically
		 * update the title.
		 * 
		 * 
		 * @param {ListGrid} viewer - pointer back to the ListGrid
		 * @param {number} fieldNum - index of this field in the grid's fields array.
		 * @return {string} Field title.
		 */
		getFieldTitle?(viewer:ListGrid, fieldNum:number): string /* String */; 

		/**  
		 * (Advanced)  If ListGrid.showGridSummary is true, and this method is specified it will be
		 * called to generate the summary value to be displayed in the grid summary row. Note that
		 * this is called instead of making use of the ListGridField.summaryFunction.
		 * 
		 * As with ListGrid.getGridSummary this method may return an array of results -
		 * in this case each result will show up in a separate row in the ListGrid.summaryRow
		 * grid.
		 * 
		 * If this grid is grouped, and ListGrid.showGroupSummary is true, this method
		 * will be passed a third parameter - an array of group-level summaries.
		 * 
		 * @param {Array<ListGridRecord>} records - records for which a summary is being generated
		 * @param {ListGridField} field - pointer to the field for which summary value is being generated
		 * @param {Array<any>} groupSummaries - If this grid is grouped and ListGrid.showGridSummary is specified, this parameter contains an array of already-
		 * calculated summary values for each group in the grid. Each element in this array will
		 * be an object containing calculated summary values for each field in the grid, as well as
		 * a specified groupValue and groupName, allowing the developer to determine which group this
		 * summary value comes from
		 * @return {any} summary value to display.
		 */
		getGridSummary?(records:Array<ListGridRecord> /* Array of ListGridRecord */, field:ListGridField, groupSummaries?:Array<any> /* Array of Objects */): any /* Any */; 

		/**  
		 * (Advanced)  If ListGrid.showGroupSummary is true, and this method is specified it will be
		 * called to generate the field summary value to be displayed for each group level summary row.
		 * Note that this is called instead of making use of the ListGridField.summaryFunction.
		 * 
		 * This method may return an array of results - in this case the group will show multiple summary
		 * rows, with each entry in the array showing up in a different record.
		 * 
		 * 
		 * @param {Array<ListGridRecord>} records - records for which a summary is being generated (so all records in the group).
		 * @param {ListGridField} field - pointer to the field for which summary value is being generated
		 * @param {any} groupNode - object with specified groupValue and groupName for this group
		 * @return {any} summary value to display
		 */
		getGroupSummary?(records:Array<ListGridRecord> /* Array of ListGridRecord */, field:ListGridField, groupNode?:any /* Object */): any /* Any */; 

		/**  
		 *  Return the title that should be shown to the user for the group with the
		 * groupValue passed as a parameter.
		 * 
		 * Default title is the groupValue itself.
		 * 
		 * 
		 * @param {any} groupValue - the value from the group is created, the result of ListGridField.getGroupValue
		 * @param {GroupNode} groupNode - the node in the grid containing the group.
		 * @param {any} field - Field object for which to get group value
		 * @param {string} fieldName - The name of the field
		 * @param {ListGrid} grid - the ListGrid displaying the cell
		 * @return {any} Group value to which this record belongs
		 */
		getGroupTitle?(groupValue:any /* Any */, groupNode:GroupNode, field:any /* Object */, fieldName:string /* String */, grid:ListGrid): any /* Any */; 

		/**  
		 *  Return the value which records should be grouped by.
		 * 
		 * All records for which getGroupValue() returns the same value appear in the same
		 * group. Default is the result of ListGrid.getCellValue.
		 * 
		 * While any type of value may be returned, avoiding the use of string values may
		 * result in improved performance. In this case, ListGridField.getGroupTitle
		 * may be implemented to map a numeric group value into a legible string.
		 * 
		 * 
		 * @param {any} value - raw value for the cell, from the record for the row
		 * @param {ListGridRecord} record - Record object for the cell. Note: If this is a new row that has not been saved, in an
		 * editable grid, it has no associated record object. In this case the edit values will
		 * be passed in as this parameter (see ListGrid.getEditValues)
		 * @param {any} field - Field object for which to get group value
		 * @param {string} fieldName - The name of the field
		 * @param {ListGrid} grid - the ListGrid displaying the cell
		 * @return {any} Group value to which this record belongs
		 */
		getGroupValue?(value:any /* Any */, record:ListGridRecord, field:any /* Object */, fieldName:string /* String */, grid:ListGrid): any /* Any */; 

		/**  
		 * (Advanced)  Only applies to ListGridFieldType','summary-type fields. If specified, this
		 * method will be called to generate the record summary value to be displayed for each row
		 * in this field. When this method is called, current values for other 
		 * ListGridFieldType','summary-type fields have not yet been stored on the record, but
		 * are accessible via ListGrid.getRecordSummary.
		 * 
		 * Note that if specified, this is called instead of making use of the
		 * ListGridField.recordSummaryFunction.
		 * 
		 * If ListGrid.showGridSummary or ListGrid.showGroupSummary is true, this
		 * field's value in the summary row[s] will still be calculated by calling this method.
		 * In this case, the record object passed in will contain summary values for each field.
		 * If custom handling is required for this case, it may be detected by checking the
		 * record object's ListGridRecord.isGroupSummary and ListGridRecord.isGridSummary
		 * attributes.
		 * 
		 * @param {ListGridRecord} record - record for which a summary is being generated
		 * @param {ListGridField} field - this field
		 * @param {ListGrid} grid - the grid
		 * @return {any} summary value to display
		 */
		getRecordSummary?(record:ListGridRecord, field:ListGridField, grid:ListGrid): any /* Any */; 

		/**  
		 *  StringMethod override point for returning HTML to be shown in hovers over cells in the
		 * column described by this field.
		 * 
		 * Called only when ListGrid.canHover','canHover and ListGrid.showHover','showHover
		 * are both true.
		 * 
		 * The value of "this" within the method will by the ListGridField','field definition.
		 * 
		 * 
		 * @param {ListGridRecord} record - record being hovered over
		 * @param {any} value - value of the cell being hovered over
		 * @param {number} rowNum - row number where hover occurred
		 * @param {number} colNum - column number where hover occurred
		 * @param {ListGrid} grid - ListGrid this field is a part of
		 * @return {string} HTML to show in the hover
		 */
		hoverHTML?(record:ListGridRecord, value:any /* Any */, rowNum:number, colNum:number, grid:ListGrid): string /* HTML */; 

		/**  
		 *  Method used to convert the value displayed in an editor for some cell in this field into
		 * a raw value for saving.
		 * Takes precedence over parseEditorValue defined at the grid level.
		 * 
		 * 
		 * @param {any} value - value displayed in the editor for the cell
		 * @param {any} record - record object for the row being edited. May be null if this is a new row being added to the end of the list.
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number for the cell.
		 * @param {ListGrid} grid - A pointer to the ListGrid displaying the cell
		 * @return {any} raw value for the field derived from formatted value in editor
		 */
		parseEditorValue?(value:any /* Any */, record:any /* Object */, rowNum:number, colNum:number, grid:ListGrid /* ListGrid Instance */): any /* Any */; 

		/**  
		 * 
		 * Executed when this field is clicked on. Note that if ListGrid.recordClick is
		 * also defined, it will be fired for fields that define a recordClick handler if the
		 * field-level handler returns true. Return false to prevent the grid-level handler from firing.
		 * 
		 * 
		 * @param {ListGrid} viewer - the listGrid that contains the click event
		 * @param {ListGridRecord} record - the record that was clicked on
		 * @param {number} recordNum - number of the record clicked on in the current set of displayed records (starts with 0)
		 * @param {ListGridField} field - the field that was clicked on (field definition)
		 * @param {number} fieldNum - number of the field clicked on in the listGrid.fields array
		 * @param {any} value - value of the cell (after valueMap, etc. applied)
		 * @param {any} rawValue - raw value of the cell (before valueMap, etc applied)
		 * @return {boolean} false to stop event bubbling
		 */
		recordClick?(viewer:ListGrid, record:ListGridRecord, recordNum:number, field:ListGridField, fieldNum:number, value:any /* Any */, rawValue:any /* Any */): boolean; 

		/**  
		 * 
		 * Executed when this field is double-clicked. Note that if
		 * ListGrid.recordDoubleClick is also defined, it will be fired for fields that define
		 * a recordDoubleClick handler if the field-level handler returns true. Return false to prevent
		 * the grid-level handler from firing.
		 * 
		 * 
		 * 
		 * @param {ListGrid} viewer - the listGrid that contains doubleclick event
		 * @param {ListGridRecord} record - the record that was double-clicked
		 * @param {number} recordNum - number of the record clicked on in the current set of displayed records (starts with 0)
		 * @param {ListGridField} field - the field that was clicked on (field definition)
		 * @param {number} fieldNum - number of the field clicked on in the listGrid.fields array
		 * @param {any} value - value of the cell (after valueMap, etc. applied)
		 * @param {any} rawValue - raw value of the cell (before valueMap, etc applied)
		 * @return {boolean} false to stop event bubbling
		 */
		recordDoubleClick?(viewer:ListGrid, record:ListGridRecord, recordNum:number, field:ListGridField, fieldNum:number, value:any /* Object */, rawValue:any /* Object */): boolean; 

		/**  
		 *  An optional stringMethods','stringMethod which if provided, is evaluated to
		 * conditionally determine whether this field should be displayed.
		 * Evaluated on initial draw, then reevaluated on explicit
		 * calls to listGrid.refreshFields() or listGrid.setFields().
		 * 
		 * Use ListGridField.hidden','hidden:true or showIf:"false"
		 * to set a ListGrid field to initially hidden.
		 * The user will still be able to show the field via a context menu. 
		 * This may be suppressed by setting ListGridField.canHide to false, or by 
		 * setting ListGrid.canPickFields to false to suppress the
		 * field-picker entirely.
		 * 
		 * Note that explicit calls to ListGrid.showField','grid.showField() or hideField()
		 * will wipe out the showIf expression, as will the end user showing and
		 * hiding columns via the ListGrid.showHeaderContextMenu','header contextMenu.
		 * 
		 * Also note that fields marked as DataSourceField.detail','detail:true will be hidden by
		 * default even if ListGrid.showDetailFields is true. To show detail fields
		 * inherited from a DataSource, include an explicit field definition for the field and
		 * set this property to return true.
		 * 
		 * 
		 * @param {ListGrid} list - A pointer to the listGrid containing the field
		 * @param {ListGridField} field - the ListGridField object
		 * @param {number} fieldNum - the index of the field
		 * @return {boolean} whether the field should be shown
		 */
		showIf?(list:ListGrid, field:ListGridField, fieldNum:number /* integer */): boolean; 

		/**  
		 * (Advanced)  Optional function to return the value that should be used when sorting this field.
		 * 
		 * Note that, if the dataset exceeds ListGrid.dataPageSize and hence paging is
		 * introduced, the grid relies on the server to provide sorting, and the sortNormalizer
		 * will no longer be called.
		 * 
		 * For custom sort orders that can be executed both client and server, consider
		 * DataSourceField.sortByField.
		 * 
		 * 
		 * @param {any} recordObject - record to normalize
		 * @param {string} fieldName - name of the field on which sorting occurred
		 * @param {ListGrid} context - A pointer back to the list grid displaying this field will be available as the context argument. Note that you can also get a pointer
		 * to the field definition object by calling context.getField(fieldName)
		 * @return {any} normalized value for sorting
		 */
		sortNormalizer?(recordObject:any /* Object */, fieldName:string /* String */, context:ListGrid): any /* Any */; 

		/**  
		 * 
		 * Executed when the user clicks on a ListGridField.valueIcons','value icon within
		 * this field. Return false to suppress default behavior of firing ListGridField.recordClick 
		 * handlers, etc.
		 * 
		 * 
		 * @param {ListGrid} viewer - the listGrid that contains the click event
		 * @param {ListGridRecord} record - the record that was clicked on
		 * @param {number} recordNum - number of the record clicked on in the current set of displayed records (starts with 0)
		 * @param {ListGridField} field - the field that was clicked on (field definition)
		 * @param {any} rawValue - raw value of the cell (before valueMap, etc applied)
		 * @param {FormItem} editor - If this cell is being ListGrid.canEdit','edited, this method will fire when the user clicks the valueIcon on the edit item for the
		 * cell, passing in the editor item as the editor parameter. If the cell
		 * is not being edited, this value will be null.
		 * @return {boolean} false to stop event bubbling
		 */
		valueIconClick?(viewer:ListGrid, record:ListGridRecord, recordNum:number, field:ListGridField, rawValue:any /* Any */, editor:FormItem): boolean; 

	} // ListGridField

	export interface ListGridFieldStatic {
	} // ListGridFieldStatic


	/**
	 * Every node in the tree is represented by a TreeNode object which is an object literal with a
	 * set of properties that configure the node.
	 * 
	 * When a Tree is supplied as TreeGrid.data to TreeGrid, you can also set
	 * properties from ListGridRecord on the TreeNode (e.g. setting
	 * ListGridRecord.enabled:false on the node). 
	 */
	export interface TreeNode {
		/** 
		 * (Read only, Advanced) Governs whether dragged data (typically other treeNodes) may be dropped over
		 * this node. Only has an effect if this node is displayed in a TreeGrid where
		 * TreeGrid.canAcceptDroppedRecords, TreeGrid.canReorderRecords or 
		 * TreeGrid.canReparentNodes is true.
		 * Flags: IRA
		 */
		readonly canAcceptDrop?: boolean;
		/** 
		 * (Read only, Advanced) Governs whether this node can be dragged. Only has an effect if this node is displayed in
		 * a TreeGrid where TreeGrid.canDragRecordsOut, TreeGrid.canReorderRecords
		 * or TreeGrid.canReparentNodes is true.
		 * Flags: IRA
		 */
		readonly canDrag?: boolean;
		/** 
		 * For trees with the modelType "children", this property specifies the children of this
		 * TreeNode.
		 * 
		 * Note: the name of this property can be changed by setting Tree.childrenProperty
		 * Flags: IRW
		 */
		readonly children?: any /* List of TreeNode */;
		/** 
		 * (Read only) Default property name denoting whether this record is enabled. Property name may be
		 * modified for some grid via ListGrid.recordEnabledProperty.
		 * Flags: IR
		 */
		readonly enabled?: boolean;
		/** 
		 * This Property allows the developer to customize the icon displayed next to a node.
		 * Set node.icon to the URL of the desired icon to display and
		 * it will be shown instead of the standard TreeGrid.nodeIcon for this node.
		 * Note that if TreeNode.showOpenIcon and/or TreeNode.showDropIcon 
		 * is true for this node, customized icons for folder nodes will be appended with the 
		 * TreeGrid.openIconSuffix or TreeGrid.dropIconSuffix suffixes on state change 
		 * as with the standard TreeGrid.folderIcon for this treeGrid. Also note that for
		 * custom folder icons, the TreeGrid.closedIconSuffix will never be appended.
		 * You can change the name of this property by setting 
		 * TreeGrid.customIconProperty.
		 * Flags: IRW, Group: treeIcons
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * (Read only) Specifies the unique ID of this node. 
		 * 
		 * Required for trees with Tree.modelType "parent". With modelType:"parent", the unique
		 * ID of a node, together with the unique ID of its parent (see TreeNode.parentId) is
		 * used by Tree.linkNodes to link a list of nodes into a tree.
		 * 
		 * Note: the name of this property can be changed by setting Tree.idField.
		 * Flags: IR
		 */
		readonly id?: string | number /* String | Number */;
		/** 
		 * (Read only) Set to true or a string that is not equal to (ignoring case)
		 * "false" to explicitly mark this node as a folder. See Tree.isFolder for
		 * a full description of how the Tree determines whether a node is a folder or not.
		 * 
		 * Note: the name of this property can be changed by setting Tree.isFolderProperty.
		 * Flags: IR
		 */
		readonly isFolder?: boolean | string /* Boolean | String */;
		/** 
		 * (Read only) Provides a name for the node that is unique among its immediate siblings, thus allowing a
		 * unique path to be used to identify the node, similar to a file system. See
		 * Tree.getPath.
		 * 
		 * If the nameProperty is not set on a given node, the TreeNode.id will be used instead. If
		 * this is also missing, Tree.getName and Tree.getPath will auto-generate a
		 * unique name for you. Thus names are not required, but if the dataset you are using already
		 * has usable names for each node, using them can make APIs such as Tree.find more
		 * useful. Alternatively, if your dataset has unique ids consider providing those as
		 * TreeNode.id.
		 * 
		 * If a value provided for the nameProperty of a node (e.g. node.name) is not a
		 * string, it will be converted to a string by the Tree via ""+value.
		 * 
		 * This property is also used as the default title for the node (see Tree.getTitle)
		 * if TreeNode.title is not specified.
		 * 
		 * Note: the name of this property can be changed by setting Tree.nameProperty.
		 * Flags: IR
		 */
		readonly name?: string /* String */;
		/** 
		 * (Read only) For trees with modelType:"parent", this property specifies the unique ID of this node's 
		 * parent node.
		 * The unique ID of a node, together with the unique ID of its parent is used by
		 * Tree.linkNodes to link a list of nodes into a tree.
		 * 
		 * Note: the name of this property can be changed by setting Tree.parentIdField.
		 * Flags: IR
		 */
		readonly parentId?: string | number /* String | Number */;
		/** 
		 * (Advanced) For folder nodes showing custom icons (set via TreeNode.icon),
		 * this property allows the developer to specify on a per-node basis whether a
		 * drop state icon should be displayed when the 
		 * user drop-hovers over this folder.
		 * Set node.showDropIcon to true to show the drop state
		 * icon, or false to suppress this.
		 * If not specified, this behavior is determined by TreeGrid.showCustomIconDrop
		 * for this node.
		 * You can change the name of this property by setting 
		 * TreeGrid.customIconDropProperty.
		 * Flags: IRWA, Group: treeIcons
		 */
		readonly showDropIcon?: boolean /* Boolean */;
		/** 
		 * (Advanced) For folder nodes showing custom icons (set via TreeNode.icon),
		 * this property allows the developer to specify on a per-node basis whether an
		 * open state icon should be displayed when the folder is open.
		 * Set node.showOpenIcon to true to show the open state
		 * icons, or false to suppress this.
		 * If not specified, this behavior is determined by TreeGrid.showCustomIconOpen
		 * for this node.
		 * You can change the name of this property by setting 
		 * TreeGrid.customIconOpenProperty.
		 * Flags: IRWA, Group: treeIcons
		 */
		readonly showOpenIcon?: boolean /* Boolean */;
		/** 
		 * (Read only) The title of the node as it should appear next to the node icon in the Tree. If left
		 * unset, the value of TreeNode.name is used by default. See the description in
		 * Tree.getTitle for full details.
		 * 
		 * Note: the name of this property can be changed by setting Tree.titleProperty.
		 * Flags: IR
		 */
		readonly title?: string /* HTML */;
	} // TreeNode

	export interface TreeNodeStatic {
	} // TreeNodeStatic


	/**
	 * AdvancedCriteria is a format for representing search criteria which may include
	 * operators on field values such as "less than", or may include sub-clauses such as several 
	 * criteria applied to fields joined by an "OR" operator.
	 * 
	 * SmartClient DataSources can use AdvancedCriteria to search a list of Records, and
	 * the SmartClient Java Server can translate AdvancedCriteria to either SQL or Hibernate
	 * queries (Note: The server-side AdvancedCriteria handling feature is only available 
	 * with the Power and Enterprise Editions of SmartClient; the Pro Edition is 
	 * limited to ordinary criteria handling on the server side).
	 * If the entire dataset is cached locally, SmartClient can perform AdvancedCriteria filtering 
	 * on the client, avoiding a server call.
	 * 
	 * 
	 * An AdvancedCriteria is an ordinary JavaScript object which can be created directly
	 * with JavaScript literal notation. For example:
	 * 
	 * var advancedCriteria = {
	 * _constructor:"AdvancedCriteria",
	 * operator:"and",
	 * criteria:[
	 * // this is a Criterion
	 * { fieldName:"salary", operator:"lessThan", value:80000 },
	 * { operator:"or", criteria:[
	 * { fieldName:"title", operator:"iContains", value:"Manager" },
	 * { fieldName:"reports", operator:"notNull" }
	 * ] 
	 * },
	 * { fieldName:"startDate", operator:"greaterThan", value:new Date(1388552400000) }
	 * ]
	 * }
	 * 
	 * This makes AdvancedCriteria very easy to store and retrieve as JSON strings, using
	 * JSON.encode','JSONEncoder.
	 * 
	 * 
	 * 
	 * AdvancedCriteria can also be specified in componentXML','Component XML:
	 * 
	 * &lt;AdvancedCriteria operator="and" _constructor="AdvancedCriteria"&gt;
	 * &lt;criteria&gt;
	 * &lt;Criterion fieldName="salary" operator="lessThan"&gt;
	 * &lt;value xsi:type="xsd:float"&gt;80000&lt;/value&gt;
	 * &lt;/Criterion&gt;
	 * &lt;Criterion operator="or"&gt;
	 * &lt;criteria&gt;
	 * &lt;Criterion fieldName="title" operator="iContains"&gt;
	 * &lt;value xsi:type="xsd:text"&gt;Manager&lt;/value&gt;
	 * &lt;/Criterion&gt;
	 * &lt;Criterion fieldName="reports" operator="notNull"/&gt;
	 * &lt;/criteria&gt;
	 * &lt;/Criterion&gt;
	 * &lt;Criterion fieldName="startDate" operator="greaterThan"&gt;
	 * &lt;value xsi:type="xsd:datetime"&gt;2014-01-01T05:00:00.000&lt;/value&gt;
	 * &lt;/Criterion&gt;
	 * &lt;/criteria&gt;
	 * &lt;/AdvancedCriteria&gt;
	 * 
	 * An AdvancedCriteria is in effect a Criterion that has been marked with 
	 * _constructor:"AdvancedCriteria" to mark it as complete criteria.
	 * 
	 * In addition to directly creating an AdvancedCriteria object as described above, the
	 * DataSource.convertCriteria and DataSource.combineCriteria methods
	 * may be used to create and modify criteria based on simple fieldName / value mappings.
	 * 
	 * When passed to the SmartClient Server, a server-side AdvancedCriteria instance (in the
	 * package com.isomorphic.criteria) can be retrieved from a DSRequest via
	 * com.isomorphic.datasource.DSRequest.getAdvancedCriteria(). These same AdvancedCriteria
	 * objects can be directly created server side, and applied to a DSRequest via
	 * setAdvancedCriteria().
	 * 
	 * RestDataSource, the recommended way of integration with servers that are not running
	 * the SmartClient Server Framework, defines a standard XML and JSON serialization of
	 * AdvancedCriteria. Date, DateTime and Time values use the same XML Schema
	 * representation used for other XML serialization like RestDataSource. Further details can
	 * be found at dateFormatAndStorage.
	 * 
	 * It's a best practice for XML representation to have &lt;value&gt; as a subelement
	 * with xsi:type. Although most systems will auto-convert criteria explicitly
	 * setting type leaves the least room for error or ambiguity.
	 * 
	 * For other servers, you can translate AdvancedCriteria into whatever format is
	 * expected by the server, typically by implementing DataSource.transformRequest.
	 * 
	 * 
	 * See criteriaEditing','Criteria Editing for information about
	 * editing AdvancedCriteria in a DynamicForm.
	 * 
	 * When using the SmartClient Server, AdvancedCriteria created on the client and stored 
	 * as JSON can be used directly by server code (without involvement of the browser and client-side system).
	 * Use the server-side API AdvancedCriteria.decodeClientCriteria() to obtain an AdvancedCriteria that can 
	 * then be used with a server-created DSRequest object. Note that the client must be serialized by the 
	 * JSONEncoder class, using JSONEncoder.dateFormat "logicalDateConstructor". 
	 */
	export interface AdvancedCriteria extends Criterion {
		/** 
		 * (Advanced) When set to true, causes filtering using this criteria object to follow SQL99 behavior for 
		 * dealing with NULL values. See DataSource.strictSQLFiltering','this discussion for
		 * more detail.
		 * Flags: IRWA, Group: advancedFilter
		 */
		readonly strictSQLFiltering?: boolean /* Boolean */;
	} // AdvancedCriteria

	export interface AdvancedCriteriaStatic extends CriterionStatic {
	} // AdvancedCriteriaStatic


	/**
	 * A type of Record which represents an event to occur at a specific time, displayed
	 * within the calendar. 
	 */
	export interface CalendarEvent {
		/** 
		 * An optional background color for the body portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		readonly backgroundColor?: string /* String */;
		/** 
		 * An optional border color for the body portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		readonly borderColor?: string /* String */;
		/** 
		 * Optional boolean value controlling whether this event can be dragged with the mouse.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.canDragEventField. Only has an effect when 
		 * Calendar.canEditEvents','editing is enabled.
		 * 
		 * You can separately disallow drag-resize via CalendarEvent.canResize','canResize.
		 * Flags: IRW
		 */
		readonly canDrag?: boolean /* Boolean */;
		/** 
		 * Optional boolean value controlling the editability of this particular calendarEvent.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.canEditField.
		 * Flags: IRW
		 */
		readonly canEdit?: boolean /* Boolean */;
		/** 
		 * Boolean indicating whether this event can be moved between lanes. Can also be set at the
		 * Calendar.canEditLane','calendar level.
		 * 
		 * The name of this field within the CalendarEvent can be changed via 
		 * Calendar.canEditLaneField.
		 * Flags: IRW
		 */
		readonly canEditLane?: boolean /* Boolean */;
		/** 
		 * Boolean indicating whether this event can be moved between lanes. Can also be set at the
		 * Calendar.canEditSublane','calendar level.
		 * 
		 * The name of this field within the CalendarEvent can be changed via 
		 * Calendar.canEditSublaneField.
		 * Flags: IRW
		 */
		readonly canEditSublane?: boolean /* Boolean */;
		/** 
		 * Optional boolean value controlling whether this event can be drag-resized with the mouse.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.canResizeEventField.
		 * 
		 * Only has an effect if Calendar.canEditEvents','editing and 
		 * Calendar.canDragEvents','dragging are also enabled.
		 * Flags: IRW
		 */
		readonly canResize?: boolean /* Boolean */;
		/** 
		 * String which represents the description of a CalendarEvent
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.descriptionField
		 * Flags: IRW
		 */
		readonly description?: string /* String */;
		/** 
		 * The duration of this event. May be specified instead of an 
		 * CalendarEvent.endDate','end date and implies that this is a "Period" type event. If
		 * set to zero, implies an "Instant" type event - an event with a start date but no length.
		 * Flags: IRW
		 */
		readonly duration?: number /* Integer */;
		/** 
		 * When a CalendarEvent.duration','duration is set for this event, this is the unit of
		 * that duration. The default is minutes.
		 * Flags: IRW
		 */
		readonly durationUnit?: TimeUnit;
		/** 
		 * Date object which represents the end date of a CalendarEvent
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.endDateField
		 * Flags: IRW
		 */
		readonly endDate?: Date;
		/** 
		 * (Read only) CSS style series to use for the draggable event window that represents this event. If
		 * specified, overrides Calendar.eventWindowStyle for this specific event.
		 * 
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.eventWindowStyleField
		 * Flags: IR
		 */
		readonly eventWindowStyle?: string /* CSSStyleName */;
		/** 
		 * An optional background color for the header portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		readonly headerBackgroundColor?: string /* String */;
		/** 
		 * An optional border color for the header portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		readonly headerBorderColor?: string /* String */;
		/** 
		 * An optional text color for the header portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		readonly headerTextColor?: string /* String */;
		/** 
		 * When in Timeline mode, or when Calendar.showDayLanes is true, a string that 
		 * represents the name of the Calendar.lanes','lane this CalendarEvent should 
		 * sit in. The name of this field within the CalendarEvent can be changed via
		 * Calendar.laneNameField.
		 * Flags: IRW
		 */
		readonly lane?: string /* String */;
		/** 
		 * String which represents the name of a CalendarEvent
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.nameField
		 * Flags: IRW
		 */
		readonly name?: string /* String */;
		/** 
		 * Date object which represents the start date of a CalendarEvent.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.startDateField
		 * Flags: IRW
		 */
		readonly startDate?: Date;
		/** 
		 * (Read only) CSS style series to use for Calendar.eventCanvas','canvas instances that 
		 * represent this event in the various CalendarView','calendar views. The basic 
		 * series should include three classes - the base style and others suffixed "Header" and "Body".
		 * 
		 * If not specified on the event, the style can be specified on the 
		 * Calendar.eventStyleName','calendar, the CalendarView.eventStyleName','view or
		 * individually on each Lane.eventStyleName','lane or Lane.sublanes','sublane.
		 * 
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.eventStyleNameField
		 * Flags: IR
		 */
		readonly styleName?: string /* CSSStyleName */;
		/** 
		 * When in Timeline mode, or when Calendar.showDayLanes is true, a string that 
		 * represents the name of the Lane.sublanes','sublane this CalendarEvent should 
		 * sit in. The name of this field within the CalendarEvent can be changed via
		 * Calendar.sublaneNameField.
		 * Flags: IRW
		 */
		readonly sublane?: string /* String */;
		/** 
		 * An optional text color for the body portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		readonly textColor?: string /* String */;
	} // CalendarEvent

	export interface CalendarEventStatic {
	} // CalendarEventStatic


	/**
	 * An object representing one of the image segments displayed by a StretchImg. Each item of
	 * a StretchImg's StretchImg.items','items array is a StretchItem. 
	 */
	export interface StretchItem {
		/** 
		 * (Read only) The height of the image. This can either be a number (for the number of pixels tall), the string
		 * "*" (remaining space, divided amongst all items that specify height:"*"), or the name of a property
		 * on the StretchImg component, such as "capSize" for the StretchImg's StretchImg.capSize','capSize.
		 * 
		 * NOTE: The height is only used if the StretchImg stacks its images vertically
		 * (StretchImg.vertical is true).
		 * Flags: IR
		 */
		readonly height?: number | string /* number | String */;
		/** 
		 * (Read only) A string that is appended as a suffix to the StretchImg's StretchImg.src','src
		 * URL in order to fetch the media file for this StretchItem, if a separate StretchItem.src is
		 * not provided. Note that the special name "blank", possibly suffixed by one or more digits
		 * which are used to differentiate blank items, means no image will be shown for this StretchItem.
		 * 
		 * For example, for a StretchImg in "Over" state with a StretchImg.src of "button.png"
		 * and a name of "stretch", the resulting URL would be "button_Over_stretch.png".
		 * Flags: IR
		 */
		readonly name?: string /* String */;
		/** 
		 * (Read only) The URL of the media file for this StretchItem.
		 * Flags: IR
		 */
		readonly src?: string /* SCImgURL */;
		/** 
		 * (Read only) The width of the image. This can either be a number (for the number of pixels wide), the string
		 * "*" (remaining space, divided amongst all items that specify width:"*"), or the name of a property
		 * on the StretchImg component, such as "capSize" for the StretchImg's StretchImg.capSize','capSize.
		 * 
		 * NOTE: The width is only used if the StretchImg stacks its images horizontally
		 * (StretchImg.vertical is false).
		 * Flags: IR
		 */
		readonly width?: number | string /* number | String */;
	} // StretchItem

	export interface StretchItemStatic {
	} // StretchItemStatic


	/**
	 * A record which specifies files for use with fileSource','FileSource Operations. 
	 */
	export interface FileSpec {
		/** 
		 * The format of the file, e.g. "xml" or "js"
		 * Flags: IRW
		 */
		readonly fileFormat?: string /* String */;
		/** 
		 * The name of the file, without any extension to indicate FileSpec.fileType','type or
		 * FileSpec.fileFormat','format.
		 * Flags: IRW
		 */
		readonly fileName?: string /* String */;
		/** 
		 * The type of the file, e.g. "ds" for datasource, or "proj" for project.
		 * Flags: IRW
		 */
		readonly fileType?: string /* String */;
	} // FileSpec

	export interface FileSpecStatic {
	} // FileSpecStatic


	/**
	 * An object representing the start of a given Fiscal Year in the current locale.
	 * 
	 * See FiscalCalendar for more information on how FiscalYears are set up and used. 
	 */
	export interface FiscalYear {
		/** 
		 * The one-based day-number in the FiscalYear.month','specified month when this fiscal
		 * year starts.
		 * Flags: IRW
		 */
		readonly date?: number /* integer */;
		/** 
		 * The actual fiscal year that this date relates to.
		 * 
		 * A fiscal year ends when the next one begins. A fiscal year may span the boundary
		 * between two calendar years in which case the FiscalYear.fiscalYear value may
		 * not match the FiscalYear.year value.
		 * 
		 * For example fiscalYear 2020 may start in July of 2019 and end in July of 2020. In this
		 * case the fiscalYear would be set to 2020 and the
		 * FiscalYear.year would be set to 2019
		 * Flags: IRW
		 */
		readonly fiscalYear?: number /* integer */;
		/** 
		 * The zero-based month-number when this fiscal year starts.
		 * Flags: IRW
		 */
		readonly month?: number /* integer */;
		/** 
		 * The 4-digit calendar year when this fiscal year starts.
		 * Flags: IRW
		 */
		readonly year?: number /* integer */;
	} // FiscalYear

	export interface FiscalYearStatic {
	} // FiscalYearStatic


	/**
	 * An object literal with a particular set of properties used to configure the display of
	 * and interaction with the rows of a DetailViewer. 
	 */
	export interface DetailViewerField {
		/** 
		 * (Read only) Dictates whether the data in this field be exported. Explicitly set this
		 * to false to prevent exporting. Has no effect if the underlying 
		 * DataSourceField.canExport','dataSourceField is explicitly set to 
		 * canExport: false.
		 * Flags: IR
		 */
		readonly canExport?: boolean /* Boolean */;
		/** 
		 * Determines whether this field can be hilited. Set to false to prevent this
		 * field from appearing in HiliteEditor.
		 * Flags: IRW, Group: hiliting
		 */
		readonly canHilite?: boolean;
		/** 
		 * If specified, cells in this field will be rendered using this css className rather than
		 * DetailViewer.cellStyle
		 * Flags: IRW
		 */
		readonly cellStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only, Advanced) dataPath property allows this field to display detail from nested data structures
		 * Flags: IRA
		 */
		readonly dataPath?: string /* String */;
		/** 
		 * Display format to use for date type values within this field. 
		 * 
		 * The DetailViewerField.timeFormatter may also be used to format underlying Date values as
		 * times (omitting the date part entirely). If both dateFormatter and
		 * timeFormatter are specified on a field, for
		 * fields specified as DetailViewerField.type','type "time" the
		 * timeFormatter will be used, otherwise the dateFormatter
		 * 
		 * If field.dateFormatter and field.timeFormatter is unspecified,
		 * date display format may be defined at the component level via
		 * DetailViewer.dateFormatter, or for fields of type "datetime"
		 * DetailViewer.datetimeFormatter. Otherwise the
		 * default is to use the system-wide default normal date format, configured via
		 * DateUtil.setNormalDisplayFormat. Specify any valid 
		 * DateDisplayFormat to change the format used by this item.
		 * Flags: IRW
		 */
		readonly dateFormatter?: DateDisplayFormat;
		/** 
		 * Applies only to fields of type "float" and enforces a minimum number of digits shown after
		 * the decimal point.
		 * 
		 * For example, a field value of 343.1, 343.104 and 343.09872677 would all be shown as 343.10
		 * if decimalPad is 2.
		 * 
		 * The original unpadded value is always shown when the value is edited.
		 * Flags: IRW, Group: appearance
		 */
		readonly decimalPad?: number;
		/** 
		 * Applies only to fields of type "float" and affects how many significant digits are shown.
		 * 
		 * For example, with decimalPrecision 3, if the field value is 343.672677, 343.673 is shown.
		 * 
		 * If the value is 125.2, 125.2 is shown - decimalPrecision will not cause extra zeros to be
		 * added. Use DataSourceField.decimalPad for this.
		 * 
		 * A number is always shown with its original precision when edited.
		 * Flags: IRW, Group: appearance
		 */
		readonly decimalPrecision?: number;
		/** 
		 * (Read only) If displayField is defined for the field then the DetailViewer will
		 * display the displayField attribute of records instead of the attribute
		 * given by the DetailViewerField.name of the field.
		 * Flags: IR
		 */
		readonly displayField?: string /* String */;
		/** 
		 * (Read only) The value to display for a cell whose value is null or the empty
		 * string after applying formatCellValue and valueMap (if any).
		 * 
		 * This is the field-specific attribute. You may also set the emptyCellValue at the viewer
		 * level to define the emptyCellValue for all empty fields in the viewer.
		 * Flags: IR, Group: appearance
		 */
		readonly emptyCellValue?: string /* HTMLString */;
		/** 
		 * (Read only) By default HTML values in DetailViewer cells will be interpreted by the browser.
		 * Setting this flag to true will causes HTML characters to be escaped, meaning the
		 * raw value of the field (for example "&lt;b&gt;AAA&lt;/b&gt;") is displayed
		 * to the user rather than the interpreted HTML (for example "AAA")
		 * Flags: IR
		 */
		readonly escapeHTML?: boolean;
		/** 
		 * (Read only) FormatString used during exports for numeric or date formatting. See
		 * DataSourceField.exportFormat.
		 * Flags: IR, Group: exportFormatting
		 */
		readonly exportFormat?: string /* FormatString */;
		/** 
		 * (Read only) Dictates whether the data in this field should be exported raw by
		 * DetailViewer.exportClientData','exportClientData(). If set to true for a
		 * field, the values in the field-formatters will not be executed for data in this field.
		 * Flags: IR
		 */
		readonly exportRawValues?: boolean /* Boolean */;
		/** 
		 * (Read only) FormatString for numeric or date formatting. See DataSourceField.format.
		 * Flags: IR, Group: exportFormatting
		 */
		readonly format?: string /* FormatString */;
		/** 
		 * (Read only) For DetailViewerField.type: "separator", this attribute specifies
		 * the height of the separator.
		 * Flags: IR
		 */
		readonly height?: number /* Number */;
		/** 
		 * Height for hilite icons for this field.
		 * Overrides DetailViewer.hiliteIconSize, DetailViewer.hiliteIconHeight, and
		 * DetailViewerField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconHeight?: number;
		/** 
		 * How much padding should there be on the left of DetailViewer.hiliteIcons','hilite icons 
		 * for this field?
		 * Overrides DetailViewer.hiliteIconLeftPadding
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconLeftPadding?: number;
		/** 
		 * (Read only) When DetailViewer.hiliteIcons are present, where the hilite icon will be placed 
		 * relative to the field value. See HiliteIconPosition.
		 * Overrides DetailViewer.hiliteIconPosition
		 * Flags: IR, Group: hiliting
		 */
		readonly hiliteIconPosition?: HiliteIconPosition;
		/** 
		 * How much padding should there be on the right of DetailViewer.hiliteIcons','hilite icons 
		 * for this field?
		 * Overrides DetailViewer.hiliteIconRightPadding
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconRightPadding?: number;
		/** 
		 * Default width and height of DetailViewer.hiliteIcons','hilite icons in this field.
		 * Takes precedence over hiliteIconWidth, hiliteIconHeight and hiliteIconSize specified at
		 * the component level.
		 * Can be overridden via DetailViewerField.hiliteIconWidth','hiliteIconWidth and DetailViewerField.hiliteIconHeight','hiliteIconHeight
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconSize?: number;
		/** 
		 * Width for hilite icons for this field.
		 * Overrides DetailViewer.hiliteIconSize, DetailViewer.hiliteIconWidth, and
		 * DetailViewerField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconWidth?: number;
		/** 
		 * Height of image shown for fieldTypes image in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageHeight is "logoHeight",
		 * record.logoHeight will control the height of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly imageHeight?: number | string /* Integer | String */;
		/** 
		 * Size of images shown for fieldTypes image in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageSize is "logoSize",
		 * record.logoSize will control the size of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly imageSize?: number | string /* Integer | String */;
		/** 
		 * (Advanced) If this field has type set to "image"
		 * and the URL for the image displayed is not absolute, the path of the URL will be relative
		 * to this string
		 * Flags: IRWA, Group: imageColumns
		 */
		readonly imageURLPrefix?: string /* String */;
		/** 
		 * Width of images shown for fieldTypes image in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * width. For example, if field.imageWidth is "logoWidth",
		 * record.logoWidth will control the width of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		readonly imageWidth?: number | string /* Integer | String */;
		/** 
		 * (Read only) Indicates this field's values come from another, related DataSource. 
		 * The individual field will inherit settings such as DetailViewerField.type','field.type
		 * and DetailViewerField.title','field.title from the related DataSource just like
		 * fields from the primary DataSource.
		 * Flags: IR
		 */
		readonly includeFrom?: string /* String */;
		/** 
		 * The HTML to display for values of this field if the field type is set to "link". 
		 * 
		 * This property sets linkText that will be the same for all records. You can set linkText
		 * on a per-record basis via DetailViewerRecord.linkText.
		 * Flags: IRW
		 */
		readonly linkText?: string /* String */;
		/** 
		 * Name of the property in a DetailViewerRecord that holds the HTML to display for values
		 * of this field if the field type is set to "link".
		 * Flags: IRW
		 */
		readonly linkTextProperty?: string /* String */;
		/** 
		 * (Advanced) If this field has type set to "link", setting this property will apply a
		 * standard prefix to the link URL when displaying values of this field.
		 * Flags: IRWA
		 */
		readonly linkURLPrefix?: string /* String */;
		/** 
		 * (Advanced) If this field has type set to "link", setting this property will apply a
		 * standard suffix to the link URL when displaying values of this field.
		 * Flags: IRWA
		 */
		readonly linkURLSuffix?: string /* String */;
		/** 
		 * (Read only) Name property used to identify the field, and determines which attribute from
		 * records will be displayed in this field.
		 * 
		 * Must be unique within the DetailViewer as well as a valid JavaScript identifier - see
		 * FieldName for details and how to check for validity.
		 * 
		 * The attribute of the records to display in this field may also be set by
		 * DetailViewerField.displayField.
		 * Flags: IR
		 */
		readonly name?: string /* FieldName */;
		/** 
		 * If specified, when generating print HTML for this detailViewer, 
		 * cells in this field will be rendered using this css className rather than
		 * DetailViewer.printCellStyle
		 * Flags: IRW
		 */
		readonly printCellStyle?: string /* CSSStyleName */;
		/** 
		 * (Read only) For a field of type:"imageFile", indicates whether to stream the image and display it
		 * inline or to display the View and Download icons.
		 * Flags: IR
		 */
		readonly showFileInline?: boolean;
		/** 
		 * By default, clicking a link rendered by this item opens it in a new browser window. You 
		 * can alter this behavior by setting this property. The value of this property will be 
		 * passed as the value to the target attribute of the anchor tag used to render 
		 * the link. target is applicable only if the field type is set to "link".
		 * Flags: IRW
		 */
		readonly target?: string /* String */;
		/** 
		 * (Advanced) Time-format to apply to date type values within this field. If specified, any
		 * dates displayed in this field will be formatted as times using the appropriate format.
		 * This is most commonly only applied to fields specified as type "time" though
		 * if no explicit DetailViewerField.dateFormatter is specified it will be respected for other 
		 * fields as well.
		 * 
		 * If unspecified, a timeFormatter may be defined 
		 * DetailViewer.timeFormatter','at the component level and will be respected by fields
		 * of type "time".
		 * Flags: IRWA, Group: appearance
		 */
		readonly timeFormatter?: TimeDisplayFormat;
		/** 
		 * (Read only) The title of the field as displayed on the left-hand side. If left unspecified, the
		 * title of the field is derived by looking up the value of
		 * DetailViewer.fieldIdProperty on this field. So, by default, the title of a field
		 * is the value of its "name" property.
		 * Flags: IR
		 */
		readonly title?: string /* HTMLString */;
		/** 
		 * (Read only) Specifies the type of this DetailViewerField. By default (value is null)
		 * the field shows a field title on the left and the field value on the right. There are
		 * four special values for this attribute:
		 * 
		 * "header" - If you specify type "header", the field spans both the field name and
		 * field value columns and contains text defined in the DetailViewerField.value
		 * attribute with the style specified by DetailViewer.headerStyle. You can use this
		 * field type as a titled separator.
		 * "separator" - If you specify type "separator", the field spans both the field name
		 * and the field value columns with no text, and is styled using the style specified via
		 * DetailViewer.separatorStyle. The height of the separator field can be controlled
		 * via DetailViewerField.height.
		 * "image" For viewing, a thumbnail image is rendered in the field. The URL of the
		 * image is the value of the field, and should be absolute. The size of the image is
		 * controlled by DetailViewerField.imageSize,
		 * DetailViewerField.imageWidth, DetailViewerField.imageHeight
		 * "link" For viewing, a clickable html link (using an HTML anchor tag: &lt;A&gt;)
		 * is rendered in the field. The target URL is the value of the field, which is also the
		 * default display value. You can override the display value by setting
		 * DetailViewerRecord.linkText or DetailViewerField.linkText.
		 * 
		 * Clicking the link opens the URL in a new window by default. To change this behavior,
		 * you can set field.target, which works identically to the "target"
		 * attribute on an HTML anchor (&lt;A&gt;) tag. See DetailViewerField.target for
		 * more information.
		 * 
		 * Flags: IR
		 */
		readonly type?: string /* String */;
		/** 
		 * (Read only) When a field specifies its DetailViewerField.type to be "header", the value of
		 * this attribute specifies the header text.
		 * Flags: IR
		 */
		readonly value?: string /* HTMLString */;
		/** 
		 * (Read only) A property list (or an expression that evaluates to a property list)
		 * specifying a mapping of internal values to display values for the field (row).
		 * Flags: IR
		 */
		readonly valueMap?: any /* Object */;

		/* Instance Method Overrides */
		/**  
		 *  Optional method to format the value to display for this field's cells. Takes precedence 
		 * over DetailViewer.formatCellValue for cells in this field.
		 * 
		 * @param {string} value - the raw value of the cell
		 * @param {DetailViewerRecord} record - the record being displayed
		 * @param {DetailViewerField} field - the field being displayed
		 * @param {DetailViewer} viewer - the detailViewer containing this field
		 */
		formatCellValue?(value:string /* String */, record:DetailViewerRecord, field:DetailViewerField, viewer:DetailViewer): void; 

		/**  
		 *  Optional method to return the CSS class for cells in this field. If specified, this method
		 * will be called from DetailViewer.getCellStyle, and should return a css class name.
		 * 
		 * 
		 * @param {string} value - actual value of this cell
		 * @param {any} field - field object for this cell
		 * @param {any} record - record object for this cell
		 * @param {DetailViewer} viewer - the viewer instance to which this cell belongs
		 * @return {string} CSS style for this cell
		 */
		getCellStyle?(value:string /* String */, field:any /* Object */, record:any /* Object */, viewer:DetailViewer): string /* CSSStyleName */; 

		/**  
		 * 
		 * If specified on a field, this method is evaluated at draw time to determine whether or
		 * not to show this particular field.
		 * 
		 * This method can be specified either as a function or a string that will be
		 * auto-converted to a function.
		 * 
		 * 
		 * @param {DetailViewer} viewer - The DetailViewer
		 * @param {any} valueList - 
		 * @return {boolean} true to show the field, false to not show it.
		 */
		showIf?(viewer:DetailViewer, valueList:any /* List of DetailViewerRecord */): boolean; 

	} // DetailViewerField

	export interface DetailViewerFieldStatic {
	} // DetailViewerFieldStatic


	/**
	 * Validator definition for a built-in Validator.type. 
	 */
	export interface validatorDefinition {
		/** 
		 * (Read only) Default error message to be shown when validator fails validation. Can be overridden
		 * for an individual validator by setting Validator.errorMessage.
		 * Flags: IR
		 */
		readonly defaultErrorMessage?: string /* String */;
		/** 
		 * (Read only) Does this validator only run server-side?
		 * Flags: IR
		 */
		readonly requiresServer?: boolean;
		/** 
		 * (Read only) Optional name to be shown in tools that edit validators. If not specified,
		 * the tools will derive the short name from the validatorDefinition.type by assuming it is
		 * camelCaps similar to DataSource.getAutoTitle.
		 * Flags: IR
		 */
		readonly shortName?: string /* String */;
		/** 
		 * (Read only) Type of the validator unique in ValidatorType.
		 * Flags: IR
		 */
		readonly type?: string /* String */;

		/* Instance Method Overrides */
		/**  
		 *  This method is called after every validation (i.e. call to
		 * validatorDefinition.condition) whether it passed or failed. This allows the
		 * validator perform an operation on the field based on the validation outcome.
		 * 
		 * An action() method is not needed to report an error message only.
		 * 
		 * 
		 * @param {boolean} result - The result of the validator. The value will be null if the validator was skipped because of conditional criteria.
		 * @param {DataSourceField | FormItem} item - FormItem or DataSourceField on which this validator was declared. NOTE: FormItem will not
		 * be available during a save performed without a
		 * form (eg programmatic save) or if the field 
		 * is not available in the form.
		 * @param {Validator} validator - Validator declaration from eg DataSourceField.validators.
		 * @param {any} record - Record that was validated
		 * @param {DataBoundComponent} component - The DataBoundComponent holding the item such DynamicForm or ListGrid.
		 */
		action?(result:boolean, item:DataSourceField | FormItem, validator:Validator, record:any /* Record */, component:DataBoundComponent): void; 

		/**  
		 *  Method invoked to perform the actual validation of a value.
		 * 
		 * Because the validator itself is passed as a parameter to
		 * condition(), you can effectively parameterize the validator. For example, to
		 * create a validator that checks that the value is after a certain date: 
		 * { type:"custom", afterDate:new Date(), 
		 * condition:"value.getTime() > validator.afterDate.getTime()" }
		 * 
		 * Note that, if a field is declared with a builtin FieldType, the value passed in
		 * will already have been converted to the specified type, if possible.
		 * 
		 * 
		 * @param {DataSourceField | FormItem} item - FormItem or DataSourceField on which this validator was declared. NOTE: FormItem will not
		 * be available during a save performed without a
		 * form (eg programmatic save) or if the field 
		 * is not available in the form.
		 * @param {Validator} validator - Validator declaration from eg DataSourceField.validators.
		 * @param {any} value - value to validate
		 * @param {any} record - Field values for record being validated.
		 * @return {boolean} whether the value passed validation.  True for passed, false for fail.
		 */
		condition?(item:DataSourceField | FormItem, validator:Validator, value:any /* Any */, record:any /* Object */): boolean; 

	} // validatorDefinition

	export interface validatorDefinitionStatic {
	} // validatorDefinitionStatic


	/**
	 * A TestFunctionResult is an ordinary JavaScript Object with properties that indicate the 
	 * status of an attempt to generate and execute a function for FormulaBuilder and 
	 * it's subclasses.
	 * 
	 * Because TestFunctionResult is always an ordinary JavaScript Object, it supports the
	 * normal behaviors of JavaScript Objects, including accessing and assigning to properties
	 * via dot notation:
	 * 
	 * var propValue = testFunctionResult.propName;
	 * testFunctionResult.propName = newValue;
	 * 
	 *  
	 */
	export interface TestFunctionResult {
		/** 
		 * Set to true if the formula or summary definition passed in was empty.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly emptyTestValue?: boolean;
		/** 
		 * If the formula or summary format caused a JavaScript error, this contains the JavaScript error text.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly errorText?: string /* String */;
		/** 
		 * Set to true if calling the formula or summary format resulted in a JavaScript Error.
		 * This would generally indicate a reference to non-existent data values. See 
		 * TestFunctionResult.failedGeneration for other types of failure.
		 * 
		 * When set to true, TestFunctionResult.errorText contains the exception message.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly failedExecution?: boolean;
		/** 
		 * Set to true if there is a syntax error in the formula or summary being checked.
		 * 
		 * When set to true, TestFunctionResult.errorText contains the exception message.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly failedGeneration?: boolean;
		/** 
		 * Set to the record that was used when testing the generated function. This is the record
		 * selected by FormulaBuilder.getTestRecord.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly record?: any /* Record */;
		/** 
		 * When a formula or summary format is valid, result contains the result returned by the
		 * generated function when it was executed.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly result?: string /* String */;
	} // TestFunctionResult

	export interface TestFunctionResultStatic {
	} // TestFunctionResultStatic


	/**
	 * 
	 * Tabs are specified as objects, not class instances. For example, when
	 * developing in JavaScript, a typical initialization block for a TabSet would look like
	 * this:
	 * 
	 * TabSet.create({
	 * tabs: [
	 * {title: "tab1", pane: "pane1"},
	 * {title: "tab2"}
	 * ]
	 * });
	 * 
	 * And in XML:
	 * 
	 * &lt;TabSet&gt;
	 * &lt;tabs&gt;
	 * &lt;Tab title="tab1" pane="pane1"/&gt;
	 * &lt;Tab title="tab2"/&gt;
	 * &lt;/tabs&gt;
	 * &lt;/TabSet&gt;
	 * 
	 * 
	 *  
	 */
	export interface Tab {
		/** 
		 * (Read only) If enabled, the tab will collapse to show just its icon when showing the title would
		 * cause overflow of a containing TabBar.
		 * Flags: IR
		 */
		readonly canAdaptWidth?: boolean /* Boolean */;
		/** 
		 * Determines whether this tab should show a close icon allowing the user to dismiss the tab
		 * by clicking on the close icon directly. The URL for the close icon's image will be derived from 
		 * TabSet.closeTabIcon by default, but may be overridden by explicitly specifying
		 * Tab.closeIcon.
		 * 
		 * If unset or null, this property is derived from TabSet.canCloseTabs.
		 * 
		 * Note that setting canClose means that Tab.icon cannot be used,
		 * because it's used for the Tab.closeIcon','closeIcon - see
		 * TabSet.canCloseTabs for a workaround.
		 * 
		 * After the TabSet has been created, you can change a tab's canClose property by calling
		 * TabSet.setCanCloseTab.
		 * Flags: IRW
		 */
		readonly canClose?: boolean;
		/** 
		 * If specified, overrides the TabSet.canEditTabTitles setting, for this one tab
		 * only.
		 * 
		 * Note that the TabSet's TabSet.titleEditEvent','titleEditEvent must be set to a
		 * supported TabTitleEditEvent in order for users to be able to edit this tab's
		 * title.
		 * Flags: IRW
		 */
		readonly canEditTitle?: boolean;
		/** 
		 * (Read only) If TabSet.canReorderTabs is set to true, setting canReorder
		 * explicitly to false for some tab will disallow drag-reordering of
		 * this tab. Has no effect if canReorderTabs is not true at the tabSet level.
		 * 
		 * Note that this setting also disallows a reorder of another tab into the slot before
		 * or following this tab. This means for tabs located at the beginning or end of the 
		 * tab-bar, users cannot changing the index of the tab by dropping another
		 * before or after it. However if you have a canReorder:false
		 * tab which is not at the beginning or end of the tab bar, users can
		 * drag reorder other tabs around it which may ultimately change its position.
		 * Flags: IR
		 */
		readonly canReorder?: boolean /* Boolean */;
		/** 
		 * Custom src for the close icon for this tab to display if it is closeable.
		 * See Tab.canClose and TabSet.canCloseTabs.
		 * Flags: IRW
		 */
		readonly closeIcon?: string /* SCImgURL */;
		/** 
		 * Size of the Tab.closeIcon for this tab. If unspecified the icon will be sized
		 * according to TabSet.closeTabIconSize
		 * Flags: IRW
		 */
		readonly closeIconSize?: number;
		/** 
		 * If specified, this tab will initially be rendered in a disabled state. To enable or
		 * disable tabs on the fly use the TabSet.enableTab, and TabSet.disableTab
		 * methods.
		 * Flags: IRW
		 */
		readonly disabled?: boolean;
		/** 
		 * (Read only) Criteria to be evaluated to determine whether this Tab should be enabled. Re-evaluated
		 * whenever data in the Canvas.ruleScope','tab.ruleScope changes.
		 * 
		 * It works the same as Canvas.enableWhen
		 * Flags: IR, Group: ruleCriteria
		 */
		readonly enableWhen?: AdvancedCriteria;
		/** 
		 * If specified, this tab will show an icon next to the tab title. 
		 * 
		 * NOTE: if you enable TabSet.canCloseTabs','closeable tabs,
		 * tab.icon is used for the close icon. TabSet.canCloseTabs describes
		 * a workaround to enable both a closeIcon and a second icon to be shown.
		 * 
		 * Use TabSet.tabIconClick to add an event handler specifically for clicks on the icon.
		 * 
		 * If a tab Tab.disabled','becomes disabled, a different icon will be loaded by adding
		 * a suffix to the image name (see Button.icon).
		 * 
		 * You should specify a size for the icon via Tab.iconSize or Tab.iconWidth
		 * and Tab.iconHeight. Without an explicitly specified size, tabs may be drawn
		 * overlapping or with gaps the first time a page is loaded, because the icon is not cached
		 * and therefore its size isn't known.
		 * Flags: IRW
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * If Tab.icon is specified, this property may be used to specify a size for the icon
		 * Flags: IRW
		 */
		readonly iconHeight?: number /* integer */;
		/** 
		 * If Tab.icon is specified, this property may be used to specify a size for the icon.
		 * Per side sizing may be specified instead via Tab.iconWidth and Tab.iconHeight.
		 * Flags: IRW
		 */
		readonly iconSize?: number /* integer */;
		/** 
		 * If Tab.icon is specified, this property may be used to specify a size for the icon
		 * Flags: IRW
		 */
		readonly iconWidth?: number /* integer */;
		/** 
		 * Optional ID for the tab, which can later be used to reference the tab.
		 * APIs requiring a reference to a tab will accept the tab's ID 
		 * [including TabSet.selectTab, TabSet.updateTab, TabSet.removeTab].
		 * The ID will also be passed to the TabSet.tabSelected and TabSet.tabDeselected
		 * handler functions, if specified.
		 * 
		 * Note that if you provide an ID, it must be globally unique. If you do not want a
		 * globally unique identifier, set Tab.name instead.
		 * Flags: IRW
		 */
		readonly ID?: string /* Identifier */;
		/** 
		 * Optional name for the tab, which can later be used to reference the tab.
		 * APIs requiring a reference to a tab will accept the tab's name
		 * [including TabSet.selectTab, TabSet.updateTab, TabSet.removeTab].
		 * This name will also be passed to the TabSet.tabSelected and TabSet.tabDeselected
		 * handler functions, if specified.
		 * 
		 * This identifier is requred to be locally unique to the TabSet and cannot be used to get
		 * a global reference to the Tab. If you want a global reference, set Tab.ID instead.
		 * Flags: IRW
		 */
		readonly name?: string /* Identifier */;
		/** 
		 * Specifies the pane associated with this tab. You have two options for the value of
		 * the pane attribute:
		 * 
		 * ID - The global ID of an already created Canvas (or subclass).
		 * Canvas - A live instance of a Canvas (or subclass).
		 * 
		 * You can change the pane associated with a given tab after the TabSet has been created by
		 * calling TabSet.updateTab.
		 * Flags: IRW
		 */
		readonly pane?: string | Canvas /* ID | Canvas */;
		/** 
		 * (Read only) Space to leave around the pane within this Tab.
		 * If specified, this property takes precedence over TabSet.paneMargin
		 * Flags: IR
		 */
		readonly paneMargin?: number /* int */;
		/** 
		 * If TabSet.showTabPicker is true for this TabSet, if set this property will determine
		 * the title of the picker menu item for this tab. If unset, Tab.title will be used
		 * instead
		 * Flags: IRW, Group: tabBarControls
		 */
		readonly pickerTitle?: string /* HTMLString */;
		/** 
		 * Specifies the prompt to be displayed when the mouse hovers over the tab.
		 * Flags: IRW
		 */
		readonly prompt?: string /* HTMLString */;
		/** 
		 * Specifies the title of the this tab. To change the title after the TabSet has been
		 * created, call TabSet.setTabTitle.
		 * Flags: IRW
		 */
		readonly title?: string /* HTMLString */;
		/** 
		 * You can specify an explicit width for the tab using this property. Note that tabs
		 * automatically size to make room for the full title, but if you want to e.g. specify a
		 * uniform width for all tabs in a TabSet, this property enables you to do so.
		 * Flags: IRW
		 */
		readonly width?: number;

		/* Instance Method Overrides */
		/**  
		 *  Optional handler to fire when a tab is deselected. Returning false will cancel the
		 * new selection, leaving this tab selected. As with TabSet.tabSelected this
		 * method only fires when the tabset is drawn.
		 * 
		 * 
		 * @param {TabSet} tabSet - the tabSet containing the tab.
		 * @param {number} tabNum - the index of the deselected tab
		 * @param {Canvas} tabPane - the deselected tab's pane if set
		 * @param {string} ID - the ID of the deselected tab
		 * @param {Tab} tab - pointer to the tab being deselected
		 * @param {Tab} newTab - pointer to the new tab being selected
		 * @param {string} name - the name of the deselected tab
		 * @return {boolean} return <code>false</code> to cancel the tab selection
		 */
		tabDeselected?(tabSet:TabSet, tabNum:number /* integer */, tabPane:Canvas, ID:string /* String */, tab:Tab, newTab:Tab, name:string /* String */): boolean; 

		/**  
		 *  Optional handler to fire when a tab is selected. As with TabSet.tabSelected this
		 * method only fires when the tabset is drawn.
		 * 
		 * 
		 * @param {TabSet} tabSet - the tabSet containing the tab.
		 * @param {number} tabNum - the index of the newly selected tab
		 * @param {Canvas} tabPane - the newly selected tab's pane if set
		 * @param {string} ID - the ID of the newly selected tab
		 * @param {Tab} tab - pointer to the selected tab object
		 * @param {string} name - the name of the newly selected tab
		 */
		tabSelected?(tabSet:TabSet, tabNum:number /* integer */, tabPane:Canvas, ID:string /* String */, tab:Tab, name:string /* String */): void; 

	} // Tab

	export interface TabStatic {
	} // TabStatic


	/**
	 * An object representing a user-created and user-modifiable summary, which can be created and
	 * edited with a SummaryBuilder either directly or via the
	 * ListGrid.canAddSummaryFields behavior. 
	 */
	export interface UserSummary {
		/** 
		 * (Read only) Map from the all-capital letter names used as summary variables in the UserSummary
		 * String to the fieldNames these variables should represent in the context where the
		 * summary is evaluated.
		 * 
		 * When used in ListGridField.userSummary context, field names are evaluated against the
		 * grid record.
		 * 
		 * When used in FormItem.textFormula or ListGridField.editorTextFormula this property
		 * is not used for summary mapping. Instead, field names are evaluated directly against the
		 * current Canvas.ruleScope','rule context.
		 * Flags: IR
		 */
		readonly summaryVars?: any /* Map */;
		/** 
		 * Summary to be evaluated.
		 * 
		 * There are two contexts where a UserSummary is used: ListGridField.userSummary and
		 * FormItem.textFormula or ListGridField.editorTextFormula. For the grid field
		 * summary all variables used by the summary
		 * must be all-capital letter names surrounded by braces and escaped with a # sign (eg #{A}).
		 * These are derived from field values for the record in question - see UserSummary.summaryVars.
		 * 
		 * In the second usage context variables are dot-separated (.) names representing the nested
		 * hierarchy path to the desired value within the Canvas.ruleScope','rule context. No
		 * mapping with UserSummary.summaryVars is needed.
		 * Flags: IRW
		 */
		readonly text?: string /* String */;
	} // UserSummary

	export interface UserSummaryStatic {
	} // UserSummaryStatic


	/**
	 * An object representing a component which the user may create dynamically within an
	 * application.
	 * 
	 * A PaletteNode expresses visual properties for how the palette will display it (eg
	 * PaletteNode.title','title, PaletteNode.icon','icon) as well as instructions for
	 * creating the component the paletteNode represents (PaletteNode.type,
	 * PaletteNode.defaults).
	 * 
	 * Various types of palettes (ListPalette, TreePalette, MenuPalette,
	 * TilePalette) render a PaletteNode in different ways, and allow the user to trigger
	 * creation in different ways (eg drag and drop, or just click). All share a common pattern
	 * for how components are created from palettes.
	 * 
	 * Note that in a TreePalette, a PaletteNode is essentially a TreeNode and can have
	 * properties expected for a TreeNode (eg,
	 * TreeGrid.customIconDropProperty','showDropIcon). Likewise
	 * a PaletteNode in a MenuPalette can have the properties of a MenuItem, such as
	 * MenuItem.enableIf. 
	 */
	export interface PaletteNode {
		/** 
		 * (Read only) If set to false, indicates that this node cannot be 
		 * EditProxy.useCopyPasteShortcuts','copy &amp; pasted, including disallowing calls to
		 * EditContext.makePaletteNode for EditNode','EditNodes created from this
		 * PaletteNode','PaletteNode.
		 * Flags: IR
		 */
		readonly canDuplicate?: boolean /* Boolean */;
		/** 
		 * (Read only) Defaults for the component to be created from this palette. 
		 * 
		 * For example, if PaletteNode.type is "ListGrid", properties valid to pass to
		 * Class.create','ListGrid.create().
		 * 
		 * Note that event handlers or method overrides cannot be configured as defaults,
		 * as they cannot be serialized or restored. Instead, create a subclass that implements the
		 * desired behaviors, and use that subclass as PaletteNode.type. 
		 * 
		 * Flags: IR
		 */
		readonly defaults?: Properties;
		/** 
		 * (Read only) Properties to be applied to the EditNode','editNode when created.
		 * Flags: IR
		 */
		readonly editNodeProperties?: EditNode /* EditNode Properties */;
		/** 
		 * (Read only) Properties to be applied to the 
		 * PaletteNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * Flags: IR
		 */
		readonly editProxyProperties?: EditProxyProps /* EditProxy Properties */;
		/** 
		 * (Read only) Icon for this paletteNode.
		 * Flags: IR
		 */
		readonly icon?: string /* SCImgURL */;
		/** 
		 * (Read only) Prefix used to create unique component ID. If not specified, PaletteNode.type
		 * is used.
		 * Flags: IR
		 */
		readonly idPrefix?: string /* String */;
		/** 
		 * (Read only) For a paletteNode which should be a "singleton", that is, always provides the exact same
		 * object (==) rather than a dynamically created copy, provide the singleton object as
		 * liveObject.
		 * 
		 * Instead of dynamically creating an object from defaults, the liveObject will
		 * simply be assigned to EditNode.liveObject for the created editNode.
		 * Flags: IR
		 */
		readonly liveObject?: any /* Object */;
		/** 
		 * (Read only) Textual title for this paletteNode.
		 * Flags: IR
		 */
		readonly title?: string /* String */;
		/** 
		 * (Read only) SCClassName this paletteNode creates, for example, "ListGrid".
		 * Flags: IR
		 */
		readonly type?: string /* SCClassName */;
	} // PaletteNode

	export interface PaletteNodeStatic {
	} // PaletteNodeStatic


	/**
	 * Represents a sector on the gauge. 
	 */
	export interface GaugeSector {
		readonly endAngle?: number /* float */;
		readonly fillColor?: string /* CSSColor */;
		readonly startAngle?: number /* float */;
		readonly value?: number /* float */;
	} // GaugeSector

	export interface GaugeSectorStatic {
	} // GaugeSectorStatic


	/**
	 * Form item icon descriptor objects used by Form Items to specify the appearance and
	 * behavior of icons displayed after the item in the page flow. 
	 */
	export interface FormItemIcon {
		/** 
		 * (Advanced) Base CSS style. If set, as the component changes state and/or is focused, suffixes
		 * will be added to the base style. Possible suffixes include "Over" if the user mouses
		 * over the icon and FormItemIcon.showOver','this.showOver is true, "Disabled" if
		 * the icon is disabled, and "Focused". In addition, if FormItemIcon.showRTL','showRTL
		 * is enabled, then an "RTL" suffix will be added.
		 * Flags: IRWA
		 */
		readonly baseStyle?: string /* CSSStyleName */;
		/** 
		 * Whether this icon is disabled. Can be updated at runtime via the FormItem.setIconDisabled
		 * method. Note that if the formItem containing this icon is disabled, the icon will
		 * behave in a disabled manner regardless of the setting of the icon.disabled property.
		 * Flags: IRW, Group: appearance
		 */
		readonly disabled?: boolean /* Boolean */;
		/** 
		 * (Advanced) If FormItem.canEdit is set to false, should this icon be disabled.
		 * If unset this is determined by FormItem.disableIconsOnReadOnly.
		 * Note that if FormItemIcon.neverDisable is set to true, the icons will
		 * be rendered enabled regardless of this setting and whether the item is editable.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly disableOnReadOnly?: boolean;
		/** 
		 * (Read only) Criteria to be evaluated to determine whether this icon should appear enabled.
		 * 
		 * Criteria are evaluated against the DynamicForm.getValues','form\'s current values as well as 
		 * the current Canvas.ruleScope','rule context. Criteria are re-evaluated every time
		 * form values or the rule context changes, whether by end user action or by programmatic calls.
		 * 
		 * A basic criteria uses textMatchStyle:"exact". When specified in
		 * componentXML','Component XML this property allows
		 * xmlCriteriaShorthand','shorthand formats for defining criteria.
		 * 
		 * Note: A FormItemIcon using enableWhen must have a FormItem.name','name defined on
		 * its FormItem.
		 * Flags: IR, Group: ruleCriteria
		 */
		readonly enableWhen?: AdvancedCriteria;
		/** 
		 * If set, this property determines the height of this icon in px.
		 * If unset the form item's iconHeight property will be used instead.
		 * Flags: IRW, Group: formIcons
		 */
		readonly height?: number;
		/** 
		 * (Read only) If set, this property determines the number of pixels space to be displayed on 
		 * the left of this form item icon, or for FormItemIcon.inline','inline icons
		 * whose FormItemIcon.inlineIconAlign','inlineIconAlign is
		 * "left",
		 * 
		 * on the right of this form item icon. Must be non-negative.
		 * If unset, the form item's FormItem.iconHSpace','iconHSpace will be used instead.
		 * Flags: IR, Group: formIcons
		 */
		readonly hspace?: number /* Integer */;
		/** 
		 * (Read only) For PickList items with PickListItemIconPlacement set such that the pickList does
		 * not render near-origin, should this icon be rendered inline within
		 * the formItem itself, or within the ComboBoxItem.pickerNavigationBar.
		 * 
		 * If not explicitly specified at the icon level, this will be picked up from
		 * PickList.iconPlacement.
		 * 
		 * For mobile browsing with limited available screen space, icons rendered in
		 * the navigation bar may be easier for the user to interact with.
		 * Flags: IR
		 */
		readonly iconPlacement?: PickListItemIconPlacement;
		/** 
		 * (Read only) When set, this icon is rendered inside the FormItem.textBoxStyle','textBox area
		 * of the FormItem (where input occurs in a TextItem or
		 * ComboBoxItem) as opposed to as a trailing icon.
		 * 
		 * Use FormItemIcon.inlineIconAlign','inlineIconAlign to control alignment of the
		 * icon. Multiple icons can be inlined on both the left and right side of the
		 * textBox area. FormItemIcon.hspace','hspace is honored for spacing
		 * between multiple adjacent icons.
		 * 
		 * Inline icons are not supported in Internet Explorer 6, or when the FormItem
		 * is not a TextItem or ComboBoxItem. When unsupported, the
		 * icon will fall back to non-inline mode.
		 * 
		 * The FormItem.showPickerIcon','picker icon, if any, cannot be inlined.
		 * 
		 * As an alternative to displaying an image, an inline icon may display a string of
		 * HTML instead. See FormItemIcon.text.
		 * Flags: IR
		 */
		readonly inline?: boolean /* Boolean */;
		/** 
		 * (Read only) Horizontal alignment for icons marked FormItemIcon.inline','inline.
		 * 
		 * By default, the first icon that specifies inline is aligned left, and the second and all
		 * subsequent icons to the right. "center" alignment is invalid and will be
		 * ignored.
		 * 
		 * In RTL mode, the alignment is automatically mirrored; inlineIconAlign:"left"
		 * results in the icon being placed on the right and inlineIconAlign:"right"
		 * results in the icon being placed on the left.
		 * Flags: IR
		 */
		readonly inlineIconAlign?: Alignment;
		/** 
		 * (Read only) Identifier for this form item icon. This identifier (if set) should be unique
		 * within this form item and may be used to get a pointer to the icon object
		 * via FormItem.getIcon.
		 * Flags: IR
		 */
		readonly name?: string /* Identifier */;
		/** 
		 * (Advanced) If icon.neverDisable is true, when this form item is disabled, the 
		 * icon will remain enabled. 
		 * Note that disabling the entire form will disable all items, together with their 
		 * icons including those marked as neverDisable - this property only has an effect 
		 * if the form is enabled and a specific item is disabled within it.
		 * 
		 * If this property is true, the icons will also remain enabled if a form item 
		 * is marked as FormItem.canEdit','canEdit:false. For finer grained control over
		 * whether icons are enabled for read-only icons see FormItem.disableIconsOnReadOnly
		 * and FormItemIcon.disableOnReadOnly
		 * Flags: IRWA, Group: formIcons
		 */
		readonly neverDisable?: boolean;
		/** 
		 * (Advanced) If set, this property will be displayed as a prompt (and tooltip text) for this form
		 * item icon.
		 * 
		 * If unset the form item's iconPrompt property will be used instead.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly prompt?: string /* HTMLString */;
		/** 
		 * (Advanced) If show-on-focus behavior is enabled for this icon via FormItemIcon.showOnFocus
		 * or related properties at the item level, and this icon is marked as disabled,
		 * should it be shown on focus? If unset, will be derived from the
		 * FormItem.showDisabledIconsOnFocus or 
		 * FormItem.showDisabledPickerIconOnFocus settings.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly showDisabledOnFocus?: boolean /* Boolean */;
		/** 
		 * (Advanced) Should this icon's image and/or FormItemIcon.baseStyle','baseStyle switch to the
		 * appropriate "Focused" value when the user puts focus on the form item or icon?
		 * Flags: IRWA, Group: formIcons
		 */
		readonly showFocused?: boolean /* Boolean */;
		/** 
		 * (Advanced) If this icon will be updated to show focus (see FormItemIcon.showFocused, 
		 * FormItem.showFocusedIcons), this property governs whether the focused state should
		 * be shown when the item as a whole receives focus or just if the icon receives focus.
		 * If this property is unset, default behavior is to show focused state when the item
		 * receives focus.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly showFocusedWithItem?: boolean;
		/** 
		 * (Advanced) Show this icon when its item gets focus, and hide it when it loses focus. If
		 * non-null, overrides the default behavior specified by 
		 * FormItem.showIconsOnFocus or FormItem.showPickerIconOnFocus, as
		 * appropriate. This feature allows space to be saved in the form for items not being
		 * interacted with, and helps draw attention to the item currently in focus.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly showOnFocus?: boolean /* Boolean */;
		/** 
		 * (Advanced) Should this icon's image and/or FormItemIcon.baseStyle','baseStyle switch to the
		 * appropriate "Over" value when the user rolls over or focuses on the icon?
		 * 
		 * Note if FormItem.showOver is true and FormItemIcon.showOverWhen
		 * is set to "textBox", this icon will show over state when the user rolls over the
		 * text box (or control table, if visible) for the item. This is most commonly used
		 * for FormItemIcon.inline','inline icons.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly showOver?: boolean;
		/** 
		 * (Advanced) If FormItemIcon.showOver or FormItem.showOverIcons is true,
		 * this property may be set to customize when the 'over' styling is applied to
		 * the item. If unset, rollover styling will be applied when the user is over
		 * the icon only.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly showOverWhen?: IconOverTrigger;
		/** 
		 * (Read only, Advanced) Should this icon's FormItemIcon.src','src and/or FormItemIcon.baseStyle','baseStyle
		 * switch to the appropriate RTL value when the FormItem is in RTL mode? If true, then
		 * the image URL for all states will have "_rtl" added before the extension. Also, if
		 * baseStyle is set, all style names will have an "RTL" suffix. This should only be
		 * enabled if RTL media is available.
		 * 
		 * For example, if an icon's src is "[SKINIMG]formItemIcons/myFormIcon.png" and the baseStyle
		 * is "myFormIcon", then in the "Down" state, SmartClient will use "[SKINIMG]formItemIcons/myFormIcon_Down_rtl.png"
		 * for the image source and "myFormIconDownRTL" for the style name.
		 * Flags: IRA, Group: RTL
		 */
		readonly showRTL?: boolean /* Boolean */;
		/** 
		 * If set, this property determines this icon's image source.
		 * If unset the form item's defaultIconSrc property will be used
		 * instead.
		 * As with defaultIconSrc this URL will be modified by adding
		 * "_Over" or "_Disabled" if appropriate to show the icon's over or disabled state.
		 * If FormItemIcon.showRTL','showRTL is enabled, then "_rtl" will be added to the
		 * source URL before the extension.
		 * 
		 * The special value "blank" means that no image will be shown for this icon. This
		 * is particularly useful together with FormItemIcon.baseStyle to implement
		 * spriting of the different icon states.
		 * 
		 * For an FormItemIcon.inline','inline FormItemIcon,
		 * FormItemIcon.text','text may be specified to show a string of HTML instead of
		 * an image.
		 * 
		 * skinning','Spriting can be used for this image, by setting this property to
		 * a SCSpriteConfig formatted string.
		 * Flags: IRW, Group: formIcons
		 */
		readonly src?: string /* SCImgURL */;
		/** 
		 * (Read only, Advanced) TabIndex for this formItemIcon.
		 * 
		 * Set to -1 to remove the icon from the tab order, but be cautious doing so: if the
		 * icon triggers important application functionality that cannot otherwise be accessed
		 * via the keyboard, it would be a violation of accessibility standard to remove the
		 * icon from the tab order.
		 * 
		 * Any usage other than setting to -1 is extremely advanced in the same way as using
		 * FormItem.globalTabIndex.
		 * Flags: IRA, Group: formIcons
		 */
		readonly tabIndex?: number /* int */;
		/** 
		 * (Advanced) As an alternative to displaying an image, an FormItemIcon.inline','inline
		 * FormItemIcon can display a string of HTML where the icon's image would
		 * have appeared. This enables advanced customizations such as using text, icon font symbols,
		 * Unicode dingbats and emoji, and/or SVG in place of an image.
		 * 
		 * Setting an inline icon's text property will cause the HTML to be used instead of an
		 * image, as long as the browser and form item support inline icons.
		 * 
		 * This property only has an effect on inline icons. If the inline property is false,
		 * or the browser or form item does not support inline icons, then the image specified
		 * by FormItemIcon.src (or the form item's FormItem.defaultIconSrc','defaultIconSrc)
		 * will be used.
		 * 
		 * Typically, the HTML is styled via FormItemIcon.baseStyle.
		 * 
		 * Auto-sizing of the HTML is not supported; the HTML will be clipped to the icon's
		 * FormItemIcon.width','width and FormItemIcon.height','height.
		 * Flags: IRWA, Group: formIcons
		 */
		readonly text?: string /* HTMLString */;
		/** 
		 * (Read only) Criteria to be evaluated to determine whether this icon should be visible.
		 * 
		 * Criteria are evaluated against the DynamicForm.getValues','form\'s current values as well as 
		 * the current Canvas.ruleScope','rule context. Criteria are re-evaluated every time
		 * form values or the rule context changes, whether by end user action or by programmatic calls.
		 * 
		 * A basic criteria uses textMatchStyle:"exact". When specified in
		 * componentXML','Component XML this property allows
		 * xmlCriteriaShorthand','shorthand formats for defining criteria.
		 * 
		 * Note: A FormItemIcon using visibleWhen must have a FormItem.name','name defined on
		 * its FormItem.
		 * Flags: IR, Group: ruleCriteria
		 */
		readonly visibleWhen?: AdvancedCriteria;
		/** 
		 * If set, this property determines the width of this icon in px.
		 * If unset the form item's iconWidth property will be used instead.
		 * Flags: IRW, Group: formIcons
		 */
		readonly width?: number;

		/* Instance Method Overrides */
		/**  
		 *  Called when this icon is clicked. The default action is to call FormItem.showPicker.
		 * 
		 * @param {DynamicForm} form - The Dynamic Form to which this icon's item belongs.
		 * @param {FormItem} item - The Form Item containing this icon
		 * @param {FormItemIcon} icon - A pointer to the form item icon clicked
		 */
		click?(form:DynamicForm, item:FormItem, icon:FormItemIcon): void; 

		/**  
		 *  StringMethod action to fire when this icon has focus and receives a keypress
		 * event.
		 * If unset the form item's iconKeyPress method will be fired instead 
		 * (if specified).
		 * 
		 * @param {string} keyName - Name of the key pressed
		 * @param {string} character - character produced by the keypress
		 * @param {DynamicForm} form - The Dynamic Form to which this icon's item belongs.
		 * @param {FormItem} item - The Form Item containing this icon
		 * @param {FormItemIcon} icon - A pointer to the form item icon
		 */
		keyPress?(keyName:string /* String */, character:string /* Character */, form:DynamicForm, item:FormItem, icon:FormItemIcon): void; 

		/**  
		 *  If specified, icon.showIf will be evaluated when the form item is
		 * drawn or redrawn. Return true if the icon should be visible, or false if it
		 * should be hidden. Note that if FormItem.showIcon or FormItem.hideIcon
		 * is called, this method will be overridden.
		 * 
		 * @param {DynamicForm} form - the DynamicForm in which the icon is embedded
		 * @param {FormItem} item - the item to which this icon is attached.
		 * @return {boolean} Return true if the icon should be visible, false otherwise.
		 */
		showIf?(form:DynamicForm, item:FormItem): boolean; 

	} // FormItemIcon

	export interface FormItemIconStatic {
	} // FormItemIconStatic


	/**
	 * A TileRecord is a JavaScript Object whose properties contain values for each
	 * TileField. A TileRecord may have additional properties which affect the record's
	 * appearance or behavior, or which hold data for use by custom logic or other, related
	 * components. 
	 */
	export interface TileRecord {
		/** 
		 * SmartClient Class to use to construct the tile for this particular record.
		 * Flags: IRW
		 */
		readonly tileConstructor?: string /* String */;
		/** 
		 * Additional properties to be passed when creating a tile for this record.
		 * Flags: IRW
		 */
		readonly tileProperties?: CanvasProps /* Canvas Properties */;
	} // TileRecord

	export interface TileRecordStatic {
	} // TileRecordStatic


	/**
	 * Specification of an operator for use in filtering, for example "equals".
	 * Use with DataSource.addSearchOperator to define custom filtering behaviors for
	 * client-side filtering. 
	 */
	export interface Operator {
		/** 
		 * (Read only) For an operator with Operator.valueType:"custom", indicates what kind of FormItem to use to
		 * provide a user interface for creating a valid Criterion. The default of
		 * null means an ordinary TextItem is fine.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly editorType?: string /* FormItemClassname */;
		/** 
		 * (Read only) List of types that this Operator is valid for.
		 * 
		 * If omitted, the operator is assumed to be valid for all FieldTypes unless a list of 
		 * FieldTypes is passed to DataSource.addSearchOperator.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly fieldTypes?: Array<FieldType> /* Array of FieldType */;
		/** 
		 * (Read only) Whether this operator should be offered to users by default in interfaces such as the
		 * FilterBuilder. 
		 * 
		 * Setting hidden:true means the operator can be used in a programmatic search, for example,
		 * by calling ResultSet.setCriteria, but does not appear in the UI.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly hidden?: boolean;
		/** 
		 * (Read only) Unique id for an operator, which appears within AdvancedCriteria as the
		 * Operator property.
		 * 
		 * A list of built-in identifiers is OperatorId','here.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly ID?: OperatorId;
		/** 
		 * (Read only) Whether this operator needs to be executed on the server side.
		 * 
		 * This implies that if a Criterion using this operator is either introduced into
		 * AdvancedCriteria','criteria or is changed, the server will need to be contacted to
		 * perform filtering.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly requiresServer?: boolean;
		/** 
		 * (Read only) The text use when using this operator as an 
		 * FormItem.allowExpressions','expression in a FormItem.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly symbol?: string /* String */;
		/** 
		 * (Read only) User-visible title for this operator when used with text-based fields - eg, 
		 * "equals (match case)" rather than just "equals".
		 * 
		 * To simplify internationalization by separating titles from operator code, you can use
		 * specify Operator.textTitleProperty instead of this property.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly textTitle?: string /* String */;
		/** 
		 * (Read only) Name of a property on the Operators class that provides the title for this operator
		 * when used with text-based fields.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly textTitleProperty?: string /* Identifier */;
		/** 
		 * (Read only) User-visible title for this operator, such as "doesn't contain".
		 * 
		 * To simplify internationalization by separating titles from operator code, you can use
		 * specify Operator.titleProperty instead of this property.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly title?: string /* String */;
		/** 
		 * (Read only) Name of a property on the Operators class that provides the title for this operator.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly titleProperty?: string /* Identifier */;
		/** 
		 * (Read only) Indicates the kind of value expected in a Criterion that uses this operator.
		 * OperatorValueType lists possibilities.
		 * 
		 * The default of null is equivalent to "fieldType", indicating that
		 * Criterion.value is expected to contain a value of the same type as the field
		 * indicated by Criterion.fieldName.
		 * Flags: IR, Group: advancedFilter
		 */
		readonly valueType?: OperatorValueType;

		/* Instance Method Overrides */
		/**  
		 *  Compare two criteria, both of which use this operator, and report whether the newCriteria is
		 * definitely more restrictive than the previous criteria.
		 * 
		 * This is used by the ResultSet to understand whether client-side filtering can
		 * continue using cached data, or whether server-side filtering must be used instead.
		 * 
		 * 
		 * @param {Criterion} newCriterion - new criterion
		 * @param {Criterion} oldCriterion - previous criterion
		 * @return {number} 0 if the criteria are equivalent, 1 if newCriterion is guaranteed more                      restrictive, and -1 if newCriterion is not guaranteed more restrictive
		 */
		compareCriteria?(newCriterion:Criterion, oldCriterion:Criterion): number /* Number */; 

		/**  
		 *  Method which actually evaluates whether a given record meets a Criterion.
		 * 
		 * For operators that act on Criterion.criteria','sub-criteria, call
		 * DataSource.evaluateCriterion to evaluate sub-criteria.
		 * 
		 * Because criteria are sometimes applied to user-entered data that has not been validated, a
		 * robust condition() function should expect that data found in a Record
		 * may be null, NaN, not the correct type (eg "NA" for a type:"date" field) or otherwise out of
		 * the expected range.
		 * 
		 * Note that an Operator has access both to the Criterion object, allowing operators
		 * that act on more than one field or perform calculations, and access to the Operator
		 * object itself, allowing a condition() function to be shared across a range of
		 * related operators with different OperatorIds.
		 * 
		 * 
		 * @param {any} value - value from the field supplied as Criterion.fieldName, if applicable
		 * @param {any} record - record being evaluated
		 * @param {any} fieldName - fieldName supplied as Criterion.fieldName, if applicable
		 * @param {Criterion} criterion - criterion definition
		 * @param {Operator} operator - operator definition
		 * @return {boolean} whether the field passes this criteria
		 */
		condition?(value:any /* Any */, record:any /* Record */, fieldName:any /* Any */, criterion:Criterion, operator:Operator): boolean; 

		/**  
		 *  In combination with Operator.editorType, this override point allows you to define a
		 * client-side only Operator that simply provides a custom UI for creating a Criterion based on
		 * one of the built-in operators.
		 * 
		 * For example, the "between" operator allows AdvancedCriteria to be created that can select any
		 * date range, however in a given application certain specific date ranges might be more
		 * meaningful (eg "next week", "last quarter") and you might want to offer the user a picker for
		 * those date ranges. You could create an operator "presetDateRange" with an editorType 
		 * indicating a custom SelectItem that shows available ranges, and then implement 
		 * operation.getCriterion() to take the value from this SelectItem and produce a Criterion 
		 * selecting the chosen date range.
		 * 
		 * Note that another approach, if it's not required that this custom interface appear in the
		 * FilterBuilder, is just to have a separate DynamicForm for picking special date
		 * ranges, and use DataSource.combineCriteria to merge the criteria with the
		 * FilterBuilder's criteria, as in dynamicReporting', 'this sample.
		 * 
		 * If not implemented, returns the result of calling 
		 * FormItem.getCriterion','getCriterion() on the passed FormItem','item.
		 * 
		 * 
		 * @param {string} fieldName - 
		 * @param {FormItem} item - 
		 * @return {Criterion} 
		 */
		getCriterion?(fieldName:string /* FieldName */, item:FormItem): Criterion; 

	} // Operator

	export interface OperatorStatic {
	} // OperatorStatic


	/**
	 * A DetailViewerRecord is an object literal with properties that define the values for the
	 * various fields of a DetailViewer.
	 * 
	 * For example a DetailViewer that defines the following fields:
	 * 
	 * fields : [
	 * {name: "field1"},
	 * {name: "field2"}
	 * ],
	 * 
	 * Might have the following data:
	 * 
	 * data : [
	 * {field1: "foo", field2: "bar"},
	 * {field1: "field1 value", field2: "field2 value"}
	 * ]
	 * 
	 * Each element in the data array above is an instance of DetailViewerRecord - notice that
	 * these are specified simply as object literals with properties. 
	 */
	export interface DetailViewerRecord {
		/** 
		 * The HTML to display in this record for fields with type set to "link". This overrides
		 * DetailViewerField.linkText.
		 * Flags: IRW
		 */
		readonly linkText?: string /* String */;
	} // DetailViewerRecord

	export interface DetailViewerRecordStatic {
	} // DetailViewerRecordStatic



}