isc.IButton.create({
    ID: "exportButton",
    title: "Do Custom Export",
    left: 20, top: 20,
    autoFit: true,
    click : function () {
       supplyItemExport.exportData(null, { operationId: "customExport" });
    }
});

