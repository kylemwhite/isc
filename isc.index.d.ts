/// <reference path="isc.classes.d.ts" />
/// <reference path="isc.interfaces.d.ts" />
/// <reference path="isc.objects.d.ts" />
/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped
// Generated: 5/10/2017 12:41:26 PM by kwhite
// Generated from SmartClient version SNAPSHOT_v11.1d_2017-05-09

/**
 * Generic extensions to JavaScript Arrays. You can call these on any Array.
 * JavaScript's native Array is retrofitted to support the List API (not implemented yet).
 */
interface ArrayConstructor {

    isLoading(value: any): boolean;
    compareAscending(first: any, second: any): number;
    compareDescending(first: any, second: any): number;

} // Array

declare namespace Isc {

    export interface iscStatic {
        
                                                 /* EXAMPLE */
                                                 // =====================================================
        version: string;                         // "SNAPSHOT_v11.1d_2017-04-18/LGPL Development Only"
        versionNumber: string;                   // "SNAPSHOT_v11.1d_2017-04-18"
        buildDate: string;                       // "2017-04-18"
        expirationDate: string;                  // ""

        scVersion: string;                       // "11.1d"
        scVersionNumber: string;                 // "11.1"
        sgwtVersion: string;                     // "6.1d"
        sgwtVersionNumber: string;               // "6.1"
                                                                                                 
        scParityStableVersionNumber: string;     // "11.0"
        sgwtParityStableVersionNumber: string;   // "6.0"
                                                 
        //license template data                  
        licenseType: string;                     // "LGPL"
        licenseCompany: string;                  // "Isomorphic Software"
        licenseSerialNumber: string;             // "ISC_LGPL_NIGHTLY"
        licensingPage: string;                   // "http://smartclient.com/product/"

        
		 // Static class declarations 


		/** 
		 * BaseWidget extends Class
		 * Base class for Canvas and DrawItem.
		 */ 
		BaseWidget: BaseWidgetStatic<BaseWidget, BaseWidgetProps>;

		/** 
		 * BlurbItem extends FormItem
		 * FormItem intended for inserting blurbs of instructional HTML into DynamicForms. Set the defaultValue of this item to the HTML you want to embed in the form.
		 */ 
		BlurbItem: BlurbItemStatic<BlurbItem, BlurbItemProps>;

		/** 
		 * Button extends StatefulCanvas
		 * The Button widget class implements interactive, style-based button widgets.
		 */ 
		Button: ButtonStatic<Button, ButtonProps>;

		/** 
		 * Canvas extends BaseWidget
		 * Base class for all SmartClient visual components (except FormItem','FormItems). Canvas provides: basic visual lifecycle support - creation and destruction of HTML via Canvas.draw','draw() and Canvas.clear','clear(), visibility via Canvas.show','show() and Canvas.hide','hide(), z-layering via Canvas.bringToFront','bringToFront() and Canvas.sendToBack','sendToBack(). consistent cross-browser Canvas.moveTo','positioning, Canvas.resizeTo','sizing and Canvas.getScrollHeight','size detection, with automatic compensation for CSSStyleName','browser CSS behavior differences. clipping, scrolling and overflow management of content via Canvas.overflow consistent cross-browser Canvas.keyPress','key and Canvas.mouseDown','mouse events, including mobileDevelopment','mapping touch events to mouse events built-in drag and drop capabilities including Canvas.canDragReposition','moving, Canvas.canDragResize','resizing, Canvas.canDragScroll','drag scrolling and Canvas.snapToGrid','snap-to-grid behavior. the ability to either contain Canvas.contents','HTML content or Canvas.children','contain other Canvases, including Canvas.snapTo','an edge-based positioning and Canvas.percentSource','percent sizing system for children. For more advanced layout capabilities, see Layout. various other details like Canvas.cursor','cursors, Canvas.showClickMask','modal masking, Canvas.animateMove','animation, Canvas.ariaRole','accessibility properties, and Canvas.locateChildrenBy','settings for automatedTesting','automated testing. 
		 */ 
		Canvas: CanvasStatic<Canvas, CanvasProps>;

		/** 
		 * The Class object is root of the Isomorphic SmartClient inheritance tree -- it includes functionality for creating instances, adding methods and properties, getting prototypes, etc. To add functionality to ALL classes, add them to Class. To create a Class, call ClassFactory.defineClass("MyClass", "MySuperClass") defineClass will return the created class, and make it available as isc.MyClass, and as the global variable MyClass if not in isc','portal mode. You can then: add class-level (static) properties and methods to the class: MyClass.addClassProperties() these methods and properties are accessed through the Class variable itself, eg: MyClass.someStaticMethod() or MyClass.someStaticProperty add default instance properties and methods to the class: MyClass.addProperties() these methods and properties are accessed through a class instance, eg: var myInstance = MyClass.create(); myInstance.someInstanceMethod() create new instances of this class: var myInstance = MyClass.create() NOTE: as a convention, all class names begin with a capital letter and all instances begin with a lower case letter.
		 */ 
		Class: ClassStatic<Class, ClassProps>;

		/** 
		 * DataSource extends Class
		 * A DataSource is data-provider-independent description of a set of objects that will be loaded, edited and saved within the user interface of your application. Each DataSource consists of a list of DataSource.fields','fields that make up a DataSource record, along with DataSourceField.type','field types, DataSourceField.validators','validation rules, DataSourceField.foreignKey','relationships to other DataSources, and other metadata. The abstract object description provided by a DataSource is easily mapped to a variety of backend object models and storage schemes. The following table shows analogous terminology across systems. <table border=1 class="normal"> <tr> <td>Isomorphic SmartClient</td> <td>Relational Database</td> <td>Enterprise Java Beans (EJB)</td> <td>Entity/Relationship Modeling</td> <td>OO/UML</td> <td>XML Schema/WSDL</td> <td>LDAP</td> </tr><tr> <td>DataSource</td> <td>Table</td> <td>EJB class</td> <td>Entity</td> <td>Class</td> <td>Element Schema (ComplexType)</td> <td>Objectclass</td> </tr><tr> <td>Record</td> <td>Row</td> <td>EJB instance</td> <td>Entity instance</td> <td>Class instance/Object</td> <td>Element instance (ComplexType)</td> <td>Entry</td> </tr><tr> <td>Field</td> <td>Column</td> <td>Property</td> <td>Attribute</td> <td>Property/Attribute</td> <td>Attribute or Element (SimpleType)</td> <td>Attribute</td> </tr></table> DataSources can be dataSourceDeclaration','declared in either JavaScript or XML format, and can also be metadataImport','imported from existing metadata formats, including XML Schema. Data Binding is the process by which DataBoundComponent','Data Binding-capable UI components can automatically configure themselves for viewing, editing and saving data described by DataSources. DataBinding is covered in the ${isc.DocUtils.linkForDocNode('QuickStartGuide', 'QuickStart Guide')}, Chapter 6, Data Binding. clientServerIntegration','Data Integration is the process by which a DataSource can be connected to server systems such as SQL DataBases, Java Object models, WSDL web services and other data providers. Data Integration comes in two variants: client-side and server-side. serverDataIntegration','Server-side integration uses the SmartClient Java-based server to connect to data represented by Java Objects or JDBC-accessible databases. clientDataIntegration','Client-side integration connects SmartClient DataSources to XML, JSON or other formats accessible via HTTP. DataSources have a concept of dataSourceOperations','4 core operations ("fetch", "add", "update" and "remove") that can be performed on the set of objects represented by a DataSource. Once a DataSource has been integrated with your data store, databinding-capable UI components can leverage the 4 core DataSource operations to provide many complete user interactions without the need to configure how each individual component loads and saves data. These interactions include ListGrid','grid views, TreeGrid','tree views, DetailViewer','detail views, DynamicForm','form-based DynamicForm.editRecord','editing and DynamicForm.saveData','saving, grid-based ListGrid.canEdit','editing and ListGrid.saveByCell','saving, and custom interactions provided by patternReuse custom databinding-capable components.
		 */ 
		DataSource: DataSourceStatic<DataSource, DataSourceProps>;

