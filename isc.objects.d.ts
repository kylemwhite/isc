/// <reference path="isc.classes.d.ts" />
/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped
// Generated: 5/5/2017 2:55:00 PM by kwhite
// Generated from SmartClient version SNAPSHOT_v11.1d_2017-05-05

declare namespace Isc {

    
	/**
	 * Configuration object for effect to apply during an animated show or hide. 
	 */
	export interface AnimateShowEffect  {
		/** For hide animations of type "wipe and "slide" this attribute specifies where the wipe / slide should finish. Valid options are "T" (vertical animation upwards to the top of the canvas, the default behavior) and "L" (horizontal animation to the left of the canvas).
		 * Flags: IR */
		endsAt?: string; // Flags=IR
		/** For show animations of type "wipe" and "slide" this attribute specifies where the wipe / slide should originate. Valid values are "T" (vertical animation from the top down, the default behavior), and "L" (horizontal animation from the left side).
		 * Flags: IR */
		startFrom?: string; // Flags=IR
		/** Effect to apply
		 * Flags: IR */
		effect?: string /* animateShowEffectId */; // Flags=IR
	}

	/**
	 * An object that modifies a dsRequest based on several available values, including preceding responses from the same queue. Some elements of this feature are only available with Power or better licenses. See <a href=http://smartclient.com/product>smartclient.com/product</a> for details. You provide a list of DSRequestModifiers as the OperationBinding.criteria or OperationBinding.values of an OperationBinding. The ability to modify a request based on responses to earlier requests in the same queue is called transactionChaining. A DSRequestModifier consists of a DSRequestModifier.fieldName','fieldName, usually a DSRequestModifier.value','value and possibly an DSRequestModifier.operator','operator and DSRequestModifier.start','start and/or DSRequestModifier.end','end values (applicable to advanced criteria only). The value, start and end settings can be static, or - with Power or better licenses - they can be expressions in the Velocity template language, which will be resolved at runtime, immediately before the DSRequest is executed. See below some examples of OperationBinding.criteria declarations: &lt;operationBindings&gt; &lt;operationBinding operationType="fetch" operationId="..."&gt; &lt;criteria fieldName="lifeSpan" value="10"/&gt; &lt;criteria fieldName="scientificName" value="Gazella thomsoni"/&gt; &lt;/operationBinding&gt; &lt;operationBinding operationType="fetch" operationId="..."&gt; &lt;criteria fieldName="lifeSpan" operator="greaterThan" value="10" /&gt; &lt;/operationBinding&gt; &lt;operationBinding operationType="fetch" operationId="..."&gt; &lt;criteria _constructor="AdvancedCriteria" operator="or"&gt; &lt;criteria&gt; &lt;Criterion fieldName="lifeSpan" operator="greaterThan" value="10" /&gt; &lt;Criterion fieldName="scientificName" operator="contains" value="Octopus" /&gt; &lt;/criteria&gt; &lt;/criteria&gt; &lt;/operationBinding&gt; &lt;/operationBindings&gt;  
	 */
	export interface DSRequestModifier  {
		/** The name of the field to add or replace on the DSRequest - whether this appears in the DSRequest's values or criteria depends on whether this is part of a OperationBinding.values or OperationBinding.criteria attribute.
		 * Flags: IR */
		fieldName?: string /* String */; // Flags=IR
		/** The name of the operator to apply when constructing criteria. This property only applies to criteria; it is ignored if specified as part of a OperationBinding.values attribute.
		 * Flags: IR */
		operator?: string /* String */; // Flags=IR
		/** The value to use for the start of a range. This property only applies to criteria, and it only applies to operators of type "rangeCheck" - for example, the "between" operator. It is ignored if specified as part of a OperationBinding.values attribute, or for an inapplicable operator type. The same rules apply to this attribute as apply to DSRequestModifier.value','value, so you can use Velocity expressions if you have a Power or better license.
		 * Flags: IR, Group: transactionChaining */
		start?: string /* String */; // Flags=IR
		/** The value to use for the end of a range. This property only applies to criteria, and it only applies to operators of type "rangeCheck" - for example, the "between" operator. It is ignored if specified as part of a OperationBinding.values attribute, or for an inapplicable operator type. The same rules apply to this attribute as apply to DSRequestModifier.value','value, so you can use Velocity expressions if you have a Power or better license.
		 * Flags: IR, Group: transactionChaining */
		end?: string /* String */; // Flags=IR
		/** The value to assign to the field named by DSRequestModifier.fieldName. This value can be static, and for Pro licenses that is the only option. With Power and better licenses, this value can be an expression in the Velocity template language. In this latter case, all the standard velocitySupport','Velocity context variables provided by SmartClient Server are available to you. There is also one additional Velocity context variable available in this specific case: $masterId. If there is a DataSourceField.foreignKey','foreignKey from the DataSource for the current operation to another DataSource for which an add or update operation has taken place earlier in the queue, this is the value of the target field of the foreign key, taken from the response data of that earlier operation (the most recent one, if there are several). This is useful because it will typically yield the (possibly just generated) primary key of the "master" record. Consider a queued batch of "add" operations for an order header and its details. The detail additions need to know the unique primary key that was assigned to the order, but this will typically be generated at the time of inserting the order row into the database, so it is not known up-front. However, this value will be in the response to the DSRequest that added the order header, so it is accessible via $responseData; if there is a declared foreign key relationship from the detail DataSource to the header DataSource, the header's unique key value will also be accesible as $masterId. See this example: queuedAdd. $responseData - which is an instance of com.isomorphic.velocity.ResponseDataHandler - exposes various overloads of first() and last() APIs that can be called to obtain the actual record data of prior responses. These methods return an instance of com.isomorphic.velocity.ResponseDataWrapper, which allows convenient handling of response data whether it is a single record or a list. Response data can be treated as a single record even if it is a List, so you can access the response data directly, with no need for an index; when you do this, and the data is actually a List or array, you get the first record. If the response data is a list or array, you can also access individual records in that list using Velocity index notation, and you can use the special value "last" to access the last element of a List or array. Examples of the Velocity syntax needed: $responseData.first.myField is the myField property of the first response in the queue. Note, this works whether that response returned a single record or a list. If it returned a list, this Velocity expression gets the first record in the list. This is a particularly useful shorthand for 'add' and 'update' operations, where the response data is typically a List containing a single record $responseData.first('order').myField is the myField property of the first response to an operation (any operation) on the "order" DataSource $responseData.first('order', 'add').myField is the myField property of the first response to an "add" operation on the "order" DataSource $responseData.first('order', 'fetch').last.myField is the myField property of the last record in the response data of the first fetch in the queue (fetch operations always return a List of records) $responseData.first('order', 'fetch')[0].myField is the myField property of a specific record (in this case, the first) in the response data of the first response in the queue. Note that this is shown for completeness only: there is no need to use index notation to explicitly request the first record, unless you are iterating over the entire list or have some other out-of-the-ordinary use case. The first record is assumed if you omit the index notation, so this example is equivalent to the simpler: $responseData.first('order', 'fetch')[0].myField All of these syntactic variations are also available on the $responseData.last object - "last" here meaning the most recent response matching the DataSource and operation type (if applicable). Note, "last" potentially has three different meanings, depending on context: If your DataSource contains a field that is actually called "last", the following expression would be the correct way to obtain the value of the field called "last", on the last record of the last (most recent) response: $responseData.last.last.last Please see the server-side Javadoc for the com.isomorphic.velocity.ResponseDataHandler class.
		 * Flags: IR, Group: transactionChaining */
		value?: string /* String */; // Flags=IR
	}

	/**
	 * A Javascript object defining the details of a single sort operation. You can convert between SortSpecifiers and the string format required by DSRequest.sortBy by calling DataSource.getSortBy and DataSource.getSortSpecifiers. 
	 */
	export interface SortSpecifier  {
		/** A DataBoundComponent providing the context for the sort-normalizer.
		 * Flags: IR */
		context?: any /* DataBoundComponent */; // Flags=IR
		/** A normalizer function which this sortSpecifier will use to sort.
		 * Flags: IR */
		normalizer?: any /* Function */; // Flags=IR
		/** The direction in which this specifier should sort.
		 * Flags: IR */
		direction?: SortDirection; // Flags=IR
		/** The property name, eg a ListGridField','field name, to which this sortSpecifier applies.
		 * Flags: IR */
		property?: string /* String */; // Flags=IR
	}

	/**
	 * An object representing a user-created and user-modifiable hilite, which can be created and edited with a HiliteEditor either directly or via the ListGrid.canEditHilites behavior. See hiliting for an overview. 
	 */
	export interface Hilite  {
		/** Name of the field, or array of fieldNames, this hilite should be applied to. If unset, hilite is applied to every field of the record.
		 * Flags: IR, Group: hiliting */
		fieldName?: string /* identifier */; // Flags=IR
		/** Unique id for this hilite definition. For hilites that include Hilite.criteria this is not required. If you are explicitly marking records for hiliting, set DataBoundComponent.hiliteProperty on the record to this id.
		 * Flags: IR, Group: hiliting */
		id?: string /* String */; // Flags=IR
		/** URL of an icon to show when this hilite is applied to a cell. Position of the icon is controlled by DataBoundComponent.hiliteIconPosition or ListGridField.hiliteIconPosition.
		 * Flags: IR, Group: hiliting */
		icon?: string /* SCImgURL */; // Flags=IR
		/** HTML which replaces the cell's textual value where this hilite is applied. Note that sorting, filtering, etc behavior will still operate on the underlying value. For example, if there is a date field with the FilterEditor enabled, the default search interface will still offer date-range based filtering even if hilites have caused values to be displayed as text such as "current" or "past due".
		 * Flags: IR, Group: hiliting */
		replacementValue?: string /* HTML */; // Flags=IR
		/** CSS text to be applied to cells where this hilite is applied, for example, "background-color:#FF0000"
		 * Flags: IR, Group: hiliting */
		cssText?: string /* CSSText */; // Flags=IR
		/** HTML to append to the end of cell values where this hilite is applied.
		 * Flags: IR, Group: hiliting */
		htmlAfter?: string /* HTML */; // Flags=IR
		/** User-visible title for this hilite. Used for interfaces such as menus that can enable or disable hilites.
		 * Flags: IRW, Group: hiliting */
		title?: string /* String */; // Flags=IRW
		/** When edited via a HiliteEditor, the value for the background color of this hilite. If this is omitted, it will be automatically derived from the backgroundColor attribute of Hilite.cssText. When a hilite is saved in a HiliteEditor, both attributes are set automatically.
		 * Flags: IRW, Group: hiliting */
		backgroundColor?: string /* String */; // Flags=IRW
		/** Can highlight be edited from header context menu? Setting attribute to false prevents editing. A null or true value allows editing.
		 * Flags: IR, Group: hiliting */
		canEdit?: boolean /* Boolean */; // Flags=IR
		/** Whether this hilite is currently disabled. Hilites can be programmatically enabled and disabled via DataBoundComponent.enableHilite.
		 * Flags: IRW, Group: hiliting */
		disabled?: boolean /* Boolean */; // Flags=IRW
		/** When edited via a HiliteEditor, the value for the foreground color of this hilite. If this is omitted, it will be automatically derived from the textColor attribute of Hilite.cssText. When a hilite is saved in a HiliteEditor, both attributes are set automatically.
		 * Flags: IRW, Group: hiliting */
		textColor?: string /* String */; // Flags=IRW
		/** HTML to pre-pend to cell values where this hilite is applied.
		 * Flags: IR, Group: hiliting */
		htmlBefore?: string /* HTML */; // Flags=IR
		/** Criteria defining what records this hilite should apply to.
		 * Flags: IR, Group: hiliting */
		criteria?: Criteria | AdvancedCriteria /* Criteria or AdvancedCriteria */; // Flags=IR
	}

	/**
	 * A Record is an ordinary JavaScript Object with properties that are treated as data to be displayed and edited by a DataBoundComponent. DataBoundComponents have a concept of DataBoundComponent.fields','named fields, where values for each field are found under the same-named property in a Record. A Record is always an ordinary JavaScript Object regardless of how the record is loaded (static data, java server, XML web service, etc), and so supports the normal behaviors of JavaScript Objects, including accessing and assigning to properties via dot notation: var fieldValue = record.fieldName; record.fieldName = newValue; The concept of working with Records is common to all DataBoundComponents, although individual DataBoundComponents may work with singular records (DynamicForm) or may work with lists (ListGrid), trees (TreeGrid), or cubes (CubeGrid) of records. Individual DataComponents may also look for special properties on Records which control styling or behavior for those records, such as ListGrid.recordEditProperty','record.canEdit. 
	 */
	export interface Record  {
	}

	/**
	 * An object representing a component that is currently being edited within an EditContext. An EditNode is essentially a copy of a PaletteNode, initially with the same properties as the PaletteNode from which it was generated. However unlike a PaletteNode, an EditNode always has a EditNode.liveObject','liveObject - the object created from the PaletteNode.defaults or other properties defined on a paletteNode. Like a Palette, an EditContext may use properties such as PaletteNode.icon or PaletteNode.title to display EditNodes. An EditContext generally offers some means of editing EditNodes and, as edits are made, updates EditNode.defaults with the information required to re-create the component. 
	 */
	export interface EditNode  extends PaletteNode {
		/** Live version of the object created from the EditNode.defaults. For example, if EditNode.type is "ListGrid", liveObject would be a ListGrid.
		 * Flags: IR */
		liveObject?: any /* Object */; // Flags=IR
		/** See PaletteNode.canDuplicate.
		 * Flags: IRW */
		canDuplicate?: boolean /* Boolean */; // Flags=IRW
		/** Properties to be applied to the EditNode.liveObject','liveObject.Canvas.editProxy','editProxy when created. Note that the editProxy is created the first time a component is placed into editMode, so any editProxyProperties must be set before then.
		 * Flags: IR */
		editProxyProperties?: EditProxyProps /* EditProxy Properties */; // Flags=IR
		/** SCClassName of the EditNode.liveObject , for example, "ListGrid".
		 * Flags: IR */
		type?: string /* SCClassName */; // Flags=IR
		/** Shortcut property to be applied to the EditNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * Flags: IR */
		useEditMask?: boolean /* Boolean */; // Flags=IR
		/** Properties required to recreate the current EditNode.liveObject.
		 * Flags: IR */
		defaults?: Properties; // Flags=IR
	}

	/**
	 * Section descriptor used by a SectionStack to describe a section of items which are shown or hidden together along with their associated header. A section header (see SectionStack.sectionHeaderClass) is created from this descriptor when the SectionStack is drawn. Any changes after creation must be made to the section header: SectionStack.getSectionHeader. Additional SectionHeader properties set on the SectionStackSection not explicitly documented such as "iconAlign" or "prompt" is supported. 
	 */
	export interface SectionStackSection  {
		/** If set to false, then the items in this section will not be resized by sectionHeader repositioning. You may also set this flag directly on any of the items in any section to cause that item to not be resizeable.
		 * Flags: I */
		resizeable?: boolean; // Flags=I
		/** If the title for this section header is too large for the available space, should the title be clipped? This feature is supported only in browsers that support the CSS UI text-overflow property (IE6+, Firefox 7+, Safari, Chrome, Opera 9+).
		 * Flags: IR */
		clipTitle?: boolean /* Boolean */; // Flags=IR
		/** When explicitly set to false, disallows drop before this member in the Layout.
		 * Flags: I, Group: layoutMember */
		canDropBefore?: boolean; // Flags=I
		/** Sections default to the visible state. This attribute allows you to explicitly control the visible/hidden state of the section by overriding the above default behavior.
		 * Flags: I */
		hidden?: boolean; // Flags=I
		/** If true and the title is clipped, then a hover containing the full title of this section header is enabled.
		 * Flags: IRW, Group: hovers */
		showClippedTitleOnHover?: boolean /* Boolean */; // Flags=IRW
		/** Sections default to the collapsed state unless SectionStackSection.showHeader is set to false in which case they default to the expanded state. This attribute allows you to explicitly control the expand/collapse state of the section by overriding the above default behavior.
		 * Flags: I */
		expanded?: boolean; // Flags=I
		/** Identifier for the section. This can be used later in calls to SectionStack APIs such as SectionStack.expandSection and SectionStack.collapseSection. Note that if no name is specified for the section, one will be auto-generated when the section is created. This property should be a string which may be used as a valid JavaScript identifier (should start with a letter and not contain space or special characters such as "*").
		 * Flags: IR */
		name?: string /* String */; // Flags=IR
		/** This attribute controls whether or not the expand/collapse UI control is shown on the header of this section. Any section can still be expanded/collapsed programmatically, regardless of this setting.
		 * Flags: I */
		canCollapse?: boolean /* Boolean */; // Flags=I
		/** If true, a header will be shown for this section. If false, no header will be shown.
		 * Flags: I */
		showHeader?: boolean /* Boolean */; // Flags=I
		/** If true, the header for this Section will be included in the page's tab order for accessibility. May also be set at the SectionStack level via SectionStack.canTabToHeaders. See accessibility.
		 * Flags: IR */
		canTabToHeader?: boolean; // Flags=IR
		/** Base filename of the icon that represents open and closed states. The default settings also change the icon for disabled sections, so a total of four images are required (opened, closed, Disabled_opened, Disabled_closed). Not shown if SectionStackSection.canCollapse is false.
		 * Flags: IR */
		icon?: string /* SCImgURL */; // Flags=IR
		/** Optional ID for the section. If SectionStack.useGlobalSectionIDs is true, this property will be applied to the generated SectionStackHeader widget as a standard widget ID, meaning it should be unique within a page. Backcompat Note: Section stack sections may be uniquely identified within a stack via the SectionStackSection.name attribute (introduced in Jan 2010). Prior to this, the section ID attribute was used in this way (and would not be applied to the section header as a widget ID). For backwards compatibility this is still supported: If section.name is unspecified for a section but section.ID is set, the ID will be used as a default name attribute for the section. For backwards compatibility we also disable the standard behavior of having the section.ID being applied to the generated section header (thereby avoiding the page-level uniqueness requirement) by defaulting SectionStack.useGlobalSectionIDs to false.
		 * Flags: IR */
		ID?: string /* String */; // Flags=IR
		/** Custom controls to be shown on top of this section header. These controls are shown in the SectionHeader.controlsLayout. Note that this is an init-time property. If you need to dynamically change what controls are displayed to the user, we would recommend embedding the controls in a Layout or similar container. This will allow you to show/hide or add/remove members at runtime by manipulating the existing control(s) set up at init time.
		 * Flags: IR */
		controls?: Array<Canvas> /* Array of Canvas */; // Flags=IR
		/** Title to show for the section
		 * Flags: IR */
		title?: string /* HTMLString */; // Flags=IR
		/** If set to false, then this sectionHeader will not be able to be dragged to perform a drag reorder, if SectionStack.canReorderSections is true. You can also disable dropping other sections before this one by setting Canvas.canDropBefore','canDropBefore to false.
		 * Flags: I */
		canReorder?: boolean; // Flags=I
		/** List of Canvases that constitute the section. These Canvases will be shown and hidden together.
		 * Flags: I */
		items?: Array<Canvas> /* Array of Canvas */; // Flags=I
	}

