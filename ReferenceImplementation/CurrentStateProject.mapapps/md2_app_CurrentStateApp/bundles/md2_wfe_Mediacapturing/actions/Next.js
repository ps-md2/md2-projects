define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget0a2 = this.$.widgetRegistry.getWidget("Next1");
            var action0a3 = this.$.actionFactory.getFireEventAction("Mediacapturing","MediacapturedEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0a2, action0a3);
            
        }
        
    });
});
