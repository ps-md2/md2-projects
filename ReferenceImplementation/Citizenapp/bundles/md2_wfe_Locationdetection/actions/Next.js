define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget063 = this.$.widgetRegistry.getWidget("Next2");
            var action064 = this.$.actionFactory.getFireEventAction("LocationDetection","LocationEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget063, action064);
            
        }
        
    });
});
