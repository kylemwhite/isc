/// <reference path="../scripts/typings/isc/isc.index.d.ts" />

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

    let countryDS = (isc.DataSource as any).create({
        ID: "countryDS",
        dataFormat: "xml",
        recordXPath: "//country",
        fields: [
            { name: "countryCode", title: "Code", primaryKey: true, canEdit: "false" },
            { name: "countryName", title: "Country" },
            { name: "capital", title: "Capital" }
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

        , width: 550
        , height: 224
        , alternateRecordStyles: true
        , dataSource: countryDS
        , autoFetchData: true
        //, canEdit: true
        //, editEvent: "click"
    }) as Isc.ListGrid;


    grid.draw();

};