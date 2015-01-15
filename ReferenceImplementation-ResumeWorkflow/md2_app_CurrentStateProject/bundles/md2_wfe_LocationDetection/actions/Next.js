define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget0bt = this.$.widgetRegistry.getWidget("Next2");
            var action0bu = this.$.actionFactory.getFireEventAction("LocationDetection","LocationEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0bt, action0bu);
            
        }
        
    });
});
