/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped
// Generated: 8/23/2017 7:00:09 AM by kwhite
// Generated from SmartClient version SNAPSHOT_v12.0d_2017-08-23

declare namespace Isc {

    
	/**
	 * An interface for an ordered collection of items.
	 * 
	 * This is the interface that is expected by list-oriented display components such as the
	 * ListGrid. The JavaScript native Array object is retrofitted to support the List interface.
	 * Also, a valid List can be created by mixing the List interface into any class that supports:
	 * 
	 * for read-only support: get(position), getLength()
	 * for modifiable support: set(position), addAt(object, position), removeAt(position)
	 * 
	 * 
	 * NOTE: this interface is compatible with the java.util.List interface, except that:
	 * 
	 * for removal by index, removeAt() must be called instead of remove(). In Java, remove()
	 * is an overloaded method that takes either an int or Object, whereas in JavaScript, a
	 * Number is an Object.
	 * Iterators don't exist.
	 * 
	 * Some methods from the Java List interface have been omitted from the documentation to avoid
	 * redundancy. 
	 */
	export interface List  {
	}


	/**
	 * A DataBoundComponent is a widget that can configure itself for viewing or editing objects which
	 * share a certain schema by "binding" to the schema for that object (called a "DataSource").
	 * 
	 * A schema (or DataSource) describes an object as consisting of a set of properties (or
	 * "fields").
	 * 
	 * DataBoundComponents have a DataBoundComponent.dataSource','common set of APIs for
	 * dealing with binding to DataSources, 
	 * DataBoundComponent.fields','overriding or augmenting the schema information
	 * provided by a DataSource, and manipulating objects or sets of object from the DataSource.
	 * 
	 * The following visual components currently support databinding:
	 * DynamicForm
	 * DetailViewer
	 * ListGrid
	 * TreeGrid
	 * TileGrid
	 * ColumnTree
	 * CubeGrid
	 * 
	 * The following non-visual components also support databinding:
	 * ValuesManager
	 * ResultSet
	 * ResultTree
	 *  
	 */
	export interface DataBoundComponent  {
		/** 
		 * (Read only) How to fetch and manage records retrieve from the server. See FetchMode.
		 * 
		 * This setting only applies to the ResultSet automatically created by calling
		 * ListGrid.fetchData','fetchData(). If a pre-existing ResultSet is passed to setData() instead, it's
		 * existing setting for ResultSet.fetchMode applies.
		 * Flags: IR, Group: databinding
		 */
		readonly dataFetchMode: FetchMode;

		/** 
		 * (Read only) Name of the field that has the most pertinent numeric, date, or enum value, for use when a
		 * DataBoundComponent needs to show a short summary of a record.
		 * 
		 * This attribute has the same function as DataSource.dataField but can be
		 * set for a component with no dataSource, or can be used to override the dataSource setting.
		 * Flags: IR
		 */
		readonly dataField: string /* String */;

		/** 
		 * Text for a menu item allowing users to edit grid highlights.
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly editHilitesText: string /* String */;

		/** 
		 * (Read only) Name of the field that has a long description of the record, or has the primary text data
		 * value for a record that represents an email message, SMS, log or similar.
		 * 
		 * This attribute has the same function as DataSource.descriptionField but can be
		 * set for a component with no dataSource, or can be used to override the dataSource setting.
		 * Flags: IR
		 */
		readonly descriptionField: string /* String */;

		/** 
		 * Text for a menu item allowing users to add a formula field
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly addFormulaFieldText: string /* String */;

		/** 
		 * The list of field-names to export. If provided, the field-list in the exported output is 
		 * limited and sorted as per the list.
		 * 
		 * If exportFields is not provided, the exported output includes all visible fields 
		 * from this component, sorted as they appear.
		 * Flags: IRW
		 */
		readonly exportFields: Array<string> /* Array of String */;

		/** 
		 * Indicates whether the text of the offlineMessage property should be displayed if no data is
		 * available because we do not have a suitable offline cache
		 * Flags: IRW, Group: offlineGroup
		 */
		readonly showOfflineMessage: boolean;

		/** 
		 * (Read only) Criteria to be used when DataBoundComponent.autoFetchData is set.
		 * 
		 * This property supports dynamicCriteria - use Criterion.valuePath
		 * to refer to values in the Canvas.ruleScope.
		 * Flags: IR
		 */
		readonly initialCriteria: Criteria;

		/** 
		 * (Advanced) The title for the DataBoundComponent.fieldEditorWindow','Window used to edit calculated
		 * fields.
		 * 
		 * This is a dynamic string - text within &#36;{...} are dynamic variables and will
		 * be evaluated as JS code whenever the message is displayed.
		 * 
		 * Two dynamic variables are available - "builderType", either Formula or Summary, and 
		 * "fieldTitle", which is the title of the calculated field being edited.
		 * Flags: IRWA, Group: i18nMessages
		 */
		readonly fieldEditorWindowTitle: string /* HTMLString */;

		/** 
		 * If true, the set of fields given by the "default binding" (see 
		 * DataBoundComponent.fields) is used, with any fields specified in
		 * component.fields acting as overrides that can suppress or modify the
		 * display of individual fields, without having to list the entire set of fields that
		 * should be shown.
		 * 
		 * If component.fields contains fields that are not found in the DataSource,
		 * they will be shown after the most recently referred to DataSource field. If the new
		 * fields appear first, they will be shown first.
		 * 
		 * validationFieldBinding', 'This example shows a mixture of component
		 * fields and DataSource fields, and how they interact for validation.
		 * 
		 * This setting may be cleared if a FieldPicker is used to edit the component's field
		 * order.
		 * Flags: IRW, Group: databinding
		 */
		readonly useAllDataSourceFields: boolean;

		/** 
		 * (Read only) If set, detect and prevent duplicate records from being transferred to this component, either via
		 * drag and drop or via DataBoundComponent.transferSelectedData. When a duplicate transfer is detected,
		 * a dialog will appear showing the DataBoundComponent.duplicateDragMessage.
		 * 
		 * If the component either does not have a DataSource or has a DataSource with no
		 * DataSourceField.primaryKey','primaryKey declared, duplicate checking is off by
		 * default. If duplicate checking is enabled, it looks for an existing record in the dataset
		 * that has all of the properties of the dragged record, and considers that a duplicate.
		 * 
		 * For DragDataAction:"copy" where the target DataSource is related to the source
		 * DataSource by foreignKey, a duplicate means that the target list, as filtered by the current
		 * criteria, already has a record whose value for the foreignKey field matches the
		 * primaryKey of the record being transferred.
		 * 
		 * For example, consider dragging "employees" to "teams", where "teams" has a field
		 * "teams.employeeId" which is a foreignKey pointing to "employees.id", and the target
		 * grid has search criteria causing it to show all the members of one team. A duplicate -
		 * adding an employee to the same team twice - is when the target grid's dataset contains an
		 * record with "employeeId" matching the "id" field of the dropped employee.
		 * Flags: IR
		 */
		readonly preventDuplicates: boolean;

		/** 
		 * CSS Style to apply to the drag tracker when dragging occurs on this component.
		 * Flags: IRW
		 */
		readonly dragTrackerStyle: string /* CSSStyleName */;