		/** 
		 * Extensions to the Date class, including added static methods on the Date object, and additional instance methods available on all date instances.
		 */ 
		Date: DateStatic<Date, DateProps>;

		/** 
		 * Static singleton class containing APIs for interacting with Dates.
		 */ 
		DateUtil: DateUtilStatic<DateUtil, DateUtilProps>;

		/** 
		 * DetailViewer extends Canvas
		 * Displays one or more records "horizontally" with one property per line.
		 */ 
		DetailViewer: DetailViewerStatic<DetailViewer, DetailViewerProps>;

		/** 
		 * Dialog extends Window
		 * Dialogs are a specialized version of Window used for small windows that contain just a text message or a text mesage with some standard buttons. Many typical modal dialogs such as alerts and confirmations are built into the system with convenience APIs - see isc.say, isc.warn and isc.askForValue. Dialogs can be modal or non-modal according to Window.isModal','isModal. NOTE: If you are building a dialog that will involve more than just buttons and a message, consider starting from the Window class instead, where arbitrary components can be added to the body area via Window.addItem. This is an example of creating a custom dialog: isc.Dialog.create({ message : "Please choose whether to proceed", icon:"[SKIN]ask.png", buttons : [ isc.Button.create({ title:"OK" }), isc.Button.create({ title:"Cancel" }) ], buttonClick : function (button, index) { this.hide(); } }); 
		 */ 
		Dialog: DialogStatic<Dialog, DialogProps>;

		/** 
		 * DSRequest extends RPCRequest
		 * Request sent to the server to initiate a dataSourceOperations','DataSource operation. All properties which are legal on RPCRequest are legal, in addition to the properties listed here.
		 */ 
		DSRequest: DSRequestStatic<DSRequest, DSRequestProps>;

		/** 
		 * DynamicForm extends Canvas
		 * The DynamicForm manages a collection of FormItems which represent user input controls. The DynamicForm provides formLayout','layout, value management, validation and databinding for the controls it manages. To create a DynamicForm, set DynamicForm.fields to an Array of Objects describing the FormItems you want to use. For example: isc.DynamicForm.create({ fields:[ {name:"userName", type:"text"}, // creates a TextItem {name:"usState", type:"select"} // creates a SelectItem ] }) The item name is an identifier for the item that must be unique just within this form. It is used: as the name under which the item's value is stored in the form (the form's current values are accessible as DynamicForm.getValues','form.getValues() when retrieving the FormItem's current value (via DynamicForm.getValue','form.getValue()) to retrieve the item itself via DynamicForm.getItem','form.getItem() FormItems can also be created by binding the form to a DataSource via setDataSource(). In this case, FormItems are chosen based on the data type of the field - see FormItemType. You can override the automatically chosen FormItem via DataSourceField.editorType. When using DataSource binding, you can also add additional FormItems not specified in the DataSource, or override any properties on the automatically generated FormItems, without having to re-declare any information that comes from the DataSource. See the QuickStart Guide chapter on Data Binding for an overview. All FormItems share a common set of properties for controlling formLayout','form\n layout. Other properties common to all FormItems are documented on the FormItem class, and properties specific to particular FormItems are documented on the respective FormItems. NOTE: For very simple forms consisting of exactly one item, you still use a DynamicForm. See the "fontSelector" form in the toolstrip', 'Toolstrip example.
		 */ 
		DynamicForm: DynamicFormStatic<DynamicForm, DynamicFormProps>;

		/** 
		 * A UI component that can participate in a DynamicForm, allowing editing or display of one of the DynamicForm.values','values tracked by the form. FormItems are never created via the Class.create','create() method, instead, an Array of plain Object','JavaScript objects are passed as DynamicForm.items when the form is created. See the DynamicForm documentation for details and sample code.
		 */ 
		FormItem: FormItemStatic<FormItem, FormItemProps>;

		/** 
		 * HiliteEditor extends VLayout
		 * A widget for defining and editing a set of HiliteRule','hilite rules for use by DataBoundComponent','dataBoundComponents. Presents a list of available fields and allows editing of simple hilites directly and more complex hilites via AdvancedHiliteEditors. Important Note: this class should not be used directly - it is exposed purely for i18nMessages','i18n reasons.
		 */ 
		HiliteEditor: HiliteEditorStatic<HiliteEditor, HiliteEditorProps>;

		/** 
		 * HLayout extends Layout
		 * A subclass of Layout that applies a sizing policy along the horizontal axis, interpreting percent and "*" sizes as proportions of the width of the layout. HLayouts will set any members that do not have explicit heights to match the layout.
		 */ 
		HLayout: HLayoutStatic<HLayout, HLayoutProps>;

		/** 
		 * HTMLFlow extends Canvas
		 * Use the HTMLFlow component to display HTML content that should expand to its natural size without scrolling. HTML content can be loaded and reloaded from a URL via the property contentsURL. This method of loading is for simple HTML content only; SmartClient components should be loaded via the ViewLoader class. NOTE: Since the size of an HTMLFlow component is determined by its HTML contents, this component will draw at varying sizes if given content of varying size. When using HTMLFlow components within a Layout, consider what will happen if the HTMLFlow renders at various sizes. An HTMLFlow which can expand should be placed in a container where other components can render smaller, where the container is allowed to scroll, or where there is padding to expand into. HTMLFlow is a DataBoundComponent but only supports one method at this time, HTMLFlow.fetchRelatedData','fetchRelatedData.
		 */ 
		HTMLFlow: HTMLFlowStatic<HTMLFlow, HTMLFlowProps>;

		/** 
		 * HTMLPane extends HTMLFlow
		 * Use the HTMLPane component to display HTML content in a pane of specified size. If the HTML content is larger than the size of the pane, the pane will provide scrollbars for viewing clipped content. You can set the size of an HTMLPane directly via the width and height properties, or indirectly by placing the HTMLPane in a container component (Layout, Window, SectionStack, etc) that manages the sizes of its members.
		 */ 
		HTMLPane: HTMLPaneStatic<HTMLPane, HTMLPaneProps>;

		/** 
		 * Img extends StatefulCanvas
		 * The Img widget class implements a simple widget that displays a single image.
		 */ 
		Img: ImgStatic<Img, ImgProps>;

		/** 
		 * Label extends Button
		 * Labels display a small amount of Label.align','alignable Label.contents','text with optional Label.icon','icon and Label.autoFit','autoFit. For a general-purpose container for HTML content, use HTMLFlow or HTMLPane instead.
		 */ 
		Label: LabelStatic<Label, LabelProps>;

