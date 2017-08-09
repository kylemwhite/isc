/// <reference path="../scripts/typings/isc/isc.index.d.ts" />
"use strict";
// Test menu
function play() {
    var menu = isc.Menu.create({
        items: [{
                title: "hello"
            }]
    });
    menu.setData;
}
// Sample app.
var Greeter = (function () {
    function Greeter(element) {
        this.timerToken = 0;
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        if (this.timerToken == 0) {
            this.timerToken = setInterval(function () {
                _this.span.innerHTML = new Date().toUTCString();
            }, 500);
            isc.say("Timer started.");
        }
    };
    Greeter.prototype.stop = function () {
        if (this.timerToken != 0) {
            clearTimeout(this.timerToken);
            this.timerToken = 0;
            isc.say("Timer stopped.");
        }
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    // greeter.start();
    // Add a couple buttons to the 'content' DIV
    var startButton = isc.Button.create({
        title: "Start",
        htmlElement: 'content',
        click: function () {
            greeter.start();
            return true;
        }
    });
    var stopButton = isc.Button.create({
        title: "Stop",
        htmlElement: 'content',
        click: function () {
            greeter.stop();
            return true;
        }
    });
    // Add a label to the 'footer' DIV
    var labelVersion = isc.Label.create({
        contents: "Isomorphic SmartClient Version: <b>" + isc.versionNumber + "</b>",
        htmlElement: 'footer',
        autoDraw: true,
        width: 600
    });
    var viewState = "({ field: [{ name: 'countryCode' }, { name: 'countryName' }, { name: 'capital' }, { name: 'population' }, { name: 'independence', align:'right', title:'pop' }] })";
    var countryDS = isc.DataSource.create({
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
        ],
        operationBindings: [
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
    var grid = isc.ListGrid.create({
        ID: "countryList",
        autoDraw: false,
        width: "100%",
        height: "100%",
        alternateRecordStyles: true,
        dataSource: countryDS,
        autoFetchData: true
    });
    var tabSet = isc.TabSet.create({
        //  tabBarPosition: "top"
        canReorderTabs: true,
        paneMargin: 15,
        width: "100%",
        height: 300
    });
    //tabSet.setProperty("margin", "5px 30px 20px 10px");
    tabSet.addTab({
        pane: grid,
        title: "Country Data"
    });
    var portletLayout = isc.PortalLayout.create({
        ID: 'dashboardPortalLayout',
        autoDraw: false,
        height: '100%',
        width: '100%',
        showColumnMenus: false,
        numColumns: 1,
        animateTime: 1000,
        portletsChanged: function () { console.log("Portlets Changed"); },
        canResizePortlets: true
    });
    portletLayout.addPortlet(isc.Portlet.create({
        title: "Portlet 1",
        width: '50%',
        canDragReposition: false,
        autoDraw: false,
        showMaximizeButton: false,
        showMinimizeButton: true,
        showResizer: false,
        showCloseButton: false
    }), 0, 0, 0);
    portletLayout.addPortlet(isc.Portlet.create({
        title: "Portlet 2",
        width: '50%',
        canDragReposition: false,
        autoDraw: false,
        showMaximizeButton: false,
        showMinimizeButton: false,
        showResizer: false,
        showCloseButton: false
    }), 0, 0, 1);
    portletLayout.addPortlet(isc.Portlet.create({
        title: "Portlet 3",
        canDragReposition: false,
        autoDraw: false,
        showMaximizeButton: false,
        showMinimizeButton: true,
        showResizer: false,
        showCloseButton: false
    }), 0, 1, 0);
    tabSet.addTab({
        pane: portletLayout,
        title: "Portlets",
        canClose: false,
        icon: "KMW_16x16.png"
    });
    var layout = isc.VLayout.create({
        htmlElement: "content",
        height: 600,
        width: "100%",
        members: [tabSet],
        padding: 5,
        margin: 10
    });
};