		/** 
		 * Initial hilite state for the grid. 
		 * 
		 * ListGrid.viewState can be used to initialize all view properties of the grid.
		 * When doing so, hiliteState is not needed because viewState
		 * includes it as well. If both are provided, hiliteState has priority for
		 * hilite state.
		 * 
		 * 
		 * To retrieve current state call DataBoundComponent.getHiliteState','getHiliteState.
		 * 
		 * Flags: IRW, Group: viewState
		 */
		readonly hiliteState: string /* String */;

		/** 
		 * (Read only) If true, when this component is first drawn, automatically call this.fetchData().
		 * Criteria for this fetch may be picked up from DataBoundComponent.initialCriteria, and textMatchStyle may
		 * be specified via ListGrid.autoFetchTextMatchStyle','autoFetchTextMatchStyle.
		 * 
		 * <span style='color:red'>NOTE:</span> if autoFetchData is set, calling
		 * ListGrid.fetchData','fetchData() before draw will cause two requests to be issued, one from the manual
		 * call to fetchData() and one from the autoFetchData setting. The second request will use
		 * only DataBoundComponent.initialCriteria and not any other criteria or settings from the first request.
		 * Generally, turn off autoFetchData if you are going to manually call ListGrid.fetchData','fetchData() at any time.
		 * Flags: IR, Group: dataBoundComponentMethods
		 */
		readonly autoFetchData: boolean;

		/** 
		 * DSRequest.operationId','operationId this component should use when performing remove operations.
		 * Flags: IRW, Group: operations
		 */
		readonly removeOperation: string /* String */;

		/** 
		 * Adds an item to the header context menu allowing users to launch a dialog to define
		 * grid hilites using the HiliteEditor.
		 * 
		 * User-added hilites can be persisted via DataBoundComponent.getHiliteState and 
		 * DataBoundComponent.setHiliteState.
		 * Flags: IRW, Group: hiliting
		 */
		readonly canEditHilites: boolean;

		/** 
		 * (Read only) Properties to apply to the MultiSortDialog which gets automatically generated
		 * when DataBoundComponent.askForSort is called.
		 * 
		 * See also ListGrid.showHeaderSpanTitlesInSortEditor and ListGrid.sortEditorSpanTitleSeparator
		 * Flags: IR
		 */
		readonly multiSortDialogProperties: MultiSortDialogProps /* MultiSortDialog Properties */;

		/** 
		 * The message to display to the user if an export of a DataBoundComponent's data is attempted
		 * while the DataBoundComponent's data is null or an empty list.
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly emptyExportMessage: string /* String */;

		/** 
		 * Text for a menu item allowing users to edit a formula field
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly editFormulaFieldText: string /* String */;

		/** 
		 * (Read only) Specifies a list of icons that can be used in DataBoundComponent.editHilites','hilites.
		 * 
		 * hiliteIcons should be specified as an Array of SCImgURL.
		 * When present, the hilite editing interface shown when DataBoundComponent.editHilites is called 
		 * will offer the user a drop down for picking one of these icons when defining either a 
		 * simple or advanced hilite rule.
		 * 
		 * If the user picks an icon, the created hiliting rule will have Hilite.icon set to 
		 * the chosen icon. DataBoundComponent.hiliteIconPosition controls where the icon will 
		 * appear for that field -- the default is that it appears in front of the normal cell content.
		 * This can also be overridden at the field level.
		 * Flags: IR, Group: hiliting
		 */
		readonly hiliteIcons: Array<string> /* Array of String */;

		/** 
		 * Adds an item to the header context menu allowing users to launch a dialog to define a new
		 * field based on values present in other fields, using the FormulaBuilder.
		 * 
		 * User-added formula fields can be persisted via ListGrid.getFieldState and 
		 * ListGrid.setFieldState.
		 * Flags: IRW, Group: formulaFields
		 */
		readonly canAddFormulaFields: boolean;

		/** 
		 * Message to display when this DataBoundComponent attempts to save data while the application
		 * is offline.
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly offlineSaveMessage: string /* String */;

		/** 
		 * Text for a menu item allowing users to remove a summary field
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly removeSummaryFieldText: string /* String */;

		/** 
		 * (Read only) Designates a field of FieldType','type:"image" as the field to use when rendering a
		 * record as an image, for example, in a TileGrid. 
		 * 
		 * This attribute has the same function as DataSource.iconField but can be
		 * set for a component with no dataSource, or can be used to override the dataSource setting.
		 * Flags: IR
		 */
		readonly iconField: string /* String */;

		/** 
		 * Whether to show fields marked hidden:true when a DataBoundComponent is given a
		 * DataSource but no component.fields.
		 * 
		 * The hidden property is used on DataSource fields to mark fields that are
		 * never of meaning to an end user.
		 * Flags: IRW, Group: databinding
		 */
		readonly showHiddenFields: boolean;

		/** 
		 * If Summary rows exist for this component, whether to include them when exporting client data.
		 * Flags: IRW
		 */
		readonly exportIncludeSummaries: boolean;

		/** 
		 * Default width and height of DataBoundComponent.hiliteIcons','hilite icons for this component.
		 * Can be overridden at the component level via explicit 
		 * DataBoundComponent.hiliteIconWidth','hiliteIconWidth and
		 * DataBoundComponent.hiliteIconHeight','hiliteIconHeight, or at the field level via 
		 * ListGridField.hiliteIconSize','hiliteIconSize,
		 * ListGridField.hiliteIconWidth','hiliteIconWidth and 
		 * ListGridField.hiliteIconHeight','hiliteIconHeight
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconSize: number;

		/** 
		 * (Read only) Class level defaults to apply to the MultiSortDialog which gets automatically
		 * generated when DataBoundComponent.askForSort is called.
		 * 
		 * See also ListGrid.showHeaderSpanTitlesInSortEditor and ListGrid.sortEditorSpanTitleSeparator
		 * Flags: IR
		 */
		readonly multiSortDialogDefaults: MultiSortDialogProps /* MultiSortDialog Properties */;

		/** 
		 * A message to display to the user if server-side validation fails with an error but the
		 * server did not provide an error message
		 * Flags: IRW, Group: validation
		 */
		readonly noErrorDetailsMessage: string /* String */;

		/** 
		 * Indicates whether or not this component will load its data 
		 * DataSource.progressiveLoading','progressively.
		 * Flags: IRW, Group: progressiveLoading
		 */
		readonly progressiveLoading: boolean;

		/** 
		 * (Advanced) Before we start editing values in this DataBoundComponent, should we perform a deep clone 
		 * of the underlying values. See DataSource.deepCloneOnEdit for details of what this means.
		 * 
		 * If this value is not explicitly set, it defaults to the value of DataSource.deepCloneOnEdit.
		 * This value can be overridden per-field with DataSourceField.deepCloneOnEdit.
		 * 
		 * Like the other deepCloneOnEdit settings, this flag only has an effect if you are 
		 * editing a values object that contains nested objects or arrays, using 
		 * Canvas.dataPath','dataPaths.
		 * Flags: IRWA
		 */
		readonly deepCloneOnEdit: boolean /* Boolean */;