	/**
	 * Identifier for a key pressed by the user, optionally specifying whether the Shift, Control, and/or Alt keys should be held or not held when the key is pressed, used by various methods. 
	 */
	export interface KeyIdentifier  {
		/** If set, whether the Shift key must be held down.
		 * Flags: IR */
		shiftKey?: boolean /* Boolean */; // Flags=IR
		/** Name of the key.
		 * Flags: IR */
		keyName?: KeyName; // Flags=IR
		/** If set, whether the Alt key must be held down.
		 * Flags: IR */
		altKey?: boolean /* Boolean */; // Flags=IR
		/** If set, whether the Control key must be held down.
		 * Flags: IR */
		ctrlKey?: boolean /* Boolean */; // Flags=IR
	}

	/**
	 * Object specifying an item in a Menu. Each MenuItem can have a MenuItem.title','title, MenuItem.icon','icon, MenuItem.keys','shortcut\n keys, optional MenuItem.submenu and various other settings. Alternatively, a MenuItem can contain an arbitrary widget via MenuItem.embeddedComponent. MenuItems are specified as plain Object','JavaScript Objects, usually with ObjectLiteral notation. For example: isc.Menu.create({ items : [ {title: "item1", click: "alert(1)"}, {title: "item2"} ] }); Do not use isc.MenuItem.create() - this is invalid. Alternatively, Menus support binding to a Menu.dataSource','DataSource. As another option, here's a sample of a Menu in componentXML','Component XML: &lt;Menu&gt; &lt;items&gt; &lt;MenuItem title="item1" click="alert(1)"/&gt; &lt;MenuItem title="item2"/&gt; &lt;/items&gt; &lt;/Menu&gt;  
	 */
	export interface MenuItem  extends ListGridRecord {
		/** See ListGridRecord.embeddedComponentFields. Default for a MenuItem is to cover the title and key fields, leaving the icon and submenu fields visible.
		 * Flags: IR, Group: menuBasic */
		embeddedComponentFields?: Array<string> /* Array of String */; // Flags=IR
		/** If false, no submenus will be fetched for this MenuItem. This can be set globally via Menu.fetchSubmenus.
		 * Flags: IR */
		fetchSubmenus?: boolean /* Boolean */; // Flags=IR
		/** The filename for this item's custom icon when the item is disabled. If both this property and MenuItem.checked are both specified, only the icon specified by this property will be displayed. The path to the loaded skin directory and the skinImgDir are prepended to this filename to form the full URL. If you need to set this state dynamically, use MenuItem.dynamicIcon instead.
		 * Flags: IR, Group: menuIcons */
		disabledIcon?: string; // Flags=IR
		/** The filename for this item's custom icon. If both this property and MenuItem.checked are both specified, only the icon specified by this property will be displayed. The path to the loaded skin directory and the skinImgDir are prepended to this filename to form the full URL. If this item is disabled, and MenuItem.disabledIcon is set, then that icon will be used instead. If you need to set this state dynamically, use MenuItem.dynamicIcon instead.
		 * Flags: IR, Group: menuIcons */
		icon?: string; // Flags=IR
		/** If true, this item displays a standard checkmark image to the left of its title. You can set the checkmark image URL by setting Menu.checkmarkImage. If you need to set this state dynamically, use MenuItem.checkIf instead.
		 * Flags: IR, Group: menuIcons */
		checked?: boolean; // Flags=IR
		/** A string to display in the shortcut-key column for this item. If not specified, the first KeyName value in MenuItem.keys will be used by default.
		 * Flags: IR, Group: menuKeys */
		keyTitle?: string; // Flags=IR
		/** The width applied to this item's icon. The default of 16 can be changed for all MenuItems by overriding Menu.iconWidth.
		 * Flags: IR, Group: menuIcons */
		iconWidth?: number; // Flags=IR
		/** A MenuItem that has a submenu normally cannot be selected, instead clicking or hitting Enter while keyboard focus is on the item shows the submenu. Setting canSelectParent:true allows a menu item with a submenu to be selected directly.
		 * Flags: IR */
		canSelectParent?: boolean; // Flags=IR
		/** The text displayed for the menu item
		 * Flags: IR, Group: menuBasic */
		title?: string /* HTML */; // Flags=IR
		/** Affects the visual style and interactivity of the menu item. If set to false, the menu item will not respond to mouse rollovers or clicks. If you need to set this state dynamically, use MenuItem.enableIf instead.
		 * Flags: IR, Group: menuBasic */
		enabled?: boolean /* Boolean */; // Flags=IR
		/** When set to true, this menu item shows a horizontal separator instead of the MenuItem.title text. Typically specified as the only property of a menu item, since the separator will not respond to mouse events.
		 * Flags: IR, Group: menuBasic */
		isSeparator?: boolean /* Boolean */; // Flags=IR
		/** Arbitrary UI component that should appear in this MenuItem. See ListGridRecord.embeddedComponent for an overview and options for controlling placement. When embeddedComponent is used in a MenuItem certain default behaviors apply: MenuItem.autoDismiss defaults to false and clicks on embeddedComponents are not bubbled to the menuItem - if an interaction with an embeddedComponent is expected to dismiss the menu, custom code should call menu.Menu.hide','hide or Menu.hideAllMenus','hideAllMenus as appropriate, before proceeding the default behavior for MenuItem.embeddedComponentPosition is "expand". the component is placed over the title and key fields by default - use MenuItem.embeddedComponentFields to override rollOver styling is disabled by default (as though ListGridRecord.showRollOver were set to false) 
		 * Flags: IR, Group: menuBasic */
		embeddedComponent?: Canvas; // Flags=IR
		/** The height applied to this item's icon. The default of 16 can be changed for all MenuItems by overriding Menu.iconHeight.
		 * Flags: IR, Group: menuIcons */
		iconHeight?: number; // Flags=IR
		/** Criteria to be evaluated to determine whether this MenuItem should be disabled. Re-evaluated each time the menu is shown. A basic criteria uses textMatchStyle:"exact". When specified in componentXML','Component XML this property allows xmlCriteriaShorthand','shorthand formats for defining criteria.
		 * Flags: IR, Group: ruleCriteria */
		enableWhen?: AdvancedCriteria; // Flags=IR
		/** A reference to another menu, to display as a submenu when the mouse cursor hovers over this menu item.
		 * Flags: IR, Group: menuBasic */
		submenu?: Menu; // Flags=IR
		/** Shortcut key(s) to fire the menu item action. Each key can be defined as a KeyIdentifier. To apply multiple shortcut keys to this item, set this property to an array of such key identifiers.
		 * Flags: IR, Group: menuKeys */
		keys?: Array<string> /* KeyIdentifier | Array of KeyIdentifer */; // Flags=IR
		/** When used in an AdaptiveMenu, should this MenuItem show only it's MenuItem.icon','icon when displayed inline?
		 * Flags: IR */
		showIconOnlyInline?: boolean; // Flags=IR
		/** Whether a click on this specific menuItem automatically dismisses the menu. See Menu.autoDismiss.
		 * Flags: IR, Group: menuBasic */
		autoDismiss?: boolean /* Boolean */; // Flags=IR
		/** See ListGridRecord.embeddedComponentPosition, except that when used in a menuItem, default behavior is EmbeddedPosition "expand".
		 * Flags: IR, Group: menuBasic */
		embeddedComponentPosition?: EmbeddedPosition; // Flags=IR
	}

	/**
	 * A header span appears as a second level of headers in a ListGrid, spanning one or more ListGrid columns and their associated headers. See ListGrid.headerSpans. In addition to the properties documented here, all other properties specified on the headerSpan object will be passed to the Class.create','create() method of the ListGrid.headerSpanConstructor. This allows you to set properties such as Button.baseStyle or StretchImgButton.src directly in a headerSpan. 
	 */
	export interface HeaderSpan  {
		/** A title for this headerSpan, to display in the headerSpan button for this headerSpan and in other contexts such as the ListGrid.canPickFields','menu for picking visible fields. Note: if you want to use HTML tags to affect the display of the header, you should do so via HeaderSpan.headerTitle instead so that other places where the title appears in the UI are not affected. Refer to discussion at ListGridField.title.
		 * Flags: IR, Group: headerSpan */
		title?: string /* String */; // Flags=IR
		/** Name for this headerSpan, for use in APIs like ListGrid.setHeaderSpanTitle. Name is optional, but if specified, must be unique for this ListGrid (but not globally unique) as well as a valid JavaScript identifier, as specified by ECMA-262 Section 7.6 (the String.isValidID function can be used to test whether a name is a valid JavaScript identifier).
		 * Flags: IR, Group: headerSpan */
		name?: string /* identifier */; // Flags=IR
		/** List of fields that this header spans. Fields should be identified by their value for ListGridField.name. Developers may define multiple levels of header-spans by specifying HeaderSpan.spans however a span cannot be specified with both fields and spans.
		 * Flags: IR, Group: headerSpan */
		fields?: Array<string> /* Array of String */; // Flags=IR
		/** Should the span title wrap if there is not enough space horizontally to accommodate it. If unset, default behavior is derived from ListGrid.wrapHeaderSpanTitles. (This is a soft-wrap - if set the title will wrap at word boundaries.)
		 * Flags: IR */
		wrap?: boolean /* Boolean */; // Flags=IR
		/** This property allows developer to "nest" header spans, grouping fields together by multiple layers of granularity. For example a group of fields could be nested within two layers of header spans as follows: { title:"Europe", spans:[ {title:"France", fields:["Paris", "Lyon"]}, {title:"UK", fields:["London", "Glasgow"]}, {title:"Spain", fields:["Barcelona"]} ] } Note that a span definition can not include both spans and HeaderSpan.fields','fields.
		 * Flags: IR, Group: headerSpan */
		spans?: Array<HeaderSpan> /* Array of HeaderSpan */; // Flags=IR
		/** Height of this headerSpan. Defaults to ListGrid.headerSpanHeight.
		 * Flags: IR, Group: headerSpan */
		height?: number /* integer */; // Flags=IR
		/** Custom base style to apply to the header button created for this span instead of ListGrid.headerBaseStyle. Note that depending on the header button constructor, you may have to specify HeaderSpan.headerTitleStyle as well.
		 * Flags: IRW, Group: appearance */
		headerBaseStyle?: string /* CSSStyleName */; // Flags=IRW
		/** Optional title for the headerSpan button for this headerSpan. If specified this will be displayed in the headerSpan button instead of HeaderSpan.title. Set to an empty string to suppress the title in the header button entirely.
		 * Flags: IR, Group: headerSpan */
		headerTitle?: string /* String */; // Flags=IR
		/** Custom titleStyle to apply to the header button created for this span instead of ListGrid.headerTitleStyle. Note that this will typically only have an effect if ListGrid.headerButtonConstructor is set to StretchImgButton or a subclass thereof.
		 * Flags: IRW, Group: appearance */
		headerTitleStyle?: string /* CSSStyleName */; // Flags=IRW
		/** Vertical alignment of the title of this headerSpan. Defaults to listGrid.headerSpanVAlign if unset.
		 * Flags: IR, Group: headerSpan */
		valign?: VerticalAlignment; // Flags=IR
		/** Horizontal alignment of the title of this headerSpan.
		 * Flags: IR, Group: headerSpan */
		align?: Alignment; // Flags=IR
	}

	/**
	 * An object representing a user-created and user-modifiable formula, which can be created and edited with a FormulaBuilder either directly or via the ListGrid.canAddFormulaFields behavior. 
	 */
	export interface UserFormula  {
		/** Formula to be evaluated. There are two contexts where a UserFormula is used: ListGridField.userFormula and FormItem.formula or ListGridField.editorFormula. For the grid field formula all variables used by the formula must be single-letter capital characters (eg A). These are derived from field values for the record in question - see UserFormula.formulaVars. In addition to these variables, the keyword record may be used to refer directly to the record for which the formula is being displayed. In the second usage context variables are dot-separated (.) names representing the nested hierarchy path to the desired value within the Canvas.ruleScope','rule context. No mapping with UserFormula.formulaVars is needed.
		 * Flags: IRW */
		text?: string /* String */; // Flags=IRW
		/** Object mapping from variable names to fieldNames. All variable names must be single-letter capital characters (eg A). For example, for a formula that should divide the field "population" over the field "area", the formula might be "E/L" and formula vars would be: { E: "population", L: "area" } When used in ListGridField.userFormula context, field names are evaluated against the grid record. When used in FormItem.formula or ListGridField.editorFormula this property is not used for formula mapping. Instead, field names are evaluated directly against the current Canvas.ruleScope','rule context.
		 * Flags: IR */
		formulaVars?: any /* Map */; // Flags=IR
	}

	/**
	 * Encapsulates state of a NavigationBar's view. A NavigationBarViewState object is created to pass to NavigationBar.setViewState so that multiple properties of the NavigationBar can be changed at once. 
	 */
	export interface NavigationBarViewState  {
		/** The new NavigationBar.alwaysShowLeftButtonTitle setting. If unset, the alwaysShowLeftButtonTitle setting is not changed.
		 * Flags: IRW */
		alwaysShowLeftButtonTitle?: boolean /* Boolean */; // Flags=IRW
		/** The new NavigationBar.shortLeftButtonTitle setting. If unset, the shortLeftButtonTitle is not changed.
		 * Flags: IRW */
		shortLeftButtonTitle?: string /* HTMLString */; // Flags=IRW
		/** The new NavigationBar.leftButtonTitle setting. If unset, the leftButtonTitle is not changed.
		 * Flags: IRW */
		leftButtonTitle?: string /* HTMLString */; // Flags=IRW
		/** The new NavigationBar.controls setting. If unset, the controls array is not changed.
		 * Flags: IRW */
		controls?: Array<string> /* Array of string or canvas */; // Flags=IRW
		/** The new NavigationBar.showLeftButton setting. If unset, the showLeftButton setting is not changed.
		 * Flags: IRW */
		showLeftButton?: boolean /* Boolean */; // Flags=IRW
		/** The new NavigationBar.title setting. If unset, the title is not changed.
		 * Flags: IRW */
		title?: string /* HTMLString */; // Flags=IRW
	}

	/**
	 * A set of properties that can be used to create an image. 
	 */
	export interface ImgProperties  {
		/** Specifies the image-specific image directory to override the default.
		 * Flags: IRW */
		imgDir?: string /* URL */; // Flags=IRW
		/** Specifies the name of the image. This is an identifier unique to the canvas, and subsequent calls to Canvas.getImage and Canvas.setImage with this name will act on the image object created using this ImgProperties object.
		 * Flags: IRW */
		name?: string; // Flags=IRW
		/** Specifies the width of the image.
		 * Flags: IRW */
		width?: number; // Flags=IRW
		/** Specifies the additional attributes to write in the tag.
		 * Flags: IRW */
		extraStuff?: string; // Flags=IRW
		/** Specifies the URL of the image local to the skin or application directory.
		 * Flags: IRW */
		src?: string /* URL */; // Flags=IRW
		/** Specifies the height of the image.
		 * Flags: IRW */
		height?: number; // Flags=IRW
	}