		/** 
		 * Layout extends Canvas
		 * Arranges a set of "member" Canvases in horizontal or vertical stacks, applying a layout policy to determine member heights and widths. A Layout manages a set of "member" Canvases provided as Layout.members. Layouts can have both "members", whose position and size are managed by the Layout, and normal Canvas children, which manage their own position and size. Rather than using the Layout class directly, use the HLayout, VLayout, HStack and VStack classes, which are subclasses of Layout preconfigured for horizontal or vertical stacking, with the "fill" (VLayout) or "none" (VStack) LayoutPolicy','policies already set. Layouts and Stacks may be nested to create arbitrarily complex layouts. Since Layouts can be either horizontally or vertically oriented, throughout the documentation of Layout and it's subclasses, the term "length" refers to the axis of stacking, and the term "breadth" refers to the other axis. Hence, "length" means height in the context of a VLayout or VStack, but means width in the context of an HLayout or HStack. To show a resizer bar after (to the right or bottom of) a layout member, set Canvas.showResizeBar','showResizeBar to true on that member component (not on the HLayout or VLayout). Resizer bars override Layout.membersMargin','membersMargin spacing. Like other Canvas subclasses, Layout and Stack components may have % width and height values. To create a dynamically-resizing layout that occupies the entire page (or entire parent component), set width and height to "100%".
		 */ 
		Layout: LayoutStatic<Layout, LayoutProps>;

		/** 
		 * LayoutSpacer extends Canvas
		 * Add a spacer to a Layout that takes up space just like a normal member, without actually drawing anything. A LayoutSpacer is semantically equivalent to using an empty canvas, but higher performance for this particular use case.
		 */ 
		LayoutSpacer: LayoutSpacerStatic<LayoutSpacer, LayoutSpacerProps>;

		/** 
		 * ListGrid extends VLayout
		 * A ListGrid is a DataBoundComponent that displays a list of objects in a grid, where each row represents one object and each cell in the row represents one property.
		 */ 
		ListGrid: ListGridStatic<ListGrid, ListGridProps>;

		/** 
		 * Menu extends ListGrid
		 * The Menu widget class implements interactive menu widgets, with optional icons, submenus, and shortcut keys. A Menu is initialized with a set of MenuItems specified as Menu.items, each of which represents one row in the menu's display and specifies the action to take when that menu item is selected. Each MenuItem can have a MenuItem.title','title, MenuItem.icon','icon, MenuItem.keys','shortcut keys, optional MenuItem.submenu and various other settings. Alternatively, a MenuItem can contain an arbitrary widget via MenuItem.embeddedComponent. To create a context menu for a component, provide a Menu instance for the Canvas.contextMenu property. Note that some components like ListGrid have more specific properties because they have distinct regions or because they have a default set of context menu actions available (for example: ListGrid.headerContextMenu and related APIs). If you want a button that pops up a menu when clicked, or a bar of such buttons, see the MenuButton and MenuBar classes. To create a pop-up panel interface that looks nothing like a Menu (but still dismisses automatically on an outside click), use Canvas.showClickMask to arrange for automatic dismissal, and the Canvas.showNextTo utility method to place the component near whatever triggered it, while automatically staying on-screen.
		 */ 
		Menu: MenuStatic<Menu, MenuProps>;

		/** 
		 * A dialog that allows the user to set up complex sorting arrangements by defining a group of SortSpecifiers. Each SortSpecifier applies to a single property and direction - so, for instance, in a grid with two columns, year and monthNumber, you could sort first by year in descending order and then by monthNumber in ascending order. This would producing a grid sorted by year from largest (most recent) to smallest (least recent) and, within each year, by monthNumber from smallest (January) to largest (December). See MultiSortDialog.askForSort, DataBoundComponent.askForSort
		 */ 
		MultiSortDialog: MultiSortDialogStatic<MultiSortDialog, MultiSortDialogProps>;

		/** 
		 * NavigationBar extends HLayout
		 * Navigation control implemented as a horizontal layout showing back and forward controls and a title.
		 */ 
		NavigationBar: NavigationBarStatic<NavigationBar, NavigationBarProps>;

		/** 
		 * NavigationButton extends Button
		 * Specially styled Button subclass used by the NavigationBar class.
		 */ 
		NavigationButton: NavigationButtonStatic<NavigationButton, NavigationButtonProps>;

		/** 
		 * Provides information about the page you're loaded in. We define "page" here to be roughly equivalent to the browser window or frame the libraries have been loaded in.
		 */ 
		Page: PageStatic<Page, PageProps>;