		/** 
		 * DSRequest.operationId','operationId this component should use when performing add operations.
		 * Flags: IRW, Group: operations
		 */
		readonly addOperation: string /* String */;

		/** 
		 * Height for hilite icons for this listGrid.
		 * Overrides DataBoundComponent.hiliteIconSize','hiliteIconSize.
		 * Can be overridden at the field level
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconHeight: number;

		/** 
		 * Marker that can be set on a record to flag that record as hilited. Should be set to a value
		 * that matches Hilite.id for a hilite defined on this component.
		 * Flags: IRW
		 */
		readonly hiliteProperty: string /* String */;

		/** 
		 * Text for a menu item allowing users to add a formula field
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly addSummaryFieldText: string /* String */;

		/** 
		 * DSRequest.operationId','operationId this component should use when performing fetch operations.
		 * Flags: IRW, Group: operations
		 */
		readonly fetchOperation: string /* String */;

		/** 
		 * Indicates what to do with data dragged into another DataBoundComponent. See
		 * DragDataAction type for details.
		 * Flags: IRW, Group: dragging
		 */
		readonly dragDataAction: DragDataAction;

		/** 
		 * Message to display when this DataBoundComponent attempts to load data that is not available
		 * because the browser is currently offline. Depending on the component, the message is either
		 * displayed in the component's body, or in a pop-up warning dialog.
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly offlineMessage: string /* String */;

		/** 
		 * Criteria that are never shown to or edited by the user and are cumulative with any criteria
		 * provided via DataBoundComponent.initialCriteria, DataBoundComponent.setCriteria
		 * etc.
		 * Flags: IRW
		 */
		readonly implicitCriteria: Criteria;

		/** 
		 * (Advanced) Whether to show fields of non-atomic types when a DataBoundComponent is given a
		 * DataSource but no component.fields.
		 * 
		 * If true, the component will show fields that declare a complex type, for example, a
		 * field 'shippingAddress' that declares type 'Address', where 'Address' is the ID of a
		 * DataSource that declares the fields of a shipping address (city, street name, etc).
		 * 
		 * Such fields may need custom formatters or editors in order to create a usable interface,
		 * for example, an Address field in a ListGrid might use a custom formatter to combine the
		 * relevant fields of an address into one column, and might use a pop-up dialog for
		 * editing.
		 * Flags: IRWA, Group: databinding
		 */
		readonly showComplexFields: boolean;

		/** 
		 * If a summary format string contains an invalid field reference, replace the reference
		 * with the missingSummaryFieldValue. The default value is "-".
		 * Flags: IRW, Group: summaryFields
		 */
		readonly missingSummaryFieldValue: string /* String */;

		/** 
		 * (Read only) Best field to use for a user-visible title for an individual record from this
		 * component.
		 * 
		 * This attribute has the same function as DataSource.iconField but can be
		 * set for a component with no dataSource, or can be used to override the dataSource setting.
		 * Flags: IR
		 */
		readonly titleField: string /* String */;

		/** 
		 * (Read only) When DataBoundComponent.hiliteIcons','hiliteIcons are present, where the hilite icon will be placed 
		 * relative to the field value. See HiliteIconPosition. Can be overridden at the
		 * field level.
		 * Flags: IR, Group: hiliting
		 */
		readonly hiliteIconPosition: HiliteIconPosition;

		/** 
		 * (Read only) This component's HiliteEditor instance used to allow the user to create, modify, or delete
		 * hilites.
		 * 
		 * The following autoChildUsage','passthroughs apply:
		 * 
		 * DataBoundComponent.hiliteIcons for HiliteEditor.hiliteIcons
		 * 
		 * Flags: R, Group: hiliting
		 */
		readonly hiliteEditor: HiliteEditor /* AutoChild HiliteEditor */;

		/** 
		 * The DataSource that this component should bind to for default fields and for performing
		 * DSRequest','DataSource requests.
		 * 
		 * Can be specified as either a DataSource instance or the String ID of a DataSource.
		 * Flags: IRW, Group: databinding
		 */
		readonly dataSource: DataSource | string /* DataSource | ID */;

		/** 
		 * Flag controlling when to recategorize records being dropped on a databound
		 * component from another databound component.
		 * Flags: IRW
		 */
		readonly dragRecategorize: RecategorizeMode;

		/** 
		 * The strategy to use when generating names for new fields in this component. The default 
		 * strategy, "simple", combines the field-type with an index maintained by field-type and 
		 * component instance. For example, "formulaField1".
		 * Flags: IRW
		 */
		readonly fieldNamingStrategy: FieldNamingStrategy;

		/** 
		 * (Advanced) When assembling a value for a DataBoundComponent.canAddSummaryFields','summary field, if a referenced
		 * field is hilited, should the hilite HTML be included in the summary field value?
		 * 
		 * To control hilites showing in group summaries, see ListGrid.showHilitesInGroupSummary','showHilitesInGroupSummary.
		 * Flags: IRWA
		 */
		readonly includeHilitesInSummaryFields: boolean;

		/** 
		 * (Advanced) Delay in milliseconds before fetching data.
		 * 
		 * This setting only applies to the ResultSet automatically created by calling
		 * ListGrid.fetchData','fetchData(). If a pre-existing ResultSet is passed to setData() instead, it's
		 * existing setting for ResultSet.fetchDelay applies.
		 * Flags: IRWA, Group: databinding
		 */
		readonly dataFetchDelay: number /* integer */;

		/** 
		 * For databound components that support editing, the error message for a failed validator
		 * that does not specify its own errorMessage.
		 * Flags: IRW, Group: validation
		 */
		readonly unknownErrorMessage: string /* HTMLString */;

		/** 
		 * Whether to show fields marked detail:true when a DataBoundComponent is 
		 * given a DataSource but no component.fields.
		 * 
		 * The detail property is used on DataSource fields to mark fields that 
		 * shouldn't appear by default in a view that tries to show many records in a small space.
		 * Flags: IRW, Group: databinding
		 */
		readonly showDetailFields: boolean;

		/** 
		 * (Advanced) When an item is dropped on this component, and DataBoundComponent.addDropValues is true and both 
		 * the source and target widgets are databound, either to the same DataSource or 
		 * to different DataSources that are related via a foreign key, this object 
		 * provides the "drop values" that SmartClient will apply to the dropped object 
		 * before updating it.
		 * 
		 * If this property is not defined, SmartClient defaults to returning the selection
		 * criteria currently in place for this component. Thus, any databound items (for example, 
		 * rows from other grids bound to the same DataSource) dropped on the grid will,
		 * by default, be subjected to an update that makes them conform to the grid's 
		 * current filter criteria.
		 * Flags: IRWA, Group: dragging
		 */
		readonly dropValues: any /* Object */;

		/** 
		 * DSRequest.operationId','operationId this component should use when performing update operations.
		 * Flags: IRW, Group: operations
		 */
		readonly updateOperation: string /* String */;