	/**
	 * A ListGridRecord is a JavaScript Object whose properties contain values for each ListGridField. A ListGridRecord may have additional properties which affect the record's appearance or behavior, or which hold data for use by custom logic or other, related components. For example a ListGrid that defines the following fields: fields : [ {name: "field1"}, {name: "field2"} ], Might have the following data: data : [ {field1: "foo", field2: "bar", customProperty:5}, {field1: "field1 value", field2: "field2 value", enabled:false} ] Each line of code in the data array above creates one JavaScript Object via JavaScript {type:ObjectLiteral,object literal} notation. These JavaScript Objects are used as ListGridRecords. Both records shown above have properties whose names match the name property of a ListGridField, as well as additional properties. The second record will be disabled due to enabled:false; the first record has a property "customProperty" which will have no effect by default but which may be accessed by custom logic. After a ListGrid is created and has loaded data, records may be accessed via ListGrid.data, for example, listGrid.data.get(0) retrieves the first record. ListGridRecords are also passed to many events, such as ListGrid.cellClick','cellClick(). A ListGridRecord is always an ordinary JavaScript Object regardless of how the grid's dataset is loaded (static data, java server, XML web service, etc), and so supports the normal behaviors of JavaScript Objects, including accessing and assigning to properties via dot notation: var fieldValue = record.fieldName; record.fieldName = newValue; Note however that simply assigning a value to a record won't cause the display to be automatically refreshed - ListGrid.refreshCell needs to be called. Also, consider editing','editValues vs saved values when directly modifying ListGridRecords. See the attributes in the API tab for the full list of special properties on ListGridRecords that will affect the grid's behavior. 
	 */
	export interface ListGridRecord  extends Record {
		/** A component that should be rendered on top of this record, similar to a ListGrid.showRecordComponents','record component but statically defined on the record. The embedded component will default to covering all fields of the record, but specific fields can be specified via ListGridRecord.embeddedComponentFields. By default, the embeddedComponent will fill the entire vertical and horizontal space of the record (or of the specified fields). ListGridRecord.embeddedComponentPosition can be set to control exact sizing behavior. When creating a component to use as an embedded component the component will most likely end up drawing before the record it is due to be embedded within, therefore it is recommended to set Canvas.autoDraw','autoDraw to false on the embedded component. When a record with an embeddedComponent is eliminated from view by filtering or because it is not currently rendered due to ListGrid.showAllRecords','incremental rendering, the ListGrid may Canvas.hide or Canvas.clear it. If the current dataset is completely replaced (by a call to ListGrid.setData or ListGrid.setDataSource, for example), any embedded component is Canvas.deparent','deparented (which implies being Canvas.clear','clear()ed). When a ListGrid is Canvas.destroy','destroyed, it will destroy() all embedded components regardless of whether they are currently visible. Use a call to ListGrid.setData immediately before destroying the ListGrid to avoid this effect when unwanted. For more advanced control over the lifecycle of components displayed over records, including deferred creation and pooling, use the ListGrid.showRecordComponents','record components subsystem.
		 * Flags: IR, Group: appearance */
		embeddedComponent?: Canvas; // Flags=IR
		/** Default property name denoting whether this record can be removed. Property name may be modified for the grid via ListGrid.recordCanRemoveProperty.
		 * Flags: IRW, Group: editing */
		_canRemove?: boolean; // Flags=IRW
		/** If specified as false this record should be ignored when calculating summary totals to be shown in the ListGrid.showGridSummary','summary row for this grid. Note that includeInSummary is the default property name for this attribute, but it may be modified via ListGrid.includeInSummaryProperty.
		 * Flags: IRW */
		includeInSummary?: boolean; // Flags=IRW
		/** Fields where the ListGridRecord.embeddedComponent will be displayed, if specified. Regardless of the order of fields specified, the component will appear from whichever field is earlier in the current visible order to whichever field is later, inclusive of the specified fields. To have the component appear in just one field, either specify a single-element Array or specific a two element Array with both fields the same. If either field is hidden or invalid (no such field), the component will occupy only a single field. If both fields are hidden, the component will be hidden until one or more of the fields are shown.
		 * Flags: IR, Group: appearance */
		embeddedComponentFields?: Array<string> /* Array of String */; // Flags=IR
		/** Has no effect unless ListGrid.showBackgroundComponents is true. Canvas created and embedded in the body behind a given record. When set, either as a Canvas or Canvas Properties, will be constructed if necessary, combined with the autoChild properties specified for ListGrid.backgroundComponent and displayed behind this record in the page's z-order, meaning it will only be visible if the cell styling is transparent.
		 * Flags: IR, Group: rowEffects */
		backgroundComponent?: Canvas; // Flags=IR
		/** Default property name denoting whether this record can be selected. Property name may be modified for the grid via ListGrid.recordCanSelectProperty.
		 * Flags: IR */
		canSelect?: boolean; // Flags=IR
		/** Name of a CSS style to use as the ListGrid.baseStyle for all cells for this particular record. The styleName specified with have suffixes appended to it as the record changes state ("Over", "Selected" and so forth) as described by ListGrid.getCellStyle. For a single, fixed style for a record, use ListGridRecord.customStyle instead. See ListGrid.getCellStyle for an overview of various ways to customize styling, both declarative and programmatic. If this property is changed after draw(), to refresh the grid call ListGrid.refreshRow (or ListGrid.markForRedraw if several rows are being refreshed). If your application's data uses the "_baseStyle" attribute for something else, the property name can be changed via ListGrid.recordBaseStyleProperty.
		 * Flags: IRW */
		_baseStyle?: string /* CSSStyleName */; // Flags=IRW
		/** This attribute will automatically be set to true for the record representing the grid-level summary row shown if ListGrid.showGridSummary is true. Note that isGridSummary is the default property name for this attribute but it may be modified by setting ListGrid.gridSummaryRecordProperty
		 * Flags: IRW */
		isGridSummary?: boolean /* Boolean */; // Flags=IRW
		/** Default property name denoting whether this record can be edited. Property name may be modified for the grid via ListGrid.recordEditProperty.
		 * Flags: IR, Group: editing */
		_canEdit?: boolean; // Flags=IR
		/** Default property name denoting whether this record is enabled. Property name may be modified for some grid via ListGrid.recordEnabledProperty.
		 * Flags: IR */
		enabled?: boolean; // Flags=IR
		/** Default property name denoting a separator row. When set to true, defines a horizontal separator in the listGrid object. Typically this is specified as the only property of a record object, since a record with isSeparator:true will not display any values. Note: this attribute name is governed by ListGrid.isSeparatorProperty.
		 * Flags: IR */
		isSeparator?: boolean; // Flags=IR
		/** Default property name denoting the single value to display for all fields of this row. If this property is set for some record, the record will be displayed as a single cell spanning every column in the grid, with contents set to the value of this property. Note: this attribute name is governed by ListGrid.singleCellValueProperty.
		 * Flags: IRW */
		singleCellValue?: string /* HTML */; // Flags=IRW
		/** This attribute will automatically be set to true for records representing group-level summary rows shown if ListGrid.showGroupSummary is true. Note that isGroupSummary is the default property name for this attribute but it may be modified by setting ListGrid.groupSummaryRecordProperty
		 * Flags: IRW */
		isGroupSummary?: boolean /* Boolean */; // Flags=IRW
		/** Set to false to disable rollover for this individual record when ListGrid.showRollOver is true. Note this property can be renamed to prevent collision with data members - see ListGrid.recordShowRollOverProperty.
		 * Flags: IR, Group: appearance */
		showRollOver?: boolean /* Boolean */; // Flags=IR
		/** Default property name denoting whether this record can be expanded. Property name may be modified for the grid via ListGrid.canExpandRecordProperty.
		 * Flags: IR, Group: expansionField */
		canExpand?: boolean; // Flags=IR
		/** Name of a CSS style to use for all cells for this particular record. Note that using this property assigns a single, fixed style to the record, so rollover and selection styling are disabled. To provide a series of stateful styles for a record use ListGridRecord._baseStyle instead. See ListGrid.getCellStyle for an overview of various ways to customize styling, both declarative and programmatic. If this property is changed after draw(), to refresh the grid call ListGrid.refreshRow (or ListGrid.markForRedraw if several rows are being refreshed). If your application's data uses the "customStyle" attribute for something else, the property name can be changed via ListGrid.recordCustomStyleProperty.
		 * Flags: IRW */
		customStyle?: string /* CSSStyleName */; // Flags=IRW
		/** When set to false, other records cannot be dropped on (i.e., inserted via drag and drop) immediately before this record.
		 * Flags: IR */
		canAcceptDrop?: boolean; // Flags=IR
		/** The HTML to display in this row for fields with fieldType set to link. This overrides ListGridField.linkText.
		 * Flags: IRW, Group: display_values */
		linkText?: string; // Flags=IRW
		/** Sizing policy applied to the embedded component. Default behavior if unspecified is the same as EmbeddedPosition "within" (fill space allocated to the record, including the ability use percentage sizing and snapTo offset). Use "expand" to have the record expand to accomodate the embedded components' specified sizes instead.
		 * Flags: IR, Group: appearance */
		embeddedComponentPosition?: EmbeddedPosition; // Flags=IR
		/** The default value of ListGrid.recordDetailDSProperty.
		 * Flags: IRWA */
		detailDS?: DataSource; // Flags=IRWA
		/** When set to false, this record cannot be dragged. If canDrag is false for any record in the current selection, none of the records will be draggable.
		 * Flags: IR */
		canDrag?: boolean; // Flags=IR
	}

	/**
	 * An object representing a criterion to apply to a record. A criterion is part of the definition of an AdvancedCriteria object, which is used to filter records according to search criteria. A criterion consists of an Criterion.operator and typically a DataSourceField.name','fieldName from a Record and a Criterion.value','value to compare to. However some operators either don't require a value (eg, isNull) or act on other criteria rather than directly on a Record's fields (eg, the "and" and "or" logical operators). A shortcut form is also allowed where only fieldName and value values are provided. In this case the operator is assumed to be "equals". 
	 */
	export interface Criterion  {
		/** Operator this criterion applies.
		 * Flags: IR, Group: advancedFilter */
		operator?: OperatorId; // Flags=IR
		/** Wherever dynamicCriteria are supported, valuePath can be specified as a path in the current Canvas.ruleScope as an alternative to setting a fixed Criterion.value. Note: valuePath vs setting a path for Criterion.fieldName: use a path for criterion.fieldName when criteria will be matched against a nested data structure. use criterion.valuePath when the values used in filtering should be dynamically derived based on the Canvas.ruleScope. This does not imply that the criteria will be matched against a nested structure. 
		 * Flags: IR */
		valuePath?: string /* String */; // Flags=IR
		/** End value of a criterion with an operator of type "valueRange".
		 * Flags: IR, Group: advancedFilter */
		end?: any; // Flags=IR
		/** Start value of a criterion with an operator of type "valueRange".
		 * Flags: IR, Group: advancedFilter */
		start?: any; // Flags=IR
		/** Name of the field in each Record that this criterion applies to. Not applicable for a criterion with Criterion.criteria','sub-criteria. Can be specified as a dataPath to allow matching nested objects. Use '/' as delimiters for dataPath. See DataPath','dataPath for more information.
		 * Flags: IR, Group: advancedFilter */
		fieldName?: string /* String */; // Flags=IR
		/** For a criterion with an operator that acts on other criteria (eg "and", "or"), a list of sub-criteria that are grouped together by the operator.
		 * Flags: IR, Group: advancedFilter */
		criteria?: Array<Criterion> /* Array of Criterion */; // Flags=IR
		/** Value to be used in the application of this criterion. Value may be required or not required, or may be an Array, according to the OperatorValueType of the operator.
		 * Flags: IR, Group: advancedFilter */
		value?: any; // Flags=IR
	}

