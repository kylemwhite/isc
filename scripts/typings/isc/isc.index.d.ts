/// <reference path="isc.interfaces.d.ts" />
/// <reference path="isc.objects.d.ts" />
/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/kylemwhite/isc
// Generated: 11/8/2017 7:01:44 AM by KWhite
// Generated from SmartClient version SNAPSHOT_v12.0d_2017-11-08

/**
 * Generic extensions to JavaScript Arrays. You can call these on any Array.
 * JavaScript's native Array is retrofitted to support the List API (not implemented yet).
 */
interface ArrayConstructor {

    isLoading(value: any): boolean;
    compareAscending(first: any, second: any): number;
    compareDescending(first: any, second: any): number;


} // Array

interface Array<T> {
    remove(obj: any): boolean;
}

// Special case DOMElement doesn't implement any methods and is really the same thing as an HTMLElement so define it as a type, not an object.
type DOMElement = HTMLElement;

/**
 * Generic extensions to JavaScript Strings. You can call these on any String. 
 */
interface String {

    /* Instance Method Overrides */
    /**  
     *  Returns true if this string contains the specified substring.
     * 
     * @param {String} substring - string to look for
     * @return {boolean} true == this string contains the substring
     */
    contains(substring: String): boolean;

    /**  
     *  Returns true if this string ends with another string, or if the other string
     * occurs in this string beginning at position - substring.length.
     * 
     * 
     * @param {String} substring - other string to check
     * @param {int} position - optional position in this string. Defaults to the length of this string.
     * @return {boolean} <code>true</code> if <code>substring</code> occurs within this string ending with <code>position - 1</code>.
     */
    endsWith(substring: String, position?: number): boolean;

    /**  
     *  Returns true if this string starts with another string, or if the other string
     * occurs at the given position within this string.
     * 
     * 
     * @param {String} substring - other string to check
     * @param {int} position - optional position in this string. Defaults to 0.
     * @return {boolean} <code>true</code> if <code>substring</code> occurs within this string at position <code>position</code>.
     */
    startsWith(substring: String, position?: number): boolean;

} // String

/**
 * Extra methods added to the Number object, available on all number variables. Attributes,
 * parameters, or return values declared as Number may be null. 
 */
interface Number {

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
    isBetween(number: number, first?: number, second?: number, inclusive?: number): boolean /* Boolean */;

} // Number

interface NumberConstructor {
} // NumberStatic

interface StringConstructor {

