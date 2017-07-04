/// <reference path="isc.interfaces.d.ts" />
/// <reference path="isc.objects.d.ts" />
/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/kylemwhite/isc
// Generated: 7/4/2017 7:01:14 AM by KWhite
// Generated from SmartClient version v11.1p_2017-07-04

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
		 * FormItem intended for inserting blurbs of instructional HTML into DynamicForms.
		 * 
		 * Set the defaultValue of this item to the HTML you want to embed in the form.
		 */ 
		BlurbItem: BlurbItemStatic<BlurbItem, BlurbItemProps>;

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
		 * Dialogs are a specialized version of Window used for small windows that contain just a text
		 * message or a text mesage with some standard buttons.
		 * 
		 * Many typical modal dialogs such as alerts and confirmations are built into the system with convenience
		 * APIs - see isc.say, isc.warn and isc.askForValue.
		 * 
		 * Dialogs can be modal or non-modal according to Window.isModal','isModal.
		 * 
		 * NOTE: If you are building a dialog that will involve more than just buttons and a message, consider
		 * starting from the Window class instead, where arbitrary components can be added to the body
		 * area via Window.addItem.
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
		 * DrawLine extends DrawItem
		 * DrawItem subclass to render line segments.
		 */ 
		DrawLine: DrawLineStatic<DrawLine, DrawLineProps>;

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
		 * DrawPath extends DrawItem
		 * Draws a multi-segment line.
		 */ 
		DrawPath: DrawPathStatic<DrawPath, DrawPathProps>;

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
		 * EventWindow extends Window
		 * Subclass of Window used to display events within a Calendar. Customize via
		 * Calendar.eventWindow.
		 */ 
		EventWindow: EventWindowStatic<EventWindow, EventWindowProps>;

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
		 * GridRenderer extends Canvas
		 * A flexible, high-speed table that offers consistent cross-platform sizing, clipping, and events.
		 */ 
		GridRenderer: GridRendererStatic<GridRenderer, GridRendererProps>;

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
		 * HLayout extends Layout
		 * A subclass of Layout that applies a sizing policy along the horizontal axis, interpreting
		 * percent and "*" sizes as proportions of the width of the layout. HLayouts will set any members
		 * that do not have explicit heights to match the layout.
		 */ 
		HLayout: HLayoutStatic<HLayout, HLayoutProps>;

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
		 * Label extends Button
		 * Labels display a small amount of Label.align','alignable Label.contents','text
		 * with optional Label.icon','icon and Label.autoFit','autoFit.
		 * 
		 * For a general-purpose container for HTML content, use HTMLFlow or HTMLPane
		 * instead.
		 */ 
		Label: LabelStatic<Label, LabelProps>;

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
		 * MenuButton extends Button
		 * Simple subclass of button associated with a menu widget (gets shown below the button).
		 */ 
		MenuButton: MenuButtonStatic<MenuButton, MenuButtonProps>;

		/** 
		 * MiniNavControl extends StretchImgButton
		 * Compact control for up/down navigation that roughly looks like an up arrowhead next to a
		 * down arrowhead.
		 */ 
		MiniNavControl: MiniNavControlStatic<MiniNavControl, MiniNavControlProps>;

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
		 * Static singleton class containing APIs for interacting with Numbers.
		 */ 
		NumberUtil: NumberUtilStatic<NumberUtil, NumberUtilProps>;

		/** 
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
		 * Encapsulates an RPC response from the server. Instances of this class are automatically created
		 * and optionally passed to you in the callback you specify as part of your RPCRequest.
		 */ 
		RPCResponse: RPCResponseStatic<RPCResponse, RPCResponseProps>;

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
		 * SectionStack extends VLayout
		 * A container that manages a list of sections of widgets, each with a header. Sometimes called
		 * an "Accordion".
		 * 
		 * SectionStack can be configured so that only one section is visible at a time (similar to MS Outlook's
		 * left-hand Nav), or to allow multiple sections to be visible and share the available space.
		 */ 
		SectionStack: SectionStackStatic<SectionStack, SectionStackProps>;

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
		 * Snapbar extends Splitbar
		 * Subclass of the Splitbar class that uses the grip functionality
		 * to show a stateful open / close indicator.
		 */ 
		Snapbar: SnapbarStatic<Snapbar, SnapbarProps>;

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
		 * StatefulCanvas extends Canvas
		 * A component that has a set of possible states, and which presents itself differently according to
		 * which state it is in. An example is a button, which can be "up", "down", "over" or "disabled".
		 */ 
		StatefulCanvas: StatefulCanvasStatic<StatefulCanvas, StatefulCanvasProps>;

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
		 * TabBar extends Toolbar
		 * Shows a set of Tabs. TabBars are automatically created by TabSets and shouldn't be used
		 * directly. The TabBar is documented for skinning purposes.
		 */ 
		TabBar: TabBarStatic<TabBar, TabBarProps>;

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
		 * ToolStripMenuButton extends MenuButton
		 * Simple subclass of MenuButton with appearance appropriate for a ToolStrip menu button.
		 * Can be used to create an icon-only menu button, and icon with text, or a text only button by setting the 
		 * icon and title attibutes as required.
		 */ 
		ToolStripMenuButton: ToolStripMenuButtonStatic<ToolStripMenuButton, ToolStripMenuButtonProps>;

		/** 
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
		 * VLayout extends Layout
		 * A subclass of Layout that applies a sizing policy along the vertical axis, interpreting
		 * percent and "*" sizes as proportions of the height of the layout. VLayouts will set any
		 * members that do not have explicit widths to match the layout.
		 */ 
		VLayout: VLayoutStatic<VLayout, VLayoutProps>;

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

	
	export interface ListGrid {

		/**
		 * getDataSource - This is undocumented but works.
		 * @return {DataSource} The DataSource that the grid is bound to
		 */
		//getDataSource(): DataSource;   // No longer needed because it's now in the referenceDocs.xml file and is generated.

	}
}

declare var isc: Isc.iscStatic;

declare module "isc" {
    export = Isc;
}