	/**
	 * An ordinary JavaScript object containing properties that configures the display of and interaction with the columns of a ListGrid. 
	 */
	export interface ListGridField  {
		/** If any cells in this field are showing a value icon (see: ListGridField.valueIcons) or this is has ListGridFieldType set to "image", this the value of this property will be appended to the end of the URL for the icon displayed. Typical usage might be to append a file type such as ".gif" to the filename of the image. For editable fields, this property will also be passed through to any editors as FormItem.imageURLSuffix.
		 * Flags: IRWA, Group: imageColumns */
		imageURLSuffix?: string; // Flags=IRWA
		/** Should the user be allowed to perform one-time autofitting of this field via a header context-menu option? When enabled, the default header context menu for this field will include an item to auto-fit the field and users will be able to autofit the field via the ListGrid.headerAutoFitEvent. If unset, these behaviors are enabled when ListGrid.canAutoFitFields is true. If this property is set to false, and ListGrid.canAutoFitFields is true, this field will be ommitted from auto-fit when the user selects the header menu option to ListGrid.autoFitAllText','auto fit all fields. Note - this property governs user-initiated auto-fit only. It has no impact on autoFit set up via ListGridField.autoFitWidth and ListGrid.autoFitFieldWidths. Note that if ListGrid.showRecordComponents','showing record components, per-cell record components are not taken into account when determining the size for column auto fit. The default ListGrid.getDefaultFieldWidth implementation looks at cell content only. We typically recommend that, for fields showing record-components, ListGridField.autoFitWidth and ListGrid.canAutoFitFields be disabled, or if the record components are of a predictable size, a ListGridField.defaultWidth be specified. This is particularly pertinent where ListGrid.recordComponentPosition is set to "within", in which case cells' content is often empty or completely covered by record-components.
		 * Flags: IR */
		canAutoFitWidth?: boolean /* Boolean */; // Flags=IR
		/** For a field that allows multiple ListGridField.groupingModes','grouping modes, the current grouping mode. This property is set when a user chooses a particular grouping mode, and may be set on ListGrid creation to affect the initial grouping.
		 * Flags: IR, Group: grouping */
		groupingMode?: string /* identifier */; // Flags=IR
		/** Width for value icons for this listGrid field. Overrides ListGrid.valueIconSize, ListGrid.valueIconWidth, and ListGridField.valueIconSize.
		 * Flags: IRW, Group: imageColumns */
		valueIconWidth?: number; // Flags=IRW
		/** Indicates this field's values should be fetched from another, related DataSource. The individual field will inherit settings such as ListGridField.type','field.type and ListGridField.title','field.title from the related DataSource just like fields from the primary DataSource. When ListGrid.fetchData','fechData() is called, the automatically created DSRequest will specify DSRequest.additionalOutputs requesting the field, and any Criteria generated by the component will likewise refer to the field from the related DataSource. It's an error to use this property if the ListGrid does not have a DataSource at all. The related DataSource must be loaded or a warning will be logged and the field definition ignored. This value is expected to be set to the following format dataSourceID.fieldName where dataSourceID is the ID of the related dataSource and fieldName is the name of the field from that dataSource from which you wish to retrieve values. Note that if this property is set and ListGridField.name','field.name is not explicitly specified, this field's name will default to the fieldName value from this property. Note about automatic cache updates: "update" and "add" operations submitted automatically by this ListGrid will include dsRequest.additionalOutputs to ensure all data necessary for cache updates is returned by the server. If your grid shows data that can be edited elsewhere in the UI (not by inline editing), to avoid problems with ResultSet automatic cache synchronization, you may need to switch from using listGridField.includeFrom to dataSourceField.includeFrom. This is because server responses to "add" and "update" operations which are initiated outside of this grid do not know about the listGridField.includeFrom setting, and so will not automatically return data for fields included in this way. Switching to dataSourceField.includeFrom ensures the field is always included in server responses, avoiding the issue.
		 * Flags: IR, Group: display_values */
		includeFrom?: string /* String */; // Flags=IR
		/** Name of the property in a ListGridRecord that holds the HTML to display in cells of this field if the fieldType is set to "link".
		 * Flags: IRW, Group: display_values */
		linkTextProperty?: string; // Flags=IRW
		/** This property may be set to customize the wrap attribute for the canvas shown when the mouse hovers over cells in this field. Note that this causes a soft-wrap - if set, the hover text will wrap at word boundaries. If unset, default behavior is derived from ListGrid.headerHoverWrap.
		 * Flags: IRW */
		hoverWrap?: boolean /* Boolean */; // Flags=IRW
		/** When ListGrid.showHeader is false and a field is subject to autofitting (see ListGrid.autoFitFieldWidths), sets the maximum width of the field. The actual allowed minimum will be the larger of this property and ListGridField.minWidth. (That is, ListGridField.minWidth dominates this property.)
		 * Flags: IRW, Group: appearance */
		maxWidth?: number /* Number */; // Flags=IRW
		/** Default groupingMode used when the user does not specify a mode or grouping is triggered programmatically and ListGridField.groupingMode','field.groupingMode is unset. See ListGridField.groupingModes','field.groupingModes.
		 * Flags: IR, Group: grouping */
		defaultGroupingMode?: string /* identifier */; // Flags=IR
		/** Specifies the ListGridField.optionDataSource field used to retrieve the stored values that are to be mapped to the display values (specified by ListGridField.displayField). Note that if this field is editable this will also be applied to this field's editors.
		 * Flags: IRW, Group: display_values */
		valueField?: string; // Flags=IRW
		/** If using an icon for this button, whether to switch the icon image when the mouse goes down on the button.
		 * Flags: IR, Group: buttonIcon */
		showDownIcon?: boolean /* Boolean */; // Flags=IR
		/** When set to false, don't apply alternate-row styling to this field.
		 * Flags: IRWA */
		showAlternateStyle?: boolean; // Flags=IRWA
		/** When some cell in this field is being edited, setting this property will specify the value icons to display in the cell's editor. If unset, the editor's valueIcons will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns */
		editorValueIcons?: any /* Map<String,String> */; // Flags=IRW
		/** The value to display for a ListGridField when it appears in the ListGrid.summaryRow','summaryRow. The default for normal fields is null and for special fields, like the ListGrid.checkboxField','checkboxField, the default is to show a blank value (a non-breaking space).
		 * Flags: IRW */
		summaryValue?: string /* HTMLString */; // Flags=IRW
		/** For fields of type "date" or "datetime", if this is an editable listGrid, this property allows you to specify the DateItem.inputFormat','inputFormat applied to the editor for this field.
		 * Flags: IRWA */
		inputFormat?: string /* DateInputFormat */; // Flags=IRWA
		/** When ListGrid.hiliteIcons are present, where the hilite icon will be placed relative to the field value. See HiliteIconPosition. Overrides ListGrid.hiliteIconPosition.
		 * Flags: IR, Group: hiliting */
		hiliteIconPosition?: HiliteIconPosition; // Flags=IR
		/** Specifies the ListGridField.optionDataSource field used to retrieve the display values that are to be mapped from the internal values specified by ListGridField.valueField. If no optionDataSource is defined for the field, the cell will display the displayField value for the current record instead of the underlying value for this field. This approach can be used for situations where field values need a stored value to displayed value mapping, but the set of all possible values is too large to load as a ValueMap - see ListGridField.optionDataSource for more details on this approach. Note that if this field is editable this will also be applied to this field's editors. largeValueMapSQL', 'This sample illustrates this approach achieved via a server-side SQL join. The display value for a record with a specified displayField can be picked up via ListGrid.getDisplayValue.
		 * Flags: IRW, Group: display_values */
		displayField?: string; // Flags=IRW
		/** If ListGridField.valueMap is set, and the grid is ListGrid.setSort','sorted by this field, should the data be sorted by the underlying data value or the mapped display value. If unset, will sort by display value. Set to false to sort by underlying data value. Note that this has no effect if a ListGridField.sortNormalizer has been specified.
		 * Flags: IRW */
		sortByMappedValue?: boolean; // Flags=IRW
		/** FormatString used during exports for numeric or date formatting. See DataSourceField.exportFormat.
		 * Flags: IR, Group: exportFormatting */
		exportFormat?: string /* FormatString */; // Flags=IR
		/** How much padding should there be on the left of DataBoundComponent.hiliteIcons','hilite icons for this field? Overrides ListGrid.hiliteIconLeftPadding
		 * Flags: IRW, Group: hiliting */
		hiliteIconLeftPadding?: number; // Flags=IRW
		/** If this ListGrid is showing a filter row, this property can be used to specify the form item class to use for the filter form item associated with this field (Only used if this field is not canFilter:false). Note: If this is not specified, the edit-form item type may be derived from the 'editorType' property, typically inherited from datasource fields, or from the 'type' of the field (showing the appropriate form item for the data-type).
		 * Flags: IRWA, Group: filterEditor */
		filterEditorType?: string /* FormItem className */; // Flags=IRWA
		/** For a field with displayField configured, should client-side sorting be performed on the display field value? Unless explicitly set to false the display field value is used.
		 * Flags: IRW, Group: display_values */
		sortByDisplayField?: boolean; // Flags=IRW
		/** When some cell in this field is being edited, setting this property will specify the width for value icons in the cell's editor. If unset, the editor's valueIcon width and height will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns */
		editorValueIconWidth?: number; // Flags=IRW
		/** Allows a boolean or ValueMap','valueMapped field to be edited without going into edit mode. When this attribute is set, clicking on the field will change the value - for boolean fields toggling between true and false, and for valueMapped fields, advancing the value to the next option in the valueMap. To enable this feature, ListGrid.canEdit must be set to true. For boolean type fields canToggle is true by default, meaning setting canEdit to true implies the user can toggle the value via a single click without going into edit mode. You can disable this by explicitly setting canToggle to false for a boolean field. Note that you can enable toggling only (without allowing the user to edit other fields) by just setting ListGrid.editEvent','grid.editEvent:"none". If ListGrid.editEvent is set to "click", when the user clicks on the field, the value will be toggled, and inline editing will be triggered as usual. Otherwise the toggled value will be saved immediately to the server, or if ListGrid.autoSaveEdits has been set to false, will be stored as an edit value for the record.
		 * Flags: IRWA, Group: editing */
		canToggle?: boolean /* Boolean */; // Flags=IRWA
		/** ListGrids picks a renderer for the view and edit mode of a field based on this attribute. See ListGridFieldType for a summary of how types are rendered.
		 * Flags: IR, Group: appearance */
		type?: ListGridFieldType; // Flags=IR
		/** If this field has an optionDataSource specified and ListGridField.autoFetchDisplayMap','autoFetchDisplayMap is set, this attribute provides a way to customize the DSRequest.operationId passed to dataSource.fetchData() when retrieving the display map from the option dataSource.
		 * Flags: IR, Group: display_values */
		optionOperationId?: string; // Flags=IR
		/** If a ListGridField.displayField is set, should this field show record values from the displayField? If ListGridField.displayField is specified, and there is no separate ListGridField.optionDataSource, by default we will show display-field values from the same record. Setting this property to false would disable this behavior. Alternatively, if there is a ListGridField.optionDataSource (and ListGridField.autoFetchDisplayMap is false), the displayField would be ignored for the field and the underlying ListGridField.name','record[fieldName] value would be displayed to the user. This property may be set to true to override this behavior and pick up values from the displayField for display in this field even when there is an optionDataSource set. Note that this property has no effect on fields with an explicitly specified valueMap, or with an optionDataSource where ListGridField.autoFetchDisplayMap is true.
		 * Flags: IRWA */
		displayValueFromRecord?: boolean; // Flags=IRWA
		/** Array of legal values for this field, or an Object where each property maps a stored value to a user-displayable value. Note that if this field is editable (see ListGrid.canEdit, ListGridField.canEdit), editors displayed for this field will pick up their valueMap either from this value or from ListGridField.editorValueMap. See also DataSourceField.valueMap.
		 * Flags: IRW, Group: display_values */
		valueMap?: Array<string> /* Object | Array of String */; // Flags=IRW
		/** When exporting data to Excel/OpenOffice format using ListGrid.exportData or ListGrid.exportClientData with ListGrid.exportFieldWidths set, set this flag false to cause this field to "opt out" of width export. Fields that opt out in this way have the corresponding spreadsheet column autosized (ie, made just wide enough that content is not clipped). This setting has no effect if listGrid.exportFieldWidths is not set.
		 * Flags: IRW */
		exportFieldWidth?: boolean; // Flags=IRW
		/** Name of this field. Must be unique within this ListGrid as well as a valid JavaScript identifier, as specified by ECMA-262 Section 7.6 (the String.isValidID function can be used to test whether a name is a valid JavaScript identifier). The name of field is also the property in each record which holds the value for that field. If a ListGrid.dataSource is specified and the DataSource has a field with the same name, the ListGridField and DataSourceField are merged so that properties on the ListGridField
		 * Flags: IR, Group: data */
		name?: string /* identifier */; // Flags=IR
		/** Optional title for the header button for this field. If specified this will be displayed in the header button instead of ListGridField.title or ListGridField.name. Set to an empty string to suppress the title in the header button entirely.
		 * Flags: IR, Group: appearance */
		headerTitle?: string; // Flags=IR
		/** If this listGrid has any fields of type "summary" and this field will be ListGridField.includeInRecordSummary','included in summary calculations by default, this attribute provides an opportunity to explicitly specify which summary fields the record should be displayed in. Specified as an array of fieldNames. If set, this field value will only be included for record summary value calculations for summary fields who's name is included in this array.
		 * Flags: IR */
		includeInRecordSummaryFields?: Array<string> /* array of fieldNames */; // Flags=IR
		/** Whether this field can be dragResized using the mouse. If unset, the default behavior is governed by ListGrid.canResizeFields.
		 * Flags: IR */
		canDragResize?: boolean; // Flags=IR
		/** When set to false, this field will not show a context menu in its header.
		 * Flags: IRW */
		showDefaultContextMenu?: boolean /* Boolean */; // Flags=IRW
		/** If true, then this field is excluded from the bound component's view state. In addition, the field will not be selected as the default title field by DataBoundComponent.getTitleField if DataBoundComponent.titleField is not provided.
		 * Flags: IR, Group: viewState */
		excludeFromState?: boolean /* Boolean */; // Flags=IR
		/** Indicates that this field should always be Array-valued. This property will be passed through to the generated edit-item when editing the field - so if ListGridField.valueMap is set, the default editor will be a SelectItem with SelectItem.multiple set to true. Note that for databound grids it typically makes sense to set DataSourceField.multiple rather than setting the property directly on the ListGridField object.
		 * Flags: IR, Group: editing */
		multiple?: boolean /* Boolean */; // Flags=IR
		/** Per-field setting for ListGrid.alwaysShowOperatorIcon. Can be used to force a particular field to always show it's ListGrid.operatorIcon','operatorIcon, even if it has no filter-value, or is using the default ListGridField.filterOperator','search operator.
		 * Flags: IR */
		alwaysShowOperatorIcon?: boolean /* Boolean */; // Flags=IR
		/** This property may be set to false to explicitly suppress display of the field title in the column header button for the field.
		 * Flags: IRW */
		showTitle?: boolean; // Flags=IRW
		/** If this field has a valueIcons property specified, setting this property to true will prevent the valueIcon being written out into this field's cells. Note this property may also be set to false to avoid showing the standard ListGrid.booleanTrueImage and ListGrid.booleanFalseImage for fields of type boolean.
		 * Flags: IRW, Group: imageColumns */
		suppressValueIcon?: boolean; // Flags=IRW
		/** Optional stringMethod to format the group level summary values for this field displayed via ListGrid.showGroupSummary. Takes a single parameter value and should return the formatted version of that value. If specified this will be applied instead of any formatting logic applied via ListGridField.formatCellValue, ListGrid.formatCellValue, etc. Note that for fields with a specified summary function of "count", if no custom formatting is applied, we default to formatting the count value by appending field.pluralTitle if defined, otherwise field.title to the numeric count value returned by the standard count function. To change this behavior for such fields, specify an explicit 'formatGridSummary' and/or 'formatGroupSummary' method
		 * Flags: IR */
		formatGroupSummary?: string /* stringMethod */; // Flags=IR
		/** If ListGrid.showGridSummary is true, should this field show a summary value. If unset, this field will show a summary value in the summary row if an explicit ListGridField.summaryFunction is specified or if a SimpleType.getDefaultSummaryFunction','default summary function is defined for the specified field type.
		 * Flags: IR */
		showGridSummary?: boolean /* Boolean */; // Flags=IR
		/** If a listGrid is showing a field of type summary, should this field be passed to the recordSummaryFunction when calculating the summary value to display. If unset, fields are included if they are of type "integer" or "float" only (since most summary functions perform numeric calculations). See also ListGridField.includeInRecordSummaryFields.
		 * Flags: IR */
		includeInRecordSummary?: boolean; // Flags=IR
		/** Dictates whether the data in this field should be exported raw by ListGrid.exportClientData','exportClientData(). If set to true for a field, the values in the field-formatters will not be executed for data in this field. Decreases the time taken for large exports.
		 * Flags: IR */
		exportRawValues?: boolean /* Boolean */; // Flags=IR
		/** Granularity of grouping for numeric fields. Groups will be formed based on ranges of values of size groupGranularity. For example, if groupGranularity were 1000, groups would be 0-1000, 1000-2000, etc.
		 * Flags: IR, Group: grouping */
		groupGranularity?: number /* integer */; // Flags=IR
		/** Array of Validator objects for this field. When the user edits cells in this field, these validators will be applied to the edited value. Note: for databound listGrids, this property may be specified on the DataSourceField, enabling both client and server side validation.
		 * Flags: IRW, Group: gridValidation */
		validators?: Array<Validator> /* Array of Validator */; // Flags=IRW
		/** Display format to use for date type values within this field. The ListGridField.timeFormatter may also be used to format underlying Date values as times (omitting the date part entirely). If both dateFormatter and timeFormatter are specified on a field, for fields specified as ListGridField.type','type "time" the timeFormatter will be used, otherwise the dateFormatter If field.dateFormatter and field.timeFormatter is unspecified, date display format may be defined at the component level via ListGrid.dateFormatter','ListGrid.dateFormatter, or for fields of type "datetime" ListGrid.datetimeFormatter','ListGrid.datetimeFormatter. Otherwise the default is to use the system-wide default short date format, configured via DateUtil.setShortDisplayFormat. Specify any valid DateDisplayFormat to change the format used by this item. If this field is editable the dateFormatter will also be passed to the editor created to edit this field. Note that you can also specify an explicit ListGridField.inputFormat which will be passed through to the editor as well, though this is not typically required as the input format should be automatically derived by the SmartClient system for standard DateDisplayFormats.
		 * Flags: IRW */
		dateFormatter?: DateDisplayFormat; // Flags=IRW
		/** Custom base style to apply to this field's header button instead of ListGrid.headerBaseStyle. Note that depending on the header button constructor, you may have to override ListGridField.headerTitleStyle as well.
		 * Flags: IRW, Group: appearance */
		headerBaseStyle?: string /* CSSStyleName */; // Flags=IRW
		/** With the ListGrid.showFilterEditor','FilterEditor showing, the Operator to use when matching values for this field. Note that you can set all FilterEditor fields to default to either substring or exact match via ListGrid.autoFetchTextMatchStyle','autoFetchTextMatchStyle, but if you want a mix of exact vs substring match on different fields, you need to use this property, and your ListGrid will produce AdvancedCriteria rather than the simpler Criteria format. This is automatically and transparently handled by the SmartClient Server's SQLDataSource and HibernateDataSource in Power Edition or above, but if you have your own filtering implementation, it will need to be able to handle AdvancedCriteria.
		 * Flags: IR */
		filterOperator?: OperatorId; // Flags=IR
		/** Whether to allow browser autoComplete when editing this field. If unset, defaults to listGrid.autoComplete
		 * Flags: IRW */
		autoComplete?: AutoComplete; // Flags=IRW
		/** If the user is navigating through the grid using the keyboard, record click or double click events may be generated via keyboard interactions (see ListGrid.generateClickOnSpace, ListGrid.generateClickOnEnter, ListGrid.generateDoubleClickOnSpace, ListGrid.generateDoubleClickOnEnter and ListGrid.arrowKeyAction). These synthetic events have both a target row and column. Setting this flag to true ensures that this field will never be considered the target for a keyboard click event.
		 * Flags: IRW, Group: events */
		ignoreKeyboardClicks?: boolean; // Flags=IRW
		/** Whether this field should display freezing/unfreezing options in its header context menu. See frozenFields.
		 * Flags: IR, Group: frozenFields */
		canFreeze?: boolean; // Flags=IR
		/** Marks field as initially hidden. The user will still be able to show the field via a context menu. This may be suppressed by setting ListGridField.canHide to false, or by setting ListGrid.canPickFields to false to suppress the field-picker entirely. To mark a field as completely hidden (not shown to a user at all, in any component), set DataSourceField.hidden instead.
		 * Flags: IR, Group: appearance */
		hidden?: boolean /* Boolean */; // Flags=IR
		/** Custom base style to apply to all cells in this field instead of ListGrid.baseStyle To override the baseStyle at the row level, use ListGrid.recordBaseStyleProperty','record[listGrid.recordBaseStyleProperty] instead.
		 * Flags: IRW, Group: appearance */
		baseStyle?: string /* CSSStyleName */; // Flags=IRW
		/** When true, this field can only be used for sorting if the data is entirely client-side.
		 * Flags: IRW */
		canSortClientOnly?: boolean /* Boolean */; // Flags=IRW
		/** Whether this field should be "frozen" for the purposes of horizontal scrolling. See frozenFields.
		 * Flags: IR, Group: frozenFields */
		frozen?: boolean; // Flags=IR
		/** When some cell in this field is being edited, this property can be used to apply an explicit FormItem.imageURLPrefix to the editor in question. This can be used to modify the valueIcons within the editor. If unset, but ListGridField.imageURLPrefix is specified, that will be used instead.
		 * Flags: IRWA, Group: editing */
		editorImageURLPrefix?: string; // Flags=IRWA
		/** This property is a mapping from data values for this field to SCImgURL','urls for icons to display for those data values. For example, given a field named "status" with possible values "Normal", "Slow", "Offline", the follow definition would show various icons for that field: fields : [ { name:"status", valueIcons: { Normal : "greenIcon.png", Slow : "yellowIcon.png", Offline : "redIcon.png" } }, ... other fields ... ] If a simple value-to-URL mapping is not enough, you can override ListGrid.getValueIcon to customize the behavior. You can even specify an empty valueIcons map and use ListGrid.getValueIcon to return arbitrary icons with no fixed mapping. valueIcons can either be displayed alongside the normal value or can replace the normal field value so that only the icon is shown. See ListGridField.showValueIconOnly. When placed alongside the value, use ListGridField.valueIconOrientation to control left- vs right-side placement. If inline editing is enabled for this field, editors displayed for this field will also show valueIcons. This may be overridden by explicitly setting ListGridField.editorValueIcons. Note that the following attributes related to valueIcon styling will also be picked up by the editor from the ListGridField object unless explicitly specified via the equivalent editor_ attributes: ListGridField.valueIconWidth ListGridField.valueIconHeight ListGridField.valueIconSize ListGridField.valueIconLeftPadding ListGridField.valueIconRightPadding ListGridField.imageURLPrefix ListGridField.imageURLSuffix If ListGridField.valueIconClick is defined for the field, a pointer cursor will be shown when the user rolls over the valueIcon, and the valueIconClick method will execute when the user clicks the icon.
		 * Flags: IRW, Group: imageColumns */
		valueIcons?: any /* Map<String,String> */; // Flags=IRW
		/** Formula definition for this field. Advanced applications that wish to save formulas separately from a grid's ListGrid.getViewState','viewState can provide a UserFormula as part of the field definition, and may subsequently access the formula is updated via the ListGrid.formulaUpdated notification.
		 * Flags: IRW */
		userFormula?: UserFormula; // Flags=IRW
		/** If set to true, custom HTML applied as part of hiliting will be applied after ListGrid.formatCellValue','formatting for each cell in this column. If false, hilite HTML will be applied before formatting. This attribute overrides ListGrid.hiliteHTMLAfterFormat as defined at the component level.
		 * Flags: IR */
		hiliteHTMLAfterFormat?: boolean /* Boolean */; // Flags=IR
		/** Height for hilite icons for this field. Overrides ListGrid.hiliteIconSize, ListGrid.hiliteIconHeight, and ListGridField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting */
		hiliteIconHeight?: number; // Flags=IRW
		/** If this ListGrid is showing a filter row (ListGrid.showFilterEditor','showFilterEditor:true), this property can be used to specify properties for the appropriate filter form item.
		 * Flags: IRWA, Group: filterEditor */
		filterEditorProperties?: FormItemProps /* FormItem properties */; // Flags=IRWA
		/** If this field can be grouped, this attribute represents the set of grouping styles that are available. For example, a "date" field might be able to be grouped by week or month, as well as by the date itself. If groupingModes are present and ListGrid.canGroupBy','grouping is enabled, the menu for this field includes a submenu of possible grouping modes generated from the groupingModes valueMap. When the user selects a particular grouping mode, ListGridField.groupingMode','field.groupingMode is set to the user's chosen mode, and this choice can be detected via the field parameter to ListGridField.getGroupValue in order to provide different modes of grouping. The user may also choose to group records without specifying a grouping mode, in this case, the ListGridField.defaultGroupingMode is used. Note that getGroupValue, groupingModes et al can be specified on SimpleType declarations. See this list of builtinGroupingModes','builtin grouping modes for more information.
		 * Flags: IR, Group: grouping */
		groupingModes?: ValueMap; // Flags=IR
		/** Size of images shown for fieldTypes image and imageFile in this field. This setting overrides the global ListGrid default ListGrid.imageSize. If set to a String, assumed to be a property on each record that specifies the image height. For example, if field.imageSize is "logoSize", record.logoSize will control the size of the image.
		 * Flags: IRW, Group: imageColumns */
		imageSize?: number; // Flags=IRW
		/** For a field of type:"imageFile", indicates whether to stream the image and display it inline or to display the View and Download icons.
		 * Flags: IR */
		showFileInline?: boolean; // Flags=IR
		/** Width for hilite icons for this field. Overrides ListGrid.hiliteIconSize, ListGrid.hiliteIconWidth, and ListGridField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting */
		hiliteIconWidth?: number; // Flags=IRW
		/** If this field has type [ListGridFieldType] set to "link", setting this property will apply a standard suffix to the link URL for cells in this field.
		 * Flags: IRWA */
		linkURLSuffix?: string; // Flags=IRWA
		/** Dictates whether the data in this field be exported. Explicitly set this to false to prevent exporting. Has no effect if the underlying DataSourceField.canExport','dataSourceField is explicitly set to canExport: false.
		 * Flags: IR */
		canExport?: boolean /* Boolean */; // Flags=IR
		/** If set to false, this field will be omitted from the column picker that appears in the header context menu when ListGrid.canPickFields is enabled. This means that the end user will not be able to hide it if it's currently shown, or show it if it's currently hidden. If this property is set to false, and the ListGrid.useAdvancedFieldPicker','advanced field picker is shown, if the field is ListGridField.hidden, the field will not show in the list of available fields. If the field is visible, it will be displayed in the list of currently visible fields, but the advanced field picker user interface will disallow hiding it.
		 * Flags: IR, Group: appearance */
		canHide?: boolean; // Flags=IR
		/** If showing a filter row for this ListGrid, should the filter criteria for this field be editable
		 * Flags: IRW, Group: filterEditor */
		canFilter?: boolean; // Flags=IRW
		/** Should this listGrid field autofit its width to either titles or content? This overrides the ListGrid.autoFitFieldWidths attribute on a per-field basis. Note that if ListGrid.showRecordComponents','showing record components, per-cell record components are not taken into account when determining the size for column auto fit. The default ListGrid.getDefaultFieldWidth implementation looks at cell content only. We typically recommend that, for fields showing record-components, ListGridField.autoFitWidth and ListGridField.canAutoFitWidth be disabled, or if the record components are of a predictable size, a ListGridField.defaultWidth be specified. This is particularly pertinent where ListGrid.recordComponentPosition is set to "within", in which case cells' content is often empty or completely covered by record-components.
		 * Flags: IR, Group: autoFitFields */
		autoFitWidth?: boolean /* Boolean */; // Flags=IR
		/** What to do when a user hits enter while editing this field? Overrides the enterKeyEditAction as specified at the listGrid level while focus is in this field.
		 * Flags: IRW, Group: editing */
		enterKeyEditAction?: EnterKeyEditAction; // Flags=IRW
		/** When set to true and showHover is also true for the field, shows a widget hovering at the mouse point. A number of builtin modes are provided - see HoverMode. Also supported at the ListGrid.showHoverComponents','ListGrid-level.
		 * Flags: IRWA, Group: hoverComponents */
		showHoverComponents?: boolean /* Boolean */; // Flags=IRWA
		/** Per-field setting for ListGrid.allowFilterOperators. Can be used to enable the filter operators UI for a particular field if the ListGrid-level setting is not enabled, or to disable filter operators for a particular field if the ListGrid-level setting is enabled.
		 * Flags: IR */
		allowFilterOperators?: boolean /* Boolean */; // Flags=IR
		/** Causes a tooltip hover to appear on the header generated for this field (effectively sets Canvas.prompt for the header).
		 * Flags: IR */
		prompt?: string /* HTMLString */; // Flags=IR
		/** This value is managed by the menu item titled ListGrid.filterUsingText','"Filter using" in the ListGrid.showHeaderContextMenu','headerContextMenu that appears when ListGrid.allowFilterOperators','allowFilterOperators has been set to true. If you need to reset this filter operator you should call ListGrid.setFieldProperties','listGrid.setFieldProperties, as in this example: listGrid.setFieldProperties(fieldName, {operator: null}); 
		 * Flags: R */
		operator?: string /* String */; // Flags=R
		/** If ListGrid.showGridSummary or ListGrid.showGroupSummary is true, this attribute can be used to specify an explicit SummaryFunction for calculating the summary value to display. If an array of summaryFunctions is specified, they will be executed in turn and the grid will show multiple summary rows at the grid or group level (or both) containing the resulting values.
		 * Flags: IR */
		summaryFunction?: Array<SummaryFunction> /* SummaryFunction  or Array of SummaryFunction */; // Flags=IR
		/** If this field has type [ListGridFieldType] set to "link", setting this property will apply a standard prefix to the link URL for cells in this field.
		 * Flags: IRWA */
		linkURLPrefix?: string; // Flags=IRWA
		/** If this field has type [ListGridFieldType] set to "image" and the URL for the image displayed is not absolute, the path of the URL will be relative to this string Alternatively, if this field displays any valueIcons, this prefix will be applied to the beginning of any ListGridField.valueIcons when determining the URL for the image.
		 * Flags: IRWA, Group: imageColumns */
		imageURLPrefix?: string; // Flags=IRWA
		/** Whether this field should be included in the printable representation of the grid.
		 * Flags: IRW, Group: printing */
		shouldPrint?: boolean; // Flags=IRW
		/** Horizontal alignment for cells in this field's column: "left", "right" or "center". If null, alignment is derived from ListGridField.align. If this field is editable, the alignment of cells in the body will also be reflected in any editors for the field.
		 * Flags: IRW, Group: appearance */
		cellAlign?: Alignment; // Flags=IRW
		/** If ListGridField.icon is specified, this property can be used to specify the height of the icon to be displayed in the ListGrid header button. (See StatefulCanvas.iconHeight) If this field is editable, and ListGridField.editorIconHeight is unset, this property will be passed onto the editors for this field as FormItem.iconWidth, which will effect the default size for ListGridField.icons','icons displayed in the editor.
		 * Flags: IR */
		iconHeight?: number /* integer */; // Flags=IR
		/** If ListGridField.icon is specified, this property can be used to specify the size of the icon to be displayed in the ListGrid header button. (See StatefulCanvas.iconSize)
		 * Flags: IR */
		iconSize?: number /* integer */; // Flags=IR
		/** If this field is editable, this property will be passed to editors displayed for cells within this field as FormItem.defaultIconSrc.
		 * Flags: IRA, Group: editing */
		defaultIconSrc?: string; // Flags=IRA
		/** Optional stringMethod to format the summary value displayed in the ListGrid.showGridSummary','grid summary. Takes a single parameter value and should return the formatted version of that value. If specified this will be applied instead of any formatting logic applied via ListGridField.formatCellValue, ListGrid.formatCellValue, etc. Note that for fields with a specified summary function of "count", if no custom formatting is applied, we default to formatting the count value by appending field.pluralTitle if defined, otherwise field.title to the numeric count value returned by the standard count function. To change this behavior for such fields, specify an explicit 'formatGridSummary' and/or 'formatGroupSummary' method
		 * Flags: IR */
		formatGridSummary?: string /* stringMethod */; // Flags=IR
		/** How much padding should there be on the right of valueIcons for this field Overrides ListGrid.valueIconRightPadding
		 * Flags: IRW, Group: imageColumns */
		valueIconRightPadding?: number; // Flags=IRW
		/** Height of image shown for fieldTypes image and imageFile in this field. If set to a String, assumed to be a property on each record that specifies the image height. For example, if field.imageHeight is "logoHeight", record.logoHeight will control the height of the image.
		 * Flags: IRW, Group: imageColumns */
		imageHeight?: number; // Flags=IRW
		/** Only applies to fields of type "summary". Fields of this type will display a calculated value based on the other field values within the current record. This attribute specifies how the summary field value will be calculated. See RecordSummaryFunction for valid options. A subset of the ListGrid's fields will be passed to the RecordSummaryFunction. Which fields to include is determined based on ListGridField.includeInRecordSummary If ListGrid.showGridSummary or ListGrid.showGroupSummary is true, this field's value in the summary row[s] will still be calculated by calling this method. In this case, the record object passed in will contain summary values for each field. If custom handling is required for this case, it may be detected by checking the record object's ListGridRecord.isGroupSummary and ListGridRecord.isGridSummary attributes.
		 * Flags: IR */
		recordSummaryFunction?: RecordSummaryFunction; // Flags=IR
		/** If this ListGrid is showing a filter row, this property can be used to apply a default value to show in the filter editor for this field.
		 * Flags: IRWA, Group: filterEditor */
		defaultFilterValue?: any; // Flags=IRWA
		/** If ListGrid.showGridSummary or ListGrid.showGroupSummary is true and the ListGridField.summaryFunction is set to "title", this attribute may be set to a string to display in the group and/or grid summary. If unspecified the ListGridField.title will show up in the summary.
		 * Flags: IR */
		summaryValueTitle?: string /* String */; // Flags=IR
		/** Enables or disables sorting by this column. If false, interactive sorting via header-clicks or menu-items will have no effect, but direct scripted calls to ListGrid.sort','sort() or ListGrid.setSort','setSort() will work as expected.
		 * Flags: IRW, Group: sorting */
		canSort?: boolean /* Boolean */; // Flags=IRW
		/** Derive a ValueMap by fetching records from another DataSource and extracting the ListGridField.valueField','valueField and ListGridField.displayField','displayField in the loaded records, to derive one valueMap entry per record loaded from the optionDataSource. Unlike the similar use of PickList.optionDataSource for PickList','pickLists used during editing or filtering, listGridField.optionDataSource causes the entire set of records from the optionDataSource to be fetched, without paging. Hence listGridField.optionDataSource is appropriate only for smaller valueMaps. For very large valueMap situations, such as an accountId field that should be displayed as an accountName where there are thousands of accounts, the correct approach is: do not set listGridField.optionDataSource declare two fields in the DataSource, eg "accountId" and "accountName". Set the ListGridField.displayField attribute on the data field to the name of the display field. When fetching records for display in a grid, have your server send back values for both fields, but show only the data field ("accountId") in the grid. In this case the cells in the accountId field will show the record value from the accountName field. This approach means the valueMap will never be loaded in its entirety, instead, each loaded record contains the valueMapping for that one record, as a pair of fields within the record. If you are using the SmartClient Server Framework with the SQL or JPA/Hibernate built-in connectors, this entire approach can be achieved very easily using the DataSourceField.includeFrom setting - see the DataSourceField.includeFrom','docs for includeFrom for details. Notes: When using the above approach, it is key that the server return both the underlying stored value and the display value, as suggested above. This approach allows the PickList.optionDataSource property to be used to provide paged valueMaps during inline editing and ListGrid.showFilterEditor','inline filtering. This can be achieved by setting the optionDataSource attribute on the form item used to edit the field via ListGridField.editorProperties (for editing) or ListGridField.filterEditorProperties','field.filterEditorProperties (for filtering), without specifying an optionDataSource at the listGridField level. Alternatively developers can use ListGridField.autoFetchDisplayMap to suppress the fetch against the optionDataSource at the listGrid level. Setting listGridField.optionDataSource to the same dataSource as the listGrid is not the same as omitting the optionDataSource setting entirely. Unless ListGridField.autoFetchDisplayMap has been set to explicitly disable fetching, a fetch will be performed against the dataSource to build a valueMap which will be used as the definitive mapping from data to display values, rather than picking up the display values from the records themselves. This distinction is required to support cases where the ListGridField.valueField points to a different field in the grid (useful for hierarchical relationships, for example), or where ListGridField.optionCriteria or ListGridField.optionOperationId are specified and return different data from the records displayed within the grid. If a displayField is specified, with no associated optionDataSource, and the field is editable, updating the edit value for the field may not automatically update the displayField edit value, meaning the user may not realize the edit value has been modified. If the new value came from the user editing the field, and the edit item has a valueMap or optionDataSource specified, the display value is picked up automatically and stored out on the displayField for the record. However if the value was set programmatically, the developer should also set the edit value for the display field to ensure the displayed value reflects the new edit value. Note that when this occurs, a warning will be logged which can be disabled via ListGrid.warnOnUnmappedValueFieldChange. For very advanced usage a developer can use ListGridField.displayValueFromRecord to explicitly tell the grid whether or not to display the display field value for the record in this field when a displayField is specified. See documentation on that property for more information 
		 * Flags: IRW, Group: display_values */
		optionDataSource?: string /* String */; // Flags=IRW
		/** For fields of type:"float" or derived from float, number of digits after the decimal point to consider when grouping. For example, groupPrecision:2 indicates that 45.238 and 45.231 group together, but 45.22 and 45.27 are separate. See also ListGridField.groupGranularity','groupGranularity for grouping by broader ranges.
		 * Flags: IR, Group: grouping */
		groupPrecision?: number /* integer */; // Flags=IR
		/** The width of this field, specified as either an absolute number of pixels, a percentage of the remaining space like "25%", or "*" to split remaining space among all fields which have "*". Caution: stretch sizes are currently ignored if the field is being autofitted (see ListGrid.autoFitFieldWidths), unless ListGrid.showHeader is false. Note: if autofitting is active for a field, the width will default to the numerical autofit width for that field (so it will not be stretched larger to fill available space). Otherwise, if not autofitting, the width will default to "*" causing it to be automatically stretched. See also ListGrid.minFieldWidth to ensure no field goes below a minimum size. Use ListGrid.resizeField to programmatically change field width after creation. Use ListGrid.getFieldWidth to access the rendered field width after the ListGrid is drawn.
		 * Flags: IRW, Group: appearance */
		width?: number | string /* Number or String */; // Flags=IRW
		/** If using an icon for this button, whether to switch the icon image if the button becomes disabled.
		 * Flags: IR, Group: buttonIcon */
		showDisabledIcon?: boolean /* Boolean */; // Flags=IR
		/** Name of form item class to use for the form item created to edit this field. (Only used if this field is editable). Note: If this is not specified, the edit-form item type may be derived from the editorType property, typically inherited from datasource fields, or from the type of the field (showing the appropriate form item for the data-type). See the editing overview for more on editing ListGrid fields.
		 * Flags: IRWA, Group: editing */
		editorType?: string /* FormItem className */; // Flags=IRWA
		/** Specifies the default sorting direction for this column. If specified on the ListGrid.sortField','default sort field for the listGrid, sorting occurs automatically, otherwise this will be the default direction when the user clicks the field header, or calls ListGrid.sort without specifying an explicit sort direction. Overrides ListGrid.sortDirection
		 * Flags: IRW, Group: sorting */
		sortDirection?: SortDirection; // Flags=IRW
		/** Whether this field should be automatically frozen when other fields are frozen. When true, the field will be automatically frozen to the extreme of the grid. The automatically generated ListGrid.checkboxField','checkbox, ListGrid.expansionField','expansion and ListGrid.rowNumberField','rowNumber fields are examples of fields that specify autoFreeze: true. You can control the position of this field in the array of frozen fields by providing a ListGridField.getAutoFreezePosition implementation.
		 * Flags: IR, Group: frozenFields */
		autoFreeze?: boolean; // Flags=IR
		/** If using an icon for this button, whether to switch the icon image when the button becomes selected.
		 * Flags: IR, Group: buttonIcon */
		showSelectedIcon?: boolean /* Boolean */; // Flags=IR
		/** Shortcut to configure a FormItem.textFormula for the ListGridField.editorType','editor used when this field is ListGrid.canEdit','edited.
		 * Flags: IR */
		editorTextFormula?: UserSummary; // Flags=IR
		/** When a user requests column autofitting via the ListGrid.getHeaderContextMenuItems','header contextMenu or via a ListGrid.headerAutoFitEvent','mouse gesture, what autofit approach is used. If set, this setting overrides the autoFitWidthApproach specified at the ListGrid level.
		 * Flags: IRW, Group: autoFitFields */
		autoFitWidthApproach?: AutoFitWidthApproach; // Flags=IRW
		/** When some cell in this field is being edited, this property can be used to apply an explicit FormItem.imageURLSuffix to the editor in question. This can be used to modify the valueIcons within the editor. If unset, but ListGridField.imageURLPrefix is specified, that will be used instead.
		 * Flags: IRWA, Group: editing */
		editorImageURLSuffix?: string; // Flags=IRWA
		/** Default width and height of ListGrid.hiliteIcons','hilite icons in this field. Takes precedence over hiliteIconWidth, hiliteIconHeight and hiliteIconSize specified at the component level. Can be overridden via ListGridField.hiliteIconWidth and ListGridField.hiliteIconHeight
		 * Flags: IRW, Group: hiliting */
		hiliteIconSize?: number; // Flags=IRW
		/** Determines whether this field will be groupable in the header context menu.
		 * Flags: IRW */
		canGroupBy?: boolean /* Boolean */; // Flags=IRW
		/** How much padding should there be on the left of valueIcons for this field Overrides ListGrid.valueIconLeftPadding
		 * Flags: IRW, Group: imageColumns */
		valueIconLeftPadding?: number; // Flags=IRW
		/** If set to true and ListGrid.canRemoveRecords is true, this field will be rendered as the remove-field for this grid. In most common usage scenarios this field will essentially be a placeholder indicating where the remove field should be rendered, meaning properties other than isRemoveField, such as name or title, may be left unset.
		 * Flags: IRA */
		isRemoveField?: boolean; // Flags=IRA
		/** If we're showing a valueIcon for this field should it appear to the left or the right of the text? By default the icon will appear to the left of the textual value - set this to "right" to show the icon on the right of the text. Has no effect if ListGridField.showValueIconOnly is true
		 * Flags: IRW, Group: imageColumns */
		valueIconOrientation?: string; // Flags=IRW
		/** Can summary be edited from header context menu? Setting attribute to false prevents editing. A null or true value allows editing. Has no effect when ListGrid.canAddSummaryFields is false.
		 * Flags: IR */
		canEditSummary?: boolean /* Boolean */; // Flags=IR
		/** The HTML to display in cells of this field if the fieldType is set to link. This property sets linkText that will be the same for all records. You can set linkText on a per-record basis via ListGridRecord.linkText.
		 * Flags: IRW, Group: display_values */
		linkText?: string /* String */; // Flags=IRW
		/** Pixels between icon and title text.
		 * Flags: IR, Group: buttonIcon */
		iconSpacing?: number /* int */; // Flags=IR
		/** Determines whether hiliting for this field is shown in a group summary. Set to false to prevent this field from showing hilite in a group summary. All hilites in group summary rows can be controlled with the ListGrid.showHilitesInGroupSummary property.
		 * Flags: IRW */
		showHilitesInGroupSummary?: boolean /* Boolean */; // Flags=IRW
		/** Summary definition for this field. Advanced applications that wish to save summaries separately from a grid's ListGrid.getViewState','viewState can provide a UserSummary as part of the field definition, and may subsequently access the summary is updated via the ListGrid.summaryUpdated notification.
		 * Flags: IRW */
		userSummary?: UserSummary; // Flags=IRW
		/** If using an icon for this button, whether to switch the icon image when the button receives focus. If StatefulCanvas.showFocusedAsOver is true, the "Over" icon will be displayed when the canvas has focus, otherwise a separate "Focused" icon will be displayed
		 * Flags: IR, Group: buttonIcon */
		showFocusedIcon?: boolean /* Boolean */; // Flags=IR
		/** Delay in ms for hovers shown for cells in this field. If unset, the grid's hoverDelay will be used. This property also governes the hoverDelay for the header button. Developers wishing to have a different delay for hovers on the header can use ListGridField.headerHoverDelay in addition to this property.
		 * Flags: IRW */
		hoverDelay?: number /* integer */; // Flags=IRW
		/** Should the field title wrap if there is not enough space horizontally to accommodate it. If unset, default behavior is derived from ListGrid.wrapHeaderTitles. (This is a soft-wrap - if set the title will wrap at word boundaries.) Notes: If autofitting is active, ListGridField.width and ListGridField.minWidth can be set to control the minimum field width - see the links for details. This feature is incompatible with ListGrid.clipHeaderTitles, and clipHeaderTitles will be disabled for wrapping fields.
		 * Flags: IRW */
		wrap?: boolean /* Boolean */; // Flags=IRW
		/** If ListGrid.showGroupSummary is true, should this field show a summary value in a summary row when the grid is grouped? If unset, this field will show a summary value in the summary row if an explicit ListGridField.summaryFunction is specified or if a SimpleType.getDefaultSummaryFunction','default summary function is defined for the specified field type.
		 * Flags: IR */
		showGroupSummary?: boolean; // Flags=IR
		/** Custom titleStyle to apply to this field's header button instead of ListGrid.headerTitleStyle. Note that this will typically only have an effect if ListGrid.headerButtonConstructor is set to StretchImgButton or a subclass thereof.
		 * Flags: IRW, Group: appearance */
		headerTitleStyle?: string /* CSSStyleName */; // Flags=IRW
		/** Shortcut to configure a FormItem.formula for the ListGridField.editorType','editor used when this field is ListGrid.canEdit','edited.
		 * Flags: IR */
		editorFormula?: UserFormula; // Flags=IR
		/** By default, clicking a link rendered by this item opens it in a new browser window. You can alter this behavior by setting this property. The value of this property will be passed as the value to the target attribute of the anchor tag used to render the link. If you set listGridField.target to "javascript", the default behavior is to catch and consume mouse-clicks that would result in the link being followed. Instead, the ListGrid.cellClick event is fired for the containing cell.
		 * Flags: IRW */
		target?: string; // Flags=IRW
		/** When some cell in this field is being edited, setting this property will specify the height for value icons in the cell's editor. If unset, the editor's valueIcon width and height will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns */
		editorValueIconHeight?: number; // Flags=IRW
		/** If ListGridField.userFormula is set for this field, and this grid is showing ListGrid.showGroupSummary','group summaries or a ListGrid.showGridSummary','grid summary, this property determines what field value should be present in those summary rows. Should the field apply the user-formula to the calculated summary row, or should it apply a standard grid or group summary to the user-formula values displayed in the grid? Default behavior may be specified at the grid level via ListGrid.applyFormulaAfterSummary
		 * Flags: IRW */
		applyAfterSummary?: boolean /* Boolean */; // Flags=IRW
		/** FormatString for numeric or date formatting. See DataSourceField.format.
		 * Flags: IR, Group: exportFormatting */
		format?: string /* FormatString */; // Flags=IR
		/** Applies only to fields of type "float" and affects how many significant digits are shown. For example, with decimalPrecision 3, if the field value is 343.672677, 343.673 is shown. If the value is 125.2, 125.2 is shown - decimalPrecision will not cause extra zeros to be added. Use DataSourceField.decimalPad for this. A number is always shown with its original precision when edited.
		 * Flags: IRW, Group: appearance */
		decimalPrecision?: number; // Flags=IRW
		/** What to do when a user hits escape while editing this field? Overrides the escapeKeyEditAction as specified at the listGrid level while focus is in this field.
		 * Flags: IRW, Group: editing */
		escapeKeyEditAction?: EscapeKeyEditAction; // Flags=IRW
		/** Specifies the width of the canvas shown when the mouse hovers over cells in this field. If unset, default behavior is derived from ListGrid.headerHoverWidth.
		 * Flags: IRW */
		hoverWidth?: number /* Integer */; // Flags=IRW
		/** By default HTML values in ListGrid cells will be interpreted by the browser. Setting this flag to true will causes HTML characters to be escaped, meaning the raw value of the field (for example "&lt;b&gt;AAA&lt;/b&gt;") is displayed to the user rather than the interpreted HTML (for example "AAA")
		 * Flags: IRW */
		escapeHTML?: boolean; // Flags=IRW
		/** In an editable ListGrid, initial value for this field when the user begins editing a new record. initialValue applies only if a new record is created by end user action (such as navigating past the end of the data when ListGrid.listEndEditAction is "next") or by a call to ListGrid.startEditingNew that does not specify the initialValues argument.
		 * Flags: IR, Group: editing */
		initialValue?: any; // Flags=IR
		/** Only applies to fields of type "summary". This attribute is set on a summary field, when calculating the summary value from some record, the summary function will only be passed the fields before this summary field. This may be useful for displaying running totals across a record. Note that this feature would typically be used with ListGrid.canReorderFields','canReorderFields:false
		 * Flags: IR */
		partialSummary?: boolean; // Flags=IR
		/** A valueMap to use for editors shown for this field. By default if this is not specified ListGridField.valueMap','field.valueMap will be used instead. Dynamic valueMaps can be provided by implementing ListGrid.getEditorValueMap.
		 * Flags: IRW, Group: editing */
		editorValueMap?: any /* Object */; // Flags=IRW
		/** If this field is showing an icon, should it appear to the left or right of the title? Valid options are "left" or "right"
		 * Flags: IR */
		iconOrientation?: string; // Flags=IR
		/** Can formula be edited from header context menu? Setting attribute to false prevents editing. A null or true value allows editing. Has no effect when ListGrid.canAddFormulaFields is false.
		 * Flags: IR */
		canEditFormula?: boolean /* Boolean */; // Flags=IR
		/** If this field has a valueIcons property specified, setting this property causes the valueIcon for each value to be displayed in the cell without also showing the record's value for the field. If unset the default behavior is to show the icon only if an explicit valueMap is specified as well in addition to a valueIcons map, otherwise show both the valueIcon and value for the cell. Note that if this field is editable FormItem.showValueIconOnly will be passed through to editors displayed in this field.
		 * Flags: IRW, Group: imageColumns */
		showValueIconOnly?: boolean; // Flags=IRW
		/** If using an icon for this button, whether to switch the icon image on mouse rollover.
		 * Flags: IR, Group: buttonIcon */
		showRollOverIcon?: boolean /* Boolean */; // Flags=IR
		/** How much padding should there be on the right of DataBoundComponent.hiliteIcons','hilite icons for this field? Overrides ListGrid.hiliteIconRightPadding
		 * Flags: IRW, Group: hiliting */
		hiliteIconRightPadding?: number; // Flags=IRW
		/** Horizontal alignment for field's column header: "left", "right" or "center". Applied to the column header title and cells by default. A separate alignment for cells can be specified via ListGridField.cellAlign. If null, values are left-aligned. If this field is editable, the alignment of cells in the body will also be reflected in any editors for the field.
		 * Flags: IRW, Group: appearance */
		align?: Alignment; // Flags=IRW
		/** Whether to show hovers for this field. The default hover will be the contents of the cell the user is hovering over, and can be customized via ListGridField.hoverHTML','field.hoverHTML(). ListGrid.canHover can be set to true to cause hovers to be shown for all fields by default. In this case, field.showHover can be set to false to suppress hovers for an individual field. All hovers can be disabled, regardless of other settings, by setting ListGrid.showHover to false.
		 * Flags: IRW */
		showHover?: boolean; // Flags=IRW
		/** A title for this field, to display in the header for the field and in other contexts such as the ListGrid.canPickFields','menu for picking visible fields. Note: if you want to use HTML tags to affect the display of the header, you should do so via ListGridField.headerTitle instead so that other places where the title appears in the UI are not affected. For example, you might set headerTitle to an empty string to suppress the header title on a narrow column, but you would retain the normal title in the title property to avoid a blank menu item in the field picker menu, DataBoundComponent.editHilites','hilite editor and other contexts. Alternately you can specify a ListGridField.getFieldTitle method on the field to return the HTML for the field title.
		 * Flags: IRW, Group: appearance */
		title?: string; // Flags=IRW
		/** If set to true, any ListGridField.validators for this field will be run whenever the value of the field is changed. Analogous to the FormItem.validateOnChange property.
		 * Flags: IRW, Group: gridValidation */
		validateOnChange?: boolean; // Flags=IRW
		/** If this field is editable, this property will be passed to editors displayed for cells within this field as FormItem.iconVAlign.
		 * Flags: IRA, Group: editing */
		iconVAlign?: string; // Flags=IRA
		/** Determines whether this field can be hilited. Set to false to prevent this field from appearing in HiliteEditor.
		 * Flags: IRW */
		canHilite?: boolean; // Flags=IRW
		/** Time-format to apply to date type values within this field. If specified, any dates displayed in this field will be formatted as times using the appropriate format. This is most commonly only applied to fields specified as type "time" though if no explicit ListGridField.dateFormatter is specified it will be respected for other fields as well. If unspecified, a timeFormatter may be defined ListGrid.timeFormatter','at the component level and will be respected by fields of type "time". If this field is editable, the timeFormatter will also be passed to the editor created to edit this field as FormItem.timeFormatter.
		 * Flags: IRWA, Group: appearance */
		timeFormatter?: TimeDisplayFormat; // Flags=IRWA
		/** If we're showing the filterEditor (listGrid.showFilterEditor is true), this property determines whether this list should be filtered every time the user edits the value of the filter editor for this field. The ListGrid.fetchDelay governs the delay in milliseconds between the user editing the filter editor value, and the new filter being applied to the grid.
		 * Flags: IRWA, Group: filterEditor */
		filterOnKeypress?: boolean; // Flags=IRWA
		/** Can this field be edited? May be overridden by setting the 'canEdit' property at the listGrid level. If not explicitly set and this grid is bound to a dataSource, the ListGrid.canEditFieldAttribute may be used to set default editability at the field level. For more dynamic control over whether fields can be edited, see ListGrid.canEditCell. 
		 * Flags: IRW, Group: editing */
		canEdit?: boolean; // Flags=IRW
		/** The value to display for a cell whose value is null or the empty string after applying ListGridField.formatCellValue','formatting and valueMap (if any). This is the field-specific attribute. You may also set the emptyCellValue at the grid level to define the emptyCellValue for all empty fields in the grid.
		 * Flags: IRW, Group: display_values */
		emptyCellValue?: string /* HTMLString */; // Flags=IRW
		/** Default width and height of value icons in this field. Takes precedence over valueIconWidth, valueIconHeight and valueIconSize specified at the ListGrid level. Can be overridden via ListGridField.valueIconWidth and {ListGridField.valueIconHeight}
		 * Flags: IRW, Group: imageColumns */
		valueIconSize?: number; // Flags=IRW
		/** Width of images shown for fieldTypes image and imageFile in this field. If set to a String, assumed to be a property on each record that specifies the image width. For example, if field.imageWidth is "logoWidth", record.logoWidth will control the width of the image.
		 * Flags: IRW, Group: imageColumns */
		imageWidth?: number; // Flags=IRW
		/** Delay in ms for hovers shown over this field's header. If unset, any ListGridField.hoverDelay will be used for both header hovers and hovers shown over cells in the grid's body.
		 * Flags: IRW */
		headerHoverDelay?: number /* integer */; // Flags=IRW
		/** Properties to apply the the form item created to edit this field. (Only used if this field is editable). For example, if you have a field "shoeSize" with DataSourceField.editorType set to "SpinnerItem" in order to use a SpinnerItem as your field editor, and you want to pass the SpinnerItem.step property to the created SpinnerItem: fields : [ { name:"shoeSize", editorType:"SpinnerItem", editorProperties : { step:0.5 } }, ... other fields ... ] 
		 * Flags: IRWA, Group: editing */
		editorProperties?: FormItemProps /* FormItem properties */; // Flags=IRWA
		/** If ListGridField.optionDataSource is set for this ListGridField, criteria specified in this attribute will be passed to the dataSource when performing the fetch operation to determine data-value to display-value mappings
		 * Flags: IRW, Group: display_values */
		optionCriteria?: Criteria; // Flags=IRW
		/** For a field of type:"icon" only, set the icon that appears in body cells. Unless setting ListGridField.icon','field.icon, setting field.cellIcon will not show an icon in the header. To change this property after fields have been passed to ListGrid.setFields, use ListGrid.setFieldCellIcon.
		 * Flags: IR */
		cellIcon?: string /* SCImgURL */; // Flags=IR
		/** Height for value icons for this listGrid field. Overrides ListGrid.valueIconSize, ListGrid.valueIconHeight, and ListGridField.valueIconSize.
		 * Flags: IRW, Group: imageColumns */
		valueIconHeight?: number; // Flags=IRW
		/** If this field is editable, this property can be used to specify FormItem.icons','icons to be displayed in the editors displayed for this field
		 * Flags: IRA, Group: editing */
		icons?: Array<FormItemIcon> /* Array of FormItemIcon Properties */; // Flags=IRA
		/** If true, automatically fetches records and derives a valueMap from ListGridField.optionDataSource. Same as ListGrid.autoFetchDisplayMap, but defined on a per-field basis.
		 * Flags: IRW, Group: display_values */
		autoFetchDisplayMap?: boolean; // Flags=IRW
		/** If this field is editable, this property will be passed to editors displayed for cells within this field as FormItem.iconHeight. If this property unset, the iconHeight property from the editor can be picked up from ListGridField.iconHeight instead.
		 * Flags: IRA, Group: editing */
		editorIconHeight?: number; // Flags=IRA
		/** If this field is editable, this property will be passed to editors displayed for cells within this field as FormItem.iconWidth. If this property unset, the iconWidth property from the editor can be picked up from ListGridField.iconWidth instead.
		 * Flags: IRA, Group: editing */
		editorIconWidth?: number; // Flags=IRA
		/** When the user edits cells in this field, is this value required to be non-empty in order for validation to pass. Note: for databound listGrids, this property may be specified on the DataSourceField, enabling both client and server side validation.
		 * Flags: IRW, Group: gridValidation */
		required?: boolean /* Boolean */; // Flags=IRW
		/** Whether this field can be reordered using the mouse. If unset, the default behavior is governed by ListGrid.canReorderFields. Note that setting this property to false will lock this field from being moved - that is, the user is prevented from moving this field directly by dragging with the mouse, or by dropping another field onto this field. However, unless this field is at the extreme edge of the grid, or all fields between it and the extreme edge of the grid are also canReorder: false, (ie, if there are unlocked fields on either side of this field), then it is possible that this locked field may be reordered automatically, as a result of the user dragging one unlocked field onto another unlocked field.
		 * Flags: IR */
		canReorder?: boolean; // Flags=IR
		/** Optional "default width" for this field. If set, this value will be returned by the ListGrid.getDefaultFieldWidth method, and used as the autoFit size for the field's content.
		 * Flags: IR, Group: autoFitFields */
		defaultWidth?: number /* Integer */; // Flags=IR
		/** If ListGrid.showHeaderMenuButton is true, when auto-fitting fields to the title width via ListGrid.autoFitFieldWidths or ListGridField.autoFitWidth, should the button be sized such that there is enough space for the header menu button to show without covering the field title? May be explicitly specified at the ListGridField.leaveHeaderMenuButtonSpace','field level or at the ListGrid.leaveHeaderMenuButtonSpace','grid level. If not explicitly specified space will be left for fields with ListGridField.align set to "left" or "right", but not for fields with align set to "center".
		 * Flags: IWA, Group: headerMenuButton */
		leaveHeaderMenuButtonSpace?: boolean; // Flags=IWA
		/** If this field has an optionDataSource specified and ListGridField.autoFetchDisplayMap','autoFetchDisplayMap is set, this attribute provides a way to customize the dataSource request issued to fetch the display map from the option dataSource. This provides, among other capabilities, a way to trigger the server to return summary records.
		 * Flags: IR, Group: display_values */
		optionFilterContext?: DSRequestProps /* DSRequest Properties */; // Flags=IR
		/** When a field is subject to autofitting (see ListGrid.autoFitFieldWidths), sets the minimum width of the field. The actual allowed minimum will be the maximum of: this property, ListGridField.width (if a number), the aufofit value determined by the widest value content in this field's column ListGrid.minFieldWidth 
		 * Flags: IRW, Group: appearance */
		minWidth?: number /* Number */; // Flags=IRW
		/** Applies only to fields of type "float" and enforces a minimum number of digits shown after the decimal point. For example, a field value of 343.1, 343.104 and 343.09872677 would all be shown as 343.10 if decimalPad is 2. The original unpadded value is always shown when the value is edited.
		 * Flags: IRW, Group: appearance */
		decimalPad?: number; // Flags=IRW
		/** If this field ListGridField.canEdit','can be edited, this property can be used to specify a default value for this field's editor when adding new rows to the grid.
		 * Flags: IRW, Group: editing */
		defaultValue?: any; // Flags=IRW
		/** If this listGrid is showing a filter row, this property can be used to specify a mapping of internal data to/from display values to be in the appropriate filter row form item.
		 * Flags: IRW, Group: filterEditor */
		filterEditorValueMap?: any /* Object */; // Flags=IRW
		/** dataPath for this field. This property allows the grid to display details of nested data structures in a flat list of columns.
		 * Flags: IRA, Group: data */
		dataPath?: string; // Flags=IRA
		/** If ListGridField.icon is specified, this property can be used to specify the width of the icon to be displayed in the ListGrid header button. (See StatefulCanvas.iconWidth) If this field is editable, and ListGridField.editorIconWidth is unset, this property will be passed onto the editors for this field as FormItem.iconWidth, which will effect the default size for ListGridField.icons','icons displayed in the editor.
		 * Flags: IR */
		iconWidth?: number /* integer */; // Flags=IR
		/** For fields with an ListGridField.optionDataSource, where ListGridField.autoFetchDisplayMap is true, this property will govern the textMatchStyle attribute of the DSRequest parameter passed to DataSource.fetchData when retrieving the remote data set to be used as a basis for this field's valueMap.
		 * Flags: IR, Group: display_values */
		optionTextMatchStyle?: TextMatchStyle; // Flags=IR
		/** Optional icon to show next to the title for this field. Should be set to a URL to an image. Relative paths will be evaluated starting at the imgDir of this component. This URL is partial - it may be updated to indicate the current disabled (etc) state of the field. If ListGridField.type','field.type is set to "icon", this icon will also be shown in every cell of this field - see also ListGridField.cellIcon','field.cellIcon. To change this property after fields have been passed to ListGrid.setFields, use ListGrid.setFieldIcon.
		 * Flags: IR */
		icon?: string /* SCImgURL */; // Flags=IR
	}