		/** 
		 * RestDataSource extends DataSource
		 * The RestDataSource implements the 4 core DataSource operations using a simple protocol of XML or JSON requests and responses sent over HTTP, which can be easily fulfilled by any HTTP server technology. RestDataSource is named for the <a href='http://www.google.com/search?hl=en&q=REST+HTTP' target='_blank'>REST</a> (REpresentational State Transfer) pattern, which in brief says that simple messages passed over HTTP is a sufficient protocol for many web applications, without the need for further protocols such as WSDL or SOAP. A RestDataSource is used just like a normal DataSource. RestDataSources are pre-configured, using the general-purpose databinding facilities of DataSources, to expect a particular format for responses and to send requests in a specific format. These request and response formats represent Isomorphic's recommended best practices for binding SmartClient to backends which do not already support a similar, pre-existing request and response format and where the SmartClient Java Server cannot be used. If you have a pre-existing REST or WSDL service which is difficult to change, consider adapting SmartClient to the existing service instead, by starting with a normal DataSource and using the clientDataIntegration','client-side data integration facilities to create a mapping between SmartClient's DSRequest and DSResponse objects and the message formats of your existing services. NOTE: do not begin this process by creating or subclassing RestDataSource; for a pre-existing service which is unrelated to the protocol documented for RestDataSource, start by configuring or subclassing DataSource instead. RestDataSource is typically used with PHP, Ruby, Python, Perl or custom server technologies, and represents an alternative to installing the SmartClient Server in a Java technology stack, or using wsdlBinding','WSDL-based binding with .NET or other WSDL-capable technologies. Note that SmartClient Server also provides built-in support for the REST protocol via its RESTHandler servlet; this is primarily to allow non-SmartClient clients to make use of DataSource operations. If you particularly wished to do so, you could use RestDataSource to make a SmartClient app talk to the SmartClient Server using REST rather than the proprietary wire format normally used when communicating with SmartClient Server (this is how we are able to write automated tests for the RESTHandler servlet). However, doing this provides no benefit, imposes a number of inconveniences, and makes a handful of server-based features less useful (DataSourceField.viewRequiresAuthentication','field-level declarative security, for example), so we strongly recommend that you do <em>not</em> do this; it is only mentioned here for completeness while we are discussing REST. The request and response formats used by the RestDataSource allow for many of the available features of SmartClient's databinding system to be used, including data paging, searching & sorting, DSRequest.oldValues','long transactions, ResultSet','automatic cache sync, relogin','relogin and RPCManager.startQueue','queuing. However, advanced features such as upload','uploading / binary fields and ListGrid.exportData','export aren't available with RestDataSource and need to be re-implemented as needed. Most, though not all, iscServer','server-based features are still available when using RestDataSource, as long as you are also using the RESTHandler servlet that is part of SmartClient Server. However, as noted above, this approach is not recommended; if you are using Isomorphic technology both client- and server-side, it makes more sense to use the proprietary wire format. RestDataSource and binary data Binary data in a response provided to a RestDataSource must be delivered as valid XML or JSON Strings. Once delivered to the browser as Strings, there is no way to trigger the browser's "Save As" dialog to download the data, and in most cases no way to trigger other helper applications that might be launched to handle binary data (such as Excel or a PDF viewer). Hence for binary it usually makes sense to make a direct request via RPCManager.sendRequest() with downloadResult:true, separate from RestDataSource. If you are using the SmartClient Server included in Pro, Power end Enterprise to handle your REST requests server-side, there is transparent support for conversion between Java InputStreams representing binary data, and Strings containing that binary data encoded using the <a href=http://en.wikipedia.org/wiki/Base64>Base64 algorithm</a>. Thus, on the server, the binary data is in its raw binary form, with transparent conversion to or from Base64 for messages to or from the REST client. <span style="font-weight:bold;font-size:16px;">Examples</span> XML formatted responses: RestDataSource expects a response like the following in response to a "fetch" request: &lt;response&gt; &lt;status&gt;0&lt;/status&gt; &lt;startRow&gt;0&lt;/startRow&gt; &lt;endRow&gt;76&lt;/endRow&gt; &lt;totalRows&gt;546&lt;/totalRows&gt; &lt;data&gt; &lt;record&gt; &lt;field1&gt;value&lt;/field1&gt; &lt;field2&gt;value&lt;/field2&gt; &lt;/record&gt; &lt;record&gt; &lt;field1&gt;value&lt;/field1&gt; &lt;field2&gt;value&lt;/field2&gt; &lt;/record&gt; ... 76 total records ... &lt;/data&gt; &lt;/response&gt; The &lt;status&gt; element indicates whether the fetch operation was successful (see statusCodes). The &lt;data&gt; element contains a list of record nodes, each of which represents a record returned by the server. The optional &lt;startRow&gt;, &lt;endRow&gt; and &lt;totalRows&gt; elements are needed only if data paging is in use, and populate the DSResponse.startRow','startRow, DSResponse.endRow','endRow and DSResponse.totalRows','totalRows properties of the DSResponse. Note: for a more compact format, simple field values may be specified on record nodes directly as attributes - in this case a record element might be structured like this: &lt;record field1="value" field2="value" /&gt; Note that a RestDataSource will bypass browser caching of all responses by default. See DataSource.preventHTTPCaching. Successful "add" or "update" request responses are similar in format - in this case the data element would be expected to contain a single record object containing the details of the record, as saved on the server. The response from a "remove" operation would again include status and data elements, but in this case, only the primary key field value(s) of the removed record would be expected to be present under the data element. If a validation failure occurred on the server, the response would have status set to RPCResponse.STATUS_VALIDATION_ERROR [-4], and any validation errors could be included as per-field sub-elements of an "errors" element. For a validation error, the response is not expected to contain any &lt;data&gt; element. A response showing a validation error might look like this: &lt;response&gt; &lt;status&gt;-4&lt;/status&gt; &lt;errors&gt; &lt;field1&gt; &lt;errorMessage&gt;A validation error occurred for this field&lt;/errorMessage&gt; &lt;/field1&gt; &lt;/errors&gt; &lt;/response&gt; An unrecoverable error, such as an unexpected server failure, can be flagged by setting &lt;status&gt; to -1 and setting &lt;data&gt; to an error message. In this case the &lt;errors&gt; element is not used (it's specific to validation errors). An unrecoverable error causes all response processing to be skipped and RPCManager.handleError to be invoked, which by default will show the provided error message as an alert using isc.warn. JSON formatted responses: JSON format responses are expected to contain the same data / meta-data as XMLresponses, encapsulated in a simple object with a "response" attribute. The response to a "fetch" request would therefore have this format: { "response": { "status": 0, "startRow": 0, "endRow": 76, "totalRows": 546, "data": [ {"field1": "value", "field2": "value"}, {"field1": "value", "field2": "value"}, ... 76 total records ... ] } } The structure successful for "add", "update" and "remove" responses would be similar, though the data array would be expected to contain only a single object, representing the values as saved. This allows the server to return values such as an auto-generated sequence primaryKey, a last modified timestamp, or similar server-generated field values. For a remove, only the value for the primaryKey field[s] would be required. For a validation error, the status attribute would be set to RPCResponse.STATUS_VALIDATION_ERROR [-4], and errors would be specified in the errors attribute of the response. For example: { "response": { "status": -4, "errors": { "field1": {"errorMessage": "A validation error on field1"}, "field2": {"errorMessage": "A validation error on field2"} } } } An array of errors may also be returned for a single field, like this: { "response": { "status": -4, "errors": { "field1": [ {"errorMessage": "First error on field1"}, {"errorMessage": "Second error on field1"} ] } } } As with the XML format above, an unrecoverable error is indicated by setting the status attribute to -1 and the data property to the error message. Server inbound data formats The format of data sent to the server is determined by the OperationBinding.dataProtocol specified for the operation. Request data is sent as parameters if the format is specified as "getParams" or "postParams". In this case, the parameters sent to the server will consist of the DSRequest's data, and any parameters explicitly specified on the DSRequest object (as RPCRequest.params. If RestDataSource.sendMetaData is true, the DSRequest meta data properties will also be present as parameters, prefixed with RestDataSource.metaDataPrefix. Example URL constructed with the metaDataPrefix set to "_" (the default): &nbsp;&nbsp;&nbsp;[dataURL]?field1=value1&_operationType=fetch&_startRow=0&_endRow=50&_sortBy=-field2&_dataSource=dsName In this case the server would be able to separate the request's data from the meta data via the "_" prefix. If data is sent to the server via the "postMessage" dataProtocol, the data will be serialized as an XML or JSON message according to the dataFormat setting. Both XML and JSON messages will contain request metadata such as startRow and endRow, and will appear exactly as though the subset of the DSRequest that is meaningful to the server had been passed to DataSource.xmlSerialize or JSON.encode respectively. An example of an XML message might look like this: &lt;request&gt; &lt;data&gt; &lt;countryCode&gt;US&lt;/countryCode&gt; &lt;countryName&gt;Edited Value&lt;/countryName&gt; &lt;capital&gt;Edited Value&lt;/capital&gt; &lt;continent&gt;Edited Value&lt;/continent&gt; &lt;/data&gt; &lt;dataSource&gt;countryDS&lt;/dataSource&gt; &lt;operationType&gt;update&lt;/operationType&gt; &lt/request&gt; An example of an XML message for a fetch operation passing simple criteria: &lt;request&gt; &lt;data&gt; &lt;continent&gt;North America&lt;/continent&gt; &lt;/data&gt; &lt;dataSource&gt;countryDS&lt;/dataSource&gt; &lt;operationType&gt;fetch&lt;/operationType&gt; &lt;startRow&gt;0&lt;/startRow&gt; &lt;endRow&gt;75&lt;/endRow&gt; &lt;componentId&gt;worldGrid&lt;/componentId&gt; &lt;textMatchStyle&gt;exact&lt;/textMatchStyle&gt; &lt/request&gt; And an example of an XML message for a fetch operation passing AdvancedCriteria: &lt;request&gt; &lt;data&gt; &lt;_constructor&gt;AdvancedCriteria&lt;/_constructor&gt; &lt;operator&gt;or&lt;/operator&gt; &lt;criteria&gt; &lt;criterion&gt; &lt;fieldName&gt;continent&lt;/fieldName&gt; &lt;operator&gt;equals&lt;/operator&gt; &lt;value&gt;North America&lt;/value&gt; &lt;/criterion&gt; &lt;criterion&gt; &lt;operator&gt;and&lt;/operator&gt; &lt;criteria&gt; &lt;criterion&gt; &lt;fieldName&gt;continent&lt;/fieldName&gt; &lt;operator&gt;equals&lt;/operator&gt; &lt;value&gt;Europe&lt;/value&gt; &lt;/criterion&gt; &lt;criterion&gt; &lt;fieldName&gt;population&lt;/fieldName&gt; &lt;operator&gt;greaterThan&lt;/operator&gt; &lt;value&gt;50000000&lt;/value&gt; &lt;/criterion&gt; &lt;/criteria&gt; &lt;/criterion&gt; &lt;/criteria&gt; &lt;/data&gt; &lt;dataSource&gt;countryDS&lt;/dataSource&gt; &lt;operationType&gt;fetch&lt;/operationType&gt; &lt;startRow&gt;0&lt;/startRow&gt; &lt;endRow&gt;75&lt;/endRow&gt; &lt;componentId&gt;worldGrid&lt;/componentId&gt; &lt/request&gt; An example of an XML message for a fetch operation when using serverSummaries','server-side summaries: &lt;request&gt; &lt;data&gt;&lt;/data&gt; &lt;dataSource&gt;countryDS&lt;/dataSource&gt; &lt;operationType&gt;fetch&lt;/operationType&gt; &lt;summaryFunctions&gt; &lt;pk&gt;count&lt;/pk&gt; &lt;/summaryFunctions&gt; &lt;groupBy&gt;member_g8&lt;/groupBy&gt; &lt/request&gt; JSON messages are just the plain JSON form of the structures shown in the above XML examples. The advanced criteria XML example above but in JSON form: { data: { _constructor: "AdvancedCriteria", operator: "or", criteria: [ { fieldName: "continent", operator: "equals", value: "North America }, { operator: "and", criteria: [ { fieldName: "continent", operator: "equals", value: "Europe" }, { fieldName: "population", operator: "greaterThan", value: 50000000 } ] } ] } dataSource: "countryDS", operationType: "fetch", startRow: 0, endRow: 75, componentId: "worldGrid" } The RestDataSource.operationBindings','default OperationBindings for a RestDataSource specify dataProtocol as "getParams" for the fetch operation, and "postParams" for update, add and remove operations. Note that most webservers impose a limit on the maximum size of GET requests (specifically, on the size of the request URL + HTTP headers). Using dataProtocol:"getParams" for "fetch" operations that involve complex AdvancedCriteria will result in a JSON serialization of the AdvancedCriteria in the request URL, and when combined with large cookies this can easily overflow the default limits on certain webservers (see <a href='http://stackoverflow.com/questions/686217/maximum-on-http-header-values' target='_blank'>http://stackoverflow.com/questions/686217/maximum-on-http-header-values</a>). For this reason, we recommend that you use the "postMessage" protocol whenever you are intending to use AdvancedCriteria with RestDataSource. Date, time and datetime values Date, time and datetime values must be communicated using XML Schema format, as in the following examples: &nbsp;&nbsp;&lt;dateField&gt;2007-04-22&lt;/dateField&gt; &nbsp;&nbsp;&lt;timeField&gt;11:07:13&lt;/timeField&gt; &nbsp;&nbsp;&lt;dateTimeField&gt;2007-04-22T11:07:13&lt;/dateTimeField&gt; &nbsp;&nbsp;&lt;dateTimeField&gt;2007-04-22T11:07:13.582&lt;/dateTimeField&gt; And the equivalent in JSON: &nbsp;&nbsp;dateField: "2007-04-22" &nbsp;&nbsp;timeField: "11:07:13" &nbsp;&nbsp;dateTimeField: "2007-04-22T11:07:13" &nbsp;&nbsp;dateTimeField: "2007-04-22T11:07:13.582" Both RestDataSource on the client-side and the RESTHandler servlet on the server side automatically handle encoding and decoding temporal values using these formats. Both also handle datetime formats including or excluding milliseconds automatically. When encoding, both honor the DataSource.trimMilliseconds setting on the DataSource, falling back to the server.properties setting rest.trimMilliseconds; when decoding, both detect whether or not to try to parse milliseconds based on the string they receive. Fields of type "date" and "time" are considered to hold logical date and time values, as discussed in the dateFormatAndStorage','date and time handling article, and are not affected by timezones. Fields of type "datetime" will be converted to UTC on the client side by RestDataSource, and will be sent back down to the client as UTC by the server-side RESTHandler. We recommend that your own REST client and/or server code do the same thing (ie, transmit all datetime values in both directions as UTC). Note that the examples given above give no timezone information, and will be treated by the SmartClient Server as UTC values. If you wish to work with datetime values in a particular timezone, use a format like this: &nbsp;&nbsp;&lt;dateField&gt;2007-04-22T11:07:13-0800&lt;/dateField&gt; &nbsp;&nbsp;&lt;dateField&gt;2012-11-19T22:12:04+0100&lt;/dateField&gt; And the equivalent in JSON: &nbsp;&nbsp;dateTimeField: "2007-04-22T11:07:13-0800" &nbsp;&nbsp;dateTimeField: "2012-11-19T22:12:04+0100" NOTE: Although we refer above to XML Schema format, the format used for specifying timezone offset is slightly different from XML Schema - as shown in the above examples, you specify "+HHMM" or "-HHMM", as opposed to the XML Schema format which requires a ":" character between the hours and minutes. The reason for this difference is simply that the Java SimpleDateFormat class imposes it. RestDataSource queuing support RestDataSource supports RPCManager.startQueue','queuing of DSRequests. This allows you to send multiple requests to the server in a single HTTP turnaround, thus minimizing network traffic and allowing the server to treat multiple requests as a single transaction, if the server is able to do so (in Power Edition and above, the SmartClient Server transparently supports grouping multiple REST requests in a queue into a single database transaction when using one of the built-in DataSource types). Note that you can disable queuing support with the RestDataSource.disableQueuing flag. If you want to use queuing with RestDataSource, you must use the "postMessage" dataProtocol with either XML or JSON dataFormat. Message format is similar to the non-queued examples shown earlier: it is simply extended to cope with the idea of multiple DSRequests encapsulated in the message. An example of the XML message sent from RestDataSource to the server for two update requests combined into a queue, using XML dataFormat: &lt;transaction&gt; &lt;operations&gt; &lt;request&gt; &lt;data&gt; &lt;pk&gt;1&lt;/pk&gt; &lt;countryName&gt;Edited Value&lt;/countryName&gt; &lt;capital&gt;Edited Value&lt;/capital&gt; &lt;continent&gt;Edited Value&lt;/continent&gt; &lt;/data&gt; &lt;dataSource&gt;countryDS&lt;/dataSource&gt; &lt;operationType&gt;update&lt;/operationType&gt; &lt/request&gt; &lt;request&gt; &lt;data&gt; &lt;pk&gt;2&lt;/pk&gt; &lt;capital&gt;Edited Value&lt;/capital&gt; &lt;population&gt;123456&lt;/population&gt; &lt;/data&gt; &lt;dataSource&gt;countryDS&lt;/dataSource&gt; &lt;operationType&gt;update&lt;/operationType&gt; &lt/request&gt; &lt;/operations&gt; &lt;transaction&gt; And the same message in JSON format: { transaction: { operations: [{ dataSource:"countryDS", operationType:"update", data: { pk: 1 countryName: "Edited Value", capital: "Edited Value", continent: "Edited Value" } }, { dataSource:"countryDS", operationType:"update", data: { pk: 2, capital: "Edited Value", popuilation: 123456 } }] } } RestDataSource expects the response to a queue of requests to be a queue of responses in the same order as the original requests. Again, the message format is very similar to the unqueued REST format, it just has an outer container construct. Note also that the individual DSResponses in a queued response have an extra property, DSResponse.queueStatus','queueStatus. This allows each individual response to determine whether the queue as a whole succeeded. For example, if the first update succeeded but the second failed validation, the first response would have a status of 0, but a queueStatus of -1, while the second response would have both properties set to -1. The update queue example given above would expect a response like this (in XML): &lt;responses&gt; &lt;response&gt; &lt;status&gt;0&lt;/status&gt; &lt;queueStatus&gt;0&lt;/queueStatus&gt; &lt;data&gt; &lt;record&gt; &lt;countryName&gt;Edited Value&lt;/countryName&gt; &lt;gdp&gt;1700.0&lt;/gdp&gt; &lt;continent&gt;Edited Value&lt;/continent&gt; &lt;capital&gt;Edited Value&lt;/capital&gt; &lt;pk&gt;1&lt;/pk&gt; &lt;/record&gt; &lt;/data&gt; &lt;/response&gt; &lt;response&gt; &lt;status&gt;0&lt;/status&gt; &lt;queueStatus&gt;0&lt;/queueStatus&gt; &lt;data&gt; &lt;record&gt; &lt;countryName&gt;United States&lt;/countryName&gt; &lt;gdp&gt;7247700.0&lt;/gdp&gt; &lt;continent&gt;North America&lt;/continent&gt; &lt;independence&gt;1776-07-04&lt;/independence&gt; &lt;capital&gt;Washington DC&lt;/capital&gt; &lt;pk&gt;2&lt;/pk&gt; &lt;population&gt;123456&lt;/population&gt; &lt;/record&gt; &lt;/data&gt; &lt;/response&gt; &lt;/responses&gt; And in JSON: [ { "response": { "queueStatus": 0, "status": 0, "data": [{ "countryName": "Edited Value", "gdp": 1700.0, "continent": "Edited Value", "capital": "Edited Value", "pk": 1 }] } }, { "response": { "queueStatus": 0, "status": 0, "data": [{ "countryName": "United States", "gdp": 7247700.0, "continent": "North America", "independence": "1776-07-04", "capital": "Washington DC", "pk": 2, "population": 123456 }] } } ] Hierarchical (Tree) data: To create a hierarchical DataSource, in the DataSource's fields array, a field must be specified as the parent id field - the field which will contain a pointer to the id of each node's parent. This can be achieved by setting the DataSourceField.foreignKey and the DataSourceField.rootValue attributes on the field definition. For example: RestDataSource.create({ ID:"supplyItem", fields : [ {name:"itemId", type:"sequence", primaryKey:true}, {name:"parentId", type:"integer", foreignKey:"supplyItem.itemId", rootValue:0}, ... ] }); Tree Data is then treated on the server as a flat list of records linked by parent id. Tree data is typically displayed using a dataBound TreeGrid component. TreeGrids automatically create a ResultTree data object, which requests data directly from the DataSource. ResultTrees load data on demand, only requesting currently visible (open) nodes from the server. This is handled by including a specified value for the parent id field in the request criteria. To implement a standard load-on-demand tree RestDataSource back end, you should therefore simply return the set of nodes that match the criteria passed in. For example, if your DataSource was defined as the "supplyItem" code snippet above, a fetch request for all children of a node with itemId set to 12 would have "parentId" set to 12 in the request criteria. A valid response would then contain all the records that matched this criteria. For example: &lt;response&gt; &lt;status&gt;0&lt;/status&gt; &lt;data&gt; &lt;record&gt; &lt;itemId&gt;15&lt;/itemId&gt; &lt;parentId&gt;12&lt;/parentId&gt; &lt;/record&gt; &lt;record&gt; &lt;itemId&gt;16&lt;/itemId&gt; &lt;parentId&gt;12&lt;/parentId&gt; &lt;/record&gt; &lt;/data&gt; &lt;/response&gt; The structure of responses for Add, Update and Delete type requests will be the same regardless of whether the data is hierarchical. However you should be aware that the underlying data storage may need to be managed slightly differently in some cases. Specifically, Add and Update operations may change the structure of the tree by returning a new parent id field value for the modified node. Depending on how your data is stored you may need to include special back-end logic to handle this. Also, if a user deletes a folder within a databound tree, any children of that folder will also be dropped from the tree, and can be removed from the back-end data storage. Note: For a general overview of binding components to Tree structured data, see treeDataBinding','Tree Databinding.
		 */ 
		RestDataSource: RestDataSourceStatic<RestDataSource, RestDataSourceProps>;

