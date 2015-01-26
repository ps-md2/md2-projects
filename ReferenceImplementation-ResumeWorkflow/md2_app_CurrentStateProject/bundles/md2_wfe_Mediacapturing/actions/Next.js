define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget07l = this.$.widgetRegistry.getWidget("Next1");
            var action07m = this.$.actionFactory.getFireEventAction("Mediacapturing","MediacapturedEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget07l, action07m);
            
        }
        
    });
});