		/** 
		 * (Read only, Advanced) If this component is bound to a dataSource, this attribute may be specified to customize
		 * what fields from the dataSource may be edited by default. For example the SearchForm
		 * class has this attribute set to "canFilter" which allows search forms to edit
		 * dataSource fields marked as canEdit:false (but not those marked as
		 * canFilter:false).
		 * 
		 * Note that if canEdit is explicitly specified on a field in 
		 * the DataBoundComponent.fields array, that property will be respected in preference to 
		 * the canEditAttribute value. (See FormItem.canEdit, ListGridField.canEdit).
		 * Also note that individual dataBoundComponents may have additional logic around whether a field
		 * can be edited - for example ListGrid.canEditCell may be overridden.
		 * Flags: IRA
		 */
		readonly canEditFieldAttribute: string /* Identifier */;

		/** 
		 * Text for a menu item allowing users to edit the formatter for a field
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly editSummaryFieldText: string /* String */;

		/** 
		 * How much padding should there be on the right of DataBoundComponent.hiliteIcons','hilite icons by default?
		 * Can be overridden at the field level
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconRightPadding: number;

		/** 
		 * When using DataBoundComponent.dataFetchMode','data paging, how many records to fetch at a time. If set to
		 * a positive integer, dataPageSize will override the default 
		 * ResultSet.resultSize','resultSize for ResultSets automatically created when you call
		 * DataBoundComponent.fetchData (and similarly for the ResultTree.resultSize','resultSize of
		 * ResultTrees). Leaving dataPageSize at its default means to just use the default page
		 * size of the data container.
		 * 
		 * Note that regardless of the dataPageSize setting, a component will always fetch
		 * all of data that it needs to draw. Settings such as
		 * ListGrid.showAllRecords','showAllRecords:true,
		 * ListGrid.drawAllMaxCells','drawAllMaxCells and
		 * ListGrid.drawAheadRatio','drawAheadRatio can cause more rows than the configured
		 * dataPageSize to be fetched.
		 * Flags: IRW, Group: databinding
		 */
		readonly dataPageSize: number /* integer */;

		/** 
		 * (Read only) The title for the DataBoundComponent.editHilites','Hilite Editor dialog.
		 * Flags: IR, Group: i18nMessages
		 */
		readonly editHilitesDialogTitle: string /* String */;

		/** 
		 * (Read only) The Window used to edit calculated fields for this component.
		 * Flags: R
		 */
		readonly fieldEditorWindow: Window /* AutoChild Window */;

		/** 
		 * A DataBoundComponent manipulates records with one or more fields, and
		 * component.fields tells the DataBoundComponent which fields to present, in what
		 * order, and how to present each field.
		 * 
		 * When both component.fields and 
		 * DataBoundComponent.dataSource','component.dataSource are set,
		 * any fields in component.fields with the same name as a DataSource field
		 * inherit properties of the DataSource field. This allows you to centralize data model
		 * information in the DataSource, but customize presentation of DataSource fields on a
		 * per-component basic. For example, in a ListGrid, a shorter title or format for a field
		 * might be chosen to save space.
		 * 
		 * By default, only fields specified on the component are shown, in the order specified on
		 * the component. The DataBoundComponent.useAllDataSourceFields flag can be set to show all fields
		 * from the DataSource, with component.fields acting as field-by-field
		 * overrides and/or additional fields.
		 * 
		 * If a DataBoundComponent is given a DataSource, but no component.fields, the
		 * "default binding" is used: fields are shown in DataSource order, according
		 * to the properties DataBoundComponent.showHiddenFields and 
		 * DataBoundComponent.showDetailFields.
		 * Flags: IRW, Group: databinding
		 */
		readonly fields: Array<string> /* Array of Field */;

		/** 
		 * Adds an item to the header context menu allowing users to launch a dialog to define a new
		 * text field that can contain both user-defined text and the formatted values present in other 
		 * fields, using the SummaryBuilder.
		 * 
		 * User-added summary fields can be persisted via ListGrid.getFieldState and 
		 * ListGrid.setFieldState.
		 * Flags: IRW, Group: summaryFields
		 */
		readonly canAddSummaryFields: boolean;

		/** 
		 * How much padding should there be on the left of DataBoundComponent.hiliteIcons','hilite icons by default?
		 * Can be overridden at the field level
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconLeftPadding: number;

		/** 
		 * (Advanced) Does this component represent singular or multiple "records" objects?
		 * Options are "multiple" or "single", or "either"
		 * Flags: IRWA
		 */
		readonly dataArity: string /* String */;

		/** 
		 * Setting exportAll to true prevents the component from passing it's list of fields to the 
		 * export call. The result is the export of all visible fields from DataSource.fields.
		 * 
		 * If exportAll is false, an export operation will first consider 
		 * DataBoundComponent.exportFields, if it's set, and fall back on all visible fields from
		 * DataSource.fields otherwise.
		 * Flags: IRW
		 */
		readonly exportAll: boolean;

		/** 
		 * (Read only) Message to show when a user attempts to transfer duplicate records into this component, and
		 * DataBoundComponent.preventDuplicates is enabled.
		 * 
		 * If set to null, duplicates will not be reported and the dragged duplicates will not be
		 * saved.
		 * Flags: IR, Group: i18nMessages
		 */
		readonly duplicateDragMessage: string /* String */;

		/** 
		 * Text for a menu item allowing users to remove a formula field
		 * Flags: IRW, Group: i18nMessages
		 */
		readonly removeFormulaFieldText: string /* String */;

		/** 
		 * (Read only) The useFlatFields flag causes all simple type fields anywhere in a nested
		 * set of DataSources to be exposed as a flat list for form binding. 
		 * 
		 * useFlatFields is typically used with imported metadata, such as 
		 * XMLTools.loadXMLSchema','XML Schema from a 
		 * XMLTools.loadWSDL','WSDL-described web service, as a means of eliminating levels of XML
		 * nesting that aren't meaningful in a user interface, without the cumbersome and fragile
		 * process of mapping form fields to XML structures.
		 * 
		 * For example, having called WebService.getInputDS to retrieve the input message
		 * schema for a web service operation whose input message looks like this:
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
		 * Setting useFlatFields on a DynamicForm that is bound to this input
		 * message schema would result in 5 FormItem','FormItems reflecting the 5 simple type
		 * fields in the message.
		 * 
		 * For this form, the result of DynamicForm.getValues','form.getValues() might look
		 * like:
		 * 
		 * {
		 * searchFor: "search text",
		 * caseSensitive: false,
		 * serviceName: true,
		 * documentation : true,
		 * keywords : true
		 * }
		 * When contacting a WebService','WSDL web service, these values can be automatically
		 * mapped to the structure of the input message for a web service operation by setting
		 * WSRequest.useFlatFields (for use with WebService.callOperation) or by setting
		 * DSRequest.useFlatFields (for use with a DataSource that is
		 * wsdlBinding','bound to a WSDL web service via
		 * OperationBinding.wsOperation). 
		 * 
		 * Using these two facilities in conjunction (component.useFlatFields and
		 * request.useFlatFields) allows gratuitous nesting to be consistently bypassed in both the user
		 * presentation and when providing the data for XML messages.
		 * 
		 * You can also set OperationBinding.useFlatFields to automatically enable 
		 * "flattened" XML serialization (request.useFlatFields) for all DataSource requests of a
		 * particular operationType.
		 * 
		 * Note that useFlatFields is not generally recommended for use with structures
		 * where multiple simple type fields exist with the same name, however if used with such a
		 * structure, the first field to use a given name wins. "first" means the first field
		 * encountered in a depth first search. "wins" means only the first field will be present as a
		 * field when data binding.
		 * Flags: IR
		 */
		readonly useFlatFields: boolean;

