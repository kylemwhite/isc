/// <reference path="isc.classes.d.ts" />
/// <reference path="isc.interfaces.d.ts" />
/// <reference path="isc.types.d.ts" />

// Type definitions for Isomorphic SmartClient 11.1
// Project: https://gihub.com/kylemwhite/isc
// Definitions by: Kyle White <http://kmwTech.com>
// Definitions: https://gihub.com/DefinitelyTyped/DefinitelyTyped
// Generated: 11/24/2017 7:00:12 AM by KWhite
// Generated from SmartClient version SNAPSHOT_v12.0d_2017-11-24

declare namespace Isc {

    
	/**
	 * Definition of a simple linear gradient defined by 2 colors and a SimpleGradient.direction','direction. 
	 */
	export interface SimpleGradient extends Gradient {
		 // ref="attr:SimpleGradient.direction"
		/**
		 * (Read only) Angle of the direction vector in degrees. The default of 0.0 causes the gradient to sweep
		 * from the start color on the left to the end color on the right. Positive direction angles
		 * correspond to clockwise rotations of the default gradient.
		 * Flags: IR
		 */
		 direction?: Float /* float */;
		 // ref="attr:SimpleGradient.endColor"
		/**
		 * (Read only) The end color of the gradient.
		 * Flags: IR
		 */
		 endColor?: CSSColor;
		 // ref="attr:SimpleGradient.startColor"
		/**
		 * (Read only) The start color of the gradient.
		 * Flags: IR
		 */
		 startColor?: CSSColor;
	} // SimpleGradient

	export interface SimpleGradientStatic extends GradientStatic {
	} // SimpleGradientStatic


	/**
	 * Properties for a navigation item in a NavPanel. 
	 */
	export interface NavItem extends TreeNode {
		 // ref="attr:NavItem.customStyle"
		/**
		 * (Read only) CSS style name used for this NavItem. If set and this NavItem
		 * is a NavItem.isHeader','header, this overrides the NavPanel's
		 * NavPanel.headerStyle.
		 * Flags: IR
		 */
		 customStyle?: CSSStyleName;
		 // ref="attr:NavItem.icon"
		/**
		 * (Read only) Icon to show for this NavItem. If not specified, the
		 * TreeGrid.folderIcon','navGrid\'s folderIcon is used.
		 * Flags: IR
		 */
		 icon?: SCImgURL;
		 // ref="attr:NavItem.id"
		/**
		 * (Read only) An optional ID for this NavItem. If specified, this must be unique within
		 * the NavPanel.
		 * Flags: IR
		 */
		//  id?: Identifier;   Skipped because the property override a property in the base class with a different type
		 // ref="attr:NavItem.isHeader"
		/**
		 * (Read only) If set, this NavItem will be styled like a header. In this case NavItem.pane
		 * is ignored and nothing happens when the header is clicked. However, NavItem.items can
		 * still be configured to place items hierarchically under the header.
		 * Flags: IR
		 */
		 isHeader?: boolean | null /* Boolean */;
		 // ref="attr:NavItem.isSeparator"
		/**
		 * (Read only) If set, this NavItem will be styled as a separator. A separator does not
		 * have a NavItem.pane','pane and nothing happens when the separator is clicked.
		 * Flags: IR
		 */
		 isSeparator?: boolean | null /* Boolean */;
		 // ref="attr:NavItem.items"
		/**
		 * (Read only) Optional subitems of this NavItem.
		 * Flags: IR
		 */
		 items?: Array<NavItem> /* Array of NavItem */;
		 // ref="attr:NavItem.pane"
		/**
		 * (Read only) Component to display in the NavPanel.navDeck when this NavItem is
		 * selected.
		 * 
		 * A component can be provided directly, or its ID can be provided.
		 * Flags: IR
		 */
		 pane?: Canvas | Identifier;
		 // ref="attr:NavItem.title"
		/**
		 * (Read only) Title to show for this NavItem.
		 * Flags: IR
		 */
		 title?: HTMLString;
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
		 // ref="attr:RelativeDate.rangePosition"
		/**
		 * (Read only) If this relative date has its value specified as a RelativeDateShortcut which doesn't
		 * specify an exact time-period boundary - for example "$yesterday", this attribute
		 * may be set to specify whether the date should be interpreted as the start or end boundary of
		 * the time period.
		 * Flags: IR
		 */
		 rangePosition?: RelativeDateRangePosition;
		 // ref="attr:RelativeDate.value"
		/**
		 * (Read only) The value of this relative date, specified as a RelativeDateString 
		 * or RelativeDateShortcut.
		 * Flags: IR
		 */
		 value?: RelativeDateString | RelativeDateShortcut;
	} // RelativeDate

	export interface RelativeDateStatic {
	} // RelativeDateStatic


	/**
	 * Configuration object for effect to apply during an animated show or hide. 
	 */
	export interface AnimateShowEffect {
		 // ref="attr:AnimateShowEffect.effect"
		/**
		 * (Read only) Effect to apply
		 * Flags: IR
		 */
		 effect?: AnimateShowEffectId;
		 // ref="attr:AnimateShowEffect.endsAt"
		/**
		 * (Read only) For hide animations of type "wipe and 
		 * "slide" this attribute specifies where the wipe / slide should finish.
		 * Valid options are "T" (vertical animation upwards to the top of the canvas,
		 * the default behavior) and "L" (horizontal animation to the left of the
		 * canvas).
		 * Flags: IR
		 */
		 endsAt?: String;
		 // ref="attr:AnimateShowEffect.startFrom"
		/**
		 * (Read only) For show animations of type "wipe" and
		 * "slide" this attribute specifies where the wipe / slide should originate.
		 * Valid values are "T" (vertical animation from the top down, the 
		 * default behavior), and "L" (horizontal animation from the left side).
		 * Flags: IR
		 */
		 startFrom?: String;
	} // AnimateShowEffect

	export interface AnimateShowEffectStatic {
	} // AnimateShowEffectStatic


	/**
	 * The isc object contains global methods and objects of the Isomorphic SmartClient
	 * framework.
	 * 
	 * See also simpleNamesMode','Simple Names mode. 
	 */
	export interface isc {

		/* Instance Method Overrides */
		/**  
		 * (Advanced)  Returns the (offset) left-coordinate of an icon within its containing widget.
		 * 
		 * @param {Object} icon - icon definition
		 * @return {number} icon left position in px
		 */
		getIconLeft?(icon:Object): number; 

		/**  
		 * (Advanced)  Returns the size / position of an icon on the page as an array of coordinates.
		 * 
		 * @param {Object} icon - icon definition for the icon you want to determine the position of (defaults to first icon in this.icons).
		 * @return {Array<any>} four element array representing the Left, Top, Width, and Height of                      the icon in px.
		 */
		getIconPageRect?(icon:Object): Array<any> /* Array */; 

		/**  
		 * (Advanced)  Returns the size / position of an icon with respect to the widget rendering out the
		 * form item as an array of coordinates.
		 * 
		 * @param {Object} icon - icon definition for the icon you want to determine the position of (defaults to first icon in this.icons).
		 * @return {Array<any>} four element array representing the Left, Top, Width, and Height of                      the icon in px.
		 */
		getIconRect?(icon:Object): Array<any> /* Array */; 

		/**  
		 * (Advanced)  Returns the (offset) top-coordinate of an icon within its containing widget.
		 * 
		 * @param {Object} icon - icon definition
		 * @return {number} icon top position in px
		 */
		getIconTop?(icon:Object): number; 

	} // isc

	export interface iscStatic {

	/* Methods */
		/**  
		 * 
		 * Copy any properties that do not already have a value in destination. Null and zero values
		 * are not overwritten, but 'undef' values will be.
		 * 
		 * 
		 * @param {Object} destination - Object to which properties will be added.
		 * @param {Object} source - Object from which properties will be added.
		 * @return {Object} The destination object is returned.
		 */
		addDefaults(destination:Object, source:Object): Object; 

		// staticMethod:isc.addProperties skipped because it has been excluded due to: Hard-coded list: Because A rest parameter must be of an array type..

		/**  
		 *  Show a modal dialog with a message, icon, and "Yes" and "No" buttons. See Dialog.askIcon.
		 * 
		 * The callback will receive boolean true for a Yes button click, boolean false for a No button
		 * click, or null if the Dialog is dismissed via the close button.
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {Callback} callback - Callback to fire when the user clicks a button to dismiss the dialog.
		 * This has the single parameter 'value', indicating the
		 * value returned by the Warn dialog from 'okClick()' etc.
		 * @param {DialogProps} properties - additional properties for the Dialog. To set Dialog.buttons','custom buttons for
		 * the Dialog, set properties.buttons to an array
		 * of buttons
		 * eg: { buttons : [Dialog.OK, Dialog.CANCEL] }
		 */
		ask(message:String, callback?:Callback, properties?:DialogProps /* Dialog Properties */): void; 

		/**  
		 *  Show a modal dialog with a text entry box, asking the user to enter a value.
		 * 
		 * As with other convenience methods that show Dialogs, such as isc.warn,
		 * the dialog is shown and the function immediately returns. When the user responds, the
		 * provided callback is called.
		 * 
		 * If the user clicks OK, the value typed in is passed to the callback (including the empty
		 * string ("") if nothing was entered. If the user clicks cancel, the value passed to the
		 * callback is null.
		 * 
		 * A default value for the text field can be passed via properties.defaultValue.
		 * 
		 * Keyboard focus is automatically placed in the text entry field, and hitting the enter key is
		 * the equivalent of pressing OK.
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {Callback} callback - Callback to fire when the user clicks a button to dismiss the dialog.
		 * This has the single parameter 'value', indicating the
		 * user entry, or null if cancel was pressed or the window
		 * closed
		 * @param {DialogProps} properties - additional properties for the Dialog. To set Dialog.buttons','custom buttons for
		 * the Dialog, set properties.buttons to an array of
		 * buttons
		 * eg: { buttons : [Dialog.OK, Dialog.CANCEL] }
		 */
		askForValue(message:String, callback?:Callback, properties?:DialogProps /* Dialog Properties */): void; 

		/**  
		 * 
		 * Clear the modal prompt being shown to the user.
		 * 
		 * 
		 */
		clearPrompt(): void; 

		/**  
		 *  Create a deep clone of an object that can be edited without affecting the original
		 * 
		 * All mutable types, including Objects, Arrays and Dates, are copied. All immutable types
		 * (Number, String, etc) are just preserved by reference.
		 * 
		 * Only JavaScript built-in types may be cloned. SmartClient UI widgets do not support
		 * cloning, instead, use Class.create to make a new component with similar
		 * configuration.
		 * 
		 * Does not handle looping references (will infinite loop).
		 * 
		 * 
		 * @param {Object} object - object to clone
		 * @return {Object} cloned object
		 */
		clone(object:Object): Object; 

		/**  
		 *  Show a modal dialog with a message, icon, and "OK" and "Cancel" buttons. See Dialog.confirmIcon.
		 * 
		 * The callback will receive boolean true for an OK button click, or null for a Cancel click or
		 * if the Dialog is dismissed via the close button.
		 * 
		 * Note: this does not override the native window.confirm() method.
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {Callback} callback - Callback to fire when the user clicks a button to dismiss the dialog.
		 * This has the single parameter 'value', indicating the
		 * value returned by the Warn dialog from 'okClick()' etc.
		 * @param {DialogProps} properties - additional properties for the Dialog. To set Dialog.buttons','custom buttons for
		 * the Dialog, set properties.buttons to an array of
		 * buttons
		 * eg: { buttons : [Dialog.OK, Dialog.CANCEL] }
		 */
		confirm(message:String, callback?:Callback, properties?:DialogProps /* Dialog Properties */): void; 

		/**  
		 *  Shortcut for isc.ClassFactory.defineClass().
		 * 
		 * @param {String} className - Name for the new class.
		 * @param {Class} superClass - Optional SuperClass Class object or name
		 * @return {Class} Returns the new Class object.
		 */
		defineClass(className:String, superClass?:Class): Class; 

		/**  
		 *  If a dialog triggered via isc.say, isc.ask,
		 * isc.warn, isc.confirm or
		 * isc.askForValue is currently visible, it will be dismissed. The
		 * callback passed to the relevant method will never fire.
		 * 
		 * Note this is a rarely used API with very few valid use cases. As an example, perhaps some kind of
		 * periodic (non-user triggered) event would cause an entire area of the UI to be removed (such as a tab)
		 * and the system wants to ensure that no modal dialogs are currently showing from that part of the UI.
		 * In this case, while dismissCurrentDialog could be used to ensure the part of the UI being
		 * removed didn't leave behind a modal dialog.
		 * 
		 * To clear a modal prompt shown by isc.showPrompt, use isc.clearPrompt instead.
		 * 
		 * 
		 */
		dismissCurrentDialog(): void; 

		/**  
		 *  Same as Log.echo.
		 * 
		 * 
		 * @param {any} value - object to echo
		 * @return {String} a short string representation of the object
		 */
		echo(value:any /* Any */): String; 

		/**  
		 *  Same as Log.echoAll.
		 * 
		 * 
		 * @param {any} value - object to echo
		 * @return {String} a short string representation of the object
		 */
		echoAll(value:any /* Any */): String; 

		/**  
		 *  Same as Log.echoLeaf.
		 * 
		 * 
		 * @param {any} value - object to echo
		 * @return {String} a short string representation of the object
		 */
		echoLeaf(value:any /* Any */): String; 

		/**  
		 *  Evaluate a string of script and return the result. Falls through to
		 * Class.evaluate','Class.evaluate()
		 * 
		 * 
		 * @param {String} expression - Expression to evaluate
		 * @return {any} Result of evaluating the expression passed in
		 */
		eval(expression:String): any /* Any */; 

		/**  
		 *  Return the first property name in a given Object, according to for..in iteration order.
		 * 
		 * 
		 * @param {Object} object - Object to get properties from
		 * @return {String} first property name, or null if Object has no properties
		 */
		firstKey(object:Object): String; 

		/**  
		 *  Given a value and an object of key:value pairs, return a key that corresponds
		 * to that value.
		 * 
		 * If the key is not found, defaultKey will be returned if provided, otherwise the
		 * value will be returned.
		 * 
		 * 
		 * @param {String | number} value - value to look for
		 * @param {Object} valueMap - object of key:value pairs
		 * @param {any} defaultKey - default key to return if value not found
		 * @return {any} returns first key in valueMap with value, or                                              defaultKey if value not found
		 */
		getKeyForValue(value:String | number, valueMap:Object, defaultKey?:any /* Any */): any /* Any */; 

		/**  
		 * 
		 * Return all keys (property names) of a given object
		 * 
		 * 
		 * @param {Object} object - object to get properties from
		 * @return {Array<any>} String names of all properties.  NOTE: never null
		 */
		getKeys(object:Object): Array<any> /* Array */; 

		/**  
		 *  Given a key and an object of key:value pairs, return the value that corresponds to
		 * that key.
		 * 
		 * If the key is not found, defaultValue will be returned if provided, otherwise the
		 * key will be returned.
		 * 
		 * 
		 * @param {String | number} key - key to look for
		 * @param {Object} valueMap - object of key:value pairs
		 * @param {any} defaultValue - default value to return if key not found
		 * @return {any} returns value in valueMap under name key, or                                              defaultValue if key not found
		 */
		getValueForKey(key:String | number, valueMap:Object, defaultValue?:any /* Any */): any /* Any */; 

		/**  
		 * 
		 * Return all values of a given object
		 * 
		 * 
		 * @param {Object} object - object to get properties from
		 * @return {Array<any>} values of all properties.  NOTE: never null
		 */
		getValues(object:Object): Array<any> /* Array */; 

		/**  
		 *  Logs the echoed object (using isc.echo) as a warning, prefixed with an
		 * optional message.
		 * 
		 * 
		 * @param {any} value - object to echo
		 * @param {String} message - message to log
		 */
		logEcho(value:any /* Any */, message:String): void; 

		/**  
		 *  Logs the echoed object (using isc.echoAll) as a warning, prefixed with an
		 * optional message.
		 * 
		 * 
		 * @param {any} value - object to echo
		 * @param {String} message - message to log
		 */
		logEchoAll(value:any /* Any */, message:String): void; 

		/**  
		 *  Same as Log.logWarn.
		 * 
		 * 
		 * @param {String} message - message to log
		 * @param {String} category - category to log in, defaults to "Log"
		 */
		logWarn(message:String, category?:String): void; 

		/**  
		 *  Given a key:value map, return a new map as value:key.
		 * 
		 * If the same value appears more than once, the key will correspond to the last instance of that
		 * value.
		 * 
		 * 
		 * @param {Object} valueMap - object of key:value pairs
		 * @return {Object} reversed value map
		 */
		makeReverseMap(valueMap:Object): Object; 

		/**  
		 *  Shortcut for isc.ClassFactory.overwriteClass().
		 * 
		 */
		overwriteClass(): void; 

		/**  
		 * 
		 * Is some property specified on the object passed in? This will return true if 
		 * object[propertyName] has ever been set to any value, and not deleted.
		 * May return true even if object[propertyName] === undefined if the property 
		 * is present on the object and has been explicitly set to undefined.
		 * 
		 * 
		 * @param {Object} object - Object to test
		 * @param {String} propertyName - Which property is being tested for?
		 * @return {boolean} true if property is defined
		 */
		propertyDefined(object:Object, propertyName:String): boolean; 

		/**  
		 *  Show a modal dialog with a message, icon, and "OK" button. Intended for notifications which
		 * are not really warnings (default icon is less severe). See Dialog.sayIcon.
		 * 
		 * The callback will receive boolean true for an OK button click, or null if the Dialog is
		 * dismissed via the close button.
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {Callback} callback - Optional Callback to fire when the user dismisses the dialog. This has the single parameter
		 * 'value', indicating the value returned by the Warn
		 * dialog from 'okClick()' etc.
		 * @param {DialogProps} properties - additional properties for the Dialog. To set Dialog.buttons','custom buttons for
		 * the Dialog, set properties.buttons to an array of
		 * buttons
		 * eg: { buttons : [Dialog.OK, Dialog.CANCEL] }
		 */
		say(message:String, callback?:Callback, properties?:DialogProps /* Dialog Properties */): void; 

		/**  
		 *  Set the global default setting for Canvas.autoDraw.
		 * 
		 * After calling isc.setAutoDraw(), any newly created Canvas which is not given an
		 * explicit setting for Canvas.autoDraw','autoDraw will follow the new default setting.
		 * 
		 * autoDraw:false is the recommended default setting for most applications since it ensures
		 * that extra draws will not occur when developers inadvertently omit the autoDraw:false
		 * setting on child components.
		 * 
		 * 
		 * @param {boolean} enable - whether autoDraw should be enabled or disabled. Defaults to true.
		 */
		setAutoDraw(enable?:boolean): void; 

		/**  
		 *  Enables full screen reader mode. Must be called before any components are created. See
		 * accessibility.
		 * 
		 * @param {boolean} newState - new setting
		 */
		setScreenReaderMode(newState:boolean): void; 

		/**  
		 *  Creates a shallow copy of the passed-in Object or Array of Objects, that is, copies all
		 * properties of an Object to a new Object, so that the clone now has exactly the same property
		 * values as the original Object.
		 * 
		 * If shallowClone() is passed an immutable type such as String and Number, it is returned
		 * unchanged. Dates are copied via new Date(originalDate.getTime()).
		 * 
		 * Note that if an Array is passed, all members of the Array will be cloned. For a copy of an
		 * Array that contains exactly the same members (not copies), use Array.duplicate().
		 * 
		 * Only an Array directly passed to shallowClone() is copied. Arrays contained
		 * within Arrays will not be copied.
		 * 
		 * 
		 * @param {Object} object - object to be cloned
		 * @return {Object | Array<Object>} a shallow copy of the passed-in data
		 */
		shallowClone(object:Object | Array<any> | Object /* Object | Array | Object */): Object | Array<Object> /* Object | Array of Object */; 

		/**  
		 * 
		 * Method available on the isc object to open the Developer Console.
		 * 
		 * 
		 */
		showConsole(): void; 

		/**  
		 * 
		 * Method available on the isc object to show a temporary modal prompt to the user.
		 * This method will display the message using the Dialog.Prompt singleton object, then hide it
		 * using a fade animation effect.
		 * Note: if this prompt is to be shown to the user during some slow JavaScript logic, we
		 * advise calling this method, then using Class.delayCall or Timer.setTimeout
		 * to kick off the slow logic in a separate thread. This ensures that the prompt is showing
		 * before the lengthy execution begins.
		 * 
		 * The prompt may be cleared before the duration has elapsed via a call to isc.clearPrompt
		 * and any callback specified will still be fired even if the prompt is dismissed early.
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {number} duration - how long the message should appear for in milliseconds before fading from view.
		 * @param {Callback} callback - When the prompt is hidden, callback will be fired.
		 * @param {DialogProps} properties - additional properties for the Dialog, applied before the Dialog is shown
		 */
		showFadingPrompt(message:String, duration:number, callback?:Callback, properties?:DialogProps /* Dialog Properties */): void; 

		/**  
		 *  Handle a complete login interaction with a typical login dialog asking for username and
		 * password credentials using the LoginDialog class.
		 * 
		 * As with other convenience methods that show Dialogs, such as isc.warn,
		 * the dialog is shown and the function immediately returns. When the user responds, the
		 * provided callback function is called.
		 * 
		 * If the user clicks the "Log in" button, the credentials entered by the user are passed to
		 * the provided "loginFunc" as an Object with properties "username" and "password" (NOTE: both
		 * property names are all lowercase), as the variable "credentials". For example:
		 * { username: "barney", password: "rUbbL3" }
		 * 
		 * The "loginFunc" should then attempt to log in by whatever means is necessary. The second
		 * parameter to the loginFunc, "dialogCallback", is a function, which must be called whether
		 * login succeeds or fails with a true/false value indicating whether login succeeded.
		 * 
		 * If the login dialog is dismissable (settable as properties.dismissable, default false) and
		 * the user dismisses it, the loginFunc will be fired with null for the credentials.
		 * 
		 * The following code shows typical usage. This code assumes you have created a global
		 * function sendCredentials() that send credentials to some authentication system and fires a
		 * callback function with the result:
		 * 
		 * isc.showLoginDialog(function (credentials, dialogCallback) {
		 * if (credentials == null) return; // dismissed
		 * 
		 * // send credentials
		 * sendCredentials(credentials, function (loginSucceeded) {
		 * // report success or failure
		 * dialogCallback(loginSucceeded);
		 * })
		 * })
		 * 
		 * The login dialog has several built-in behaviors:
		 * 
		 * keyboard focus is automatically placed in the username field
		 * hitting enter in the username field proceeds to the password field
		 * hitting enter in the password field submits (fires the provided callback)
		 * 
		 * In addition to normal properties supported by Dialog/Window, the following special
		 * properties can be passed:
		 * 
		 * username: initial value for the username field
		 * password: initial value for the password field
		 * usernameTitle: title for the username field
		 * passwordTitle: title for the password field
		 * errorMessage: default error message on login failure
		 * loginButtonTitle: title for the login button
		 * dismissable: whether the dialog can be dismissed, default false
		 * errorStyle: CSS style for the error message, if shown
		 * 
		 * See below for links to the default values for these properties.
		 * 
		 * 
		 * @param {Callback} loginFunc - Function to call to attempt login. Receives parameters "credentials" and "dialogCallback", described above
		 * @param {LoginDialogProps} properties - additional properties for the Dialog
		 */
		showLoginDialog(loginFunc:Callback, properties?:LoginDialogProps /* LoginDialog Properties */): void; 

		/**  
		 * 
		 * Method available on the isc object to show a modal prompt to the user.
		 * This method will display the message using the Dialog.Prompt singleton object.
		 * Note: if this prompt is to be shown to the user during some slow JavaScript logic, we
		 * advise calling this method, then using Class.delayCall or Timer.setTimeout
		 * to kick off the slow logic in a separate thread. This ensures that the prompt is showing
		 * before the lengthy execution begins.
		 * <p/>Use "&#36;{loadingImage}" to include Canvas.loadingImageSrc','a loading image.
		 * 
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {DialogProps} properties - additional properties for the Dialog, applied before the Dialog is shown
		 */
		showPrompt(message:String, properties?:DialogProps /* Dialog Properties */): void; 

		/**  
		 *  Given a simple javascript object, return that object sorted by keys, such that when iterating
		 * through the properties of the object, they will show up in sorted order.
		 * Usage example - may be used to sort a FormItem.valueMap','formItem valueMap defined
		 * as an object.
		 * 
		 * @param {Object} object - Object to sort
		 * @param {Function} comparator - Comparator function to use when sorting the objects keys
		 * @return {Object} sorted version of the object passed in.
		 */
		sortObject(object:Object, comparator?:Function): Object; 

		/**  
		 *  Given a simple javascript object, return that object sorted by properties, such that when 
		 * iterating through the properties of the object, values will show up in sorted order.
		 * Usage example - may be used to sort a FormItem.valueMap','formItem valueMap defined
		 * as an object by display value.
		 * 
		 * @param {Object} object - Object to sort
		 * @param {Function} comparator - Comparator function to use when sorting the object properties
		 * @return {Object} sorted version of the object passed in.
		 */
		sortObjectByProperties(object:Object, comparator?:Function): Object; 

		/**  
		 *  Shorthand for new Date().getTime();, this returns a timeStamp - a large number
		 * which is incremented by 1 every millisecond. Can be used to generate unique identifiers,
		 * or perform timing tasks.
		 * 
		 * 
		 * @return {int} a large integer (actually the number of milliseconds since 1/1/1970)
		 */
		timeStamp(): int; 

		/**  
		 *  Show a modal dialog with a message, icon, and "OK" button. See Dialog.warnIcon.
		 * 
		 * The callback will receive boolean true for an OK button click, or null if the Dialog is
		 * dismissed via the close button.
		 * 
		 * 
		 * @param {String} message - message to display
		 * @param {Callback} callback - Optional Callback to fire when the user dismisses the dialog. This has the single parameter
		 * 'value', indicating the value returned by the Warn
		 * dialog from 'okClick()' etc.
		 * @param {DialogProps} properties - additional properties for the Dialog. To set Dialog.buttons','custom buttons for
		 * the Dialog, set properties.buttons to
		 * an array of buttons
		 * eg: { buttons : [Dialog.OK, Dialog.CANCEL] }
		 */
		warn(message:String, callback?:Callback, properties?:DialogProps /* Dialog Properties */): void; 

	} // iscStatic


	/**
	 * Settings to control EditContext serialization. 
	 */
	export interface SerializationSettings {
		 // ref="attr:SerializationSettings.indent"
		/**
		 * (Read only) Overrides the default indention setting during serialization. XML defaults
		 * to indented and JSON defaults to non-indented.
		 * Flags: IR
		 */
		 indent?: boolean | null /* Boolean */;
		 // ref="attr:SerializationSettings.outputComponentsIndividually"
		/**
		 * (Read only) Overrides the default component output setting during serialization. By default
		 * Canvas and DrawItem components are serialized individually and referenced by their
		 * containers.
		 * Flags: IR
		 */
		 outputComponentsIndividually?: boolean | null /* Boolean */;
		 // ref="attr:SerializationSettings.serverless"
		/**
		 * (Read only) When true specify DataSources in full rather than assuming they can be
		 * downloaded from the server.
		 * Flags: IR
		 */
		 serverless?: boolean | null /* Boolean */;
	} // SerializationSettings

	export interface SerializationSettingsStatic {
	} // SerializationSettingsStatic


	/**
	 * Facet value definition object made use of by the CubeGrid','CubeGrid and
	 * FacetChart','FacetChart classes (contained by facets). 
	 */
	export interface FacetValue {
		 // ref="attr:FacetValue.align"
		/**
		 * (Read only) Default alignment for facet label title and cells for this facetValue.
		 * Can be overridden by setting titleAlign or cellAlign on the facetValue.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids (see, for
		 * example, CubeGrid.facetValueAlign).
		 * Flags: IR
		 */
		 align?: Alignment;
		 // ref="attr:FacetValue.borderAfter"
		/**
		 * (Read only) CSS line style to apply as a border after this facetValue.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IR
		 */
		 borderAfter?: String;
		 // ref="attr:FacetValue.borderBefore"
		/**
		 * (Read only) CSS line style to apply as a border before this facetValue.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IR
		 */
		 borderBefore?: String;
		 // ref="attr:FacetValue.canCollapse"
		/**
		 * (Read only) For individual parent facetValues within a hierarchical facet, this flag controls
		 * whether an expand/collapse control will be shown.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids (see, for
		 * example, CubeGrid.canCollapseFacets).
		 * Flags: IR
		 */
		 canCollapse?: boolean | null /* Boolean */;
		 // ref="attr:FacetValue.canEdit"
		/**
		 * Whether cells for this facetValue can be edited. Defaults to CubeGrid.canEdit.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IRW
		 */
		 canEdit?: boolean | null /* Boolean */;
		 // ref="attr:FacetValue.cellAlign"
		/**
		 * (Read only) Default alignment of cells (in the body) for this facetValue.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids (see, for
		 * example, CubeGrid.cellAlign).
		 * Flags: IR
		 */
		 cellAlign?: Alignment;
		 // ref="attr:FacetValue.collapsed"
		/**
		 * (Read only) For tree facets, initial collapse state for this node. Defaults to Facet.collapsed.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IR
		 */
		 collapsed?: boolean | null /* Boolean */;
		 // ref="attr:FacetValue.id"
		/**
		 * id of this facetValue. Any string or number.
		 * Flags: IRW
		 */
		 id?: String | Number;
		 // ref="attr:FacetValue.isMinimizeValue"
		/**
		 * (Read only) Used to determine which facetValue is to be shown when the facet is minimized.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids. See
		 * CubeGrid.canMinimizeFacets.
		 * Flags: IR
		 */
		 isMinimizeValue?: boolean | null /* Boolean */;
		 // ref="attr:FacetValue.parentId"
		/**
		 * (Read only, Advanced) For tree facets (Facet.isTree','facet.isTree), id of this facetValue's
		 * parent facetValue.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IRA
		 */
		 parentId?: String | Number;
		 // ref="attr:FacetValue.selectionBoundary"
		/**
		 * (Read only) Selection boundary determining what facets / facetValues can be selected together by
		 * drag selection / shift+click selection.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IR
		 */
		 selectionBoundary?: SelectionBoundary;
		 // ref="attr:FacetValue.title"
		/**
		 * User-visible title of this facetValue. Shown on the field header.
		 * Flags: IRW
		 */
		 title?: String;
		 // ref="attr:FacetValue.titleHilite"
		/**
		 * (Read only) Hilite style to apply to the title for this facetValue.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids. See
		 * CubeGrid.hilites.
		 * Flags: IR
		 */
		 titleHilite?: String;
		 // ref="attr:FacetValue.width"
		/**
		 * (Read only) Width of the cube grid facetValue in pixels.
		 * 
		 * Note: This property is specific to CubeGrid','CubeGrids.
		 * Flags: IR
		 */
		 width?: number;

		/* Instance Method Overrides */
		/**  
		 *  Formatter to apply to values displayed for cells under this facetValue.
		 * 
		 * Can only be set on the CubeGrid.metricFacetId','metric facet or, if no metric facet
		 * is specified, on the innermost column facet.
		 * 
		 * If a single, grid-wide formatting style is desired, implement
		 * ListGrid.formatCellValue','grid.formatCellValue() instead.
		 * 
		 * Note: This method is specific to CubeGrid','CubeGrids.
		 * 
		 * 
		 * @param {any} value - raw value for the cell being
		 * @param {CellRecord} record - record object for the cell. Note: If this is a new cell that has not been saved, in an 
		 * editable grid, it has no associated record object. In this case the edit values will
		 * be passed in as this parameter.
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number for the cell.
		 * @return {String} formatted value to display in the cell.
		 */
		formatCellValue?(value:any /* Any */, record:CellRecord, rowNum:number, colNum:number): String; 

		/**  
		 *  Callout to determine custom value to display for cells displayed for this facetValue.
		 * 
		 * Can only be set on the CubeGrid.metricFacetId','metric facet or, if no metric facet
		 * is specified, on the innermost column facet.
		 * 
		 * Note: This method is specific to CubeGrid','CubeGrids.
		 * 
		 * 
		 * @param {CubeGrid} viewer - this facetValue's CubeGrid
		 * @param {Object} record - cell record
		 * @param {number} rowNum - row value for the cell
		 * @param {number} colNum - column value for the cell
		 * @return {String} HTML to display
		 */
		getCellValue?(viewer:CubeGrid, record:Object, rowNum:number, colNum:number): String; 

	} // FacetValue

	export interface FacetValueStatic {
	} // FacetValueStatic


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
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is an Array
		 */
		Array(object:Object): boolean; 

		/**  
		 * 
		 * Is object a Boolean object?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Boolean
		 */
		Boolean(object:Object): boolean; 

		/**  
		 * 
		 * Is object a class object?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Class Object
		 */
		ClassObject(object:Object): boolean; 

		/**  
		 * 
		 * Is object a Date object?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Date
		 */
		Date(object:Object): boolean; 

		/**  
		 * 
		 * Is object an Array with no items?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is an empty array
		 */
		emptyArray(object:Object): boolean; 

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
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is the empty object
		 */
		emptyObject(object:Object): boolean; 

		/**  
		 * 
		 * Is object the empty string?
		 * 
		 * NOTE: if you prefer, you can call this as isAn.emptyString()
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a null string
		 */
		emptyString(object:Object): boolean; 

		/**  
		 * 
		 * Is object a Function object?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Function
		 */
		Function(object:Object): boolean; 

		/**  
		 * 
		 * Is object an instance of some class?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is an instance of some class
		 */
		Instance(object:Object): boolean; 

		/**  
		 * 
		 * Is object an interface object?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Interface Object
		 */
		Interface(object:Object): boolean; 

		/**  
		 *  Does object implement the List interface?
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} <code>true</code> if the object is an Array or belongs to another class that                   implements the <code>List</code> API.
		 */
		List(object:Object): boolean; 

		/**  
		 * 
		 * Is object a non-empty String?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a non-empty string
		 */
		nonemptyString(object:Object): boolean; 

		/**  
		 * 
		 * Is object a Number object?
		 * 
		 * NOTE: this returns false if object is an invalid number (isNaN(object) == true)
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Number
		 */
		Number(object:Object): boolean; 

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
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a Boolean
		 */
		RegularExpression(object:Object): boolean; 

		/**  
		 * 
		 * Is object a String object?
		 * 
		 * 
		 * @param {Object} object - object to test
		 * @return {boolean} true == <code>object</code> is a String
		 */
		String(object:Object): boolean; 

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
		 // ref="attr:FiscalCalendar.defaultDate"
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
		 defaultDate?: Integer;
		 // ref="attr:FiscalCalendar.defaultMonth"
		/**
		 * The default zero-based month-number to use for calculating fiscal dates when no
		 * FiscalCalendar.fiscalYears','fiscal years are provided. This value together
		 * with FiscalCalendar.defaultDate will be used as the start date for the
		 * fiscal years where no explicitly specified fiscalYear configuration is present.
		 * 
		 * See also FiscalCalendar.defaultYearMode.
		 * Flags: IRW
		 */
		 defaultMonth?: Integer;
		 // ref="attr:FiscalCalendar.defaultYearMode"
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
		 defaultYearMode?: FiscalYearMode;
		 // ref="attr:FiscalCalendar.fiscalYears"
		/**
		 * An array of FiscalYear','FiscalYear objects which each represent the start date of a
		 * single fiscal year.
		 * Flags: IRW
		 */
		 fiscalYears?: Array<FiscalYear> /* Array of FiscalYear */;
	} // FiscalCalendar

	export interface FiscalCalendarStatic {
	} // FiscalCalendarStatic


	/**
	 * A class used to define a shadow used in a Draw&lt;Shape&gt; Types. 
	 */
	export interface Shadow {
		 blur?: int;
		 color?: CSSColor;
		 offset?: Point;
	} // Shadow

	export interface ShadowStatic {
	} // ShadowStatic


	/**
	 * Configuration of an HTML list in a RichTextEditor. 
	 */
	export interface ListProperties {
		 // ref="attr:ListProperties.image"
		/**
		 * (Read only) When the list item marker ListProperties.style','style is "custom-image", the image
		 * to use for the markers.
		 * Flags: IR
		 */
		 image?: SCImgURL;
		 // ref="attr:ListProperties.startNumber"
		/**
		 * (Read only) For ordered lists, the number to start the first item with. Must be non-negative.
		 * Flags: IR
		 */
		 startNumber?: int;
		 // ref="attr:ListProperties.style"
		/**
		 * (Read only) The style of list item marker. If "custom-image", the ListProperties.image','image
		 * should be specified.
		 * Flags: IR
		 */
		 style?: ListStyleType;
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
		 // ref="attr:Point.x"
		/**
		 * (Read only) The x coordinate of this point.
		 * Flags: IR
		 */
		 x?: int;
		 // ref="attr:Point.y"
		/**
		 * (Read only) The y coordinate of this point.
		 * Flags: IR
		 */
		 y?: int;
	} // Point

	export interface PointStatic {
	} // PointStatic


	/**
	 * Request sent to the server to initiate a 
	 * dataSourceOperations','DataSource operation. All properties which are legal on
	 * RPCRequest are legal, in addition to the properties listed here. 
	 */
	export interface DSRequest extends RPCRequest {
		 // ref="attr:DSRequest.additionalOutputs"
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
		 additionalOutputs?: String;
		 // ref="attr:DSRequest.callback"
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
		//  callback?: DSCallback;   Skipped because the property override a property in the base class with a different type
		 // ref="attr:DSRequest.clientContext"
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
		 clientContext?: Object;
		 // ref="attr:DSRequest.componentId"
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
		 componentId?: String;
		 // ref="attr:DSRequest.data"
		/**
		 * (Read only) Data, such as search criteria or an updated record, to be acted upon. Contents differ by
		 * operationType, see dataSourceOperations','DataSource Operations for
		 * details.
		 * 
		 * This field is generally filled in by passing the "data" argument to methods such as
		 * ListGrid.fetchData.
		 * Flags: IR
		 */
		//  data?: Object | Array<Object> /* Object | Array of Object */;   Skipped because the property override a property in the base class with a different type
		 // ref="attr:DSRequest.dataProtocol"
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
		 dataProtocol?: DSProtocol;
		 // ref="attr:DSRequest.dataSource"
		/**
		 * (Read only) DataSource this DSRequest will act on.
		 * 
		 * This property is generally automatically populated, for example when calling
		 * DataSource.fetchData the dataSource property is set to the target
		 * DataSource.
		 * Flags: IR
		 */
		 dataSource?: String;
		 // ref="attr:DSRequest.endRow"
		/**
		 * (Read only) End row of requested results, used only with fetch operations.
		 * 
		 * Note that startRow and endRow are zero-based, inclusive at the beginning and exclusive at
		 * the end (like substring), so startRow: 0, endRow: 1 is a request for the first record.
		 * Flags: IR, Group: paging
		 */
		 endRow?: number;
		 // ref="attr:DSRequest.exportAs"
		/**
		 * (Read only) The format in which the data should be exported. See ExportFormat for more 
		 * information.
		 * Flags: IR
		 */
		 exportAs?: ExportFormat;
		 // ref="attr:DSRequest.exportCSS"
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
		 exportCSS?: String;
		 // ref="attr:DSRequest.exportData"
		/**
		 * (Read only) Only applies to request properties passed to ListGrid.exportClientData.
		 * If specified this property contains an arbitrary set of data to be exported.
		 * Flags: IR
		 */
		 exportData?: Array<Record> /* Array of Record */;
		 // ref="attr:DSRequest.exportDatesAsFormattedString"
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
		 * boolean - Null not allowed
		 * Flags: IR, Group: exportFormatting
		 */
		 exportDatesAsFormattedString?: boolean;
		 // ref="attr:DSRequest.exportDelimiter"
		/**
		 * (Read only) The character to use as a field-separator in CSV exports. The default delimiter is comma.
		 * Flags: IR
		 */
		 exportDelimiter?: String;
		 // ref="attr:DSRequest.exportDisplay"
		/**
		 * (Read only) Specifies whether the exported data will be downloaded as an attachment or displayed in a 
		 * new browser window. See ExportDisplay for more information.
		 * Flags: IR
		 */
		 exportDisplay?: ExportDisplay;
		 // ref="attr:DSRequest.exportFields"
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
		 exportFields?: Array<String> /* Array of String */;
		 // ref="attr:DSRequest.exportFilename"
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
		 exportFilename?: String;
		 // ref="attr:DSRequest.exportFooter"
		/**
		 * (Read only) Optional text to appear at the end of the file.
		 * Flags: IR
		 */
		 exportFooter?: String;
		 // ref="attr:DSRequest.exportHeader"
		/**
		 * (Read only) Optional text to appear at the beginning of the file.
		 * Flags: IR
		 */
		 exportHeader?: String;
		 // ref="attr:DSRequest.exportHeaderless"
		/**
		 * This property allows omitting column names from CSV and Excel exports (no effect on JSON or XML exports).
		 * Flags: IRW
		 */
		 exportHeaderless?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.exportImageFormat"
		/**
		 * (Read only) The image format in which the SVG graphic should be exported.
		 * Flags: IR
		 */
		 exportImageFormat?: ExportImageFormat;
		 // ref="attr:DSRequest.exportImageQuality"
		/**
		 * (Read only) If exporting in ExportImageFormat','JPEG format, the output JPEG quality level.
		 * This is a number from 0 to 1, with 1 representing the best quality and 0 representing the
		 * least quality but smallest file size.
		 * Flags: IR
		 */
		 exportImageQuality?: Float /* float */;
		 // ref="attr:DSRequest.exportPath"
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
		 exportPath?: String;
		 // ref="attr:DSRequest.exportPropertyIdentifier"
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
		 exportPropertyIdentifier?: PropertyIdentifier;
		 // ref="attr:DSRequest.exportRawValues"
		/**
		 * Whether formatting settings should be applied to data being exported. Default behavior and
		 * the effect of setting of exportRawValues is described in the
		 * exportFormatting','Export Formatting overview.
		 * Flags: IRW, Group: exportFormatting
		 */
		 exportRawValues?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.exportResults"
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
		 exportResults?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.exportShowHeaderSpanTitles"
		/**
		 * (Read only) When you erxport a ListGrid that has ListGrid.headerSpans','headerSpans,
		 * should headerSpans also be exported. See DSRequest.exportSpanTitleSeparator for details of
		 * of what it means to export headerSpans to different export targets.
		 * Flags: IR
		 */
		 exportShowHeaderSpanTitles?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.exportSpanTitleSeparator"
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
		 exportSpanTitleSeparator?: String;
		 // ref="attr:DSRequest.exportStreaming"
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
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 exportStreaming?: boolean;
		 // ref="attr:DSRequest.exportTitleSeparatorChar"
		/**
		 * (Read only) The character with which to replace spaces in field-titles when exporting to XML. If not
		 * specified in the request, the server uses "".
		 * Flags: IR
		 */
		 exportTitleSeparatorChar?: String;
		 // ref="attr:DSRequest.exportToClient"
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
		 exportToClient?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.exportToFilesystem"
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
		 exportToFilesystem?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.exportTZ"
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
		 exportTZ?: String;
		 // ref="attr:DSRequest.exportValueFields"
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
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 exportValueFields?: boolean;
		 // ref="attr:DSRequest.fieldValueExpressions"
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
		 fieldValueExpressions?: Object;
		 // ref="attr:DSRequest.generateRelatedUpdates"
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
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 generateRelatedUpdates?: boolean;
		 // ref="attr:DSRequest.groupBy"
		/**
		 * (Read only) List of fields to group by when using serverSummaries','server-side summarization.
		 * 
		 * Valid only for an operation of type "fetch". See the 
		 * serverSummaries','Server Summaries overview for details and examples of usage.
		 * Flags: IR, Group: serverSummaries
		 */
		 groupBy?: Array<String> /* Array of String */;
		 // ref="attr:DSRequest.headerData"
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
		 headerData?: Object;
		 // ref="attr:DSRequest.keepParentsOnFilter"
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
		 keepParentsOnFilter?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.lineBreakStyle"
		/**
		 * (Read only) The style of line-breaks to use in the exported output. See LineBreakStyle for
		 * more information.
		 * Flags: IR
		 */
		 lineBreakStyle?: String;
		 // ref="attr:DSRequest.oldValues"
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
		 oldValues?: Record;
		 // ref="attr:DSRequest.operationId"
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
		 operationId?: String;
		 // ref="attr:DSRequest.operationType"
		/**
		 * (Read only) Type of operation being performed: "fetch", "add", "remove", "update" or "custom".
		 * 
		 * This property is generally automatically populated, for example when calling
		 * fetchData() on a DataSource or DataBound component the operationType is
		 * automatically set to "fetch". Note that "custom" operations are never generated
		 * automatically, they are always fired by your code.
		 * Flags: IR
		 */
		 operationType?: DSOperationType;
		 // ref="attr:DSRequest.outputs"
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
		 outputs?: String;
		 // ref="attr:DSRequest.parentNode"
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
		 parentNode?: TreeNode;
		 // ref="attr:DSRequest.pendingAdd"
		/**
		 * (Read only) Indicates that a validation request is being made for a record that will ultimately be 
		 * saved with an "add" request, as opposed to an "update" request. This context is necessary
		 * for some validators because the nature of the validation depends on whether we are adding
		 * or updating a record. The system sets this flag when processing interim validations, such
		 * as those fired when DynamicForm.validateOnChange is in force.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 pendingAdd?: boolean;
		 // ref="attr:DSRequest.progressiveLoading"
		/**
		 * Sets DataSource.progressiveLoading','progressive loading mode for this specific
		 * request, overriding the OperationBinding- and DataSource-level settings. Note that this 
		 * setting applies only to fetch requests - it has no effect if specified on any other kind 
		 * of request.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: progressiveLoading
		 */
		 progressiveLoading?: boolean;
		 // ref="attr:DSRequest.requestId"
		/**
		 * (Read only, Advanced) Automatically generated unique ID for this request. This ID will be required by developers 
		 * making use of the DSProtocol','"clientCustom" dataProtocol.
		 * Flags: RA
		 */
		 requestId?: String;
		 // ref="attr:DSRequest.resultSet"
		/**
		 * (Read only) For advanced use in integrating dataset paging with web services,
		 * the ResultSet that issued this "fetch" DSRequest is automatically made available as the
		 * resultSet property.
		 * 
		 * This property can only be read. There is no meaning to setting this property
		 * yourself.
		 * Flags: R
		 */
		 resultSet?: ResultSet;
		 // ref="attr:DSRequest.resultTree"
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
		 resultTree?: ResultTree;
		 // ref="attr:DSRequest.shouldUseCache"
		/**
		 * This is a per-request flag for explicitly controlling whether the cache is used (bypassing
		 * it when not wanted, or using it when settings would indicate otherwise). See 
		 * DataSource.cacheAllData, DataSource.cacheAllOperationId and
		 * DataSource.cacheAcrossOperationIds for caching management for all requests of a 
		 * dataSource.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 shouldUseCache?: boolean;
		 // ref="attr:DSRequest.sortBy"
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
		 sortBy?: FieldName | Array<FieldName> | Array<SortSpecifier> /* FieldName | Array of FieldName | Array of SortSpecifiers */;
		 // ref="attr:DSRequest.startRow"
		/**
		 * (Read only) Starting row of requested results, used only with fetch operations. If unset, 0 is assumed.
		 * 
		 * Note that startRow and endRow are zero-based, inclusive at the beginning and exclusive at
		 * the end (like substring), so startRow: 0, endRow: 1 is a request for the first record.
		 * Flags: IR, Group: paging
		 */
		 startRow?: number;
		 // ref="attr:DSRequest.streamResults"
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
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 streamResults?: boolean;
		 // ref="attr:DSRequest.summaryFunctions"
		/**
		 * (Read only) A mapping from field names to SummaryFunction','summary functions to be applied
		 * to each field.
		 * 
		 * Valid only for an operation of type "fetch". See the 
		 * serverSummaries','Server Summaries overview for examples of usage.
		 * Flags: IR, Group: serverSummaries
		 */
		 summaryFunctions?: Map<String,SummaryFunction>;
		 // ref="attr:DSRequest.textMatchStyle"
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
		 textMatchStyle?: TextMatchStyle;
		 // ref="attr:DSRequest.useFlatFields"
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
		 useFlatFields?: boolean | null /* Boolean */;
		 // ref="attr:DSRequest.useFlatHeaderFields"
		/**
		 * Cause the DSRequest.useFlatFields','useFlatFields XML serialization behavior to be used
		 * for all soap headers in the request. See also DSRequest.headerData.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: flatFields
		 */
		 useFlatHeaderFields?: boolean;
		 // ref="attr:DSRequest.useStrictJSON"
		/**
		 * (Read only) Should the HTTP response to this request be formatted using the
		 * strict JSON subset of the javascript language?
		 * If set to true, responses returned by the server should match the format described
		 * <a href='http://www.json.org/js.html' target='_blank'>here</a>.
		 * 
		 * Only applies to requests sent a server with
		 * DataSource.dataFormat set to "json" or "iscServer".
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 useStrictJSON?: boolean;
		 // ref="attr:DSRequest.validationMode"
		/**
		 * (Read only) Mode of validation for entered data.
		 * Flags: IR
		 */
		 validationMode?: ValidationMode;
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
		 // ref="attr:DSRequestModifier.end"
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
		 end?: String;
		 // ref="attr:DSRequestModifier.fieldName"
		/**
		 * (Read only) The name of the field to add or replace on the DSRequest - whether this appears in the DSRequest's
		 * values or criteria depends on whether this is part of a OperationBinding.values or
		 * OperationBinding.criteria attribute.
		 * Flags: IR
		 */
		 fieldName?: FieldName;
		 // ref="attr:DSRequestModifier.operator"
		/**
		 * (Read only) The name of the operator to apply when constructing criteria. This property only applies 
		 * to criteria; it is ignored if specified as part of a OperationBinding.values 
		 * attribute.
		 * Flags: IR
		 */
		 operator?: String;
		 // ref="attr:DSRequestModifier.start"
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
		 start?: String;
		 // ref="attr:DSRequestModifier.value"
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
		 value?: String;
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
		 // ref="attr:DateRange.end"
		/**
		 * (Read only) The end of this DateRange.
		 * Flags: IR
		 */
		 end?: RelativeDate | Date;
		 // ref="attr:DateRange.start"
		/**
		 * (Read only) The start of this DateRange.
		 * Flags: IR
		 */
		 start?: RelativeDate | Date;
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
		 // ref="attr:SortSpecifier.context"
		/**
		 * (Read only) A DataBoundComponent providing the context for the sort-normalizer.
		 * Flags: IR
		 */
		 context?: DataBoundComponent;
		 // ref="attr:SortSpecifier.direction"
		/**
		 * (Read only) The direction in which this specifier should sort.
		 * Flags: IR
		 */
		 direction?: SortDirection;
		 // ref="attr:SortSpecifier.normalizer"
		/**
		 * (Read only) A normalizer function which this sortSpecifier will use to sort.
		 * Flags: IR
		 */
		 normalizer?: Function;
		 // ref="attr:SortSpecifier.property"
		/**
		 * (Read only) The property name, eg a ListGridField','field name, to which this sortSpecifier applies.
		 * Flags: IR
		 */
		 property?: String;
	} // SortSpecifier

	export interface SortSpecifierStatic {
	} // SortSpecifierStatic


	/**
	 * Validator definition for a built-in Validator.type. 
	 */
	export interface ValidatorDefinition {
		 // ref="attr:ValidatorDefinition.action"
		/**
		 * (Read only) Callback, function, or JavaScript expression called after every validation (i.e. call
		 * to ValidatorDefinition.condition) whether it passed or failed. This allows the
		 * validator perform an operation on the field based on the validation outcome.
		 * 
		 * An action() function is not needed to report an error message only.
		 * 
		 * For the required parameters, see the documentation for
		 * Callbacks.ValidatorActionCallback','ValidatorActionCallback.
		 * Flags: IR
		 */
		 action?: StringMethod | ValidatorActionCallback;
		 // ref="attr:ValidatorDefinition.condition"
		/**
		 * (Read only) Callback, function or JavaScript expression invoked to perform the actual validation
		 * of a value.
		 * 
		 * Because the validator itself is passed as a parameter, you can effectively parameterize it.
		 * For example, to create a validator that checks that the value is after a certain date:
		 * { type:"custom", afterDate:new Date(), 
		 * condition:"value.getTime() > validator.afterDate.getTime()" }
		 * 
		 * Note that, if a field is declared with a builtin FieldType, the value passed in
		 * will already have been converted to the specified type, if possible.
		 * 
		 * For the required parameters, see the documentation for
		 * Callbacks.ValidatorConditionCallback','ValidatorConditionCallback.
		 * Flags: IR
		 */
		 condition?: StringMethod | ValidatorConditionCallback;
		 // ref="attr:ValidatorDefinition.defaultErrorMessage"
		/**
		 * (Read only) Default error message to be shown when validator fails validation. Can be overridden
		 * for an individual validator by setting Validator.errorMessage.
		 * Flags: IR
		 */
		 defaultErrorMessage?: String;
		 // ref="attr:ValidatorDefinition.requiresServer"
		/**
		 * (Read only) Does this validator only run server-side?
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 requiresServer?: boolean;
		 // ref="attr:ValidatorDefinition.shortName"
		/**
		 * (Read only) Optional name to be shown in tools that edit validators. If not specified,
		 * the tools will derive the short name from the ValidatorDefinition.type by assuming it is
		 * camelCaps similar to DataSource.getAutoTitle.
		 * Flags: IR
		 */
		 shortName?: String;
		 // ref="attr:ValidatorDefinition.type"
		/**
		 * (Read only) Type of the validator unique in ValidatorType.
		 * Flags: IR
		 */
		 type?: String;
	} // ValidatorDefinition

	export interface ValidatorDefinitionStatic {
	} // ValidatorDefinitionStatic


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
		 // ref="attr:MetricSettings.axisLineProperties"
		/**
		 * (Read only) Properties for the axis line drawn if this extra value axis is not positioned
		 * directly adjacent to the chart rect. The default is to match the
		 * DrawItem.lineCap','lineCap, DrawItem.lineColor','lineColor,
		 * DrawItem.lineOpacity','lineOpacity, DrawItem.linePattern','linePattern,
		 * and DrawItem.lineWidth','lineWidth of the FacetChart's
		 * FacetChart.chartRectProperties','chart rect. for each axis line.
		 * Flags: IR
		 */
		 axisLineProperties?: DrawLineProps /* DrawLine Properties */;
		 // ref="attr:MetricSettings.axisStartValue"
		/**
		 * (Read only) Same as FacetChart.axisStartValue but affects only one metric.
		 * Flags: IR
		 */
		 axisStartValue?: Float;
		 // ref="attr:MetricSettings.chartType"
		/**
		 * See ChartType for a list of known types - Column, Bar, Line, Pie, Doughnut,
		 * Area, Radar, and Histogram charts are supported.
		 * Flags: IRW
		 */
		 chartType?: ChartType;
		 // ref="attr:MetricSettings.dataColors"
		/**
		 * An array of colors to use for a series of visual elements representing data (eg columns,
		 * bars, pie slices), any of which may be adjacent to any other.
		 * 
		 * Colors must be in the format of a leading hash (#) plus 6 hexadecimal digits, for example, 
		 * "#FFFFFF" is white, "#FF0000" is pure red.
		 * Flags: IRW
		 */
		 dataColors?: Array<CSSColor> /* Array of CSSColor */;
		 // ref="attr:MetricSettings.dataLineProperties"
		/**
		 * (Read only) Properties for lines that show data (as opposed to gradations or borders around the data
		 * area).
		 * Flags: IR
		 */
		 dataLineProperties?: DrawLineProps /* DrawLine Properties */;
		 // ref="attr:MetricSettings.dataOutlineProperties"
		/**
		 * (Read only) Properties for lines that outline a data shape (in filled charts such as area or radar
		 * charts).
		 * Flags: IR
		 */
		 dataOutlineProperties?: DrawItemProps /* DrawItem Properties */;
		 // ref="attr:MetricSettings.dataPointProperties"
		/**
		 * (Read only) Common properties to apply for all data points (see MetricSettings.showDataPoints).
		 * Flags: IR
		 */
		 dataPointProperties?: DrawItemProps /* DrawItem Properties */;
		 // ref="attr:MetricSettings.dataPointSize"
		/**
		 * (Read only) Size in pixels for data points drawn for line, area, radar and other chart types.
		 * Flags: IR
		 */
		 dataPointSize?: int;
		 // ref="attr:MetricSettings.dataShapeProperties"
		/**
		 * (Read only) Properties for data shapes (filled areas in area or radar charts).
		 * Flags: IR
		 */
		 dataShapeProperties?: DrawPathProps /* DrawPath Properties */;
		 // ref="attr:MetricSettings.decimalPrecision"
		/**
		 * (Read only) The FacetChart.decimalPrecision used to render the numeric labels of this metric axis.
		 * Flags: IR
		 */
		 decimalPrecision?: int;
		 // ref="attr:MetricSettings.filled"
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
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 filled?: boolean;
		 // ref="attr:MetricSettings.fixedFacetValue"
		/**
		 * (Read only) For a MetricSettings.multiFacet','single-facet chart of an extra value axis, this property provides a constant facet value
		 * for the second facet. By varying the value of the other facet in multi-facet data, the chart
		 * obtains the series of values to plot. The default facet value is the first facet value of the second facet.
		 * Flags: IR
		 */
		 fixedFacetValue?: String | Number;
		 // ref="attr:MetricSettings.gradationLabelProperties"
		/**
		 * (Read only) Properties for gradation labels
		 * Flags: IR
		 */
		 gradationLabelProperties?: DrawLabelProps /* DrawLabel Properties */;
		 // ref="attr:MetricSettings.gradationLineProperties"
		/**
		 * (Read only) Properties for gradation lines
		 * Flags: IR
		 */
		 gradationLineProperties?: DrawLineProps /* DrawLine Properties */;
		 // ref="attr:MetricSettings.gradationZeroLineProperties"
		/**
		 * (Read only) Properties for the gradation line drawn for zero (slightly thicker by default).
		 * Flags: IR
		 */
		 gradationZeroLineProperties?: DrawLineProps /* DrawLine Properties */;
		 // ref="attr:MetricSettings.legendLabel"
		/**
		 * (Read only) For MetricSettings.multiFacet','single-facet charts embedded in a multi-facet main
		 * chart, the legendLabel defines the text of the legend label for this chart.
		 * The default text is the FacetValue.title','title of the metric facet value of this
		 * value axis concatenated with the FacetValue.title','title of the
		 * MetricSettings.fixedFacetValue','fixed facet value in parentheses. Set the
		 * legendLabel to provide custom text for the legend label.
		 * Flags: IR
		 */
		 legendLabel?: String;
		 // ref="attr:MetricSettings.logBase"
		/**
		 * (Read only) When MetricSettings.useLogGradations, base value for logarithmic gradation lines. Gradation
		 * lines will be shown at every power of this value plus intervening values specified by
		 * MetricSettings.logGradations.
		 * Flags: IR
		 */
		 logBase?: int;
		 // ref="attr:MetricSettings.logGradations"
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
		 logGradations?: Array<Float> /* Array of Float */;
		 // ref="attr:MetricSettings.logScale"
		/**
		 * (Read only) Whether to use logarithmic scaling for values.
		 * 
		 * Logarithmic scale charts show an equivalent percentage increase as equivalent distance
		 * on the chart. That is, 10 and 100 are the same distance apart as 100 and 1000 (each
		 * being a 10 times or 1000% increase).
		 * Flags: IR
		 */
		 logScale?: boolean | null /* Boolean */;
		 // ref="attr:MetricSettings.matchGradations"
		/**
		 * (Read only) When this property is set to the metric of another MetricSettings object, the extra
		 * value axis and chart corresponding to these settings will use the same scale for the
		 * gradations as the extra value axis and chart of the other MetricSettings object. The
		 * value of matchGradations can only be one of the metrics of the metric
		 * facet whose values will be displayed by the chart.
		 * Flags: IR
		 */
		 matchGradations?: String;
		 // ref="attr:MetricSettings.minDataSpreadPercent"
		/**
		 * (Read only) Same as FacetChart.minDataSpreadPercent but affects only one metric. Default of
		 * null means that the chart-wide setting facetChart.minDataSpreadPercent
		 * will be used.
		 * Flags: IR
		 */
		 minDataSpreadPercent?: Integer;
		 // ref="attr:MetricSettings.multiFacet"
		/**
		 * (Read only) Whether this extra value axis plots values while varying the facet values of just the
		 * first facet (single-facet) or both first and second facets (multi-facet).
		 * Flags: IR
		 */
		 multiFacet?: boolean | null /* Boolean */;
		 // ref="attr:MetricSettings.proportional"
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
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 proportional?: boolean;
		 // ref="attr:MetricSettings.proportionalAxisLabel"
		/**
		 * (Read only) Default title for the value axis label when the chart is in
		 * MetricSettings.proportional','proportional rendering mode. This title will be used unless the
		 * FacetChart.getLegendFacet','legend facet defines a
		 * Facet.proportionalTitle','proportionalTitle.
		 * Flags: IR, Group: i18nMessages
		 */
		 proportionalAxisLabel?: String;
		 // ref="attr:MetricSettings.shadowProperties"
		/**
		 * (Read only) Properties for shadows.
		 * Flags: IR
		 */
		 shadowProperties?: DrawOvalProps /* DrawOval Properties */;
		 // ref="attr:MetricSettings.showAxis"
		/**
		 * (Read only) Whether to show the extra value axis.
		 * Flags: IR
		 */
		 showAxis?: boolean | null /* Boolean */;
		 // ref="attr:MetricSettings.showAxisLine"
		/**
		 * (Read only) Whether to show an axis line for this extra value axis if it is not placed
		 * directly adjacent to the chart rect. The default setting is the value
		 * of the FacetChart.showChartRect','showChartRect property of the FacetChart.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showAxisLine?: boolean;
		 // ref="attr:MetricSettings.showDataPoints"
		/**
		 * (Read only) For Line, Area, Radar, Scatter or Bubble charts, whether to show data points for each
		 * individual data value.
		 * 
		 * If shown, the MetricSettings.pointClick and MetricSettings.getPointHoverHTML APIs can be used to create
		 * interactivity.
		 * Flags: IR
		 */
		 showDataPoints?: boolean | null /* Boolean */;
		 // ref="attr:MetricSettings.showDataValues"
		/**
		 * (Read only) Should data values be shown as text labels near the shape representing the value, for example,
		 * above columns of a column chart, or adjacent to points in a line chart?
		 * 
		 * If set to false, then data values will not be shown.
		 * 
		 * If set to true, data values will be shown unless the data density is high enough that
		 * labels will potentially overlap, in which case, data values will not be shown and
		 * hovers will be shown instead, in the same way as MetricSettings.showValueOnHover shows hovers.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showDataValues?: boolean;
		 // ref="attr:MetricSettings.showShadows"
		/**
		 * (Read only) Whether to automatically show shadows for various charts.
		 * Flags: IR
		 */
		 showShadows?: boolean | null /* Boolean */;
		 // ref="attr:MetricSettings.showValueAxisLabel"
		/**
		 * (Read only) Whether to show the MetricSettings.valueTitle','valueTitle (or, in the case of
		 * MetricSettings.proportional','proportional rendering mode,
		 * MetricSettings.proportionalAxisLabel) as a label on this extra value axis.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showValueAxisLabel?: boolean;
		 // ref="attr:MetricSettings.showValueOnHover"
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
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showValueOnHover?: boolean;
		 // ref="attr:MetricSettings.stacked"
		/**
		 * If the ChartType is "Column" then the metric settings may include
		 * a setting for FacetChart.stacked.
		 * 
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 stacked?: boolean;
		 // ref="attr:MetricSettings.useLogGradations"
		/**
		 * (Read only) Whether to use classic logarithmic gradations, where each order of magnitude is shown as
		 * a gradation as well as a few intervening lines. Gradations also begin and end on an order
		 * of magnitude. For example, 1,2,4,6,8,10,20,40,60,80,100.
		 * 
		 * Default gradations can be overridden via MetricSettings.logBase and MetricSettings.logGradations.
		 * Flags: IR
		 */
		 useLogGradations?: boolean | null /* Boolean */;
		 // ref="attr:MetricSettings.valueAxisLabelProperties"
		/**
		 * (Read only) Properties for labels of value axis.
		 * Flags: IR
		 */
		 valueAxisLabelProperties?: DrawLabelProps /* DrawLabel Properties */;
		 // ref="attr:MetricSettings.valueLineProperties"
		/**
		 * (Read only) Properties for a "value line" - a line shows where a particular discrete value is
		 * placed, eg, vertical lines connecting points of a line chart to the X axis, or radial
		 * lines in a Radar chart.
		 * Flags: IR
		 */
		 valueLineProperties?: DrawLineProps /* DrawLine Properties */;
		 // ref="attr:MetricSettings.valueTitle"
		/**
		 * (Read only) A label for the data values, such as "Sales in Thousands", typically used as the label for
		 * the value axis.
		 * Flags: IR
		 */
		 valueTitle?: String;
		 // ref="attr:MetricSettings.xAxisEndValue"
		/**
		 * (Read only) Same as FacetChart.xAxisEndValue but affects only one metric.
		 * Flags: IR
		 */
		 xAxisEndValue?: Float;

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
		 * @return {String} the text to display.
		 */
		formatAxisValue?(value:any /* Any */): String; 

		/**  
		 *  Return the text string to display in MetricSettings.showValueOnHover','hovers or via MetricSettings.showDataValues
		 * given the raw value for the metric displayed on the value axis.
		 * 
		 * Note that the rendering of values for gradation labels is handled by
		 * MetricSettings.formatAxisValue.
		 * 
		 * @param {any} value - raw value of the metric
		 * @return {String} the text to display.
		 */
		formatDataValue?(value:any /* Any */): String; 

		/**  
		 *  Get a color from the MetricSettings.dataColors Array.
		 * 
		 * 
		 * Override to provide a dynamic color generation scheme - must return a color in the format of
		 * of a leading hash (#) plus 6 hexadecimal digits as specified for MetricSettings.dataColors.
		 * 
		 * 
		 * 
		 * @param {Number} index - index of the legend facet value to be colored
		 * @param {String | Number | Date} facetValueId - id of the legend facet value to be colored
		 * @param {String} purpose - purpose for the requested color - such as "legend", "line", "area", "points", etc.
		 * @return {CSSColor} 
		 */
		getDataColor?(index:Number, facetValueId:String | Number | Date, purpose:String): CSSColor; 

		/**  
		 *  Get a gradient from the MetricSettings.dataGradients Array.
		 * 
		 * Override to provide a dynamic gradient generation scheme.
		 * 
		 * 
		 * @param {Number} index - index of the legend facet value to be colored
		 * @param {String | Number | Date} facetValueId - id of the legend facet value to be colored
		 * @param {String} purpose - purpose for the requested gradient - such as "legend", "line", "area", "points", etc.
		 * @return {String} the gradient identifier
		 */
		getDataGradient?(index:Number, facetValueId:String | Number | Date, purpose:String): String; 

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
		 * @param {Number} index - index of the legend facet value to be colored
		 * @param {String | Number | Date} facetValueId - id of the legend facet value to be colored
		 * @param {String} purpose - purpose for the requested color - such as "legend", "line", "area", "points", etc.
		 * @return {CSSColor} color to use for data lines or null to default to                     ${isc.DocUtils.linkForRef('method:MetricSettings.getDataColor')}
		 */
		getDataLineColor?(index:Number, facetValueId:String | Number | Date, purpose:String): CSSColor; 

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
		 * @param {Number} index - index of the legend facet value to target
		 * @param {String | Number | Date} facetValueId - id of the legend facet value to target
		 * @param {String} purpose - purpose for the requested width - such as "legend", "line", "area", "points", etc.
		 * @return {int} width to use for data lines or null to use ${isc.DocUtils.linkForRef('type:ChartType')} default
		 */
		getDataLineWidth?(index:Number, facetValueId:String | Number | Date, purpose:String): int; 

		/**  
		 *  Return an array of the gradation values used in the current chart. Pass these values
		 * to MetricSettings.getXCoord / MetricSettings.getYCoord (depending on the orientation of the chart)
		 * to discover the coordinates where gradations are drawn.
		 * 
		 * This is only allowed to be called when FacetChart.chartDrawn fires.
		 * 
		 * 
		 * @return {Array<float>} an array of gradation values used in the current chart.
		 */
		getGradations?(): Array<float> /* Array of float */; 

		/**  
		 *  When MetricSettings.showDataPoints is true and the mouse hovers over a point, this method is called
		 * and may return HTML to show in a hover.
		 * 
		 * 
		 * @param {Float} value - the value at the point
		 * @param {Record} record - the record at the point
		 * @param {String} metricId - the ID of the metric at the point
		 * @return {String} String of HTML to show in a hover
		 */
		getPointHoverHTML?(value:Float /* float */, record:Record, metricId:String): String; 

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
		 * @param {Float} value - the value to be drawn.
		 * @return {Float} the X coordinate where the passed data value would be drawn; or null if the passed <code>FacetValueMap</code> does not identify a currently-drawn data cell.
		 */
		getXCoord?(value:Float | FacetValueMap /* float | FacetValueMap */): Float; 

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
		 * @param {Float} value - the value to be drawn.
		 * @return {Float} the Y coordinate where the passed data value would be drawn.
		 */
		getYCoord?(value:Float /* float */): Float /* float */; 

		/**  
		 *  When MetricSettings.showDataPoints is true, fires when a point is clicked on.
		 * 
		 * 
		 * @param {Float} value - the value at the point
		 * @param {Record} record - the record at the point
		 * @param {String} metricId - the ID of the metric at the point
		 */
		pointClick?(value:Float /* float */, record:Record, metricId:String): void; 

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
		 * @param {Array<CSSColor>} dataColors - New set of data colors
		 */
		setDataColors?(dataColors:Array<CSSColor> /* Array of CSSColor */): void; 

		/**  
		 *  Method to change MetricSettings.filled','filled.
		 * Use null to apply a default value for the current ChartType','chartType.
		 * 
		 * 
		 * @param {boolean} filled - new value
		 */
		setFilled?(filled:boolean | null /* Boolean */): void; 

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
		setStacked?(stacked:boolean | null /* Boolean */): void; 

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
		 // ref="attr:Hilite.backgroundColor"
		/**
		 * When edited via a HiliteEditor, the value for the background color of this 
		 * hilite. If this is omitted, it will be automatically derived from the backgroundColor
		 * attribute of Hilite.cssText. When a hilite is saved in a HiliteEditor, both 
		 * attributes are set automatically.
		 * Flags: IRW, Group: hiliting
		 */
		 backgroundColor?: String;
		 // ref="attr:Hilite.canEdit"
		/**
		 * (Read only) Can highlight be edited from header context menu? Setting attribute to
		 * false prevents editing. A null or true
		 * value allows editing.
		 * Flags: IR, Group: hiliting
		 */
		 canEdit?: boolean | null /* Boolean */;
		 // ref="attr:Hilite.criteria"
		/**
		 * (Read only) Criteria defining what records this hilite should apply to.
		 * Flags: IR, Group: hiliting
		 */
		 criteria?: Criteria | AdvancedCriteria;
		 // ref="attr:Hilite.cssText"
		/**
		 * (Read only) CSS text to be applied to cells where this hilite is applied, for example,
		 * "background-color:#FF0000"
		 * Flags: IR, Group: hiliting
		 */
		 cssText?: CSSText;
		 // ref="attr:Hilite.disabled"
		/**
		 * Whether this hilite is currently disabled.
		 * 
		 * Hilites can be programmatically enabled and disabled via DataBoundComponent.enableHilite.
		 * Flags: IRW, Group: hiliting
		 */
		 disabled?: boolean | null /* Boolean */;
		 // ref="attr:Hilite.fieldName"
		/**
		 * (Read only) Name of the field, or array of fieldNames, this hilite should be applied to. 
		 * 
		 * If unset, hilite is applied to every field of the record.
		 * Flags: IR, Group: hiliting
		 */
		 fieldName?: FieldName | Array<FieldName> /* FieldName | Array of FieldName */;
		 // ref="attr:Hilite.htmlAfter"
		/**
		 * (Read only) HTML to append to the end of cell values where this hilite is applied.
		 * Flags: IR, Group: hiliting
		 */
		 htmlAfter?: HTMLString;
		 // ref="attr:Hilite.htmlBefore"
		/**
		 * (Read only) HTML to pre-pend to cell values where this hilite is applied.
		 * Flags: IR, Group: hiliting
		 */
		 htmlBefore?: HTMLString;
		 // ref="attr:Hilite.htmlValue"
		/**
		 * (Read only) Value to show in place of the actual value from the record, for a record that matches
		 * this hilite.
		 * 
		 * This can be used to take ranges of numeric values and simplify them to "Low", "Medium",
		 * "High" or similar textual values, translate very small or very large values to "Outlier" or
		 * "Negligible", and similar use cases.
		 * Flags: IR, Group: hiliting
		 */
		 htmlValue?: String;
		 // ref="attr:Hilite.icon"
		/**
		 * (Read only) URL of an icon to show when this hilite is applied to a cell. Position of the icon 
		 * is controlled by DataBoundComponent.hiliteIconPosition or 
		 * ListGridField.hiliteIconPosition.
		 * Flags: IR, Group: hiliting
		 */
		 icon?: SCImgURL;
		 // ref="attr:Hilite.id"
		/**
		 * (Read only) Unique id for this hilite definition. 
		 * 
		 * For hilites that include Hilite.criteria this is not required.
		 * 
		 * If you are explicitly marking records for hiliting, set
		 * DataBoundComponent.hiliteProperty on the record to this id.
		 * Flags: IR, Group: hiliting
		 */
		 id?: String;
		 // ref="attr:Hilite.replacementValue"
		/**
		 * (Read only) HTML which replaces the cell's textual value where this hilite is applied.
		 * 
		 * Note that sorting, filtering, etc behavior will still operate on the underlying value.
		 * For example, if there is a date field with the FilterEditor enabled, the default search
		 * interface will still offer date-range based filtering even if hilites have caused values
		 * to be displayed as text such as "current" or "past due".
		 * Flags: IR, Group: hiliting
		 */
		 replacementValue?: HTMLString;
		 // ref="attr:Hilite.textColor"
		/**
		 * When edited via a HiliteEditor, the value for the foreground color of this 
		 * hilite. If this is omitted, it will be automatically derived from the textColor
		 * attribute of Hilite.cssText. When a hilite is saved in a HiliteEditor, both 
		 * attributes are set automatically.
		 * Flags: IRW, Group: hiliting
		 */
		 textColor?: String;
		 // ref="attr:Hilite.title"
		/**
		 * User-visible title for this hilite. Used for interfaces such as menus that can enable or
		 * disable hilites.
		 * Flags: IRW, Group: hiliting
		 */
		 title?: String;
	} // Hilite

	export interface HiliteStatic {
	} // HiliteStatic


	/**
	 * Represents the position of a Portlet within a PortalLayout, indicating the
	 * column, row, and position within the row. 
	 */
	export interface PortalPosition {
		 // ref="attr:PortalPosition.colNum"
		/**
		 * (Read only) The column number occupied by a Portlet within a PortalLayout.
		 * Flags: IR
		 */
		 colNum?: int;
		 // ref="attr:PortalPosition.position"
		/**
		 * (Read only) The position occupied by a Portlet within a PortalLayout row
		 * (generally 0, unless there is more than one Portlet in the row).
		 * Flags: IR
		 */
		 position?: int;
		 // ref="attr:PortalPosition.rowNum"
		/**
		 * (Read only) The row number occupied by a Portlet within a PortalLayout column.
		 * Flags: IR
		 */
		 rowNum?: int;
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
		 // ref="attr:HeaderLevel.headerWidth"
		/**
		 * (Read only) If set, the width for each of the spans in this headerLevel. Note that this setting only 
		 * has an effect on the innermost headerLevel.
		 * Flags: IR
		 */
		 headerWidth?: Integer;
		 // ref="attr:HeaderLevel.titles"
		/**
		 * (Read only) Optional sparse array of titles for the spans on this headerLevel. If a given span in this
		 * headerLevel has a corresponding entry in this array, it will be used as the span's title.
		 * 
		 * If not specified, default titles are generated (eg "Q1" for unit "quarter") and then passed
		 * into the HeaderLevel.titleFormatter','formatter function, if one has been installed,
		 * for further customization.
		 * Flags: IR
		 */
		 titles?: Array<String> /* Array of String */;
		 // ref="attr:HeaderLevel.unit"
		/**
		 * (Read only) Unit of time shown at this level of header.
		 * Flags: IR
		 */
		 unit?: TimeUnit;

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
		 * @param {String} defaultValue - the default title as generated by the Timeline
		 * @param {Calendar} viewer - a reference to the Calendar or Timeline
		 * @return {HTMLString} The formatted title for the values passed in
		 */
		titleFormatter?(headerLevel:HeaderLevel, startDate:Date, endDate:Date, defaultValue:String, viewer:Calendar): HTMLString; 

	} // HeaderLevel

	export interface HeaderLevelStatic {
	} // HeaderLevelStatic


	/**
	 * Encapsulates a client/server RPC request. You'll need to provide an instance of this class (or a
	 * constructor for it) to the RPCManager.sendRequest method. If you use the 
	 * RPCManager.send method, an instance of RPCRequest will be created for you. 
	 */
	export interface RPCRequest {
		 // ref="attr:RPCRequest.actionURL"
		/**
		 * Overrides RPCManager.actionURL for this request only. If you're using queuing, note that queues
		 * as per-URL - in other words all RPCRequests in a queue must go to a single URL. If you attempt
		 * to send a request with an actionURL that is different from those already in the queue, it
		 * will be sent to the server separately, ahead of the queue, and a warning will be logged to
		 * the Developer Console.
		 * Flags: IRW
		 */
		 actionURL?: URL;
		 // ref="attr:RPCRequest.allowIE9Leak"
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
		 * boolean - Null not allowed
		 * Flags: IRA
		 */
		 allowIE9Leak?: boolean;
		 // ref="attr:RPCRequest.bypassCache"
		/**
		 * (Advanced) For xmlHttp transport + httpMethod: "GET" only, set to true to force a conditional
		 * GET request even if the browser thinks it has a current cached response.
		 * Flags: IRWA
		 */
		 bypassCache?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.callback"
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
		 callback?: Callback /* RPCCallback */;
		 // ref="attr:RPCRequest.callbackParam"
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
		 callbackParam?: String;
		 // ref="attr:RPCRequest.clientContext"
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
		 clientContext?: Object;
		 // ref="attr:RPCRequest.containsCredentials"
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
		 containsCredentials?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.contentType"
		/**
		 * Valid with the xmlHttpRequest transport only and only when
		 * RPCRequest.httpMethod is set to "POST".
		 * Flags: IRW
		 */
		 contentType?: String;
		 // ref="attr:RPCRequest.data"
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
		 data?: String | Record | Object;
		 // ref="attr:RPCRequest.downloadResult"
		/**
		 * (Advanced) If enabled, causes the RPCRequest to download the requested resource as a file, either 
		 * showing the browser's Save dialog or displaying the file-content in 
		 * RPCRequest.downloadToNewWindow','a new browser window.
		 * 
		 * Setting this attribute to true means that no callback will be fired and implies that the 
		 * request will silently use RPCRequest.transport','transport: "hiddenFrame".
		 * Flags: IRWA
		 */
		 downloadResult?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.downloadToNewWindow"
		/**
		 * (Advanced) When RPCRequest.downloadResult','downloadResult is true, setting this attribute to
		 * true causes the content of the downloaded file to be displayed in a new browser window.
		 * Flags: IRWA
		 */
		 downloadToNewWindow?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.evalResult"
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
		 evalResult?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.evalVars"
		/**
		 * (Advanced) If you've set RPCRequest.evalResult : true, then the property values of this object
		 * will be available in the evaluation scope of the result under the variable names
		 * specified by the property names. 
		 * 
		 * So e.g. if evalVars is: {foo: "bar"} then a reference to the
		 * variable foo in the result will evaluate to "bar".
		 * Flags: IRWA, Group: viewLoading
		 */
		 evalVars?: Object;
		 // ref="attr:RPCRequest.httpHeaders"
		/**
		 * HTTP headers to send, as a Object mapping Header name -> Header value, eg
		 * { "Content-Type" : "text/xml" }
		 * 
		 * Valid with the xmlHttpRequest RPCRequest.transport','transport only.
		 * Flags: IRW
		 */
		 httpHeaders?: Object;
		 // ref="attr:RPCRequest.httpMethod"
		/**
		 * Selects the HTTP method that will be used for the request. Typical values are "POST" and
		 * "GET".
		 * 
		 * The more obscure "PUT", "DELETE" and "HEAD" methods are also valid, however, none of these
		 * are supported by the Safari browser previous to version 3.0.
		 * Flags: IRW
		 */
		 httpMethod?: String;
		 // ref="attr:RPCRequest.httpProxyURL"
		/**
		 * (Read only) The proxy URL to use for this request (if RPCRequest.useHttpProxy is set for this
		 * request). If unset, the value of RPCManager.httpProxyURL will be used instead.
		 * Flags: IR
		 */
		 httpProxyURL?: String;
		 // ref="attr:RPCRequest.ignoreTimeout"
		/**
		 * (Advanced) When set to true, no reply is expected from the server. However, if a reply is received, it will
		 * be processed.
		 * 
		 * Note: setting this to true, forces RPCRequest.sendNoQueue to true for
		 * this request.
		 * Flags: IRWA
		 */
		 ignoreTimeout?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.mockMode"
		/**
		 * (Read only) If enabled and request is applied to RPCManager.cacheScreens or
		 * RPCManager.loadScreen indicates that
		 * referenced DataSources should be loaded in mock mode.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 mockMode?: boolean;
		 // ref="attr:RPCRequest.omitNullMapValuesInResponse"
		/**
		 * (Advanced) If enabled, the server omits any key/value pairs in map that have null values from the
		 * response. This can reduce the size of the response when many fields have null values.
		 * 
		 * To enable this globally for all responses you can set RPCManager.omitNullMapValuesInResponse
		 * in server_properties','server.properties.
		 * Flags: IRWA
		 */
		 omitNullMapValuesInResponse?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.params"
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
		 params?: Object;
		 // ref="attr:RPCRequest.paramsOnly"
		/**
		 * (Advanced) When set to true, assume the request is not going to the SmartClient server, and hence send
		 * a simple HTTP request. Values specified in RPCRequest.params are sent to to the
		 * server as HTTP request parameters. If RPCRequest.httpMethod method is POST and
		 * RPCRequest.data is supplied, it is assumed to be a string to post as the HTTP
		 * requestBody.
		 * 
		 * Setting this to true automatically defaults RPCRequest.serverOutputAsString to true
		 * as well.
		 * boolean - Null not allowed
		 * Flags: IRWA
		 */
		 paramsOnly?: boolean;
		 // ref="attr:RPCRequest.prompt"
		/**
		 * Overrides RPCManager.defaultPrompt for this request only. If you're using queuing, note that the
		 * prompt string from the first request in the queue is the one that is shown to the user.
		 * Flags: IRW, Group: rpcPrompt
		 */
		 prompt?: HTMLString;
		 // ref="attr:RPCRequest.promptCursor"
		/**
		 * Controls the cursor shown when RPCManager.promptStyle is set to
		 * "cursor" for this request only. Defaults to RPCManager.promptCursor.
		 * Flags: IRW, Group: rpcPrompt
		 */
		 promptCursor?: String;
		 // ref="attr:RPCRequest.promptDelay"
		/**
		 * (Advanced) Overrides RPCManager.promptDelay for this request only. Defaults to RPCManager.promptDelay.
		 * 
		 * If you're using queuing, note that the promptDelay of the first request is used for the entire queue.
		 * Flags: IRWA, Group: rpcPrompt
		 */
		 promptDelay?: number;
		 // ref="attr:RPCRequest.promptStyle"
		/**
		 * Controls the prompt style for this request only. Defaults to
		 * RPCManager.promptStyle.
		 * Flags: IRW, Group: rpcPrompt
		 */
		 promptStyle?: PromptStyle;
		 // ref="attr:RPCRequest.sendNoQueue"
		/**
		 * (Advanced) When set to true, this request is sent to the server immediately, bypassing any current queue.
		 * Flags: IRWA
		 */
		 sendNoQueue?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.serverOutputAsString"
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
		 serverOutputAsString?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.showPrompt"
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
		 showPrompt?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.suppressAutoDraw"
		/**
		 * (Advanced) If RPCRequest.evalResult is set, setting this property to true causes
		 * Canvas.autoDraw to be set to false for the duration of the result evaluation -
		 * which is generally what you want if you're returning new components from the server.
		 * 
		 * This also effects components loaded via the RPCManager.loadScreen API.
		 * Flags: IRWA
		 */
		 suppressAutoDraw?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.timeout"
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
		 timeout?: int;
		 // ref="attr:RPCRequest.transport"
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
		 transport?: RPCTransport;
		 // ref="attr:RPCRequest.useHttpProxy"
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
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 useHttpProxy?: boolean;
		 // ref="attr:RPCRequest.useSimpleHttp"
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
		 useSimpleHttp?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.useXmlHttpRequest"
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
		 * boolean - Null not allowed
		 * Flags: IRWA
		 */
		 useXmlHttpRequest?: boolean;
		 // ref="attr:RPCRequest.willHandleError"
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
		 willHandleError?: boolean | null /* Boolean */;
		 // ref="attr:RPCRequest.withCredentials"
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
		 withCredentials?: boolean | null /* Boolean */;
	} // RPCRequest

	export interface RPCRequestStatic {
		 // ref="classAttr:RPCRequest.useCursorTracker"
		/**
		 * If true, an image is shown to the right of the cursor when RPCRequest.promptStyle is
		 * set to "cursor", otherwise the cursor itself is modified via css to the value of
		 * RPCRequest.promptCursor.
		 * 
		 * If left unspecified, the default value is set by RPCManager.useCursorTracker.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: rpcPrompt
		 */
		 useCursorTracker?: boolean;
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
	} // ClassFactoryStatic


	/**
	 * Defines a simple gradient vertical gradient between Gradient.startColor','two
	 * Gradient.endColor','colors, or using Gradient.colorStops','colorStops. See
	 * SimpleGradient, LinearGradient and RadialGradient for further
	 * properties to define more advanced gradients. 
	 */
	export interface Gradient {
		 // ref="attr:Gradient.colorStops"
		/**
		 * (Read only) An array of color stops for this gradient.
		 * Flags: IR
		 */
		 colorStops?: Array<ColorStop> /* Array of ColorStop */;
		 // ref="attr:Gradient.endColor"
		/**
		 * (Read only) An end color for the gradient. If both Gradient.startColor','startColor and endColor
		 * are set then Gradient.colorStops','colorStops is ignored.
		 * Flags: IR
		 */
		 endColor?: CSSColor;
		 // ref="attr:Gradient.id"
		/**
		 * (Read only) Identifier which can be used by one or more DrawItems when gradient is assigned
		 * to DrawPane.gradients. The ID property is optional when gradient is assigned directly
		 * to a DrawItem.
		 * 
		 * The ID must be unique within DrawPane.gradients if defined.
		 * Flags: IR
		 */
		 id?: Identifier;
		 // ref="attr:Gradient.startColor"
		/**
		 * (Read only) A start color for the gradient. If both startColor and Gradient.endColor','endColor
		 * are set then Gradient.colorStops','colorStops is ignored.
		 * Flags: IR
		 */
		 startColor?: CSSColor;
	} // Gradient

	export interface GradientStatic {
	} // GradientStatic


	/**
	 * Flags for XML serialization 
	 */
	export interface SerializationContext {
		 // ref="attr:SerializationContext.useFlatFields"
		/**
		 * (Read only) Enables flat serialization mode, as described for DSRequest.useFlatFields.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 useFlatFields?: boolean;
	} // SerializationContext

	export interface SerializationContextStatic {
	} // SerializationContextStatic


	/**
	 * Holds the information of a drawing command. 
	 */
	export interface DrawShapeCommand {
		 // ref="attr:DrawShapeCommand.args"
		/**
		 * (Read only) The command arguments. The number of arguments and their types depend on this command's DrawShapeCommand.type','type.
		 * Flags: IR
		 */
		 args?: Array<any> /* Array */;
		 // ref="attr:DrawShapeCommand.type"
		/**
		 * (Read only) The command type.
		 * Flags: IR
		 */
		 type?: DrawShapeCommandType;
	} // DrawShapeCommand

	export interface DrawShapeCommandStatic {
	} // DrawShapeCommandStatic


	/**
	 * Settings to control optional DataSource.load','DataSource loading features. 
	 */
	export interface DSLoadSettings {
		 // ref="attr:DSLoadSettings.forceReload"
		/**
		 * Forcibly reload a dataSource if it's already loaded.
		 * Flags: IRW
		 */
		 forceReload?: boolean | null /* Boolean */;
		 // ref="attr:DSLoadSettings.loadParents"
		/**
		 * Load parent DataSources
		 * Flags: IRW
		 */
		 loadParents?: boolean | null /* Boolean */;
		 // ref="attr:DSLoadSettings.mockMode"
		/**
		 * Place loaded DataSource into DataSource.mockMode','mockMode
		 * Flags: IRW
		 */
		 mockMode?: boolean | null /* Boolean */;
	} // DSLoadSettings

	export interface DSLoadSettingsStatic {
	} // DSLoadSettingsStatic


	/**
	 * Defines a set of properties that specify how the tree will be explored by Tree.discoverTree 
	 */
	export interface DiscoverTreeSettings {
		 // ref="attr:DiscoverTreeSettings.childrenMode"
		/**
		 * (Read only) When heuristically finding a property that appears to contain child objects, the childrenMode
		 * determines how to chose the property that appears to contain child objects
		 * Flags: IR
		 */
		 childrenMode?: ChildrenPropertyMode;
		 // ref="attr:DiscoverTreeSettings.nameProperty"
		/**
		 * For string leaf nodes (if allowed), the name of the property to store the string under
		 * in the auto-created object
		 * Flags: IRW
		 */
		 nameProperty?: String;
		 // ref="attr:DiscoverTreeSettings.newChildrenProperty"
		/**
		 * What to rename the array of children once discovered.
		 * If not set, it will default to the value of Tree.childrenProperty inside discoverTree()
		 * Flags: IRW
		 */
		 newChildrenProperty?: String;
		 // ref="attr:DiscoverTreeSettings.scanMode"
		/**
		 * Determines how to scan for the Tree.childrenProperty
		 * Flags: IRW
		 */
		 scanMode?: ScanMode;
		 // ref="attr:DiscoverTreeSettings.tieMode"
		/**
		 * What to do if there is more than one possible Tree.childrenProperty
		 * when using scanMode "branch" or "level"
		 * Flags: IRW
		 */
		 tieMode?: TieMode;
		 // ref="attr:DiscoverTreeSettings.typeProperty"
		/**
		 * Each discovered child is labeled with a configurable "typeProperty" set to the value
		 * of the property that held the children
		 * Flags: IRW
		 */
		 typeProperty?: String;
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
		 // ref="attr:EditNode.canDuplicate"
		/**
		 * See PaletteNode.canDuplicate.
		 * Flags: IRW
		 */
		 canDuplicate?: boolean | null /* Boolean */;
		 // ref="attr:EditNode.defaults"
		/**
		 * (Read only) Properties required to recreate the current EditNode.liveObject.
		 * Flags: IR
		 */
		 defaults?: Properties;
		 // ref="attr:EditNode.editProxyProperties"
		/**
		 * (Read only) Properties to be applied to the
		 * EditNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * 
		 * Note that the editProxy is created the first time a component is placed into
		 * editMode, so any editProxyProperties must be set before then.
		 * Flags: IR
		 */
		 editProxyProperties?: EditProxyProps /* EditProxy Properties */;
		 // ref="attr:EditNode.liveObject"
		/**
		 * (Read only) Live version of the object created from the EditNode.defaults. For example, 
		 * if EditNode.type is "ListGrid", liveObject would be a ListGrid.
		 * Flags: IR
		 */
		 liveObject?: Object;
		 // ref="attr:EditNode.type"
		/**
		 * (Read only) SCClassName of the EditNode.liveObject
		 * , for example, "ListGrid".
		 * Flags: IR
		 */
		 type?: SCClassName;
		 // ref="attr:EditNode.useEditMask"
		/**
		 * (Read only) Shortcut property to be applied to the
		 * EditNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * Flags: IR
		 */
		 useEditMask?: boolean | null /* Boolean */;
	} // EditNode

	export interface EditNodeStatic extends PaletteNodeStatic {
	} // EditNodeStatic


	/**
	 * Settings for use with SimpleType.applySummaryFunction. 
	 */
	export interface SummaryConfiguration {
		 // ref="attr:SummaryConfiguration.badFormulaResultValue"
		/**
		 * The field value to treat as the bad result of a user formula or summary evaluation.
		 * If a summary function actually uses the value (rather than say "count"), this usually
		 * means that the value will simply be skipped rather than voiding evaluation of the
		 * entire summary.
		 * Flags: IRW
		 */
		 badFormulaResultValue?: String;
		 // ref="attr:SummaryConfiguration.invalidSummaryValue"
		/**
		 * (Advanced) The field value to treat as an invalid value from a summary row (see 
		 * ListGrid.showGridSummary or ListGrid.showGroupSummary) or as an invalid value
		 * in a summary-type field (see ListGridFieldType','listGridFieldType:"summary").
		 * If a summary function actually uses the value (rather than say "count"), this usually
		 * means that the value will simply be skipped rather than voiding evaluation of the
		 * entire summary.
		 * Flags: IRWA
		 */
		 invalidSummaryValue?: String;
	} // SummaryConfiguration

	export interface SummaryConfigurationStatic {
	} // SummaryConfigurationStatic


	/**
	 * Returns information about how a data value is rendered in a chart. 
	 */
	export interface DrawnValue {
		 // ref="attr:DrawnValue.barThickness"
		/**
		 * (Read only) For bar and column charts, thickness of the bar representing this data value.
		 * Flags: IR
		 */
		 barThickness?: int;
		 // ref="attr:DrawnValue.endAngle"
		/**
		 * (Read only) For pie mode only, start angle of the segment for the data value.
		 * Flags: IR
		 */
		 endAngle?: int;
		 // ref="attr:DrawnValue.facetValues"
		/**
		 * (Read only) FacetValues for the data value.
		 * Flags: IR
		 */
		 facetValues?: FacetValueMap;
		 // ref="attr:DrawnValue.radius"
		/**
		 * (Read only) For pie mode only, the radius of the segment for the data value.
		 * Flags: IR
		 */
		 radius?: Double;
		 // ref="attr:DrawnValue.record"
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
		 record?: CellRecord;
		 // ref="attr:DrawnValue.startAngle"
		/**
		 * (Read only) For pie mode only, start angle of the segment for the data value.
		 * Flags: IR
		 */
		 startAngle?: int;
		 // ref="attr:DrawnValue.value"
		/**
		 * (Read only) Data value this drawnValue represents.
		 * Flags: IR
		 */
		 value?: Float /* float */;
		 // ref="attr:DrawnValue.x"
		/**
		 * (Read only) X coordinate where the data value is rendered. In pie mode, returns the X coordinate of the
		 * center of the pie where the data value appears.
		 * Flags: IR
		 */
		 x?: int;
		 // ref="attr:DrawnValue.y"
		/**
		 * (Read only) Y coordinate where the data value is rendered. In pie mode, returns the Y coordinate of the
		 * center of the pie where the data value appears.
		 * Flags: IR
		 */
		 y?: int;
	} // DrawnValue

	export interface DrawnValueStatic {
	} // DrawnValueStatic


	/**
	 * A Javascript object defining the details of a single group operation. Used by the 
	 * MultiGroupDialog','MultiGroupDialog to edit multi-level grouping scenarios for
	 * use by components that support grouping. 
	 */
	export interface GroupSpecifier {
		 // ref="attr:GroupSpecifier.context"
		/**
		 * (Read only) A DataBoundComponent providing the context for the group-normalizer.
		 * Flags: IR
		 */
		 context?: DataBoundComponent;
		 // ref="attr:GroupSpecifier.grouping"
		/**
		 * (Read only) The grouping mode applied by this specifier. The list of available modes can come either 
		 * from the associated ListGridField.groupingModes','field or from it's specified 
		 * SimpleType.groupingModes','data-type.
		 * Flags: IR
		 */
		 grouping?: String;
		 // ref="attr:GroupSpecifier.normalizer"
		/**
		 * (Read only) A normalizer function which this groupSpecifier will use to group.
		 * Flags: IR
		 */
		 normalizer?: Function;
		 // ref="attr:GroupSpecifier.property"
		/**
		 * (Read only) The property name, eg a ListGridField','field name, to which this groupSpecifier applies.
		 * Flags: IR
		 */
		 property?: String;
	} // GroupSpecifier

	export interface GroupSpecifierStatic {
	} // GroupSpecifierStatic


	/**
	 * Definition of a linear gradient between two points, (LinearGradient.x1','x1, LinearGradient.y1','y1)
	 * and (LinearGradient.x2','x2, LinearGradient.y2','y2). 
	 */
	export interface LinearGradient extends Gradient {
		 // ref="attr:LinearGradient.x1"
		/**
		 * (Read only) X coordinate of the start point. This can be a number or a percentage of the width of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		 x1?: String;
		 // ref="attr:LinearGradient.x2"
		/**
		 * (Read only) X coordinate of the end point. This can be a number or a percentage of the width of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		 x2?: String;
		 // ref="attr:LinearGradient.y1"
		/**
		 * (Read only) Y coordinate of the start point. This can be a number or a percentage of the height of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		 y1?: String;
		 // ref="attr:LinearGradient.y2"
		/**
		 * (Read only) Y coordinate of the end point. This can be a number or a percentage of the height of the
		 * bounding box of the DrawItem to which it is applied.
		 * Flags: IR
		 */
		 y2?: String;
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
		 // ref="attr:CellRecord.enabled"
		/**
		 * (Read only) Default property name denoting whether this record is enabled. Property name may be
		 * modified for some grid via ListGrid.recordEnabledProperty.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 enabled?: boolean;
	} // CellRecord

	export interface CellRecordStatic {
	} // CellRecordStatic


	/**
	 * Section descriptor used by a SectionStack to describe a section of items which are shown
	 * or hidden together along with their associated header. 
	 * 
	 * A section header (see SectionStack.sectionHeaderClass) is created from this
	 * descriptor when the SectionStack is created. Any changes after creation must be made to
	 * the section header: SectionStack.getSectionHeader.
	 * 
	 * Additional SectionHeader properties set on the SectionStackSection not explicitly
	 * documented, such as "iconAlign" or "prompt", are supported. 
	 */
	export interface SectionStackSection {
		 // ref="attr:SectionStackSection.canCollapse"
		/**
		 * (Read only) This attribute controls whether or not the expand/collapse UI control is shown on the
		 * header of this section. Any section can still be expanded/collapsed programmatically,
		 * regardless of this setting.
		 * Flags: I
		 */
		 canCollapse?: boolean | null /* Boolean */;
		 // ref="attr:SectionStackSection.canDropBefore"
		/**
		 * (Read only) When explicitly set to false, disallows drop before this member in the Layout.
		 * boolean - Null not allowed
		 * Flags: I, Group: layoutMember
		 */
		 canDropBefore?: boolean;
		 // ref="attr:SectionStackSection.canReorder"
		/**
		 * (Read only) If set to false, then this sectionHeader will not be able to be dragged to perform a drag
		 * reorder, if SectionStack.canReorderSections is true.
		 * You can also disable dropping other sections before this one by setting 
		 * Canvas.canDropBefore','canDropBefore to false.
		 * boolean - Null not allowed
		 * Flags: I
		 */
		 canReorder?: boolean;
		 // ref="attr:SectionStackSection.canTabToHeader"
		/**
		 * (Read only) If true, the header for this Section will be included in the page's tab
		 * order for accessibility. May also be set at the SectionStack level via 
		 * SectionStack.canTabToHeaders.
		 * 
		 * See accessibility.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canTabToHeader?: boolean;
		 // ref="attr:SectionStackSection.clipTitle"
		/**
		 * (Read only) If the title for this section header is too large for the available space, should the title be
		 * clipped?
		 * 
		 * This feature is supported only in browsers that support the CSS UI text-overflow
		 * property (IE6+, Firefox 7+, Safari, Chrome, Opera 9+).
		 * Flags: IR
		 */
		 clipTitle?: boolean | null /* Boolean */;
		 // ref="attr:SectionStackSection.controls"
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
		 controls?: Array<Canvas> /* Array of Canvas */;
		 // ref="attr:SectionStackSection.expanded"
		/**
		 * (Read only) Sections default to the collapsed state unless SectionStackSection.showHeader is
		 * set to false in which case they default to the expanded state. This
		 * attribute allows you to explicitly control the expand/collapse state of the
		 * section by overriding the above default behavior.
		 * boolean - Null not allowed
		 * Flags: I
		 */
		 expanded?: boolean;
		 // ref="attr:SectionStackSection.hidden"
		/**
		 * (Read only) Sections default to the visible state. This
		 * attribute allows you to explicitly control the visible/hidden state of the
		 * section by overriding the above default behavior.
		 * boolean - Null not allowed
		 * Flags: I
		 */
		 hidden?: boolean;
		 // ref="attr:SectionStackSection.icon"
		/**
		 * (Read only) Base filename of the icon that represents open and closed states. The default settings
		 * also change the icon for disabled sections, so a total of four images are required
		 * (opened, closed, Disabled_opened, Disabled_closed).
		 * 
		 * Not shown if SectionStackSection.canCollapse is false.
		 * Flags: IR
		 */
		 icon?: SCImgURL;
		 // ref="attr:SectionStackSection.ID"
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
		 ID?: String;
		 // ref="attr:SectionStackSection.items"
		/**
		 * (Read only) List of Canvases that constitute the section. These Canvases will be shown and hidden
		 * together.
		 * Flags: I
		 */
		 items?: Array<Canvas> /* Array of Canvas */;
		 // ref="attr:SectionStackSection.name"
		/**
		 * (Read only) Identifier for the section. This can be used later in calls to SectionStack APIs such as
		 * SectionStack.expandSection and SectionStack.collapseSection. Note that if no name
		 * is specified for the section, one will be auto-generated when the section is created.
		 * This property should be a string which may be used as a valid JavaScript identifier
		 * (should start with a letter and not contain space or special characters such as "*").
		 * Flags: IR
		 */
		 name?: String;
		 // ref="attr:SectionStackSection.resizeable"
		/**
		 * (Read only) If set to false, then the items in this section will not be resized by sectionHeader
		 * repositioning. You may also set this flag directly on any of the items in any section to
		 * cause that item to not be resizeable.
		 * boolean - Null not allowed
		 * Flags: I
		 */
		 resizeable?: boolean;
		 // ref="attr:SectionStackSection.showClippedTitleOnHover"
		/**
		 * If true and the title is clipped, then a hover containing the full title of this section header
		 * is enabled.
		 * Flags: IRW, Group: hovers
		 */
		 showClippedTitleOnHover?: boolean | null /* Boolean */;
		 // ref="attr:SectionStackSection.showHeader"
		/**
		 * (Read only) If true, a header will be shown for this section. If false, no header will be shown.
		 * Flags: I
		 */
		 showHeader?: boolean | null /* Boolean */;
		 // ref="attr:SectionStackSection.title"
		/**
		 * (Read only) Title to show for the section
		 * Flags: IR
		 */
		 title?: HTMLString;
	} // SectionStackSection

	export interface SectionStackSectionStatic {
	} // SectionStackSectionStatic


	/**
	 * Extensions to the Date class, including added static methods on the Date object, and
	 * additional instance methods available on all date instances. 
	 */
	export interface Date {

		/* Instance Method Overrides */
		/**  
		 * (Advanced)  Copy the value of this date into a new Date() object for independent manipulation
		 * 
		 */
		duplicate?(): void; 

		/**  
		 *  Return the full day of week name for this date (Monday, Tuesday, etc).
		 * To modify the value returned by this method, set DateUtil.dayNames
		 * 
		 * 
		 * @return {String} Day name
		 */
		getDayName?(): String; 

		/**  
		 *  gets the default date separator string
		 * 
		 * @return {String} the default date separator
		 */
		getDefaultDateSeparator?(): String; 

		/**  
		 *  Returns the fiscal week number of the current date, according to the global
		 * DateUtil.setFiscalCalendar','FiscalCalendar.
		 * 
		 * @param {FiscalCalendar} fiscalCalendar - the object representing the starts of fiscal years
		 * @return {int} the week number, offset from the start of the fiscal period
		 */
		getFiscalWeek?(fiscalCalendar?:FiscalCalendar): int; 

		/**  
		 *  Returns the FiscalYear object appropriate for the the current date, according to the
		 * FiscalCalendar','FiscalCalendar.
		 * 
		 * @return {FiscalYear} the fiscal year object
		 */
		getFiscalYear?(): FiscalYear; 

		/**  
		 *  Return the full name of the month for this date (January, February, etc)
		 * To modify the value returned by this method,
		 * set DateUtil.shortMonthNames
		 * .
		 * 
		 * @return {String} Month name
		 */
		getMonthName?(): String; 

		/**  
		 *  Return the abbreviated (up to 3 chars) day of week name for this date (Mon, Tue, etc).
		 * To modify the value returned by this method, set DateUtil.shortDayNames
		 * 
		 * 
		 * @param {int} length - Number of characters to return (Defaults to 3, can't be longer than 3)
		 * @return {String} Abbreviated day name
		 */
		getShortDayName?(length:int): String; 

		/**  
		 *  Return the abbreviated name of the month for this date (Jan, Feb, etc)
		 * To modify the value returned by this method,
		 * set DateUtil.shortMonthNames
		 * .
		 * 
		 * @param {int} length - Number of characters to return (Defaults to 3, can't be longer than 3)
		 * @return {String} Abbreviated month name (3 character string)
		 */
		getShortMonthName?(length:int): String; 

		/**  
		 *  Return a 2 digit year for this date.
		 * 
		 * @return {String} year number, padded to 2 characters
		 */
		getShortYear?(): String; 

		/**  
		 *  Returns an integer containing the week number.
		 * 
		 * @return {int} week number, starting with 1
		 */
		getWeek?(): int; 

		/**  
		 *  Sets a new default separator that will be used when formatting dates. By default, this
		 * is a forward slash character: "/"
		 * 
		 * @param {String} separator - separator to use in dates
		 */
		setDefaultDateSeparator?(separator:String): void; 

		/**  
		 *  Return this date in the format (UTC timezone):
		 * YYYYMMDDTHHMMSS[Z]
		 * 
		 * @return {String} formatted date string
		 */
		toDateStamp?(): String; 

		/**  
		 *  Return this date in the format: DD/MM/YYYY
		 * 
		 * @return {String} formatted date string
		 */
		toEuropeanShortDate?(): String; 

		/**  
		 *  Return this date in the format: DD/MM/YYYY HH:MM.
		 * 
		 * @return {String} formatted date string
		 */
		toEuropeanShortDateTime?(): String; 

		/**  
		 *  Return the date in this format: YYYY/MM/DD
		 * 
		 * @return {String} formatted date string
		 */
		toJapanShortDate?(): String; 

		/**  
		 *  Return this date in the format: YYYY/MM/DD HH:MM:SS
		 * 
		 * @return {String} formatted date string
		 */
		toJapanShortDateTime?(): String; 

		/**  
		 *  Returns the date as a formatted string using the format set up via the
		 * setNormalDisplayFormat() method. Note that the default formatter for this
		 * method is "toLocaleString".
		 * 
		 * @param {DateDisplayFormat} format - Optional Format for the date returned
		 * @return {String} formatted date string
		 */
		toNormalDate?(format:DateDisplayFormat): String; 

		/**  
		 *  Returns the datetime as a formatted string using the format set up via the
		 * setNormalDatetimeDisplayFormat() method.
		 * 
		 * @param {DateDisplayFormat} format - Optional Format for the date returned
		 * @param {boolean} useCustomTimezone - If a custom timezone has been set via Time.setDefaultDisplayTimezone(), by default date formatters will respect this timezone.
		 * To suppress this behavior, this parameter should be set to false.
		 * @return {String} formatted date string
		 */
		toNormalDatetime?(format:DateDisplayFormat, useCustomTimezone?:boolean | null /* Boolean */): String; 

		/**  
		 * (Advanced)  Return this date in 'serialized' format YYYY-MM-DD HH:MM:SS
		 * 
		 * @return {String} formatted date string
		 */
		toSerializeableDate?(): String; 

		/**  
		 *  Returns the date as a formatted string using the format set up via the
		 * setShortDisplayFormat() method.
		 * 
		 * @param {DateDisplayFormat} format - Optional Format for the date returned
		 * @param {boolean} useCustomTimezone - If a custom timezone has been set via Time.setDefaultDisplayTimezone(), by default date formatters will respect this timezone.
		 * to suppress this behavior, this parameter should be set to false.
		 * @return {String} formatted date string
		 */
		toShortDate?(format:DateDisplayFormat, useCustomTimezone?:boolean | null /* Boolean */): String; 

		/**  
		 *  Returns the datetime as a formatted string using the format set up via the
		 * setShortDatetimeDisplayFormat() method.
		 * 
		 * @param {DateDisplayFormat} format - Optional Format for the date returned
		 * @param {boolean} useCustomTimezone - If a custom timezone has been set via Time.setDefaultDisplayTimezone(), by default date formatters will respect this timezone.
		 * to suppress this behavior, this parameter should be set to false.
		 * @return {String} formatted date string
		 */
		toShortDateTime?(format:DateDisplayFormat, useCustomTimezone?:boolean | null /* Boolean */): String; 

		/**  
		 *  Return this date in the format: MM/DD/YYYY
		 * 
		 * @return {String} formatted date string
		 */
		toUSShortDate?(): String; 

		/**  
		 *  Return this date in the format: MM/DD/YYYY HH:MM
		 * 
		 * 
		 * @return {String} formatted date string
		 */
		toUSShortDateTime?(): String; 

	} // Date

	export interface DateStatic {
		 // ref="classAttr:Date.dayNames"
		/**
		 * (Advanced) This property may be set to an array of names of days of the week. 
		 * For example:
		 * 
		 * ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		 * 
		 * The appropriate day name will then be returned from Date.getDayName, and may
		 * be used whenever SmartClient components display day-names (for example in the
		 * DateItem','DateItem class).
		 * Flags: IRWA, Group: i18nMessages
		 */
		 dayNames?: Array<any> /* Array */;
		 // ref="classAttr:Date.monthNames"
		/**
		 * (Advanced) This property may be set to an array of names of months.
		 * For example:
		 * 
		 * ["January", "February", "March", "April", "May", "June", "July", 
		 * "August", "September", "October", "November", "December"]
		 * 
		 * The appropriate month name will then be returned from Date.getMonthName,
		 * and may be used whenever SmartClient components display month-names (for example in the
		 * DateItem','DateItem class).
		 * Flags: IRWA, Group: i18nMessages
		 */
		 monthNames?: Array<any> /* Array */;
		 // ref="classAttr:Date.shortDayNames"
		/**
		 * (Advanced) This property may be set to an array of names of days of the week. 
		 * For example:
		 * 
		 * ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		 * 
		 * The appropriate day name will then be returned from Date.getShortDayName, and may
		 * be used whenever SmartClient components display day-names (for example in the
		 * DateItem','DateItem class).
		 * Note: For US based applications the first item in the array should be the name for Sunday,
		 * then Monday, Tuesday, etc. For browsers with different locales this may vary.
		 * To determine the first day for some locale, you can run the following code:
		 * 
		 * alert(new Date(2000, 0, 2).getDay());
		 * 
		 * You should see an alert with a number between zero and 6. This represents the numerical
		 * 'day' value for Sunday for your browser's locale, since Jan 2nd 2000 was a Sunday.
		 * Therefore if this code alerted the number 6, Sunday should appear last in your list
		 * of day-names, and Monday first.
		 * Flags: IRWA, Group: i18nMessages
		 */
		 shortDayNames?: Array<any> /* Array */;
		 // ref="classAttr:Date.shortMonthNames"
		/**
		 * (Advanced) This property may be set to an array of shortened month-names.
		 * For example:
		 * 
		 * ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		 * 
		 * The appropriate month name will then be returned from Date.getShortMonthName,
		 * and may be used whenever SmartClient components display month-names (for example in the
		 * DateItem','DateItem class).
		 * Flags: IRWA, Group: i18nMessages
		 */
		 shortMonthNames?: Array<any> /* Array */;
		 // ref="classAttr:Date.weekendDays"
		/**
		 * (Read only) Days that are considered "weekend" days. Values should be the integers returned by the
		 * JavaScript built-in Date.getDay(), eg, 0 is Sunday and 6 is Saturday. Override to
		 * accommodate different workweeks such as Saudi Arabia (Saturday -> Wednesday) or Israel
		 * (Sunday -> Thursday).
		 * Flags: IR
		 */
		 weekendDays?: Array<int> /* Array of int */;

	/* Methods */
		/**
		 * (DEPRECATED) Use DateUtil.combineLogicalDateAndTime.
		 * @deprecated Use DateUtil.combineLogicalDateAndTime.
		 * @return {Date} a Date instance representing a datetime value combining the logical date and                time passed
		 */
		combineLogicalDateAndTime(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.compareDates.
		 * @deprecated Use DateUtil.compareDates.
		 * @return {int} 0 if equal, -1 if first date &gt; second date, 1 if second date &gt; first date
		 */
		compareDates(): int; 

		/**
		 * (DEPRECATED) Use DateUtil.compareLogicalDates.
		 * @deprecated Use DateUtil.compareLogicalDates.
		 * @return {int} 0 if equal, -1 if first date &gt; second date, 1 if second date &gt;                      first date.  Returns false if either argument is not a date
		 */
		compareLogicalDates(): int; 

/* Skipped - because: Conflicts with Class.create(). Not sure what to do about this yet

		/**
		 * (DEPRECATED) Use DateUtil.create.
		 * @deprecated Use DateUtil.create.
		 * @return {Date} Date object
		 * /
		create(): Date; 


 */ 

		/**
		 * (DEPRECATED) Use DateUtil.createLogicalDate.
		 * @deprecated Use DateUtil.createLogicalDate.
		 * @return {Date} new javascript Date object representing the Date in question
		 */
		createLogicalDate(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.createLogicalTime.
		 * @deprecated Use DateUtil.createLogicalTime.
		 * @return {Date} new Javascript Date object representing the time in question
		 */
		createLogicalTime(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.getDefaultDateSeparator.
		 * @deprecated Use DateUtil.getDefaultDateSeparator.
		 * @return {String} the default date separator
		 */
		getDefaultDateSeparator(): String; 

		/**
		 * (DEPRECATED) Use DateUtil.getFirstDayOfWeek.
		 * @deprecated Use DateUtil.getFirstDayOfWeek.
		 * @return {int} the number of the day being used as the first day of the week
		 */
		getFirstDayOfWeek(): int; 

		/**
		 * (DEPRECATED) Use DateUtil.getFiscalCalendar.
		 * @deprecated Use DateUtil.getFiscalCalendar.
		 * @return {FiscalCalendar} the FiscalCalendar object
		 */
		getFiscalCalendar(): FiscalCalendar; 

		/**
		 * (DEPRECATED) Use DateUtil.getFiscalStartDate.
		 * @deprecated Use DateUtil.getFiscalStartDate.
		 * @return {Date} the start of the fiscal year for the passed date and fiscalCalendar
		 */
		getFiscalStartDate(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.getFiscalWeek.
		 * @deprecated Use DateUtil.getFiscalWeek.
		 * @return {int} the fiscal week for the passed date
		 */
		getFiscalWeek(): int; 

		/**
		 * (DEPRECATED) Use DateUtil.getFiscalYear.
		 * @deprecated Use DateUtil.getFiscalYear.
		 * @return {FiscalYear} the ${isc.DocUtils.linkForRef('object:FiscalYear')} object for the passed date
		 */
		getFiscalYear(): FiscalYear; 

		/**
		 * (DEPRECATED) Use DateUtil.getInputFormat.
		 * @deprecated Use DateUtil.getInputFormat.
		 * @return {String} the current inputFormat for dates
		 */
		getInputFormat(): String; 

		/**
		 * (DEPRECATED) Use DateUtil.getLogicalDateOnly.
		 * @deprecated Use DateUtil.getLogicalDateOnly.
		 * @return {Date} a Date instance representing just the date portion of the datetime value, as                a logical date
		 */
		getLogicalDateOnly(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.getLogicalTimeOnly.
		 * @deprecated Use DateUtil.getLogicalTimeOnly.
		 * @return {Date} a Date instance representing just the time portion of the datetime value, as                a logical time
		 */
		getLogicalTimeOnly(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.getWeekendDays.
		 * @deprecated Use DateUtil.getWeekendDays.
		 * @return {Array<Integer>} array of weekend days
		 */
		getWeekendDays(): Array<Integer> /* Array of Integer */; 

		/**
		 * (DEPRECATED) Use DateUtil.parseInput.
		 * @deprecated Use DateUtil.parseInput.
		 * @return {Date} date value, or null if the string could not be parsed to a valid date.
		 */
		parseInput(): Date; 

		/**
		 * (DEPRECATED) Use DateUtil.setDefaultDateSeparator.
		 * @deprecated Use DateUtil.setDefaultDateSeparator.
		 */
		setDefaultDateSeparator(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setFirstDayOfWeek.
		 * @deprecated Use DateUtil.setFirstDayOfWeek.
		 */
		setFirstDayOfWeek(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setFiscalCalendar.
		 * @deprecated Use DateUtil.setFiscalCalendar.
		 */
		setFiscalCalendar(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setInputFormat.
		 * @deprecated Use DateUtil.setInputFormat.
		 */
		setInputFormat(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setNormalDatetimeDisplayFormat.
		 * @deprecated Use DateUtil.setNormalDatetimeDisplayFormat.
		 */
		setNormalDatetimeDisplayFormat(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setNormalDisplayFormat.
		 * @deprecated Use DateUtil.setNormalDisplayFormat.
		 */
		setNormalDisplayFormat(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setShortDatetimeDisplayFormat.
		 * @deprecated Use DateUtil.setShortDatetimeDisplayFormat.
		 */
		setShortDatetimeDisplayFormat(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setShortDisplayFormat.
		 * @deprecated Use DateUtil.setShortDisplayFormat.
		 */
		setShortDisplayFormat(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setShowChooserFiscalYearPickers.
		 * @deprecated Use DateUtil.setShowChooserFiscalYearPickers.
		 */
		setShowChooserFiscalYearPickers(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setShowChooserWeekPickers.
		 * @deprecated Use DateUtil.setShowChooserWeekPickers.
		 */
		setShowChooserWeekPickers(): void; 

		/**
		 * (DEPRECATED) Use DateUtil.setWeekendDays.
		 * @deprecated Use DateUtil.setWeekendDays.
		 */
		setWeekendDays(): void; 

	} // DateStatic


	/**
	 * Metadata about a DataSourceField, including its type and validators. 
	 */
	export interface DataSourceField {
		 // ref="attr:DataSourceField.allowClientRequestedSummaries"
		/**
		 * (Read only) Affects whether client dsRequests can request summaries for this field.
		 * 
		 * Default setting of null means that the DataSource-wide default setting
		 * DataSource.allowClientRequestedSummaries is used for this field.
		 * boolean - Null not allowed
		 * Flags: IR, Group: serverSummaries
		 */
		 allowClientRequestedSummaries?: boolean;
		 // ref="attr:DataSourceField.audit"
		/**
		 * (Read only) Setting audit to false explicitly indicates that this field will
		 * not be saved to the audit DataSource when DataSource.audit','auditing is enabled.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 audit?: boolean;
		 // ref="attr:DataSourceField.autoGenerated"
		/**
		 * (Read only) Indicates that values for this field are automatically generated by the database or ORM 
		 * provider. Setting this flag makes the field behave somewhat like a 
		 * DataSourceField.sequenceName','sequence field, in that server-side logic does not expect client code
		 * to provide values for the field on "add" operations. However, it is not entirely the same
		 * as a sequence:
		 * Sequences must be integers, whereas autoGenerated fields can be of any type
		 * SmartClient Server's DataSource implementations are capable of discovering the value 
		 * that was generated by the database for sequence fields, which may not be possible 
		 * with an autoGenerated field. See the docs for 
		 * DataSourceField.customInsertExpression','customInsertExpression for a discussion
		 * of this
		 * 
		 * Unrelated to the autoGenerated flag, you have a general ability for field 
		 * values to be generated by application code (as opposed to being generated by the database
		 * or ORM provider). For example, you can use dmiOverview','DMI methods, 
		 * serverScript','server scripts, or customQuerying','custom SQL. (Note, 
		 * if you want to have application code generate values for primaryKey fields, you may need to
		 * use an OperationBinding','operationBinding that specifies 
		 * OperationBinding.providesMissingKeys','providesMissingKeys).
		 * boolean - Null not allowed
		 * Flags: IR, Group: dataType
		 */
		 autoGenerated?: boolean;
		 // ref="attr:DataSourceField.autoQuoteCustomExpressions"
		/**
		 * (Read only) If explicitly set to false, switches off automatic quoting and escaping of values in
		 * custom expressions that are derived from Velocity evaluations.
		 * 
		 * By default, any part of a DataSourceField.customSelectExpression','customSelectExpression,
		 * DataSourceField.customCriteriaExpression','customCriteriaExpression,
		 * DataSourceField.customUpdateExpression','customUpdateExpression or 
		 * DataSourceField.customInsertExpression','customInsertExpression that comes ultimately from evaluating
		 * a Velocity expression, will be automatically quoted and escaped according to the syntax 
		 * of the underlying database. We do this because "raw" values are vulnerable to 
		 * <a href="http://en.wikipedia.org/wiki/SQL_injection">SQL injection attacks</a>.
		 * 
		 * However, it is possible that the exact SQL logic you desire for a custom expression cannot
		 * be expressed without access to the raw, unquoted value. To work around this, you can either
		 * use the special velocitySupport','$rawValue context variable, or you can set this
		 * property to false to switch off auto-quoting completely for all custom expressions on this
		 * field.
		 * 
		 * Warning: Bear in mind that it is dangerous to use raw values. There are some
		 * cases where using the raw value is necessary, but even so, all such cases are likely to be
		 * vulnerable to injection attacks. Generally, the presence of $rawValue in a 
		 * custom expression, or any fields with autoQuoteCustomExpressions: false 
		 * specified, should be viewed as a red flag.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 autoQuoteCustomExpressions?: boolean;
		 // ref="attr:DataSourceField.canEdit"
		/**
		 * (Read only) Controls whether, by default, DataBoundComponents consider this field editable. 
		 * Set to false to draw this field read-only. 
		 * 
		 * For a field that should never be changed from the UI, consider using DataSourceField.canSave instead,
		 * which will both mark a field as non-editable and reject any attempt to programmatically
		 * change the value on the server (when using the SmartClient Server).
		 * 
		 * This attribute may not effect all dataBoundComponents - the 
		 * DataBoundComponent.canEditFieldAttribute may be set at the component level to look
		 * for a different attribute on the dataSourceField, and components allow developers to explicitly
		 * override this default (see ListGridField.canEdit. FormItem.canEdit for example).
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentBinding
		 */
		 canEdit?: boolean;
		 // ref="attr:DataSourceField.canExport"
		/**
		 * (Read only) Dictates whether the data in this field be exported. Explicitly setting 
		 * canExport to false overrides the setting on any component-fields, such
		 * as ListGridField.canExport','ListGrid fields.
		 * Flags: IR
		 */
		 canExport?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.canFilter"
		/**
		 * (Read only) Should the user be able to filter data by this field?
		 * Affects whether this field will show up in dataBoundComponents with UI for filtering data.
		 * 
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canFilter?: boolean;
		 // ref="attr:DataSourceField.canSave"
		/**
		 * (Read only) Whether values in this field can be updated and saved to the dataSource.
		 * 
		 * If set to false, this field will default to being non-editable in standard editing
		 * components (DynamicForm, editable ListGrid), but will be editable when displayed
		 * for filtering purposes only (in a SearchForm or ListGrid.showFilterEditor','ListGrid\n filter editor. If DataSourceField.canEdit','canEdit is explicitly specified it will take 
		 * precedence over this client-side behavior, but the server will still enforce the no-save
		 * policy (described below).
		 * 
		 * NOTE: If you are using SmartClient Server and have specified canSave: false 
		 * for a field in a DataSource definition (.ds.xml file), this is enforced on 
		 * the server. This means that we will strip out any attempt to set the value of such a 
		 * field before trying to process any update or add request, similar to what happens when 
		 * a DataSourceField.editRequiresAuthentication','field-level declarative security check fails.
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentBinding
		 */
		 canSave?: boolean;
		 // ref="attr:DataSourceField.canSortClientOnly"
		/**
		 * When true, this field can only be used for sorting if the data is entirely client-side.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 canSortClientOnly?: boolean;
		 // ref="attr:DataSourceField.canView"
		/**
		 * (Read only) If false, this property indicates that this field is considered "server only". This means:
		 * 
		 * Components cannot bind to the field; even if you explicitly add a field with the same 
		 * name to your DataBoundComponent','dataBoundComponent, it will be dropped
		 * If you are using SmartClient Server, the client will never be sent a value for the 
		 * field
		 * If you are using SmartClient Server, then similar to DataSourceField.canEdit','canEdit, no updates
		 * to the field are allowed from the client. If you explicitly add a value for the field 
		 * to, eg, a record you are passing to DataSource.updateData, the server will strip
		 * the value out of the record before processing the update request.
		 * 
		 * canView:false is not the same thing as DataSourceField.hidden','hidden. Use 
		 * canView:false when you want to prevent the client from ever seeing a field's 
		 * definition or values; use hidden:true if it is fine from a security perspective
		 * that a field's definition and values are sent to the browser, but the field should not by
		 * default appear in user interface elements (but could do in some cases, like a special screen
		 * for advanced users or administrators, for example).
		 * 
		 * Note that this property must be set explicitly to false to have an effect; a null or 
		 * undefined setting is treated the same as true.
		 * 
		 * This property is used to implement field-level view security: failing a 
		 * DataSourceField.viewRequiresAuthentication','viewRequiresAuthentication, 
		 * DataSourceField.viewRequiresRole','viewRequiresRole or DataSourceField.viewRequires','viewRequires test is 
		 * equivalent to setting canView:false on the field (and, indeed, from the 
		 * client's perspective, the field <em>has</em> had canView:false set).
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentBinding
		 */
		 canView?: boolean;
		 // ref="attr:DataSourceField.childrenProperty"
		/**
		 * (Read only) If true, this property indicates that this field will hold an explicit array of child nodes 
		 * for the current node.
		 * This has the same effect as specifying DataSource.childrenField to this field's 
		 * name.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 childrenProperty?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.childTagName"
		/**
		 * (Read only) For a field that is DataSourceField.multiple','multiple:"true", controls the name of the XML tag used for each
		 * subelement during DataSource.xmlSerialize.
		 * 
		 * If unset, the default tag name is "value" for a field of simple type, and for a field of
		 * DataSource type, is the tagName or ID of the DataSource (as though
		 * xmlSerialize() were called on the child DataSource).
		 * Flags: IR, Group: xmlSerialize
		 */
		 childTagName?: String;
		 // ref="attr:DataSourceField.columnCode"
		/**
		 * (Read only) See DataSource.tableCode.
		 * Flags: R
		 */
		 columnCode?: String;
		 // ref="attr:DataSourceField.creatorOverrides"
		/**
		 * (Read only) Indicates that normal declarative security rules specified on this field are waived for 
		 * rows that were created by the current user, as described in the discussion of 
		 * DataSource.creatorOverrides','dataSource.creatorOverrides. This setting overrides 
		 * dataSource.creatorOverrides, for this field only.
		 * 
		 * Note that field-level creatorOverrides is conceptually slightly different to
		 * the setting at DataSource and OperationBinding levels. To give the example of a fetch 
		 * operation, at the other two levels, it results in a limited set of rows being returned, 
		 * rather than a security exception being thrown. At the field-level, it results in values 
		 * for individual fields being present in those rows, rather than them being stripped out on
		 * the server.
		 * boolean - Null not allowed
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 creatorOverrides?: boolean;
		 // ref="attr:DataSourceField.customCriteriaExpression"
		/**
		 * (Read only) This property indicates that this field should be represented by a custom expression
		 * embedded in the WHERE clause of the generated SQL, instead of the generated expression
		 * containing this field name that would ordinarily be used. You use this property when 
		 * you have to accomodate some special way of using a field's value in criteria, other than by
		 * directly comparing it to the criteria. For example, if you have a column that contains 
		 * bit-packed information you will generally need to perform a bitwise AND to filter on that 
		 * column, rather than an equality check. In this case, you would use a 
		 * customCriteriaExpression something like this (in Oracle):
		 * 
		 * &nbsp;&nbsp;&nbsp;BITAND(myField, $criteria.myField)+0 = $criteria.myField
		 * 
		 * Or this (in MySQL or SQL Server):
		 * 
		 * &nbsp;&nbsp;&nbsp;myField & $criteria.myField = $criteria.myField
		 * 
		 * As this example shows, a customCriteriaExpression is expected to be a complete
		 * logical expression that provides both sides of the comparison. After Velocity processing,
		 * this example would result in SQL similar to this (for the MySQL case); the colored part 
		 * comes entirely from the customCriteriaExpression:
		 * 
		 * SELECT myField, myOtherField FROM myTable WHERE <font color='blue'>myField & 32 = 32</font>
		 * 
		 * customCriteriaExpression can also be used with AdvancedCriteria.
		 * Note that the point mentioned above, about a customCriteriaExpression being a 
		 * complete logical expression that provides both sides of the comparison still applies. This
		 * means that when you use customCriteriaExpression in conjunction with 
		 * AdvancedCriteria, you effectively switch off support for different 
		 * OperatorIds to be used on that field, unless you use Velocity expressions 
		 * containing the special $criteriaOperator variable (see below).
		 * 
		 * When you use customCriteriaExpression with AdvancedCriteria, the 
		 * way you access criteria values differs slightly. One option is to use the 
		 * $advancedCriteria Velocity variable, as described in the "Using AdvancedCriteria"
		 * section of the customQuerying','custom querying overview. However, this 
		 * variable only returns the value from the first Criterion that uses the field,
		 * as found by depth-first search. If your AdvancedCriteria contains multiple 
		 * references to this field, this will not be satisfactory. Therefore, specifically for 
		 * customCriteriaExpression, we provide another Velocity variable, 
		 * $criteriaValue. This variable means "the value on a Criterion referencing 
		 * this field". An example may serve to clarify this:
		 * 
		 * Assume you need to extend the above example to filter records where a certain bit is set 
		 * OR a certain other bit is set. An AdvancedCriteria like this would be 
		 * required (note that the choice of "equals" as the operator in these clauses is completely
		 * arbitrary - as discussed above, the operator is ignored when we have a 
		 * customCriteriaExpression, so it would make no difference to the end product 
		 * if we had used different operators here):
		 * { _constructor: "AdvancedCriteria", operator: "or", criteria: [
		 * { fieldName: "myField", operator: "equals", value: 32 },
		 * { fieldName: "myField", operator: "equals", value: 64 },
		 * ]
		 * } 
		 * 
		 * If you used the customCriteriaExpression from above unchanged with this criteria,
		 * the following SQL would be generated (in the MySQL case):
		 * 
		 * SELECT myField, myOtherField FROM myTable WHERE myField & null = null OR myField & null = null
		 * 
		 * This is because $criteria is a variable that only works correctly with simple
		 * criteria. If you changed the $criteria references in the expression to 
		 * $advancedCriteria, the generated SQL would be:
		 * 
		 * SELECT myField, myOtherField FROM myTable WHERE myField & 32 = 32 OR myField & 32 = 32
		 * 
		 * This is because $advancedCriteria always returns the first value it finds for
		 * a particular field, as described above. However, if you change the expression so it reads:
		 * 
		 * &nbsp;&nbsp;&nbsp;myField & $criteriaValue = $criteriaValue
		 * 
		 * you will now get the correct SQL generated:
		 * 
		 * SELECT myField, myOtherField FROM myTable WHERE myField & 32 = 32 OR myField & 64 = 64
		 * 
		 * Similar to $criteriaValue, we provide a special variable, 
		 * $criteriaOperator. This is intended for use in Velocity expressions, so that 
		 * your customCriteriaExpression can process different operators in different ways.
		 * How you choose to interpret an operator is entirely up to you; this variable is both 
		 * advanced and rarely used. This example is contrived and does not show a usage that would be 
		 * remotely likely in a real application, but it does show how to use the variable in a Velocity
		 * expression:
		 * 
		 * &nbsp;&nbsp;&nbsp;myField #if ($criteriaOperator == "greaterThan") & #else | #end $criteriaValue = $criteriaValue
		 * 
		 * For simple criteria, note that $criteriaOperator will vary depending on field
		 * type and the TextMatchStyle','textMatchStyle in force, as follows:
		 * Text fields with textMatchStyle "substring" - "iContains"
		 * Text fields with textMatchStyle "startsWith" - "iStartsWith"
		 * Text fields with textMatchStyle "exact" - "iEquals"
		 * All other cases (including text fields with textMatchStyle "exactCase") - "equals"
		 * 
		 * You can use Velocity expressions in your customCriteriaExpressions, and the 
		 * velocitySupport','usual context variables are available. Note that the results
		 * of Velocity evaluations are automatically quoted and escaped by default; this behavior can
		 * be switched off - see DataSourceField.autoQuoteCustomExpressions','autoQuoteCustomExpressions, and 
		 * particularly note the warnings about its use.
		 * 
		 * Note that this property only applies to users of the SmartClient server using dataSources of
		 * type "sql".
		 * Flags: IR
		 */
		 customCriteriaExpression?: VelocityExpression;
		 // ref="attr:DataSourceField.customInsertExpression"
		/**
		 * (Read only) This property is similar to DataSourceField.customUpdateExpression','customUpdateExpression; its value
		 * is used during "add" operations. If you do not specify this property, but do specify a 
		 * customUpdateExpression, the customUpdateExpression is used instead.
		 * 
		 * Everything that applies to customUpdateExpression also applies to this property,
		 * including the observation that fields which specify a 
		 * DataSourceField.customSelectExpression','customSelectExpression but no corresponding 
		 * customUpdateExpression or customInsertExpression, will be ignored
		 * when adding new records.
		 * 
		 * As with customUpdateExpression, this property is only intended to be used when
		 * you have a need to customize the actual SQL. If you simply want to use a server-derived 
		 * value in the query, you should use transactionChaining','Transaction Chaining, 
		 * dmiOverview','DMI, or a serverScript','server script instead.
		 * 
		 * <h3>customInsertExpression with primaryKey fields</h3>
		 * 
		 * if you use customInsertExpression to derive a value for a 
		 * DataSourceField.primaryKey','primaryKey field, the key value will not by default be 
		 * available to the framework, so the built-in cache synchronization system will not work.
		 * It may be possible to to work around this with the 
		 * DataSourceField.autoGenerated','autoGenerated flag, as described below, but otherwise 
		 * you must also create a OperationBinding.cacheSyncOperation','cacheSyncOperation which 
		 * can retrieve the record just added to the database. Please also see the documentation for
		 * SequenceMode','SequenceMode "none", which talks further about cacheSyncOperation.
		 * 
		 * Typically, primaryKey fields that need to be auto-generated are implemented
		 * using a sequence field, which at the database level translates to either an actual sequence,
		 * or an auto-increment or "identity" column. JDBC drivers have special support for such
		 * columns, so we are able to determine the generated value. This is important for primaryKey 
		 * fields because, without it, we cannot re-fetch the record just inserted for cache 
		 * synchronization purposes, as described above. Where a value is generated by something other
		 * than a sequence field, this special ability is lost - or at least, it is no longer 
		 * guaranteed to be present.
		 * 
		 * There are use cases where this may seem to be a restriction. A common case would be where 
		 * you wish to use a generated UUID as primaryKey value, rather than an ordinary ascending 
		 * sequence. If you had intended to do this using the database itself - for example, 
		 * specifying a customInsertExpression that calls something like MySQL's 
		 * UUID() built-in function - this is potentially a problem. What we
		 * would recommend in this case and anything similar, is to use the general ability for field 
		 * values to be generated by application code, as described above. (Note, if you want to have
		 * application code generate values for primaryKey fields, you may need to use an 
		 * OperationBinding','operationBinding that specifies 
		 * OperationBinding.providesMissingKeys','providesMissingKeys). 
		 * 
		 * That said, different database vendors implement their JDBC drivers in different ways, and 
		 * with the SQLDataSource and certain database products it is possible to retrieve 
		 * values that were generated at the database level by a customInsertExpression 
		 * that expresses either a user-defined function call or an inline subselect, as long as the 
		 * field is marked with the autoGenerated flag. Because this behavior
		 * is potentially useful, we do not inhibit it; however, we also do not recommend that you make 
		 * use of it, because the behavior is not portable across databases, and may also not be 
		 * portable across JDBC driver versions (because the behavior is unspecified and undocumented,
		 * and relies on implementation details that may change). Databases where this behavior has 
		 * been observed to work include Oracle, Postgres and HSQLDB; databases where this behavior is 
		 * known not to work include MySQL, SQL Server, DB2 and Firebird (the latter because its JDBC 
		 * driver does not support the getGeneratedKeys() API)
		 * 
		 * Note that this property only applies to users of the SmartClient server using dataSources of
		 * type "sql".
		 * Flags: IR
		 */
		 customInsertExpression?: VelocityExpression;
		 // ref="attr:DataSourceField.customSelectExpression"
		/**
		 * (Read only) This property indicates that this field represents a custom expression that should be 
		 * embedded in the generated SQL instead of a reference to this field. For example, if 
		 * you have a field partialName where this value is set to 
		 * SUBSTR(surname, 2), the generated SQL would look similar to this:
		 * 
		 * SELECT ... SUBSTR(surname, 2) AS partialName ...
		 * 
		 * Note that adding "AS partialName" as shown above is required - this is how the framework
		 * identifies the expression as producing a value for this particular DataSourceField when
		 * results are received from the database.
		 * 
		 * Fields with customSelectExpression set can be used for sorting and filtering in
		 * the normal way, but they are only applicable to update-type operations if you also provide a
		 * corresponding DataSourceField.customUpdateExpression','customUpdateExpression and/or 
		 * DataSourceField.customInsertExpression','customInsertExpression. See the documentation 
		 * for those methods for the rules of how they are applied.
		 * 
		 * You can use Velocity expressions in your customSelectExpressions, and the 
		 * velocitySupport','usual context variables are available. Note that the results
		 * of Velocity evaluations are automatically quoted and escaped by default; this behavior can
		 * be switched off - see DataSourceField.autoQuoteCustomExpressions','autoQuoteCustomExpressions, and 
		 * particularly note the warnings about its use.
		 * 
		 * Note that this property only applies to users of the SmartClient server using dataSources of
		 * type "sql".
		 * Flags: IR
		 */
		 customSelectExpression?: VelocityExpression;
		 // ref="attr:DataSourceField.customSQL"
		/**
		 * (Read only) For a DataSource with DataSource.serverType','serverType "sql" or "hibernate",
		 * indicates that this field should be omitted by default from all SQL or Hibernate operations,
		 * and will only be used with customQuerying','custom queries.
		 * 
		 * Having marked a field as customSQL you can refer to it via
		 * $criteria.fieldName or $values.fieldName in customized queries.
		 * 
		 * The following are situations where you would not use customSQL:
		 * 
		 * simple joins where you want to enable users to see and search on a field from another
		 * table; consider DataSourceField.includeFrom instead
		 * fields where you want to calculate or transform values in SQL on load or save, but
		 * always perform the same calculation for each operationType; consider instead
		 * DataSourceField.sqlStorageStrategy for some common cases, or 
		 * DataSourceField.customSelectExpression, DataSourceField.customUpdateExpression and
		 * DataSourceField.customInsertExpression for full customization
		 * a special fetch is needed where the field needs to be excluded from the
		 * $defaultWhereClause so that it can be used in a custom &lt;whereClause&gt; - consider
		 * OperationBinding.excludeCriteriaFields instead
		 * 
		 * 
		 * Use customSQL in situations like:
		 * 
		 * there are multiple variations of the "fetch" operation with different
		 * OperationBinding.operationId','operationIds, and the field is only used in some of them;
		 * in that case, consider using OperationBinding.customFields to selectively re-introduce
		 * SQL generation for the field only in operations where it's used.
		 * the field represents hidden criteria on a field in another table where the field is
		 * never shown to the user
		 * the field is a write-only value only saved in some operations
		 * more than one data access strategy is in use (eg direct SQL for fetch and bean-based
		 * persistence accessed via DMI for saves) and certain fields are not available in SQL
		 * 
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 customSQL?: boolean;
		 // ref="attr:DataSourceField.customUpdateExpression"
		/**
		 * (Read only) This property specifies the value to use to update this column on "update" operations.
		 * The value of this property will be passed through Velocity evaluation and then embedded
		 * directly in the SQL generated to perform the update. It can be used in conjunction with
		 * DataSourceField.customSelectExpression','customSelectExpression to provide bi-directional mapping 
		 * between application data formats and persisted data formats. Or, it can be used 
		 * unilaterally as a means of silently enforcing data rules - for example, ensuring that all 
		 * values for a given field are in upper case.
		 * 
		 * You can use Velocity expressions in your customUpdateExpressions, and the 
		 * velocitySupport','usual context variables are available. Note that the results
		 * of Velocity evaluations are automatically quoted and escaped by default; this behavior can
		 * be switched off - see DataSourceField.autoQuoteCustomExpressions','autoQuoteCustomExpressions, and 
		 * particularly note the warnings about its use.
		 * 
		 * The value must be a string that will end up as a valid SQL snippet after Velocity
		 * evaluation. The following examples are valid:
		 * 
		 * "SUBSTR(ANOTHER_COLUMN, 1, 10)"
		 * "SUBSTR($values.someTextField.toUpperCase(), 1, 10)"
		 * "SOME_NUMERIC_COLUMN * 1000"
		 * "$values.someTextField.toUpperCase()" (this is a technically valid but 
		 * incorrect usage - see below)
		 * 
		 * NOTE: although all these examples are valid, customUpdateExpression is
		 * intended to be used when you have a need to customize the actual SQL. If you simply want
		 * to use a server-derived value in the query (as is the case with the last of these 
		 * examples), you should use transactionChaining','Transaction Chaining, 
		 * dmiOverview','DMI, or a serverScript','server script instead. 
		 * 
		 * In the examples above, the first is an actual SQL snippet and must not be enclosed
		 * in quotes. The second shows an SQL snippet containing a literal - because the literal is 
		 * the result of a Velocity evaluation, it will be automatically quoted so there is no need 
		 * to do so manually. The third example yields a number, so it must not be quoted.
		 * The last example is also the result of a Velocity evaluation and thus does not need to
		 * be quoted. Note, however, that this example involves no SQL customization - this kind of 
		 * usage should be avoided, as noted above.
		 * 
		 * When an "update" operation runs, any fields that specify 
		 * DataSourceField.customSelectExpression','customSelectExpression but do not specify 
		 * customUpdateExpression will be ignored. When an "add" operation runs, this property acts 
		 * as a default for any fields that do not specify a 
		 * DataSourceField.customInsertExpression','customInsertExpression; similar to update, any fields that 
		 * specify a customSelectExpression but do not specify either a customUpdateExpression or 
		 * customInsertExpression, will be ignored when "add" operations run.
		 * 
		 * Note that this property only applies to users of the SmartClient server using dataSources of
		 * type "sql".
		 * Flags: IR
		 */
		 customUpdateExpression?: VelocityExpression;
		 // ref="attr:DataSourceField.dateFormatter"
		/**
		 * (Advanced) Preferred display format to use for date type values within this field.
		 * If this property is set on a field displayed in a databound component such as a
		 * DynamicForm or ListGrid it will be respected (See FormItem.dateFormatter and
		 * ListGridField.dateFormatter).
		 * 
		 * Note that this property is also honored when exporting directly to 
		 * Excel spreadsheets (ie, when using XLS or XLSX/OOXML form, not CSV); "date" and
		 * "datetime" fields with this property set will deliver real dates and formatting information
		 * to Excel, rather than formatted strings or unformatted dates.
		 * Flags: IRWA, Group: appearance
		 */
		 dateFormatter?: DateDisplayFormat;
		 // ref="attr:DataSourceField.decimalPad"
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
		 decimalPad?: number;
		 // ref="attr:DataSourceField.decimalPrecision"
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
		 decimalPrecision?: number;
		 // ref="attr:DataSourceField.deepCloneOnEdit"
		/**
		 * (Advanced) Before we start editing this field in a DataBoundComponent, should we perform a deep clone 
		 * of the underlying field value. See DataSource.deepCloneOnEdit for details of what 
		 * this means.
		 * 
		 * If this value is not explicitly set, it defaults first to the value of 
		 * DataBoundComponent.deepCloneOnEdit, then to the value of DataSource.deepCloneOnEdit.
		 * 
		 * Like the other deepCloneOnEdit settings, this flag only has an effect if you are 
		 * editing a values object that contains nested objects or arrays, using 
		 * Canvas.dataPath','dataPaths.
		 * Flags: IRWA
		 */
		 deepCloneOnEdit?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.detail"
		/**
		 * (Read only) Whether this field should be considered a "detail" field by a DataBoundComponent.
		 * 
		 * Detail fields won't be shown by default in a DataBoundComponent where 
		 * DataBoundComponent.showDetailFields is false. This allows for some DataBound
		 * components, like a ListGrid, to show a summary view of records which displays only 
		 * the most commonly viewed fields by default, while other DataBoundComponents, like a
		 * DetailViewer, show all fields by default.
		 * 
		 * In addition, the FormItem.showIf','formItem.showIf property is supported in multiple
		 * components for conditional visibility - see for example ListGridField.showIf and
		 * FormItem.showIf).
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentBinding
		 */
		 detail?: boolean;
		 // ref="attr:DataSourceField.displayField"
		/**
		 * (Read only) Name of another field in this DataSource that should be used as the display value for this
		 * field.
		 * 
		 * Typically used for editable 
		 * DataSourceField.foreignKey','foreignKey fields: the foreignKey field
		 * stores an ID value, and this ID value is the right value to use when editing (typically by a
		 * SelectItem with SelectItem.optionDataSource','optionDataSource set). However,
		 * when the foreignKey field is viewed read-only, it should display a name, title
		 * or other friendly value from the related record. In order to accomplish this, a second,
		 * hidden field carries the display value, and the foreignKey field has
		 * displayField set to this second, hidden field.
		 * 
		 * For a more in-depth discussion, see DataSourceField.includeFrom.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 displayField?: String;
		 // ref="attr:DataSourceField.displayFormat"
		/**
		 * (Read only) The default date formatter to use for displaying this field. Only applicable to fields of 
		 * type "date" and "datetime". Note that this property is honored when exporting directly to 
		 * Excel spreadsheets (ie, when using XLS or XLSX/OOXML form, not CSV); "date" and
		 * "datetime" fields with this property set will deliver real dates and formatting information
		 * to Excel, rather than formatted strings or unformatted dates.
		 * Flags: IR
		 */
		 displayFormat?: DateDisplayFormat;
		 // ref="attr:DataSourceField.editorType"
		/**
		 * (Read only) Sets the default FormItem to be used whenever this field is edited (whether in a grid, form,
		 * or other component).
		 * 
		 * If unset, a FormItem will be automatically chosen based on the type of the field, by the
		 * rules explained FormItemType','here.
		 * Flags: IR, Group: componentBinding
		 */
		 editorType?: FormItemClassName;
		 // ref="attr:DataSourceField.editRequires"
		/**
		 * (Read only) Indicates that the specified VelocityExpression must evaluate to true if
		 * writes to this field are to be allowed. If the specified expression does not evaluate
		 * to true, the field will be removed from the request as described for 
		 * DataSourceField.editRequiresAuthentication','editRequiresAuthentication.
		 * 
		 * In addition to the normal context variables available to Velocity expressions in SmartClient,
		 * expressions you write for field-level requires clauses - editRequires, 
		 * DataSourceField.viewRequires','viewRequires, DataSourceField.initRequires','initRequires and 
		 * DataSourceField.updateRequires','updateRequires - can reference two additional variables: 
		 * $fieldName and $dsName. These are the names of the dataSource and 
		 * field currently undergoing requires checks. They are helpful because they allow
		 * you to write a generic checker function that can be used to handle requires
		 * checks for multiple fields and dataSources.
		 * 
		 * NOTE: This property prevents both initialization and updates for a field. If you 
		 * have a need to prevent <em>just</em> initialization or <em>just</em> updates, you can use
		 * DataSourceField.initRequires or DataSourceField.updateRequires.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 editRequires?: VelocityExpression;
		 // ref="attr:DataSourceField.editRequiresAuthentication"
		/**
		 * (Read only) Whether a user must be authenticated in order to write to this field. If this property is 
		 * set and the user is not authenticated, the SmartClient Server will not allow this field to
		 * be updated or initialized.
		 * 
		 * This property affects two things. Firstly, the server determines when the DataSource is 
		 * first loaded if we have an authenticated user; if we don't, the field is marked 
		 * canEdit: false. Secondly, when an insert or update request is received from 
		 * the client, the server removes the field from the values clause before the
		 * request is processed.
		 * 
		 * Note that you can override this behavior. The canEdit setting can be overridden 
		 * on the the client-side DataSource like any other client-side property. The value-removing 
		 * behavior can be overridden on a per-request basis by providing a DMI that re-adds values for
		 * the fields you want for that particular request to the values object (the values originally 
		 * sent up by the client are available on the DSRequest). See the server-side Javadocs for 
		 * DSRequest.getValues() and DSRequest.getClientSuppliedValues().
		 * boolean - Null not allowed
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 editRequiresAuthentication?: boolean;
		 // ref="attr:DataSourceField.editRequiresRole"
		/**
		 * (Read only) Comma-separated list of user roles that are allowed to write to this field. If the current
		 * user does not have any of the roles listed, the system will not allow this field to be 
		 * initialized or updated. Please see OperationBinding.requiresRole for further 
		 * details of SmartClient's declarative role-based security. Please also see 
		 * DataSourceField.editRequiresAuthentication','editRequiresAuthentication for details
		 * of how declarative field-level security settings can be overridden per-request.
		 * 
		 * NOTE: This property prevents both initialization and updates for a field. If you 
		 * have a need to prevent <em>just</em> initialization or <em>just</em> updates, you can use
		 * DataSourceField.initRequiresRole or DataSourceField.updateRequiresRole.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 editRequiresRole?: String;
		 // ref="attr:DataSourceField.emptyDisplayValue"
		/**
		 * (Read only) Text to be used for display by client-side components when this field has a null or 
		 * undefined value. This value will be overridden by a component's emptyCellValue, if set.
		 * Flags: IR, Group: appearance
		 */
		 emptyDisplayValue?: HTMLString;
		 // ref="attr:DataSourceField.encodeInResponse"
		/**
		 * When set for a field with binary data, binary data will be delivered as a Base64 encoded
		 * string. 
		 * 
		 * When encodeInResponse is not set normal responses will not contain values for
		 * binary fields at all. Instead, UI components, such as TileGrid issue a second
		 * binary fetch for binary data when appropriate, and APIs such as DataSource.downloadFile','downloadFile() and
		 * DataSource.viewFile','viewFile() can be used to programmatically trigger downloads.
		 * 
		 * Only applicable to fields of a type that are represented by binary data (currently "binary"
		 * and "imageFile", see FieldType).
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 encodeInResponse?: boolean;
		 // ref="attr:DataSourceField.escapeHTML"
		/**
		 * (Read only) When data values are displayed in DataBound components, by default strings will be interpreted
		 * as HTML by the browser in most cases.
		 * 
		 * If set, this property will be picked up by components bound to this dataSource, notifying them
		 * that any HTML characters should be escaped when displaying values for this field.
		 * Flags: IR
		 */
		 escapeHTML?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.excludeFromState"
		/**
		 * (Read only) If true, then this field is excluded from the bound component's view state. In addition,
		 * the field will not be selected as the default title field
		 * by DataBoundComponent.getTitleField
		 * if DataBoundComponent.titleField is not provided.
		 * Flags: IR, Group: viewState
		 */
		 excludeFromState?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.exportForceText"
		/**
		 * (Read only) When using DataSource.recordsAsText, determines what approach (if any) should be used
		 * to force values to be intepreted as text instead of heuristically parsed as dates, times or
		 * other structured types.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 exportForceText?: boolean;
		 // ref="attr:DataSourceField.exportFormat"
		/**
		 * An optional FormatString for this field, for use when 
		 * DataBoundComponent.exportData','exporting data to spreadsheet formats (XLS and 
		 * OOXML/XLSX), XML, JSON or CSV. You can use this property to override the normal
		 * DataSourceField.format','format of this field, if any, specifically for exports. 
		 * 
		 * Note, for server-driven exports you can specify default formats for date, time and 
		 * datetime fields by specifying properties export.format.default.date, 
		 * export.format.default.time and export.format.default.datetime
		 * in your server.properties file. These formats will be used for fields 
		 * that do not have a "format" or "exportFormat" property specified in the 
		 * .ds.xml file.
		 * 
		 * Specifically when exporting to spreadsheet formats, the FormatString is
		 * translated to the type of format string used by spreadsheet programs like Excel. A handful
		 * of features are not present in Excel format strings, and some features behave slightly
		 * differently. These differences are explained below.
		 * 
		 * <h3>Excel cannot handle dates prior to January 1st 1900</h3>
		 * This is a well-known limitation of Excel dates; it is not a formatting issue as such.
		 * 
		 * <h3>Currency symbols become fixed to the current locale at export time</h3>
		 * The placeholder currency symbol "&#x00A4" (\u00A4) in a numeric
		 * format string is rendered as the 
		 * 
		 * NumberUtil.currencySymbol','localized currency symbol.
		 * 
		 * 
		 * When exporting, the format string provided to Excel contains the currency symbol for the
		 * current locale of the SmartClient application, and not a placeholder currency symbol that
		 * would make Excel pick up a currency symbol based on the operating system locale. We do this
		 * to ensure that the spreadsheet reflects the <em>application's</em> localization, rather than
		 * the localization of the current user's computer, because they may be different.
		 * 
		 * <h3>Rounding differences</h3>
		 * The approach to rounding a positive number to a set number of decimal places is fairly 
		 * universally agreed upon for non-specialized requirements: add 0.5 (or 0.05, or 0.005, or 
		 * whatever) to the number and then truncate. This leads to the well understood convention 
		 * that numbers exactly halfway between two possible rounding outcomes, go to the larger one. 
		 * So 7.5 becomes 8 and 7.15 becomes 7.2.
		 * 
		 * However, there is no such universal agreement when it come to rounding negative numbers. 
		 * Some take the view that you should round by taking the number to the larger absolute value,
		 * so -7.15 becomes -7.2. Others feel that you should round by taking the number to the larger
		 * value in the sense of it being "less negative", so -7.15 becomes -7.1.
		 * 
		 * SmartClient formatting takes the first approach and rounds negative numbers away from zero.
		 * We do this simply because that is what Java DecimalFormat does. Unfortunately, Excel does
		 * the opposite. Therefore, you will see rounding differences on negative numbers on exact 
		 * 50% boundaries: SmartClient will format -7.15 as -7.2, while Excel will format the same 
		 * value as -7.1.
		 * 
		 * <h3>Different treatment of '#'</h3>
		 * Both SmartClient and Excel use '#' to mean "digit, do not show zeroes". However, Excel
		 * does not implement this strictly in the integer part when the number it is formatting has
		 * a value of 0 in the integer part. So, with a format of "#.##", the value 0.25 is formatted 
		 * as "0.25". SmartClient (like Java DecimalFormat) is strict: with that format, 0.25 is 
		 * formatted as ".25"; if you want to match Excel's output, you must use the format "0.##".
		 * 
		 * <h3>Miscellaneous edge cases</h3>
		 * There is quite a lot of variation in behavior between Java DecimalFormat and Excel around 
		 * the edges. For actual error cases - for example, a format string that just contains 
		 * nonsense - it is normal and expected that the SmartClient behavior and the Excel behavior
		 * do not match - this is just two systems producing different garbage out for the same 
		 * garbage in, which is to be expected. For valid but weird usages - for example, a format 
		 * with multiple percent signs - SmartClient's formatting is in line with what DecimalFormat 
		 * does, unless DecimalFormat throws an Exception, in which case we just do the thing that 
		 * seems most sensible, or the thing that was easiest to implement.
		 * 
		 * Known differences in behavior in edge cases include:
		 * SmartClient ignores formatting characters in the number part of the format string, 
		 * whereas Excel rejects the format (this behavior may vary with different releases of Excel
		 * and supposedly compatible libraries: POI, for example, will accept such format strings). 
		 * If you attempt to format 5.175 with the format string "#b0.#a#", SmartClient will return
		 * "5.72", and Excel will reject the format
		 * SmartClient ignores quoted characters in the number part of the format string, 
		 * whereas Excel preserves them. If you attempt to format 5.175 with the format string 
		 * "#'b'0.#'a'#", SmartClient will return "5.72", and Excel will return "b5.7a2"
		 * If you specify the empty string as a format string, SmartClient returns the result of 
		 * calling toString() on the number; Excel uses the built-in "General" format. These two 
		 * approaches will generally give the same or very similar results, but that is really a 
		 * coincidence: the correct way to obtain matching results in the browser and the spreadsheet
		 * is to specify a valid format string
		 * If you specify a format string that contains no number part (ie, no '#' or '0' 
		 * characters), SmartClient does what DecimalFormat does, which is to output the integer part
		 * of the number alongside the fixed part of the format. Excel just outputs the fixed part.
		 * So, if you attempt to format -5.3 with the format string "'Hello world'", SmartClient will
		 * output "-Hello world5", whereas Excel will output just "Hello world"
		 * If you specify multiple percent signs in the format, SmartClient treats all but the 
		 * first one as static text, so 0.5 formatted with "#%%%" is "50%%%" (ie, all the signs are 
		 * preserved but there is only one multiplcation by 100). Excel multiplies for each percent
		 * sign, so 0.5 formatted with "#%%%" is "500000%%%"
		 * 
		 * 
		 * <h3>Date format functionality not supported by Excel</h3>
		 * The following date/time/datetime functionality is not supported by Excel; if you use 
		 * formatters that use any of this functionality, your values will be exported to Excel 
		 * incorrectly formatted. In cases like this, we recommend that you use a separate 
		 * exportFormat, with the intent of exporting your values in a way that is 
		 * similar to your application formatting (which would be specified with the 
		 * DataSourceField.format','format property), but within the confines of what Excel 
		 * supports.
		 * 
		 * Fiscal year, week and day (LL, LLLL, C, CC, c, cc)
		 * Week in year (w, ww)
		 * Day in year (D, DD)
		 * Day number in week (u)
		 * Explicit control over whether to use 12- or 24-hour notation. In Excel, this is 
		 * implied by the presence or absence of the AM/PM designator
		 * If the user's operating system locale is different to the locale in use in the 
		 * SmartClient application, day and month names may be different in the spreadsheet
		 * 
		 * <h3>Number format functionality not supported by Excel</h3>
		 * The only SmartClient number-formatting functionality not supported for 
		 * export to Excel is "multiply by 1000 and show as per mille".
		 * 
		 * <h3>Limit on number of custom Excel formats</h3>
		 * Excel limits the number of custom format strings in a single spreadsheet to somewhere
		 * between 200 and 250, depending on your locale and language. Hitting this limit in an export
		 * would require hundreds of field definitions, each defining unique
		 * FormatStrings. If you do hit the limit, the only workaround is to use fewer
		 * unique FormatStrings.
		 * Flags: IRW
		 */
		 exportFormat?: FormatString;
		 // ref="attr:DataSourceField.exportTitle"
		/**
		 * (Read only) Optional different field-title used for exports.
		 * Flags: IR
		 */
		 exportTitle?: String;
		 // ref="attr:DataSourceField.filterEditorType"
		/**
		 * (Read only) Sets the default FormItem to be used for this field if it appears in a filter row,
		 * and DataSourceField.canFilter is not false.
		 * 
		 * Note: If this is not specified, the edit-formItem type may be derived from the
		 * DataSourceField.editorType property, or from the field's DataSourceField.type.
		 * Flags: IR, Group: componentBinding
		 */
		 filterEditorType?: FormItemClassName;
		 // ref="attr:DataSourceField.fkColumnCode"
		/**
		 * (Read only) See DataSource.tableCode.
		 * Flags: R
		 */
		 fkColumnCode?: String;
		 // ref="attr:DataSourceField.fkTableCode"
		/**
		 * (Read only) See DataSource.tableCode.
		 * Flags: R
		 */
		 fkTableCode?: String;
		 // ref="attr:DataSourceField.foreignDisplayField"
		/**
		 * (Read only) Name of another field in a separate dataSource that should be used as the display
		 * value for this field in the case where a foreignKey relationship
		 * exists.
		 * 
		 * This property is useful for fields being edited in a FormItem where options are
		 * being retrieved from an FormItem.optionDataSource, for the case where a separate
		 * DataSourceField.displayField name is used within the local dataSource than the field name for
		 * the display field within the foreign dataSource.
		 * 
		 * See FormItem.foreignDisplayField for more on this, and see 
		 * DataSourceField.includeFrom for a discussion about picking up dataSource field
		 * values from a related dataSource.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 foreignDisplayField?: String;
		 // ref="attr:DataSourceField.foreignKey"
		/**
		 * (Read only) Declares that this field holds values that can be matched to values from another DataSource
		 * field, to create a relationship between records from different DataSources or even records
		 * within the same DataSource.
		 * 
		 * The format of foreignKey is
		 * dataSourceId.fieldName.
		 * 
		 * For a foreignKey within the same dataSource, you can omit the dataSourceId
		 * and just specify fieldName. For example, to create a tree relationship
		 * within a DataSource:
		 * 
		 * isc.DataSource.create({
		 * ID:"supplyItem",
		 * fields : [
		 * {name:"itemId", type:"sequence", primaryKey:true},
		 * {name:"parentId", type:"integer", foreignKey:"itemId"},
		 * ...
		 * ]
		 * });
		 * 
		 * 
		 * foreignKey declarations also allow other automatic behaviors by
		 * DataBoundComponent','DataBoundComponents, such as ListGrid.fetchRelatedData.
		 * 
		 * For SQLDataSources foreign keys can be automatically discovered from SQL tables if
		 * DataSource.autoDeriveSchema','autoDeriveSchema is set.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 foreignKey?: String;
		 // ref="attr:DataSourceField.format"
		/**
		 * Format string to use when rendering the value in any DataBoundComponent or when
		 * exporting via DataSource.exportData or ListGrid.exportData or 
		 * ListGrid.exportClientData.
		 * 
		 * Supported for fields of type "date", "time", "datetime", "int", "float" or any derived
		 * SimpleType. 
		 * 
		 * To configure a different format for export, use DataSourceField.exportFormat.
		 * 
		 * This is a per-field setting; you can alternatively set a default format for all "date",
		 * "time" or "datetime" fields via 
		 * 
		 * DateUtil.setNormalDatetimeDisplayFormat and related methods on Date.
		 * 
		 * 
		 * See also localizedNumberFormatting for built-in FieldType','FieldTypes
		 * that handle localized currency formatting.
		 * 
		 * Also note, this property takes precedence over any specified 
		 * DataSourceField.dateFormatter','dateFormatter, but can be overridden on a per-component
		 * basis by providing a formatter directly on the component, for example, via
		 * ListGrid.formatCellValue or FormItem.formatValue.
		 * Flags: IRW
		 */
		 format?: FormatString;
		 // ref="attr:DataSourceField.getFieldValue"
		/**
		 * (Read only, Advanced) A Callback, function, or JavaScript expression used to retrieve the field's value from
		 * the XML element or JSON record returned from a web service.
		 * 
		 * This is an advanced attribute for use when a DataSourceField.valueXPath','valueXPath
		 * setting is insufficient to derive a field's value, yet an implementation of
		 * DataSource.transformResponse is overkill.
		 * 
		 * For the required parameters, see the documentation for
		 * Callbacks.GetFieldValueCallback','GetFieldValueCallback.
		 * Flags: IRA, Group: clientDataIntegration
		 */
		 getFieldValue?: GetFieldValueCallback;
		 // ref="attr:DataSourceField.group"
		/**
		 * (Read only) For use in componentSchema, indicates what group to place the property in when
		 * editing in Visual Builder.
		 * Flags: IR, Group: componentSchema
		 */
		 group?: String;
		 // ref="attr:DataSourceField.hidden"
		/**
		 * (Read only) Whether this field should be hidden from users by default within a DataBound component.
		 * This is generally used for internal IDs and other fields not meaningful to users.
		 * 
		 * See DataSourceField.detail for fields that should be hidden in a summary view such as
		 * a ListGrid, but still available to the user.
		 * 
		 * NOTE: This property is not a security setting - data for hidden fields is 
		 * still delivered to the client, it just isn't shown to the user. If you wish to make sure 
		 * that only appropriate data reaches the client, use OperationBinding.outputs,
		 * DataSourceField.canView:false on the field, or a field-level declarative security setting like 
		 * DataSourceField.viewRequiresRole.
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentBinding
		 */
		 hidden?: boolean;
		 // ref="attr:DataSourceField.ignore"
		/**
		 * (Read only) Whether this field should be completely excluded from this dataSource, as if it had never been
		 * defined.
		 * 
		 * If set to true, the field will be entirely omitted when serving a DataSource derived 
		 * from a server-side definition (typically a .ds.xml file) to the client.
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentBinding
		 */
		 ignore?: boolean;
		 // ref="attr:DataSourceField.ignoreTextMatchStyle"
		/**
		 * NOTE: Only applicable to DataSource.clientOnly','clientOnly DataSources and the
		 * built-in sqlDataSource','SQL, jpaIntegration','JPA and 
		 * hibernateIntegration','Hibernate DataSources available in Pro, Power and 
		 * Enterprise versions of SmartClient.
		 * 
		 * Use this flag to inhibit the normal use of TextMatchStyle for this field. A 
		 * field with this flag set will always be tested for exact equality in generated queries, 
		 * even for filter-style queries where normal behavior would be to use a substring match or 
		 * similar.
		 * 
		 * Whether or not the exact match is case-sensitive is determined by the DataSource's 
		 * DataSource.ignoreTextMatchStyleCaseSensitive','ignoreTextMatchStyleCaseSensitive
		 * setting.
		 * Flags: IRW
		 */
		 ignoreTextMatchStyle?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.imageHeight"
		/**
		 * (Read only) Height of the image-content of this field. If set as a string, represents the name of 
		 * another field in the record that holds the imageHeight. Applicable only to fields of image 
		 * type or fields that use a ViewFileItem','ViewFileItem as an editor.
		 * Flags: IR
		 */
		 imageHeight?: number | String;
		 // ref="attr:DataSourceField.imageSize"
		/**
		 * (Read only) Width and height of the image-content of this field. If set as a string, represents the 
		 * name of another field in the record that holds the imageSize. Applicable only to fields 
		 * of image type or fields that use a ViewFileItem','ViewFileItem as an editor.
		 * Flags: IR
		 */
		 imageSize?: number | String;
		 // ref="attr:DataSourceField.imageWidth"
		/**
		 * (Read only) Width of the image-content of this field. If set as a string, represents the name of 
		 * another field in the record that holds the imageWidth. Applicable only to fields of image 
		 * type or fields that use a ViewFileItem','ViewFileItem as an editor.
		 * Flags: IR
		 */
		 imageWidth?: number | String;
		 // ref="attr:DataSourceField.implicitSequence"
		/**
		 * (Read only) For a field of FieldType','type "sequence" on a DataSource with 
		 * DataSource.serverType','serverType:"sql", this flag indicates that the field is 
		 * implicitly bound to a sequence. This setting means that SmartClient does not expect to 
		 * find a value for the field in "add" operations, even if it is marked as a 
		 * DataSourceField.primaryKey','primaryKey, as such fields usually are. It also means that SmartClient
		 * does not attempt to retrieve the field value from an actual database sequence, instead
		 * relying on the JDBC driver to return the generated value (see the note on
		 * sequenceMode below).
		 * 
		 * Implicitly bound columns are a syntactic convenience provided by some databases to simulate 
		 * the "auto-increment" or "identity" columns available natively in other products, without 
		 * the underlying sequence having to be explicitly referenced in SQL queries. Currently, these
		 * database products support this idea:
		 * PostgreSQL has had a "serial" column type for a long time - 
		 * <a href=http://www.postgresql.org/docs/9.3/static/datatype-numeric.html#DATATYPE-SERIAL>
		 * http://www.postgresql.org/docs/9.3/static/datatype-numeric.html#DATATYPE-SERIAL</a>
		 * DB2 has long supported a "GENERATED AS IDENTITY" notation for numeric fields. This may
		 * or may not be implemented with a sequence - the documentation does not specify - but we 
		 * support it via the implicitSequence mechanism because it is so similar to the implicit
		 * sequence approach in Oracle. 
		 * <a href="http://publib.boulder.ibm.com/infocenter/dzichelp/v2r2/index.jsp?topic=/com.ibm.db2z10.doc.apsg/src/tpc/db2z_identitycols.htm">
		 * http://publib.boulder.ibm.com/infocenter/dzichelp/v2r2/index.jsp?topic=/com.ibm.db2z10.doc.apsg/src/tpc/db2z_identitycols.htm</a>
		 * Oracle introduced a "GENERATED AS IDENTITY" notation for numeric fields in version 12c - 
		 * <a href=http://www.oracle-base.com/articles/12c/identity-columns-in-oracle-12cr1.php>
		 * http://www.oracle-base.com/articles/12c/identity-columns-in-oracle-12cr1.php</a>
		 * 
		 * If you have columns like these in your database, declare them as type "sequence" and mark 
		 * them with the implicitSequence flag.
		 * 
		 * NOTE: If you use this property, you should also set the 
		 * DataSource.sequenceMode','DataSource sequenceMode to "jdbcDriver". This is necessary
		 * because SmartClient cannot directly query the implicit sequence that is being used behind the 
		 * scenes, so we must rely on the JDBC driver to do that.
		 * 
		 * If you use DataSource.autoDeriveSchema','autoDeriveSchema to automatically derive a 
		 * dataSource from table metadata, SmartClient attempts to identify these special Oracle and
		 * Postgres columns by heuristic examination of the metadata. When it identifies such a 
		 * column, it marks the corresponding dataSourceField implicitSequence: true, 
		 * and changes the sequenceMode on the DataSource to "jdbcDriver". If your table contains
		 * one of these columns and SmartClient does not automatically identify it, bear in mind that
		 * you can always set this flag manually, even if you are using autoDeriveSchema.
		 * 
		 * This setting has no effect for non-SQL dataSources, or for databases other than those 
		 * mentioned above.
		 * Flags: IR, Group: sqlDataSource
		 */
		 implicitSequence?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.importStrategy"
		/**
		 * (Read only) Declares the FieldImportStrategy for this field. The default setting of null 
		 * has the same meaning as "auto". Note, this attribute only has an effect if all of the 
		 * following are true:
		 * The field declares a DataSourceField.foreignKey','foreignKey
		 * The field declares a DataSourceField.displayField','displayField
		 * The displayField so declared is DataSourceField.includeFrom','included from the 
		 * same DataSource that the foreignKey declaration refers to
		 * 
		 * In any other circumstances, this attribute is ignored.
		 * 
		 * importStrategy is applied by the server-side 
		 * DataImport.importToRows() method, which is in turn used by
		 * BatchUploader and several other DataImport APIs such as 
		 * importToDataSource(), importDataSourceRecords() and 
		 * importAndValidateDSRows(). See the server-side documentation for
		 * details of these APIs. The actual data transformation is carried out by the 
		 * server-side API DataSource.transformImportValue(); this method can 
		 * be overridden to carry out any other transformation you may require.
		 * Flags: IR
		 */
		 importStrategy?: FieldImportStrategy;
		 // ref="attr:DataSourceField.inapplicable"
		/**
		 * (Read only) For use in componentSchema, a field DataSource.inheritsFrom','inherited from
		 * another schema can be redeclared with this property set in order to indicate that the
		 * property should not be used.
		 * 
		 * This is primarily used to influence visualBuilder. For simple type properties,
		 * this avoids the property appearing in the Component Editor. 
		 * 
		 * For fields that hold subcomponents, this prevents inappropriate drag and drop. For example,
		 * a custom class called MyDialog may automatically create a series of children,
		 * and not allow arbitrary other children to be added. In this case, the inherited property
		 * Canvas.children should be marked inapplicable in order to prevent arbitrary
		 * components being dropped onto a MyDialog instance.
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentSchema
		 */
		 inapplicable?: boolean;
		 // ref="attr:DataSourceField.includeFrom"
		/**
		 * (Read only) Indicates this field should be fetched from another, related DataSource.
		 * 
		 * The incluedFrom attribute should be of the form
		 * "dataSourceId.fieldName", for example:
		 * 
		 * &lt;field includeFrom="supplyItem.itemName"/&gt;
		 * 
		 * 
		 * A DataSourceField.foreignKey declaration must exist between the two DataSources, establishing either
		 * a 1-to-1 relationship or a many-to-1 relationship from this DataSource to the related
		 * DataSource. The inclusion can be indirect (traverse multiple DataSources) so long as there
		 * is a chain of foreignKey declarations from the target DataSource to the
		 * DataSource where the includeFrom field is declared. For including from a
		 * related DataSource where there are multiple related records, see
		 * DataSourceField.includeSummaryFunction','includeSummaryFunction.
		 * 
		 * DataSourceField.name will default to the name of the included field, or you can
		 * specify a different name.
		 * 
		 * If both DataSources are SQLDataSources, HibernateDataSources or JPADataSources (with
		 * Hibernate as the provider) the related data will be retrieved via a SQL join and criteria
		 * and sort directions applied to the field work normally (they become part of the generated
		 * SQL query).
		 * 
		 * Otherwise, the related data will be retrieved via performing a DSRequest against
		 * the related DataSource once the data from the primary DataSource has been retrieved. In
		 * this case, criteria or sorting directions applied to the included field are only allowed if
		 * data paging is not in use (for example ListGrid.dataFetchMode:"basic"); otherwise,
		 * criteria and sort direction are ignored for the included field and a warning is logged on
		 * the server.
		 * 
		 * Editing included fields
		 * 
		 * An included field is DataSourceField.canEdit','canEdit:false by default. Note that 
		 * included fields are not updatable, even if you set canEdit:true; the server will simply drop
		 * values for included fields if client code sends them. 
		 * 
		 * When thinking about editing an included field value, typically what is really intended is to
		 * edit the value of the foreignKey field. For example, take the scenario of a
		 * system that tracks accounts and the employees assigned to manage them. Given a DataSource
		 * "account" related one-to-one with DataSource "employee" by a "managerId" foreignKey field,
		 * we might declare an includeFrom so that the name of the account manager can
		 * be shown with each "account" record. 
		 * 
		 * Editing the manager's name while viewing the account would be intended to pick a new account
		 * manager, and not to change the legal name of the employee who happens to be the
		 * current account manager. 
		 * 
		 * To correctly set up this scenario, declare an includeFrom field that is hidden,
		 * but is used as the DataSourceField.displayField','displayField for the foreign key
		 * field. Setting useLocalDisplayFieldValue to true will ensure the
		 * display field value is picked up from the record currently being edited:
		 * 
		 * &lt;field name="managerId" foreignKey="employee.id" displayField="managerName" useLocalDisplayFieldValue="true"/&gt; 
		 * &lt;field name="managerName" includeFrom="employee.name" hidden="true"/&gt; 
		 * 
		 * Now:
		 * 
		 * the "managerId" foreignKey field is shown in grids and forms, but takes its displayed
		 * value from the hidden includeFrom field.
		 * the automatically chosen editor will be a SelectItem with
		 * SelectItem.optionDataSource','optionDataSource set to "employees": it will allow
		 * picking a different "employee" record from the "employee" DataSource
		 * saving will save the ID of a new "employee" record to the "managerId" foreign key
		 * field, as intended
		 * 
		 * You can alternatively set editorType="ComboBoxItem" on the
		 * "managerId" field to allow typeahead search of the "employee" DataSource.
		 * 
		 * Note that the DataSourceField.foreignDisplayField attribute allows developers to have a different
		 * fieldName be used locally as a displayField from the field name for the display field
		 * in the foreign dataSource.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 includeFrom?: String;
		 // ref="attr:DataSourceField.includeSummaryFunction"
		/**
		 * (Read only) When DataSourceField.includeFrom','field.includeFrom is specified and multiple records
		 * exist in the related DataSource per record in the including DataSource,
		 * includeSummaryFunction indicates which SummaryFunction is used to
		 * produce the field value.
		 * 
		 * This feature is available with Power or better licenses only. 
		 * See <a href="http://smartclient.com/product">smartclient.com/product</a> for details.
		 * 
		 * For example, give a DataSource "order" and related DataSource "orderItem", the "itemCount"
		 * field below will show the total number of items in each order.
		 * 
		 * &lt;DataSource ID="order"&gt;
		 * &lt;fields&gt;
		 * &lt;field name="orderID" type="integer" primaryKey="true" foreignKey="orderItem.orderID" /&gt;
		 * &lt;field name="customerName" type="text" /&gt;
		 * &lt;field name="orderDate" type="date" /&gt;
		 * &lt;field name="itemsCount" includeFrom="orderItem.quantity" includeSummaryFunction="sum" /&gt;
		 * &lt;/fields&gt;
		 * &lt;/DataSource&gt;
		 * 
		 * This is analogous to the following SQL statement: 
		 * 
		 * SELECT
		 * order.orderID,
		 * order.customerName,
		 * order.orderDate,
		 * (select sum(orderItem.quantity)
		 * from orderItem
		 * where orderItem.orderID = order.orderID) as itemsCount
		 * FROM
		 * order
		 * 
		 * Some other common uses:
		 * 
		 * using "max" to show the most recent "order" for a "customer"
		 * using "avg" to show the average order size for a "customer"
		 * using "concat" to show the names of all "salesReps" involved in an "order" (note:
		 * "concat" has limited support - see SummaryFunction).
		 * 
		 * 
		 * NOTE: includeSummaryFunction and 
		 * serverSummaries','Server Summaries cannot be used in the same DSRequest.
		 * If both configurations are present, Server Summaries settings always take priority.
		 * Flags: R, Group: serverSummaries
		 */
		 includeSummaryFunction?: SummaryFunction;
		 // ref="attr:DataSourceField.includeVia"
		/**
		 * (Read only) For a field that uses DataSourceField.includeFrom, specifies which
		 * DataSourceField.foreignKey','foreignKey field should be used to find records in the
		 * related DataSource.
		 * 
		 * includeVia only needs to be set when you have more than one
		 * foreignKey to the same related DataSource. If you have multiple
		 * foreignKeys to multiple different DataSources, there is no need to set
		 * includeVia.
		 * 
		 * For example, perhaps you have a DataSource "moneyTransfer" where each record represents a
		 * money transfer, where the source and payment currencies are different, and the list of
		 * currencies is stored in a related DataSource "currency". Each "moneyTransfer" record is
		 * linked to 2 "currency" records, through two different foreignKey fields,
		 * "sourceCurrencyId" and "paymentCurrencyId".
		 * 
		 * The following declarations would be required to use includeFrom to get a
		 * include the field "currencySymbol" from each of the two related "currency" records.
		 * 
		 * &lt;field name="sourceCurrencyId" foreignKey="currency.id"/&gt;
		 * &lt;field name="paymentCurrencyId" foreignKey="currency.id"/&gt;
		 * &lt;field name="sourceCurrencySymbol" includeFrom="currency.currencySymbol" includeVia="sourceCurrencyId"/&gt;
		 * &lt;field name="paymentCurrencySymbol" includeFrom="currency.currencySymbol" includeVia="paymentCurrencyId"/&gt;
		 * 
		 * 
		 * <h3>SQL Templating and includeVia</h3>
		 * 
		 * The includeVia feature uses SQL table aliases in the generated SQL when generating multiple SQL joins 
		 * to the same SQL table. When using customQuerying','SQL Templating, it's sometimes necessary to know 
		 * the names of the aliases in the generated SQL. The table alias used can be configured via
		 * setting DataSourceField.relatedTableAlias on the foreignKey field, for
		 * example, using the declarations below, aliases "source" and "payment" would be used for the
		 * two "currency" tables.
		 * 
		 * &lt;field name="sourceCurrencyId" foreignKey="currency.id" relatedTableAlias="source"/&gt;
		 * &lt;field name="paymentCurrencyId" foreignKey="currency.id" relatedTableAlias="payment"/&gt;
		 * &lt;field name="sourceCurrencySymbol" includeFrom="currency.currencySymbol" includeVia="sourceCurrencyId"/&gt;
		 * &lt;field name="paymentCurrencySymbol" includeFrom="currency.currencySymbol" includeVia="paymentCurrencyId"/&gt;
		 * 
		 * 
		 * <h3>Multiple indirection and relatedTableAlias</h3>
		 * 
		 * Sometimes you may have two includeFrom fields that include a field which is itself included from 
		 * another DataSource, for example:
		 * 
		 * &lt;field name="sourceCurId" nativeName="sourceCurrencyId" foreignKey="currency.id" relatedTableAlias="source"/&gt;
		 * &lt;field name="sourceCurrencySymbol" includeFrom="currency.currencySymbol" includeVia="sourceCurId"/&gt;
		 * &lt;field name="sourceCurrencyGroup" includeFrom="currency.groupName" includeVia="sourceCurId"/&gt;
		 * &lt;field name="paymentCurId" nativeName="paymentCurrencyId" foreignKey="currency.id" relatedTableAlias="payment"/&gt;
		 * &lt;field name="paymentCurrencySymbol" includeFrom="currency.currencySymbol" includeVia="paymentCurId"/&gt;
		 * &lt;field name="paymentCurrencyGroup" includeFrom="currency.groupName" includeVia="paymentCurId"/&gt;
		 * 
		 * .. where the "currency" DataSource used above is related to the "currencyGroup" DataSource via fields:
		 * 
		 * &lt;field name="groupId" type="integer" foreignKey="currencyGroup.id" relatedTableAlias="group"/&gt;
		 * &lt;field name="groupName" type="text" includeFrom="currencyGroup.groupName"/&gt;
		 * 
		 * Fields "sourceCurrencyGroup" and "paymentCurrencyGroup" include a field that is itself an included field.
		 * In this case "currencyGroup" table will be referenced two times, and its relatedTableAlias defined in 
		 * "currency" DataSource will be prefixed with the includeVia value to make
		 * aliases unique in generated SQL: "sourceCurId_group" and "paymentCurId_group".
		 * 
		 * The same aliases would be used if "sourceCurrencyGroup" and "paymentCurrencyGroup" fields
		 * were to include "currencyGroup.groupName" indirectly:
		 * 
		 * &lt;field name="sourceCurrencyGroup" includeFrom="currency.currencyGroup.groupName" includeVia="sourceCurId"/&gt;
		 * &lt;field name="paymentCurrencyGroup" includeFrom="currency.currencyGroup.groupName" includeVia="paymentCurId"/&gt;
		 * 
		 * 
		 * This works the same for more complex relationships. If we add a "moneyTransferDetail"
		 * DataSource to the sample above which has multiple references to "moneyTransfer" 
		 * DataSource and would include fields from "currency" and "currencyGroup" DataSources:
		 * 
		 * &lt;field name="mtId" nativeName="moneyTransferId" type="integer" foreignKey="moneyTransfer.id" relatedTableAlias="main" /&gt;
		 * &lt;field name="mainTransferName" includeFrom="moneyTransfer.name" includeVia="mtId" /&gt;
		 * &lt;field name="mainSourceSymbol" includeFrom="moneyTransfer.sourceCurrencySymbol" includeVia="mtId" /&gt;
		 * &lt;field name="mainSourceGroup" includeFrom="moneyTransfer.sourceCurrencyGroup" includeVia="mtId" /&gt;
		 * &lt;field name="mainPaymentSymbol" includeFrom="moneyTransfer.paymentCurrencySymbol" includeVia="mtId" /&gt;
		 * &lt;field name="mainPaymentGroup" includeFrom="moneyTransfer.paymentCurrencyGroup" includeVia="mtId" /&gt;
		 * &lt;field name="mtPrevId" nativeName="moneyTransferPreviousId" type="integer" foreignKey="moneyTransfer.id" relatedTableAlias="prev" /&gt;
		 * &lt;field name="previousTransferName" includeFrom="moneyTransfer.name" includeVia="mtPrevId" /&gt;
		 * &lt;field name="previousSourceSymbol" includeFrom="moneyTransfer.sourceCurrencySymbol" includeVia="mtPrevId" /&gt;
		 * &lt;field name="previousSourceGroup" includeFrom="moneyTransfer.sourceCurrencyGroup" includeVia="mtPrevId" /&gt;
		 * &lt;field name="previousPaymentSymbol" includeFrom="moneyTransfer.paymentCurrencySymbol" includeVia="mtPrevId" /&gt;
		 * &lt;field name="previousPaymentGroup" includeFrom="moneyTransfer.paymentCurrencyGroup" includeVia="mtPrevId" /&gt;
		 * 
		 * In this scenario the "currencyGroup" table will be joined 4 times - for all main/prev transfer
		 * and payment/source currency combinations. So, aliases will be prefixed with both
		 * intermediate includeVia values: "mtId_sourceCurId_group",
		 * "mtId_paymentCurId_group", "mtPrevId_sourceCurId_group", "mtPrevId_paymentCurId_group".
		 * 
		 * It is also allowed to specify a series of FK fields in includeVia, for example
		 * "moneyTransferDetail" could declare:
		 * 
		 * &lt;field name="mainSourceCurrencyGroup" includeFrom="moneyTransfer.currency.currencyGroup.groupName" includeVia="mtId.sourceCurId"/&gt;
		 * &lt;field name="mainPaymentCurrencyGroup" includeFrom="moneyTransfer.currency.currencyGroup.groupName" includeVia="mtId.paymentCurId"/&gt;
		 * 
		 * In this case the prefix used for table aliases will be the includeVia value
		 * with "_" substituted for ".", so the table aliases will be "mtId_sourceCurId_group" and "mtId_paymentCurId_group".
		 * 
		 * Note that if DataSourceField.relatedTableAlias','related table alias is not
		 * specified, then we don't make any guarantees what alias will be generated.
		 * 
		 * Note that Oracle has a limit of 30 characters on identifier names. We limit table
		 * aliases to 30 characters all databases despite actual database in use to support
		 * portability across databases. If the generated table alias would exceed 30 chars, 
		 * we instead use a generated and unpredictable value like "a123". To avoid hitting this limit
		 * for the advanced cases discussed above:
		 * 
		 * use relatively short strings for relatedTableAlias
		 * for rare, multi-step inclusion scenarios where multiple field names are used as a
		 * prefix, if field names are very long in order to match database column names, you can
		 * use a shorter field name and use DataSourceField.nativeName to specify the
		 * underlying column name (this is demonstrated in samples above - note field "mtPrevId")
		 * 
		 * Flags: IR, Group: dataSourceRelations
		 */
		 includeVia?: String;
		 // ref="attr:DataSourceField.initRequires"
		/**
		 * (Read only) Indicates that the specified VelocityExpression must evaluate to true if
		 * initializations of this field are to be allowed. If the specified expression does not 
		 * evaluate to true, the field will be removed from the request as described for 
		 * DataSourceField.editRequiresAuthentication','editRequiresAuthentication.
		 * 
		 * In addition to the normal context variables available to Velocity expressions in SmartClient,
		 * expressions you write for field-level requires clauses - initRequires, 
		 * DataSourceField.viewRequires','viewRequires, DataSourceField.editRequires','editRequires and 
		 * DataSourceField.updateRequires','updateRequires - can reference two additional variables: 
		 * $fieldName and $dsName. These are the names of the dataSource and 
		 * field currently undergoing requires checks. They are helpful because they allow
		 * you to write a generic checker function that can be used to handle requires
		 * checks for multiple fields and dataSources.
		 * 
		 * NOTE: This property only prevents initialization of a field; updates will still be 
		 * allowed. You should only use this property if you have a special requirement; ordinarily,
		 * use DataSourceField.editRequires, which applies security for both types of write.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 initRequires?: VelocityExpression;
		 // ref="attr:DataSourceField.initRequiresAuthentication"
		/**
		 * (Read only) Whether a user must be authenticated in order to initialize to this field. If this property is 
		 * set and the user is not authenticated, the SmartClient Server will not allow this field to
		 * be initialized.
		 * boolean - Null not allowed
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 initRequiresAuthentication?: boolean;
		 // ref="attr:DataSourceField.initRequiresRole"
		/**
		 * (Read only) Comma-separated list of user roles that are allowed to initialize this field. If the current
		 * user does not have any of the roles listed, the system will not allow this field to be 
		 * initialized.
		 * 
		 * NOTE: This property only prevents initialization of a field; updates will still be 
		 * allowed. You should only use this property if you have a special requirement; ordinarily,
		 * use DataSourceField.editRequiresRole, which applies security for both types of write.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 initRequiresRole?: String;
		 // ref="attr:DataSourceField.javaClass"
		/**
		 * (Read only) Explicitly declares the Java class that should be used when data from the client is
		 * validated by the SmartClient server and/or applied to Java Beans / POJOs via the server-side
		 * API com.isomorphic.datasource.DataSource.setProperties(). This includes 
		 * auto-populating POJO arguments of a dmiOverview','DMI method, or populating
		 * JPA/Hibernate beans with data when using the built-in JPA and Hibernate DataSources.
		 * 
		 * For DataSources that do not use Java Beans, fields declared to be of type "integer" or
		 * "float" can use javaClass to force a particular numeric representation for 
		 * validated DSRequest data (e.g. data passed to a DMI). Valid settings include "BigInteger",
		 * "Long", "Integer", "Short", "Byte", "AtomicInteger", "AtomicLong", "BigDecimal", "Double", "Float".
		 * 
		 * When populating Java Beans/ POJOs, javaClass does not normally have to
		 * specified: SmartClient will use Java reflection to inspect the type of argument expected by
		 * a setter method and will attempt conversion of inbound data to that type. As described in
		 * the documentation for DataTools.setProperties(), this works for almost all
		 * typical cases. However field.javaClass is useful for:
		 * 
		 * subobject of abstract or interface type: in this case Java Reflection is not sufficient
		 * to discover the concrete type that should be instantiated, and javaClass should be
		 * set instead.
		 * subobject of Collection or Map type, when Java generics are not used or the Collection
		 * member type or Map value type is abstract. When Java generics are used (for example the
		 * setter takes an argument is of type Collection&lt;SomePOJO&gt; or Map&lt;KeyType,SomePOJO&gt;,
		 * SmartClient will automatically attempt to convert inbound data to the type of the members of
		 * the Collection or values of the Map. Without generics, javaClass needs to be
		 * specified. Note that javaClass will take precedence over generics if both 
		 * are used. Also note that DataSourceField.javaCollectionClass can be specified if a
		 * particular Collection or Map type is needed, and DataSourceField.javaKeyClass can be
		 * specified for a field of type java.util.Map.
		 * 
		 * NOTE: It is also possible to make SmartClient Server determine the javaClass to use 
		 * dynamically at runtime. See the description of DataSource.getPropertyJavaClass() 
		 * in the server documentation for details.
		 * Flags: IR
		 */
		 javaClass?: String;
		 // ref="attr:DataSourceField.javaCollectionClass"
		/**
		 * (Read only) See DataSourceField.javaClass - when auto-populating of Java Beans / POJOs based on 
		 * inbound DSRequest data, for a field of type Collection or Map, 
		 * javaCollectionClass can 
		 * be used to specify a particular concrete class to use. If not specified, and a concrete
		 * Collection or Map class cannot be discovered using Java Reflection, the following concrete
		 * classes are used:
		 * 
		 * java.util.ArrayList is used for fields of type List
		 * java.util.HashSet is used for fields of type Set
		 * java.util.LinkedList is used for fields of type Queue
		 * java.util.LinkedHashMap is used for fields of type Map
		 * java.util.ArrayList is used for fields that are otherwise of type Collection
		 * 
		 * Note that this value is used even if the target Collection or Map is declared as a concrete
		 * class. So, for example, if you set javaCollectionClass to 
		 * java.util.LinkedList but your setter method accepts a 
		 * java.util.ArrayList, you will get a ClassCastException.
		 * Flags: IR
		 */
		 javaCollectionClass?: String;
		 // ref="attr:DataSourceField.javaKeyClass"
		/**
		 * (Read only) See DataSourceField.javaClass - when auto-populating of Java Beans / POJOs based on 
		 * inbound DSRequest data, for a field of Map type, javaKeyClass can be used to
		 * specify a particular concrete class for the map keys. If not specified, and a concrete
		 * type cannot be discovered using Java Reflection, java.lang.Object is used.
		 * 
		 * Note that javaKeyClass take precedence over generics if both are used.
		 * Flags: IR
		 */
		 javaKeyClass?: String;
		 // ref="attr:DataSourceField.joinPrefix"
		/**
		 * (Read only) Defines prefix before concatenated values if field is used with 
		 * serverSummaries','Server summaries feature and the 
		 * SummaryFunction','summary function is "concat".
		 * Flags: IR, Group: serverSummaries
		 */
		 joinPrefix?: String;
		 // ref="attr:DataSourceField.joinString"
		/**
		 * (Read only) Defines the delimiter between concatenated values if field is used with 
		 * serverSummaries','Server summaries feature and the 
		 * SummaryFunction','summary function is "concat". The default 
		 * value is ", ".
		 * Flags: IR, Group: serverSummaries
		 */
		 joinString?: String;
		 // ref="attr:DataSourceField.joinSuffix"
		/**
		 * (Read only) Defines suffix after concatenated values if field is used with 
		 * serverSummaries','Server summaries feature and the 
		 * SummaryFunction','summary function is "concat".
		 * Flags: IR, Group: serverSummaries
		 */
		 joinSuffix?: String;
		 // ref="attr:DataSourceField.joinType"
		/**
		 * (Read only) This property is only applicable to fields of SQL DataSources that also specify a 
		 * DataSourceField.foreignKey','foreignKey property; it is ignored for all other fields. Indicates the 
		 * type of join to make between the tables underlying this DataSource and the other DataSource
		 * referred to in the foreignKey property, when resolving DataSourceField.includeFrom','includeFrom 
		 * fields. The default value of null is the same as specifying "inner".
		 * 
		 * Note, outer joins are allowed for all supported database products only if you are using 
		 * DataSource.useAnsiJoins','ANSI-style joins, which is not the case by default. If you
		 * are using the older strategy of additional join expressions in the WHERE clause, outer 
		 * joins are only supported for database products that provide a proprietary native syntax for 
		 * expressing outer joins. Those products are:
		 * Oracle
		 * Versions of Microsoft SQL Server earlier than 2012, and running in compatibility mode 80
		 * 
		 * Flags: IR, Group: dataSourceRelations
		 */
		 joinType?: JoinType;
		 // ref="attr:DataSourceField.length"
		/**
		 * (Read only) Maximum number of characters allowed. Applicable only to fields of text type.
		 * For fields of this type a ValidatorType','length range validator will be automatically
		 * generated on both the client and server side to enforce this maximum length
		 * (unless such a validator is explicitly present for the field already).
		 * 
		 * The TextItem.enforceLength attribute can also 
		 * explicitly limit user input for freeform text items editing fields with an explicit
		 * length specified.
		 * 
		 * NOTE: For DataSources of type "sql", this property has a bearing on the type of 
		 * column we use when the underlying table is created by a DataSource 
		 * sqlDataSource','import in the adminConsole','Admin Console. Below 
		 * a certain length (which is database-specific, see below), we use standard VARCHAR
		 * columns; above that length, we use an alternate strategy (again, database-specific). For 
		 * these long fields, we sometimes also generate different SQL for "update" and "add" 
		 * operations, using JDBC "?" replacement parameters rather than embedding values directly in 
		 * the generated SQL; whether or not this is done depends entirely on what the underlying 
		 * database product and/or JDBC driver will allow.
		 * 
		 * Table of field length limits for supported databases:
		 * <table style="font-size:10px;text-align:center;border:1px solid black;">
		 * <tr><td style="color:white;background-color:black;">Database product</td>
		 * <td style="color:white;background-color:black;">VARCHAR limit *</td>
		 * <td style="color:white;background-color:black;">Type used above limit</td></tr>
		 * <tr><td>HSQLDB</td><td>None</td><td>-</td></tr>
		 * <tr><td>IBM DB2</td><td>4000</td><td>CLOB</td></tr>
		 * <tr><td>Firebird</td><td>32767</td><td>BLOB with subtype 1</td></tr>
		 * <tr><td>Informix</td><td>255 / 32739</td><td>LVARCHAR / TEXT ** </td></tr>
		 * <tr><td> Microsoft SQL Server </td><td>8000</td><td>TEXT</td></tr>
		 * <tr><td>MySQL</td><td> 255 / 65535 / 16M </td><td> TEXT / MEDIUMTEXT / LONGTEXT *** </td></tr>
		 * <tr><td>Oracle</td><td>4000</td><td>CLOB</td></tr>
		 * <tr><td>PostgreSQL</td><td>4000</td><td>TEXT</td></tr>
		 * </table>
		 * * The "VARCHAR limit" referred to here is a limit used by the SmartClient Server; it
		 * is not necessarily imposed by the database. For example, DB2's VARCHAR limit is not 4000
		 * characters; it actually varies from about 4K to about 32K, depending on how the server has 
		 * been configured.
		 * ** Informix has a limit of just 255 characters for VARCHAR, but has a native LVARCHAR
		 * type which supports nearly 32K characters without needing to fall back on long datatypes. 
		 * Therefore, with that one product, we have two thresholds for a change in storage type.
		 * *** MySQL has a limit of 255 characters for VARCHAR, 65,535 characters for TEXT and 
		 * 16,777,215 for MEDIUMTEXT; therefore, with that one product, we have three thresholds for a 
		 * change in storage type.
		 * Flags: IR, Group: dataType
		 */
		 length?: number;
		 // ref="attr:DataSourceField.lenientXPath"
		/**
		 * (Read only) Indicates that getting DataSourceField.valueXPath for this field should
		 * not perform any validation at all and will return null for non existing XPaths.
		 * Otherwise warning message will be logged for non-existing XPath or with null objects
		 * in the middle of XPath.
		 * 
		 * NOTE: this applies to server-side processing of valueXPath only.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 lenientXPath?: boolean;
		 // ref="attr:DataSourceField.maxFileSize"
		/**
		 * (Read only) For fields of a type that are represented by binary data initially uploaded from a file
		 * (currently "binary" and "imageFile", see FieldType), this sets the maximum 
		 * file size allowed, in bytes.
		 * Flags: IR
		 */
		 maxFileSize?: Integer;
		 // ref="attr:DataSourceField.mimeType"
		/**
		 * (Read only) For a binaryFields','binary field, sets a fixed mime type for all files stored
		 * to this field. Should be set to a standard mime type string, for example, "text/plain" for
		 * a .txt file.
		 * 
		 * This is useful if a binary field only stored one type of file and you chose not to store 
		 * filenames, since the extension of the file name is normally used to determine the mime type.
		 * Flags: IR
		 */
		 mimeType?: String;
		 // ref="attr:DataSourceField.multiple"
		/**
		 * (Read only) Indicates that this field should always be Array-valued. If the value derived from
		 * DataSource.dataFormat','XML or JSON data is singular, it will be wrapped in an Array.
		 * 
		 * JPA and Hibernate DataSources use multiple:true as part of the declaration of
		 * One-To-Many and Many-to-Many relations - see jpaHibernateRelations for details.
		 * 
		 * <h4>Criteria on multiple:true fields: client-side filtering</h4>
		 * 
		 * For simple Criteria, the criteria value is compared to each field value in the
		 * multiple:true field, according to the
		 * DSRequest.textMatchStyle','textMatchStyle. If any field value matches the
		 * filter value, the field is considered to match the criteria.
		 * 
		 * For AdvancedCriteria, for normal OperatorId','search operators the field
		 * value is considered as matching the Criterion if any of the field values
		 * match the Criterion. Specifically, this is true of all operators that have an 
		 * OperatorValueType','operatorValueType of "fieldType" or "valueRange".
		 * 
		 * For operators that compare against other fields in same record, such as "equalsField", 
		 * if the other field is not multiple:true, matching works the same as for
		 * normal operators, that is, as if criterion.value directly contained the value
		 * rather than the name of another field.
		 * 
		 * If the other field is also multiple:true, only "equalsField", "notEqualsField",
		 * "iEqualsField" and "iNotEqualsField" are allowed (any other operator will
		 * cause a warning and be ignored) and the set of values in the field must be identical (aside
		 * from case, for operators prefixed with "i") and in identical order to match.
		 * 
		 * For the inSet operator, the field matches if there is any intersection between
		 * the field values and the array of values provided in criterion.value.
		 * notInSet is the reverse.
		 * 
		 * Finally, for "isBlank", "notBlank", "isNull" and "notNull", an empty Array is considered non-null. For example,
		 * if you use dataFormat:"json" and the field value is provided to the browser as
		 * [] (JSON for an empty Array), the field is considered non-null.
		 * 
		 * <h4>Server-side Representation and Storage</h4>
		 * 
		 * Values for multiple:true fields appear as Java Lists when received in server code such as a
		 * DMI. The SmartClient Server supports simple storage of values that are multiple:true, controlled
		 * via the DataSourceField.multipleStorage setting.
		 * 
		 * For server-side behavior of JPA and Hibernate relation fields that are multiple:true, see
		 * jpaHibernateRelations.
		 * 
		 * For non-relation fields, the SmartClient Server supports simple storage of values that are
		 * multiple:true, controlled via the DataSourceField.multipleStorage setting, with some limited support
		 * for server-side filtering, as described in the DataSourceField.multipleStorage docs.
		 * 
		 * For the built-in SQL, Hibernate and JPA connectors, if criteria are specified for a
		 * multiple:true field where multipleStorage is null or "none", the SmartClient
		 * server knows nothing about how the multiple values are stored, so as a fallback the criteria
		 * will operate as though the field were a normal, non-multiple "text" field. This will
		 * generally not match the client-side filtering behavior described above, so filtering
		 * should either be performed entirely on the client (for example, via
		 * ListGrid.dataFetchMode','dataFetchMode:"local" or entirely on the server (via
		 * ResultSet.useClientFiltering:"false")
		 * 
		 * The server-side filtering is done through a criteria transform which happens with
		 * DataSource.transformMultipleFields','transformMultipleFields.
		 * 
		 * <h4>XML Serialization</h4>
		 * 
		 * Specifically for XML serialization and deserialization, multiple:true behaves
		 * similarly to the 
		 * <a href='http://www.google.com/search?hl=en&q=soap+array' target='_blank'>SOAP array idiom</a>, that is,
		 * there will be a "wrapper element" named after the field name, whose contents will be several
		 * elements of the specified DataSourceField.type','field.type. 
		 * 
		 * For example, Layout.members is declared with type:"Canvas",
		 * multiple:true. The correct XML format is thus:
		 * 
		 * &lt;VLayout&gt;
		 * &lt;members&gt;
		 * &lt;Canvas ID="myCanvas" ... /&gt;
		 * &lt;ListGrid ID="myGrid" .../&gt;
		 * &lt;Toolstrip ID="myToolStrip" ... /&gt;
		 * &lt;/members&gt;
		 * &lt;/VLayout&gt;
		 * 
		 * 
		 * See DataSourceField.childTagName for customizing the tagName used for subelements.
		 * Flags: IR, Group: xmlSerialize
		 */
		 multiple?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.multipleStorage"
		/**
		 * (Read only) How values for a DataSourceField.multiple','multiple:true field should be stored.
		 * 
		 * On the server, field values for multiple:true fields are represented as Java
		 * Lists in DSRequest and DSResponse objects, but when multipleStorage is used,
		 * are ultimately stored as Strings. 
		 * 
		 * This storage mechanism is "denormalized" in the sense of
		 * <a href='http://en.wikipedia.org/wiki/Database_normalization' target='_blank'>database normalization</a>
		 * because the field contains a compound value rather than an atomic value. Specifically, this
		 * makes the field harder to use with database features like SQL joins, since its value cannot
		 * be directly compared to other, singular fields. For this reason, there's really only a
		 * narrow set of cases where it makes sense to use this storage mechanism, consider it if:
		 * 
		 * the values don't appear in any other tables or columns elsewhere in your database (so
		 * joins and other comparisons wouldn't be possible anyway)
		 * there is no authoritative list of all possible values, or even of popular values; it's
		 * basically freeform, like arbitrary, uncurated "tags" applied to photos or links
		 * 
		 * 
		 * A multiple:true field can be of any SimpleType, including "date",
		 * "time", "datetime", "float", "int" etc. Type will be preserved across a store and reload
		 * cycle, so for example a List of values for a field of type "int" will arrive at the server
		 * in a DSRequest as a List of Integer, be stored as a String, but appear again as a List of
		 * Integer inside a DSResponse. When storing "date", "time" or "datetime" values as Strings,
		 * XML schema formats are used - the same that are used for transmission in XML or JSON (see
		 * dateFormatAndStorage','Date and Time Format and Storage overview for details).
		 * 
		 * The multipleStorage feature works by transforming from List to String and back
		 * inside the server-side DataSource.execute() method. Specifically, inbound DSRequests are
		 * transformed before methods that perform actual storage are called (executeUpdate() et al),
		 * and DSResponses received from these methods have multiple:true field values
		 * transformed back into Lists before DataSource.execute() returns the DSResponse.
		 * 
		 * This transformation approach means that the built-in SQL, JPA and Hibernate connectors all
		 * support multipleStorage, and multipleStorage is also automatically
		 * available for any custom DataSource that is capable of storing String values, and implements
		 * its storage methods via overrides of executeUpdate(), executeAdd() et al as described in the
		 * writeCustomDataSource','custom DataSource overview.
		 * 
		 * Note that when using the built-in SQL, JPA and Hibernate connectors, the underlying SQL
		 * column should be of 'text' type. The dbConfigTool','Database Configuration Tool will
		 * automatically generate columns of the correct type for a SQLDataSource. For JPA or
		 * Hibernate DataSources, just ensure the type of the Java bean property on your Java object is
		 * String.
		 * 
		 * The default multipleStorage setting of null means that the "simpleString"
		 * MultipleFieldStorage approach will be used if:
		 * 
		 * the field is of a known SimpleType
		 * the field is not a DataSourceField.foreignKey
		 * 
		 * Otherwise, MultipleFieldStorage "none" will be used.
		 * 
		 * <h4>Criteria and AdvancedCriteria handling</h4>
		 * 
		 * For the built-in SQL, JPA and Hibernate connectors, when
		 * multipleStorage:"simpleString" or "json" is used, criteria are transformed to
		 * replicate the client-side filtering behavior for multiple:true fields, where possible.
		 * The following operators are supported with the same behavior as client-side filtering:
		 * 
		 * all String-oriented operators including patternOperators','pattern operators,
		 * but not regexp/iRegexp
		 * isBlank / notBlank
		 * isNull / notNull
		 * inSet / notInSet
		 * equalsField / notEqualsField / iEqualsField / iNotEqualsField
		 * 
		 * The following operators, which are supported for client-side filtering of multiple:true
		 * fields, are not supported for server filtering when using multipleStorage:
		 * 
		 * greaterThan/lessThan(OrEqual)
		 * "between" and all other operators with OperatorValueType of "valueRange" 
		 * regexp / iRegexp as noted above
		 * 
		 * Note that for string-based filtering operators such as "equals", no characters which are
		 * part of the DataSourceField.multipleStorageSeparator may be used in the filter string. If any
		 * characters from the multipleStorageSeparator are present in the filter value,
		 * it will always fail to match. For "json" mode, the multipleStorageSeparator is
		 * effectively the String '","'.
		 * Flags: IR, Group: multipleField
		 */
		 multipleStorage?: MultipleFieldStorage;
		 // ref="attr:DataSourceField.multipleStorageSeparator"
		/**
		 * (Read only) For fields that are DataSourceField.multiple','multiple:true and use DataSourceField.multipleStorage, the
		 * separator used in the "simpleString" MultipleFieldStorage mode.
		 * 
		 * Default value of null means the DataSourceField.multipleValueSeparator is used instead.
		 * Flags: IR, Group: multipleField
		 */
		 multipleStorageSeparator?: String;
		 // ref="attr:DataSourceField.multipleValueSeparator"
		/**
		 * (Read only) For fields that are DataSourceField.multiple','multiple:true, the separator used 
		 * between values when they are displayed.
		 * Flags: IR, Group: multipleField
		 */
		 multipleValueSeparator?: String;
		 // ref="attr:DataSourceField.name"
		/**
		 * (Read only) Name for this field. 
		 * 
		 * Must be unique across all fields within the DataSource as well as a valid JavaScript
		 * identifier - see FieldName for details and how to check for validity.
		 * 
		 * The field name is also the property in each DataSource record which holds the value for this
		 * field.
		 * Flags: IR, Group: basics
		 */
		 name?: FieldName;
		 // ref="attr:DataSourceField.nativeName"
		/**
		 * (Read only) Only applicable to "sql" dataSources. If set, this property indicates that the field is 
		 * bound to the column named in the property. It is used to bind a DataSourceField to a 
		 * database column with a different name.
		 * 
		 * nativeName is useful for disambiguating in cases where you have customized 
		 * SQL. For example, assume you are joining two tables - call them product and
		 * supplier - that both contain a column called "name". Only one field in the 
		 * DataSource can be called "name"; to disambiguate, we need to specify both 
		 * DataSourceField.tableName','tableName and nativeName. A field declaration 
		 * like this would be needed:
		 * &lt;field name="supplierName" type="text" tableName="supplier" nativeName="name" />
		 * 
		 * You may also wish to use this property to map legacy column names to more meaningful field
		 * names in the DataSource. For example:
		 * &lt;field name="productName" type="text" nativeName="PRDNM" />
		 * 
		 * Note that it is not allowed to have multiple fields with the same nativeName 
		 * bound to the same database table.
		 * Flags: IR
		 */
		 nativeName?: String;
		 // ref="attr:DataSourceField.nillable"
		/**
		 * (Read only) Controls whether an explicit null-valued Record attribute for this field
		 * should result in xsi:nil being used to transmit the value when serializing
		 * to XML, like so:
		 * 
		 * &lt;book&gt;
		 * &lt;title&gt;Beowulf&lt;/title&gt;
		 * &lt;author xsi:nil="true"/&gt;
		 * &lt;/book&gt;
		 * 
		 * If nillable is not set, no XML element will be generated for
		 * the explicit null value.
		 * boolean - Null not allowed
		 * Flags: IR, Group: dataType
		 */
		 nillable?: boolean;
		 // ref="attr:DataSourceField.nullReplacementValue"
		/**
		 * (Read only) If DataSource.noNullUpdates is set, the value to use for this field when a null
		 * value is assigned to it on an update operation. This property overrides the DataSource-level
		 * properties DataSource.nullStringValue','nullStringValue, 
		 * DataSource.nullIntegerValue','nullIntegerValue, 
		 * DataSource.nullFloatValue','nullFloatValue and 
		 * DataSource.nullDateValue','nullDateValue, for this field only.
		 * 
		 * NOTE: If you use this property, you are responsible for ensuring that the replacement value
		 * is appropriate and valid.
		 * Flags: IR
		 */
		 nullReplacementValue?: any /* Any */;
		 // ref="attr:DataSourceField.precision"
		/**
		 * Applies only to fields of type "float" or "integer" and affects how many significant
		 * digits are shown.
		 * 
		 * For example, a field value of 343.1, 343.104 and 343.09872677 would all be shown as 343.10
		 * if precision is 5.
		 * 
		 * The original value is always shown when the value is edited.
		 * Flags: IRW, Group: appearance
		 */
		 precision?: number;
		 // ref="attr:DataSourceField.primaryKey"
		/**
		 * (Read only) Indicates either that this field holds a value unique across all records in this
		 * DataSource, or that it is one of a number of fields marked as primary keys, and the
		 * combination of the values held in all of those fields is unique across all records in the
		 * DataSource. Note that the latter usage - so-called "composite" or "multipart" keys - is 
		 * intended for support of legacy databases only: if you are able to choose an approach, 
		 * Isomorphic recommends the use of one primaryKey field per DataSource, and 
		 * ideally this field should be of DataSourceField.type','type "sequence". If you have
		 * control of the underlying tables, there is nothing to stop you from adding a field like 
		 * this (a so-called "synthetic" or "surrogate" key), even for tables that already have a set
		 * of columns that could combine to make a composite key (a so-called "natural" key). Also, 
		 * it is neither necessary nor correct to use a composite primaryKey because you want to 
		 * enforce uniqueness across that combination of fields. You can achieve that by declaring
		 * a unique constraint in the table schema, or use an ValidatorType','isUnique 
		 * validator with validator.criteriaFields, or both; there is no need to use a 
		 * composite key to enforce uniqueness
		 * 
		 * Note that composite primaryKeys are not supported in tree-structured datasets 
		 * (Tree and ResultTree) or components (TreeGrid, 
		 * ColumnTree). Tree-structured data requires that nodes have a unique 
		 * Tree.idField','idField, with the parent/child relationship expressed through the 
		 * Tree.parentIdField','parentIdField. This implies that binding a Tree to a DataSource
		 * requires that the DataSource have a singular primaryKey, and that the primaryKey field is 
		 * also the idField, as described in the treeDataBinding','tree databinding overview
		 * 
		 * A DataSource that can only perform the "fetch" operation does not require a
		 * primaryKey unless it contains binaryFields','binary fields. If a DataSource 
		 * allows modification of DataSource records through add, update and remove DataSource 
		 * operations, or it contains one or more binary fields, one or more fields must be marked as 
		 * the primary key.
		 * 
		 * SmartClient requires a primary key value to uniquely identify records when communicating
		 * updates or deletions to the server. There is no requirement that the primaryKey field be
		 * mapped to an actual "primary key" in your object model, web service, or database (though 
		 * this is the most obvious and natural thing to do, of course). The only requirement is 
		 * that the combined values of the primaryKey fields be unique for a given browser instance
		 * for the lifetime of the page. 
		 * 
		 * If using SmartClient's sqlDataSource','SQL engine and generating SQL tables using
		 * the dbConfigTool','Database Configuration Tool, the table column generated from a
		 * primaryKey field will have a unique constraint applied in the database table and, if the field
		 * is of type "sequence", the database column will also be created as an "identity column" in those
		 * databases that implement sequence-type handling with identity columns.
		 * boolean - Null not allowed
		 * Flags: IR, Group: dataSourceRelations
		 */
		 primaryKey?: boolean;
		 // ref="attr:DataSourceField.propertiesOnly"
		/**
		 * (Read only) For use in componentSchema for fields that contain other components, this flag
		 * suppresses auto-construction for subcomponents that appear under this field.
		 * 
		 * For example, the VLayout schema sets this for its Layout.members','members
		 * property, so that when a VLayout is constructed via XML as follows:
		 * 
		 * &lt;VLayout&gt;
		 * &lt;members&gt;
		 * &lt;ListGrid ID="myGrid" .../&gt;
		 * &lt;Toolstrip ID="myToolStrip" ... /&gt;
		 * &lt;/members&gt;
		 * &lt;/VLayout&gt;
		 * 
		 * The ListGrid and ToolStrip do not construct themselves automatically. Instead, the VLayout
		 * receives the properties of the ListGrid and ToolStrip as ordinary JavaScript Objects, with
		 * the special property _constructor set to the name of the class that should be
		 * constructed.
		 * boolean - Null not allowed
		 * Flags: IR, Group: componentSchema
		 */
		 propertiesOnly?: boolean;
		 // ref="attr:DataSourceField.readOnlyEditorType"
		/**
		 * (Read only) Sets the default FormItem to be used if this field is marked as 
		 * DataSourceField.canEdit','canEdit false and displayed in an editor component such
		 * as a DynamicForm.
		 * 
		 * This property may also be specified at the type level by specifying 
		 * SimpleType.readOnlyEditorType.
		 * Flags: IR, Group: componentBinding
		 */
		 readOnlyEditorType?: FormItemClassName;
		 // ref="attr:DataSourceField.relatedTableAlias"
		/**
		 * (Read only) For a sqlDataSource','SQL DataSource field that specifies a
		 * DataSourceField.foreignKey','foreignKey, this property defines the table alias name to
		 * use in generated SQL. 
		 * 
		 * Aliasing is necessary when the same table appears more than once in a query. This can 
		 * happen when using DataSourceField.includeVia','Multiple includeFrom \n fields referring to the same related DataSource. It can also happen when a
		 * DataSourceField.foreignKey','foreignKey definition references the same dataSource
		 * that the field is defined in; this happens with hierarchical structures, for example where
		 * every Employee reports to another Employee. This is a so-called "self join", and it 
		 * <em>always</em> requires relatedTableAlias to be specified; failure to do so
		 * will result in invalid SQL.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 relatedTableAlias?: String;
		 // ref="attr:DataSourceField.required"
		/**
		 * (Read only) Indicates this field must be non-null in order for a record to pass validation. Or, in the
		 * case of a "binary" field, a non-empty file must be uploaded. Setting this property has the
		 * same effect as giving the field a ValidatorType','"required" validator. 
		 * 
		 * Note that required should not be set for a server-generated field, such as a
		 * sequence, or validation will fail on the client.
		 * <h3>Conditionally required fields</h3>
		 * Adding an Validator.applyWhen','applyWhen condition to a required 
		 * validator introduces subtle complexities to the process of validating an existing record. 
		 * The client is not guaranteed to know the the full and complete state of the record it is 
		 * editing because it is common for a DynamicForm to be editing a subset of
		 * fields. When a field is unconditionally required, things are simple: if the 
		 * DynamicForm has a FormItem for that field, then the required validation
		 * passes if that FormItem has a value, and fails if it does not. If the form has no FormItem
		 * for the field, it can assume that the field has a value because otherwise it would have 
		 * failed validation when we attempted to add it (when we are adding a record, we of course do 
		 * know the full and complete state of the record - it is whatever we are about to add).
		 * 
		 * When a field is conditionally required, the client can no longer assume that all 
		 * required fields will have a value. It may be the case that the condition of requirement 
		 * was not met when the record was added, but now it is. For example, consider these field
		 * definitions:
		 * &lt;field name="yearsAtCurrentAddress" type="integer" /&gt;
		 * &lt;field name="previousAddress" type="text" &gt;
		 * &lt;validator type="required" errorMessage="Previous address is required if you have been at your current address less than three years"&gt;
		 * &lt;applyWhen operator="and"&gt;
		 * &lt;criteria&gt;
		 * &lt;criterion fieldName="yearsAtCurrentAddress" operator="lessThan" value="3" /&gt;
		 * &lt;/criteria&gt;
		 * &lt;/applyWhen&gt;
		 * &lt;/validator&gt;
		 * &lt;/field&gt;
		 * 
		 * Imagine a record for this DataSource is added where the user has entered a value of "3" for 
		 * "yearsAtCurrentAddress", and no previous address. Later, the value of that field is 
		 * changed to "2". If this is done using a form that is also showing the "previousAddress" 
		 * field, we will know that "previousAddress" has not been provided, so we can fail the 
		 * validation and the user will get a helpful error message explaining what the problem is.
		 * 
		 * However, if the form does not also show the "previousAddress" field, we may choose to use an
		 * OperationBinding that uses OperationBinding.outputs','outputs to trim the
		 * record down to just the fields the form does contain, in the interests of avoiding 
		 * information leakage. Or perhaps that value is automatically culled from the record before
		 * the client sees it by the application of a DataSourceField.viewRequires','declarative security rule.
		 * Whatever the reason, if the client does not have the complete record, it is not possible 
		 * for the client to sensibly apply this validation. And because the client has no way of 
		 * knowing if a value is missing because it is genuinely null, or because it has been trimmed
		 * away by the server, we must treat any null value with suspicion (unless it has a matching 
		 * FormItem - the presence of the FormItem means that the user can edit the value, so it 
		 * would make no sense to pair it with a trimmed record that excludes that field value).
		 * 
		 * When this happens, we mark the validation as having passed on the client, but in need of 
		 * running on the server. The server validation makes use of the "storedRecord" facility 
		 * (look for the description of $storedRecord in the 
		 * velocitySupport','Velocity support overview) to overlay the changed record on
		 * top of the existing record as it currently exists in the database. This gives the validator
		 * the complete record including both changed and unchanged values, so it is able to carry 
		 * out the required check in a meaningful way. However, you should be aware that the 
		 * combination of conditional "required" validators and DynamicForms that edit partial 
		 * records can result in a validation that cannot run on the client and must do both a server 
		 * roundtrip and a database fetch.
		 * boolean - Null not allowed
		 * Flags: IR, Group: dataType
		 */
		 required?: boolean;
		 // ref="attr:DataSourceField.requiredMessage"
		/**
		 * The required message when a field that has been marked as
		 * DataSourceField.required','required is not filled in by the user.
		 * 
		 * Note that this setting wins over DataSource.requiredMessage if both are set.
		 * Flags: IRW, Group: formTitles
		 */
		 requiredMessage?: String;
		 // ref="attr:DataSourceField.rootValue"
		/**
		 * (Read only) For a field that is a foreignKey establishing a tree relationship, what value indicates a
		 * root-level node. Defaults to null.
		 * 
		 * Note that the rootValue may be overridden on a specific ResultTree instance by setting
		 * ResultTree.rootNode, or if the ResultTree is auto-generated by a TreeGrid,
		 * by setting TreeGrid.treeRootValue. This allows a component to navigate a subtree of
		 * the hierarchical data from this dataSource starting at a particular node.
		 * Flags: IR, Group: dataSourceRelations
		 */
		 rootValue?: any /* Any */;
		 // ref="attr:DataSourceField.sequenceName"
		/**
		 * (Read only) For a DataSource with DataSource.serverType','serverType:"sql" with a field of type
		 * "sequence", the name of the SQL sequence that should be used when inserting new records into
		 * this table.
		 * 
		 * Note that this is never required for SQL tables that are generated from SmartClient
		 * DataSources (a default sequence name of tableName + "_" + columnName is chosen, but see the
		 * notes below regarding this), and is never required for databases where inserting null into a 
		 * sequence column is sufficient (MySQL, SQL Server, DB2 and others). 
		 * 
		 * You would only need to set sequenceName if you are integrating with a pre-existing table
		 * stored in a database where the sequence must be named for insertion to work (Oracle,
		 * Postgres, Firebird) OR you are trying to use the same sequence across multiple DataSources.
		 * 
		 * Note: If you specify the sql.{database type}.sequence.name.prefix and/or 
		 * sql.{database type}.sequence.name.suffix properties in your 
		 * server_properties','server.properties file,the generated sequence name will include the prefix and/or
		 * suffix. For example, with a prefix of "order_system_" and a suffix of "_seq", the sequence
		 * generated for column "orderNumber" on table "orders" would be:
		 * order_system_orders_orderNumber_seq
		 * 
		 * Flags: IR, Group: sqlDataSource
		 */
		 sequenceName?: String;
		 // ref="attr:DataSourceField.showFileInline"
		/**
		 * (Read only) For a field of type:"imageFile", indicates whether to stream the image and display it
		 * inline or to display the View and Download icons.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showFileInline?: boolean;
		 // ref="attr:DataSourceField.sortByField"
		/**
		 * (Read only) Causes values for this field to be sorted according to values for another field, for
		 * both client- and server-side sorting.
		 * 
		 * This can be used to establish a sort order for a field that is not the normal sorting
		 * order indicated by the field value, typically by having the sortByField as
		 * a DataSourceField.hidden','hidden field. 
		 * 
		 * If using SQLDataSource, consider using a DataSourceField.customSelectExpression as an efficient
		 * way to populate the sortByField with the results of a SQL expression.
		 * Flags: IR
		 */
		 sortByField?: String;
		 // ref="attr:DataSourceField.sqlDateFormat"
		/**
		 * (Read only) For fields of type "date", "time", and "datetime" that specify an
		 * DataSourceField.sqlStorageStrategy','sqlStorageStrategy of "number" or "text", this
		 * property allows you to specify the format SmartClient should use to map to/from the 
		 * underlying value stored in the database. The string provided must be a valid 
		 * <a href=http://download.oracle.com/javase/1.4.2/docs/api/java/text/SimpleDateFormat.html>
		 * SimpleDateFormat pattern string</a>.
		 * 
		 * For fields of type "datetime" and "time" that specify an
		 * DataSourceField.sqlStorageStrategy','sqlStorageStrategy of "number", two special
		 * sqlDateFormat values are supported:
		 * 
		 * "epoch" - The datetime or time value is stored as the number of full seconds that have
		 * elapsed since January 1, 1970, 00:00:00 GMT.
		 * "epochms" - The datetime or time value is stored as the number of milliseconds that
		 * have elapsed since January 1, 1970, 00:00:00 GMT. Millisecond precision is preserved
		 * through database roundtrips with this setting
		 * 
		 * 
		 * This property and the "number" and "text" strategies for date/datetime fields are provided
		 * to allow transparent two-way mapping of legacy date values that are stored in numeric or
		 * text columns respectively rather than a true "date" column. You would not ordinarily use them
		 * in the absence of a legacy database.
		 * 
		 * Note that this property only applies to users of SmartClient server and data sources of
		 * type "sql".
		 * Flags: IR
		 */
		 sqlDateFormat?: String;
		 // ref="attr:DataSourceField.sqlFalseValue"
		/**
		 * (Read only) For fields of type "boolean" that specify a 
		 * DataSourceField.sqlStorageStrategy','sqlStorageStrategy of "singleChar", this is the
		 * value to persist for false values. Note that the common use cases of storing booleans as 
		 * T/F, Y/N and 1/0 are already catered for without the need for this property.
		 * For fields of type "boolean" that specify a 
		 * DataSourceField.sqlStorageStrategy','sqlStorageStrategy of "string", this is the value
		 * to persist for false values that require using the entire value.
		 * 
		 * You can specify NULL as a valid value for sqlFalseValue, using this XML notation:
		 * 
		 * &lt;sqlFalseValue xsi:nil="true"&gt;&lt;/sqlFalseValue&gt;
		 * 
		 * Flags: IR
		 */
		 sqlFalseValue?: String;
		 // ref="attr:DataSourceField.sqlStorageStrategy"
		/**
		 * (Read only) For certain field types, indicates the strategy to be used to store values to the underlying
		 * SQL column.
		 * 
		 * Fields of type "boolean"
		 * The default strategy for boolean fields is to assume the underlying type of the field is 
		 * text and store boolean true and false values as the character strings "true" and "false". 
		 * The following additional strategies are available:
		 * 
		 * "number" or "integer": store true as 1, false as 0
		 * "singleChar10": store true as "1", false as "0"
		 * "singleCharYN": store true as "Y", false as "N"
		 * "singleCharTF": store true as "T", false as "F"
		 * "singleChar": store as a single character, using the values defined by 
		 * DataSourceField.sqlTrueValue','sqlTrueValue and 
		 * DataSourceField.sqlFalseValue','sqlFalseValue
		 * "string": store the entire values defined by 
		 * DataSourceField.sqlTrueValue','sqlTrueValue and 
		 * DataSourceField.sqlFalseValue','sqlFalseValue
		 * 
		 * 
		 * Fields of type "date", "time", and "datetime"
		 * The default strategy for these types is to use a native type that supports date and 
		 * time values to the nearest second; the actual type used varies by database. The following
		 * additional strategies are available:
		 * 
		 * "nativeDate": Use a native SQL DATE type
		 * "number" or "integer": Store the value as a plain numeric value
		 * "text": Store the value as a plain text value
		 * 
		 * The "number" and "text" strategies for date/time/datetime fields are provided to allow transparent
		 * two-way mapping of legacy date values; you would not ordinarily use them in the absence of a
		 * legacy database. In both cases, the actual format of the number or text string is determined
		 * by specifying a DataSourceField.sqlDateFormat','sqlDateFormat on the field; if no 
		 * format is specified, the framework defaults to "yyyyMMdd".
		 * 
		 * 
		 * Fields of type "text"
		 * <em>NOTE: This section is only applicable for users of Microsoft SQL Server. The "ntext"
		 * strategy is ignored for all other databases.</em>
		 * If you are integrating with Microsoft SQL Server, you may run into an issue with that database
		 * and double-byte character sets. Although the documentation indicates that string values are 
		 * sent to the database as Unicode by default, they may undergo conversion at the database end, 
		 * depending on the collation settings of the database. 
		 * <a href=http://support.microsoft.com/kb/239530>This Microsoft support article</a> describes
		 * the situation, which is that Unicode is converted to the code page of the database before
		 * being used, in order to "provide backward compatibility with existing applications".
		 * 
		 * To work around this, we provide an sqlStorageStrategy of "ntext". Fields that
		 * declare this strategy are inserted into queries using the "N syntax", like so:
		 * &nbsp;&nbsp;&nbsp;UPDATE MyTable SET MyTextColumn = N'some text' WHERE MyPK = N'some key'
		 * 
		 * This syntax overrides defaults and forces the database to treat strings as Unicode.
		 * 
		 * Note that declaring a field to be of FieldType','type "ntext" is exactly 
		 * equivalent to specifying type "text" and an sqlStorageStrategy of "ntext". 
		 * If you declare a field of type "ntext" when the back-end database is something other than 
		 * SQL Server, it will be treated as a normal field of type "text".
		 * 
		 * This property only applies to users of the SmartClient server using dataSources of
		 * type "sql".
		 * Flags: IR
		 */
		 sqlStorageStrategy?: String;
		 // ref="attr:DataSourceField.sqlTrueValue"
		/**
		 * (Read only) For fields of type "boolean" that specify a 
		 * DataSourceField.sqlStorageStrategy','sqlStorageStrategy of "singleChar", this is the
		 * value to persist for true values. Note that the common use cases of storing booleans as 
		 * T/F, Y/N and 1/0 are already catered for without the need for this property.
		 * For fields of type "boolean" that specify a 
		 * DataSourceField.sqlStorageStrategy','sqlStorageStrategy of "string", this is the value
		 * to persist for true values that require using the entire value.
		 * Flags: IR
		 */
		 sqlTrueValue?: String;
		 // ref="attr:DataSourceField.storeMilliseconds"
		/**
		 * (Read only) For fields of type "datetime", indicates whether the framework should attempt to preserve
		 * the millisecond part when persisting to native SQL datetime-type columns. Whether this 
		 * is possible depends on the type and version of the underlying database product; some 
		 * databases - for example SQL Server earlier than 2008 and MySQL versions earlier than 
		 * 5.6 - do not provide fractional seconds support. If you set this flag when your underlying 
		 * database cannot support fractional seconds, it will be ignored.
		 * 
		 * Other than the two cases just mentioned which are known to fail, storeMilliseconds 
		 * has been tested and is officially supported with the following products and minimum 
		 * versions:
		 * Oracle 10g
		 * Microsoft SQL Server 2008
		 * MySQL 5.6
		 * PostgreSQL 9.1
		 * HSQLDB 2.2
		 * DB2 for Unix/Linux 9.7
		 * Firebird 11.2
		 * Informix IDS 11.5
		 * 
		 * Note that you can use DataSourceField.sqlStorageStrategy','sqlStorageStrategy to store a datetime 
		 * value with sub-second precision in <em>any</em> database - see below.
		 * 
		 * When the system generates SQL to insert or update datetime values including a millisecond
		 * element, it does so using a database-specific format string specified in property 
		 * defaultDateTimeFormatWithMilliseconds in your server.properties 
		 * file. These format strings should conform to the rules of the
		 * <a href=http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html>
		 * Java SimpleDateFormat class</a>. Suitable format strings are provided for all default 
		 * databases out of the box; if you need to override one or provide a new one, you do so as
		 * shown in this example:
		 * sql.MyNewDatabase.defaultDateTimeFormatWithMilliseconds: yy-MM-dd'T'hh.mm.ss.SSS
		 * 
		 * Note that this property only controls the persistence of milliseconds into the database;
		 * there is no built-in support for sub-second elements of datetimes in any SmartClient visual
		 * components. See also the documentation for DataSource.trimMilliseconds for more 
		 * details of how sub-second datetime elements are handled in the client-server flow.
		 * 
		 * This property is only applicable to DataSources of DSServerType','serverType 
		 * "sql" and fields of FieldType','type "datetime". It is ignored in all other 
		 * cases. However, note that the built-in JPA and Hibernate dataSources will always persist
		 * millisecond values automatically if the underlying Java type, database and column support
		 * it.
		 * 
		 * Finally, note that this property only has an effect on <em>native</em> datetime-type fields.
		 * When you use DataSourceField.sqlStorageStrategy','sqlStorageStrategy to store a temporal value in a 
		 * text or number column, it is the DataSourceField.sqlDateFormat','sqlDateFormat you use that dictates 
		 * the precision. For example, a field with sqlStorageStrategy:"text" and 
		 * sqlDateFormat:"yyyy-MM-dd hh:mm:ss.SSS" would store and retrieve with millisecond
		 * precsion; the same field with sqlDateFormat:"yyyy-MM-dd hh:mm" would store
		 * and retrieve with precision to the nearest minute only.
		 * Flags: IR
		 */
		 storeMilliseconds?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.storeWithHash"
		/**
		 * (Read only) If set, causes the field to be securely hashed before saving on an "add" or "update" 
		 * operation.
		 * Flags: IR
		 */
		 storeWithHash?: HashAlgorithm;
		 // ref="attr:DataSourceField.stringInBrowser"
		/**
		 * (Read only) Server-side setting that causes values for fields of type "integer" or "float" to be represented 
		 * as Strings when delivered to a web browser, in order to avoid mangling values which cannot be
		 * represented faithfully in JavaScript.
		 * 
		 * JavaScript has a single "Number" type which internally stores numbers in a format equivalent to
		 * Java's "Double" - double-precision floating point. This means it cannot represent the full
		 * range of Java's Long type: Java Longs can represent integral values between -2^63 to 2^63-1,
		 * whereas JavaScript Number can only represent exact integer values between -2^53 and 2^53.
		 * Similarly, JavaScript's Number type cannot represent Java's unlimited-size BigInteger or
		 * unlimited-precision BigDecimal objects at all.
		 * 
		 * The stringInBrowser setting can be used to deliver numeric values as Strings to the
		 * browser. This is intended to allow read-only display and successful round-tripping of the
		 * numeric value, however, it will not cause number-oriented features such as SpinnerItem,
		 * Slider, ListGrid.showGridSummary','ListGrid summaries or range-checking
		 * Validator','validators or AdvancedCriteria','criteria to actually work.
		 * 
		 * If stringInBrowser is not set, the default behavior is configured by the 
		 * server.properties setting datasource.defaultStringInBrowser. If 
		 * this flag is false, numeric values are delivered to the client as numbers, even where 
		 * this will lead to a loss of precision. If the flag is true (which is the the default),
		 * the behavior is to prevent range overflow for numeric values:
		 * 
		 * Java values of type Long, BigInteger and BigDecimal will be delivered as
		 * String only if they exceed JavaScript's number range. 
		 * Client-side validation will allow inputs that are outside of JavaScript's normal
		 * integer range, and such numbers will remain as Strings after validation, instead of being
		 * converted to Numbers
		 * Values submitted to the server will be converted to BigInteger if they exceed the range
		 * of Java's Long type. This happens during DSRequest validation, before any defined
		 * dmiOverview','DMI methods are called.
		 * 
		 * 
		 * This default set of behaviors is intended to automatically deal with cases like numeric
		 * DataSourceField.primaryKey or DataSourceField.foreignKey values that are never used as numbers, but happen to use
		 * the full Java Long range. To disable the above behaviors, set stringInBrowser="false".
		 * 
		 * If stringInBrowser is explicitly set to true:
		 * 
		 * the value for the field will always be delivered to the browser as a String (no
		 * attempt is made to detect the value as out of range / too high precision)
		 * client-side validation will do a check for valid format only, and always leave the value
		 * as a String. Numeric range validators are ignored client-side (always pass), but are
		 * still active server-side.
		 * AdvancedCriteria OperatorId','operators that check if values are in a particular
		 * range will always pass
		 * the field is treated as though DataSourceField.canFilter','canFilter:false were set, to avoid showing
		 * non-functional search interfaces to the user. Set canFilter="true" to avoid
		 * this effect
		 * 
		 * 
		 * This setting is recommended for presenting out-of-range issues or precision loss on fields that
		 * represent actual quantities (as opposed to primaryKey or foreignKey fields, which really
		 * represent IDs). To ensure unlimited-precision BigDecimal values are preserved, you should also
		 * set DataSourceField.javaClass.
		 * 
		 * Note that responses delivered as JSON or XML, such as responses from the
		 * servletDetails','RESTHandler servlet, are not affected. This setting applies only
		 * to responses delivered to a web browser.
		 * 
		 * The entirety of stringInBrowser processing can be completely disabled by setting 
		 * server.properties flag datasource.disableStringInBrowser to true.
		 * This will cause all numeric values to be delivered as numbers without even attempting to 
		 * detect if this will lead to a loss of precision. This setting overrides both the 
		 * stringInBrowser field setting and the 
		 * datasource.defaultStringInBrowser server.properties flag.
		 * Flags: IR
		 */
		 stringInBrowser?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.summaryFunction"
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
		 summaryFunction?: SummaryFunction;
		 // ref="attr:DataSourceField.summaryValueTitle"
		/**
		 * (Read only) Title to show in a SummaryFunction','Summary of type "title" for this field. If unspecified
		 * title summaries will show the DataSourceField.title for the field.
		 * Flags: IR
		 */
		 summaryValueTitle?: String;
		 // ref="attr:DataSourceField.tableName"
		/**
		 * (Read only) Only applicable to "sql" dataSources, setting tableName indicates that this
		 * field will be coming from another table by way of a 
		 * customQuerying','customized SQL query.
		 * 
		 * By default, the SQL generator will not include this field in generated SQL for "add"
		 * or "update" operations. It will include the field in the SELECT clause and WHERE clause of
		 * customized "fetch" operations, where it is expected that you will make the table available
		 * via a custom &lt;tableClause&gt; as shown in largeValueMapSQL', 'this sample.
		 * 
		 * The table name will also be used to qualifying the column name unless
		 * DataSource.qualifyColumnNames or OperationBinding.qualifyColumnNames has been
		 * disabled.
		 * 
		 * Note: This property is only required when including fields from tables other than the
		 * default table specified by DataSource.tableName.
		 * Flags: IR
		 */
		 tableName?: String;
		 // ref="attr:DataSourceField.timeFormatter"
		/**
		 * (Advanced) Preferred time-format to apply to date type values within this field. If this property is
		 * specified on a field displayed within a dataBound component such as a ListGrid or
		 * DynamicForm, any dates displayed in this field will be formatted as times using the
		 * appropriate format.
		 * 
		 * This is most commonly only applied to fields specified as type "time" though
		 * if no explicit FormItem.dateFormatter is specified it will be respected for other 
		 * fields as well.
		 * 
		 * See ListGridField.timeFormatter and FormItem.timeFormatter for more information.
		 * Flags: IRWA, Group: appearance
		 */
		 timeFormatter?: TimeDisplayFormat;
		 // ref="attr:DataSourceField.title"
		/**
		 * (Read only) Default user-visible title for this field.
		 * 
		 * This will be picked up by DataBound components and other views over this DataSource.
		 * 
		 * Note this property frequently does not need to be set since DataSource.autoDeriveTitles (on by
		 * default) usually picks an appropriate user-visible title if you have a reasonable naming convention
		 * for your field names.
		 * 
		 * Note that if this field is being displayed in a ListGrid bound to this dataSource,
		 * the ListGridField.headerTitle attribute may be used to specify a
		 * different string for display in the listGrid column header.
		 * Flags: IR, Group: componentBinding
		 */
		 title?: String;
		 // ref="attr:DataSourceField.type"
		/**
		 * (Read only) Type of this field. Required for all DataSource fields.
		 * 
		 * Field type may imply automatic validators (for example, an integer field cannot accept the
		 * value "foo"). Field type also affects the default behaviors of DataBound components, for
		 * example, if a field is declared as type "date", components that edit that field will
		 * automatically choose a date-editing interface with pop-up date picker.
		 * Flags: IR, Group: basics
		 */
		 type?: FieldType;
		 // ref="attr:DataSourceField.updateRequires"
		/**
		 * (Read only) Indicates that the specified VelocityExpression must evaluate to true if
		 * updates to this field are to be allowed. If the specified expression does not 
		 * evaluate to true, the field will be removed from the request as described for 
		 * DataSourceField.editRequiresAuthentication','editRequiresAuthentication.
		 * 
		 * In addition to the normal context variables available to Velocity expressions in SmartClient,
		 * expressions you write for field-level requires clauses - updateRequires, 
		 * DataSourceField.viewRequires','viewRequires, DataSourceField.editRequires','editRequires and 
		 * DataSourceField.initRequires','initRequires - can reference two additional variables: 
		 * $fieldName and $dsName. These are the names of the dataSource and 
		 * field currently undergoing requires checks. They are helpful because they allow
		 * you to write a generic checker function that can be used to handle requires
		 * checks for multiple fields and dataSources.
		 * 
		 * NOTE: This property only prevents update of a field; initialization will still be 
		 * allowed. You should only use this property if you have a special requirement; ordinarily,
		 * use DataSourceField.editRequires, which applies security for both types of write.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 updateRequires?: VelocityExpression;
		 // ref="attr:DataSourceField.updateRequiresAuthentication"
		/**
		 * (Read only) Whether a user must be authenticated in order to update to this field. If this property is 
		 * set and the user is not authenticated, the SmartClient Server will not allow this field to
		 * be updated.
		 * boolean - Null not allowed
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 updateRequiresAuthentication?: boolean;
		 // ref="attr:DataSourceField.updateRequiresRole"
		/**
		 * (Read only) Comma-separated list of user roles that are allowed to update this field. If the current
		 * user does not have any of the roles listed, the system will not allow this field to be 
		 * updated.
		 * 
		 * NOTE: This property only prevents a field from being updated; initialization will 
		 * still be allowed. You should only use this property if you have a special requirement; 
		 * ordinarily, use DataSourceField.editRequiresRole, which applies security for both 
		 * types of write.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 updateRequiresRole?: String;
		 // ref="attr:DataSourceField.uploadFieldName"
		/**
		 * (Read only) Used by the BatchUploader to map a field in an upload file to this 
		 * dataSourceField. This is only necessary if the dataSourceField's name and title differ 
		 * from the name of the field in the upload file (SmartClient will automatically map upload 
		 * fields using the dataSourceField's title, if possible, if it does not get a direct match 
		 * on field name).
		 * Flags: IR
		 */
		 uploadFieldName?: String;
		 // ref="attr:DataSourceField.useLocalDisplayFieldValue"
		/**
		 * (Read only) If this field has a specified DataSourceField.displayField, this attribute
		 * allows you to explicitly tell editor components to pick up the display-field value
		 * from the record currently being edited, rather than fetching against a
		 * specified FormItem.optionDataSource.
		 * 
		 * See FormItem.useLocalDisplayFieldValue for more detail.
		 * 
		 * Note that for the common pattern described DataSourceField.includeFrom','here of
		 * having an editable foreignKey field with a static display value (derived from a displayField
		 * with 'includeFrom' set), the framework will automatically default this property to true
		 * if not explicitly specified in the dataSource configuration file.
		 * Flags: IR
		 */
		 useLocalDisplayFieldValue?: boolean | null /* Boolean */;
		 // ref="attr:DataSourceField.validators"
		/**
		 * (Read only) Validators to be applied to this field.
		 * 
		 * Validators are applied whenever there is an attempt to save changes to a field.
		 * 
		 * For the available set of built-in validators, and how to define a custom validator, see the
		 * Validator class.
		 * Flags: IR, Group: dataType
		 */
		 validators?: Array<Validator> /* Array of Validator */;
		 // ref="attr:DataSourceField.validOperators"
		/**
		 * (Read only) List of operators valid on this field. 
		 * 
		 * If not specified, all operators that are valid for the field type are allowed.
		 * Flags: IR, Group: advancedFilter
		 */
		 validOperators?: Array<OperatorId> /* Array of OperatorId */;
		 // ref="attr:DataSourceField.valueMap"
		/**
		 * (Read only) A ValueMap is a set of legal values for a field.
		 * 
		 * The valueMap can be specified as either an Array of legal values, or as an
		 * Object where each property maps a stored value to a user-displayable value.
		 * 
		 * To enforce that a field should be constrained to only the values in the valueMap, either
		 * declare DataSourceField.type','field.type as "enum", or use a
		 * ValidatorType of "isOneOf" with explicitly listed values. Otherwise,
		 * although a normal SelectItem control will only allow values from the valueMap to be
		 * entered, other controls such as a ComboBoxItem','ComboBox will allow other values 
		 * to be entered.
		 * 
		 * In XML, a valueMap that specifies only a list of legal values is specified as follows:
		 * 
		 * &lt;valueMap&gt;
		 * &lt;value&gt;Pens &amp; Pencils&lt;/value&gt;
		 * &lt;value&gt;Stationery&lt;/value&gt;
		 * &lt;value&gt;Computer Products&lt;/value&gt;
		 * &lt;value&gt;Furniture&lt;/value&gt;
		 * &lt;value&gt;Misc&lt;/value&gt;
		 * &lt;/valueMap&gt;
		 * 
		 * A ValueMap that specifies stored values mapped to user-visible values is specified as
		 * follows:
		 * 
		 * &lt;valueMap&gt;
		 * &lt;value ID="1"&gt;Pens &amp; Pencils&lt;/value&gt;
		 * &lt;value ID="2"&gt;Stationery&lt;/value&gt;
		 * &lt;value ID="3"&gt;Computer Products&lt;/value&gt;
		 * &lt;value ID="4"&gt;Furniture&lt;/value&gt;
		 * &lt;value ID="5"&gt;Misc&lt;/value&gt;
		 * &lt;/valueMap&gt;
		 * 
		 * Flags: IR, Group: dataType
		 */
		 valueMap?: ValueMap;
		 // ref="attr:DataSourceField.valueMapEnum"
		/**
		 * (Read only) Fully qualified Java className of an Enum that should be used to derive this field's
		 * ValueMap.
		 * 
		 * This has the same behavior of auto-deriving a valueMap from a Java Enum as
		 * DataSource.autoDeriveSchema except it applies only to one field.
		 * 
		 * If you enable autoDeriveSchema there is no need to set
		 * valueMapEnum for Enum fields unless you want to actually override the
		 * behavior to use a different Enum for the field (eg, a superclass Enum that is more
		 * restrictive).
		 * Flags: IR
		 */
		 valueMapEnum?: String;
		 // ref="attr:DataSourceField.valueWriteXPath"
		/**
		 * (Read only) Alternative XPath expression used to set the field's value.
		 * 
		 * If is not set, then DataSourceField.valueXPath','dataSourceField.valueXPath is
		 * used, see its description for details.
		 * Flags: IR, Group: clientDataIntegration
		 */
		 valueWriteXPath?: XPathExpression;
		 // ref="attr:DataSourceField.valueXPath"
		/**
		 * (Read only) XPath expression used to retrieve the field's value.
		 * 
		 * This XPath expression will be evaluated in the scope of the record objects selected by 
		 * the DataSource.recordXPath. For XML data 
		 * (DataSource.dataFormat','dataFormat:"xml") this means a call to
		 * XMLTools.selectString passing the selected XML element. For JSON data
		 * (DataSource.dataFormat','dataFormat:"json"), this means a call to 
		 * XMLTools.selectObjects passing the selected JSON object.
		 * 
		 * In the absence of a valueXPath, for JSON data the value for the field will
		 * be the value of the same-named property in the record object selected by
		 * DataSource.recordXPath','recordXPath. 
		 * 
		 * For XML data, the value will be the attribute or subelement named after the field name.
		 * For example, for a field "author" on a record element &lt;book&gt;, the following structures
		 * require no valueXPath:
		 * 
		 * &lt;book author="Mark Jones"/&gt;
		 * 
		 * &lt;book&gt;
		 * &lt;author&gt;Mark Jones&lt;/author&gt;
		 * &lt;/book&gt;
		 * 
		 * 
		 * If valueXPath is not required for your field because of the default handling
		 * described above, don't specify it, as it's slightly slower.
		 * 
		 * To learn about XPath, try the following search:
		 * <a href="http://www.google.com/search?q=xpath+tutorial" target="_blank"
		 * >http://www.google.com/search?q=xpath+tutorial</a>
		 * 
		 * Using valueXPath with the SmartClient server
		 * 
		 * If you're using the SmartClient server to return data via the DSResponse object (or
		 * indirectly doing so using DataSource DMI), the valueXPath you specify on the DataSource
		 * fields will be applied to the data you return via the 
		 * <a href='http://commons.apache.org/jxpath/' target='_blank'>JXPath</a> library.
		 * 
		 * If you are returning Java Beans as your DSResponse data, normally each dataSource field
		 * receives the value of the same-named Java Bean property, that is, a field "zipCode" is
		 * populated by looking for "getZipCode()" on the objects passed as DSResponse data. You can
		 * use valueXPath to retrieve properties from subobjects, so long as a chain of
		 * getter methods exists that corresponds to the valueXPath. For example, a valueXPath of
		 * "address/zipCode" expects to call "getAddress()" on the bean(s) passed to
		 * DSResponse.setData(), followed by "getZipCode()" on whatever object "getAddress()" returns.
		 * 
		 * When you are saving data, the inbound DSRequest values, available as a Java Map, will use 
		 * just dataSource field names as Map keys, not the valueXPath used to derive them. However,
		 * to achieve bidirectional valueXPath binding, you can use the server-side method
		 * dataSource.setProperties() to use the valueXPath when setting properties on your server
		 * object model. When applied as a setter, an XPath like "address/zipCode" attempts
		 * "getAddress()" followed by "setZipCode()" on the returned object. JXPath also has some
		 * ability to auto-create intervening objects if they are missing, such as auto-creating an
		 * "address" subobject when applying "address/zipCode" as a valueXPath.
		 * 
		 * See the
		 * <a href='http://jakarta.apache.org/commons/jxpath/' target='_blank'>JXPath</a> library documentation for
		 * complete details, including other types of server object models supported, such as
		 * server-side XML.
		 * Flags: IR, Group: clientDataIntegration
		 */
		 valueXPath?: XPathExpression;
		 // ref="attr:DataSourceField.viewRequires"
		/**
		 * (Read only) Indicates that the specified VelocityExpression must evaluate to true if
		 * values for the field are to be fetched. If the specified expression does not evaluate
		 * to true, the field will be dropped as described for 
		 * DataSourceField.viewRequiresAuthentication','viewRequiresAuthentication.
		 * 
		 * In addition to the normal context variables available to Velocity expressions in SmartClient,
		 * expressions you write for field-level requires clauses - viewRequires, 
		 * DataSourceField.editRequires','editRequires, DataSourceField.initRequires','initRequires and 
		 * DataSourceField.updateRequires','updateRequires - can reference two additional variables: 
		 * $fieldName and $dsName. These are the names of the dataSource and 
		 * field currently undergoing requires checks. They are helpful because they allow
		 * you to write a generic checker function that can be used to handle requires
		 * checks for multiple fields and dataSources.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 viewRequires?: VelocityExpression;
		 // ref="attr:DataSourceField.viewRequiresAuthentication"
		/**
		 * (Read only) Whether a user must be authenticated in order to fetch this field. If this property is 
		 * set and the user is not authenticated, SmartClient Server will not return values for this
		 * field to the client.
		 * 
		 * The way this behavior works is to remove the field from the expressed or implied list of
		 * fields to return. A list of fields can be expressed using OperationBinding.outputs
		 * or DSRequest.outputs; in the absence of those, the entire set of fields defined in 
		 * the DataSource is implied. You can override this behavior on a per-request basis by 
		 * providing a DMI that just re-adds the names of the fields you want for that particular 
		 * request to the "consolidated outputs". See the server-side Javadoc for 
		 * DSRequest.getConsolidatedOutputs().
		 * 
		 * In addition to this behavior of trimming off values in fetched records, a field that fails
		 * a field-level security check (either this one or one of the two more specific checks, 
		 * DataSourceField.viewRequiresRole','viewRequiresRole and DataSourceField.viewRequires','viewRequires) will be 
		 * altered in the version of the dataSource returned to the client by the 
		 * loadDSTag','&lt;loadDS&gt; JSP tag or 
		 * dataSourceDeclaration','DataSourceLoader servlet.
		 * 
		 * If the field is also not editable (see the discussion of this below), it will be marked 
		 * DataSourceField.canView','canView:false, and thus effectively be inert and unusable on the client
		 * If the field is editable, it will be marked DataSourceField.hidden','hidden. By default, this means
		 * that DataBoundComponents will not show the field, though this can be overridden for 
		 * individual components. If you do choose to unhide the field, bear in mind that it will 
		 * never actually show any data, because the underlying security test has still failed
		 * 
		 * By default, view constraints automatically imply edit constraints - almost all of the time,
		 * if a user is not allowed to view a field, he should not be allowed to update it either. If
		 * you specify a view constraint, the system behaves as if you had also specified the 
		 * corresponding edit constraint - so viewRequiresAuthentication on a field 
		 * implies DataSourceField.editRequiresAuthentication','editRequiresAuthentication.
		 * You override this behavior simply by specifying some kind of edit constraint for the field,
		 * either a different one (eg, "users" can view a field, but only "managers" can update it) or 
		 * a blank one (if you have some unusual requirement whereby users are not allowed to view a 
		 * field, but they can update it).
		 * boolean - Null not allowed
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 viewRequiresAuthentication?: boolean;
		 // ref="attr:DataSourceField.viewRequiresRole"
		/**
		 * (Read only) Comma-separated list of user roles that are allowed to fetch this field. If the current user
		 * has any of the roles listed, values for the field will be fetched. Please see 
		 * OperationBinding.requiresRole for further details of SmartClient's declarative 
		 * role-based security. Please also see 
		 * DataSourceField.viewRequiresAuthentication','viewRequiresAuthentication for details
		 * of how declarative field-level security settings can be overridden per-request.
		 * Flags: IR, Group: fieldLevelAuth
		 */
		 viewRequiresRole?: String;
		 // ref="attr:DataSourceField.xmlAttribute"
		/**
		 * (Read only) Indicates that DataSource.xmlSerialize should serialize this value as an XML
		 * attribute.
		 * 
		 * Note this does not need to be declared in order for DataSource records to be derived from
		 * XML data: a field will be populated with either an attribute or subelement with matching
		 * name.
		 * boolean - Null not allowed
		 * Flags: IR, Group: xmlSerialize
		 */
		 xmlAttribute?: boolean;
	} // DataSourceField

	export interface DataSourceFieldStatic {
	} // DataSourceFieldStatic


	/**
	 * An object containing details for mouse events occurring over a FormItem. 
	 */
	export interface FormItemEventInfo {
		 // ref="attr:FormItemEventInfo.icon"
		/**
		 * (Read only) If this event occurred over a formItemIcon this attribute contains the 
		 * FormItemIcon.name for the icon.
		 * Flags: IR
		 */
		 icon?: String;
		 // ref="attr:FormItemEventInfo.item"
		/**
		 * (Read only) Item over which the event occurred.
		 * Flags: R
		 */
		 item?: FormItem;
		 // ref="attr:FormItemEventInfo.overElement"
		/**
		 * (Read only) True if the event occurred over the item's data or input element. Note that it can be bad 
		 * practice to implement custom context menus when overElement is true, since this will
		 * replace browser-default menus that users might expect.
		 * Flags: R
		 */
		 overElement?: boolean | null /* Boolean */;
		 // ref="attr:FormItemEventInfo.overInlineError"
		/**
		 * (Read only) True if the event occurred over the form's 
		 * DynamicForm.errorItemProperties','single error item.
		 * Flags: R
		 */
		 overInlineError?: boolean | null /* Boolean */;
		 // ref="attr:FormItemEventInfo.overItem"
		/**
		 * (Read only) True if the event occurred over the main body of the item (for example the text-box), rather
		 * than over the title or within the form item's cell in the DynamicForm but outside the
		 * text box area.
		 * Flags: R
		 */
		 overItem?: boolean | null /* Boolean */;
		 // ref="attr:FormItemEventInfo.overTextBox"
		/**
		 * (Read only) True if the event occurred within the item's FormItem.textBoxStyle','textBox.
		 * Flags: R
		 */
		 overTextBox?: boolean | null /* Boolean */;
		 // ref="attr:FormItemEventInfo.overTitle"
		/**
		 * (Read only) True if the event occurred over the item's title.
		 * Flags: R
		 */
		 overTitle?: boolean | null /* Boolean */;
	} // FormItemEventInfo

	export interface FormItemEventInfoStatic {
	} // FormItemEventInfoStatic


	/**
	 * Definition of a radial gradient. 
	 */
	export interface RadialGradient extends Gradient {
		 // ref="attr:RadialGradient.cx"
		/**
		 * (Read only) x coordinate of outer radial
		 * Flags: IR
		 */
		 cx?: String;
		 // ref="attr:RadialGradient.cy"
		/**
		 * (Read only) y coordinate of outer radial
		 * Flags: IR
		 */
		 cy?: String;
		 // ref="attr:RadialGradient.fx"
		/**
		 * (Read only) x coordinate of inner radial
		 * Flags: IR
		 */
		 fx?: String;
		 // ref="attr:RadialGradient.fy"
		/**
		 * (Read only) y coordinate of inner radial
		 * Flags: IR
		 */
		 fy?: String;
		 // ref="attr:RadialGradient.r"
		/**
		 * (Read only) radius
		 * Flags: IR
		 */
		 r?: String;
	} // RadialGradient

	export interface RadialGradientStatic extends GradientStatic {
	} // RadialGradientStatic


	/**
	 * Identifier for a key pressed by the user, optionally specifying whether the Shift, Control,
	 * and/or Alt keys should be held or not held when the key is pressed, used by various methods. 
	 */
	export interface KeyIdentifier {
		 // ref="attr:KeyIdentifier.altKey"
		/**
		 * (Read only) If set, whether the Alt key must be held down.
		 * Flags: IR
		 */
		 altKey?: boolean | null /* Boolean */;
		 // ref="attr:KeyIdentifier.ctrlKey"
		/**
		 * (Read only) If set, whether the Control key must be held down.
		 * Flags: IR
		 */
		 ctrlKey?: boolean | null /* Boolean */;
		 // ref="attr:KeyIdentifier.keyName"
		/**
		 * (Read only) Name of the key.
		 * Flags: IR
		 */
		 keyName?: KeyName;
		 // ref="attr:KeyIdentifier.shiftKey"
		/**
		 * (Read only) If set, whether the Shift key must be held down.
		 * Flags: IR
		 */
		 shiftKey?: boolean | null /* Boolean */;
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
		 // ref="attr:MenuItem.autoDismiss"
		/**
		 * (Read only) Whether a click on this specific menuItem automatically dismisses the menu. See
		 * Menu.autoDismiss.
		 * Flags: IR, Group: menuBasic
		 */
		 autoDismiss?: boolean | null /* Boolean */;
		 // ref="attr:MenuItem.canSelectParent"
		/**
		 * (Read only) A MenuItem that has a submenu normally cannot be selected, instead clicking or hitting Enter
		 * while keyboard focus is on the item shows the submenu. Setting canSelectParent:true allows
		 * a menu item with a submenu to be selected directly.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canSelectParent?: boolean;
		 // ref="attr:MenuItem.checked"
		/**
		 * (Read only) If true, this item displays a standard checkmark image to the left of its title. You
		 * can set the checkmark image URL by setting Menu.checkmarkImage.
		 * 
		 * If you need to set this state dynamically, use MenuItem.checkIf instead.
		 * boolean - Null not allowed
		 * Flags: IR, Group: menuIcons
		 */
		 checked?: boolean;
		 // ref="attr:MenuItem.disabledIcon"
		/**
		 * (Read only) The filename for this item's custom icon when the item is disabled. If both this property
		 * and MenuItem.checked are both specified, only the icon specified by this property
		 * will be displayed. The path to the loaded skin directory and the skinImgDir are prepended
		 * to this filename to form the full URL.
		 * 
		 * If you need to set this state dynamically, use MenuItem.dynamicIcon instead.
		 * Flags: IR, Group: menuIcons
		 */
		 disabledIcon?: String;
		 // ref="attr:MenuItem.embeddedComponent"
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
		 embeddedComponent?: Canvas;
		 // ref="attr:MenuItem.embeddedComponentFields"
		/**
		 * (Read only) See ListGridRecord.embeddedComponentFields. Default for a MenuItem is to cover the
		 * title and key fields, leaving the icon and submenu fields visible.
		 * Flags: IR, Group: menuBasic
		 */
		 embeddedComponentFields?: Array<String> /* Array of String */;
		 // ref="attr:MenuItem.embeddedComponentPosition"
		/**
		 * (Read only) See ListGridRecord.embeddedComponentPosition, except that when used in a
		 * menuItem, default behavior is EmbeddedPosition "expand".
		 * Flags: IR, Group: menuBasic
		 */
		 embeddedComponentPosition?: EmbeddedPosition;
		 // ref="attr:MenuItem.enabled"
		/**
		 * (Read only) Affects the visual style and interactivity of the menu item. If set to
		 * false, the menu item will not respond to mouse rollovers or clicks.
		 * 
		 * If you need to set this state dynamically, use MenuItem.enableIf instead.
		 * Flags: IR, Group: menuBasic
		 */
		//  enabled?: boolean | null /* Boolean */;   Skipped because the property override a property in the base class with a different type
		 // ref="attr:MenuItem.enableWhen"
		/**
		 * (Read only) Criteria to be evaluated to determine whether this MenuItem should be disabled. Re-evaluated
		 * each time the menu is shown.
		 * 
		 * A basic criteria uses textMatchStyle:"exact". When specified in
		 * componentXML','Component XML this property allows
		 * xmlCriteriaShorthand','shorthand formats for defining criteria.
		 * Flags: IR, Group: ruleCriteria
		 */
		 enableWhen?: AdvancedCriteria;
		 // ref="attr:MenuItem.fetchSubmenus"
		/**
		 * (Read only) If false, no submenus will be fetched for this MenuItem. This can be set globally via
		 * Menu.fetchSubmenus.
		 * Flags: IR
		 */
		 fetchSubmenus?: boolean | null /* Boolean */;
		 // ref="attr:MenuItem.icon"
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
		 icon?: String;
		 // ref="attr:MenuItem.iconHeight"
		/**
		 * (Read only) The height applied to this item's icon. The default of 16 can be changed
		 * for all MenuItems by overriding Menu.iconHeight.
		 * Flags: IR, Group: menuIcons
		 */
		 iconHeight?: number;
		 // ref="attr:MenuItem.iconWidth"
		/**
		 * (Read only) The width applied to this item's icon. The default of 16 can be changed
		 * for all MenuItems by overriding Menu.iconWidth.
		 * Flags: IR, Group: menuIcons
		 */
		 iconWidth?: number;
		 // ref="attr:MenuItem.isSeparator"
		/**
		 * (Read only) When set to true, this menu item shows a horizontal separator instead of
		 * the MenuItem.title text. Typically specified as the only property of a menu item,
		 * since the separator will not respond to mouse events.
		 * Flags: IR, Group: menuBasic
		 */
		//  isSeparator?: boolean | null /* Boolean */;   Skipped because the property override a property in the base class with a different type
		 // ref="attr:MenuItem.keys"
		/**
		 * (Read only) Shortcut key(s) to fire the menu item action. Each key can be defined as a KeyIdentifier.
		 * To apply multiple shortcut keys to this item, set this property to an array of such key
		 * identifiers.
		 * Flags: IR, Group: menuKeys
		 */
		 keys?: KeyIdentifier | Array<KeyIdentifier> /* KeyIdentifier | Array of KeyIdentifier */;
		 // ref="attr:MenuItem.keyTitle"
		/**
		 * (Read only) A string to display in the shortcut-key column for this item. If not
		 * specified, the first KeyName value in MenuItem.keys will be used by default.
		 * Flags: IR, Group: menuKeys
		 */
		 keyTitle?: String;
		 // ref="attr:MenuItem.showIconOnlyInline"
		/**
		 * (Read only) When used in an AdaptiveMenu, should this MenuItem show only it's
		 * MenuItem.icon','icon when displayed inline?
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showIconOnlyInline?: boolean;
		 // ref="attr:MenuItem.submenu"
		/**
		 * (Read only) A reference to another menu, to display as a submenu when the mouse cursor hovers over
		 * this menu item.
		 * Flags: IR, Group: menuBasic
		 */
		 submenu?: Menu;
		 // ref="attr:MenuItem.title"
		/**
		 * (Read only) The text displayed for the menu item
		 * Flags: IR, Group: menuBasic
		 */
		 title?: HTMLString;

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
		 * @return {SCImgURL} the url of this menuItems icon
		 */
		dynamicIcon?(target:Canvas, menu:Menu, item:MenuItem): SCImgURL; 

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
		 * @return {String} the title of this menuItem
		 */
		dynamicTitle?(target:Canvas, menu:Menu, item:MenuItem): String; 

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
		 // ref="attr:PrintProperties.includeControls"
		/**
		 * (Read only) An array of Strings indicating the classNames of controls that should be specifically
		 * included when printing, even if a superclass is listed in PrintProperties.omitControls.
		 * Flags: IR, Group: printing
		 */
		 includeControls?: Array<String> /* Array of String */;
		 // ref="attr:PrintProperties.omitControls"
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
		 omitControls?: Array<String> /* Array of String */;
		 // ref="attr:PrintProperties.printForExport"
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
		 printForExport?: boolean | null /* Boolean */;
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
		 // ref="attr:Lane.eventStyleName"
		/**
		 * The base name for the CSS class applied to Calendar.eventCanvas','events when they're
		 * rendered in this lane. See Calendar.eventStyleName.
		 * 
		 * If set directly on a Lane.sublanes','sublane, overrides the corresponding value on
		 * the parent Calendar.lanes','lane. See 
		 * Calendar.getEventCanvasStyle','getEventCanvasStyle() for more information.
		 * Flags: IRW, Group: appearance
		 */
		 eventStyleName?: CSSStyleName;
		 // ref="attr:Lane.height"
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
		 height?: Number;
		 // ref="attr:Lane.name"
		/**
		 * (Read only) To determine whether a CalendarEvent should be placed in this lane, the value of this 
		 * attribute is compared with the Calendar.laneNameField property on the CalendarEvent.
		 * Flags: IR
		 */
		 name?: String;
		 // ref="attr:Lane.sublanes"
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
		 sublanes?: Array<Lane> /* Array of Lane */;
		 // ref="attr:Lane.title"
		/**
		 * (Read only) Title to show for this lane. Has no effect if set directly on Lane.sublanes','sublanes.
		 * Flags: IR
		 */
		 title?: HTMLString;
		 // ref="attr:Lane.width"
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
		 width?: Number;
	} // Lane

	export interface LaneStatic {
	} // LaneStatic


	/**
	 * A WSRequest (or "web service request") is an extended RPCRequest with additional properties
	 * applicable to WSDL/SOAP web services.
	 * 
	 * All properties which are legal on RPCRequest are legal on a WSRequest, in
	 * addition to the properties listed here. 
	 */
	export interface WSRequest {
		 // ref="attr:WSRequest.data"
		/**
		 * (Read only) Data to be serialized to XML to form the SOAP body.
		 * Flags: IR
		 */
		 data?: any /* Any */;
		 // ref="attr:WSRequest.headerData"
		/**
		 * (Read only) Data to be serialized to form the SOAP headers, as a map from the header part name to the
		 * data. For example, given WSDL like this:
		 * 
		 * &lt;soap:header part="SessionHeader" message="tns:HeaderMessage"/&gt;
		 * &lt;soap:header part="CallOptions" message="tns:HeaderMessage/&gt;
		 * 
		 * headerData like this might be provided:
		 * 
		 * dsRequest.headerData = 
		 * { SessionHeader : data
		 * CallOptions : data };
		 * 
		 * The provided data will be serialized to XML by the
		 * WebService.getInputHeaderSchema','SOAP header schema via
		 * DataSource.xmlSerialize
		 * Flags: IR
		 */
		 headerData?: any /* Any */;
		 // ref="attr:WSRequest.useFlatFields"
		/**
		 * (Read only) When useFlatFields is set for a request to be sent to a WSDL web service, when
		 * creating the input XML message to send to the web service, properties in
		 * WSRequest.data','request.data will be used as the values for XML elements of the same name, at
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
		 * boolean - Null not allowed
		 * Flags: IR, Group: flatFields
		 */
		 useFlatFields?: boolean;
		 // ref="attr:WSRequest.wsOperation"
		/**
		 * (Read only) Name of the web service operation to invoke.
		 * Flags: IR
		 */
		 wsOperation?: String;
		 // ref="attr:WSRequest.xmlNamespaces"
		/**
		 * (Read only) Optional object declaring namespace prefixes for use in evaluating the
		 * resultType parameter of WebService.callOperation, if resultType is an
		 * XPath.
		 * 
		 * Format is identical to OperationBinding.xmlNamespaces, and default namespaces
		 * bindings are also identical.
		 * Flags: IR
		 */
		 xmlNamespaces?: Object;
		 // ref="attr:WSRequest.xmlResult"
		/**
		 * (Read only) Valid only with WebService.callOperation. If set, do not transform XML results to
		 * JavaScript. Instead just return the XML nodes selected by the passed XPath or recordName,
		 * or all nodes within the SOAP body if no XPath was passed.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 xmlResult?: boolean;
	} // WSRequest

	export interface WSRequestStatic {
	} // WSRequestStatic


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
		 // ref="attr:HeaderSpan.align"
		/**
		 * (Read only) Horizontal alignment of the title of this headerSpan.
		 * Flags: IR, Group: headerSpan
		 */
		 align?: Alignment;
		 // ref="attr:HeaderSpan.fields"
		/**
		 * (Read only) List of fields that this header spans. Fields should be identified by their value for
		 * ListGridField.name.
		 * 
		 * Developers may define multiple levels of header-spans by specifying HeaderSpan.spans
		 * however a span cannot be specified with both fields and spans.
		 * Flags: IR, Group: headerSpan
		 */
		 fields?: Array<String> /* Array of String */;
		 // ref="attr:HeaderSpan.headerBaseStyle"
		/**
		 * Custom base style to apply to the header button created for this span instead
		 * of ListGrid.headerBaseStyle.
		 * 
		 * Note that depending on the header button constructor, you may have to specify
		 * HeaderSpan.headerTitleStyle as well.
		 * Flags: IRW, Group: appearance
		 */
		 headerBaseStyle?: CSSStyleName;
		 // ref="attr:HeaderSpan.headerTitle"
		/**
		 * (Read only) Optional title for the headerSpan button for this headerSpan. If specified this will be
		 * displayed in the headerSpan button instead of HeaderSpan.title. Set to an empty
		 * string to suppress the title in the header button entirely.
		 * Flags: IR, Group: headerSpan
		 */
		 headerTitle?: String;
		 // ref="attr:HeaderSpan.headerTitleStyle"
		/**
		 * Custom titleStyle to apply to the header button created for this span instead of
		 * ListGrid.headerTitleStyle.
		 * 
		 * Note that this will typically only have an effect if
		 * ListGrid.headerButtonConstructor is set to StretchImgButton or a subclass
		 * thereof.
		 * Flags: IRW, Group: appearance
		 */
		 headerTitleStyle?: CSSStyleName;
		 // ref="attr:HeaderSpan.height"
		/**
		 * (Read only) Height of this headerSpan. Defaults to ListGrid.headerSpanHeight.
		 * Flags: IR, Group: headerSpan
		 */
		 height?: Integer;
		 // ref="attr:HeaderSpan.name"
		/**
		 * (Read only) Name for this headerSpan, for use in APIs like ListGrid.setHeaderSpanTitle.
		 * 
		 * Name is optional, but if specified, must be unique for this ListGrid (but not globally
		 * unique) as well as a valid JavaScript identifier, as specified by ECMA-262 Section 7.6
		 * (the String.isValidID function can be used to test whether a name is a valid JavaScript
		 * identifier).
		 * Flags: IR, Group: headerSpan
		 */
		 name?: Identifier;
		 // ref="attr:HeaderSpan.spans"
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
		 spans?: Array<HeaderSpan> /* Array of HeaderSpan */;
		 // ref="attr:HeaderSpan.title"
		/**
		 * (Read only) A title for this headerSpan, to display in the headerSpan button for this headerSpan
		 * and in other contexts such as the ListGrid.canPickFields','menu for picking visible fields.
		 * 
		 * Note: if you want to use HTML tags to affect the display of the header, you should do so
		 * via HeaderSpan.headerTitle instead so that other places where the title
		 * appears in the UI are not affected. Refer to discussion at ListGridField.title.
		 * Flags: IR, Group: headerSpan
		 */
		 title?: String;
		 // ref="attr:HeaderSpan.valign"
		/**
		 * (Read only) Vertical alignment of the title of this headerSpan.
		 * 
		 * Defaults to listGrid.headerSpanVAlign if unset.
		 * Flags: IR, Group: headerSpan
		 */
		 valign?: VerticalAlignment;
		 // ref="attr:HeaderSpan.wrap"
		/**
		 * (Read only) Should the span title wrap if there is not enough space horizontally to accommodate it.
		 * If unset, default behavior is derived from ListGrid.wrapHeaderSpanTitles. (This
		 * is a soft-wrap - if set the title will wrap at word boundaries.)
		 * Flags: IR
		 */
		 wrap?: boolean | null /* Boolean */;
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
		 // ref="attr:UserFormula.formulaVars"
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
		 formulaVars?: Map<any, any> /* Map */;
		 // ref="attr:UserFormula.text"
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
		 text?: String;
	} // UserFormula

	export interface UserFormulaStatic {
	} // UserFormulaStatic


	/**
	 * Encapsulates state of a NavigationBar's view. A NavigationBarViewState
	 * object is created to pass to NavigationBar.setViewState so that multiple properties
	 * of the NavigationBar can be changed at once. 
	 */
	export interface NavigationBarViewState {
		 // ref="attr:NavigationBarViewState.alwaysShowLeftButtonTitle"
		/**
		 * The new NavigationBar.alwaysShowLeftButtonTitle setting. If unset, the
		 * alwaysShowLeftButtonTitle setting is not changed.
		 * Flags: IRW
		 */
		 alwaysShowLeftButtonTitle?: boolean | null /* Boolean */;
		 // ref="attr:NavigationBarViewState.controls"
		/**
		 * The new NavigationBar.controls setting. If unset, the controls array
		 * is not changed.
		 * Flags: IRW
		 */
		 controls?: Array<String> | Array<Canvas> /* Array of String | Array of Canvas */;
		 // ref="attr:NavigationBarViewState.leftButtonTitle"
		/**
		 * The new NavigationBar.leftButtonTitle setting. If unset, the
		 * leftButtonTitle is not changed.
		 * Flags: IRW
		 */
		 leftButtonTitle?: HTMLString;
		 // ref="attr:NavigationBarViewState.shortLeftButtonTitle"
		/**
		 * The new NavigationBar.shortLeftButtonTitle setting. If unset, the
		 * shortLeftButtonTitle is not changed.
		 * Flags: IRW
		 */
		 shortLeftButtonTitle?: HTMLString;
		 // ref="attr:NavigationBarViewState.showLeftButton"
		/**
		 * The new NavigationBar.showLeftButton setting. If unset, the
		 * showLeftButton setting is not changed.
		 * Flags: IRW
		 */
		 showLeftButton?: boolean | null /* Boolean */;
		 // ref="attr:NavigationBarViewState.title"
		/**
		 * The new NavigationBar.title setting. If unset, the title is not changed.
		 * Flags: IRW
		 */
		 title?: HTMLString;
	} // NavigationBarViewState

	export interface NavigationBarViewStateStatic {
	} // NavigationBarViewStateStatic


	/**
	 * A set of properties that can be used to create an image. 
	 */
	export interface ImgProperties {
		 // ref="attr:ImgProperties.extraStuff"
		/**
		 * Specifies the additional attributes to write in the tag.
		 * Flags: IRW
		 */
		 extraStuff?: String;
		 // ref="attr:ImgProperties.height"
		/**
		 * Specifies the height of the image.
		 * Flags: IRW
		 */
		 height?: number;
		 // ref="attr:ImgProperties.imgDir"
		/**
		 * Specifies the image-specific image directory to override the default.
		 * Flags: IRW
		 */
		 imgDir?: URL;
		 // ref="attr:ImgProperties.name"
		/**
		 * Specifies the name of the image. This is an identifier unique to the canvas, and subsequent
		 * calls to Canvas.getImage and
		 * Canvas.setImage
		 * with this name will act on the image object created using this ImgProperties object.
		 * Flags: IRW
		 */
		 name?: String;
		 // ref="attr:ImgProperties.src"
		/**
		 * Specifies the URL of the image local to the skin or application directory.
		 * Flags: IRW
		 */
		 src?: URL;
		 // ref="attr:ImgProperties.width"
		/**
		 * Specifies the width of the image.
		 * Flags: IRW
		 */
		 width?: number;
	} // ImgProperties

	export interface ImgPropertiesStatic {
	} // ImgPropertiesStatic


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
	export interface History {
	} // History

	export interface HistoryStatic {

	/* Methods */
		/**  
		 * 
		 * Call this method to add a synthetic history entry. The new history entry is added in the
		 * history stack after the currently visible page - in exactly the same way as the browser
		 * would treat a new page transition at this point. In other words, if the user has navigated
		 * ten pages using, say, a mixture of synthetic and real history entries, then presses back
		 * five times and then triggers a call to this method, the history entry will be created at the
		 * 6th position in the history stack and any history entries forward of that will be discarded.
		 * 
		 * NOTE: Browsers including Chrome and Firefox require a delay, even a minimal 1 millisecond
		 * timeout, between additions to the browser's history stack or else only the last addition
		 * will have an effect. The History module does not allow two different (by id) history entries
		 * to be added in the same thread of execution. To check whether another history entry can be
		 * added by the current thread, call History.readyForAnotherHistoryEntry.
		 * 
		 * This method must be called with an id. This id can be any string - it will be URL-encoded
		 * and added to the current page URL as an anchor (e.g. #foo). This URL change allows the user
		 * to bookmark this particular application state. When the user next navigates to this history
		 * entry, the id you supplied here will be passed back to the callback you supplied via
		 * History.registerCallback.
		 * 
		 * You may also optionally supply some arbitrary data to associate with this history entry.
		 * If you do this, the data you passed in will be passed back to you as part of the callback
		 * you specified via History.registerCallback. This data object can be anything you
		 * want, but there are some caveats:
		 * 
		 * The data parameter is currently supported by all SmartClient-supported browsers except
		 * Safari
		 * As long as the user has not navigated away from the top-level page (i.e. the user is
		 * navigating within synthetic history entries only), whatever data you pass in will be handed
		 * back to you.
		 * When the user navigates away from the current page, SmartClient will attempt to
		 * serialize the data into a string so that when/if the user comes back to this history entry,
		 * it can be deserialized and passed back to your logic. To take advantage of this, you need
		 * to make sure that your data is serializeable. As long as your data is a native datatype
		 * (String, Number, Boolean) or a collection of such datatypes (collections meaning object
		 * literals and arrays), then it will serialize correctly. Things like pointers to the
		 * document object and functions cannot be serialized.
		 * In order for the serialization to occur on a page transition, you must have the
		 * SmartClient Core module loaded on the page at the time of the transition. If it's not
		 * available, the data will be lost, but you will still get a callback with the id you specify
		 * if the user navigates back to this history entry later.
		 * The data associated with this history entry will persist as long as at least one
		 * instance of the browser remains open on the user's machine. Once the user closes all
		 * browser instances, the data will be lost. 
		 * Also, the user can trigger a history callback at any time by navigating to a bookmarked
		 * history entry that may have been created in a past session, such that no data is associated
		 * with that id in the current session. How you choose to handle that situation is up to you.
		 * 
		 * 
		 * You're always guaranteed to receive the id you associate with a history entry in the
		 * callback that you specify, but the data you associated may or may not be available, so be
		 * careful about how you use it. Note that by passing the requiresData parameter
		 * to History.registerCallback you can suppress the callback from firing unless the stored
		 * data object is actually available.
		 * 
		 * 
		 * @param {String} id - The id you want to associate with this history entry. This value will appear as an anchor reference at the end of the URL string. For example, if you pass in
		 * "foo" as the id, the URL will then have a #foo tacked on the end of it. This id will be
		 * passed back to the callback you specified in History.registerCallback when the user
		 * navigates to this history entry in the future.
		 * @param {String} title - The title to show in the history drop-down for this history entry. If not specified, the id is used, unless you've set an explicit history title via
		 * History.setHistoryTitle. Note: this currently works in IE only. You may pass a
		 * title in any other browser, but it will not change what's displayed in the history
		 * drop-down.
		 * @param {any} data - Arbitrary data to associate with this history entry. When the user next navigates to this history entry, this data will be provided as an argument to your callback
		 * function. Note that the SmartClient Core module is also required to be loaded on the page
		 * for this particular feature to work.
		 */
		addHistoryEntry(id:String, title?:String, data?:any /* Any */): void; 

		/**  
		 * 
		 * Returns the current history id as reflected by the current URL.
		 * 
		 * 
		 * @return {String} The current history id as reflected by the current URL.
		 */
		getCurrentHistoryId(): String; 

		/**  
		 * 
		 * Returns the data associated with the specified history id.
		 * 
		 * 
		 * @param {String} id - The id for which to fetch history data.
		 * @return {any} The data associated with the specified history id.
		 */
		getHistoryData(id:String): any /* Any */; 

		/**  
		 * 
		 * Can another history entry be added to the browser's history stack in the current thread?
		 * 
		 * Browsers including Chrome and Firefox require a delay, even a minimal 1 millisecond
		 * timeout, between additions to the browser's history stack or else only the last addition
		 * will have an effect. The History module does not allow two different (by id) history entries
		 * to be added in the same thread of execution.
		 * 
		 * 
		 * @return {boolean} whether another history entry can be added via ${isc.DocUtils.linkForRef('staticMethod:History.addHistoryEntry')}.
		 */
		readyForAnotherHistoryEntry(): boolean; 

		/**  
		 *  Registers a callback to be called when the user navigates to a synthetic history entry.
		 * 
		 * NOTE: Only one primary callback can be registered at a time. Unless isAdditional
		 * is true, then registerCallback() registers the primary callback. To register
		 * a callback that is called in addition to the primary callback, if set, pass true
		 * for isAdditional.
		 * 
		 * If the SmartClient Core module is loaded on the page where you're using the History module,
		 * you can use any format acceptable to Class.fireCallback as the callback. The
		 * parameters 'id' and 'data' will be passed to your callback, in that order.
		 * 
		 * If the SmartClient Core module is not loaded on the page, you can use one of the following
		 * formats:
		 * 
		 * A function that takes an id and a data argument, in that order.
		 * An object literal with a property named 'method' whose value is a function that takes
		 * an id and a data argument, in that order; and a property named 'target' that specifies the
		 * object on which the callback function should be applied. So, e.g:
		 * 
		 * {target: myObj, method: myObj.myFunction}
		 * 
		 * 
		 * The user can navigate to a synthetic history entry (and trip this callback) in one of two ways:
		 * 
		 * When History.addHistoryEntry method is called, a new URL associated with the
		 * history entry is generated, and the browser's back/forward navigation buttons become active.
		 * The user can then navigate back to a stored history entry via standard browser history
		 * navigation, or by explicitly hitting the appropriate URL. In this case both the ID and
		 * data parameter passed to History.addHistoryEntry will be available when the
		 * callback fires.
		 * Alternatively the user can store a generated history URL (for example in a browser bookmark)
		 * and navigate directly to it in a new browser session. In this case the 'addHistoryEntry()'
		 * may not have been fired within the browser session. This callback will still fire with the
		 * appropriate history ID but the data parameter will be null. You can disable this behavior
		 * by passing in the requiresData parameter.
		 * 
		 * 
		 * If this method is called before the page has loaded, and the page initially has a URL with 
		 * a history ID, the callback will be fired with the appropriate ID on page load.
		 * However if a history callback is registered after the page has loaded, it will not be fired
		 * until the user moves to a new synthetic history entry. If you wish to explicitly check the
		 * current URL for a history entry, you can use the History.getCurrentHistoryId method.
		 * 
		 * When the user transitions to the history entry immediately before the first synthetic
		 * history entry, the callback is fired with an id of null.
		 * 
		 * 
		 * @param {String | Object} callback - The callback to invoke when the user navigates to a synthetic history entry.
		 * @param {boolean} requiresData - If passed, this callback will only be fired if the user is navigating to a history entry that was explicitly generated in this browser session.
		 * @param {boolean} isAdditional - If false or unspecified, then the callback is considered to be the primary callback, replacing the previous primary callback if the primary callback was
		 * previously registered. If true, then the callback is an additive callback; that is, it is
		 * called in addition to the primary callback, and after the primary callback is called.
		 * @return {int} the ID of the callback. This can be passed to ${isc.DocUtils.linkForRef('staticMethod:History.unregisterCallback')} to remove the callback.
		 */
		registerCallback(callback:String | Object, requiresData:boolean, isAdditional?:boolean): int; 

		/**  
		 * 
		 * Sets the title associated with all history entries. This is the string that appears in the
		 * history drop-down. If left unset, this default to the history id that is passed into
		 * History.addHistoryEntry.
		 * 
		 * Note: Currently, this works in IE only. You may call this method in all other browsers,
		 * but it will not change what's displayed in the history drop-down.
		 * 
		 * 
		 * @param {String} title - The title to show in the history drop-down.
		 */
		setHistoryTitle(title:String): void; 

		/**  
		 *  Unregisters a callback so that it will no longer be called when the user navigates to a synthetic
		 * history entry.
		 * 
		 * 
		 * @param {int} id - the ID of the callback that was returned by History.registerCallback.
		 * @return {boolean} <code>true</code> if the callback registration was located and removed; <code>false</code> otherwise.
		 */
		unregisterCallback(id:int): boolean; 

	} // HistoryStatic


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
		 // ref="attr:ListGridRecord._baseStyle"
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
		 _baseStyle?: CSSStyleName;
		 // ref="attr:ListGridRecord._canEdit"
		/**
		 * (Read only) Default property name denoting whether this record can be edited. Property name may be
		 * modified for the grid via ListGrid.recordEditProperty.
		 * boolean - Null not allowed
		 * Flags: IR, Group: editing
		 */
		 _canEdit?: boolean;
		 // ref="attr:ListGridRecord._canRemove"
		/**
		 * Default property name denoting whether this record can be removed. Property name may be
		 * modified for the grid via ListGrid.recordCanRemoveProperty.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: editing
		 */
		 _canRemove?: boolean;
		 // ref="attr:ListGridRecord.backgroundComponent"
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
		 backgroundComponent?: Canvas;
		 // ref="attr:ListGridRecord.canAcceptDrop"
		/**
		 * (Read only) When set to false, other records cannot be dropped on (i.e., inserted
		 * via drag and drop) immediately before this record.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canAcceptDrop?: boolean;
		 // ref="attr:ListGridRecord.canDrag"
		/**
		 * (Read only) When set to false, this record cannot be dragged. If canDrag is false for
		 * any record in the current selection, none of the records will be draggable.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canDrag?: boolean;
		 // ref="attr:ListGridRecord.canExpand"
		/**
		 * (Read only) Default property name denoting whether this record can be expanded. Property name may be
		 * modified for the grid via ListGrid.canExpandRecordProperty.
		 * boolean - Null not allowed
		 * Flags: IR, Group: expansionField
		 */
		 canExpand?: boolean;
		 // ref="attr:ListGridRecord.canSelect"
		/**
		 * (Read only) Default property name denoting whether this record can be selected. Property name may be
		 * modified for the grid via ListGrid.recordCanSelectProperty.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canSelect?: boolean;
		 // ref="attr:ListGridRecord.customStyle"
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
		 customStyle?: CSSStyleName;
		 // ref="attr:ListGridRecord.detailDS"
		/**
		 * (Advanced) The default value of ListGrid.recordDetailDSProperty.
		 * Flags: IRWA
		 */
		 detailDS?: DataSource;
		 // ref="attr:ListGridRecord.embeddedComponent"
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
		 embeddedComponent?: Canvas;
		 // ref="attr:ListGridRecord.embeddedComponentFields"
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
		 embeddedComponentFields?: Array<String> /* Array of String */;
		 // ref="attr:ListGridRecord.embeddedComponentPosition"
		/**
		 * (Read only) Sizing policy applied to the embedded component. Default behavior if unspecified is the same
		 * as EmbeddedPosition "within" (fill space allocated to the record, including the ability
		 * use percentage sizing and snapTo offset). Use "expand" to have the record expand to accomodate
		 * the embedded components' specified sizes instead.
		 * Flags: IR, Group: appearance
		 */
		 embeddedComponentPosition?: EmbeddedPosition;
		 // ref="attr:ListGridRecord.enabled"
		/**
		 * (Read only) Default property name denoting whether this record is enabled. Property name may be
		 * modified for some grid via ListGrid.recordEnabledProperty.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 enabled?: boolean;
		 // ref="attr:ListGridRecord.includeInSummary"
		/**
		 * If specified as false this record should be ignored when calculating summary totals
		 * to be shown in the ListGrid.showGridSummary','summary row for this grid.
		 * 
		 * Note that includeInSummary is the default property name for this attribute,
		 * but it may be modified via ListGrid.includeInSummaryProperty.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 includeInSummary?: boolean;
		 // ref="attr:ListGridRecord.isGridSummary"
		/**
		 * This attribute will automatically be set to true for the record representing the
		 * grid-level summary row shown if ListGrid.showGridSummary is true.
		 * 
		 * Note that isGridSummary is the default property name for this attribute but
		 * it may be modified by setting ListGrid.gridSummaryRecordProperty
		 * Flags: IRW
		 */
		 isGridSummary?: boolean | null /* Boolean */;
		 // ref="attr:ListGridRecord.isGroupSummary"
		/**
		 * This attribute will automatically be set to true for records representing
		 * group-level summary rows shown if ListGrid.showGroupSummary is true.
		 * 
		 * Note that isGroupSummary is the default property name for this attribute but
		 * it may be modified by setting ListGrid.groupSummaryRecordProperty
		 * Flags: IRW
		 */
		 isGroupSummary?: boolean | null /* Boolean */;
		 // ref="attr:ListGridRecord.isSeparator"
		/**
		 * (Read only) Default property name denoting a separator row.
		 * When set to true, defines a horizontal separator in the listGrid
		 * object. Typically this is specified as the only property of a record object, since a
		 * record with isSeparator:true will not display any values.
		 * Note: this attribute name is governed by ListGrid.isSeparatorProperty.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 isSeparator?: boolean;
		 // ref="attr:ListGridRecord.linkText"
		/**
		 * The HTML to display in this row for fields with fieldType set to link. This overrides
		 * ListGridField.linkText.
		 * Flags: IRW, Group: display_values
		 */
		 linkText?: String;
		 // ref="attr:ListGridRecord.showRollOver"
		/**
		 * (Read only) Set to false to disable rollover for this individual record when ListGrid.showRollOver
		 * is true.
		 * 
		 * Note this property can be renamed to prevent collision with data members - see
		 * ListGrid.recordShowRollOverProperty.
		 * Flags: IR, Group: appearance
		 */
		 showRollOver?: boolean | null /* Boolean */;
		 // ref="attr:ListGridRecord.singleCellValue"
		/**
		 * Default property name denoting the single value to display for all fields of this row.
		 * If this property is set for some record, the record will be displayed as a single
		 * cell spanning every column in the grid, with contents set to the value of this
		 * property.
		 * Note: this attribute name is governed by ListGrid.singleCellValueProperty.
		 * Flags: IRW
		 */
		 singleCellValue?: HTMLString;
	} // ListGridRecord

	export interface ListGridRecordStatic extends RecordStatic {
	} // ListGridRecordStatic


	/**
	 * An object containing properties that is used in Gradient types 
	 */
	export interface ColorStop {
		 // ref="attr:ColorStop.color"
		/**
		 * (Read only) eg #ff0000 or red or rgb(255,0,0)
		 * Flags: IR
		 */
		 color?: CSSColor;
		 // ref="attr:ColorStop.offset"
		/**
		 * (Read only) The relative offset for the color.
		 * Flags: IR
		 */
		 offset?: Float /* float */;
		 // ref="attr:ColorStop.opacity"
		/**
		 * (Read only) 0 is transparent, 1 is fully opaque
		 * Flags: IR
		 */
		 opacity?: Float /* float */;
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
		 // ref="attr:Criterion.criteria"
		/**
		 * (Read only) For a criterion with an operator that acts on other criteria (eg "and", "or"), a list of
		 * sub-criteria that are grouped together by the operator.
		 * Flags: IR, Group: advancedFilter
		 */
		 criteria?: Array<Criterion> /* Array of Criterion */;
		 // ref="attr:Criterion.end"
		/**
		 * (Read only) End value of a criterion with an operator of type "valueRange".
		 * Flags: IR, Group: advancedFilter
		 */
		 end?: any /* Any */;
		 // ref="attr:Criterion.fieldName"
		/**
		 * (Read only) Name of the field in each Record that this criterion applies to. Not applicable for a
		 * criterion with Criterion.criteria','sub-criteria. Can be specified as a dataPath to 
		 * allow matching nested objects. Use '/' as delimiters for dataPath. See 
		 * DataPath','dataPath for more information.
		 * Flags: IR, Group: advancedFilter
		 */
		 fieldName?: String;
		 // ref="attr:Criterion.operator"
		/**
		 * (Read only) Operator this criterion applies.
		 * Flags: IR, Group: advancedFilter
		 */
		 operator?: OperatorId;
		 // ref="attr:Criterion.start"
		/**
		 * (Read only) Start value of a criterion with an operator of type "valueRange".
		 * Flags: IR, Group: advancedFilter
		 */
		 start?: any /* Any */;
		 // ref="attr:Criterion.value"
		/**
		 * (Read only) Value to be used in the application of this criterion.
		 * 
		 * Value may be required or not required, or may be an Array, according to the
		 * OperatorValueType of the operator.
		 * Flags: IR, Group: advancedFilter
		 */
		 value?: any /* Any */;
		 // ref="attr:Criterion.valuePath"
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
		 valuePath?: String;
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
	export interface TreeGridField extends ListGridField {
		 // ref="attr:TreeGridField.canExport"
		/**
		 * (Read only) Dictates whether the data in this field be exported. Explicitly set this
		 * to false to prevent exporting. Has no effect if the underlying 
		 * DataSourceField.canExport','dataSourceField is explicitly set to 
		 * canExport: false.
		 * Flags: IR
		 */
		 canExport?: boolean | null /* Boolean */;
		 // ref="attr:TreeGridField.treeField"
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
		 treeField?: boolean | null /* Boolean */;
	} // TreeGridField

	export interface TreeGridFieldStatic extends ListGridFieldStatic {
	} // TreeGridFieldStatic


	/**
	 * An ordinary JavaScript object containing properties that configures the display of
	 * and interaction with the columns of a ListGrid. 
	 */
	export interface ListGridField extends DBCField {
		 // ref="attr:ListGridField.align"
		/**
		 * Horizontal alignment for field's column header: "left", "right"
		 * or "center". Applied to the column header title and cells by default. A separate
		 * alignment for cells can be specified via ListGridField.cellAlign.
		 * If null, values are left-aligned. If this field is editable, the
		 * alignment of cells in the body will also be reflected in any editors for the field.
		 * Flags: IRW, Group: appearance
		 */
		 align?: Alignment;
		 // ref="attr:ListGridField.allowFilterExpressions"
		/**
		 * (Read only) Field-level setting for ListGrid.allowFilterExpressions:true - controls whether search 
		 * expressions can be entered directly into the filter item for this field. You can also have
		 * parsing of the expression remove the operator symbol and apply it to an 
		 * ListGrid.allowFilterOperators','icon in the editor.,
		 * 
		 * This attribute can also be set at the ListGrid.allowFilterExpressions','ListGrid level.
		 * boolean - Null not allowed
		 * Flags: IR, Group: advancedFilter
		 */
		 allowFilterExpressions?: boolean;
		 // ref="attr:ListGridField.allowFilterOperators"
		/**
		 * (Read only) Per-field setting for ListGrid.allowFilterOperators. Can be used to enable
		 * the filter operators UI for a particular field if the ListGrid-level setting is not
		 * enabled, or to disable filter operators for a particular field if the ListGrid-level setting
		 * is enabled.
		 * Flags: IR
		 */
		 allowFilterOperators?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.alwaysShowOperatorIcon"
		/**
		 * (Read only) Per-field setting for ListGrid.alwaysShowOperatorIcon. Can be used to force a particular
		 * field to always show it's ListGrid.operatorIcon','operatorIcon, even if it has no 
		 * filter-value, or is using the default ListGridField.filterOperator','search operator.
		 * Flags: IR
		 */
		 alwaysShowOperatorIcon?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.applyAfterSummary"
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
		 applyAfterSummary?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.autoComplete"
		/**
		 * Whether to allow browser autoComplete when editing this field.
		 * 
		 * If unset, defaults to listGrid.autoComplete
		 * Flags: IRW
		 */
		 autoComplete?: AutoComplete;
		 // ref="attr:ListGridField.autoFetchDisplayMap"
		/**
		 * If true, automatically fetches records and derives a valueMap from
		 * ListGridField.optionDataSource.
		 * 
		 * Same as ListGrid.autoFetchDisplayMap, but defined on a per-field basis.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: display_values
		 */
		 autoFetchDisplayMap?: boolean;
		 // ref="attr:ListGridField.autoFitWidth"
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
		 autoFitWidth?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.autoFitWidthApproach"
		/**
		 * When a user requests column autofitting via the
		 * ListGrid.getHeaderContextMenuItems','header contextMenu or via a
		 * ListGrid.headerAutoFitEvent','mouse gesture, what autofit approach is used. If set, this
		 * setting overrides the autoFitWidthApproach specified at the ListGrid level.
		 * Flags: IRW, Group: autoFitFields
		 */
		 autoFitWidthApproach?: AutoFitWidthApproach;
		 // ref="attr:ListGridField.autoFreeze"
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
		 * boolean - Null not allowed
		 * Flags: IR, Group: frozenFields
		 */
		 autoFreeze?: boolean;
		 // ref="attr:ListGridField.baseStyle"
		/**
		 * Custom base style to apply to all cells in this field instead of ListGrid.baseStyle
		 * To override the baseStyle at the row level, use
		 * ListGrid.recordBaseStyleProperty','record[listGrid.recordBaseStyleProperty]
		 * instead.
		 * Flags: IRW, Group: appearance
		 */
		 baseStyle?: CSSStyleName;
		 // ref="attr:ListGridField.canAutoFitWidth"
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
		 canAutoFitWidth?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canDragResize"
		/**
		 * (Read only) Whether this field can be dragResized using the mouse. If unset, the default behavior
		 * is governed by ListGrid.canResizeFields.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canDragResize?: boolean;
		 // ref="attr:ListGridField.canEdit"
		/**
		 * Can this field be edited? May be overridden by setting the 'canEdit' property at the
		 * listGrid level. If not explicitly set and this grid is bound to a dataSource, the
		 * ListGrid.canEditFieldAttribute may be used to set default editability at the field level.
		 * 
		 * For more dynamic control over whether fields can be edited, see
		 * ListGrid.canEditCell.
		 * 
		 * 
		 * boolean - Null not allowed
		 * Flags: IRW, Group: editing
		 */
		 canEdit?: boolean;
		 // ref="attr:ListGridField.canEditFormula"
		/**
		 * (Read only) Can formula be edited from header context menu? Setting attribute to
		 * false prevents editing. A null or true
		 * value allows editing.
		 * 
		 * Has no effect when ListGrid.canAddFormulaFields is false.
		 * Flags: IR
		 */
		 canEditFormula?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canEditSummary"
		/**
		 * (Read only) Can summary be edited from header context menu? Setting attribute to
		 * false prevents editing. A null or true
		 * value allows editing.
		 * 
		 * Has no effect when ListGrid.canAddSummaryFields is false.
		 * Flags: IR
		 */
		 canEditSummary?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canExport"
		/**
		 * (Read only) Dictates whether the data in this field be exported. Explicitly set this
		 * to false to prevent exporting. Has no effect if the underlying
		 * DataSourceField.canExport','dataSourceField is explicitly set to
		 * canExport: false.
		 * Flags: IR
		 */
		 canExport?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canFilter"
		/**
		 * If showing a filter row for this ListGrid, should the filter criteria for this
		 * field be editable
		 * boolean - Null not allowed
		 * Flags: IRW, Group: filterEditor
		 */
		 canFilter?: boolean;
		 // ref="attr:ListGridField.canFreeze"
		/**
		 * (Read only) Whether this field should display freezing/unfreezing options in its header context menu.
		 * See frozenFields.
		 * boolean - Null not allowed
		 * Flags: IR, Group: frozenFields
		 */
		 canFreeze?: boolean;
		 // ref="attr:ListGridField.canGroupBy"
		/**
		 * Determines whether this field will be groupable in the header context menu.
		 * Flags: IRW
		 */
		 canGroupBy?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canHide"
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
		 * boolean - Null not allowed
		 * Flags: IR, Group: appearance
		 */
		 canHide?: boolean;
		 // ref="attr:ListGridField.canHilite"
		/**
		 * Determines whether this field can be hilited. Set to false to prevent this
		 * field from appearing in HiliteEditor.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 canHilite?: boolean;
		 // ref="attr:ListGridField.canReorder"
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
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canReorder?: boolean;
		 // ref="attr:ListGridField.canSort"
		/**
		 * Enables or disables sorting by this column. If false, interactive
		 * sorting via header-clicks or menu-items will have no effect, but direct scripted calls
		 * to ListGrid.sort','sort() or ListGrid.setSort','setSort() will work as
		 * expected.
		 * Flags: IRW, Group: sorting
		 */
		 canSort?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canSortClientOnly"
		/**
		 * When true, this field can only be used for sorting if the data is entirely client-side.
		 * Flags: IRW
		 */
		 canSortClientOnly?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.canToggle"
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
		 canToggle?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.cellAlign"
		/**
		 * Horizontal alignment for cells in this field's column: "left", "right"
		 * or "center".
		 * If null, alignment is derived from ListGridField.align. If this field is editable,
		 * the alignment of cells in the body will also be reflected in any editors for the field.
		 * Flags: IRW, Group: appearance
		 */
		 cellAlign?: Alignment;
		 // ref="attr:ListGridField.cellIcon"
		/**
		 * (Read only) For a field of type:"icon" only, set the icon that appears in body cells. Unless
		 * setting ListGridField.icon','field.icon, setting field.cellIcon will not show an
		 * icon in the header.
		 * 
		 * To change this property after fields have been passed to ListGrid.setFields,
		 * use ListGrid.setFieldCellIcon.
		 * Flags: IR
		 */
		 cellIcon?: SCImgURL;
		 // ref="attr:ListGridField.dataPath"
		/**
		 * (Read only, Advanced) dataPath for this field. This property allows the grid to display details of nested data
		 * structures in a flat list of columns.
		 * Flags: IRA, Group: data
		 */
		 dataPath?: String;
		 // ref="attr:ListGridField.dateFormatter"
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
		 dateFormatter?: DateDisplayFormat;
		 // ref="attr:ListGridField.decimalPad"
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
		 decimalPad?: number;
		 // ref="attr:ListGridField.decimalPrecision"
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
		 decimalPrecision?: number;
		 // ref="attr:ListGridField.defaultFilterValue"
		/**
		 * (Advanced) If this ListGrid is showing a filter row, this property can be used to apply a default
		 * value to show in the filter editor for this field.
		 * Flags: IRWA, Group: filterEditor
		 */
		 defaultFilterValue?: any /* Any */;
		 // ref="attr:ListGridField.defaultGroupingMode"
		/**
		 * (Read only) Default groupingMode used when the user does not specify a mode or grouping is triggered
		 * programmatically and ListGridField.groupingMode','field.groupingMode is unset.
		 * See ListGridField.groupingModes','field.groupingModes.
		 * Flags: IR, Group: grouping
		 */
		 defaultGroupingMode?: Identifier;
		 // ref="attr:ListGridField.defaultIconSrc"
		/**
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.defaultIconSrc.
		 * Flags: IRA, Group: editing
		 */
		 defaultIconSrc?: String;
		 // ref="attr:ListGridField.defaultValue"
		/**
		 * If this field ListGridField.canEdit','can be edited, this property can be used to
		 * specify a default value for this field's editor when adding new rows to the grid.
		 * Flags: IRW, Group: editing
		 */
		 defaultValue?: any /* Any */;
		 // ref="attr:ListGridField.defaultWidth"
		/**
		 * (Read only) Optional "default width" for this field. If set, this value will be returned by the
		 * ListGrid.getDefaultFieldWidth method, and used as the autoFit size for
		 * the field's content.
		 * Flags: IR, Group: autoFitFields
		 */
		 defaultWidth?: Integer;
		 // ref="attr:ListGridField.displayField"
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
		 displayField?: String;
		 // ref="attr:ListGridField.displayFormat"
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
		 displayFormat?: any /* Varies */;
		 // ref="attr:ListGridField.displayValueFromRecord"
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
		 * boolean - Null not allowed
		 * Flags: IRWA
		 */
		 displayValueFromRecord?: boolean;
		 // ref="attr:ListGridField.editorFormula"
		/**
		 * (Read only) Shortcut to configure a FormItem.formula for the ListGridField.editorType','editor used when this
		 * field is ListGrid.canEdit','edited.
		 * Flags: IR
		 */
		 editorFormula?: UserFormula;
		 // ref="attr:ListGridField.editorIconHeight"
		/**
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.iconHeight.
		 * If this property unset, the iconHeight property from the editor can be picked up from
		 * ListGridField.iconHeight instead.
		 * Flags: IRA, Group: editing
		 */
		 editorIconHeight?: number;
		 // ref="attr:ListGridField.editorIconWidth"
		/**
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.iconWidth.
		 * If this property unset, the iconWidth property from the editor can be picked up from
		 * ListGridField.iconWidth instead.
		 * Flags: IRA, Group: editing
		 */
		 editorIconWidth?: number;
		 // ref="attr:ListGridField.editorImageURLPrefix"
		/**
		 * (Advanced) When some cell in this field is being edited, this property can be used to apply
		 * an explicit FormItem.imageURLPrefix to the editor in question.
		 * This can be used to modify the valueIcons within the editor.
		 * If unset, but ListGridField.imageURLPrefix is specified, that will be used
		 * instead.
		 * Flags: IRWA, Group: editing
		 */
		 editorImageURLPrefix?: String;
		 // ref="attr:ListGridField.editorImageURLSuffix"
		/**
		 * (Advanced) When some cell in this field is being edited, this property can be used to apply
		 * an explicit FormItem.imageURLSuffix to the editor in question.
		 * This can be used to modify the valueIcons within the editor.
		 * If unset, but ListGridField.imageURLPrefix is specified, that will be used
		 * instead.
		 * Flags: IRWA, Group: editing
		 */
		 editorImageURLSuffix?: String;
		 // ref="attr:ListGridField.editorProperties"
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
		 editorProperties?: FormItemProps /* FormItem Properties */;
		 // ref="attr:ListGridField.editorTextFormula"
		/**
		 * (Read only) Shortcut to configure a FormItem.textFormula for the ListGridField.editorType','editor used when this
		 * field is ListGrid.canEdit','edited.
		 * Flags: IR
		 */
		 editorTextFormula?: UserSummary;
		 // ref="attr:ListGridField.editorType"
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
		 editorType?: FormItemClassName;
		 // ref="attr:ListGridField.editorValueIconHeight"
		/**
		 * When some cell in this field is being edited, setting this property will specify the
		 * height for value icons in the cell's editor. If unset, the editor's valueIcon width and
		 * height will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns
		 */
		 editorValueIconHeight?: number;
		 // ref="attr:ListGridField.editorValueIcons"
		/**
		 * When some cell in this field is being edited, setting this property will specify the
		 * value icons to display in the cell's editor. If unset, the editor's valueIcons
		 * will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns
		 */
		 editorValueIcons?: Map<String,String>;
		 // ref="attr:ListGridField.editorValueIconWidth"
		/**
		 * When some cell in this field is being edited, setting this property will specify the
		 * width for value icons in the cell's editor. If unset, the editor's valueIcon width and
		 * height will be determined in the same way as it would be for a static cell.
		 * Flags: IRW, Group: imageColumns
		 */
		 editorValueIconWidth?: number;
		 // ref="attr:ListGridField.editorValueMap"
		/**
		 * A valueMap to use for editors shown for this field. By default if this is not
		 * specified ListGridField.valueMap','field.valueMap will be used instead.
		 * 
		 * Dynamic valueMaps can be provided by implementing ListGrid.getEditorValueMap.
		 * Flags: IRW, Group: editing
		 */
		 editorValueMap?: ValueMap;
		 // ref="attr:ListGridField.emptyCellValue"
		/**
		 * The value to display for a cell whose value is null or the empty string after
		 * applying ListGridField.formatCellValue','formatting and valueMap (if any).
		 * 
		 * This is the field-specific attribute. You may also set the emptyCellValue at the grid
		 * level to define the emptyCellValue for all empty fields in the grid.
		 * Flags: IRW, Group: display_values
		 */
		 emptyCellValue?: HTMLString;
		 // ref="attr:ListGridField.enterKeyEditAction"
		/**
		 * What to do when a user hits enter while editing this field?
		 * Overrides the enterKeyEditAction as specified at the listGrid level while
		 * focus is in this field.
		 * Flags: IRW, Group: editing
		 */
		 enterKeyEditAction?: EnterKeyEditAction;
		 // ref="attr:ListGridField.escapeHTML"
		/**
		 * By default HTML values in ListGrid cells will be interpreted by the browser.
		 * Setting this flag to true will causes HTML characters to be escaped, meaning the
		 * raw value of the field (for example "&lt;b&gt;AAA&lt;/b&gt;") is displayed
		 * to the user rather than the interpreted HTML (for example "AAA")
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 escapeHTML?: boolean;
		 // ref="attr:ListGridField.escapeKeyEditAction"
		/**
		 * What to do when a user hits escape while editing this field?
		 * Overrides the escapeKeyEditAction as specified at the listGrid level while
		 * focus is in this field.
		 * Flags: IRW, Group: editing
		 */
		 escapeKeyEditAction?: EscapeKeyEditAction;
		 // ref="attr:ListGridField.excludeFromState"
		/**
		 * (Read only) If true, then this field is excluded from the bound component's view state. In addition,
		 * the field will not be selected as the default title field
		 * by DataBoundComponent.getTitleField
		 * if DataBoundComponent.titleField is not provided.
		 * Flags: IR, Group: viewState
		 */
		 excludeFromState?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.exportFieldWidth"
		/**
		 * When exporting data to Excel/OpenOffice format using ListGrid.exportData or
		 * ListGrid.exportClientData with ListGrid.exportFieldWidths set,
		 * set this flag false to cause this field to "opt out" of width export. Fields that opt out
		 * in this way have the corresponding spreadsheet column autosized (ie, made just wide enough
		 * that content is not clipped).
		 * 
		 * This setting has no effect if listGrid.exportFieldWidths is not set.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 exportFieldWidth?: boolean;
		 // ref="attr:ListGridField.exportFormat"
		/**
		 * (Read only) FormatString used during exports for numeric or date formatting. See
		 * DataSourceField.exportFormat.
		 * Flags: IR, Group: exportFormatting
		 */
		 exportFormat?: FormatString;
		 // ref="attr:ListGridField.exportRawValues"
		/**
		 * (Read only) Dictates whether the data in this field should be exported raw by
		 * ListGrid.exportClientData','exportClientData(). If set to true for a
		 * field, the values in the field-formatters will not be executed for data in this field.
		 * Decreases the time taken for large exports.
		 * Flags: IR
		 */
		 exportRawValues?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.filterEditorProperties"
		/**
		 * (Advanced) If this ListGrid is showing a filter row
		 * (ListGrid.showFilterEditor','showFilterEditor:true), this property
		 * can be used to specify properties for the appropriate filter form item.
		 * Flags: IRWA, Group: filterEditor
		 */
		 filterEditorProperties?: FormItemProps /* FormItem Properties */;
		 // ref="attr:ListGridField.filterEditorType"
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
		 filterEditorType?: FormItemClassName;
		 // ref="attr:ListGridField.filterEditorValueMap"
		/**
		 * If this listGrid is showing a filter row, this property can be used to specify a
		 * mapping of internal data to/from display values to be in the appropriate filter
		 * row form item.
		 * Flags: IRW, Group: filterEditor
		 */
		 filterEditorValueMap?: Object;
		 // ref="attr:ListGridField.filterOnKeypress"
		/**
		 * (Advanced) If we're showing the filterEditor (listGrid.showFilterEditor is true), this property
		 * determines whether this list should be filtered every time the user edits the value of
		 * the filter editor for this field.
		 * 
		 * The ListGrid.fetchDelay governs the delay in milliseconds between the user editing the
		 * filter editor value, and the new filter being applied to the grid.
		 * boolean - Null not allowed
		 * Flags: IRWA, Group: filterEditor
		 */
		 filterOnKeypress?: boolean;
		 // ref="attr:ListGridField.filterOperator"
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
		 filterOperator?: OperatorId;
		 // ref="attr:ListGridField.format"
		/**
		 * (Read only) FormatString for numeric or date formatting. See DataSourceField.format.
		 * Flags: IR, Group: exportFormatting
		 */
		 format?: FormatString;
		 // ref="attr:ListGridField.formatGridSummary"
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
		 formatGridSummary?: StringMethod;
		 // ref="attr:ListGridField.formatGroupSummary"
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
		 formatGroupSummary?: StringMethod;
		 // ref="attr:ListGridField.frozen"
		/**
		 * (Read only) Whether this field should be "frozen" for the purposes of horizontal scrolling. See
		 * frozenFields.
		 * boolean - Null not allowed
		 * Flags: IR, Group: frozenFields
		 */
		 frozen?: boolean;
		 // ref="attr:ListGridField.groupGranularity"
		/**
		 * (Read only) Granularity of grouping for numeric fields.
		 * 
		 * Groups will be formed based on ranges of values of size groupGranularity. For
		 * example, if groupGranularity were 1000, groups would be 0-1000, 1000-2000, etc.
		 * Flags: IR, Group: grouping
		 */
		 groupGranularity?: Integer;
		 // ref="attr:ListGridField.groupingMode"
		/**
		 * (Read only) For a field that allows multiple ListGridField.groupingModes','grouping modes,
		 * the current grouping mode.
		 * 
		 * This property is set when a user chooses a particular grouping mode, and may be set on
		 * ListGrid creation to affect the initial grouping.
		 * Flags: IR, Group: grouping
		 */
		 groupingMode?: Identifier;
		 // ref="attr:ListGridField.groupingModes"
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
		 groupingModes?: ValueMap;
		 // ref="attr:ListGridField.groupPrecision"
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
		 groupPrecision?: Integer;
		 // ref="attr:ListGridField.headerBaseStyle"
		/**
		 * Custom base style to apply to this field's header button instead of
		 * ListGrid.headerBaseStyle.
		 * Note that depending on the header button constructor, you may have to override
		 * ListGridField.headerTitleStyle as well.
		 * Flags: IRW, Group: appearance
		 */
		 headerBaseStyle?: CSSStyleName;
		 // ref="attr:ListGridField.headerHoverDelay"
		/**
		 * Delay in ms for hovers shown over this field's header.
		 * 
		 * If unset, any ListGridField.hoverDelay will be used for both header hovers
		 * and hovers shown over cells in the grid's body.
		 * Flags: IRW
		 */
		 headerHoverDelay?: Integer;
		 // ref="attr:ListGridField.headerTitle"
		/**
		 * (Read only) Optional title for the header button for this field. If specified this will be
		 * displayed in the header button instead of ListGridField.title or
		 * ListGridField.name. Set to an empty string to suppress the title in the
		 * header button entirely.
		 * Flags: IR, Group: appearance
		 */
		 headerTitle?: String;
		 // ref="attr:ListGridField.headerTitleStyle"
		/**
		 * Custom titleStyle to apply to this field's header button instead of
		 * ListGrid.headerTitleStyle.
		 * Note that this will typically only have an effect if
		 * ListGrid.headerButtonConstructor is set to StretchImgButton or a subclass
		 * thereof.
		 * Flags: IRW, Group: appearance
		 */
		 headerTitleStyle?: CSSStyleName;
		 // ref="attr:ListGridField.hidden"
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
		 hidden?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.hiliteHTMLAfterFormat"
		/**
		 * (Read only) If set to true, custom HTML applied as part of hiliting will be applied after
		 * ListGrid.formatCellValue','formatting for each cell in this column. If false, hilite
		 * HTML will be applied before formatting.
		 * 
		 * This attribute overrides ListGrid.hiliteHTMLAfterFormat as defined at the
		 * component level.
		 * Flags: IR
		 */
		 hiliteHTMLAfterFormat?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.hiliteIconHeight"
		/**
		 * Height for hilite icons for this field.
		 * Overrides ListGrid.hiliteIconSize, ListGrid.hiliteIconHeight, and
		 * ListGridField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconHeight?: number;
		 // ref="attr:ListGridField.hiliteIconLeftPadding"
		/**
		 * How much padding should there be on the left of DataBoundComponent.hiliteIcons','hilite icons
		 * for this field?
		 * Overrides ListGrid.hiliteIconLeftPadding
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconLeftPadding?: number;
		 // ref="attr:ListGridField.hiliteIconPosition"
		/**
		 * (Read only) When ListGrid.hiliteIcons are present, where the hilite icon will be placed
		 * relative to the field value. See HiliteIconPosition.
		 * Overrides ListGrid.hiliteIconPosition.
		 * Flags: IR, Group: hiliting
		 */
		 hiliteIconPosition?: HiliteIconPosition;
		 // ref="attr:ListGridField.hiliteIconRightPadding"
		/**
		 * How much padding should there be on the right of DataBoundComponent.hiliteIcons','hilite icons
		 * for this field?
		 * Overrides ListGrid.hiliteIconRightPadding
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconRightPadding?: number;
		 // ref="attr:ListGridField.hiliteIconSize"
		/**
		 * Default width and height of ListGrid.hiliteIcons','hilite icons in this field.
		 * Takes precedence over hiliteIconWidth, hiliteIconHeight and hiliteIconSize specified at
		 * the component level.
		 * Can be overridden via ListGridField.hiliteIconWidth and
		 * ListGridField.hiliteIconHeight
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconSize?: number;
		 // ref="attr:ListGridField.hiliteIconWidth"
		/**
		 * Width for hilite icons for this field.
		 * Overrides ListGrid.hiliteIconSize, ListGrid.hiliteIconWidth, and
		 * ListGridField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconWidth?: number;
		 // ref="attr:ListGridField.hoverDelay"
		/**
		 * Delay in ms for hovers shown for cells in this field. If unset, the grid's
		 * hoverDelay will be used.
		 * 
		 * This property also governes the hoverDelay for the header button. Developers wishing
		 * to have a different delay for hovers on the header can use ListGridField.headerHoverDelay
		 * in addition to this property.
		 * Flags: IRW
		 */
		 hoverDelay?: Integer;
		 // ref="attr:ListGridField.hoverWidth"
		/**
		 * Specifies the width of the canvas shown when the mouse hovers over cells in this field. 
		 * 
		 * If unset, default behavior is derived from ListGrid.headerHoverWidth.
		 * Flags: IRW
		 */
		 hoverWidth?: Integer;
		 // ref="attr:ListGridField.hoverWrap"
		/**
		 * This property may be set to customize the wrap attribute for the
		 * canvas shown when the mouse hovers over cells in this field. Note that this causes a 
		 * soft-wrap - if set, the hover text will wrap at word boundaries.
		 * 
		 * If unset, default behavior is derived from ListGrid.headerHoverWrap.
		 * Flags: IRW
		 */
		 hoverWrap?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.icon"
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
		 icon?: SCImgURL;
		 // ref="attr:ListGridField.iconHeight"
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
		 iconHeight?: Integer;
		 // ref="attr:ListGridField.iconOrientation"
		/**
		 * (Read only) If this field is showing an icon, should it appear to the left or right of the title?
		 * Valid options are "left" or "right"
		 * Flags: IR
		 */
		 iconOrientation?: String;
		 // ref="attr:ListGridField.icons"
		/**
		 * (Read only, Advanced) If this field is editable, this property can be used to specify
		 * FormItem.icons','icons to be displayed in the editors displayed for this field
		 * Flags: IRA, Group: editing
		 */
		 icons?: Array<FormItemIcon> /* Array of FormItemIcon Properties */;
		 // ref="attr:ListGridField.iconSize"
		/**
		 * (Read only) If ListGridField.icon is specified, this property can be used to specify the
		 * size of the icon to be displayed in the ListGrid header button.
		 * (See StatefulCanvas.iconSize)
		 * Flags: IR
		 */
		 iconSize?: Integer;
		 // ref="attr:ListGridField.iconSpacing"
		/**
		 * (Read only) Pixels between icon and title text.
		 * Flags: IR, Group: buttonIcon
		 */
		 iconSpacing?: int;
		 // ref="attr:ListGridField.iconVAlign"
		/**
		 * (Read only, Advanced) If this field is editable, this property will be passed to editors displayed for
		 * cells within this field as FormItem.iconVAlign.
		 * Flags: IRA, Group: editing
		 */
		 iconVAlign?: String;
		 // ref="attr:ListGridField.iconWidth"
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
		 iconWidth?: Integer;
		 // ref="attr:ListGridField.ignoreKeyboardClicks"
		/**
		 * If the user is navigating through the grid using the keyboard, record click or double click
		 * events may be generated via keyboard interactions (see ListGrid.generateClickOnSpace,
		 * ListGrid.generateClickOnEnter, ListGrid.generateDoubleClickOnSpace,
		 * ListGrid.generateDoubleClickOnEnter and ListGrid.arrowKeyAction).
		 * 
		 * These synthetic events have both a target row and column.
		 * Setting this flag to true ensures that this field will never be considered the target for
		 * a keyboard click event.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: events
		 */
		 ignoreKeyboardClicks?: boolean;
		 // ref="attr:ListGridField.imageHeight"
		/**
		 * Height of image shown for fieldTypes image and imageFile in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageHeight is "logoHeight",
		 * record.logoHeight will control the height of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		 imageHeight?: number;
		 // ref="attr:ListGridField.imageSize"
		/**
		 * Size of images shown for fieldTypes image and imageFile in this field.
		 * This setting overrides the global ListGrid default ListGrid.imageSize.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageSize is "logoSize",
		 * record.logoSize will control the size of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		 imageSize?: number;
		 // ref="attr:ListGridField.imageURLPrefix"
		/**
		 * (Advanced) If this field has type [ListGridFieldType] set to "image"
		 * and the URL for the image displayed is not absolute, the path of the URL will be relative
		 * to this string
		 * Alternatively, if this field displays any valueIcons, this prefix will be applied to
		 * the beginning of any ListGridField.valueIcons when determining the
		 * URL for the image.
		 * Flags: IRWA, Group: imageColumns
		 */
		 imageURLPrefix?: String;
		 // ref="attr:ListGridField.imageURLSuffix"
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
		 imageURLSuffix?: String;
		 // ref="attr:ListGridField.imageWidth"
		/**
		 * Width of images shown for fieldTypes image and imageFile in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * width. For example, if field.imageWidth is "logoWidth",
		 * record.logoWidth will control the width of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		 imageWidth?: number;
		 // ref="attr:ListGridField.includeFrom"
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
		 includeFrom?: String;
		 // ref="attr:ListGridField.includeInRecordSummary"
		/**
		 * (Read only) If a listGrid is showing a field of type summary, should this field be passed to the
		 * recordSummaryFunction when calculating the summary value to display.
		 * If unset, fields are included if they are of type "integer" or "float" only (since most
		 * summary functions perform numeric calculations). See also
		 * ListGridField.includeInRecordSummaryFields.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 includeInRecordSummary?: boolean;
		 // ref="attr:ListGridField.includeInRecordSummaryFields"
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
		 includeInRecordSummaryFields?: Array<FieldName> /* Array of FieldName */;
		 // ref="attr:ListGridField.initialValue"
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
		 initialValue?: any /* Any */;
		 // ref="attr:ListGridField.inputFormat"
		/**
		 * (Advanced) For fields of type "date" or "datetime", if this is an editable
		 * listGrid, this property allows you to specify the DateItem.inputFormat','inputFormat
		 * applied to the editor for this field.
		 * Flags: IRWA
		 */
		 inputFormat?: DateInputFormat;
		 // ref="attr:ListGridField.isRemoveField"
		/**
		 * (Read only, Advanced) If set to true and ListGrid.canRemoveRecords is true, this field will be rendered
		 * as the remove-field for this grid. In most common usage scenarios this field will essentially
		 * be a placeholder indicating where the remove field should be rendered, meaning properties
		 * other than isRemoveField, such as name or title, may
		 * be left unset.
		 * boolean - Null not allowed
		 * Flags: IRA
		 */
		 isRemoveField?: boolean;
		 // ref="attr:ListGridField.leaveHeaderMenuButtonSpace"
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
		 * boolean - Null not allowed
		 * Flags: IWA, Group: headerMenuButton
		 */
		 leaveHeaderMenuButtonSpace?: boolean;
		 // ref="attr:ListGridField.linkText"
		/**
		 * The HTML to display in cells of this field if the fieldType is set to link.
		 * 
		 * This property sets linkText that will be the same for all records. You can set linkText
		 * on a per-record basis via ListGridRecord.linkText.
		 * Flags: IRW, Group: display_values
		 */
		 linkText?: String;
		 // ref="attr:ListGridField.linkTextProperty"
		/**
		 * Name of the property in a ListGridRecord that holds the HTML to display in cells of this
		 * field if the fieldType is set to "link".
		 * Flags: IRW, Group: display_values
		 */
		 linkTextProperty?: String;
		 // ref="attr:ListGridField.linkURLPrefix"
		/**
		 * (Advanced) If this field has type [ListGridFieldType] set to "link",
		 * setting this property will apply a standard prefix to the link URL for cells in this field.
		 * Flags: IRWA
		 */
		 linkURLPrefix?: String;
		 // ref="attr:ListGridField.linkURLSuffix"
		/**
		 * (Advanced) If this field has type [ListGridFieldType] set to "link",
		 * setting this property will apply a standard suffix to the link URL for cells in this field.
		 * Flags: IRWA
		 */
		 linkURLSuffix?: String;
		 // ref="attr:ListGridField.maxWidth"
		/**
		 * When ListGrid.showHeader is false and a field is subject to autofitting (see
		 * ListGrid.autoFitFieldWidths), sets the maximum width of the field. The actual
		 * allowed minimum will be the larger of this property and ListGridField.minWidth. (That is,
		 * ListGridField.minWidth dominates this property.)
		 * Flags: IRW, Group: appearance
		 */
		 maxWidth?: Number;
		 // ref="attr:ListGridField.minWidth"
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
		 minWidth?: Number;
		 // ref="attr:ListGridField.multiple"
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
		 multiple?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.name"
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
		 name?: FieldName;
		 // ref="attr:ListGridField.operator"
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
		 operator?: String;
		 // ref="attr:ListGridField.optionCriteria"
		/**
		 * If ListGridField.optionDataSource is set for this ListGridField, criteria specified in this
		 * attribute will be passed to the dataSource when performing the fetch operation to
		 * determine data-value to display-value mappings
		 * Flags: IRW, Group: display_values
		 */
		 optionCriteria?: Criteria;
		 // ref="attr:ListGridField.optionDataSource"
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
		 optionDataSource?: String;
		 // ref="attr:ListGridField.optionFilterContext"
		/**
		 * (Read only) If this field has an optionDataSource specified and
		 * ListGridField.autoFetchDisplayMap','autoFetchDisplayMap is set, this attribute
		 * provides a way to customize the dataSource request issued to fetch the display map from
		 * the option dataSource. This provides, among other capabilities, a way to trigger the
		 * server to return summary records.
		 * Flags: IR, Group: display_values
		 */
		 optionFilterContext?: DSRequest /* DSRequest Properties */;
		 // ref="attr:ListGridField.optionOperationId"
		/**
		 * (Read only) If this field has an optionDataSource specified and
		 * ListGridField.autoFetchDisplayMap','autoFetchDisplayMap is set, this attribute
		 * provides a way to customize the DSRequest.operationId passed to
		 * dataSource.fetchData() when retrieving the display map from the option
		 * dataSource.
		 * Flags: IR, Group: display_values
		 */
		 optionOperationId?: String;
		 // ref="attr:ListGridField.optionTextMatchStyle"
		/**
		 * (Read only) For fields with an ListGridField.optionDataSource, where
		 * ListGridField.autoFetchDisplayMap is true, this property will govern
		 * the textMatchStyle attribute of the DSRequest parameter passed to
		 * DataSource.fetchData when retrieving the remote data set to be used as
		 * a basis for this field's valueMap.
		 * Flags: IR, Group: display_values
		 */
		 optionTextMatchStyle?: TextMatchStyle;
		 // ref="attr:ListGridField.partialSummary"
		/**
		 * (Read only) Only applies to fields of type "summary".
		 * This attribute is set on a summary field, when calculating the summary value from
		 * some record, the summary function will only be passed the fields before this summary field.
		 * This may be useful for displaying running totals across a record.
		 * 
		 * Note that this feature would typically be used with
		 * ListGrid.canReorderFields','canReorderFields:false
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 partialSummary?: boolean;
		 // ref="attr:ListGridField.prompt"
		/**
		 * (Read only) Causes a tooltip hover to appear on the header generated for this field (effectively
		 * sets Canvas.prompt for the header).
		 * Flags: IR
		 */
		 prompt?: HTMLString;
		 // ref="attr:ListGridField.recordSummaryFunction"
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
		 recordSummaryFunction?: RecordSummaryFunction;
		 // ref="attr:ListGridField.required"
		/**
		 * When the user edits cells in this field, is this value required to be non-empty
		 * in order for validation to pass.
		 * Note: for databound listGrids, this property may be specified on the
		 * DataSourceField, enabling both client and server side validation.
		 * Flags: IRW, Group: gridValidation
		 */
		 required?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.selectCellTextOnClick"
		/**
		 * Should the cell content be natively selected (ready for copying to clip-board) 
		 * on click?
		 * 
		 * See ListGrid.selectCellTextOnClick for more information.
		 * Flags: IRW
		 */
		 selectCellTextOnClick?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.shouldPrint"
		/**
		 * Whether this field should be included in the printable representation of the grid.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: printing
		 */
		 shouldPrint?: boolean;
		 // ref="attr:ListGridField.showAlternateStyle"
		/**
		 * (Advanced) When set to false, don't apply alternate-row styling to this field.
		 * boolean - Null not allowed
		 * Flags: IRWA
		 */
		 showAlternateStyle?: boolean;
		 // ref="attr:ListGridField.showDefaultContextMenu"
		/**
		 * When set to false, this field will not show a context menu in its header.
		 * Flags: IRW
		 */
		 showDefaultContextMenu?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showDisabledIcon"
		/**
		 * (Read only) If using an icon for this button, whether to switch the icon image if the button becomes
		 * disabled.
		 * Flags: IR, Group: buttonIcon
		 */
		 showDisabledIcon?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showDownIcon"
		/**
		 * (Read only) If using an icon for this button, whether to switch the icon image when the mouse goes
		 * down on the button.
		 * Flags: IR, Group: buttonIcon
		 */
		 showDownIcon?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showFileInline"
		/**
		 * (Read only) For a field of type:"imageFile", indicates whether to stream the image and display it
		 * inline or to display the View and Download icons.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showFileInline?: boolean;
		 // ref="attr:ListGridField.showFocusedIcon"
		/**
		 * (Read only) If using an icon for this button, whether to switch the icon image when the button
		 * receives focus.
		 * 
		 * If StatefulCanvas.showFocusedAsOver is true, the "Over" icon will be
		 * displayed when the canvas has focus, otherwise a separate "Focused" icon
		 * will be displayed
		 * Flags: IR, Group: buttonIcon
		 */
		 showFocusedIcon?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showGridSummary"
		/**
		 * (Read only) If ListGrid.showGridSummary is true, should this field show a summary value.
		 * If unset, this field will show a summary value in the summary row if an
		 * explicit ListGridField.summaryFunction is specified or if a
		 * SimpleType.getDefaultSummaryFunction','default summary function is defined
		 * for the specified field type.
		 * Flags: IR
		 */
		 showGridSummary?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showGroupSummary"
		/**
		 * (Read only) If ListGrid.showGroupSummary is true, should this field show a summary value
		 * in a summary row when the grid is grouped?
		 * If unset, this field will show a summary value in the summary row if an
		 * explicit ListGridField.summaryFunction is specified or if a
		 * SimpleType.getDefaultSummaryFunction','default summary function is defined
		 * for the specified field type.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showGroupSummary?: boolean;
		 // ref="attr:ListGridField.showHilitesInGroupSummary"
		/**
		 * Determines whether hiliting for this field is shown in a group summary.
		 * Set to false to prevent this field from showing hilite in a group summary.
		 * 
		 * All hilites in group summary rows can be controlled with the
		 * ListGrid.showHilitesInGroupSummary property.
		 * Flags: IRW
		 */
		 showHilitesInGroupSummary?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showHover"
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
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 showHover?: boolean;
		 // ref="attr:ListGridField.showHoverComponents"
		/**
		 * (Advanced) When set to true and showHover is also true for the field, shows a widget hovering at 
		 * the mouse point.
		 * 
		 * A number of builtin modes are provided - see HoverMode.
		 * 
		 * Also supported at the ListGrid.showHoverComponents','ListGrid-level.
		 * Flags: IRWA, Group: hoverComponents
		 */
		 showHoverComponents?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showRollOverIcon"
		/**
		 * (Read only) If using an icon for this button, whether to switch the icon image on mouse rollover.
		 * Flags: IR, Group: buttonIcon
		 */
		 showRollOverIcon?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showSelectedIcon"
		/**
		 * (Read only) If using an icon for this button, whether to switch the icon image when the button
		 * becomes selected.
		 * Flags: IR, Group: buttonIcon
		 */
		 showSelectedIcon?: boolean | null /* Boolean */;
		 // ref="attr:ListGridField.showTitle"
		/**
		 * This property may be set to false to explicitly suppress display of
		 * the field title in the column header button for the field.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 showTitle?: boolean;
		 // ref="attr:ListGridField.showValueIconOnly"
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
		 * boolean - Null not allowed
		 * Flags: IRW, Group: imageColumns
		 */
		 showValueIconOnly?: boolean;
		 // ref="attr:ListGridField.sortByDisplayField"
		/**
		 * For a field with displayField configured, should client-side sorting
		 * be performed on the display field value? Unless explicitly set to false
		 * the display field value is used.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: display_values
		 */
		 sortByDisplayField?: boolean;
		 // ref="attr:ListGridField.sortByMappedValue"
		/**
		 * If ListGridField.valueMap is set, and the grid is ListGrid.setSort','sorted
		 * by this field, should the data be sorted by the underlying data value or the
		 * mapped display value. If unset, will sort by display value. Set to false
		 * to sort by underlying data value. Note that this has no effect if
		 * a ListGridField.sortNormalizer has been specified.
		 * boolean - Null not allowed
		 * Flags: IRW
		 */
		 sortByMappedValue?: boolean;
		 // ref="attr:ListGridField.sortDirection"
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
		 sortDirection?: SortDirection;
		 // ref="attr:ListGridField.spannedHeaderBaseStyle"
		/**
		 * Custom base style to apply to this field's header button instead of
		 * ListGrid.spannedHeaderBaseStyle when the grid is showing header spans.
		 * Flags: IRW, Group: gridHeader
		 */
		 spannedHeaderBaseStyle?: CSSStyleName;
		 // ref="attr:ListGridField.summaryFunction"
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
		 summaryFunction?: SummaryFunction | Array<SummaryFunction> /* SummaryFunction | Array of SummaryFunction */;
		 // ref="attr:ListGridField.summaryTitle"
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
		 summaryTitle?: String;
		 // ref="attr:ListGridField.summaryValue"
		/**
		 * The value to display for a ListGridField when it appears in the ListGrid.summaryRow','summaryRow. The
		 * default for normal fields is null and for special fields, like the ListGrid.checkboxField','checkboxField,
		 * the default is to show a blank value (a non-breaking space).
		 * Flags: IRW
		 */
		 summaryValue?: HTMLString;
		 // ref="attr:ListGridField.summaryValueTitle"
		/**
		 * (Read only) If ListGrid.showGridSummary or ListGrid.showGroupSummary is true and the
		 * ListGridField.summaryFunction is set to "title", this attribute may be
		 * set to a string to display in the group and/or grid summary. If unspecified the
		 * ListGridField.title will show up in the summary.
		 * Flags: IR
		 */
		 summaryValueTitle?: String;
		 // ref="attr:ListGridField.suppressValueIcon"
		/**
		 * If this field has a valueIcons property specified, setting this property to true will
		 * prevent the valueIcon being written out into this field's cells.
		 * 
		 * Note this property may also be set to false to avoid showing the standard
		 * ListGrid.booleanTrueImage and ListGrid.booleanFalseImage for fields of type
		 * boolean.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: imageColumns
		 */
		 suppressValueIcon?: boolean;
		 // ref="attr:ListGridField.target"
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
		 target?: String;
		 // ref="attr:ListGridField.timeFormatter"
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
		 timeFormatter?: TimeDisplayFormat;
		 // ref="attr:ListGridField.title"
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
		 title?: String;
		 // ref="attr:ListGridField.type"
		/**
		 * (Read only) ListGrids picks a renderer for the view and edit mode of a field based on this attribute.
		 * See ListGridFieldType for a summary of how types are rendered.
		 * Flags: IR, Group: appearance
		 */
		 type?: ListGridFieldType;
		 // ref="attr:ListGridField.userFormula"
		/**
		 * Formula definition for this field.
		 * 
		 * Advanced applications that wish to save formulas separately from a grid's
		 * ListGrid.getViewState','viewState can provide a UserFormula as part of the field
		 * definition, and may subsequently access the formula is updated via the
		 * ListGrid.formulaUpdated notification.
		 * Flags: IRW
		 */
		 userFormula?: UserFormula;
		 // ref="attr:ListGridField.userSummary"
		/**
		 * Summary definition for this field.
		 * 
		 * Advanced applications that wish to save summaries separately from a grid's
		 * ListGrid.getViewState','viewState can provide a UserSummary as part of the
		 * field definition, and may subsequently access the summary is updated via the
		 * ListGrid.summaryUpdated notification.
		 * Flags: IRW
		 */
		 userSummary?: UserSummary;
		 // ref="attr:ListGridField.validateOnChange"
		/**
		 * If set to true, any ListGridField.validators for this field will be run whenever
		 * the value of the field is changed.
		 * 
		 * Analogous to the FormItem.validateOnChange property.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: gridValidation
		 */
		 validateOnChange?: boolean;
		 // ref="attr:ListGridField.validators"
		/**
		 * Array of Validator objects for this field. When the user edits cells in
		 * this field, these validators will be applied to the edited value.
		 * Note: for databound listGrids, this property may be specified on the
		 * DataSourceField, enabling both client and server side validation.
		 * Flags: IRW, Group: gridValidation
		 */
		 validators?: Array<Validator> /* Array of Validator */;
		 // ref="attr:ListGridField.valueField"
		/**
		 * Specifies the ListGridField.optionDataSource field used to retrieve the stored
		 * values that are to be mapped to the display values (specified by
		 * ListGridField.displayField). Note that if this field is editable this will also
		 * be applied to this field's editors.
		 * Flags: IRW, Group: display_values
		 */
		 valueField?: String;
		 // ref="attr:ListGridField.valueIconHeight"
		/**
		 * Height for value icons for this listGrid field.
		 * Overrides ListGrid.valueIconSize, ListGrid.valueIconHeight, and
		 * ListGridField.valueIconSize.
		 * Flags: IRW, Group: imageColumns
		 */
		 valueIconHeight?: number;
		 // ref="attr:ListGridField.valueIconLeftPadding"
		/**
		 * How much padding should there be on the left of valueIcons for this field
		 * Overrides ListGrid.valueIconLeftPadding
		 * Flags: IRW, Group: imageColumns
		 */
		 valueIconLeftPadding?: number;
		 // ref="attr:ListGridField.valueIconOrientation"
		/**
		 * If we're showing a valueIcon for this field should it appear to the left or the right
		 * of the text? By default the icon will appear to the left of the textual value -
		 * set this to "right" to show the icon on the right of the text.
		 * Has no effect if ListGridField.showValueIconOnly is true
		 * Flags: IRW, Group: imageColumns
		 */
		 valueIconOrientation?: String;
		 // ref="attr:ListGridField.valueIconRightPadding"
		/**
		 * How much padding should there be on the right of valueIcons for this field
		 * Overrides ListGrid.valueIconRightPadding
		 * Flags: IRW, Group: imageColumns
		 */
		 valueIconRightPadding?: number;
		 // ref="attr:ListGridField.valueIcons"
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
		 valueIcons?: Map<String,String>;
		 // ref="attr:ListGridField.valueIconSize"
		/**
		 * Default width and height of value icons in this field.
		 * Takes precedence over valueIconWidth, valueIconHeight and valueIconSize specified at
		 * the ListGrid level.
		 * Can be overridden via ListGridField.valueIconWidth and {ListGridField.valueIconHeight}
		 * Flags: IRW, Group: imageColumns
		 */
		 valueIconSize?: number;
		 // ref="attr:ListGridField.valueIconWidth"
		/**
		 * Width for value icons for this listGrid field.
		 * Overrides ListGrid.valueIconSize, ListGrid.valueIconWidth, and
		 * ListGridField.valueIconSize.
		 * Flags: IRW, Group: imageColumns
		 */
		 valueIconWidth?: number;
		 // ref="attr:ListGridField.valueMap"
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
		 valueMap?: Object | Array<String> /* Object | Array of String */;
		 // ref="attr:ListGridField.width"
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
		 width?: Number | String;
		 // ref="attr:ListGridField.wrap"
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
		 wrap?: boolean | null /* Boolean */;

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
		 * @return {boolean | null} The change may be cancelled by returning false
		 */
		change?(form:DynamicForm, item:FormItem, value:any /* Any */, oldValue:any /* Any */): boolean | null /* Boolean */; 

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
		 * @param {Object} values - the current set of values for the form as a whole
		 */
		defaultDynamicValue?(item:FormItem, form:DynamicForm, values:Object): void; 

		/**  
		 * (Advanced)  Callback fired when the user first starts editing a cell.
		 * 
		 * This callback is typically used to establish dynamic default values via
		 * ListGrid.setEditValue or ListGrid.setEditValues.
		 * 
		 * 
		 * @param {ListGridRecord} record - record for the cell being edited. Will be null for a new, unsaved record.
		 * @param {any} value - value for the cell being edited
		 * @param {int} rowNum - row number for the cell
		 * @param {int} colNum - column number of the cell
		 * @param {ListGrid} grid - ListGrid to which this field belongs
		 */
		editorEnter?(record:ListGridRecord, value:any /* Any */, rowNum:int, colNum:int, grid:ListGrid): void; 

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
		 * @param {int} rowNum - row number for the cell
		 * @param {int} colNum - column number of the cell
		 * @param {ListGrid} grid - ListGrid to which this field belongs
		 * @return {boolean} Returning false from this method will cancel the default behavior                      (for example saving the row) and leave the editor visible and focus&#010                      in this edit cell.
		 */
		editorExit?(editCompletionEvent:EditCompletionEvent, record:ListGridRecord, newValue:any /* Any */, rowNum:int, colNum:int, grid:ListGrid): boolean; 

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
		 * @return {HTMLString} HTML to display in the cell
		 */
		formatCellValue?(value:any /* Any */, record:ListGridRecord, rowNum:number, colNum:number, grid:ListGrid): HTMLString; 

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
		 *  Field-level formatter for inactive content.
		 * 
		 * If present, this method will be invoked instead of ListGridField.formatCellValue in cases 
		 * where the grid is rendering non-interactive content outside. 
		 * See ListGrid.formatInactiveCellValue for more details.
		 * 
		 * 
		 * @param {any} value - raw value for the cell, from the record for the row
		 * @param {ListGridRecord} record - Record object for the cell. Note: If this is a new row that has not been saved, in an
		 * editable grid, it has no associated record object. In this case the edit values will
		 * be passed in as this parameter (see ListGrid.getEditValues)
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number for the cell.
		 * @param {ListGrid} grid - the ListGrid displaying the cell
		 * @return {HTMLString} HTML to display in the cell
		 */
		formatInactiveCellValue?(value:any /* Any */, record:ListGridRecord, rowNum:number, colNum:number, grid:ListGrid): HTMLString; 

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
		 * @param {Object} values - Field values for record being edited. Note that this will include the current edit values for fields that have not yet been saved.
		 * May be null, if editing a new record.
		 * @param {ListGridField} field - pointer to the listGridField
		 * @param {ListGrid} grid - pointer back to this ListGrid instance.
		 * @return {ValueMap} ValueMap for the field (or null if no valueMap required)
		 */
		getEditorValueMap?(values:Object, field:ListGridField, grid:ListGrid): ValueMap; 

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
		 * @return {String} Field title.
		 */
		getFieldTitle?(viewer:ListGrid, fieldNum:number): String; 

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
		 * @param {Array<Object>} groupSummaries - If this grid is grouped and ListGrid.showGridSummary is specified, this parameter contains an array of already-
		 * calculated summary values for each group in the grid. Each element in this array will
		 * be an object containing calculated summary values for each field in the grid, as well as
		 * a specified groupValue and groupName, allowing the developer to determine which group this
		 * summary value comes from
		 * @return {any} summary value to display.
		 */
		getGridSummary?(records:Array<ListGridRecord> /* Array of ListGridRecord */, field:ListGridField, groupSummaries?:Array<Object> /* Array of Object */): any /* Any */; 

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
		 * @param {Object} groupNode - object with specified groupValue and groupName for this group
		 * @return {any} summary value to display
		 */
		getGroupSummary?(records:Array<ListGridRecord> /* Array of ListGridRecord */, field:ListGridField, groupNode?:Object): any /* Any */; 

		/**  
		 *  Return the title that should be shown to the user for the group with the
		 * groupValue passed as a parameter.
		 * 
		 * Default title is the groupValue itself.
		 * 
		 * 
		 * @param {any} groupValue - the value from the group is created, the result of ListGridField.getGroupValue
		 * @param {GroupNode} groupNode - the node in the grid containing the group.
		 * @param {Object} field - Field object for which to get group value
		 * @param {String} fieldName - The name of the field
		 * @param {ListGrid} grid - the ListGrid displaying the cell
		 * @return {any} Group value to which this record belongs
		 */
		getGroupTitle?(groupValue:any /* Any */, groupNode:GroupNode, field:Object, fieldName:String, grid:ListGrid): any /* Any */; 

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
		 * @param {Object} field - Field object for which to get group value
		 * @param {String} fieldName - The name of the field
		 * @param {ListGrid} grid - the ListGrid displaying the cell
		 * @return {any} Group value to which this record belongs
		 */
		getGroupValue?(value:any /* Any */, record:ListGridRecord, field:Object, fieldName:String, grid:ListGrid): any /* Any */; 

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
		 * @return {HTMLString} HTML to show in the hover
		 */
		hoverHTML?(record:ListGridRecord, value:any /* Any */, rowNum:number, colNum:number, grid:ListGrid): HTMLString; 

		/**  
		 *  Method used to convert the value displayed in an editor for some cell in this field into
		 * a raw value for saving.
		 * Takes precedence over parseEditorValue defined at the grid level.
		 * 
		 * 
		 * @param {any} value - value displayed in the editor for the cell
		 * @param {Object} record - record object for the row being edited. May be null if this is a new row being added to the end of the list.
		 * @param {number} rowNum - row number for the cell
		 * @param {number} colNum - column number for the cell.
		 * @param {ListGrid} grid - A pointer to the ListGrid displaying the cell
		 * @return {any} raw value for the field derived from formatted value in editor
		 */
		parseEditorValue?(value:any /* Any */, record:Object, rowNum:number, colNum:number, grid:ListGrid /* ListGrid Instance */): any /* Any */; 

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
		 * @param {Object} value - value of the cell (after valueMap, etc. applied)
		 * @param {Object} rawValue - raw value of the cell (before valueMap, etc applied)
		 * @return {boolean} false to stop event bubbling
		 */
		recordDoubleClick?(viewer:ListGrid, record:ListGridRecord, recordNum:number, field:ListGridField, fieldNum:number, value:Object, rawValue:Object): boolean; 

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
		 * @param {Integer} fieldNum - the index of the field
		 * @return {boolean} whether the field should be shown
		 */
		showIf?(list:ListGrid, field:ListGridField, fieldNum:Integer): boolean; 

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
		 * @param {Object} recordObject - record to normalize
		 * @param {String} fieldName - name of the field on which sorting occurred
		 * @param {ListGrid} context - A pointer back to the list grid displaying this field will be available as the context argument. Note that you can also get a pointer
		 * to the field definition object by calling context.getField(fieldName)
		 * @return {any} normalized value for sorting
		 */
		sortNormalizer?(recordObject:Object, fieldName:String, context:ListGrid): any /* Any */; 

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

	export interface ListGridFieldStatic extends DBCFieldStatic {
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
		 // ref="attr:TreeNode.canAcceptDrop"
		/**
		 * (Read only, Advanced) Governs whether dragged data (typically other treeNodes) may be dropped over
		 * this node. Only has an effect if this node is displayed in a TreeGrid where
		 * TreeGrid.canAcceptDroppedRecords, TreeGrid.canReorderRecords or 
		 * TreeGrid.canReparentNodes is true.
		 * boolean - Null not allowed
		 * Flags: IRA
		 */
		 canAcceptDrop?: boolean;
		 // ref="attr:TreeNode.canDrag"
		/**
		 * (Read only, Advanced) Governs whether this node can be dragged. Only has an effect if this node is displayed in
		 * a TreeGrid where TreeGrid.canDragRecordsOut, TreeGrid.canReorderRecords
		 * or TreeGrid.canReparentNodes is true.
		 * boolean - Null not allowed
		 * Flags: IRA
		 */
		 canDrag?: boolean;
		 // ref="attr:TreeNode.children"
		/**
		 * For trees with the modelType "children", this property specifies the children of this
		 * TreeNode.
		 * 
		 * Note: the name of this property can be changed by setting Tree.childrenProperty
		 * Flags: IRW
		 */
		 children?: Array<TreeNode> /* List of TreeNode */;
		 // ref="attr:TreeNode.enabled"
		/**
		 * (Read only) Default property name denoting whether this record is enabled. Property name may be
		 * modified for some grid via ListGrid.recordEnabledProperty.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 enabled?: boolean;
		 // ref="attr:TreeNode.icon"
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
		 icon?: SCImgURL;
		 // ref="attr:TreeNode.id"
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
		 id?: String | Number;
		 // ref="attr:TreeNode.isFolder"
		/**
		 * (Read only) Set to true or a string that is not equal to (ignoring case)
		 * "false" to explicitly mark this node as a folder. See Tree.isFolder for
		 * a full description of how the Tree determines whether a node is a folder or not.
		 * 
		 * Note: the name of this property can be changed by setting Tree.isFolderProperty.
		 * Flags: IR
		 */
		 isFolder?: boolean | null | String /* Boolean | String */;
		 // ref="attr:TreeNode.name"
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
		 name?: String;
		 // ref="attr:TreeNode.parentId"
		/**
		 * (Read only) For trees with modelType:"parent", this property specifies the unique ID of this node's 
		 * parent node.
		 * The unique ID of a node, together with the unique ID of its parent is used by
		 * Tree.linkNodes to link a list of nodes into a tree.
		 * 
		 * Note: the name of this property can be changed by setting Tree.parentIdField.
		 * Flags: IR
		 */
		 parentId?: String | Number;
		 // ref="attr:TreeNode.showDropIcon"
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
		 showDropIcon?: boolean | null /* Boolean */;
		 // ref="attr:TreeNode.showOpenIcon"
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
		 showOpenIcon?: boolean | null /* Boolean */;
		 // ref="attr:TreeNode.showSelectedIcon"
		/**
		 * (Advanced) For folder nodes showing custom icons (set via TreeNode.icon),
		 * this property allows the developer to specify on a per-node basis whether a
		 * selected state icon should be displayed when the folder is open.
		 * Set node.showSelectedIcon to true to show the selected state
		 * icons, or false to suppress this.
		 * If not specified, this behavior is determined by TreeGrid.showCustomIconSelected
		 * for this node.
		 * You can change the name of this property by setting 
		 * TreeGrid.customIconSelectedProperty.
		 * Flags: IRWA, Group: treeIcons
		 */
		 showSelectedIcon?: boolean | null /* Boolean */;
		 // ref="attr:TreeNode.title"
		/**
		 * (Read only) The title of the node as it should appear next to the node icon in the Tree. If left
		 * unset, the value of TreeNode.name is used by default. See the description in
		 * Tree.getTitle for full details.
		 * 
		 * Note: the name of this property can be changed by setting Tree.titleProperty.
		 * Flags: IR
		 */
		 title?: HTMLString;
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
		 // ref="attr:AdvancedCriteria.strictSQLFiltering"
		/**
		 * (Advanced) When set to true, causes filtering using this criteria object to follow SQL99 behavior for 
		 * dealing with NULL values. See DataSource.strictSQLFiltering','this discussion for
		 * more detail.
		 * Flags: IRWA, Group: advancedFilter
		 */
		 strictSQLFiltering?: boolean | null /* Boolean */;
	} // AdvancedCriteria

	export interface AdvancedCriteriaStatic extends CriterionStatic {
	} // AdvancedCriteriaStatic


	/**
	 * A type of Record which represents an event to occur at a specific time, displayed
	 * within the calendar. 
	 */
	export interface CalendarEvent {
		 // ref="attr:CalendarEvent.backgroundColor"
		/**
		 * An optional background color for the body portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		 backgroundColor?: String;
		 // ref="attr:CalendarEvent.borderColor"
		/**
		 * An optional border color for the body portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		 borderColor?: String;
		 // ref="attr:CalendarEvent.canDrag"
		/**
		 * Optional boolean value controlling whether this event can be dragged with the mouse.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.canDragEventField. Only has an effect when 
		 * Calendar.canEditEvents','editing is enabled.
		 * 
		 * You can separately disallow drag-resize via CalendarEvent.canResize','canResize.
		 * Flags: IRW
		 */
		 canDrag?: boolean | null /* Boolean */;
		 // ref="attr:CalendarEvent.canEdit"
		/**
		 * Optional boolean value controlling the editability of this particular calendarEvent.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.canEditField.
		 * Flags: IRW
		 */
		 canEdit?: boolean | null /* Boolean */;
		 // ref="attr:CalendarEvent.canEditLane"
		/**
		 * Boolean indicating whether this event can be moved between lanes. Can also be set at the
		 * Calendar.canEditLane','calendar level.
		 * 
		 * The name of this field within the CalendarEvent can be changed via 
		 * Calendar.canEditLaneField.
		 * Flags: IRW
		 */
		 canEditLane?: boolean | null /* Boolean */;
		 // ref="attr:CalendarEvent.canEditSublane"
		/**
		 * Boolean indicating whether this event can be moved between lanes. Can also be set at the
		 * Calendar.canEditSublane','calendar level.
		 * 
		 * The name of this field within the CalendarEvent can be changed via 
		 * Calendar.canEditSublaneField.
		 * Flags: IRW
		 */
		 canEditSublane?: boolean | null /* Boolean */;
		 // ref="attr:CalendarEvent.canResize"
		/**
		 * Optional boolean value controlling whether this event can be drag-resized with the mouse.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.canResizeEventField.
		 * 
		 * Only has an effect if Calendar.canEditEvents','editing and 
		 * Calendar.canDragEvents','dragging are also enabled.
		 * Flags: IRW
		 */
		 canResize?: boolean | null /* Boolean */;
		 // ref="attr:CalendarEvent.description"
		/**
		 * String which represents the description of a CalendarEvent
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.descriptionField
		 * Flags: IRW
		 */
		 description?: String;
		 // ref="attr:CalendarEvent.duration"
		/**
		 * The duration of this event. May be specified instead of an 
		 * CalendarEvent.endDate','end date and implies that this is a "Period" type event. If
		 * set to zero, implies an "Instant" type event - an event with a start date but no length.
		 * Flags: IRW
		 */
		 duration?: Integer;
		 // ref="attr:CalendarEvent.durationUnit"
		/**
		 * When a CalendarEvent.duration','duration is set for this event, this is the unit of
		 * that duration. The default is minutes.
		 * Flags: IRW
		 */
		 durationUnit?: TimeUnit;
		 // ref="attr:CalendarEvent.endDate"
		/**
		 * Date object which represents the end date of a CalendarEvent
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.endDateField
		 * Flags: IRW
		 */
		 endDate?: Date;
		 // ref="attr:CalendarEvent.eventWindowStyle"
		/**
		 * (Read only) CSS style series to use for the draggable event window that represents this event. If
		 * specified, overrides Calendar.eventWindowStyle for this specific event.
		 * 
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.eventWindowStyleField
		 * Flags: IR
		 */
		 eventWindowStyle?: CSSStyleName;
		 // ref="attr:CalendarEvent.headerBackgroundColor"
		/**
		 * An optional background color for the header portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		 headerBackgroundColor?: String;
		 // ref="attr:CalendarEvent.headerBorderColor"
		/**
		 * An optional border color for the header portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		 headerBorderColor?: String;
		 // ref="attr:CalendarEvent.headerTextColor"
		/**
		 * An optional text color for the header portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		 headerTextColor?: String;
		 // ref="attr:CalendarEvent.lane"
		/**
		 * When in Timeline mode, or when Calendar.showDayLanes is true, a string that 
		 * represents the name of the Calendar.lanes','lane this CalendarEvent should 
		 * sit in. The name of this field within the CalendarEvent can be changed via
		 * Calendar.laneNameField.
		 * Flags: IRW
		 */
		 lane?: String;
		 // ref="attr:CalendarEvent.name"
		/**
		 * String which represents the name of a CalendarEvent
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.nameField
		 * Flags: IRW
		 */
		 name?: String;
		 // ref="attr:CalendarEvent.startDate"
		/**
		 * Date object which represents the start date of a CalendarEvent.
		 * The name of this field within the CalendarEvent can be changed via
		 * Calendar.startDateField
		 * Flags: IRW
		 */
		 startDate?: Date;
		 // ref="attr:CalendarEvent.styleName"
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
		 styleName?: CSSStyleName;
		 // ref="attr:CalendarEvent.sublane"
		/**
		 * When in Timeline mode, or when Calendar.showDayLanes is true, a string that 
		 * represents the name of the Lane.sublanes','sublane this CalendarEvent should 
		 * sit in. The name of this field within the CalendarEvent can be changed via
		 * Calendar.sublaneNameField.
		 * Flags: IRW
		 */
		 sublane?: String;
		 // ref="attr:CalendarEvent.textColor"
		/**
		 * An optional text color for the body portion of EventCanvas','canvases
		 * representing this event in the various CalendarView','calendar views.
		 * 
		 * Note that the recommended approach for styling events is to set a
		 * CalendarEvent.styleName','custom CSS style, which allows more complete customization
		 * of both header and body portions.
		 * Flags: IRW
		 */
		 textColor?: String;
	} // CalendarEvent

	export interface CalendarEventStatic {
	} // CalendarEventStatic


	/**
	 * An object representing one of the image segments displayed by a StretchImg. Each item of
	 * a StretchImg's StretchImg.items','items array is a StretchItem. 
	 */
	export interface StretchItem {
		 // ref="attr:StretchItem.height"
		/**
		 * (Read only) The height of the image. This can either be a number (for the number of pixels tall), the string
		 * "*" (remaining space, divided amongst all items that specify height:"*"), or the name of a property
		 * on the StretchImg component, such as "capSize" for the StretchImg's StretchImg.capSize','capSize.
		 * 
		 * NOTE: The height is only used if the StretchImg stacks its images vertically
		 * (StretchImg.vertical is true).
		 * Flags: IR
		 */
		 height?: number | String;
		 // ref="attr:StretchItem.name"
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
		 name?: String;
		 // ref="attr:StretchItem.src"
		/**
		 * (Read only) The URL of the media file for this StretchItem.
		 * Flags: IR
		 */
		 src?: SCImgURL;
		 // ref="attr:StretchItem.width"
		/**
		 * (Read only) The width of the image. This can either be a number (for the number of pixels wide), the string
		 * "*" (remaining space, divided amongst all items that specify width:"*"), or the name of a property
		 * on the StretchImg component, such as "capSize" for the StretchImg's StretchImg.capSize','capSize.
		 * 
		 * NOTE: The width is only used if the StretchImg stacks its images horizontally
		 * (StretchImg.vertical is false).
		 * Flags: IR
		 */
		 width?: number | String;
	} // StretchItem

	export interface StretchItemStatic {
	} // StretchItemStatic


	/**
	 * A record which specifies files for use with fileSource','FileSource Operations. 
	 */
	export interface FileSpec {
		 // ref="attr:FileSpec.fileFormat"
		/**
		 * The format of the file, e.g. "xml" or "js"
		 * Flags: IRW
		 */
		 fileFormat?: String;
		 // ref="attr:FileSpec.fileName"
		/**
		 * The name of the file, without any extension to indicate FileSpec.fileType','type or
		 * FileSpec.fileFormat','format.
		 * Flags: IRW
		 */
		 fileName?: String;
		 // ref="attr:FileSpec.fileType"
		/**
		 * The type of the file, e.g. "ds" for datasource, or "proj" for project.
		 * Flags: IRW
		 */
		 fileType?: String;
	} // FileSpec

	export interface FileSpecStatic {
	} // FileSpecStatic


	/**
	 * An object representing the start of a given Fiscal Year in the current locale.
	 * 
	 * See FiscalCalendar for more information on how FiscalYears are set up and used. 
	 */
	export interface FiscalYear {
		 // ref="attr:FiscalYear.date"
		/**
		 * The one-based day-number in the FiscalYear.month','specified month when this fiscal
		 * year starts.
		 * Flags: IRW
		 */
		 date?: Integer;
		 // ref="attr:FiscalYear.fiscalYear"
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
		 fiscalYear?: Integer;
		 // ref="attr:FiscalYear.month"
		/**
		 * The zero-based month-number when this fiscal year starts.
		 * Flags: IRW
		 */
		 month?: Integer;
		 // ref="attr:FiscalYear.year"
		/**
		 * The 4-digit calendar year when this fiscal year starts.
		 * Flags: IRW
		 */
		 year?: Integer;
	} // FiscalYear

	export interface FiscalYearStatic {
	} // FiscalYearStatic


	/**
	 * An object literal with a particular set of properties used to configure the display of
	 * and interaction with the rows of a DetailViewer. 
	 */
	export interface DetailViewerField extends DBCField {
		 // ref="attr:DetailViewerField.canExport"
		/**
		 * (Read only) Dictates whether the data in this field be exported. Explicitly set this
		 * to false to prevent exporting. Has no effect if the underlying 
		 * DataSourceField.canExport','dataSourceField is explicitly set to 
		 * canExport: false.
		 * Flags: IR
		 */
		 canExport?: boolean | null /* Boolean */;
		 // ref="attr:DetailViewerField.canHilite"
		/**
		 * Determines whether this field can be hilited. Set to false to prevent this
		 * field from appearing in HiliteEditor.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: hiliting
		 */
		 canHilite?: boolean;
		 // ref="attr:DetailViewerField.cellStyle"
		/**
		 * If specified, cells in this field will be rendered using this css className rather than
		 * DetailViewer.cellStyle
		 * Flags: IRW
		 */
		 cellStyle?: CSSStyleName;
		 // ref="attr:DetailViewerField.dataPath"
		/**
		 * (Read only, Advanced) dataPath property allows this field to display detail from nested data structures
		 * Flags: IRA
		 */
		 dataPath?: String;
		 // ref="attr:DetailViewerField.dateFormatter"
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
		 dateFormatter?: DateDisplayFormat;
		 // ref="attr:DetailViewerField.decimalPad"
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
		 decimalPad?: number;
		 // ref="attr:DetailViewerField.decimalPrecision"
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
		 decimalPrecision?: number;
		 // ref="attr:DetailViewerField.displayField"
		/**
		 * (Read only) If displayField is defined for the field then the DetailViewer will
		 * display the displayField attribute of records instead of the attribute
		 * given by the DetailViewerField.name of the field.
		 * Flags: IR
		 */
		 displayField?: String;
		 // ref="attr:DetailViewerField.emptyCellValue"
		/**
		 * (Read only) The value to display for a cell whose value is null or the empty
		 * string after applying formatCellValue and valueMap (if any).
		 * 
		 * This is the field-specific attribute. You may also set the emptyCellValue at the viewer
		 * level to define the emptyCellValue for all empty fields in the viewer.
		 * Flags: IR, Group: appearance
		 */
		 emptyCellValue?: HTMLString;
		 // ref="attr:DetailViewerField.escapeHTML"
		/**
		 * (Read only) By default HTML values in DetailViewer cells will be interpreted by the browser.
		 * Setting this flag to true will causes HTML characters to be escaped, meaning the
		 * raw value of the field (for example "&lt;b&gt;AAA&lt;/b&gt;") is displayed
		 * to the user rather than the interpreted HTML (for example "AAA")
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 escapeHTML?: boolean;
		 // ref="attr:DetailViewerField.exportFormat"
		/**
		 * (Read only) FormatString used during exports for numeric or date formatting. See
		 * DataSourceField.exportFormat.
		 * Flags: IR, Group: exportFormatting
		 */
		 exportFormat?: FormatString;
		 // ref="attr:DetailViewerField.exportRawValues"
		/**
		 * (Read only) Dictates whether the data in this field should be exported raw by
		 * DetailViewer.exportClientData','exportClientData(). If set to true for a
		 * field, the values in the field-formatters will not be executed for data in this field.
		 * Flags: IR
		 */
		 exportRawValues?: boolean | null /* Boolean */;
		 // ref="attr:DetailViewerField.format"
		/**
		 * (Read only) FormatString for numeric or date formatting. See DataSourceField.format.
		 * Flags: IR, Group: exportFormatting
		 */
		 format?: FormatString;
		 // ref="attr:DetailViewerField.height"
		/**
		 * (Read only) For DetailViewerField.type: "separator", this attribute specifies
		 * the height of the separator.
		 * Flags: IR
		 */
		 height?: Number;
		 // ref="attr:DetailViewerField.hiliteIconHeight"
		/**
		 * Height for hilite icons for this field.
		 * Overrides DetailViewer.hiliteIconSize, DetailViewer.hiliteIconHeight, and
		 * DetailViewerField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconHeight?: number;
		 // ref="attr:DetailViewerField.hiliteIconLeftPadding"
		/**
		 * How much padding should there be on the left of DetailViewer.hiliteIcons','hilite icons 
		 * for this field?
		 * Overrides DetailViewer.hiliteIconLeftPadding
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconLeftPadding?: number;
		 // ref="attr:DetailViewerField.hiliteIconPosition"
		/**
		 * (Read only) When DetailViewer.hiliteIcons are present, where the hilite icon will be placed 
		 * relative to the field value. See HiliteIconPosition.
		 * Overrides DetailViewer.hiliteIconPosition
		 * Flags: IR, Group: hiliting
		 */
		 hiliteIconPosition?: HiliteIconPosition;
		 // ref="attr:DetailViewerField.hiliteIconRightPadding"
		/**
		 * How much padding should there be on the right of DetailViewer.hiliteIcons','hilite icons 
		 * for this field?
		 * Overrides DetailViewer.hiliteIconRightPadding
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconRightPadding?: number;
		 // ref="attr:DetailViewerField.hiliteIconSize"
		/**
		 * Default width and height of DetailViewer.hiliteIcons','hilite icons in this field.
		 * Takes precedence over hiliteIconWidth, hiliteIconHeight and hiliteIconSize specified at
		 * the component level.
		 * Can be overridden via DetailViewerField.hiliteIconWidth','hiliteIconWidth and DetailViewerField.hiliteIconHeight','hiliteIconHeight
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconSize?: number;
		 // ref="attr:DetailViewerField.hiliteIconWidth"
		/**
		 * Width for hilite icons for this field.
		 * Overrides DetailViewer.hiliteIconSize, DetailViewer.hiliteIconWidth, and
		 * DetailViewerField.hiliteIconSize.
		 * Flags: IRW, Group: hiliting
		 */
		 hiliteIconWidth?: number;
		 // ref="attr:DetailViewerField.imageHeight"
		/**
		 * Height of image shown for fieldTypes image in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageHeight is "logoHeight",
		 * record.logoHeight will control the height of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		 imageHeight?: Integer | String;
		 // ref="attr:DetailViewerField.imageSize"
		/**
		 * Size of images shown for fieldTypes image in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * height. For example, if field.imageSize is "logoSize",
		 * record.logoSize will control the size of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		 imageSize?: Integer | String;
		 // ref="attr:DetailViewerField.imageURLPrefix"
		/**
		 * (Advanced) If this field has type set to "image"
		 * and the URL for the image displayed is not absolute, the path of the URL will be relative
		 * to this string
		 * Flags: IRWA, Group: imageColumns
		 */
		 imageURLPrefix?: String;
		 // ref="attr:DetailViewerField.imageWidth"
		/**
		 * Width of images shown for fieldTypes image in this field.
		 * 
		 * If set to a String, assumed to be a property on each record that specifies the image
		 * width. For example, if field.imageWidth is "logoWidth",
		 * record.logoWidth will control the width of the image.
		 * Flags: IRW, Group: imageColumns
		 */
		 imageWidth?: Integer | String;
		 // ref="attr:DetailViewerField.includeFrom"
		/**
		 * (Read only) Indicates this field's values come from another, related DataSource. 
		 * The individual field will inherit settings such as DetailViewerField.type','field.type
		 * and DetailViewerField.title','field.title from the related DataSource just like
		 * fields from the primary DataSource.
		 * Flags: IR
		 */
		 includeFrom?: String;
		 // ref="attr:DetailViewerField.linkText"
		/**
		 * The HTML to display for values of this field if the field type is set to "link". 
		 * 
		 * This property sets linkText that will be the same for all records. You can set linkText
		 * on a per-record basis via DetailViewerRecord.linkText.
		 * Flags: IRW
		 */
		 linkText?: String;
		 // ref="attr:DetailViewerField.linkTextProperty"
		/**
		 * Name of the property in a DetailViewerRecord that holds the HTML to display for values
		 * of this field if the field type is set to "link".
		 * Flags: IRW
		 */
		 linkTextProperty?: String;
		 // ref="attr:DetailViewerField.linkURLPrefix"
		/**
		 * (Advanced) If this field has type set to "link", setting this property will apply a
		 * standard prefix to the link URL when displaying values of this field.
		 * Flags: IRWA
		 */
		 linkURLPrefix?: String;
		 // ref="attr:DetailViewerField.linkURLSuffix"
		/**
		 * (Advanced) If this field has type set to "link", setting this property will apply a
		 * standard suffix to the link URL when displaying values of this field.
		 * Flags: IRWA
		 */
		 linkURLSuffix?: String;
		 // ref="attr:DetailViewerField.name"
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
		 name?: FieldName;
		 // ref="attr:DetailViewerField.printCellStyle"
		/**
		 * If specified, when generating print HTML for this detailViewer, 
		 * cells in this field will be rendered using this css className rather than
		 * DetailViewer.printCellStyle
		 * Flags: IRW
		 */
		 printCellStyle?: CSSStyleName;
		 // ref="attr:DetailViewerField.showFileInline"
		/**
		 * (Read only) For a field of type:"imageFile", indicates whether to stream the image and display it
		 * inline or to display the View and Download icons.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 showFileInline?: boolean;
		 // ref="attr:DetailViewerField.target"
		/**
		 * By default, clicking a link rendered by this item opens it in a new browser window. You 
		 * can alter this behavior by setting this property. The value of this property will be 
		 * passed as the value to the target attribute of the anchor tag used to render 
		 * the link. target is applicable only if the field type is set to "link".
		 * Flags: IRW
		 */
		 target?: String;
		 // ref="attr:DetailViewerField.timeFormatter"
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
		 timeFormatter?: TimeDisplayFormat;
		 // ref="attr:DetailViewerField.title"
		/**
		 * (Read only) The title of the field as displayed on the left-hand side. If left unspecified, the
		 * title of the field is derived by looking up the value of
		 * DetailViewer.fieldIdProperty on this field. So, by default, the title of a field
		 * is the value of its "name" property.
		 * Flags: IR
		 */
		 title?: HTMLString;
		 // ref="attr:DetailViewerField.type"
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
		 type?: String;
		 // ref="attr:DetailViewerField.value"
		/**
		 * (Read only) When a field specifies its DetailViewerField.type to be "header", the value of
		 * this attribute specifies the header text.
		 * Flags: IR
		 */
		 value?: HTMLString;
		 // ref="attr:DetailViewerField.valueMap"
		/**
		 * (Read only) A property list (or an expression that evaluates to a property list)
		 * specifying a mapping of internal values to display values for the field (row).
		 * Flags: IR
		 */
		 valueMap?: Object;

		/* Instance Method Overrides */
		/**  
		 *  Optional method to format the value to display for this field's cells. Takes precedence 
		 * over DetailViewer.formatCellValue for cells in this field.
		 * 
		 * @param {String} value - the raw value of the cell
		 * @param {DetailViewerRecord} record - the record being displayed
		 * @param {DetailViewerField} field - the field being displayed
		 * @param {DetailViewer} viewer - the detailViewer containing this field
		 */
		formatCellValue?(value:String, record:DetailViewerRecord, field:DetailViewerField, viewer:DetailViewer): void; 

		/**  
		 *  Optional method to return the CSS class for cells in this field. If specified, this method
		 * will be called from DetailViewer.getCellStyle, and should return a css class name.
		 * 
		 * 
		 * @param {String} value - actual value of this cell
		 * @param {Object} field - field object for this cell
		 * @param {Object} record - record object for this cell
		 * @param {DetailViewer} viewer - the viewer instance to which this cell belongs
		 * @return {CSSStyleName} CSS style for this cell
		 */
		getCellStyle?(value:String, field:Object, record:Object, viewer:DetailViewer): CSSStyleName; 

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
		 * @param {Array<DetailViewerRecord>} valueList - 
		 * @return {boolean} true to show the field, false to not show it.
		 */
		showIf?(viewer:DetailViewer, valueList:Array<DetailViewerRecord> /* List of DetailViewerRecord */): boolean; 

	} // DetailViewerField

	export interface DetailViewerFieldStatic extends DBCFieldStatic {
	} // DetailViewerFieldStatic


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
		 // ref="attr:TestFunctionResult.emptyTestValue"
		/**
		 * Set to true if the formula or summary definition passed in was empty.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: formulaFields
		 */
		 emptyTestValue?: boolean;
		 // ref="attr:TestFunctionResult.errorText"
		/**
		 * If the formula or summary format caused a JavaScript error, this contains the JavaScript error text.
		 * Flags: IRW, Group: formulaFields
		 */
		 errorText?: String;
		 // ref="attr:TestFunctionResult.failedExecution"
		/**
		 * Set to true if calling the formula or summary format resulted in a JavaScript Error.
		 * This would generally indicate a reference to non-existent data values. See 
		 * TestFunctionResult.failedGeneration for other types of failure.
		 * 
		 * When set to true, TestFunctionResult.errorText contains the exception message.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: formulaFields
		 */
		 failedExecution?: boolean;
		 // ref="attr:TestFunctionResult.failedGeneration"
		/**
		 * Set to true if there is a syntax error in the formula or summary being checked.
		 * 
		 * When set to true, TestFunctionResult.errorText contains the exception message.
		 * boolean - Null not allowed
		 * Flags: IRW, Group: formulaFields
		 */
		 failedGeneration?: boolean;
		 // ref="attr:TestFunctionResult.record"
		/**
		 * Set to the record that was used when testing the generated function. This is the record
		 * selected by FormulaBuilder.getTestRecord.
		 * Flags: IRW, Group: formulaFields
		 */
		 record?: Record;
		 // ref="attr:TestFunctionResult.result"
		/**
		 * When a formula or summary format is valid, result contains the result returned by the
		 * generated function when it was executed.
		 * Flags: IRW, Group: formulaFields
		 */
		 result?: String;
	} // TestFunctionResult

	export interface TestFunctionResultStatic {
	} // TestFunctionResultStatic


	/**
	 * Represents a field in a DataBoundComponent. 
	 */
	export interface DBCField {
	} // DBCField

	export interface DBCFieldStatic {
	} // DBCFieldStatic


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
		 // ref="attr:Tab.canAdaptWidth"
		/**
		 * (Read only) If enabled, the tab will collapse to show just its icon when showing the title would
		 * cause overflow of a containing TabBar. While collapsed, the tab will show its
		 * title on hover, unless an explicit hover has been specified such as by Tab.prompt.
		 * Flags: IR
		 */
		 canAdaptWidth?: boolean | null /* Boolean */;
		 // ref="attr:Tab.canClose"
		/**
		 * (Read only) Determines whether this tab should show a close icon allowing the user to dismiss the tab
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
		 * After the TabSet has been created, you can change a tab's canClose property
		 * by calling TabSet.setCanCloseTab.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canClose?: boolean;
		 // ref="attr:Tab.canEditTitle"
		/**
		 * (Read only) If specified, overrides the TabSet.canEditTabTitles setting, for this one tab
		 * only.
		 * 
		 * Note that the TabSet's TabSet.titleEditEvent','titleEditEvent must be set to a
		 * supported TabTitleEditEvent in order for users to be able to edit this tab's
		 * title.
		 * 
		 * After the TabSet has been created, you can change a tab's canEditTtile
		 * property by calling TabSet.setTabProperties.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 canEditTitle?: boolean;
		 // ref="attr:Tab.canReorder"
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
		 canReorder?: boolean | null /* Boolean */;
		 // ref="attr:Tab.closeIcon"
		/**
		 * (Read only) Custom src for the close icon for this tab to display if it is closeable.
		 * See Tab.canClose and TabSet.canCloseTabs.
		 * Flags: IR
		 */
		 closeIcon?: SCImgURL;
		 // ref="attr:Tab.closeIconSize"
		/**
		 * (Read only) Size of the Tab.closeIcon for this tab. If unspecified the icon will be sized
		 * according to TabSet.closeTabIconSize
		 * Flags: IR
		 */
		 closeIconSize?: number;
		 // ref="attr:Tab.disabled"
		/**
		 * (Read only) If specified, this tab will initially be rendered in a disabled state. To
		 * enable or disable tabs on the fly use the TabSet.enableTab, and
		 * TabSet.disableTab.
		 * methods.
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 disabled?: boolean;
		 // ref="attr:Tab.enableWhen"
		/**
		 * (Read only) Criteria to be evaluated to determine whether this Tab should be enabled. Re-evaluated
		 * whenever data in the Canvas.ruleScope','tab.ruleScope changes.
		 * 
		 * It works the same as Canvas.enableWhen
		 * Flags: IR, Group: ruleCriteria
		 */
		 enableWhen?: AdvancedCriteria;
		 // ref="attr:Tab.icon"
		/**
		 * (Read only) If specified, this tab will show an icon next to the tab title. 
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
		 * 
		 * After the TabSet has been created, you can change a tab's icon property by
		 * calling TabSet.setTabIcon.
		 * Flags: IR
		 */
		 icon?: SCImgURL;
		 // ref="attr:Tab.iconHeight"
		/**
		 * (Read only) If Tab.icon is specified, this property may be used to specify a height for the
		 * icon.
		 * 
		 * After the TabSet has been created, you can change a tab's iconHeight
		 * property by calling TabSet.setTabProperties.
		 * Flags: IR
		 */
		 iconHeight?: Integer;
		 // ref="attr:Tab.iconSize"
		/**
		 * (Read only) If Tab.icon is specified, this property may be used to specify a size for the icon.
		 * Per side sizing may be specified instead via Tab.iconWidth and Tab.iconHeight.
		 * 
		 * After the TabSet has been created, you can change a tab's iconSize property
		 * by calling TabSet.setTabProperties.
		 * Flags: IR
		 */
		 iconSize?: Integer;
		 // ref="attr:Tab.iconWidth"
		/**
		 * (Read only) If Tab.icon is specified, this property may be used to specify a width for the
		 * icon.
		 * 
		 * After the TabSet has been created, you can change a tab's iconWidth property
		 * by calling TabSet.setTabProperties.
		 * Flags: IR
		 */
		 iconWidth?: Integer;
		 // ref="attr:Tab.ID"
		/**
		 * (Read only) Optional ID for the tab, which can later be used to reference the tab.
		 * APIs requiring a reference to a tab will accept the tab's ID 
		 * [including TabSet.selectTab, TabSet.updateTab, TabSet.removeTab].
		 * The ID will also be passed to the TabSet.tabSelected and TabSet.tabDeselected
		 * handler functions, if specified.
		 * 
		 * Note that if you provide an ID, it must be globally unique. If you do not want a
		 * globally unique identifier, set Tab.name instead.
		 * Flags: IR
		 */
		 ID?: GlobalId;
		 // ref="attr:Tab.name"
		/**
		 * (Read only) Optional name for the tab, which can later be used to reference the tab.
		 * APIs requiring a reference to a tab will accept the tab's name
		 * [including TabSet.selectTab, TabSet.updateTab, TabSet.removeTab].
		 * This name will also be passed to the TabSet.tabSelected and TabSet.tabDeselected
		 * handler functions, if specified.
		 * 
		 * This identifier is requred to be locally unique to the TabSet and cannot be used to get
		 * a global reference to the Tab. If you want a global reference, set Tab.ID instead.
		 * Flags: IR
		 */
		 name?: TabName;
		 // ref="attr:Tab.pane"
		/**
		 * (Read only) Specifies the pane associated with this tab. You have two options for the value of
		 * the pane attribute:
		 * 
		 * ID - The global ID of an already created Canvas (or subclass).
		 * Canvas - A live instance of a Canvas (or subclass).
		 * 
		 * You can change the pane associated with a given tab after the TabSet has
		 * been created by calling TabSet.updateTab.
		 * Flags: IR
		 */
		 pane?: Canvas | string /* Canvas | ID */;
		 // ref="attr:Tab.paneMargin"
		/**
		 * (Read only) Space to leave around the pane within this Tab.
		 * If specified, this property takes precedence over TabSet.paneMargin
		 * Flags: IR
		 */
		 paneMargin?: int;
		 // ref="attr:Tab.pickerTitle"
		/**
		 * (Read only) If TabSet.showTabPicker is true for this TabSet, if set this property will determine
		 * the title of the picker menu item for this tab. If unset, Tab.title will be used
		 * instead.
		 * 
		 * After the TabSet has been created, you can change a tab's pickerTitle
		 * property by calling TabSet.setTabProperties.
		 * Flags: IR, Group: tabBarControls
		 */
		 pickerTitle?: HTMLString;
		 // ref="attr:Tab.prompt"
		/**
		 * (Read only) Specifies the prompt to be displayed when the mouse hovers over the tab.
		 * 
		 * After the TabSet has been created, you can change a tab's prompt property by
		 * calling TabSet.setTabProperties.
		 * Flags: IR
		 */
		 prompt?: HTMLString;
		 // ref="attr:Tab.title"
		/**
		 * (Read only) Specifies the title of the this tab. To change the title after the TabSet
		 * has been created, call TabSet.setTabTitle.
		 * Flags: IR
		 */
		 title?: HTMLString;
		 // ref="attr:Tab.width"
		/**
		 * (Read only) You can specify an explicit width for the tab using this property. Note that tabs
		 * automatically size to make room for the full title, but if you want to e.g. specify a
		 * uniform width for all tabs in a TabSet, this property enables you to do so.
		 * 
		 * After the TabSet has been created, you can change a tab's width
		 * property by calling TabSet.setTabProperties.
		 * Flags: IR
		 */
		 width?: number;

		/* Instance Method Overrides */
		/**  
		 *  Optional handler to fire when a tab is deselected. Returning false will cancel the
		 * new selection, leaving this tab selected. As with TabSet.tabSelected this
		 * method only fires when the tabset is drawn.
		 * 
		 * 
		 * @param {TabSet} tabSet - the tabSet containing the tab.
		 * @param {Integer} tabNum - the index of the deselected tab
		 * @param {Canvas} tabPane - the deselected tab's pane if set
		 * @param {String} ID - the ID of the deselected tab
		 * @param {Tab} tab - pointer to the tab being deselected
		 * @param {Tab} newTab - pointer to the new tab being selected
		 * @param {String} name - the name of the deselected tab
		 * @return {boolean} return <code>false</code> to cancel the tab selection
		 */
		tabDeselected?(tabSet:TabSet, tabNum:Integer, tabPane:Canvas, ID:String, tab:Tab, newTab:Tab, name:String): boolean; 

		/**  
		 *  Optional handler to fire when a tab is selected. As with TabSet.tabSelected this
		 * method only fires when the tabset is drawn.
		 * 
		 * 
		 * @param {TabSet} tabSet - the tabSet containing the tab.
		 * @param {Integer} tabNum - the index of the newly selected tab
		 * @param {Canvas} tabPane - the newly selected tab's pane if set
		 * @param {String} ID - the ID of the newly selected tab
		 * @param {Tab} tab - pointer to the selected tab object
		 * @param {String} name - the name of the newly selected tab
		 */
		tabSelected?(tabSet:TabSet, tabNum:Integer, tabPane:Canvas, ID:String, tab:Tab, name:String): void; 

	} // Tab

	export interface TabStatic {
	} // TabStatic


	/**
	 * An object representing a user-created and user-modifiable summary, which can be created and
	 * edited with a SummaryBuilder either directly or via the
	 * ListGrid.canAddSummaryFields behavior. 
	 */
	export interface UserSummary {
		 // ref="attr:UserSummary.summaryVars"
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
		 summaryVars?: Map<any, any> /* Map */;
		 // ref="attr:UserSummary.text"
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
		 text?: String;
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
		 // ref="attr:PaletteNode.canDuplicate"
		/**
		 * (Read only) If set to false, indicates that this node cannot be 
		 * EditProxy.useCopyPasteShortcuts','copy &amp; pasted, including disallowing calls to
		 * EditContext.makePaletteNode for EditNode','EditNodes created from this
		 * PaletteNode','PaletteNode.
		 * Flags: IR
		 */
		 canDuplicate?: boolean | null /* Boolean */;
		 // ref="attr:PaletteNode.defaults"
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
		 defaults?: Properties;
		 // ref="attr:PaletteNode.editNodeProperties"
		/**
		 * (Read only) Properties to be applied to the EditNode','editNode when created.
		 * Flags: IR
		 */
		 editNodeProperties?: EditNode /* EditNode Properties */;
		 // ref="attr:PaletteNode.editProxyProperties"
		/**
		 * (Read only) Properties to be applied to the 
		 * PaletteNode.liveObject','liveObject.Canvas.editProxy','editProxy when created.
		 * Flags: IR
		 */
		 editProxyProperties?: EditProxyProps /* EditProxy Properties */;
		 // ref="attr:PaletteNode.icon"
		/**
		 * (Read only) Icon for this paletteNode.
		 * Flags: IR
		 */
		 icon?: SCImgURL;
		 // ref="attr:PaletteNode.idPrefix"
		/**
		 * (Read only) Prefix used to create unique component ID. If not specified, PaletteNode.type
		 * is used.
		 * Flags: IR
		 */
		 idPrefix?: String;
		 // ref="attr:PaletteNode.liveObject"
		/**
		 * (Read only) For a paletteNode which should be a "singleton", that is, always provides the exact same
		 * object (==) rather than a dynamically created copy, provide the singleton object as
		 * liveObject.
		 * 
		 * Instead of dynamically creating an object from defaults, the liveObject will
		 * simply be assigned to EditNode.liveObject for the created editNode.
		 * Flags: IR
		 */
		 liveObject?: Object;
		 // ref="attr:PaletteNode.title"
		/**
		 * (Read only) Textual title for this paletteNode.
		 * Flags: IR
		 */
		 title?: String;
		 // ref="attr:PaletteNode.type"
		/**
		 * (Read only) SCClassName this paletteNode creates, for example, "ListGrid".
		 * Flags: IR
		 */
		 type?: SCClassName;
	} // PaletteNode

	export interface PaletteNodeStatic {
	} // PaletteNodeStatic


	/**
	 * Represents a sector on the gauge. 
	 */
	export interface GaugeSector {
		 endAngle?: Float /* float */;
		 fillColor?: CSSColor;
		 startAngle?: Float /* float */;
		 value?: Float /* float */;
	} // GaugeSector

	export interface GaugeSectorStatic {
	} // GaugeSectorStatic


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
	export interface FileLoader {
	} // FileLoader

	export interface FileLoaderStatic {
		 // ref="classAttr:FileLoader.addVersionToLoadTags"
		/**
		 * By default we add the version to the URL. Using this attribute you can turn this feature off.
		 * The parameter name used for this can be set via FileLoader.versionParamName','versionParamName.
		 * 
		 * Note that if you are using FileLoader.cacheISC','cacheISC() to pre-cache the Smartclient
		 * framework and in your application code use manual script tags to load the framework files
		 * you will have to call Page.setAddVersionToSkinCSS before loading the skin in order to get
		 * the skins stylesheet to have a cache-busting parameter appended to its url.
		 * 
		 * It is recommended to use FileLoader.loadISC','loadISC() if you plan on using
		 * FileLoader.cacheISC','cacheISC() for pre-caching as this will ensure that the loaded
		 * files and their urls will be consistent provided the FileLoader configuration is the same for
		 * both pages.
		 * boolean - Null not allowed
		 * Flags: RW
		 */
		 addVersionToLoadTags?: boolean;
		 // ref="classAttr:FileLoader.defaultModules"
		/**
		 * Default list of modules for
		 * FileLoader.loadISC/FileLoader.cacheISC to use if none are
		 * provided by the user.
		 * Flags: RW
		 */
		 defaultModules?: String;
		 // ref="classAttr:FileLoader.defaultSkin"
		/**
		 * Default skin for FileLoader.loadISC/FileLoader.cacheISC to
		 * use if one is not provided by the user.
		 * Flags: RW
		 */
		 defaultSkin?: String;
		 // ref="classAttr:FileLoader.modulesDir"
		/**
		 * (Read only) Path to module files (ISC_Core.js et al) relative to the isomorphicDir (see
		 * FileLoader','FileLoader overview).
		 * 
		 * Does not normally need to be set for SmartClient. If using Smart GWT, set to "modules/".
		 * Flags: IR
		 */
		 modulesDir?: String;
		 // ref="classAttr:FileLoader.versionParamName"
		/**
		 * Name of the query parameter to use for version-specific cache-busting. This will be used by
		 * FileLoader.addVersionToLoadTags.
		 * 
		 * Also remember that both FileLoader.loadISC','loadISC() and FileLoader.cacheISC','cacheISC()
		 * uses this so if you change it for one remember to change it for the other to not get inconsistencies
		 * in the url's generated by FileLoader.
		 * Flags: RW
		 */
		 versionParamName?: String;

	/* Methods */
		/**  
		 * 
		 * Caches a set of edge images derived from a base image.
		 * For example this code:
		 * 
		 * isc.FileLoader.cacheEdgeImages("/isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6.png");
		 * 
		 * Will cause the following images to be cached:
		 * 
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_TL.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_T.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_TR.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_L.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_R.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_BL.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_B.png
		 * /isomorphic/skins/SmartClient/images/edges/rounded/frame/A3B2CC/6_BR.png
		 * 
		 * 
		 * 
		 * @param {String} baseURLs - List of base image URLs from which position-specific edge names are to be derived. This can either be a
		 * string with comma separated baseURLs or an Array of baseURLs.
		 * @param {boolean} showCenter - If true, also causes the center image to be cached. Default is false.
		 * @param {String} edges - List of edges to load. If none specified, The following default list will be used:
		 * "TL,T,TR,L,R,BL,B,BR". The list of valid values is the
		 * set of extensions specified by
		 * EdgedCanvas.edgeImage. This can
		 * either be a string with comma separated edge extension or an
		 * Array of edge extensions.
		 * @param {String} colors - List of colors to cache. If not specified, no color is specified. The list of valid colors are those that you have
		 * specified as EdgedCanvas.edgeColor.
		 * This can either be a string with comma separated colors or an Array
		 * of colors.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified URLs has completed caching.
		 */
		cacheEdgeImages(baseURLs:String | Array<any> /* String | Array */, showCenter?:boolean | null /* Boolean */, edges?:String | Array<any> /* String | Array */, colors?:String | Array<any> /* String | Array */, onload?:String | Function): void; 

		/**  
		 * 
		 * Caches the specified list of files.
		 * 
		 * 
		 * @param {String} URLs - List of URLs to cache. These may point to image, js, or css files. This can either be a string with comma separated URLs or an
		 * Array of URLs.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified files has been cached.
		 * @param {String} type - Specifies the type of the files referenced by the URLs. Valid values are: "js", "css", and "image". If not specified, the type is auto-derived from
		 * the file extension. If a type cannot be derived, the cache directive
		 * for that specific URL will be ignored and an error will be logged to
		 * the Developer Console. You must specify a type if you use a
		 * non-standard extension for your file - for example if you use a JSP
		 * or a servlet with no extension to generate images.
		 */
		cacheFiles(URLs:String | Array<any> /* String | Array */, onload?:String | Function, type?:String): void; 

		/**  
		 * 
		 * Caches a set of state images derived from a base image. This is useful for caching a set of
		 * images for a single component. For example this code:
		 * 
		 * isc.FileLoader.cacheImgStates("/isomorphic/skins/SmartClient/images/TreeGrid/opener.png",
		 * "closed,opening,opened");
		 * 
		 * Will cause the following images to be cached:
		 * 
		 * /isomorphic/skins/SmartClient/images/TreeGrid/opener_closed.png
		 * /isomorphic/skins/SmartClient/images/TreeGrid/opener_opening.png
		 * /isomorphic/skins/SmartClient/images/TreeGrid/opener_opened.png
		 * 
		 * 
		 * 
		 * @param {String} baseURLs - List of base image URLs from which stateful names are to be derived. This can either be a
		 * string with comma separated baseURLs or an Array of baseURLs.
		 * @param {String} states - List of states to load. If none specified, The following default list will be used:
		 * "Down,Over,Selected,Selected_Down,Selected_Over". This can
		 * either be a string with comma separated states or an Array
		 * of states.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified URLs has completed caching.
		 */
		cacheImgStates(baseURLs:String | Array<any> /* String | Array */, states?:String | Array<any> /* String | Array */, onload?:String | Function): void; 

		/**  
		 * 
		 * Caches the specified SmartClient modules and skin. Calling this method is equivalent to using
		 * the loadISC JSP tag with cacheOnly="true".
		 * 
		 * 
		 * @param {String} skin - Name of the skin to load. If not specified, the skin specified by the default FileLoader.defaultSkin will be used.
		 * Instead of a skin name, you can specify a skinDir - this works just
		 * like Page.setSkinDir - the skin assumed to be a skinDir if
		 * there's at least one forward slash (/) in the name.
		 * @param {String | List} modules - List of modules to load. If not specified, the list of modules specified by the default
		 * FileLoader.defaultModules will be used. You
		 * can specify modules as "Core,Foundation" or as ["Core",
		 * "Foundation"]
		 * @param {String | Function} onload - Optional code to execute when all specified modules and skin have been cached.
		 */
		cacheISC(skin?:String, modules?:String | List, onload?:String | Function): void; 

		/**  
		 * 
		 * Caches the specified locale.
		 * 
		 * 
		 * @param {String} locale - Name of the locale to cache..
		 * @param {String | Function} onload - Optional code to execute when all specified locale has been cached..
		 */
		cacheLocale(locale?:String, onload?:String | Function): void; 

		/**  
		 * 
		 * Caches the specified SmartClient modules.
		 * 
		 * 
		 * @param {String} modules - List of SmartClient modules to cache. This can either be a string with comma separated module names or an Array of module
		 * names.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified modules has been cached.
		 */
		cacheModules(modules:String | Array<any> /* String | Array */, onload?:String | Function): void; 

		/**  
		 * 
		 * Caches a set of shadow images at various depths. For example this code:
		 * 
		 * isc.FileLoader.cacheShadows("/isomorphic/skins/SmartClient/images/shared/shadows", "5");
		 * 
		 * Will cause the following images to be cached:
		 * 
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_TL.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_T.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_TR.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_L.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_R.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_BL.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_B.png
		 * /isomorphic/skins/SmartClient/images/shared/shadows/ds5_BR.png
		 * 
		 * 
		 * 
		 * @param {String} baseDir - Base directory containing the shadow images.
		 * @param {String} depths - List of depths to load. These values corresponds to the Canvas attribute Canvas.shadowDepth. This can either be
		 * a string with comma separated depths or an Array of depths.
		 * @param {String} baseShadowImage - Name of the base shadow image from which list of URLs is generated. If not specified, this defaults to "ds.png".
		 * @param {String | Function} onload - Optional code to execute when the last of the specified URLs has completed caching.
		 */
		cacheShadows(baseDir:String, depths:String | Array<any> /* String | Array */, baseShadowImage?:String, onload?:String | Function): void; 

		/**  
		 * 
		 * Caches a set of state stretch images derived from a base image. This is useful for caching a set
		 * of images for a single component. For example this code:
		 * 
		 * isc.FileLoader.cacheStretchImgStates("/isomorphic/skins/SmartClient/images/button/button.png",
		 * "Down,Over");
		 * 
		 * Will cause the following images to be cached:
		 * 
		 * /isomorphic/skins/SmartClient/images/button/button_start.png
		 * /isomorphic/skins/SmartClient/images/button/button_stretch.png
		 * /isomorphic/skins/SmartClient/images/button/button_end.png
		 * /isomorphic/skins/SmartClient/images/button/button_Down_start.png
		 * /isomorphic/skins/SmartClient/images/button/button_Down_stretch.png
		 * /isomorphic/skins/SmartClient/images/button/button_Down_end.png
		 * /isomorphic/skins/SmartClient/images/button/button_Over_start.png
		 * /isomorphic/skins/SmartClient/images/button/button_Over_stretch.png
		 * /isomorphic/skins/SmartClient/images/button/button_Over_end.png
		 * 
		 * 
		 * 
		 * @param {String} baseURLs - List of base image URLs from which stateful names are to be derived. This can either be a
		 * string with comma separated baseURLs or an Array of baseURLs.
		 * @param {String} states - List of states to load. If none specified, The following default list will be used:
		 * "Down,Over,Selected,Selected_Down,Selected_Over". This can
		 * either be a string with comma separated states or an Array
		 * of states
		 * @param {String} pieces - List of StretchImg pieces to cache. If not specified, the following list will be used: "start,stretch,end". This can
		 * either be a string with comma separated piece names or an Array
		 * of piece names.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified URLs has completed caching.
		 */
		cacheStretchImgStates(baseURLs:String | Array<any> /* String | Array */, states?:String | Array<any> /* String | Array */, pieces?:String | Array<any> /* String | Array */, onload?:String | Function): void; 

		/**  
		 * 
		 * Loads the FileLoader into the page if it has not already been loaded. Whether the FileLoader
		 * is loaded or not, the callback fires.
		 * 
		 * The purpose of this method is to enable a canonical way of loading/caching code and assets.
		 * As follows:
		 * 
		 * isc.FileLoader.ensureLoaded(function () {
		 * isc.FileLoader.loadModules(["DataBinding", "SomethingElse"]);
		 * isc.FileLoader.loadJSFiles("/my/precious.js", function () {
		 * isc.Log.logWarn("All necessary assets loaded!");
		 * });
		 * });
		 * 
		 * 
		 * 
		 * @param {Callback} callback - Callback to fire when FileLoader has loaded.
		 */
		ensureLoaded(callback:Callback): void; 

		/**  
		 * 
		 * Loads the specified SmartClient modules and skin in defer mode. Calling this method is
		 * equivalent to using the loadISC JSP tag with defer="true".
		 * 
		 * 
		 * @param {String} skin - Name of the skin to load. If not specified, the skin specified by the default FileLoader.defaultSkin will be used.
		 * Instead of a skin name, you can specify a skinDir - this works just
		 * like Page.setSkinDir - the skin assumed to be a skinDir if
		 * there's at least one forward slash (/) in the name.
		 * @param {String} modules - List of modules to load. If not specified, the list of modules specified by the default
		 * FileLoader.defaultModules will be used. You
		 * can specify modules as e.g: "Core,Foundation" or as ["Core",
		 * "Foundation"]
		 * @param {String | Function} onload - Optional code to execute when all specified modules and skin have loaded.
		 */
		loadISC(skin?:String, modules?:String | Array<any> /* String | Array */, onload?:String | Function): void; 

		/**  
		 * 
		 * Loads the specified JS files into the context of the current page.
		 * 
		 * 
		 * @param {String} URLs - List of URLs pointing to JS files to load. This can either be a string with comma separated URLs or an Array of URLs.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified URLs has completed loading.
		 */
		loadJSFiles(URLs:String | Array<any> /* String | Array */, onload?:String | Function): void; 

		/**  
		 * 
		 * Loads the specified locale in defer mode.
		 * 
		 * 
		 * @param {String} locale - Name of the locale to load.
		 * @param {String | Function} onload - Optional code to execute when all specified locale has loaded.
		 */
		loadLocale(locale?:String, onload?:String | Function): void; 

		/**  
		 * 
		 * Loads the specified SmartClient modules into the context of the current page. 
		 * 
		 * This call is idempotent in that duplicate module loads are automatically suppressed (no
		 * request is issued) and your specified onload callback will still fire.
		 * 
		 * 
		 * @param {String} modules - List of SmartClient modules to load. This can either be a string with comma separated module names or an Array of module
		 * names.
		 * @param {String | Function} onload - Optional code to execute when the last of the specified modules has completed loading.
		 */
		loadModules(modules:String | Array<any> /* String | Array */, onload?:String | Function): void; 

	} // FileLoaderStatic


	/**
	 * Form item icon descriptor objects used by Form Items to specify the appearance and
	 * behavior of icons displayed after the item in the page flow. 
	 */
	export interface FormItemIcon {
		 // ref="attr:FormItemIcon.baseStyle"
		/**
		 * (Advanced) Base CSS style. If set, as the component changes state and/or is focused, suffixes
		 * will be added to the base style. Possible suffixes include "Over" if the user mouses
		 * over the icon and FormItemIcon.showOver','this.showOver is true, "Disabled" if
		 * the icon is disabled, and "Focused". In addition, if FormItemIcon.showRTL','showRTL
		 * is enabled, then an "RTL" suffix will be added.
		 * Flags: IRWA
		 */
		 baseStyle?: CSSStyleName;
		 // ref="attr:FormItemIcon.disabled"
		/**
		 * Whether this icon is disabled. Can be updated at runtime via the FormItem.setIconDisabled
		 * method. Note that if the formItem containing this icon is disabled, the icon will
		 * behave in a disabled manner regardless of the setting of the icon.disabled property.
		 * Flags: IRW, Group: appearance
		 */
		 disabled?: boolean | null /* Boolean */;
		 // ref="attr:FormItemIcon.disableOnReadOnly"
		/**
		 * (Advanced) If FormItem.canEdit is set to false, should this icon be disabled.
		 * If unset this is determined by FormItem.disableIconsOnReadOnly.
		 * Note that if FormItemIcon.neverDisable is set to true, the icons will
		 * be rendered enabled regardless of this setting and whether the item is editable.
		 * boolean - Null not allowed
		 * Flags: IRWA, Group: formIcons
		 */
		 disableOnReadOnly?: boolean;
		 // ref="attr:FormItemIcon.enableWhen"
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
		 enableWhen?: AdvancedCriteria;
		 // ref="attr:FormItemIcon.height"
		/**
		 * If set, this property determines the height of this icon in px.
		 * If unset the form item's iconHeight property will be used instead.
		 * Flags: IRW, Group: formIcons
		 */
		 height?: number;
		 // ref="attr:FormItemIcon.hspace"
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
		 hspace?: Integer;
		 // ref="attr:FormItemIcon.iconPlacement"
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
		 iconPlacement?: PickListItemIconPlacement;
		 // ref="attr:FormItemIcon.inline"
		/**
		 * (Read only) When set, this icon is rendered inside the FormItem.textBoxStyle','textBox area
		 * of the FormItem (where input occurs in a TextItem, TextAreaItem or
		 * ComboBoxItem) as opposed to as a trailing icon.
		 * 
		 * Use FormItemIcon.inlineIconAlign','inlineIconAlign to control alignment of the
		 * icon. Multiple icons can be inlined on both the left and right side of the
		 * textBox area. FormItemIcon.hspace','hspace is honored for spacing
		 * between multiple adjacent icons.
		 * 
		 * Inline icons are not supported in Internet Explorer 6, or when the FormItem
		 * is not a TextItem, TextAreaItem or ComboBoxItem.
		 * When unsupported, the icon will fall back to non-inline mode.
		 * 
		 * The FormItem.showPickerIcon','picker icon, if any, cannot be inlined.
		 * 
		 * As an alternative to displaying an image, an inline icon may display a string of
		 * HTML instead. See FormItemIcon.text.
		 * Flags: IR
		 */
		 inline?: boolean | null /* Boolean */;
		 // ref="attr:FormItemIcon.inlineIconAlign"
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
		 inlineIconAlign?: Alignment;
		 // ref="attr:FormItemIcon.name"
		/**
		 * (Read only) Identifier for this form item icon. This identifier (if set) should be unique
		 * within this form item and may be used to get a pointer to the icon object
		 * via FormItem.getIcon.
		 * Flags: IR
		 */
		 name?: Identifier;
		 // ref="attr:FormItemIcon.neverDisable"
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
		 * boolean - Null not allowed
		 * Flags: IRWA, Group: formIcons
		 */
		 neverDisable?: boolean;
		 // ref="attr:FormItemIcon.prompt"
		/**
		 * (Advanced) If set, this property will be displayed as a prompt (and tooltip text) for this form
		 * item icon.
		 * 
		 * If unset the form item's iconPrompt property will be used instead.
		 * Flags: IRWA, Group: formIcons
		 */
		 prompt?: HTMLString;
		 // ref="attr:FormItemIcon.showDisabledOnFocus"
		/**
		 * (Advanced) If show-on-focus behavior is enabled for this icon via FormItemIcon.showOnFocus
		 * or related properties at the item level, and this icon is marked as disabled,
		 * should it be shown on focus? If unset, will be derived from the
		 * FormItem.showDisabledIconsOnFocus or 
		 * FormItem.showDisabledPickerIconOnFocus settings.
		 * Flags: IRWA, Group: formIcons
		 */
		 showDisabledOnFocus?: boolean | null /* Boolean */;
		 // ref="attr:FormItemIcon.showFocused"
		/**
		 * (Advanced) Should this icon's image and/or FormItemIcon.baseStyle','baseStyle switch to the
		 * appropriate "Focused" value when the user puts focus on the form item or icon?
		 * Flags: IRWA, Group: formIcons
		 */
		 showFocused?: boolean | null /* Boolean */;
		 // ref="attr:FormItemIcon.showFocusedWithItem"
		/**
		 * (Advanced) If this icon will be updated to show focus (see FormItemIcon.showFocused, 
		 * FormItem.showFocusedIcons), this property governs whether the focused state should
		 * be shown when the item as a whole receives focus or just if the icon receives focus.
		 * If this property is unset, default behavior is to show focused state when the item
		 * receives focus.
		 * boolean - Null not allowed
		 * Flags: IRWA, Group: formIcons
		 */
		 showFocusedWithItem?: boolean;
		 // ref="attr:FormItemIcon.showOnFocus"
		/**
		 * (Advanced) Show this icon when its item gets focus, and hide it when it loses focus. If
		 * non-null, overrides the default behavior specified by 
		 * FormItem.showIconsOnFocus or FormItem.showPickerIconOnFocus, as
		 * appropriate. This feature allows space to be saved in the form for items not being
		 * interacted with, and helps draw attention to the item currently in focus.
		 * Flags: IRWA, Group: formIcons
		 */
		 showOnFocus?: boolean | null /* Boolean */;
		 // ref="attr:FormItemIcon.showOver"
		/**
		 * (Advanced) Should this icon's image and/or FormItemIcon.baseStyle','baseStyle switch to the
		 * appropriate "Over" value when the user rolls over or focuses on the icon?
		 * 
		 * Note if FormItem.showOver is true and FormItemIcon.showOverWhen
		 * is set to "textBox", this icon will show over state when the user rolls over the
		 * text box (or control table, if visible) for the item. This is most commonly used
		 * for FormItemIcon.inline','inline icons.
		 * boolean - Null not allowed
		 * Flags: IRWA, Group: formIcons
		 */
		 showOver?: boolean;
		 // ref="attr:FormItemIcon.showOverWhen"
		/**
		 * (Advanced) If FormItemIcon.showOver or FormItem.showOverIcons is true,
		 * this property may be set to customize when the 'over' styling is applied to
		 * the item. If unset, rollover styling will be applied when the user is over
		 * the icon only.
		 * Flags: IRWA, Group: formIcons
		 */
		 showOverWhen?: IconOverTrigger;
		 // ref="attr:FormItemIcon.showRTL"
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
		 showRTL?: boolean | null /* Boolean */;
		 // ref="attr:FormItemIcon.src"
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
		 src?: SCImgURL;
		 // ref="attr:FormItemIcon.tabIndex"
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
		 tabIndex?: int;
		 // ref="attr:FormItemIcon.text"
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
		 text?: HTMLString;
		 // ref="attr:FormItemIcon.visibleWhen"
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
		 visibleWhen?: AdvancedCriteria;
		 // ref="attr:FormItemIcon.width"
		/**
		 * If set, this property determines the width of this icon in px.
		 * If unset the form item's iconWidth property will be used instead.
		 * Flags: IRW, Group: formIcons
		 */
		 width?: number;

		/* Instance Method Overrides */
		/**  
		 *  Click handler for this icon.
		 * 
		 * 
		 * Return false to cancel this event. 
		 * 
		 * 
		 * If this event is not cancelled by the icon-level click handler, it may also
		 * be handled at the FormItem level via FormItem.pickerIconClick [for the
		 * picker icon only], and then FormItem.iconClick
		 * 
		 * 
		 * @param {DynamicForm} form - The Dynamic Form to which this icon's item belongs.
		 * @param {FormItem} item - The Form Item containing this icon
		 * @param {FormItemIcon} icon - A pointer to the form item icon clicked
		 * @return {boolean} Return false to cancel the event.
		 */
		click?(form:DynamicForm, item:FormItem, icon:FormItemIcon): boolean; 

		/**  
		 *  StringMethod action to fire when this icon has focus and receives a keypress
		 * event.
		 * If unset the form item's iconKeyPress method will be fired instead 
		 * (if specified).
		 * 
		 * @param {KeyName} keyName - Name of the key pressed
		 * @param {string} character - character produced by the keypress
		 * @param {DynamicForm} form - The Dynamic Form to which this icon's item belongs.
		 * @param {FormItem} item - The Form Item containing this icon
		 * @param {FormItemIcon} icon - A pointer to the form item icon
		 */
		keyPress?(keyName:KeyName, character:string /* Character */, form:DynamicForm, item:FormItem, icon:FormItemIcon): void; 

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
		 // ref="attr:TileRecord.tileConstructor"
		/**
		 * SmartClient Class to use to construct the tile for this particular record.
		 * Flags: IRW
		 */
		 tileConstructor?: String;
		 // ref="attr:TileRecord.tileProperties"
		/**
		 * Additional properties to be passed when creating a tile for this record.
		 * Flags: IRW
		 */
		 tileProperties?: CanvasProps /* Canvas Properties */;
	} // TileRecord

	export interface TileRecordStatic {
	} // TileRecordStatic


	/**
	 * Specification of an operator for use in filtering, for example "equals".
	 * Use with DataSource.addSearchOperator to define custom filtering behaviors for
	 * client-side filtering. 
	 */
	export interface Operator {
		 // ref="attr:Operator.editorType"
		/**
		 * (Read only) For an operator with Operator.valueType:"custom", indicates what kind of FormItem to use to
		 * provide a user interface for creating a valid Criterion. The default of
		 * null means an ordinary TextItem is fine.
		 * Flags: IR, Group: advancedFilter
		 */
		 editorType?: FormItemClassName;
		 // ref="attr:Operator.fieldTypes"
		/**
		 * (Read only) List of types that this Operator is valid for.
		 * 
		 * If omitted, the operator is assumed to be valid for all FieldTypes unless a list of 
		 * FieldTypes is passed to DataSource.addSearchOperator.
		 * Flags: IR, Group: advancedFilter
		 */
		 fieldTypes?: Array<FieldType> /* Array of FieldType */;
		 // ref="attr:Operator.hidden"
		/**
		 * (Read only) Whether this operator should be offered to users by default in interfaces such as the
		 * FilterBuilder. 
		 * 
		 * Setting hidden:true means the operator can be used in a programmatic search, for example,
		 * by calling ResultSet.setCriteria, but does not appear in the UI.
		 * boolean - Null not allowed
		 * Flags: IR, Group: advancedFilter
		 */
		 hidden?: boolean;
		 // ref="attr:Operator.ID"
		/**
		 * (Read only) Unique id for an operator, which appears within AdvancedCriteria as the
		 * Operator property.
		 * 
		 * A list of built-in identifiers is OperatorId','here.
		 * Flags: IR, Group: advancedFilter
		 */
		 ID?: OperatorId;
		 // ref="attr:Operator.requiresServer"
		/**
		 * (Read only) Whether this operator needs to be executed on the server side.
		 * 
		 * This implies that if a Criterion using this operator is either introduced into
		 * AdvancedCriteria','criteria or is changed, the server will need to be contacted to
		 * perform filtering.
		 * boolean - Null not allowed
		 * Flags: IR, Group: advancedFilter
		 */
		 requiresServer?: boolean;
		 // ref="attr:Operator.symbol"
		/**
		 * (Read only) The text use when using this operator as an 
		 * FormItem.allowExpressions','expression in a FormItem.
		 * Flags: IR, Group: advancedFilter
		 */
		 symbol?: String;
		 // ref="attr:Operator.textTitle"
		/**
		 * (Read only) User-visible title for this operator when used with text-based fields - eg, 
		 * "equals (match case)" rather than just "equals".
		 * 
		 * To simplify internationalization by separating titles from operator code, you can use
		 * specify Operator.textTitleProperty instead of this property.
		 * Flags: IR, Group: advancedFilter
		 */
		 textTitle?: String;
		 // ref="attr:Operator.textTitleProperty"
		/**
		 * (Read only) Name of a property on the Operators class that provides the title for this operator
		 * when used with text-based fields.
		 * Flags: IR, Group: advancedFilter
		 */
		 textTitleProperty?: Identifier;
		 // ref="attr:Operator.title"
		/**
		 * (Read only) User-visible title for this operator, such as "doesn't contain".
		 * 
		 * To simplify internationalization by separating titles from operator code, you can use
		 * specify Operator.titleProperty instead of this property.
		 * Flags: IR, Group: advancedFilter
		 */
		 title?: String;
		 // ref="attr:Operator.titleProperty"
		/**
		 * (Read only) Name of a property on the Operators class that provides the title for this operator.
		 * Flags: IR, Group: advancedFilter
		 */
		 titleProperty?: Identifier;
		 // ref="attr:Operator.valueType"
		/**
		 * (Read only) Indicates the kind of value expected in a Criterion that uses this operator.
		 * OperatorValueType lists possibilities.
		 * 
		 * The default of null is equivalent to "fieldType", indicating that
		 * Criterion.value is expected to contain a value of the same type as the field
		 * indicated by Criterion.fieldName.
		 * Flags: IR, Group: advancedFilter
		 */
		 valueType?: OperatorValueType;

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
		 * @return {Number} 0 if the criteria are equivalent, 1 if newCriterion is guaranteed more                      restrictive, and -1 if newCriterion is not guaranteed more restrictive
		 */
		compareCriteria?(newCriterion:Criterion, oldCriterion:Criterion): Number; 

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
		 * @param {Record} record - record being evaluated
		 * @param {any} fieldName - fieldName supplied as Criterion.fieldName, if applicable
		 * @param {Criterion} criterion - criterion definition
		 * @param {Operator} operator - operator definition
		 * @return {boolean} whether the field passes this criteria
		 */
		condition?(value:any /* Any */, record:Record, fieldName:any /* Any */, criterion:Criterion, operator:Operator): boolean; 

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
		 * @param {FieldName} fieldName - 
		 * @param {FormItem} item - 
		 * @return {Criterion} 
		 */
		getCriterion?(fieldName:FieldName, item:FormItem): Criterion; 

	} // Operator

	export interface OperatorStatic {
	} // OperatorStatic


	/**
	 * The ServerObject tells the ISC server how to find or create a server-side object involved in
	 * dmiOverview','DMI (Direct Method Invocation). 
	 * 
	 * A ServerObject declaration appears in the XML definition of a DataSource (for
	 * responding to DSRequests) or in an Application configuration file (.app.xml) for
	 * responding to RPCRequests.
	 * 
	 * NOTE: Please take note of the points made in 
	 * serverDataSourceImplementation','this discussion of caching and thread-safety
	 * issues in server-side DataSources. 
	 */
	export interface ServerObject {
		 // ref="attr:ServerObject.attributeName"
		/**
		 * (Read only) Specifies the name of the attribute by which to look up the DMI instance. This attribute is
		 * consulted only when the value of ServerObject.lookupStyle is "attribute".
		 * Flags: IR
		 */
		 attributeName?: String;
		 // ref="attr:ServerObject.attributeScope"
		/**
		 * (Read only) Specifies the scope in which the DMI instance is to be looked up. Valid values are: 
		 * "request", "session", and "application". If
		 * attributeScope is left out of the ServerObject definition, then
		 * all scopes are searched in the order in which they are listed above.
		 * 
		 * This attribute is consulted only when the value of ServerObject.lookupStyle is
		 * "attribute".
		 * Flags: IR
		 */
		 attributeScope?: "request" | "session" | "application";
		 // ref="attr:ServerObject.bean"
		/**
		 * (Read only) For use when ServerObject.lookupStyle is "spring" or "cdi", 
		 * id (name) of the bean to ask Spring (CDI) to create.
		 * Flags: IR
		 */
		 bean?: String;
		 // ref="attr:ServerObject.className"
		/**
		 * (Read only) Specifies the fully-qualified class name that provides the server-side endpoint of the DMI
		 * (ServerObject.lookupStyle:"new") or the class name of the factory that produces the
		 * DMI instance (ServerObject.lookupStyle:"factory").
		 * 
		 * This is one of the values that you need to pass to DMI.call to invoke the DMI from
		 * the client.
		 * 
		 * The value of this attribute is used for "new" and "factory"
		 * values of ServerObject.lookupStyle.
		 * 
		 * It is also used for "cdi" value of ServerObject.lookupStyle, to provide 
		 * class name of the bean to ask CDI to create.
		 * Flags: IR
		 */
		 className?: String;
		 // ref="attr:ServerObject.crudOnly"
		/**
		 * (Read only) For a ServerObject defined at the DataSource.serverObject','DataSource level, by 
		 * default we only allow it to intercept standard CRUD operations (ie, ordinary fetches, adds,
		 * updates and removes). To allow the ServerObject to intercept other types of operation - 
		 * custom operations, validations, etc - set this property to false. Note that ServerObjects 
		 * declared at the OperationBinding.serverObject','OperationBinding level always intercept
		 * that operation, whatever its type, and this property has no effect.
		 * 
		 * NOTE: If you are intercepting operations on the server because you wish to inspect
		 * them before deciding whether to process them with bespoke code or allow them to proceed 
		 * with normal processing, the way to invoke normal processing without causing any interference
		 * is:
		 * return dsRequest.execute();
		 * 
		 * boolean - Null not allowed
		 * Flags: IR
		 */
		 crudOnly?: boolean;
		 // ref="attr:ServerObject.dropExtraFields"
		/**
		 * (Read only) By default, for DMI DSResponses, DSResponse.data is filtered on the server to just the set
		 * of fields defined on the DataSource. This behavior can be overridden in several ways - see
		 * the overview in dmiOverview','DMI for details. The value of this attribute overrides
		 * DataSource.dropExtraFields.
		 * Flags: IR
		 */
		 dropExtraFields?: boolean | null /* Boolean */;
		 // ref="attr:ServerObject.ID"
		/**
		 * (Read only) You can optionally specify an ID on the ServerObject config block - in which case you can
		 * use that value as the "className" argument when calling DMI.call. This allows you to
		 * hide the name of the server-side class used as the factory or implementer of the DMI from
		 * the browser as a security precaution.
		 * Flags: IR
		 */
		 ID?: String;
		 // ref="attr:ServerObject.lookupStyle"
		/**
		 * (Read only) Specifies the mechanism for locating the class instance on which to invoke the method.
		 * Valid values are as follows:
		 * 
		 * "spring": For use with the <a href='http://springframework.com' target='_blank'>Spring framework</a>.
		 * ServerObject.bean contains the name of the bean to invoke. Which application context
		 * is used can be configured via web.xml (see the example web.xml in the SDK). See also
		 * serverInit for special concerns with framework initialization when using
		 * Spring.
		 * "cdi": For use with 
		 * <a href='http://docs.oracle.com/javaee/6/tutorial/doc/giwhb.html' target='_blank'>CDI (Contexts and Dependency Injection)</a>.
		 * Use ServerObject.bean to configure the name of the 
		 * bean to invoke or, alternatively, ServerObject.className to configure its class name.
		 * "new": A new instance of the class specified by ServerObject.className will be
		 * created and the DMI method will be invoked on that instance (unless the specified method is
		 * static, in which case no instance is created, but the class specified by
		 * ServerObject.className is still used).
		 * "factory": A custom factory provides the class instance on which the DMI method is to be
		 * invoked. In this case, ServerObject.className specifies the className of the factory
		 * that will provide the instance on which the DMI method is to be invoked. The class
		 * specified by ServerObject.className must provide exactly one method named
		 * create that must return the class instance on which you wish the DMI method to
		 * be invoked. Like the DMI methods, the create method can request a standard set of
		 * values as arguments. See dmiOverview','DMI for a list of available values.
		 * "attribute": The instance on which the DMI method is to be invoked is looked up in the
		 * scope defined by ServerObject.attributeScope via the attribute name specified in
		 * ServerObject.attributeName.
		 * 
		 * Flags: IR
		 */
		 lookupStyle?: "new" | "factory" | "attribute" | "spring" | "cdi";
		 // ref="attr:ServerObject.methodName"
		/**
		 * (Read only) Specifies the name of the method to call for operations using this ServerObject. This is 
		 * a DataSource-level default; you can override it for individual operations either by 
		 * specifying the OperationBinding.serverMethod attribute, or by declaring an 
		 * operation-level serverObject that specifies a different methodName (if you specify both 
		 * an operationBinding.serverMethod and an operation-level serverObject.methodName, the 
		 * latter takes precedence)
		 * Flags: IR
		 */
		 methodName?: String;
		 // ref="attr:ServerObject.targetXPath"
		/**
		 * (Read only) If set, the SmartClient server will use JXPath to call your server code. The
		 * JXPathContext (start point) will be the object arrived at by applying the 
		 * ServerObject.lookupStyle','lookupStyle and related ServerObject properties. The 
		 * intention of this property is to allow easier access to your existing Java objects 
		 * and reduce the need to write SmartClient-specific server code.
		 * Flags: IR
		 */
		 targetXPath?: String;
		 // ref="attr:ServerObject.visibleMethods"
		/**
		 * (Read only) When the ServerObject appears in a .app.xml file (for RPC DMI), this property
		 * specifies the list of methods on the ServerObject that are callable from the client. See
		 * the builtin.app.xml file in the /shared/app directory of the SDK for an example of a
		 * visibleMethods declaration block.
		 * Flags: IR
		 */
		 visibleMethods?: List;
	} // ServerObject

	export interface ServerObjectStatic {
	} // ServerObjectStatic


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
		 // ref="attr:DetailViewerRecord.linkText"
		/**
		 * The HTML to display in this record for fields with type set to "link". This overrides
		 * DetailViewerField.linkText.
		 * Flags: IRW
		 */
		 linkText?: String;
	} // DetailViewerRecord

	export interface DetailViewerRecordStatic {
	} // DetailViewerRecordStatic



}