		/** 
		 * ResultSets are an implementation of the List interface that automatically fetches DataSource records when items are requested from the List. ResultSets provide robust, customizable, high-performance cache management for ListGrids and other built-in SmartClient components, and can be used as cache managers by custom components. ResultSets manage data paging, that is, loading records in batches as the user navigates the data set. A ResultSet will switch to using client-side sorting and filtering when possible to improve responsiveness and reduce server load. ResultSets also participate in automatic cache synchronization, observing operations on DataSources and automatically updating their caches. Creation A ResultSet can be passed to any component that expects a List, and the List APIs can be called directly on the ResultSet as long as the caller is able to deal with asynchronous loading; see ResultSet.getRange. Generally ResultSets do not need to be created directly, but are created by DataBound components as an automatic consequence of calling dataBoundComponentMethods','DataBound Component Methods. For example, the ListGrid.fetchData causes ListGrid.data to become an automatically created ResultSet object. Automatically created ResultSets can be customized via properties on ListGrids such as ListGrid.dataPageSize and ListGrid.dataProperties. All ResultSets for a given DataSource may also be customized via setting DataSource.resultSetClass to the name of a ResultSet isc.defineClass','subclass in which Class.addProperties','defaults have been changed. A ResultSet defaults to using data paging, setting DSRequest.startRow and DSRequest.endRow in issued dsRequests. Server code may always return more rows than the ResultSet requests and the ResultSet will correctly integrate those rows based on DSResponse.startRow/DSResponse.endRow','endRow. Hence the server can always avoid paging mode by simply returning all matching rows. A ResultSet can be created directly with just the ID of a DataSource: isc.ResultSet.create({ dataSource : "dataSourceID" }) Directly created ResultSets are typically used by custom components, or as a means of managing datasets that will be used by several components. When created directly rather than via a dataBoundComponent, a newly created ResultSet will not issue it's first "fetch" DSRequest until data is accessed (for example, via ResultSet.get','get()). Paging and total dataset length When using data paging, the server communicates the total number of records that match the current search criteria by setting DSResponse.totalRows. The ResultSet will then return this number from ResultSet.getLength','getLength(), and ListGrids and other components will show a scrollbar that allows the user to jump to the end of the dataset directly. However, the ResultSet does not require that the server calculate the true length of the dataset, which can be costly for an extremely large, searchable dataset. Instead, the server may simply advertise a totalRows value that is one page larger than the last row loaded. This results in a UI sometimes called "progressive loading", where the user may load more rows by scrolling past the end of the currently loaded rows, but is not allowed to skip to the end of the dataset. No client-side settings are required to enable this mode - it is entirely server-driven. However, it is usually coupled with ListGrid.canSort','disabling sorting, since server-side sorting would also force the server to traverse the entire dataset. Note also the DataSource.progressiveLoading','progressiveLoading flag, which can be applied at a DataSource, operation, request, component or ResultSet level; if you are using the built-in server-side DataSource implementations with Pro or better, this tells SmartClient Server to use its pre-built progressive loading mode for that DataSource, operation, request, component or ResultSet. Client-side Sorting and Filtering If a ResultSet obtains a full cache for the current set of filter criteria, it will automatically switch to client-side sorting, and will also use client-side filtering if the filter criteria are later changed but appear to be more restrictive than the criteria in use when the ResultSet obtained a full cache. The ResultSet.useClientSorting','useClientSorting and ResultSet.useClientFiltering','useClientFiltering flags can be used to disable client-side sorting and filtering respectively if these behaviors don't match server-based sorting and filtering. However, because client-side sorting and filtering radically improve responsiveness and reduce server load, it is better to customize the ResultSet so that it can match server-side sorting and filtering behaviors. Sorting behavior is primarily customized via the "sort normalizer" passed to ResultSet.sortByProperty, either via direct calls on a standalone ResultSet, or via ListGridField.sortNormalizer for a ListGrid-managed ResultSet. By default, client-side filtering interprets the Criteria','criteria passed to ResultSet.setCriteria','setCriteria() as a set of field values that records must match (similarly to the built-in SQL/Hibernate connectors built into the SmartClient Server). Custom client-side filtering logic can be implemented by overriding ResultSet.applyFilter','applyFilter(). Overriding ResultSet.compareCriteria','compareCriteria() allows you to control when the ResultSet uses client-side vs server-side filtering, and the ResultSet has two default ResultSet.criteriaPolicy','criteria policies built-in. Modifying ResultSets Records cannot be directly added or removed from a ResultSet via List APIs such as List.removeAt','removeAt(), since this would break the consistency of server and client row numbering needed for data paging, and also create some issues with automatic cache synchronization. Use DataSource.addData/DataSource.removeData','removeData() to add/remove rows from the DataSource, and the ResultSet will reflect the changes automatically. Alternatively, the DataSource.updateCaches method may be called to only update local caches of the DataSource in question, without generating any server traffic. To create a locally modifiable cache of Records from a DataSource, you can use DataSource.fetchData to retrieve a List of Records which can be modified directly, or you can create a client-only DataSource from the retrieved data to share a modifiable cache between several DataBoundComponents. Updates and Automatic Cache Synchronization Once a ResultSet has retrieved data or has been initialized with data, the ResultSet will observe any successful "update", "add" or "remove" dsRequests against their DataSource, regardless of the component that initiated them. A ResultSet with a full cache for the current filter criteria will integrate updates into the cache automatically. Updated rows that no longer match the current filter criteria will be removed automatically. To prevent this, you can set ResultSet.neverDropUpdatedRows. Added rows will similarly be added to the cache only if they match current filter criteria. Note that the client-side filtering described above is also used to determine whether updated or added rows should be in the cache. If any aspect of automated cache update is ever incorrect, ResultSet.dropCacheOnUpdate','dropCacheOnUpdate can be set for the ResultSet or DSResponse.invalidateCache can be set for an individual dsResponse. If automatic cache synchronization isn't working, troubleshoot the problem using the steps suggested <a href='http://forums.smartclient.com/showthread.php?t=8159#aGrid' target='_blank'>in the FAQ</a>. Regarding OperationBinding.operationId','operationIds and how they affect caching, take into account that cache sync is based on the fetch used - any add or update operation uses a fetch to retrieve updated data, and the operationId of that fetch can be set via OperationBinding.cacheSyncOperation','cacheSyncOperation. If the operationId of the cache is different from the operationId of the cache update data, it won't be used to update the cache, since the fields included and other aspects of the data are allowed to be different across different operationIds. This allows to maintain distinct caches on a per component basis, so when two components are using separate operationIds they are assumed to have distinct caches, because updates performed with one operationId will not affect the cache obtained via another operationId. Also, take into account that operationId must be unique per DataSource, across all operationTypes for that DataSource. Data Paging with partial cache When in paging mode with a partial cache, a ResultSet relies on server side sorting, setting DSRequest.sortBy to the current sort field and direction. In order for the cache to remain coherent, row numbering must continue to agree between server and client as new fetches are issued, otherwise, duplicate rows or missing rows may occur. If concurrent modifications by other users are allowed, generally the server should set DSResponse.invalidateCache to clear the cache when concurrent modification is detected. In paging mode with a partial cache, any successful "update" or "add" operation may cause client and server row numbering to become out of sync. This happens because the update may affect the sort order, and client and server cannot be guaranteed to match for sets of records that have equivalent values for the sort field. For this reason, after an "add" or "update" operation with a partial cache, the ResultSet will automatically mark cache for invalidation the next time a fetch operation is performed. Alternatively, if ResultSet.updatePartialCache is set to false, the ResultSet will simply invalidate cache immediately in this circumstance.
		 */ 
		ResultSet: ResultSetStatic<ResultSet, ResultSetProps>;