		/** 
		 * Width for hilite icons for this component.
		 * Overrides DataBoundComponent.hiliteIconSize','hiliteIconSize.
		 * Can be overridden at the field level.
		 * Flags: IRW, Group: hiliting
		 */
		readonly hiliteIconWidth: number;

		/** 
		 * Indicates whether to add "drop values" to items dropped on this component, if both 
		 * the source and target widgets are databound, either to the same DataSource or 
		 * to different DataSources that are related via a foreign key. "Drop values" are 
		 * properties of the dropped item that you wish to change (and persist) as a 
		 * result of the item being dropped on this grid.
		 * 
		 * If this value is true and this component is databound, DataBoundComponent.getDropValues will 
		 * be called for every databound item dropped on this grid, and an update performed
		 * on the item
		 * Flags: IRW, Group: dragging
		 */
		readonly addDropValues: boolean /* Boolean */;

		/** 
		 * (Read only) Name of the field that has the second most pertinent piece of textual information in the
		 * record, for use when a DataBoundComponent needs to show a short summary of a record.
		 * 
		 * This attribute has the same function as DataSource.infoField but can be
		 * set for a component with no dataSource, or can be used to override the dataSource setting.
		 * Flags: IR
		 */
		readonly infoField: string /* String */;

		/** 
		 * Hilites to be applied to the data for this component. See hiliting.
		 * Flags: IRW, Group: hiliting
		 */
		readonly hilites: Array<Hilite> /* Array of Hilite */;

		/** 
		 * If the result of a formula evaluation is invalid (specifically, if isNaN(result)==true),
		 * badFormulaResultValue is displayed instead. The default value is ".".
		 * Flags: IRW, Group: formulaFields
		 */
		readonly badFormulaResultValue: string /* String */;

	}


	/**
	 * An interface that provides the ability to create components from a PaletteNode. 
	 */
	export interface Palette  {
		/** 
		 * Default EditContext that this palette should use. Palettes generally create components via
		 * drag and drop, but may also support creation via double-click or other UI idioms when a
		 * defaultEditContext is set.
		 * Flags: IRW
		 */
		readonly defaultEditContext: EditContext | EditTree | EditPane;

		/** 
		 * (Read only) Whether created components should have their "ID" or "name" property automatically set
		 * to a unique value based on the component's type, eg, "ListGrid0".
		 * Flags: IR, Group: devTools
		 */
		readonly generateNames: boolean;

	}


	/**
	 * Generic Chart properties and interfaces to be mixed into concrete charting implementations.
	 * 
	 * Components such as the ListGrid.chartData','ListGrid and
	 * CubeGrid.makeChart','CubeGrid expect this interface and can drive charting engines
	 * that support it.
	 * 
	 * Concrete Chart implementations may expose whatever properties they want for configuration,
	 * however, to enable easy switching of charting engines (different engines may be used for
	 * different end users based on that user's installed plugins), they should support
	 * the properties of this interface to the maximum extent possible.
	 * 
	 * This interface also provides core data model management (see
	 * Chart.getValue','getValue()) for charting engines. 
	 */
	export interface Chart  {
		/** 
		 * (Read only) An Array of facets, exactly analogous to CubeGrid.facets, except that:
		 * 
		 * the "inlinedValues" property can be set on a facet to change data representation as
		 * described under Chart.data.
		 * for a non-inlined facet, Charts support auto-derivation of facetValues from the data.
		 * 
		 * Flags: IR
		 */
		readonly facets: Array<Facet> | Facet /* Array of Facet | Facet */;

		/** 
		 * (Read only) Dataset for this chart.
		 * 
		 * Two basic formats are supported:
		 * 
		 * "Standard model": data is an array of CellRecords where each record
		 * contains one data value. Each record also contains a property named after each facetId
		 * whose value is a facetValueId from that facet.
		 * 
		 * For example, with a facet with id "regions" and facetValues "west", "north" and "east", and
		 * with Chart.valueProperty with it's default value "_value", the data property
		 * could be:
		 * 
		 * isc.Chart.create({
		 * facets:[{ id:"regions" }],
		 * data : [
		 * {regions:"west", _value:4},
		 * {regions:"north", _value:2},
		 * {regions:"east", _value:5}
		 * ]
		 * })
		 * If there were a second facet with id "product" and facetValues "cars" and "trucks", a Chart
		 * with a complete set of values would be:
		 * 
		 * isc.Chart.create({
		 * facets:[{ id:"regions" }, { id:"product" }],
		 * data : [
		 * {product:"cars", regions:"west", _value:4},
		 * {product:"cars", regions:"north", _value:2},
		 * {product:"cars", regions:"east", _value:5},
		 * {product:"trucks", regions:"west", _value:1},
		 * {product:"trucks", regions:"north", _value:9},
		 * {product:"trucks", regions:"east", _value:3}
		 * ]
		 * })
		 * This 2 facet (or "2 dimensional") dataset, if rendered as a bar chart, would use stacked or
		 * clustered bars and a legend.
		 * 
		 * 
		 * "Inlined facet": data is a single CellRecord or Array of CellRecords where
		 * each record contains multiple data values. In this case, one facet definition is considered
		 * "inlined", meaning that the facetValueIds from this facet appear as properties in each
		 * record, and each such property holds one data value. For example, a complete chart
		 * definition whose dataset is equivalent to the previous example would be:
		 * 
		 * isc.Chart.create({
		 * facets: [{ 
		 * inlinedValues:true,
		 * values : [ { id:"west" }, { id:"north" }, { id : "east" } ]
		 * }],
		 * data : { west:4, north:5, east:2 }
		 * })
		 * Note that the property "inlinedValues" must be set on the facet definition, and the set of
		 * facetValueIds must be specified outside of the data array (with the "standard model",
		 * facetValueIds can be automatically derived from the data). 
		 * 
		 * A two facet chart with an inlined facet can be defined as follows:
		 * 
		 * isc.Chart.create({
		 * facets: [
		 * { 
		 * inlinedValues:true,
		 * values : [ { id:"west" }, { id:"north" }, { id : "east" } ]
		 * }, 
		 * { id:"product" }
		 * ],
		 * data : [
		 * { product:"cars", west:4, north:5, east:2 },
		 * { product:"trucks", west:1, north:9, east:3 }
		 * ]
		 * })
		 * 
		 * Comparing between the formats, the "standard model" format treats all facets identically,
		 * which can be of use when integrating with server technology that likewise treats all facets
		 * identically. The "inlined facet" format is a more compact data representation and allows
		 * easier conversion from data displayed in a ListGrid.
		 * Flags: IR
		 */
		readonly data: Array<CellRecord> | CellRecord /* Array of CellRecord | CellRecord */;