	/**
	 * Every node in the tree is represented by a TreeNode object which is an object literal with a set of properties that configure the node. When a Tree is supplied as TreeGrid.data to TreeGrid, you can also set properties from ListGridRecord on the TreeNode (e.g. setting ListGridRecord.enabled:false on the node). 
	 */
	export interface TreeNode  {
		/** For trees with the modelType "children", this property specifies the children of this TreeNode. Note: the name of this property can be changed by setting Tree.childrenProperty
		 * Flags: IRW */
		children?: any /* List of TreeNode */; // Flags=IRW
		/** Set to true or a string that is not equal to (ignoring case) "false" to explicitly mark this node as a folder. See Tree.isFolder for a full description of how the Tree determines whether a node is a folder or not. Note: the name of this property can be changed by setting Tree.isFolderProperty.
		 * Flags: IR */
		isFolder?: boolean | string /* Boolean or String */; // Flags=IR
		/** Provides a name for the node that is unique among its immediate siblings, thus allowing a unique path to be used to identify the node, similar to a file system. See Tree.getPath. If the nameProperty is not set on a given node, the TreeNode.id will be used instead. If this is also missing, Tree.getName and Tree.getPath will auto-generate a unique name for you. Thus names are not required, but if the dataset you are using already has usable names for each node, using them can make APIs such as Tree.find more useful. Alternatively, if your dataset has unique ids consider providing those as TreeNode.id. If a value provided for the nameProperty of a node (e.g. node.name) is not a string, it will be converted to a string by the Tree via ""+value. This property is also used as the default title for the node (see Tree.getTitle) if TreeNode.title is not specified. Note: the name of this property can be changed by setting Tree.nameProperty.
		 * Flags: IR */
		name?: string /* String */; // Flags=IR
		/** For folder nodes showing custom icons (set via TreeNode.icon), this property allows the developer to specify on a per-node basis whether an open state icon should be displayed when the folder is open. Set node.showOpenIcon to true to show the open state icons, or false to suppress this. If not specified, this behavior is determined by TreeGrid.showCustomIconOpen for this node. You can change the name of this property by setting TreeGrid.customIconOpenProperty.
		 * Flags: IRWA, Group: treeIcons */
		showOpenIcon?: boolean /* Boolean */; // Flags=IRWA
		/** For folder nodes showing custom icons (set via TreeNode.icon), this property allows the developer to specify on a per-node basis whether a drop state icon should be displayed when the user drop-hovers over this folder. Set node.showDropIcon to true to show the drop state icon, or false to suppress this. If not specified, this behavior is determined by TreeGrid.showCustomIconDrop for this node. You can change the name of this property by setting TreeGrid.customIconDropProperty.
		 * Flags: IRWA, Group: treeIcons */
		showDropIcon?: boolean /* Boolean */; // Flags=IRWA
		/** This Property allows the developer to customize the icon displayed next to a node. Set node.icon to the URL of the desired icon to display and it will be shown instead of the standard TreeGrid.nodeIcon for this node. Note that if TreeNode.showOpenIcon and/or TreeNode.showDropIcon is true for this node, customized icons for folder nodes will be appended with the TreeGrid.openIconSuffix or TreeGrid.dropIconSuffix suffixes on state change as with the standard TreeGrid.folderIcon for this treeGrid. Also note that for custom folder icons, the TreeGrid.closedIconSuffix will never be appended. You can change the name of this property by setting TreeGrid.customIconProperty.
		 * Flags: IRW, Group: treeIcons */
		icon?: string /* SCImgURL */; // Flags=IRW
		/** The title of the node as it should appear next to the node icon in the Tree. If left unset, the value of TreeNode.name is used by default. See the description in Tree.getTitle for full details. Note: the name of this property can be changed by setting Tree.titleProperty.
		 * Flags: IR */
		title?: string /* HTML */; // Flags=IR
		/** Governs whether dragged data (typically other treeNodes) may be dropped over this node. Only has an effect if this node is displayed in a TreeGrid where TreeGrid.canAcceptDroppedRecords, TreeGrid.canReorderRecords or TreeGrid.canReparentNodes is true.
		 * Flags: IRA */
		canAcceptDrop?: boolean; // Flags=IRA
		/** Default property name denoting whether this record is enabled. Property name may be modified for some grid via ListGrid.recordEnabledProperty.
		 * Flags: IR */
		enabled?: boolean; // Flags=IR
		/** Governs whether this node can be dragged. Only has an effect if this node is displayed in a TreeGrid where TreeGrid.canDragRecordsOut, TreeGrid.canReorderRecords or TreeGrid.canReparentNodes is true.
		 * Flags: IRA */
		canDrag?: boolean; // Flags=IRA
		/** For trees with modelType:"parent", this property specifies the unique ID of this node's parent node. The unique ID of a node, together with the unique ID of its parent is used by Tree.linkNodes to link a list of nodes into a tree. Note: the name of this property can be changed by setting Tree.parentIdField.
		 * Flags: IR */
		parentId?: string | number /* String or Number */; // Flags=IR
		/** Specifies the unique ID of this node. Required for trees with Tree.modelType "parent". With modelType:"parent", the unique ID of a node, together with the unique ID of its parent (see TreeNode.parentId) is used by Tree.linkNodes to link a list of nodes into a tree. Note: the name of this property can be changed by setting Tree.idField.
		 * Flags: IR */
		id?: string | number /* String or Number */; // Flags=IR
	}