		/** 
		 * Encapsulates a client/server RPC request. You'll need to provide an instance of this class (or a constructor for it) to the RPCManager.sendRequest method. If you use the RPCManager.send method, an instance of RPCRequest will be created for you.
		 */ 
		RPCRequest: RPCRequestStatic<RPCRequest, RPCRequestProps>;

		/** 
		 * Encapsulates an RPC response from the server. Instances of this class are automatically created and optionally passed to you in the callback you specify as part of your RPCRequest.
		 */ 
		RPCResponse: RPCResponseStatic<RPCResponse, RPCResponseProps>;

		/** 
		 * SearchForm extends DynamicForm
		 * A SearchForm is a DynamicForm specialized for a user to enter search criteria. All DynamicForm properties and methods work on SearchForm. SearchForm extends and specializes DynamicForm for searching; for example, SearchForm sets hiliteRequiredFields false by default because fields are typically not required in a search.
		 */ 
		SearchForm: SearchFormStatic<SearchForm, SearchFormProps>;

		/** 
		 * SectionStack extends VLayout
		 * A container that manages a list of sections of widgets, each with a header. Sometimes called an "Accordion". SectionStack can be configured so that only one section is visible at a time (similar to MS Outlook's left-hand Nav), or to allow multiple sections to be visible and share the available space.
		 */ 
		SectionStack: SectionStackStatic<SectionStack, SectionStackProps>;