		/** 
		 * (Read only) Whether to use stacking for charts where this makes sense (bar, column, line and radar
		 * charts). If stacked is not set and two facets are supplied, clustering is assumed.
		 * Flags: IR
		 */
		readonly stacked: boolean;

		/** 
		 * (Read only) Title for the chart as a whole.
		 * Flags: IR
		 */
		readonly title: string /* String */;

		/** 
		 * (Read only) Whether to show chart in a 3D appearance, for charts that support this.
		 * Flags: IR, Group: chartAppearance
		 */
		readonly threeD: boolean;

		/** 
		 * (Read only) A label for the data values, such as "Sales in Thousands", typically used as the label for
		 * the value axis.
		 * Flags: IR
		 */
		readonly valueTitle: string /* String */;

		/** 
		 * Type of chart to draw, see ChartType for a list of known types.
		 * Flags: IRW
		 */
		readonly chartType: ChartType;

		/** 
		 * (Read only) Subtitle for the chart as a whole, typically used to describe fixed facet values (such as
		 * "for Q1, 1999").
		 * 
		 * The subTitle should appear under the title in less emphasized text.
		 * Flags: IR
		 */
		readonly subTitle: string /* String */;

		/** 
		 * (Read only) Property in each record that holds a data value.
		 * 
		 * Not used if there is an inline facet, see Chart.data.
		 * Flags: IR
		 */
		readonly valueProperty: string /* String */;

		/** 
		 * (Read only) Whether the chart should animate when shown (eg, bars or columns grow into place)
		 * Flags: IR, Group: chartAppearance
		 */
		readonly shouldAnimateShow: boolean;

		/** 
		 * (Read only) Whether to show labels on each individual value (bar, column or line point)
		 * Flags: IR, Group: chartAppearance
		 */
		readonly labelValues: boolean;

	}


	/**
	 * Interface to show a drop-down list of pickable options. Used by the SelectItem and
	 * ComboBoxItem classes. The generated drop down list of options must be an instance of
	 * PickListMenu, or a subclass thereof. 
	 */
	export interface PickList  {
		/** 
		 * (Read only) If true, even non-matching options will be shown, with configurable 
		 * PickList.separatorRows','separator rows in between. Not valid for
		 * PickList.optionDataSource','databound pickLists.
		 * Flags: IR
		 */
		readonly showAllOptions: boolean;

		/** 
		 * (Read only) Array of records to show between matching and non-matching rows in the PickList.
		 * 
		 * Not valid for PickList.optionDataSource','databound pickLists.
		 * Flags: IR
		 */
		readonly separatorRows: Array<ListGridRecord> /* Array of ListGridRecord */;

		/** 
		 * (Read only) For PickList items with PickListItemIconPlacement set such that the pickList does
		 * not render near-origin, should specified FormItem.icons','icons be rendered inline within
		 * the formItem itself, or within the ComboBoxItem.pickerNavigationBar','pickerNavigationBar.
		 * 
		 * May be overridden at the icon level via FormItemIcon.iconPlacement.
		 * 
		 * For mobile browsing with limited available screen space, icons rendered in
		 * the navigation bar may be easier for the user to interact with.
		 * Flags: IR
		 */
		readonly iconPlacement: PickListItemIconPlacement;

		/** 
		 * (Read only, Advanced) If this item has a specified optionDataSource and this property is
		 * true, the list of fields used by this pickList will be passed to
		 * the datasource as DSRequest.outputs. If the datasource supports this feature
		 * the returned fields will be limited to this list. A custom datasource will need to
		 * add code to implement field limiting.
		 * 
		 * This list of used fields consists of the values of FormItem.valueField','valueField,
		 * FormItem.displayField','displayField and PickList.pickListFields','pickListFields.
		 * 
		 * NOTE: When enabled, FormItem.getSelectedRecord','getSelectedRecord will only include the
		 * fetched fields.
		 * Flags: IRA
		 */
		readonly fetchDisplayedFieldsOnly: boolean;

		/** 
		 * Default width to show the pickList.
		 * If not specified, the width of this form item's element will be used instead.
		 * 
		 * Note that this is a minimum value - by default if the values displayed in this pickList
		 * are wider than the specified width the list will expand to accomodate them.
		 * Flags: IRW
		 */
		readonly pickListWidth: number;

		/** 
		 * (Read only, Advanced) For PickList.optionDataSource','databound items, this property will be passed
		 * to the generated ResultSet data object for the pickList as ResultSet.useClientFiltering.
		 * Setting to false will disable filtering on the client and ensure criteria are
		 * always passed to the DataSource directly.
		 * Flags: IRA
		 */
		readonly useClientFiltering: boolean /* Boolean */;

		/** 
		 * (Read only, Advanced) If filterLocally is set for this item, and this item is showing options 
		 * from a dataSource, fetch the entire set of options from the server, and use these values
		 * to map the item value to the appropriate display value. Also use "local"
		 * type filtering on drop down list of options.
		 * 
		 * This means data will only be fetched once from the server, and then filtered on the
		 * client.
		 * 
		 * Note - when this property is set to false, filtering will still be 
		 * performed on the client if a complete set of data for some criteria has been cached
		 * by a fetch, and a subsequent fetch has more restrictive criteria. To explicitly
		 * disable client-side filtering set the PickList.useClientFiltering property to false.
		 * Flags: IRA
		 */
		readonly filterLocally: boolean /* Boolean */;

		/** 
		 * (Advanced) If PickList.animatePickList is true, this attribute specifies the millisecond 
		 * duration of the animation effect.
		 * Flags: IRWA
		 */
		readonly pickListAnimationTime: number;

		/** 
		 * (Read only) The Class to use when creating the pickList for a FormItem. Must be a subclass of the
		 * builtin default, PickListMenu','PickListMenu.
		 * Flags: IR
		 */
		readonly pickListConstructor: string /* SCClassName */;

		/** 
		 * (Read only, Advanced) If this item has a specified optionDataSource, and this property is not
		 * null, this will be passed to the datasource as DSRequest properties when
		 * performing the filter operation on the dataSource to obtain the set of options for the
		 * list. This provides, among other capabilities, a way to trigger the server to return
		 * summary records.
		 * Flags: IRA
		 */
		readonly optionFilterContext: DSRequest /* DSRequest Properties */;

		/** 
		 * Height for an empty pick list (showing the empty message), if the pick list has no
		 * records and PickList.hideEmptyPickList is false.
		 * Flags: IRW
		 */
		readonly emptyPickListHeight: number;

		/** 
		 * (Read only) Base Style for pickList cells. See cellStyleSuffixes for details on how
		 * stateful suffixes are combined with the pickListBaseStyle to generate stateful cell styles.
		 * 
		 * Note: if PickList.pickListTallBaseStyle is specified, this property will be used as the
		 * ListGrid.normalBaseStyle','normalBaseStyle and that property will be applied
		 * to cells that do not match the default cell height, or if ListGrid.fastCellUpdates
		 * is true for the pickList in Internet Explorer.
		 * Flags: IR
		 */
		readonly pickListBaseStyle: string /* CSSStyleName */;

