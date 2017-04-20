/// <reference path="isc.types.d.ts" />
// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped

declare namespace Isc {

    // Properties used for passing into .create() or anything else that takes a TabSet Properties argument.
	export class TabSetProperties  extends CanvasProperties {
		showMoreTab?: boolean; // Flags=IR
		bottomEdgeSizes?: EdgeSizes; // Flags=IR
		useIOSTabs?: Boolean; // Flags=IR
		symmetricEdges?: Boolean; // Flags=IR
		animateTabScrolling?: Boolean; // Flags=IR
		bottomEdgeOffsets?: EdgeSizes; // Flags=IR
		showTabPicker?: Boolean; // Flags=IR
		paneContainerOverflow?: Overflow; // Flags=IRWA
		leftEdgeSizes?: EdgeSizes; // Flags=IR
		tabBarPosition?: Side; // Flags=IR
		titleEditorProperties?: TextItem /* TextItem properties */; // Flags=IR
		tabBarProperties?: TabBar /* TabBar Properties */; // Flags=IR
		tabBarControls?: Array; // Flags=IRA
		showTabBar?: Boolean; // Flags=IRW
		skinImgDir?: string; // Flags=IR
		scrollerHSrc?: SCImgURL; // Flags=IR
		canAddTabs?: Boolean; // Flags=IR
		showPartialEdges?: Boolean; // Flags=IRA
		scrollerButtonSize?: number; // Flags=IR
		tabBarThickness?: number; // Flags=IRW
		showTabScroller?: Boolean; // Flags=IR
		tabBarControlLayout?: Layout /* AutoChild Layout */; // Flags=IR
		editProxyConstructor?: SCClassName; // Flags=IR
		pickerButtonVSrc?: SCImgURL; // Flags=IR
		moreTabPaneNavBar?: NavigationBar /* AutoChild NavigationBar */; // Flags=IR
		destroyPanes?: boolean; // Flags=IR
		canReorderTabs?: boolean; // Flags=IR
		ariaCloseableSuffix?: String; // Flags=IRA
		defaultTabWidth?: number; // Flags=IR
		titleEditorTopOffset?: number /* Integer */; // Flags=IRW
		rightEdgeSizes?: EdgeSizes; // Flags=IR
		pickerButtonSize?: number /* number */; // Flags=IR
		selectedTab?: number; // Flags=IRW
		tabProperties?: Tab /* Tab Properties */; // Flags=IR
		closeTabIcon?: SCImgURL; // Flags=IR
		leftEdgeOffsets?: EdgeSizes; // Flags=IR
		moreTabPaneProperties?: Canvas /* Canvas Properties */; // Flags=IR
		simpleTabBaseStyle?: CSSStyleName; // Flags=IRW
		tabs?: Tab[] /* Array of Tab */; // Flags=IRW
		canEditTabTitles?: Boolean; // Flags=IRW
		rightEdgeOffsets?: EdgeSizes; // Flags=IR
		moreTabTitle?: String; // Flags=IR
		moreTabPaneTable?: TableView /* AutoChild TableView */; // Flags=IR
		titleEditorLeftOffset?: number /* Integer */; // Flags=IRW
		titleEditEvent?: TabTitleEditEvent; // Flags=IRW
		addTabButton?: ImgButton /* AutoChild ImgButton */; // Flags=IR
		useSimpleTabs?: Boolean; // Flags=IRA
		addTabButtonIcon?: SCImgURL; // Flags=IR
		locateTabsBy?: string; // Flags=IRWA
		paneMargin?: number /* number */; // Flags=IR
		paneContainerClassName?: CSSStyleName; // Flags=IRW
		defaultTabHeight?: number; // Flags=IR
		symmetricScroller?: Boolean; // Flags=IR
		moreTabImage?: SCImgURL; // Flags=IR
		tabBarAlign?: Side | Alignment; // Flags=IR
		topEdgeOffsets?: EdgeSizes; // Flags=IR
		simpleTabButtonConstructor?: Class; // Flags=IRA
		closeTabIconSize?: number /* number */; // Flags=IR
		canCloseTabs?: boolean; // Flags=IRW
		moreTabPaneDefaults?: Canvas /* Canvas Properties */; // Flags=IR
		titleEditorRightOffset?: number /* Integer */; // Flags=IRW
		moreTabCount?: number; // Flags=IR
		pickerButtonSrc?: SCImgURL; // Flags=IR
		showPaneContainerEdges?: boolean; // Flags=IRWA
		moreTabProperties?: Tab /* Tab Properties */; // Flags=IR
		scrollerVSrc?: SCImgURL; // Flags=IR
		touchPickerButtonSize?: number /* number */; // Flags=IR
		symmetricPickerButton?: Boolean; // Flags=IR
		pickerButtonHSrc?: SCImgURL; // Flags=IR
		scrollerSrc?: SCImgURL; // Flags=IR
		topEdgeSizes?: EdgeSizes; // Flags=IR
	}


	/**
	 * The TabSet class allows components on several panes to share the same space. The tabs at &#010 the top can be selected by the user to show each pane. &#010 <P>&#010 Tabs are configured via the <code>tabs</code> property, each of which has a&#010 <code>pane</code> property which will be displayed in the main pane when that tab is&#010 selected. 
	 */
	export class TabSet  extends Canvas {
		/** Pane contents for the "more" tab based on a VLayout. Typically contains&#010 a ${isc.DocUtils.linkForRef('class:NavigationBar')} and ${isc.DocUtils.linkForRef('class:TableView')}. */
		moreTabPane: VLayout /* AutoChild VLayout */;

		/** Should tabs exceeding ${isc.DocUtils.linkForRef('attr:TabSet.moreTabCount')} be shown on a "more" tab?&#010 <p>&#010 This setting is used to emulate an iPhone-style tab bar "more" button. */
		showMoreTab: boolean;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeSizes</code>, &#010 <code>rightEdgeSizes</code>, <code>topEdgeSizes</code> and <code>bottomEdgeSizes</code> &#010 properties allow the sizes of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge sizes where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		bottomEdgeSizes: EdgeSizes;

		/** Setting this to true turns on a different appearance for tabs, similar to iOS tabs from &#010 the "Music" app, where the tab.icon is enlarged and shown as a black and white mask.  &#010 This mode does not support a clickable icon - clicking the enlarged icon just switches &#010 tabs.&#010 <P>&#010 This attribute only has an effect for tabs that are not ${isc.DocUtils.linkForRef('attr:Tab.canClose','closable')},&#010 and only for Mobile WebKit. */
		useIOSTabs: Boolean;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 this property determines whether the same edge media will be used regardless of the tab&#010 bar position, or whether different media should be used (necessary if the edge appearance is&#010 not symmetrical on all sides).&#010 <P>&#010 If this property is set to false the paneContainer edge image URLs will be prefixed with&#010 the tabBarPosition of the tabSet - for example <code>"[SKIN]edge_top_T.gif"</code> rather&#010 than just <code>"[SKIN]edge_T.gif"</code>.&#010 <P>&#010 When <code>symmetricEdges</code> is false, custom edge sizes for the pane container may be&#010 specified via ${isc.DocUtils.linkForRef('attr:TabSet.topEdgeSizes')} et al, and custom edge offsets via &#010 ${isc.DocUtils.linkForRef('attr:TabSet.topEdgeOffsets')} et al. */
		symmetricEdges: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller')} is true, should tabs be scrolled into view via an &#010 animation when the user interacts with the scroller buttons? */
		animateTabScrolling: Boolean;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeOffsets</code>, &#010 <code>rightEdgeOffsets</code>, <code>topEdgeOffsets</code> and <code>bottomEdgeOffsets</code> &#010 properties allow the offsets of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge offsets where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		bottomEdgeOffsets: EdgeSizes;

		/** If there is not enough space to display all the tab-buttons in this tabSet, should&#010 a drop-down "picker" be displayed to allow selection of tabs that are clipped? */
		showTabPicker: Boolean;

		/** Specifies the overflow of the pane container (the component that holds the pane contents&#010 for all tabs).  By default this is set to "auto", meaning the pane container will&#010 automatically introduce scrolling when the pane contents exceed the TabSet's specified&#010 size.&#010 <p>&#010 For other values and their meaning, see ${isc.DocUtils.linkForRef('type:Overflow')} */
		paneContainerOverflow: Overflow;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeSizes</code>, &#010 <code>rightEdgeSizes</code>, <code>topEdgeSizes</code> and <code>bottomEdgeSizes</code> &#010 properties allow the sizes of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge sizes where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		leftEdgeSizes: EdgeSizes;

		/** Which side of the TabSet the TabBar should appear on. */
		tabBarPosition: Side;

		/** Properties for the auto-generated ${isc.DocUtils.linkForRef('attr:TabSet.titleEditor')}. This is the text item&#010 we use to edit tab titles in this tabSet. */
		titleEditorProperties: TextItem /* TextItem properties */;

		/** This attribute allows developers to specify custom properties for this tabset's&#010 ${isc.DocUtils.linkForRef('attr:TabSet.tabBar')} */
		tabBarProperties: TabBar /* TabBar Properties */;

		/** This property determines what controls should show up after the tabBar for this TabSet.&#010 Standard controls can be included using the strings <code>"tabScroller"</code> and &#010 <code>"tabPicker"</code>. These correspond to the ${isc.DocUtils.linkForRef('attr:TabSet.scroller')} and ${isc.DocUtils.linkForRef('attr:TabSet.tabPicker')}&#010 AutoChildren, respectively. The <code>"tabScroller"</code> standard control shows two&#010 buttons for scrolling through the tabs in order and the <code>"tabPicker"</code> standard&#010 control allows tabs to be picked directly from a menu. The standard controls show up only if&#010 ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller')} or ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker')} is true and there is not&#010 enough space available to show all of the tabs in the tabBar.&#010 <P>&#010 ${isc.DocUtils.linkForExampleId('layout_tabs_custom_controls', 'This sample')} illustrates the usage of this property&#010 <P>&#010 Additional controls can be included by adding any widget to this array.  Controls will&#010 show up in the order in which they are specified.  For example, the following code would&#010 add a button in the tabBar area, while preserving the normal behavior of the tabScroller&#010 and tabPicker:&#010 &#010 <pre>&#010 isc.TabSet.create({&#010     width:300,&#010     tabs : [&#010         { title: "Tab one" }&#010     ],&#010     tabBarControls : [&#010         isc.ImgButton.create({&#010             src:"[SKINIMG]/actions/add.png",&#010             width:16, height:16,&#010             layoutAlign:"center"&#010         }),&#010         "tabScroller", "tabPicker"&#010     ]&#010 });&#010 </pre>&#010 &#010 &#010 You can also refer to the default tabPicker/tabScroll controls&#010 from Component XML:&#010 <pre>&#010 &lt;TabSet width="300"&gt;&#010     &lt;tabBarControls&gt;&#010         &lt;Button title="Custom Button"/&gt;&#010         &lt;value xsi:type="string"&gt;tabPicker&lt;/value&gt;&#010         &lt;value xsi:type="string"&gt;tabScroller&lt;/value&gt;&#010      &lt;/tabBarControls&gt;&#010      &lt;tabs&gt;&#010          &lt;tab title="Foo"/&gt;&#010          &lt;tab title="Bar"/&gt;&#010     &lt;/tabs&gt;&#010 &lt;/TabSet&gt;&#010 </pre>&#010 <p>&#010 When ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch')} is <code>true</code> and native touch scrolling is supported,&#010 then by default, only the <code>"tabPicker"</code> is shown. The <code>"tabScroller"</code>&#010 control is omitted by default on touch devices because the tabs in the tab bar are native&#010 touch-scrollable, so the <code>"tabScroller"</code> control is unnecessary. To override&#010 the omission of the <code>"tabScroller"</code>, simply add&#010 "tabScroller"&#010 &#010 to the <code>tabBarControls</code> array. */
		tabBarControls: Array;

		/** TextItem we use to edit tab titles in this TabSet.  You can override this property &#010 using the normal ${isc.DocUtils.linkForRef('type:AutoChild')} facilities. */
		titleEditor: TextItem /* AutoChild TextItem */;

		/** Should the tabBar be displayed or not&#010 If shrinkElementOnHide is true, the paneContainer will expand over the space&#010 occupied by TabBar */
		showTabBar: Boolean;

		/** Default directory for skin images (those defined by the class), relative to the&#010 Page-wide ${isc.DocUtils.linkForRef('classMethod:Page.getSkinDir','skinDir')}. */
		skinImgDir: string;

		/** If this TabSet is showing ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller','tab scroller buttons')}, and &#010 ${isc.DocUtils.linkForRef('attr:TabSet.symmetricScroller','symmetricScroller')} is true, this property governs the base&#010 URL for the tab bar back and forward scroller button images for horizontal tab bars [IE for&#010 tab sets with ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} set to "top" or "bottom"].&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:TabSet.symmetricScroller','symmetricScroller')} is false, &#010 ${isc.DocUtils.linkForRef('attr:TabSet.scrollerSrc')} will be used instead.&#010 <P>&#010 To get the path to the image to display, this base URL will be modified as follows:&#010 <ul>&#010 <li>If appropriate a state suffix of <code>"Down"</code> or <code>"Disabled"</code> will be&#010     appended.</li>&#010 <li>A suffix of <code>"forward"</code> or <code>"back"</code> will be appended for the&#010     forward or backward scrolling button.</li>&#010 </ul>&#010 For example - if the scrollerHSrc is set to <code>"[SKIN]hscroll.gif"</code>, the image&#010 displayed for the back-scroller button on a tabSet with <code>tabBarPosition</code> set to&#010 "top" and <code>symmetricScroller</code> set to true would be one of &#010 <code>"[SKIN]hscroll_back.gif"</code>, <code>"[SKIN]hscroll_Down_back.gif"</code>,&#010 and <code>"[SKIN]hscroll_Disabled_back.gif"</code>.&#010 <P>&#010 Note that for best results the media should be sized to match the scroller button sizes, &#010 determined by ${isc.DocUtils.linkForRef('attr:TabSet.tabBarThickness')} and ${isc.DocUtils.linkForRef('attr:TabSet.scrollerButtonSize')}. */
		scrollerHSrc: SCImgURL;

		/** Causes the ${isc.DocUtils.linkForRef('attr:TabSet.addTabButton')} to appear after the ${isc.DocUtils.linkForRef('attr:TabSet.tabs')} and before the&#010 ${isc.DocUtils.linkForRef('attr:TabSet.tabBarControls')}.  &#010 <p>&#010 There is no default behavior for what happens when the <code>addTabButton</code> is&#010 clicked.  Add a handler for the ${isc.DocUtils.linkForRef('method:TabSet.addTabClicked')} event to implement a behavior. */
		canAddTabs: Boolean;

		/** If the paneContainer for this tab set is showing ${isc.DocUtils.linkForRef('attr:Canvas.showEdges','edges')}, setting this&#010 attribute to <code>true</code> will set the paneContainer to show&#010 ${isc.DocUtils.linkForRef('attr:Canvas.customEdges','customEdges')} for the three sides opposing the tabBarPosition. */
		showPartialEdges: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller')} is true, this property governs the size of scroller&#010 buttons. Applied as the width of buttons if the tabBar is horizontal, or the height&#010 if tabBar is vertical. Note that the other dimension is determined by &#010 ${isc.DocUtils.linkForRef('attr:TabSet.tabBarThickness','this.tabBarThickness')} */
		scrollerButtonSize: number;

		/** A component containing back and forward buttons for scrolling through all of the tabs&#010 of the TabSet. The scroller is created automatically when needed and when <code>"tabScroller"</code>&#010 is specified in the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarControls')}.&#010 <p>&#010 By default, the scroller constructor is ${isc.DocUtils.linkForRef('class:StretchImgButton')}. Note that the scroller&#010 ${isc.DocUtils.linkForRef('attr:StretchImg.items','items')} are determined automatically, so any items set in&#010 scrollerProperties will be ignored. */
		scroller: StretchImgButton /* AutoChild StretchImgButton */;

		/** Thickness of tabBar, applies to either orientation (specifies height for horizontal,&#010 width for vertical orientation).  Note that overriding this value for TabSets that are&#010 skinned with images generally means providing new media for the borders. */
		tabBarThickness: number;

		/** If there is not enough space to display all the tab-buttons in this tabSet, should &#010 scroll buttons be displayed to allow access to tabs that are clipped?  If unset, &#010 defaults to false for ${isc.DocUtils.linkForRef('classAttr:Browser.isHandset','handsets')} and true otherwise. */
		showTabScroller: Boolean;

		/** ${isc.DocUtils.linkForRef('type:AutoChild')} of type ${isc.DocUtils.linkForRef('class:Layout')} that holds the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarControls')} as well as&#010 the built-in controls such as the ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker','tab picker menu')}. */
		tabBarControlLayout: Layout /* AutoChild Layout */;

		/** Default class used to construct the ${isc.DocUtils.linkForRef('class:EditProxy')} for this component&#010 when the component is ${isc.DocUtils.linkForRef('method:Canvas.setEditMode','first placed into edit mode')}. */
		editProxyConstructor: SCClassName;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker')} is true, and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricPickerButton')} is &#010 set to true, this property governs the base URL for the picker&#010 button image, when displayed in a verricaL tab-bar [IE ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')} is&#010 set to <code>"LEFT"</code> or <code>"right"</code>].&#010 <P>&#010 Note that if <code>symmetricPickerButton</code> is false, the ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonSrc')}&#010 property will be used instead.&#010 <P>&#010 This base URL will have a suffix of <code>"Down"</code> appended when the user holds the&#010 mouse down over the button, and <code>"Disabled"</code> if the tabset as a whole is &#010 disabled. */
		pickerButtonVSrc: SCImgURL;

		/** TabBar for this TabSet, an instance of ${isc.DocUtils.linkForRef('class:TabBar')}. */
		tabBar: TabBar /* AutoChild TabBar */;

		/** Navigation bar shown in the ${isc.DocUtils.linkForRef('attr:TabSet.moreTabPane')}; */
		moreTabPaneNavBar: NavigationBar /* AutoChild NavigationBar */;

		/** Whether ${isc.DocUtils.linkForRef('method:Canvas.destroy','destroy()')} should be called on ${isc.DocUtils.linkForRef('attr:Tab.pane')} when it a tab is&#010 removed via ${isc.DocUtils.linkForRef('method:TabSet.removeTab')}.  &#010 <P>&#010 With the default setting of <code>null</code> panes will be automatically destroyed.&#010 An application might set this to false in order to re-use panes in different tabs or in&#010 different parts of the application. */
		destroyPanes: boolean;

		/** If true, tabs can be reordered by dragging on them.&#010 <P>&#010 To disallow drag-reorder of a specific tab, see ${isc.DocUtils.linkForRef('attr:Tab.canReorder')}. */
		canReorderTabs: boolean;

		/** When ${isc.DocUtils.linkForRef('classMethod:isc.setScreenReaderMode','screen reader mode')} is enabled and a tab is&#010 ${isc.DocUtils.linkForRef('attr:TabSet.canCloseTabs','closeable')}, the <code>ariaCloseableSuffix</code> is a string&#010 that is appended to the label of closeable tabs. This suffix is hidden from sighted&#010 users, but is announced by screen readers to indicate that the tab may be closed.&#010 <p>&#010 Set to <code>null</code> to disable appending this suffix. */
		ariaCloseableSuffix: String;

		/** If set, is passed as "width" to all tabs when ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')} is set to &#010 <code>"top"</code> or <code>"bottom"</code>.&#010 <P>&#010 If unset, width will be picked up from&#010 the Tab constructor class defaults. Tabs expand to fit their content, so &#010 this width acts as a minimum.&#010 Setting width:1 will result in tabs that are&#010 only as wide as their titles. May be customized by individual&#010 ${isc.DocUtils.linkForRef('group:skinning','skins')}. */
		defaultTabWidth: number;

		/** If set, offsets the tab title editor further down from the top edge of the tab, by the&#010 number of pixels set in this property.  You can use this property, together with the &#010 left and right offset properties, to fine tune positioning of the editor within or &#010 around the tab button.<p>&#010 <b>Note:</b> The height of the editor is an attribute of the editor itself, and can be&#010 set by specifying a "height" property in ${isc.DocUtils.linkForRef('attr:TabSet.titleEditor','titleEditorDefaults')}. */
		titleEditorTopOffset: number /* Integer */;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeSizes</code>, &#010 <code>rightEdgeSizes</code>, <code>topEdgeSizes</code> and <code>bottomEdgeSizes</code> &#010 properties allow the sizes of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge sizes where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		rightEdgeSizes: EdgeSizes;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker','showTabPicker')} is <code>true</code> and ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch')}&#010 is <code>false</code>, this property governs the size of the tab picker button. This value&#010 is applied as the width of the tab picker button if the ${isc.DocUtils.linkForRef('attr:TabSet.tabBar','tabBar')} is&#010 horizontal, or the height if the <code>tabBar</code> is vertical. Note that the other&#010 dimension is determined by ${isc.DocUtils.linkForRef('attr:TabSet.tabBarThickness','this.tabBarThickness')}.&#010 <p>&#010 On touch browsers (where ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch')} is <code>true</code>),&#010 ${isc.DocUtils.linkForRef('attr:TabSet.touchPickerButtonSize','touchPickerButtonSize')} is used instead. */
		pickerButtonSize: number /* number */;

		/** Specifies the index of the initially selected tab. */
		selectedTab: number;

		/** Properties to apply to all Tabs created by this TabSet. */
		tabProperties: Tab /* Tab Properties */;

		/** Default src for the close icon for tabs to display if ${isc.DocUtils.linkForRef('attr:TabSet.canCloseTabs')} is true. */
		closeTabIcon: SCImgURL;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeOffsets</code>, &#010 <code>rightEdgeOffsets</code>, <code>topEdgeOffsets</code> and <code>bottomEdgeOffsets</code> &#010 properties allow the offsets of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge offsets where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		leftEdgeOffsets: EdgeSizes;

		/** Properties to apply to the "more" tab's pane created by this TabSet. */
		moreTabPaneProperties: Canvas /* Canvas Properties */;

		/** If this.useSimpleTabs is true, simpleTabBaseClass will be the base style used to &#010  determine the css style to apply to the tabs.<br>&#010  This property will be suffixed with the side on which the tab-bar will appear, followed&#010  by with the tab's state (selected, over, etc), resolving to a className like &#010  "tabButtonTopOver" */
		simpleTabBaseStyle: CSSStyleName;

		/** An array of ${isc.DocUtils.linkForRef('object:Tab')} objects, specifying the title and pane contents of each tab in the TabSet.&#010 When developing in JavaScript, tabs are specified as an array of object literals, &#010 not instances - see ${isc.DocUtils.linkForRef('object:Tab')}.  &#010 &#010 <p>&#010 After providing ${isc.DocUtils.linkForRef('object:Tab')} instances to <code>setTabs()</code>, the TabSet creates actual UI &#010 widgets to serve as interactive tabs. Any further modifications to tabs should be performed &#010 via TabSet APIs such as ${isc.DocUtils.linkForRef('method:TabSet.setTabTitle')}, ${isc.DocUtils.linkForRef('method:TabSet.setTabIcon')} and &#010 ${isc.DocUtils.linkForRef('method:TabSet.setTabPane')}.&#010 <p>&#010 You can add and remove tabs after creating the TabSet by calling ${isc.DocUtils.linkForRef('method:TabSet.addTab')} and &#010 ${isc.DocUtils.linkForRef('method:TabSet.removeTab')} */
		tabs: Tab[] /* Array of Tab */;

		/** If true, users can edit the titles of tabs in this TabSet when the &#010 ${isc.DocUtils.linkForRef('attr:TabSet.titleEditEvent','titleEditEvent')} fires.  You can override this behavior per tab &#010 with the ${isc.DocUtils.linkForRef('attr:Tab.canEditTitle')} property.&#010 <p>&#010 Note that this TabSet's ${isc.DocUtils.linkForRef('attr:TabSet.titleEditEvent','titleEditEvent')} must be set to a&#010 supported ${isc.DocUtils.linkForRef('type:TabTitleEditEvent')} in order for users to be able to edit the titles of&#010 tabs. */
		canEditTabTitles: Boolean;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeOffsets</code>, &#010 <code>rightEdgeOffsets</code>, <code>topEdgeOffsets</code> and <code>bottomEdgeOffsets</code> &#010 properties allow the offsets of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge offsets where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		rightEdgeOffsets: EdgeSizes;

		/** Title for the "More" tab. */
		moreTabTitle: String;

		/** ${isc.DocUtils.linkForRef('class:TableView')} used to show links to other tabs in the ${isc.DocUtils.linkForRef('attr:TabSet.moreTabPane')}; */
		moreTabPaneTable: TableView /* AutoChild TableView */;

		/** If set, offsets the tab title editor further in from the left-hand edge of the tab, by&#010 the number of pixels set in this property.  Note that the editor is always offset to&#010 avoid overlapping the endcaps of the tab; this property is applied on top of that &#010 default offset. */
		titleEditorLeftOffset: number /* Integer */;

		/** The event that triggers title editing on this TabSet. */
		titleEditEvent: TabTitleEditEvent;

		/** Appears when ${isc.DocUtils.linkForRef('attr:TabSet.canAddTabs')} is enabled. */
		addTabButton: ImgButton /* AutoChild ImgButton */;

		/** Should we use simple button based tabs styled with CSS rather than&#010 image based ${isc.DocUtils.linkForRef('class:ImgTab')} tabs?&#010 <P>&#010 &#010 If set to true the ${isc.DocUtils.linkForRef('attr:TabSet.simpleTabButtonConstructor')} will be used and tabs will&#010 by styled according to ${isc.DocUtils.linkForRef('attr:TabSet.simpleTabBaseStyle')}.&#010 &#010  */
		useSimpleTabs: Boolean;

		/** Icon for the ${isc.DocUtils.linkForRef('attr:TabSet.addTabButton')}. */
		addTabButtonIcon: SCImgURL;

		/** When ${isc.DocUtils.linkForRef('classMethod:AutoTest.getElement')} is used to parse locator strings generated by&#010 ${isc.DocUtils.linkForRef('classMethod:AutoTest.getLocator')}, how should tabs within this tabset be identified?&#010 By default if tab has a specified ${isc.DocUtils.linkForRef('attr:Tab.ID')} this will always be used.&#010 For tabs with no ID, the following options are available:&#010 <ul>&#010 <li><code>"title"</code> use the title as an identifier</li>&#010 <li><code>"index"</code> use the index of the tab in the tabset as an identifier</li>&#010 </ul>&#010 &#010 If unset, and the tab has no specified ID, default behavior is to&#010 identify by title (if available), otherwise by index. */
		locateTabsBy: string;

		/** Space to leave around the panes in our paneContainer&#010 <P>&#010 Note that this property may be specified on a per-tab basis via ${isc.DocUtils.linkForRef('attr:Tab.paneMargin')}. */
		paneMargin: number /* number */;

		/** CSS style used for the paneContainer. */
		paneContainerClassName: CSSStyleName;

		/** If set, is passed as "height" to all tabs when ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')} is set to &#010 <code>"left"</code> or <code>"right"</code>. &#010 <P>&#010 If unset, height will be picked up from&#010 the Tab constructor class defaults. Note that tabs expand to fit their content so&#010 this height acts as a minimum. May be customized by individual&#010 ${isc.DocUtils.linkForRef('group:skinning','skins')}. */
		defaultTabHeight: number;

		/** If this TabSet is showing ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller','tab scroller buttons')}, this property &#010 determines whether the ${isc.DocUtils.linkForRef('attr:TabSet.scrollerHSrc')} and ${isc.DocUtils.linkForRef('attr:TabSet.scrollerVSrc')} media&#010 will be used for vertical and horizontal tab-bar scroller buttons, or whether separate&#010 media should be used for each possible ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} based&#010 on the ${isc.DocUtils.linkForRef('attr:TabSet.scrollerSrc')} property for this tabSet. */
		symmetricScroller: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showMoreTab')} is enabled this property determines the image to display on&#010 the "More" tab button. */
		moreTabImage: SCImgURL;

		/** Alignment of the tabBar.&#010 <P>&#010 If the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} is "top" or "bottom", then &#010 this attribute may be set to "left", "right" or "center".  The default is "left", or&#010 "right" in ${isc.DocUtils.linkForRef('classMethod:Page.isRTL','RTL mode')}.&#010 <P>&#010 If the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} is "left" or "right", then this&#010 attribute may be set to "top", "bottom" or "center".  The default is "top". */
		tabBarAlign: Side | Alignment;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeOffsets</code>, &#010 <code>rightEdgeOffsets</code>, <code>topEdgeOffsets</code> and <code>bottomEdgeOffsets</code> &#010 properties allow the offsets of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge offsets where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		topEdgeOffsets: EdgeSizes;

		/** Container where the component specified by ${isc.DocUtils.linkForRef('attr:Tab.pane')} is shown.&#010 <P>&#010 Note: paneContainer and showEdges:true for rounded tabsets: you can enable decorative&#010 image-based edges on the paneContainer by setting ${isc.DocUtils.linkForRef('attr:Canvas.showEdges','showEdges:true')}&#010 via paneContainerDefaults (to skin all tabsets) or paneContainerProperties (to use&#010 edges on one instance).  In this structure, the ${isc.DocUtils.linkForRef('group:baseLine')} should use media&#010 that matches the appearance of the decorative edges and fully overlaps the edge of the&#010 paneContainer that it is adjacent to.  In the most typical appearance (symmetric edges&#010 on all 4 sides), both ${isc.DocUtils.linkForRef('attr:TabBar.baseLineCapSize')} and ${isc.DocUtils.linkForRef('attr:TabBar.baseLineThickness')}&#010 match the ${isc.DocUtils.linkForRef('attr:Canvas.edgeSize','edgeSize')} set on the paneContainer.  See the&#010 load_skin.js file for the "SmartClient" skin for an example of setting all relevant&#010 properties.&#010 <P>&#010 To disable edges for a particular TabSet, which you may want to do for a TabSet that&#010 is already within a clearly defined container, configure the paneContainer to show only&#010 it's top edge:&#010 <pre>&#010      paneContainerProperties : { customEdges:["T"] },&#010 </pre>&#010 To completely flatten even the top edge of the TabSet:&#010 <pre>&#010      paneContainerProperties : { customEdges:["T"] },&#010      tabBarProperties :{ baseLineCapSize:0 },&#010 </pre>&#010 This "flattens" the baseLine so that only the center image is used. */
		paneContainer: VLayout /* AutoChild VLayout */;

		/** Tab button constructor if ${isc.DocUtils.linkForRef('attr:TabSet.useSimpleTabs')} is true. */
		simpleTabButtonConstructor: Class;

		/** Size in pixels of the icon for closing tabs, displayed when ${isc.DocUtils.linkForRef('attr:TabSet.canCloseTabs')} is true. */
		closeTabIconSize: number /* number */;

		/** A button control that allows tabs to be picked directly from a popup menu. The tabPicker&#010 is created automatically when needed and when <code>"tabPicker"</code> is specified in&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarControls')}. */
		tabPicker: ImgButton /* AutoChild ImgButton */;

		/** Should tabs in this tabSet show an icon allowing the user to dismiss the tab by&#010 clicking on it directly. May be overridden for individual tabs by setting &#010 ${isc.DocUtils.linkForRef('attr:Tab.canClose')}.&#010 <P>&#010 The URL for this icon's image will be derived from  ${isc.DocUtils.linkForRef('attr:TabSet.closeTabIcon')} by &#010 default, but may be overridden by explicitly specifying ${isc.DocUtils.linkForRef('attr:Tab.closeIcon')}.&#010 <P>&#010 <b>Note</b>: Currently, tabs can only show a single icon, so a closable tab will show&#010 the close icon only even if ${isc.DocUtils.linkForRef('attr:Tab.icon')} is set.  To work around this, add the icon&#010 as an HTML &lt;img&gt; tag to the ${isc.DocUtils.linkForRef('attr:Tab.title')} property, for example:&#010 &#010 <pre>&#010    title : "&lt;span&gt;" + isc.Canvas.imgHTML("path/to/icon.png") + " Tab Title&lt;/span&gt;"&#010 </pre>&#010 &#010  */
		canCloseTabs: boolean;

		/** Default properties for the "more" tab's pane.&#010 <p>&#010 Currently constructs a VLayout with a ${isc.DocUtils.linkForRef('class:NavigationBar')} and ${isc.DocUtils.linkForRef('class:TableView')}. */
		moreTabPaneDefaults: Canvas /* Canvas Properties */;

		/** If set, offsets the tab title editor further in from the right-hand edge of the tab, by&#010 the number of pixels set in this property.  Note that the editor is always offset to&#010 avoid overlapping the endcaps of the tab; this property is applied on top of that &#010 default offset. */
		titleEditorRightOffset: number /* Integer */;

		/** This property defines the number tab buttons that should be shown before&#010 automatically adding a "more" button to handle the remaining tabs. This&#010 property is only used when ${isc.DocUtils.linkForRef('attr:TabSet.showMoreTab')} is enabled. */
		moreTabCount: number;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker')} is true, this property governs the base URL for the picker&#010 button image, when ${isc.DocUtils.linkForRef('attr:TabSet.symmetricPickerButton')} is set to false&#010 <P>&#010 Note that if <code>symmetricPickerButton</code> is true, the ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonHSrc')} &#010 and ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonVSrc')} properties will be used instead.&#010 <P>&#010 To get the path to the image to display, this base URL will be modified as follows:&#010 <ul>&#010 <li>If appropriate a state suffix of <code>"Down"</code> or <code>"Disabled"</code> will be&#010     appended.</li>&#010 <li>The ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} for this tabSet will be appended.</li>&#010 </ul> */
		pickerButtonSrc: SCImgURL;

		/** Should the paneContainer for this tabset show ${isc.DocUtils.linkForRef('attr:Canvas.showEdges','edges')}. */
		showPaneContainerEdges: boolean;

		/** Properties to apply to the "more" tab created by this TabSet. */
		moreTabProperties: Tab /* Tab Properties */;

		/** If this TabSet is showing ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller','tab scroller buttons')}, and &#010 ${isc.DocUtils.linkForRef('attr:TabSet.symmetricScroller','symmetricScroller')} is true, this property governs the base&#010 URL for the tab bar back and forward scroller button images for vertical tab bars [IE for&#010 tab sets with ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} set to "left" or "right"].&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:TabSet.symmetricScroller','symmetricScroller')} is false, &#010 ${isc.DocUtils.linkForRef('attr:TabSet.scrollerSrc')} will be used instead.&#010 <P>&#010 To get the path to the image to display, this base URL will be modified as follows:&#010 <ul>&#010 <li>If appropriate a state suffix of <code>"Down"</code> or <code>"Disabled"</code> will be&#010     appended.</li>&#010 <li>A suffix of <code>"forward"</code> or <code>"back"</code> will be appended for the&#010     forward or backward scrolling button.</li>&#010 </ul>&#010 For example - if the scrollerVSrc is set to <code>"[SKIN]vscroll.gif"</code>, the image&#010 displayed for the back-scroller button on a tabSet with <code>tabBarPosition</code> set to&#010 "left" and <code>symmetricScroller</code> set to true would be one of &#010 <code>"[SKIN]vscroll_back.gif"</code>, <code>"[SKIN]vscroll_Down_back.gif"</code>,&#010 and <code>"[SKIN]vscroll_Disabled_back.gif"</code>.&#010 <P>&#010 Note that for best results the media should be sized to match the scroller button sizes, &#010 determined by ${isc.DocUtils.linkForRef('attr:TabSet.tabBarThickness')} and ${isc.DocUtils.linkForRef('attr:TabSet.scrollerButtonSize')}. */
		scrollerVSrc: SCImgURL;

		/** ${isc.DocUtils.linkForRef('object:Tab')} to be shown when ${isc.DocUtils.linkForRef('attr:TabSet.showMoreTab')} is enabled&#010 more than ${isc.DocUtils.linkForRef('attr:TabSet.moreTabCount')} tabs are provided. */
		moreTab: Tab /* AutoChild Tab */;

		/** The size of the tab picker button when ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch')} is <code>true</code>. */
		touchPickerButtonSize: number /* number */;

		/** If this TabSet is showing a ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker','tab picker button')}, this&#010 property determines whether the ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonHSrc')} and&#010 ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonVSrc')} media will be used for vertical and horizontal tab-bar&#010 picker buttons, or whether separate media should be used for each possible &#010 ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} based on the ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonSrc')}&#010 property  for this tabSet. */
		symmetricPickerButton: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:TabSet.showTabPicker')} is true, and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricPickerButton')} is &#010 set to true, this property governs the base URL for the picker&#010 button image, when displayed in a horizontal tab-bar [IE ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')} is&#010 set to <code>"top"</code> or <code>"bottom"</code>].&#010 <P>&#010 Note that if <code>symmetricPickerButton</code> is false, the ${isc.DocUtils.linkForRef('attr:TabSet.pickerButtonSrc')}&#010 property will be used instead.&#010 <P>&#010 This base URL will have a suffix of <code>"Down"</code> appended when the user holds the&#010 mouse down over the button, and <code>"Disabled"</code> if the tabset as a whole is &#010 disabled. */
		pickerButtonHSrc: SCImgURL;

		/** If this TabSet is showing ${isc.DocUtils.linkForRef('attr:TabSet.showTabScroller','tab scroller buttons')}, and &#010 ${isc.DocUtils.linkForRef('attr:TabSet.symmetricScroller','symmetricScroller')} is false, this property governs the base&#010 URL for the tab bar back and forward scroller button images.&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:TabSet.symmetricScroller','symmetricScroller')} is true, &#010 ${isc.DocUtils.linkForRef('attr:TabSet.scrollerHSrc')} and ${isc.DocUtils.linkForRef('attr:TabSet.scrollerVSrc')} will be used instead.&#010 <P>&#010 To get the path to the image to display, this base URL will be modified as follows:&#010 <ul>&#010 <li>If appropriate a state suffix of <code>"Down"</code> or <code>"Disabled"</code> will be&#010     appended.</li>&#010 <li>The ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition','tabBarPosition')} for this tabSet will be appended.</li>&#010 <li>A suffix of <code>"forward"</code> or <code>"back"</code> will be appended for the&#010     forward or backward scrolling button.</li>&#010 </ul>&#010 For example - if the scrollerSrc is set to <code>"[SKIN]scroll.gif"</code>, the image&#010 displayed for the back-scroller button on a tabSet with <code>tabBarPosition</code> set to&#010 "top" and <code>symmetricScroller</code> set to false would be one of &#010 <code>"[SKIN]scroll_top_back.gif"</code>, <code>"[SKIN]scroll_Down_top_back.gif"</code>,&#010 and <code>"[SKIN]scroll_Disabled_top_back.gif"</code>.&#010 <P>&#010 Note that for best results the media should be sized to match the scroller button sizes, &#010 determined by ${isc.DocUtils.linkForRef('attr:TabSet.tabBarThickness')} and ${isc.DocUtils.linkForRef('attr:TabSet.scrollerButtonSize')}. */
		scrollerSrc: SCImgURL;

		/** If this tabSet will ${isc.DocUtils.linkForRef('attr:TabSet.showPaneContainerEdges','show edges')} for the paneContainer,&#010 and ${isc.DocUtils.linkForRef('attr:TabSet.symmetricEdges')} is set to false, the <code>leftEdgeSizes</code>, &#010 <code>rightEdgeSizes</code>, <code>topEdgeSizes</code> and <code>bottomEdgeSizes</code> &#010 properties allow the sizes of edges for the paneContainer to be customized depending on&#010 the ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}.&#010 <P>&#010 The attribute should be specified an ${isc.DocUtils.linkForRef('type:EdgeSizes','edgeSizes map')}, specifying the&#010 desired edge sizes where for the appropriate ${isc.DocUtils.linkForRef('attr:TabSet.tabBarPosition')}. */
		topEdgeSizes: EdgeSizes;

	}


	export class TabSetStatic  extends CanvasStatic {
	}


	/**
	 * Base class for ${isc.DocUtils.linkForRef('class:Canvas')} and ${isc.DocUtils.linkForRef('class:DrawItem')}. 
	 */
	export class BaseWidget  {
	}


	export class BaseWidgetStatic  {
	}


	/**
	 * The Class object is root of the Isomorphic SmartClient inheritance tree -- it includes&#010 functionality for creating instances, adding methods and properties, getting prototypes,&#010 etc.<br><br>&#010&#010 To add functionality to ALL classes, add them to Class.<br><br>&#010&#010 To create a Class, call <code>ClassFactory.defineClass("MyClass", "MySuperClass")</code>&#010 <P>&#010 <code>defineClass</code> will return the created class, and make it available as&#010 <code>isc.MyClass</code>, and as the global variable <code>MyClass</code> if not in&#010 ${isc.DocUtils.linkForRef('class:isc','portal mode')}.&#010 <P>&#010 You can then:&#010 <UL>&#010  <LI>add class-level (static) properties and methods to the class:&#010    <code>MyClass.addClassProperties()</code> &#010   these methods and properties are accessed through the Class variable itself, eg:&#010    <code>MyClass.someStaticMethod()</code> or <code>MyClass.someStaticProperty</code>&#010&#010  <LI>add default instance properties and methods to the class:&#010    <code>MyClass.addProperties()</code>&#010   these methods and properties are accessed through a class instance, eg:&#010    <code>var myInstance = MyClass.create();</code>&#010    <code>myInstance.someInstanceMethod()</code>&#010&#010  <LI>create new instances of this class:&#010    <code>var myInstance = MyClass.create()</code>&#010 </UL>&#010 NOTE: as a convention, all class names begin with a capital letter and all instances begin&#010 with a lower case letter. 
	 */
	export class Class  {
	}


	export class ClassStatic  {
	}


// Properties used for passing into .create() or anything else that takes a ListGrid Properties argument.
	export class ListGridProperties  {
		autoFetchDisplayMap?: Boolean; // Flags=IRW
		clipHeaderTitles?: Boolean; // Flags=IRA
		hiliteCanReplaceValue?: boolean; // Flags=IR
		filterByCell?: boolean; // Flags=IRWA
		autoFitExtraRecords?: number; // Flags=IRW
		showGroupSummaryInHeader?: Boolean; // Flags=IRW
		waitForSave?: Boolean; // Flags=IRWA
		sorterConstructor?: Class; // Flags=IR
		collapseGroupOnRowClick?: boolean; // Flags=IR
		alternateFieldStyles?: boolean; // Flags=IRW
		stopOnErrors?: Boolean; // Flags=IRWA
		operatorIcon?: FormItemIcon /* MultiAutoChild FormItemIcon */; // Flags=I
		clearSortFieldText?: string; // Flags=IRW
		missingSummaryFieldValue?: String; // Flags=IRW
		removeFieldProperties?: ListGridField /* ListGridField properties */; // Flags=IR
		hoverStyle?: CSSStyleName; // Flags=IRWA
		originBaseStyle?: CSSStyleName; // Flags=IRW
		showHeaderSpanTitlesInSortEditor?: Boolean; // Flags=IRW
		fieldPickerShowSampleValues?: Boolean; // Flags=IR
		showSelectionCanvas?: Boolean; // Flags=IRWA
		rowSpanSelectionMode?: RowSpanSelectionMode; // Flags=IR
		selectionAppearance?: SelectionAppearance; // Flags=IRW
		wrapHeaderSpanTitles?: Boolean; // Flags=IR
		escapeKeyEditAction?: EscapeKeyEditAction; // Flags=IRW
		includeHilitesInSummaryFields?: boolean; // Flags=IRWA
		allowFilterOperators?: Boolean; // Flags=IR
		valueIconSize?: number; // Flags=IRW
		clearAllSortingText?: string; // Flags=IRW
		booleanPartialImage?: SCImgURL; // Flags=IRWA
		headerButtonProperties?: Button /* Button Properties */; // Flags=IRA
		booleanBaseStyle?: CSSStyleName; // Flags=IRA
		groupTitleColumnProperties?: ListGridField /* ListGridField properties */; // Flags=IR
		showSelectedRollUnderCanvas?: Boolean; // Flags=IRWA
		applyFormulaAfterSummary?: Boolean; // Flags=IRW
		dataProperties?: ResultSet; // Flags=IRWA
		canMultiGroup?: boolean; // Flags=IRW
		invalidSummaryValue?: string; // Flags=IRWA
		alwaysShowEditors?: boolean; // Flags=IR
		dragTrackerMode?: DragTrackerMode; // Flags=IRA
		checkboxFieldImageWidth?: number /* integer */; // Flags=IR
		canEdit?: Boolean; // Flags=IRW
		dataFetchMode?: FetchMode; // Flags=IR
		hiliteIcons?: String[] /* Array of String */; // Flags=IR
		sortDescendingImage?: ImgProperties /* ImgProperties */; // Flags=IRWA
		groupTitleField?: String; // Flags=IR
		groupSummaryRecordProperty?: string; // Flags=IRW
		recordCanSelectProperty?: String; // Flags=IRA
		showRecordComponents?: boolean; // Flags=IRWA
		childExpansionMode?: ExpansionMode; // Flags=IRWA
		dateInputFormat?: DateInputFormat; // Flags=IRWA
		scrollToCellXPosition?: Alignment; // Flags=IRW
		autoFitMaxRecords?: number; // Flags=IRW
		showRollUnderCanvas?: Boolean; // Flags=IRWA
		groupByMaxRecords?: number /* number */; // Flags=IRW
		enforceVClipping?: Boolean; // Flags=IRW
		applyRowNumberStyle?: boolean; // Flags=IRWA
		virtualScrolling?: boolean; // Flags=IRA
		sortField?: String | int; // Flags=IR
		canExpandRecords?: Boolean; // Flags=IRWA
		exportRawValues?: Boolean; // Flags=IR
		drawAllMaxCells?: number /* number */; // Flags=IRWA
		recordCustomStyleProperty?: String; // Flags=IRW
		titleField?: string; // Flags=IRW
		groupByFieldSummaries?: String[] /* Array of String */; // Flags=IRWA
		fastCellUpdates?: Boolean; // Flags=I
		confirmDiscardEditsMessage?: string; // Flags=IRW
		groupTitleColumnDefaults?: ListGridField /* ListGridField properties */; // Flags=IR
		canFreezeFields?: boolean; // Flags=IRW
		data?: any /* List of ListGridRecord */; // Flags=IRW
		sorterButtonTitle?: string; // Flags=IR
		datetimeFormatter?: DateDisplayFormat; // Flags=IRW
		animateFolderSpeed?: number; // Flags=IRW
		recordDetailDSProperty?: String; // Flags=IRWA
		booleanTrueImage?: SCImgURL; // Flags=IRWA
		reverseRTLAlign?: Boolean; // Flags=IRW
		reselectOnUpdate?: boolean; // Flags=IRA
		loadingMessage?: string; // Flags=IR
		headerBarStyle?: CSSStyleName; // Flags=IR
		showSortNumerals?: boolean; // Flags=IRWA
		removeIcon?: SCImgURL; // Flags=IR
		editFailedBaseStyle?: CSSStyleName; // Flags=IRWA
		canEditHilites?: boolean; // Flags=IRW
		autoFitMaxHeight?: number; // Flags=IRW
		errorIconWidth?: number /* integer */; // Flags=IRW
		frozenBaseStyle?: string; // Flags=IRW
		defaultTimeFieldWidth?: number /* Integer */; // Flags=IRW
		useCopyPasteShortcuts?: Boolean; // Flags=IRW
		recordEditProperty?: string; // Flags=IRWA
		freezeOnLeftText?: string; // Flags=IRW
		autoFitWidthApproach?: AutoFitWidthApproach; // Flags=IRW
		recordBaseStyleProperty?: string; // Flags=IRWA
		overflow?: Overflow; // Flags=IRW
		printBooleanBaseStyle?: CSSStyleName; // Flags=IRA
		scrollToCellYPosition?: VerticalAlignment; // Flags=IRW
		generateClickOnSpace?: Boolean; // Flags=IRWA
		showHeaderMenuButton?: Boolean; // Flags=IR
		summaryRowDataSource?: DataSource; // Flags=IRA
		longTextEditorType?: string; // Flags=IRW
		exportFieldWidths?: boolean; // Flags=IRW
		headerMenuButtonIconWidth?: number; // Flags=IRA
		autoConfirmSaveEdits?: Boolean; // Flags=IRW
		baseStyle?: CSSStyleName; // Flags=IR
		headerMenuButtonHeight?: measure; // Flags=IRA
		headerMenuButtonIconHeight?: number; // Flags=IRA
		headerSpanHeight?: number /* integer */; // Flags=IR
		recordComponentPoolingMode?: RecordComponentPoolingMode; // Flags=IRWA
		dragTrackerStyle?: CSSStyleName; // Flags=IRW
		fieldPickerFieldProperties?: String[] /* Array of String */; // Flags=IR
		gridComponents?: ListGridComponent | any[] /* Array of ListGridComponent | Array of any */; // Flags=IR
		confirmCancelEditing?: Boolean; // Flags=IRW
		hiliteIconPosition?: HiliteIconPosition; // Flags=IR
		groupSortDirection?: SortDirection; // Flags=IRW
		autoSizeHeaderSpans?: Boolean; // Flags=IR
		sortEditorSpanTitleSeparator?: String; // Flags=IRW
		sorterDefaults?: object; // Flags=IRA
		drawAheadRatio?: number /* float */; // Flags=IRW
		initialCriteria?: Criteria; // Flags=IR
		headerSpan?: StatefulCanvas /* MultiAutoChild StatefulCanvas */; // Flags=IR
		printWrapCells?: Boolean; // Flags=IRW
		hiliteIconLeftPadding?: number; // Flags=IRW
		selectHeaderOnSort?: Boolean; // Flags=IRW
		canRemoveRecords?: Boolean; // Flags=IR
		checkboxFieldPartialImage?: SCImgURL; // Flags=IRWA
		includeInSummaryProperty?: string; // Flags=IRW
		hiliteIconWidth?: number; // Flags=IRW
		deferRemoval?: boolean; // Flags=IR
		showSelectedStyle?: Boolean; // Flags=IRW
		backgroundComponent?: Canvas /* MultiAutoChild Canvas */; // Flags=IR
		canSort?: Boolean; // Flags=IRW
		rowNumberStyle?: CSSStyleName; // Flags=IRWA
		canDropInEmptyArea?: Boolean; // Flags=IRW
		valueIconHeight?: number; // Flags=IRW
		canAddSummaryFields?: boolean; // Flags=IRW
		errorIconHeight?: number /* integer */; // Flags=IRW
		showRecordComponentsByCell?: boolean; // Flags=IRWA
		headerTitleStyle?: CSSStyleName; // Flags=IR
		formulaBuilderSpanTitleSeparator?: String; // Flags=IRW
		booleanImageHeight?: number; // Flags=IRWA
		warnOnRemovalMessage?: string; // Flags=IRW
		generateClickOnEnter?: Boolean; // Flags=IRWA
		cellPadding?: number; // Flags=IRW
		freezeFieldText?: HTMLString; // Flags=IRWA
		headerShadowVOffset?: Number; // Flags=IRA
		timeFormatter?: TimeDisplayFormat; // Flags=IRW
		fixedFieldWidths?: Boolean; // Flags=IRWA
		screenReaderCellSeparator?: HTMLString; // Flags=IRA
		shrinkForFreeze?: Boolean; // Flags=IRWA
		fieldState?: String; // Flags=IRW
		rowNumberField?: ListGridField /* AutoChild ListGridField */; // Flags=IRWA
		selectOnEdit?: Boolean; // Flags=IRWA
		exportAlternateRowBGColor?: CSSColor; // Flags=IR
		expansionMode?: ExpansionMode; // Flags=IRWA
		hiliteRowOnFocus?: Boolean; // Flags=IRW
		printCheckboxFieldPartialImage?: SCImgURL; // Flags=IRWA
		checkboxFieldImageHeight?: number /* integer */; // Flags=IR
		canResizeFields?: Boolean; // Flags=IRW
		alwaysShowOperatorIcon?: Boolean; // Flags=IR
		showHeader?: Boolean; // Flags=IRW
		scrollWheelRedrawDelay?: number /* Integer */; // Flags=IRW
		selectionProperty?: string; // Flags=IRA
		showCellContextMenus?: Boolean; // Flags=IRW
		useAdvancedFieldPicker?: Boolean; // Flags=IR
		showFilterEditor?: boolean; // Flags=IRW
		canSelectCells?: Boolean; // Flags=IR
		rowEndEditAction?: RowEndEditAction; // Flags=IRW
		showGroupTitleColumn?: Boolean; // Flags=IR
		detailField?: String; // Flags=IRWA
		animateSelectionUnder?: Boolean; // Flags=IRWA
		minFieldWidth?: number /* number */; // Flags=IRW
		canEditTitles?: boolean; // Flags=IRW
		neverValidate?: boolean; // Flags=IRWA
		isSeparatorProperty?: string; // Flags=IRW
		printMaxRows?: number /* number */; // Flags=IRWA
		exportHeaderHeights?: boolean; // Flags=IRW
		showSelectedRollOverCanvas?: Boolean; // Flags=IRWA
		sortNumeralStyle?: CSSStyleName; // Flags=IRWA
		multiSortDialogDefaults?: MultiSortDialog /* MultiSortDialog properties */; // Flags=IR
		fieldPickerWindow?: FieldPickerWindow /* AutoChild FieldPickerWindow */; // Flags=IR
		resizeFieldsInRealTime?: boolean; // Flags=IRWA
		showAsynchGroupingPrompt?: Boolean; // Flags=IR
		loadingDataMessageStyle?: CSSStyleName; // Flags=IRW
		canPickFields?: Boolean; // Flags=IRW
		detailDS?: String; // Flags=IRWA
		unremoveIcon?: SCImgURL; // Flags=IR
		headerHoverStyle?: CSSStyleName; // Flags=IRW
		groupStartOpen?: GroupStartOpen | Array; // Flags=IRW
		groupNodeStyle?: String; // Flags=IRW
		allowRowSpanning?: Boolean; // Flags=IR
		useAllDataSourceFields?: boolean; // Flags=IRW
		editOnFocus?: boolean; // Flags=IRWA
		summaryRowHeight?: number /* number */; // Flags=IR
		sortFieldAscendingText?: string; // Flags=IRW
		sortFieldNum?: number; // Flags=IRW
		canTabToHeader?: boolean; // Flags=IR
		recordDropAppearance?: RecordDropAppearance; // Flags=IRW
		editEvent?: ListGridEditEvent; // Flags=IRW
		hiliteReplaceValueFieldTitle?: string; // Flags=IR
		multiSortDialogProperties?: MultiSortDialog /* MultiSortDialog properties */; // Flags=IR
		expansionEditorSaveDialogPrompt?: string; // Flags=IR
		autoFetchData?: boolean; // Flags=IR
		editPendingCSSText?: string; // Flags=IRWA
		filterButtonPrompt?: String; // Flags=IR
		exportFieldAlignments?: boolean; // Flags=IRW
		animateRemoveTime?: number; // Flags=IRW
		booleanFalseImage?: SCImgURL; // Flags=IRWA
		recordComponentPosition?: EmbeddedPosition; // Flags=IRW
		modalEditing?: boolean; // Flags=IRWA
		animateFolders?: Boolean; // Flags=IRW
		autoFitMaxWidth?: Integer | String; // Flags=IRW
		exportDefaultBGColor?: CSSColor; // Flags=IR
		headerSpanConstructor?: SCClassName; // Flags=IR
		autoFitDateFields?: AutoFitWidthApproach; // Flags=IRW
		autoComplete?: AutoComplete; // Flags=IRW
		useCellRollOvers?: Boolean; // Flags=IRW
		animateRemoveSpeed?: number; // Flags=IRW
		showClippedValuesOnHover?: Boolean; // Flags=IRA
		expansionFieldImageWidth?: number /* integer */; // Flags=IR
		emptyCellValue?: HTMLString; // Flags=IRW
		tallBaseStyle?: CSSStyleName; // Flags=IR
		showHilitesInGroupSummary?: boolean; // Flags=IRW
		headerSpanVAlign?: vAlign; // Flags=IR
		canMultiSort?: Boolean; // Flags=IRW
		expansionComponentPoolingMode?: ExpansionComponentPoolingMode; // Flags=IRWA
		valueIconRightPadding?: number; // Flags=IRW
		freezeOnRightText?: string; // Flags=IRW
		filterButtonProperties?: Button /* Button properties */; // Flags=IR
		autoFitMaxColumns?: number; // Flags=IRW
		headerHoverWrap?: Boolean; // Flags=IRW
		autoFitTimeFields?: AutoFitWidthApproach; // Flags=IRW
		exportWrapHeaderTitles?: boolean; // Flags=IRW
		showHeaderContextMenu?: Boolean; // Flags=IR
		rowNumberStart?: number; // Flags=IRWA
		saveLocally?: boolean; // Flags=IRA
		groupNodeBaseStyle?: String; // Flags=IRW
		frozenHeaderTitleStyle?: CSSStyleName; // Flags=IR
		maxExpandedRecords?: number /* integer */; // Flags=IRWA
		canAcceptDroppedRecords?: Boolean; // Flags=IRW
		animateSelection?: Boolean; // Flags=IRWA
		removeFieldTitle?: String; // Flags=IRWA
		alternateFieldFrequency?: number; // Flags=IRW
		showAllRecords?: Boolean; // Flags=IRW
		editByCell?: boolean; // Flags=IRW
		canDragSelectText?: Boolean; // Flags=IRW
		headerHoverVAlign?: VerticalAlignment; // Flags=IRW
		emptyMessage?: HTMLString; // Flags=IRW
		headerMenuButtonConstructor?: className; // Flags=IRA
		defaultFilterOperatorSuffix?: String; // Flags=IR
		headerHoverAlign?: Alignment; // Flags=IRW
		showGridSummary?: Boolean; // Flags=IRW
		filterOnKeypress?: boolean; // Flags=IRWA
		sortDirection?: SortDirection; // Flags=IRW
		showHeaderSpanTitlesInHiliteEditor?: Boolean; // Flags=IRW
		headerButtonConstructor?: Class; // Flags=IR
		canSelectGroups?: boolean; // Flags=IRW
		configureGroupingText?: string; // Flags=IRW
		fields?: ListGridField[] /* Array of ListGridField */; // Flags=IRW
		gridSummaryRecordProperty?: string; // Flags=IRW
		animateFolderMaxRows?: number /* integer */; // Flags=IRW
		printAutoFit?: Boolean; // Flags=IRW
		useRowSpanStyling?: boolean; // Flags=IR
		wrapHeaderTitles?: Boolean; // Flags=IR
		expansionFieldFalseImage?: SCImgURL; // Flags=IRWA
		canReorderFields?: Boolean; // Flags=IRW
		rowSpanEditMode?: RowSpanEditMode; // Flags=IRWA
		groupByField?: String | String[] /* String | Array of String */; // Flags=IR
		showErrorIcons?: boolean; // Flags=IRW
		bodyOverflow?: Overflow; // Flags=IRWA
		sortFieldDescendingText?: string; // Flags=IRW
		animateRollOver?: Boolean; // Flags=IRWA
		saveByCell?: boolean; // Flags=IRW
		leaveScrollbarGap?: Boolean; // Flags=IRW
		editPendingBaseStyle?: CSSStyleName; // Flags=IRA
		showTreeColumnPicker?: Boolean; // Flags=IR
		headerHoverOpacity?: number /* Integer */; // Flags=IRW
		printBooleanPartialImage?: SCImgURL; // Flags=IRWA
		checkboxFieldTrueImage?: SCImgURL; // Flags=IRWA
		enumCriteriaAsInitialValues?: Boolean; // Flags=IR
		headerHeight?: number; // Flags=IRW
		groupIndentSize?: Number; // Flags=IRW
		validateOnChange?: boolean; // Flags=IRW
		checkboxField?: ListGridField /* AutoChild ListGridField */; // Flags=IR
		canPickOmittedFields?: Boolean; // Flags=IR
		autoSaveEdits?: Boolean; // Flags=IRWA
		filterEditorHeight?: number; // Flags=IRW
		chartType?: ChartType; // Flags=IRW
		screenReaderRowSeparator?: HTMLString; // Flags=IRA
		animateRollUnder?: Boolean; // Flags=IRWA
		headerSpans?: HeaderSpan[] /* Array of HeaderSpan */; // Flags=IRW
		filterUsingText?: String; // Flags=IR
		animateFolderTime?: number; // Flags=IRW
		showDetailFields?: Boolean; // Flags=IR
		showBackgroundComponents?: Boolean; // Flags=IRW
		validateByCell?: boolean; // Flags=IRW
		defaultEditableDateFieldWidth?: number /* Integer */; // Flags=IRW
		poolComponentsPerColumn?: Boolean; // Flags=IRW
		locateRowsBy?: string; // Flags=IRW
		selectedState?: ListGridSelectedState; // Flags=IRW
		headerShadowSoftness?: Number; // Flags=IRA
		editOnF2Keypress?: Boolean; // Flags=IRWA
		quickDrawAheadRatio?: number /* float */; // Flags=IRW
		recordCanRemoveProperty?: String; // Flags=IRA
		alternateRecordFrequency?: number; // Flags=IRW
		filterLocalData?: boolean; // Flags=IRA
		showEmptyMessage?: Boolean; // Flags=IRW
		selectOnExpandRecord?: boolean; // Flags=IRW
		nullGroupTitle?: String; // Flags=IRW
		showHeaderSpanTitlesInFormulaBuilder?: Boolean; // Flags=IRW
		showHoverComponents?: Boolean; // Flags=IRWA
		checkboxFieldFalseImage?: SCImgURL; // Flags=IRWA
		dataPageSize?: number /* integer */; // Flags=IRW
		canEditFieldAttribute?: string; // Flags=IRA
		instantScrollTrackRedraw?: Boolean; // Flags=IRW
		bodyBackgroundColor?: string; // Flags=IRW
		advancedFieldPickerThreshold?: number /* number */; // Flags=IR
		summaryRowStyle?: CSSStyleName; // Flags=IRWA
		defaultDateFieldWidth?: number /* Integer */; // Flags=IRW
		showClippedHeaderTitlesOnHover?: boolean; // Flags=IRA
		expansionFieldImageHeight?: number /* integer */; // Flags=IR
		expansionCanEdit?: Boolean; // Flags=IRWA
		unspannedHeaderVAlign?: vAlign; // Flags=IR
		longTextEditorThreshold?: number /* number */; // Flags=IRW
		saveRequestProperties?: DSRequest /* DSRequest Properties */; // Flags=IRWA
		canExpandRecordProperty?: string; // Flags=IR
		unfreezeFieldText?: HTMLString; // Flags=IRWA
		selectionType?: SelectionStyle; // Flags=IRW
		groupState?: ListGridGroupState; // Flags=IRW
		hiliteHTMLAfterFormat?: boolean; // Flags=IR
		normalCellHeight?: number; // Flags=IRWA
		bodyStyleName?: CSSStyleName; // Flags=IRW
		showPartialSelection?: Boolean; // Flags=IRW
		editFailedCSSText?: string; // Flags=IRWA
		expansionField?: ListGridField /* AutoChild ListGridField */; // Flags=IRWA
		editProxyConstructor?: SCClassName; // Flags=IR
		sortState?: ListGridSortState; // Flags=IRW
		headerMenuButtonIcon?: URL; // Flags=IRA
		autoFetchTextMatchStyle?: TextMatchStyle; // Flags=IR
		autoFitIconFields?: AutoFitIconFieldType; // Flags=IRW
		confirmDiscardEdits?: Boolean; // Flags=IRW
		frozenHeaderBaseStyle?: CSSStyleName; // Flags=IR
		canDragRecordsOut?: Boolean; // Flags=IRW
		headerHoverHeight?: number /* Integer */; // Flags=IRW
		removeIconSize?: Number; // Flags=IRW
		touchScrollRedrawDelay?: number /* Integer */; // Flags=IRW
		valueIconWidth?: number; // Flags=IRW
		canAutoFitFields?: Boolean; // Flags=IRW
		asynchGroupingPrompt?: HTMLString; // Flags=IR
		wrapCells?: Boolean; // Flags=IRWA
		printHeaderStyle?: CSSStyleName; // Flags=IRW
		showHeaderShadow?: Boolean; // Flags=IRW
		listEndEditAction?: RowEndEditAction; // Flags=IRW
		normalBaseStyle?: CSSStyleName; // Flags=IR
		printCheckboxFieldTrueImage?: SCImgURL; // Flags=IRWA
		groupLeadingIndent?: Number; // Flags=IRW
		linkTextProperty?: string; // Flags=IRW
		discardEditsOnHideField?: boolean; // Flags=IRW
		arrowKeyAction?: string; // Flags=IRWA
		cancelEditingConfirmationMessage?: string; // Flags=IRW
		checkboxFieldHSpace?: number /* number */; // Flags=IR
		canFocusInEmptyGrid?: boolean; // Flags=IRA
		fixedRecordHeights?: Boolean; // Flags=IRWA
		canHover?: boolean; // Flags=IRW
		chartConstructor?: Classname; // Flags=IR
		autoFitAllText?: string; // Flags=IRW
		headerBackgroundColor?: Color; // Flags=IRW
		headerAutoFitEvent?: AutoFitEvent; // Flags=IR
		alternateRecordSuffix?: String; // Flags=IRW
		canAddFormulaFields?: boolean; // Flags=IRW
		autoFitFieldWidths?: Boolean; // Flags=IR
		dateFormatter?: DateDisplayFormat; // Flags=IRW
		hiliteEditorSpanTitleSeparator?: String; // Flags=IRW
		headerShadowColor?: CSSColor; // Flags=IRA
		autoFitHeaderHeights?: boolean; // Flags=IR
		warnOnRemoval?: Boolean; // Flags=IRW
		printBaseStyle?: CSSStyleName; // Flags=IRW
		useRemoteValidators?: boolean; // Flags=IRWA
		removedCSSText?: string; // Flags=IRWA
		fetchDelay?: number; // Flags=IRWA
		autoFitClipFields?: String[] /* Array of String */; // Flags=IR
		recordSummaryBaseStyle?: CSSStyleName; // Flags=IRWA
		ungroupText?: string; // Flags=IRW
		showSortArrow?: SortArrow; // Flags=IRW
		badFormulaResultValue?: String; // Flags=IRW
		expansionFieldTrueImage?: SCImgURL; // Flags=IRWA
		alternateBodyStyleName?: CSSStyleName; // Flags=IRWA
		imageSize?: number; // Flags=IRW
		hiliteIconSize?: number; // Flags=IRW
		dataFetchDelay?: number /* integer */; // Flags=IRWA
		generateDoubleClickOnEnter?: Boolean; // Flags=IRWA
		warnOnUnmappedValueFieldChange?: Boolean; // Flags=IRWA
		groupByText?: HTMLString; // Flags=IRWA
		showCollapsedGroupSummary?: Boolean; // Flags=IRW
		printCheckboxFieldFalseImage?: SCImgURL; // Flags=IRWA
		autoFitData?: Autofit; // Flags=IRW
		autoFitFieldText?: string; // Flags=IRW
		configureSortText?: string; // Flags=IRW
		sortAscendingImage?: ImgProperties /* ImgProperties */; // Flags=IRWA
		loadingDataMessage?: HTMLString; // Flags=IRW
		clearFilterText?: string; // Flags=IRW
		generateDoubleClickOnSpace?: Boolean; // Flags=IRWA
		recordComponentHeight?: number /* Integer */; // Flags=IRWA
		scrollRedrawDelay?: number /* number */; // Flags=IRW
		recordEnabledProperty?: string; // Flags=IR
		filterEditorProperties?: RecordEditor /* RecordEditor properties */; // Flags=IR
		headerShadowHOffset?: Number; // Flags=IRA
		allowFilterExpressions?: boolean; // Flags=IR
		defaultFields?: ListGridField[] /* Array of ListGridField Properties */ /* Array of ListGridField Properties */; // Flags=IRA
		headerBaseStyle?: CSSStyleName; // Flags=IR
		skinImgDir?: URL; // Flags=IRWA
		showSelectionUnderCanvas?: Boolean; // Flags=IRWA
		autoFitFieldsFillViewport?: Boolean; // Flags=IR
		canSelectAll?: boolean; // Flags=IRW
		hideEmptySummaryRow?: Boolean; // Flags=IRW
		trackerImage?: ImgProperties /* ImgProperties */; // Flags=IRWA
		styleName?: CSSStyleName; // Flags=IRW
		fieldVisibilitySubmenuTitle?: string; // Flags=IRW
		canDragSelect?: Boolean; // Flags=IRW
		headerHoverWidth?: number /* Integer */; // Flags=IRW
		hiliteIconRightPadding?: number; // Flags=IRW
		groupSummaryStyle?: CSSStyleName; // Flags=IR
		cellHeight?: number; // Flags=IRW
		sortBinaryByFileName?: boolean; // Flags=IRW
		printBooleanFalseImage?: SCImgURL; // Flags=IRWA
		discardEditsSaveButtonTitle?: string; // Flags=IRW
		iconPadding?: number /* integer */; // Flags=IR
		canGroupBy?: Boolean; // Flags=IRW
		reselectOnUpdateNotifications?: SelectionNotificationType; // Flags=IRWA
		hoverMode?: HoverMode; // Flags=IRWA
		dragDataAction?: DragDataAction; // Flags=IRW
		summaryRowCriteria?: Criteria; // Flags=IRWA
		errorIconSrc?: SCImgURL; // Flags=IRW
		maxExpandedRecordsPrompt?: HTMLString; // Flags=IR
		groupByAsyncThreshold?: number /* number */; // Flags=IRW
		printBooleanTrueImage?: SCImgURL; // Flags=IRWA
		animateRemoveRecord?: Boolean; // Flags=IRW
		navigateOnTab?: boolean; // Flags=IRW
		summaryRowFetchRequestProperties?: DSRequest /* DSRequest Properties */; // Flags=IRWA
		locateColumnsBy?: string; // Flags=IRW
		headerButtonDefaults?: Button /* Button Properties */; // Flags=IRA
		showHover?: Boolean; // Flags=IRW
		canCollapseGroup?: Boolean; // Flags=IR
		exportWidthScale?: number /* float */; // Flags=IRW
		offlineMessageStyle?: CSSStyleName; // Flags=IRW
		expansionEditorShowSaveDialog?: boolean; // Flags=IR
		sorterProperties?: Button /* Button Properties */; // Flags=IRA
		removeFieldDefaults?: ListGridField /* ListGridField properties */; // Flags=IR
		showRowNumbers?: boolean; // Flags=IRWA
		autoFitExpandField?: String; // Flags=IR
		leaveHeaderMenuButtonSpace?: boolean; // Flags=IWA
		groupIcon?: SCImgURL; // Flags=IRW
		singleCellValueProperty?: string; // Flags=IRW
		initialSort?: SortSpecifier[] /* Array of SortSpecifier */; // Flags=IR
		canReorderRecords?: Boolean; // Flags=IRW
		booleanImageWidth?: number; // Flags=IRWA
		canExpandMultipleRecords?: Boolean; // Flags=IRWA
		valueIconLeftPadding?: number; // Flags=IRW
		headerMenuButtonWidth?: number; // Flags=IRA
		groupIconSize?: Number; // Flags=IRW
		animateFolderEffect?: AnimationAcceleration; // Flags=IRW
		viewState?: String; // Flags=IRW
		dataSource?: DataSource | ID /* DataSource or ID */; // Flags=IRW
		sortByGroupFirst?: Boolean; // Flags=IRW
		showRollOver?: Boolean; // Flags=IRW
		showRollOverCanvas?: Boolean; // Flags=IRWA
		hiliteIconHeight?: number; // Flags=IRW
		showAllColumns?: Boolean; // Flags=IR
		showGroupSummary?: Boolean; // Flags=IRW
		enterKeyEditAction?: EnterKeyEditAction; // Flags=IRW
		alternateRecordStyles?: Boolean; // Flags=IRW
		emptyMessageStyle?: CSSStyleName; // Flags=IRW
	}


	/**
	 * A ListGrid is a ${isc.DocUtils.linkForRef('interface:DataBoundComponent')} that displays a list of objects in a grid, where&#010 each row represents one object and each cell in the row represents one property. 
	 */
	export class ListGrid  extends VLayout {
		/** If true, for fields where ${isc.DocUtils.linkForRef('attr:ListGridField.optionDataSource')} is specified,&#010 a valueMap will be automatically created by making a ${isc.DocUtils.linkForRef('method:DataSource.fetchData')} call&#010 against the specified dataSource and extracting a valueMap from the returned records&#010 based on the displayField and valueField.&#010 <P>&#010 If set to false, valueMaps will not be automatically fetched.  In this case, setting&#010 field.optionDataSource is effectively a shortcut for setting optionDataSource on&#010 the editor via ${isc.DocUtils.linkForRef('attr:ListGridField.editorProperties')}.&#010 <P>&#010 Can also be disabled on a per-field basis with ${isc.DocUtils.linkForRef('attr:ListGridField.autoFetchDisplayMap')}. */
		autoFetchDisplayMap: Boolean;

		/** Whether the ListGrid should manage the clipping of titles of header buttons, showing&#010 ellipses if the title is clipped, and potentially showing the full title&#010 on ${isc.DocUtils.linkForRef('attr:ListGrid.showClippedHeaderTitlesOnHover','hover')}.&#010 <p>&#010 In some cases this may be preferable to the button component's default clipping behavior&#010 because if a ${isc.DocUtils.linkForRef('attr:ListGrid.showSortArrow','sort arrow')} or sort numeral is displayed for&#010 a header, then the button's default clipping behavior may clip the sort arrow/numeral&#010 whereas ListGrid-managed title clipping utilizes special HTML which keeps the sort&#010 arrow/numeral visible.&#010 <p>&#010 This feature is automatically enabled if supported by the browser. The only supported&#010 use of this attribute is to <em>disable</em> the feature by setting clipHeaderTitles&#010 to false.&#010 <P>&#010 Note that this feature is incompatible with ${isc.DocUtils.linkForRef('attr:ListGridField.wrap')}, and will&#010 automatically be disabled for wrapping fields. */
		clipHeaderTitles: Boolean;

		/** If set, end users can create advanced hiliting rules that will use the&#010 ${isc.DocUtils.linkForRef('attr:Hilite.replacementValue')} feature to cause values in hilited cells&#010 to be replaced with a user-entered value.  For example, a user could create a hilite rule&#010 that replaces numeric values ranging from 0.5 to 1.0 with the text "LOW".&#010 <p>&#010 Specifically, when the "Add Advanced Rule" button is pressed and&#010 <code>hiliteCanReplaceValue</code> is true, the user will see a text entry field titled&#010 "Replace value with" (${isc.DocUtils.linkForRef('attr:ListGrid.hiliteReplaceValueFieldTitle')}) and if they enter a value, that&#010 value will appear in the grid cell in lieu of the cell's original value. */
		hiliteCanReplaceValue: boolean;

		/** If we're showing the filterEditor (this.showFilterEditor is true), this property&#010 determines whether this list should be filtered every time the user puts focus in&#010 a different field in the filter editor. */
		filterByCell: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')} is set to <code>"vertical"</code> or <code>"both"</code>,&#010 setting this property will cause the ListGrid body to size large enough to accomodate&#010 the actual data and also leave this many extra rows' worth of blank space below the last&#010 record. If a maximum size is specified via ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxHeight')} or&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxRecords')}, it will still be respected. Once the data set&#010 is large enough to fill or exceed that space, this property no longer has an effect. */
		autoFitExtraRecords: number;

		/** If this grid is ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','grouped')}, and ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary')}&#010 is true, setting this property causes field summary values for each group to be displayed&#010 directly in the group header node, rather than showing up at the bottom of each&#010 expanded group.&#010 <P>&#010 Note that this means the group header node will be showing multiple field values&#010 rather than the default display of a single cell spanning all columns containing the&#010 group title. Developers may specify an explicit ${isc.DocUtils.linkForRef('attr:ListGrid.groupTitleField')}, or&#010 rely on the automatically generated ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupTitleColumn','groupTitleColumn')}&#010 to have group titles be visible as well as the summary values.&#010 <P>&#010 Also note that multi-line group summaries are not supported when showing&#010 the group summary in the group header. If multiple&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.summaryFunction','field summary functions')} are defined for some field&#010 only the first will be displayed when this property is set to true. */
		showGroupSummaryInHeader: Boolean;

		/** If this is an editable listGrid, this property determines whether the user will be&#010 able to dismiss the edit form, or navigate to another cell while the save is in&#010 process (before the asynchronous server response returns). */
		waitForSave: Boolean;

		/** Widget class for the corner sort button, if showing.  This button displays the current&#010 sort direction of the primary sort field (either the only sorted field or the first in a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canMultiSort','multi-sort')} grid) and reverses the direction of that field&#010 when clicked.  For consistent appearance, this&#010 is usually set to match ${isc.DocUtils.linkForRef('attr:ListGrid.headerButtonConstructor')} */
		sorterConstructor: Class;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canCollapseGroup')} is true, will a click anywhere on the group row&#010 toggle the group's expanded state? If false, the user must click the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.groupIcon')} directly to toggle the group. */
		collapseGroupOnRowClick: boolean;

		/** Whether alternating columns (or blocks of columns, depending&#010 on ${isc.DocUtils.linkForRef('attr:GridRenderer.alternateColumnFrequency')}) should be drawn in alternating styles,&#010 in order to create a vertical "ledger" effect for easier reading.&#010 <P>&#010 If enabled, the cell style for alternate rows will have the&#010 ${isc.DocUtils.linkForRef('alternateColumnSuffix')} appended to it.&#010 See also ${isc.DocUtils.linkForRef('alternateRowStyles')}. */
		alternateFieldStyles: boolean;

		/** If this is an editable listGrid, this property determines how failure to save due to&#010 validation errors should be displayed to the user.&#010 <P>&#010 If this property is true, when validation errors occur the errors will be displayed&#010 to the user in an alert, and focus will be returned to the first cell to fail validation.&#010 <P>&#010 If false, the cells that failed validation will be silently styled with the&#010 editFailedBaseStyle.&#010 <p>&#010 <b>Note:</b> stopOnErrors being set to true implies that 'waitForSave' is also true.&#010 We will not dismiss the editor until save has completed if stopOnErrors is true. */
		stopOnErrors: Boolean;

		/** Inline icon shown inside ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor','filter editor')} fields when&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.allowFilterOperators')} is enabled. */
		operatorIcon: FormItemIcon /* MultiAutoChild FormItemIcon */;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, when the user rolls over the header buttons in this&#010 grid the headerMenuButton will be shown over the header button in question. When clicked&#010 this button will display the standard header context menu (see&#010 ${isc.DocUtils.linkForRef('method:ListGrid.displayHeaderContextMenu')}).&#010 <P>&#010 ${isc.DocUtils.linkForRef('group:headerMenuButton','Several properties')} exist to customize the appearance of the&#010 headerMenuButton. Also see the ${isc.DocUtils.linkForRef('type:AutoChild')} documentation for information on how&#010 to make free-form modifications to autoChild widgets */
		headerMenuButton: StatefulCanvas /* AutoChild StatefulCanvas */;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid, this&#010 attribute will be shown as the menu item title to clear an existing sort on this field. */
		clearSortFieldText: string;

		/** If a summary format string contains an invalid field reference, replace the reference&#010 with the missingSummaryFieldValue. The default value is "-". */
		missingSummaryFieldValue: String;

		/** Configuration properties for the "remove field" displayed when&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is enabled.&#010 These configuration settings will be overlaid&#010 on top of the ${isc.DocUtils.linkForRef('attr:ListGrid.removeFieldDefaults')}. */
		removeFieldProperties: ListGridField /* ListGridField properties */;

		/** Style to apply to hovers shown over this grid. */
		hoverStyle: CSSStyleName;

		/** Name of a CSS Style to use as the ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} for a cell that&#010 is currently a selection origin for shifted incremental cell selection.&#010 Only has an effect if ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectCells')} is true.&#010 <P> */
		originBaseStyle: CSSStyleName;

		/** If this grid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')}, should field titles be&#010 prefixed with the titles of the headerSpans in which they are contained when&#010 using the ${isc.DocUtils.linkForRef('class:MultiSortDialog','multi-sort editor')}. */
		showHeaderSpanTitlesInSortEditor: Boolean;

		/** When set to false, sample values of the FieldPicker are never shown. This property applies to the entire FieldPicker. */
		fieldPickerShowSampleValues: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionType','selectionType')} is set to&#010 "single",&#010 &#010 setting this property to <code>true</code> means selection will be displayed to the&#010 user with the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionCanvas','selectionCanvas')} and/or&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.selectionUnderCanvas','selectionUnderCanvas')} rather than with CSS styling.&#010 <p>&#010 If <code>showSelectionCanvas</code> is set to <code>true</code>, then the&#010 <code>selectionUnderCanvas</code> will automatically be enabled unless&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectionUnderCanvas','showSelectionUnderCanvas')} is set to <code>false</code>.&#010 <p>&#010 NOTE: It is recommended to use the <code>selectionUnderCanvas</code> rather than the&#010 <code>selectionCanvas</code> if possible because the <code>selectionCanvas</code> is&#010 stacked on top of the selected record and this may interfere with event handling in rare&#010 cases. If no interactive components are shown in the <code>selectionCanvas</code> and it&#010 simply provides custom styling, then the <code>selectionUnderCanvas</code> should be used&#010 instead.&#010 <p>&#010 With ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','frozen fields')}, the <code>selectionCanvas</code>&#010 is displayed only over the non-frozen fields of the selected row. */
		showSelectionCanvas: Boolean;

		/** Chooses the selection mode when ${isc.DocUtils.linkForRef('attr:ListGrid.useRowSpanStyling')} is enabled.  See&#010 ${isc.DocUtils.linkForRef('type:RowSpanSelectionMode')}. */
		rowSpanSelectionMode: RowSpanSelectionMode;

		/** How selection of rows should be presented to the user.&#010 <P>&#010 For <code>selectionAppearance:"checkbox"</code> with multiple selection&#010 allowed, you would typically use ${isc.DocUtils.linkForRef('attr:ListGrid.selectionType')}:"simple" (the default).  Because&#010 <code>selectionType</code> and <code>selectionAppearance</code> are unrelated,&#010 the combination of <code>selectionAppearance:"checkbox"</code> and&#010 <code>selectionType:"multiple"</code> results in a grid where multiple selection can&#010 only be achieved via shift-click or ctrl-click.&#010 <P>&#010 If using <code>"checkbox"</code> for a ${isc.DocUtils.linkForRef('class:ListGrid')}, see also&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxField')} for customization APIs.&#010 <P>&#010 If using <code>"checkbox"</code> for a ${isc.DocUtils.linkForRef('class:TreeGrid')}, an extra icon,&#010 ${isc.DocUtils.linkForRef('method:TreeGrid.getExtraIcon')} is not supported. Additionally only&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.selectionType')}:"simple" and "single" are supported.&#010 You can also toggle the display of a disabled checkbox on a treeGrid, displayed&#010 when the node can't be selected, via ${isc.DocUtils.linkForRef('attr:TreeGrid.showDisabledSelectionCheckbox')}.&#010 <p>&#010 Note that the default behavior when you enable checkbox selection is to continue to show&#010 the selected style.  This can be changed by setting ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectedStyle')} to false. */
		selectionAppearance: SelectionAppearance;

		/** If ${isc.DocUtils.linkForRef('attr:HeaderSpan.wrap')} is not explicitly set, should fields wrap?  If autofitting,&#010 see the docs on that property for the details of how the minimum width for a field is&#010 determined. */
		wrapHeaderSpanTitles: Boolean;

		/** What to do when a user hits escape while editing a cell:<ul>&#010 <li>"cancel": close the editor and discard the current set of edit values&#010 <li>"done": just close the editor (the edit is complete, but the edited values are retained).&#010 </ul>&#010 Note that if ${isc.DocUtils.linkForRef('attr:ListGrid.autoSaveEdits')} is true, this may cause a save of the current edit values */
		escapeKeyEditAction: EscapeKeyEditAction;

		/** When assembling a value for a ${isc.DocUtils.linkForRef('attr:ListGrid.canAddSummaryFields','summary field')}, if a referenced&#010 field is hilited, should the hilite HTML be included in the summary field value?&#010 <P>&#010 To control hilites showing in group summaries, see ${isc.DocUtils.linkForRef('attr:ListGrid.showHilitesInGroupSummary','showHilitesInGroupSummary')}. */
		includeHilitesInSummaryFields: boolean;

		/** Causes a menu item titled ${isc.DocUtils.linkForRef('attr:ListGrid.filterUsingText','"Filter using"')} to appear in the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} that allows the end user to pick an advanced&#010 ${isc.DocUtils.linkForRef('type:OperatorId','search operator')} to use for this field.&#010 <p>&#010 Once an operator has been chosen, the active operator is indicated by an&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.operatorIcon')} placed within the field (you can alternatively cause the&#010 icon to ${isc.DocUtils.linkForRef('attr:ListGrid.alwaysShowOperatorIcon','always be present')}).  The <code>operatorIcon</code> &#010 shows the same textual representation of the search operator as is used by the&#010 ${isc.DocUtils.linkForRef('attr:FormItem.allowExpressions')} feature.  Clicking on the icon provides a second way to &#010 modify the search operator.  &#010 <p>&#010 This feature is enabled by default if ${isc.DocUtils.linkForRef('method:DataSource.supportsAdvancedCriteria')} is true, &#010 for all fields where it is normally possible to filter by typing in a search string.  This &#010 excludes field types such as "date" or "boolean" which show specialized filter controls.  &#010 Use ${isc.DocUtils.linkForRef('attr:ListGridField.allowFilterOperators')} to disable this interface for individual &#010 fields, or set ${isc.DocUtils.linkForRef('attr:DataSourceField.canFilter')} to false to disallow filtering entirely for &#010 a field.&#010 <p>&#010 Note that this feature is similar to ${isc.DocUtils.linkForRef('attr:ListGrid.allowFilterExpressions')}, which allows &#010 the end users to directly type in characters such as "&gt;" to control filtering.&#010 <code>allowFilterOperators</code> is easier to use and more discoverable than&#010 <code>allowFilterExpressions</code>, and also avoids the drawback where special characters &#010 like "&gt;" cannot be used in filter values.  However, <code>allowFilterExpressions</code> &#010 allows users to make use of certain operators that <code>allowFilterOperators</code> does &#010 not support, such as using the "betweenInclusive" operator by typing "5...10".&#010 <P>&#010 When both <code>allowfilterExpressions</code> and <code>allowFilterOperators</code> are set,&#010 filter expressions entered in to the edit-area are parsed and the operator automatically &#010 applied to the ${isc.DocUtils.linkForRef('attr:ListGrid.operatorIcon')}. */
		allowFilterOperators: Boolean;

		/** Default width and height of value icons for this ListGrid.&#010 Can be overridden at the listGrid level via explicit ${isc.DocUtils.linkForRef('attr:ListGrid.valueIconWidth')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.valueIconHeight')}, or at the field level via ${isc.DocUtils.linkForRef('attr:ListGridField.valueIconSize')},&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.valueIconWidth')} and {ListGridField.valueIconHeight} */
		valueIconSize: number;

		/** Automatically generated canvas embedded in the grid's frozen body if &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver','showRollOver')}&#010 is <code>true</code> and ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOverCanvas','showRollOverCanvas')} is&#010 <code>true</code> or for selected records, if&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectedRollOverCanvas','showSelectedRollOverCanvas')} &#010 is true. This component will be created and displayed above the current rollOver&#010 row or cell in the frozen body.&#010 <P>&#010 The frozenRollOverCanvas will be created using the ${isc.DocUtils.linkForRef('type:AutoChild')} subsystem, and&#010 will derive its configuration from the ${isc.DocUtils.linkForRef('attr:ListGrid.rollOverCanvas')}&#010 autoChild properties (<code>"rollOverCanvasProperties"</code>, et al).&#010 <p>&#010 The <code>frozenRollOverCanvas</code> has the following read-only attributes set:<br>&#010 - <code>this.grid</code> - a pointer to the grid<br>&#010 - <code>this.record</code> - a pointer to the current roll over record object in the grid */
		frozenRollOverCanvas: Canvas;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid, this&#010 attribute will be shown as the menu item title to clear any existing sort on all fields.  This&#010 menu-item is displayed only in the context menu for the sorter button. */
		clearAllSortingText: string;

		/** Image to display for a partially true value in a boolean field (typically selection).&#010 The special value "blank" means that no image will be shown.&#010 <P>&#010 To turn this off explicitly set ${isc.DocUtils.linkForRef('attr:ListGridField.suppressValueIcon')} to true.&#010 <P>&#010 If this, ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')}&#010 are unset, this will be set to the default ${isc.DocUtils.linkForRef('attr:CheckboxItem.partialSelectedImage')}.&#010 <P>&#010 When ${isc.DocUtils.linkForRef('group:skinning','spriting')} is enabled, this property will not &#010 be used to locate an image, instead, the image is drawn via CSS based on the &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanBaseStyle')} property. */
		booleanPartialImage: SCImgURL;

		/** Properties to apply to all header buttons.&#010 Overrides defaults applied via  ${isc.DocUtils.linkForRef('attr:ListGrid.headerButtonDefaults')}. */
		headerButtonProperties: Button /* Button Properties */;

		/** An optional CSS style to apply to the checkbox image. If supplied, and the checkbox is&#010 enabled, the base style is suffixed with "True", "False", or "Partial" if the checkbox&#010 is selected, unselected, or partially selected; if the checkbox is disabled, the suffix&#010 is "TrueDisabled", "FalseDisabled", or "PartialDisabled".&#010 <p>&#010 <b>NOTE:</b> This attribute is not supported by ${isc.DocUtils.linkForRef('class:TreeGrid')}. */
		booleanBaseStyle: CSSStyleName;

		/** Custom properties for the automatically generated <code>groupTitleColumn</code>.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupTitleColumn')} for an overview of the groupTitleColumn. */
		groupTitleColumnProperties: ListGridField /* ListGridField properties */;

		/** This setting causes the ${isc.DocUtils.linkForRef('attr:ListGrid.rollUnderCanvas','roll under canvas')} to be&#010 displayed when the user rolls over selected records in the grid (but not when&#010 rolling over other records). This can be useful to display a "Selected Over"&#010 appearance which can't be easily achieved via standard cell styling.&#010 <P>&#010 As with ${isc.DocUtils.linkForRef('attr:ListGrid.showRollUnderCanvas')}, if this property is unset, but&#010 the related ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectedRollOverCanvas')} property is true, both the&#010 the roll under and roll under canvases will be displayed as the user rolls &#010 over selected records. */
		showSelectedRollUnderCanvas: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGridField.userFormula')} is set for some field, and this grid is showing&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary','group summaries')} or a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary','grid summary')}, this property determines what field value&#010 should be present in those summary rows. Should the field apply the user-formula to the&#010 calculated summary row, or should it apply a standard grid or group summary to the&#010 user-formula values displayed in the grid?&#010 <P>&#010 May be overridden at the field level via ${isc.DocUtils.linkForRef('attr:ListGridField.applyAfterSummary')} */
		applyFormulaAfterSummary: Boolean;

		/** For databound ListGrids, this attribute can be used to customize the ${isc.DocUtils.linkForRef('class:ResultSet')}&#010 object created for this grid when data is fetched */
		dataProperties: ResultSet;

		/** When true, indicates that this ListGrid supports grouping on multiple fields. */
		canMultiGroup: boolean;

		/** Value to display to the user if showing summary values (through ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')},&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary')} or ${isc.DocUtils.linkForRef('type:ListGridFieldType','listGridFieldType:"summary"')}), and&#010 the summary function returns <code>"null"</code> (implying it was unable to calculate a&#010 valid summary value). This property will only be used in the default formatting behavior. If&#010 an explicit formatter has been specified - via ${isc.DocUtils.linkForRef('method:ListGrid.formatCellValue')} or&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.formatGridSummary','formatGridSummary()')}, for example - this property has&#010 no effect. */
		invalidSummaryValue: string;

		/** When this attribute is set, editors will be rendered into every row of the grid rather than&#010 showing up in a single record at a time.&#010 This attribute is only valid when ${isc.DocUtils.linkForRef('attr:ListGrid.editByCell')} is false */
		alwaysShowEditors: boolean;

		/** When records are being dragged from within a ListGrid, what sort of drag-tracker&#010 should be displayed?<br>&#010 Note that if multiple records are being dragged the displayed tracker will be&#010 based on the first selected record. */
		dragTrackerMode: DragTrackerMode;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is set to <code>"checkbox"</code> this property&#010 may be set to govern the width of the checkbox image displayed to indicate whether a row is&#010 selected. If unset, the checkboxField image will be sized to match the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanImageWidth')} for this grid. */
		checkboxFieldImageWidth: number /* integer */;

		/** Can the user edit cells in this listGrid? Can be set for the listGrid, and overridden for&#010      individual fields.<br>&#010      If 'canEdit' is false at the listGrid level, fields can never be edited - in this case&#010      the canEdit property on individual fields will be ignored.<br>&#010      If 'canEdit' is set to true at the listGrid level, setting the 'canEdit' property to&#010      false at the field level will prevent the field from being edited inline.<br>&#010      If 'canEdit' is not set at the listGrid level, setting 'canEdit' to true at the field&#010      level enables the field to be edited inline. */
		canEdit: Boolean;

		/** How to fetch and manage records retrieve from the server.  See ${isc.DocUtils.linkForRef('type:FetchMode')}.&#010 <P>&#010 This setting only applies to the ${isc.DocUtils.linkForRef('class:ResultSet')} automatically created by calling&#010 ${isc.DocUtils.linkForRef('method:ListGrid.fetchData','fetchData()')}.  If a pre-existing ResultSet is passed to setData() instead, it's&#010 existing setting for ${isc.DocUtils.linkForRef('attr:ResultSet.fetchMode')} applies. */
		dataFetchMode: FetchMode;

		/** Specifies a list of icons that can be used in ${isc.DocUtils.linkForRef('method:DataBoundComponent.editHilites','hilites')}.&#010 <P>&#010 <code>hiliteIcons</code> should be specified as an Array of ${isc.DocUtils.linkForRef('type:SCImgURL')}.&#010 When present, the hilite editing interface shown when ${isc.DocUtils.linkForRef('method:DataBoundComponent.editHilites')} is called &#010 will offer the user a drop down for picking one of these icons when defining either a &#010 simple or advanced hilite rule.&#010 <P>&#010 If the user picks an icon, the created hiliting rule will have ${isc.DocUtils.linkForRef('attr:Hilite.icon')} set to &#010 the chosen icon.  ${isc.DocUtils.linkForRef('attr:DataBoundComponent.hiliteIconPosition')} controls where the icon will &#010 appear for that field -- the default is that it appears in front of the normal cell content.&#010 This can also be overridden at the field level. */
		hiliteIcons: String[] /* Array of String */;

		/** Image to show when sorting descending. See ${isc.DocUtils.linkForRef('object:ImgProperties')} for format. */
		sortDescendingImage: ImgProperties /* ImgProperties */;

		/** When a list grid is ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','grouped')}, each group shows&#010 under an auto generated header node. By default the title of the group will be&#010 shown, with a hanging indent in this node, and will span all columns in the grid.&#010 Setting this property causes the titles of auto-generated group nodes to appear as&#010 though they were values of the designated field instead of spanning all columns&#010 and record values in the designated groupTitleField will appear indented under&#010 the group title in a manner similar to how a TreeGrid shows a Tree.&#010 <P>&#010 Note if ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummaryInHeader')} is true, the header nodes will not show&#010 a single spanning title value by default - instead they will show the summary values for&#010 each field. In this case, if groupTitleField is unset, a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupTitleColumn','groupTitleColumn')} can be automatically generated to&#010 show the title for each group. */
		groupTitleField: String;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary')} is true, this attribute will be set to true on each&#010 record object representing a group-level summary row. */
		groupSummaryRecordProperty: string;

		/** If set to false on a record, selection of that record is disallowed. */
		recordCanSelectProperty: String;

		/** When enabled, ${isc.DocUtils.linkForRef('method:ListGrid.createRecordComponent')} will be called when saved rows are being&#010 rendered, and any returned component will be displayed embedded within the row or cell.&#010 <P>&#010 recordComponents are not created for newly added rows which have not yet been saved.  &#010 See the ${isc.DocUtils.linkForRef('group:unsavedRecords','Handling Unsaved Records overview')} for more&#010 information.&#010 <P>&#010 Depending on the ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponentsByCell')} setting,&#010 <code>createRecordComponent()</code> will be called either once per row, or once for&#010 every cell.&#010 <P>&#010 Depending on ${isc.DocUtils.linkForRef('attr:ListGrid.recordComponentPosition')}, components can either be placed underneath&#010 normal record or cell content ("expand" setting) or placed so that they overlap normal&#010 cell content ("within" setting).  For the "within" setting, the default is to fill the&#010 row or cell, but the component can specify percent size or even use&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo-positioning')} to place itself within the row or cell.&#010 <p>&#010 The "expand" setting is incompatible with ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','frozen columns')}&#010 <i>unless</i> all <code>recordComponents</code> are the same height and they are present&#010 in every row, in which case the fixed height of all <code>recordComponents</code> can be&#010 set via ${isc.DocUtils.linkForRef('attr:ListGrid.recordComponentHeight')} to re-enable frozen fields.&#010 <p>&#010 Using <code>recordComponents</code> potentially means creating one component for every&#010 visible grid row or cell and so can impact performance.  Before using this subsystem:&#010 <ul>&#010 <li> consider using ${isc.DocUtils.linkForRef('attr:ListGridField.valueIcons')} (possibly with a specified &#010      ${isc.DocUtils.linkForRef('method:ListGridField.valueIconClick')} handler) for icons based on field values&#010      which may be displayed alone in the cell or alongside standard content&#010      (see ${isc.DocUtils.linkForRef('attr:ListGridField.showValueIconOnly')});&#010 <li> for clickable icons representing actions that can be taken on a record, also &#010      consider using ${isc.DocUtils.linkForRef('type:ListGridFieldType','a field of type "icon"')}, or &#010      multiple such fields&#010 <li> for controls that only need to appear on rollover, consider&#010      ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOverCanvas','rollOver controls')}&#010 <li> if you are trying to customize the editor for a field, you can provide a custom&#010      control via ${isc.DocUtils.linkForRef('attr:ListGridField.editorType')}, and ${isc.DocUtils.linkForRef('attr:FormItem.icons')} are a common&#010      way to add clickable buttons.  You can also&#010      ${isc.DocUtils.linkForRef('method:ListGrid.getEditorType','provide different controls per record')}.  These options are&#010      usually better that using <code>recordComponents</code> as custom editors, since&#010      you won't have to manage issues like making the <code>recordComponent</code> appear&#010      only when editing, having changes affect ${isc.DocUtils.linkForRef('group:editing','editValues')},&#010      triggering saves and handling validation errors, etc.&#010 </ul>&#010 <P>&#010 See ${isc.DocUtils.linkForRef('type:RecordComponentPoolingMode')} for an overview of how best to optimize use of&#010 <code>recordComponents</code> for different data sets.&#010 <p>&#010 Regardless of the pooling mode, you can explicitly refresh record components via&#010 ${isc.DocUtils.linkForRef('method:ListGrid.invalidateRecordComponents')} and&#010 ${isc.DocUtils.linkForRef('method:ListGrid.refreshRecordComponent')}.&#010 <P>&#010 <i>Interaction with ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths','column auto-fit')}</i>: per-cell record&#010 components are not taken into account when determining the size for column auto fit.&#010 The default ${isc.DocUtils.linkForRef('method:ListGrid.getDefaultFieldWidth')} implementation looks at cell content&#010 only. We typically recommend that, for fields showing record-components, &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth')} and ${isc.DocUtils.linkForRef('attr:ListGridField.canAutoFitWidth')} be disabled, or if &#010 the record components are of a predictable size, a ${isc.DocUtils.linkForRef('attr:ListGridField.defaultWidth')}&#010 be specified.<br>&#010 This is particularly pertinent where ${isc.DocUtils.linkForRef('attr:ListGrid.recordComponentPosition')}&#010 is set to "within", in which case cells' content is often empty or completely covered&#010 by record-components. */
		showRecordComponents: boolean;

		/** For ${isc.DocUtils.linkForRef('type:ExpansionMode','expansionModes')} that show another grid or tree, what the&#010 child's expansionMode should be.&#010 <P>Default value <code>null</code> means no further expansion. */
		childExpansionMode: ExpansionMode;

		/** If this is an editable listGrid, this property will specify the&#010 ${isc.DocUtils.linkForRef('attr:DateItem.inputFormat','inputFormat')} applied to editors for fields of type&#010 <code>"date"</code>. May be overridden per field via ${isc.DocUtils.linkForRef('attr:ListGridField.inputFormat')}. */
		dateInputFormat: DateInputFormat;

		/** When scrollToCell is called, this is used as defaults if xPosition weren't explicitly passed&#010 into the method. */
		scrollToCellXPosition: Alignment;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')} is set to <code>"vertical"</code> or <code>"both"</code> this&#010 property provides the maximum number of records for which the ListGrid will expand. If more&#010 records are present, scrolling will be introduced to reach them as normal.&#010 If unset, by default the ListGrid will expand to accommodate as many records as are present. */
		autoFitMaxRecords: number;

		/** If roll overs are enabled, should the ${isc.DocUtils.linkForRef('attr:ListGrid.rollUnderCanvas','rollUnderCanvas')}&#010 be displayed?&#010 <p>&#010 Use of the <code>showRollUnderCanvas</code> is enabled if ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver','showRollOver')}&#010 is <code>true</code>, and either ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOverCanvas','showRollOverCanvas')}&#010 is <code>true</code> and <code>showRollUnderCanvas</code> is unset, or <code>showRollUnderCanvas</code>&#010 is explicitly set to <code>true</code>.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectedRollUnderCanvas')}. */
		showRollUnderCanvas: Boolean;

		/** Maximum number of records to which a groupBy can be applied. If there are more records,&#010 grouping will not be available via the default header context menu, and calls to&#010 ${isc.DocUtils.linkForRef('method:ListGrid.groupBy')} will be ignored.&#010 <P>&#010 The maximum exists because ListGrid grouping is performed in-browser, hence requires loading of&#010 all records that match the current filter criteria before records can be grouped.  The default&#010 maximum represents a number of records which are safe to load in legacy browsers such as Internet&#010 Explorer 8 (modern browsers can handle far more), and is also a good upper limit from the&#010 perspective of loading data from a database.&#010 <P>&#010 Going beyond this limit can cause "script running slowly" errors from legacy browsers (as well as&#010 high database load).  To build an interface for grouping that handles arbitrary data volume, use&#010 a TreeGrid with ${isc.DocUtils.linkForRef('attr:TreeGrid.loadDataOnDemand')} with server-side grouping code. */
		groupByMaxRecords: number /* number */;

		/** For performance reasons, even when ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights')} is set, vertical clipping&#010 is not enforced by default for some kinds of content (such as images) on all browsers.&#010 Set ${isc.DocUtils.linkForRef('attr:ListGrid.enforceVClipping','enforceVClipping:true')} to enforce clipping for all types of&#010 content on all browsers.&#010 <P>&#010 This additional setting is likely to be phased out as browsers improve. */
		enforceVClipping: Boolean;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:HLayout')} appearing in a record's expanded section&#010 when ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is <code>detailRelated</code>.&#010 This component contains two other autoChild components,&#010 a ${isc.DocUtils.linkForRef('class:DetailViewer')} for viewing fields from the record which are not already&#010 present in the grid and a separate embedded ${isc.DocUtils.linkForRef('class:ListGrid')} for displaying other&#010 data related to this record via record.detailDS.  See ${isc.DocUtils.linkForRef('attr:ListGrid.expansionDetails')}&#010 and ${isc.DocUtils.linkForRef('attr:ListGrid.expansionRelated')} for more information.&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionDetailRelatedProperties</code> and&#010 <code>listGrid.expansionDetailRelatedDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionDetailRelated: HLayout /* MultiAutoChild HLayout */;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showRowNumbers')} is true, should we apply the ${isc.DocUtils.linkForRef('attr:ListGrid.rowNumberStyle')} to&#010 the ${isc.DocUtils.linkForRef('attr:ListGrid.rowNumberField')} */
		applyRowNumberStyle: boolean;

		/** When incremental rendering is switched on and there are variable record heights, the virtual&#010 scrolling mechanism manages the differences in scroll height calculations due to the&#010 unknown sizes of un-rendered rows to make the scrollbar and viewport appear correctly.&#010 <P>&#010 When the <code>virtualScrolling</code> system is active, the last scroll position&#010 scrolls the last record to the top of the viewport, leaving blank space underneath.&#010 This is a necessary and unavoidable consequence of mapping the position of the scrollbar&#010 thumb to an unknown amount of remaining space without being able to know the total&#010 scrollable area in advance (since record heights vary).&#010 <P>&#010 virtualScrolling is switched on automatically when ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights')} is false and&#010 also when&#010 using the ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','recordComponents subsystem')}, as&#010 recordComponents expand the rows that contain them. This flag should be manually enabled&#010 when calling ${isc.DocUtils.linkForRef('method:ListGrid.addEmbeddedComponent')} if embedded components can&#010 cause record sizes to expand beyond specified cellHeight.&#010 <P>&#010 virtualScrolling is also automatically enabled when ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is true&#010 to handle the fact that expanded rows may render at variable heights. */
		virtualScrolling: boolean;

		/** Specifies the field by which this grid should be initially sorted. Can be set to either a&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.name','field name')} or the index of the field in the fields Array.&#010 <P>&#010 ListGrids also support being initialized with multiple-field sort via&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.initialSort')}. If initialSort is specified, it will be used in preference&#010 to this property.&#010 <P>&#010 To sort the grid after it has been initialized, use ${isc.DocUtils.linkForRef('method:ListGrid.sort')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.setSort')}. Details about the current sort of a live grid can be&#010 retrieved by calling ${isc.DocUtils.linkForRef('method:ListGrid.getSortField')} or ${isc.DocUtils.linkForRef('method:ListGrid.getSort')} */
		sortField: String | int;

		/** When set to true, shows an additional field at the beginning of the field-list&#010 (respecting RTL) to allow users to expand and collapse individual records.&#010 See ${isc.DocUtils.linkForRef('method:ListGrid.expandRecord')} and ${isc.DocUtils.linkForRef('attr:ListGrid.expansionMode')} for details&#010 on record expansion.&#010 <P>&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.virtualScrolling')} is automatically enabled when canExpandRecords is&#010 set to true.&#010 <P>&#010 Note that expanded records are not currently supported in conjunction&#010 with ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen fields')}. */
		canExpandRecords: Boolean;

		/** Dictates whether the data in this grid should be exported raw by&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData','exportClientData()')}.  If set to true,&#010 data will not be processed by field-formatters during exports.&#010 Decreases the time taken for large exports.  This property can also be set at the&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.exportRawValues','field level')}. */
		exportRawValues: Boolean;

		/** If drawing all rows would cause less than <code>drawAllMaxCells</code> cells to be rendered,&#010 the full dataset will instead be drawn even if ${isc.DocUtils.linkForRef('attr:ListGrid.showAllRecords','showAllRecords')}&#010 is false and the viewport size and ${isc.DocUtils.linkForRef('attr:ListGrid.drawAheadRatio')} setting would normally have caused&#010 incremental rendering to be used.&#010 <P>&#010 The <code>drawAllMaxCells</code> setting prevents incremental rendering from being used in&#010 situations where it's really unnecessary, such as a 40 row, 5 column dataset (only 200&#010 cells) which happens to be in a grid with a viewport showing only 20 or so rows.&#010 Incremental rendering causes a brief "flash" during scrolling as the visible portion of the&#010 dataset is redrawn, and a better scrolling experience can be obtained in this situation by&#010 drawing the entire dataset up front, which in this example would have negligible effect on&#010 initial draw time.&#010 <P>&#010 <code>drawAllMaxCells:0</code> disables this features.  You may want to disable this feature&#010 if performance is an issue and:&#010 <ul>&#010 <li> you are very frequently redraw a grid&#010 <li> you do a lot of computation when rendering each cell (eg formulas)&#010 <li> you are showing many grids on one screen and the user won't scroll most of them&#010 </ul> */
		drawAllMaxCells: number /* number */;

		/** Denotes the name of a property that can be set on records to display a custom style.&#010 For example if this property is set to <code>"customStyle"</code>, setting &#010 <code>record.customStyle</code> to a css styleName will cause the record in question to&#010 render out with that styling applied to it.  Note that this will be a static &#010 style - it will not be modified as the state of the record (selected / over etc) changes. */
		recordCustomStyleProperty: String;

		/** Best field to use for a user-visible title for an individual record from this grid.&#010 If ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')} is non null, this property may be specified on the&#010 dataSource instead.&#010 <p>&#010 If not explicitly set, titleField looks for fields named "title", "name", and "id"&#010 in that order.  If a field exists with one of those names, it becomes the titleField.&#010 If not, then the first field is designated as the titleField. */
		titleField: string;

		/** If this grid is ${isc.DocUtils.linkForRef('attr:ListGrid.groupByField','grouped')}, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary')} is true, this attribute may be set to an array of&#010 groupBy field names for which group summaries should appear.&#010 <P>&#010 This is particularly useful for listGrids grouped by more than one field as it allows developers&#010 to display the group summary for a particular nested group without showing a summary for every&#010 level of the tree. */
		groupByFieldSummaries: String[] /* Array of String */;

		/** <b>Note: This property only has an effect in Internet Explorer</b>&#010 <P>&#010 Advanced property to improve performance for dynamic styling of gridRenderer cells in&#010 Internet Explorer, at the expense of slightly slower initial drawing, and some &#010 limitations on supported styling options.&#010 <P>&#010 <code>fastCellUpdates</code> speeds up the dynamic styling system used by rollovers,&#010 selections, and custom styling that calls ${isc.DocUtils.linkForRef('method:GridRenderer.refreshCellStyle')}, at&#010 the cost of slightly slower draw() and redraw() times.&#010 <P>&#010 Notes:&#010 <ul>&#010 <li>When this property is set, ListGrid cells may be styled using the &#010     ${isc.DocUtils.linkForRef('attr:ListGrid.tallBaseStyle')}. See ${isc.DocUtils.linkForRef('method:ListGrid.getBaseStyle')} for &#010     more information.</li>&#010 <li>If any cell styles specify a a background image URL, the URL will be resolved relative&#010     to the page location rather than the location of the CSS stylesheet. This means cell&#010     styles with a background URL should either supply a fully qualified path, or the&#010     background image media should be made available at a second location for IE.</li>&#010 <li>fastCellUpdates will not work if the styles involved are in an external stylesheet loaded&#010     from a remote host. Either the stylesheet containing cell styles needs to be loaded&#010     from the same host as the main page, or the cell styles need to be inlined in the html &#010     of the bootstrap page.</li>&#010 <li>fastCellUpdates will not work if the css styles for cells are defined in&#010     a <code>.css</code> file loaded via <code>@import</code>. Instead the <code>.css</code>&#010     file should be loaded via a <code>&lt;link ...&gt;</code> tag.</li>&#010 </ul> */
		fastCellUpdates: Boolean;

		/** The data tree that results from a call to  ${isc.DocUtils.linkForRef('method:ListGrid.groupBy')}.&#010 This will be a ${isc.DocUtils.linkForRef('class:ResultTree')} if ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')} is&#010 present, otherwise it will be a ${isc.DocUtils.linkForRef('class:Tree')}. */
		groupTree: Tree /* AutoChild Tree */;

		/** When ${isc.DocUtils.linkForRef('type:ExpansionMode')} is <i>editor</i>, should a Save button be shown below the&#010 the expanded editor?&#010 <P>&#010 Note that if an expanded-row containing an editor is collapsed while changes are&#010 outstanding, changes will be either be automatically updated to the grid, or will first&#010 show a confirmation dialog, according to the value of&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.expansionEditorShowSaveDialog')}. */
		showExpansionEditorSaveButton: Boolean;

		/** If <code>this.confirmDiscardEdits</code> is true, this property can be used to customize the&#010 error message string displayed to the user in a dialog with options to&#010 cancel the action, or save or discard pending edits in response to sort/filter actions&#010 that would otherwise drop unsaved edit values. */
		confirmDiscardEditsMessage: string;

		/** Default properties for the automatically generated <code>groupTitleColumn</code>.&#010 Default object includes properties to enable autoFitWidth to group title values.&#010 <P>&#010 To modify the behavior or appearance of this column, developers may set&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.groupTitleColumnProperties')} at the instance level, or override this&#010 object at the class level. If overriding this object, we recommend using&#010 ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults')} rather than replacing this object entirely.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupTitleColumn')} for an overview of the groupTitleColumn. */
		groupTitleColumnDefaults: ListGridField /* ListGridField properties */;

		/** Whether an interface should be shown to allow user is allowed to dynamically "freeze" or&#010 "unfreeze" columns with respect to horizontally scrolling. If unset, this property defaults&#010 to <code>true</code> unless:<ul>&#010 <li>${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights','this.fixedRecordHeights')} is <code>false</code></li>&#010 <li>${isc.DocUtils.linkForRef('attr:ListGrid.bodyOverflow','this.bodyOverflow')} is <code>"visible"</code></li>&#010 <li>${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData','this.autoFitData')} is set to <code>"horizontal"</code> or&#010 <code>"both"</code></li>&#010 <li>Any field has overflow set to <code>"visible"</code></li></ul>&#010 <P>&#010 Note that the <code>canFreezeFields</code> setting enables or disables the user&#010 interface for freezing and unfreezing fields only.  Fields can be programmatically&#010 frozen via setting ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','field.frozen')} to true when the grid is&#010 created, or dynamically frozen and unfrozen via ${isc.DocUtils.linkForRef('method:ListGrid.freezeField')} and&#010 ${isc.DocUtils.linkForRef('method:ListGrid.unfreezeField')}. */
		canFreezeFields: boolean;

		/** A list of ListGridRecord objects, specifying the data to be used to populate the&#010 ListGrid.  In ListGrids, the data array specifies rows.&#010 <p>&#010 When using a ${isc.DocUtils.linkForRef('class:DataSource')}, rather than directly providing <code>data</code>, you will&#010 typically call ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')} instead, which will automatically establish&#010 <code>data</code> as a ${isc.DocUtils.linkForRef('class:ResultSet','ResultSet')} (see the ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')} docs for details).&#010 <p>&#010 If you call <code>fetchData</code>, any previously supplied <code>data</code> is&#010 discarded.  Also, it is not necessary to call <code>setData()</code> after calling&#010 ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')}.&#010 <p>&#010 When calling <code>setData()</code>, direct changes&#010 to the list using Framework APIs such as ${isc.DocUtils.linkForRef('method:List.add')} or &#010 ${isc.DocUtils.linkForRef('method:List.remove')} will be automatically observed and the&#010 ListGrid will redraw in response.  However, direct changes to individual Records will not&#010 be automatically observed and require calls to ${isc.DocUtils.linkForRef('method:ListGrid.refreshCell')} or &#010 ${isc.DocUtils.linkForRef('method:ListGrid.refreshRow')} to cause the ListGrid to visually update.  Calling methods such as&#010 ${isc.DocUtils.linkForRef('method:ListGrid.updateData')}, ${isc.DocUtils.linkForRef('method:ListGrid.removeData')} or ${isc.DocUtils.linkForRef('method:ListGrid.addData')} always causes&#010 automatic visual refresh.&#010 <p>&#010 Note that direct manipulation of the data object without using the ${isc.DocUtils.linkForRef('interface:List')} APIs (for&#010 example by directly assigning a new Record object to some index or calling non-Framework&#010 APIs such as pop(), shift(), etc.) will not be reflected in the grid automatically, but &#010 developers can call ${isc.DocUtils.linkForRef('method:List.dataChanged')} directly to notify the grid of changes.&#010  */
		data: any /* List of ListGridRecord */;

		/** The title for the corner sort button.  The title will only&#010 ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults','ListGrid.changeDefaults()')} rather than replacing with an&#010 entirely new object. */
		sorterButtonTitle: string;

		/** Display format to use for fields specified as type 'datetime'.  Default is to use the&#010 system-wide default date time format, configured via&#010 ${isc.DocUtils.linkForRef('classMethod:DateUtil.setShortDatetimeDisplayFormat')}.  Specify any&#010 valid ${isc.DocUtils.linkForRef('type:DateDisplayFormat')} to change the display format for datetimes used by this grid.&#010 &#010 May be specified as a function. If specified as  a function, this function will be executed in the scope of the Date&#010 and should return the formatted string.&#010 &#010 <P>&#010 May also be specified at the field level via&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.dateFormatter')}&#010 <P>&#010 If this field is editable the dateFormatter will also be passed to the editor created&#010 to edit this field as ${isc.DocUtils.linkForRef('attr:DateItem.dateFormatter','dateFormatter')}.&#010 In this case you may also need to set ${isc.DocUtils.linkForRef('attr:ListGrid.dateInputFormat')}. */
		datetimeFormatter: DateDisplayFormat;

		/** When animating folder opening / closing, this property designates the speed of the&#010 animation in pixels shown (or hidden) per second. Takes precedence over the&#010 ${isc.DocUtils.linkForRef('attr:TreeGrid.animateFolderTime')} property, which allows the developer to specify a&#010 duration for the animation rather than a speed.&#010 <P>&#010 For a ListGrid, this property applies when ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','grouping')} is enabled. */
		animateFolderSpeed: number;

		/** The name of the ListGridRecord property that specifies the DataSource to use when&#010 ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is "related".  The default is&#010 ${isc.DocUtils.linkForRef('attr:ListGridRecord.detailDS')}. Note that you can set the ${isc.DocUtils.linkForRef('attr:ListGrid.detailDS')} at the&#010 grid level instead if the same dataSource is to be used for all records. */
		recordDetailDSProperty: String;

		/** Image to display for a true value in a boolean field. The special value "blank" means&#010 that no image will be shown.&#010 <P>&#010 To turn this off explicitly set ${isc.DocUtils.linkForRef('attr:ListGridField.suppressValueIcon')} to true.&#010 <P>&#010 If this, ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.booleanPartialImage')}&#010 are unset, this will be set to the default ${isc.DocUtils.linkForRef('attr:CheckboxItem.checkedImage')}.&#010 <P>&#010 When ${isc.DocUtils.linkForRef('group:skinning','spriting')} is enabled, this property will not &#010 be used to locate an image, instead, the image is drawn via CSS based on the &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanBaseStyle')} property. */
		booleanTrueImage: SCImgURL;

		/** If a page is rendered in ${isc.DocUtils.linkForRef('classMethod:Page.isRTL','RTL mode')}, should&#010 cell alignments specified ${isc.DocUtils.linkForRef('attr:ListGridField.cellAlign')} be reversed (so&#010 an <code>align:"right"</code> field will have content aligned on the left and&#010 vice versa)?&#010 <P>&#010 This is true by default to match user expectation that text flows from&#010 start-to end and is aligned with the start of text flow (left in LTR mode,&#010 right in RTL mode) by default. May be set to false to have the specified&#010 alignments be taken literally in RTL mode. */
		reverseRTLAlign: Boolean;

		/** If true, when an update operation occurs on a selected record in a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource','databound')} listGrid, ensure the updated record is&#010 re-selected when the operation completes.&#010 The ${isc.DocUtils.linkForRef('attr:ListGrid.reselectOnUpdateNotifications')} attributes governs whether&#010 ${isc.DocUtils.linkForRef('method:ListGrid.selectionUpdated')} and ${isc.DocUtils.linkForRef('method:ListGrid.selectionChanged')} will fire&#010 when this occurs. */
		reselectOnUpdate: boolean;

		/** If you have a databound listGrid and you scroll out of the currently loaded dataset, by&#010 default you will see blank rows until the server returns the data for those rows.  The&#010 loadingMessage attribute allows you to specify arbitrary html that will be shown in each&#010 such "blank" record while the data for that record is loading. */
		loadingMessage: string;

		/** Set the CSS style used for the header as a whole. */
		headerBarStyle: CSSStyleName;

		/** When multiple fields are sorted, set this to false to hide the sort-numeral&#010 displayed by default after the sort-arrows in the header-buttons of sorted fields. */
		showSortNumerals: boolean;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is enabled, default icon to show in&#010 the auto-generated field that allows removing records. */
		removeIcon: SCImgURL;

		/** A base name for the CSS class applied to cells when editing has failed.<br>&#010  If this listGrid is editable, this style will be applied to any edited cells for which&#010  validation failed.<br>&#010  As with the default 'baseStyle' property, this style will have "Dark", "Over", "Selected",&#010  or "Disabled" appended to it according to the state of the cell.<br>&#010 If null, cells for which editing has failed will be rendered using the normal base style&#010 classNames, but with custom CSSText applied as derived from <code>this.editFailedCSSText</code> */
		editFailedBaseStyle: CSSStyleName;

		/** Adds an item to the header context menu allowing users to launch a dialog to define&#010 grid hilites using the ${isc.DocUtils.linkForRef('class:HiliteEditor')}.&#010 <P>&#010 User-added hilites can be persisted via ${isc.DocUtils.linkForRef('method:DataBoundComponent.getHiliteState')} and &#010 ${isc.DocUtils.linkForRef('method:DataBoundComponent.setHiliteState')}. */
		canEditHilites: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')} is set to <code>"vertical"</code> or <code>"both"</code> this&#010 property provides an upper limit on how far the ListGrid will expand vertically to accommodate&#010 its content. If content exceeds this height, scrollbars will be introduced as usual.&#010 In addition to this property, ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxRecords')} allows you to limit vertical&#010 expansion based on the number of rows to be rendered. */
		autoFitMaxHeight: number;

		/** Height of the error icon, if we're showing icons when validation errors occur. */
		errorIconWidth: number /* integer */;

		/** If this listGrid contains any frozen fields, this property can be used to apply a custom&#010 baseStyle to all cells in those frozen fields. If unset, the standard base style will be&#010 used for both frozen and unfrozen cells. */
		frozenBaseStyle: string;

		/** Default width for time type fields. See ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitDateFields')} for&#010 details on how this property is used. */
		defaultTimeFieldWidth: number /* Integer */;

		/** Enables copy/paste shortcuts, provided ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectCells')} is true&#010 <p>&#010 The default setting of true means that the value of ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectCells')}&#010 determines whether copy/paste shortcuts are enabled.  Setting this property to&#010 false disables said shortcuts unconditionally.&#010 <p>&#010 Copying is done via copying to a SmartClient-wide "clipboard" - <b>not</b> the OS-level&#010 clipboard, which is inaccessible on some browsers - via the methods&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getSelectedCellData')} and ${isc.DocUtils.linkForRef('method:ListGrid.applyCellData')}.  To copy data to and&#010 from applications outside of the browser, use the technique shown in the&#010 ${isc.DocUtils.linkForExampleId('gridToExcel', 'Grid to Excel')} and&#010 ${isc.DocUtils.linkForExampleId('excelToGrid', 'Excel to Grid')} samples.&#010 <p>&#010 The following shortcuts are available:&#010 <p>&#010 CTRL + D: copy cell values from top row of selected cells down to all rows&#010 <p>&#010 CTRL + R: copy cell values from left column of selected cells right to all columns&#010 <p>&#010 CTRL + C: copy selected cell values into shared clipboard&#010 <p>&#010 CTRL + V: paste from shared clipboard into current selection */
		useCopyPasteShortcuts: Boolean;

		/** Property name on a record that should be checked to determine whether the record may be&#010 edited.&#010 <br>&#010 This property is configurable to avoid possible collision with data values in record.&#010 With the default setting of "_canEdit", a record can be set non-editable by ensuring&#010 record._canEdit == false.&#010 <br>&#010 For controlling editability for the entire grid or for a field, set grid.canEdit or&#010 field.canEdit. */
		recordEditProperty: string;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','this.canFreezeFields')} is true, this string will be shown as the&#010 title for the menu item to freeze fields on the left of the scrollable body. */
		freezeOnLeftText: string;

		/** When a user requests column autofitting via the&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getHeaderContextMenuItems','header context menu')} or via a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.headerAutoFitEvent','mouse gesture')}, what autofit approach is used. */
		autoFitWidthApproach: AutoFitWidthApproach;

		/** This attribute allows custom base styles to be displayed on a per-record basis.&#010 To specify a custom base-style for some record set&#010 <code>record[listGrid.recordBaseStyleProperty]</code> to the desired base style name -&#010 for example if <code>recordBaseStyleProperty</code> is <code>"_baseStyle"</code>, set&#010 <code>record._baseStyle</code> to the custom base style name. */
		recordBaseStyleProperty: string;

		/** Since ${isc.DocUtils.linkForRef('attr:ListGrid.body')} is configured with overflow: auto by default, no overflow&#010 is expected for the ${isc.DocUtils.linkForRef('class:ListGrid')} itself so by default it has overflow: hidden. */
		overflow: Overflow;

		/** AutoChild created and embedded in the grid if ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectionCanvas','showSelectionCanvas')}&#010 is <code>true</code> and the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionType','selectionType')} is&#010 "single".&#010 &#010 This component will be created and displayed above the selected record whenever the&#010 selection changes.&#010 <p>&#010 NOTE: It is recommended to use the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionUnderCanvas','selectionUnderCanvas')}&#010 rather than the <code>selectionCanvas</code> if possible because the <code>selectionCanvas</code>&#010 is stacked on top of the selected record and this may interfere with event handling in rare&#010 cases. If no interactive components are shown in the <code>selectionCanvas</code> and it&#010 simply provides custom styling, then the <code>selectionUnderCanvas</code> should be used&#010 instead.&#010 <p>&#010 The <code>selectionCanvas</code> has the following read-only attributes set:<br>&#010 - <code>this.grid</code> - a pointer to the grid<br>&#010 - <code>this.record</code> - a pointer to the currently selected record in the grid */
		selectionCanvas: Canvas /* AutoChild Canvas */;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanBaseStyle','booleanBaseStyle')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}. */
		printBooleanBaseStyle: CSSStyleName;

		/** When scrollToCell is called, this is used as defaults if yPosition weren't explicitly passed&#010 into the method. */
		scrollToCellYPosition: VerticalAlignment;

		/** If true, when the user navigates to a cell using arrow keys and hits space,&#010 the cell will respond to a click event. */
		generateClickOnSpace: Boolean;

		/** If set to true and ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','showHeaderContextMenu')} is true, the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.headerMenuButton')} will be displayed when the user rolls&#010 over the header buttons in this grid.  Not supported for ${isc.DocUtils.linkForRef('class:CubeGrid')}. */
		showHeaderMenuButton: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')} is true, by default summary values are calculated on the&#010 client based on the current data-set for the grid (see ${isc.DocUtils.linkForRef('method:ListGrid.getGridSummary')} and&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getGridSummaryFunction')}).&#010 <P>&#010 In some cases however it may make sense to calculate summary values on the server and retrieve&#010 them via a dataSource fetch. If set, this property specifies a dataSource to fetch against for&#010 the summary row. The dataSource should return a single record with summary data for each&#010 field for which summary data should be shown. Note that specifying this property completely&#010 bypasses the standard client-side grid summary calculation logic.&#010 <P>&#010 The fetch may be further customized via ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRowCriteria')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRowFetchRequestProperties')} */
		summaryRowDataSource: DataSource;

		/** When the length of the field specified by ${isc.DocUtils.linkForRef('attr:DataSourceField.length')} exceeds&#010 <code>this.longTextEditorThreshold</code> show an edit field of this type&#010 rather than the standard text field when the field enters inline edit mode. */
		longTextEditorType: string;

		/** When exporting data to Excel/OpenOffice format using ${isc.DocUtils.linkForRef('method:ListGrid.exportData')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData')}, whether widths of fields should be replicated&#010 in the resulting spreadsheet.&#010 <p>&#010 Because Excel's unit of measurement for field widths is based on the default system font,&#010 there is no exact way to translate field widths in pixels to Excel column widths.  The&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.exportWidthScale')} property can be set to adjust scaling; it's default value errs on&#010 the side of making Excel's columns slightly wider than the ListGrid field's actual width to&#010 avoid clipping.&#010 <p>&#010 Note that you can switch off width export for individual fields with the &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.exportFieldWidth')} flag. */
		exportFieldWidths: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, this property governs the width of the icon&#010 shown on the auto-generated <code>headerMenuButton</code> */
		headerMenuButtonIconWidth: number;

		/** For editable listGrids, outstanding unsaved edits when the user performs a new filter&#010 or sort will be discarded by default. This flag determines whether we should save such&#010 edits automatically in this case.  See also ${isc.DocUtils.linkForRef('attr:ListGrid.confirmDiscardEdits')}, which &#010 allows the user to choose whether to save or discard the unsaved edits. */
		autoConfirmSaveEdits: Boolean;

		/** ${isc.DocUtils.linkForRef('attr:GridRenderer.baseStyle','base cell style')} for this listGrid.&#010 If this property is unset, base style may be derived from ${isc.DocUtils.linkForRef('attr:ListGrid.normalBaseStyle')}&#010 or ${isc.DocUtils.linkForRef('attr:ListGrid.tallBaseStyle')} as described in&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getBaseStyle')}.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('group:cellStyleSuffixes')} for details on how stateful suffixes are combined&#010 with the base style to generate stateful cell styles. */
		baseStyle: CSSStyleName;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, this property governs the height of the&#010 auto-generated <code>headerMenuButton</code> */
		headerMenuButtonHeight: measure;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, this property governs the height of the icon&#010 shown on the auto-generated <code>headerMenuButton</code> */
		headerMenuButtonIconHeight: number;

		/** Default height for a ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpan')} with no height specified.&#010 <P>&#010 If <code>headerSpanHeight</code> is not specified (the default), headerSpans will be 1/2&#010 of ${isc.DocUtils.linkForRef('attr:ListGrid.headerHeight')}. */
		headerSpanHeight: number /* integer */;

		/** The method of ${isc.DocUtils.linkForRef('type:RecordComponentPoolingMode','component-pooling')} to employ for&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','recordComponents')}.&#010 <P>&#010 The default mode is "viewport", which means that recordComponents are destroyed as soon&#010 their record is no longer being rendered (scrolled out of the viewport, eliminated by&#010 search criteria, etc).&#010 <P>&#010 For a large or dynamic data set where the components shown on different rows are&#010 similar, switch to "recycle" mode, which pools recordComponents by detaching them from&#010 records that are not visible and re-using them in other records.  In this mode, you&#010 should implement ${isc.DocUtils.linkForRef('method:ListGrid.updateRecordComponent')} to apply any changes to make reused&#010 components applicable to the new record they appear in, if necessary.  For example, if&#010 you have several controls in your <code>recordComponents</code>, and not all of the&#010 controls apply to every record, your <code>updateRecordComponent()</code> implementation&#010 could simply hide or disable inapplicable controls, and this would be much faster than&#010 creating a whole new set of controls every time a given record is scrolled into view.&#010 <p>&#010 If you are using ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponentsByCell','per-cell recordComponents')}, and you&#010 have components of different types in different columns and still want to take&#010 advantage of component recycling, you can set ${isc.DocUtils.linkForRef('attr:ListGrid.poolComponentsPerColumn')} to&#010 ensure that components intended for one column are not recycled for use in another&#010 column that should have a different component.&#010 <P>&#010 Note that, if different records have distinctly different components embedded&#010 in them, or multiple columns in each record embed different components, you should&#010 leave the recordComponentPoolingMode at "viewport" if your dataset is very large or&#010 use "data" otherwise. */
		recordComponentPoolingMode: RecordComponentPoolingMode;

		/** CSS Style to apply to the drag tracker when dragging occurs on this component. */
		dragTrackerStyle: CSSStyleName;

		/** Names of properties on ${isc.DocUtils.linkForRef('object:ListGridField')} for which the ${isc.DocUtils.linkForRef('class:FieldPicker')} should&#010 show an editing interface, for convenience.&#010 <P>&#010 For example, specify ["frozen", "decimalPrecision"] to allow end users to modify&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.frozen')} and ${isc.DocUtils.linkForRef('attr:ListGridField.decimalPrecision')} respectively. */
		fieldPickerFieldProperties: String[] /* Array of String */;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:HTMLFlow')} for displaying the contents of&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.detailField','a specified field')} in a record's expanded section when&#010 ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is <code>detailField</code>.&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionDetailFieldProperties</code> and&#010 <code>listGrid.expansionDetailFieldDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionDetailField: HTMLFlow /* MultiAutoChild HTMLFlow */;

		/** Array of components that make up this grid. This array controls which standard and/or custom&#010 parts will be displayed within this ListGrid.&#010 <P>&#010 ListGrid is a subclass of ${isc.DocUtils.linkForRef('class:VLayout')} and consists of a number of member components. The&#010 standard set of members are automatically generated by the grid, and include (for example)&#010 the header (a Toolbar of buttons for each field) and the body&#010 (a GridRenderer displaying the actual data contained in the grid).<br>&#010 The default value of <code>gridComponents</code> is an Array of ${isc.DocUtils.linkForRef('type:ListGridComponent')}s listing&#010 the standard components in their default order:&#010 &#010 <pre>&#010    gridComponents : ["filterEditor", "header",&#010                      "body", "summaryRow"]&#010 </pre>&#010 &#010 &#010&#010 You can override <code>gridComponents</code> to change the order of standard components.&#010 You can also omit standard components this way, although it more efficient to&#010 use the related "show" property if available (eg ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')}). Note that&#010 this array must contain an entry for the <code>"body"</code> - listGrids with no body showing&#010 are unsupported.<br>&#010 <i>Advanced note:</i> The live components generated for each of these standard&#010 ${isc.DocUtils.linkForRef('type:ListGridComponent')} types may differ across different listGrids. For example if this&#010 grid has any ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen fields')}, the "body" entry will actually&#010 be created as an HLayout containing two GridRenderers (one for frozen fields,&#010 and one for unfrozen fields). This is really an implementation detail - the "body" entry&#010 in the gridComponents array simply specifies where the UI for the body should render within&#010 the ListGrid layout.&#010 <P>&#010 By embedding a Canvas directly in this list you can add arbitrary additional components to the&#010 listGrid as members, and have them be displayed alongside the standard automatically generated&#010 parts of the ListGrid.&#010 <P>&#010 Note that having added controls to gridComponents, you can still call APIs directly on&#010 those controls to change their appearance, and you can also show() and hide() them if&#010 they should not be shown in some circumstances.&#010 <P>&#010 Tip: custom controls need to set layoutAlign:"center" to appear vertically centered. */
		gridComponents: ListGridComponent | any[] /* Array of ListGridComponent | Array of any */;

		/** If this is an editable listGrid, when the user attempts to cancel an edit, should we&#010 display a confirmation prompt before discarding the edited values for the record? */
		confirmCancelEditing: Boolean;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIcons','hiliteIcons')} are present, where the hilite icon will be placed &#010 relative to the field value.  See ${isc.DocUtils.linkForRef('type:HiliteIconPosition')}. Can be overridden at the&#010 field level. */
		hiliteIconPosition: HiliteIconPosition;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.sortByGroupFirst')} is active, the sorting direction applied for implicit &#010 sorting by the field(s) used for grouping. Default of null means that sort direction &#010 is based on the current direction of user-configured sort, or is "ascending" if the &#010 user has not sorted the data. */
		groupSortDirection: SortDirection;

		/** If this listGrid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans')}, setting this&#010 attribute to true will cause spans to expand to accommodate long titles if necessary. */
		autoSizeHeaderSpans: Boolean;

		/** AutoChild created and embedded in the grid if ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver','showRollOver')}&#010 is <code>true</code> and ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOverCanvas','showRollOverCanvas')} is&#010 <code>true</code> or for selected records, if&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectedRollOverCanvas','showSelectedRollOverCanvas')} &#010 is true. This component will be created and displayed above the current rollOver&#010 row or cell.&#010 <P>&#010 Note that if this grid has frozen fields, the ${isc.DocUtils.linkForRef('type:AutoChild')} subsystem will use the &#010 <code>rollOverCanvas</code> configuration settings to create the ${isc.DocUtils.linkForRef('attr:ListGrid.frozenRollOverCanvas')}&#010 (displayed in the frozen listGrid body).&#010 <p>&#010 The <code>rollOverCanvas</code> has the following read-only attributes set:<br>&#010 - <code>this.grid</code> - a pointer to the grid<br>&#010 - <code>this.record</code> - a pointer to the current roll over record object in the grid */
		rollOverCanvas: Canvas /* AutoChild Canvas */;

		/** If this grid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')}, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderSpanTitlesInSortEditor','showHeaderSpanTitlesInSortEditor')} is true, this&#010 string will be inserted between the headerSpan title(s) and the field title in the field&#010 chooser grid on the ${isc.DocUtils.linkForRef('class:MultiSortDialog','multi-sort editor')} */
		sortEditorSpanTitleSeparator: String;

		/** Defaults to apply to the corner sort button. To modify this object, use&#010 ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults','ListGrid.changeDefaults()')} rather than replacing with an&#010 entirely new object. */
		sorterDefaults: object;

		/** How far should we render rows ahead of the currently visible area?  This is expressed as a&#010 ratio from viewport size to rendered area size.&#010 <P>&#010 Tweaking drawAheadRatio allows you to make tradeoffs between continuous scrolling speed vs&#010 initial render time and render time when scrolling by large amounts.&#010 <P>&#010 NOTE: Only applies when showAllRows is false. */
		drawAheadRatio: number /* float */;

		/** Criteria to be used when ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchData')} is set.&#010 <p>&#010 This property supports ${isc.DocUtils.linkForRef('group:dynamicCriteria')} - use ${isc.DocUtils.linkForRef('attr:Criterion.valuePath')}&#010 to refer to values in the ${isc.DocUtils.linkForRef('attr:Canvas.ruleScope')}. */
		initialCriteria: Criteria;

		/** ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')} are created via the ${isc.DocUtils.linkForRef('type:AutoChild')} pattern, hence&#010 <code>headerSpanConstructor</code>, <code>headerSpanDefaults</code> and&#010 <code>headerSpanProperties</code> are valid. */
		headerSpan: StatefulCanvas /* MultiAutoChild StatefulCanvas */;

		/** Whether cell contents should wrap during printing.  Equivalent to ${isc.DocUtils.linkForRef('attr:ListGrid.wrapCells')}, but&#010 specific to printed output. */
		printWrapCells: Boolean;

		/** How much padding should there be on the left of ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIcons','hilite icons')} by default?&#010 Can be overridden at the field level */
		hiliteIconLeftPadding: number;

		/** If true, show the field-header for the sorted field (or the first field in a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canMultiSort','multi-sort')} grid) in the selected state. */
		selectHeaderOnSort: Boolean;

		/** If set, provide UI for the user to remove records from the grid as an additional field&#010 showing the ${isc.DocUtils.linkForRef('attr:ListGrid.removeIcon')}, which, when clicked, will call&#010 ${isc.DocUtils.linkForRef('method:ListGrid.removeRecordClick')} which removes the row from the data set (or if&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.deferRemoval')} is true changes the ${isc.DocUtils.linkForRef('method:ListGrid.markRecordRemoved')} status&#010 for the record). Individual records can be marked to prevent removal - see&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.recordCanRemoveProperty')}.&#010 <P>&#010 To add a confirmation dialog before a record is removed, set&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.warnOnRemoval')}.&#010 <P>&#010 If deferring removal, the record will appear marked with the ${isc.DocUtils.linkForRef('attr:ListGrid.removedCSSText')}&#010 until the removal is committed via a call to ${isc.DocUtils.linkForRef('method:ListGrid.saveEdits')}.&#010 Otherwise, the record will disappear from view. If ${isc.DocUtils.linkForRef('attr:ListGrid.animateRemoveRecord')}&#010 is true, the removed record will appear to shrink out of view when it is removed.&#010 <P>&#010 By default the field will display the ${isc.DocUtils.linkForRef('attr:ListGrid.removeIcon')} next to each record, and&#010 will be rendered as the rightmost column. Two mechanisms exist to further modify this field:&#010 <ul>&#010 <li>To change the position of the remove-field, include an explicitly specified field with&#010     the attribute ${isc.DocUtils.linkForRef('attr:ListGridField.isRemoveField','isRemoveField:true')} set. This will then&#010     be used as the remove field instead of adding a field to the beginning of the set of&#010     columns.</li>&#010 <li>Additional direct configuration of the remove field may be achieved by modifying&#010     ${isc.DocUtils.linkForRef('attr:ListGrid.removeFieldProperties')}.</li>&#010 </ul>&#010 If ${isc.DocUtils.linkForRef('attr:ListGrid.deferRemoval')} is true, when a record is marked as removed, the the icon will&#010 change to display the ${isc.DocUtils.linkForRef('attr:ListGrid.unremoveIcon')} for this row. Clicking on this icon&#010 will call ${isc.DocUtils.linkForRef('method:ListGrid.unmarkRecordRemoved')} to mark the record as no longer pending&#010 deletion. */
		canRemoveRecords: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is set to <code>"checkbox"</code> this property&#010 determines the image to display in the checkbox field for a partially selected row.&#010 If unset, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanPartialImage')} will be used. Note that the special&#010 value "blank" means that no image will be shown. */
		checkboxFieldPartialImage: SCImgURL;

		/** The menu displayed when a cell is right clicked on. */
		spanContextMenu: Layout /* AutoChild Layout */;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:DetailViewer')} for displaying the details of a record&#010 in its expanded section when&#010 ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is <code>details</code>.  Note that&#010 only those fields&#010 which do not already appear in the grid are displayed in the expanded section.&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionDetailsProperties</code> and&#010 <code>listGrid.expansionDetailsDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionDetails: DetailViewer /* MultiAutoChild DetailViewer */;

		/** Property name on a record that will be checked to determine whether a record should&#010 be included when calculating totals for the ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary','grid summary')}. */
		includeInSummaryProperty: string;

		/** Width for hilite icons for this component.&#010 Overrides ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIconSize','hiliteIconSize')}.&#010 Can be overridden at the field level. */
		hiliteIconWidth: number;

		/** When enabled, the field shown by ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} causes records to be&#010 marked for future removal via ${isc.DocUtils.linkForRef('method:ListGrid.markRecordRemoved')} instead of immediately being&#010 removed.&#010 <P>&#010 When a record has been marked for removal, an icon in the&#010 <code>canRemoveRecords</code> field allowing it to be unmarked will be displayed.&#010 <P>&#010 If not explicitly specified by this property, removal of records will be deferred if&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoSaveEdits')} is false for the grid. */
		deferRemoval: boolean;

		/** Should the "Selected" style be applied to selected records? */
		showSelectedStyle: Boolean;

		/** Has no effect unless ${isc.DocUtils.linkForRef('attr:ListGrid.showBackgroundComponents')} is <code>true</code>.&#010 <P>&#010 Canvas created and embedded in the body behind a given record.   When&#010 ${isc.DocUtils.linkForRef('attr:ListGridRecord.backgroundComponent')} is set, this autoChild canvas&#010 will be constructed (if listGridRecord.backgroundComponent is not already a Canvas) and&#010 its properties combined with those of listGridRecord.backgroundComponent and then&#010 displayed behind a specific record in the page's z-order, meaning&#010 it will only be visible if the cell styling is transparent. */
		backgroundComponent: Canvas /* MultiAutoChild Canvas */;

		/** Enables or disables interactive sorting behavior for this listGrid. Does not&#010 affect sorting by direct calls to the ${isc.DocUtils.linkForRef('method:ListGrid.sort','sort')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.setSort','setSort')} methods. */
		canSort: Boolean;

		/** The CSS Style name for the ${isc.DocUtils.linkForRef('attr:ListGrid.rowNumberField')}. */
		rowNumberStyle: CSSStyleName;

		/** If set to false, dropping over an empty part of the grid body is disallowed and the&#010 no-drop indicator is displayed. */
		canDropInEmptyArea: Boolean;

		/** Height for value icons for this listGrid.&#010 Overrides ${isc.DocUtils.linkForRef('attr:ListGrid.valueIconSize')}.&#010 Can be overridden at the field level */
		valueIconHeight: number;

		/** Adds an item to the header context menu allowing users to launch a dialog to define a new&#010 text field that can contain both user-defined text and the formatted values present in other &#010 fields, using the ${isc.DocUtils.linkForRef('class:SummaryBuilder')}.&#010 <P>&#010 User-added summary fields can be persisted via ${isc.DocUtils.linkForRef('method:ListGrid.getFieldState')} and &#010 ${isc.DocUtils.linkForRef('method:ListGrid.setFieldState')}. */
		canAddSummaryFields: boolean;

		/** GridRenderer used to render the dataset.&#010 <p>&#010 Note that this is a multi-instance component when there are frozen fields because in&#010 addition to the primary body AutoChild, a "frozen body" AutoChild is created to render&#010 the frozen portion of the dataset. */
		body: GridRenderer /* MultiAutoChild GridRenderer */;

		/** Height of the error icon, if we're showing icons when validation errors occur. */
		errorIconHeight: number /* integer */;

		/** If true, shows ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','recordComponents')} in cells, rather&#010 than just in records. */
		showRecordComponentsByCell: boolean;

		/** ${isc.DocUtils.linkForRef('attr:StretchImgButton.titleStyle')} to apply to the buttons in the header, and the sorter,&#010 for this ListGrid.&#010 Note that this will typically only have an effect if&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.headerButtonConstructor')} is set to ${isc.DocUtils.linkForRef('class:StretchImgButton')} or a subclass&#010 thereof. */
		headerTitleStyle: CSSStyleName;

		/** If this grid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')}, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderSpanTitlesInFormulaBuilder','showHeaderSpanTitlesInFormulaBuilder')} is true,&#010 this string will be inserted between the headerSpan title(s) and the field title in the&#010 field chooser grid in the ${isc.DocUtils.linkForRef('class:FormulaBuilder')} and ${isc.DocUtils.linkForRef('class:SummaryBuilder')}. */
		formulaBuilderSpanTitleSeparator: String;

		/** Height for the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')}, ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')}&#010 and ${isc.DocUtils.linkForRef('attr:ListGrid.booleanPartialImage')}.&#010 Note: If ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} is unset, the ${isc.DocUtils.linkForRef('attr:CheckboxItem.checkedImage')}&#010 will be used to indicate a true value in a boolean field. In this case this property is&#010 ignored in favor of ${isc.DocUtils.linkForRef('attr:CheckboxItem.valueIconHeight')}. */
		booleanImageHeight: number;

		/** Warning message to show the user on a click on the 'remove' icon&#010 if ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is true and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.warnOnRemoval')} is true. */
		warnOnRemovalMessage: string;

		/** If true, when the user navigates to a cell using arrow keys and hits Enter,&#010 the cell will respond to a click event. */
		generateClickOnEnter: Boolean;

		/** True if this listGrid is grouped, false otherwise */
		isGrouped: boolean;

		/** The amount of empty space, in pixels, surrounding each value in its cell. */
		cellPadding: number;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','this.canFreezeFields')} is true, this string will be shown as the&#010 title for the menu item to freeze a currently unfrozen field.&#010 <P>&#010 This is a dynamic string - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed, with <code>title</code> available as a variable containing&#010 the field title.&#010 <P>&#010 Default value returns "Freeze " + the field's summary title. */
		freezeFieldText: HTMLString;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderShadow')} is true, the ${isc.DocUtils.linkForRef('attr:Canvas.shadowVOffset')} for&#010 the header shadow */
		headerShadowVOffset: Number;

		/** Display format to use for fields specified as type 'time'.  May also be specified at&#010 the field level via ${isc.DocUtils.linkForRef('attr:ListGridField.timeFormatter')}.<br>&#010 If unset, time fields will be formatted based on the system wide&#010 ${isc.DocUtils.linkForRef('classAttr:Time.shortDisplayFormat')}.<br>&#010 If this field is editable, the timeFormatter will also be passed to the editor&#010 created to edit any time type fields as ${isc.DocUtils.linkForRef('attr:TimeItem.timeFormatter')} */
		timeFormatter: TimeDisplayFormat;

		/** Should we horizontally clip cell contents, or allow columns to expand horizontally to&#010 show all contents?&#010 <P>&#010 If we allow columns to expand, the column width is treated as a minimum.&#010 <P>&#010 NOTE: the header does not automatically respond to expanded field widths.&#010 If your grid is showing a header we'd recommend developers consider&#010 setting ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} rather than using this attribute. */
		fixedFieldWidths: Boolean;

		/** When ${isc.DocUtils.linkForRef('classMethod:isc.setScreenReaderMode','screen reader mode')} is enabled,&#010 this invisible separator string is written out between each cell value. This&#010 string will be picked up by screen readers allowing them to more obviously identify&#010 to the user the different cell values as the contents of a row are read aloud. The&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.screenReaderRowSeparator','screenReaderRowSeparator')} string if any will&#010 be written out after the last cell in a row to separate the last cell's value from&#010 the screen reader's announcement of the row's number and total number of rows in the grid&#010 (such as "3 of 20").&#010 <P>&#010 This attribute may be set to null to disable the feature.&#010 <P>&#010 Note that screen readers vary widely on which punctuation symbols are read aloud, and&#010 sometimes it depends on the context of the punctuation. However, the widely-used JAWS, NVDA,&#010 and VoiceOver screen readers all read the forward slash '/' as "slash".&#010 See <a href='http://www.deque.com/blog/dont-screen-readers-read-whats-screen-part-1-punctuation-typographic-symbols/' target='_blank'>Why Don’t Screen Readers Always Read What’s on the Screen? Part 1: Punctuation and Typographic Symbols</a>&#010 for a table of findings on which punctuation symbols are read aloud by JAWS, NVDA,&#010 and VoiceOver. */
		screenReaderCellSeparator: HTMLString;

		/** If this list grid is showing any ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen')} fields, and a horizontal&#010 scrollbar is visible at the bottom of the liquid columns, should an equivalent scrollbar gap&#010 be left visible below the frozen columns?<br>&#010 Note that if set to <code>true</code> any backgroundColor or border applied to the ListGrid&#010 will show up below the bottom row of the frozen column(s). */
		shrinkForFreeze: Boolean;

		/** Initial ${isc.DocUtils.linkForRef('type:ListGridFieldState','field state')} for the grid.&#010 <p>&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.viewState')} can be used to initialize all view properties of the grid.&#010 When doing so, <code>fieldState</code> is not needed because <code>viewState</code>&#010 includes it as well. If both are provided, <code>fieldState</code> has priority for&#010 field state.&#010 &#010 <P>&#010 To retrieve current state call ${isc.DocUtils.linkForRef('method:ListGrid.getFieldState','getFieldState')}.&#010  */
		fieldState: String;

		/** An automatically generated field that displays the current row number when&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showRowNumbers','showRowNumbers')} is true. */
		rowNumberField: ListGridField /* AutoChild ListGridField */;

		/** When the user starts editing a row, should the row also be selected?&#010  <P>&#010  Note that  when this attribute is set to <code>true</code>, other all other rows in the grid&#010  will be deselected when a record is selected due to editing. */
		selectOnEdit: Boolean;

		/** When exporting data to Excel/OpenOffice format using ${isc.DocUtils.linkForRef('method:ListGrid.exportData','exportData()')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData','exportClientData()')}, background color to use &#010 for even-numbered rows, to create a "banded" or "ledger" effect.  Odd-numbered rows will &#010 use the ${isc.DocUtils.linkForRef('attr:ListGrid.exportDefaultBGColor')}.&#010 <p>&#010 See ${isc.DocUtils.linkForRef('group:exportBGColor')} for an overview. */
		exportAlternateRowBGColor: CSSColor;

		/** The ${isc.DocUtils.linkForRef('type:ExpansionMode')} for records in this grid.&#010 Default <code>null</code> value means no expansion. */
		expansionMode: ExpansionMode;

		/** When the grid body gets keyboard focus, should we highlight the current focus row,&#010 using the rollover cell style?&#010 <P>&#010 This property may be explicitly set to control this behavior independently of&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver')}.&#010 Otherwise (if this property is null), we will show the roll-over styling for the&#010 keyboard focus row if ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver')} is true. */
		hiliteRowOnFocus: Boolean;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldPartialImage')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}. */
		printCheckboxFieldPartialImage: SCImgURL;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is set to <code>"checkbox"</code> this property&#010 may be set to govern the height of the checkbox image displayed to indicate whether a row is&#010 selected. If unset, the checkboxField image will be sized to match the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanImageHeight')} for this grid. */
		checkboxFieldImageHeight: number /* integer */;

		/** Indicates whether fields in this listGrid can be resized by dragging header&#010 fields. */
		canResizeFields: Boolean;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.allowFilterOperators')} is enabled, whether to show the ${isc.DocUtils.linkForRef('attr:ListGrid.operatorIcon')} for all&#010 filterable fields, or only for fields where the user has explicitly chosen a search operator&#010 different from the default operator for the field.&#010 <p>&#010 The default operator for a field is determined by ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchTextMatchStyle')} or by&#010 setting ${isc.DocUtils.linkForRef('attr:ListGridField.filterOperator')} for a specific field. */
		alwaysShowOperatorIcon: Boolean;

		/** Should we show the header for this ListGrid? */
		showHeader: Boolean;

		/** While scrolling an incrementally rendered grid, using the mouseWheel, time in &#010 milliseconds to wait before redrawing, after the last mouseWheel movement by the user.  &#010 If not specified ${isc.DocUtils.linkForRef('attr:ListGrid.scrollRedrawDelay')} will be used as a default for both&#010 drag scrolling and mouseWheel scrolling.&#010 <P>&#010 Note that if specified, this value will typically be larger than &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.scrollRedrawDelay')}. From experimentation, the default setting of &#010 <code>250</code> is typically enough time for a user to rapidly scroll through a&#010 grid (rotating the scroll wheel with repeated flicks), without redrawing between&#010 rotations, but this will differ depending on how long the redraw takes. A larger&#010 delay may be warranted for grids with large numbers of columns, heavy custom &#010 formatting, etc.&#010 <P>&#010 See also&#010 ${isc.DocUtils.linkForRef('attr:GridRenderer.instantScrollTrackRedraw')} for cases where this delay is skipped. */
		scrollWheelRedrawDelay: number /* Integer */;

		/** If specified, the selection object for this list will use this property to mark records&#010 as selected.  In other words, if this attribute were set to <code>"isSelected"</code>&#010 any records in the listGrid data where <code>"isSelected"</code> is <code>true</code>&#010 will show up as selected in the grid. Similarly if records are selected within the grid&#010 after the grid has been created, this property will be set to true on the selected&#010 records. */
		selectionProperty: string;

		/** Automatically generated canvas embedded in the grid's frozen body as a &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.rollUnderCanvas','roll under canvas')}.&#010 This component will be created and displayed above the current rollOver&#010 row or cell in the frozen body.&#010 <P>&#010 The frozenRollUnderCanvas will be created using the ${isc.DocUtils.linkForRef('type:AutoChild')} subsystem, and&#010 will derive its configuration from the ${isc.DocUtils.linkForRef('attr:ListGrid.rollUnderCanvas')}&#010 autoChild properties (<code>"rollUnderCanvasProperties"</code>, et al).&#010 <p>&#010 The <code>frozenRollUnderCanvas</code> has the following read-only attributes set:<br>&#010 - <code>this.grid</code> - a pointer to the grid<br>&#010 - <code>this.record</code> - a pointer to the current roll over record object in the grid */
		frozenRollUnderCanvas: Canvas;

		/** Whether to show a context menu with standard items for all context clicks on rows in the&#010 body. */
		showCellContextMenus: Boolean;

		/** If set to true, an advanced field picker based on the ${isc.DocUtils.linkForRef('class:FieldPicker')} will be shown instead&#010 of the column picker submenu if there are more fields in the grid than&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.advancedFieldPickerThreshold')}.&#010 <P>&#010 When there are large numbers of available fields, the FieldPicker-based interface is more&#010 usable for both defining visible fields and defining field order. */
		useAdvancedFieldPicker: Boolean;

		/** Should this listGrid display a filter row.  If true, this ListGrid&#010 will be drawn with a single editable row, (separate from the body) with a filter button.&#010 <P>&#010 Values entered into this row are used as filter criteria to filter this List's data on&#010 enter-keypress or filter button click. ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchTextMatchStyle')} determines&#010 the textMatchStyle for the request passed to ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')}.&#010 <P>&#010 The default ${isc.DocUtils.linkForRef('attr:FormItem.operator','search operator')} for an item in the filterEditor can&#010 be set via ${isc.DocUtils.linkForRef('attr:ListGridField.filterOperator')}.   When <code>field.filterOperator</code> &#010 has been set calls to retrieve the criteria from the grid return ${isc.DocUtils.linkForRef('object:AdvancedCriteria')}.  &#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.allowFilterOperators')} for a UI that allows end users to change the search&#010 operator on the fly&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('method:ListGrid.filterData')} or ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')} is called&#010 directly while the filter editor is showing, the filter editor values will be updated to&#010 reflect the new set of criteria. If you wish to retain the user entered filter criteria&#010 and modify a subset of field values programmatically, this can be achieved by&#010 copying the existing set of criteria and adding other changes - something&#010 like this:&#010 &#010 <pre><code>&#010   var newCriteria = myListGrid.getFilterEditorCriteria();&#010   isc.DataSource.combineCriteria(newCriteria, {&#010      field1:"new value1",&#010      field2:"new value2"&#010   });&#010   myListGrid.setCriteria(newCriteria);&#010 </code></pre>&#010 &#010 &#010 In this example code we're using ${isc.DocUtils.linkForRef('method:ListGrid.getFilterEditorCriteria')} rather than&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getCriteria')} - this ensures that if the user has typed a new value into&#010 the filter editor, but not yet clicked the filter button, we pick up the value the user&#010 entered.  This sample code uses ${isc.DocUtils.linkForRef('classMethod:DataSource.combineCriteria')} to combine the&#010 existing filterEditorCriteria with some new custom criteria.  This technique is&#010 applicable to both simple and advanced criteria.&#010 <P>&#010 If you call <code>filterData()</code> and pass in criteria for dataSource&#010 fields that are not present in the ListGrid, these criteria will continue to be applied&#010 along with the user-visible criteria.&#010 <P>&#010 <b>filterEditor and advanced criteria</b>: If a developer calls <code>filterData()</code>&#010 on a ListGrid and passes in ${isc.DocUtils.linkForRef('object:AdvancedCriteria')}, expected behavior of the filter&#010 editor becomes ambiguous, since AdvancedCriteria has far more complex filter&#010 expression support than the ordinary filterEditor can represent.&#010 <P>&#010 Default behavior for AdvancedCriteria will combine the AdvancedCriteria with the values&#010 in the filter editor as follows:&#010 <ul>&#010 <li>If the top level criteria has operator of type "and":<br>&#010  Each field in the top level&#010  criteria array for which a 'canFilter' true field is shown in the listGrid will show up&#010  if the specified operator matches the default filter behavior&#010  (based on the ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchTextMatchStyle')}).<br>&#010  If the user enters values in the filter editor, these will be combined with the&#010  existing AdvancedCriteria by either replacing or adding field level criteria at the top&#010  level.</li>&#010 <li>If the top level criteria is a single field-criteria:<br>&#010  If the field shows up in the listGrid and is canFilter:true, it will be displayed to&#010  the user (if the operator matches the default filter behavior for the field).<br>&#010  If the user enters new filter criteria in the filterEditor, they will be combined with&#010  this existing criterion via a top level "and" operator, or if the user modifies the&#010  field for which the criterion already existed, it will be replaced.</li>&#010 <li>Otherwise, if there are multiple top level criteria combined with an "or" operator,&#010  these will not be shown in the filter editor. Any filter parameters the user enters will&#010  be added to the existing criteria via an additional top level "and" operator, meaning&#010  the user will essentially filter a subset of the existing criteria</li>&#010 </ul> */
		showFilterEditor: boolean;

		/** Enables cell-level selection behavior as well as&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.useCellRollOvers','cell-level rollover')}.&#010 <P>&#010 To query and manipulate cell-level selections, use ${isc.DocUtils.linkForRef('method:ListGrid.getCellSelection')} to retrieve&#010 the ${isc.DocUtils.linkForRef('class:CellSelection')}.&#010 <P>&#010 Note that the ListGrid has a data model of one ${isc.DocUtils.linkForRef('object:Record')} per row, unlike the&#010 ${isc.DocUtils.linkForRef('class:CubeGrid')} which supports one ${isc.DocUtils.linkForRef('object:CellRecord')} per cell.  For this reason&#010 record-oriented APIs that act on the selection will act on entire Records that have&#010 <i>any</i> selected cells (examples include drag and drop and transferSelectedData()).&#010 <P>&#010 More generally, <code>canSelectCells</code> is primarily intended to enable developers&#010 to build Excel-like interactions on local datasets, by using ${isc.DocUtils.linkForRef('method:ListGrid.setData')} plus&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.saveLocally')}:true rather than record-oriented DataSources and data binding.&#010 <P>&#010 The following keyboard selection behaviors are enabled with this property in&#010 addition to standard single-selection Arrow Key navigation:&#010 <P>&#010 SHIFT +        [Arrow Key]:  begin or continue incremental selection&#010 <P>&#010 SHIFT + CTRL + [Arrow Key]:  incremental selection to the end of row or column&#010 <P>&#010 CTRL  + A: select all cells (enabled only with ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectAll')})&#010 <P>&#010 Incremental selection allows selection of rows and columns of cells via keyboard&#010 or mouse provided the shift key is down.  Behavior is designed to match Excel.&#010 Thus, if a previous selection has begun, cells will be selected from that origin.&#010 <P>&#010 Users may also navigate through cells using the <i>Tab</i> and <i>Shift+Tab</i>&#010 keypresses if ${isc.DocUtils.linkForRef('attr:ListGrid.navigateOnTab')} is true. When a user tabs to the&#010 end of the row, the ${isc.DocUtils.linkForRef('attr:ListGrid.rowEndEditAction')} is used to determine whether&#010 to shift selection to the next row, return to the beginning of the same row, or&#010 simply move on through the page's tab order. */
		canSelectCells: Boolean;

		/** If the user is editing a record in this listGrid, and attempts to navigate to a field&#010 beyond the end of the row, via tab (or shift-tab off the first editable field), this&#010 property determines what action to take:<ul>&#010 <li>"next": start editing the next (or previous) record in the list&#010 <li>"same": put focus back into the first editable field of the same record.&#010 <li>"done": hide the editor&#010 <li>"stop": leave focus in the cell being edited&#010 <li>"none": no action&#010 </ul> */
		rowEndEditAction: RowEndEditAction;

		/** The context menu displayed for column headers. */
		headerContextMenu: Canvas /* AutoChild Canvas */;

		/** If this grid is ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','grouped')} and ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummaryInHeader')}&#010 is true, instead of group header nodes showing up with a single cell value spanning the full&#010 set of columns, summaries for each field will show up in the appropriate columns of the&#010 header node.&#010 <P>&#010 In this case there are 2 options for where the group title will show up. Developers may&#010 specify an existing field to put the title values into via ${isc.DocUtils.linkForRef('attr:ListGrid.groupTitleField')}.&#010 If no groupTitleField is specified, this property may be set to <code>true</code>&#010 which causes a <code>groupTitleColumn</code> to be automatically generated.&#010 Each group header will show the group title in this column (records within the group will&#010 not show a value for this column). The column appears in the leftmost position within the&#010 grid (unless ${isc.DocUtils.linkForRef('attr:ListGrid.showRowNumbers')} is true, in which case this column shows up&#010 in the second-leftmost position), and by default will auto-fit to its data.&#010 <P>&#010 To customize this field, developers may modify&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.groupTitleColumnProperties')}&#010 or&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.groupTitleColumnDefaults')} at the class level. */
		showGroupTitleColumn: Boolean;

		/** The field whose contents to show in the expanded portion of a record when&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords','canExpandRecords')} is <code>true</code> and&#010 ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is <code>detailField</code>. */
		detailField: String;

		/** If the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionUnderCanvas','selectionUnderCanvas')} is enabled, setting&#010 this property to <code>true</code> ensures that when the <code>selectionUnderCanvas</code>&#010 is displayed it is animated into view via ${isc.DocUtils.linkForRef('method:Canvas.animateShow')}. Note that the&#010 animation effect may be customized via ${isc.DocUtils.linkForRef('attr:Canvas.animateShowEffect')},&#010 ${isc.DocUtils.linkForRef('attr:Canvas.animateShowTime')} and ${isc.DocUtils.linkForRef('attr:Canvas.animateShowAcceleration')} set in&#010 <code>selectionUnderCanvasProperties</code>. */
		animateSelectionUnder: Boolean;

		/** Minimum size, in pixels, for ListGrid headers. */
		minFieldWidth: number /* number */;

		/** If set to true, the ${isc.DocUtils.linkForRef('attr:ListGrid.useAdvancedFieldPicker','advanced field picker')} provides&#010 an interface allowing users to modify fields' titles.&#010 <P>&#010 Note that when enabled, the ${isc.DocUtils.linkForRef('method:ListGrid.getFieldState','field state')} for this component&#010 will include field titles. */
		canEditTitles: boolean;

		/** If true, validation will not occur as a result of cell editing for this grid. */
		neverValidate: boolean;

		/** If <code>record[this.isSeparatorProperty]</code> is set for some record, the&#010 record will be displayed as a simple separator row. */
		isSeparatorProperty: string;

		/** Advanced property - when generating printHTML for a large ListGrid, rows are printed in&#010 batches in order to avoid triggering a native "script is running slowly" browser dialog.&#010 <P>&#010 For grids with exceptional numbers of columns or complex formatting logic, this number&#010 might need to be adjusted downward. */
		printMaxRows: number /* number */;

		/** When exporting data to Excel/OpenOffice format using ${isc.DocUtils.linkForRef('method:ListGrid.exportData')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData')}, causes the ${isc.DocUtils.linkForRef('attr:ListGrid.headerHeight')} and&#010 ${isc.DocUtils.linkForRef('attr:HeaderSpan.height','headerSpan heights')} to be applied to the corresponding cells in the&#010 spreadsheet. */
		exportHeaderHeights: boolean;

		/** This setting causes the ${isc.DocUtils.linkForRef('attr:ListGrid.rollOverCanvas','roll over canvas')} to be&#010 displayed when the user rolls over selected records in the grid (but not when&#010 rolling over other records). This can be useful to display a "Selected Over"&#010 appearance which can't be easily achieved via standard cell styling. */
		showSelectedRollOverCanvas: Boolean;

		/** When multiple fields are sorted, the Style to apply to the numeral that appears after the&#010 sort-arrows in the header-buttons of sorted fields. */
		sortNumeralStyle: CSSStyleName;

		/** Class level defaults to apply to the ${isc.DocUtils.linkForRef('class:MultiSortDialog')} which gets automatically&#010 generated when ${isc.DocUtils.linkForRef('method:DataBoundComponent.askForSort')} is called.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderSpanTitlesInSortEditor')} and ${isc.DocUtils.linkForRef('attr:ListGrid.sortEditorSpanTitleSeparator')} */
		multiSortDialogDefaults: MultiSortDialog /* MultiSortDialog properties */;

		/** Instance of ${isc.DocUtils.linkForRef('class:FieldPickerWindow')} used if ${isc.DocUtils.linkForRef('attr:ListGrid.useAdvancedFieldPicker')} is set. */
		fieldPickerWindow: FieldPickerWindow /* AutoChild FieldPickerWindow */;

		/** If <code>true</code>, the grid contents are redrawn in real time as fields are resized.&#010 This can be slow with a large grid and/or on some platforms. By default, this is enabled&#010 in modern desktop browsers. This is automatically switched off in mobile browsers. */
		resizeFieldsInRealTime: boolean;

		/** If set to false, do not show the ${isc.DocUtils.linkForRef('attr:ListGrid.asynchGroupingPrompt')} dialog during&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.groupByAsyncThreshold','asynchronous grouping')}. */
		showAsynchGroupingPrompt: Boolean;

		/** The CSS style name applied to the loadingDataMessage string if displayed. */
		loadingDataMessageStyle: CSSStyleName;

		/** Indicates whether the field picker item and submenu should be present in the header&#010 context menu. This menu allows the user to hide visible fields and show hidden fields.&#010 <p>&#010 By default only fields explicitly included in the ${isc.DocUtils.linkForRef('attr:ListGrid.fields')} array will&#010 be available in this menu, unless ${isc.DocUtils.linkForRef('attr:ListGrid.canPickOmittedFields')} is set to true for&#010 a databound grid.&#010 <p>&#010 A specific field can be omitted from the column picker via ${isc.DocUtils.linkForRef('attr:ListGridField.canHide')}. */
		canPickFields: Boolean;

		/** When ${isc.DocUtils.linkForRef('type:ExpansionMode')} is <i>editor</i>, should the row be collapsed following a&#010 save initiated by the expansion-component's ${isc.DocUtils.linkForRef('attr:ListGrid.expansionEditorSaveButton','save button')}. */
		expansionEditorCollapseOnSave: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is true and ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')}&#010 is <code>"related"</code>, this property specifies the dataSource for the&#010 related records grid to be shown embedded in expanded records.&#010 <P>&#010 This property may also be specified on a per-record basis - see&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.recordDetailDSProperty')} */
		detailDS: String;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is enabled, this icon will be shown in the&#010 auto generated field fro removing records if the record has been marked as removed via&#010 ${isc.DocUtils.linkForRef('method:ListGrid.markRecordRemoved')}. At this point, clicking on the icon will&#010 unmark the record as removed. */
		unremoveIcon: SCImgURL;

		/** This property may be set to customize the css style for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverStyle: CSSStyleName;

		/** Describes the default state of ListGrid groups when groupBy is called.&#010&#010 Possible values are:&#010 <ul>&#010 <li>"all": open all groups&#010 <li>"first": open the first group&#010 <li>"none": start with all groups closed&#010 <li>Array of group values that should be opened&#010 </ul> */
		groupStartOpen: GroupStartOpen | Array;

		/** The CSS style that ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','group')} rows will have.&#010 <P>&#010 Note that this is not a ${isc.DocUtils.linkForRef('method:ListGrid.getBaseStyle','base style')}, so, if this&#010 property is set, group nodes will not show stateful styling&#010 (different styles for ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver')},&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.alternateRecordStyles')}, etc). To enable stateful styling for&#010 groupNodes, set this property to <code>null</code> and specify a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.groupNodeBaseStyle')} */
		groupNodeStyle: String;

		/** Should cells in this grid be allowed to span multiple rows?&#010 If set to <code>true</code>, the ${isc.DocUtils.linkForRef('method:ListGrid.getRowSpan')} method will be&#010 called for every cell when rendering out the listGrid to determine how many&#010 rows the cell should span.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('method:ListGrid.getRowSpan')} for more details */
		allowRowSpanning: Boolean;

		/** If true, the set of fields given by the "default binding" (see &#010 ${isc.DocUtils.linkForRef('attr:DataBoundComponent.fields')}) is used, with any fields specified in&#010 <code>component.fields</code> acting as overrides that can suppress or modify the&#010 display of individual fields, without having to list the entire set of fields that&#010 should be shown.&#010 <P>&#010 If <code>component.fields</code> contains fields that are not found in the DataSource,&#010 they will be shown after the most recently referred to DataSource field.  If the new&#010 fields appear first, they will be shown first.&#010 <P>&#010 ${isc.DocUtils.linkForExampleId('validationFieldBinding', 'This example')} shows a mixture of component&#010 fields and DataSource fields, and how they interact for validation.&#010 <P>&#010 This setting may be cleared if a ${isc.DocUtils.linkForRef('class:FieldPicker')} is used to edit the component's field&#010 order. */
		useAllDataSourceFields: boolean;

		/** Should we start editing when this widget receives focus (if this ListGrid supports&#010 editing)?&#010 <P>&#010 Note that this property being set to true will cause editing to occur on a single&#010 click, even if ${isc.DocUtils.linkForRef('attr:ListGrid.editEvent')} is <code>"doubleClick"</code>, because single clicking&#010 the grid will place keyboard focus there automatically.&#010 <P>&#010 If this property is set together with ${isc.DocUtils.linkForRef('attr:ListGrid.listEndEditAction')} being set to "next", &#010 users can create a new edit row in an empty grid by simply tabbing into the grid. */
		editOnFocus: boolean;

		/** Default height for the ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRow','summary row autoChild')}. Note that this&#010 height is a minimum - the summary row has ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')} set to "vertical" so&#010 if multiple rows are visible in the grid summary, the summaryRow component&#010 will expand to accommodate them. */
		summaryRowHeight: number /* number */;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid, this&#010 attribute will be shown as the menu item title to sort a field in ascending order. */
		sortFieldAscendingText: string;

		/** Specifies the number of the field by which to sort this listGrid. Column numbers&#010 start at 0 for the left-most column. */
		sortFieldNum: number;

		/** Should the header be included in the tab-order for the page? If not explicitly specified,&#010 the header will be included in the tab order for the page if ${isc.DocUtils.linkForRef('classMethod:isc.setScreenReaderMode','isc.setScreenReaderMode()')} is&#010 called. */
		canTabToHeader: boolean;

		/** The title for the ${isc.DocUtils.linkForRef('attr:ListGrid.expansionEditorSaveButton')}. */
		expansionEditorSaveButtonTitle: String;

		/** A Toolbar used to manager the headers shown for each column of the grid. */
		header: Layout /* AutoChild Layout */;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canAcceptDroppedRecords')} is true for this listGrid, this property governs&#010 whether the user can drop between, or over records within the grid.&#010 This controls what ${isc.DocUtils.linkForRef('type:RecordDropPosition')} is passed to the ${isc.DocUtils.linkForRef('method:ListGrid.recordDrop')}&#010 event handler. */
		recordDropAppearance: RecordDropAppearance;

		/** Event that will trigger inline editing, see ${isc.DocUtils.linkForRef('type:ListGridEditEvent')} for options.&#010 <P>&#010 Note this setting has no effect unless ${isc.DocUtils.linkForRef('attr:ListGrid.canEdit')} has been set to enable editing.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.editOnFocus')} and ${isc.DocUtils.linkForRef('method:ListGrid.startEditing')}. */
		editEvent: ListGridEditEvent;

		/** Title used for the text box shown when ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteCanReplaceValue')} is set. */
		hiliteReplaceValueFieldTitle: string;

		/** Properties to apply to the ${isc.DocUtils.linkForRef('class:MultiSortDialog')} which gets automatically generated&#010 when ${isc.DocUtils.linkForRef('method:DataBoundComponent.askForSort')} is called.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderSpanTitlesInSortEditor')} and ${isc.DocUtils.linkForRef('attr:ListGrid.sortEditorSpanTitleSeparator')} */
		multiSortDialogProperties: MultiSortDialog /* MultiSortDialog properties */;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords','canExpandRecords')} is true and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.expansionMode','expansionMode')} is <i>editor</i>, the prompt to display&#010 in a dialog when an expanded row is collapsed while it's nested editor has changed values. */
		expansionEditorSaveDialogPrompt: string;

		/** If true, when this component is first drawn, automatically call <code>this.fetchData()</code>.&#010 Criteria for this fetch may be picked up from ${isc.DocUtils.linkForRef('attr:ListGrid.initialCriteria')}, and textMatchStyle may&#010 be specified via ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchTextMatchStyle','autoFetchTextMatchStyle')}.&#010 <P>&#010 <span style='color:red'>NOTE:</span> if <code>autoFetchData</code> is set, calling&#010 ${isc.DocUtils.linkForRef('method:ListGrid.fetchData','fetchData()')} before draw will cause two requests to be issued, one from the manual&#010 call to fetchData() and one from the autoFetchData setting.  The second request will use&#010 only ${isc.DocUtils.linkForRef('attr:ListGrid.initialCriteria')} and not any other criteria or settings from the first request.&#010 Generally, turn off autoFetchData if you are going to manually call ${isc.DocUtils.linkForRef('method:ListGrid.fetchData','fetchData()')} at any time. */
		autoFetchData: boolean;

		/** Custom CSS text to be applied to cells with pending edits that have not yet been&#010 submitted.<br>&#010 For further customization of styling for cells with pending edits use&#010 <code>this.editPendingBaseStyle</code> instead. */
		editPendingCSSText: string;

		/** The prompt to show when the mouse hovers over the Filter button in the FilterEditor. */
		filterButtonPrompt: String;

		/** When exporting data to Excel/OpenOffice format using ${isc.DocUtils.linkForRef('method:ListGrid.exportData')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData')}, whether field&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.align','horizontal header alignments')} and &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.cellAlign','data value alignments')} should be replicated in the resulting &#010 spreadsheet. &#010 <p>&#010 If this attribute is not set, cells will be assigned a default alignment by the spreadsheet,&#010 which is typically right-aligned for numeric and date values, and left-aligned for &#010 everything else (including dates and numbers that have been exported as strings, as would&#010 be the case, for example, if ${isc.DocUtils.linkForRef('attr:DSRequest.exportDatesAsFormattedString')} is set) */
		exportFieldAlignments: boolean;

		/** When animating record removal&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.animateRemoveRecord','(see animateRemoveRecord)')}, if&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.animateRemoveSpeed')} is not&#010 set, this property designates the duration of the animation in ms. */
		animateRemoveTime: number;

		/** Image to display for a false value in a boolean field. Default <code>null</code> value&#010 or the special value "blank" means no image will be displayed.&#010 <P>&#010 To turn this off explicitly set ${isc.DocUtils.linkForRef('attr:ListGridField.suppressValueIcon')} to true&#010 <P>&#010 If this, ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.booleanPartialImage')}&#010 are unset, this will be set to the default ${isc.DocUtils.linkForRef('attr:CheckboxItem.uncheckedImage')}.&#010 <P>&#010 When ${isc.DocUtils.linkForRef('group:skinning','spriting')} is enabled, this property will not &#010 be used to locate an image, instead, the image is drawn via CSS based on the &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanBaseStyle')} property. */
		booleanFalseImage: SCImgURL;

		/** if ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents')} is true, how should the component appear within&#010 the cell. Valid options are&#010 <ul><li><code>"within"</code>: the component will be rendered inside the record / cell.&#010  ${isc.DocUtils.linkForRef('attr:Canvas.snapTo')} may be set to specify where the component should render within&#010  the row or cell, and ${isc.DocUtils.linkForRef('attr:Canvas.snapOffsetTop')} / ${isc.DocUtils.linkForRef('attr:Canvas.snapOffsetLeft')} may&#010  be set to indent recordComponents within their parent cells.&#010  Note that if unset, the component will show up at the top/left edge&#010  for components embedded within an entire row, or for per-cell components, cell&#010  align and valign will be respected.  Note also that, when rendering components "within"&#010  cells, specified component heights will be respected and will change the height of the&#010  row.  However, if you want components to completely fill a cell at it's default height,&#010  set height: "100%" or rows will render at the default height of the component. </li>&#010 <li><code>"expand"</code>: the component will be written into the cell below the&#010  normal cell content, causing the cell to expand vertically to accommodate it.&#010 <li><code>null</code>: If this attribute is unset, we will default to showing&#010  recordComponents with position <code>"within"</code> if&#010  ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponentsByCell')} is true, otherwise using <code>"expand"</code>&#010  logic.&#010 </ul> */
		recordComponentPosition: EmbeddedPosition;

		/** If this property is true, any mouse click outside of the open cell editors&#010      will end editing mode, hiding the cell editors and saving any changes to those&#010      cell values. */
		modalEditing: boolean;

		/** If true, when folders are opened / closed children will be animated into view.&#010 <P>&#010 For a ListGrid, this property applies when ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','grouping')} is enabled. */
		animateFolders: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')} is set to <code>"horizontal"</code> or <code>"both"</code>&#010 this property provides an upper limit on how far the ListGrid will expand horizontally to&#010 accommodate its content. Value may be specified as a numeric pixel value or&#010 a percentage value.&#010 <P>&#010 If content exceeds this width, scrollbars will be introduced as usual.&#010 In addition to this property, ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxColumns')} allows you to limit&#010 horizontal expansion based on the number of columns to be rendered. */
		autoFitMaxWidth: Integer | String;

		/** Default background color to use when exporting data to Excel/OpenOffice format using&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportData','exportData()')} or &#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData','exportClientData()')}.&#010 <p>&#010 If unset (the default), cells that are not provided a background color by more specific APIs&#010 will be the default background color used by the spreadsheet program where they are viewed.&#010 <p>&#010 See ${isc.DocUtils.linkForRef('group:exportBGColor')} for an overview. */
		exportDefaultBGColor: CSSColor;

		/** ${isc.DocUtils.linkForRef('type:SCClassName','SmartClient Class')} to use for headerSpans.  Typically a ${isc.DocUtils.linkForRef('class:Button')} or&#010 ${isc.DocUtils.linkForRef('class:StretchImgButton')} subclass.&#010 <P>&#010 If unset, headerSpans will be created using the ${isc.DocUtils.linkForRef('attr:ListGrid.headerButtonConstructor')}. */
		headerSpanConstructor: SCClassName;

		/** Should listGrids automatically size date fields to fit their values or titles?&#010 If set to <code>"value"</code>, fields of type date will be rendered at the&#010 size specified by ${isc.DocUtils.linkForRef('attr:ListGrid.defaultDateFieldWidth')}, &#010 (or ${isc.DocUtils.linkForRef('attr:ListGrid.defaultEditableDateFieldWidth')} for editable fields). This static&#010 value is appropriate for dates rendered with the standard short-date formatter.&#010 If set to <code>"title"</code> or <code>"both"</code>, the drawn width of the title&#010 will be taken into account when sizing the column.&#010 <P>&#010 This is achieved by enabling ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth','autoFitWidth:true')}&#010 on date fields when this property is set to anything other than <code>"none"</code>,&#010 setting the ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidthApproach')} to the value specified here&#010 and having logic in ${isc.DocUtils.linkForRef('method:ListGrid.getDefaultFieldWidth')} pick up the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.defaultDateFieldWidth')} or ${isc.DocUtils.linkForRef('attr:ListGrid.defaultEditableDateFieldWidth')}&#010 if appropriate. */
		autoFitDateFields: AutoFitWidthApproach;

		/** Whether to do inline autoComplete in text fields during inline editing<br>&#010 Overridden by ${isc.DocUtils.linkForRef('attr:ListGridField.autoComplete')} if specified.&#010 If unset picks up the default from the appropriate editor class (subclass of FormItem). */
		autoComplete: AutoComplete;

		/** Are rollovers cell-level or row-level? */
		useCellRollOvers: Boolean;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.animateRemoveRecord','animating record removal')}, this property&#010 designates the speed of the animation in pixels per second. Takes precedence over the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.animateRemoveTime')} property, which allows the developer to specify a&#010 duration for the animation rather than a speed. */
		animateRemoveSpeed: number;

		/** If true and a cell's value is clipped, then a hover containing the full cell value is&#010 enabled.&#010 <p>&#010 Note that standard cell hovers override clipped value hovers. Thus, to enable clipped value&#010 hovers, ${isc.DocUtils.linkForRef('attr:ListGrid.canHover','canHover')} must be unset or null and the corresponding field must have&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.showHover','showHover')} unset or null as well. */
		showClippedValuesOnHover: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is set to <code>true</code>, this property&#010 may be set to govern the width of the expansion image displayed to indicate whether a row&#010 is expanded. If unset, the expansionField image will be sized to match the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanImageWidth')} for this grid. */
		expansionFieldImageWidth: number /* integer */;

		/** The value to display for cells whose value is null or the empty string after applying&#010 ${isc.DocUtils.linkForRef('method:ListGrid.formatCellValue','formatting')} and valueMap (if any).&#010 <p>&#010 This is the grid-wide attribute.  You may also set the emptyCellValue on a per-field basis. */
		emptyCellValue: HTMLString;

		/** "Tall" baseStyle for this listGrid. Only applies if ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} is&#010 set to null.&#010 <P>&#010 If <code>baseStyle</code> is unset, this&#010 property will be used as a base cell style unless the grid is showing fixed height&#010 rows with a specified cellHeight that matches ${isc.DocUtils.linkForRef('attr:ListGrid.normalCellHeight')}, in&#010 which case ${isc.DocUtils.linkForRef('attr:ListGrid.normalBaseStyle')} will be used. Note that in Internet Explorer&#010 if ${isc.DocUtils.linkForRef('attr:ListGrid.fastCellUpdates')} is true, <code>tallBaseStyle</code> will also be&#010 used even if the cellHeight matches the specified <code>normalCellHeight</code> for the&#010 grid.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('group:cellStyleSuffixes')} for details on how stateful suffixes are combined&#010 with the base style to generate stateful cell styles. */
		tallBaseStyle: CSSStyleName;

		/** Determines whether hiliting for any field in this grid is shown in a group summary.&#010 This setting affects all fields of the grid.&#010 <P>&#010 To suppress hilites for a specific field see ${isc.DocUtils.linkForRef('attr:ListGridField.showHilitesInGroupSummary')}.&#010 <P>&#010 Hiliting in summary fields (columns) can be enabled by setting&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.includeHilitesInSummaryFields','includeHiliteInSummaryField')} to true. */
		showHilitesInGroupSummary: boolean;

		/** Default alignment for ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')} with no&#010 ${isc.DocUtils.linkForRef('attr:HeaderSpan.valign')} specified. */
		headerSpanVAlign: vAlign;

		/** When true, indicates that this ListGrid supports sorting on multiple fields.  Note that even&#010 when set to true, multi-field sorting may not be available if the grid is databound and the&#010 ${isc.DocUtils.linkForRef('attr:DataSource.canMultiSort','DataSource doesn\'t support multi-sort')}, or if sorting for a&#010 field is ${isc.DocUtils.linkForRef('attr:ListGridField.canSortClientOnly','client-only')} but not all data is available. */
		canMultiSort: Boolean;

		/** The method of ${isc.DocUtils.linkForRef('type:RecordComponentPoolingMode','component-pooling')} to employ for&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords','expansionComponents')}.&#010 <P>&#010 The default mode is "destroy", which means that automatically created expansionComponents&#010 are destroyed when rows are collapsed. */
		expansionComponentPoolingMode: ExpansionComponentPoolingMode;

		/** How much padding should there be on the right of valueIcons by default */
		valueIconRightPadding: number;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','this.canFreezeFields')} is true, this string will be shown as the&#010 title for the menu item to freeze fields on the right of the scrollable body. */
		freezeOnRightText: string;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')} is true, this attribute may be used to customize the&#010 filter button shown to the right of the filterEditor row. */
		filterButtonProperties: Button /* Button properties */;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')} is set to <code>"horizontal"</code> or <code>"both"</code>&#010 this property provides the maximum number of columns for which the ListGrid will expand.&#010 If more columns are present, scrolling will be introduced to reach them as normal.&#010 If unset the ListGrid will expand to accommodate as many columns as are defined for the&#010 grid. */
		autoFitMaxColumns: number;

		/** This property may be set to customize the <code>wrap</code> attribute for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverWrap: Boolean;

		/** Should listGrids automatically size time fields to fit their values or titles?&#010 If set to <code>"value"</code>, fields of type time will be rendered at the&#010 size specified by ${isc.DocUtils.linkForRef('attr:ListGrid.defaultTimeFieldWidth')}. This static&#010 value is appropriate for dates rendered with the standard time formatter.&#010 If set to <code>"title"</code> or <code>"both"</code>, the drawn width of the title&#010 will be taken into account when sizing the column.&#010 <P>&#010 This is achieved by enabling ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth','autoFitWidth:true')}&#010 on date fields when this property is set to anything other than <code>"none"</code>,&#010 setting the ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidthApproach')} to the value specified here&#010 and having logic in ${isc.DocUtils.linkForRef('method:ListGrid.getDefaultFieldWidth')} pick up the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.defaultTimeFieldWidth')} if appropriate. */
		autoFitTimeFields: AutoFitWidthApproach;

		/** When exporting data to Excel/OpenOffice format using ${isc.DocUtils.linkForRef('method:ListGrid.exportData')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.exportClientData')}, whether titles in the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.header','ListGrid header')} and ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')} should be&#010 allowed to wrap.&#010 <p>&#010 Excel will wrap at the column boundary automatically; for explicit control over wrapping,&#010 insert "<br>" tags into your titles.&#010 <p>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.exportFieldWidths')} for replicating the widths of fields in the exported&#010 spreadsheet. */
		exportWrapHeaderTitles: boolean;

		/** Whether to show a context menu on the header with standard items for showing and hiding&#010 fields.  Not supported for ${isc.DocUtils.linkForRef('class:CubeGrid')}. */
		showHeaderContextMenu: Boolean;

		/** The number to start the row-count from - default value is 1. */
		rowNumberStart: number;

		/** For grids with a specified ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')}, this property can be set to&#010 <code>true</code> to cause the grid directly update its local data set instead of&#010 performing an operation against it's configured DataSource.&#010 <p>&#010 When using this mode, data must be provided to the grid via ${isc.DocUtils.linkForRef('method:ListGrid.setData')},&#010 and must be provided as &#010 a simple Array of Records&#010 .  Setting <code>saveLocally</code> is invalid if&#010 either ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')} is called or if a ${isc.DocUtils.linkForRef('class:ResultSet')} is provided as the data&#010 model.&#010 <p>&#010 <code>saveLocally</code> mode includes changes made via &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canEdit','inline editing')}, record removal via ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')}, as&#010 well as programmatic calls to ${isc.DocUtils.linkForRef('method:ListGrid.updateData')},&#010 ${isc.DocUtils.linkForRef('method:ListGrid.addData','addData()')} and ${isc.DocUtils.linkForRef('method:ListGrid.removeData','removeData()')}.  This&#010 also causes saves to be performed synchronously (unlike normal DataSource operations).&#010 <p>&#010 Note that using this mode also disables the automatic cache synchronization provided by&#010 the DataSource system - changes made to this grid are saved only to this grid's data&#010 set.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.filterLocalData')} to allow filtering, such as filtering performed&#010 by the ${isc.DocUtils.linkForRef('attr:ListGrid.filterEditor')}, to also work only with the local data set.&#010 <P>&#010 If saveLocally is unset, and ${isc.DocUtils.linkForRef('attr:ListGrid.filterLocalData')} is true, the saveLocally behavior is&#010 enabled by default */
		saveLocally: boolean;

		/** AutoChild created and embedded in the grid if ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver','showRollOver')}&#010 is <code>true</code>, and either ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOverCanvas','showRollOverCanvas')}&#010 is <code>true</code> and ${isc.DocUtils.linkForRef('attr:ListGrid.showRollUnderCanvas','showRollUnderCanvas')} is&#010 unset, or <code>showRollUnderCanvas</code> is explicitly set to <code>true</code>.&#010 This component will be created and displayed behind the current rollOver row or cell in the&#010 page's z-order, meaning that it will only be visible if the cell styling is transparent.&#010 <P>&#010 Note that if this grid has frozen fields, the ${isc.DocUtils.linkForRef('type:AutoChild')} subsystem will use the &#010 <code>rollUnderCanvas</code> configuration settings to create the ${isc.DocUtils.linkForRef('attr:ListGrid.frozenRollUnderCanvas')}&#010 (displayed in the frozen listGrid body).&#010 <p>&#010 The <code>rollUnderCanvas</code> has the following read-only attributes set:<br>&#010 - <code>this.grid</code> - a pointer to the grid<br>&#010 - <code>this.record</code> - a pointer to the current roll over record object in the grid */
		rollUnderCanvas: Canvas /* AutoChild Canvas */;

		/** ${isc.DocUtils.linkForRef('method:ListGrid.getBaseStyle','Base style')} for ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','group')} rows.&#010 <P>&#010 Note that this property has no effect if ${isc.DocUtils.linkForRef('attr:ListGrid.groupNodeStyle')} is&#010 non null. */
		groupNodeBaseStyle: String;

		/** If this listGrid contains any frozen fields, this property can be used to apply a custom&#010 headerTitleStyle to the frozen set of fields. If unset, the standard headerTitleStyle&#010 will be used for both frozen and unfrozen cells. */
		frozenHeaderTitleStyle: CSSStyleName;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} and ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandMultipleRecords')} are&#010 both true, this property dictates the number of&#010 records which can be expanded simultaneously.  If the expanded record count hits the&#010 value of this property, further attempts to expand records will result in a popup&#010 warning (see ${isc.DocUtils.linkForRef('attr:ListGrid.maxExpandedRecordsPrompt')}) and expansion will be cancelled.&#010 <P>&#010 The default value is null, meaning there is no limit on the number of expanded records. */
		maxExpandedRecords: number /* integer */;

		/** Indicates whether records can be dropped into this listGrid. */
		canAcceptDroppedRecords: Boolean;

		/** If the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionCanvas','selectionCanvas')} is enabled, setting&#010 this property to <code>true</code> ensures that when the <code>selectionCanvas</code>&#010 is displayed it is animated into view via ${isc.DocUtils.linkForRef('method:Canvas.animateShow')}. Note that the&#010 animation effect may be customized via ${isc.DocUtils.linkForRef('attr:Canvas.animateShowEffect')},&#010 ${isc.DocUtils.linkForRef('attr:Canvas.animateShowTime')} and ${isc.DocUtils.linkForRef('attr:Canvas.animateShowAcceleration')} set in&#010 <code>selectionCanvasProperties</code>. */
		animateSelection: Boolean;

		/** The title to use for the ${isc.DocUtils.linkForRef('attr:ListGrid.removeFieldDefaults','remove field')}.&#010 <P>&#010 By default this title is not displayed in the remove column header button as the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.removeFieldDefaults')} sets ${isc.DocUtils.linkForRef('attr:ListGridField.showTitle')} to <code>false</code>. */
		removeFieldTitle: String;

		/** The number of consecutive columns to draw in the same style before alternating, when&#010 ${isc.DocUtils.linkForRef('attr:GridRenderer.alternateColumnStyles','alternateColumnStyles')} is true. */
		alternateFieldFrequency: number;

		/** Whether all rows should be drawn all at once, or only rows visible in the viewport.&#010 <P>&#010 Drawing all rows causes longer initial rendering time, but allows smoother vertical scrolling.&#010 With a very large number of rows, showAllRows will become too slow.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.drawAheadRatio')} and ${isc.DocUtils.linkForRef('attr:ListGrid.drawAllMaxCells')}. */
		showAllRecords: Boolean;

		/** Determines whether when the user edits a cell in this listGrid the entire row becomes&#010 editable, or just the cell that received the edit event.&#010 <P>&#010 No effect if this.canEdit is false or null. */
		editByCell: boolean;

		/** If this property is true, users can drag the mouse to select text within grid rows.&#010 This is mutually exclusive with&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canReorderRecords','rearranging rows or cells by dragging')}, and with&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canDragSelect','drag selection of rows')}. */
		canDragSelectText: Boolean;

		/** This property may be set to customize the vertical alignment for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverVAlign: VerticalAlignment;

		/** The string to display in the body of a listGrid with an empty data array, if&#010 showEmptyMessage is true. */
		emptyMessage: HTMLString;

		/** Constructor for the  ${isc.DocUtils.linkForRef('attr:ListGrid.headerMenuButton')}. If unset a standard "Button" will&#010 be rendered out. Note that this property may be overridden by different skins. */
		headerMenuButtonConstructor: className;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:VLayout')} which fills a record's expanded section&#010 and contains other builtin ${isc.DocUtils.linkForRef('type:ExpansionMode','expansion-components')}.  You can also&#010 override ${isc.DocUtils.linkForRef('method:ListGrid.getExpansionComponent','getExpansionComponent()')} to provide&#010 components of your own specification.&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionLayoutProperties</code> and&#010 <code>listGrid.expansionLayoutDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionLayout: VLayout /* MultiAutoChild VLayout */;

		/** Text to show after the name of the default filterOperator in the &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} when ${isc.DocUtils.linkForRef('attr:ListGrid.allowFilterOperators')} is enabled. */
		defaultFilterOperatorSuffix: String;

		/** This property may be set to customize the alignment for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverAlign: Alignment;

		/** Should this ListGrid show a summary row beneath the last record of the grid. This summary&#010 row will contain per-field summary information. See ${isc.DocUtils.linkForRef('attr:ListGridField.showGridSummary')} and&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getGridSummaryFunction')} for details on how the summary value to be displayed&#010 for each column will be calculated.&#010 <P>&#010 Note that the ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRow','summaryRow autoChild')} will be created to actually&#010 display the summary row. */
		showGridSummary: Boolean;

		/** If we're showing the filterEditor (this.showFilterEditor is true), this property&#010 determines whether this list should be filtered every time the user modifies the value&#010 in a field of the filter-editor. Can also be set at the field level. */
		filterOnKeypress: boolean;

		/** Sorting direction of this ListGrid. If specified when the ListGrid is initialized,&#010 this property will be the default sorting direction for the ${isc.DocUtils.linkForRef('attr:ListGrid.sortField')}.&#010 May be overridden by specifying ${isc.DocUtils.linkForRef('attr:ListGridField.sortDirection')}.&#010 <P>&#010 After initialization, this property will be updated on ${isc.DocUtils.linkForRef('method:ListGrid.sort')} or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.setSort')} to reflect the current sort direction of the grid. When&#010 this grid is sorted by multiple fields, the grid's sortDirection reflects the&#010 sort direction of the primary sort field. */
		sortDirection: SortDirection;

		/** If this grid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans')}, should field titles be&#010 prefixed with the titles of the headerSpans in which they are contained when&#010 using the ${isc.DocUtils.linkForRef('method:DataBoundComponent.editHilites','hilite editor')}. */
		showHeaderSpanTitlesInHiliteEditor: Boolean;

		/** Widget class for this ListGrid's header buttons. If unset, constructor will be&#010 picked up directly from the standard ${isc.DocUtils.linkForRef('class:Toolbar')} button constructor. */
		headerButtonConstructor: Class;

		/** Controls whether a checkbox for selecting ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','groups')} appears&#010 in the group node if ${isc.DocUtils.linkForRef('type:SelectionAppearance')} is set to <code>"checkbox"</code> */
		canSelectGroups: boolean;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid,&#010 and multi-grouping is enabled, this attribute is used as the title for a menu item that opens&#010 a ${isc.DocUtils.linkForRef('class:MultiGroupDialog')} to configure the grouping for this grid. */
		configureGroupingText: string;

		/** An array of field objects, specifying the order, layout, formatting, and&#010 sorting behavior of each field in the listGrid object.  In ListGrids, the fields&#010 array specifies columns.  Each field in the fields array is a ListGridField object.&#010 Any listGrid that will display data should have at least one visible field.&#010 <p>&#010 If ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')} is also set, this value acts as a set of overrides as&#010 explained in ${isc.DocUtils.linkForRef('attr:DataBoundComponent.fields')}. */
		fields: ListGridField[] /* Array of ListGridField */;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')} is true, this attribute will be set to true on the&#010 record object representing the grid summary row. */
		gridSummaryRecordProperty: string;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.animateFolders')} is true for this grid, this number can be set to designate&#010 the maximum number of rows to animate at a time when opening / closing a folder.&#010 <P>&#010 For a ListGrid, this property applies when ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','grouping')} is enabled. */
		animateFolderMaxRows: number /* integer */;

		/** Whether cell contents should wrap during printing.  Equivalent to ${isc.DocUtils.linkForRef('type:Autofit')}, but&#010 specific to printed output. */
		printAutoFit: Boolean;

		/** Enables various styling behaviors that potentially make sense when ${isc.DocUtils.linkForRef('method:ListGrid.getRowSpan')} has&#010 been overridden to introduce spanning cells, and spanning is largest on the left and&#010 smaller as cells go to the right.  Specifically:&#010 <ul>&#010 <li> computes ${isc.DocUtils.linkForRef('attr:ListGrid.alternateRecordStyles','banded styling')} based on the span of the&#010      cell in the left-most column&#010 <li> enables ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectCells','cell-level selection')}, including&#010      ${isc.DocUtils.linkForRef('attr:ListGrid.useCellRollOvers','cell-level rollover')} styling&#010 <li> enables row-span-sensitive cell selection.  See also ${isc.DocUtils.linkForRef('type:RowSpanSelectionMode')}&#010      for available behaviors&#010 </ul>&#010 <P>&#010 Because this setting enables ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectCells')}, it is incompatible with any APIs&#010 that expect a record-oriented data model.&#010 <P>&#010 Because this setting only makes sense when row spanning decreases from the first column&#010 to the last, it has unspecified behavior with ${isc.DocUtils.linkForRef('attr:ListGrid.canReorderFields')}. */
		useRowSpanStyling: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGridField.wrap')} is not explicitly set, should fields wrap?  If autofitting,&#010 see the docs on that property for the details of how the minimum width for a field is&#010 determined. */
		wrapHeaderTitles: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is set to <code>true</code>, this property&#010 determines the image to display in the expansion field for collapsed rows.&#010 If unset, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')} will be used. */
		expansionFieldFalseImage: SCImgURL;

		/** Indicates whether fields in this listGrid can be reordered by dragging and&#010 dropping header fields. */
		canReorderFields: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.allowRowSpanning')} is enabled, this property may be used to specify&#010 editing behavior for cells that span multiple rows. */
		rowSpanEditMode: RowSpanEditMode;

		/** List of fields to group grid records. If only a single field is used, that field&#010 may be specified as a string. After initialization, use ${isc.DocUtils.linkForRef('method:ListGrid.groupBy')}&#010 to update the grouping field list, instead of modifying groupByField directly. */
		groupByField: String | String[] /* String | Array of String */;

		/** If this grid is editable, and an edit has caused validation failure for some cell,&#010  should we show an icon to indicate validation failure? */
		showErrorIcons: boolean;

		/** Overflow setting for the "body", that is, the area of the grid where data values are&#010 rendered.&#010 <P>&#010 <b>This is a very advanced setting</b> which is typically only changed by subclasses&#010 of ListGrid which never show a header.  To achieve auto-fitting, instead use properties&#010 such as ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitData')}, ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights')}. */
		bodyOverflow: Overflow;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid, this&#010 attribute will be shown as the menu item title to sort a field in descending order. */
		sortFieldDescendingText: string;

		/** If the ${isc.DocUtils.linkForRef('attr:ListGrid.rollOverCanvas','rollOverCanvas')} is enabled, setting this property&#010 to <code>true</code> ensures that when the <code>rollOverCanvas</code> is displayed it&#010 is animated into view via ${isc.DocUtils.linkForRef('method:Canvas.animateShow')}. Note that the animation effect&#010 may be customized via ${isc.DocUtils.linkForRef('attr:Canvas.animateShowEffect')}, ${isc.DocUtils.linkForRef('attr:Canvas.animateShowTime')} and&#010 ${isc.DocUtils.linkForRef('attr:Canvas.animateShowAcceleration')} set in <code>rollOverCanvasProperties</code>. */
		animateRollOver: Boolean;

		/** Whether edits should be saved whenever the user moves between cells in the current edit&#010 row.&#010 <P>&#010 If unset, defaults to ${isc.DocUtils.linkForRef('attr:ListGrid.editByCell','this.editByCell')}.&#010 <P>&#010 To avoid automatic saving entirely, set ${isc.DocUtils.linkForRef('attr:ListGrid.autoSaveEdits')}:false. */
		saveByCell: boolean;

		/** Whether to leave a gap for the vertical scrollbar, even when it's not present.&#010 <P>&#010 Note that if leaveScrollbarGap is false and vertical scrolling is introduced, fields&#010 will be resized to fit the smaller body area if possible, in order to avoid horizontal&#010 scrolling also being required. */
		leaveScrollbarGap: Boolean;

		/** A base name for the CSS class applied to cells containing pending (unsaved) edits<br>&#010 As with the default 'baseStyle' property, this style will have "Dark", "Over", "Selected",&#010 or "Disabled" appended to it according to the state of the cell.&#010 <P>&#010 If this property is null (the default setting), cells with pending edits will pick up&#010 custom css text to be applied on top of the normal base style from&#010 <code>this.editPendingCSSText</code>. */
		editPendingBaseStyle: CSSStyleName;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans')} are in use, whether to show a hierarchical column picker&#010 that includes both headerSpans and normal headers, with normal headers indented under&#010 headerSpans similarly to how a ${isc.DocUtils.linkForRef('class:TreeGrid')} displays a Tree.&#010 <P>&#010 If <code>showTreeColumnPicker</code> is false, no column picker will be shown on the&#010 headerSpan itself, and the column picker for a clicked on a normal field header will include&#010 only normal fields. */
		showTreeColumnPicker: Boolean;

		/** This property may be set to customize the opacity for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverOpacity: number /* Integer */;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanPartialImage')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}.&#010 <p>&#010 If this, ${isc.DocUtils.linkForRef('attr:ListGrid.printBooleanTrueImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.printBooleanFalseImage')}&#010 are unset, this will be set to the default ${isc.DocUtils.linkForRef('attr:CheckboxItem.printPartialSelectedImage')}. */
		printBooleanPartialImage: SCImgURL;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is set to <code>"checkbox"</code> this property&#010 determines the image to display in the checkbox field for a selected row.&#010 If unset, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} will be used. Note that the special&#010 value "blank" means that no image will be shown. */
		checkboxFieldTrueImage: SCImgURL;

		/** In a ListGrid that has a DataSource and has filter criteria that include values for&#010 fields declared as ${isc.DocUtils.linkForRef('type:FieldType','type "enum"')} in the DataSource, by default a newly&#010 edited row will use those filter criteria as initial values.&#010 <P>&#010 For example, if a ListGrid is showing all Accounts that have status:"Active" and a new row&#010 is created, the new row will default to status:"Active" unless this flag is set to false. */
		enumCriteriaAsInitialValues: Boolean;

		/** The height of this listGrid's header, in pixels. */
		headerHeight: number;

		/** Default number of pixels by which to indent subgroups relative to parent group. */
		groupIndentSize: Number;

		/** If true, validation will be performed on each edited cell when each editor's&#010 "change" handler is fired. */
		validateOnChange: boolean;

		/** Returns the specially generated checkbox field used when ${isc.DocUtils.linkForRef('type:SelectionAppearance')} is&#010 "checkbox".  Created via the ${isc.DocUtils.linkForRef('type:AutoChild')} pattern so that&#010 <code>checkboxFieldDefaults</code> and <code>checkboxFieldProperties</code> are available&#010 for skinning purposes. Note that ${isc.DocUtils.linkForRef('attr:ListGridField.shouldPrint')} is <code>false</code>&#010 for the checkboxField by default - if you want this column to show up in the grid's print&#010 view, use <code>checkboxFieldProperties</code> to set this property to true.&#010 <P>&#010 This field will render an icon to indicate the selected state of each row, which, when&#010 clicked will toggle the selection state. The icon src may be configured using&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldTrueImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldFalseImage')}, as&#010 well as ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldImageWidth')} and ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldImageHeight')}.&#010 <P>&#010 The checkboxField can be detected by calling ${isc.DocUtils.linkForRef('method:ListGrid.isCheckboxField')} on any&#010 ListGridField object. */
		checkboxField: ListGridField /* AutoChild ListGridField */;

		/** If this grid has a specified ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')}, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.useAllDataSourceFields')} is false, setting this property to true&#010 will cause all dataSource fields not included in the specified set of fields to&#010 show up in the ${isc.DocUtils.linkForRef('attr:ListGrid.canPickFields','field picker menu item')}.&#010 <P>&#010 Has no effect if ${isc.DocUtils.linkForRef('attr:ListGrid.fields')} is unset (as in this case all dataSource fields&#010 will be displayed by default), or if ${isc.DocUtils.linkForRef('attr:ListGrid.canPickFields')} is false. */
		canPickOmittedFields: Boolean;

		/** If this ListGrid is editable, should edits be saved out when the user finishes editing&#010 a row (or a cell if ${isc.DocUtils.linkForRef('attr:ListGrid.saveByCell')} is true).&#010 <P>&#010 The default of <code>true</code> indicates that edits will be&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.saveByCell','automatically saved')} as the&#010 user navigates through the grid and/or ${isc.DocUtils.linkForRef('type:EnterKeyEditAction','hits \'Enter\'')} to end&#010 editing.  See the ${isc.DocUtils.linkForRef('group:editing','Grid Editing')} overview for details.&#010 <P>&#010 Setting <code>autoSaveEdits</code> false creates a "mass update" / "mass delete"&#010 interaction where edits will be retained for all edited cells (across rows if&#010 appropriate) until ${isc.DocUtils.linkForRef('method:ListGrid.saveEdits')} is called to save a particular row, or&#010 ${isc.DocUtils.linkForRef('method:ListGrid.saveAllEdits')} is called to save all changes in a batch.&#010 <P>&#010 <b>Note:</b> when ${isc.DocUtils.linkForRef('attr:ListGrid.groupByField','listGrid grouping')} is enabled, or when&#010 working with hierarchical data in a ${isc.DocUtils.linkForRef('class:TreeGrid')}, users have the option to hide&#010 records from view by collapsing the parent folder or group. This, in conjunction with&#010 <code>autoSaveEdits</code> being set to <code>false</code> can lead to a case where&#010 a user is unable to save edits due to validation errors on hidden rows. Therefore we&#010 recommend developers consider having validators in place such that errors are caught&#010 and displayed to the user on change or editor exit rather than being caught only when&#010 saving is attempted. If it's not possible for all validation to be performed immediately &#010 on row exit, we recommend that a different UI design be used that does not involve&#010 <code>autoSaveEdits</code> being set to <code>false</code>. */
		autoSaveEdits: Boolean;

		/** Height for the filterEditor, if shown. */
		filterEditorHeight: number;

		/** Default type of chart to plot. */
		chartType: ChartType;

		/** When ${isc.DocUtils.linkForRef('classMethod:isc.setScreenReaderMode','screen reader mode')} is enabled,&#010 this invisible string will be written out after the last cell in a row. This&#010 string will be picked up by screen readers allowing them to more obviously identify&#010 to the user the end of the row's contents and the screen reader's announcement of the row's&#010 number and total number of rows in the grid (such as "3 of 20").&#010 <p>&#010 This attribute may be set to null to disable writing out an invisible string at the&#010 end of each row.&#010 <p>&#010 Note that screen readers vary widely on which punctuation symbols are read aloud, and&#010 sometimes it depends on the context of the punctuation. However, the widely-used JAWS, NVDA,&#010 and VoiceOver screen readers all pause briefly for a comma ',' that is within text.&#010 See <a href='http://www.deque.com/blog/dont-screen-readers-read-whats-screen-part-1-punctuation-typographic-symbols/' target='_blank'>Why Don’t Screen Readers Always Read What’s on the Screen? Part 1: Punctuation and Typographic Symbols</a>&#010 for a table of findings on which punctuation symbols are read aloud by JAWS, NVDA,&#010 and VoiceOver. */
		screenReaderRowSeparator: HTMLString;

		/** If the ${isc.DocUtils.linkForRef('attr:ListGrid.rollUnderCanvas','rollUnderCanvas')} is enabled, setting this property&#010 to <code>true</code> ensures that when the <code>rollUnderCanvas</code> is displayed it&#010 is animated into view via ${isc.DocUtils.linkForRef('method:Canvas.animateShow')}. Note that the animation effect&#010 may be customized via ${isc.DocUtils.linkForRef('attr:Canvas.animateShowEffect')}, ${isc.DocUtils.linkForRef('attr:Canvas.animateShowTime')} and&#010 ${isc.DocUtils.linkForRef('attr:Canvas.animateShowAcceleration')} set in <code>rollUnderCanvasProperties</code>. */
		animateRollUnder: Boolean;

		/** Header spans are a second level of headers that appear above the normal ListGrid headers,&#010 spanning one or more listGrid fields in a manner similar to a column-spanning cell in an&#010 HTML table.&#010 <P>&#010 A header span can be created by simply naming the fields the header should span.  The&#010 example below creates a headerSpan that spans the first two fields of the ListGrid.&#010 &#010 <pre>&#010    isc.ListGrid.create({&#010        headerHeight:40,&#010        fields : [&#010            { name:"field1" },&#010            { name:"field2" },&#010            { name:"field3" }&#010        ],&#010        headerSpans : [&#010            {&#010                fields: ["field1", "field2"],&#010                title: "Field 1 and 2"&#010            }&#010        ]&#010    });&#010 </pre>&#010 &#010 &#010 Header spans can be nested, allowing fields to be grouped by multiple levels of&#010 granularity. See ${isc.DocUtils.linkForRef('attr:HeaderSpan.spans')} for further information on nesting spans.&#010 <P>&#010 Header spans will automatically react to resizing of the headers they span, and will be&#010 hidden automatically when all of the spanned fields are hidden.&#010 <P>&#010 Header spans appear in the ${isc.DocUtils.linkForRef('attr:ListGrid.header','header')} area of the ListGrid, sharing space&#010 with the existing headers, so it's typical to set ${isc.DocUtils.linkForRef('attr:ListGrid.headerHeight')} to&#010 approximately double its normal height when using headerSpans, or if using nested header&#010 spans, the default header height multiplied by the number of levels of header spans to be&#010 shown.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('object:HeaderSpan')} for many properties that allow the control of the appearance of&#010 headerSpans.&#010 &#010 Note that headerSpans are created via the ${isc.DocUtils.linkForRef('type:AutoChild')} pattern, hence&#010 you can change the SmartClient component being used, or any of its properties.&#010 &#010 <P>&#010 Neither headerSpans themselves nor the fields within them may be drag reordered, but other&#010 unspanned headers may be.&#010 <P>&#010 A span can only span adjacent fields - if a span is defined and the spanned fields don't&#010 sit next to each other in the specified fields array, the fields array will be automatically&#010 reordered to match the order specified in the span's ${isc.DocUtils.linkForRef('attr:HeaderSpan.fields')} array.&#010 <P>&#010 Note that headerSpans primarily provide a visual cue for grouping multiple headers&#010 together.  If you have an OLAP, data "cube" or multi-dimensional data model, the&#010 ${isc.DocUtils.linkForRef('class:CubeGrid')} component is the right choice. */
		headerSpans: HeaderSpan[] /* Array of HeaderSpan */;

		/** Text for the menu item shown in the ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} when&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.allowFilterOperators')} is enabled. */
		filterUsingText: String;

		/** When animating folder opening / closing, if ${isc.DocUtils.linkForRef('attr:TreeGrid.animateFolderSpeed')} is not&#010 set, this property designates the duration of the animation in ms.&#010 <P>&#010 For a ListGrid, this property applies when ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','grouping')} is enabled. */
		animateFolderTime: number;

		/** Whether to include fields marked <code>detail:true</code> from this component's&#010 <code>DataSource</code>.&#010 <P>&#010 When this property is <code>true</code>, the <code>ListGrid</code> will include all&#010 detail fields unless fields have been specifically declared using the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.fields')} array.&#010 <P>&#010 Any field which has been included directly in the <code>fields</code> array will be&#010 included regardless of the fields <code>detail</code> attribute.&#010 <p>&#010 Detail fields included will initially be hidden but the user may show these fields via&#010 the default header context menu (${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu')}).&#010 <P>&#010 The field's visibility can also be overridden programatically using the standard&#010 ${isc.DocUtils.linkForRef('method:ListGrid.showField')}, ${isc.DocUtils.linkForRef('method:ListGrid.hideField')} and ${isc.DocUtils.linkForRef('method:ListGridField.showIf')}&#010 APIs, for example, set showIf:"true" to show a detail field initially.&#010 <P>&#010 Setting this property to false will completely exclude all detail fields from the list&#010 grid's fields array, such that they cannot be shown by the user or programmatically. */
		showDetailFields: Boolean;

		/** If <code>true</code> this grid will create and show per-row backgroundComponents&#010 as detailed ${isc.DocUtils.linkForRef('attr:ListGrid.backgroundComponent','here')}. */
		showBackgroundComponents: Boolean;

		/** Whether client-side validation checks should be performed when the user moves between&#010 cells in the current edit row.  If unset, defaults to ${isc.DocUtils.linkForRef('attr:ListGrid.editByCell')}.&#010 <P>&#010 Note that validation always occurs when a row is to be saved, so setting&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.saveByCell')}:true forces validation on cell transitions.  To completely disable&#010 automatic validation, set ${isc.DocUtils.linkForRef('attr:ListGrid.neverValidate')}:true. */
		validateByCell: boolean;

		/** Default width for editable date type fields. See ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitDateFields')} for&#010 details on how this property is used. */
		defaultEditableDateFieldWidth: number /* Integer */;

		/** Should recycled ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','record components')}, be pooled&#010 per column or per record. Only applies if ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponentsByCell')} is true.&#010 <P>&#010 When ${isc.DocUtils.linkForRef('attr:ListGrid.recordComponentPoolingMode')} is "recycle" and you have components of&#010 different types in different columns, set this property to true to ensure that&#010 components intended for one column are not recycled for use in another column that&#010 should have a different component.&#010 <P>&#010 If no components applicable to a particular column are available in the pool, the system&#010 calls ${isc.DocUtils.linkForRef('method:ListGrid.createRecordComponent','createRecordComponent')}. */
		poolComponentsPerColumn: Boolean;

		/** When ${isc.DocUtils.linkForRef('classMethod:AutoTest.getElement')} is used to parse locator strings generated by&#010 ${isc.DocUtils.linkForRef('classMethod:AutoTest.getLocator')} for a cell in this grid, how should the row be identified?&#010 <br>&#010 Note that getLocator() will actually store all available information about the row in&#010 the generated string -- this attribute effects how a stored string will be parsed only.&#010 <P>&#010 Valid options area:&#010 <ul>&#010 <li><code>"primaryKey"</code> Only applies to databound grids: If the cell in question has&#010  a primary key cell value, use it to identify cells in autoTest locator strings.</li>&#010 <li><code>"titleField"</code> If the cell in question has a value for the&#010  ${isc.DocUtils.linkForRef('method:ListGrid.getTitleField','titleField')}, use it to identify cells in autoTest&#010  locator strings</li>&#010 <li><code>"targetCellValue"</code> Identify rows by storing the cell value for the target&#010  row / field in autoTest locator strings</li>&#010 <li><code>"index"</code>The rowNum will be used to identify the row.</li>&#010 </ul>&#010 If unset, default behavior is to identify by primary key (if available), otherwise by&#010 titleField (if available), otherwise by cell value (if available), and lastly by index. */
		locateRowsBy: string;

		/** Returns a snapshot of the current selection within this listGrid as&#010 a ${isc.DocUtils.linkForRef('type:ListGridSelectedState')} object.<br>&#010 This object can be passed to ${isc.DocUtils.linkForRef('method:ListGrid.setSelectedState')} to reset this grid's selection&#010 the current state (assuming the same data is present in the grid).<br> */
		selectedState: ListGridSelectedState;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderShadow')} is true, the ${isc.DocUtils.linkForRef('attr:Canvas.shadowSoftness')} for&#010 the header shadow */
		headerShadowSoftness: Number;

		/** Should we start editing when the widget has focus and the user presses the "f2" key&#010 (if this ListGrid supports editing)?&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:ListGrid.editEvent')} is set to <code>"click"</code> or&#010 <code>"doubleClick"</code>, the <code>Space</code> or <code>Enter</code> key may&#010 also be used to start editing, depending on the value for ${isc.DocUtils.linkForRef('attr:ListGrid.generateClickOnSpace')},&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.generateDoubleClickOnSpace')}, ${isc.DocUtils.linkForRef('attr:ListGrid.generateClickOnEnter')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.generateDoubleClickOnEnter')}.&#010 <P>&#010 If ${isc.DocUtils.linkForRef('attr:ListGrid.canEdit')} is false, or ${isc.DocUtils.linkForRef('attr:ListGrid.editEvent')} is set to "none" this&#010 property has no effect. */
		editOnF2Keypress: Boolean;

		/** Alternative to ${isc.DocUtils.linkForRef('attr:ListGrid.drawAheadRatio')}, to be used when the user&#010 is rapidly changing the grids viewport (for example drag scrolling through the grid).&#010 If unspecified ${isc.DocUtils.linkForRef('attr:ListGrid.drawAheadRatio')} will be used in all cases */
		quickDrawAheadRatio: number /* float */;

		/** If set to false on a record and ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords','canRemoveRecords')} is&#010 true, removal of that record is disallowed in the UI. The icon in the remove field&#010 is not shown. */
		recordCanRemoveProperty: String;

		/** The number of consecutive rows to draw in the same style before alternating, when&#010 ${isc.DocUtils.linkForRef('attr:GridRenderer.alternateRowStyles','alternateRowStyles')} is true. */
		alternateRecordFrequency: number;

		/** Causes filtering to be performed against the local data set, even when a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')} is provided.&#010 <p>&#010 When using this mode, data must be provided to the grid via ${isc.DocUtils.linkForRef('method:ListGrid.setData')},&#010 and must be provided as &#010 a simple Array of Records&#010 .  &#010 <p>&#010 Note that a ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')} must be provided for filtering to occur&#010 even when filtering locally.&#010 <P>&#010 If this property is set to true, the supplied data is applied as the &#010 ${isc.DocUtils.linkForRef('attr:ResultSet.allRows','complete dataset')} of a ${isc.DocUtils.linkForRef('class:ResultSet')}, which is then &#010 filtered according to the specified criteria, and the results displayed. If false, a &#010 normal databound fetch will occur, retrieving records that match the specified criteria &#010 from this component's ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')}.&#010 <p>&#010 <code>filterLocalData</code> includes both calls to ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')} and&#010 ${isc.DocUtils.linkForRef('method:ListGrid.filterData')} as well as automatic filtering when the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.filterEditor')} is enabled.&#010 <p>&#010 If this property is not explicitly set, default behavior will filter against the&#010 dataSource unless the grid has a specified ${isc.DocUtils.linkForRef('type:DataPath','dataPath')}, in which case&#010 filtering will occur locally.&#010 <p>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.saveLocally')} to cause saves to ignore the DataSource and affect&#010 the local data set only. */
		filterLocalData: boolean;

		/** Indicates whether the text of the emptyMessage property should be displayed if no data is&#010 available. */
		showEmptyMessage: Boolean;

		/** The Selection object associated with the listGrid. */
		selection: Selection;

		/** When set to false, clicking a record's ${isc.DocUtils.linkForRef('attr:ListGrid.expansionField','expansion field')} will&#010 not add the record to the current selection. */
		selectOnExpandRecord: boolean;

		/** Default alias to use for groups with no value */
		nullGroupTitle: String;

		/** If this grid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')}, should field titles be&#010 prefixed with the titles of the headerSpans in which they are contained when&#010 using the ${isc.DocUtils.linkForRef('class:FormulaBuilder')} or ${isc.DocUtils.linkForRef('class:SummaryBuilder')}. */
		showHeaderSpanTitlesInFormulaBuilder: Boolean;

		/** When set to true and canHover is also true, shows a widget hovering at the mouse point.&#010 <P>&#010 A number of builtin modes are provided - see ${isc.DocUtils.linkForRef('type:HoverMode')}.&#010 <P>&#010 Also supported at the ${isc.DocUtils.linkForRef('attr:ListGridField.showHoverComponents','field-level')}. */
		showHoverComponents: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is set to <code>"checkbox"</code> this property&#010 determines the image to display in the checkbox field for an unselected row.&#010 If unset, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')} will be used. Note that the special&#010 value "blank" means that no image will be shown. */
		checkboxFieldFalseImage: SCImgURL;

		/** When using ${isc.DocUtils.linkForRef('attr:ListGrid.dataFetchMode','data paging')}, how many records to fetch at a time.  If set to&#010 a positive integer, <code>dataPageSize</code> will override the default &#010 ${isc.DocUtils.linkForRef('attr:ResultSet.resultSize','resultSize')} for ResultSets automatically created when you call&#010 ${isc.DocUtils.linkForRef('method:ListGrid.fetchData')} (and similarly for the ${isc.DocUtils.linkForRef('attr:ResultTree.resultSize','resultSize')} of&#010 ResultTrees).  Leaving <code>dataPageSize</code> at its default means to just use the default page&#010 size of the data container.&#010 <P>&#010 <b>Note</b> that regardless of the <code>dataPageSize</code> setting, a component will always fetch&#010 all of data that it needs to draw.  Settings such as&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showAllRecords','showAllRecords:true')},&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.drawAllMaxCells','drawAllMaxCells')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.drawAheadRatio','drawAheadRatio')} can cause more rows than the configured&#010 <code>dataPageSize</code> to be fetched. */
		dataPageSize: number /* integer */;

		/** If this component is bound to a dataSource, this attribute may be specified to customize&#010 what fields from the dataSource may be edited by default. For example the ${isc.DocUtils.linkForRef('class:SearchForm')}&#010 class has this attribute set to <code>"canFilter"</code> which allows search forms to edit&#010 dataSource fields marked as <code>canEdit:false</code> (but not those marked as&#010 <code>canFilter:false</code>).&#010 <P>&#010 Note that if <code>canEdit</code> is explicitly specified on a field in &#010 the ${isc.DocUtils.linkForRef('attr:DataBoundComponent.fields')} array, that property will be respected in preference to &#010 the canEditAttribute value. (See ${isc.DocUtils.linkForRef('attr:FormItem.canEdit')}, ${isc.DocUtils.linkForRef('attr:ListGridField.canEdit')}).&#010 Also note that individual dataBoundComponents may have additional logic around whether a field&#010 can be edited - for example ${isc.DocUtils.linkForRef('method:ListGrid.canEditCell')} may be overridden. */
		canEditFieldAttribute: string;

		/** If true, if the user clicks on the scroll buttons at the end of the track or clicks once on&#010 the scroll track, there will be an instant redraw of the grid content so that the user&#010 doesn't see any blank space.  For drag scrolling or other types of scrolling, the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.scrollRedrawDelay')} applies. */
		instantScrollTrackRedraw: Boolean;

		/** Background color applied to the ListGrid body (that is, the area of the grid where&#010 data values are rendered).<br>&#010 Note that this will typically not be visible to the user unless there are few enough&#010 rows that there is visible space in the body below the last row. To style data cells,&#010 override ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} instead. */
		bodyBackgroundColor: string;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.useAdvancedFieldPicker')} is set, total number of available fields that must be&#010 present in the grid before the advanced field picker interface is used instead of the normal&#010 columns submenu.&#010 <P>&#010 Set to 0 to have the advanced picker always used (when useAdvancedFieldPicker is true). */
		advancedFieldPickerThreshold: number /* number */;

		/** ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} for the ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRow')} */
		summaryRowStyle: CSSStyleName;

		/** Default width for date type fields. See ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitDateFields')} for&#010 details on how this property is used. */
		defaultDateFieldWidth: number /* Integer */;

		/** If true and a header button's title is clipped, then a hover containing the full field&#010 title is enabled. */
		showClippedHeaderTitlesOnHover: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is set to <code>true</code>, this property&#010 may be set to govern the height of the expansion image displayed to indicate whether a&#010 row is expanded. If unset, the expansionField image will be sized to match the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanImageHeight')} for this grid. */
		expansionFieldImageHeight: number /* integer */;

		/** For ${isc.DocUtils.linkForRef('type:ExpansionMode','expansionModes')} that show another grid or tree, is that&#010 component editable?&#010 <P>The default value for this property is <code>false</code>. */
		expansionCanEdit: Boolean;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','headerSpans')} are in use, this property sets the default&#010 vertical alignment for for fields which do <b>not</b> have a headerSpan. */
		unspannedHeaderVAlign: vAlign;

		/** When the length of the field specified by ${isc.DocUtils.linkForRef('attr:DataSourceField.length')} exceeds this&#010 value, the ListGrid shows an edit field of type ${isc.DocUtils.linkForRef('attr:ListGrid.longTextEditorType')}&#010 rather than the standard text field when the field enters inline edit mode. */
		longTextEditorThreshold: number /* number */;

		/** For editable grids with a specified ${isc.DocUtils.linkForRef('attr:ListGrid.dataSource')}, where&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.saveLocally')} is false, this attribute may be used to specify standard&#010 DSRequest properties to apply to all save operations performed by this grid (whether&#010 triggered by user interaction, or explicit saveEdits or saveAllEdits call).&#010 <P>&#010 An example usage would be to customize the prompt displayed while saving is in progress&#010 if ${isc.DocUtils.linkForRef('attr:ListGrid.waitForSave')} is true.&#010 <P>&#010 Note that for more advanced customization of save operations,&#010 ${isc.DocUtils.linkForRef('attr:DataBoundComponent.addOperation')} and ${isc.DocUtils.linkForRef('attr:DataBoundComponent.updateOperation')}&#010 are available to developers, allowing specification of an explicit ${isc.DocUtils.linkForRef('class:OperationBinding')}&#010 for the add / update operation performed on save. */
		saveRequestProperties: DSRequest /* DSRequest Properties */;

		/** Property name on a record that will be checked to determine whether a record can be&#010 expanded. */
		canExpandRecordProperty: string;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','this.canFreezeFields')} is true, this string will be shown as the&#010 title for the menu item to unfreeze a currently frozen field.&#010 <P>&#010 This is a dynamic string - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed, with <code>title</code> available as a variable containing&#010 the field title.&#010 <P>&#010 Default value returns "Unfreeze " + the field's summary title. */
		unfreezeFieldText: HTMLString;

		/** Defines a listGrid's clickable-selection behavior.&#010 <P>&#010 The default selection appearance is governed by ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')}: if&#010 selectionAppearance is "checkbox", this will be "simple", otherwise, this will be&#010 "multiple". */
		selectionType: SelectionStyle;

		/** Initial group state for the grid.&#010 <P>&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.viewState')} can be used to initialize all view properties of the grid.&#010 When doing so, <code>groupState</code> is not needed because <code>viewState</code>&#010 includes it as well. If both are provided, <code>groupState</code> has priority for&#010 group state.&#010 &#010 <P>&#010 To retrieve current state call ${isc.DocUtils.linkForRef('method:ListGrid.getGroupState','getGroupState')}.&#010  */
		groupState: ListGridGroupState;

		/** If set to true, custom HTML applied as part of hiliting will be applied after&#010 ${isc.DocUtils.linkForRef('method:ListGrid.formatCellValue','formatting')} for each cell. If false, hilite&#010 HTML will be applied before formatting.&#010 <P>&#010 This applies to the following hilite properties:&#010 <ul>&#010 <li>${isc.DocUtils.linkForRef('attr:Hilite.replacementValue')}</li>&#010 <li>${isc.DocUtils.linkForRef('attr:Hilite.htmlBefore')}</li>&#010 <li>${isc.DocUtils.linkForRef('attr:Hilite.htmlAfter')}</li>&#010 <li>${isc.DocUtils.linkForRef('attr:Hilite.htmlValue')}</li>&#010 </ul>&#010 <P>&#010 May be overridden per field via ${isc.DocUtils.linkForRef('attr:ListGridField.hiliteHTMLAfterFormat')} */
		hiliteHTMLAfterFormat: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} is unset, base style will be derived from&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.normalBaseStyle')} if this grid has fixed row heights and&#010 the specified ${isc.DocUtils.linkForRef('attr:ListGrid.cellHeight')} matches this value. Otherwise&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.tallBaseStyle')} will be used. */
		normalCellHeight: number;

		/** Automatically generated ListGrid for displaying grid summary information (see&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')}).&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.summaryRowProperties</code> and <code>listGrid.summaryRowDefaults</code> */
		summaryRow: ListGrid /* AutoChild ListGrid */;

		/** CSS style used for the body of this grid.  If applying a background-color to the body&#010 via a CSS style applied using this property, be sure to set&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.bodyBackgroundColor')} to <code>null</code>. */
		bodyStyleName: CSSStyleName;

		/** Should partially selected parents (in a Tree data set) be shown with special icon?&#010 This has an impact in grouped grids where ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectGroups')} is true. The&#010 partial icon will show up for the group header node when a group is partially&#010 selected. */
		showPartialSelection: Boolean;

		/** Custom CSS text to be applied to cells when editing has failed.<br>&#010  If this listGrid is editable, this css text will be applied to any edited cells for which&#010  validation failed, on top of the base style for the cell.<br>&#010 For further customization of styling for cells that failed editing validation, use&#010 <code>this.editFailedBaseStyle</code> instead. */
		editFailedCSSText: string;

		/** The field providing the facility to expand and collapse rows. */
		expansionField: ListGridField /* AutoChild ListGridField */;

		/** Default class used to construct the ${isc.DocUtils.linkForRef('class:EditProxy')} for this component&#010 when the component is ${isc.DocUtils.linkForRef('method:Canvas.setEditMode','first placed into edit mode')}. */
		editProxyConstructor: SCClassName;

		/** Initial sort state for the grid.&#010 <P>&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.viewState')} can be used to initialize all view properties of the grid.&#010 When doing so, <code>sortState</code> is not needed because <code>viewState</code>&#010 includes it as well. If both are provided, <code>sortState</code> has priority for&#010 sort state.&#010 &#010 <P>&#010 To retrieve current state call ${isc.DocUtils.linkForRef('method:ListGrid.getSortState','getSortState')}.&#010  */
		sortState: ListGridSortState;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, this property governs the icon shown on the&#010 auto-generated <code>headerMenuButton</code> */
		headerMenuButtonIcon: URL;

		/** When this grid is initially filtered via ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchData')}, or filtered by the user&#010 via the ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor','filterEditor')}, this attribute can be used to set the&#010 <code>textMatchStyle</code> on the dsRequest passed to <code>fetchData()</code>.&#010 <P>&#010 To use a mixture of textMatchStyles, set an appropriate&#010 ${isc.DocUtils.linkForRef('attr:FormItem.operator','operator')} on a field's&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.filterEditorProperties','filterEditorProperties')}. */
		autoFetchTextMatchStyle: TextMatchStyle;

		/** AutoChild created and embedded in the grid if ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectionCanvas','showSelectionCanvas')}&#010 is <code>true</code> and ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectionUnderCanvas','showSelectionUnderCanvas')}&#010 is unset, or <code>showSelectionUnderCanvas</code> is explicitly set to <code>true</code>,&#010 and the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionType','selectionType')} is&#010 "single".&#010 &#010 This component will be created and displayed behind the selected record whenever the&#010 selection changes.&#010 <p>&#010 The <code>selectionUnderCanvas</code> has the following read-only attributes set:<br>&#010 - <code>this.grid</code> - a pointer to the grid<br>&#010 - <code>this.record</code> - a pointer to the currently selected record object in the grid */
		selectionUnderCanvas: Canvas /* AutoChild Canvas */;

		/** SmartClient listGrids have special logic to automatically size fields that&#010 are displayed as an icon - that is fields with&#010 ${isc.DocUtils.linkForRef('type:ListGridFieldType','type:"icon"')}, fields displaying only&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.showValueIconOnly','value icons')}, and boolean fields (which&#010 are rendered as a checkmark type icon by default.&#010 <P>&#010 This attribute controls this behavior - governing whether icon fields should&#010 be sized to fit their content (icon), title, or whether to disable this&#010 behavior. Setting this value to <code>"title"</code> or <code>"iconWidth"</code>&#010 will cause ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth')} to be enabled by default for all&#010 icon fields with the ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidthApproach')} set to&#010 <code>"value"</code> or <code>"both"</code> as appropriate. Note that the&#010 width required for the icons is calculated by ${isc.DocUtils.linkForRef('method:ListGrid.getDefaultFieldWidth')}&#010 which performs a simple calculation based on the specified icon width for these&#010 types of fields.&#010 <P>&#010 This setting governs default behavior for icon fields - for specific fields within&#010 a grid, this default behavior can be overridden by setting an explicit&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.width')} or&#010 explicitly enabling ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth')} and setting&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidthApproach')} on the field in question. */
		autoFitIconFields: AutoFitIconFieldType;

		/** For editable listGrids, outstanding unsaved edits when the user performs a new filter&#010 or sort will be discarded. This flag determines whether we should display a confirmation&#010 dialog with options to save or discard the edits, or cancel the action in this case. */
		confirmDiscardEdits: Boolean;

		/** If this listGrid contains any frozen fields, this property can be used to apply a custom&#010 headerBaseStyle to the frozen set of fields. If unset, the standard headerBaseStyle&#010 will be used for both frozen and unfrozen cells. */
		frozenHeaderBaseStyle: CSSStyleName;

		/** Indicates whether records can be dragged from this listGrid and dropped elsewhere.&#010 <p>&#010 <strong>NOTE:</strong> If <code>canDragRecordsOut</code> is initially enabled or might be&#010 dynamically enabled after the grid is created, it may be desirable to disable&#010 ${isc.DocUtils.linkForRef('attr:Canvas.useTouchScrolling','touch scrolling')} so that touch-dragging a record starts&#010 a drag operation rather than a scroll. If ${isc.DocUtils.linkForRef('attr:Canvas.disableTouchScrollingForDrag')}&#010 is set to <code>true</code>, then touch scrolling will be disabled automatically. However,&#010 for ${isc.DocUtils.linkForRef('group:accessibility','accessibility')} reasons, it is recommended to leave touch&#010 scrolling enabled and provide an alternative set of controls that can be used to perform&#010 drag and drop of records out of the grid. */
		canDragRecordsOut: Boolean;

		/** Optional default height for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverHeight: number /* Integer */;

		/** Default width and height of ${isc.DocUtils.linkForRef('attr:ListGrid.removeIcon','remove icons')} for this ListGrid. */
		removeIconSize: Number;

		/** While scrolling an incrementally rendered grid, using the inertial scrolling, time in &#010 milliseconds to wait before redrawing, after the last touchScroll by the user.  &#010 If not specified ${isc.DocUtils.linkForRef('attr:ListGrid.scrollRedrawDelay')} will be used as a default for both&#010 drag scrolling and touch scrolling.&#010 <P>&#010 Note that if specified, this value will typically be larger than &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.scrollRedrawDelay')}.&#010 <P>&#010 See also&#010 ${isc.DocUtils.linkForRef('attr:GridRenderer.instantScrollTrackRedraw')} for cases where this delay is skipped. */
		touchScrollRedrawDelay: number /* Integer */;

		/** Width for value icons for this listGrid.&#010 Overrides ${isc.DocUtils.linkForRef('attr:ListGrid.valueIconSize')}.&#010 Can be overridden at the field level */
		valueIconWidth: number;

		/** Can the user perform one-time autofit for specific columns in this grid?&#010 <P>&#010 If set to true, the default header menu will include options to auto fit&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitAllText','all fields')} such that they fit their&#010 content or titles as specified via ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidthApproach')}.<br>&#010 Autofitting of individual fields via a&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldText','header context menu item')}, or the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.headerAutoFitEvent')} will also be enabled when this&#010 property is set unless ${isc.DocUtils.linkForRef('attr:ListGridField.canAutoFitWidth')} is explicitly set to false&#010 <P>&#010 Note that the ability to perform one-time autofitting of fields via this &#010 subsystem is separate from the programmatic autofit behavior enabled &#010 via ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')}.&#010 <P>&#010 This subsystem is requires canResizeFields be enabled and will be disabled if&#010 that property is set to false */
		canAutoFitFields: Boolean;

		/** The prompt to display while interactivity is blocked during ${isc.DocUtils.linkForRef('attr:ListGrid.groupByAsyncThreshold','asynchronous grouping')}. */
		asynchGroupingPrompt: HTMLString;

		/** Should content within cells be allowed to wrap?&#010 <P>&#010 Even if content is allowed to wrap, if ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights')} is set, the content&#010 will be clipped off at the cell boundary.  Either set a larger, fixed ${isc.DocUtils.linkForRef('attr:ListGrid.cellHeight')}&#010 to reveal more content, or set ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights')} to false to allow auto-sizing. */
		wrapCells: Boolean;

		/** Style for header cells in printed output.  Defaults to ${isc.DocUtils.linkForRef('attr:ListGrid.headerBaseStyle')} if null. */
		printHeaderStyle: CSSStyleName;

		/** Should the header show a drop-shadow?&#010 Shadow will be applied to the header, or for a grid with frozen columns, the&#010 header layout. &#010 <P>&#010 Header shadow will only be displayed if ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow','css shadows')} are&#010 being used. */
		showHeaderShadow: Boolean;

		/** If the user is editing the last record in this listGrid, and attempts to navigate&#010 beyond the last row either by tabbing off the last editable field, or using the down&#010 arrow key, this property determines what action to take:<ul>&#010 <li>"next": start editing a new record at the end of the list.&#010 <li>"done": hide the editor&#010 <li>"stop": leave focus in the cell being edited&#010 <li>"none": no action&#010 </ul>&#010 <P>&#010 See the ${isc.DocUtils.linkForRef('group:editing','Grid Editing overview')} and also the&#010 ${isc.DocUtils.linkForRef('group:unsavedRecords','Editing Unsaved Records overview')} for context about how newly&#010 added records behave. */
		listEndEditAction: RowEndEditAction;

		/** "Normal" baseStyle for this listGrid. Only applies if ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} is&#010 set to null.&#010 <P>&#010 If <code>baseStyle</code> is unset, this&#010 property will be used as a base cell style if the grid is showing fixed height rows, and&#010 the specified cellHeight matches ${isc.DocUtils.linkForRef('attr:ListGrid.normalCellHeight')} (and in Internet Explorer,&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.fastCellUpdates')} is false). Otherwise ${isc.DocUtils.linkForRef('attr:ListGrid.tallBaseStyle')} will&#010 be used.&#010 <P>&#010 Having separate styles defined for fixed vs. variable height rows allows the developer&#010 to specify css which is designed to render at a specific height (typically using&#010 background images, which won't scale), without breaking support for styling rows&#010 of variable height.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('group:cellStyleSuffixes')} for details on how stateful suffixes are combined&#010 with the base style to generate stateful cell styles. */
		normalBaseStyle: CSSStyleName;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldTrueImage')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}. */
		printCheckboxFieldTrueImage: SCImgURL;

		/** Default number of pixels by which to indent all groups. */
		groupLeadingIndent: Number;

		/** Property name on a record that will hold the link text for that record.&#010 <P>&#010 This property is configurable to avoid possible collision with data values in the&#010 record.&#010 <P>&#010 Use ${isc.DocUtils.linkForRef('attr:ListGridField.linkTextProperty')} if you have more than one link field and */
		linkTextProperty: string;

		/** If a user is editing a ${isc.DocUtils.linkForRef('attr:ListGrid.canEdit','canEdit:true')} listGrid, and they hide&#010 a field while the editor is showing, should we discard any edits in the edit row for&#010 the field being hidden?&#010 <P>&#010 Default behavior is to discard the edits - set this flag to false to preserve edits */
		discardEditsOnHideField: boolean;

		/** Action to perform when the listGrid has keyboard focus (but not editing focus) and a user&#010 presses the up or down arrow key. Possible values are:&#010 <ul>&#010 <li><code>"select"</code> : select the next row in the list (calls <code>recordClick</code> handler)</li>&#010 <li><code>"focus"</code> : move focus to the next row in the list without changing the selection</li>&#010 <li><code>"activate"</code> : select and activate the next row in the list (calls&#010  <code>recordDoubleClick</code> handler)</li>&#010 <li><code>"none"</code> : no action</li>&#010 <li> <code>null</code> : if ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is "checkbox", behaves as if set&#010  to "focus"; otherwise, behaves as if set to "select"</li>&#010 </ul> */
		arrowKeyAction: string;

		/** If this is an editable listGrid, and <code>this.confirmCancelEditing</code> is true&#010 this property is used as the message to display in the confirmation dismissal prompt. */
		cancelEditingConfirmationMessage: string;

		/** How much horizontal space should the ${isc.DocUtils.linkForRef('method:ListGrid.getCheckboxField','checkbox field')} leave&#010 around the checkbox icon when ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance')} is set to&#010 <code>"checkbox"</code>?&#010 <P>&#010 The automatically generated checkbox field will be sized to the width of the&#010 checkbox icon (specified via ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldImageWidth')} or&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.booleanImageWidth')}) plus this value. */
		checkboxFieldHSpace: number /* number */;

		/** If the listGrid is empty, should the user be able to put focus into the grid body by tabbing&#010 to it?&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:ListGrid.editOnFocus')} is true for this grid and ${isc.DocUtils.linkForRef('attr:ListGrid.listEndEditAction')} is set to next,&#010 having this property set to true will allow users to automatically create a new edit row by&#010 simply tabbing into the grid. */
		canFocusInEmptyGrid: boolean;

		/** Should we vertically clip cell contents, or allow rows to expand vertically to show all&#010 contents?&#010 <P>&#010 If we allow rows to expand, the row height as derived from&#010 ${isc.DocUtils.linkForRef('method:GridRenderer.getRowHeight','getRowHeight()')} or the&#010 default ${isc.DocUtils.linkForRef('attr:ListGrid.cellHeight')} is treated as a minimum.&#010 <P>&#010 Setting <code>fixedRecordHeights</code> to false enables the ${isc.DocUtils.linkForRef('attr:ListGrid.virtualScrolling')}&#010 system.&#010 <P>&#010 <b>NOTE:</b><ul>&#010 <li>Setting fixedRecordHeights to false for ${isc.DocUtils.linkForRef('class:CubeGrid')} is not supported, though a&#010 similar option for the row headers is available as ${isc.DocUtils.linkForRef('attr:CubeGrid.autoSizeHeaders')}.&#010 <li>By default, for performance reasons, clipping is not enforced for&#010 some kinds of content (such as images) on all browsers.  Set&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.enforceVClipping','enforceVClipping:true')} to enforce clipping for&#010 all types of content on all browsers.&#010 </ul> */
		fixedRecordHeights: Boolean;

		/** If true, cellHover and rowHover events will fire and then a hover will be shown (if not&#010 canceled) when the user leaves the mouse over a row / cell unless the corresponding field has&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.showHover','showHover')} set to false. If unset or null, the hover will be&#010 shown if the corresponding field has showHover:true. If false, then hovers are disabled.&#010 <p>&#010 Note that standard hovers override ${isc.DocUtils.linkForRef('attr:ListGrid.showClippedValuesOnHover','clipped value hovers')}. Thus,&#010 to enable clipped value hovers, canHover must be unset or null and the corresponding field&#010 must have showHover unset or null as well. */
		canHover: boolean;

		/** Name of the SmartClient Class to be used when creating charts.  Must support the&#010 ${isc.DocUtils.linkForRef('interface:Chart')} interface. */
		chartConstructor: Classname;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid,&#010 and ${isc.DocUtils.linkForRef('attr:ListGrid.canAutoFitFields')} is true, this attribute will be shown as the menu&#010 item title for an item to perform a one-time autoFit of all visible fields via&#010 the ${isc.DocUtils.linkForRef('method:ListGrid.autoFitField')} method. */
		autoFitAllText: string;

		/** The menu displayed when a cell is right clicked on. */
		cellContextMenu: Layout /* AutoChild Layout */;

		/** BackgroundColor for the header toolbar. Typically this is set to match the color&#010 of the header buttons. */
		headerBackgroundColor: Color;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:IButton')} for saving the values in the expanded&#010 portion of a ListGrid row.&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionEditorSaveButtonProperties</code> and&#010 <code>listGrid.expansionEditorSaveButtonDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionEditorSaveButton: IButton /* MultiAutoChild IButton */;

		/** When grouped, a copy of the original ungrouped data. */
		originalData: object;

		/** Event on a ListGrid header that triggers auto fitting to data and/or title.&#010 <P>&#010 Note that if sorting is enabled for the field and the headerAutoFitEvent is "click", both&#010 sorting and autofit occur on a click.&#010 <P>&#010 Only has an impact when ${isc.DocUtils.linkForRef('attr:ListGrid.canAutoFitFields')} or &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.canAutoFitWidth')} is set to <code>true</code>. */
		headerAutoFitEvent: AutoFitEvent;

		/** Suffix to append to ${isc.DocUtils.linkForRef('attr:GridRenderer.alternateRowStyles','alternate rows')}.&#010 Note that if ${isc.DocUtils.linkForRef('attr:GridRenderer.alternateColumnStyles')} is enabled, cells which fall&#010 into both an alternate row and column will have both suffixes appended - for&#010 example <code>"cellDarkAltCol"</code>. */
		alternateRecordSuffix: String;

		/** Adds an item to the header context menu allowing users to launch a dialog to define a new&#010 field based on values present in other fields, using the ${isc.DocUtils.linkForRef('class:FormulaBuilder')}.&#010 <P>&#010 User-added formula fields can be persisted via ${isc.DocUtils.linkForRef('method:ListGrid.getFieldState')} and &#010 ${isc.DocUtils.linkForRef('method:ListGrid.setFieldState')}. */
		canAddFormulaFields: boolean;

		/** Should ListGrid fields autofit their widths to titles or content?&#010 This property may be overridden on a per-field basis via ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth')}.&#010 Developers may wish to consider disabling autoFit for fields known to have &#010 exceptionally long content as this can lead to large horizontal scrollbars and unwieldy UI.&#010 <P>&#010 The ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitWidthApproach')} controls whether fitting is to values, titles&#010 or both. This property may also be overridden on a per field basis.&#010 <P>&#010 If ${isc.DocUtils.linkForRef('attr:ListGridField.width','field.width')} is also set on the field, it will be taken as a minimum width.&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.minFieldWidth')} will also be respected.&#010 <P>&#010 By default, the entire available width of the grid will still be used, by allocating any "extra"&#010 space to specific columns - see ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldsFillViewport')} for details on&#010 controlling this behavior.&#010 <P>&#010 When this feature is enabled, autofitting is active on an ongoing basis.&#010 Autofitting will be performed:&#010 <ul>&#010  <li> whenever the dataset is completely changed or rows are added or removed&#010  <li> whenever a field which is autofitting is changed&#010  <li> on a manual call to ${isc.DocUtils.linkForRef('method:ListGrid.autoFitField')} or&#010       ${isc.DocUtils.linkForRef('method:ListGrid.autoFitFields')}&#010 </ul>&#010 Auto-fitting behavior continues until the user resizes the field manually, at which&#010 point it stops. The user can also perform a one-time auto-fit of fields via&#010 the header context menu if ${isc.DocUtils.linkForRef('attr:ListGrid.canAutoFitFields')} is enabled.&#010 <P>&#010 When autofitting to column values, ${isc.DocUtils.linkForRef('method:ListGrid.getDefaultFieldWidth')} will be&#010 called to determine the space required for a field's values. This method&#010 uses values from the rendered set of rows to calculate the required column width, which means the&#010 field width may still be smaller than values from non-rendered rows.  See&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showAllRecords')} and ${isc.DocUtils.linkForRef('attr:ListGrid.drawAheadRatio')}) to control incremental&#010 rendering of rows.&#010 <P>&#010 Note that for <code>icon</code> type fields, the ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitIconFields')}&#010 property setting may turn on auto-fit-width behavior for specific fields by default,&#010 even if <code>autoFitFieldWidths</code> is false for the grid as a whole.&#010 <P>&#010 Using this feature has a performance penalty roughly comparable to always rendering&#010 one additional field per field where autofitting is enabled.  Specifically, enabling it&#010 for all fields would be comparable to <i>both</i> doubling the number of fields&#010 <i>and</i> disabling ${isc.DocUtils.linkForRef('attr:ListGrid.showAllColumns','horizontal incremental rendering')}.&#010 In a grid where only half the fields are normally visible and hence only half are&#010 normally rendered, this would be roughly 4 times slower overall.&#010 <P>&#010 This performance penalty is a result of ${isc.DocUtils.linkForRef('method:ListGrid.getDefaultFieldWidth')} having to&#010 render out the data set offscreen and measure the rendered content - it does not apply&#010 for cases where this method can return a simple fixed values (as with icon fields).&#010 <P>&#010 Which fields are currently autofitting is saved as part of the&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getViewState','view state')} of the ListGrid. */
		autoFitFieldWidths: Boolean;

		/** How should Date type values be displayed in this ListGrid by default?&#010 <P>&#010 This property specifies the default DateDisplayFormat to apply to Date values&#010 displayed in this grid for all fields except those of ${isc.DocUtils.linkForRef('attr:ListGridField.type','type "time"')}&#010 (See also ${isc.DocUtils.linkForRef('attr:ListGrid.timeFormatter')}).<br>&#010 If ${isc.DocUtils.linkForRef('attr:ListGrid.datetimeFormatter')} is specified, that will be applied by default&#010 to fields of type <code>"datetime"</code>.&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:ListGridField.dateFormatter')} or ${isc.DocUtils.linkForRef('attr:ListGridField.timeFormatter')} are&#010 specified those properties will take precedence over the component level settings.&#010 <P>&#010 If unset, date values will be formatted according to the system wide&#010 ${isc.DocUtils.linkForRef('classMethod:DateUtil.setShortDisplayFormat','short display format')} or&#010 ${isc.DocUtils.linkForRef('classMethod:DateUtil.setShortDatetimeDisplayFormat','short datetime display format')} for&#010 datetime type fields.&#010 <P>&#010 If this field is editable the dateFormatter will also be passed to the editor created&#010 to edit this field as ${isc.DocUtils.linkForRef('attr:DateItem.dateFormatter','dateFormatter')}.&#010 In this case you may also need to set ${isc.DocUtils.linkForRef('attr:ListGrid.dateInputFormat')}. */
		dateFormatter: DateDisplayFormat;

		/** If this grid has specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans')}, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderSpanTitlesInHiliteEditor')} is true, this string will be inserted&#010 between the headerSpan title and the field title in the hiliteEditor field chooser&#010 grid. */
		hiliteEditorSpanTitleSeparator: String;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderShadow')} is true, the ${isc.DocUtils.linkForRef('attr:Canvas.shadowColor')} for&#010 the header shadow. */
		headerShadowColor: CSSColor;

		/** If this property is set to true, header buttons for either ${isc.DocUtils.linkForRef('attr:ListGrid.fields','fields')} or&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpans','header spans')} will automatically expand to accommodate their&#010 titles vertically.  This means if you have a "tall" title - typically a long string where&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.wrap')} is set to true such that you end up with several lines of text -&#010 the button will render large enough to accommodate it.  If necessary this will cause the&#010 header for the grid as a whole to expand beyond the specified ${isc.DocUtils.linkForRef('attr:ListGrid.headerHeight')}.&#010 <P>&#010 Note that you need not set ${isc.DocUtils.linkForRef('attr:HeaderSpan.height')} or ${isc.DocUtils.linkForRef('attr:ListGrid.headerSpanHeight')} if you set&#010 this property, but if you do, they will be used as minimum values. */
		autoFitHeaderHeights: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is true, when the user clicks the remove icon&#010 for some record, should we show a warning message&#010 (defined as ${isc.DocUtils.linkForRef('attr:ListGrid.warnOnRemovalMessage')}) and allow the user to cancel removal? */
		warnOnRemoval: Boolean;

		/** Style for non-header cells in printed output.  Defaults to ${isc.DocUtils.linkForRef('attr:ListGrid.baseStyle')} if null. */
		printBaseStyle: CSSStyleName;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.saveLocally')} is specified, but this grid is bound to a DataSource which&#010 includes remote field validators, by default edits will be saved synchronously and&#010 these validators will not be executed.<br>&#010 Set this property to <code>true</code> to ensure these remote validators are called when&#010 saving edits in saveLocally mode. Note that since these remote validators need to run on&#010 the server, saving with this property set is asynchronous, even though the data that&#010 ultimately gets updated is already present on the client. */
		useRemoteValidators: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')} is set to true, the <code>filterEditor</code>&#010 is automatically created as an AutoChild.<br>&#010 Developers may customize the AutoChild using ${isc.DocUtils.linkForRef('attr:ListGrid.filterEditorProperties')}. */
		filterEditor: RecordEditor /* RecordEditor AutoChild */;

		/** Custom CSS text to be applied to records that have been&#010 ${isc.DocUtils.linkForRef('method:ListGrid.markRecordRemoved','marked for removal')}.&#010 <P>&#010 This CSS text will be applied on top of standard disabled styling for the cell. */
		removedCSSText: string;

		/** If we're showing the filterEditor (${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')} is true), and we're&#010 re-filtering on every keypress (${isc.DocUtils.linkForRef('attr:ListGrid.filterOnKeypress')} is true), this&#010 property is the delay in milliseconds between the user changing the filter and the&#010 filter request being kicked off. If multiple changes are made to the filter&#010 within this fetch delay, only the most recent will actually cause a re-filter */
		fetchDelay: number;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} is enabled and the calculated field sizes&#010 are wide enough that horizontal scrolling would be introduced, this attribute may be&#010 set to an array of fieldNames, causing those fields to be clipped rather than&#010 forcing horizontal scrollbars to appear.&#010 <P>&#010 Note: If any ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen columns')} are included in this list they&#010 will not be clipped. */
		autoFitClipFields: String[] /* Array of String */;

		/** If showing any record summary fields (IE: fields of ${isc.DocUtils.linkForRef('type:ListGridFieldType','type:"summary"')}),&#010 this attribute specifies a custom base style to apply to cells in the summary field */
		recordSummaryBaseStyle: CSSStyleName;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.isGrouped','this.isGrouped')} is true, this&#010 attribute will be shown as the title for the menu item to ungroup the grid. */
		ungroupText: string;

		/** Indicates whether a sorting arrow should appear for the listGrid, and its&#010 location. See ${isc.DocUtils.linkForRef('type:SortArrow')} for details.&#010 <P>&#010 Clicking the sort arrow reverses the direction of sorting for the current sort&#010 column (if any), or sorts the listGrid by its first sortable column. The arrow&#010 image on the button indicates the current direction of sorting.&#010 If undefined, the sort arrow will show up in the sorted field, and the&#010 corner sort button will be displayed if a vertical scrollbar is being displayed */
		showSortArrow: SortArrow;

		/** If the result of a formula evaluation is invalid (specifically, if isNaN(result)==true),&#010 badFormulaResultValue is displayed instead.  The default value is ".". */
		badFormulaResultValue: String;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is set to <code>true</code>, this property&#010 determines the image to display in the expansion field for expanded rows.&#010 If unset, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} will be used. */
		expansionFieldTrueImage: SCImgURL;

		/** Optional css style to apply to the body if ${isc.DocUtils.linkForRef('attr:ListGrid.alternateRecordStyles')} is true&#010 for this grid. If unset ${isc.DocUtils.linkForRef('attr:ListGrid.bodyStyleName')} will be used to style the body&#010 regardless of the ${isc.DocUtils.linkForRef('attr:ListGrid.alternateRecordStyles','alternateRecordStyles')} setting. */
		alternateBodyStyleName: CSSStyleName;

		/** Default size of thumbnails shown for fieldTypes image and imageFile.  Overrideable on a&#010 per-field basis via ${isc.DocUtils.linkForRef('attr:ListGridField.imageSize')} or&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.imageWidth')}/${isc.DocUtils.linkForRef('attr:ListGridField.imageHeight')} */
		imageSize: number;

		/** Default width and height of ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIcons','hilite icons')} for this component.&#010 Can be overridden at the component level via explicit &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIconWidth','hiliteIconWidth')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIconHeight','hiliteIconHeight')}, or at the field level via &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.hiliteIconSize','hiliteIconSize')},&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.hiliteIconWidth','hiliteIconWidth')} and &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.hiliteIconHeight','hiliteIconHeight')} */
		hiliteIconSize: number;

		/** Delay in milliseconds before fetching data.&#010 <P>&#010 Note: the floor value for this attribute is 1.  If you set this value to zero, it will&#010 be defaulted to 1 for you instead. */
		dataFetchDelay: number /* integer */;

		/** If true, when the user navigates to a cell using arrow keys and hits Enter,&#010 the cell will respond to a double click event. */
		generateDoubleClickOnEnter: Boolean;

		/** If a field has ${isc.DocUtils.linkForRef('attr:ListGridField.displayField')} specified and has no&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.optionDataSource')}, this field will display the value from the&#010 <code>displayField</code> of each record by default (for more on this behavior&#010 see ${isc.DocUtils.linkForRef('attr:ListGridField.optionDataSource')}).&#010 <P>&#010 If such a field is editable, changing the edit value for the field on some record,&#010 without updating the edit value for the associated display field on the same record&#010 would mean the user would continue to see the unchanged display field value.&#010 Developers can resolve this situation by programmatically setting an edit value for&#010 the display field as well as the data field, or avoid it by specifying an optionDataSource&#010 and ensuring ${isc.DocUtils.linkForRef('attr:ListGrid.autoFetchDisplayMap')} is true, or setting an explicit valueMap&#010 for the field.&#010 <P>&#010 By default, when the edit value on a field with a specified displayField and&#010 no optionDataSource is set, we log a warning to notify the developer. This warning may&#010 be disabled by setting <code>warnOnUnmappedValueFieldChange</code> to <code>false</code>.&#010 <P>&#010 Note: There are actually a couple of cases in which the system will automatically&#010 derive a new display-field value and apply it to the record:&#010 <ol><li>If the edit value was changed by a user actually editing the record&#010 (rather than a programmatic call to setEditValue()), and the edit-item had&#010 a valueMap or optionDataSource set, we automatically pick up the display value from&#010 that item and store it as an edit-value for the displayField of the record</li>&#010     <li>If the listGrid has a loaded record in its data set whose valueField value matches&#010 the edit value for the valueField, we automatically apply the displayField value from that&#010 record as an edit value for the displayField on the newly edited record.</li></ol>&#010 In either case, the display value for the record is updated automatically&#010 (and the warning would not be logged). */
		warnOnUnmappedValueFieldChange: Boolean;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','this.canGroupBy')} is true, this string will be shown as the&#010 title for the menu item to toggle the group by setting for a field.&#010 <P>&#010 This is a dynamic string - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed, with <code>title</code> available as a variable containing&#010 the field title.&#010 <P>&#010 Default value returns "Group by " + the field's summary title. */
		groupByText: HTMLString;

		/** Should group summaries be visible when the group is collapsed?&#010 <P>&#010 This property only applies to ${isc.DocUtils.linkForRef('method:ListGrid.groupBy','grouped')} grids showing&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary','group summary rows')}. When set to true, the&#010 group summary row(s) for each group will show up under the group header nodes when&#010 the group is collapsed, or at then end of the grouped set of data if the group&#010 is expanded.&#010 <P>&#010 This property has no effect if ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummaryInHeader')} is true. */
		showCollapsedGroupSummary: Boolean;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.checkboxFieldFalseImage')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}. */
		printCheckboxFieldFalseImage: SCImgURL;

		/** Should this ListGrid automatically expand to accommodate the size of records and fields?&#010 <P>&#010 Valid settings are&#010 <ul><li><code>"vertical"</code>: expand vertically to accommodate records.</li>&#010     <li><code>"horizontal"</code>: expand horizontally to accommodate fields.</li>&#010     <li><code>"both"</code>: expand horizontally and vertically to accommodate content.</li>&#010 </ul>&#010 How far the ListGrid will expand may be limited via the following properties:&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxHeight')}, ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxRecords')},&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxWidth')}, ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitMaxColumns')}.&#010 <P>&#010 Note that this property causes the grid as a whole to expand to fit records or fields.&#010 To have the fields or records themselves expand to fit cell contents, see&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} and ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights')}. */
		autoFitData: Autofit;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid,&#010 and user-driven auto fit of fields is enabled via ${isc.DocUtils.linkForRef('attr:ListGridField.canAutoFitWidth')} or &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canAutoFitFields')}, this attribute will be shown as the menu&#010 item title for an item to perform a one-time autoFit of the field to its title or content&#010 via a call to ${isc.DocUtils.linkForRef('method:ListGrid.autoFitField')}. */
		autoFitFieldText: string;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid,&#010 and multi-sorting is enabled, this attribute is used as the title for a menu item that opens&#010 a ${isc.DocUtils.linkForRef('class:MultiSortDialog')} to configure the sort-specification for this grid.  This&#010 menu-item is displayed only in the context menu for the sorter button. */
		configureSortText: string;

		/** Image to show when sorting ascending. See ${isc.DocUtils.linkForRef('object:ImgProperties')} for format. */
		sortAscendingImage: ImgProperties /* ImgProperties */;

		/** The string to display in the body of a listGrid while data is being loaded.&#010 Use <code>"&#36;{loadingImage}"</code> to include ${isc.DocUtils.linkForRef('classAttr:Canvas.loadingImageSrc','a loading image')}. */
		loadingDataMessage: HTMLString;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid,&#010 and a ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor','filter-editor')} is visible, this&#010 attribute will be shown as the menu item title to clear any existing filter.  This&#010 menu-item is displayed only in the context menu for the sorter button. */
		clearFilterText: string;

		/** If true, when the user navigates to a cell using arrow keys and hits Space,&#010 the cell will respond to a double click event. */
		generateDoubleClickOnSpace: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents')} is true, this attribute may be used to&#010 specify a standard height for record components.&#010 If specified every row in the grid will be sized tall enough to accommodate a recordComponent&#010 of this size.&#010 <P>&#010 Note that if this property is unset, the grid will not be able to know row heights in&#010 advance, and ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen fields')} are not currently supported in&#010 this case.  If you are putting a recordComponent in every row, and they all have a consistent&#010 height, set <code>recordComponentHeight</code> and you will then be able to use frozen fields&#010 <i>and</i> avoid the whitespace side-effect of virtual scrolling by setting &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.virtualScrolling')}:false.&#010 <P>&#010 Similarly, if your recordComponents are never tall enough that they will expand the row&#010 beyond the ${isc.DocUtils.linkForRef('attr:ListGrid.cellHeight')}, set ${isc.DocUtils.linkForRef('attr:ListGrid.virtualScrolling')}:false to avoid the whitespace&#010 side-effect of ${isc.DocUtils.linkForRef('attr:ListGrid.virtualScrolling','virtual scrolling')} and to allow &#010 ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen fields')} to be used.  In this mode, you can have&#010 recordComponents on some rows but not others, and recordComponents of different heights, so&#010 long as no recordComponent ever causes a row to grow beyond ${isc.DocUtils.linkForRef('attr:ListGrid.cellHeight')} (which would&#010 happen if the recordComponents height + 2*${isc.DocUtils.linkForRef('attr:ListGrid.cellPadding')} is larger than &#010 ${isc.DocUtils.linkForRef('attr:ListGrid.cellHeight')}). */
		recordComponentHeight: number /* Integer */;

		/** While drag scrolling in an incrementally rendered grid, time in milliseconds to wait&#010 before redrawing, after the last mouse movement by the user. This delay may be &#010 separately customized for mouse-wheel scrolling via ${isc.DocUtils.linkForRef('attr:ListGrid.scrollWheelRedrawDelay')}.&#010 <P>&#010 See also&#010 ${isc.DocUtils.linkForRef('attr:GridRenderer.instantScrollTrackRedraw')} for cases where this delay is skipped.&#010 <P>&#010 <strong>NOTE:</strong> In ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch','touch browsers')},&#010 ${isc.DocUtils.linkForRef('attr:GridRenderer.touchScrollRedrawDelay','touchScrollRedrawDelay')} is used instead. */
		scrollRedrawDelay: number /* number */;

		/** Property name on a record that will be checked to determine whether a record is enabled.&#010 <P>&#010 Setting this property on a record will effect the visual style and interactivity of&#010 the record.  If set to <code>false</code> the record (row in a ${isc.DocUtils.linkForRef('class:ListGrid')} or&#010 ${isc.DocUtils.linkForRef('class:TreeGrid')}) will not highlight when the mouse moves over it, nor will it respond to&#010 mouse clicks. */
		recordEnabledProperty: string;

		/** Properties to apply to the automatically generated ${isc.DocUtils.linkForRef('attr:ListGrid.filterEditor')}&#010 if ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')} is true. */
		filterEditorProperties: RecordEditor /* RecordEditor properties */;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderShadow')} is true, the ${isc.DocUtils.linkForRef('attr:Canvas.shadowHOffset')} for&#010 the header shadow */
		headerShadowHOffset: Number;

		/** For use with ${isc.DocUtils.linkForRef('attr:ListGrid.showFilterEditor')}:true, allows simple search expressions to be entered&#010 into filter fields, as though ${isc.DocUtils.linkForRef('attr:DynamicForm.allowExpressions')} were true.&#010 <P>&#010 Can also be enabled or disabled on a field-by-field basis via&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.filterEditorProperties')}. */
		allowFilterExpressions: boolean;

		/** An array of listGrid field configuration objects.  When a listGrid is initialized, if this&#010 property is set and there is no value for the <code>fields</code> attribute, this.fields will&#010 be defaulted to a generated array of field objects duplicated from this array.&#010 <P>&#010 This property is useful for cases where a standard set of fields will be displayed&#010 in multiple listGrids - for example a subclass of ListGrid intended to display a particular&#010 type of data:<br>&#010 In this example we would not assign a single ${isc.DocUtils.linkForRef('attr:ListGrid.fields')} array directly to the&#010 class via <code>addProperties()</code> as every generated instance of this class would&#010 then point to the same fields array object. This would cause unexpected behavior such as&#010 changes to the field order in one grid effecting other grids on the page.<br>&#010 Instead we could use <code>addProperties()</code> on our new subclass to set&#010 <code>defaultFields</code> to a standard array of fields to display. Each generated instance&#010 of the subclass would then show up with default fields duplicated from this array. */
		defaultFields: ListGridField[] /* Array of ListGridField Properties */ /* Array of ListGridField Properties */;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:ListGrid')} for displaying data related to a record&#010 in its expanded section when&#010 ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is <code>related</code>.&#010 The ${isc.DocUtils.linkForRef('class:DataSource')} containing the related data is provided by&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getRelatedDataSource','getRelatedDataSource()')} which, by default,&#010 returns the DataSource referred to in ${isc.DocUtils.linkForRef('attr:ListGridRecord.detailDS')}.&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionRelatedProperties</code> and&#010 <code>listGrid.expansionRelatedDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionRelated: ListGrid /* MultiAutoChild ListGrid */;

		/** ${isc.DocUtils.linkForRef('attr:Button.baseStyle')} to apply to the buttons in the header, and the sorter, for&#010 this ListGrid.&#010 Note that, depending on the ${isc.DocUtils.linkForRef('attr:ListGrid.headerButtonConstructor','Class')} of the header&#010 buttons, you may also need to set ${isc.DocUtils.linkForRef('attr:ListGrid.headerTitleStyle')}. */
		headerBaseStyle: CSSStyleName;

		/** Where do 'skin' images (those provided with the class) live? */
		skinImgDir: URL;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.selectionType','selectionType')} is set to&#010 "single",&#010 &#010 and either ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectionCanvas','showSelectionCanvas')} is <code>true</code> and&#010 <code>showSelectionUnderCanvas</code> is unset, or <code>showSelectionUnderCanvas</code>&#010 is explicitly set to <code>true</code>, then selection will be displayed to the&#010 user with the ${isc.DocUtils.linkForRef('attr:ListGrid.selectionCanvas','selectionCanvas')} and/or&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.selectionUnderCanvas','selectionUnderCanvas')} rather than with CSS styling.&#010 Setting <code>showSelectionUnderCanvas</code> to <code>false</code> will disable&#010 the use of the <code>selectionUnderCanvas</code>.&#010 <p>&#010 With ${isc.DocUtils.linkForRef('attr:ListGrid.canFreezeFields','frozen fields')}, the <code>selectionUnderCanvas</code>&#010 is displayed only behind the non-frozen fields of the selected row. */
		showSelectionUnderCanvas: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} is enabled, and extra space is available after&#010 autofitting all fields, should the grid automatically expand one field to fill the extra&#010 space.&#010 <P>&#010 When enabled, the field to expand may be specified via ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitExpandField')}.&#010 <P>&#010 Note this logic will not expand a ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen column')}. */
		autoFitFieldsFillViewport: Boolean;

		/** Controls whether a checkbox for selecting all records appears in the header with&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.selectionAppearance','selectionAppearance')} set to "checkbox" */
		canSelectAll: boolean;

		/** Automatically generated ${isc.DocUtils.linkForRef('class:DynamicForm')} for editing the details of a record&#010 in its expanded section when&#010 ${isc.DocUtils.linkForRef('type:ExpansionMode','listGrid.expansionMode')} is <code>editor</code>.  Note that only&#010 those fields which do not already appear in the grid will appear in the expanded section.&#010 <P>&#010 According to the value of ${isc.DocUtils.linkForRef('attr:ListGrid.showExpansionEditorSaveButton')}, a save button is shown&#010 beneath the editor.  You can save the values in the editor by clicking this button&#010 <P>&#010 This component is an ${isc.DocUtils.linkForRef('type:AutoChild')} and as such may be customized via&#010 <code>listGrid.expansionEditorProperties</code> and&#010 <code>listGrid.expansionEditorDefaults</code>.&#010 <P>&#010 Note, however, that this is a multi-instance component (potentially one per record),&#010 so it is created using ${isc.DocUtils.linkForRef('method:Class.createAutoChild','createAutoChild()')} not&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild','addAutoChild()')}, and no default single instance is created by&#010 name on the grid. */
		expansionEditor: DynamicForm /* MultiAutoChild DynamicForm */;

		/** If true, causes the ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRow','summaryRow')} component to be hidden if it has&#010 no data after summaries have been recalculated */
		hideEmptySummaryRow: Boolean;

		/** Default image to use for the dragTracker when things are dragged within or out of this&#010 list. See ${isc.DocUtils.linkForRef('object:ImgProperties')} for format. */
		trackerImage: ImgProperties /* ImgProperties */;

		/** Default CSS class for the ListGrid as a whole. */
		styleName: CSSStyleName;

		/** If we're showing a ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderContextMenu','headerContextMenu')} for this grid, and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.canPickFields','this.canPickFields')} is true, this&#010 attribute will be shown as the title for the menu item which contains a submenu with items&#010 allowing the user to show and hide fields in the grid. */
		fieldVisibilitySubmenuTitle: string;

		/** If this property is true, users can drag the mouse to select several rows or cells.&#010  This is mutually exclusive with rearranging rows or cells by dragging.&#010 <p>&#010 <strong>NOTE:</strong> If <code>canDragSelect</code> is initially enabled or might be&#010 dynamically enabled after the grid is created, it may be desirable to disable&#010 ${isc.DocUtils.linkForRef('attr:Canvas.useTouchScrolling','touch scrolling')} so that touch-dragging records/cells&#010 selects them rather than starting a scroll. If ${isc.DocUtils.linkForRef('attr:Canvas.disableTouchScrollingForDrag')}&#010 is set to <code>true</code>, then touch scrolling will be disabled automatically.&#010 However, for ${isc.DocUtils.linkForRef('group:accessibility','accessibility')} reasons, it is recommended to&#010 leave touch scrolling enabled and provide an alternative set of controls that can be&#010 used to perform drag-selection. */
		canDragSelect: Boolean;

		/** Optional default width for the&#010 hover shown on ${isc.DocUtils.linkForRef('method:ListGrid.headerHover')}. */
		headerHoverWidth: number /* Integer */;

		/** How much padding should there be on the right of ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIcons','hilite icons')} by default?&#010 Can be overridden at the field level */
		hiliteIconRightPadding: number;

		/** ${isc.DocUtils.linkForRef('attr:ListGridRecord.customStyle')} for the group-level summary row displayed when&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.showGroupSummary')} is true. */
		groupSummaryStyle: CSSStyleName;

		/** The default height of each row in pixels. */
		cellHeight: number;

		/** For any fields of ${isc.DocUtils.linkForRef('type:FieldType','type "binary"')}, should sorting be performed&#010 against the fileName of the value for the field? For SmartClient server backed&#010 dataSources, this is applied to the record automatically as described in the&#010 ${isc.DocUtils.linkForRef('group:binaryFields')} overview.&#010 <P>&#010 If set to false, binary fields will be sorted against the record value for the&#010 field in question. Client-side sorting does not support this, so developers who&#010 actually want to support a sort against the binary itself would typically set&#010 ${isc.DocUtils.linkForRef('attr:ResultSet.useClientSorting')} to false on the ${isc.DocUtils.linkForRef('attr:ListGrid.dataProperties')} block for&#010 this grid.&#010 <P>&#010 Note that this setting will have no effect if ${isc.DocUtils.linkForRef('attr:DataSourceField.sortByField')} is&#010 specified */
		sortBinaryByFileName: boolean;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}.&#010 <p>&#010 If this, ${isc.DocUtils.linkForRef('attr:ListGrid.printBooleanTrueImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.printBooleanPartialImage')}&#010 are unset, this will be set to the default ${isc.DocUtils.linkForRef('attr:CheckboxItem.printUncheckedImage')}. */
		printBooleanFalseImage: SCImgURL;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.confirmDiscardEdits')} is true this is the title for the save button&#010 appearing in the lost edits confirmation dialog. Override this for localization if necessary. */
		discardEditsSaveButtonTitle: string;

		/** When using ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')}, padding in pixels left on each side of fields that&#010 show images. */
		iconPadding: number /* integer */;

		/** If false, grouping via context menu will be disabled. */
		canGroupBy: Boolean;

		/** if ${isc.DocUtils.linkForRef('attr:ListGrid.reselectOnUpdate')} is true, this property governs what&#010 selection changed notifications should be triggered when a selected record&#010 is edited then automatically reselected when the edited data is merged into&#010 the data set. */
		reselectOnUpdateNotifications: SelectionNotificationType;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.showHoverComponents','showHoverComponents')} is true, the builtin mode&#010 to use when automatically creating a hover component for rows in this grid.&#010 <P>&#010 A number of builtin modes are provided - see ${isc.DocUtils.linkForRef('type:HoverMode')}.  You can also override&#010 ${isc.DocUtils.linkForRef('method:ListGrid.getCellHoverComponent','getCellHoverComponent()')} to provide a custom hover&#010 widget - in that case, this attribute is ignored. */
		hoverMode: HoverMode;

		/** Indicates what to do with data dragged into another DataBoundComponent. See&#010 DragDataAction type for details. */
		dragDataAction: DragDataAction;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')} is true, and a ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRowDataSource')} is specified&#010 this property may be used to specify fetch criteria to apply when retrieving summary data&#010 to show in the summary row. If unset, and any filter criteria have been specified for the&#010 grid, they will be used. */
		summaryRowCriteria: Criteria;

		/** Src of the image to show as an error icon, if we're showing icons when validation&#010      errors occur. */
		errorIconSrc: SCImgURL;

		/** This is a dynamic string - text within <code>&#36;{...}</code> will be evaluated as JS code&#010 when the message is displayed. Note that the local variable <code>count</code> will be&#010 available and set to this.maxExpandedRecords. The string will be executed in the scope of the&#010 ListGrid so <code>this</code> may also be used to determine other information about this grid.&#010 <P>&#010 Default value returns <P>&#010 <code>&#010 <i>This grid is limited to <code>[${isc.DocUtils.linkForRef('attr:ListGrid.maxExpandedRecords')}]</code> simultaneously&#010 expanded records.  Please collapse some expanded records and retry.</i>&#010 </code> */
		maxExpandedRecordsPrompt: HTMLString;

		/** When grouping is requested with this number of records or more, an asynchronous approach is&#010 used to avoid the browser showing a "script is running slowly.." message prompting the&#010 user to stop execution of JavaScript.&#010 <p>&#010 Note that ${isc.DocUtils.linkForRef('attr:ListGrid.groupByMaxRecords')} must be set at least as high as ${isc.DocUtils.linkForRef('attr:ListGrid.groupByAsyncThreshold')}&#010 or asynchronous grouping will never be used.&#010 <p>&#010 During async grouping, interactivity is blocked and the ${isc.DocUtils.linkForRef('attr:ListGrid.asynchGroupingPrompt')} is shown&#010 to the user, then hidden when grouping completes; ${isc.DocUtils.linkForRef('method:ListGrid.groupByComplete')} then fires.&#010 <p>&#010 Note that this async processing covers grouping <b>only</b> - it does not cover whole grid or&#010 per-group summaries, client-side sort or filter, or other operations that may cause the browser&#010 to show the "script is running slowly" prompt when working with very large sets of records in a&#010 grid.&#010 <p>&#010 At this time, there is no generally effective way to avoid this warning dialog appearing with very&#010 large datasets in Microsoft's Internet Explorer (IE).  IE's severely flawed detection algorithm for&#010 runaway scripts has been shown to interrupt computations after only 0.2 seconds elapsed time&#010 even if the computation would have finished in 0.3 seconds.  Optimizations that reduce&#010 execution time can sometimes trigger the "script running slowly" dialog sooner.  Since not&#010 every operation can reasonably be made asynchronous, the current recommendation is to avoid&#010 working with overly large datasets until the affected versions of IE are obsoleted. */
		groupByAsyncThreshold: number /* number */;

		/** If set, the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} to use when ${isc.DocUtils.linkForRef('group:printing','printing')}.&#010 <p>&#010 If this, ${isc.DocUtils.linkForRef('attr:ListGrid.printBooleanFalseImage')} and ${isc.DocUtils.linkForRef('attr:ListGrid.printBooleanPartialImage')}&#010 are unset, this will be set to the default ${isc.DocUtils.linkForRef('attr:CheckboxItem.printCheckedImage')}. */
		printBooleanTrueImage: SCImgURL;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is enabled, should records be animated out of view&#010 when they are removed by the user? */
		animateRemoveRecord: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.canSelectCells')} is true, this property allows the user&#010 to navigate through the cells of a grid using Tab and Shift+Tab keypresses.&#010 When a user tabs to the&#010 end of the row, the ${isc.DocUtils.linkForRef('attr:ListGrid.rowEndEditAction')} is used to determine whether&#010 to shift selection to the next row, return to the beginning of the same row, or&#010 simply move on through the page's tab order. */
		navigateOnTab: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showGridSummary')} is true, and a ${isc.DocUtils.linkForRef('attr:ListGrid.summaryRowDataSource')} is specified&#010 this property may be used to customize the fetch request used when retrieving summary data&#010 to show in the summary row. An example use case might be specifying a&#010 ${isc.DocUtils.linkForRef('attr:DSRequest.operationId')} to perform a custom fetch operation which retrieved only summary&#010 values based on criteria. */
		summaryRowFetchRequestProperties: DSRequest /* DSRequest Properties */;

		/** When ${isc.DocUtils.linkForRef('classMethod:AutoTest.getElement')} is used to parse locator strings generated by&#010 ${isc.DocUtils.linkForRef('classMethod:AutoTest.getLocator')} for a cell in this grid, how should the column be identified?&#010 <br>&#010 Note that getLocator() will actually store all available information about the column in&#010 the generated string -- this attribute effects how a stored string will be parsed only.&#010 <P>&#010 Valid options area:&#010 <ul>&#010 <li><code>"fieldName"</code> Attempt to identify by fieldName.</li>&#010 <li><code>"index"</code> Attempt to identify by colNum (index in the fields array).</li>&#010 </ul>&#010 If unset, default behavior is to identify by fieldName (if available), otherwise by index. */
		locateColumnsBy: string;

		/** Defaults to apply to all header buttons. To modify this object,&#010 use ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults','ListGrid.changeDefaults()')}&#010 rather than replacing with an entirely new object. */
		headerButtonDefaults: Button /* Button Properties */;

		/** If true, and canHover is also true, when the user hovers over a cell, hover text will pop up&#010 next to the mouse.  The contents of the hover is determined by ${isc.DocUtils.linkForRef('method:ListGrid.cellHoverHTML')}. */
		showHover: Boolean;

		/** Can a group be collapsed/expanded? When true a collapse/expand icon is shown&#010 (${isc.DocUtils.linkForRef('attr:ListGrid.groupIcon','groupIcon')}) and the user can collapse or expand the group by&#010 clicking either the row as a whole or the opener icon (see ${isc.DocUtils.linkForRef('attr:ListGrid.collapseGroupOnRowClick')});&#010&#010 When false the group icon is not shown and clicking on the row does&#010 not change group state. Additionally ${isc.DocUtils.linkForRef('type:GroupStartOpen','groupStartOpen')} is&#010 initialized to "all". */
		canCollapseGroup: Boolean;

		/** Scaling factor to translate from ListGrid field widths in pixels to Excel/OpenOffice units&#010 for field width, which are 1/256th of the width of the widest digit character in the default&#010 font for the spreadsheet.  See ${isc.DocUtils.linkForRef('attr:ListGrid.exportFieldWidths')} for where this is used. */
		exportWidthScale: number /* float */;

		/** The CSS style name applied to the ${isc.DocUtils.linkForRef('attr:DataBoundComponent.offlineMessage','offlineMessage')} if displayed. */
		offlineMessageStyle: CSSStyleName;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords','canExpandRecords')} is true and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.expansionMode','expansionMode')} is <i>editor</i>, whether a dialog should be&#010 displayed when an expanded row is collapsed while it's nested editor has changed values. */
		expansionEditorShowSaveDialog: boolean;

		/** Properties to apply to the sorter button. Overrides defaults applied via&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.sorterDefaults')}. */
		sorterProperties: Button /* Button Properties */;

		/** Default configuration properties for the "remove field"&#010 displayed when ${isc.DocUtils.linkForRef('attr:ListGrid.canRemoveRecords')} is enabled.&#010 ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults')} should be used when modifying this object.&#010 <P>&#010 The default configuration includes a ${isc.DocUtils.linkForRef('method:ListGridField.recordClick')} handler which&#010 calls ${isc.DocUtils.linkForRef('method:ListGrid.removeData')} to actually perform the data removal. */
		removeFieldDefaults: ListGridField /* ListGridField properties */;

		/** When set to true, shows an additional field at the beginning of the field-list&#010 (respecting RTL) that displays the current rowNum for each record. */
		showRowNumbers: boolean;

		/** The field to expand if ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} and&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldsFillViewport')} are enabled and&#010 auto-fitting will not fill all available horizontal space.&#010 <P>&#010 If unset, will default to the text field with the longest&#010 ${isc.DocUtils.linkForRef('attr:DataSourceField.length')} if length is set, otherwise, the first text&#010 field with no width specified.&#010 <P>&#010 Note that expanding ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen columns')} is not supported. */
		autoFitExpandField: String;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, when auto-fitting fields to&#010 the title width via ${isc.DocUtils.linkForRef('attr:ListGrid.autoFitFieldWidths')} or ${isc.DocUtils.linkForRef('attr:ListGridField.autoFitWidth')},&#010 should the button be sized such that there is enough space for the header menu button to&#010 show without covering the field title?&#010 <P>&#010 May be explicitly specified at the ${isc.DocUtils.linkForRef('attr:ListGridField.leaveHeaderMenuButtonSpace','field level')}&#010 or at the ${isc.DocUtils.linkForRef('attr:ListGrid.leaveHeaderMenuButtonSpace','grid level')}. If not explicitly&#010 specified space will be left for fields with&#010 ${isc.DocUtils.linkForRef('attr:ListGridField.align')} set to <code>"left"</code> or <code>"right"</code>, but not for&#010 fields with align set to <code>"center"</code>. */
		leaveHeaderMenuButtonSpace: boolean;

		/** The URL of the base icon for the group icons in this listGrid. Default value may &#010 be overridden by the ${isc.DocUtils.linkForRef('group:skinning','current skin')}. */
		groupIcon: SCImgURL;

		/** If <code>record[this.singleCellValueProperty]</code> is set for some record, the&#010 record will be displayed as a single cell spanning every column in the grid, with&#010 contents set to the value of <code>record[this.singleCellValueProperty]</code>. */
		singleCellValueProperty: string;

		/** An array of ${isc.DocUtils.linkForRef('object:SortSpecifier')} objects used to set up the initial sort configuration for&#010 this grid. If specified, this will be used instead of any ${isc.DocUtils.linkForRef('attr:ListGrid.sortField')} specified. */
		initialSort: SortSpecifier[] /* Array of SortSpecifier */;

		/** Indicates whether records can be reordered by dragging within this <code>ListGrid</code>.&#010 <p>&#010 <strong>NOTE:</strong> If <code>canReorderRecords</code> is initially enabled or might be&#010 ${isc.DocUtils.linkForRef('method:ListGrid.setCanReorderRecords','dynamically enabled')} after the grid is created,&#010 it may be desirable to disable ${isc.DocUtils.linkForRef('attr:Canvas.useTouchScrolling','touch scrolling')}&#010 so that touch-dragging a record starts a reorder operation rather than a scroll. If&#010 ${isc.DocUtils.linkForRef('attr:Canvas.disableTouchScrollingForDrag')} is set to <code>true</code>, then touch&#010 scrolling will be disabled automatically. However, for ${isc.DocUtils.linkForRef('group:accessibility','accessibility')}&#010 reasons, it is recommended to leave touch scrolling enabled and provide an alternative&#010 set of controls that can be used to perform drag-reordering of records. */
		canReorderRecords: Boolean;

		/** Width for the ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')}, ${isc.DocUtils.linkForRef('attr:ListGrid.booleanFalseImage')}&#010 and ${isc.DocUtils.linkForRef('attr:ListGrid.booleanPartialImage')}.&#010 Note: If ${isc.DocUtils.linkForRef('attr:ListGrid.booleanTrueImage')} is unset, the ${isc.DocUtils.linkForRef('attr:CheckboxItem.checkedImage')}&#010 will be used to indicate a true value in a boolean field. In this case this property is&#010 ignored in favor of ${isc.DocUtils.linkForRef('attr:CheckboxItem.valueIconWidth')}. */
		booleanImageWidth: number;

		/** When ${isc.DocUtils.linkForRef('attr:ListGrid.canExpandRecords')} is true, this property indicates whether multiple&#010 records can be expanded simultaneously.  If set to false, expanding a record will&#010 automatically collapse any record which is already expanded.  The default value is&#010 <code>true</code>. */
		canExpandMultipleRecords: Boolean;

		/** How much padding should there be on the left of valueIcons by default&#010 Can be overridden at the field level */
		valueIconLeftPadding: number;

		/** If ${isc.DocUtils.linkForRef('attr:ListGrid.showHeaderMenuButton')} is true, this property governs the width of the&#010 auto-generated <code>headerMenuButton</code> */
		headerMenuButtonWidth: number;

		/** Default width and height of group icons for this ListGrid. */
		groupIconSize: Number;

		/** When animating folder opening / closing, this property can be set to apply an&#010 animated acceleration effect. This allows the animation speed to be "weighted", for&#010 example expanding or collapsing at a faster rate toward the beginning of the animation&#010 than at the end.&#010 <P>&#010 For a ListGrid, this property applies when ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','grouping')} is enabled. */
		animateFolderEffect: AnimationAcceleration;

		/** Initial ${isc.DocUtils.linkForRef('type:ListGridViewState','view state')} for the grid.&#010 <P>&#010 Since view state contains field state it is not necessary&#010 to set ${isc.DocUtils.linkForRef('attr:ListGrid.fieldState','fieldState')} when also setting <code>viewState</code>.&#010 If both are provided, <code>fieldState</code> has priority for field state.&#010 &#010 <P>&#010 To retrieve current state call ${isc.DocUtils.linkForRef('method:ListGrid.getViewState','getViewState')}.&#010  */
		viewState: String;

		/** The DataSource that this component should bind to for default fields and for performing&#010 ${isc.DocUtils.linkForRef('class:DSRequest','DataSource requests')}.&#010 <P>&#010 Can be specified as either a DataSource instance or the String ID of a DataSource. */
		dataSource: DataSource | ID /* DataSource or ID */;

		/** If set, whenever grouping is performed by an end user or by a programmatic call to &#010 ${isc.DocUtils.linkForRef('method:ListGrid.groupBy')}, data is implicitly sorted by all of the grouped columns, in the order &#010 they were passed to groupBy. Any user-configured sorting is applied after sorting by &#010 grouped columns.&#010 <p>&#010 Sorting by grouped fields will be in ascending or descending order according to whether &#010 the grid is currently sorted (by any field) in ascending or descending order, defaulting &#010 to ascending if the grid is not sorted. Implicit sorting by group can be forced to be &#010 always ascending or always descending by setting ${isc.DocUtils.linkForRef('attr:ListGrid.groupSortDirection')}.&#010 <p>&#010 The sorting is "implicit" in the sense that the sorting is not shown in the ListGrid &#010 headers, and not shown in the ${isc.DocUtils.linkForRef('class:MultiSortDialog')} if enabled.  An end user cannot &#010 currently remove the implicit sorting themselves (except by removing the grouping), &#010 though it is possible to override it by providing an explicit sort on the group's column.&#010 Clicking on the grouped field's header reveals the usual sort indicators with all&#010 the same semantics.&#010 <p>&#010 The correct way to remove implicit sorting programmatically is to call &#010 ${isc.DocUtils.linkForRef('method:ListGrid.setSortByGroupFirst','setSortByGroupFirst(false)')}.&#010 <p>&#010 Programmatic calls to ${isc.DocUtils.linkForRef('method:ListGrid.getSort')} will not include the implicit sort in &#010 the list of return sort specifiers, and calls to ${isc.DocUtils.linkForRef('method:ListGrid.setSort')} will implicitly add &#010 the sorting by grouped columns before the specified sort.&#010 <p>&#010 Note that directly calling ResultSet.getSort() will include the implicit sort &#010 information. */
		sortByGroupFirst: Boolean;

		/** Should we show different styling for the cell the mouse is over?&#010 <p>&#010 If true, the cell style will have the suffix "Over" appended.&#010 <p>&#010 Can be overridden on a per-record basis via ${isc.DocUtils.linkForRef('attr:ListGridRecord.showRollOver')}. */
		showRollOver: Boolean;

		/** When enabled, when the mouse moves over a row or cell (depending on&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.useCellRollOvers')}), an arbitrary Canvas can be shown layered on top of the row or&#010 cell (the ${isc.DocUtils.linkForRef('attr:ListGrid.rollOverCanvas')}), layered underneath the row or cell (the&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.rollUnderCanvas')}), or both. &#010 <P>&#010 This can be used to dynamically show controls or informational displays only on&#010 rollover.  For example, controls to delete a row might appear only on rollover so they&#010 do not clutter the static display, or a "rollUnder" Canvas could be used to display&#010 additional information that can appear behind normal cell values (like displaying&#010 percent complete via as a bar of color that appears behind text values).&#010 <p>&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo positioning')} can be used to place the&#010 rollOver/rollUnderCanvas.  With <code>useCellRollOvers</code>, positioning is relative&#010 to the cell, for row-level rollOver, position is relative to the portion of the&#010 row that is scrolled into view (this implies a row-level rollOver/UnderCanvas can never&#010 be placed horizontally scrolled out of view, but this is possible for a cell-level&#010 rollOver).  &#010 <p>&#010 <code>snapTo</code> positioning makes it easy to do something like place a button at the&#010 right edge of the grid, next to the scrollbar: just set snapTo:"R" on the&#010 <code>rollOverCanvas</code>.&#010 <p>&#010 The rollOver/rollUnder Canvas can be a single static component (the same for all&#010 cells/rows) configured via the ${isc.DocUtils.linkForRef('type:AutoChild')} system, or can instead be provided&#010 dynamically by implementing ${isc.DocUtils.linkForRef('method:ListGrid.getRollOverCanvas')} and/or ${isc.DocUtils.linkForRef('method:ListGrid.getRollUnderCanvas')}.&#010 <p>&#010 The rollOver/rollUnder canvas will be automatically added to the grid's&#010 ${isc.DocUtils.linkForRef('attr:ListGrid.body','body')} as an &#010 ${isc.DocUtils.linkForRef('method:ListGrid.addEmbeddedComponent','embedded component')}.<br>&#010 For grids with ${isc.DocUtils.linkForRef('attr:ListGridField.frozen','frozen fields')}, the behavior is as follows:&#010 <ul><li>If ${isc.DocUtils.linkForRef('attr:ListGrid.useCellRollOvers')} is false (the default), embedded components&#010   will be added to both the body and the frozen body</li>&#010 <li>Otherwise the component will be added to whichever body contains the cell the&#010   user is currently over</li></ul>&#010 The rollOver/rollUnder canvas added to the frozen body will be created by calling&#010 the ${isc.DocUtils.linkForRef('method:ListGrid.getFrozenRollOverCanvas')} or ${isc.DocUtils.linkForRef('method:ListGrid.getFrozenRollUnderCanvas')} methods.&#010 The default implementation for these methods matches their equivalents for non-frozen&#010 rollOver / rollUnder canvases - it will use the autoChild subsystem to create a&#010 canvas from the ${isc.DocUtils.linkForRef('attr:ListGrid.rollOverCanvas')} autoChild configuration.&#010 <p>&#010 <code>showRollOverCanvas</code> has no effect if ${isc.DocUtils.linkForRef('attr:ListGrid.showRollOver')} is <code>false</code>.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:ListGrid.showSelectedRollOverCanvas')}. */
		showRollOverCanvas: Boolean;

		/** Height for hilite icons for this listGrid.&#010 Overrides ${isc.DocUtils.linkForRef('attr:ListGrid.hiliteIconSize','hiliteIconSize')}.&#010 Can be overridden at the field level */
		hiliteIconHeight: number;

		/** Whether all columns should be drawn all at once, or only columns visible in the viewport.&#010 <P>&#010 Drawing all columns causes longer initial rendering time, but allows smoother horizontal&#010 scrolling.  With a very large number of columns, showAllColumns will become too slow. */
		showAllColumns: Boolean;

		/** If this listGrid supports ${isc.DocUtils.linkForRef('attr:ListGrid.canGroupBy','grouping')}, setting this property will cause&#010 the grid to render an extra row at the end of each group when grouped, containing summary&#010 information for the fields.&#010 Summary information will be calculated by the ${isc.DocUtils.linkForRef('method:ListGridField.getGroupSummary')} method&#010 if specified, otherwise via the specified ${isc.DocUtils.linkForRef('attr:ListGridField.summaryFunction')}. */
		showGroupSummary: Boolean;

		/** What to do when a user hits enter while editing a cell:&#010 <ul>&#010 <li>"nextCell": start editing the next editable cell in this record (or the first&#010     editable cell in the next record if focus is in the last editable cell in the row)&#010 <li>"nextRow": start editing the same field in the next row (skipping any rows where&#010      that would be a non-editable cell.&#010 <li>"nextRowStart": start editing the first editable cell in the next row.&#010 <li>"done": hide the editor (editing is complete)&#010 </ul>&#010 Note that if this.autoSaveEdits is true, this may cause a save of the current edit values */
		enterKeyEditAction: EnterKeyEditAction;

		/** Whether alternating rows (or blocks of rows, depending&#010 on ${isc.DocUtils.linkForRef('attr:GridRenderer.alternateRowFrequency')}) should be drawn in alternating styles,&#010 in order to create a "ledger" effect for easier reading.&#010 <P>&#010 If enabled, the cell style for alternate rows will have the&#010 ${isc.DocUtils.linkForRef('alternateRowSuffix')} appended to it.&#010 See also ${isc.DocUtils.linkForRef('alternateColumnStyles')}. */
		alternateRecordStyles: Boolean;

		/** The CSS style name applied to the ${isc.DocUtils.linkForRef('attr:ListGrid.emptyMessage')} if displayed. */
		emptyMessageStyle: CSSStyleName;

	}


	export class ListGridStatic  extends VLayoutStatic {
	}


// Properties used for passing into .create() or anything else that takes a Layout Properties argument.
	export class LayoutProperties  extends CanvasProperties {
		align?: Alignment | VerticalAlignment /* Alignment or VerticalAlignment */; // Flags=IRW
		managePercentBreadth?: Boolean; // Flags=IR
		members?: Canvas[] /* Array of Canvas */; // Flags=IRW
		paddingAsLayoutMargin?: Boolean; // Flags=IRWA
		defaultLayoutAlign?: Alignment | VerticalAlignment /* Alignment or VerticalAlignment */; // Flags=IRW
		dropLineThickness?: number; // Flags=IRA
		minMemberLength?: number /* number */; // Flags=IRW
		enforcePolicy?: Boolean; // Flags=IRWA
		layoutRightMargin?: number /* integer */; // Flags=IRW
		locateMembersBy?: LocatorStrategy; // Flags=IRWA
		membersMargin?: number /* number */; // Flags=IRW
		layoutMargin?: number /* integer */; // Flags=IRW
		animateMemberTime?: number; // Flags=IRWA
		hPolicy?: LayoutPolicy; // Flags=IRWA
		stackZIndex?: string; // Flags=IR
		placeHolderProperties?: canvas /* canvas properties */; // Flags=IR
		showDragPlaceHolder?: boolean; // Flags=IRW
		placeHolderDefaults?: Canvas /* Canvas Properties */; // Flags=IR
		resizeBarSize?: number /* number */; // Flags=AIRW
		memberOverlap?: number /* positiveInteger */; // Flags=IR
		overflow?: Overflow; // Flags=IRW
		layoutBottomMargin?: number /* integer */; // Flags=IRW
		defaultResizeBars?: LayoutResizeBarPolicy; // Flags=IRW
		vPolicy?: LayoutPolicy; // Flags=IRWA
		showDropLines?: boolean; // Flags=IRW
		editProxyConstructor?: SCClassName; // Flags=IR
		locateMembersType?: LocatorTypeStrategy; // Flags=IRWA
		leaveScrollbarGap?: Boolean; // Flags=IR
		vertical?: boolean; // Flags=IRW
		resizeBarClass?: String; // Flags=AIRW
		layoutLeftMargin?: number /* integer */; // Flags=IRW
		minBreadthMember?: String | number | Canvas; // Flags=IRWA
		layoutTopMargin?: number /* integer */; // Flags=IRW
		minMemberSize?: number /* number */; // Flags=IRW
		animateMembers?: boolean; // Flags=IRW
		canDropComponents?: Boolean; // Flags=IRA
		reverseOrder?: Boolean; // Flags=IRW
		orientation?: Orientation; // Flags=AIRW
	}


	/**
	 * Arranges a set of "member" Canvases in horizontal or vertical stacks, applying a layout&#010 policy to determine member heights and widths.&#010 <P>&#010 A Layout manages a set of "member" Canvases provided as ${isc.DocUtils.linkForRef('attr:Layout.members')}.  Layouts&#010 can have both "members", whose position and size are managed by the Layout, and normal&#010 Canvas children, which manage their own position and size.&#010 <P>&#010 Rather than using the Layout class directly, use the ${isc.DocUtils.linkForRef('class:HLayout')}, ${isc.DocUtils.linkForRef('class:VLayout')},&#010 ${isc.DocUtils.linkForRef('class:HStack')} and ${isc.DocUtils.linkForRef('class:VStack')} classes, which are subclasses of Layout preconfigured for&#010 horizontal or vertical stacking, with the "fill" (VLayout) or "none" (VStack)&#010 ${isc.DocUtils.linkForRef('type:LayoutPolicy','policies')} already set.&#010 <P>&#010 Layouts and Stacks may be nested to create arbitrarily complex layouts.&#010 <p>&#010 Since Layouts can be either horizontally or vertically oriented, throughout the&#010 documentation of Layout and it's subclasses, the term "length" refers to the axis of&#010 stacking, and the term "breadth" refers to the other axis.  Hence, "length" means height in&#010 the context of a VLayout or VStack, but means width in the context of an HLayout or HStack.&#010 <P>&#010 To show a resizer bar after (to the right or bottom of) a layout member, set&#010 ${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar','showResizeBar')} to&#010 true on that member component (not on the HLayout or VLayout).  Resizer bars override&#010 ${isc.DocUtils.linkForRef('attr:Layout.membersMargin','membersMargin')} spacing.&#010 <P>&#010 Like other Canvas subclasses, Layout and Stack components may have % width and height&#010 values. To create a dynamically-resizing layout that occupies the entire page (or entire&#010 parent component), set width and height to "100%". 
	 */
	export class Layout  extends Canvas {
		/** Alignment of all members in this Layout on the length axis (vertical for a VLayout,&#010 horizontal for an HLayout).  Defaults to "top" for vertical Layouts, and "left" for&#010 horizontal Layouts.&#010 <p>&#010 Horizontal layouts should only be set to ${isc.DocUtils.linkForRef('type:Alignment')}, and vertical layouts to&#010 ${isc.DocUtils.linkForRef('type:VerticalAlignment')}, otherwise they will be considered invalid values, and assigning an&#010 invalid value here will log a warning to the Developer Console.&#010 <P>&#010 For alignment on the breadth axis, see ${isc.DocUtils.linkForRef('attr:Layout.defaultLayoutAlign')} and&#010 ${isc.DocUtils.linkForRef('attr:Canvas.layoutAlign')}.&#010 <P>&#010 When attempting to center components be sure that you have set a specific size on the&#010 component(s) involved.  If components fill all available space in the layout, centering&#010 looks the same as not centering.&#010 <P>&#010 Similarly, if a component has no visible boundary (like a border), it can appear similar&#010 to when it's not centered if the component is larger than you expect - use the Watch tab&#010 in the Developer Console to see the component's extents visually. */
		align: Alignment | VerticalAlignment /* Alignment or VerticalAlignment */;

		/** If set, a Layout with breadthPolicy:"fill" will specially interpret a percentage breadth on&#010 a member as a percentage of available space excluding the ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')}.  If false,&#010 percentages work exactly as for a non-member, with layoutMargins, if any, ignored. */
		managePercentBreadth: Boolean;

		/** An array of canvases that will be contained within this layout. You can set the&#010 following properties on these canvases (in addition to the standard component&#010 properties):&#010 <ul>&#010  <li>${isc.DocUtils.linkForRef('attr:Canvas.layoutAlign','layoutAlign')} -- specifies the member's alignment along the&#010      breadth axis; valid values are "top", "center" and "bottom" for a horizontal layout&#010      and "left", "center" and "right" for a vertical layout (see&#010      ${isc.DocUtils.linkForRef('attr:Layout.defaultLayoutAlign')} for default implementation.)&#010  <li>${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar','showResizeBar')} -- set to true to show a resize bar&#010      (default is false)&#010 </ul>&#010 Height and width settings found on members are interpreted by the Layout according to&#010 the ${isc.DocUtils.linkForRef('attr:Layout.vPolicy','layout policy')}. */
		members: Canvas[] /* Array of Canvas */;

		/** If this widget has padding specified (as ${isc.DocUtils.linkForRef('attr:Canvas.padding','this.padding')} or in the&#010 CSS style applied to this layout), should it show up as space outside the members,&#010 similar to layoutMargin?&#010 <P>&#010 If this setting is false, padding will not affect member positioning (as CSS padding&#010 normally does not affect absolutely positioned children).  Leaving this setting true&#010 allows a designer to more effectively control layout purely from CSS.&#010 <P>&#010 Note that ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')} if specified, takes precedence over this value. */
		paddingAsLayoutMargin: Boolean;

		/** Specifies the default alignment for layout members on the breadth axis (horizontal axis&#010 for a VLayout, vertical axis for an HLayout).  Can be overridden on a per-member basis&#010 by setting ${isc.DocUtils.linkForRef('attr:Canvas.layoutAlign')}.&#010 <P>&#010 If unset, default member layout alignment will be "top" for a horizontal layout, and&#010 "left" for a vertical layout, or "right" if in ${isc.DocUtils.linkForRef('classMethod:Page.isRTL','RTL')} mode.&#010 <P>&#010 When attempting to center components be sure that you have set a specific size on the&#010 component(s) involved.  If components fill all available space in the layout, centering&#010 looks the same as not centering.&#010 <P>&#010 Similarly, if a component has no visible boundary (like a border), it can appear similar&#010 to when it's not centered if the component is larger than you expect - use the Watch tab&#010 in the Developer Console to see the component's extents visually. */
		defaultLayoutAlign: Alignment | VerticalAlignment /* Alignment or VerticalAlignment */;

		/** Thickness, in pixels of the dropLine shown during drag and drop when&#010 ${isc.DocUtils.linkForRef('attr:Layout.canDropComponents')} is set to <code>true</code>.  See the discussion in&#010 ${isc.DocUtils.linkForRef('class:Layout')} for more info. */
		dropLineThickness: number;

		/** Minimum size, in pixels, below which flexible-sized members should never be shrunk, even&#010 if this requires the Layout to overflow.  Note that this property only applies along&#010 the <i>length</i> axis of the Layout, and has no affect on <i>breadth</i>.&#010 <p>&#010 Does not apply to members given a fixed size in pixels - such members will never be&#010 shrunk below their specified size in general. */
		minMemberLength: number /* number */;

		/** Whether the layout policy is continuously enforced as new members are added or removed&#010 and as members are resized.&#010 <p>&#010 This setting implies that any member that resizes larger, or any added member, will take&#010 space from other members in order to allow the overall layout to stay the same size. */
		enforcePolicy: Boolean;

		/** Space outside of all members, on the right-hand side.  Defaults to ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')}.&#010 <P>&#010 Requires a manual call to <code>setLayoutMargin()</code> if changed on the fly. */
		layoutRightMargin: number /* integer */;

		/** Part of the ${isc.DocUtils.linkForRef('group:automatedTesting')} system, strategy to use when generated&#010 locators for members from within this Layout's members array. */
		locateMembersBy: LocatorStrategy;

		/** Space between each member of the layout.&#010 <P>&#010 Requires a manual call to <code>reflow()</code> if changed on the fly. */
		membersMargin: number /* number */;

		/** Line showed to mark the drop position when components are being dragged onto this Layout.&#010 A simple Canvas typically styled via CSS.  The default dropLine.styleName is&#010 "layoutDropLine". */
		dropLine: Canvas /* AutoChild Canvas */;

		/** Space outside of all members. This attribute, along with ${isc.DocUtils.linkForRef('attr:Layout.layoutLeftMargin')} &#010 and related properties does not have a true setter method.<br>&#010 It may be assigned directly at runtime. After setting the property, &#010 ${isc.DocUtils.linkForRef('method:Layout.setLayoutMargin')} may be called with no arguments to reflow the layout. */
		layoutMargin: number /* integer */;

		/** A MultiAutoChild created to resize members of this <code>Layout</code>.&#010 <p>&#010 A resize bar will be created for any member of this <code>Layout</code> that has&#010 ${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar','showResizeBar')} set to <code>true</code>. Resize bars will be&#010 instances of the class specified by ${isc.DocUtils.linkForRef('attr:Layout.resizeBarClass')} by default, and will&#010 automatically be sized to the member's breadth, and to the thickness specified by&#010 ${isc.DocUtils.linkForRef('attr:Layout.resizeBarSize')}.&#010 <p>&#010 To customize the appearance or behavior of resizeBars within some layout a custom&#010 resize bar class can be created by subclassing ${isc.DocUtils.linkForRef('class:Splitbar')} or ${isc.DocUtils.linkForRef('class:ImgSplitbar')} and&#010 setting ${isc.DocUtils.linkForRef('attr:Layout.resizeBarClass')} or <code>resizeBarConstructor</code> to this custom class.&#010 &#010 Alternatively, <code>resizeBarProperties</code> may be specified. See ${isc.DocUtils.linkForRef('group:autoChildUsage')}&#010 for more information.&#010 &#010 &#010 <p>&#010 The built-in <code>Splitbar</code> class supports drag resizing of its target member,&#010 and clicking on the bar with a mouse to collapse/uncollapse the target member. */
		resizeBar: Splitbar /* MultiAutoChild Splitbar */;

		/** If specified this is the duration of show/hide animations when members are being shown&#010 or hidden due to being added / removed from this layout. */
		animateMemberTime: number;

		/** Sizing policy applied to members on horizontal axis */
		hPolicy: LayoutPolicy;

		/** For use in conjunction with ${isc.DocUtils.linkForRef('attr:Layout.memberOverlap')}, controls the z-stacking order of&#010 members.&#010 <P>&#010 If set to "lastOnTop", members stack from the first member at bottom to the last member&#010 at top. If set to "firstOnTop", members stack from the last member at bottom to the&#010 first member at top. */
		stackZIndex: string;

		/** If ${isc.DocUtils.linkForRef('attr:Layout.showDragPlaceHolder','this.showDragPlaceHolder')} is true, this &#010 properties object can be used to customize the appearance of the placeholder displayed&#010 when the user drags a widget out of this layout. */
		placeHolderProperties: canvas /* canvas properties */;

		/** If set to true, when a member is dragged out of layout, a visible placeholder canvas &#010 will be displayed in place of the dragged widget for the duration of the drag and drop&#010 interaction. */
		showDragPlaceHolder: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:Layout.showDragPlaceHolder','this.showDragPlaceHolder')} is true, this &#010 defaults object determines the default appearance of the placeholder displayed&#010 when the user drags a widget out of this layout.<br>&#010 Default value for this property sets the placeholder ${isc.DocUtils.linkForRef('attr:Canvas.styleName','styleName')} to&#010 <code>"layoutPlaceHolder"</code><br>&#010 To modify this object, use ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults')} */
		placeHolderDefaults: Canvas /* Canvas Properties */;

		/** Thickness of the resizeBar in pixels. */
		resizeBarSize: number /* number */;

		/** Number of pixels by which each member should overlap the preceding member, used for&#010 creating an "stack of cards" appearance for the members of a Layout.&#010 <P>&#010 <code>memberOverlap</code> can be used in conjunction with ${isc.DocUtils.linkForRef('attr:Layout.stackZIndex')} to create&#010 a particular visual stacking order.&#010 <P>&#010 Note that overlap of individual members can be accomplished with a negative setting for&#010 ${isc.DocUtils.linkForRef('attr:Canvas.extraSpace')}. */
		memberOverlap: number /* positiveInteger */;

		/** A Layout may overflow if it has one or more members with a fixed width or height, or that&#010 themselves overflow.  For details on member sizing see ${isc.DocUtils.linkForRef('type:LayoutPolicy')}.&#010 <P>&#010 Note that for overflow: "auto", "scroll", or "visible", members exceeding the Layout's&#010 specified breadth will lose any alignment set via ${isc.DocUtils.linkForRef('attr:Layout.defaultLayoutAlign')} or&#010 ${isc.DocUtils.linkForRef('attr:Canvas.layoutAlign')}. */
		overflow: Overflow;

		/** Space outside of all members, on the bottom side.  Defaults to ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')}.&#010 <P>&#010 Requires a manual call to <code>setLayoutMargin()</code> if changed on the fly. */
		layoutBottomMargin: number /* integer */;

		/** Policy for whether resize bars are shown on members by default. Note that this setting&#010 changes the effect of ${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar')} for members of this layout. */
		defaultResizeBars: LayoutResizeBarPolicy;

		/** Sizing policy applied to members on vertical axis */
		vPolicy: LayoutPolicy;

		/** Controls whether to show a drop-indicator during a drag and drop operation.  Set to &#010 false if you either don't want to show drop-lines, or plan to create your own. */
		showDropLines: boolean;

		/** Default class used to construct the ${isc.DocUtils.linkForRef('class:EditProxy')} for this component&#010 when the component is ${isc.DocUtils.linkForRef('method:Canvas.setEditMode','first placed into edit mode')}. */
		editProxyConstructor: SCClassName;

		/** ${isc.DocUtils.linkForRef('type:LocatorTypeStrategy')} to use when finding members within this layout. */
		locateMembersType: LocatorTypeStrategy;

		/** Whether to leave a gap for a vertical scrollbar even when one is not actually present.&#010 <P>&#010 This setting avoids the layout resizing all members when the vertical scrollbar is&#010 introduced or removed, which can avoid unnecessary screen shifting and improve&#010 performance. */
		leaveScrollbarGap: Boolean;

		/** Should this layout appear with members stacked vertically or horizontally. Defaults to &#010 <code>false</code> if unspecified. */
		vertical: boolean;

		/** Default class to use for creating ${isc.DocUtils.linkForRef('attr:Layout.resizeBar','resizeBars')}. This may be&#010 overridden by <code>resizeBarConstructor</code>.&#010 <p>&#010 Classes that are valid by default are ${isc.DocUtils.linkForRef('class:Splitbar')}, ${isc.DocUtils.linkForRef('class:ImgSplitbar')}, and&#010 ${isc.DocUtils.linkForRef('class:Snapbar')}. */
		resizeBarClass: String;

		/** Space outside of all members, on the left-hand side.  Defaults to ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')}.&#010 <P>&#010 Requires a manual call to <code>setLayoutMargin()</code> if changed on the fly. */
		layoutLeftMargin: number /* integer */;

		/** Set this property to cause the layout to assign the breadths of other members as if the&#010 available breadth is actually wide enough to accommodate the&#010 <code>minBreadthMember</code> (even though the Layout might <i>not</i> actually be that&#010 wide, and may overflow its assigned size along the breadth axis due to the breadth of the&#010 <code>minBreadthMember</code>.&#010 <P>&#010 Without this property set, members of a layout aren't ever expanded in breadth (by the&#010 layout) to fit an overflow of the layout along the breadth axis.  Setting this property&#010 will make sure all members (other than the one specified) get expanded to fill the full&#010 visual breadth of the layout (assuming they are configured to use 100% layout breadth). */
		minBreadthMember: String | number | Canvas;

		/** Space outside of all members, on the top side.  Defaults to ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')}.&#010 <P>&#010 Requires a manual call to <code>setLayoutMargin()</code> if changed on the fly. */
		layoutTopMargin: number /* integer */;

		/** See ${isc.DocUtils.linkForRef('attr:Layout.minMemberLength')}. */
		minMemberSize: number /* number */;

		/** If true when members are added / removed, they should be animated as they are shown&#010 or hidden in position */
		animateMembers: boolean;

		/** Layouts provide a default implementation of a drag and drop interaction.  If you set&#010 ${isc.DocUtils.linkForRef('attr:Canvas.canAcceptDrop','canAcceptDrop')}:true and <code>canDropComponents:true</code>&#010 on a Layout, when a droppable Canvas (${isc.DocUtils.linkForRef('attr:Canvas.canDrop','canDrop:true')} is dragged over&#010 the layout, it will show a dropLine (a simple insertion line) at the drop location.  &#010 <P>&#010 When the drop occurs, the dragTarget (obtained using&#010 ${isc.DocUtils.linkForRef('classMethod:EventHandler.getDragTarget')}) is added as a member of this layout at the location&#010 shown by the dropLine (calculated by ${isc.DocUtils.linkForRef('method:Layout.getDropPosition')}).  This default&#010 behavior allows either members or external components that have&#010 ${isc.DocUtils.linkForRef('attr:Canvas.canDragReposition')} (or ${isc.DocUtils.linkForRef('attr:Canvas.canDrag')}) and ${isc.DocUtils.linkForRef('attr:Canvas.canDrop')} set&#010 to <code>true</code> to be added to or reordered within the Layout.&#010 <P>&#010 You can control the thickness of the dropLine via ${isc.DocUtils.linkForRef('attr:Layout.dropLineThickness')} and&#010 you can customize the style using css styling in the skin file (look for .layoutDropLine&#010 in skin_styles.css for your skin).  &#010 <P>&#010 If you want to dynamically create a component to be added to the Layout in response to a&#010 drop event you can do so as follows: &#010 <pre>&#010 isc.VLayout.create({&#010   ...various layout properties...&#010   canDropComponents: true,&#010   drop : function () {&#010     // create the new component &#010     var newMember = isc.Canvas.create(); &#010     // add to the layout at the current drop position &#010     // (the dropLine will be showing here)&#010     this.addMember(newMember, this.getDropPosition());  &#010     // hide the dropLine that was automatically shown &#010     // by builtin SmartClient methods&#010     this.hideDropLine();&#010   }&#010 });&#010 </pre>&#010 If you want to completely suppress the builtin drag and drop logic, but still receive drag&#010 and drop events for your own custom implementation, set ${isc.DocUtils.linkForRef('attr:Canvas.canAcceptDrop')} to&#010 <code>true</code> and <code>canDropComponents</code> to <code>false</code> on your Layout. */
		canDropComponents: Boolean;

		/** Reverse the order of stacking for this Layout, so that the last member is shown first.&#010 <P>&#010 Requires a manual call to <code>reflow()</code> if changed on the fly.&#010 <P>&#010 In RTL mode, for horizontal Layouts the value of this flag will be flipped during&#010 initialization. */
		reverseOrder: Boolean;

		/** Orientation of this layout. */
		orientation: Orientation;

	}


	export class LayoutStatic  extends CanvasStatic {
	}


// Properties used for passing into .create() or anything else that takes a Canvas Properties argument.
	export class CanvasProperties  {
		hoverWidth?: number /* number */; // Flags=IRW
		children?: Canvas[] /* Array of Canvas */; // Flags=IR
		editProxyConstructor?: SCClassName; // Flags=IR
		locatePeersType?: LocatorTypeStrategy; // Flags=IRWA
		maxHeight?: number; // Flags=IRWA
		resizeBarTarget?: String; // Flags=IR
		autoDraw?: Boolean; // Flags=IR
		proportionalResizing?: ProportionalResizeMode; // Flags=IR
		autoShowParent?: Boolean; // Flags=IRWA
		edgeSize?: number; // Flags=IR
		htmlElement?: DOMElement; // Flags=IRWA
		childrenSnapAlign?: Boolean; // Flags=IRW
		animateScrollTime?: number; // Flags=IRWA
		leavePageSpace?: number /* Integer */; // Flags=IRWA
		dragIntersectStyle?: DragIntersectStyle; // Flags=IRWA
		edgeShowCenter?: Boolean; // Flags=IR
		isGroup?: boolean; // Flags=IR
		defaultHeight?: number /* number */; // Flags=IRWA
		shadowSoftness?: number; // Flags=IRWA
		hoverHeight?: number /* number */; // Flags=IRW
		isSnapAlignCandidate?: Boolean; // Flags=IRW
		dragMinWidth?: number; // Flags=IRWA
		hoverMoveWithMouse?: boolean; // Flags=IRW
		percentSource?: Canvas; // Flags=IRWA
		keepInParentRect?: Boolean | Integer[] /* Boolean | Array of Integer */; // Flags=IRWA
		snapVGap?: number; // Flags=IRW
		opacity?: number; // Flags=IRWA
		updateTabPositionOnReparent?: boolean; // Flags=IRWA
		animateShowAcceleration?: AnimationAcceleration; // Flags=IRWA
		animateFadeTime?: number; // Flags=IRWA
		animateScrollAcceleration?: AnimationAcceleration; // Flags=IRWA
		canFocus?: boolean; // Flags=IRWA
		childrenSnapEdgeAlign?: Boolean; // Flags=IRW
		mouseStillDownInitialDelay?: number /* number */; // Flags=IRWA
		skinImgDir?: URL; // Flags=IRWA
		shadowSpread?: number /* Integer */; // Flags=IRWA
		animateMoveAcceleration?: AnimationAcceleration; // Flags=IRWA
		shadowVOffset?: Number; // Flags=IRWA
		useOpacityFilter?: boolean; // Flags=IR
		hoverDelay?: number; // Flags=IRW
		dragResizeAppearance?: DragAppearance; // Flags=IRWA
		cursor?: Cursor; // Flags=IRWA
		snapHDirection?: string; // Flags=IRW
		hideUsingDisplayNone?: boolean; // Flags=IRA
		backgroundImage?: SCImgURL; // Flags=IRW
		left?: Number | String /* Number or String */; // Flags=IRW
		animateHideEffect?: animateShowEffectId | animateShowEffect; // Flags=IRWA
		childrenResizeSnapAlign?: Boolean; // Flags=IRW
		locateChildrenBy?: LocatorStrategy; // Flags=IRWA
		shadowOffset?: number; // Flags=IRWA
		appImgDir?: URL; // Flags=IRWA
		minWidth?: number; // Flags=IRWA
		isRuleScope?: Boolean; // Flags=IR
		shouldPrint?: boolean; // Flags=IRW
		canDragReposition?: Boolean; // Flags=IRWA
		dragRepositionAppearance?: DragAppearance; // Flags=IRWA
		useNativeDrag?: Boolean; // Flags=IR
		childrenSnapResizeToGrid?: boolean; // Flags=IRW
		noDoubleClicks?: Boolean; // Flags=IRWA
		shadowHOffset?: Number; // Flags=IRWA
		proportionalResizeModifiers?: KeyName[] /* Array of KeyName */; // Flags=IR
		dragMinHeight?: number; // Flags=IRWA
		padding?: number; // Flags=IRW
		enableWhen?: AdvancedCriteria; // Flags=IR
		animateResizeAcceleration?: AnimationAcceleration; // Flags=IRWA
		snapResizeToAlign?: Boolean; // Flags=IRW
		useTouchScrolling?: Boolean; // Flags=IRA
		overflow?: Overflow; // Flags=IRW
		dragMaxWidth?: number; // Flags=IRWA
		edgeOffset?: number; // Flags=IR
		dragStartDistance?: number; // Flags=IRWA
		snapAlignEdgeLineStyle?: String; // Flags=IR
		snapToEdgeAlign?: Boolean; // Flags=IRW
		customEdges?: String[] /* Array of String */; // Flags=IR
		snapOffsetTop?: number /* integer */; // Flags=IRW
		matchElement?: boolean; // Flags=IRWA
		canDragResize?: Boolean; // Flags=IRWA
		position?: Positioning; // Flags=IRWA
		edgeCursorMap?: object; // Flags=IRWA
		animateAcceleration?: AnimationAcceleration; // Flags=IRWA
		tabIndex?: number; // Flags=IRWA
		locateChildrenType?: LocatorTypeStrategy; // Flags=IRWA
		animateMoveTime?: number; // Flags=IRWA
		layoutAlign?: Alignment | VerticalAlignment; // Flags=IRW
		shadowImage?: SCImgURL; // Flags=IRA
		height?: Number | String /* Number or String */; // Flags=IRW
		animateShowEffect?: animateShowEffectId | animateShowEffect; // Flags=IRWA
		disabledCursor?: Cursor; // Flags=IRWA
		parentCanvas?: Canvas; // Flags=IR
		hoverAutoFitMaxWidth?: Number | String /* Number or String */; // Flags=IRW
		enabled?: boolean; // Flags=IRWA
		animateRectTime?: number; // Flags=IRWA
		animateHideTime?: number; // Flags=IRWA
		groupLabelBackgroundColor?: CSSColor; // Flags=IRW
		menuConstructor?: SCClassName; // Flags=IR
		showResizeBar?: Boolean; // Flags=IRW
		contextMenu?: Menu; // Flags=IRWA
		shadowColor?: CSSColor; // Flags=IRWA
		groupTitle?: HTMLString; // Flags=IRW
		defaultWidth?: number /* number */; // Flags=IRWA
		dragMaskType?: DragMaskType; // Flags=IRW
		animateTime?: number; // Flags=IRWA
		groupBorderCSS?: String; // Flags=IR
		dragTarget?: Canvas | String; // Flags=IRWA
		canAcceptDrop?: Boolean; // Flags=IRWA
		animateResizeTime?: number; // Flags=IRWA
		redrawOnResize?: Boolean; // Flags=IRWA
		shadowDepth?: number; // Flags=IR
		disableTouchScrollingForDrag?: Boolean; // Flags=IR
		backgroundColor?: CSSColor; // Flags=IRW
		border?: string; // Flags=IRW
		snapAlignCenterLineStyle?: String; // Flags=IR
		mouseStillDownDelay?: number /* number */; // Flags=IRWA
		dragOpacity?: number /* number */; // Flags=IRWA
		snapToCenterAlign?: Boolean; // Flags=IRW
		canAdaptHeight?: Boolean; // Flags=IRW
		backgroundPosition?: string; // Flags=IR
		dropTypes?: String | String[] /* Array of String | String */; // Flags=IRWA
		showHoverComponents?: Boolean; // Flags=IRWA
		shrinkElementOnHide?: boolean; // Flags=IRWA
		accessKey?: string; // Flags=IRWA
		ariaState?: Object; // Flags=IRA
		snapAxis?: string; // Flags=IRW
		childrenSnapToGrid?: boolean; // Flags=IRW
		canDropBefore?: boolean; // Flags=IRWA
		valuesManager?: ValuesManager; // Flags=IRWA
		scrollbarConstructor?: String; // Flags=IA
		canDragScroll?: boolean; // Flags=IRWA
		edgeBackgroundColor?: Color; // Flags=IR
		edgeImage?: SCImgURL; // Flags=IR
		edgeMarginSize?: number; // Flags=IRWA
		dragMaxHeight?: number; // Flags=IRWA
		contents?: HTMLString; // Flags=IRWA
		showShadow?: Boolean; // Flags=IRW
		alwaysShowScrollbars?: Boolean; // Flags=IRA
		autoParent?: String; // Flags=IRA
		scrollbarSize?: number; // Flags=IRWA
		doubleClickDelay?: number /* number */; // Flags=IRWA
		locatePeersBy?: LocatorStrategy; // Flags=IRWA
		snapToGrid?: boolean; // Flags=IRW
		htmlPosition?: DrawPosition; // Flags=IRWA
		snapVDirection?: string; // Flags=IRW
		editProxy?: EditProxy /* AutoChild EditProxy */; // Flags=IR
		dragRepositionCursor?: Cursor; // Flags=IRWA
		snapOnDrop?: Boolean; // Flags=IRWA
		useBackMask?: Boolean; // Flags=IRWA
		margin?: number; // Flags=IRW
		ID?: string; // Flags=IR
		dynamicContentsVars?: ValueMap; // Flags=IRWA
		ariaRole?: String; // Flags=IR
		dynamicContents?: Boolean; // Flags=IRWA
		visibility?: Visibility; // Flags=IRW
		showDragShadow?: Boolean; // Flags=IRWA
		adaptiveWidthPriority?: number /* integer */; // Flags=IR
		canHover?: boolean; // Flags=IRW
		hoverVAlign?: VerticalAlignment; // Flags=IRW
		sizeMayChangeOnRedraw?: Boolean; // Flags=IRWA
		extraSpace?: number /* positiveInteger */; // Flags=IR
		showEdges?: Boolean; // Flags=IR
		momentumScrollMinSpeed?: number /* double */; // Flags=IRWA
		useCSSShadow?: boolean; // Flags=IRA
		snapToAlign?: Boolean; // Flags=IRW
		printChildrenAbsolutelyPositioned?: Boolean; // Flags=IRWA
		componentMaskDefaults?: Canvas /* Canvas Properties */; // Flags=IR
		autoMaskComponents?: Boolean; // Flags=IR
		top?: Number | String /* Number or String */; // Flags=IRW
		backgroundRepeat?: BackgroundRepeat; // Flags=IR
		prompt?: HTMLString; // Flags=IRW
		canSelectText?: Boolean; // Flags=IRWA
		hoverAutoFitWidth?: Boolean; // Flags=IRWA
		dragType?: String; // Flags=IRWA
		hoverAlign?: Alignment; // Flags=IRW
		parentElement?: Canvas; // Flags=IRA
		hoverOpacity?: number; // Flags=IRW
		peers?: Canvas[] /* Array of Canvas */; // Flags=IRA
		hoverStyle?: CSSStyleName; // Flags=IRW
		childrenSnapCenterAlign?: Boolean; // Flags=IRW
		snapAlignCandidates?: Canvas[] /* Array of Canvas */; // Flags=IRW
		styleName?: CSSStyleName; // Flags=IRW
		snapTo?: String; // Flags=IRW
		canAdaptWidth?: Boolean; // Flags=IRW
		ruleScope?: String; // Flags=IR
		snapResizeToGrid?: boolean; // Flags=IRW
		showCustomScrollbars?: boolean; // Flags=IRA
		canDrop?: Boolean; // Flags=IRWA
		percentBox?: PercentBoxModel; // Flags=IRA
		noDropCursor?: Cursor; // Flags=IRWA
		className?: CSSStyleName; // Flags=IRW
		animateHideAcceleration?: AnimationAcceleration; // Flags=IRWA
		hoverWrap?: boolean; // Flags=IRW
		groupLabelStyleName?: CSSStyleName; // Flags=IR
		dragAppearance?: DragAppearance; // Flags=IRWA
		hoverAutoDestroy?: boolean; // Flags=IRW
		resizeFrom?: EdgeName[] /* Array of EdgeName */; // Flags=IRWA
		minNonEdgeSize?: number /* number */; // Flags=IRWA
		snapOffsetLeft?: number /* integer */; // Flags=IRW
		snapHGap?: number; // Flags=IRW
		dragScrollDelay?: number; // Flags=IRWA
		disabled?: boolean; // Flags=IRW
		edgeOpacity?: number /* number */; // Flags=IR
		animateShowTime?: number; // Flags=IRWA
		canDrag?: Boolean; // Flags=IRWA
		showSnapGrid?: Boolean; // Flags=IRW
		snapEdge?: String; // Flags=IRW
		minHeight?: number; // Flags=IRWA
		dataPath?: DataPath; // Flags=IRWA
		adaptiveHeightPriority?: number /* integer */; // Flags=IR
		visibleWhen?: AdvancedCriteria; // Flags=IR
		edgeCenterBackgroundColor?: Color; // Flags=IR
		showHover?: Boolean; // Flags=IRW
		updateTabPositionOnDraw?: boolean; // Flags=IRWA
		width?: Number | String /* Number or String */; // Flags=IRW
		maxWidth?: number; // Flags=IRWA
		animateRectAcceleration?: AnimationAcceleration; // Flags=IRWA
		useDragMask?: boolean; // Flags=IRW
	}


	/**
	 * Base class for all SmartClient visual components (except ${isc.DocUtils.linkForRef('class:FormItem','FormItems')}).&#010 <p>&#010 Canvas provides:&#010 <ul>&#010 <li> basic visual lifecycle support - creation and destruction of HTML via&#010      ${isc.DocUtils.linkForRef('method:Canvas.draw','draw()')} and ${isc.DocUtils.linkForRef('method:Canvas.clear','clear()')}, visibility via&#010      ${isc.DocUtils.linkForRef('method:Canvas.show','show()')} and ${isc.DocUtils.linkForRef('method:Canvas.hide','hide()')}, z-layering via&#010      ${isc.DocUtils.linkForRef('method:Canvas.bringToFront','bringToFront()')} and ${isc.DocUtils.linkForRef('method:Canvas.sendToBack','sendToBack()')}.&#010 <li> consistent cross-browser ${isc.DocUtils.linkForRef('method:Canvas.moveTo','positioning')},&#010      ${isc.DocUtils.linkForRef('method:Canvas.resizeTo','sizing')} and ${isc.DocUtils.linkForRef('method:Canvas.getScrollHeight','size detection')}, with&#010      automatic compensation for ${isc.DocUtils.linkForRef('type:CSSStyleName','browser CSS behavior differences')}.&#010 <li> clipping, scrolling and overflow management of content via ${isc.DocUtils.linkForRef('attr:Canvas.overflow')}&#010 <li> consistent cross-browser ${isc.DocUtils.linkForRef('method:Canvas.keyPress','key')} and ${isc.DocUtils.linkForRef('method:Canvas.mouseDown','mouse')}&#010      events, including ${isc.DocUtils.linkForRef('group:mobileDevelopment','mapping touch events')} to mouse events&#010 <li> built-in drag and drop capabilities including ${isc.DocUtils.linkForRef('attr:Canvas.canDragReposition','moving')}, &#010      ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize','resizing')}, ${isc.DocUtils.linkForRef('attr:Canvas.canDragScroll','drag scrolling')}&#010      and ${isc.DocUtils.linkForRef('attr:Canvas.snapToGrid','snap-to-grid')} behavior.&#010 <li> the ability to either contain ${isc.DocUtils.linkForRef('attr:Canvas.contents','HTML content')} or&#010      ${isc.DocUtils.linkForRef('attr:Canvas.children','contain other Canvases')}, including &#010      ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','an edge-based positioning')} and &#010      ${isc.DocUtils.linkForRef('attr:Canvas.percentSource','percent sizing system')} for children.  For more advanced layout&#010      capabilities, see ${isc.DocUtils.linkForRef('class:Layout')}.&#010 <li> various other details like ${isc.DocUtils.linkForRef('attr:Canvas.cursor','cursors')},&#010      ${isc.DocUtils.linkForRef('method:Canvas.showClickMask','modal masking')}, ${isc.DocUtils.linkForRef('method:Canvas.animateMove','animation')},&#010      ${isc.DocUtils.linkForRef('attr:Canvas.ariaRole','accessibility properties')}, and&#010      ${isc.DocUtils.linkForRef('attr:Canvas.locateChildrenBy','settings')} for ${isc.DocUtils.linkForRef('group:automatedTesting','automated testing')}.&#010 </ul> 
	 */
	export class Canvas  extends BaseWidget {
		/** If ${isc.DocUtils.linkForRef('attr:Canvas.showHover','this.showHover')} is true, this property can be used to customize the&#010 width of the hover canvas shown. See also ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitWidth')} and ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitMaxWidth')}. */
		hoverWidth: number /* number */;

		/** Array of all Canvii that are immediate children of this Canvas.&#010 <P>&#010 Use ${isc.DocUtils.linkForRef('method:Canvas.addChild')} and ${isc.DocUtils.linkForRef('method:Canvas.removeChild')} to add and remove children after a Canvas&#010 has been created/drawn. */
		children: Canvas[] /* Array of Canvas */;

		/** Default class used to construct the ${isc.DocUtils.linkForRef('class:EditProxy')} for this component&#010 when the component is ${isc.DocUtils.linkForRef('method:Canvas.setEditMode','first placed into edit mode')}. */
		editProxyConstructor: SCClassName;

		/** ${isc.DocUtils.linkForRef('type:LocatorTypeStrategy')} to use when finding peers of this canvas. */
		locatePeersType: LocatorTypeStrategy;

		/** Maximum height available to this Canvas.  See ${isc.DocUtils.linkForRef('attr:Canvas.maxWidth')} for details of behavior. */
		maxHeight: number;

		/** When this Canvas is included as a member in a Layout, and ${isc.DocUtils.linkForRef('attr:Canvas.showResizeBar')} is set to&#010 <code>true</code> so that a resizeBar is created, <code>resizeBarTarget:"next"</code> can be&#010 set to indicate that the resizeBar should resize the next member of the layout rather than&#010 this one.  For resizeBars that support hiding their target member when clicked on, &#010 <code>resizeBarTarget:"next"</code> also means that the next member will be the one hidden.&#010 <P>&#010 This is typically used to create a 3-way split pane, where left and right-hand sections can&#010 be resized or hidden to allow a center section to expand.&#010 <P>&#010 <b>NOTE:</b> as with any Layout, to ensure all available space is used, one or more members&#010 must maintain a flexible size (eg 75%, or *).  In a two pane Layout with a normal resize&#010 bar, to fill all space after a user resizes, the member on the <b>right</b> should have&#010 flexible size.  With resizeBarTarget:"next", the member on the <b>left</b> should have&#010 flexible size. */
		resizeBarTarget: String;

		/** The component's ${isc.DocUtils.linkForRef('object:EditNode')} for a component that has been created by a&#010 ${isc.DocUtils.linkForRef('interface:Palette')} from a ${isc.DocUtils.linkForRef('object:PaletteNode')}. */
		editNode: EditNode;

		/** If true, this canvas will draw itself immediately after it is created.&#010 <P>&#010 <b>Note</b> that you should turn this OFF for any canvases that are provided as children&#010 of other canvases, or they will draw initially, then be clear()ed and drawn again when&#010 added as children, causing a large performance penalty.&#010 <P>&#010 For example, the following code is incorrect and will cause extra draw()s:&#010 <P>&#010 <pre>&#010     isc.Layout.create({&#010         members : [&#010             isc.ListGrid.create()&#010         ]&#010     });&#010 </pre>&#010 It should instead be:&#010 <pre>&#010     isc.Layout.create({&#010         members : [&#010             isc.ListGrid.create(<b>{ autoDraw: false }</b>)&#010         ]&#010     });&#010 </pre>&#010 In order to avoid unwanted autoDrawing systematically, it is recommend that you call&#010 ${isc.DocUtils.linkForRef('classMethod:isc.setAutoDraw','isc.setAutoDraw(false)')} immediately after SmartClient is loaded&#010 and before any components are created, then set <code>autoDraw:true</code> or call&#010 draw() explicitly to draw components.&#010 <P>&#010 Otherwise, if the global setting for autoDraw remains <code>true</code>, you must set&#010 autoDraw:false, as shown above, on every component in your application that&#010 should not immediately draw: all Canvas children, Layout members, Window items, Tab&#010 panes, etc, however deeply nested.  Forgetting to set autoDraw:false will result in one&#010 more clear()s - these are reported on the Results tab of the&#010 ${isc.DocUtils.linkForRef('group:debugging','Developer Console')}, and can be tracked to individual components by&#010 using the "clears" log category in the Developer Console. */
		autoDraw: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize')} is true, this property specifies the conditions for when&#010 proportional resizing is used.  The default is "none"&#010 &#010 , which means that proportional resizing is disabled. */
		proportionalResizing: ProportionalResizeMode;

		/** If set to true, the widget's parent (if any) will automatically be shown whenever the&#010      widget is shown. */
		autoShowParent: Boolean;

		/** Size in pixels for corners and edges */
		edgeSize: number;

		/** If specified as a pointer to an HTML element present in the DOM, this canvas will be&#010 rendered inside that element on ${isc.DocUtils.linkForRef('method:Canvas.draw','draw()')}.&#010 <P>&#010 <i>NOTES:</i><br>&#010 This feature is intended for temporary integration with legacy page architectures only;&#010 the native browser's reaction to DOM insertion is unspecified and unsupported. For&#010 consistent cross-browser layout and positioning semantics, use Canvas parents&#010 (especially Layouts) and use absolute positioning at top level.&#010 <P>&#010 Persistence of htmlElement: If ${isc.DocUtils.linkForRef('attr:Canvas.htmlPosition')} is set to <code>"replace"</code>&#010 the htmlElement will be removed from the DOM when the canvas is drawn - therefore the&#010 htmlElement attribute will be cleared at this time.&#010 Otherwise if a Canvas is clear()d and then draw()n again it will&#010 be rendered inside the same htmlElement.<br>&#010 If a Canvas is added as a child to Canvas parent, its htmlElement will be dropped.&#010 <P>&#010 ${isc.DocUtils.linkForRef('attr:Canvas.position')} should typically be set to <code>"relative"</code> if the widget&#010 is to be rendered inline within a standard page. */
		htmlElement: DOMElement;

		/** If enabled while ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapToGrid')} is enabled, children dragged within this Canvas&#010 will also snap to positions where their edges or center lines would be aligned with the&#010 edges or centers of other components, and lines will be shown to point out the possible&#010 alignment (with appearance controlled by ${isc.DocUtils.linkForRef('attr:Canvas.snapAlignCenterLineStyle')} and&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapAlignEdgeLineStyle')} respectively.&#010 <p>&#010 By default, edge- or center-snapping is enabled for all components, but the set of eligible&#010 components can be explicitly set via ${isc.DocUtils.linkForRef('attr:Canvas.snapAlignCandidates')}.&#010 <p>&#010 See also ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapCenterAlign')} and ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapEdgeAlign')} for enabling or&#010 disabling center alignment or edge alignment individually. */
		childrenSnapAlign: Boolean;

		/** Default time for performing an animated scroll.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateScrollTime: number;

		/** If set, overrides the global ${isc.DocUtils.linkForRef('classAttr:Canvas.defaultPageSpace')}. */
		leavePageSpace: number /* Integer */;

		/** This indicates how the system will test for droppable targets: either by intersection&#010 with the mouse or intersection with the rectangle of the dragMoveTarget. */
		dragIntersectStyle: DragIntersectStyle;

		/** Whether to show media in the center section, that is, behind the decorated Canvas. */
		edgeShowCenter: Boolean;

		/** If this canvas is being displayed in a ${isc.DocUtils.linkForRef('class:CanvasItem')}, this property will be set&#010 to point at the item. Otherwise this property will be null. */
		canvasItem: CanvasItem;

		/** Should a grouping frame be shown around this canvas. */
		isGroup: boolean;

		/** For custom components, establishes a default height for the component.&#010 <P>&#010 For a component that should potentially be sized automatically by a Layout, set this&#010 property rather than ${isc.DocUtils.linkForRef('attr:Canvas.height')} directly, because Layouts regard a height setting as&#010 an explicit size that shouldn't be changed. */
		defaultHeight: number /* number */;

		/** Softness, or degree of blurring, of the shadow.&#010 <P>&#010 A shadow with <code>softness:x</code> is 2x pixels larger in each direction than the element&#010 throwing the shadow, and the media for each edge should be x pixels wide/tall.&#010 <P>&#010 Defaults to <code>shadowDepth</code> if unset. */
		shadowSoftness: number;

		/** If <code>this.showHover</code> is true, this property can be used to customize the&#010 height of the hover canvas shown. */
		hoverHeight: number /* number */;

		/** Flag to disable snapping to alignment against this Canvas when <i>other</i> Canvases&#010 dragged into the same parent when ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is enabled on this&#010 Canvas' parent. */
		isSnapAlignCandidate: Boolean;

		/** Minimum width that this Canvas can be resized to by a user.  Actual limit will be maximum&#010 of <code>dragMinWidth</code> and ${isc.DocUtils.linkForRef('attr:Canvas.minWidth')}.&#010 <P>&#010 Note that a Canvas with overflow:"visible" has an implicit minimize size based on it's&#010 contents.&#010 <p>&#010 Note that <code>dragMinWidth</code> affects only user-initiated drag resizes.  To set&#010 the minimum width of a Canvas embedded in a Layout, you can set +{minWidth}, or&#010 ${isc.DocUtils.linkForRef('attr:Layout.minMemberLength')} to constrain the minimum size along the length axis of all&#010 members of the ${isc.DocUtils.linkForRef('class:Layout')}. */
		dragMinWidth: number;

		/** If <code>this.showHover</code> is true, should this widget's hover canvas be moved with&#010 the mouse while visible? */
		hoverMoveWithMouse: boolean;

		/** If this canvas has its size specified as a percentage, this property allows the user to&#010 explicitly designate another canvas upon which sizing will be based.&#010 <P>&#010 If unset percentage sizing is based on<br>&#010 - the ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')} if there is one and&#010   ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo')} is set,<br>&#010 - otherwise on the amount of space available in this widget's parent canvas, if this is&#010   a child of some other widget<br>&#010 - otherwise the page size. */
		percentSource: Canvas;

		/** Constrains drag-resizing and drag-repositioning of this canvas to either the rect of its&#010 parent (if set to true) or an arbitrary rect based its parent (if set to a&#010 [Left,Top,Width,Height] rect array).  In the latter mode you may use negative offsets&#010 for left/top and a width/height greater than the visible or scroll width of the parent&#010 to allow positioning beyond the confines of the parent.&#010 <p>&#010 If this canvas has no parent, constrains dragging to within the browser window.&#010 <p>&#010 Affects target and outline dragAppearance, not tracker.&#010 <p>&#010 Note: keepInParentRect affects only user drag interactions, not programmatic moves.&#010 <p>&#010 <u>Example use cases:</u><br>&#010 <code>keepInParentRect: true</code> - confine to parent<br>&#010 <code>keepInParentRect: [0, 0, 500, 500]</code> - confine to top left 500x500 region within parent<br>&#010 <code>keepInParentRect: [0, 0, 10000, 10000]</code> - in combination with&#010 oveflow: "auto", confine to parent, but allow moving off the right and bottom of the&#010 parent to force scrolling (and hence enlarge the scrollWidth of the parent). */
		keepInParentRect: Boolean | Integer[] /* Boolean | Array of Integer */;

		/** This boolean flag will be set to true by framework logic while generating print HTML &#010 for this widget as a result to a call to ${isc.DocUtils.linkForRef('classMethod:Canvas.showPrintPreview')} &#010 (or just ${isc.DocUtils.linkForRef('method:Canvas.getPrintHTML')}). Note that this flag is set recursively as&#010 parent widgets generate print HTML for their children.&#010 <P>&#010 This is a read-only property and should not be modified by application code. */
		isPrinting: Boolean;

		/** The vertical grid size to use, in pixels, when snap-to-grid is enabled. */
		snapVGap: number;

		/** Renders the widget to be partly transparent. A widget's opacity property may&#010      be set to any number between 0 (transparent) to 100 (opaque).&#010      Null means don't specify opacity directly, 100 is fully opaque.&#010      Note that heavy use of opacity may have a performance impact on some older&#010      browsers.&#010      <P>&#010      In older versions of Internet Explorer (Pre IE9 / HTML5), opacity is achieved&#010      through proprietary filters. If&#010      ${isc.DocUtils.linkForRef('classAttr:Canvas.neverUseFilters','filters have been disabled')} within this application&#010      developers must set ${isc.DocUtils.linkForRef('attr:Canvas.useOpacityFilter')} to true for specific components&#010      on which opacity support is required.&#010      <P>&#010      Also note that opacity is incompatible&#010      with ${isc.DocUtils.linkForRef('attr:Canvas.useBackMask','backMasks')}. */
		opacity: number;

		/** Should canvases with a ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parent canvas')} be added to&#010 the TabIndexManager under the parent as described in ${isc.DocUtils.linkForRef('method:Canvas.updateChildTabPositions')} and&#010 ${isc.DocUtils.linkForRef('method:Canvas.updateChildTabPosition')}?&#010 <P>&#010 If set to false, the tab-position will not be modified on parent change.&#010 <P>&#010 This property is useful for cases where the tab position of a widget will be managed&#010 by something other than the parent canvas, for example for &#010 ${isc.DocUtils.linkForRef('attr:CanvasItem.canvas','canvasItem canvases')}. */
		updateTabPositionOnReparent: boolean;

		/** Default acceleration function for performing an animated show.  If unset, &#010 <code>this.animateAcceleration</code> will be used by default instead */
		animateShowAcceleration: AnimationAcceleration;

		/** Default time for performing an animated fade.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateFadeTime: number;

		/** Default acceleration function for performing an animated scroll.  If unset, &#010 <code>this.animateAcceleration</code> will be used by default instead */
		animateScrollAcceleration: AnimationAcceleration;

		/** Can this widget be allowed to become the target of keyboard events?&#010 <P>&#010 If canFocus is unset (the default), only scrollable widgets with visible scrollbars are&#010 focusable, to allow for keyboard scrolling.&#010 <P>&#010 A widget normally receives focus by being clicked on or tabbed to. */
		canFocus: boolean;

		/** See ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')}.  This setting enables or disables snapping on edge&#010 alignment only. */
		childrenSnapEdgeAlign: Boolean;

		/** Amount of time (in milliseconds) before mouseStillDown events start to be fired&#010 repeatedly for this canvas. See ${isc.DocUtils.linkForRef('method:Canvas.mouseStillDown')} for details. */
		mouseStillDownInitialDelay: number /* number */;

		/** Default directory for skin images (those defined by the class), relative to the&#010 Page-wide ${isc.DocUtils.linkForRef('classMethod:Page.getSkinDir','skinDir')}. */
		skinImgDir: URL;

		/** Explicit spread for the css-based drop shadow shown if ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow')} is true &#010 and ${isc.DocUtils.linkForRef('attr:Canvas.showShadow')} is true. This property governs how much larger than the&#010 widget the shadow will appear. A negative value (coupled with an explicit offset) will&#010 result in a smaller shadow.&#010 <P>&#010 Has no effect if we are not using css-based shadows - in that case, use&#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowImage')} instead. */
		shadowSpread: number /* Integer */;

		/** Default acceleration effect for performing an animated move.  If unset, &#010 <code>this.animateAcceleration</code> will be used by default instead */
		animateMoveAcceleration: AnimationAcceleration;

		/** Vertical offset for the ${isc.DocUtils.linkForRef('attr:Canvas.showShadow','shadow')}. Takes precedence over &#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowOffset')} if set. Has no effect if ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow','css-shadows')}&#010 are not being used for this canvas. */
		shadowVOffset: Number;

		/** Configures where the Opacity filter is used for IE6-8.&#010 <P>&#010 With the default of null, opacity filters are used unless&#010 ${isc.DocUtils.linkForRef('classAttr:Canvas.neverUseFilters')} has been set.  When set explicitly to true,&#010 opacity filters are used even if <code>neverUseFilters</code> is true.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('group:IEFilters')} for background. */
		useOpacityFilter: boolean;

		/** If <code>this.canHover</code> is true, how long should the mouse be kept over this&#010 widget before the hover event is fired */
		hoverDelay: number;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize')} is true, this attributes specifies the visual appearance&#010 to show during drag resize. If unset ${isc.DocUtils.linkForRef('attr:Canvas.dragAppearance')} will be used. */
		dragResizeAppearance: DragAppearance;

		/** Specifies the cursor image to display when the mouse pointer is&#010      over this widget. It corresponds to the CSS cursor attribute. See Cursor type for&#010      different cursors.&#010      <P>&#010      See also ${isc.DocUtils.linkForRef('attr:Canvas.disabledCursor')} and ${isc.DocUtils.linkForRef('attr:Canvas.noDropCursor')}. */
		cursor: Cursor;

		/** The horizontal snap direction.&#010 Set this value to "before" to snap to the nearest gridpoint to the left;&#010 set it to "after" to snap to the nearest gridpoint to the right; and set&#010 it to "nearest" to snap to the nearest gridpoint in either direction. */
		snapHDirection: string;

		/** When this widget is hidden (see ${isc.DocUtils.linkForRef('attr:Canvas.visibility')} and ${isc.DocUtils.linkForRef('method:Canvas.hide')}),&#010 should display:none be applied to the ${isc.DocUtils.linkForRef('method:Canvas.getOuterElement','outer element')}?&#010 <p>&#010 This setting is not supported for general use, but in certain cases, it has been shown&#010 that display:none is a work-around for browser bugs involving burn-through of iframes or&#010 plugins, where the content of the iframe or plugin may still be visible despite the&#010 containing widget being hidden. */
		hideUsingDisplayNone: boolean;

		/** URL for a background image for this widget (corresponding to the CSS "background-image"&#010 attribute). */
		backgroundImage: SCImgURL;

		/** Number of pixels the left side of the widget is offset to the right from its default&#010 drawing context (either its parent's topleft corner, or the document flow, depending on&#010 the value of the ${isc.DocUtils.linkForRef('attr:Canvas.position')} property).&#010 <P>&#010 Can also be set as a percentage, specified as a String ending in '%', eg, "50%".  In&#010 this case the top coordinate is considered as a percentage of the specified width of&#010 the ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parent')}. */
		left: Number | String /* Number or String */;

		/** Automatically generated mask canvas displayed when ${isc.DocUtils.linkForRef('method:Canvas.showComponentMask')} is called. */
		componentMask: Canvas /* AutoChild Canvas */;

		/** Default animation effect to use if ${isc.DocUtils.linkForRef('method:Canvas.animateHide')} is called without an&#010 explicit <code>effect</code> parameter */
		animateHideEffect: animateShowEffectId | animateShowEffect;

		/** Flag to disable snapping to alignment when children of this Canvas are resized */
		childrenResizeSnapAlign: Boolean;

		/** Strategy to use when locating children in this canvas from an autoTest locator string. */
		locateChildrenBy: LocatorStrategy;

		/** Offset of the shadow.  Defaults to half of <code>shadowDepth</code> if unset.&#010 <P>&#010 Because of the blurred edges, a shadow is larger than the originating component by&#010 2xsoftness.  An <code>shadowOffset</code> of 0 means that the shadow will extend around the&#010 originating component equally in all directions.&#010 <P>&#010 If ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow','css shadows')} are being used, separate vertical and&#010 horizontal offsets may be specified via ${isc.DocUtils.linkForRef('attr:Canvas.shadowHOffset')} and&#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowVOffset')}. */
		shadowOffset: number;

		/** Default directory for app-specific images, relative to the Page-wide&#010 ${isc.DocUtils.linkForRef('classMethod:Page.getAppImgDir','appImgDir')}. */
		appImgDir: URL;

		/** Minimum width available to this Canvas.&#010 <P>&#010 The <code>minWidth</code> and ${isc.DocUtils.linkForRef('attr:Canvas.minHeight')} settings apply to:&#010 <ul>&#010 <li>For a canvas being managed as a member of a ${isc.DocUtils.linkForRef('class:Layout')}, the minimum size the&#010     layout should apply to the canvas.&#010 <li>For a canvas with a width or height specified as a percent value, a minimum&#010     numeric pixel value to limit how large the canvas is sized.&#010 <li> determining size for a Canvas in a ${isc.DocUtils.linkForRef('class:CanvasItem')} (<code>minHeight</code> only)&#010 <li> end user ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize','drag resizing')}&#010 <li> minimum size when using ${isc.DocUtils.linkForRef('type:Overflow')} "visible" outside of a Layout - minimum&#010      size will be the greater of this setting or the minimum size needed to make all&#010      content visible&#010 </ul>&#010 <p>&#010 Minimum sizes do not apply in various other circumstances where sizes are being&#010 determined, such as ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','ListGrid recordComponents')}.&#010 <p>&#010 See also ${isc.DocUtils.linkForRef('attr:Layout.minMemberLength')} as a way of establishing minimum sizes along&#010 the length axis for all members of a ${isc.DocUtils.linkForRef('class:Layout')} with a single setting. */
		minWidth: number;

		/** Marks this Canvas as the ${isc.DocUtils.linkForRef('attr:Canvas.ruleScope')} that will be discovered by any contained&#010 ${isc.DocUtils.linkForRef('interface:DataBoundComponent')}s which do not specify an explicit <code>ruleScope</code>. */
		isRuleScope: Boolean;

		/** Whether this canvas should be included in a printable view.&#010 <P>&#010 Default is to:&#010 <ul>&#010 <li> omit all peers (edges generated by showEdges:true, etc)&#010 <li> omit anything considered a "control", such as a button or menu (see&#010 ${isc.DocUtils.linkForRef('attr:PrintProperties.omitControls')})&#010 <li> include everything else not marked shouldPrint:false&#010 </ul> */
		shouldPrint: boolean;

		/** Indicates whether this widget can be moved by a user of your application by simply&#010      dragging with the mouse. */
		canDragReposition: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.canDragReposition')} is true, this attributes specifies the visual appearance&#010 to show during drag reposition. If unset ${isc.DocUtils.linkForRef('attr:Canvas.dragAppearance')} will be used. */
		dragRepositionAppearance: DragAppearance;

		/** If set, native HTML5 drag and drop will be used for all drags initiated on this widget&#010 (on browsers where this is supported).&#010 <p>&#010 When using native HTML5 drags, the same series of events fires as for a normal drag&#010 (${isc.DocUtils.linkForRef('method:Canvas.dragStart')}, ${isc.DocUtils.linkForRef('method:Canvas.dropMove')}, etc.), and the ${isc.DocUtils.linkForRef('attr:Canvas.dragType','dragType')} / ${isc.DocUtils.linkForRef('attr:Canvas.dropTypes','dropTypes')}&#010 system works. ${isc.DocUtils.linkForRef('attr:Canvas.dragAppearance','dragAppearance')} is not supported; however,&#010 basic customization of the browser's tracker image is supported in certain browsers via&#010 the ${isc.DocUtils.linkForRef('classMethod:EventHandler.setDragTrackerImage')} API.&#010 <p>&#010 The primary difference with a native drag is that it can be cross-frame; that is, the&#010 user can drag out of the current browser window and drop into a different window or tab.&#010 <p>&#010 To provide information that will be available to a foreign frame, use&#010 ${isc.DocUtils.linkForRef('classMethod:EventHandler.setNativeDragData')}.  This API must be called when the ${isc.DocUtils.linkForRef('method:Canvas.dragStart')}&#010 event fires, and will not work if called at any other time.&#010 <p>&#010 However, due to browser bugs and/or browser-imposed limitations, the information provided to&#010 <code>setNativeDragData</code> cannot be accessed in the foreign frame until the actual drop&#010 occurs (mouse button released).  This means drop eligibility cannot be determined dynamically&#010 based on the dragged data; instead, eligibility can only be determined based on the&#010 ${isc.DocUtils.linkForRef('attr:Canvas.dragType')} / ${isc.DocUtils.linkForRef('attr:Canvas.dropTypes')} system. For this reason, a ${isc.DocUtils.linkForRef('attr:Canvas.dragType')} <b>must</b>&#010 be set on the source of a drag.&#010 <p>&#010 NOTE: Although Internet Explorer 10+ supports a subset of the <a href='http://www.w3.org/TR/html5/editing.html#dnd' target='_blank'>HTML5 drag and drop standard</a>,&#010 native drag and drop is disabled in IE because cross-window drags&mdash;the primary purpose&#010 of this API&mdash;are not possible. */
		useNativeDrag: Boolean;

		/** If true, causes this canvas's children to snap to its grid when resizing.&#010 This behavior can be overridden on a per-child basis by setting the&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapToGrid','snapToGrid')} or&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapResizeToGrid','snapResizeToGrid')} value on the child. */
		childrenSnapResizeToGrid: boolean;

		/** If true, this canvas will receive all mouse-clicks as single ${isc.DocUtils.linkForRef('method:Canvas.click','click')}&#010 events rather than as ${isc.DocUtils.linkForRef('method:Canvas.doubleClick','doubleClick')} events. */
		noDoubleClicks: Boolean;

		/** Horizontal offset for the ${isc.DocUtils.linkForRef('attr:Canvas.showShadow','shadow')}. Takes precedence over &#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowOffset')} if set. Has no effect if ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow','css-shadows')}&#010 are not being used for this canvas. */
		shadowHOffset: Number;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.proportionalResizing')} is set to "modifier"&#010 &#010 or "modifierOff"&#010 &#010 then proportional resizing of the widget is activated or deactivated, respectively,&#010 whenever at least one key in this set of modifier keys is pressed.&#010 <p>&#010 The keys allowed in this set are:  "Alt", "Ctrl", and "Shift".  If this set&#010 of keys is empty then proportional resizing is always used if&#010 <code>proportionalResizing</code> is "modifier"&#010  and is never used if&#010 <code>proportionalResizing</code> is "modifierOff"&#010 . */
		proportionalResizeModifiers: KeyName[] /* Array of KeyName */;

		/** Minimum height that this Canvas can be resized to by a user.  See ${isc.DocUtils.linkForRef('attr:Canvas.dragMinWidth')}&#010 for details of behavior. */
		dragMinHeight: number;

		/** Set the CSS padding of this component, in pixels.  Padding provides space between the&#010 border and the component's contents.&#010 <P>&#010 This property sets the same thickness of padding on every side.  Differing per-side&#010 padding can be set in a CSS style and applied via ${isc.DocUtils.linkForRef('attr:Canvas.styleName')}.&#010 <P>&#010 Note that CSS padding does not affect the placement of ${isc.DocUtils.linkForRef('attr:Canvas.children')}.  To&#010 provide a blank area around children, either use ${isc.DocUtils.linkForRef('attr:Canvas.margin','CSS margins')} or use&#010 a ${isc.DocUtils.linkForRef('class:Layout')} as the parent instead, and use properties such as&#010 ${isc.DocUtils.linkForRef('attr:Layout.layoutMargin')} to create blank space. */
		padding: number;

		/** Criteria to be evaluated to determine whether this Canvas should be enabled.  Re-evaluated&#010 whenever data in the ${isc.DocUtils.linkForRef('attr:Canvas.ruleScope')} changes.&#010 <P>&#010 A basic criteria uses textMatchStyle:"exact". When specified in&#010 ${isc.DocUtils.linkForRef('group:componentXML','Component XML')} this property allows&#010 ${isc.DocUtils.linkForRef('group:xmlCriteriaShorthand','shorthand formats')} for defining criteria. */
		enableWhen: AdvancedCriteria;

		/** Default acceleration function for performing an animated resize.  If unset, &#010 <code>this.animateAcceleration</code> will be used by default instead */
		animateResizeAcceleration: AnimationAcceleration;

		/** Flag to disable snapping to alignment when this Canvas is resized.&#010 <p>&#010 To control snapping to align for the children resized <i>within</i> this Canvas, see&#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenResizeSnapAlign','childrenResizeSnapAlign')} instead. */
		snapResizeToAlign: Boolean;

		/** On ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch','touch devices')}, if this <code>Canvas</code> can be scrolled,&#010 should touch-dragging the content area result in scrolling? Set to <code>false</code>&#010 if touch-dragging should not cause scrolling. Note that setting to <code>false</code>&#010 enables the use of ${isc.DocUtils.linkForRef('attr:Canvas.showCustomScrollbars','custom scrollbars')} on touch devices.&#010 <p>&#010 <code>useTouchScrolling</code> can default to <code>false</code> if&#010 ${isc.DocUtils.linkForRef('attr:Canvas.disableTouchScrollingForDrag','disableTouchScrollingForDrag')} is <code>true</code>&#010 and various built-in drag operations are enabled that normally interfere with touch scrolling&#010 (e.g. ${isc.DocUtils.linkForRef('attr:ListGrid.canDragSelect')} and ${isc.DocUtils.linkForRef('attr:ListGrid.canReorderRecords')}).&#010 <p>&#010 When touch scrolling is disabled, it can be difficult to interact with parts of the&#010 custom scrollbars at their default size of 16 pixels. In touch browsers, any touch 8px&#010 before the thumb of a ${isc.DocUtils.linkForRef('class:Scrollbar','custom scrollbar')} will be mapped to the thumb, but&#010 the other parts of the scrollbar do not have a similar tolerance applied. The width of&#010 the custom scrollbars can be increased by setting the ${isc.DocUtils.linkForRef('attr:Canvas.scrollbarSize')} to a&#010 larger value, but note that when ${isc.DocUtils.linkForRef('group:skinning','spriting is enabled')}, changing the&#010 <code>scrollbarSize</code> may cause tiling of certain images and backgrounds that make&#010 up the custom scrollbar. This can be fixed for a component by creating it with&#010 ${isc.DocUtils.linkForRef('attr:Canvas.scrollbarConstructor')} set to "Scrollbar"&mdash;a basic scrollbar class that&#010 does not employ spriting. */
		useTouchScrolling: Boolean;

		/** Controls what happens when the drawn size of the content of a Canvas is either&#010          greater or smaller than the specified size of the Canvas.  Similar to the CSS&#010          property overflow, but consistent across browsers.  See Overflow type for&#010          details. */
		overflow: Overflow;

		/** Maximum width that this Canvas can be resized to by a user.  Actual limit will be minimum&#010 of <code>dragMaxWidth</code> and ${isc.DocUtils.linkForRef('attr:Canvas.maxWidth')}. */
		dragMaxWidth: number;

		/** Amount the contained Canvas should be offset.  Defaults to edgeSize; set to less than&#010 edgeSize to allow the contained Canvas to overlap the edge and corner media. */
		edgeOffset: number;

		/** Number of pixels the cursor needs to move before the EventHandler starts a drag operation. */
		dragStartDistance: number;

		/** CSS border declaration used for the line shown to indicate snapping to a edge line when&#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is set. */
		snapAlignEdgeLineStyle: String;

		/** Flag to disable snapping to edge alignment when this Canvas is dragged when &#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is enabled on this Canvas' parent. */
		snapToEdgeAlign: Boolean;

		/** Array of side names ("T", "B", "L", "R") specifying which sides of the decorated&#010 component should show edges.  For example: <pre>&#010      customEdges : ["T", "B"]&#010 </pre>&#010 .. would show edges only on the top and bottom of a component.&#010 <P>&#010 The default of <code>null</code> means edges will be shown on all sides. */
		customEdges: String[] /* Array of String */;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo')} is defined for this widget, this property can be used to&#010 specify an offset in px or percentage for the top coordinate of this widget.&#010 <P>&#010 For example if <code>snapTo</code> is specified as <code>"T"</code> and&#010 <code>snapOffsetTop</code> is set to 6, this widget will be rendered 6px below the top&#010 edge of its parent or master element. . Alternatively if <code>snapTo</code> was set&#010 to <code>"B"</code>, a <code>snapOffsetTop</code> value of -6 would cause the&#010 component to be rendered 6px inside the bottom edge of its parent or ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')}. */
		snapOffsetTop: number /* integer */;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.htmlElement')} is specified, should this canvas initially be drawn&#010 at the same dimensions as the htmlElement?<br>&#010 Note: setting this property will not force the canvas to resize if the element&#010 subsequently resizes (for example due to page reflow). */
		matchElement: boolean;

		/** Indicates whether this widget can be resized by dragging on the edges and/or corners of&#010      the widget with the mouse. */
		canDragResize: Boolean;

		/** Absolute or relative, corresponding to the "absolute" (with respect to parent) or&#010 "relative" (with respect to document flow) values for the CSS position attribute.&#010 <P>&#010 Setting <code>position:"relative"</code> enables SmartClient components to be embedded&#010 directly into the native HTML flow of a page, causing the component to be rendered&#010 within an existing DOM structure.&#010 This attribute should only be set to <code>"relative"</code> on a top level component&#010 (a component with no ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas')}).&#010 <P>&#010 There are 2 ways to embed relatively positioned canvases in the DOM - by default the&#010 component will be written out inline when it gets ${isc.DocUtils.linkForRef('method:Canvas.draw','drawn()n')}. For example&#010 to embed a canvas in an HTML table you could use this code:&#010 <pre>&#010 &lt;table&gt;&#010   &lt;tr&gt;&#010     &lt;td&gt;&#010       &lt;script&gt;&#010         isc.Canvas.create({autoDraw:true, backgroundColor:"red", position:"relative"});&#010       &lt;/script&gt;&#010     &lt;td&gt;&#010   &lt;/tr&gt;&#010 &lt;/table&gt;&#010 </pre>&#010 Alternatively you can make use of the ${isc.DocUtils.linkForRef('attr:Canvas.htmlElement')} attribute.&#010 <P>&#010 Relative positioning is intended as a short-term integration scenario while incrementally&#010 upgrading existing applications.&#010 Note that relative positioning is not used to manage layout within SmartClient components -&#010 instead the ${isc.DocUtils.linkForRef('class:Layout')} class would typically be used.&#010 For best consistency and flexibility across browsers, all SmartClient layout managers&#010 use absolute positioning.&#010 <P>&#010 For canvases with a specified ${isc.DocUtils.linkForRef('attr:Canvas.htmlElement')}, this attribute defaults to&#010 <code>"relative"</code>. In all other cases the default value will be&#010 <code>"absolute"</code>. */
		position: Positioning;

		/** Cursor to use when over each edge of a Canvas that is drag resizable.&#010 <P>&#010 To disable drag resize cursors, set the edgeCursorMap property to null. */
		edgeCursorMap: object;

		/** Default acceleration effect to apply to all animations on this Canvas.&#010 Can be overridden by setting animationAcceleration for specific animations or by passing&#010 an acceleration function directly into the appropriate method. */
		animateAcceleration: AnimationAcceleration;

		/** If specified this governs the tabIndex of the widget in the page's tab order.&#010 Setting this value to <code>-1</code> will ensure the canvas does not show up&#010 in the page's tab order, though if ${isc.DocUtils.linkForRef('attr:Canvas.canFocus','canFocus')} is true, the user&#010 may still give it keyboard focus by clicking on the widget directly.&#010 <P>&#010 By default SmartClient auto-assigns tab-indices, ensuring focusable widgets&#010 are reachable by tabbing in an intuitive order based on widget hierarchy and &#010 draw order. Specifying an explicit tab index means a widget will not participate &#010 in this automatic tab position allocation and is typically not recommended except&#010 for very simple cases.&#010 <P>&#010 For more information on automatic tab index assignment, including recommended&#010 approaches for customizing tab order assignation, see the ${isc.DocUtils.linkForRef('group:tabOrderOverview')}.&#010 Developers may call ${isc.DocUtils.linkForRef('method:Canvas.clearExplicitTabIndex')} to clear any explicitly&#010 assigned tab index, and have the widget participate in automatic tab position allocation.&#010 <P>&#010 <code>canvas.tabIndex</code> cannot be set to greater than&#010 ${isc.DocUtils.linkForRef('classAttr:Canvas.TAB_INDEX_FLOOR')} - as we reserve the values above this range for&#010 auto-assigned tab-indices. */
		tabIndex: number;

		/** ${isc.DocUtils.linkForRef('type:LocatorTypeStrategy')} to use when finding children within this canvas. */
		locateChildrenType: LocatorTypeStrategy;

		/** Default time for performing an animated move.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateMoveTime: number;

		/** When this Canvas is included as a member in a Layout, layoutAlign controls alignment on the&#010 breadth axis of the layout.  Default is "left" for a VLayout, "top" for an HLayout. */
		layoutAlign: Alignment | VerticalAlignment;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow')} is false, (or for browsers that do not support&#010 css3), this property supplies the base name of the series of images for the sides, &#010 corners, and center of the shadow.&#010 <P>&#010 The actual image names fetched for the dropShadow combine the segment name and the&#010 <code>shadowDepth</code> setting.  For example, given "ds.png" as the base name, a depth of&#010 4, and the top-left segment of the shadow, we'd use "ds4_TL.png".&#010 <P>&#010 The names for segments are the same as those given for controlling resizable edges; see&#010 ${isc.DocUtils.linkForRef('attr:Canvas.resizeFrom')}.  The center segment has the name "center".  The center segment is&#010 the only segment that doesn't include the depth in the URL, so the final image name for the&#010 center given a baseName of "ds.png" would be just "ds_center.png". */
		shadowImage: SCImgURL;

		/** Size for this component's vertical dimension.&#010 <P>&#010 Can be a number of pixels, or a percentage like "50%". See documentation for&#010 ${isc.DocUtils.linkForRef('attr:Canvas.width')} for details on how percentage values are resolved actual size.&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:Canvas.overflow','overflow')} is set to "visible", this size is a&#010 minimum, and the component may overflow to show all content and/or children.&#010 <P>&#010 If trying to establish a default height for a custom component, set&#010 ${isc.DocUtils.linkForRef('attr:Canvas.defaultHeight','defaultHeight')} instead. */
		height: Number | String /* Number or String */;

		/** Default animation effect to use if ${isc.DocUtils.linkForRef('method:Canvas.animateShow')} is called without an&#010 explicit <code>effect</code> parameter */
		animateShowEffect: animateShowEffectId | animateShowEffect;

		/** Specifies the cursor image to display when the mouse pointer is&#010      over this widget if this widget is disabled. It corresponds to the CSS cursor&#010      attribute. See Cursor type for different cursors. */
		disabledCursor: Cursor;

		/** This Canvas's immediate parent, if any.&#010 <BR>&#010 Can be initialized, but any subsequent manipulation should be via&#010 ${isc.DocUtils.linkForRef('method:Canvas.addChild','addChild()')} and ${isc.DocUtils.linkForRef('method:Canvas.removeChild','removeChild()')} calls&#010 on the parent. The parent Canvas should be fetched using&#010 ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','getParentCanvas()')}. */
		parentCanvas: Canvas;

		/** Maximum auto-fit width for a hover if ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitWidth')} is &#010 enabled. May be specified as a pixel value, or a percentage of page width. */
		hoverAutoFitMaxWidth: Number | String /* Number or String */;

		/** If set to true, this widget will be enabled, if set to false, or null, this&#010 widget will be disabled. */
		enabled: boolean;

		/** Default time for performing an animated setRect.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateRectTime: number;

		/** Default time for performing an animated hide.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateHideTime: number;

		/** If set, the background color of the grouping label. Only applicable when ${isc.DocUtils.linkForRef('attr:Canvas.isGroup')}&#010 is set to true.&#010 <p>&#010 This corresponds to the CSS background-color property on the grouping label. You can set this&#010 property to an RGB value (e.g. #22AAFF) or a named color (e.g. red) from a list of browser supported&#010 color names.&#010  */
		groupLabelBackgroundColor: CSSColor;

		/** Default class used to construct menus created by this component, including context menus. */
		menuConstructor: SCClassName;

		/** When this Canvas is included as a member in a ${isc.DocUtils.linkForRef('class:Layout')}, whether a resizeBar should be shown&#010 after this member in the layout, to allow it to be resized.&#010 <p>&#010 Whether a resizeBar is actually shown also depends on the &#010 ${isc.DocUtils.linkForRef('attr:Layout.defaultResizeBars','defaultResizeBars')} attribute of the layout, and whether this&#010 Canvas is the last layout member.&#010 <p>&#010 By default the resize bar acts on the Canvas that it is declared on.  If you want the resize&#010 bar to instead act on the next member of the Layout (e.g. to collapse down or to the right),&#010 set ${isc.DocUtils.linkForRef('attr:Canvas.resizeBarTarget')} as well. */
		showResizeBar: Boolean;

		/** Context menu to show for this object, an instance of the Menu widget.&#010 <P>&#010 Note: if ${isc.DocUtils.linkForRef('method:Canvas.destroy')} is called on a canvas, any specified context menu is&#010 not automatically destroyed as well. This is in contrast to ${isc.DocUtils.linkForRef('class:MenuButton')}s which&#010 automatically destroy their specified ${isc.DocUtils.linkForRef('attr:MenuButton.menu')} by default. The behavior&#010 is intentional as context menus are commonly reused across components. */
		contextMenu: Menu;

		/** Color for the css-based drop shadow shown if ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow')} is true &#010 and ${isc.DocUtils.linkForRef('attr:Canvas.showShadow')} is true.&#010 <P>&#010 Has no effect if we are not using css-based shadows - in that case, use&#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowImage')} instead. */
		shadowColor: CSSColor;

		/** The title/label for the grouping. Only applicable when ${isc.DocUtils.linkForRef('attr:Canvas.isGroup','isGroup')} is set to true. */
		groupTitle: HTMLString;

		/** For custom components, establishes a default width for the component.&#010 <P>&#010 For a component that should potentially be sized automatically by a Layout, set this&#010 property rather than ${isc.DocUtils.linkForRef('attr:Canvas.width')} directly, because Layouts regard a width setting as&#010 an explicit size that shouldn't be changed. */
		defaultWidth: number /* number */;

		/** The top-most Canvas (i.e., not a child of any other Canvas), if any, in this widget's&#010 containment hierarchy. */
		topElement: Canvas;

		/** This property controls what kind of mask is used in case ${isc.DocUtils.linkForRef('attr:Canvas.useDragMask')} is&#010 enabled. */
		dragMaskType: DragMaskType;

		/** Default total duration of animations. Can be overridden by setting animation times for&#010 specific animations, or by passing a <code>duration</code> parameter into the appropriate&#010 animate...() method. */
		animateTime: number;

		/** Sets the style for the grouping frame around the canvas. Only necessary when ${isc.DocUtils.linkForRef('attr:Canvas.isGroup')}&#010 is set to true. */
		groupBorderCSS: String;

		/** A different widget that should be actually dragged when dragging initiates on this&#010 widget. One example of this is to have a child widget that drags its parent, as with a&#010 drag box. Because the parent automatically repositions its children, setting the drag&#010 target of the child to the parent and then dragging the child will result in both&#010 widgets being moved.<br>&#010 Valid dragTarget values are:<br>&#010 - <code>null</code> (default) [this widget is its own drag target]<br>&#010 - another widget, or widget ID<br>&#010 - <code>"parent"</code> drag target is this widget's&#010    ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parentCanvas')}<br>&#010 - <code>"top"</code> drag target is this widget's&#010    ${isc.DocUtils.linkForRef('attr:Canvas.topElement','topElement')}<br> */
		dragTarget: Canvas | String;

		/** Indicates that this object can receive dropped widgets (i.e. other widgets can be&#010 dropped on top of it). */
		canAcceptDrop: Boolean;

		/** Default time for performing an animated resize.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateResizeTime: number;

		/** Should this element be redrawn in response to a resize?&#010 <P>&#010 Should be set to true for components whose ${isc.DocUtils.linkForRef('method:Canvas.getInnerHTML','inner HTML')} will not&#010 automatically reflow to fit the component's new size. */
		redrawOnResize: Boolean;

		/** Depth of the shadow, or the virtual height above the page of the widget throwing the shadow.&#010 <P>&#010 This is a single parameter that can be used to control both <code>shadowSoftness</code> and&#010 <code>shadowOffset</code>. */
		shadowDepth: number;

		/** Disables ${isc.DocUtils.linkForRef('attr:Canvas.useTouchScrolling')} whenever a built-in drag operation has been enabled which is&#010 known to be non-functional if touch scrolling is enabled.  Default behavior is to leave touch&#010 scrolling enabled even if it makes other enabled drag operations non-functional, since any&#010 ${isc.DocUtils.linkForRef('group:accessibility','accessible')} application must provide an alternative way to perform&#010 drag and drop operations anyway.&#010 <p>&#010 <code>disableTouchScrollingForDrag</code> exists so that applications can change the default&#010 setting on a per-component basis (via &#010 ${isc.DocUtils.linkForRef('classMethod:Class.changeDefaults')}),&#010  in order to make a system-wide or&#010 per-component-type decision about whether to favor touch scrolling vs retaining the ability to&#010 drag and drop via finger drags, instead of having to set <code>useTouchScrolling</code> on each&#010 individual instance.&#010 <p>&#010 See the ${isc.DocUtils.linkForRef('group:mobileDevelopment','Mobile Development overview')} for more background&#010 information. */
		disableTouchScrollingForDrag: Boolean;

		/** The background color for this widget. It corresponds to the CSS background-color&#010 attribute. You can set this property to an RGB value (e.g. #22AAFF) or a named color&#010 (e.g. red) from a list of browser supported color names. */
		backgroundColor: CSSColor;

		/** Set the CSS border of this component, as a CSS string including border-width,&#010 border-style, and/or color (eg "2px solid blue").&#010 <P>&#010 This property applies the same border to all four sides of this component.  Different&#010 per-side borders can be set in a CSS style and applied via ${isc.DocUtils.linkForRef('attr:Canvas.styleName')}.&#010 <p>&#010 If ${isc.DocUtils.linkForRef('attr:Canvas.isGroup')} is set to true then border is derived from the &#010 ${isc.DocUtils.linkForRef('attr:Canvas.groupBorderCSS')} attribute, not from the explicit border property. */
		border: string;

		/** CSS border declaration used for the line shown to indicate snapping to a center line when&#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is set. */
		snapAlignCenterLineStyle: String;

		/** Amount of time (in milliseconds) between repeated 'mouseStillDown' events for this&#010 canvas. See ${isc.DocUtils.linkForRef('method:Canvas.mouseStillDown')} for details. */
		mouseStillDownDelay: number /* number */;

		/** If this widget has dragAppearance <code>"target"</code>, this value specifies the&#010 opacity to render the target while it is being dragged. A null value implies we do&#010 not modify the opacity. */
		dragOpacity: number /* number */;

		/** Flag to disable snapping to center alignment when this Canvas is dragged when &#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is enabled on this Canvas' parent. */
		snapToCenterAlign: Boolean;

		/** See ${isc.DocUtils.linkForRef('attr:Canvas.canAdaptWidth')}. */
		canAdaptHeight: Boolean;

		/** Specifies how the background image should be positioned on the widget.&#010      It corresponds to the CSS background-position attribute. If unset,&#010      no background-position attribute is specified if a background image is&#010      specified. */
		backgroundPosition: string;

		/** If this property is set to <code>true</code>, the ${isc.DocUtils.linkForRef('method:Canvas.destroy','destroy()')} method&#010 has been called on this canvas. This implies the canvas is no longer valid. Its ID has been&#010 removed from global scope, and calling standard canvas APIs on it is likely to result in&#010 errors. */
		destroyed: boolean;

		/** When a drag and drop interaction occurs, if a ${isc.DocUtils.linkForRef('attr:Canvas.dragType','dragType')} is&#010 configured on the source widget, it is compared to the <code>dropTypes</code> configured&#010 on the target widget, and a drop is only allowed if the <code>dragType</code> is listed&#010 in the target widget's <code>dropTypes</code> array.&#010 <p>&#010 The default setting means any <code>dragType</code> is eligible for dropping on this&#010 widget, including no <code>dragType</code> setting.&#010 <p>&#010 See also ${isc.DocUtils.linkForRef('method:Canvas.willAcceptDrop')} for dynamic determination of drop eligibility. */
		dropTypes: String | String[] /* Array of String | String */;

		/** When set to true, shows a widget hovering at the mouse point instead of the builtin&#010 hover label.  Override ${isc.DocUtils.linkForRef('method:Canvas.getHoverComponent','getHoverComponent')} to provide the&#010 Canvas to show as the hoverComponent. */
		showHoverComponents: Boolean;

		/** This is an advanced setting. If set to <code>true</code>, when a widget is&#010 ${isc.DocUtils.linkForRef('method:Canvas.hide','hidden')}, the widget's handle will be resized such that&#010 it takes up no space, in addition to having its css <code>visibility</code>&#010 property set to <code>"hidden"</code>.&#010 <P>&#010 In addition to preventing the size of this widget from impacting the&#010 ${isc.DocUtils.linkForRef('method:Canvas.getScrollWidth','scroll size')} of any parent widget while hidden, this&#010 setting works around a native bug observed in Internet Explorer 10, whereby&#010 an <code>&lt;IFRAME&gt;</code> element with visibility set to hidden can&#010 cause rendering problems, if the HTML loaded by the <code>&lt;IFRAME&gt;</code>&#010 contains a <code>&lt;frameset&gt;</code>. In this case the browser may&#010 refuse to draw other elements at the same coordinates with a lower z-index than&#010 the hidden frame. Setting this property to <code>true</code> works around&#010 this problem for cases where an <code>&lt;IFRAME&gt;</code> containing a&#010 <code>&lt;frameset</code> will be rendered out, for example in an&#010 ${isc.DocUtils.linkForRef('class:HTMLFlow')} with <code>contentsType</code> set to <code>"page"</code>. */
		shrinkElementOnHide: boolean;

		/** If specified this governs the HTML accessKey for the widget.&#010 <P>&#010 This should be set to a character - when a user hits the html accessKey modifier for&#010 the browser, plus this character, focus will be given to the widget in question.&#010 The accessKey modifier can vary by browser and platform. &#010 <P>&#010 The following list of default behavior is for reference only, developers should also&#010 consult browser documentation for additional information.&#010 <ul>&#010 <li><b>Internet Explorer (all platforms)</b>: <code>Alt</code> + <i>accessKey</i></li>&#010 <li><b>Mozilla Firefox (Windows, Unix)</b>: <code>Alt+Shift</code> + <i>accessKey</i></li>&#010 <li><b>Mozilla Firefox (Mac)</b>: <code>Ctrl+Opt</code> + <i>accessKey</i></li>&#010 <li><b>Chrome and Safari (Windows, Unix)</b>:  <code>Alt</code> + <i>accessKey</i></li>&#010 <li><b>Chrome and Safari (Mac)</b>:  <code>Ctrl+Opt</code> + <i>accessKey</i></li>&#010 </ul> */
		accessKey: string;

		/** ARIA state mappings for this component. Usually this does not need to be manually&#010 set - see ${isc.DocUtils.linkForRef('group:accessibility')}.&#010 <P>&#010 This attribute should be set to a mapping of aria state-names to values - for example&#010 to have the "aria-haspopup" property be present with a value "true", you'd specify:&#010 <pre>&#010  { haspopup : true }&#010 </pre> */
		ariaState: Object;

		/** Describes which axes to apply snap-to-grid to.&#010 Valid values are "horizontal", "vertical" or "both". */
		snapAxis: string;

		/** If true, causes this canvas's children to snap to its grid when dragging.&#010 This behavior can be overridden on a per-child basis by setting the&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapToGrid','snapToGrid')} value on the child. */
		childrenSnapToGrid: boolean;

		/** When explicitly set to false, disallows drop before this member in the Layout. */
		canDropBefore: boolean;

		/** ${isc.DocUtils.linkForRef('class:ValuesManager')} for managing values displayed in this component.&#010 If specified at initialization time, this component will be added to the valuesManager via&#010 ${isc.DocUtils.linkForRef('method:ValuesManager.addMember')}.&#010 <P>&#010 ValuesManagers allow different fields of a single object to be displayed or edited&#010 across multiple UI components. Given a single values object, a valuesManager will handle&#010 determining the appropriate field values for its member components and displaying them / &#010 responding to edits if the components support this.&#010 <P>&#010 Data may be derived simply from the specified fieldNames within the member components, or for&#010 complex nested data structures can be specified by both component and field-level&#010 ${isc.DocUtils.linkForRef('type:DataPath')}.&#010 <P>&#010 Note that components may be automatically bound to an existing valuesManager attached to a &#010 parent component if dataPath is specified. See ${isc.DocUtils.linkForRef('attr:Canvas.dataPath')} for more information.&#010 Also note that if a databound component has a specified dataSource and dataPath but no specified&#010 valuesManager object one will be automatically generated as part of the databinding process */
		valuesManager: ValuesManager;

		/** The class that will be used to create custom scrollbars for this component. Set this&#010 attribute to a Scrollbar subclass with e.g. a different skinImgDir, to customize scrollbar&#010 appearance for this component only.&#010 <p>&#010 When ${isc.DocUtils.linkForRef('group:skinning','spriting is enabled')} and supported by the skin, the default&#010 <code>scrollbarConstructor</code> is changed to a different scrollbar class which handles&#010 scrollbar spriting. Spriting of the scrollbars of an individual component can therefore&#010 be disabled by creating the component with <code>scrollbarConstructor</code> set to the&#010 "Scrollbar" class. "Scrollbar" is a basic scrollbar class that does not employ spriting. */
		scrollbarConstructor: String;

		/** If this Canvas is canAcceptDrop:true, when the user drags a droppable widget over&#010      an edge of the widget, should we scroll to show the rest of the widget's content?&#010      Returned from canvas.shouldDragScroll() if there are scrollbars. */
		canDragScroll: boolean;

		/** Background color for the EdgedCanvas created to decorate this component.  This can be used&#010 to provide an underlying "tint" color for translucent edge media */
		edgeBackgroundColor: Color;

		/** Base name of images for edges.  Extensions for each corner or edge piece will be added&#010 to this image URL, before the extension.  For example, with the default base name of&#010 "edge.gif", the top-left corner image will be "edge_TL.gif".&#010 <P>&#010 The full list of extensions is: "_TL", "_TR", "_BL", "_BR", "_T", "_L", "_B", "_R",&#010 "_center". */
		edgeImage: SCImgURL;

		/** How far into the edge of an object do we consider the "edge" for drag resize purposes? */
		edgeMarginSize: number;

		/** Sets maximum height that this Canvas can be resized to by a user.  Actual limit will be&#010 minimum of <code>dragMaxHeight</code> and ${isc.DocUtils.linkForRef('attr:Canvas.maxHeight')}. */
		dragMaxHeight: number;

		/** The contents of a canvas or label widget. Any HTML string is acceptable. */
		contents: HTMLString;

		/** Whether to show a drop shadow for this Canvas. &#010 <P>&#010 Shadows may be rendered using ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow','css')} or via images. &#010 The appearance of shadows can be customized via&#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowColor')} (for css-based shadows) or ${isc.DocUtils.linkForRef('attr:Canvas.shadowImage')} &#010 (for image based shadows), ${isc.DocUtils.linkForRef('attr:Canvas.shadowDepth')},&#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowOffset')} and ${isc.DocUtils.linkForRef('attr:Canvas.shadowSoftness')}.&#010 <P>&#010 When ${isc.DocUtils.linkForRef('attr:Canvas.useCSSShadow')} is false, developers should be aware that the drop shadow&#010 is rendered as a ${isc.DocUtils.linkForRef('attr:Canvas.peers','peer')} and is drawn outside the specified &#010 width and height of the widget meaning a widget with shadows &#010 takes up a little more space than it otherwise would. A full screen canvas with showShadow set &#010 to true as this would be likely to cause browser scrollbars to appear - developers can handle&#010 this by either setting this property to false on full-screen widgets, or by setting&#010 overflow to "hidden" on the &lt;body&gt; element if browser-level scrolling is&#010 never intended to occur. */
		showShadow: Boolean;

		/** On ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch','touch devices')} that support native touch scrolling, if&#010 ${isc.DocUtils.linkForRef('attr:Canvas.showCustomScrollbars','showCustomScrollbars')} is <code>true</code> and touch&#010 scrolling has not been disabled by the ${isc.DocUtils.linkForRef('attr:Canvas.useTouchScrolling')} and/or&#010 ${isc.DocUtils.linkForRef('attr:Canvas.disableTouchScrollingForDrag')} settings, should custom scrollbars <em>and</em>&#010 native touch scrolling be enabled for this component? If <code>false</code> or unset,&#010 then only native touch scrolling will be enabled. If <code>true</code>, then both scrolling&#010 mechanisms will be enabled.&#010 <p>&#010 <strong>NOTE:</strong> Because native touch scrolling (also called momentum scrolling)&#010 is computationally intensive, some mobile browsers implement an optimization where the state&#010 of the DOM for the element being scrolled will be frozen or partially frozen during&#010 the scroll animation. This results in a delay between when the scroll position reaches&#010 a certain point in the animation and when the positions of the custom scrollbar thumbs&#010 are updated to reflect that scroll position. */
		alwaysShowScrollbars: Boolean;

		/** This initialization property allows developers to create a canvas using the&#010 ${isc.DocUtils.linkForRef('method:Class.addAutoChild')} method, and have it added as a child to some other&#010 component.  This property may be set to the <code><i>childName</i></code> of another&#010 already-created auto-child, or <code>"none"</code> to cause the component to be &#010 created without being added as a child to any other widget.<br>&#010 If unset, the canvas will be added as a child to the component on which&#010 <code>addAutoChild(...)</code> was called.&#010 <P>&#010 See ${isc.DocUtils.linkForRef('group:autoChildren')} for an overview of the autoChild subsystem. */
		autoParent: String;

		/** How thick should we make the scrollbars for this canvas. This only applies if&#010 ${isc.DocUtils.linkForRef('attr:Canvas.showCustomScrollbars')} is <code>true</code>.&#010 <p>&#010 <strong>NOTE:</strong> When ${isc.DocUtils.linkForRef('group:skinning','spriting is enabled')}, changing the&#010 <code>scrollbarSize</code> may cause tiling of certain images and backgrounds that make&#010 up the custom scrollbar. This can be fixed for a component by creating it with&#010 ${isc.DocUtils.linkForRef('attr:Canvas.scrollbarConstructor')} set to "Scrollbar"&mdash;a basic scrollbar class&#010 that does not employ spriting. */
		scrollbarSize: number;

		/** Amount of time (in milliseconds) between which two clicks are considered a single click */
		doubleClickDelay: number /* number */;

		/** Strategy to use when locating peers of this canvas from an autoTest locator string. */
		locatePeersBy: LocatorStrategy;

		/** Causes this canvas to snap to its parent's grid when dragging. */
		snapToGrid: boolean;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.htmlElement')} is specified, this attribute specifies the position where&#010 the canvas should be inserted relative to the <code>htmlElement</code> in the DOM. */
		htmlPosition: DrawPosition;

		/** The vertical snap direction.&#010 Set this value to "before" to snap to the nearest gridpoint above;&#010 set it to "after" to snap to the nearest gridpoint below; and set&#010 it to "nearest" to snap to the nearest gridpoint in either direction. */
		snapVDirection: string;

		/** An ${isc.DocUtils.linkForRef('class:EditProxy')} controls the behaviors of a component when it is placed into&#010 ${isc.DocUtils.linkForRef('group:devTools','editing mode')}.&#010 <p>&#010 The <code>editProxy</code> AutoChild is created when a component is first placed into&#010 edit mode via ${isc.DocUtils.linkForRef('method:Canvas.setEditMode')}.&#010 <p>&#010 <code>editProxy</code> properties can be supplied on a ${isc.DocUtils.linkForRef('object:PaletteNode')} or&#010 ${isc.DocUtils.linkForRef('object:EditNode')} as ${isc.DocUtils.linkForRef('attr:PaletteNode.editProxyProperties','editProxyProperties')}, but must&#010 be provided before the component is first placed into edit mode.&#010 <p>&#010 Most editable components use a custom EditProxy. See the documentation for&#010 each class' ${isc.DocUtils.linkForRef('attr:Canvas.editProxyConstructor','editProxyConstructor')} to determine&#010 the class. */
		editProxy: EditProxy /* AutoChild EditProxy */;

		/** Cursor to switch to if the mouse is over a widget that is drag repositionable. */
		dragRepositionCursor: Cursor;

		/** When this canvas is dropped onto an object supporting snap-to-grid, should it snap&#010 to the grid (true, the default) or just drop wherever the mouse is (false). */
		snapOnDrop: Boolean;

		/** In earlier versions of Internet Explorer (pre IE9), a native limitation&#010 exists  whereby if HTML elements are&#010 overlapping on the page, certain elements can appear to "burn through"&#010 elements in the same position with a higher z-index.&#010 Specific cases in which this have been observed include Applets,&#010 &lt;IFRAME&gt; elements, and for&#010 older versions of IE, native &lt;SELECT&gt; items.&#010 <P>&#010 The backMask is a workaround for this issue. If <code>useBackMask</code> is&#010 set to <code>true</code>, the component will render an empty &lt;IFRAME&gt; element&#010 behind the canvas, which prevents this effect in all known cases.&#010 <P>&#010 Has no effect in other browsers. */
		useBackMask: Boolean;

		/** Set the CSS Margin, in pixels, for this component.  Margin provides blank space outside&#010 of the border.&#010 <P>&#010 This property sets the same thickness of margin on every side.  Differing per-side&#010 margins can be set in a CSS style and applied via ${isc.DocUtils.linkForRef('attr:Canvas.styleName')}.&#010 <P>&#010 Note that the specified size of the widget will be the size <b>including</b> the margin&#010 thickness on each side. */
		margin: number;

		/** Global identifier for referring to a widget in JavaScript.  The ID property is optional if&#010 you do not need to refer to the widget from JavaScript, or can refer to it indirectly&#010 (for example, by storing the reference returned by ${isc.DocUtils.linkForRef('classMethod:Class.create','create()')}).&#010 <P>&#010 An internal, unique ID will automatically be created upon instantiation for any canvas&#010 where one is not provided.&#010 <P>&#010 The ID property should be unique in the global scope. If <code>window[<i>ID</i>]</code>&#010 is already assigned to something else a warning will be logged using the developer console,&#010 and the existing reference will be replaced, calling ${isc.DocUtils.linkForRef('method:Canvas.destroy','destroy()')} on the&#010 previous object if it is a SmartClient Class instance.&#010 <P>&#010 Automatically generated IDs will be unique as long as the canvases they refer to remain&#010 active - once a canvas with an automatically generated ID has been destroyed, its ID may be&#010 reused for the next canvas created with no explicitly specified ID. */
		ID: string;

		/** This property is set to true when the ${isc.DocUtils.linkForRef('method:Canvas.destroy')} method is called on a widget.&#010 If this property is true, but ${isc.DocUtils.linkForRef('attr:Canvas.destroyed')} is not, this indicates the canvas is&#010 in the process of being destroyed. */
		destroying: boolean;

		/** An optional map of name:value parameters that will be available within the scope of the&#010 dynamicContents evaluation.  For example - if you have e.g:&#010 <pre>&#010 Canvas.create({&#010   dynamicContents: true,&#010   dynamicContentsVars: {&#010       name: "Bob"&#010   },&#010   contents: "hello &#36;{name}"&#010 });&#010 </pre>&#010 The above will create a canvas with contents <code>hello Bob</code>.  You can add, remove, and&#010 change values in the dynamicContentsVars object literal, just call&#010 <code>markForRedraw()</code> on the canvas to have the dynamicContents template re-evaluated.&#010 <p>&#010 Note that <code>this</code> is always available inside a dynamic contents string and points to&#010 the canvas instance containing the dynamic contents.&#010 <p>&#010 Used only if ${isc.DocUtils.linkForRef('attr:Canvas.dynamicContents')} : true has been set. */
		dynamicContentsVars: ValueMap;

		/** ARIA role of this component.  Usually does not need to be manually set - see&#010 ${isc.DocUtils.linkForRef('group:accessibility')}. */
		ariaRole: String;

		/** Dynamic contents allows the contents string to be treated as a simple, but powerful&#010 template.  When this attribute is set to true, expressions of the form &#36;{arbitrary JS&#010 here} are replaced by the result of the evaluation of the JS code inside the curly&#010 brackets.  This evaluation happens at draw time.  If you want to trigger a re-evaluation&#010 of the expressions in the contents string you can call markForRedraw() on the canvas.&#010 <p>&#010 You can use this feature to build some simple custom components. For example, let's say&#010 you want to show the value of a Slider in a Canvas somewhere on the screen.  You can do&#010 this by observing the valueChanged() method on the slider and calling setContents() on&#010 your canvas with the new string or you can set the contents of the canvas to something&#010 like:&#010 <p><code>&#010 "The slider value is &#36;{sliderInstance.getValue()}."&#010 </code><p>&#010 Next you set dynamicContents: true on the canvas, observe valueChanged() on the slider&#010 and call canvas.markForRedraw() in that observation.  This approach is cleaner than&#010 setContents() when the Canvas is aggregating several values or dynamic expressions.&#010 Like so:&#010 <p>&#010 <pre>&#010 Slider.create({&#010     ID: "mySlider"&#010 });&#010&#010 Canvas.create({&#010     ID: "myCanvas",&#010     dynamicContents: true,&#010     contents: "The slider value is &#36;{mySlider.getValue()}."&#010 });&#010&#010 myCanvas.observe(mySlider, "valueChanged",&#010                  "observer.markForRedraw()");&#010 </pre>&#010 You can embed an arbitrary number of dynamic expressions in the contents string.  The&#010 search and replace is optimized for speed.&#010 <p>&#010 If an error occurs during the evaluation of one of the expressions, a warning is logged&#010 to the ISC Developer Console and the error string is embedded in place of the expected&#010 value in the Canvas.&#010 <p>&#010 The value of a function is its return value.  The value of any variable is the same as&#010 that returned by its toString() representation.&#010 <p>&#010 Inside the evaluation contentext, <code>this</code> points to the canvas instance that&#010 has the dynamicContents string as its contents - in other words the canvas instance on&#010 which the template is declared. */
		dynamicContents: Boolean;

		/** Controls widget visibility when the widget is initialized. See Visibility type for&#010      details. */
		visibility: Visibility;

		/** When this widget is dragged, if its dragAppearance is <code>"target"</code>, should&#010 we show a shadow behind the canvas during the drag. */
		showDragShadow: Boolean;

		/** If multiple widgets in the same Layout have ${isc.DocUtils.linkForRef('attr:Canvas.canAdaptWidth','adaptive width')},&#010 <code>adaptiveWidthPriority</code> can be set to indicate which of the components should be &#010 given priority access to space.&#010 <p>&#010 The widget with the highest priority setting will be offered surplus space first, and asked&#010 to give up space last.  Lack of a priority setting is treated as zero.  Any adaptive widgets&#010 with the same priority setting will be asked to give up or release space according to their&#010 order in ${isc.DocUtils.linkForRef('attr:Layout.members')}. */
		adaptiveWidthPriority: number /* integer */;

		/** Will this Canvas fire hover events when the user hovers over it, or one of its children? */
		canHover: boolean;

		/** If <code>this.showHover</code> is true, this property can be used to customize the&#010 vertical alignment of content in the hover canvas. */
		hoverVAlign: VerticalAlignment;

		/** Is it possible that a call to ${isc.DocUtils.linkForRef('method:Canvas.redraw')} on this widget will change its &#010 size?&#010 <P>&#010 Used by framework layout code when determining whether a component which has been&#010 ${isc.DocUtils.linkForRef('method:Canvas.markForRedraw','marked as dirty')} needs an immediate redraw to determine&#010 its drawn size.&#010 <P>&#010 If unset, default behavior assumes any component with overflow set to "visible" &#010 may change size on redraw, and any component with overflow set to "hidden", "scroll",&#010 or "auto" will not. This property overrides that behavior, and may be used to indicate&#010 that some component with non visible overflow can change size on redraw.&#010 An example use case would be a custom component with an override to explicitly &#010 resize the component as part of the redraw() flow. */
		sizeMayChangeOnRedraw: Boolean;

		/** When this Canvas is included as a member in a Layout, extra blank space that should be left&#010 after this member in a Layout. */
		extraSpace: number /* positiveInteger */;

		/** Whether an ${isc.DocUtils.linkForRef('class:EdgedCanvas')} should be used to show image-based edges around this&#010 component. */
		showEdges: Boolean;

		/** The minimum speed in pixels per second that must be reached for momentum scrolling to kick in.&#010 This setting only applies to touch-enabled devices. */
		momentumScrollMinSpeed: number /* double */;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.showShadow')} is true, should we use the css <code>box-shadow</code> property&#010 (where supported) to achieve the shadow?&#010 <P>&#010 Set this property to false to switch to a media-based approach, achieved by&#010 rendering the ${isc.DocUtils.linkForRef('attr:Canvas.shadowImage')} in an automatically generated peer.&#010 This approach is also used regardless of this property value in older browsers &#010 where the css <code>box-shadow</code> property isn't supported.&#010 <P>&#010 See also ${isc.DocUtils.linkForRef('attr:Canvas.shadowColor')}, ${isc.DocUtils.linkForRef('attr:Canvas.shadowDepth')},&#010 ${isc.DocUtils.linkForRef('attr:Canvas.shadowOffset')}, ${isc.DocUtils.linkForRef('attr:Canvas.shadowSoftness')} and ${isc.DocUtils.linkForRef('attr:Canvas.shadowSpread')} */
		useCSSShadow: boolean;

		/** Flag to disable snapping to alignment when this Canvas is dragged when &#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is enabled on this Canvas' parent.&#010 <p>&#010 To control snapping to align for the children dragged <i>within</i> this Canvas, see&#010 ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} instead. */
		snapToAlign: Boolean;

		/** Should this canvas print its children absolutely positioned when generating&#010 ${isc.DocUtils.linkForRef('classMethod:Canvas.getPrintHTML','printable HTML')}.&#010 <P>&#010 By default explicitly specified absolute positioning and sizing is ignored when generating&#010 print HTML. This is done intentionally: there is no way for the framework to predict how&#010 explicit sizes will translate to a the printed page and if HTML for printing includes&#010 the same absolute positioning and sizing as is displayed within an application it is very&#010 common to encounter undesirable effects, such as seeing tables get broken over several&#010 pages horizontally when there is enough room to print them on a single page of paper.&#010 <P>&#010 In some cases, however, a developer may wish to have explicit sizing and positioning&#010 respected within the print-view.&#010 Setting this attribute to <code>true</code> will cause this to occur. */
		printChildrenAbsolutelyPositioned: Boolean;

		/** Defaults for the ${isc.DocUtils.linkForRef('attr:Canvas.componentMask')} autoChild.&#010 Default properties include ${isc.DocUtils.linkForRef('attr:Canvas.backgroundColor')} being set to <code>"black"</code> and&#010 ${isc.DocUtils.linkForRef('attr:Canvas.opacity')} being set to <code>20</code>. */
		componentMaskDefaults: Canvas /* Canvas Properties */;

		/** When nodes are added to an EditContext, should they be masked by setting&#010 ${isc.DocUtils.linkForRef('attr:EditProxy.useEditMask')} <code>true</code> if not explicitly set? */
		autoMaskComponents: Boolean;

		/** Number of pixels the top of the widget is offset down from its default drawing context&#010 (either its parent's top-left corner, or the document flow, depending on the value of&#010 the ${isc.DocUtils.linkForRef('attr:Canvas.position')} property).&#010 <P>&#010 Can also be set as a percentage, specified as a String ending in '%', eg, "50%".  In&#010 this case the top coordinate is considered as a percentage of the specified height of&#010 the ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parent')}. */
		top: Number | String /* Number or String */;

		/** Specifies how the background image should be tiled if this widget&#010 is larger than the image. It corresponds to the CSS <code>background-repeat</code>&#010 attribute.&#010 <p>&#010 The default of null means no <code>background-repeat</code> CSS will be&#010 written out.  See ${isc.DocUtils.linkForRef('type:BackgroundRepeat')} type for details on other settings.&#010 <p>&#010 NOTE: this setting directly sets the CSS property <code>background-repeat</code> but&#010 does not attempt to work around various known bugs with this setting, or lack of support&#010 in IE6.  If you need to apply CSS-based workarounds for browser limitations with&#010 this setting, it's best to do so via setting ${isc.DocUtils.linkForRef('attr:Canvas.styleName')}. */
		backgroundRepeat: BackgroundRepeat;

		/** This Canvas's "master" (the Canvas to which it was added as a peer), if any. */
		masterElement: Canvas;

		/** Prompt displayed in hover canvas if ${isc.DocUtils.linkForRef('attr:Canvas.showHover','showHover')} is true. */
		prompt: HTMLString;

		/** Whether native drag selection of contained text is allowed within this Canvas.&#010 <P>&#010 Note that setting this property to <code>false</code> will not avoid text selection&#010 which is initiated outside this Canvas from continuing into this Canvas, even if text&#010 selection began in another Canvas. */
		canSelectText: Boolean;

		/** if ${isc.DocUtils.linkForRef('attr:Canvas.showHover')} is true, this property will cause the specified &#010 ${isc.DocUtils.linkForRef('attr:Canvas.hoverWidth')} to be treated as a minimum width for the hover. If the&#010 hover content string exceeds this, the hover will expand to accomodate it&#010 up to ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitMaxWidth')} (without the text wrapping).&#010 <P>&#010 Using this settings differs from simply disabling wrapping via &#010 ${isc.DocUtils.linkForRef('attr:Canvas.hoverWrap','hoverWrap:false')} as the content will wrap if the&#010 ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitMaxWidth')} is exceeded. */
		hoverAutoFitWidth: Boolean;

		/** Sets a <code>dragType</code> for this widget used, to be compared to&#010 ${isc.DocUtils.linkForRef('attr:Canvas.dropTypes','dropTypes')} on possible drop target widgets.  See&#010 ${isc.DocUtils.linkForRef('attr:Canvas.dropTypes')} for a full explanation. */
		dragType: String;

		/** If <code>this.showHover</code> is true, this property can be used to customize the&#010 alignment of content in the hover canvas. */
		hoverAlign: Alignment;

		/** This Canvas's immediate parent, if any.&#010 <BR>&#010 Can be initialized, but any subsequent manipulation should be via&#010 ${isc.DocUtils.linkForRef('method:Canvas.addChild','addChild()')} and ${isc.DocUtils.linkForRef('method:Canvas.removeChild','removeChild()')} calls&#010 on the parent. */
		parentElement: Canvas;

		/** If <code>this.showHover</code> is true, should the hover canvas be shown with opacity&#010 other than 100? */
		hoverOpacity: number;

		/** Array of all Canvii that are peers of this Canvas.&#010 <P>&#010 Use ${isc.DocUtils.linkForRef('method:Canvas.addPeer')} and ${isc.DocUtils.linkForRef('method:Canvas.removePeer')} to add and remove peers after a Canvas&#010 has been created/drawn. */
		peers: Canvas[] /* Array of Canvas */;

		/** If <code>this.showHover</code> is true, this property can be used to specify the&#010 css style to apply to the hover canvas. */
		hoverStyle: CSSStyleName;

		/** See ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')}.  This setting enables or disables snapping on center&#010 alignment only. */
		childrenSnapCenterAlign: Boolean;

		/** When ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapAlign')} is enabled, list of candidates to check for alignment.&#010 <p>&#010 If a list of <code>snapAlignCandidates</code> is never provided, the default is to use all&#010 children that are not explicitly excluded via ${isc.DocUtils.linkForRef('attr:Canvas.isSnapAlignCandidate')}, including&#010 automatically adding newly added children as candidates, and ignoring children that have&#010 been removed.  Use ${isc.DocUtils.linkForRef('method:Canvas.addSnapAlignCandidate')} and ${isc.DocUtils.linkForRef('method:Canvas.removeSnapAlignCandidate')} to add&#010 and remove special candidates while retaining all children as default candidates.&#010 <p>&#010 Possible candidates which are not drawn or are hidden are automatically ignored. */
		snapAlignCandidates: Canvas[] /* Array of Canvas */;

		/** The CSS class applied to this widget as a whole. */
		styleName: CSSStyleName;

		/** Position this widget such that it is aligned with ("snapped to") an edge of its&#010 ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master')} (if specified), or its&#010 ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parent canvas')}.&#010 <P>&#010 Note that this property also impacts the sizing of this widget. If this widgets size&#010 is specified as a percent value, and has no explicit&#010 ${isc.DocUtils.linkForRef('attr:Canvas.percentSource')}, sizing will be calculated based on the size of the&#010 ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')} when snapTo is set.&#010 <P>&#010 Possible values: BR, BL, TR, TL, R, L, B, T, C where B=Bottom, T=Top, L=Left, R=right&#010 and C=center&#010 <P>&#010 Standard snapTo behavior will attach the outer edge of the widget to the parent or master&#010 element - for example setting <code>snapTo</code> to <code>"B"</code> would align the&#010 bottom edge of this component with the bottom edge of the master or parent element&#010 (and center this component horizontally over its master or parent element).&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapEdge')} can be specified to change this behavior allowing the developer&#010 to, for example, align the top edge of this component with the bottom edge of its&#010 ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')}.&#010 <P>&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapOffsetLeft')} and ${isc.DocUtils.linkForRef('attr:Canvas.snapOffsetTop')} may also be specified to&#010 offset the element from exact snapTo alignment. */
		snapTo: String;

		/** Indicates that this component is able to render itself at multiple possible sizes, in order&#010 to fit into less space when very little space is available, or to display more information&#010 or provide more immediate access to functionality when more space is available.&#010 <p>&#010 Unlike simply indicating a flexible size via width:"*", setting <code>canAdaptWidth</code>&#010 indicates that a component has 2 (or more) different ways of rendering itself with different&#010 <i>discrete</i> sizes, but does not have the ability to use every additional available pixel.&#010 <p>&#010 For example, a menu embedded in a toolbar might show as only a fixed-size icon which reveals&#010 menu options when clicked, or if enough space is available, could show all of the menu&#010 options directly in the toolbar.  In this example, the menu should either be allocated just&#010 enough space for an icon, or enough space for <i>all</i> options to appear inline; any other&#010 amount of space being allocated is just a waste.&#010 <p>&#010 When a component with <code>canAdaptWidth</code> is part of a Layout, ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')}&#010 will be called every time component sizes are being calculated, passing a positive or&#010 negative pixel value:  &#010 <ul>&#010 <li> a <i>positive</i> pixel value indicates a surplus - all other component's minimum sizes&#010      can be accommodated, including any ${isc.DocUtils.linkForRef('attr:Canvas.minWidth')} declared on the&#010      <code>canAdaptWidth</code> component itself&#010 <li> a <i>negative</i> pixel value indicates that the containing layout is going to be&#010      forced to ${isc.DocUtils.linkForRef('type:Overflow')} (introduce scrollbars, clip content, etc) unless some&#010      component or set of components gives up at least this many pixels&#010 </ul>&#010 <p>&#010 If a non-zero value is returned from <code>adaptWidthBy</code>, this means that the&#010 component is willing to shrink or expand by that many pixels.  Returning 0 means that the&#010 component is unable to reduce size further, or for a surplus, cannot make good use of the&#010 surplus space.&#010 <p><ul>&#010 <li>A call to ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')} may surrender as many pixels as desired&#010 (as long as the widget won't drop below its minimum allowed width), no matter whether a&#010 positive (surplus) or negative (overflow) pixel value is supplied, but&#010 <li>A call to ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')} may not increase its size by more than the number of&#010 offered pixels - so if an overflow is present, it may not increase its size at all.&#010 </ul>&#010 <p>&#010 Note that when the initial width is specified as a stretch size (e.g. "*"), then after&#010 ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')} is called, the Framework will stretch (but not shrink) the&#010 member like any other stretch-size Layout member, but the <code>unadaptedWidth</code>&#010 argument will always reflect the unstretched width requested by the previous call to&#010 ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')}.  This behavior may be disabled by specifying the initial&#010 width as a number, or leaving it unspecified.&#010 <p>&#010 Caution: you must either determine the current size of the canvas by maintaining your own&#010 internal state, or use the <code>unadaptedWidth</code> parameter passed to &#010 ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')}.  You must not call ${isc.DocUtils.linkForRef('method:Canvas.getWidth')} or ${isc.DocUtils.linkForRef('method:Canvas.getVisibleWidth')} &#010 on the canvas itself inside ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')} as the size is in the processing of&#010 being determined, but you may draw children or call ${isc.DocUtils.linkForRef('method:Canvas.getVisibleWidth')} on them, as&#010 we guarantee that the adaptive-width canvas is drawn before the first call to &#010 ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')}.  An example of drawing children in ${isc.DocUtils.linkForRef('method:Canvas.adaptWidthBy')} to&#010 compute overall width may be seen in the&#010 ${isc.DocUtils.linkForExampleId('inlinedMenuMobileSample', 'Inlined Menu Mobile Sample')}.&#010 <p>&#010 Note that reasonable settings for ${isc.DocUtils.linkForRef('attr:Canvas.minWidth')} should be applied to all other&#010 flexible-sized members of a layout where a <code>canAdaptWidth</code> component appears,&#010 because when too little space is available, a <code>canAdaptWidth</code> component will&#010 absorb all available space until minimums for other components are hit (or the&#010 <code>canAdaptWidth</code> component reaches its maximum size).  If more than one&#010 <code>canAdaptWidth</code> component is present, ${isc.DocUtils.linkForRef('attr:Canvas.adaptiveWidthPriority')} to give priority&#010 to a particular component when allocating space.&#010 <p>&#010 All of the above behaviors are exactly the same for height, using&#010 ${isc.DocUtils.linkForRef('attr:Canvas.canAdaptHeight')} and ${isc.DocUtils.linkForRef('method:Canvas.adaptHeightBy')}. */
		canAdaptWidth: Boolean;

		/** ${isc.DocUtils.linkForRef('attr:Canvas.ID')} of the component that gathers the context for evaluation of criteria-based&#010 rules specified by properties such as ${isc.DocUtils.linkForRef('attr:FormItem.visibleWhen')}.&#010 <p>&#010 If not specified, this component will search through it's ${isc.DocUtils.linkForRef('attr:Canvas.parentCanvas')} chain until it&#010 either reaches the top or reaches a parent marked ${isc.DocUtils.linkForRef('attr:Canvas.isRuleScope')}.  Determination of the&#010 <code>ruleScope</code> happens when the component is first drawn.&#010 <p>&#010 The component designated as the <code>ruleScope</code> manages a nested data structure called&#010 the "rule context" which contains information from all ${isc.DocUtils.linkForRef('interface:DataBoundComponent')}s that are&#010 registered with the <code>ruleScope</code>.  By specifying ${isc.DocUtils.linkForRef('attr:Criterion.fieldName')} as a&#010 ${isc.DocUtils.linkForRef('type:DataPath')}, AdvancedCriteria defined in properties such as&#010 ${isc.DocUtils.linkForRef('attr:FormItem.visibleWhen')} can access any part of the rule context.&#010 <p>&#010 By default, the rule context contains data as follows:&#010 <ul>&#010 <li> any <code>DataBoundComponent</code> that has a DataSource contributes the values of the&#010   selected record or record being edited under the ID of the DataSource. For any collision&#010   an editable display (such as a form or editable grid) wins over a static display (such as&#010   a non-editable grid with a selection.)&#010 <li> any ListGrid or other component that manages a selection and has been assigned an explicit&#010   ${isc.DocUtils.linkForRef('attr:Canvas.ID')} will contribute the values of the selected record under&#010   <code>&lt;componentId&gt;.selectedRecord</code>, and also contributes 3 flags for checking&#010   for selection: <code>anySelected</code>, <code>multiSelected</code>,&#010   <code>numSelected</code>.&#010 <li> any DynamicForm or other component that edits values and has been assigned an explicit&#010   ${isc.DocUtils.linkForRef('attr:Canvas.ID')} contributes its current values under&#010   <code>&lt;componentId&gt;.values</code>, and contributes a flag <code>hasChanges</code>.&#010 <li> any DynamicForm or ListGrid that has been assigned an explicit ${isc.DocUtils.linkForRef('attr:Canvas.ID')}&#010   contributes a value <code>&lt;componentId&gt;.focusField</code>. When present the value&#010   indicates the component has focus along with the name of the field that has focus. Its absense&#010   indicates the component does not have focus at all.&#010 <li> any ListGrid that has been assigned an explicit ${isc.DocUtils.linkForRef('attr:Canvas.ID')} contributes a flag&#010   <code>isGrouped</code> under <code>&lt;componentId&gt;</code>.&#010 </ul>&#010 For example, given a screen where:&#010 <ul>&#010 <li> a ListGrid with ID "itemGrid" and DynamicForm with ID "itemForm" are both bound to the&#010   <code>supplyItem</code> sample DataSource&#010 <li> the ListGrid has a single selection, and the record selected in the ListGrid is being&#010   edited in the form, and has been changed&#010 </ul>&#010 The default rule context available from ${isc.DocUtils.linkForRef('method:Canvas.getRuleContext')}, expressed as JSON, would be:&#010 <pre>&#010 {&#010  supplyItem : {&#010     itemID : "654321",&#010     itemName : "Sewing Machine",&#010     price : 5.50, // note: user change&#010     <i>..other properties..</i>&#010  },&#010  itemForm.values : {&#010     itemID : "654321",&#010     itemName : "Sewing Machine",&#010     price : 5.50, // note: user change&#010     <i>..other properties..</i>&#010  },&#010  itemForm.focusField : "itemName",&#010  itemForm.hasChanges : true,&#010  itemGrid.selectedRecord : {&#010     itemID : "654321",&#010     itemName : "Sewing Machine",&#010     price : 3.50, // note: old price&#010     <i>..other properties..</i>&#010  },&#010  itemGrid.anySelected : true,&#010  itemGrid.multiSelected : false,&#010  itemGrid.numSelected : 1,&#010  itemGrid.isGrouped : false&#010 }&#010 </pre> */
		ruleScope: String;

		/** Causes this canvas to snap to its parent's grid when resizing.&#010 Note that this value defaults to the Canvas's&#010 ${isc.DocUtils.linkForRef('attr:Canvas.snapToGrid','snapToGrid')} value if undefined. */
		snapResizeToGrid: boolean;

		/** Whether to use the browser's native scrollbars or SmartClient-based scrollbars.&#010 <P>&#010 SmartClient-based scrollbars are skinnable, giving you complete control over look and&#010 feel.  SmartClient-based scrollbars also enable some interactions not possible with&#010 native scrollbars, such as ${isc.DocUtils.linkForRef('attr:ListGrid.fixedRecordHeights','variable height records')}&#010 in grids in combination with ${isc.DocUtils.linkForRef('attr:ListGrid.dataPageSize','data paging')}.&#010 <P>&#010 Native browser scrollbars are slightly faster simply because there are less SmartClient&#010 components that need to be created, drawn and updated.  Each visible SmartClient-based&#010 scrollbar on the screen has roughly the impact of two StretchImgButtons.&#010 <P>&#010 SmartClient is always aware of the size of the scrollbar, regardless of whether native&#010 or custom scrollbars are used, and regardless of what operating system and/or operating&#010 system "theme" or "skin" is in use.  This means SmartClient will correctly report the&#010 ${isc.DocUtils.linkForRef('method:Canvas.getViewportHeight','viewport size')}, that is, the interior area of the&#010 widget excluding space taken by scrollbars, which is key for exactly filling a component&#010 with content without creating unnecessary scrolling.&#010 <P>&#010 The <code>showCustomScrollbars</code> setting is typically overridden in load_skin.js in&#010 order to change the default for all SmartClient components at once.&#010 This may be achieved via the static ${isc.DocUtils.linkForRef('classMethod:Canvas.setShowCustomScrollbars')} method or&#010 via a simple addProperties block, like so:&#010 <pre>&#010     isc.Canvas.addProperties({ showCustomScrollbars:false });&#010 </pre>&#010 <p>&#010 On ${isc.DocUtils.linkForRef('classAttr:Browser.isTouch','touch devices')}, custom scrollbars are disabled in favor of enabling&#010 native touch scrolling if available. However, custom scrollbars <em>and</em> native touch&#010 scrolling can be enabled for the component by setting ${isc.DocUtils.linkForRef('attr:Canvas.alwaysShowScrollbars')}&#010 to <code>true</code>. */
		showCustomScrollbars: boolean;

		/** Indicates that this object can be dropped on top of other widgets. Only valid if&#010 canDrag or canDragReposition is true. */
		canDrop: Boolean;

		/** Governs the model to be used when sizing canvases with percentage width or height, or&#010 positioning widgets with a specified ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo')}.&#010 <P>&#010 Only affects widgets with a a specified ${isc.DocUtils.linkForRef('attr:Canvas.percentSource','percentSource')}, or&#010 widgets that have ${isc.DocUtils.linkForRef('attr:Canvas.snapTo')} set and are peers of some&#010 ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','other canvas')}.&#010 <P>&#010 Determines whether the coordinates used for sizing (for percentage sized widgets) and&#010 positioning (if <code>snapTo</code> is set) should be relative to the visible size or the&#010 viewport size of the percentSource or ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')} widget. */
		percentBox: PercentBoxModel;

		/** Specifies the cursor image to display when the user drags a droppable canvas&#010      over this if it is not a valid drop target for the event and&#010      ${isc.DocUtils.linkForRef('classAttr:EventHandler.showNoDropIndicator')} is true. */
		noDropCursor: Cursor;

		/** The CSS class applied to this widget as a whole. */
		className: CSSStyleName;

		/** Default acceleration function for performing an animated hide.  If unset, &#010 <code>this.animateAcceleration</code> will be used by default instead */
		animateHideAcceleration: AnimationAcceleration;

		/** If <code>this.showHover</code> is true, this property can be used to customize the&#010 whether content in the hover canvas is displayed in a single line, or wraps.&#010 <P>&#010 Note that if developers wish to have hovers expand horizontally to fit their&#010 text without wrapping *up to some maximum*, and then wrap rather than exceeding&#010 that maximum, the ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitWidth')} and ${isc.DocUtils.linkForRef('attr:Canvas.hoverAutoFitMaxWidth')} attributes&#010 may be used instead of simply setting hoverWrap to false. */
		hoverWrap: boolean;

		/** Sets the style for the grouping label. Only necessary when ${isc.DocUtils.linkForRef('attr:Canvas.isGroup')}&#010 is set to true.&#010 <p>&#010 Note that ${isc.DocUtils.linkForRef('attr:Canvas.groupLabelBackgroundColor')} overrides any background-color of this style. */
		groupLabelStyleName: CSSStyleName;

		/** Visual appearance to show when the object is being dragged. May be overridden for&#010 dragResize or dragReposition events via ${isc.DocUtils.linkForRef('attr:Canvas.dragResizeAppearance')}&#010 and ${isc.DocUtils.linkForRef('attr:Canvas.dragRepositionAppearance')}. */
		dragAppearance: DragAppearance;

		/** If <code>this.showHover</code> is true and ${isc.DocUtils.linkForRef('method:Canvas.getHoverComponent')} is implemented, should&#010 the hoverCanvas returned from it be automatically destroyed when it is hidden?&#010 <P>&#010 The default of null indicates that the component <b>will</b> be automatically&#010 destroyed.  Set to false to prevent this. */
		hoverAutoDestroy: boolean;

		/** When drag resizing is enabled via ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize')}, restricts resizes to only&#010 certain edges or corners.&#010 <P>&#010 The default of null indicates the widget can be resized from any corner or edge (if&#010 <code>canDragResize</code> is true).&#010 <P>&#010 To restrict resizing to only certain corners, set <code>resizeFrom</code> to an Array of&#010 ${isc.DocUtils.linkForRef('type:EdgeName')}s. */
		resizeFrom: EdgeName[] /* Array of EdgeName */;

		/** If the widget has drag resize configured on one or more of it's edges, and the&#010 edgeMarginSize is large enough that the remaining space is less than&#010 <code>minNonEdgeSize</code>, the edgeMarginSize will be reduced such that the non-edge&#010 part of the widget is at least 1/3 of the total space (with two draggable edges) or half&#010 of it (with one draggable edge). */
		minNonEdgeSize: number /* number */;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo')} is defined for this widget, this property can be used to&#010 specify an offset in px or percentage for the left coordinate of this widget.&#010 <P>&#010 For example if <code>snapTo</code> is specified as <code>"L"</code> and&#010 <code>snapOffsetLeft</code> is set to 6, this widget will be rendered 6px inside the left&#010 edge of its parent or master element. Alternatively if <code>snapTo</code> was set&#010 to <code>"R"</code>, a <code>snapOffsetLeft</code> value of -6 would cause the&#010 component to be rendered 6px inside the right edge of its parent or ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')}. */
		snapOffsetLeft: number /* integer */;

		/** The horizontal grid size to use, in pixels, when snap-to-grid is enabled. */
		snapHGap: number;

		/** If this widget supports drag-scrolling, This property specifies how many ms the&#010      user must hover over the drag-scroll threshold before scrolling begins. */
		dragScrollDelay: number;

		/** If set to true, the widget will be disabled. A widget is only considered enabled&#010 if it is individually enabled and all parents above it in the containment hierarchy&#010 are enabled. This allows you to enable or disable all components of a complex&#010 nested widget by enabling or disabling the top-level parent only. */
		disabled: boolean;

		/** Opacity of the edges.  Defaults to matching this.opacity.&#010 if ${isc.DocUtils.linkForRef('method:Canvas.setOpacity')} is called on a Canvas where edgeOpacity is set,&#010 edgeOpacity will be considered a percentage of the parent's opacity (so 50% opaque parent plus&#010 edgeOpacity 50 means 25% opaque edges) */
		edgeOpacity: number /* number */;

		/** Default time for performing an animated show.  If unset, <code>this.animateTime</code>&#010 will be used by default instead */
		animateShowTime: number;

		/** Indicates whether this widget can initiate custom drag-and-drop operations (other than&#010 reposition or resize). Normally ${isc.DocUtils.linkForRef('attr:Canvas.canDragReposition')} or ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize')} would&#010 be used instead of this property.&#010 <p>&#010 Note: this property may be manipulated by higher-level dragging semantics.&#010 <p>&#010 If ${isc.DocUtils.linkForRef('attr:Canvas.useNativeDrag')} is true and this widget has been drawn, then this widget must be&#010 ${isc.DocUtils.linkForRef('method:Canvas.redraw','redrawn')} in order for a change of the value of this attribute to take effect. */
		canDrag: Boolean;

		/** Whether to show a snap grid for this Canvas. Note that the grid is only shown&#010 when either ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapToGrid','childrenSnapToGrid')} or ${isc.DocUtils.linkForRef('attr:Canvas.childrenSnapResizeToGrid','childrenSnapResizeToGrid')}&#010 is <code>true</code>.&#010 <p>&#010 Grid is based on ${isc.DocUtils.linkForRef('attr:Canvas.snapHGap','snapHGap')} and ${isc.DocUtils.linkForRef('attr:Canvas.snapVGap','snapVGap')} properties. */
		showSnapGrid: Boolean;

		/** If ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo')} is defined to this widget, this property can be used to&#010 define which edge of this widget should be snapped to an edge of the master or parent&#010 element.&#010 <P>&#010 If unspecified the, default snapTo behavior is set up to align the "snapTo" edge of this&#010 widget with the snapTo edge of the master or parent. */
		snapEdge: String;

		/** Minimum height available to this Canvas.  See ${isc.DocUtils.linkForRef('attr:Canvas.minWidth')} for details of behavior. */
		minHeight: number;

		/** A dataPath may be specified on any canvas. This provides a straightforward way to display or&#010 edit complex nested data.&#010 <P>&#010 For components which support displaying or editing data values, (such as ${isc.DocUtils.linkForRef('class:DynamicForm')} or&#010 ${isc.DocUtils.linkForRef('class:ListGrid')} components), the dataPath may be set to specify how the components data is&#010 accessed. In this case the dataPath essentially specifies a nested object to edit - typically&#010 a path to a field value within a dataSource record. Note that a ValuesManager will be required&#010 to handle connecting the dataBoundcomponent to the appropriate sub object. This may be explicitly&#010 specified on the component, or a parent of the component, or automatically generated&#010 if a DataSource is specified on either the component or a parent thereof.&#010 <P>&#010 To provide a simple example - if a complex object existed with the following format:&#010 <pre>&#010 { companyName:"Some Company",&#010   address:{    street:"123 Main Street", city:"New York", state:"NY"  }&#010 }&#010 </pre>&#010 a developer could specify a DynamicForm instance with 'dataPath' set to "address" to edit&#010 the nested address object:&#010 <pre>&#010 isc.ValuesManager.create({&#010      ID:'vm',&#010      values: { companyName:"Some Company",&#010              address:{    street:"123 Main Street", city:"New York", state:"NY"  }&#010      }&#010 });&#010&#010 isc.DynamicForm.create({&#010      valuesManager:"vm",&#010      dataPath:"address",&#010      items:[{name:"street"}, {name:"city"}, {name:"state"}]&#010 });&#010 </pre>&#010 If a component is specified with a <code>dataPath</code> attribute but does not have an&#010 explicitly specified valuesManager, it will check its parent element chain for a specified&#010 valuesManager and automatically bind to that. This simplifies binding multiple components used&#010 to view or edit a nested data structure as the valuesManager needs only be defined once at a&#010 reasonably high level component. Here's an example of this approach:&#010 <pre>&#010 isc.ValuesManager.create({&#010      ID:'vm',&#010      values: { companyName:"Some Company",&#010              address:{    street:"123 Main Street", city:"New York", state:"NY"  }&#010      }&#010 });&#010&#010 isc.Layout.create({&#010      valuesManager:vm,&#010      members:[&#010          isc.DynamicForm.create({&#010              dataPath:"/",&#010              items:[{name:"companyName"}]&#010          }),&#010          isc.DynamicForm.create({&#010              dataPath:"address",&#010              items:[{name:"street"}, {name:"city"}, {name:"state"}]&#010          })&#010      ]&#010 });&#010 </pre>&#010 Note that in this case the valuesManager is specified on a Layout, which has no 'values'&#010 management behavior of its own, but contains items with a specified dataPath which do. In this&#010 example you'd see 2 forms allowing editing of the nested data structure.&#010 <P>&#010 dataPaths from multiple nested components may also be combined. For example:&#010 <pre>&#010 isc.ValuesManager.create({&#010      ID:'vm',&#010      values: { companyName:"Some Company",&#010              address:{    street:"123 Main Street", city:"New York", state:"NY"  }&#010              parentCompany:{&#010                  companyName:"Some Corporation",&#010                  address:{   street:"1 High Street", city:"New York", state:"NY" }&#010              }&#010      }&#010 });&#010&#010 isc.Layout.create({&#010      valuesManager:vm,&#010      members:[&#010          isc.DynamicForm.create({&#010              dataPath:"/",&#010              items:[{name:"companyName"}]&#010          }),&#010          isc.DynamicForm.create({&#010              dataPath:"address",&#010              items:[{name:"street"}, {name:"city"}, {name:"state"}]&#010          }),&#010          isc.Layout.create({&#010              dataPath:"parentCompany",&#010              members:[&#010                  isc.DynamicForm.create({&#010                      dataPath:"/",&#010                      items:[{name:"companyName", type:"staticText"}]&#010                  }),&#010                  isc.DetailViewer.create({&#010                      dataPath:"address",&#010                      fields:[{name:"street", name:"city", name:"state"}]&#010                  })&#010              ]&#010          })&#010      ]&#010 });&#010 </pre>&#010 In this example the detailViewer will display data from the <code>parentCompany.address</code>&#010 object within the base record.&#010 <P>&#010 Note that if a component has a specified  dataSource and shows child components with a&#010 specified dataPath, there is no need to explicitly declare a valuesManager at all. If a component&#010 with a dataPath has a dataSource, or an ancestor with a dataSource specified, it will, a&#010 valuesManager will automatically be generated on the higher level component (and be available as&#010 <code>component.valuesManager</code>). */
		dataPath: DataPath;

		/** See ${isc.DocUtils.linkForRef('attr:Canvas.adaptiveWidthPriority')}. */
		adaptiveHeightPriority: number /* integer */;

		/** Criteria to be evaluated to determine whether this Canvas should be visible.  Re-evaluated&#010 whenever data in the ${isc.DocUtils.linkForRef('attr:Canvas.ruleScope')} changes.&#010 <P>&#010 A basic criteria uses textMatchStyle:"exact". When specified in&#010 ${isc.DocUtils.linkForRef('group:componentXML','Component XML')} this property allows&#010 ${isc.DocUtils.linkForRef('group:xmlCriteriaShorthand','shorthand formats')} for defining criteria. */
		visibleWhen: AdvancedCriteria;

		/** Background color for the center section only.  Can be used as a surrogate background&#010 color for the decorated Canvas, if the Canvas is set to partially overlap the edges and&#010 hence can't show a background color itself without occluding media. */
		edgeCenterBackgroundColor: Color;

		/** If <code>this.canHover</code> is true, should we show the global hover canvas by default&#010 when the user hovers over this canvas? */
		showHover: Boolean;

		/** Should canvases with no ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parent canvas')} be moved to&#010 the end of the TabIndexManager tree on draw()?&#010 <P>&#010 If set to false, the tab-position will not be modified on draw.&#010 <P>&#010 This property is useful for cases where the tab position of a widget will be managed&#010 by some explicit tabIndex management code. */
		updateTabPositionOnDraw: boolean;

		/** Size for this component's horizontal dimension.&#010 <P>&#010 Can be a number of pixels, or a percentage like "50%". Percentage sizes are resolved to&#010 pixel values as follows:&#010 <UL>&#010 <LI>If a canvas has a specified ${isc.DocUtils.linkForRef('attr:Canvas.percentSource','percentSource')}, sizing will be&#010     a percentage of the size of that widget (see also ${isc.DocUtils.linkForRef('attr:Canvas.percentBox')}).</LI>&#010 <LI>Otherwise, if a canvas has a ${isc.DocUtils.linkForRef('method:Canvas.getMasterCanvas','master canvas')}, and&#010     ${isc.DocUtils.linkForRef('attr:Canvas.snapTo','snapTo')} is set for the widget, sizing will be a percentage of&#010     the size of that widget (see also ${isc.DocUtils.linkForRef('attr:Canvas.percentBox')}).</LI>&#010 <LI>Otherwise if this is a child of some other canvas, percentages will be based on the&#010     inner size of the ${isc.DocUtils.linkForRef('method:Canvas.getParentCanvas','parent canvas')}'s viewport.</LI>&#010 <LI>Otherwise, for top level widgets, sizing is calculated as a percentage of page size.</LI>&#010 </UL>&#010 Note that if a ${isc.DocUtils.linkForRef('attr:Canvas.maxWidth')} or ${isc.DocUtils.linkForRef('attr:Canvas.minWidth')} are specified&#010 (or ${isc.DocUtils.linkForRef('attr:Canvas.maxHeight')} / ${isc.DocUtils.linkForRef('attr:Canvas.minHeight')} for heights), these&#010 properties act as explicit pixel limits on the canvas' size. For example, a canvas&#010 with ${isc.DocUtils.linkForRef('attr:Canvas.maxWidth')} set to <code>500</code>, and width specified as &#010 "100%" will not render larger than 500 pixels in width even if there is more&#010 space available in the parent canvas or percentSource.&#010 <P>&#010 ${isc.DocUtils.linkForRef('class:Layout','Layouts')} may specially interpret percentage sizes on their children,&#010 and also allow "*" as a size.&#010 <P>&#010 Note that if ${isc.DocUtils.linkForRef('attr:Canvas.overflow','overflow')} is set to "visible", this size is a&#010 minimum, and the component may overflow to show all content and/or children.&#010 <P>&#010 If trying to establish a default width for a custom component, set&#010 ${isc.DocUtils.linkForRef('attr:Canvas.defaultWidth','defaultWidth')} instead. */
		width: Number | String /* Number or String */;

		/** Maximum width available to this Canvas. &#010 <p>&#010 The <code>maxWidth</code> and ${isc.DocUtils.linkForRef('attr:Canvas.maxHeight')} settings apply to:&#010 <ul>&#010 <li>For a canvas being managed as a member of a ${isc.DocUtils.linkForRef('class:Layout')}, the maximum size the&#010     layout should apply to the canvas.&#010 <li>For a canvas with a width or height specified as a percent value, a maximum&#010     numeric pixel value to limit how large the canvas is sized.&#010 <li> determining size for a Canvas in a ${isc.DocUtils.linkForRef('class:CanvasItem')} (<code>maxHeight</code> only)&#010 <li> end user ${isc.DocUtils.linkForRef('attr:Canvas.canDragResize','drag resizing')}&#010 </ul>&#010 Maximum sizes do not apply in various other circumstances where sizes are being&#010 determined, such as ${isc.DocUtils.linkForRef('attr:ListGrid.showRecordComponents','ListGrid recordComponents')}. */
		maxWidth: number;

		/** Default acceleration function for performing an animated move and resize.  If unset, &#010 <code>this.animateAcceleration</code> will be used by default instead */
		animateRectAcceleration: AnimationAcceleration;

		/** This flag controls whether we register the component as a maskable item with the&#010 EventHandler. If enabled, a backmask will be automatically created for the&#010 dragMoveTarget on the fly to avoid burnthrough e.g. by plugins or frames.&#010 <p>&#010 The ${isc.DocUtils.linkForRef('attr:Canvas.dragMaskType')} property controls what kind of mask is used in case&#010 useDragMask is enabled. */
		useDragMask: boolean;

	}


	export class CanvasStatic  extends BaseWidgetStatic {
	}


	/**
	 * &#010 Tabs are specified as objects, not class instances.  For example, when&#010 developing in JavaScript, a typical initialization block for a TabSet would look like&#010 this:&#010 <pre>&#010 TabSet.create({&#010     tabs: [&#010         {title: "tab1", pane: "pane1"},&#010         {title: "tab2"}&#010     ]&#010 });&#010 </pre>&#010 And in XML:&#010 <pre>&#010 &lt;TabSet&gt;&#010    &lt;tabs&gt;&#010        &lt;Tab title="tab1" pane="pane1"/&gt;&#010        &lt;Tab title="tab2"/&gt;&#010    &lt;/tabs&gt;&#010 &lt;/TabSet&gt;&#010 </pre>&#010 &#010  
	 */
	export class Tab  {
	}


	export class TabStatic  {
	}


	/**
	 * A subclass of Layout that applies a sizing policy along the vertical axis, interpreting&#010  percent and "*" sizes as proportions of the height of the layout. VLayouts will set any&#010  members that do not have explicit widths to match the layout. 
	 */
	export class VLayout  {
	}


	export class VLayoutStatic  {
	}




}