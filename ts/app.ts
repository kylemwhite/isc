﻿/// <reference path="../scripts/typings/isc/isc.index.d.ts" />

// Test menu

function play() {

    let mi: Isc.MenuItem;

    let menu = isc.Menu.create(
        {
            items: [
                {
                    title: "hello"
                } 
            ] 
        } 
    );

    menu.setData;

    let bool: boolean;

    //bool = true;  // ok
    //bool = false; // ok
    //bool = undefined;  // error is strictNullChecks = true
    //bool = null;       // error is strictNullChecks = true

    //let Bool: Boolean;

    //Bool = true;   // ok
    //Bool = false;  // ok
    //Bool = undefined;
    //Bool = null;

    let strTest: String = "Hello World!";

    let ep = strTest.indexOf("W");

}

function play1() {

    let num: Number = 8;


    let bool: boolean | null = false;



    //num = null;



    //var bool = true;        // OK
    //console.log("typeof(bool) is " + typeof (bool));

    //bool = false;       // OK
    //console.log("typeof(bool) is " + typeof (bool))

    //bool = undefined;   // OK but typeof(bool) is now "undefined"
    //console.log("typeof(bool) is " + typeof (bool))

    //bool = null;        // OK, but typeof(bool) is now "object"
    //console.log("typeof(bool) is " + typeof (bool))

    //bool = "false";     // OK but it's not a boolean anymore.
    //console.log("bool is " + typeof (bool))


    //var Bool = new Boolean(true);

    //Bool = false;

    //Bool = undefined;

    //Bool = null;

    //Bool = "false";

   

}

// Sample app.
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number = 0;

    constructor(element: HTMLElement | null) {
        if (element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }
    }

    start() {
        if (this.timerToken == 0) {

            this.timerToken = setInterval(() => {
                this.span.innerHTML = new Date().toUTCString();
            }, 500);   

            isc.say("Timer started.");
        }
    }

    stop() {

        if (this.timerToken != 0) {
            clearTimeout(this.timerToken);
            this.timerToken = 0;
            isc.say("Timer stopped.");
        }
    }
}

window.onload = () => {
   // let contentDomElement = isc.AutoTest.getElement(isc.AutoTest.getLocator( 'content')); // This produces an Isc.DOMElement
    let strContentElement = document.getElementById('content');  // This is a JavaScript HTMLElement

    let contentDomElement = strContentElement as HTMLElement;

    var greeter = new Greeter(contentDomElement);

    
   // greeter.start();

    // Add a couple buttons to the 'content' DIV
    let startButton = isc.Button.create({
        title: "Start"
        , htmlElement: contentDomElement
        , click: (): boolean => {
            greeter.start();
            return true;
        }
    }); 
       
    let stopButton = isc.Button.create({
        title: "Stop"
        , htmlElement: contentDomElement
        , click: (): boolean => {
            greeter.stop();
            return true;
        }
    });

    // Add a label to the 'footer' DIV
    let footerEl = document.getElementById('footer');
    if (footerEl) {
        let labelVersion = isc.Label.create({
            contents: "Isomorphic SmartClient Version: <b>" + isc.versionNumber + "</b>"
            , htmlElement: footerEl as HTMLElement
            , autoDraw: true
            , width: 600
            // , border: "1px solid green"
        });
    }

    let viewState = "({ field: [{ name: 'countryCode' }, { name: 'countryName' }, { name: 'capital' }, { name: 'population' }, { name: 'independence', align:'right', title:'ind' }] })";

    // Using (isc.DataSource as any) because the operationBindings are declared as Array<OperationBinding> and OperationBinding has a bunch of required fields.
    // Need to generate it as Array<OperationBindingProps> or make everything optional in OperationBinding.
    let countryDS = (isc.DataSource as any).create({
        ID: "countryDS"
        , dataFormat: "xml"
        , recordXPath: "//country"        
        , fields: [
             { name: "countryCode", title: "Code", primaryKey: true, canEdit: "false" }
           , { name: "countryName", title: "Country" }
           , { name: "capital", title: "Capital" }
           , { name: "population" }
           , { name: "independence" }
        ]
        , operationBindings: [
            {
                operationType: "fetch",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_fetch.xml"
            },
            {
                operationType: "add",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_add.xml"
            },
            {
                operationType: "update",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_update.xml"
            },
            {
                operationType: "remove",
                dataURL: "[ISOMORPHIC]/system/reference/inlineExamples/dataIntegration/xml/responses/country_remove.xml"
            } 
        ]
    });


    let grid = isc.ListGrid.create({
        ID: "countryList"
        , autoDraw: false
        , viewState: viewState
        , width: "100%"
        , height: "100%"
        , alternateRecordStyles: true
        , dataSource: countryDS
        , autoFetchData: true
        //, border: "3px solid green"

        //, canEdit: true
        //, editEvent: "click"
    }) as Isc.ListGrid;

    const tabSet = isc.TabSet.create({        
       //  tabBarPosition: "top"
         canReorderTabs: true
        , paneMargin: 15
        //, styleName: "top-margin-for-tabs"
        , width: "100%"
        , height: 300
        //, border:"1px solid green"
    });

    //tabSet.setProperty("margin", "5px 30px 20px 10px");
    if (tabSet !== undefined) {
        let asdf = tabSet.adaptiveHeightPriority;

        if (tabSet.addTab) {
            tabSet.addTab({
                pane: grid
                , title: "Country Data"
            } as Isc.Tab);
        }
    }

    let portletLayout: Isc.PortalLayout;

    portletLayout = isc.PortalLayout.create({
        ID: 'dashboardPortalLayout'
        , autoDraw: false
       // , border: '3px solid blue'
        , height: '100%'
        , width: '100%'
        , showColumnMenus: false
        , numColumns: 1
        , animateTime: 1000
        , portletsChanged: function () { console.log("Portlets Changed"); }
        , canResizePortlets: true
    });


    portletLayout.addPortlet(isc.Portlet.create({
        title: "Portlet 1"
        , width: '50%'
        , canDragReposition: false
        , autoDraw: false
        , showMaximizeButton: false
        , showMinimizeButton: true
        , showResizer: false
        , showCloseButton: false
    } as Isc.PortletProps), 0, 0, 0);

    portletLayout.addPortlet(isc.Portlet.create({
        title: "Portlet 2"
        , width: '50%'
        , canDragReposition: false
        , autoDraw: false
        , showMaximizeButton: false
        , showMinimizeButton: false
        , showResizer: false
        , showCloseButton: false
    }), 0, 0, 1);

    portletLayout.addPortlet(isc.Portlet.create({
        title: "Portlet 3"
        , canDragReposition: false
        , autoDraw: false
        , showMaximizeButton: false
        , showMinimizeButton: true
        , showResizer: false
        , showCloseButton: false
    }), 0, 1, 0);

    tabSet.addTab({
        pane: portletLayout
        , title: "Portlets"
        , canClose: false
        , icon: "KMW_16x16.png"
    });



    let layout = isc.VLayout.create({
        htmlElement: contentDomElement
        , height: 600
        , width: "100%"
        , members: [tabSet]
      //  , border: "2px solid blue"
        , padding: 5
        , margin: 10
    });


};