	/**
	 * AdvancedCriteria is a format for representing search criteria which may include operators on field values such as "less than", or may include sub-clauses such as several criteria applied to fields joined by an "OR" operator. SmartClient DataSources can use AdvancedCriteria to search a list of Records, and the SmartClient Java Server can translate AdvancedCriteria to either SQL or Hibernate queries (Note: The server-side AdvancedCriteria handling feature is only available with the Power and Enterprise Editions of SmartClient; the Pro Edition is limited to ordinary criteria handling on the server side). If the entire dataset is cached locally, SmartClient can perform AdvancedCriteria filtering on the client, avoiding a server call. An AdvancedCriteria is an ordinary JavaScript object which can be created directly with JavaScript literal notation. For example: var advancedCriteria = { _constructor:"AdvancedCriteria", operator:"and", criteria:[ // this is a Criterion { fieldName:"salary", operator:"lessThan", value:80000 }, { operator:"or", criteria:[ { fieldName:"title", operator:"iContains", value:"Manager" }, { fieldName:"reports", operator:"notNull" } ] }, { fieldName:"startDate", operator:"greaterThan", value:new Date(1388552400000) } ] } This makes AdvancedCriteria very easy to store and retrieve as JSON strings, using JSON.encode','JSONEncoder. AdvancedCriteria can also be specified in componentXML','Component XML: &lt;AdvancedCriteria operator="and" _constructor="AdvancedCriteria"&gt; &lt;criteria&gt; &lt;Criterion fieldName="salary" operator="lessThan"&gt; &lt;value xsi:type="xsd:float"&gt;80000&lt;/value&gt; &lt;/Criterion&gt; &lt;Criterion operator="or"&gt; &lt;criteria&gt; &lt;Criterion fieldName="title" operator="iContains"&gt; &lt;value xsi:type="xsd:text"&gt;Manager&lt;/value&gt; &lt;/Criterion&gt; &lt;Criterion fieldName="reports" operator="notNull"/&gt; &lt;/criteria&gt; &lt;/Criterion&gt; &lt;Criterion fieldName="startDate" operator="greaterThan"&gt; &lt;value xsi:type="xsd:datetime"&gt;2014-01-01T05:00:00.000&lt;/value&gt; &lt;/Criterion&gt; &lt;/criteria&gt; &lt;/AdvancedCriteria&gt; An AdvancedCriteria is in effect a Criterion that has been marked with _constructor:"AdvancedCriteria" to mark it as complete criteria. In addition to directly creating an AdvancedCriteria object as described above, the DataSource.convertCriteria and DataSource.combineCriteria methods may be used to create and modify criteria based on simple fieldName / value mappings. When passed to the SmartClient Server, a server-side AdvancedCriteria instance (in the package com.isomorphic.criteria) can be retrieved from a DSRequest via com.isomorphic.datasource.DSRequest.getAdvancedCriteria(). These same AdvancedCriteria objects can be directly created server side, and applied to a DSRequest via setAdvancedCriteria(). RestDataSource, the recommended way of integration with servers that are not running the SmartClient Server Framework, defines a standard XML and JSON serialization of AdvancedCriteria. Date, DateTime and Time values use the same XML Schema representation used for other XML serialization like RestDataSource. Further details can be found at dateFormatAndStorage. It's a best practice for XML representation to have &lt;value&gt; as a subelement with xsi:type. Although most systems will auto-convert criteria explicitly setting type leaves the least room for error or ambiguity. For other servers, you can translate AdvancedCriteria into whatever format is expected by the server, typically by implementing DataSource.transformRequest. See criteriaEditing','Criteria Editing for information about editing AdvancedCriteria in a DynamicForm. When using the SmartClient Server, AdvancedCriteria created on the client and stored as JSON can be used directly by server code (without involvement of the browser and client-side system). Use the server-side API AdvancedCriteria.decodeClientCriteria() to obtain an AdvancedCriteria that can then be used with a server-created DSRequest object. Note that the client must be serialized by the JSONEncoder class, using JSONEncoder.dateFormat "logicalDateConstructor". 
	 */
	export interface AdvancedCriteria  extends Criterion {
		/** When set to true, causes filtering using this criteria object to follow SQL99 behavior for dealing with NULL values. See DataSource.strictSQLFiltering','this discussion for more detail.
		 * Flags: IRWA, Group: advancedFilter */
		strictSQLFiltering?: boolean /* Boolean */; // Flags=IRWA
	}

