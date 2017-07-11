isc.ListGrid.create({
    ID: "countryList",
    height:224, width:380, alternateRecordStyles:true,
    autoFitWidthApproach:"both",
    wrapHeaderTitles:true,
    headerHeight:40,
    canSort:false,
    headerAutoFitEvent:"doubleClick",
    leaveHeaderMenuButtonSpace:false,
    data: countryData,
    fields:[
        {name:"countryCode", title:"Flag Thumbnail", cellAlign:"center",
         type:"image", imageURLPrefix:"flags/16/", imageURLSuffix:".png"},
        {name:"countryName", title:"Country of Origin"},
        {name:"capital", title:"Capital"},
        {name:"continent", title:"Continent"}
    ]
})