		/** 
		 * (Read only, Advanced) If this form item maps data values to display values by retrieving the 
		 * FormItem.displayField values from an 
		 * FormItem.optionDataSource','optionDataSource, this property 
		 * denotes the the field to use as the underlying data value in records from the 
		 * optionDataSource.
		 * If not explicitly supplied, the valueField name will be derived as
		 * described in FormItem.getValueFieldName.
		 * Flags: IRA, Group: databinding
		 */
		readonly valueField: string /* String */;

		/** 
		 * If this pick list is showing multiple fields, this property determines the height of
		 * the column headers for those fields. Set to zero to suppress the headers entirely.
		 * Flags: IRW
		 */
		readonly pickListHeaderHeight: number;

		/** 
		 * (Advanced) For a ComboBox or other pickList that accepts user-entered criteria, how many
		 * milliseconds to wait after the last user keystroke before fetching data from the server.
		 * The default setting will initiate a fetch if the user stops typing or pauses briefly.
		 * Flags: IRWA
		 */
		readonly fetchDelay: number;

		/** 
		 * (Read only) Optional ListGrid.tallBaseStyle','tallBaseStyle for pickList cells. If unset,
		 * PickList.pickListBaseStyle will be applied to all cells.
		 * Flags: IR
		 */
		readonly pickListTallBaseStyle: string /* CSSStyleName */;

		/** 
		 * (Advanced) Default value for ListGrid.applyRowNumberStyle for this item's generated
		 * pickList.
		 * Flags: IRWA
		 */
		readonly pickListApplyRowNumberStyle: boolean;

		/** 
		 * (Read only) If specified this properties block will be applied to the PickListMenu','pickList
		 * created for this FormItem.
		 * 
		 * Note: Not every ListGrid property is supported when assigned to a pickList.
		 * Where there is a dedicated API on the form item (such as 
		 * PickList.pickListCellHeight','pickListCellHeight), we recommend that be used in 
		 * favor of setting the equivalent property on the pickListProperties block.
		 * 
		 * PickLists and ListGrid.showFilterEditor:
		 * ComboBoxItem','ComboBoxItems do not support setting showFilterEditor 
		 * to true on pickListProperties. This combination of settings leads to an ambiguous user
		 * exprience as the two sets of filter-criteria (those from the text-box and those from the 
		 * pickList filter editor) interact with each other.
		 * SelectItem.pickListProperties is a valid way to create a filterable pickList, on 
		 * a SelectItem, but this setting is not supported on a SelectItem with 
		 * SelectItem.multiple set to true - this combination of settings can cause a 
		 * selected value to be filtered out of view at which point further selection changes will 
		 * discard that value.
		 * In general we recommend the ComboBoxItem class (with ComboBoxItem.addUnknownValues 
		 * set as appropriate) as a better interface for filtering pickList data.
		 * Flags: IR
		 */
		readonly pickListProperties: ListGridProps /* ListGrid Properties */;

		/** 
		 * (Read only, Advanced) This property allows the developer to specify which field[s] will be displayed in the 
		 * drop down list of options.
		 * 
		 * Only applies to databound pickLists (see PickList.optionDataSource, or pickLists
		 * with custom data set up via the advanced PickList.getClientPickListData method.
		 * 
		 * If this property is unset, we display the PickList.displayField, if specified, 
		 * otherwise the PickList.valueField.
		 * 
		 * If there are multiple fields, column headers will be shown for each field, the
		 * height of which can be customized via the PickList.pickListHeaderHeight attribute.
		 * 
		 * Each field to display should be specified as a ListGridField object. Note that
		 * unlike in ListGrid','listGrids, dataSource fields marked as 
		 * DataSourceField.hidden','hidden:true will be hidden by default in pickLists. To
		 * override this behavior, ensure that you specify an explicit value for 
		 * ListGridField.showIf','showIf.
		 * Flags: IRA
		 */
		readonly pickListFields: Array<ListGridField> /* Array of ListGridField */;

		/** 
		 * (Advanced) If this item has a databound pickList (for example PickList.optionDataSource is
		 * set), this property can be used to provide static filter criteria when retrieving the data
		 * for the pickList.
		 * Flags: IRWA
		 */
		readonly pickListCriteria: Criteria;

		/** 
		 * Maximum height to show the pick list before it starts to scroll.
		 * Note that by default the pickList will be sized to the height required by its content
		 * so it will be taller when more rows are available as selectable options
		 * Flags: IRW
		 */
		readonly pickListHeight: number;

		/** 
		 * (Read only) Specifies one or more fields by which this item should be initially sorted. It can be 
		 * a ListGridField.name','field name, or an array of field names - but note that, if
		 * multiple fields are supplied, then each will be sorted in the same 
		 * ListGrid.sortDirection','direction.
		 * 
		 * For full sorting control, set PickList.initialSort','initialSort to a list of
		 * custom SortSpecifier','sortSpecifiers.
		 * 
		 * This attribute can also be set to the index of a field in the fields array, but note 
		 * that it will be converted to a string (field name) after initialization.
		 * Flags: IR, Group: sorting
		 */
		readonly sortField: string | Array<string> | number /* String | Array of String | int */;

		/** 
		 * (Read only) For databound pickLists (see PickList.optionDataSource), by default SmartClient
		 * will cache and re-use datasets shown by pickLists in an LRU (least recently used) caching
		 * pattern.
		 * 
		 * Setting this flag to false avoids this caching for situations where it is too aggressive.
		 * Flags: IR
		 */
		readonly cachePickListResults: boolean;

		/** 
		 * Cell Height for this item's pickList.
		 * Flags: IRW
		 */
		readonly pickListCellHeight: number;

		/** 
		 * (Read only) When applying filter criteria to pickList data, what type of matching to use.
		 * 
		 * For a databound pickList (PickList.optionDataSource set), textMatchStyle is
		 * sent to the server as DSRequest.textMatchStyle.
		 * 
		 * For a non-databound pickList, textMatchStyle is applied by 
		 * PickList.filterClientPickListData','filterClientPickListData().
		 * Flags: IR
		 */
		readonly textMatchStyle: TextMatchStyle;

		/** 
		 * (Advanced) For Databound formItems, this property determines which column 
		 * FormItem.valueIcons should show up in for this formItem's pickList.
		 * If unset, valueIcons show up in the PickList.displayField column if specified, 
		 * otherwise the PickList.valueField column.
		 * In most cases only the displayField or valueField will be visible.
		 * This property is typically only required if custom PickList.pickListFields 
		 * have been specified for this item.
		 * Flags: IRWA
		 */
		readonly valueIconField: string /* String */;