	/**
	 * An object representing one of the image segments displayed by a StretchImg. Each item of a StretchImg's StretchImg.items','items array is a StretchItem. 
	 */
	export interface StretchItem  {
		/** The height of the image. This can either be a number (for the number of pixels tall), the string "*" (remaining space, divided amongst all items that specify height:"*"), or the name of a property on the StretchImg component, such as "capSize" for the StretchImg's StretchImg.capSize','capSize. NOTE: The height is only used if the StretchImg stacks its images vertically (StretchImg.vertical is true).
		 * Flags: IR */
		height?: number | string /* number or String */; // Flags=IR
		/** The URL of the media file for this StretchItem.
		 * Flags: IR */
		src?: string /* SCImgURL */; // Flags=IR
		/** A string that is appended as a suffix to the StretchImg's StretchImg.src','src URL in order to fetch the media file for this StretchItem, if a separate StretchItem.src is not provided. Note that the special name "blank", possibly suffixed by one or more digits which are used to differentiate blank items, means no image will be shown for this StretchItem. For example, for a StretchImg in "Over" state with a StretchImg.src of "button.png" and a name of "stretch", the resulting URL would be "button_Over_stretch.png".
		 * Flags: IR */
		name?: string /* String */; // Flags=IR
		/** The width of the image. This can either be a number (for the number of pixels wide), the string "*" (remaining space, divided amongst all items that specify width:"*"), or the name of a property on the StretchImg component, such as "capSize" for the StretchImg's StretchImg.capSize','capSize. NOTE: The width is only used if the StretchImg stacks its images horizontally (StretchImg.vertical is false).
		 * Flags: IR */
		width?: number | string /* number or String */; // Flags=IR
	}

	/**
	 * An object literal with a particular set of properties used to configure the display of and interaction with the rows of a DetailViewer. 
	 */
	export interface DetailViewerField  {
		/** Height of image shown for fieldTypes image in this field. If set to a String, assumed to be a property on each record that specifies the image height. For example, if field.imageHeight is "logoHeight", record.logoHeight will control the height of the image.
		 * Flags: IRW, Group: imageColumns */
		imageHeight?: number | string /* Integer | String */; // Flags=IRW
		/** If displayField is defined for the field then the DetailViewer will display the displayField attribute of records instead of the attribute given by the DetailViewerField.name of the field.
		 * Flags: IR */
		displayField?: string /* String */; // Flags=IR
		/** Width of images shown for fieldTypes image in this field. If set to a String, assumed to be a property on each record that specifies the image width. For example, if field.imageWidth is "logoWidth", record.logoWidth will control the width of the image.
		 * Flags: IRW, Group: imageColumns */
		imageWidth?: number | string /* Integer | String */; // Flags=IRW
		/** A property list (or an expression that evaluates to a property list) specifying a mapping of internal values to display values for the field (row).
		 * Flags: IR */
		valueMap?: any /* object */; // Flags=IR
		/** The HTML to display for values of this field if the field type is set to "link". This property sets linkText that will be the same for all records. You can set linkText on a per-record basis via DetailViewerRecord.linkText.
		 * Flags: IRW */
		linkText?: string /* String */; // Flags=IRW
		/** By default, clicking a link rendered by this item opens it in a new browser window. You can alter this behavior by setting this property. The value of this property will be passed as the value to the target attribute of the anchor tag used to render the link. target is applicable only if the field type is set to "link".
		 * Flags: IRW */
		target?: string; // Flags=IRW
		/** If specified, cells in this field will be rendered using this css className rather than DetailViewer.cellStyle
		 * Flags: IRW */
		cellStyle?: string /* CSSStyleName */; // Flags=IRW
		/** Time-format to apply to date type values within this field. If specified, any dates displayed in this field will be formatted as times using the appropriate format. This is most commonly only applied to fields specified as type "time" though if no explicit DetailViewerField.dateFormatter is specified it will be respected for other fields as well. If unspecified, a timeFormatter may be defined DetailViewer.timeFormatter','at the component level and will be respected by fields of type "time".
		 * Flags: IRWA, Group: appearance */
		timeFormatter?: TimeDisplayFormat; // Flags=IRWA
		/** If specified, when generating print HTML for this detailViewer, cells in this field will be rendered using this css className rather than DetailViewer.printCellStyle
		 * Flags: IRW */
		printCellStyle?: string /* CSSStyleName */; // Flags=IRW
		/** By default HTML values in DetailViewer cells will be interpreted by the browser. Setting this flag to true will causes HTML characters to be escaped, meaning the raw value of the field (for example "&lt;b&gt;AAA&lt;/b&gt;") is displayed to the user rather than the interpreted HTML (for example "AAA")
		 * Flags: IR */
		escapeHTML?: boolean; // Flags=IR
		/** Dictates whether the data in this field be exported. Explicitly set this to false to prevent exporting. Has no effect if the underlying DataSourceField.canExport','dataSourceField is explicitly set to canExport: false.
		 * Flags: IR */
		canExport?: boolean /* Boolean */; // Flags=IR
		/** Display format to use for date type values within this field. The DetailViewerField.timeFormatter may also be used to format underlying Date values as times (omitting the date part entirely). If both dateFormatter and timeFormatter are specified on a field, for fields specified as DetailViewerField.type','type "time" the timeFormatter will be used, otherwise the dateFormatter If field.dateFormatter and field.timeFormatter is unspecified, date display format may be defined at the component level via DetailViewer.dateFormatter, or for fields of type "datetime" DetailViewer.datetimeFormatter. Otherwise the default is to use the system-wide default normal date format, configured via DateUtil.setNormalDisplayFormat. Specify any valid DateDisplayFormat to change the format used by this item.
		 * Flags: IRW */
		dateFormatter?: DateDisplayFormat; // Flags=IRW
		/** Indicates this field's values come from another, related DataSource. The individual field will inherit settings such as DetailViewerField.type','field.type and DetailViewerField.title','field.title from the related DataSource just like fields from the primary DataSource.
		 * Flags: IR */
		includeFrom?: string; // Flags=IR
		/** For DetailViewerField.type: "separator", this attribute specifies the height of the separator.
		 * Flags: IR */
		height?: number /* Number */; // Flags=IR
		/** Applies only to fields of type "float" and enforces a minimum number of digits shown after the decimal point. For example, a field value of 343.1, 343.104 and 343.09872677 would all be shown as 343.10 if decimalPad is 2. The original unpadded value is always shown when the value is edited.
		 * Flags: IRW, Group: appearance */
		decimalPad?: number; // Flags=IRW
		/** If this field has type set to "link", setting this property will apply a standard prefix to the link URL when displaying values of this field.
		 * Flags: IRWA */
		linkURLPrefix?: string; // Flags=IRWA
		/** Specifies the type of this DetailViewerField. By default (value is null) the field shows a field title on the left and the field value on the right. There are four special values for this attribute: "header" - If you specify type "header", the field spans both the field name and field value columns and contains text defined in the DetailViewerField.value attribute with the style specified by DetailViewer.headerStyle. You can use this field type as a titled separator. "separator" - If you specify type "separator", the field spans both the field name and the field value columns with no text, and is styled using the style specified via DetailViewer.separatorStyle. The height of the separator field can be controlled via DetailViewerField.height. "image" For viewing, a thumbnail image is rendered in the field. The URL of the image is the value of the field, and should be absolute. The size of the image is controlled by DetailViewerField.imageSize, DetailViewerField.imageWidth, DetailViewerField.imageHeight "link" For viewing, a clickable html link (using an HTML anchor tag: &lt;A&gt;) is rendered in the field. The target URL is the value of the field, which is also the default display value. You can override the display value by setting DetailViewerRecord.linkText or DetailViewerField.linkText. Clicking the link opens the URL in a new window by default. To change this behavior, you can set field.target, which works identically to the "target" attribute on an HTML anchor (&lt;A&gt;) tag. See DetailViewerField.target for more information. 
		 * Flags: IR */
		type?: string /* String */; // Flags=IR
		/** Default width and height of DetailViewer.hiliteIcons','hilite icons in this field. Takes precedence over hiliteIconWidth, hiliteIconHeight and hiliteIconSize specified at the component level. Can be overridden via DetailViewerField.hiliteIconWidth','hiliteIconWidth and DetailViewerField.hiliteIconHeight','hiliteIconHeight
		 * Flags: IRW, Group: hiliting */
		hiliteIconSize?: number; // Flags=IRW
		/** For a field of type:"imageFile", indicates whether to stream the image and display it inline or to display the View and Download icons.
		 * Flags: IR */
		showFileInline?: boolean; // Flags=IR
		/** Height for hilite icons for this field. Overrides DetailViewer.hiliteIconSize, DetailViewer.hiliteIconHeight, and DetailViewerField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting */
		hiliteIconHeight?: number; // Flags=IRW
		/** If this field has type set to "image" and the URL for the image displayed is not absolute, the path of the URL will be relative to this string
		 * Flags: IRWA, Group: imageColumns */
		imageURLPrefix?: string; // Flags=IRWA
		/** FormatString for numeric or date formatting. See DataSourceField.format.
		 * Flags: IR, Group: exportFormatting */
		format?: string /* FormatString */; // Flags=IR
		/** FormatString used during exports for numeric or date formatting. See DataSourceField.exportFormat.
		 * Flags: IR, Group: exportFormatting */
		exportFormat?: string /* FormatString */; // Flags=IR
		/** dataPath property allows this field to display detail from nested data structures
		 * Flags: IRA */
		dataPath?: string /* String */; // Flags=IRA
		/** If this field has type set to "link", setting this property will apply a standard suffix to the link URL when displaying values of this field.
		 * Flags: IRWA */
		linkURLSuffix?: string; // Flags=IRWA
		/** Width for hilite icons for this field. Overrides DetailViewer.hiliteIconSize, DetailViewer.hiliteIconWidth, and DetailViewerField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting */
		hiliteIconWidth?: number; // Flags=IRW
		/** Size of images shown for fieldTypes image in this field. If set to a String, assumed to be a property on each record that specifies the image height. For example, if field.imageSize is "logoSize", record.logoSize will control the size of the image.
		 * Flags: IRW, Group: imageColumns */
		imageSize?: number | string /* Integer | String */; // Flags=IRW
		/** Name property used to identify the field, and determines which attribute from records will be displayed in this field. Must be unique within the DetailViewer as well as a valid JavaScript identifier, as specified by ECMA-262 Section 7.6 (the String.isValidID function can be used to test whether a name is a valid JavaScript identifier). The attribute of the records to display in this field may also be set by DetailViewerField.displayField.
		 * Flags: IR */
		name?: string /* String */; // Flags=IR
		/** Determines whether this field can be hilited. Set to false to prevent this field from appearing in HiliteEditor.
		 * Flags: IRW, Group: hiliting */
		canHilite?: boolean; // Flags=IRW
		/** Name of the property in a DetailViewerRecord that holds the HTML to display for values of this field if the field type is set to "link".
		 * Flags: IRW */
		linkTextProperty?: string; // Flags=IRW
		/** When a field specifies its DetailViewerField.type to be "header", the value of this attribute specifies the header text.
		 * Flags: IR */
		value?: string /* HTMLString */; // Flags=IR
		/** The value to display for a cell whose value is null or the empty string after applying formatCellValue and valueMap (if any). This is the field-specific attribute. You may also set the emptyCellValue at the viewer level to define the emptyCellValue for all empty fields in the viewer.
		 * Flags: IR, Group: appearance */
		emptyCellValue?: string /* HTMLString */; // Flags=IR
		/** The title of the field as displayed on the left-hand side. If left unspecified, the title of the field is derived by looking up the value of DetailViewer.fieldIdProperty on this field. So, by default, the title of a field is the value of its "name" property.
		 * Flags: IR */
		title?: string /* HTMLString */; // Flags=IR
		/** Applies only to fields of type "float" and affects how many significant digits are shown. For example, with decimalPrecision 3, if the field value is 343.672677, 343.673 is shown. If the value is 125.2, 125.2 is shown - decimalPrecision will not cause extra zeros to be added. Use DataSourceField.decimalPad for this. A number is always shown with its original precision when edited.
		 * Flags: IRW, Group: appearance */
		decimalPrecision?: number; // Flags=IRW
		/** Dictates whether the data in this field should be exported raw by DetailViewer.exportClientData','exportClientData(). If set to true for a field, the values in the field-formatters will not be executed for data in this field.
		 * Flags: IR */
		exportRawValues?: boolean /* Boolean */; // Flags=IR
		/** When DetailViewer.hiliteIcons are present, where the hilite icon will be placed relative to the field value. See HiliteIconPosition. Overrides DetailViewer.hiliteIconPosition
		 * Flags: IR, Group: hiliting */
		hiliteIconPosition?: HiliteIconPosition; // Flags=IR
		/** How much padding should there be on the left of DetailViewer.hiliteIcons','hilite icons for this field? Overrides DetailViewer.hiliteIconLeftPadding
		 * Flags: IRW, Group: hiliting */
		hiliteIconLeftPadding?: number; // Flags=IRW
		/** How much padding should there be on the right of DetailViewer.hiliteIcons','hilite icons for this field? Overrides DetailViewer.hiliteIconRightPadding
		 * Flags: IRW, Group: hiliting */
		hiliteIconRightPadding?: number; // Flags=IRW
	}

