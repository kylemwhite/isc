isc.DynamicForm.create({
    top: 15,
    ID: "timeForm",
    wrapItemTitles: false,
    fields: [
        {name: "textTime", title: "Time #1", type: "time"},
        {name: "pickTime", title: "Time #2", type: "time",
         minuteIncrement: 15,
         useTextField: false}
    ]
});

isc.Button.create({
    top: 100,
    width: 125,
    title: "Show Time Values",
    getTime: function (itemName) {
        var item = timeForm.getItem(itemName);
        var inputTime = item.getValue();
        return isc.Time.toTime(inputTime);
    },
    click: function () {
        isc.say("Time #1: " + this.getTime("textTime") + "<br>" + 
                "Time #2: " + this.getTime("pickTime"));
    }
});