		/** 
		 * (Read only) A set of "special" values such as "All", "None" or "Invalid" that do not appear in the normal
		 * ValueMap or in the data returned by the PickList.optionDataSource.
		 * 
		 * Like other uses of ValueMap, either a list of values or a mapping from stored to
		 * display value can be provided.
		 * 
		 * These values can either be shown at the top of the list of values (in the order specified), or
		 * can be shown in a separate, non-scrolling region - the setting
		 * SelectItem.separateSpecialValues','separateSpecialValues controls this. Note that data 
		 * paging can only be used if separateSpecialValues is enabled.
		 * 
		 * If specialValues are configured, SelectItem.allowEmptyValue','allowEmptyValue is ignored - an empty
		 * value, if desired, must be included in the specialValues. To provide a
		 * specialValue which clears the value of the field, use the special constant
		 * PickList.emptyStoredValue.
		 * 
		 * specialValues can also be used to take a value that does appear in the
		 * normal data and redundantly display it at the top of the list to make it more accessible. Note
		 * that in this case it is expected that the special value appears both at the top of the
		 * list and in it's normal position in the list, so this works best with
		 * SelectItem.separateSpecialValues','separateSpecialValues mode enabled.
		 * 
		 * Also, if an PickList.optionDataSource is used, PickList.specialValues that appear in the normal
		 * dataset will be updated by automatic cacheSync','cache synchronization (if 
		 * the PickList.displayField is updated). However when using a distinct PickList.valueField and
		 * PickList.displayField, you are required to provide PickList.specialValues as a map (there is no
		 * support for FormItem.fetchMissingValues','fetchMissingValues automatically fetching appropriate display values).
		 * 
		 * Note that specialValues are not supported in conjunction with MultiComboBoxItem. Whereas with
		 * SelectItem.multiple','selectItem.multiple:true, specialValues will never be normal values 
		 * that may be selected. So, specialValues should have options such as "Select All", "Select None" and others.
		 * Flags: IR
		 */
		readonly specialValues: ValueMap;

		/** 
		 * (Advanced) Message to display in the pickList if there's no data and 
		 * PickList.hideEmptyPickList is false.
		 * Flags: IRWA, Group: i18nMessages
		 */
		readonly emptyPickListMessage: string /* String */;

		/** 
		 * (Read only) An array of SortSpecifier objects used to set up the initial sort configuration 
		 * for this pickList. If specified, this will be used instead of any 
		 * PickList.sortField specified.
		 * Flags: IR, Group: sorting
		 */
		readonly initialSort: Array<SortSpecifier> /* Array of SortSpecifier */;

		/** 
		 * (Advanced) If true, when the pickList is shown, it will be shown via an animated reveal effect
		 * Flags: IRWA
		 */
		readonly animatePickList: boolean;

		/** 
		 * (Advanced) If this item is part of a databound form, and has a specified valueMap,
		 * by default we show the valueMap options in the pickList for the item.
		 * Setting this property to true will ensure that the options displayed in our pickList
		 * are derived from the form's dataSource.
		 * Flags: IRWA, Group: databinding
		 */
		readonly showOptionsFromDataSource: boolean;

		/** 
		 * Maximum width for this item's pickList.
		 * By default if the values displayed in this pickList are wider than the specified
		 * PickList.pickListWidth the pickList will render wide enough to accomodate them.
		 * This property allows the developer to limit how wide the pickList will render.
		 * Flags: IRW
		 */
		readonly pickListMaxWidth: number;

		/** 
		 * If this pickList contains no options, should it be hidden?
		 * If unset, default behavior is to allow the empty pickList to show if it is databound.
		 * Flags: IRW
		 */
		readonly hideEmptyPickList: boolean;

		/** 
		 * (Read only, Advanced) If set, this FormItem will derive data to show in the PickList by fetching records from
		 * the specified optionDataSource. The fetched data will be used as a
		 * FormItem.valueMap','valueMap by extracting the
		 * FormItem.valueField','valueField and FormItem.displayField','displayField in
		 * the loaded records, to derive one valueMap entry per record loaded from the
		 * optionDataSource. Multiple fields from the fetched data may be shown in the pickList by
		 * setting PickList.pickListFields.
		 * 
		 * The data will be retrieved via a "fetch" operation on the DataSource, passing the 
		 * PickList.pickListCriteria (if set) as criteria, and passing
		 * PickList.optionFilterContext (if set) as DSRequest Properties.
		 * 
		 * The fetch will be triggered when the pickList is first shown, or, you can set
		 * SelectItem.autoFetchData','autoFetchData:true to fetch when the FormItem is
		 * first drawn. 
		 * 
		 * Note that providing an initial value when
		 * FormItem.fetchMissingValues','fetchMissingValues is enabled, or enabling
		 * SelectItem.defaultToFirstOption','defaultToFirstOption, can also cause a fetch to
		 * be initiated immediately upon form creation. You can also call PickList.fetchData
		 * at any time to manually trigger a fetch.
		 * 
		 * Data paging is automatically enabled if the optionDataSource supports it. As the
		 * pickList is scrolled by the user, requests for additional data will be automatically
		 * issued.
		 * 
		 * For a pickList attached to a ComboBoxItem','ComboBoxItem, new fetches are 
		 * issued as the user types, with criteria set as described under 
		 * ComboBoxItem.getPickListFilterCriteria.
		 * If your dataSource is not capable of filtering results by search criteria (eg, the
		 * dataSource is backed by an XML flat file), you can set PickList.filterLocally to have the
		 * entire dataset loaded up front and filtering performed in the browser. This disables
		 * data paging.
		 * 
		 * Note that if a normal, static FormItem.valueMap','valueMap is also specified
		 * for the field (either directly in the form item or as part of the field definition in
		 * the dataSource), it will be preferred to the data derived from the optionDataSource for
		 * whatever mappings are present.
		 * Flags: IRA
		 */
		readonly optionDataSource: DataSource | string /* DataSource | String */;

		/** 
		 * If set, this item will display a value from another field to the user instead of
		 * showing the underlying data value for the FormItem.name','field name.
		 * 
		 * The display value can be derived in two ways:
		 * 
		 * The item will display the displayField value from the 
		 * DynamicForm.getValues','record currently being edited if 
		 * FormItem.useLocalDisplayFieldValue is true, (or if unset and the conditions
		 * outlined in the documentation for that property are met).
		 * Note that DataSourceField.useLocalDisplayFieldValue will default to true
		 * if not explicitly set in some cases, as described in the documentation for that
		 * property.
		 * 
		 * Otherwise this item will perform a fetch against the FormItem.optionDataSource
		 * to find a record where the FormItem.getValueFieldName','value field matches this item's
		 * value, and use the displayField, or FormItem.foreignDisplayField 
		 * value from that record.
		 * Note that the specified displayField must be explicitly defined in the 
		 * optionDataSource to be used - see PickList.getDisplayFieldName for more on this
		 * behavior.
		 * 
		 * This essentially allows the specified optionDataSource to be used as
		 * a server based valueMap.
		 * 
		 * Note that if optionDataSource is set and no valid display field is
		 * specified,
		 * FormItem.getDisplayFieldName will return the dataSource title 
		 * field by default.
		 * 
		 * If a displayField is specified for a freeform text based item (such as a 
		 * ComboBoxItem), any user-entered value will be treated as a display value.
		 * In this scenario, items will derive the data value for the item from the
		 * first record where the displayField value matches the user-entered value.
		 * To avoid ambiguity, developers may wish to avoid this usage if display values
		 * are not unique.
		 * Flags: IRW, Group: databinding
		 */
		readonly displayField: string /* String */;

	}



}