	/**
	 *  Tabs are specified as objects, not class instances. For example, when developing in JavaScript, a typical initialization block for a TabSet would look like this: TabSet.create({ tabs: [ {title: "tab1", pane: "pane1"}, {title: "tab2"} ] }); And in XML: &lt;TabSet&gt; &lt;tabs&gt; &lt;Tab title="tab1" pane="pane1"/&gt; &lt;Tab title="tab2"/&gt; &lt;/tabs&gt; &lt;/TabSet&gt;  
	 */
	export interface Tab  {
		/** Specifies the pane associated with this tab. You have two options for the value of the pane attribute: ID - The global ID of an already created Canvas (or subclass). Canvas - A live instance of a Canvas (or subclass). You can change the pane associated with a given tab after the TabSet has been created by calling TabSet.updateTab.
		 * Flags: IRW */
		pane?: string | Canvas /* ID or Canvas */; // Flags=IRW
		/** Specifies the prompt to be displayed when the mouse hovers over the tab.
		 * Flags: IRW */
		prompt?: string /* HTMLString */; // Flags=IRW
		/** If specified, this tab will initially be rendered in a disabled state. To enable or disable tabs on the fly use the TabSet.enableTab, and TabSet.disableTab methods.
		 * Flags: IRW */
		disabled?: boolean; // Flags=IRW
		/** If specified, this tab will show an icon next to the tab title. NOTE: if you enable TabSet.canCloseTabs','closeable tabs, tab.icon is used for the close icon. TabSet.canCloseTabs describes a workaround to enable both a closeIcon and a second icon to be shown. Use TabSet.tabIconClick to add an event handler specifically for clicks on the icon. If a tab Tab.disabled','becomes disabled, a different icon will be loaded by adding a suffix to the image name (see Button.icon). You should specify a size for the icon via Tab.iconSize or Tab.iconWidth and Tab.iconHeight. Without an explicitly specified size, tabs may be drawn overlapping or with gaps the first time a page is loaded, because the icon is not cached and therefore its size isn't known.
		 * Flags: IRW */
		icon?: string /* SCImgURL */; // Flags=IRW
		/** Determines whether this tab should show a close icon allowing the user to dismiss the tab by clicking on the close icon directly. The URL for the close icon's image will be derived from TabSet.closeTabIcon by default, but may be overridden by explicitly specifying Tab.closeIcon. If unset or null, this property is derived from TabSet.canCloseTabs. Note that setting canClose means that Tab.icon cannot be used, because it's used for the Tab.closeIcon','closeIcon - see TabSet.canCloseTabs for a workaround. After the TabSet has been created, you can change a tab's canClose property by calling TabSet.setCanCloseTab.
		 * Flags: IRW */
		canClose?: boolean; // Flags=IRW
		/** If Tab.icon is specified, this property may be used to specify a size for the icon. Per side sizing may be specified instead via Tab.iconWidth and Tab.iconHeight.
		 * Flags: IRW */
		iconSize?: number /* integer */; // Flags=IRW
		/** Space to leave around the pane within this Tab. If specified, this property takes precedence over TabSet.paneMargin
		 * Flags: IR */
		paneMargin?: number /* int */; // Flags=IR
		/** Optional ID for the tab, which can later be used to reference the tab. APIs requiring a reference to a tab will accept the tab's ID [including TabSet.selectTab, TabSet.updateTab, TabSet.removeTab]. The ID will also be passed to the TabSet.tabSelected and TabSet.tabDeselected handler functions, if specified. Note that if you provide an ID, it must be globally unique. If you do not want a globally unique identifier, set Tab.name instead.
		 * Flags: IRW */
		ID?: string /* identifier */; // Flags=IRW
		/** If Tab.icon is specified, this property may be used to specify a size for the icon
		 * Flags: IRW */
		iconHeight?: number /* integer */; // Flags=IRW
		/** If Tab.icon is specified, this property may be used to specify a size for the icon
		 * Flags: IRW */
		iconWidth?: number /* integer */; // Flags=IRW
		/** If TabSet.showTabPicker is true for this TabSet, if set this property will determine the title of the picker menu item for this tab. If unset, Tab.title will be used instead
		 * Flags: IRW, Group: tabBarControls */
		pickerTitle?: string /* HTMLString */; // Flags=IRW
		/** If specified, overrides the TabSet.canEditTabTitles setting, for this one tab only. Note that the TabSet's TabSet.titleEditEvent','titleEditEvent must be set to a supported TabTitleEditEvent in order for users to be able to edit this tab's title.
		 * Flags: IRW */
		canEditTitle?: boolean; // Flags=IRW
		/** Optional name for the tab, which can later be used to reference the tab. APIs requiring a reference to a tab will accept the tab's name [including TabSet.selectTab, TabSet.updateTab, TabSet.removeTab]. This name will also be passed to the TabSet.tabSelected and TabSet.tabDeselected handler functions, if specified. This identifier is requred to be locally unique to the TabSet and cannot be used to get a global reference to the Tab. If you want a global reference, set Tab.ID instead.
		 * Flags: IRW */
		name?: string /* identifier */; // Flags=IRW
		/** If TabSet.canReorderTabs is set to true, setting canReorder explicitly to false for some tab will disallow drag-reordering of this tab. Has no effect if canReorderTabs is not true at the tabSet level. Note that this setting also disallows a reorder of another tab into the slot before or following this tab. This means for tabs located at the beginning or end of the tab-bar, users cannot changing the index of the tab by dropping another before or after it. However if you have a canReorder:false tab which is not at the beginning or end of the tab bar, users can drag reorder other tabs around it which may ultimately change its position.
		 * Flags: IR */
		canReorder?: boolean /* Boolean */; // Flags=IR
		/** Specifies the title of the this tab. To change the title after the TabSet has been created, call TabSet.setTabTitle.
		 * Flags: IRW */
		title?: string /* HTMLString */; // Flags=IRW
		/** Size of the Tab.closeIcon for this tab. If unspecified the icon will be sized according to TabSet.closeTabIconSize
		 * Flags: IRW */
		closeIconSize?: number; // Flags=IRW
		/** Custom src for the close icon for this tab to display if it is closeable. See Tab.canClose and TabSet.canCloseTabs.
		 * Flags: IRW */
		closeIcon?: string /* SCImgURL */; // Flags=IRW
		/** You can specify an explicit width for the tab using this property. Note that tabs automatically size to make room for the full title, but if you want to e.g. specify a uniform width for all tabs in a TabSet, this property enables you to do so.
		 * Flags: IRW */
		width?: number; // Flags=IRW
		/** Criteria to be evaluated to determine whether this Tab should be enabled. Re-evaluated whenever data in the Canvas.ruleScope','tab.ruleScope changes. It works the same as Canvas.enableWhen
		 * Flags: IR, Group: ruleCriteria */
		enableWhen?: AdvancedCriteria; // Flags=IR
	}

	/**
	 * An object representing a user-created and user-modifiable summary, which can be created and edited with a SummaryBuilder either directly or via the ListGrid.canAddSummaryFields behavior. 
	 */
	export interface UserSummary  {
		/** Summary to be evaluated. There are two contexts where a UserSummary is used: ListGridField.userSummary and FormItem.textFormula or ListGridField.editorTextFormula. For the grid field summary all variables used by the summary must be all-capital letter names surrounded by braces and escaped with a # sign (eg #{A}). These are derived from field values for the record in question - see UserSummary.summaryVars. In the second usage context variables are dot-separated (.) names representing the nested hierarchy path to the desired value within the Canvas.ruleScope','rule context. No mapping with UserSummary.summaryVars is needed.
		 * Flags: IRW */
		text?: string /* String */; // Flags=IRW
		/** Map from the all-capital letter names used as summary variables in the UserSummary String to the fieldNames these variables should represent in the context where the summary is evaluated. When used in ListGridField.userSummary context, field names are evaluated against the grid record. When used in FormItem.textFormula or ListGridField.editorTextFormula this property is not used for summary mapping. Instead, field names are evaluated directly against the current Canvas.ruleScope','rule context.
		 * Flags: IR */
		summaryVars?: any /* Map */; // Flags=IR
	}

	/**
	 * An object representing a component which the user may create dynamically within an application. A PaletteNode expresses visual properties for how the palette will display it (eg PaletteNode.title','title, PaletteNode.icon','icon) as well as instructions for creating the component the paletteNode represents (PaletteNode.type, PaletteNode.defaults). Various types of palettes (ListPalette, TreePalette, MenuPalette, TilePalette) render a PaletteNode in different ways, and allow the user to trigger creation in different ways (eg drag and drop, or just click). All share a common pattern for how components are created from palettes. Note that in a TreePalette, a PaletteNode is essentially a TreeNode and can have properties expected for a TreeNode (eg, TreeGrid.customIconDropProperty','showDropIcon). Likewise a PaletteNode in a MenuPalette can have the properties of a MenuItem, such as MenuItem.enableIf. 
	 */
	export interface PaletteNode  {
		/** Properties to be applied to the EditNode','editNode when created.
		 * Flags: IR */
		editNodeProperties?: EditNode /* EditNode Properties */; // Flags=IR
		/** Icon for this paletteNode.
		 * Flags: IR */
		icon?: string /* SCImgURL */; // Flags=IR
		/** Prefix used to create unique component ID. If not specified, PaletteNode.type is used.
		 * Flags: IR */
		idPrefix?: string /* String */; // Flags=IR
		/** Defaults for the component to be created from this palette. For example, if PaletteNode.type is "ListGrid", properties valid to pass to Class.create','ListGrid.create(). Note that event handlers or method overrides cannot be configured as defaults, as they cannot be serialized or restored. Instead, create a subclass that implements the desired behaviors, and use that subclass as PaletteNode.type. 
		 * Flags: IR */
		defaults?: Properties; // Flags=IR
		/** Properties to be applied to the PaletteNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * Flags: IR */
		editProxyProperties?: EditProxyProps /* EditProxy Properties */; // Flags=IR
		/** For a paletteNode which should be a "singleton", that is, always provides the exact same object (==) rather than a dynamically created copy, provide the singleton object as liveObject. Instead of dynamically creating an object from defaults, the liveObject will simply be assigned to EditNode.liveObject for the created editNode.
		 * Flags: IR */
		liveObject?: any /* Object */; // Flags=IR
		/** SCClassName this paletteNode creates, for example, "ListGrid".
		 * Flags: IR */
		type?: string /* SCClassName */; // Flags=IR
		/** Textual title for this paletteNode.
		 * Flags: IR */
		title?: string /* String */; // Flags=IR
		/** If set to false, indicates that this node cannot be EditProxy.useCopyPasteShortcuts','copy &amp; pasted, including disallowing calls to EditContext.makePaletteNode for EditNode','EditNodes created from this PaletteNode','PaletteNode.
		 * Flags: IR */
		canDuplicate?: boolean /* Boolean */; // Flags=IR
	}

	/**
	 * Form item icon descriptor objects used by Form Items to specify the appearance and behavior of icons displayed after the item in the page flow. 
	 */
	export interface FormItemIcon  {
		/** TabIndex for this formItemIcon. Set to -1 to remove the icon from the tab order, but be cautious doing so: if the icon triggers important application functionality that cannot otherwise be accessed via the keyboard, it would be a violation of accessibility standard to remove the icon from the tab order. Any usage other than setting to -1 is extremely advanced in the same way as using FormItem.globalTabIndex.
		 * Flags: IRA, Group: formIcons */
		tabIndex?: number /* int */; // Flags=IRA
		/** If icon.neverDisable is true, when this form item is disabled, the icon will remain enabled. Note that disabling the entire form will disable all items, together with their icons including those marked as neverDisable - this property only has an effect if the form is enabled and a specific item is disabled within it. If this property is true, the icons will also remain enabled if a form item is marked as FormItem.canEdit','canEdit:false. For finer grained control over whether icons are enabled for read-only icons see FormItem.disableIconsOnReadOnly and FormItemIcon.disableOnReadOnly
		 * Flags: IRWA, Group: formIcons */
		neverDisable?: boolean; // Flags=IRWA
		/** If FormItemIcon.showOver or FormItem.showOverIcons is true, this property may be set to customize when the 'over' styling is applied to the item. If unset, rollover styling will be applied when the user is over the icon only.
		 * Flags: IRWA, Group: formIcons */
		showOverWhen?: IconOverTrigger; // Flags=IRWA
		/** If set, this property will be displayed as a prompt (and tooltip text) for this form item icon. If unset the form item's iconPrompt property will be used instead.
		 * Flags: IRWA, Group: formIcons */
		prompt?: string /* HTMLString */; // Flags=IRWA
		/** If set, this property determines the number of pixels space to be displayed on the left of this form item icon, or for FormItemIcon.inline','inline icons whose FormItemIcon.inlineIconAlign','inlineIconAlign is "left", on the right of this form item icon. Must be non-negative. If unset, the form item's FormItem.iconHSpace','iconHSpace will be used instead.
		 * Flags: IR, Group: formIcons */
		hspace?: number /* Integer */; // Flags=IR
		/** Criteria to be evaluated to determine whether this icon should appear enabled. Criteria are evaluated against the DynamicForm.getValues','form\'s current values as well as the current Canvas.ruleScope','rule context. Criteria are re-evaluated every time form values or the rule context changes, whether by end user action or by programmatic calls. A basic criteria uses textMatchStyle:"exact". When specified in componentXML','Component XML this property allows xmlCriteriaShorthand','shorthand formats for defining criteria. Note: A FormItemIcon using enableWhen must have a FormItem.name','name defined on its FormItem.
		 * Flags: IR, Group: ruleCriteria */
		enableWhen?: AdvancedCriteria; // Flags=IR
		/** Horizontal alignment for icons marked FormItemIcon.inline','inline. By default, the first icon that specifies inline is aligned left, and the second and all subsequent icons to the right. "center" alignment is invalid and will be ignored. In RTL mode, the alignment is automatically mirrored; inlineIconAlign:"left" results in the icon being placed on the right and inlineIconAlign:"right" results in the icon being placed on the left.
		 * Flags: IR */
		inlineIconAlign?: Alignment; // Flags=IR
		/** As an alternative to displaying an image, an FormItemIcon.inline','inline FormItemIcon can display a string of HTML where the icon's image would have appeared. This enables advanced customizations such as using text, icon font symbols, Unicode dingbats and emoji, and/or SVG in place of an image. Setting an inline icon's text property will cause the HTML to be used instead of an image, as long as the browser and form item support inline icons. This property only has an effect on inline icons. If the inline property is false, or the browser or form item does not support inline icons, then the image specified by FormItemIcon.src (or the form item's FormItem.defaultIconSrc','defaultIconSrc) will be used. Typically, the HTML is styled via FormItemIcon.baseStyle. Auto-sizing of the HTML is not supported; the HTML will be clipped to the icon's FormItemIcon.width','width and FormItemIcon.height','height.
		 * Flags: IRWA, Group: formIcons */
		text?: string /* HTMLString */; // Flags=IRWA
		/** If set, this property determines the width of this icon in px. If unset the form item's iconWidth property will be used instead.
		 * Flags: IRW, Group: formIcons */
		width?: number; // Flags=IRW
		/** Whether this icon is disabled. Can be updated at runtime via the FormItem.setIconDisabled method. Note that if the formItem containing this icon is disabled, the icon will behave in a disabled manner regardless of the setting of the icon.disabled property.
		 * Flags: IRW, Group: appearance */
		disabled?: boolean /* Boolean */; // Flags=IRW
		/** When set, this icon is rendered inside the FormItem.textBoxStyle','textBox area of the FormItem (where input occurs in a TextItem or ComboBoxItem) as opposed to as a trailing icon. Use FormItemIcon.inlineIconAlign','inlineIconAlign to control alignment of the icon. Multiple icons can be inlined on both the left and right side of the textBox area. FormItemIcon.hspace','hspace is honored for spacing between multiple adjacent icons. Inline icons are not supported in Internet Explorer 6, or when the FormItem is not a TextItem or ComboBoxItem. When unsupported, the icon will fall back to non-inline mode. The FormItem.showPickerIcon','picker icon, if any, cannot be inlined. As an alternative to displaying an image, an inline icon may display a string of HTML instead. See FormItemIcon.text.
		 * Flags: IR */
		inline?: boolean /* Boolean */; // Flags=IR
		/** If set, this property determines the height of this icon in px. If unset the form item's iconHeight property will be used instead.
		 * Flags: IRW, Group: formIcons */
		height?: number; // Flags=IRW
		/** Base CSS style. If set, as the component changes state and/or is focused, suffixes will be added to the base style. Possible suffixes include "Over" if the user mouses over the icon and FormItemIcon.showOver','this.showOver is true, "Disabled" if the icon is disabled, and "Focused". In addition, if FormItemIcon.showRTL','showRTL is enabled, then an "RTL" suffix will be added.
		 * Flags: IRWA */
		baseStyle?: string /* CSSStyleName */; // Flags=IRWA
		/** For PickList items with PickListItemIconPlacement set such that the pickList does not render near-origin, should this icon be rendered inline within the formItem itself, or within the ComboBoxItem.pickerNavigationBar. If not explicitly specified at the icon level, this will be picked up from PickList.iconPlacement. For mobile browsing with limited available screen space, icons rendered in the navigation bar may be easier for the user to interact with.
		 * Flags: IR */
		iconPlacement?: PickListItemIconPlacement; // Flags=IR
		/** Show this icon when its item gets focus, and hide it when it loses focus. If non-null, overrides the default behavior specified by FormItem.showIconsOnFocus or FormItem.showPickerIconOnFocus, as appropriate. This feature allows space to be saved in the form for items not being interacted with, and helps draw attention to the item currently in focus.
		 * Flags: IRWA, Group: formIcons */
		showOnFocus?: boolean /* Boolean */; // Flags=IRWA
		/** Should this icon's FormItemIcon.src','src and/or FormItemIcon.baseStyle','baseStyle switch to the appropriate RTL value when the FormItem is in RTL mode? If true, then the image URL for all states will have "_rtl" added before the extension. Also, if baseStyle is set, all style names will have an "RTL" suffix. This should only be enabled if RTL media is available. For example, if an icon's src is "[SKINIMG]formItemIcons/myFormIcon.png" and the baseStyle is "myFormIcon", then in the "Down" state, SmartClient will use "[SKINIMG]formItemIcons/myFormIcon_Down_rtl.png" for the image source and "myFormIconDownRTL" for the style name.
		 * Flags: IRA, Group: RTL */
		showRTL?: boolean /* Boolean */; // Flags=IRA
		/** If FormItem.canEdit is set to false, should this icon be disabled. If unset this is determined by FormItem.disableIconsOnReadOnly. Note that if FormItemIcon.neverDisable is set to true, the icons will be rendered enabled regardless of this setting and whether the item is editable.
		 * Flags: IRWA, Group: formIcons */
		disableOnReadOnly?: boolean; // Flags=IRWA
		/** If this icon will be updated to show focus (see FormItemIcon.showFocused, FormItem.showFocusedIcons), this property governs whether the focused state should be shown when the item as a whole receives focus or just if the icon receives focus. If this property is unset, default behavior is to show focused state when the item receives focus.
		 * Flags: IRWA, Group: formIcons */
		showFocusedWithItem?: boolean; // Flags=IRWA
		/** If set, this property determines this icon's image source. If unset the form item's defaultIconSrc property will be used instead. As with defaultIconSrc this URL will be modified by adding "_Over" or "_Disabled" if appropriate to show the icon's over or disabled state. If FormItemIcon.showRTL','showRTL is enabled, then "_rtl" will be added to the source URL before the extension. The special value "blank" means that no image will be shown for this icon. This is particularly useful together with FormItemIcon.baseStyle to implement spriting of the different icon states. For an FormItemIcon.inline','inline FormItemIcon, FormItemIcon.text','text may be specified to show a string of HTML instead of an image.
		 * Flags: IRW, Group: formIcons */
		src?: string /* SCImgURL */; // Flags=IRW
		/** Identifier for this form item icon. This identifier (if set) should be unique within this form item and may be used to get a pointer to the icon object via FormItem.getIcon.
		 * Flags: IR */
		name?: string /* identifier */; // Flags=IR
		/** If show-on-focus behavior is enabled for this icon via FormItemIcon.showOnFocus or related properties at the item level, and this icon is marked as disabled, should it be shown on focus? If unset, will be derived from the FormItem.showDisabledIconsOnFocus or FormItem.showDisabledPickerIconOnFocus settings.
		 * Flags: IRWA, Group: formIcons */
		showDisabledOnFocus?: boolean /* Boolean */; // Flags=IRWA
		/** Should this icon's image and/or FormItemIcon.baseStyle','baseStyle switch to the appropriate "Over" value when the user rolls over or focuses on the icon? Note if FormItem.showOver is true and FormItemIcon.showOverWhen is set to "textBox", this icon will show over state when the user rolls over the text box (or control table, if visible) for the item. This is most commonly used for FormItemIcon.inline','inline icons.
		 * Flags: IRWA, Group: formIcons */
		showOver?: boolean; // Flags=IRWA
		/** Should this icon's image and/or FormItemIcon.baseStyle','baseStyle switch to the appropriate "Focused" value when the user puts focus on the form item or icon?
		 * Flags: IRWA, Group: formIcons */
		showFocused?: boolean /* Boolean */; // Flags=IRWA
		/** Criteria to be evaluated to determine whether this icon should be visible. Criteria are evaluated against the DynamicForm.getValues','form\'s current values as well as the current Canvas.ruleScope','rule context. Criteria are re-evaluated every time form values or the rule context changes, whether by end user action or by programmatic calls. A basic criteria uses textMatchStyle:"exact". When specified in componentXML','Component XML this property allows xmlCriteriaShorthand','shorthand formats for defining criteria. Note: A FormItemIcon using visibleWhen must have a FormItem.name','name defined on its FormItem.
		 * Flags: IR, Group: ruleCriteria */
		visibleWhen?: AdvancedCriteria; // Flags=IR
	}

	/**
	 * A DetailViewerRecord is an object literal with properties that define the values for the various fields of a DetailViewer. For example a DetailViewer that defines the following fields: fields : [ {name: "field1"}, {name: "field2"} ], Might have the following data: data : [ {field1: "foo", field2: "bar"}, {field1: "field1 value", field2: "field2 value"} ] Each element in the data array above is an instance of DetailViewerRecord - notice that these are specified simply as object literals with properties. 
	 */
	export interface DetailViewerRecord  {
		/** The HTML to display in this record for fields with type set to "link". This overrides DetailViewerField.linkText.
		 * Flags: IRW */
		linkText?: string; // Flags=IRW
	}


}