		/** 
		 * SelectItem extends FormItem
		 * FormItem that allows picking between several mutually exclusive options via a select list. Options may be derived from a dataSource or a valueMap. Note that to select the first option as a default value for the item, SelectItem.defaultToFirstOption may be set.
		 */ 
		SelectItem: SelectItemStatic<SelectItem, SelectItemProps>;

		/** 
		 * StatefulCanvas extends Canvas
		 * A component that has a set of possible states, and which presents itself differently according to which state it is in. An example is a button, which can be "up", "down", "over" or "disabled".
		 */ 
		StatefulCanvas: StatefulCanvasStatic<StatefulCanvas, StatefulCanvasProps>;

		/** 
		 * StretchImg extends StatefulCanvas
		 * The StretchImg widget class implements a widget type that displays a list of multiple images that make up a single image.
		 */ 
		StretchImg: StretchImgStatic<StretchImg, StretchImgProps>;

		/** 
		 * TabSet extends Canvas
		 * The TabSet class allows components on several panes to share the same space. The tabs at the top can be selected by the user to show each pane. Tabs are configured via the tabs property, each of which has a pane property which will be displayed in the main pane when that tab is selected.
		 */ 
		TabSet: TabSetStatic<TabSet, TabSetProps>;

		/** 
		 * TextAreaItem extends FormItem
		 * Class for editable multi-line text areas (uses HTML &lt;TEXTAREA&gt; object)
		 */ 
		TextAreaItem: TextAreaItemStatic<TextAreaItem, TextAreaItemProps>;

