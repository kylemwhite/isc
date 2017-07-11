isc.ListGrid.create({
    ID: "categoryList",
    width:850, height:300, 
    alternateRecordStyles:true,
    dataSource: supplyCategory,
    autoFetchData: true,
    canExpandRecords: true,
    expansionMode: "related",
    detailDS:"supplyItem",
    expansionRelatedProperties: {
        border: "5px solid #eff9ff",
        padding: 1,
        backgroundColor: "#cccccc"
    }
});

