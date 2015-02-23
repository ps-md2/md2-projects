define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget0d9 = this.$.widgetRegistry.getWidget("Next4");
            var action0da = this.$.actionFactory.getCustomAction("GoOn");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0d9, action0da);
            
        }
        
    });
});