		/** 
		 * TextItem extends FormItem
		 * FormItem for managing a text field.
		 */ 
		TextItem: TextItemStatic<TextItem, TextItemProps>;

		/** 
		 * Helper methods and system-wide defaults for dealing with time values and time display formats. This class includes utility methods for the creation and display of logical time values, as well as modifying the default display timezone for datetime type values. See dateFormatAndStorage for more information on working with dates, times and datetimes in SmartClient.
		 */ 
		Time: TimeStatic<Time, TimeProps>;

		/** 
		 * Toolbar extends Layout
		 * A Toolbar creates a vertical or horizontal strip of similar components (typically Buttons) and provides managed resizing and reordering behavior over those components. If you are creating a bar with a mixture of different elements (eg some MenuButtons, some Labels, some Buttons, some custom components), you want to use a ToolStrip. A Toolbar is better suited for managing a set of highly similar, interchangeable components, such as ListGrid headers.
		 */ 
		Toolbar: ToolbarStatic<Toolbar, ToolbarProps>;

		/** 
		 * ToolStrip extends Layout
		 * Base class for creating toolstrips like those found in browsers and office applications: a mixed set of controls including ImgButton','icon buttons, Button.radioGroup','radio button groups, MenuButton','menus, ComboBoxItem','comboBoxes, LayoutSpacer','spacers, Label','status displays and SelectItem','drop-down selects. All of the above components are placed in the ToolStrip.members','members array to form a ToolStrip. Note that the FormItem','FormItems mentioned above (ComboBox and drop-down selects) need to be placed within a DynamicForm as usual. The following strings can be used to add special behaviors: the String "separator" will cause a separator to be created (instance of ToolStrip.separatorClass) the String "resizer" will cause a resizer to be created (instance of ToolStrip.resizeBarClass). This is equivalent to setting Canvas.showResizeBar','showResizeBar:true on the preceding member. the String "starSpacer" will cause a spacer to be created (instance of LayoutSpacer). 
		 */ 
		ToolStrip: ToolStripStatic<ToolStrip, ToolStripProps>;

		/** 
		 * ToolStripButton extends Button
		 * Simple subclass of StretchImgButton with appearance appropriate for a ToolStrip button. Can be used to create an icon-only button, and icon with text, or a text only button by setting the icon and title attributes as required.
		 */ 
		ToolStripButton: ToolStripButtonStatic<ToolStripButton, ToolStripButtonProps>;

		/** 
		 * A Tree is a data model representing a set of objects linked into a hierarchy. A Tree has no visual presentation, it is displayed by a TreeGrid or ColumnTree when supplied as TreeGrid.data or ColumnTree.data. A Tree can be constructed out of a List of objects interlinked by IDs or via explicitly specified Arrays of child objects. See Tree.modelType for an explanation of how to pass data to a Tree. Typical usage is to call TreeGrid.fetchData to cause automatic creation of a ResultTree, which is a type of Tree that automatically handles loading data on demand. For information on DataBinding Trees, see treeDataBinding.
		 */ 
		Tree: TreeStatic<Tree, TreeProps>;

		/** 
		 * A validator describes a check that should be performed on a value the user is trying to save. Validators are specified for DataSource fields via the DataSourceField.validators property. Validators that need not be run on the server can also be specified for a specific FormItem or ListGridField. SmartClient supports a powerful library of ValidatorType','ValidatorTypes which have identical behavior on both the client and the server. Beyond this, custom validators can be defined on the client and custom validation logic added on the server. Note that the regexp and mask validator types are very flexible and can be used to perform virtually any kind of formatting check that doesn't involve some large external dataset. Custom validators can be reused on the client by adding them to the global validator list, via the Validator.addValidator method.
		 */ 
		Validator: ValidatorStatic<Validator, ValidatorProps>;

		/** 
		 * The ValuesManager manages data from multiple member forms. If a single logical form needs to be separated into multiple DynamicForm instances for Layout purposes (for example, spanning one logical form across multiple Tabs), a ValuesManager can be used to make the forms act as one logical form, supporting all value-related APIs otherwise called on DynamicForm directly. A ValuesManager has no visual representation - it is strictly a logical entity, and the member forms provide the user interface. You can initialize a ValuesManager with a set of member forms (by setting ValuesManager.members at init) or add and remove member forms dynamically. Calling ValuesManager.setValues on a ValuesManager will automatically route new field values to whichever member form is showing an editor for that field. Likewise, calling ValuesManager.validate will validate all member forms, and ValuesManager.saveData will initiate a save operation which aggregates values from all member forms. Like a DynamicForm, a ValuesManager can be databound by setting ValuesManager.dataSource. In this case all member forms must also be bound to the same DataSource. In general, when working with a ValuesManager and its member forms, call APIs on the ValuesManager whenever you are dealing with values that span multiple forms, and only call APIs on member forms that are specific to that form or its fields. Note that, just as a DynamicForm can track values that are not shown in any FormItem, a ValuesManager may track values for which there is no FormItem in any member form. However, when using a ValuesManager these extra values are only allowed on the ValuesManager itself. Member forms will not track values for which they do not have FormItems.
		 */ 
		ValuesManager: ValuesManagerStatic<ValuesManager, ValuesManagerProps>;

		/** 
		 * VLayout extends Layout
		 * A subclass of Layout that applies a sizing policy along the vertical axis, interpreting percent and "*" sizes as proportions of the height of the layout. VLayouts will set any members that do not have explicit widths to match the layout.
		 */ 
		VLayout: VLayoutStatic<VLayout, VLayoutProps>;

		/** 
		 * Window extends Layout
		 * A general purpose Window class for implementing dialogs, portlets, alerts, prompts, wizards and desktop-like windowing interfaces. Windows can contain arbitrary SmartClient components, configured via the Window.items property. Windows may be Window.isModal','modal or non-modal. Windows provide a series of highly configurable and skinnable AutoChild','autoChildren including a header, various header controls, footer, and corner resizer. The more specialized Dialog subclass of Window has additional functionality targetted at simple prompts and confirmations, such as buttons with default actions, and single-method isc.warn','shortcuts for common application dialogs.
		 */ 
		Window: WindowStatic<Window, WindowProps>;


    }
}

declare var isc: Isc.iscStatic;

declare module "isc" {
    export = Isc;
}
