/// <reference path="../scripts/typings/isc/isc.index.d.ts" />

// Test menu

function play() {

    let menu = isc.Menu.create(
        {
            items: [{
                title: "hello"
            }]
        });

    menu.setData

}

// Sample app.
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number = 0;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
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
    var el = document.getElementById('content');
    var greeter = new Greeter(el);

    
   // greeter.start();

    // Add a couple buttons to the 'content' DIV
    let startButton = isc.Button.create({
        title: "Start"
        , htmlElement: 'content'
        , click: (): boolean => {
            greeter.start();
            return true;
        }
    }); 
       
    let stopButton = isc.Button.create({
        title: "Stop"
        , htmlElement: 'content'
        , click: (): boolean => {
            greeter.stop();
            return true;
        }
    });

    // Add a label to the 'footer' DIV
    let labelVersion = isc.Label.create({
        contents: "Isomorphic SmartClient Version: <b>" + isc.versionNumber + "</b>"
        , htmlElement: 'footer'
        , autoDraw: true
        , width: 600
       // , border: "1px solid green"
    });

    let viewState = "({ field: [{ name: 'countryCode' }, { name: 'countryName' }, { name: 'capital' }, { name: 'population' }, { name: 'independence', align:'right', title:'pop' }] })";
    let countryDS = (isc.DataSource as any).create({
        ID: "countryDS",
        dataFormat: "xml",
        recordXPath: "//country",
        viewState: viewState,
        fields: [
            { name: "countryCode", title: "Code", primaryKey: true, canEdit: "false" },
            { name: "countryName", title: "Country" },
            { name: "capital", title: "Capital" },
            { name: "population" }, 
            { name: "independence" }
        ]
        ,operationBindings: [
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

    //let countryDS: any;

    let grid = (isc.ListGrid as any).create({
        ID: "countryList"
        , autoDraw: false
        , width: "100%"
        , height: "100%"
        , alternateRecordStyles: true
        , dataSource: countryDS
        , autoFetchData: true
        //, border: "3px solid green"

        //, canEdit: true
        //, editEvent: "click"
    }) as Isc.ListGrid;

    let tabSet = isc.TabSet.create({        
       //  tabBarPosition: "top"
         canReorderTabs: true
        , paneMargin: 15
        //, styleName: "top-margin-for-tabs"
        , width: "100%"
        , height: 300
        //, border:"1px solid green"
    });

    //tabSet.setProperty("margin", "5px 30px 20px 10px");


    tabSet.addTab({
        pane: grid
        , title: "Country Data"
    });

    let portletLayout = isc.PortalLayout.create({
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
    }), 0, 0, 0);

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
        htmlElement: "content"
        , height: 600
        , width: "100%"
        , members: [tabSet]
      //  , border: "2px solid blue"
        , padding: 5
        , margin: 10
    });


};