    /* Methods */
    /**  
     *  Tests whether the given string is a valid JavaScript identifier.
     * 
     * 
     * @param {String} string - the string to test.
     * @return {boolean} true if string is a valid JavaScript identifier; false otherwise.
     */
    isValidID(string: String): boolean;

} // StringStatic

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
		 * ActiveXControl extends BrowserPlugin
		 * ISC Abstraction for ActiveX controls
		 */ 
		ActiveXControl: ActiveXControlStatic<ActiveXControl, ActiveXControlProps>;

		/** 
		 * AdaptiveMenu extends Layout
		 * A menu that can either show its menu options inline, or show them via a drop-down,
		 * depending on available space in the surrounding Layout or ToolStrip.
		 * 
		 * See Canvas.canAdaptWidth','canAdaptWidth for background on adaptive layout.
		 */ 
		AdaptiveMenu: AdaptiveMenuStatic<AdaptiveMenu, AdaptiveMenuProps>;

		/** 
		 * AdvancedHiliteEditor extends VStack
		 * A widget for editing a single, advanced HiliteRule','hilite rule for use by 
		 * DataBoundComponent','dataBoundComponents. Where a simple hilite provides 
		 * configuration of a single criterion and either foreground or background color for 
		 * application to a single field, an advanced hilite can specify more complex criteria which can 
		 * both test and affect multiple fields and allow both background and foreground colors to 
		 * be specified in a single rule. 
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		AdvancedHiliteEditor: AdvancedHiliteEditorStatic<AdvancedHiliteEditor, AdvancedHiliteEditorProps>;

		/** 
		 * AutoFitButton extends Button
		 * A button that automatically sizes to the length of its title. Implemented via the 
		 * StatefulCanvas.autoFit property.
		 */ 
		AutoFitButton: AutoFitButtonStatic<AutoFitButton, AutoFitButtonProps>;

		/** 
		 * AutoFitTextAreaItem extends TextAreaItem
		 * Class for editable multi-line text areas (uses HTML &lt;TEXTAREA&gt; object)
		 * automatically expands to accomodate its content
		 */ 
		AutoFitTextAreaItem: AutoFitTextAreaItemStatic<AutoFitTextAreaItem, AutoFitTextAreaItemProps>;

		/** 
		 * AutoTest extends Class
		 * Standalone class providing a general interface for integration with Automated Testing Tools
		 * 
		 * 
		 * For automated testing tools we need a way to create string identifiers for DOM elements such that 
		 * when a page is reloaded, we can retrieve a functionally equivalent DOM element. We call these
		 * AutoTestLocator','autoTestLocators.
		 * 
		 * This allows automated testing tools to set up or record user generated events on DOM elements
		 * then play them back on page reload and have our components react correctly.
		 * 
		 * The primary APIs for the AutoTest subsystem are AutoTest.getLocator and 
		 * AutoTest.getElement.
		 * 
		 * Implementation considerations:
		 * 
		 * Some components react to the structure of DOM elements embedded within them - for example
		 * GridRenderer cells have meaning to the grid. So in some cases we need to identify elements
		 * within a component, while in others we can just return a pointer to a handle (A simple
		 * canvas click handler doesn't care about what native DOM element within the handle received
		 * the click).
		 * 
		 * When a DOM element is contained by a component, it is not sufficient to store the component
		 * ID. Most SmartClient components are auto-generated by their parents, and rather than 
		 * attempting to store a specific component identifier we should instead store the
		 * "logical function" of the component.
		 * For example a listGrid header button may have a different auto-generated ID across page
		 * reloads due to various timing-related issues (which can change the order of of widget
		 * creation), loading a new skin, or otherwise trivial changes to an application.
		 * Rather than storing the header button ID therefore, we want to store this as
		 * a string meaning "The header button representing field X within this list grid".
		 * 
		 * fallback strategies: In some cases a component or DOM element can be identified in 
		 * several ways. For example a cell in a ListGrid can be identified by simple row and
		 * column index, but also by fieldName and record primary key value. In these cases we
		 * attempt to record information for multiple locator strategies and then when parsing
		 * stored values we can provide APIs to govern which strategy is preferred. See the
		 * LocatorStrategy documentation for more on this.
		 * 
		 * 
		 * In order to address these concerns the AutoTest locator pattern is similar to an
		 * XPath type structure, containing a root component identifier, followed by 
		 * details of sub-components and then potentially details used to identify an element within
		 * the components handle in the DOM.
		 * 
		 * The actual implementation covers a large number of common cases, including (but not limited to)
		 * the following. Note that for cases where an element is being identified from a pool of
		 * possible candidates, such as the Canvas.children array, we usually will use
		 * LocatorStrategy','fallback locator paths rather than simply relying on index:
		 * Root level components identified by explicit ID
		 * Any AutoChild','autoChildren
		 * Standard component parts such as scrollbars, edges, shadows, etc
		 * Section stack items and headers
		 * Window items
		 * ListGrid headers and cells
		 * TreeGrid headers and cells, including interactive open icon, checkbox icons
		 * DynamicForm form items, including details of elements within those items
		 * 
		 * 
		 */ 
		AutoTest: AutoTestStatic<AutoTest, AutoTestProps>;

		/** 
		 * BaseWidget extends Class
		 * Base class for Canvas and DrawItem.
		 */ 
		BaseWidget: BaseWidgetStatic<BaseWidget, BaseWidgetProps>;

		/** 
		 * BatchUploader extends VStack
		 * The BatchUploader handles the upload, validation, review and saving of a dataset
		 * expressed in CSV or other upload formats.
		 * 
		 * NOTE: BatchUploader is only available with SmartClient Power or better.
		 * 
		 * By default, a BatchUploader consists of a single FileItem form field.
		 * This form field will upload a file using the special "batchUpload" built-in DataSource.
		 * The uploaded file data will be parsed and validated using the
		 * BatchUploader.uploadDataSource','uploadDataSource,
		 * then streamed back to the browser, along with any errors, for display in a ListGrid. 
		 * 
		 * The BatchUploader.previewShown notification method will be fired when the uploaded records
		 * are being displayed in this grid.
		 * 
		 * The user can then correct any errors and submit the final dataset, which will be
		 * added to the DataSource via a series of "add" DSRequests, all submitted as a single
		 * HTTP request via RPCManager.startQueue','request queuing.
		 * Developers may specify a custom "add" operation to use on the target 
		 * BatchUploader.uploadDataSource via the BatchUploader.uploadOperation 
		 * property.
		 * 
		 * Additional form fields can be added to the form that uploads the data file via 
		 * BatchUploader.uploadFormFields','uploadFormFields. Values entered into these fields
		 * are not included in the "add" DSRequests used to store the uploaded records. Instead, they
		 * are stored as HttpSession attributes with the names corresponding to the 
		 * names of the specified uploadFormFields (optionally with a 
		 * BatchUploader.uploadFieldPrefix','prefix applied, in case
		 * this is necessary to avoid name collisions in the session). This allows any custom logic
		 * for the "add" operation to access these additional fields via httpSession.getAttribute().
		 * If BatchUploader.uploadFormFields','uploadFormFields are not provided method 
		 * httpSession.getAttribute() will not be called.
		 * 
		 * Because all records are saved in a single HTTP request, a similar strategy of 
		 * storing data as servletRequest or session attributes allows reuse of objects required to
		 * perform the "add" operations (such as field values common to all added records,
		 * or a SQL connection or transaction manager). 
		 * 
		 * If DataSourceField.uploadFieldName','uploadFieldName is set on any of the 
		 * BatchUploader.uploadDataSource','uploadDataSource's fields, the BatchUploader will use
		 * that name to map the uploaded file's content.
		 * 
		 * Note, that for BatchUploader.dataFormat','CSV data format header line is optional. If 
		 * first non-empty line in the uploaded file has no matching field names, it is assumed that 
		 * there's no header row, and all rows (including the first one) are treated as data rows.
		 * 
		 * Imported data can be transformed during import, see DataSourceField.importStrategy for details.
		 * 
		 * A couple of server-side techniques are interesting in conjunction with the BatchUploader.
		 * One is to set the DataSource.serverConstructor property to point at your own class
		 * that inherits from com.isomorphic.datasource.BasicDataSource. The most interesting
		 * reason for doing this is to override the validate method and provide complete
		 * custom validation - for example, checking relations to other tables.
		 * 
		 * Another technique is to handle the initial SmartClient call in your own servlet, by setting the 
		 * BatchUploader.dataURL','dataURL property. You then handle the add requests
		 * with a combination of your own code and SmartClient server API calls. This is a 
		 * good way to add special pre- and post-processing to the normal server-side flow.
		 * 
		 * Note: The special "batchUpload" DataSource, which should reside in the shared/ds 
		 * folder of your application's webroot (see 
		 * iscInstall','Installation Instructions)
		 * .
		 * is not part of your application's data flow, and it has nothing to do with the 
		 * BatchUploader.uploadDataSource','uploadDataSource you use to actually persist the validated
		 * and error-corrected data: it is simply a means to uploading the raw data in the first place.
		 * Normally, you should simply ignore its presence and treat it as an internal detail of the 
		 * SmartClient framework.
		 * 
		 * However, there are circumstances in which you may wish to change it to achieve specific aims.
		 * For example, you may wish to override the Java class it invokes, in order to insert your own
		 * security or other validation logic into the initial upload flow. This is entirely in keeping
		 * with the design, but we regard it as an out-of-the-ordinary use-case: normal usage is simply 
		 * to ignore the presence of the batchUpload DataSource.
		 * 
		 * BatchUploader is a VStack, that simply stacks members on the vertical axis without
		 * trying to manage their height. If you need to control heights, you can set 
		 * Layout.vPolicy','vPolicy to "fill"
		 */ 
		BatchUploader: BatchUploaderStatic<BatchUploader, BatchUploaderProps>;

		/** 
		 * BlurbItem extends FormItem
		 * FormItem intended for inserting blurbs of instructional HTML into DynamicForms.
		 * 
		 * Set the defaultValue of this item to the HTML you want to embed in the form.
		 */ 
		BlurbItem: BlurbItemStatic<BlurbItem, BlurbItemProps>;

		/** 
		 * BooleanItem extends FormItem
		 * Boolean form item, implemented with customizable checkbox images
		 */ 
		BooleanItem: BooleanItemStatic<BooleanItem, BooleanItemProps>;

		/** 
		 * Browser extends Class
		 * The Browser class contains various class attributes that indicate basic properties
		 * of the browser and whether certain features are enabled.
		 */ 
		Browser: BrowserStatic<Browser, BrowserProps>;

		/** 
		 * BrowserPlugin extends Canvas
		 * Container for a Browser Plugin.
		 */ 
		BrowserPlugin: BrowserPluginStatic<BrowserPlugin, BrowserPluginProps>;

		/** 
		 * Button extends StatefulCanvas
		 * The Button widget class implements interactive, style-based button widgets.
		 */ 
		Button: ButtonStatic<Button, ButtonProps>;

		/** 
		 * ButtonItem extends CanvasItem
		 * FormItem for adding a Button to a form.
		 */ 
		ButtonItem: ButtonItemStatic<ButtonItem, ButtonItemProps>;

		/** 
		 * Calendar extends Canvas
		 * The Calendar component provides several different ways for a user to view and
		 * edit a set of events. Note that the loadingOptionalModules','Calendar module 
		 * must be loaded to make use of the Calendar class.
		 * 
		 * CalendarEvents
		 * 
		 * Events are represented as ordinary JavaScript Objects (see CalendarEvent). 
		 * The Calendar expects to be able to read and write a basic set of properties 
		 * on events: name, startDate, endDate, description, etc, which can be stored 
		 * under configurable property names (see eg Calendar.startDateField).
		 * 
		 * Much like a ListGrid manages it's ListGridRecords, the Calendar can 
		 * either be passed an ordinary Array of CalendarEvents or can fetch data from a 
		 * DataSource. When this is the case, if the DataSource 
		 * does not contain fields with the configured property names, an attempt is made to 
		 * auto-detect likely-looking fields from those that are present. To see logs indicating that 
		 * this has happened, switch default logging preferences to INFO level in the Developer Console.
		 * 
		 * If the calendar is bound to a DataSource, event changes by user action or by 
		 * calling methods will be saved to the DataSource.
		 * 
		 * Navigation
		 * 
		 * The calendar supports a number of views by default: Calendar.dayView','day,
		 * Calendar.weekView','week, Calendar.monthView','month and 
		 * Calendar.timelineView','timeline. The user can navigate using back and forward 
		 * buttons or via an attached Calendar.dateChooser','DateChooser.
		 * 
		 * Event Manipulation
		 * 
		 * Events can be created by clicking directly onto one of the views, or via the 
		 * Calendar.addEventButton','Add Event button. In the day, week and timeline views, the user may 
		 * click and drag to create an event of a specific duration.
		 * 
		 * Creating an event via click or click and drag pops up the
		 * Calendar.eventDialog','EventDialog, which provides a simple form for 
		 * quick event entry (for normal events, only the description is required by default - for 
		 * events that are shown in a Calendar.lanes','lane, that field is also required).
		 * 
		 * A separate editor called the Calendar.eventEditor','EventEditor provides 
		 * an interface for editing all possible properties of an event, including custom 
		 * properties. The EventEditor is used whenever a pre-existing event is being 
		 * edited, and can also be invoked
		 * by the user wherever the simpler EventDialog appears.
		 * 
		 * Events can also be programmatically Calendar.addCalendarEvent','added,
		 * Calendar.removeEvent','removed, or Calendar.updateCalendarEvent','updated.
		 */ 
		Calendar: CalendarStatic<Calendar, CalendarProps>;

		/** 
		 * CalendarView extends ListGrid
		 * CalendarView is a base class, extended by the various views available in a 
		 * Calendar','Calendar.
		 */ 
		CalendarView: CalendarViewStatic<CalendarView, CalendarViewProps>;

		/** 
		 * Callbacks extends Class
		 * This object cannot be used; it exists for documentation purposes only as a place to put
		 * documentation for callback methods, such as the callback for Callbacks.DSCallback','DataSource.fetchData().
		 */ 
		Callbacks: CallbacksStatic<Callbacks, CallbacksProps>;

		/** 
		 * CancelItem extends ButtonItem
		 * Button that cancels any changes in the form, by calling DynamicForm.cancelEditing 
		 * when clicked.
		 * See DynamicForm.cancelEditing for details on what happens when a form editing is 
		 * cancelled.
		 */ 
		CancelItem: CancelItemStatic<CancelItem, CancelItemProps>;

		/** 
		 * Canvas extends BaseWidget
		 * Base class for all SmartClient visual components (except FormItem','FormItems).
		 * 
		 * Canvas provides:
		 * 
		 * basic visual lifecycle support - creation and destruction of HTML via
		 * Canvas.draw','draw() and Canvas.clear','clear(), visibility via
		 * Canvas.show','show() and Canvas.hide','hide(), z-layering via
		 * Canvas.bringToFront','bringToFront() and Canvas.sendToBack','sendToBack().
		 * consistent cross-browser Canvas.moveTo','positioning,
		 * Canvas.resizeTo','sizing and Canvas.getScrollHeight','size detection, with
		 * automatic compensation for CSSStyleName','browser CSS behavior differences.
		 * clipping, scrolling and overflow management of content via Canvas.overflow
		 * consistent cross-browser Canvas.keyPress','key and Canvas.mouseDown','mouse
		 * events, including mobileDevelopment','mapping touch events to mouse events
		 * built-in drag and drop capabilities including Canvas.canDragReposition','moving, 
		 * Canvas.canDragResize','resizing, Canvas.canDragScroll','drag scrolling
		 * and Canvas.snapToGrid','snap-to-grid behavior.
		 * the ability to either contain Canvas.contents','HTML content or
		 * Canvas.children','contain other Canvases, including 
		 * Canvas.snapTo','an edge-based positioning and 
		 * Canvas.percentSource','percent sizing system for children. For more advanced layout
		 * capabilities, see Layout.
		 * various other details like Canvas.cursor','cursors,
		 * Canvas.showClickMask','modal masking, Canvas.animateMove','animation,
		 * Canvas.ariaRole','accessibility properties, and
		 * Canvas.locateChildrenBy','settings for automatedTesting','automated testing.
		 * 
		 */ 
		Canvas: CanvasStatic<Canvas, CanvasProps>;

		/** 
		 * CanvasEditProxy extends EditProxy
		 * EditProxy that handles Canvas','Canvas objects when editMode is enabled.
		 */ 
		CanvasEditProxy: CanvasEditProxyStatic<CanvasEditProxy, CanvasEditProxyProps>;

		/** 
		 * CanvasItem extends FormItem
		 * FormItem which renders a Canvas inline in a DynamicForm instance.
		 * 
		 * CanvasItem is CanvasItem.shouldSaveValue','shouldSaveValue:false by default, meaning that
		 * no value from the CanvasItem will be present in DynamicForm.getValues and no value will be
		 * saved when DynamicForm.saveData is called. This is appropriate if the Canvas does
		 * not participate in editing a value of the form and is embedded in the form for layout or UI
		 * purposes only (e.g. ButtonItem, SectionItem). Note that some built-in CanvasItem
		 * types override the shouldSaveValue default to true (e.g. MultiComboBoxItem, RichTextItem).
		 * 
		 * If you set FormItem.shouldSaveValue','shouldSaveValue:true, a 
		 * CanvasItem.showValue','showValue event will be raised to provide a value that your
		 * item should display. Handle this event by calling methods on the Canvas you've created
		 * to cause the value to be displayed.
		 * 
		 * The CanvasItem.showValue','showValue event will be triggered in various situations where
		 * the form receives data, including a call to DynamicForm.setValues,
		 * DynamicForm.editRecord, or if DynamicForm.fetchData is called and a Record
		 * is returned. Bear in mind that the showValue event can be called when the form
		 * and your item have not yet been drawn; in this case, store the value for later display.
		 * 
		 * To provide a value to the form, call CanvasItem.storeValue whenever the user changes
		 * the value in your Canvas. Generally, if storeValue() is called then
		 * CanvasItem.shouldSaveValue','shouldSaveValue should be overridden to true. Note that
		 * the form will not call getValue() in order to discover your item's value, so there is
		 * no purpose in overriding this method; instead, call storeValue() to proactively inform the
		 * form about changes to the value. This approach is necessary in order to enable change events.
		 * 
		 * If you cannot easily detect changes to values in your Canvas, a workaround is to call
		 * storeValue right before the form saves.
		 */ 
		CanvasItem: CanvasItemStatic<CanvasItem, CanvasItemProps>;

		/** 
		 * CellSelection extends Class
		 * Maintains a representation of selection over a 2-dimensional grid of objects.
		 * Automatically created to manage cell-selection on CubeGrid widgets.
		 */ 
		CellSelection: CellSelectionStatic<CellSelection, CellSelectionProps>;

		/** 
		 * CheckboxItem extends FormItem
		 * Checkbox form item, implemented with customizable checkbox images.
		 */ 
		CheckboxItem: CheckboxItemStatic<CheckboxItem, CheckboxItemProps>;

		/** 
		 * CheckboxItemEditProxy extends FormItemEditProxy
		 * EditProxy that handles CheckboxItem when editMode is enabled.
		 */ 
		CheckboxItemEditProxy: CheckboxItemEditProxyStatic<CheckboxItemEditProxy, CheckboxItemEditProxyProps>;

		/** 
		 * The Class object is root of the Isomorphic SmartClient inheritance tree -- it includes
		 * functionality for creating instances, adding methods and properties, getting prototypes,
		 * etc.
		 * 
		 * To add functionality to ALL classes, add them to Class.
		 * 
		 * To create a Class, call ClassFactory.defineClass("MyClass", "MySuperClass")
		 * 
		 * defineClass will return the created class, and make it available as
		 * isc.MyClass, and as the global variable MyClass if not in
		 * isc','portal mode.
		 * 
		 * You can then:
		 * 
		 * add class-level (static) properties and methods to the class:
		 * MyClass.addClassProperties() 
		 * these methods and properties are accessed through the Class variable itself, eg:
		 * MyClass.someStaticMethod() or MyClass.someStaticProperty
		 * 
		 * add default instance properties and methods to the class:
		 * MyClass.addProperties()
		 * these methods and properties are accessed through a class instance, eg:
		 * var myInstance = MyClass.create();
		 * myInstance.someInstanceMethod()
		 * 
		 * create new instances of this class:
		 * var myInstance = MyClass.create()
		 * 
		 * NOTE: as a convention, all class names begin with a capital letter and all instances begin
		 * with a lower case letter.
		 */ 
		Class: ClassStatic<Class, ClassProps>;

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
		ClassFactory: ClassFactoryStatic;

		/** 
		 * ColorItem extends TextItem
		 * Form item for selecting a color via a pop-up ColorPicker.
		 */ 
		ColorItem: ColorItemStatic<ColorItem, ColorItemProps>;

		/** 
		 * ColorPicker extends Window
		 * The ColorPicker widget allows the user to select a color from anywhere in the 
		 * color spectrum. It also supports selecting the alpha (opacity) value of the 
		 * color. The picker supports a simple mode - which allows for one-click selection
		 * from a standard palette of colors - and a complex mode which allow the user to
		 * define any conceivable color. It is possible for the user to switch from simple
		 * mode to complex by interacting with the widget. In general, the widget provides
		 * very similar functionality to the color picker dialogs found in graphics packages
		 * and other desktop software.
		 */ 
		ColorPicker: ColorPickerStatic<ColorPicker, ColorPickerProps>;

		/** 
		 * ColorPickerItem extends ColorItem
		 * Form item for selecting a color via a pop-up ColorPicker. This is an alias of
		 * ColorItem.
		 */ 
		ColorPickerItem: ColorPickerItemStatic<ColorPickerItem, ColorPickerItemProps>;

		/** 
		 * ColumnTree extends Layout
		 * The SmartClient system supports hierarchical data (also referred to as tree data
		 * due to its "branching" organization) with:
		 * 
		 * the Tree class, which manipulates hierarchical data sets
		 * the TreeGrid widget class, which extends the ListGrid class to visually
		 * present tree data in an expandable/collapsible format.
		 * the ColumnTree widget class, which visually
		 * presents tree data in a so-called 
		 * "<a href=http://en.wikipedia.org/wiki/Miller_Columns>Miller Column</a>" format.
		 * 
		 * For information on DataBinding Trees, see treeDataBinding.
		 * 
		 * A ColumnTree shows a single branch of the underlying Tree horizontally, from 
		 * left to right. Thus, the leftmost column shows all the top-level nodes. When the user clicks
		 * one of those nodes, a new column is shown immediately to the right of the top-level column,
		 * showing the selected node's children. Additional columns are shown as required to present
		 * lower-level children. The behavior of ColumnTree is similar to that of the Browser interface
		 * in the Apple&trade; iTunes&trade; application.
		 */ 
		ColumnTree: ColumnTreeStatic<ColumnTree, ColumnTreeProps>;

		/** 
		 * ComboBoxItem extends TextItem
		 * The Combobox is a text input field which can show a list of options via a drop-down
		 * PickList.
		 * 
		 * The set of options will be filtered based on the current value in the text field, so only
		 * options that match what has been typed so far will be displayed.
		 * The set of options can be derived from a ValueMap or dynamically retrieved from a
		 * dataSource. See the PickList interface for further settings.
		 * 
		 * The two most common use cases for ComboBoxItems are:
		 * With ComboBoxItem.addUnknownValues set to true, the ComboBoxItem acts as a
		 * freeform text entry field with the picklist providing essentially a set of suggested completions
		 * similar to a URL bar in a web browser.
		 * With ComboBoxItem.addUnknownValues set to false, the ComboBoxItem acts similarly
		 * to a SelectItem where a fixed set of options is available to the user and the text entry field
		 * is essentially used to filter which of these options are visible
		 * 
		 * Other commonly used settings to configure ComboBoxItem behavior are:
		 * - ComboBoxItem.defaultToFirstOption - this will select the first option from the pickList
		 * as a default value for the item - and
		 * - ComboBoxItem.completeOnTab which causes the
		 * current selection in the pickList (if there is one) to be chosen when the user tabs out of the
		 * field, allowing a user to type a few characters and hit tab to auto-complete to the first matched
		 * option. completeOnTab is automatically set to true if ComboBoxItem.addUnknownValues','addUnknownValues is 
		 * false.
		 * 
		 * ComboBoxItem does not provide built-in support for multiple selection. For a Combobox
		 * that does provide such a multiple-select feature use MultiComboBoxItem.
		 */ 
		ComboBoxItem: ComboBoxItemStatic<ComboBoxItem, ComboBoxItemProps>;

		/** 
		 * Comm extends Class
		 * Provides background communication with an HTTP server
		 */ 
		Comm: CommStatic<Comm, CommProps>;

		/** 
		 * CubeGrid extends ListGrid
		 * The CubeGrid is an interactive grid component that presents very large, multi-dimensional
		 * data sets (also known as data cubes) for reporting or analytic applications.
		 * 
		 * CubeGrids are often called crosstabs, for their cross-tabular display of data dimensions in
		 * stacked/nested rows and columns, or pivot tables, for their ability to "pivot" dimensions
		 * between rows and columns to view a data cube from different perspectives. They are typically
		 * used in the querying and reporting front-ends of data warehousing, decision support, OLAP,
		 * and business intelligence systems.
		 * 
		 * For example, CubeGrids can be connected to Pentaho Mondrian, Jasper Reports, Microsoft
		 * Analysis Services and any other OLAP technology that supports the XMLA standard - the
		 * Isomorphic public wiki has 
		 * <a href='http://wiki.smartclient.com/pages/viewpage.action?pageId=1441839' target='_blank'>examples</a>.
		 * of such integration.
		 * 
		 * NOTE: you must load the Analytics 
		 * loadingOptionalModules','Optional Module before you can use CubeGrid.
		 * 
		 * Multi-Dimensional Data Terminology
		 * 
		 * The CubeGrid refers to the dimensions of a data cube as facets, to the possible values in
		 * each facet as facet values, and to the values within the data cube as data values or cell
		 * values. Equivalent terms that are commonly used in data warehousing or business intelligence
		 * systems include:
		 * facet: dimension, attribute, feature
		 * facet value: dimension member, attribute value, feature value
		 * cell value: data value, metric value, measure
		 * 
		 * Visual Structure
		 * 
		 * Like the ListGrid and TreeGrid components, the CubeGrid displays data values in a tabular
		 * "body" with adjacent "headers". While the ListGrid and TreeGrid display rows of records
		 * with field values, the CubeGrid displays a body of individual cell values, each associated
		 * with a combination of facet values. The facet values for a cell are displayed in the column
		 * headers above the cell and row headers to the left of the cell. CubeGrids can display an
		 * arbitrary number of facets, by stacking multiple levels of row and/or column headers.
		 * 
		 * Except for the innermost column facet, each facet in a CubeGrid has a facet label adjacent
		 * to its row or column headers. The facet labels serve two main purposes: they display the
		 * titles of the facets, and they provide drag-and-drop reordering or pivoting of facets within
		 * the CubeGrid. The row facet labels also provide interactive selection, resizing, and other
		 * operations on the columns of row facet values.
		 * 
		 * The innermost column headers provide special behaviors and controls for manipulating the
		 * columns of data in a CubeGrid. End users may select, resize, reorder, minimize, maximize, or
		 * auto-fit the columns of data via mouse interactions with these headers. Customizable
		 * indicators and controls may be included at the top of each innermost column header.
		 * 
		 * If a CubeGrid is not large enough to display all of its cell values, horizontal and/or
		 * vertical scrollbars will appear below and to the right of the body. The body of the CubeGrid
		 * may be scrolled on either axis. The headers are "frozen" from scrolling on one axis - row
		 * headers only scroll vertically, while column headers only scroll horizontally - so the facet
		 * values for the visible cells are always displayed.
		 * 
		 * Data Loading
		 * 
		 * Data can be provided to the Cube via CubeGrid.data as an Array of
		 * CellRecord','CellRecords, each representing the data for one cell.
		 * 
		 * For large datasets, CubeGrid.dataSource','provide a DataSource with one field per
		 * facetId, and the CubeGrid will load data on demand to fill the visible area, including
		 * lazily loading data for expanding/collapsing tree facets and when facetValues are made
		 * visible programmatically or via menus.
		 * 
		 * Picking Facets
		 * 
		 * By "facet" we mean an aspect of the data which is orthogonal to other aspects of the data,
		 * that is, combining values from any two "facets" should make sense.
		 * 
		 * For example, in sales data, two facets might be "quarter" and "region" - it makes sense to
		 * combine any quarter and region, although for some combinations, there may not be data
		 * available.
		 * 
		 * An example of two aspects that would not be independent facets are "state" and "city"
		 * - it's senseless to combine arbitrary states with arbitrary cities - most combinations are
		 * invalid. Consider instead a Facet.isTree','tree facet that combines "city" and "state"
		 * values. 
		 * 
		 * Note that if "city" and "state" are represented as facets, they may look correct if they are
		 * both on the same axis of the grid and
		 * CubeGrid.hideEmptyFacetValues','hideEmptyFacetValues is used to trim nonsense
		 * combinations, but if the data is CubeGrid.canMoveFacets','pivoted such that "state" and
		 * "city" are on opposing axes, there will be a roughly diagonal "stripe" of data for
		 * combinations of "state" and "city" that make sense, and all other space will be blank. This
		 * is a strong indication that two facets should be represented as a single tree facet instead.
		 */ 
		CubeGrid: CubeGridStatic<CubeGrid, CubeGridProps>;

		/** 
		 * DatabaseBrowser extends Window
		 * A component that connects to a database (and, depending on the RDBMS in use, optionally a 
		 * particular catalog and/or schema) and displays the currently-defined tables, optionally 
		 * filtered in a variety of ways. It also allows you to view the column details
		 * of a selected table, and optionally retrieves and displays the data currently in that table.
		 * 
		 * The DatabaseBrowser can also create a SmartClient DataSource from any existing SQL table.
		 */ 
		DatabaseBrowser: DatabaseBrowserStatic<DatabaseBrowser, DatabaseBrowserProps>;

		/** 
		 * DataPathItem extends TextItem
		 * TextItem subclass for managing a DataPath
		 */ 
		DataPathItem: DataPathItemStatic<DataPathItem, DataPathItemProps>;

		/** 
		 * DataSource extends Class
		 * A DataSource is data-provider-independent description of a set of objects
		 * that will be loaded, edited and saved within the user interface of your application.
		 * 
		 * Each DataSource consists of a list of DataSource.fields','fields that make up a
		 * DataSource record, along with DataSourceField.type','field types, 
		 * DataSourceField.validators','validation rules, 
		 * DataSourceField.foreignKey','relationships to other DataSources, and other
		 * metadata.
		 * 
		 * The abstract object description provided by a DataSource is easily mapped to a variety of
		 * backend object models and storage schemes. The following table shows analogous terminology
		 * across systems.
		 * <table border=1 class="normal">
		 * <tr>
		 * <td>Isomorphic SmartClient</td>
		 * <td>Relational Database</td>
		 * <td>Enterprise Java Beans (EJB)</td>
		 * <td>Entity/Relationship Modeling</td>
		 * <td>OO/UML</td>
		 * <td>XML Schema/WSDL</td>
		 * <td>LDAP</td>
		 * </tr><tr>
		 * <td>DataSource</td>
		 * <td>Table</td>
		 * <td>EJB class</td>
		 * <td>Entity</td>
		 * <td>Class</td>
		 * <td>Element Schema (ComplexType)</td>
		 * <td>Objectclass</td>
		 * </tr><tr>
		 * <td>Record</td>
		 * <td>Row</td>
		 * <td>EJB instance</td>
		 * <td>Entity instance</td>
		 * <td>Class instance/Object</td>
		 * <td>Element instance (ComplexType)</td>
		 * <td>Entry</td>
		 * </tr><tr>
		 * <td>Field</td>
		 * <td>Column</td>
		 * <td>Property</td>
		 * <td>Attribute</td>
		 * <td>Property/Attribute</td>
		 * <td>Attribute or Element (SimpleType)</td>
		 * <td>Attribute</td>
		 * </tr></table>
		 * 
		 * DataSources can be dataSourceDeclaration','declared in either JavaScript or XML
		 * format, and can also be metadataImport','imported from existing metadata formats,
		 * including XML Schema.
		 * 
		 * Data Binding is the process by which
		 * DataBoundComponent','Data Binding-capable UI components can automatically configure
		 * themselves for viewing, editing and saving data described by DataSources. DataBinding is
		 * covered in the ${isc.DocUtils.linkForDocNode('QuickStartGuide', 'QuickStart Guide')}, Chapter 6, Data
		 * Binding.
		 * 
		 * clientServerIntegration','Data Integration is the process by which a DataSource
		 * can be connected to server systems such as SQL DataBases, Java Object models, WSDL web
		 * services and other data providers. Data Integration comes in two variants: client-side and
		 * server-side. serverDataIntegration','Server-side integration uses the
		 * SmartClient Java-based server to connect to data represented by Java Objects or
		 * JDBC-accessible databases. clientDataIntegration','Client-side integration
		 * connects SmartClient DataSources to XML, JSON or other formats accessible via HTTP.
		 * 
		 * DataSources have a concept of dataSourceOperations','4 core operations ("fetch",
		 * "add", "update" and "remove") that can be performed on the set of objects represented by a
		 * DataSource. Once a DataSource has been integrated with your data store, databinding-capable 
		 * UI components can leverage the 4 core DataSource operations to provide many complete user
		 * interactions without the need to configure how each individual component loads and saves
		 * data.
		 * 
		 * These interactions include ListGrid','grid views, TreeGrid','tree views, 
		 * DetailViewer','detail views, DynamicForm','form-based 
		 * DynamicForm.editRecord','editing and DynamicForm.saveData','saving,
		 * grid-based ListGrid.canEdit','editing and ListGrid.saveByCell','saving,
		 * and custom interactions provided by patternReuse custom
		 * databinding-capable components.
		 */ 
		DataSource: DataSourceStatic<DataSource, DataSourceProps>;

		/** 
		 * DataView extends VLayout
		 * A DataView coordinates the asynchronous loading of WSDL WebService and XML Schema
		 * definitions in applications created by Visual Builder.
		 * 
		 * For applications that do not use WSDL Web Services and were not created by Visual Builder,
		 * DataView is equivalent to it's superclass VLayout.
		 */ 
		DataView: DataViewStatic<DataView, DataViewProps>;

		/** 
		 * Extensions to the Date class, including added static methods on the Date object, and
		 * additional instance methods available on all date instances.
		 */ 
		Date: DateStatic;

		/** 
		 * DateChooser extends VLayout
		 * Simple interactive calendar interface used to pick a date.
		 * Used by the DateItem class.
		 */ 
		DateChooser: DateChooserStatic<DateChooser, DateChooserProps>;

		/** 
		 * DateGrid extends ListGrid
		 * A ListGrid subclass that manages calendar views.
		 */ 
		DateGrid: DateGridStatic<DateGrid, DateGridProps>;

		/** 
		 * DateItem extends FormItem
		 * Item for manipulating Dates.
		 * 
		 * Can be rendered as a text field, or as 3 selects for day, month, year. Includes optional
		 * pop-up picker.
		 */ 
		DateItem: DateItemStatic<DateItem, DateItemProps>;

		/** 
		 * DateItemEditProxy extends FormItemEditProxy
		 * EditProxy that handles DateItem when editMode is enabled.
		 */ 
		DateItemEditProxy: DateItemEditProxyStatic<DateItemEditProxy, DateItemEditProxyProps>;

		/** 
		 * DateRangeDialog extends Window
		 * Simple modal dialog for collecting a date range from the end user.
		 */ 
		DateRangeDialog: DateRangeDialogStatic<DateRangeDialog, DateRangeDialogProps>;

		/** 
		 * DateRangeItem extends CanvasItem
		 * Allows a user to select an absolute or relative range of dates via two
		 * RelativeDateItems (if DateRangeItem.allowRelativeDates is true) or two
		 * DateItem','DateItems.
		 * 
		 * The item's FormItem.type','data type is expected to be one of "date" or "datetime" and
		 * dictates whether the dates in the range include a time portion. If unset and the item's 
		 * form is databound, the data type is detected from the associated 
		 * DataSourceField','dataSource field. If there is no such field, or the form is not 
		 * databound, the default data type value is "date".
		 * 
		 * DateRangeItem is just a convenience relative to using two RelativeDateItem or
		 * DateItem controls in a form, then using FormItem.operator and
		 * FormItem.criteriaField to cause them to produce a date range. If you need more
		 * control over layout, validation, event handling or any other aspect of appearance or
		 * behavior, stop using DateRangeItem and use two DateItem/RelativeDateItem controls directly
		 * instead.
		 */ 
		DateRangeItem: DateRangeItemStatic<DateRangeItem, DateRangeItemProps>;

		/** 
		 * DateTimeItem extends DateItem
		 * Subclass of DateItem for manipulating FieldType','datetimes.
		 */ 
		DateTimeItem: DateTimeItemStatic<DateTimeItem, DateTimeItemProps>;

		/** 
		 * DateUtil extends Class
		 * Static singleton class containing APIs for interacting with Dates.
		 */ 
		DateUtil: DateUtilStatic<DateUtil, DateUtilProps>;

		/** 
		 * DecisionGateway extends ProcessElement
		 * Chooses a next element in a Process by evaluating a series of criteria against the
		 * Process.state and choosing the element associated with the criteria that matched, or
		 * a DecisionGateway.defaultElement','defaultElement if none of the criteria match.
		 */ 
		DecisionGateway: DecisionGatewayStatic<DecisionGateway, DecisionGatewayProps>;

		/** 
		 * Deck extends Layout
		 * A simple container that implements the policy that at most one of its contained components
		 * is visible at any given time.
		 * 
		 * The set of mutually exclusive components is specified by Deck.panes, and whichever
		 * component is visible fills the space of the Deck automatically.
		 * 
		 * To switch to a new pane, call Deck.setCurrentPane, or simply call
		 * Canvas.show','show() on the pane directly - the Deck will notice that you
		 * have shown a different pane and hide other panes automatically.
		 * 
		 * Canvas.children','Deck.children may also be used; any components that are specified as children are
		 * unmanaged by the Deck and so can place themselves arbitrarily.
		 * 
		 * Deck achieves its mutually-exclusive display behavior by using the superclass
		 * Layout.members property, which means that properties such as Layout.layoutMargin
		 * and Layout.vPolicy do apply to deck. However, trying to manipulate
		 * deck.members with APIs such as Layout.addMember is not supported and
		 * will have undefined results.
		 */ 
		Deck: DeckStatic<Deck, DeckProps>;

		/** 
		 * DetailViewer extends Canvas
		 * Displays one or more records "horizontally" with one property per line.
		 */ 
		DetailViewer: DetailViewerStatic<DetailViewer, DetailViewerProps>;

		/** 
		 * DetailViewerEditProxy extends CanvasEditProxy
		 * EditProxy that handles DetailViewer components when editMode is enabled.
		 */ 
		DetailViewerEditProxy: DetailViewerEditProxyStatic<DetailViewerEditProxy, DetailViewerEditProxyProps>;

		/** 
		 * Dialog extends Window
		 * Dialogs are a specialized version of Window used for small windows that contain just
		 * a text message or a text mesage with some standard buttons.
		 * 
		 * Many typical modal dialogs such as alerts and confirmations are built into the system with
		 * convenience APIs - see isc.say, isc.warn and
		 * isc.askForValue.
		 * 
		 * Dialogs can be modal or non-modal according to Window.isModal','isModal.
		 * 
		 * NOTE: If you are building a dialog that will involve more than just buttons and a message,
		 * consider starting from the Window class instead, where arbitrary components can be
		 * added to the body area via Window.addItem.
		 * 
		 * This is an example of creating a custom dialog:
		 * 
		 * 
		 * isc.Dialog.create({
		 * message : "Please choose whether to proceed",
		 * icon:"[SKIN]ask.png",
		 * buttons : [
		 * isc.Button.create({ title:"OK" }),
		 * isc.Button.create({ title:"Cancel" })
		 * ],
		 * buttonClick : function (button, index) {
		 * this.hide();
		 * }
		 * });
		 * 
		 * 
		 * 
		 */ 
		Dialog: DialogStatic<Dialog, DialogProps>;

		/** 
		 * DMI extends Class
		 * Static singleton class with APIs for dmiOverview','Direct Method Invocation of
		 * server side methods when running the SmartClient java server.
		 */ 
		DMI: DMIStatic<DMI, DMIProps>;

		/** 
		 * DOMGrid extends TreeGrid
		 * Provides a tree view of any DOM-compliant structure, such as an XML or HTML document.
		 */ 
		DOMGrid: DOMGridStatic<DOMGrid, DOMGridProps>;

		/** 
		 * DoubleItem extends FloatItem
		 * TextForm item for managing a text field that displays a decimal value.
		 */ 
		DoubleItem: DoubleItemStatic<DoubleItem, DoubleItemProps>;

		/** 
		 * DrawBlockConnector extends DrawCurve
		 * DrawItem subclass to render multi-segment, orthogonal-routing paths.
		 */ 
		DrawBlockConnector: DrawBlockConnectorStatic<DrawBlockConnector, DrawBlockConnectorProps>;

		/** 
		 * DrawCurve extends DrawItem
		 * DrawItem that renders cubic bezier curves.
		 */ 
		DrawCurve: DrawCurveStatic<DrawCurve, DrawCurveProps>;

		/** 
		 * DrawDiamond extends DrawItem
		 * DrawItem subclass to render diamond shapes
		 */ 
		DrawDiamond: DrawDiamondStatic<DrawDiamond, DrawDiamondProps>;

		/** 
		 * DrawGroup extends DrawItem
		 * DrawItem subclass to manage a group of other DrawItem instances.
		 * 
		 * A DrawGroup has no local visual representation other than that of its drawItems. Adding items
		 * to a drawGroup allows for central event handling, and allows them to be manipulated
		 * (drawn, scaled, etc) together.
		 * 
		 * DrawItems are added to a DrawGroup by creating the DrawItems with DrawItem.drawGroup
		 * set to the DrawGroup, or by creating a DrawGroup with DrawGroup.drawItems.
		 * 
		 * DrawGroups handle events by having an explicitly specified group rectangle 
		 * (see DrawGroup.getGroupRect). This rectangle has no visual representation within the draw pane
		 * (is not visible) but any user-interactions within the specified coordinates will trigger
		 * group level events.
		 * 
		 * DrawGroups may contain other DrawGroups.
		 */ 
		DrawGroup: DrawGroupStatic<DrawGroup, DrawGroupProps>;

		/** 
		 * DrawImage extends DrawItem
		 * DrawItem subclass to render embedded images.
		 */ 
		DrawImage: DrawImageStatic<DrawImage, DrawImageProps>;

		/** 
		 * DrawItem extends BaseWidget
		 * Base class for graphical elements drawn in a DrawPane. All properties and methods
		 * documented here are available on all DrawItems unless otherwise specified.
		 * 
		 * Each DrawItem has its own local transform that maps its 
		 * DrawItem','local coordinate system to the drawing coordinate system that is shared by
		 * all DrawItems in the same DrawPane (explained DrawPane','here). The local
		 * transform is a combination of rotation, scaling, and other affine transformations. The
		 * DrawItem is first DrawItem.translate','translated, then DrawItem.scale','scaled,
		 * then DrawItem.xShearFactor','sheared in the direction of the x-axis, then
		 * DrawItem.yShearFactor','sheared in the directiton of the y-axis, and then finally
		 * DrawItem.rotation','rotated.
		 * 
		 * Note that DrawItems as such should never be created, only concrete subclasses such as
		 * DrawGroup and DrawLine.
		 * 
		 * See DrawPane for the different approaches to create DrawItems.
		 */ 
		DrawItem: DrawItemStatic<DrawItem, DrawItemProps>;

		/** 
		 * DrawItemEditProxy extends EditProxy
		 * EditProxy that handles DrawItem','DrawItems except for
		 * DrawLabel','DrawLabels when editMode is enabled.
		 */ 
		DrawItemEditProxy: DrawItemEditProxyStatic<DrawItemEditProxy, DrawItemEditProxyProps>;

		/** 
		 * DrawKnob extends Canvas
		 * Canvas that renders a DrawItem into a DrawPane and provides interactivity for
		 * that drawItem, including drag and drop.
		 * 
		 * A DrawKnob can either be initialized with a DrawKnob.knobShape','DrawItem knobShape or created via
		 * the AutoChild pattern.
		 * 
		 * DrawKnobs are used by the DrawItem.knobs','drawItem control knobs subsystem.
		 */ 
		DrawKnob: DrawKnobStatic<DrawKnob, DrawKnobProps>;

		/** 
		 * DrawLabel extends DrawItem
		 * DrawItem subclass to render a single-line text label.
		 */ 
		DrawLabel: DrawLabelStatic<DrawLabel, DrawLabelProps>;

		/** 
		 * DrawLabelEditProxy extends DrawItemEditProxy
		 * EditProxy that handles DrawLabel','DrawLabels when editMode is enabled.
		 */ 
		DrawLabelEditProxy: DrawLabelEditProxyStatic<DrawLabelEditProxy, DrawLabelEditProxyProps>;

		/** 
		 * DrawLine extends DrawItem
		 * DrawItem subclass to render line segments.
		 */ 
		DrawLine: DrawLineStatic<DrawLine, DrawLineProps>;

		/** 
		 * DrawLinePath extends DrawItem
		 * DrawItem subclass to render a connector between two points. If the points are aligned
		 * on one axis, this connector will draw as a straight line. If the points are offset on
		 * both axes and there is enough space, the connector will by default draw short horizontal 
		 * segments from the start and end points, and a diagonal segment connecting the ends of these
		 * 'tail' segments. Connector style and orientation defaults may be changed through
		 * configuration.
		 */ 
		DrawLinePath: DrawLinePathStatic<DrawLinePath, DrawLinePathProps>;

		/** 
		 * DrawOval extends DrawItem
		 * DrawItem subclass to render oval shapes, including circles.
		 */ 
		DrawOval: DrawOvalStatic<DrawOval, DrawOvalProps>;

		/** 
		 * DrawPane extends Canvas
		 * A DrawPane is a container for drawing bitmap and vector graphics using browser's built-in
		 * freeform drawing capabilities. These include the HTML5 &lt;canvas&gt; tag and
		 * SVG (Scalable Vector Graphics) where available, and the VML (Vector Markup
		 * Language) for legacy browsers (Internet Explorer 8 and earlier).
		 * 
		 * To draw in a DrawPane you create DrawLines, DrawOvals,
		 * DrawPaths and other DrawItem-based components, and place them in the
		 * DrawPane via DrawPane.drawItems or add them incrementally via
		 * DrawPane.addDrawItem.
		 * 
		 * DrawItems support a variety of common features, such as 
		 * Gradient','gradient fills, DrawItem.startArrow','arrowheads, events such as
		 * DrawItem.click','click() and built-in DrawItem.knobs','control knobs for end user
		 * resizing and manipulation of shapes.
		 * 
		 * Common shapes such as DrawRect','rectangles, DrawOval','ovals and
		 * DrawTriangle','triangles have dedicated DrawItem subclasses. For other shapes,
		 * consider:
		 * 
		 * DrawPath - a multi-segment line with straight segments, defined by a series
		 * of DrawPath.points','points
		 * DrawPolygon - a closed shape with straight sides, defined by a series of
		 * DrawPolygon.points','points
		 * DrawShape - a multi-segment line or closed shape whose sides can be defined by a
		 * series of commands, including curved arcs
		 * 
		 * 
		 * 
		 * 
		 * <h3>Note on Coordinate Systems</h3>
		 * There are three different coordinate systems involved when a DrawItem is drawn onto a DrawPane:
		 * 
		 * The "local coordinate system" for a DrawItem refers to the Cartesian coordinate system
		 * in which dimensional and positional values are interpreted. For example, when a
		 * DrawRect is configured with left:20, top:30, width:200, and height:100, the
		 * DrawRect represents a rectangle from (20, 30) to (220, 130) in its local coordinate
		 * system. For this same DrawRect, DrawRect.top','top is going to be 30 even if
		 * the shape is scaled by 3x, such that the (transformed) top coordinate in the drawing
		 * coordinate system actually lies outside the visible region of the DrawPane. Similarly,
		 * no matter what rotation is applied, DrawRect.top','top will continue to be 30.
		 * 
		 * Use DrawItem.getBoundingBox to obtain the bounding box of the item in local
		 * coordinates. Subclass properties also typically provide data in the local coordinate
		 * system, such as DrawRect.left, DrawRect.top, DrawRect.width,
		 * DrawRect.height, DrawPath.points, and DrawTriangle.points.
		 * 
		 * There is a local coordinate system for each DrawItem.
		 * The "drawing coordinate system" refers to the Cartesian coordinate system shared by
		 * all DrawItems after their local transforms, such as DrawItem.scale or
		 * DrawItem.rotation, have been applied.
		 * 
		 * Since DrawGroups pass through applied transforms to the underlying items,
		 * DrawGroup properties such as DrawGroup.left, DrawGroup.top,
		 * DrawGroup.width, and DrawGroup.height, represent coordinates in the drawing
		 * coordinate system, as does therefore DrawGroup.getBoundingBox. The APIs
		 * DrawPane.getDrawingPoint, DrawPane.getDrawingX, and
		 * DrawPane.getDrawingY, also return drawing coordinates.
		 * 
		 * For DrawItems with no local transforms, the drawing coordinate system is identical to
		 * the local coordinate system.
		 * The "global coordinate system" refers to the drawing coordinate system with global
		 * DrawPane transforms DrawPane.translate, DrawPane.zoomLevel and
		 * DrawPane.rotation applied.
		 * 
		 * Use DrawItem.getResizeBoundingBox to obtain the bounding box of a
		 * DrawItem in global coordinates. The APIs DrawItem.getPageLeft and 
		 * DrawItem.getPageTop reflect global coordinates rounded to the nearest pixel and
		 * offset by the page-relative coordinates of the DrawPane's top left corner.
		 * (See for example Canvas.getPageLeft and Canvas.getPageTop.)
		 * 
		 * With the default global transforms, the global coordinate system is identical to the
		 * drawing coordinate system.
		 * 
		 * 
		 * The view port of the DrawPane is the rectangle in the global coordinate system from (0, 0)
		 * that is as wide as the DrawPane's Canvas.getInnerContentWidth','inner content width
		 * and as high as the DrawPane's Canvas.getInnerContentHeight','inner content height.
		 * Note: In the case of a FacetChart showing a FacetChart.canZoom','zoom chart,
		 * the view port height is decreased by the height of the zoom chart.
		 * 
		 * One other coordinate system in use by a DrawPane when DrawPane.canDragScroll','drag-scrolling
		 * is enabled is the "viewbox coordinate system". The viewbox coordinate system is the drawing
		 * coordinate system with the DrawPane.translate and DrawPane.zoomLevel transforms
		 * applied.
		 */ 
		DrawPane: DrawPaneStatic<DrawPane, DrawPaneProps>;

		/** 
		 * DrawPaneEditProxy extends CanvasEditProxy
		 * EditProxy that handles DrawPane','DrawPanes when editMode is enabled.
		 */ 
		DrawPaneEditProxy: DrawPaneEditProxyStatic<DrawPaneEditProxy, DrawPaneEditProxyProps>;

		/** 
		 * DrawPath extends DrawItem
		 * Draws a multi-segment line.
		 */ 
		DrawPath: DrawPathStatic<DrawPath, DrawPathProps>;

		/** 
		 * DrawPolygon extends DrawPath
		 * DrawItem subclass to render polygons
		 */ 
		DrawPolygon: DrawPolygonStatic<DrawPolygon, DrawPolygonProps>;

		/** 
		 * DrawRect extends DrawItem
		 * DrawItem subclass to render rectangle shapes, optionally with rounded corners.
		 */ 
		DrawRect: DrawRectStatic<DrawRect, DrawRectProps>;

		/** 
		 * DrawSector extends DrawItem
		 * DrawItem subclass to render Pie Slices.
		 */ 
		DrawSector: DrawSectorStatic<DrawSector, DrawSectorProps>;

		/** 
		 * DrawShape extends DrawItem
		 * DrawItem to render a shape defined by executing the series of drawing commands in the
		 * DrawShape.commands','commands array.
		 */ 
		DrawShape: DrawShapeStatic<DrawShape, DrawShapeProps>;

		/** 
		 * DrawTriangle extends DrawPolygon
		 * DrawItem subclass to render triangles
		 */ 
		DrawTriangle: DrawTriangleStatic<DrawTriangle, DrawTriangleProps>;

		/** 
		 * DSResponse extends RPCResponse
		 * Response sent by the server in response to a DSRequest','DataSource request. Contains
		 * all the properties available on the basic RPCResponse, in addition to the
		 * properties listed here.
		 */ 
		DSResponse: DSResponseStatic<DSResponse, DSResponseProps>;

		/** 
		 * DynamicForm extends Canvas
		 * The DynamicForm manages a collection of FormItems which represent user input controls. The
		 * DynamicForm provides formLayout','layout, value management, validation and
		 * databinding for the controls it manages.
		 * 
		 * 
		 * 
		 * To create a DynamicForm, set DynamicForm.fields to an Array of Objects describing the
		 * FormItems you want to use. For example:
		 * 
		 * isc.DynamicForm.create({
		 * fields:[
		 * {name:"userName", type:"text"}, // creates a TextItem
		 * {name:"usState", type:"select"} // creates a SelectItem
		 * ]
		 * })
		 * 
		 * 
		 * The item name is an identifier for the item that must be unique just within
		 * this form. It is used:
		 * 
		 * as the name under which the item's value is stored in the form (the form's
		 * current values are accessible as DynamicForm.getValues','form.getValues()
		 * when retrieving the FormItem's current value (via
		 * DynamicForm.getValue','form.getValue()) 
		 * to retrieve the item itself via DynamicForm.getItem','form.getItem()
		 * 
		 * FormItems can also be created by binding the form to a DataSource via
		 * setDataSource(). In this case, FormItems are
		 * chosen based on the data type of the field - see FormItemType. You can override
		 * the automatically chosen FormItem via DataSourceField.editorType. 
		 * 
		 * When using DataSource binding, you can also add additional FormItems not specified in the
		 * DataSource, or override any properties on the automatically generated FormItems, without
		 * having to re-declare any information that comes from the DataSource. See the QuickStart
		 * Guide chapter on Data Binding for an overview.
		 * 
		 * All FormItems share a common set of properties for controlling formLayout','form\n layout. Other properties common to all FormItems are documented on the FormItem
		 * class, and properties specific to particular FormItems are documented on the respective
		 * FormItems. 
		 * 
		 * NOTE: For very simple forms consisting of exactly one item, you still use a DynamicForm.
		 * See the "fontSelector" form in the toolstrip', 'Toolstrip example.
		 */ 
		DynamicForm: DynamicFormStatic<DynamicForm, DynamicFormProps>;

		/** 
		 * EdgedCanvas extends Canvas
		 * EdgedCanvas acts as a decorative, image-based frame around another single Canvas.
		 */ 
		EdgedCanvas: EdgedCanvasStatic<EdgedCanvas, EdgedCanvasProps>;

		/** 
		 * EditContext extends Class
		 * An EditContext provides an editing environment for a set of components.
		 * 
		 * An EditContext is typically populated by adding a series of EditNode','EditNodes created via a
		 * Palette, either via drag and drop creation, or when loading from a saved version,
		 * via EditContext.addFromPaletteNode','addFromPaletteNode() or 
		 * EditContext.addPaletteNodesFromXML','addPaletteNodesFromXML().
		 * 
		 * An EditContext then provides interfaces for further editing of the components represented
		 * by EditNodes.
		 * 
		 * Developers may explicitly define an edit context and initialize it with a
		 * EditContext.rootComponent - the root of the user interface being created.
		 * The EditContext itself is not visible to the user, but the root component's 
		 * EditNode.liveObject','liveObject may be.
		 * As child editNodes are added to the rootComponent node or its descendants, liveObjects
		 * in the user will update to reflect these changes. The live objects for the
		 * edit nodes will be nested using the appropriate parent-child relationships, for 
		 * the types of node in question. For example Canvases will be added as
		 * Layout.members','members of layouts and FormItems will be added as 
		 * DynamicForm.fields','fields of DynamicForms.
		 * 
		 * To enable drag and drop creation of widgets from a Palette, a developer can
		 * use Canvas.setEditMode to enable editing behaviors on the live object of the
		 * desired drop target (typically the root component).
		 * To enable editNode creation via double-click on a Palette, developers can set
		 * the Palette.defaultEditContext.
		 * 
		 * Developers can also make use of EditPane or EditTree classes which provide
		 * a visual interface for managing an EditContext.
		 */ 
		EditContext: EditContextStatic<EditContext, EditContextProps>;

		/** 
		 * EditPane extends Canvas
		 * A container that allows drag and drop instantiation of visual components from a
		 * Palette, and direct manipulation of the position and size of those components.
		 * 
		 * Any drag onto an EditPane from a Palette will add an EditNode created from the dragged
		 * PaletteNode.
		 * 
		 * EditPane automatically creates an EditContext and provides several APIs and
		 * settings that are passthroughs to the underlying EditContext for convenience.
		 */ 
		EditPane: EditPaneStatic<EditPane, EditPaneProps>;

		/** 
		 * EditProxy extends Class
		 * An EditProxy is attached to an editable component when editMode is enabled. This proxy
		 * has methods and properties which affect the component during editing.
		 */ 
		EditProxy: EditProxyStatic<EditProxy, EditProxyProps>;

		/** 
		 * EditTree extends TreeGrid
		 * A TreeGrid that allows drag and drop creation and manipulation of a tree of 
		 * objects described by DataSources.
		 * 
		 * Nodes can be added via drag and drop from a Palette or may be programmatically 
		 * added via EditContext.addNode','addNode(). Nodes may be dragged within the tree to reparent 
		 * them.
		 * 
		 * Eligibility to be dropped on any given node is determined by inspecting the
		 * DataSource of the parent node. Drop is allowed only if the parent schema has
		 * a field which accepts the type of the dropped node.
		 * 
		 * On successful drop, the newly created component will be added to the parent node under the
		 * detected field. Array fields, declared by setting
		 * dataSourceField.multiple:true, are supported. 
		 * 
		 * An EditTree is initialized by setting EditTree.rootComponent or
		 * EditTree.editContext. EditTree.data (the Tree instance) should never be directly
		 * set or looked at.
		 * 
		 * EditTree automatically creates an EditContext and provides several APIs and
		 * settings that are passthroughs to the underlying EditContext for convenience.
		 */ 
		EditTree: EditTreeStatic<EditTree, EditTreeProps>;

		/** 
		 * EventCanvas extends VLayout
		 * The EventCanvas component is a lightweight VLayout','layout subclass for 
		 * displaying a CalendarEvent in a CalendarView.
		 * 
		 * Each instance can be CalendarEvent.styleName','styled, and can render a single area,
		 * or separate EventCanvas.showHeader','header and EventCanvas.showBody','body
		 * areas, for the look of a Window.
		 * 
		 * The component's close and context buttons, and any necessary resizers, are
		 * shown on EventCanvas.showRolloverControls','rollover.
		 */ 
		EventCanvas: EventCanvasStatic<EventCanvas, EventCanvasProps>;

		/** 
		 * EventHandler extends Class
		 * 
		 * The ISC system provides a predictable cross-browser event-handling mechanism for ISC
		 * widgets. Events can be handled both at the page level (i.e., globally), and at the level of
		 * individual widgets.
		 * 
		 * With the exception of a few page-specific events ('load', 'unload', 'idle' and 'resize'),
		 * events are processed in the following sequence:
		 * 
		 * 1. The event is sent to any global (page-level) event handlers. These handlers can cancel
		 * further propagation of the event by returning false. You can register to listen for any of the
		 * events linked in the seeAlso section (below) by calling Page.setEvent
		 * method.
		 * 
		 * 2. If the event occurred on a form element or a link, it is passed on to the browser so that
		 * the element will perform its default action. No widget receives the event.
		 * 
		 * 3. If the event occurred on an enabled widget (but not on a form element or link inside
		 * the widget), it is sent to that widget's event handler, if any. This handler can cancel
		 * further propagation of the event by returning false. An "enabled" widget is any widget that
		 * defines an event handler for one of the supported events. Interceptable events are defined in
		 * the Canvas#methods#events','"widgetEvents" section of Canvas.
		 * 
		 * 4. The event is "bubbled" up to the widget's parent in the containment hierarchy, if any.
		 * Again, the parent's handler for the event can cancel further propagation by returning
		 * false. This step is repeated, with the event "bubbling" up through the containment
		 * hierarchy, until a top-level widget is reached or the event is explicitly canceled.
		 * In brief, the ISC event model offers the best features of browser event models:
		 * 
		 * Page-first event handling allows you to reliably process or cancel any event before it
		 * affects the objects on the page.
		 * Event "bubbling" ensures that parent widgets receive events sent to their children,
		 * and allows you to create generalized parent-level handlers rather than duplicating
		 * code in each child.
		 * 
		 * Note: Canceling propagation of an event may cancel its side effects as well, including the
		 * generation of other (synthetic) events. For example, if a global mouseDown handler returns
		 * false, drag-and-drop events will not be generated. Specific effects are discussed in the
		 * descriptions of the various events in the following sections.
		 * 
		 * SmartClient libraries will not interfere with native event handling when events occur
		 * outside of a target widget. You can therefore have HTML that is not ISC-based on the same
		 * page as widget objects that will react to native events as you would expect.
		 * 
		 * You can use isc.Event as an alias for isc.EventHandler.
		 * 
		 * 
		 */ 
		EventHandler: EventHandlerStatic<EventHandler, EventHandlerProps>;

		/** 
		 * EventWindow extends Window
		 * Subclass of Window used to display events within a Calendar. Customize via
		 * Calendar.eventWindow.
		 */ 
		EventWindow: EventWindowStatic<EventWindow, EventWindowProps>;

		/** 
		 * FacadeDataSource extends DataSource
		 * Extends an arbitrary DataSource with the ability to queue requests made on it and
		 * dispatch the queued requests on demand. To use, create a FacadeDataSource instance with
		 * the DataSource.inheritsFrom','inheritsFrom property set to the DataSource that you wish
		 * to extend.
		 * 
		 * This advanced class is intended to be used for testing data-bound components. This should
		 * not be used in production code.
		 * 
		 * See also the overview of the dsFacade','DataSource Facade pattern.
		 */ 
		FacadeDataSource: FacadeDataSourceStatic<FacadeDataSource, FacadeDataSourceProps>;

		/** 
		 * Facet extends Class
		 * Facet definition object made use of by the CubeGrid','CubeGrid and
		 * FacetChart','FacetChart classes.
		 */ 
		Facet: FacetStatic<Facet, FacetProps>;

		/** 
		 * FacetChart extends DrawPane
		 * HTML5-based charting engine, implementing all Chart.chartType','chartTypes of the
		 * Chart interface.
		 * 
		 * Can be used directly, or specified as ListGrid.chartConstructor or
		 * CubeGrid.chartConstructor.
		 * 
		 * NOTE: you must load the Drawing and Charts
		 * loadingOptionalModules','Optional Modules before you can use FacetChart. Also, 
		 * the Charts Module is available in Pro Edition or better, please see 
		 * <a href='http://www.smartclient.com/product' target='_blank'>smartclient.com/product</a> for licensing 
		 * information.
		 * 
		 * To create a FacetChart, set FacetChart.facets to an Array of Facet objects describing the
		 * chart dimensions and FacetChart.valueProperty to value field name. For example:
		 * 
		 * 
		 * isc.FacetChart.create({
		 * facets: [{
		 * id: "season", // the key used for this facet in the data above
		 * title: "Season" // the user-visible title you want in the chart
		 * }],
		 * valueProperty: "temp", // the property in our data that is the numerical value to chart
		 * data: [
		 * {season: "Spring", temp: 79},
		 * {season: "Summer", temp: 102},
		 * {season: "Autumn", temp: 81},
		 * {season: "Winter", temp: 59}
		 * ],
		 * title: "Average temperature in Las Vegas"
		 * });
		 * 
		 * 
		 * 
		 * 
		 * The following SDK examples demonstrate charts with a single facet:
		 * 
		 * logScalingChart', 'Log Scaling example,
		 * dataPointsChart', 'Interactive Data Points example, and
		 * addingElements', 'Adding Element example.
		 * 
		 * See the following SDK examples for examples of charts with multiple facets:
		 * 
		 * simpleChart', 'Simple Chart example,
		 * multiSeriesChart', 'Multi-Series Chart example, and
		 * dynamicDataCharting', 'Dynamic Data example.
		 * 
		 * 
		 * <h3>the Inlined Facet</h3>
		 * 
		 * Having an "inlined facet" is another method to provide data to the chart. In this case each CellRecord
		 * contains multiple data values; one facet definition is considered "inlined", meaning that
		 * the facetValueIds from this facet appear as properties in each Record, and each such
		 * property holds one data value. In this case the singular valueProperty is ignored.
		 * For example:
		 * 
		 * 
		 * isc.FacetChart.create({
		 * facets: [
		 * {
		 * inlinedValues: true,
		 * values: [
		 * {id: "spring", title: "Spring"},
		 * {id: "summer", title: "Summer"},
		 * {id: "autumn", title: "Autumn"},
		 * {id: "winter", title: "Winter"}
		 * ]
		 * }
		 * ],
		 * data: [
		 * {spring: 79, summer: 102, autumn: 81, winter: 59}
		 * ],
		 * title: "Average temperature in Las Vegas"
		 * });
		 * 
		 * Example with two facets:
		 * 
		 * isc.FacetChart.create({
		 * facets: [
		 * {
		 * inlinedValues: true,
		 * values: [
		 * {id: "spring", title: "Spring"},
		 * {id: "summer", title: "Summer"},
		 * {id: "autumn", title: "Autumn"},
		 * {id: "winter", title: "Winter"}
		 * ]
		 * },
		 * {id: "city"}
		 * ],
		 * data: [
		 * {city: "Las Vegas", spring: 79, summer: 102, autumn: 81, winter: 59},
		 * {city: "New York", spring: 60, summer: 83, autumn: 66, winter: 40}
		 * ],
		 * stacked: false,
		 * title: "Average temperatures"
		 * });
		 * 
		 * 
		 * 
		 * 
		 * <h3>Dual axis or multi-axis charts</h3>
		 * 
		 * FacetChart supports drawing multiple vertical axes. This is commonly used to show values
		 * with different units (for example: sales in dollars, total units shipped) and/or very different
		 * ranges (for example: gross revenue, profit) on the same chart. Each set of values, referred
		 * to as a "metric", gets its own axis and gradation marks.
		 * 
		 * To use multiple axes, you add an additional facet called the "metric facet" that specifies
		 * each axis to be plotted as a facetValueId. The metric facet is an inlined facet, so as with
		 * inlined facets in general, each CellRecord has a value for each facetValueId of the metric
		 * facet. You then set FacetChart.extraAxisMetrics','extraAxisMetrics to the list of
		 * metrics that should be plotted as additional axes.
		 * 
		 * For example, if you were plotting revenue and profit for each month of the year, you would
		 * have one facet named "metric" with facetValueIds "revenue" and "profit" and a second facet
		 * "month". Each CellRecord would have the revenue and profit for one month, stored under the
		 * properties "revenue" and "profit". Setting extraAxisMetrics to ["profit"]
		 * would cause profit to be plotted as the second axis. See the
		 * dualAxisChartMA', 'Dual Axis SDK sample for an example.
		 * 
		 * You can have multiple extra axes and the additional axes and gradation tics will be drawn at
		 * increasing distances from the chart. By default, the first metric is drawn as a column chart
		 * and subsequent metrics are drawn as lines; you can override this via
		 * FacetChart.extraAxisSettings','extraAxisSettings. See the
		 * threePlusChartMA', '3+ Axes SDK sample for an example of multiple extra axes.
		 * 
		 * Multi-axis, multi-facet charts are also allowed. Extending the previous example, you might
		 * add a new facet "company", for a total of 3 facets. Each CellRecord would have "revenue"
		 * and "profit" for one combination of "company" and "month". The default appearance in this
		 * case would show revenue as clustered columns (one cluster per month, one column per company)
		 * and would show profit as multiple lines (one per company). See the
		 * multiSeriesChartMA', 'Multi-Series SDK sample for an example of a
		 * multi-axis, multi-facet chart.
		 * 
		 * <h3>Mixed plots</h3>
		 * In some cases you want to show some data series as one shape and other data series as
		 * another shape but use the same axis. This is commonly used when one series is of a
		 * fundamentally different kind than the other series (for example, a projection or average)
		 * but still has the same scale.
		 * 
		 * To achieve a mixed plot like this, define it as a multi-axis chart as explained above, but
		 * set MetricSettings.showAxis false to avoid a second axis appearing, and set
		 * MetricSettings.matchGradations to cause the same gradations to be used for both
		 * plots.
		 * 
		 * See the mixedPlotsChart', 'Mixed Plots SDK example.
		 * 
		 * <h3>Histogram Charts</h3>
		 * 
		 * A "histogram" chart is similar to a FacetChart.stacked','stacked "column" chart, showing
		 * multiple facet values vertically for each position along the x-axis /
		 * FacetChart.getDataLabelFacet','data label facet, but instead of each vertical facet
		 * value being defined only by a length, a "histogram" chart defines a segment for each,
		 * represented by both a start point (the FacetChart.valueProperty','"value property") and
		 * an end point (the FacetChart.endValueMetric','"endValue metric").
		 * 
		 * Segments may overlap, with the last segment drawn receiving the highest z-ordering. To
		 * override this default behavior, values may be provided using an additional metric -
		 * FacetChart.zIndexMetric - whose value must be a non-negative integer no greater than
		 * FacetChart.maxDataZIndex.
		 * 
		 * <h3>Scatter Charts</h3>
		 * 
		 * Scatter charts differ from other chart types in that both axes represent continuous numeric
		 * data rather than a discrete set of facet values (like months of the year). For this reason
		 * Scatter charts use the same concept of a "metric" facet as is used by Dual-Axis charts,
		 * where the metric facet is expected to have exactly two metrics: the
		 * FacetChart.xAxisMetric','xAxisMetric and FacetChart.yAxisMetric','yAxisMetric.
		 * 
		 * Unlike all other chart types, a scatter plot may be specified with only the metric facet.
		 * However one additional facet can be defined, which allows multiple sets of x,y points to be
		 * drawn in different colors, analogous to the different colors of a multi-series line chart.
		 * 
		 * See the scatterPlotCharting', 'Scatter Plot SDK example.
		 * 
		 * Date values on the X axis
		 * 
		 * FacetChart also supports scatter charts where the x-axis represents date- or time-valued
		 * data and the y-axis represents numeric data, as normal. To enable this mode all records in
		 * the data must have values for the facetValueId of the
		 * FacetChart.xAxisMetric','xAxisMetric that are true Date objects, not Strings or
		 * nulls. For these charts, vertical lines are drawn to represent a sequence of
		 * significant datetime values on the x-axis, such as the first day of the month or week. The
		 * mechanism used to select these Dates and format them into the x-axis labels is the same
		 * mechanism used by charts with FacetChart.labelCollapseMode','labelCollapseMode set to
		 * "time".
		 * 
		 * <h3>Bubble Charts</h3>
		 * 
		 * A "bubble" chart is a type of scatter chart where the size of each rendered data
		 * point represents an additional metric value, allowing 3 continuous data values to be
		 * visualized together. When using chartType:"Bubble", the additional metric 
		 * is configured via FacetChart.pointSizeMetric','pointSizeMetric. 
		 * Points will be sized between the FacetChart.minDataPointSize','minDataPointSize and
		 * FacetChart.maxDataPointSize','maxDataPointSize, optionally with 
		 * FacetChart.logScalePointSize','logarithmic scaling. A legend will be included showing 
		 * how point size represents data values, and a multi-facet Bubble chart can optionally use a 
		 * different shape for each facetValue via 
		 * FacetChart.useMultiplePointShapes','useMultiplePointShapes.
		 * 
		 * Variable-size points can also be used with other, non-scatter chart types (such as "Line"
		 * or "Radar") when FacetChart.showDataPoints','showDataPoints is enabled, by setting 
		 * pointSizeMetric to the FacetValue.id of a Facet.values','facetValue
		 * of the metric facet. In this case, a legend for point sizes is not shown by default, but can
		 * be enabled via FacetChart.showPointSizeLegend','showPointSizeLegend.
		 * 
		 * Whenever drawing variable size data points, by default, the largest data points are drawn 
		 * first so that smaller data points are less likely to be completely occluded by larger data 
		 * points, but this can be disabled by setting 
		 * FacetChart.autoSortBubblePoints','autoSortBubblePoints to false. Visual
		 * appearance of data points can be further customized by setting the 
		 * FacetChart.bubbleProperties','bubbleProperties.
		 * 
		 * See the bubbleChart', 'Bubble Chart SDK example.
		 * 
		 * <h3>Color Scale Charts</h3>
		 * 
		 * FacetChart supports rendering an additional metric value as the color of each data
		 * point. This feature requires that FacetChart.showDataPoints','showDataPoints be
		 * enabled and is configured via FacetChart.colorScaleMetric','colorScaleMetric. Instead
		 * of data points being drawn using a separate color for each facetValue of the
		 * legend facet, the data points will be drawn using a color interpolated between the
		 * FacetChart.scaleStartColor','scaleStartColor and
		 * FacetChart.scaleEndColor','scaleEndColor, optionally with
		 * FacetChart.logScalePointColor','logarithmic scaling. A legend is included by default
		 * via FacetChart.showColorScaleLegend','showColorScaleLegend that shows how the data
		 * values are mapped to a color via a gradient over the range of colors used in the chart.
		 * Visual appearance of data points in color scale charts can be further customized by setting
		 * the FacetChart.bubbleProperties','bubbleProperties, just as with bubble charts.
		 * 
		 * Note that when color is being used to show values of the colorScaleMetric then
		 * color cannot be used to distinguish between different facetValues. Therefore
		 * color scale charts cannot have a (non-metric) legend facet.
		 * 
		 * See the colorScaleChart', 'Color Scale Chart SDK example.
		 * 
		 * <h3>Notes on printing</h3>
		 * 
		 * FacetCharts support printing on all supported desktop browsers. When using Pro Edition or 
		 * better with the SmartClient Server Framework installed, charts can also be exported to PDF 
		 * via RPCManager.exportContent or to images via RPCManager.exportImage.
		 */ 
		FacetChart: FacetChartStatic<FacetChart, FacetChartProps>;

		/** 
		 * FacetChartEditProxy extends DrawPaneEditProxy
		 * EditProxy that handles FacetChart','FacetCharts when editMode is enabled.
		 */ 
		FacetChartEditProxy: FacetChartEditProxyStatic<FacetChartEditProxy, FacetChartEditProxyProps>;

		/** 
		 * FieldPicker extends VLayout
		 * FieldPicker provides a configuration dialog that displays, side-by-side, the available and
		 * currently-displayed fields of a DataBoundComponent. It allows for easy customization 
		 * of the order in which the fields of a DataBoundComponent are displayed, and of which
		 * are visible. If so configured, it also allows for convenient launching of the HiliteEditor,
		 * FormulaBuilder, and SummaryBuilder. A FieldPicker instance runs in its own window, 
		 * a FieldPickerWindow
		 */ 
		FieldPicker: FieldPickerStatic<FieldPicker, FieldPickerProps>;

		/** 
		 * FieldPickerField extends Class
		 * Class containing properties that configure the display of
		 * and interaction with the fields showing in a FieldPicker.
		 */ 
		FieldPickerField: FieldPickerFieldStatic<FieldPickerField, FieldPickerFieldProps>;

		/** 
		 * FieldPickerWindow extends Window
		 * A dialog for picking fields to display from among the available fields.
		 * 
		 * This is typically useful in scenarios where there are many more fields than can reasonably
		 * fit on screen. The application can start off displaying a few of the fields by default (such
		 * as the most commonly-needed fields), and show a FieldPickerWindow to allow the user to
		 * customize which fields to display as well as the order in which to display them.
		 */ 
		FieldPickerWindow: FieldPickerWindowStatic<FieldPickerWindow, FieldPickerWindowProps>;

		/** 
		 * FileItem extends CanvasItem
		 * Binary data interface for use in DynamicForms. Allows users to select a single file for
		 * upload. In read-only mode (canEdit:false), can display the contents of "imageFile" fields.
		 * 
		 * 
		 * Editable mode
		 * 
		 * The FileItem.editForm will be automatically generated and displayed as 
		 * CanvasItem.canvas','this.canvas, allowing the user to select file(s) to upload.
		 * 
		 * See the upload','Upload Overview for information on using this control.
		 * 
		 * 
		 * Read-only mode
		 * 
		 * For fields of type "blob" the raw data value will be displayed in the 
		 * generated FileItem.displayForm.
		 * 
		 * For other fields, the FileItem.displayCanvas will be displayed.
		 * 
		 * For "imageFile" fields with FileItem.showFileInline','showFileInline
		 * set to true, the image-file will be streamed and displayed inline within the displayCanvas.
		 * 
		 * Otherwise, the displayCanvas will render out FileItem.viewIconSrc','View and 
		 * FileItem.downloadIconSrc','Download icons and the fileName.
		 */ 
		FileItem: FileItemStatic<FileItem, FileItemProps>;

		/** 
		 * This class enables background (deferred) loading and caching of JS, CSS and Image files. It is
		 * designed to work standalone from the rest of the SmartClient framework to provide a lightweight
		 * caching and loading mechanism for SmartClient modules as well as user-built application
		 * modules/fragments.
		 * 
		 * The most common usage scenarios are:
		 * 
		 * Caching JS, CSS, Image files in the browser in anticipation of a transition to a page
		 * that requires these files. For example, a plain HTML (non-SmartClient) login page or
		 * landing page can begin caching SmartClient in the background while allowing the user
		 * to login, or giving the user something to read. Normally, loading SmartClient or other
		 * large JavaScript files would block page loading and display. By loading SmartClient in
		 * the background only after a simple HTML landing page has loaded, you can completely
		 * eliminate perceived download time associated with loading a rich UI application, making a
		 * much larger difference in user experience than any difference in framework/application size.
		 * Loading a multi-phase UI. In this scenario, an initial rendering of a page is done with
		 * minimal data transfer to the browser. Then JS, CSS, and Image files are fetched in the
		 * background to provide richer UI components. During this time the user can continue to normally
		 * interact with the initial page. Once loading is complete, the UI is updated with richer
		 * components.
		 * 
		 * 
		 * The recommended usage pattern is to use the loadISC custom tag provided as part of
		 * the SmartClient SDK. You can specify cacheOnly="true" to loadISC to cache the
		 * SmartClient framework in the background or alternately defer="true" to load the
		 * SmartClient framework and make it available in the current page. You can specify the
		 * onload attribute of the tag to provide a JavaScript callback to your code that will
		 * be called when the framework loading is complete.
		 * 
		 * If you're not working in a JSP environment, you can use the
		 * FileLoader.cacheISC/FileLoader.loadISC APIs to accomplish
		 * the same effect as the loadISC JSP tag.
		 * 
		 * Additional APIs are provided for performing dynamic caching and loading of other JS, CSS, and
		 * Image files to improve the performance of your application. See below.
		 * 
		 * You must set window.isomorphicDir before loading and using this module unless the
		 * default of '../isomorphic/' is acceptable. E.g. if your html file is in your toplevel webroot
		 * directory, then your HTML file should say (note the trailing slash):
		 * 
		 * &lt;SCRIPT&gt;window.isomorphicDir='isomorphic/'&lt;/SCRIPT&gt;
		 * &lt;SCRIPT SRC=isomorphic/system/modules/ISC_FileLoader.js&gt;&lt;/SCRIPT&gt;
		 * 
		 * In addition, if you are using Smart GWT, you must set FileLoader.modulesDir','modulesDir to
		 * "modules/", as follows:
		 * 
		 * isc.FileLoader.modulesDir = "modules/";
		 * 
		 * 
		 * This module is usable independent of the rest of SmartClient - you can use it on pages that
		 * don't load any other modules. In practice, the general pattern is to use this module on
		 * static HTML pages such as a login page to pre-cache SmartClient modules, application logic,
		 * skin files, and css so that once the user logs in, there's no latency to load the rich UI.
		 * 
		 * You can also load the FileLoader itself dynamically - see FileLoader.ensureLoaded
		 * 
		 * Note: You can also reference this class via the alias isc.FL
		 */ 
		FileLoader: FileLoaderStatic;

		/** 
		 * FilterBuilder extends Layout
		 * A form that allows the user to input advanced search criteria, including operators on
		 * field values such as "less than", and sub-clauses using "AND" and "OR" operators.
		 * 
		 * A FilterBuilder produces an AdvancedCriteria object, which the DataSource
		 * subsystem can use to filter datasets, including the ability to perform such filtering within
		 * the browser for datasets that are completely loaded.
		 * 
		 * The operators available for each field can be customized at the DataSource level via
		 * DataSourceField.validOperators, DataSource.setTypeOperators and related
		 * APIs.
		 */ 
		FilterBuilder: FilterBuilderStatic<FilterBuilder, FilterBuilderProps>;

		/** 
		 * FilterClause extends Layout
		 * A horizontal, Layout-based widget that allows a user to input a single criterion based on 
		 * one field and one operator.
		 * 
		 * Note that FilterClauses must be used in conjunction with a FilterBuilder. By default
		 * the FilterBuilder will auto-generate its clauses based on specified criteria, but for advanced
		 * usage a FilterClause may be instantiated directly and passed to a filterBuilder via 
		 * FilterBuilder.addClause.
		 */ 
		FilterClause: FilterClauseStatic<FilterClause, FilterClauseProps>;

		/** 
		 * Flashlet extends BrowserPlugin
		 * ISC abstraction for Flashlets.
		 */ 
		Flashlet: FlashletStatic<Flashlet, FlashletProps>;

		/** 
		 * FloatItem extends TextItem
		 * 
		 * A TextItem for managing a text field that displays a floating point value. FloatItem is the
		 * default FormItem if the FormItem.type is "float".
		 * 
		 * FloatItem displays its value according to the FormItem.decimalPrecision and
		 * FormItem.decimalPad properties of the FormItem. While the value is being edited,
		 * the item will display the value with its original precision and without extra zero-padding.
		 * 
		 */ 
		FloatItem: FloatItemStatic<FloatItem, FloatItemProps>;

		/** 
		 * FlowLayout extends TileLayout
		 * Arranges a set of Canvas components into rows, flowing into available space so that
		 * different numbers of components may appear in each row.
		 * 
		 * FlowLayout is essentially just a subclass of TileLayout where the
		 * default TileLayout.layoutPolicy is "flow" instead of "fit".
		 */ 
		FlowLayout: FlowLayoutStatic<FlowLayout, FlowLayoutProps>;

		/** 
		 * FontLoader extends Class
		 * Force-loads the custom fonts declared in the skinning','current skin\'s CSS file
		 * and updates any potentially-affected, already-drawn canvii when loading completes. Without
		 * FontLoader, auto-sized canvii that use custom fonts may end up with the wrong size if a page
		 * is loaded when its custom fonts are not available in the browser cache.
		 * 
		 * To disable FontLoader, set &nbsp;window.isc_loadCustomFonts = false&nbsp; before
		 * SmartClient is loaded.
		 * 
		 * If you want to avoid the Framework redrawing canvii after the fonts load, you may want to
		 * code your app to delay drawing anything until the skin fonts are loaded. You can check
		 * FontLoader.isLoadingComplete to see whether loading is done, and if it's not, you
		 * can set a "fontsLoaded" Page.setEvent','page event
		 * to run code
		 * when it's done or
		 * a "fontLoadingFailed" Page.setEvent','page event
		 * to
		 * run code if there's an error.
		 * 
		 * <h3>Advanced Usage</h3>
		 * FontLoader will use the new 
		 * <a href='https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API' target='_blank'>CSS Font Loading API</a>
		 * in browsers in which it's available and has proven reliable. Otherwise, we fall back to
		 * canvas measurement techniques to detect loading. To force fallback and avoid the API, set
		 * &nbsp;window.isc_useCSSFontAPI = false&nbsp;, or to force the API to be used
		 * (where it exists but may be unreliable) set &nbsp;window.isc_useCSSFontAPI = 
		 * true&nbsp, before SmartClient is loaded.
		 * 
		 * If you're loading additional style sheets, beyond the skin, that declare custom fonts with
		 * &#064;font-face, you can request that the FontLoader force-load them as well by
		 * specifying them in window.isc_additionalFonts as an array of the font family
		 * names matching those from the &#064;font-face declarations.
		 */ 
		FontLoader: FontLoaderStatic<FontLoader, FontLoaderProps>;

		/** 
		 * FormEditProxy extends CanvasEditProxy
		 * EditProxy that handles DynamicForm','DynamicForms when editMode is enabled.
		 */ 
		FormEditProxy: FormEditProxyStatic<FormEditProxy, FormEditProxyProps>;

		/** 
		 * FormItem extends Class
		 * A UI component that can participate in a DynamicForm, allowing editing or display of one of
		 * the DynamicForm.values','values tracked by the form.
		 * 
		 * FormItems are never created via the Class.create','create() method,
		 * instead, an Array of plain Object','JavaScript objects are passed as
		 * DynamicForm.items when the form is created.
		 * 
		 * 
		 * 
		 * See the DynamicForm documentation for details and sample code.
		 */ 
		FormItem: FormItemStatic<FormItem, FormItemProps>;

		/** 
		 * FormItemEditProxy extends EditProxy
		 * EditProxy that handles FormItems when editMode is enabled.
		 */ 
		FormItemEditProxy: FormItemEditProxyStatic<FormItemEditProxy, FormItemEditProxyProps>;

		/** 
		 * FormulaBuilder extends VLayout
		 * Shows an interface allowing a user to enter simple formulas by typing them into a text
		 * field.
		 * 
		 * Available values for the formula are determined by the DataSource fields, and are given
		 * simple single-letter aliases (such as "A", "B", ...) similar to column names in Excel.
		 * The set of available values is shown in the FormulaBuilder.fieldKey as a simple
		 * mapping between the DataSourceField.title','field title and it's short name.
		 * 
		 * If FormulaBuilder.targetRuleScope is specified the formula will use full field
		 * path names instead of single-letter aliases and the resulting formula will not include
		 * the formulaVars property.
		 * 
		 * By default, available math functions are shown in a hover from the
		 * FormulaBuilder.helpIcon','helpIcon that appears after the formula field.
		 */ 
		FormulaBuilder: FormulaBuilderStatic<FormulaBuilder, FormulaBuilderProps>;

		/** 
		 * FusionChart extends Flashlet
		 * Component that wraps the FusionCharts charting engine.
		 * 
		 * Provides multiple-series (area, bar, column, line, radar) and single-series (doughnut, pie)
		 * chart types. These charts all depict a single continuous dimension (eg revenue), broken down
		 * by one or two discrete dimensions (eg product, region).
		 * 
		 * NOTE: you must load the PluginBridges and Charts
		 * loadingOptionalModules','Optional Modules before you can use FusionChart.
		 */ 
		FusionChart: FusionChartStatic<FusionChart, FusionChartProps>;

		/** 
		 * Gauge extends DrawPane
		 * The Gauge widget class implements a graphical speedometer-style gauge for displaying
		 * a measurement by means of a needle on a dial. The dial is divided into sectors, each having
		 * its own color and value.
		 * 
		 * NOTE: you must load the Drawing loadingOptionalModules','Optional Module
		 * before you can use Gauge.
		 */ 
		Gauge: GaugeStatic<Gauge, GaugeProps>;

		/** 
		 * GridEditProxy extends LayoutEditProxy
		 * EditProxy that handles ListGrid and TreeGrid components when editMode is enabled.
		 */ 
		GridEditProxy: GridEditProxyStatic<GridEditProxy, GridEditProxyProps>;

		/** 
		 * GridRenderer extends Canvas
		 * A flexible, high-speed table that offers consistent cross-platform sizing, clipping, and events.
		 */ 
		GridRenderer: GridRendererStatic<GridRenderer, GridRendererProps>;

		/** 
		 * GroupingMessages extends Class
		 * Grouping titles that will be displayed when data is grouped
		 * in a ListGrid.
		 */ 
		GroupingMessages: GroupingMessagesStatic<GroupingMessages, GroupingMessagesProps>;

		/** 
		 * HeaderItem extends FormItem
		 * FormItem for showing a header within a DynamicForm.
		 * 
		 * Set the defaultValue of this item to the HTML you want to embed in the form.
		 */ 
		HeaderItem: HeaderItemStatic<HeaderItem, HeaderItemProps>;

		/** 
		 * HibernateBrowser extends Window
		 * A component that connects to a Hibernate configuration and displays the currently-mapped 
		 * entities. It also allows you to view the bean properties of a selected entity, and optionally 
		 * retrieves and displays the data currently in the corresponding database table.
		 * 
		 * The HibernateBrowser can also create a SmartClient DataSource from any existing Hibernate
		 * mapping.
		 */ 
		HibernateBrowser: HibernateBrowserStatic<HibernateBrowser, HibernateBrowserProps>;

		/** 
		 * HiddenItem extends FormItem
		 * HiddenItems track a value but have no visible appearance and do not take up space in the form
		 * layout.
		 * 
		 * When using SmartClient databinding it is usually not necessary to use a HiddenItem, since
		 * the DynamicForm will track values for which no actual form control exists, and will submit
		 * these 'extra' values when DynamicForm.saveData is called. HiddenItems only apply
		 * to forms that are submitted like ordinary HTML forms, via the
		 * DynamicForm.submitForm method.
		 */ 
		HiddenItem: HiddenItemStatic<HiddenItem, HiddenItemProps>;

		/** 
		 * HiddenPalette extends Class
		 * A Palette with no visible representation that handles programmatic creation of components.
		 */ 
		HiddenPalette: HiddenPaletteStatic<HiddenPalette, HiddenPaletteProps>;

		/** 
		 * HiliteEditor extends VLayout
		 * A widget for defining and editing a set of HiliteRule','hilite rules for use by 
		 * DataBoundComponent','dataBoundComponents. Presents a list of available fields 
		 * and allows editing of simple hilites directly and more complex hilites via 
		 * AdvancedHiliteEditors. 
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		HiliteEditor: HiliteEditorStatic<HiliteEditor, HiliteEditorProps>;

		/** 
		 * HiliteRule extends HLayout
		 * A widget for editing the criteria of a single DataBoundComponent hilite. 
		 * The default implementation presents a series of FormItem','formItems
		 * for selecting the various elements of a simple criterion and a foreground or background
		 * color. To specify more complex criteria, specify both foreground and background colors or
		 * to apply the hilite to multiple fields, you can create an 
		 * AdvancedHiliteEditor','advanced hilite rule.
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		HiliteRule: HiliteRuleStatic<HiliteRule, HiliteRuleProps>;

		/** 
		 * This class provides synthetic history support. Using this class, you can create history
		 * entries at any point and be called back when the user next navigates to any of these history
		 * entries via any of the browser mechanisms that enable navigation: back/forward buttons,
		 * history dropdown and bookmarks.
		 * 
		 * The history entries created using this mechanism work just like history entries created
		 * natively by the browser, except you get a callback whenever a transition occurs. This
		 * implementation correctly handles "deep" history - i.e. it correctly maintains forward and
		 * back history when the user navigates forward or back away from the page that uses this
		 * module.
		 * 
		 * This module is usable independent of the rest of SmartClient - you can use it on pages that
		 * don't load any other modules.
		 * 
		 * Platform Notes:
		 * In Safari (4.0 and above), this module has the limitation that the arbitrary data parameter
		 * in addHistoryEntry() is not reliable.
		 * Internet Explorer: If you set document.domain on the top-level page, the History
		 * mechanism will behave sub-optimally in IE - three clicks one the forward/back buttons will
		 * be required to transition to the next history entry.
		 * 
		 * Usage overview
		 * Synthetic history entries are added to the browser history via History.addHistoryEntry.
		 * When this method is called, the page's URL will be modified and the native browser back button
		 * will become active.
		 * The History.registerCallback allows the developer to register a callback method to
		 * fire when the user navigates to these generated history entries. This method will be fired
		 * with an appropriate history ID when the user hits the back-button or explicitly navigates to
		 * the URL generated for some synthetic history entry.
		 */ 
		History: HistoryStatic;

		/** 
		 * HLayout extends Layout
		 * A subclass of Layout that applies a sizing policy along the horizontal axis, interpreting
		 * percent and "*" sizes as proportions of the width of the layout. HLayouts will set any members
		 * that do not have explicit heights to match the layout.
		 */ 
		HLayout: HLayoutStatic<HLayout, HLayoutProps>;

		/** 
		 * Hover extends Class
		 * The Hover class handles showing a simple SmartClient canvas containing arbitrary HTML, or
		 * triggering some other action in response to a user holding the mouse-pointer (or hovering)
		 * over a specific widget.
		 */ 
		Hover: HoverStatic<Hover, HoverProps>;

		/** 
		 * HStack extends Layout
		 * A subclass of Layout that simply stacks members on the horizontal axis without trying to
		 * manage their width. On the vertical axis, any members that do not have explicit heights will
		 * be sized to match the height of the stack.
		 */ 
		HStack: HStackStatic<HStack, HStackProps>;

		/** 
		 * HTMLFlow extends Canvas
		 * Use the HTMLFlow component to display HTML content that should expand to its natural size
		 * without scrolling. 
		 * 
		 * HTML content can be loaded and reloaded from a URL via the property
		 * contentsURL. This method of loading is for simple HTML content
		 * only; SmartClient components should be loaded via the ViewLoader class.
		 * 
		 * NOTE: Since the size of an HTMLFlow component is determined by its HTML contents, this
		 * component will draw at varying sizes if given content of varying size. When using HTMLFlow
		 * components within a Layout, consider what will happen if the HTMLFlow renders at various
		 * sizes. An HTMLFlow which can expand should be placed in a container where other components
		 * can render smaller, where the container is allowed to scroll, or where there is padding to
		 * expand into.
		 * 
		 * HTMLFlow is a DataBoundComponent but only supports one method at this time,
		 * HTMLFlow.fetchRelatedData','fetchRelatedData.
		 */ 
		HTMLFlow: HTMLFlowStatic<HTMLFlow, HTMLFlowProps>;

		/** 
		 * HTMLPane extends HTMLFlow
		 * Use the HTMLPane component to display HTML content in a pane of specified size. If the HTML
		 * content is larger than the size of the pane, the pane will provide scrollbars for viewing
		 * clipped content.
		 * 
		 * You can set the size of an HTMLPane directly via the width and height properties, or
		 * indirectly by placing the HTMLPane in a container component (Layout, Window, 
		 * SectionStack, etc) that manages the sizes of its members.
		 */ 
		HTMLPane: HTMLPaneStatic<HTMLPane, HTMLPaneProps>;

		/** 
		 * IButton extends Button
		 * The IButton widget class is a class that implements the same APIs as the 
		 * Button class. Depending on the current skin, IButtons may be
		 * on the StretchImgButton component, which renders via images, or may be based on the
		 * Button component, which renders via CSS styles.
		 */ 
		IButton: IButtonStatic<IButton, IButtonProps>;

		/** 
		 * IconButton extends Button
		 * A Button subclass that displays an IconButton.icon','icon, 
		 * IconButton.showButtonTitle','title and optional IconButton.menuIconSrc','menuIcon 
		 * and is capable of horizontal and vertical IconButton.orientation','orientation.
		 */ 
		IconButton: IconButtonStatic<IconButton, IconButtonProps>;

		/** 
		 * IconMenuButton extends IconButton
		 * A subclass of IconButton that shows a menuIcon by default and implements showMenu().
		 * 
		 * This class has IconButton.showMenuIcon','showMenuIcon set to true by default,
		 * and has a IconButton.menuIconClick handler which will show the specified 
		 * IconMenuButton.menu via a call to IconMenuButton.showMenu.
		 * This menuIconClick handler cancels default click behavior, so, if a user clicks the menu 
		 * item, any specified Canvas.click','click handler for the button as a whole will not fire.
		 */ 
		IconMenuButton: IconMenuButtonStatic<IconMenuButton, IconMenuButtonProps>;

		/** 
		 * IMenuButton extends MenuButton
		 * IMenuButton based version of the MenuButton class.
		 */ 
		IMenuButton: IMenuButtonStatic<IMenuButton, IMenuButtonProps>;

		/** 
		 * Img extends StatefulCanvas
		 * The Img widget class implements a simple widget that displays a single image.
		 */ 
		Img: ImgStatic<Img, ImgProps>;

		/** 
		 * ImgButton extends Img
		 * A Img that behaves like a button, going through up/down/over state transitions in response to
		 * user events. Supports an optional title, and will auto-size to accommodate the title text if
		 * overflow is set to "visible".
		 * 
		 * Example uses are Window minimize/close buttons.
		 */ 
		ImgButton: ImgButtonStatic<ImgButton, ImgButtonProps>;

		/** 
		 * ImgEditProxy extends CanvasEditProxy
		 * EditProxy that handles Img objects when editMode is enabled.
		 */ 
		ImgEditProxy: ImgEditProxyStatic<ImgEditProxy, ImgEditProxyProps>;

		/** 
		 * ImgSectionHeader extends HLayout
		 * SectionHeader class based on an HLayout with StretchImg background.
		 */ 
		ImgSectionHeader: ImgSectionHeaderStatic<ImgSectionHeader, ImgSectionHeaderProps>;

		/** 
		 * ImgSplitbar extends Img
		 * Resize bar for use in Layout.resizeBarClass','Layouts, based on the
		 * Img class. As with the Splitbar class, 
		 * widgets of this class can be displayed as a resize-bar for widgets 
		 * in Layouts where showResizeBar is set to true. Provides a different appearance from
		 * the Splitbar class.
		 * 
		 * To specify the resizeBar class for some layout, use the Layout.resizeBarClass
		 * property.
		 */ 
		ImgSplitbar: ImgSplitbarStatic<ImgSplitbar, ImgSplitbarProps>;

		/** 
		 * ImgTab extends StretchImgButton
		 * Specialized StretchImgButton used by TabSet/TabBar for tabs
		 */ 
		ImgTab: ImgTabStatic<ImgTab, ImgTabProps>;

		/** 
		 * IndicatorCanvas extends EventCanvas
		 * A subclass of EventCanvas','EventCanvas, used to render 
		 * Calendar.indicators','indicator lines at important points in 
		 * CalendarView','calendar views.
		 * 
		 * An IndicatorCanvas is a non-interactive, semi-transparent canvas that highlights a portion of a 
		 * calendar view, by rendering across all lanes and behind normal Calendar.data','events.
		 * 
		 * By default, the canvas shows no label but does show a hover.
		 * 
		 * Default styling is specified at the Calendar.indicatorStyleName','calendar level 
		 * and can be overridden for CalendarEvent.styleName','individual indicators.
		 */ 
		IndicatorCanvas: IndicatorCanvasStatic<IndicatorCanvas, IndicatorCanvasProps>;

		/** 
		 * IntegerItem extends TextItem
		 * FormItem intended for inputting integer numbers.
		 */ 
		IntegerItem: IntegerItemStatic<IntegerItem, IntegerItemProps>;

		/** 
		 * IPickTreeItem extends PickTreeItem
		 * Subclass of PickTreeItem which shows an IMenuButton rather than a
		 * simple MenuButton as it's main button.
		 */ 
		IPickTreeItem: IPickTreeItemStatic<IPickTreeItem, IPickTreeItemProps>;

		/** 
		 * A library of functions for determining the types of other objects.
		 * 
		 * The "isA" methods for the basic JavaScript types are much faster and more consistent across
		 * platforms than JavaScript's "typeof" operator.
		 * 
		 * An isA method is automatically created for every ISC Class and Interface definition, for
		 * example, isA.Canvas().
		 */ 
		isA: isAStatic;

		/** 
		 * The isc object contains global methods and objects of the Isomorphic SmartClient
		 * framework.
		 * 
		 * See also simpleNamesMode','Simple Names mode.
		 */ 
		isc: iscStatic;

		/** 
		 * ITreeMenuButton extends TreeMenuButton
		 * Button used to display a hierarchical Menu group for representing / selecting tree data.
		 * This is derived from the MenuButton and is StretchImgButton based.
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		ITreeMenuButton: ITreeMenuButtonStatic<ITreeMenuButton, ITreeMenuButtonProps>;

		/** 
		 * JSON extends Class
		 * Utilities for working with JSON data.
		 */ 
		JSON: JSONStatic<JSON, JSONProps>;

		/** 
		 * JSONEncoder extends Class
		 * Class for encoding objects as JSON strings.
		 */ 
		JSONEncoder: JSONEncoderStatic<JSONEncoder, JSONEncoderProps>;

		/** 
		 * JSSyntaxHiliter extends SyntaxHiliter
		 * Regular expression-based source code colorizer for JS source.
		 * 
		 * NOTE: This class exists only for use with the SmartClient Feature Explorer and 
		 * SmartGWT Showcases and cannot be used in any other environment.
		 */ 
		JSSyntaxHiliter: JSSyntaxHiliterStatic<JSSyntaxHiliter, JSSyntaxHiliterProps>;

		/** 
		 * Label extends Button
		 * Labels display a small amount of Label.align','alignable Label.contents','text
		 * with optional Label.icon','icon and Label.autoFit','autoFit.
		 * 
		 * For a general-purpose container for HTML content, use HTMLFlow or HTMLPane
		 * instead.
		 */ 
		Label: LabelStatic<Label, LabelProps>;

		/** 
		 * LabelEditProxy extends StatefulCanvasEditProxy
		 * EditProxy that handles Label and SectionHeader objects when editMode is enabled.
		 */ 
		LabelEditProxy: LabelEditProxyStatic<LabelEditProxy, LabelEditProxyProps>;

		/** 
		 * Layout extends Canvas
		 * Arranges a set of "member" Canvases in horizontal or vertical stacks, applying a layout
		 * policy to determine member heights and widths.
		 * 
		 * A Layout manages a set of "member" Canvases provided as Layout.members. Layouts
		 * can have both "members", whose position and size are managed by the Layout, and normal
		 * Canvas children, which manage their own position and size.
		 * 
		 * Rather than using the Layout class directly, use the HLayout, VLayout,
		 * HStack and VStack classes, which are subclasses of Layout preconfigured for
		 * horizontal or vertical stacking, with the "fill" (VLayout) or "none" (VStack)
		 * LayoutPolicy','policies already set.
		 * 
		 * Layouts and Stacks may be nested to create arbitrarily complex layouts.
		 * 
		 * Since Layouts can be either horizontally or vertically oriented, throughout the
		 * documentation of Layout and it's subclasses, the term "length" refers to the axis of
		 * stacking, and the term "breadth" refers to the other axis. Hence, "length" means height in
		 * the context of a VLayout or VStack, but means width in the context of an HLayout or HStack.
		 * 
		 * To show a resizer bar after (to the right or bottom of) a layout member, set
		 * Canvas.showResizeBar','showResizeBar to
		 * true on that member component (not on the HLayout or VLayout). Resizer bars override
		 * Layout.membersMargin','membersMargin spacing.
		 * 
		 * Like other Canvas subclasses, Layout and Stack components may have % width and height
		 * values. To create a dynamically-resizing layout that occupies the entire page (or entire
		 * parent component), set width and height to "100%".
		 */ 
		Layout: LayoutStatic<Layout, LayoutProps>;

		/** 
		 * LayoutEditProxy extends CanvasEditProxy
		 * EditProxy that handles Layout objects when editMode is enabled.
		 */ 
		LayoutEditProxy: LayoutEditProxyStatic<LayoutEditProxy, LayoutEditProxyProps>;

		/** 
		 * LayoutSpacer extends Canvas
		 * Add a spacer to a Layout that takes up space just like a normal member, without actually
		 * drawing anything. A LayoutSpacer is semantically equivalent to using an empty canvas,
		 * but higher performance for this particular use case.
		 */ 
		LayoutSpacer: LayoutSpacerStatic<LayoutSpacer, LayoutSpacerProps>;

		/** 
		 * LinkItem extends TextItem
		 * A form item that displays a URL. In the default read-only mode (FormItem.canEdit','canEdit
		 * is false) the URL is shown as a link; in editable mode the URL is shown in a textbox.
		 * 
		 * The link to open is specified as the item value with FormItem.setValue or 
		 * FormItem.defaultValue. The link title defaults to the URL unless
		 * LinkItem.linkTitle is specified.
		 * 
		 * Additionally, a custom action can be triggered when the link is clicked: see
		 * LinkItem.target for details.
		 */ 
		LinkItem: LinkItemStatic<LinkItem, LinkItemProps>;

		/** 
		 * ListGrid extends VLayout
		 * A ListGrid is a DataBoundComponent that displays a list of objects in a grid, where
		 * each row represents one object and each cell in the row represents one property.
		 */ 
		ListGrid: ListGridStatic<ListGrid, ListGridProps>;

		/** 
		 * ListPalette extends ListGrid
		 * A ListGrid that implements the Palette behavior, so it can be used as the source for 
		 * drag and drop instantiation of components when combined with an EditContext as 
		 * the drop target.
		 * 
		 * Each ListGridRecord can be a PaletteNode.
		 */ 
		ListPalette: ListPaletteStatic<ListPalette, ListPaletteProps>;

		/** 
		 * ListPropertiesDialog extends Window
		 * Dialog shown for editing properties of HTML lists in a RichTextEditor. Contains a
		 * ListPropertiesPane.
		 * 
		 * Cannot be directly used; shown in documentation only for skinning purposes.
		 */ 
		ListPropertiesDialog: ListPropertiesDialogStatic<ListPropertiesDialog, ListPropertiesDialogProps>;

		/** 
		 * ListPropertiesPane extends Layout
		 * Pane containing controls for editing the style of HTML lists in a RichTextEditor.
		 * 
		 * Cannot be directly used; shown in documentation only for skinning purposes.
		 */ 
		ListPropertiesPane: ListPropertiesPaneStatic<ListPropertiesPane, ListPropertiesPaneProps>;

		/** 
		 * Log extends Class
		 * A logging system similar to the Java log4j package: messages are logged with a "category" and
		 * "priority", and developers can dynamically set which log messages are being displayed.
		 * 
		 * 5 log priorities are available, with the following general meaning:
		 * 
		 * "debug": diagnostic info which is only likely to be understood by a developer with
		 * source access, or would occur too frequently for normal usage
		 * "info": reports of significant events in the normal operation of the subsystem
		 * "warn": some kind of problem is likely to occur, an API appears is apparently being
		 * misused or will yield a partial or very slow result
		 * "error": a definite error has occurred which may be recoverable
		 * "fatal": total failure with no possibility of recovery
		 * 
		 * 
		 * Log categories do not need to be declared in advance - you can simply make up a category name and
		 * start logging to it, and control whether that category's messages will be displayed via
		 * setPriority().
		 * 
		 * NOTE: to open the Developer Console in any page that loads ISC, type
		 * javascript:isc.Log.show() in the URL bar - this URL is bookmarkable. 
		 * 
		 * The Developer Console should always be open while developing any ISC-enabled application,
		 * because ISC logs many important errors and warnings to the Developer Console.
		 * 
		 * NOTE: if you have the Microsoft JavaScript Debugger installed, ISC will be unable to log stack
		 * traces on JS errors until you go to Tools->Internet Options->Advanced Tab and check "Disable
		 * script debugging". The ability to see stack traces in the Developer Console is generally much
		 * more useful for debugging ISC-based applications than the generic Javascript Debugging
		 * facilities.
		 */ 
		Log: LogStatic<Log, LogProps>;

		/** 
		 * LoginDialog extends Window
		 * Handle a complete login interaction with a typical login dialog asking for username and
		 * password credentials. Use this
		 * class to quickly present a traditional username/password authentication mechanism in a
		 * SmartClient window.
		 * 
		 * To adapt this class to your requirements, first implement LoginDialog.loginFunc to submit
		 * the username and password to the authentication mechanism of your choice, calling
		 * dialogCallback once the authentication process completes.
		 */ 
		LoginDialog: LoginDialogStatic<LoginDialog, LoginDialogProps>;

		/** 
		 * Mail extends Class
		 * A Mail object describes an email that will be sent automatically by the 
		 * SmartClient Server as part of a normal DataSource operation. Mail definitions
		 * are part of an OperationBinding, and they can only be specified in a 
		 * DataSource's XML definition. Despite the declarative nature of mail definitions, templating
		 * support via Velocity makes it very flexible; it is very easy to include values from records
		 * just fetched from permanent storage by this operation, for example. See 
		 * velocitySupport for an overview of SmartClient Server's pervasive support for 
		 * templated declarative operations using Velocity. 
		 * 
		 * The default context for the message is the dsResponse.data; that is, $foo in the
		 * message refers to the field "foo" in the DataSource response (the equivalent of
		 * calling dsResponse.getFieldValue("foo") in Java). You also have access to the normal
		 * Velocity variables described in the overview linked to above.
		 * 
		 * If multiple records appear in the dsResponse, one message will be sent per record
		 * in the response unless "multiple" is set to false. This allows a set of
		 * recipients to be selected by a "fetch" operationBinding and messages sent to each.
		 * This also means that if no data is selected by a fetch or affected by an update,
		 * no mail is sent.
		 * 
		 * If you have the transactionChaining','Transaction Chaining feature (available 
		 * in Power and better versions), all of the variables normally accessible in other Velocity 
		 * contexts are available in the message template as well, for example: 
		 * $responseData.last('order').orderId
		 * 
		 * You can provide the body of the email directly in the Mail.messageTemplate','messageTemplate
		 * tag, or you can provide a filename in the Mail.templateFile','templateFile attribute,
		 * which tells SmartClient to use the contents of that file as the body of the email. If you 
		 * provide neither of these, your email will have no body; if you provide both, SmartClient will
		 * ignore the file and just use the content directly provided.
		 * 
		 * Mail server configuration
		 * The mail server to use for sending emails is configured in the server_properties','server.properties
		 * file. The following values can be provided:
		 * mail.system.mail.smtp.host: The name of the SMTP server to use; defaults 
		 * to "localhost"
		 * mail.system.mail.smtp.port: What port is the MTA listening on; defaults to 25
		 * mail.system.mail.smtp.auth: Whether this server requires authentication; 
		 * defaults to false
		 * mail.system.mail.smtp.user: SMTP user, if authentication is on; no default
		 * mail.system.mail.smtp.password: Password, if authentication is on; no default
		 * 
		 * Note that we will also pass any other properties that start mail.system through
		 * to the underlying Javamail Session object, so you can use Javamail features
		 * that aren't explicitly exposed by SmartClient's mail support. For example, many cloud-based
		 * SMTP providers require that you issue a STARTTLS command before authenticating; you can 
		 * achieve this by adding the following line to server_properties','server.properties:
		 * mail.system.mail.smtp.starttls.enable: true
		 */ 
		Mail: MailStatic<Mail, MailProps>;

		/** 
		 * MathFunction extends Class
		 * The definition of a function for use in the FormulaBuilder. A function consists of 
		 * a name (what the user actually types to use the function), a description (shown in help) and 
		 * an actual JavaScript function that executes the calculation.
		 * 
		 * The built-in functions cover all static functionality on the JavaScript Math object:
		 * 
		 * max(val1,val2): Maximum of two values
		 * min(val1,val2): Minimum of two values
		 * round(value,decimalDigits): Round a value up or down, optionally providing 
		 * decimalDigits as the maximum number of decimal places to round to. For fixed 
		 * or precision rounding, use toFixed() and toPrecision() respectively.
		 * 
		 * ceil(value): Round a value up
		 * floor(value): Round a value down
		 * abs(value): Absolute value
		 * pow(value1,value2): value1 to the power of value2
		 * sqrt(value): Square root of a value
		 * dateAdd(value,interval,amount): Excel&trade;-compatible dataAdd function: adds 
		 * quantities of a time interval to a date value. Also supports being passed interval 
		 * names, like "hour" or "week".
		 * 
		 * toPrecision(value,precision): Format a number to a length of precision digits, 
		 * rounding or adding a decimal point and zero-padding as necessary. Note that the 
		 * values 123, 12.3 and 1.23 have an equal precision of 3. Returns a formatted string 
		 * and should be used as the outermost function call in a formula. For rounding, use 
		 * round().
		 * 
		 * toFixed(value,digits): Round or zero-pad a number to digits decimal places. 
		 * Returns a formatted string and should be used as the outermost function call in a 
		 * formula. To round values or restrict precision, use round() and 
		 * toPrecision() respectively.
		 * 
		 * sin(value): Sine of a value
		 * cos(value): Cosine of a value
		 * tan(value): Tangent of a value
		 * ln(value): natural logarithm of a value
		 * log(base,value): logarithm of a value with the specified base
		 * asin(value): Arcsine of a value
		 * acos(value): Arccosine of a value
		 * atan(value): Arctangent of a value (-PI/2 to PI/2 radians)
		 * atan2(value1,value2): Angle theta of a point (-PI to PI radians)
		 * exp(value): The value of E<sup>value</sup>
		 * random(): Random number between 0 and 1
		 * 
		 */ 
		MathFunction: MathFunctionStatic<MathFunction, MathFunctionProps>;

		/** 
		 * Menu extends ListGrid
		 * The Menu widget class implements interactive menu widgets, with optional icons, submenus,
		 * and shortcut keys.
		 * 
		 * A Menu is initialized with a set of MenuItems specified as Menu.items, each
		 * of which represents one row in the menu's display and specifies the action to take when that
		 * menu item is selected.
		 * 
		 * Each MenuItem can have a MenuItem.title','title,
		 * MenuItem.icon','icon, MenuItem.keys','shortcut keys, optional
		 * MenuItem.submenu and various other settings. Alternatively, a MenuItem
		 * can contain an arbitrary widget via MenuItem.embeddedComponent.
		 * 
		 * To create a context menu for a component, provide a Menu instance for the
		 * Canvas.contextMenu property. Note that some components like ListGrid have
		 * more specific properties because they have distinct regions or because they have a default
		 * set of context menu actions available (for example: ListGrid.headerContextMenu and
		 * related APIs).
		 * 
		 * If you want a button that pops up a menu when clicked, or a bar of such buttons, see the
		 * MenuButton and MenuBar classes.
		 * 
		 * To create a pop-up panel interface that looks nothing like a Menu (but still
		 * dismisses automatically on an outside click), use Canvas.showClickMask to arrange
		 * for automatic dismissal, and the Canvas.showNextTo utility method to place the
		 * component near whatever triggered it, while automatically staying on-screen.
		 */ 
		Menu: MenuStatic<Menu, MenuProps>;

		/** 
		 * MenuBar extends Toolbar
		 * A MenuBar is a bar of buttons used to show a set of menus.
		 */ 
		MenuBar: MenuBarStatic<MenuBar, MenuBarProps>;

		/** 
		 * MenuButton extends Button
		 * Simple subclass of button associated with a menu widget (gets shown below the button).
		 */ 
		MenuButton: MenuButtonStatic<MenuButton, MenuButtonProps>;

		/** 
		 * MenuEditProxy extends CanvasEditProxy
		 * EditProxy that handles MenuButton and MenuBar objects when editMode is enabled.
		 */ 
		MenuEditProxy: MenuEditProxyStatic<MenuEditProxy, MenuEditProxyProps>;

		/** 
		 * MenuPalette extends Menu
		 * A Menu that implements the Palette behavior, so it can be used as the source for 
		 * drag and drop instantiation of components when combined with an EditContext as 
		 * the drop target.
		 * 
		 * Each MenuItem can be a PaletteNode.
		 */ 
		MenuPalette: MenuPaletteStatic<MenuPalette, MenuPaletteProps>;

		/** 
		 * Messaging extends Class
		 * The Real-Time Messaging module creates a channel for messages to be sent from the server to
		 * the client (a.k.a. "server push") in real-time (as opposed to periodically polling the
		 * server for updates).
		 * 
		 * See messaging','Messaging overview for information.
		 */ 
		Messaging: MessagingStatic<Messaging, MessagingProps>;

		/** 
		 * MiniDateRangeItem extends StaticTextItem
		 * Provides a compact interface for editing a date range, by providing a formatted, read-only
		 * display of the current selected date range with an icon to launch a DateRangeDialog 
		 * to edit the range.
		 */ 
		MiniDateRangeItem: MiniDateRangeItemStatic<MiniDateRangeItem, MiniDateRangeItemProps>;

		/** 
		 * MiniNavControl extends StretchImgButton
		 * Compact control for up/down navigation that roughly looks like an up arrowhead next to a
		 * down arrowhead.
		 */ 
		MiniNavControl: MiniNavControlStatic<MiniNavControl, MiniNavControlProps>;

		/** 
		 * MockDataSource extends DataSource
		 * A special kind of DataSource.clientOnly','client-only DataSource that can be configured
		 * with MockDataSource.mockData','"mock data" - a simple text format for table or tree
		 * data.
		 * 
		 * MockDataSources are produced by the Reify Mockup Importer when starting from mockup formats
		 * that use the mock data format. The docs for the 
		 * balsamiqImport','Reify Mockup Importer explain various steps for converting a
		 * MockDataSource to a real DataSource.
		 * 
		 * MockDataSource is primarily intended as a temporary form of DataSource used
		 * during the process of converting a mockup into a real application. Generally, if creating a
		 * client-only DataSource in JavaScript ,
		 * there is no reason to use the mock data format, as the mock data is not especially readable
		 * when written as a String literal. The mock data format can be a slightly more
		 * compact and readable as compared to declaring DataSource.cacheData in XML.
		 */ 
		MockDataSource: MockDataSourceStatic<MockDataSource, MockDataSourceProps>;

		/** 
		 * MockupElement extends Img
		 * MockupElements are produced by the balsamiqImport','Balsamiq Mockup Importer as
		 * placeholders for Balsamiq controls that cannot be meaningfully translated to SmartClient
		 * controls (such as the big red X markup control).
		 * 
		 * MockupElement is just an instance of Img that uses .png files stored in the
		 * tools/visualBuilder/mockups folder. 
		 * 
		 * MockupElement is not intended to be included in any final applications.
		 */ 
		MockupElement: MockupElementStatic<MockupElement, MockupElementProps>;

		/** 
		 * MultiComboBoxItem extends CanvasItem
		 * A MultiComboBoxItem is a combo box that allows the user to select multiple options. Each
		 * selected option is represented as a button that can be clicked to deselect the option.
		 * 
		 * The relative layout of the buttons to the combo box is specified with the
		 * MultiComboBoxItem.layoutStyle attribute. The buttons will be kept in the order that
		 * they were added, with the most recently added button being adjacent to the combo box.
		 * 
		 * MultiComboBoxItem uses the AutoChild pattern to construct the
		 * MultiComboBoxItem.comboBox','comboBox and the MultiComboBoxItem.button','buttons
		 * so that they can be easily customized. For example, you can customize the criteria used to
		 * fetch by
		 * overriding ComboBoxItem.getPickListFilterCriteria via
		 * MultiComboBoxItem.comboBox','comboBoxProperties.
		 * 
		 */ 
		MultiComboBoxItem: MultiComboBoxItemStatic<MultiComboBoxItem, MultiComboBoxItemProps>;

		/** 
		 * MultiFileItem extends CanvasItem
		 * The MultiFileItem provides an interface for a user to save one or more files that are
		 * related to a DataSource record, where each file is represented by a record in a
		 * related DataSource.
		 * 
		 * Use MultiFileItem when a record may have one or more files associated with it (such as
		 * attachments to an email message) where no information about the files needs to be stored other
		 * than the files themselves. If you have several fields associated with each file (such as an
		 * uploaded document with a version, comments and processes associated with it), consider
		 * instead an ordinary DataSource with on field of type "binary", and using the FileItem
		 * for upload.
		 * 
		 * See the upload','Uploading Files overview for more information on upload.
		 * 
		 * DataSource Setup
		 * 
		 * In a relationship sometimes called a "master-detail" relationship, the MultiFileItem stores
		 * files in a "detail" DataSource which are related to a "master" DataSource record being
		 * edited by the form which contains the MultiFileItem.
		 * 
		 * To use a MultiFileItem:
		 * 
		 * declare a "detail" DataSource to store the related files. At a minimum, this
		 * DataSource must have:
		 * 
		 * a DataSourceField.primaryKey','primaryKey field
		 * a field declaring a DataSourceField.foreignKey','foreignKey relationship to the
		 * primaryKey of the "master" DataSource
		 * a field of type "binary"
		 * 
		 * DataBoundComponent.dataSource','bind a DynamicForm to the "master" DataSource 
		 * in the DynamicForm bound to the "master" DataSource, declare a field with
		 * FormItem.editorType','editorType:"MultiFileItem" and a dataSource
		 * property set to the ID of the "detail" DataSource
		 * 
		 * An example "detail" DataSource for storing files is shown below. This "detail" DataSource
		 * assumes a "master" DataSource with DataSource.ID "masterRecord" and with a primaryKey
		 * field "id".
		 * 
		 * 
		 * &lt;DataSource ID="uploadedFiles" serverType="sql"&gt;
		 * &lt;fields&gt;
		 * &lt;field name="fileId" type="sequence" primaryKey="true" hidden="true"/&gt;
		 * &lt;field name="masterRecordId" type="number" foreignKey="masterRecord.id" hidden="true"/&gt;
		 * &lt;field name="file" type="binary" title="File"/&gt;
		 * &lt;/fields&gt;
		 * &lt;/DataSource&gt;
		 * 
		 * 
		 * 
		 * Aside from a single "binary" field, the "detail" DataSource should generally have only
		 * hidden fields, as shown above. Additional internal fields (such as a "lastUpdated" field)
		 * may be added, but will not be editable via MultiFileItem. 
		 * 
		 * Display
		 * 
		 * The MultiFileItem appears as a list of files related to the current record. An optional
		 * button, the MultiFileItem.removeButton','removeButton allows removing files. A
		 * second optional button, the MultiFileItem.editButton','editButton, launches a
		 * picker for uploading further files.
		 * 
		 * Saving
		 * 
		 * In all cases, uploading a new file is an "add" DSRequest against the
		 * MultiFileItem.dataSource.
		 * 
		 * The MultiFileItem has two modes, according to whether the "master" record is being newly created
		 * via an "add" operation or whether the master record is pre-existing ("update" operation).
		 * 
		 * If the master record is pre-existing, each file added by the user is uploaded as soon as the
		 * user exits the picker launched from the edit button, and the list of files shown in the main
		 * form reflects the actual list of stored files. 
		 * 
		 * If the master record is being newly created, files are not actually uploaded until
		 * after the master record is confirmed saved, and the list of fields shown in the main
		 * form reflects files which will be uploaded after the master record is saved.
		 * 
		 * In both cases, if there are multiple files to upload, they are uploaded one at a time, as a
		 * series of separate "add" DSRequests against the MultiFileItem.dataSource.
		 * 
		 * Also in both cases, deletion of any file is immediate. In the case of a pre-existing master
		 * record, all files shown actually exist as DataSource records, and deletion is performed as a
		 * "remove" DSRequest against the MultiFileItem.dataSource.
		 */ 
		MultiFileItem: MultiFileItemStatic<MultiFileItem, MultiFileItemProps>;

		/** 
		 * MultiFilePicker extends VStack
		 * The MultiFilePicker is a pop-up picker used by the MultiFileItem to allow the user to
		 * enter several files for upload.
		 */ 
		MultiFilePicker: MultiFilePickerStatic<MultiFilePicker, MultiFilePickerProps>;

		/** 
		 * MultiGroupDialog extends Window
		 * A dialog that allows the user to set up complex grouping arrangements by defining a group of
		 * GroupSpecifiers.
		 * 
		 * Each GroupSpecifier applies to a single property and grouping - so, for instance, in 
		 * a grid with two columns, Nationhood and Country, you could group first 
		 * by Nationhood with its selected groupingMode and then by Country with its selected groupingMode.
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		MultiGroupDialog: MultiGroupDialogStatic<MultiGroupDialog, MultiGroupDialogProps>;

		/** 
		 * MultiGroupPanel extends Layout
		 * A widget that allows the user to set up complex grouping arrangements by defining a group of
		 * GroupSpecifiers.
		 * 
		 * Each GroupSpecifier applies to a single property and grouping - so, for instance, in 
		 * a grid with two columns, Nationhood and Country, you could group 
		 * first by Nationhood with its selected groupingMode and then by 
		 * Country with its selected groupingMode.
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		MultiGroupPanel: MultiGroupPanelStatic<MultiGroupPanel, MultiGroupPanelProps>;

		/** 
		 * MultiSortDialog extends Window
		 * A dialog that allows the user to set up complex sorting arrangements by defining a group of
		 * SortSpecifiers.
		 * 
		 * Each SortSpecifier applies to a single property and direction - so, for instance, in 
		 * a grid with two columns, year and monthNumber, you could sort first 
		 * by year in descending order and then by monthNumber in ascending 
		 * order. This would producing a grid sorted by year from largest (most 
		 * recent) to smallest (least recent) and, within each year, by monthNumber from smallest 
		 * (January) to largest (December).
		 * 
		 * See MultiSortDialog.askForSort, DataBoundComponent.askForSort
		 */ 
		MultiSortDialog: MultiSortDialogStatic<MultiSortDialog, MultiSortDialogProps>;

		/** 
		 * MultiSortPanel extends Layout
		 * A widget that allows the user to set up complex sorting arrangements by defining a group of
		 * SortSpecifiers.
		 * 
		 * Each SortSpecifier applies to a single property and direction - so, for instance, in 
		 * a grid with two columns, year and monthNumber, you could sort first 
		 * by year in descending order and then by monthNumber in ascending 
		 * order. This would producing a grid sorted by year from largest (most 
		 * recent) to smallest (least recent) and, within each year, by monthNumber from smallest 
		 * (January) to largest (December).
		 */ 
		MultiSortPanel: MultiSortPanelStatic<MultiSortPanel, MultiSortPanelProps>;

		/** 
		 * NativeCheckboxItem extends FormItem
		 * A checkbox for manipulating 2-valued fields based on the native checkbox element.
		 */ 
		NativeCheckboxItem: NativeCheckboxItemStatic<NativeCheckboxItem, NativeCheckboxItemProps>;

		/** 
		 * NativeScrollbar extends Canvas
		 * The NativeScrollbar widget will render in the browser as a native 
		 * scrollbar, and has APIs allowing it to be applied to scroll content any another widget
		 * on the page. Essentially this behaves similarly to the Scrollbar class but will
		 * be rendered as a native browser scrollbar rather than using media, thus providing the
		 * advantages of an independant scrollbar (support for rendering the scrollbar separate from the
		 * content it effects, support for "virtual scrolling" mechanisms where content size is unknown
		 * at initial render, etc), with a native look and feel and without requiring the loading of
		 * additional media on the page.
		 * 
		 * To enable this for a component simply set Canvas.showCustomScrollbars to true and
		 * set Canvas.scrollbarConstructor to "NativeScrollbar"
		 */ 
		NativeScrollbar: NativeScrollbarStatic<NativeScrollbar, NativeScrollbarProps>;

		/** 
		 * NavigationBar extends HLayout
		 * Navigation control implemented as a horizontal layout showing back and forward controls 
		 * and a title.
		 */ 
		NavigationBar: NavigationBarStatic<NavigationBar, NavigationBarProps>;

		/** 
		 * NavigationButton extends Button
		 * Specially styled Button subclass used by the NavigationBar class.
		 */ 
		NavigationButton: NavigationButtonStatic<NavigationButton, NavigationButtonProps>;

		/** 
		 * NavPanel extends SplitPane
		 * Provides a list or tree of NavItem','navigation items, each of which specifies a
		 * component to be displayed in a mutually exclusive fashion in the NavPanel.navDeck','navDeck.
		 * 
		 * A NavPanel can either have a flat list of NavItems or a hierarchy via
		 * NavItem.items - use NavPanel.isTree to explicitly control this.
		 * 
		 * Because NavPanel extends SplitPane, it automatically shifts between side-by-side vs
		 * single panel display on handset-sized devices. Specifically, the NavPanel.navGrid is
		 * set as the SplitPane.navigationPane and the NavPanel.navDeck is set as the
		 * SplitPane.detailPane.
		 * 
		 * Note that NavPanel is a fairly simple component to replicate by composing other
		 * SmartClient widgets. If you need a component that looks roughly like a
		 * NavPanel but will require lots of visual and behavioral customization, consider
		 * using the underlying components directly instead of deeply customizing the
		 * NavPanel class. A NavPanel is essentially just a TreeGrid
		 * and Deck in a SplitPane, with a ListGrid.recordClick','recordClick
		 * handler to call Deck.setCurrentPane with a component ID stored as an attribute of
		 * each Record.
		 */ 
		NavPanel: NavPanelStatic<NavPanel, NavPanelProps>;

		/** 
		 * NumberUtil extends Class
		 * Static singleton class containing APIs for interacting with Numbers.
		 */ 
		NumberUtil: NumberUtilStatic<NumberUtil, NumberUtilProps>;

		/** 
		 * Offline extends Class
		 * The Offline class provides features for storing and retrieving values in persistent browser
		 * storage. Because this storage is both persistent (ie, it remains available after the 
		 * browser is closed and re-opened) and local to the browser, it allows applications to operate
		 * when the client is not connected to a network, albeit with some obvious limitations.
		 * 
		 * As well as providing straightforward APIs for storing, retrieving and removing values, 
		 * Offline support is integrated into the normal request/response cycle. You can configure 
		 * the framework so that server responses are automatically cached in Offline storage. Then,
		 * at some future point when the client is offline, responses for known requests are returned 
		 * from the Offline cache.
		 * 
		 * SmartClient makes use of various underlying storage techniques, depending on what the 
		 * browser supports, but the API to a SmartClient program is the same regardless of the 
		 * underlying storage - simple key/value pairs. Currently, we provide Offline support for all 
		 * HTML5-compliant browsers, plus earlier versions of Internet Explorer (6 and 7). The amount 
		 * of storage available is dictated by the browser, and varies from approximately 500KB to 
		 * approximately 5MB.
		 */ 
		Offline: OfflineStatic<Offline, OfflineProps>;

		/** 
		 * OperationBinding extends Class
		 * An operationBinding tells a DataSource how to execute one of the basic DS operations: fetch,
		 * add, update, remove. See DataSource.operationBindings.
		 */ 
		OperationBinding: OperationBindingStatic<OperationBinding, OperationBindingProps>;

		/** 
		 * Operators extends Class
		 * The Operators class provides a collection of class-level properties that can be used to
		 * modify the descriptions associated with the logical Operators used in 
		 * AdvancedCriteria. This is primarily intended for internationalization.
		 * 
		 * To add or override an operator's description, use
		 * Operators.Class.addClassProperties','addClassProperties(). For example:
		 * 
		 * Operators.addClassProperties({lessOrEqualTitle: "Less than or equal to"});
		 */ 
		Operators: OperatorsStatic<Operators, OperatorsProps>;

		/** 
		 * Page extends Class
		 * Provides information about the page you're loaded in. We define "page" here to be roughly
		 * equivalent to the browser window or frame the libraries have been loaded in.
		 */ 
		Page: PageStatic<Page, PageProps>;

		/** 
		 * PasswordItem extends TextItem
		 * FormItem for password fields, where text input by the user should not be shown in readable text.
		 */ 
		PasswordItem: PasswordItemStatic<PasswordItem, PasswordItemProps>;

		/** 
		 * PickListMenu extends ListGrid
		 * ListGrid subclass used, by default, by FormItems which implement
		 * PickList to display
		 * a list of selectable options. Can be subclassed, customized and assigned to FormItems 
		 * via the ComboBoxItem.pickListConstructor','pickListConstructor attribute.
		 */ 
		PickListMenu: PickListMenuStatic<PickListMenu, PickListMenuProps>;

		/** 
		 * PickTreeItem extends CanvasItem
		 * FormItem that allows picking a value from a hierarchical data model.
		 */ 
		PickTreeItem: PickTreeItemStatic<PickTreeItem, PickTreeItemProps>;

		/** 
		 * PortalLayout extends Layout
		 * A PortalLayout is a special subclass of Layout designed to display Portlet windows.
		 * A PortalLayout displays Portlets in columns and supports drag-drop interaction for moving 
		 * Portlets around within the PortalLayout. Portlets may be drag-reordered within columns, dragged
		 * into other columns, or dragged next to other Portlets to sit next to them horizontally
		 * within a column.
		 */ 
		PortalLayout: PortalLayoutStatic<PortalLayout, PortalLayoutProps>;

		/** 
		 * Portlet extends Window
		 * Custom subclass of Window configured to be embedded within a PortalLayout.
		 */ 
		Portlet: PortletStatic<Portlet, PortletProps>;

		/** 
		 * PresetCriteriaItem extends SelectItem
		 * A FormItem for use with the FilterBuilder, allows the user to pick from a set of 
		 * pre-configured search criteria such as specific ranges in numeric or date data, and provide 
		 * user friendly titles for such criteria, such as "within the next two weeks" or 
		 * "High (0.75 - 0.99)".
		 */ 
		PresetCriteriaItem: PresetCriteriaItemStatic<PresetCriteriaItem, PresetCriteriaItemProps>;

		/** 
		 * PresetDateRangeItem extends PresetCriteriaItem
		 * Allows the user to pick from pre-set date ranges or choose a custom date range via a
		 * DateRangeDialog.
		 * 
		 * To use this item in the ListGrid.showFilterEditor','FilterEditor or 
		 * FilterBuilder, create a trivial ClassFactory.defineClass','subclass which 
		 * defines PresetCriteriaItem.options','preset options, then set
		 * ListGridField.filterEditorType to use this class with the FilterEditor, or define a
		 * custom operator and set Operator.editorType to use it with the FilterBuilder.
		 * 
		 * See the dateRangeFilterPresets', 'Date Range (Presets) example for sample code.
		 */ 
		PresetDateRangeItem: PresetDateRangeItemStatic<PresetDateRangeItem, PresetDateRangeItemProps>;

		/** 
		 * PrintCanvas extends Canvas
		 * PrintCanvas is a subclass of canvas which renders printable content HTML and 
		 * provides APIs for printing this content as a separate document.
		 */ 
		PrintCanvas: PrintCanvasStatic<PrintCanvas, PrintCanvasProps>;

		/** 
		 * PrintWindow extends Window
		 * Subclass of Window used for displaying a printable view. Includes a "Print" button
		 * header control to trigger printing of content.
		 */ 
		PrintWindow: PrintWindowStatic<PrintWindow, PrintWindowProps>;

		/** 
		 * Process extends Task
		 * A instance of Process represents a stateful process executing a series of Tasks, 
		 * which may be:
		 * 
		 * user interactions
		 * calls to DataSources (hence: any database or web service)
		 * arbitrary code
		 * other Processes
		 * 
		 * A Process is stateful in the sense that it maintains Process.state','state
		 * across the different tasks that are executed. This allows you to maintain context as you
		 * walk a user through a multi-step business process in your application, which may involve
		 * multiple operations on multiple entities. Each Task that executes can use the Process state
		 * as inputs, and can output a result which is stored in the Process state - see
		 * taskIO.
		 * 
		 * A Process can have multiple branches, choosing the next Task to execute based on
		 * Criteria - see XORGateway and DecisionGateway.
		 * 
		 * Because a Process may return to a previous Task in various situations, the data model of a
		 * Process is strictly speaking a graph (a set of nodes connected by arbitary
		 * interlinks). However, most processes have sequences of several tasks in a row, and the
		 * definition format allows these to be represented as simple Arrays called "sequences",
		 * specified via Process.sequences. This reduces the need to manually specify IDs and
		 * interlinks for Tasks that simply proceed to the next task in a sequence.
		 * 
		 * Processes follow all the standard rules for encoding as componentXML, however,
		 * note that the &lt;Process&gt; tag allows any kind of ProcessElement (tasks, gateways
		 * and sequences) to appear as a direct subelement of the &lt;Process&gt; tag without the need
		 * for an intervening &lt;elements&gt; or &lt;sequences&gt; tag. The example below
		 * demonstrates this shorthand format.
		 * 
		 * &lt;Process ID="processId"&gt;
		 * &lt;ServiceTask ID="serviceTaskId" nextElement="sequenceId" ..&gt;
		 * &lt;inputFieldList&gt;
		 * &lt;value&gt;order.countryName&lt;/value&gt;
		 * &lt;/inputFieldList&gt;
		 * &lt;outputFieldList&gt;
		 * &lt;value&gt;order.countryName&lt;/value&gt;
		 * &lt;value&gt;order.continent&lt;/value&gt;
		 * &lt;outputFieldList&gt;
		 * &lt;/ServiceTask&gt;
		 * &lt;sequence ID="sequenceId" &gt;
		 * &lt;StateTask ../&gt;
		 * &lt;StateTask ../&gt;
		 * &lt;StateTask ../&gt;
		 * &lt;StateTask nextElement="userTaskId" ../&gt;
		 * &lt;/sequence&gt;
		 * &lt;UserTask ID="userTaskId</id>" ../&gt;
		 * ...
		 * &lt;/Process&gt;
		 * 
		 * NOTE: you must load the Workflow module
		 * loadingOptionalModules','Optional Modules before you can use Process.
		 */ 
		Process: ProcessStatic<Process, ProcessProps>;

		/** 
		 * ProcessElement extends Class
		 * A ProcessElement is an abstract superclass for elements involved in a Process, such
		 * as a Task or XORGateway.
		 */ 
		ProcessElement: ProcessElementStatic<ProcessElement, ProcessElementProps>;

		/** 
		 * ProcessSequence extends ProcessElement
		 * An Array of ProcessElements involved in a Process. A 
		 * ProcessSequence is used to reduce the number of explicit
		 * ProcessElement.IDs that need to be assigned, by creating an implicit next element -
		 * the next in the sequence.
		 * 
		 * A sequence cannot be executed outside of a Process and has no state.
		 */ 
		ProcessSequence: ProcessSequenceStatic<ProcessSequence, ProcessSequenceProps>;

		/** 
		 * Progressbar extends StretchImg
		 * The Progressbar widget class extends the StretchImg class to implement image-based progress
		 * bars (graphical bars whose lengths represent percentages, typically of task completion).
		 */ 
		Progressbar: ProgressbarStatic<Progressbar, ProgressbarProps>;

		/** 
		 * ProgressbarEditProxy extends StatefulCanvasEditProxy
		 * EditProxy that handles Progressbar objects when editMode is enabled.
		 */ 
		ProgressbarEditProxy: ProgressbarEditProxyStatic<ProgressbarEditProxy, ProgressbarEditProxyProps>;

		/** 
		 * PropertySheet extends DynamicForm
		 * Editor with a minimalist appearance, tuned for editing large numbers of properties in a
		 * constrained space.
		 */ 
		PropertySheet: PropertySheetStatic<PropertySheet, PropertySheetProps>;

		/** 
		 * RadioGroupItem extends FormItem
		 * FormItem that shows a set of mutually exclusive options as a group of radio buttons.
		 */ 
		RadioGroupItem: RadioGroupItemStatic<RadioGroupItem, RadioGroupItemProps>;

		/** 
		 * RadioItem extends NativeCheckboxItem
		 * Form item representing a member of a radio group, subclassed from NativeCheckboxItem.
		 * RadioItems items are created and managed automatically by RadioGroupItem instances
		 * and should not be instantiated directly.
		 */ 
		RadioItem: RadioItemStatic<RadioItem, RadioItemProps>;

		/** 
		 * RangeSlider extends Canvas
		 * A "double slider" allowing the user to select a range via two draggable thumbs.
		 */ 
		RangeSlider: RangeSliderStatic<RangeSlider, RangeSliderProps>;

		/** 
		 * RecordEditor extends ListGrid
		 * Component for editing a single record.
		 * RecordEditors are implemented as a subclass of ListGrid, showing no header and a single 
		 * row always drawn in the editable state, allowing the user to modify the values at any time.
		 * The RecordEditor.actionButton is automatically shown as a way for the user to act 
		 * upon the edited values.
		 * 
		 * The RecordEditor class exists as a helper class for ListGrids, used to provide
		 * an interface for editing criteria when ListGrid.showFilterEditor','filterEditor 
		 * is set to true.
		 */ 
		RecordEditor: RecordEditorStatic<RecordEditor, RecordEditorProps>;

		/** 
		 * RelativeDateItem extends CanvasItem
		 * A FormItem for entering a date relative to today or relative to some other date, or a specific
		 * date. Typically used for filtering data by date.
		 * 
		 * The RelativeDateItem consists of a ComboBoxItem where the user may directly choose 
		 * one of several RelativeDateItem.presetOptions','preset options, choose to enter a 
		 * RelativeDateItem.quantityField','quantity and TimeUnit','time unit 
		 * (eg "4 months ago" or "3 years from now") or directly type in 
		 * an absolute date value (7/18/2009).
		 */ 
		RelativeDateItem: RelativeDateItemStatic<RelativeDateItem, RelativeDateItemProps>;

		/** 
		 * ResetItem extends ButtonItem
		 * Button that resets the form to default values, by calling
		 * DynamicForm.resetValues()
		 * 
		 * If you define a click handler on this item, you can return false to cancel the reset.
		 */ 
		ResetItem: ResetItemStatic<ResetItem, ResetItemProps>;

		/** 
		 * RestDataSource extends DataSource
		 * The RestDataSource implements the 4 core DataSource operations using a simple protocol of
		 * XML or JSON requests and responses sent over HTTP, which can be easily fulfilled by any HTTP
		 * server technology.
		 * 
		 * RestDataSource is named for the
		 * <a href='http://www.google.com/search?hl=en&q=REST+HTTP' target='_blank'>REST</a> (REpresentational State
		 * Transfer) pattern, which in brief says that simple messages passed over HTTP is a sufficient
		 * protocol for many web applications, without the need for further protocols such as WSDL or
		 * SOAP.
		 * 
		 * A RestDataSource is used just like a normal DataSource. RestDataSources are pre-configured,
		 * using the general-purpose databinding facilities of DataSources, to expect a particular
		 * format for responses and to send requests in a specific format. These request and
		 * response formats represent Isomorphic's recommended best practices for binding SmartClient
		 * to backends which do not already support a similar, pre-existing request and response
		 * format and where the SmartClient Java Server cannot be used. 
		 * 
		 * If you have a pre-existing REST or WSDL service which is difficult to change, consider
		 * adapting SmartClient to the existing service instead, by starting with a normal
		 * DataSource and using the 
		 * clientDataIntegration','client-side data integration facilities to create a
		 * mapping between SmartClient's DSRequest and DSResponse objects and the message
		 * formats of your existing services. NOTE: do not begin this process by
		 * creating or subclassing RestDataSource; for a pre-existing service which is unrelated
		 * to the protocol documented for RestDataSource, start by configuring or subclassing
		 * DataSource instead.
		 * 
		 * RestDataSource is typically used with PHP, Ruby, Python, Perl or custom server technologies,
		 * and represents an alternative to installing the SmartClient Server in a Java technology
		 * stack, or using wsdlBinding','WSDL-based binding with .NET or other WSDL-capable
		 * technologies. Note that SmartClient Server also provides built-in support for the REST
		 * protocol via its RESTHandler servlet; this is primarily to allow non-SmartClient clients
		 * to make use of DataSource operations. If you particularly wished to do so, you could use
		 * RestDataSource to make a SmartClient app talk to the SmartClient Server using REST rather 
		 * than the proprietary wire format normally used when communicating with SmartClient Server
		 * (this is how we are able to write automated tests for the RESTHandler servlet). However,
		 * doing this provides no benefit, imposes a number of inconveniences, and makes a handful 
		 * of server-based features less useful 
		 * (DataSourceField.viewRequiresAuthentication','field-level declarative security, for 
		 * example), so we strongly recommend that you do <em>not</em> do this; it is only mentioned
		 * here for completeness while we are discussing REST.
		 * 
		 * The request and response formats used by the RestDataSource allow for many of the available
		 * features of SmartClient's databinding system to be used, including data paging, searching &
		 * sorting, DSRequest.oldValues','long transactions, 
		 * ResultSet','automatic cache sync, relogin','relogin and 
		 * RPCManager.startQueue','queuing. However, advanced
		 * features such as upload','uploading / binary fields and 
		 * ListGrid.exportData','export aren't available with RestDataSource and need to be 
		 * re-implemented as needed. Most, though not all, iscServer','server-based features
		 * are still available when using RestDataSource, as long as you are also using the RESTHandler 
		 * servlet that is part of SmartClient Server. However, as noted above, this approach is not 
		 * recommended; if you are using Isomorphic technology both client- and server-side, it makes
		 * more sense to use the proprietary wire format.
		 * 
		 * RestDataSource and binary data
		 * 
		 * Binary data in a response provided to a RestDataSource must be delivered as valid XML or
		 * JSON Strings. Once delivered to the browser as Strings, there is no way to trigger the
		 * browser's "Save As" dialog to download the data, and in most cases no way to trigger other
		 * helper applications that might be launched to handle binary data (such as Excel or a PDF
		 * viewer). Hence for binary it usually makes sense to make a direct request via
		 * RPCManager.sendRequest() with downloadResult:true, separate from RestDataSource.
		 * 
		 * If you are using the SmartClient Server included in Pro, Power end Enterprise to handle your
		 * REST requests server-side, there is transparent support for conversion between Java 
		 * InputStreams representing binary data, and Strings containing that binary 
		 * data encoded using the <a href=http://en.wikipedia.org/wiki/Base64>Base64 algorithm</a>.
		 * Thus, on the server, the binary data is in its raw binary form, with transparent conversion
		 * to or from Base64 for messages to or from the REST client.
		 * 
		 * <span style="font-weight:bold;font-size:16px;">Examples</span>
		 * 
		 * XML formatted responses:
		 * 
		 * RestDataSource expects a response like the following in response to a "fetch" request:
		 * 
		 * &lt;response&gt;
		 * &lt;status&gt;0&lt;/status&gt;
		 * &lt;startRow&gt;0&lt;/startRow&gt;
		 * &lt;endRow&gt;76&lt;/endRow&gt;
		 * &lt;totalRows&gt;546&lt;/totalRows&gt;
		 * &lt;data&gt;
		 * &lt;record&gt;
		 * &lt;field1&gt;value&lt;/field1&gt;
		 * &lt;field2&gt;value&lt;/field2&gt;
		 * &lt;/record&gt;
		 * &lt;record&gt;
		 * &lt;field1&gt;value&lt;/field1&gt;
		 * &lt;field2&gt;value&lt;/field2&gt;
		 * &lt;/record&gt;
		 * ... 76 total records ... 
		 * &lt;/data&gt;
		 * &lt;/response&gt;
		 * 
		 * The &lt;status&gt; element indicates whether the fetch operation was successful 
		 * (see statusCodes).
		 * 
		 * The &lt;data&gt; element contains a list of record nodes, each of which represents a record
		 * returned by the server. The optional &lt;startRow&gt;, &lt;endRow&gt; and &lt;totalRows&gt;
		 * elements are needed only if data paging is in use, and populate the
		 * DSResponse.startRow','startRow, DSResponse.endRow','endRow and
		 * DSResponse.totalRows','totalRows properties of the DSResponse.
		 * 
		 * Note: for a more compact format, simple field values may be specified on record 
		 * nodes directly as attributes - in this case a record element might be structured like this:
		 * 
		 * &lt;record field1="value" field2="value" /&gt;
		 * 
		 * 
		 * Note that a RestDataSource will bypass browser caching of all responses by default. See
		 * DataSource.preventHTTPCaching.
		 * 
		 * Successful "add" or "update" request responses are similar in format - in this case the data
		 * element would be expected to contain a single record object containing the details of the
		 * record, as saved on the server.
		 * 
		 * The response from a "remove" operation would again include status and data elements, but in
		 * this case, only the primary key field value(s) of the removed record would be expected to be 
		 * present under the data element.
		 * 
		 * If a validation failure occurred on the server, the response would
		 * have status set to RPCResponse.STATUS_VALIDATION_ERROR [-4],
		 * and any validation errors could be included as per-field sub-elements of an "errors"
		 * element. For a validation error, the response is not expected to contain any
		 * &lt;data&gt; element. 
		 * 
		 * A response showing a validation error might look like this:
		 * 
		 * &lt;response&gt;
		 * &lt;status&gt;-4&lt;/status&gt;
		 * &lt;errors&gt;
		 * &lt;field1&gt;
		 * &lt;errorMessage&gt;A validation error occurred for this field&lt;/errorMessage&gt;
		 * &lt;/field1&gt;
		 * &lt;/errors&gt;
		 * &lt;/response&gt;
		 * 
		 * 
		 * An unrecoverable error, such as an unexpected server failure, can be flagged by setting
		 * &lt;status&gt; to -1 and setting &lt;data&gt; to an error message. In this case the
		 * &lt;errors&gt; element is not used (it's specific to validation errors). An unrecoverable
		 * error causes all response processing to be skipped and RPCManager.handleError to be
		 * invoked, which by default will show the provided error message as an alert using
		 * isc.warn.
		 * 
		 * JSON formatted responses:
		 * 
		 * JSON format responses are expected to contain the same data / meta-data as XMLresponses,
		 * encapsulated in a simple object with a "response" attribute.
		 * The response to a "fetch" request would therefore have this format:
		 * 
		 * {
		 * "response": {
		 * "status": 0,
		 * "startRow": 0,
		 * "endRow": 76,
		 * "totalRows": 546,
		 * "data": [
		 * {"field1": "value", "field2": "value"},
		 * {"field1": "value", "field2": "value"},
		 * ... 76 total records ...
		 * ]
		 * }
		 * }
		 * 
		 * The structure successful for "add", "update" and "remove" responses would be similar, though
		 * the data array would be expected to contain only a single object, representing the values as
		 * saved. This allows the server to return values such as an auto-generated sequence
		 * primaryKey, a last modified timestamp, or similar server-generated field values.
		 * 
		 * For a remove, only the value for the primaryKey field[s] would be required.
		 * 
		 * For a validation error, the status attribute would be set to 
		 * RPCResponse.STATUS_VALIDATION_ERROR [-4], and errors would
		 * be specified in the errors attribute of the response. For example:
		 * 
		 * { "response":
		 * { "status": -4,
		 * "errors":
		 * { "field1": {"errorMessage": "A validation error on field1"},
		 * "field2": {"errorMessage": "A validation error on field2"}
		 * }
		 * }
		 * }
		 * 
		 * An array of errors may also be returned for a single field, like this:
		 * 
		 * { "response":
		 * { "status": -4,
		 * "errors":
		 * { "field1": [
		 * {"errorMessage": "First error on field1"},
		 * {"errorMessage": "Second error on field1"}
		 * ]
		 * }
		 * }
		 * }
		 * 
		 * 
		 * As with the XML format above, an unrecoverable error is indicated by setting the
		 * status attribute to -1 and the data property to the error message.
		 * 
		 * Server inbound data formats
		 * 
		 * The format of data sent to the server is determined by the OperationBinding.dataProtocol
		 * specified for the operation. Request data is sent as parameters if the format is 
		 * specified as "getParams" or "postParams".
		 * 
		 * In this case, the parameters sent to the server will consist of the DSRequest's data, and any
		 * parameters explicitly specified on the DSRequest object (as RPCRequest.params. 
		 * If RestDataSource.sendMetaData is true, the DSRequest meta 
		 * data properties will also be present as parameters, prefixed with 
		 * RestDataSource.metaDataPrefix.
		 * 
		 * Example URL constructed with the metaDataPrefix set to "_" (the default):
		 * 
		 * 
		 * &nbsp;&nbsp;&nbsp;[dataURL]?field1=value1&_operationType=fetch&_startRow=0&_endRow=50&_sortBy=-field2&_dataSource=dsName
		 * 
		 * 
		 * In this case the server would be able to separate the request's data from the meta data 
		 * via the "_" prefix.
		 * 
		 * If data is sent to the server via the "postMessage" dataProtocol, the data will
		 * be serialized as an XML or JSON message according to the dataFormat setting.
		 * Both XML and JSON messages will contain request metadata such as startRow and endRow, and
		 * will appear exactly as though the subset of the DSRequest that is meaningful to the
		 * server had been passed to DataSource.xmlSerialize or JSON.encode
		 * respectively.
		 * 
		 * An example of an XML message might look like this:
		 * 
		 * &lt;request&gt;
		 * &lt;data&gt;
		 * &lt;countryCode&gt;US&lt;/countryCode&gt;
		 * &lt;countryName&gt;Edited Value&lt;/countryName&gt;
		 * &lt;capital&gt;Edited Value&lt;/capital&gt;
		 * &lt;continent&gt;Edited Value&lt;/continent&gt;
		 * &lt;/data&gt;
		 * &lt;dataSource&gt;countryDS&lt;/dataSource&gt;
		 * &lt;operationType&gt;update&lt;/operationType&gt;
		 * &lt/request&gt;
		 * 
		 * An example of an XML message for a fetch operation passing simple criteria:
		 * 
		 * &lt;request&gt;
		 * &lt;data&gt;
		 * &lt;continent&gt;North America&lt;/continent&gt;
		 * &lt;/data&gt;
		 * &lt;dataSource&gt;countryDS&lt;/dataSource&gt;
		 * &lt;operationType&gt;fetch&lt;/operationType&gt;
		 * &lt;startRow&gt;0&lt;/startRow&gt;
		 * &lt;endRow&gt;75&lt;/endRow&gt;
		 * &lt;componentId&gt;worldGrid&lt;/componentId&gt;
		 * &lt;textMatchStyle&gt;exact&lt;/textMatchStyle&gt;
		 * &lt/request&gt;
		 * 
		 * And an example of an XML message for a fetch operation passing AdvancedCriteria:
		 * 
		 * &lt;request&gt;
		 * &lt;data&gt;
		 * &lt;_constructor&gt;AdvancedCriteria&lt;/_constructor&gt;
		 * &lt;operator&gt;or&lt;/operator&gt;
		 * &lt;criteria&gt;
		 * &lt;criterion&gt;
		 * &lt;fieldName&gt;continent&lt;/fieldName&gt;
		 * &lt;operator&gt;equals&lt;/operator&gt;
		 * &lt;value&gt;North America&lt;/value&gt;
		 * &lt;/criterion&gt;
		 * &lt;criterion&gt;
		 * &lt;operator&gt;and&lt;/operator&gt;
		 * &lt;criteria&gt;
		 * &lt;criterion&gt;
		 * &lt;fieldName&gt;continent&lt;/fieldName&gt;
		 * &lt;operator&gt;equals&lt;/operator&gt;
		 * &lt;value&gt;Europe&lt;/value&gt;
		 * &lt;/criterion&gt;
		 * &lt;criterion&gt;
		 * &lt;fieldName&gt;population&lt;/fieldName&gt;
		 * &lt;operator&gt;greaterThan&lt;/operator&gt;
		 * &lt;value&gt;50000000&lt;/value&gt;
		 * &lt;/criterion&gt;
		 * &lt;/criteria&gt;
		 * &lt;/criterion&gt;
		 * &lt;/criteria&gt;
		 * &lt;/data&gt;
		 * &lt;dataSource&gt;countryDS&lt;/dataSource&gt;
		 * &lt;operationType&gt;fetch&lt;/operationType&gt;
		 * &lt;startRow&gt;0&lt;/startRow&gt;
		 * &lt;endRow&gt;75&lt;/endRow&gt;
		 * &lt;componentId&gt;worldGrid&lt;/componentId&gt;
		 * &lt/request&gt;
		 * 
		 * An example of an XML message for a fetch operation when using serverSummaries','server-side summaries:
		 * 
		 * &lt;request&gt;
		 * &lt;data&gt;&lt;/data&gt;
		 * &lt;dataSource&gt;countryDS&lt;/dataSource&gt;
		 * &lt;operationType&gt;fetch&lt;/operationType&gt;
		 * &lt;summaryFunctions&gt;
		 * &lt;pk&gt;count&lt;/pk&gt;
		 * &lt;/summaryFunctions&gt;
		 * &lt;groupBy&gt;member_g8&lt;/groupBy&gt;
		 * &lt/request&gt;
		 * 
		 * JSON messages are just the plain JSON form of the structures shown in the above XML
		 * examples. The advanced criteria XML example above but in JSON form:
		 * 
		 * {
		 * data: {
		 * _constructor: "AdvancedCriteria",
		 * operator: "or",
		 * criteria: [
		 * {
		 * fieldName: "continent",
		 * operator: "equals",
		 * value: "North America
		 * },
		 * {
		 * operator: "and", criteria: [
		 * {
		 * fieldName: "continent",
		 * operator: "equals",
		 * value: "Europe"
		 * },
		 * {
		 * fieldName: "population",
		 * operator: "greaterThan",
		 * value: 50000000
		 * }
		 * ]
		 * }
		 * ]
		 * }
		 * dataSource: "countryDS",
		 * operationType: "fetch",
		 * startRow: 0,
		 * endRow: 75,
		 * componentId: "worldGrid"
		 * }
		 * 
		 * The RestDataSource.operationBindings','default OperationBindings for a RestDataSource
		 * specify dataProtocol as "getParams" for the fetch operation, and "postParams" for update,
		 * add and remove operations. Note that most webservers impose a limit on the maximum size 
		 * of GET requests (specifically, on the size of the request URL + HTTP headers). Using
		 * dataProtocol:"getParams" for "fetch" operations that involve complex AdvancedCriteria
		 * will result in a JSON serialization of the AdvancedCriteria in the request URL, and when
		 * combined with large cookies this can easily overflow the default limits on certain
		 * webservers (see
		 * <a href='http://stackoverflow.com/questions/686217/maximum-on-http-header-values' target='_blank'>http://stackoverflow.com/questions/686217/maximum-on-http-header-values</a>).
		 * For this reason, we recommend that you use the "postMessage" protocol whenever you are
		 * intending to use AdvancedCriteria with RestDataSource.
		 * 
		 * 
		 * Date, time and datetime values
		 * 
		 * Date, time and datetime values must be communicated using XML Schema format, as in the 
		 * following examples:
		 * 
		 * &nbsp;&nbsp;&lt;dateField&gt;2007-04-22&lt;/dateField&gt;
		 * &nbsp;&nbsp;&lt;timeField&gt;11:07:13&lt;/timeField&gt;
		 * &nbsp;&nbsp;&lt;dateTimeField&gt;2007-04-22T11:07:13&lt;/dateTimeField&gt;
		 * &nbsp;&nbsp;&lt;dateTimeField&gt;2007-04-22T11:07:13.582&lt;/dateTimeField&gt;
		 * 
		 * 
		 * And the equivalent in JSON:
		 * 
		 * &nbsp;&nbsp;dateField: "2007-04-22"
		 * &nbsp;&nbsp;timeField: "11:07:13"
		 * &nbsp;&nbsp;dateTimeField: "2007-04-22T11:07:13"
		 * &nbsp;&nbsp;dateTimeField: "2007-04-22T11:07:13.582"
		 * 
		 * 
		 * Both RestDataSource on the client-side and the RESTHandler servlet on the server side 
		 * automatically handle encoding and decoding temporal values using these formats. Both also
		 * handle datetime formats including or excluding milliseconds automatically. When encoding,
		 * both honor the DataSource.trimMilliseconds setting on the DataSource, falling back
		 * to the server.properties setting rest.trimMilliseconds; when
		 * decoding, both detect whether or not to try to parse milliseconds based on the string they 
		 * receive.
		 * 
		 * Fields of type "date" and "time" are considered to hold logical date and time values, as 
		 * discussed in the dateFormatAndStorage','date and time handling article, and are 
		 * not affected by timezones. Fields of type "datetime" will be converted to UTC on the 
		 * client side by RestDataSource, and will be sent back down to the client as UTC by the 
		 * server-side RESTHandler. We recommend that your own REST client and/or server code do the
		 * same thing (ie, transmit all datetime values in both directions as UTC). Note that the 
		 * examples given above give no timezone information, and will be treated by the SmartClient
		 * Server as UTC values. If you wish to work with datetime values in a particular timezone,
		 * use a format like this:
		 * 
		 * &nbsp;&nbsp;&lt;dateField&gt;2007-04-22T11:07:13-0800&lt;/dateField&gt;
		 * &nbsp;&nbsp;&lt;dateField&gt;2012-11-19T22:12:04+0100&lt;/dateField&gt;
		 * 
		 * 
		 * And the equivalent in JSON:
		 * 
		 * &nbsp;&nbsp;dateTimeField: "2007-04-22T11:07:13-0800"
		 * &nbsp;&nbsp;dateTimeField: "2012-11-19T22:12:04+0100"
		 * 
		 * 
		 * NOTE: Although we refer above to XML Schema format, the format used for specifying
		 * timezone offset is slightly different from XML Schema - as shown in the above examples, you
		 * specify "+HHMM" or "-HHMM", as opposed to the XML Schema format which requires a ":" character
		 * between the hours and minutes. The reason for this difference is simply that the Java 
		 * SimpleDateFormat class imposes it.
		 * 
		 * RestDataSource queuing support
		 * 
		 * RestDataSource supports RPCManager.startQueue','queuing of DSRequests. This allows 
		 * you to send multiple requests to the server in a single HTTP turnaround, thus minimizing 
		 * network traffic and allowing the server to treat multiple requests as a single transaction,
		 * if the server is able to do so (in Power Edition and above, the SmartClient Server
		 * transparently supports grouping multiple REST requests in a queue into a single database
		 * transaction when using one of the built-in DataSource types). Note that you can disable 
		 * queuing support with the RestDataSource.disableQueuing flag.
		 * 
		 * If you want to use queuing with RestDataSource, you must use the "postMessage" dataProtocol
		 * with either XML or JSON dataFormat. Message format is similar to the non-queued examples 
		 * shown earlier: it is simply extended to cope with the idea of multiple DSRequests 
		 * encapsulated in the message.
		 * 
		 * An example of the XML message sent from RestDataSource to the server for two update requests
		 * combined into a queue, using XML dataFormat:
		 * 
		 * &lt;transaction&gt;
		 * &lt;operations&gt;
		 * &lt;request&gt;
		 * &lt;data&gt;
		 * &lt;pk&gt;1&lt;/pk&gt;
		 * &lt;countryName&gt;Edited Value&lt;/countryName&gt;
		 * &lt;capital&gt;Edited Value&lt;/capital&gt;
		 * &lt;continent&gt;Edited Value&lt;/continent&gt;
		 * &lt;/data&gt;
		 * &lt;dataSource&gt;countryDS&lt;/dataSource&gt;
		 * &lt;operationType&gt;update&lt;/operationType&gt;
		 * &lt/request&gt;
		 * &lt;request&gt;
		 * &lt;data&gt;
		 * &lt;pk&gt;2&lt;/pk&gt;
		 * &lt;capital&gt;Edited Value&lt;/capital&gt;
		 * &lt;population&gt;123456&lt;/population&gt;
		 * &lt;/data&gt;
		 * &lt;dataSource&gt;countryDS&lt;/dataSource&gt;
		 * &lt;operationType&gt;update&lt;/operationType&gt;
		 * &lt/request&gt;
		 * &lt;/operations&gt;
		 * &lt;transaction&gt;
		 * 
		 * And the same message in JSON format:
		 * 
		 * { 
		 * transaction: { 
		 * operations: [{
		 * dataSource:"countryDS", 
		 * operationType:"update", 
		 * data: {
		 * pk: 1
		 * countryName: "Edited Value",
		 * capital: "Edited Value",
		 * continent: "Edited Value"
		 * }
		 * }, {
		 * dataSource:"countryDS", 
		 * operationType:"update", 
		 * data: {
		 * pk: 2,
		 * capital: "Edited Value",
		 * popuilation: 123456
		 * }
		 * }]
		 * }
		 * }
		 * 
		 * RestDataSource expects the response to a queue of requests to be a queue of responses in 
		 * the same order as the original requests. Again, the message format is very similar to the 
		 * unqueued REST format, it just has an outer container construct. Note also that the 
		 * individual DSResponses in a queued response have an extra property, 
		 * DSResponse.queueStatus','queueStatus. This allows each individual
		 * response to determine whether the queue as a whole succeeded. For example, if the first
		 * update succeeded but the second failed validation, the first response would have a
		 * status of 0, but a queueStatus of -1, while the second response
		 * would have both properties set to -1.
		 * 
		 * The update queue example given above would expect a response like this (in XML):
		 * 
		 * &lt;responses&gt;
		 * &lt;response&gt;
		 * &lt;status&gt;0&lt;/status&gt;
		 * &lt;queueStatus&gt;0&lt;/queueStatus&gt;
		 * &lt;data&gt;
		 * &lt;record&gt;
		 * &lt;countryName&gt;Edited Value&lt;/countryName&gt;
		 * &lt;gdp&gt;1700.0&lt;/gdp&gt;
		 * &lt;continent&gt;Edited Value&lt;/continent&gt;
		 * &lt;capital&gt;Edited Value&lt;/capital&gt;
		 * &lt;pk&gt;1&lt;/pk&gt;
		 * &lt;/record&gt;
		 * &lt;/data&gt;
		 * &lt;/response&gt;
		 * &lt;response&gt;
		 * &lt;status&gt;0&lt;/status&gt;
		 * &lt;queueStatus&gt;0&lt;/queueStatus&gt;
		 * &lt;data&gt;
		 * &lt;record&gt;
		 * &lt;countryName&gt;United States&lt;/countryName&gt;
		 * &lt;gdp&gt;7247700.0&lt;/gdp&gt;
		 * &lt;continent&gt;North America&lt;/continent&gt;
		 * &lt;independence&gt;1776-07-04&lt;/independence&gt;
		 * &lt;capital&gt;Washington DC&lt;/capital&gt;
		 * &lt;pk&gt;2&lt;/pk&gt;
		 * &lt;population&gt;123456&lt;/population&gt;
		 * &lt;/record&gt;
		 * &lt;/data&gt;
		 * &lt;/response&gt;
		 * &lt;/responses&gt;
		 * 
		 * And in JSON:
		 * 
		 * [
		 * {
		 * "response": {
		 * "queueStatus": 0,
		 * "status": 0, 
		 * "data": [{
		 * "countryName": "Edited Value",
		 * "gdp": 1700.0,
		 * "continent": "Edited Value",
		 * "capital": "Edited Value",
		 * "pk": 1
		 * }]
		 * }
		 * },
		 * {
		 * "response": {
		 * "queueStatus": 0,
		 * "status": 0,
		 * "data": [{
		 * "countryName": "United States",
		 * "gdp": 7247700.0,
		 * "continent": "North America",
		 * "independence": "1776-07-04",
		 * "capital": "Washington DC",
		 * "pk": 2,
		 * "population": 123456
		 * }]
		 * }
		 * }
		 * ]
		 * 
		 * Hierarchical (Tree) data:
		 * 
		 * To create a hierarchical DataSource, in the DataSource's fields array, a field 
		 * must be specified as the parent id field - the field which will contain a pointer to the
		 * id of each node's parent. 
		 * This can be achieved by setting the DataSourceField.foreignKey and the 
		 * DataSourceField.rootValue attributes on the field definition. For example:
		 * 
		 * RestDataSource.create({
		 * ID:"supplyItem",
		 * fields : [
		 * {name:"itemId", type:"sequence", primaryKey:true},
		 * {name:"parentId", type:"integer", foreignKey:"supplyItem.itemId", rootValue:0},
		 * ...
		 * ]
		 * });
		 * 
		 * Tree Data is then treated on the server as a flat list of records linked by parent id.
		 * 
		 * Tree data is typically displayed using a dataBound TreeGrid component. TreeGrids
		 * automatically create a ResultTree data object, which requests data directly
		 * from the DataSource. ResultTrees load data on demand, only requesting currently visible 
		 * (open) nodes from the server. This is handled by including a specified value for the parent 
		 * id field in the request criteria.
		 * To implement a standard load-on-demand tree RestDataSource back end, you should therefore 
		 * simply return the set of nodes that match the criteria passed in. 
		 * For example, if your DataSource was defined as the "supplyItem" code snippet above, 
		 * a fetch request for all children of a node with itemId set to 12 
		 * would have "parentId" set to 12 in the request criteria.
		 * A valid response would then contain all the records that matched this criteria. For example:
		 * 
		 * &lt;response&gt;
		 * &lt;status&gt;0&lt;/status&gt;
		 * &lt;data&gt;
		 * &lt;record&gt;
		 * &lt;itemId&gt;15&lt;/itemId&gt;
		 * &lt;parentId&gt;12&lt;/parentId&gt;
		 * &lt;/record&gt;
		 * &lt;record&gt;
		 * &lt;itemId&gt;16&lt;/itemId&gt;
		 * &lt;parentId&gt;12&lt;/parentId&gt;
		 * &lt;/record&gt;
		 * &lt;/data&gt;
		 * &lt;/response&gt;
		 * 
		 * The structure of responses for Add, Update and Delete type requests will be the 
		 * same regardless of whether the data is hierarchical. However you should be aware that 
		 * the underlying data storage may need to be managed slightly differently in some cases.
		 * 
		 * Specifically, Add and Update operations may change the structure of the tree by returning a 
		 * new parent id field value for the modified node. Depending on how your data is stored you 
		 * may need to include special back-end logic to handle this.
		 * 
		 * Also, if a user deletes a folder within a databound tree, any children of that folder will 
		 * also be dropped from the tree, and can be removed from the back-end data storage.
		 * 
		 * Note: For a general overview of binding components to Tree structured data, see 
		 * treeDataBinding','Tree Databinding.
		 */ 
		RestDataSource: RestDataSourceStatic<RestDataSource, RestDataSourceProps>;

		/** 
		 * ResultSet extends Class
		 * ResultSets are an implementation of the List interface that automatically fetches 
		 * DataSource records when items are requested from the List. ResultSets provide robust,
		 * customizable, high-performance cache management for ListGrids and other built-in SmartClient
		 * components, and can be used as cache managers by custom components.
		 * 
		 * ResultSets manage data paging, that is, loading records in batches as the user navigates
		 * the data set. A ResultSet will switch to using client-side sorting and filtering when
		 * possible to improve responsiveness and reduce server load. ResultSets also participate in
		 * automatic cache synchronization, observing operations on DataSources and automatically
		 * updating their caches.
		 * 
		 * Creation
		 * 
		 * A ResultSet can be passed to any component that expects a List, and the List APIs can be
		 * called directly on the ResultSet as long as the caller is able to deal with asynchronous
		 * loading; see ResultSet.getRange.
		 * 
		 * Generally ResultSets do not need to be created directly, but are created by DataBound
		 * components as an automatic consequence of calling 
		 * dataBoundComponentMethods','DataBound Component Methods. 
		 * For example, the ListGrid.fetchData causes ListGrid.data to become an
		 * automatically created ResultSet object. Automatically created ResultSets
		 * can be customized via properties on ListGrids such as ListGrid.dataPageSize and
		 * ListGrid.dataProperties. All ResultSets for a given DataSource may also be 
		 * customized via setting DataSource.resultSetClass to the name of a ResultSet 
		 * isc.defineClass','subclass in which 
		 * Class.addProperties','defaults have been changed.
		 * 
		 * A ResultSet defaults to using data paging, setting DSRequest.startRow and
		 * DSRequest.endRow in issued dsRequests. Server code may always return more rows than
		 * the ResultSet requests and the ResultSet will correctly integrate those rows based on
		 * DSResponse.startRow/DSResponse.endRow','endRow. 
		 * Hence the server can always avoid paging mode by simply returning all matching rows.
		 * 
		 * A ResultSet can be created directly with just the ID of a DataSource:
		 * 
		 * isc.ResultSet.create({
		 * dataSource : "dataSourceID"
		 * })
		 * 
		 * 
		 * Directly created ResultSets are typically used by custom components, or as a means of
		 * managing datasets that will be used by several components.
		 * 
		 * When created directly rather than via a dataBoundComponent, a newly created ResultSet will
		 * not issue it's first "fetch" DSRequest until data is accessed (for example, via
		 * ResultSet.get','get()). 
		 * 
		 * Paging and total dataset length
		 * 
		 * When using data paging, the server communicates the total number of records that match the
		 * current search criteria by setting DSResponse.totalRows. The ResultSet will then
		 * return this number from ResultSet.getLength','getLength(), and ListGrids and other
		 * components will show a scrollbar that allows the user to jump to the end of the dataset
		 * directly.
		 * 
		 * However, the ResultSet does not require that the server calculate the true length of the
		 * dataset, which can be costly for an extremely large, searchable dataset. Instead, the
		 * server may simply advertise a totalRows value that is one page larger
		 * than the last row loaded. This results in a UI sometimes called "progressive loading",
		 * where the user may load more rows by scrolling past the end of the currently loaded rows,
		 * but is not allowed to skip to the end of the dataset.
		 * 
		 * No client-side settings are required to enable this mode - it is entirely server-driven.
		 * However, it is usually coupled with ListGrid.canSort','disabling sorting, since
		 * server-side sorting would also force the server to traverse the entire dataset. Note
		 * also the DataSource.progressiveLoading','progressiveLoading flag, which can be applied
		 * at a DataSource, operation, request, component or ResultSet level; if you are using the
		 * built-in server-side DataSource implementations with Pro or better, this tells SmartClient
		 * Server to use its pre-built progressive loading mode for that DataSource, operation, 
		 * request, component or ResultSet.
		 * 
		 * Client-side Sorting and Filtering
		 * 
		 * If a ResultSet obtains a full cache for the current set of filter criteria, it will 
		 * automatically switch to client-side sorting, and will also use client-side filtering 
		 * if the filter criteria are later changed but appear to be more restrictive than the
		 * criteria in use when the ResultSet obtained a full cache.
		 * 
		 * The ResultSet.useClientSorting','useClientSorting and 
		 * ResultSet.useClientFiltering','useClientFiltering flags can be used to disable
		 * client-side sorting and filtering respectively if these behaviors don't match server-based
		 * sorting and filtering. However, because client-side sorting and filtering radically improve
		 * responsiveness and reduce server load, it is better to customize the ResultSet so that it
		 * can match server-side sorting and filtering behaviors.
		 * 
		 * Sorting behavior is primarily customized via the "sort normalizer" passed to
		 * ResultSet.sortByProperty, either via direct calls on a standalone ResultSet, or via
		 * ListGridField.sortNormalizer for a ListGrid-managed ResultSet.
		 * 
		 * By default, client-side filtering interprets the Criteria','criteria passed to
		 * ResultSet.setCriteria','setCriteria() as a set of field values that records must match
		 * (similarly to the built-in SQL/Hibernate connectors built into the SmartClient Server).
		 * Custom client-side filtering logic can be implemented by overriding
		 * ResultSet.applyFilter','applyFilter(). Overriding
		 * ResultSet.compareCriteria','compareCriteria() allows you to control when the ResultSet
		 * uses client-side vs server-side filtering, and the ResultSet has two default 
		 * ResultSet.criteriaPolicy','criteria policies built-in.
		 * 
		 * Modifying ResultSets
		 * 
		 * Records cannot be directly added or removed from a ResultSet via List
		 * APIs such as List.removeAt','removeAt(), since this would break the consistency of
		 * server and client row numbering needed for data paging, and also
		 * create some issues with automatic cache synchronization.
		 * 
		 * Use DataSource.addData/DataSource.removeData','removeData() to add/remove
		 * rows from the DataSource, and the ResultSet will reflect the changes automatically.
		 * Alternatively, the DataSource.updateCaches method may be called to only update
		 * local caches of the DataSource in question, without generating any server traffic.
		 * 
		 * To create a locally modifiable cache of Records from a DataSource, you
		 * can use DataSource.fetchData to retrieve a List of Records which can
		 * be modified directly, or you can create a client-only DataSource from
		 * the retrieved data to share a modifiable cache between several
		 * DataBoundComponents.
		 * 
		 * Updates and Automatic Cache Synchronization
		 * 
		 * Once a ResultSet has retrieved data or has been initialized with data, the ResultSet will observe any
		 * successful "update", "add" or "remove" dsRequests against their DataSource, regardless of the
		 * component that initiated them. A ResultSet with a full cache for the current filter criteria will
		 * integrate updates into the cache automatically.
		 * 
		 * Updated rows that no longer match the current filter criteria will be removed
		 * automatically. To prevent this, you can set ResultSet.neverDropUpdatedRows.
		 * Added rows will similarly be added to the cache only if they match current filter criteria.
		 * 
		 * Note that the client-side filtering described above is also used to determine whether 
		 * updated or added rows should be in the cache. If any aspect of automated cache update is
		 * ever incorrect, ResultSet.dropCacheOnUpdate','dropCacheOnUpdate can be set for the
		 * ResultSet or DSResponse.invalidateCache can be set for an individual dsResponse.
		 * 
		 * If automatic cache synchronization isn't working, troubleshoot the problem using the steps
		 * suggested <a href='http://forums.smartclient.com/showthread.php?t=8159#aGrid' target='_blank'>in the FAQ</a>.
		 * 
		 * Regarding OperationBinding.operationId','operationIds and how they affect caching,
		 * take into account that cache sync is based on the fetch used - any add or update operation
		 * uses a fetch to retrieve updated data, and the operationId of that fetch can be set via
		 * OperationBinding.cacheSyncOperation','cacheSyncOperation.
		 * If the operationId of the cache is different from the operationId of the cache update data,
		 * it won't be used to update the cache, since the fields included and other aspects of the
		 * data are allowed to be different across different operationIds. This allows to maintain
		 * distinct caches on a per component basis, so when two components are using separate
		 * operationIds they are assumed to have distinct caches, because updates performed with
		 * one operationId will not affect the cache obtained via another operationId.
		 * Also, take into account that operationId must be unique per DataSource, across all
		 * operationTypes for that DataSource.
		 * 
		 * 
		 * Data Paging with partial cache
		 * 
		 * When in paging mode with a partial cache, a ResultSet relies on server side sorting, setting 
		 * DSRequest.sortBy to the current sort field and direction. In order for the cache to 
		 * remain coherent, row numbering must continue to agree between server and client as new
		 * fetches are issued, otherwise, duplicate rows or missing rows may occur. 
		 * 
		 * If concurrent modifications by other users are allowed, generally the server should set
		 * DSResponse.invalidateCache to clear the cache when concurrent modification is
		 * detected.
		 * 
		 * In paging mode with a partial cache, any successful "update" or "add" operation may cause
		 * client and server row numbering to become out of sync. This happens because the update
		 * may affect the sort order, and client and server cannot be guaranteed to match for sets of
		 * records that have equivalent values for the sort field.
		 * 
		 * For this reason, after an "add" or "update" operation with a partial cache, the ResultSet
		 * will automatically mark cache for invalidation the next time a fetch operation is performed.
		 * Alternatively, if ResultSet.updatePartialCache is set to false, the ResultSet will
		 * simply invalidate cache immediately in this circumstance.
		 */ 
		ResultSet: ResultSetStatic<ResultSet, ResultSetProps>;

		/** 
		 * ResultTree extends Tree
		 * ResultTrees are an implementation of the Tree API, used to handle hierarchical
		 * data, whose nodes are DataSource records which are retrieved from a server.
		 * 
		 * Modifying ResultTrees
		 * 
		 * ResultTree nodes cannot be directly added or removed from a
		 * ResultTree.fetchMode','paged ResultTree via Tree APIs such as
		 * Tree.add or Tree.remove, since such trees are considered to be read-only
		 * by virtue of containing ResultSets, which are read-only data structures. Even in
		 * other FetchModes, calling such APIs will only update the local cache of the
		 * ResultTree, rather than triggering any server traffict to update the DataSource.
		 * 
		 * Use DataSource.addData/DataSource.removeData','removeData() to add/remove
		 * rows from the DataSource, and the ResultTree will reflect the changes
		 * automatically. Alternatively, the DataSource.updateCaches method may be called to
		 * only update local caches of the DataSource in question, without generating any server
		 * traffic.
		 * 
		 * To create a locally modifiable cache of records from a DataSource, you can use
		 * DataSource.fetchData to retrieve a List of records which can be modified directly,
		 * or you can create a client-only DataSource from the retrieved data to share a
		 * modifiable cache between several DataBoundComponents.
		 */ 
		ResultTree: ResultTreeStatic<ResultTree, ResultTreeProps>;

		/** 
		 * RibbonBar extends ToolStrip
		 * A ToolStrip','ToolStrip-based class for showing 
		 * RibbonGroup','groups of related buttons and other controls.
		 */ 
		RibbonBar: RibbonBarStatic<RibbonBar, RibbonBarProps>;

		/** 
		 * RibbonGroup extends ToolStripGroup
		 * A widget that groups other controls for use in RibbonBar','RibbonBars.
		 */ 
		RibbonGroup: RibbonGroupStatic<RibbonGroup, RibbonGroupProps>;

		/** 
		 * RichTextCanvas extends Canvas
		 * Canvas to be used for Rich Text Editing
		 */ 
		RichTextCanvas: RichTextCanvasStatic<RichTextCanvas, RichTextCanvasProps>;

		/** 
		 * RichTextEditor extends VLayout
		 * RichTextEditing component. Provides a rich-text editing area along with UI for executing
		 * rich-text commands on selected content.
		 * 
		 * The HTML generated from this component may vary by browser, and, as with any HTML 
		 * value created on the client, we recommend values be sanitized on the server before 
		 * storing and displaying to other users.
		 */ 
		RichTextEditor: RichTextEditorStatic<RichTextEditor, RichTextEditorProps>;

		/** 
		 * RichTextItem extends CanvasItem
		 * FormItem for rich text (HTML) editing. Makes use of a RichTextEditor as the 
		 * editing interface.
		 */ 
		RichTextItem: RichTextItemStatic<RichTextItem, RichTextItemProps>;

		/** 
		 * RowSpacerItem extends SpacerItem
		 * Form item that renders as a blank row in the form layout.
		 * Set RowSpacerItem.startRow to false to create a rowSpacer that simply
		 * takes up every remaining column in the current row rather than starting a new row.
		 */ 
		RowSpacerItem: RowSpacerItemStatic<RowSpacerItem, RowSpacerItemProps>;

		/** 
		 * RPCManager extends Class
		 * RPCManager is a static singleton class that manages transparent client/server RPC (remote
		 * procedure call). This class provides a generic, low-level client/server communication
		 * integration point.
		 * 
		 * SmartClient's powerful databinding subsystem (see DataSource, 
		 * DataBoundComponent','DataBoundComponents) automatically make use of this class to issue
		 * RPCs as necessary, based on the 
		 * dataSourceOperations','DataSource protocol. To integrate DataBoundComponents
		 * with your server, clientServerIntegration','start here.
		 * 
		 * For arbitrary client/server interactions outside of the DataSource subsystem, the
		 * SmartClient server also provides the dmiOverview','Direct Method Invocation feature.
		 * 
		 * The RPCManager class can also be used directly to send data to a URL of your
		 * choosing and optionally be called back with server-returned data when the server replies.
		 * 
		 * The SmartClient iscServer','server code has APIs for processing RPC requests 
		 * providing features such as automatic Java &lt;--&gt; JavaScript object translation 
		 * and handling of queued requests.
		 * The servletDetails','IDACall servlet makes use of these features to handle standard
		 * DataSource requests and DMI calls. Developers can also override the
		 * actionURL of specific requests and use these APIs directly in a 
		 * JSP, Servlet or Filter.
		 * 
		 * Note: the client-side RPCManager class can also be used without the SmartClient server.
		 * For an overview of client/server interactions without the SmartClient server, see
		 * nonJavaBackend','this overview.
		 * 
		 * <u>Simple arbitrary Remote Procedure Call example (client code):</u>
		 * 
		 * 
		 * 
		 * var data = { here: "is some data", to: ["send to the server"]};
		 * isc.RPCManager.sendRequest({ data: data, callback: "myCallback(data)", actionURL: "/rpcHandler.jsp"});
		 * function myCallback(data) { alert("response from the server: " + data); }
		 * 
		 * 
		 * 
		 * 
		 * <u>Simple arbitrary Remote Procedure Call example (server code: /rpcHandler.jsp):</u>
		 * 
		 * RPCManager rpc = new RPCManager(request, response, out);
		 * Object data = rpc.getData();
		 * System.out.println("client sent: " + data.toString());
		 * rpc.send("here's a response");
		 * 
		 * 
		 * <u>Queuing</u>
		 * 
		 * Because of browser limitations on the total number of simultaneous HTTP connections to a given
		 * server, batching multiple RPC requests into a single HTTP request is highly advisable whenever
		 * possible. The RPCManager provides a queuing mechanism that allows this.
		 * 
		 * <u>Queuing example (client code):</u>
		 * 
		 * 
		 * var wasQueuing = isc.RPCManager.startQueue();
		 * isc.RPCManager.send("a string of data", "myCallback(data)", {actionURL: "/rpcHandler.jsp"});
		 * isc.RPCManager.sendRequest({ data: ["some", "more data", 2], callback: "myCallback(data)", actionURL: "/rpcHandler.jsp"});
		 * isc.RPCManager.sendRequest({ data: "different callback", callback: "myCallback2(data)", actionURL: "/rpcHandler.jsp"});
		 * if (!wasQueuing) isc.RPCManager.sendQueue();
		 * 
		 * function myCallback(data) { alert("response from the server: " + data); }
		 * function myCallback2(data) { alert("response from the server (other callback): " + data); }
		 * 
		 * 
		 * 
		 * 
		 * <u>Queuing example (server code: /rpcHandler.jsp):</u>
		 * 
		 * RPCManager rpc = new RPCManager(request, response, out);
		 * 
		 * for(Iterator i = rpc.getRequests().iterator(); i.hasNext();) {
		 * RPCRequest rpcRequest = (RPCRequest)i.next();
		 * Object data = rpcRequest.getData();
		 * System.out.println("client sent:" + data.toString());
		 * 
		 * //send back the data sent to us by the client
		 * rpc.send(rpcRequest, new RPCResponse(data));
		 * }
		 * 
		 * 
		 * <u>Error Handling</u>
		 * Please see this errorHandling','separate article on error handling.
		 * 
		 */ 
		RPCManager: RPCManagerStatic<RPCManager, RPCManagerProps>;

		/** 
		 * RPCResponse extends Class
		 * Encapsulates an RPC response from the server. Instances of this class are automatically created
		 * and optionally passed to you in the callback you specify as part of your RPCRequest.
		 */ 
		RPCResponse: RPCResponseStatic<RPCResponse, RPCResponseProps>;

		/** 
		 * SchemaSet extends Class
		 * A set of schema derived from the &lt;xsd:schema&gt; element in a WSDL or XML schema file
		 * loaded by XMLTools.loadWSDL or XMLTools.loadXMLSchema.
		 */ 
		SchemaSet: SchemaSetStatic<SchemaSet, SchemaSetProps>;

		/** 
		 * ScriptTask extends Task
		 * Task that executes arbitrary code, either synchronous or asynchronous. Override the
		 * ScriptTask.execute','execute() method to provide custom logic.
		 */ 
		ScriptTask: ScriptTaskStatic<ScriptTask, ScriptTaskProps>;

		/** 
		 * Scrollbar extends StretchImg
		 * The Scrollbar widget implements cross-platform, image-based scrollbars that control the
		 * scrolling of content in other widgets. Scrollbar widgets are created and displayed
		 * automatically for widgets that require them, based on settings for Canvas.overflow.
		 * 
		 * The scrollbar's appearance is based on a StretchImg for the "track", which consists
		 * of two fixed size buttons and a stretchable center segment, and the ScrollThumb,
		 * the draggable portion of the scrollbar, also a StretchImg, with an optional
		 * StretchImg.showGrip','grip.
		 */ 
		Scrollbar: ScrollbarStatic<Scrollbar, ScrollbarProps>;

		/** 
		 * ScrollThumb extends StretchImg
		 * Class used for the draggable "thumb" of a scrollbar. Do not use directly; this class is
		 * documented only for skinning purposes.
		 */ 
		ScrollThumb: ScrollThumbStatic<ScrollThumb, ScrollThumbProps>;

		/** 
		 * SearchForm extends DynamicForm
		 * A SearchForm is a DynamicForm specialized for a user to enter search criteria.
		 * 
		 * All DynamicForm properties and methods work on SearchForm. SearchForm extends and
		 * specializes DynamicForm for searching; for example, SearchForm sets
		 * hiliteRequiredFields false by default because fields are typically not 
		 * required in a search.
		 */ 
		SearchForm: SearchFormStatic<SearchForm, SearchFormProps>;

		/** 
		 * SectionHeader extends Label
		 * Simple SectionHeader class based on a Label with an icon, skinnable via CSS.
		 */ 
		SectionHeader: SectionHeaderStatic<SectionHeader, SectionHeaderProps>;

		/** 
		 * SectionItem extends CanvasItem
		 * Header item for a collapsible section in a DynamicForm. Each SectionItem
		 * is associated with a number of other items in the form, which will be shown or
		 * hidden as a group when the section is expanded or collapsed. Clicking on a
		 * SectionItem will expand or collapse the section.
		 * 
		 * To make a form where only one section is expanded at a time, set
		 * DynamicForm.sectionVisibilityMode to "mutex".
		 */ 
		SectionItem: SectionItemStatic<SectionItem, SectionItemProps>;

		/** 
		 * SectionStack extends VLayout
		 * A container that manages a list of sections of widgets, each with a header. Sometimes called
		 * an "Accordion".
		 * 
		 * SectionStack can be configured so that only one section is visible at a time (similar to MS Outlook's
		 * left-hand Nav), or to allow multiple sections to be visible and share the available space.
		 */ 
		SectionStack: SectionStackStatic<SectionStack, SectionStackProps>;

		/** 
		 * SectionStackEditProxy extends LayoutEditProxy
		 * EditProxy that handles SectionStack objects when editMode is enabled.
		 */ 
		SectionStackEditProxy: SectionStackEditProxyStatic<SectionStackEditProxy, SectionStackEditProxyProps>;

		/** 
		 * Selection extends Class
		 * Maintains a 'selected' subset of a List or Array of objects, such as records in a record
		 * set, or widgets in a selectable header.
		 * 
		 * Includes methods for selecting objects and checking which objects are selected, and also for
		 * selecting objects as a result of mouse events, including drag selection support.
		 * The selection object is used automatically to handle selection APIs on ListGrid
		 * and TreeGrid instances.
		 * 
		 * Note that selection and deselection are skipped for objects that aren't enabled, or that are
		 * marked as non-selectable. For a ListGrid, the relevant properties are 
		 * ListGrid.recordEnabledProperty and ListGrid.recordCanSelectProperty. The 
		 * recommended approach to affect disabled objects via the Selection APIs is to temporarily
		 * enable them beforehand.
		 */ 
		Selection: SelectionStatic<Selection, SelectionProps>;

		/** 
		 * SelectionTreeMenu extends Menu
		 * A simple subclass of Menu created by TreeMenuButton.
		 * Shows the selected node's path in a custom style.
		 * 
		 * Important Note: this class is not directly usable except for skinning and for
		 * subclassing when setting TreeMenuButton.treeMenuConstructor on a TreeMenuButton.
		 */ 
		SelectionTreeMenu: SelectionTreeMenuStatic<SelectionTreeMenu, SelectionTreeMenuProps>;

		/** 
		 * SelectItem extends FormItem
		 * FormItem that allows picking between several mutually exclusive options via a select list.
		 * 
		 * Options may be derived from a dataSource or a valueMap.
		 * 
		 * Note that to select the first option as a default value for the item,
		 * SelectItem.defaultToFirstOption may be set.
		 */ 
		SelectItem: SelectItemStatic<SelectItem, SelectItemProps>;

		/** 
		 * SelectItemEditProxy extends FormItemEditProxy
		 * EditProxy that handles SelectItem','SelectItems, ComboBoxItem','ComboBoxItems
		 * and RadioGroupItem','RadioGroupItems when editMode is enabled.
		 */ 
		SelectItemEditProxy: SelectItemEditProxyStatic<SelectItemEditProxy, SelectItemEditProxyProps>;

		/** 
		 * SelectOtherItem extends Class
		 * FormItem that shows a list of options, plus an "Other..." option that allows them to enter
		 * another value.
		 */ 
		SelectOtherItem: SelectOtherItemStatic<SelectOtherItem, SelectOtherItemProps>;

		/** 
		 * ServiceTask extends Task
		 * A ServiceTask is an element of a Process which calls a DataSource operation, 
		 * optionally using part of the Process.state','process state as inputs or storing outputs
		 * in the process state.
		 * 
		 * By default a ServiceTask takes the data indicated by Task.inputField and uses it as
		 * DSRequest.data. This means the input data becomes Criteria for a "fetch"
		 * operation, new record values for an "add" operation, etc.
		 * 
		 * Alternatively, you can set ServiceTask.criteria for a "fetch" operation, or
		 * ServiceTask.values for other operationTypes. In both cases, you have the ability to
		 * use simple expressions like $input.fieldName to take portions of the input data and
		 * use it as part of the criteria or values.
		 * 
		 * As a special case, if the inputField is an atomic value (just a String or
		 * Number rather than a Record) and operationType is "fetch", it will be assumed to be value
		 * for the primary key field of the target DataSource if ServiceTask.criteria','criteria
		 * is not explicitly specified
		 * 
		 * OutputData and outputFieldList work as filters. You should determine which properties should
		 * be fetched into the process state. If you want to load all data without defining every
		 * property manually you can pass a name started with '$' and fetched record or records will be 
		 * placed as a record or an array of records by the name without this specific symbol.
		 * 
		 * For example if you specify 'id' and 'name' in outputFieldList, only these properties will be
		 * fetched in the process state. If you pass '$record' in outputField a whole record will be 
		 * stored in process state under the 'record' key. Also you can use javascript syntax there.
		 * For example '$record.item[0]'.
		 */ 
		ServiceTask: ServiceTaskStatic<ServiceTask, ServiceTaskProps>;

		/** 
		 * SimpleTabButton extends Button
		 * Simple subclass of Button used for tabs in a TabSet if TabSet.useSimpleTabs
		 * is true. See also TabSet.simpleTabButtonConstructor.
		 */ 
		SimpleTabButton: SimpleTabButtonStatic<SimpleTabButton, SimpleTabButtonProps>;

		/** 
		 * SimpleTile extends StatefulCanvas
		 * Default class used by a TileGrid to render each tile. See TileGrid.tile.
		 * 
		 * SimpleTiles should not be created directly, instead, use a TileGrid and provide data and
		 * SimpleTile instances are created for you.
		 */ 
		SimpleTile: SimpleTileStatic<SimpleTile, SimpleTileProps>;

		/** 
		 * SimpleType extends Class
		 * An atomic type such as a string or number, that is generally stored, displayed and
		 * manipulated as a single value.
		 * 
		 * SimpleTypes can be created at any time, and subsequently referred to as a 
		 * DataSourceField.type','field type in DataSource','DataSources and
		 * DataBoundComponent','DataBoundComponents. This allows you to define
		 * SimpleType.validators','validation, SimpleType.normalDisplayFormatter','formatting
		 * and SimpleType.editorType','editing behaviors for a type to be reused across all
		 * DataBoundComponent','DataBoundComponents.
		 * 
		 * The SimpleType class also allows data to be stored in some opaque format but treated as
		 * simple atomic values as far as SmartClient components are concerned by implementing
		 * SimpleType.getAtomicValue and SimpleType.updateAtomicValue methods.
		 * For example, if some record has a field value set to a javascript object with the
		 * following properties:
		 * 
		 * { stringValue:"A String", length: 9 }
		 * 
		 * this value could be treated as a simple string by defining a SimpleType with 
		 * SimpleType.inheritsFrom set to "text" and a custom 
		 * getAtomicValue() method that simply extracted the "stringValue"
		 * attribute from the data object. DataBoundComponents would then display
		 * the string value, and use it for sorting and other standard databinding features.
		 * 
		 * Note that the term "simpleType" is used in the same sense as in
		 * <a href='XML Schema' target='_blank'>http://www.w3.org/TR/xmlschema-0/</a>, and
		 * XMLTools.loadXMLSchema will create new SimpleType definitions.
		 * 
		 * When using the SmartClient Server, SimpleTypes can be defined server-side, and should
		 * be defined server-side if validators are going to be declared so that the server will
		 * enforce validation. To define server-side SimpleTypes using Component XML you should create
		 * file {typeName}.type.xml in the following format:
		 * 
		 * &lt;SimpleType name="{typeName}" inheritsFrom="{otherSimpleType}" 
		 * editorType="{FormItemClassName}"&gt;
		 * &lt;validators&gt;
		 * &lt;!-- validator definition just like DataSourceField --&gt;
		 * &lt;/validators&gt;
		 * &lt;/SimpleType&gt;
		 * 
		 * .. and place this file alongside your DataSource files (.ds.xml) files - in any of folders
		 * listed in project.datasources property in server_properties','server.properties.
		 * 
		 * SimpleTypes can be loaded via DataSourceLoader or loadDSTag','loadDS JSP tags and
		 * should be loaded before the definitions of any DataSources that use them (so
		 * generally put all SimpleType definitions first).
		 * 
		 * Define validators in the server-side type definition, for example:
		 * 
		 * &lt;SimpleType name="countryCodeType" inheritsFrom="text"&gt;
		 * &lt;validators&gt;
		 * &lt;validator type="lengthRange" min="2" max="2"
		 * errorMessage="Length of country code should be equal to 2." /&gt;
		 * &lt;validator type="regexp" expression="[A-Z][A-Z]"
		 * errorMessage="CountryCode should have only uppercase letters." /&gt;
		 * &lt;/validators&gt;
		 * &lt;/SimpleType&gt;
		 * 
		 * 
		 * For client-side formatters, add these to the type definition after loading it from the
		 * server, for example:
		 * 
		 * 
		 * isc.SimpleType.getType("independenceDateType").addProperties({
		 * normalDisplayFormatter : function (value) {
		 * if (value == null) return "";
		 * return "&lt;i&gt;" + (value.getYear() + 1900) + "&lt;/i&gt;";
		 * }
		 * });
		 * 
		 * 
		 * 
		 * Note that formatters must be added to the SimpleType definition before any
		 * DataBoundComponent binds to a DataSource that uses the SimpleType.
		 * 
		 * An example is formsCustomSimpleType', 'here.
		 * 
		 */ 
		SimpleType: SimpleTypeStatic<SimpleType, SimpleTypeProps>;

		/** 
		 * Slider extends Canvas
		 * The Slider class implements a GUI slider widget allowing the user to select a numeric 
		 * value from within a range by dragging a visual indicator up and down a track.
		 * 
		 * The slider will generate events as the user interacts with it and changes its value.
		 * If slider.sliderTarget is specified, moving the slider thumb generates a custom
		 * event named 'sliderMove', sent to the sliderTarget.
		 * If a sliderMove handler stringMethod is defined on the target, it will be 
		 * fired when the slider is moved. The second parameter (available via the variable name
		 * eventInfo if the handler is a string) is a pointer back to the slider.
		 * 
		 * The slider will also fire a valueChanged() method whenever its value is 
		 * changed. This can be observed or overridden on the Slider instance to perform some action.
		 */ 
		Slider: SliderStatic<Slider, SliderProps>;

		/** 
		 * SliderItem extends CanvasItem
		 * FormItem that uses a Slider component to present an interface for picking
		 * from either a continuous range or a range with a small number of discrete values.
		 */ 
		SliderItem: SliderItemStatic<SliderItem, SliderItemProps>;

		/** 
		 * Snapbar extends Splitbar
		 * Subclass of the Splitbar class that uses the grip functionality
		 * to show a stateful open / close indicator.
		 */ 
		Snapbar: SnapbarStatic<Snapbar, SnapbarProps>;

		/** 
		 * Sound extends BaseWidget
		 * SmartClient class for loading and playing audio files using the HTML5 &lt;AUDIO&gt; 
		 * element.
		 */ 
		Sound: SoundStatic<Sound, SoundProps>;

		/** 
		 * SpacerItem extends FormItem
		 * A SpacerItem takes up a single cell in the FormLayout, of arbitrary size.
		 */ 
		SpacerItem: SpacerItemStatic<SpacerItem, SpacerItemProps>;

		/** 
		 * SpinnerItem extends TextItem
		 * Item for picking a number. Includes arrow buttons to increase / decrease the value
		 */ 
		SpinnerItem: SpinnerItemStatic<SpinnerItem, SpinnerItemProps>;

		/** 
		 * Splitbar extends StretchImg
		 * Resize bar for use in Layout.resizeBarClass','Layouts, based on the
		 * StretchImg class. As with the ImgSplitbar class, 
		 * widgets of this class can be displayed as a resize-bar for widgets 
		 * in Layouts where showResizeBar is set to true. Provides a different appearance from
		 * the ImgSplitbar class.
		 * 
		 * To specify the resizeBar class for some layout, use the Layout.resizeBarClass
		 * property.
		 */ 
		Splitbar: SplitbarStatic<Splitbar, SplitbarProps>;

		/** 
		 * SplitPane extends Layout
		 * A device- and orientation-sensitive layout that implements the common pattern of rendering
		 * two panes side-by-side on desktop machines and on tablets in landscape orientation,
		 * while switching to showing a single pane for handset-sized devices or tablets in portrait
		 * orientation (this type of behavior is sometimes called "responsive design").
		 * 
		 * A SplitPane can manage either two or three panes &mdash; a
		 * SplitPane.navigationPane','navigationPane and the
		 * SplitPane.detailPane','detailPane are required, and a
		 * SplitPane.listPane','listPane can also be provided which appears in the same place as
		 * the navigation pane, with built-in navigation between the panes based on
		 * NavigationBar. An example of 3-pane usage would be an email application:
		 * 
		 * navigationPane: TreeGrid of folders
		 * listPane: ListGrid showing messages in a folder
		 * detailPane: message detail view (perhaps a DetailViewer over an
		 * HTMLFlow or similar arrangement)
		 * 
		 * 
		 * The placement of the panes is by default sensitive to whether the device is detected as a
		 * handset (phone), tablet or desktop device (see DeviceMode) and to the current
		 * PageOrientation. You can also configure a SplitPane with a fixed
		 * SplitPane.pageOrientation or SplitPane.deviceMode.
		 * 
		 * Beyond providing the panes listed above, typical usage is simply to call
		 * SplitPane.showListPane','showListPane() and SplitPane.showDetailPane','showDetailPane() when the
		 * SplitPane should navigate to a new pane. For example, in an email application,
		 * clicking on a folder in the navigationPane should cause the
		 * listPane to show messages from the folder, then
		 * showListPane(<em>"folder name"</em>) would be called to show the
		 * listPane and give it a new title reflecting the name of the folder.
		 * 
		 * Similarly, clicking on a message in the listPane should show the message
		 * details in the detailPane and call
		 * showDetailPane(<em>"message title"</em>) to reveal the detailPane
		 * and give it an appropriate title.
		 * 
		 * <h3>Automatic control placement</h3>
		 * 
		 * SplitPane.detailToolButtons allows you to define a set of controls that are specially
		 * placed based on the deviceMode and pageOrientation. See
		 * SplitPane.detailToolButtons for details.
		 * 
		 * <h3>NavigationBar and ToolStrips</h3>
		 * 
		 * By default, bars are created as follows:
		 * 
		 * in deviceMode:"tablet" and deviceMode "handset", the
		 * SplitPane.navigationBar is always created.
		 * in deviceMode:"desktop", the navigationBar is created by
		 * default only if the SplitPane.navigationTitle is specified and non-empty or
		 * SplitPane.showRightButton and/or SplitPane.showLeftButton is true,
		 * or SplitPane.showNavigationBar is true.
		 * in deviceMode:"desktop" and deviceMode "tablet", the
		 * SplitPane.detailToolStrip is shown <em>above</em> the detailPane.
		 * in deviceMode:"handset", the SplitPane.detailToolStrip is created
		 * <strong>only</strong> if detailToolButtons are specified, and is placed
		 * <em>underneath</em> the detailPane.
		 * SplitPane.listToolStrip - separate bar for the listPane, only present
		 * for deviceMode:"desktop" when a listPane is provided.
		 * 
		 * All of these bars are autoChildUsage','AutoChildren and hence completely
		 * optional. You can omit them entirely, or, if you want navigation bars or tool strips but
		 * want to customize them more than the AutoChild system allows, you can prevent the built-in
		 * bars from being created and place your own NavigationBars either <em>inside</em> your
		 * navigation, list or detail panes, or <em>outside</em> the SplitPane as a whole.
		 * This allows you to completely customize your navigation but still use SplitPane
		 * to handle device- and orientation-aware layout. See SplitPane.showNavigationBar,
		 * SplitPane.showListToolStrip, and SplitPane.showDetailToolStrip.
		 * 
		 * Note that in addition to the SplitPane.navigationBar','navigationBar, the other automatically
		 * created bars are also instances of NavigationBar despite the "toolStrip" naming convention.
		 * These controls will not generally contain navigation elements; the NavigationBar
		 * class is used for consistent styling, since the navigationBar appears adjacent
		 * to the toolstrips in some modes and orientations, so they should have the same height and
		 * styling.
		 */ 
		SplitPane: SplitPaneStatic<SplitPane, SplitPaneProps>;

		/** 
		 * SplitPaneEditProxy extends LayoutEditProxy
		 * EditProxy that handles SplitPane objects when editMode is enabled.
		 */ 
		SplitPaneEditProxy: SplitPaneEditProxyStatic<SplitPaneEditProxy, SplitPaneEditProxyProps>;

		/** 
		 * StatefulCanvas extends Canvas
		 * A component that has a set of possible states, and which presents itself differently according to
		 * which state it is in. An example is a button, which can be "up", "down", "over" or "disabled".
		 */ 
		StatefulCanvas: StatefulCanvasStatic<StatefulCanvas, StatefulCanvasProps>;

		/** 
		 * StatefulCanvasEditProxy extends CanvasEditProxy
		 * EditProxy that handles StatefulCanvas objects when editMode is enabled.
		 */ 
		StatefulCanvasEditProxy: StatefulCanvasEditProxyStatic<StatefulCanvasEditProxy, StatefulCanvasEditProxyProps>;

		/** 
		 * StateTask extends Task
		 * StateTask can either copy fields of Process.state to other fields, or apply hardcoded
		 * values to Process.state via StateTask.value.
		 */ 
		StateTask: StateTaskStatic<StateTask, StateTaskProps>;

		/** 
		 * StaticTextItem extends FormItem
		 * A FormItem that displays an uneditable value.
		 */ 
		StaticTextItem: StaticTextItemStatic<StaticTextItem, StaticTextItemProps>;

		/** 
		 * StretchImg extends StatefulCanvas
		 * The StretchImg widget class implements a widget type that displays a list of multiple images
		 * that make up a single image.
		 */ 
		StretchImg: StretchImgStatic<StretchImg, StretchImgProps>;

		/** 
		 * StretchImgButton extends StretchImg
		 * A StretchImg that behaves like a button, going through up/down/over state transitions in response
		 * to user events. Supports an optional title, and will auto-size to accommodate the title text if
		 * overflow is set to "visible".
		 * 
		 * Examples of use include fancy buttons, poplist headers, and tabs.
		 */ 
		StretchImgButton: StretchImgButtonStatic<StretchImgButton, StretchImgButtonProps>;

		/** 
		 * SubmitItem extends ButtonItem
		 * Button that saves the data in the form, by calling DynamicForm.submit when clicked.
		 * DynamicForm.submit for details on how to control what happens when a form is
		 * submitted.
		 */ 
		SubmitItem: SubmitItemStatic<SubmitItem, SubmitItemProps>;

		/** 
		 * SummaryBuilder extends FormulaBuilder
		 * Shows an interface allowing a user to create or edit fields by typing simple
		 * format-strings into a text field. The format-strings can include the values of other fields
		 * and additional text as required.
		 * 
		 * Available values for the format-string are determined by the DataSource fields, and are given
		 * simple single-letter aliases (such as "A", "B", ...) similar to column names in Excel.
		 * The set of available values is shown in the FormulaBuilder.fieldKey as a simple
		 * mapping between the DataSourceField.title','field title and it's short name.
		 * 
		 * To include a field in the format-string, prefix it with a hash sign (#).
		 */ 
		SummaryBuilder: SummaryBuilderStatic<SummaryBuilder, SummaryBuilderProps>;

		/** 
		 * SVG extends BrowserPlugin
		 * ISC Abstraction for SVG controls
		 */ 
		SVG: SVGStatic<SVG, SVGProps>;

		/** 
		 * SyntaxHiliter extends Class
		 * Abstract base class for regular expression-based source code colorizer.
		 * 
		 * An instance of this class is never instantiated. Instead, use one of the source-specific
		 * subclasses: XMLSyntaxHiliter or JSSyntaxHiliter. 
		 * 
		 * NOTE: This class exists only for use with the SmartClient Feature Explorer and 
		 * SmartGWT Showcases and cannot be used in any other environment.
		 */ 
		SyntaxHiliter: SyntaxHiliterStatic<SyntaxHiliter, SyntaxHiliterProps>;

		/** 
		 * TabBar extends Toolbar
		 * Shows a set of Tabs. TabBars are automatically created by TabSets and shouldn't be used
		 * directly. The TabBar is documented for skinning purposes.
		 */ 
		TabBar: TabBarStatic<TabBar, TabBarProps>;

		/** 
		 * TabIndexManager extends Class
		 * Singleton class with static APIs for managing automatically assigned tab order for
		 * SmartClient components and other focusable elements.
		 * 
		 * The TabIndexManager separates the logic required to maintain a sensible tab-order for
		 * a page's components from the logic to handle allocation of actual tab index values.
		 * It is common to have non-focusable components with an implied position in the page's
		 * tab order - for example Layouts containing focusable buttons, or DynamicForms containing
		 * focusable items, and this class handles maintaining relative tab order within such
		 * groups, and supplying explicit TabIndex values for the items which actually need them.
		 * 
		 * Entries are registered with the TabIndexManager via the TabIndexManager.addTarget 
		 * API. A 
		 * numeric tab index for each entry will be lazily generated when requested via 
		 * TabIndexManager.getTabIndex. The class provides APIs to modify the position of entries 
		 * in the tab tree. When a target is registered, a couple of custom callback functions
		 * can be provided. The first is a notification method for the tab index being updated
		 * (due to, for example, a parent being repositioned and all its children having new
		 * tab indices assigned), and can be used to take an appropriate action such as updating
		 * the tab index of an element in the DOM. The second callback will be fired when a
		 * call to the special TabIndexManager.focusInTarget or 
		 * TabIndexManager.shiftFocus API requests focus be passed to an entry. This
		 * allows a developer to take an appropriate action (such as programmatically focussing
		 * in some DOM element).
		 * 
		 * See the tabOrderOverview','tab order overview topic for more information on
		 * tab order management for components in SmartClient.
		 */ 
		TabIndexManager: TabIndexManagerStatic<TabIndexManager, TabIndexManagerProps>;

		/** 
		 * TableView extends ListGrid
		 * Shows a listing of records with one or more fields from each record, with
		 * built-in support for navigation and editing of lists of records.
		 * <p/>
		 * The TableView provides built-in controls such as TableView.showNavigation','navigation arrows and
		 * shows fields from the provided records in one of several built-in RecordLayouts.
		 * <p/>
		 * NOTE: This widget is intended primarily for creating handset/phone-sized interfaces
		 * and does not have an appearance in any skin other than Mobile.
		 */ 
		TableView: TableViewStatic<TableView, TableViewProps>;

		/** 
		 * TabSet extends Canvas
		 * The TabSet class allows components on several panes to share the same space. The tabs at 
		 * the top can be selected by the user to show each pane. 
		 * 
		 * Tabs are configured via the tabs property, each of which has a
		 * pane property which will be displayed in the main pane when that tab is
		 * selected.
		 */ 
		TabSet: TabSetStatic<TabSet, TabSetProps>;

		/** 
		 * TabSetEditProxy extends CanvasEditProxy
		 * EditProxy that handles TabSet objects when editMode is enabled.
		 */ 
		TabSetEditProxy: TabSetEditProxyStatic<TabSetEditProxy, TabSetEditProxyProps>;

		/** 
		 * Task extends ProcessElement
		 * A Task is an abstract superclass for Process and for all Task types that can be
		 * involved in a Process, such as a ServiceTask.
		 */ 
		Task: TaskStatic<Task, TaskProps>;

		/** 
		 * TextAreaItem extends FormItem
		 * Class for editable multi-line text areas (uses HTML &lt;TEXTAREA&gt; object)
		 */ 
		TextAreaItem: TextAreaItemStatic<TextAreaItem, TextAreaItemProps>;

		/** 
		 * TextAreaItemEditProxy extends TextItemEditProxy
		 * EditProxy that handles TextAreaItem','TextAreaItems when editMode is enabled.
		 */ 
		TextAreaItemEditProxy: TextAreaItemEditProxyStatic<TextAreaItemEditProxy, TextAreaItemEditProxyProps>;

		/** 
		 * TextExportSettings extends TextSettings
		 * Settings for use with DataSource.recordsAsText.
		 */ 
		TextExportSettings: TextExportSettingsStatic<TextExportSettings, TextExportSettingsProps>;

		/** 
		 * TextImportSettings extends TextSettings
		 * Settings for use with DataSource.recordsFromText.
		 */ 
		TextImportSettings: TextImportSettingsStatic<TextImportSettings, TextImportSettingsProps>;

		/** 
		 * TextItem extends FormItem
		 * FormItem for managing a text field.
		 */ 
		TextItem: TextItemStatic<TextItem, TextItemProps>;

		/** 
		 * TextItemEditProxy extends FormItemEditProxy
		 * EditProxy that handles TextItem','TextItems, StaticTextItem','StaticTextItems
		 * and BlurbItem','BlurbItems when editMode is enabled.
		 */ 
		TextItemEditProxy: TextItemEditProxyStatic<TextItemEditProxy, TextItemEditProxyProps>;

		/** 
		 * TextSettings extends Class
		 * Common base class of TextImportSettings.
		 */ 
		TextSettings: TextSettingsStatic<TextSettings, TextSettingsProps>;

		/** 
		 * TileGrid extends TileLayout
		 * A TileGrid is a DataBoundComponent that displays a list of objects as a set
		 * of "tiles", where each tile represents one object, and the tiles are laid out in a grid with
		 * multiple tiles per row. Each tile displays one or more properties of the object it
		 * represents.
		 */ 
		TileGrid: TileGridStatic<TileGrid, TileGridProps>;

		/** 
		 * TileLayout extends Canvas
		 * Lays out a series of components, calls "tiles", in a grid with multiple tiles per row.
		 */ 
		TileLayout: TileLayoutStatic<TileLayout, TileLayoutProps>;

		/** 
		 * TilePalette extends TileGrid
		 * A TileGrid that implements the Palette behavior, so it can be used as the source for 
		 * drag and drop instantiation of components when combined with an EditContext as 
		 * the drop target.
		 * 
		 * Each TileGrid.tile can be a PaletteNode.
		 */ 
		TilePalette: TilePaletteStatic<TilePalette, TilePaletteProps>;

		/** 
		 * Time extends Class
		 * Helper methods and system-wide defaults for dealing with time values and time display formats.
		 * 
		 * This class includes utility methods for the creation and display of logical time values, as well
		 * as modifying the default display timezone for datetime type values. See
		 * dateFormatAndStorage for more information on working with dates, times and datetimes
		 * in SmartClient.
		 */ 
		Time: TimeStatic<Time, TimeProps>;

		/** 
		 * TimeItem extends FormItem
		 * FormItem for editing times in a text field or via a set of selector components. 
		 * 
		 * The display format for this field may be set by TimeItem.timeFormatter. Defaults
		 * are picked up from TimeItem.timeFormatter24Hour and TimeItem.timeFormatter12Hour.
		 * See also Time.setNormalDisplayFormat for system-wide settings.
		 * 
		 * TimeItem automatically accepts both 12 and 24 hour time as well as partial times and a
		 * variety of possible time value separators. Examples:
		 * 
		 * 11:34:45 AM => 11:34:45
		 * 1:3:5 AM => 01:30:50
		 * 1:3p => 13:30:00
		 * 11 34 am => 11:34:00
		 * 11-34 => 11:34:00
		 * 113445 => 11:34:45
		 * 13445 => 01:34:45
		 * 1134 => 11:34:00
		 * 134 => 01:34:00
		 * 
		 * 
		 * Values entered by the user are stored as JavaScript Date objects in local time. 
		 * The day, month and year values of this Date object are not relevant and should 
		 * be ignored.
		 * 
		 * By default, when used in a SearchForm or as a field in a ListGrid's 
		 * ListGrid.showFilterEditor','filter editor, TimeItems will automatically generate 
		 * AdvancedCriteria - for example, entering "11:00" into the item will generate a 
		 * OperatorId','betweenInclusive Criterion that selects all times between 
		 * 11:00:00 and 11:59:59. If the form is databound and the DataSource is marked as being
		 * DataSource.allowAdvancedCriteria','allowAdvancedCriteria:false, the criteria generated
		 * will be simple, checking for data with logical time values equal to the displayed value.
		 */ 
		TimeItem: TimeItemStatic<TimeItem, TimeItemProps>;

		/** 
		 * Timeline extends Calendar
		 * Timeline is a trivial subclass of Calendar that configures the Calendar with settings
		 * typical for a standalone timeline view: hides the Calendar.dayView','day, 
		 * Calendar.weekView','week and Calendar.monthView','month tabs and the 
		 * Calendar.controlsBar','controls bar by default.
		 * 
		 * Note that the loadingOptionalModules','Calendar module must be loaded to make 
		 * use of the Timeline class.
		 */ 
		Timeline: TimelineStatic<Timeline, TimelineProps>;

		/** 
		 * Timer extends Class
		 * The Timer class provides a predictable cross-browser system for creating
		 * timed events.
		 */ 
		Timer: TimerStatic<Timer, TimerProps>;

		/** 
		 * Toolbar extends Layout
		 * A Toolbar creates a vertical or horizontal strip of similar components (typically Buttons)
		 * and provides managed resizing and reordering behavior over those components.
		 * 
		 * If you are creating a bar with a mixture of different elements (eg some MenuButtons, some
		 * Labels, some Buttons, some custom components), you want to use a ToolStrip. A
		 * Toolbar is better suited for managing a set of highly similar, interchangeable components,
		 * such as ListGrid headers.
		 */ 
		Toolbar: ToolbarStatic<Toolbar, ToolbarProps>;

		/** 
		 * ToolbarItem extends CanvasItem
		 * Set of horizontally arranged buttons.
		 */ 
		ToolbarItem: ToolbarItemStatic<ToolbarItem, ToolbarItemProps>;

		/** 
		 * ToolStrip extends Layout
		 * Base class for creating toolstrips like those found in browsers and office applications: a
		 * mixed set of controls including ImgButton','icon buttons, 
		 * Button.radioGroup','radio button groups, MenuButton','menus,
		 * ComboBoxItem','comboBoxes, LayoutSpacer','spacers, Label','status displays and 
		 * SelectItem','drop-down selects. 
		 * 
		 * All of the above components are placed in the ToolStrip.members','members array to form
		 * a ToolStrip. Note that the FormItem','FormItems mentioned above (ComboBox and
		 * drop-down selects) need to be placed within a DynamicForm as usual.
		 * 
		 * 
		 * The following strings can be used to add special behaviors:
		 * 
		 * the String "separator" will cause a separator to be created (instance of 
		 * ToolStrip.separatorClass)
		 * the String "resizer" will cause a resizer to be created (instance of
		 * ToolStrip.resizeBarClass). This is equivalent to setting
		 * Canvas.showResizeBar','showResizeBar:true on the preceding member.
		 * the String "starSpacer" will cause a spacer to be created (instance of
		 * LayoutSpacer).
		 * 
		 * 
		 * 
		 */ 
		ToolStrip: ToolStripStatic<ToolStrip, ToolStripProps>;

		/** 
		 * ToolStripButton extends Button
		 * Simple subclass of Button with appearance appropriate for a ToolStrip button.
		 * Can be used to create an icon-only button, and icon with text, or a text only button by setting the 
		 * icon and title attributes as required.
		 */ 
		ToolStripButton: ToolStripButtonStatic<ToolStripButton, ToolStripButtonProps>;

		/** 
		 * ToolStripGroup extends VLayout
		 * A widget that groups other controls for use in ToolStrip','tool-strips.
		 */ 
		ToolStripGroup: ToolStripGroupStatic<ToolStripGroup, ToolStripGroupProps>;

		/** 
		 * ToolStripMenuButton extends MenuButton
		 * Simple subclass of MenuButton with appearance appropriate for a ToolStrip menu button.
		 * Can be used to create an icon-only menu button, and icon with text, or a text only button by setting the 
		 * icon and title attibutes as required.
		 */ 
		ToolStripMenuButton: ToolStripMenuButtonStatic<ToolStripMenuButton, ToolStripMenuButtonProps>;

		/** 
		 * ToolStripResizer extends ImgSplitbar
		 * Simple subclass of ImgSplitbar with appearance appropriate for a ToolStrip resizer.
		 */ 
		ToolStripResizer: ToolStripResizerStatic<ToolStripResizer, ToolStripResizerProps>;

		/** 
		 * ToolStripSeparator extends Img
		 * Simple subclass of Img with appearance appropriate for a ToolStrip separator
		 */ 
		ToolStripSeparator: ToolStripSeparatorStatic<ToolStripSeparator, ToolStripSeparatorProps>;

		/** 
		 * ToolStripSeparatorEditProxy extends Class
		 * EditProxy that handles ToolStripSeparator objects when editMode is enabled.
		 */ 
		ToolStripSeparatorEditProxy: ToolStripSeparatorEditProxyStatic<ToolStripSeparatorEditProxy, ToolStripSeparatorEditProxyProps>;

		/** 
		 * ToolStripSpacer extends LayoutSpacer
		 * Simple subclass of LayoutSpacer with appearance appropriate for a ToolStrip spacer
		 */ 
		ToolStripSpacer: ToolStripSpacerStatic<ToolStripSpacer, ToolStripSpacerProps>;

		/** 
		 * Tree extends Class
		 * A Tree is a data model representing a set of objects linked into a hierarchy.
		 * 
		 * A Tree has no visual presentation, it is displayed by a TreeGrid or ColumnTree
		 * when supplied as TreeGrid.data or ColumnTree.data.
		 * 
		 * A Tree can be constructed out of a List of objects interlinked by IDs or via explicitly
		 * specified Arrays of child objects. See Tree.modelType for an explanation of how
		 * to pass data to a Tree.
		 * 
		 * Typical usage is to call TreeGrid.fetchData to cause automatic creation of a 
		 * ResultTree, which is a type of Tree that automatically handles loading data on 
		 * demand. For information on DataBinding Trees, see treeDataBinding.
		 */ 
		Tree: TreeStatic<Tree, TreeProps>;

		/** 
		 * TreeGrid extends ListGrid
		 * The SmartClient system supports hierarchical data (also referred to as tree data
		 * due to its "branching" organization) with:
		 * 
		 * the Tree class, which manipulates hierarchical data sets
		 * the TreeGrid widget class, which extends the ListGrid class to visually
		 * present tree data in an expandable/collapsible format.
		 * 
		 * For information on DataBinding Trees, see treeDataBinding.
		 * 
		 * A TreeGrid works just like a ListGrid, except one column (specified by
		 * TreeGridField.treeField) shows a hierarchical Tree. A TreeGrid is not limited
		 * to displaying just the Tree column - you can define additional columns (via
		 * TreeGrid.fields) which will render just like the columns of a ListGrid, and
		 * support all of the functionality of ListGrid columns, such as
		 * ListGridField.formatCellValue','formatters.
		 * 
		 * Except where explicitly overridden, ListGrid methods, callbacks, and properties
		 * apply to TreeGrids as well. The ListGrid defines some methods as taking/returning
		 * ListGridField and ListGridRecord. When using those methods in a TreeGrid,
		 * those types will be TreeGridField and TreeNode, respectively.
		 */ 
		TreeGrid: TreeGridStatic<TreeGrid, TreeGridProps>;

		/** 
		 * TreeMenuButton extends MenuButton
		 * Button used to display a hierarchical Menu group for representing / selecting tree data.
		 * 
		 * Important Note: this class should not be used directly - it is exposed purely for
		 * i18nMessages','i18n reasons.
		 */ 
		TreeMenuButton: TreeMenuButtonStatic<TreeMenuButton, TreeMenuButtonProps>;

		/** 
		 * TreePalette extends TreeGrid
		 * A TreeGrid that implements the Palette behavior, so it can be used as the source for 
		 * drag and drop instantiation of components when combined with an EditContext as 
		 * the drop target.
		 * 
		 * Each TreeNode within TreeGrid.data can be a PaletteNode.
		 */ 
		TreePalette: TreePaletteStatic<TreePalette, TreePaletteProps>;

		/** 
		 * UploadItem extends TextItem
		 * FormItem that creates an HTML &lt;input type="file"&gt; control, with an interface that
		 * allows a user to pick a file from his machine to upload to the server.
		 * 
		 * NOTE: use FileItem, not UploadItem, if you are using the SmartClient
		 * Server framework. FileItem is much easier to use and addresses all the limitations of
		 * UploadItem discussed below. See the upload','Uploading Files overview for
		 * details.
		 * 
		 * If a form containing an UploadItem is Canvas.redraw','redrawn (which may
		 * happen if other form items are shown or hidden, the form is
		 * Canvas.redrawOnResize','resized, or this or other items show validation errors) then 
		 * the value in the upload item is lost (because an HTML upload field may not be created with a
		 * value). For this reason, if you are building a form that combines an UploadItem with other
		 * FormItems that could trigger redraw()s, recommended practice is to place each UploadItem in
		 * a distinct DynamicForm instance and create the visual appearance of a single logical form 
		 * via combining the DynamicForms in a Layout. For the same reason, do not apply 
		 * Validator','validators to UploadItems: if such a validator fails, it will 
		 * cause the form to be redrawn and the UploadItem's value to be lost.
		 * 
		 * NOTE: Browser-specific behaviors: 
		 * 
		 * while getDisplayValue() can be used to retrieve the filesystem path of the uploaded file on some
		 * browsers, different browsers will return either just the file name without path or the full path. It
		 * is plausible that some browsers may switch behavior in the future to not supply this value at all. Do
		 * not rely on this value.
		 * the appearance of the UploadItem is not consistent across browsers and we do not
		 * recommend trying to make it consistent or trying to apply styling to the upload control at all. It is
		 * a potential security problem if an end user is unable to reliably recognize the upload control, hence,
		 * all browsers limit what styling can be applied. Various hacks exists to get further control of
		 * styling, but it is likely these hacks will be broken by browser upgrades in the future.
		 * 
		 */ 
		UploadItem: UploadItemStatic<UploadItem, UploadItemProps>;

		/** 
		 * UserTask extends Task
		 * A task that involves showing a user interface to the end user allowing the user to view and
		 * input data and press a button (or do some other UI gesture) to complete the task.
		 * 
		 * A UserTask takes the following steps:
		 * 
		 * Optionally show() or otherwise make visible the UserTask.targetView','targetView
		 * Provide values to either a DynamicForm designated as the UserTask.targetForm','targetForm or to
		 * a ValuesManager designated as the UserTask.targetVM','targetVM, via ValuesManager.setValues','setValues()
		 * Waits for notification of completion or cancellation. The UserTask is notified of
		 * completion if a SubmitItem is pressed in either the targetForm or
		 * any form that is a member of the targetVM. Likewise a CancelItem
		 * triggers cancellation. Direct calls to DynamicForm.cancelEditing or
		 * DynamicForm.completeEditing achieve the same result.
		 * if cancellation occurs, the process continues to the UserTask.cancelElement','cancelElement
		 * if completion occurs, values are retrieved from the form or valuesManager and applied
		 * to the process state
		 * 
		 */ 
		UserTask: UserTaskStatic<UserTask, UserTaskProps>;

		/** 
		 * Validator extends Class
		 * A validator describes a check that should be performed on a value the user is trying to
		 * save.
		 * 
		 * Validators are specified for DataSource fields via the DataSourceField.validators
		 * property. Validators that need not be run on the server can also be specified for a
		 * specific FormItem or ListGridField.
		 * 
		 * SmartClient supports a powerful library of ValidatorType','ValidatorTypes which
		 * have identical behavior on both the client and the server. 
		 * 
		 * Beyond this, custom validators can be defined on the client and custom validation logic
		 * added on the server. Note that the regexp and mask validator
		 * types are very flexible and can be used to perform virtually any kind of formatting check
		 * that doesn't involve some large external dataset.
		 * 
		 * Custom validators can be reused on the client by adding them to the global validator list,
		 * via the Validator.addValidator method.
		 */ 
		Validator: ValidatorStatic<Validator, ValidatorProps>;

		/** 
		 * ValuesManager extends Class
		 * The ValuesManager manages data from multiple member forms.
		 * 
		 * If a single logical form needs to be separated into multiple DynamicForm instances for
		 * Layout purposes (for example, spanning one logical form across multiple Tabs), a
		 * ValuesManager can be used to make the forms act as one logical form, supporting all
		 * value-related APIs otherwise called on DynamicForm directly.
		 * 
		 * A ValuesManager has no visual representation - it is strictly a logical entity, and the
		 * member forms provide the user interface. You can initialize a ValuesManager with a set of
		 * member forms (by setting ValuesManager.members at init) or add and remove member
		 * forms dynamically.
		 * 
		 * Calling ValuesManager.setValues on a ValuesManager will automatically route new
		 * field values to whichever member form is showing an editor for that field. Likewise,
		 * calling ValuesManager.validate will validate all member forms, and
		 * ValuesManager.saveData will initiate a save operation which aggregates values from
		 * all member forms.
		 * 
		 * Like a DynamicForm, a ValuesManager can be databound by setting
		 * ValuesManager.dataSource. In this case all member forms must also be bound to the
		 * same DataSource.
		 * 
		 * In general, when working with a ValuesManager and its member forms, call APIs on the
		 * ValuesManager whenever you are dealing with values that span multiple forms, and only call
		 * APIs on member forms that are specific to that form or its fields.
		 * 
		 * Note that, just as a DynamicForm can track values that are not shown in any FormItem, a
		 * ValuesManager may track values for which there is no FormItem in any member form. However,
		 * when using a ValuesManager these extra values are only allowed on the ValuesManager itself.
		 * Member forms will not track values for which they do not have FormItems.
		 */ 
		ValuesManager: ValuesManagerStatic<ValuesManager, ValuesManagerProps>;

		/** 
		 * ViewFileItem extends FileItem
		 * A simple subclass of FileItem for displaying the contents of "imageFile" fields in 
		 * DynamicForms. 
		 * 
		 * Displays one of two UIs, according to the value of 
		 * FileItem.showFileInline','showFileInline. If showFileInline is false, this Item
		 * displays the View and Download icons and the filename. Otherwise, it streams the image-file 
		 * and displays it inline.
		 */ 
		ViewFileItem: ViewFileItemStatic<ViewFileItem, ViewFileItemProps>;

		/** 
		 * ViewLoader extends Label
		 * The ViewLoader component can be used to load new SmartClient-based user interfaces into a
		 * running application.
		 * 
		 * NOTE: before using a ViewLoader, be sure that you have read about and understood the
		 * smartArchitecture','SmartClient Architecture. The most responsive and
		 * scalable application architecture preloads views rather than using ViewLoaders.
		 * 
		 * A ViewLoader is a Canvas, and can be provided anywhere a Canvas can be provided: as a Tab
		 * pane, and Layout member, etc. When a ViewLoader draws, it shows a
		 * ViewLoader.loadingMessage','loading message, then
		 * performs an RPC to the ViewLoader.viewURL','viewURL to load components.
		 * 
		 * The response from the viewURL should be SmartClient components defined in JavaScript, with no
		 * surrounding &lt;SCRIPT&gt; tags or other HTML framing. The returned script can be
		 * dynamically generated, for example, it may be the result of a JSP containing an XML view
		 * description enclosed in xmlTag','&lt;isomorphicXML&gt; tags.
		 * 
		 * In the returned script, the special variable "viewLoader" is available to refer to the
		 * ViewLoader instance that is loading components. The intended usage is that the returned
		 * script creates a view consisting of SmartClient components, then calls
		 * viewLoader.setView(myView) to place the loaded view into the ViewLoader.
		 * If the view does not call setView() explicitly, the viewLoader will find the last top-level
		 * UI component (Canvas subclass) created by the view and set that as the current view.
		 * Top-level in this case means that the UI component is not contained in another UI component
		 * as a member or child.
		 * 
		 * The ViewLoader relies on the XMLHttpRequest object which can be disabled by end-users in some
		 * supported browsers. See platformDependencies for more information.
		 */ 
		ViewLoader: ViewLoaderStatic<ViewLoader, ViewLoaderProps>;

		/** 
		 * VLayout extends Layout
		 * A subclass of Layout that applies a sizing policy along the vertical axis, interpreting
		 * percent and "*" sizes as proportions of the height of the layout. VLayouts will set any
		 * members that do not have explicit widths to match the layout.
		 */ 
		VLayout: VLayoutStatic<VLayout, VLayoutProps>;

		/** 
		 * VStack extends Layout
		 * A subclass of Layout that simply stacks members on the vertical axis without trying to
		 * manage their height. On the horizontal axis, any members that do not have explicit widths
		 * will be sized to match the width of the stack.
		 */ 
		VStack: VStackStatic<VStack, VStackProps>;

		/** 
		 * WebService extends Class
		 * Class representing a WebService definition derived from a WSDL file.
		 * 
		 * A Web Service object allows you to invoke operations (via
		 * WebService.callOperation','callOperation()), inspect schema declared in the
		 * WSDL file (WebService.getSchema','getSchema()), and perform simple read-only
		 * databinding WebService.getFetchDS. 
		 * 
		 * Once a WebService has been loaded, a DataSource can be declared with a
		 * DataSource.serviceNamespace to connect it to the web service, allowing DataSource
		 * data to be loaded and saved to the web service using
		 * OperationBinding','operationBindings.
		 */ 
		WebService: WebServiceStatic<WebService, WebServiceProps>;

		/** 
		 * Window extends Layout
		 * A general purpose Window class for implementing dialogs, portlets, alerts, prompts, wizards
		 * and desktop-like windowing interfaces.
		 * 
		 * Windows can contain arbitrary SmartClient components, configured via the Window.items
		 * property. Windows may be Window.isModal','modal or non-modal.
		 * 
		 * Windows provide a series of highly configurable and skinnable AutoChild','autoChildren
		 * including a header, various header controls, footer, and corner resizer.
		 * 
		 * The more specialized Dialog subclass of Window has additional functionality targetted
		 * at simple prompts and confirmations, such as buttons with default actions, and single-method
		 * isc.warn','shortcuts for common application dialogs.
		 */ 
		Window: WindowStatic<Window, WindowProps>;

		/** 
		 * WindowEditProxy extends LayoutEditProxy
		 * EditProxy that handles Window objects when editMode is enabled.
		 */ 
		WindowEditProxy: WindowEditProxyStatic<WindowEditProxy, WindowEditProxyProps>;

		/** 
		 * WSDataSource extends DataSource
		 * A WSDataSource is a DataSource that is preconfigured to contact the WSDL web service built
		 * into the SDK (see isomorphic/system/schema/SmartClientOperations.wsdl). This WSDL service
		 * can be easily implemented on Java and non-Java backends. 
		 * 
		 * WSDataSource supports all 4 DataSource operations (fetch, add, update, remove) and can be
		 * used with ListGrids, DynamicForms and other DataBoundComponents just like other
		 * DataSources.
		 * 
		 * Note that WSDataSource is specifically designed for use with SmartClientOperations.wsdl. If
		 * you are trying to connect to a pre-existing WSDL service, start with just DataSource, 
		 * not WSDataSource, and see the wsdlBinding','WSDL Integration chapter for an
		 * overview.
		 */ 
		WSDataSource: WSDataSourceStatic<WSDataSource, WSDataSourceProps>;

		/** 
		 * XJSONDataSource extends DataSource
		 * A DataSource preconfigured to use the RPCTransport','"scriptInclude" transport
		 * (sometimes called "JSONP") for cross-domain calls to JSON services.
		 * 
		 * To use this DataSource, provide the URL of the service as DataSource.dataURL, and
		 * provide DataSource.fields','fields that describe the structure of the data you want to
		 * extract from the service's response.
		 * 
		 * DataSource.recordXPath and DataSourceField.valueXPath can be used to extract
		 * data from the JSON structure returned by the service. See
		 * clientDataIntegration','Client-Side Data Integration for an overview of how to
		 * control what parts of the JSON structure are included in the DSResponse object, and
		 * hence provided to DataBoundComponents that are bound to this DataSource.
		 * 
		 * This XJSONDataSource is really a subclass of DataSource with just a few property settings:
		 * 
		 * dataFormat : "json",
		 * dataTransport : "scriptInclude"
		 * callbackParam : "callback"
		 * 
		 * 
		 * If you are also writing the server side code to respond to requests from this DataSource,
		 * see the 
		 * <a href='http://developer.yahoo.net/common/json.html#callbackparam' target='_blank'>tutorial provided by Yahoo!</a> 
		 * for a good overview of how this transport mechanism works. Note, as indicated in the
		 * tutorial above, the server is responsible for writing out not just the data, but also a
		 * JavaScript function call that tells the client that the response has arrived. The client
		 * passes the name of the function to call as the "callback" URL parameter.
		 * 
		 * NOTE: if you use this DataSource to contact Yahoo web services, remember to include
		 * output=json in the dataURL, as well as a
		 * <a href='http://developer.yahoo.net/' target='_blank'>Yahoo developer ID</a>.
		 */ 
		XJSONDataSource: XJSONDataSourceStatic<XJSONDataSource, XJSONDataSourceProps>;

		/** 
		 * XMLSyntaxHiliter extends SyntaxHiliter
		 * Regular expression-based source code colorizer for XML source.
		 * 
		 * NOTE: This class exists only for use with the SmartClient Feature Explorer and 
		 * SmartGWT Showcases and cannot be used in any other environment.
		 */ 
		XMLSyntaxHiliter: XMLSyntaxHiliterStatic<XMLSyntaxHiliter, XMLSyntaxHiliterProps>;

		/** 
		 * XMLTools extends Class
		 * Utility methods for dealing with XML elements, XML Schema, WSDL files, XSLT, and other
		 * XML-related functionality.
		 */ 
		XMLTools: XMLToolsStatic<XMLTools, XMLToolsProps>;

		/** 
		 * XORGateway extends ProcessElement
		 * Chooses one or another next process element based on AdvancedCriteria applied to
		 * Process.state.
		 * 
		 * If the AdvancedCriteria evaluate to true, the XORGateway.nextElement','nextElement is
		 * chosen, otherwise the XORGateway.failureElement','failureElement.
		 * 
		 * Note that "XOR" in XORGateway means "exclusive or" - only one next element is
		 * chosen.
		 */ 
		XORGateway: XORGatewayStatic<XORGateway, XORGatewayProps>;

		/** 
		 * ZoneCanvas extends EventCanvas
		 * A subclass of EventCanvas','EventCanvas, used to render 
		 * Calendar.zones','styled areas in CalendarView','calendar views.
		 * 
		 * A ZoneCanvas is a semi-transparent canvas that highlights a portion of a 
		 * calendar view, by rendering across all lanes and behind normal Calendar.data','events.
		 * 
		 * By default, the canvas shows a bottom-aligned label containing the 
		 * CalendarEvent.name','zone name.
		 * Default styling is specified at the Calendar.zoneStyleName','calendar level 
		 * and can be overridden for CalendarEvent.styleName','individual zones.
		 */ 
		ZoneCanvas: ZoneCanvasStatic<ZoneCanvas, ZoneCanvasProps>;


    }		
}

declare var isc: Isc.iscStatic;

declare module "isc" {
    export = Isc;
}
