// --------------------------------
// Simple snap to

isc.Canvas.create({
    ID:"snapContainer", 
    height: 300, width: 400,
    minHeight:280, minWidth:280,
	showEdges:true,
    edgeImage:"edges/custom/sharpframe_10.png",
    edgeSize:10,
    edgeMarginSize:10,
    overflow:"hidden",
	canDragResize: true,
	children: [
        isc.Label.create({
            ID:"label1", 
            height: 80, width: 80,
            contents: "Top Left",
            align: "center",
            backgroundColor: "#FFAAAA",
            border: "1px solid black",
            snapTo:"TL"
        }),
        
        isc.Label.create({
            ID:"label2", 
            height: 80, width: 80,
            contents: "Top Right",
            align: "center",
            backgroundColor: "#BEC9FE",
            border: "1px solid black",
            snapTo:"TR"
        }),
        
        isc.Label.create({
            ID: "label3", 
            height: 80, width: 80,
            contents: "Bottom Left",
            align: "center",
            backgroundColor: "#D8D5D6",
            border: "1px solid black",
            snapTo:"BL"
        }),
        
        isc.Label.create({
            ID: "label4", 
            height: 80, width: 80,
            contents: "Bottom Right",
            align: "center",
            backgroundColor: "#F8BFFB",
            border: "1px solid black",
            snapTo:"BR"
        }),
        
        isc.Label.create({
            ID: "label5", 
            height: 80, width: 80,
            contents: "Left",
            align: "center",
            backgroundColor: "#CCFFCC",
            border: "1px solid black",
            snapTo:"L"
        }),
        
        isc.Label.create({
            ID: "label6", 
            height: 80, width: 80,
            contents: "Right",
            align: "center",
            backgroundColor: "#AB5654",
            border: "1px solid black",
            snapTo:"R"
        }),
        
        isc.Label.create({
            ID: "label7", 
            height: 80, width: 80,
            contents: "Bottom",
            align: "center",
            backgroundColor: "#DCEFEF",
            border: "1px solid black",
            snapTo:"B"
        }),
        
        isc.Label.create({
            ID: "label8", 
            height: 80, width: 80,
            contents: "Top",
            align: "center",
            backgroundColor: "#FFCC99",
            border: "1px solid black",
            snapTo:"T"
        }),
        
        isc.Label.create({
            ID: "label9", 
            height: 80, width: 80,
            contents: "Center",
            align: "center",
            backgroundColor: "#FFFF99",
            border: "1px solid black",
            snapTo:"C"
        })
	]
});

// --------------------------------
// Snap to with fixed pixel offsets

isc.Canvas.create({
    ID:"offsetContainer", 
    height: 300, width: 400,
    minHeight:280, minWidth:280,    
	showEdges:true,
    edgeImage:"edges/custom/sharpframe_10.png",
    edgeSize:10,
    edgeMarginSize:10,
    overflow:"hidden",
    showHover:true,
    prompt:"Snap offsets specified",
	canDragResize: true,
	children: [
        isc.Label.create({
            ID:"label1a", 
            height: 80, width: 80,
            contents: "Top Left",
            align: "center",
            backgroundColor: "#FFAAAA",
            border: "1px solid black",
            snapTo:"TL",
            snapOffsetTop: 10,
            snapOffsetLeft: 10
        }),
        
        isc.Label.create({
            ID:"label2a", 
            height: 80, width: 80,
            contents: "Top Right",
            align: "center",
            backgroundColor: "#BEC9FE",
            border: "1px solid black",
            snapTo:"TR",
            snapOffsetTop:10,
            snapOffsetLeft:-10
        }),
        
        isc.Label.create({
            ID: "label3a", 
            height: 80, width: 80,
            contents: "Bottom Left",
            align: "center",
            backgroundColor: "#D8D5D6",
            border: "1px solid black",
            snapTo:"BL",
            snapOffsetLeft: 10,
            snapOffsetTop: -10
        }),
        
        isc.Label.create({
            ID: "label4a", 
            height: 80, width: 80,
            contents: "Left",
            align: "center",
            backgroundColor: "#CCFFCC",
            border: "1px solid black",
            snapTo:"L",
            snapOffsetLeft: 10
        }),
        
        isc.Label.create({
            ID: "label5a", 
            height: 80, width: 80,
            contents: "Right",
            align:"center",
            backgroundColor: "#AB5654",
            border: "1px solid black",
            snapTo: "R",
            snapOffsetLeft: -10
        }),
        
        isc.Label.create({
            ID: "label6a", 
            height: 80, width: 80,
            contents: "Bottom",
            align: "center",
            backgroundColor: "#DCEFEF",
            border: "1px solid black",
            snapTo:"B",
            snapOffsetTop: -10
        }),
        
        isc.Label.create({
            ID: "label7a", 
            height: 80, width: 80,
            contents: "Top",
            showHover: true,
            prompt: "SnapOffsetTop using percentage",
            align: "center",
            backgroundColor: "#FFCC99",
            border: "1px solid black",
            snapTo:"T",
            snapOffsetTop: 10
        }),
        
        isc.Label.create({
            ID: "label8a", 
            height: 80, width: 80,
            contents: "Bottom Right",
            align: "center",
            backgroundColor: "#F8BFFB",
            border: "1px solid black",
            snapTo:"BR",
            snapOffsetTop: -10,
            snapOffsetLeft: -10
        })
	]
});

isc.LayoutSpacer.create({
ID: "spacer",
width: 100
});

isc.HLayout.create({
ID:	"controlLayout",
membersMargin: 20,
height: 800, width: 1000,
members: [
	snapContainer,
	spacer,
	offsetContainer
	]
});