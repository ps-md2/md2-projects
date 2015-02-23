define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "MyLocationAction",
        
        execute: function() {
            
            var widget085 = this.$.widgetRegistry.getWidget("DetectLocationBtn");
            var action086 = this.$.actionFactory.getLocationAction("myCity","addressProvider","myStreet",
            "addressProvider","myStreetNo","addressProvider","myPostalCode",
            "addressProvider","myCountry","addressProvider",
            "myLatitude","myLongitude","addressProvider","addressProvider"); 
            this.$.eventRegistry.get("widget/onClick").registerAction(widget085, action086);
            
        }
        
    });
});
