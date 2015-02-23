define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__registerProcessChainActionEventTrigger",
        
        execute: function() {
            
            var widget09v = this.$.widgetRegistry.getWidget("Next");
            var action09w = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_0d320e0de11118a0c2f06867736ad9a7c1bb6ef6");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget09v, action09w);
            
            var widget09x = this.$.widgetRegistry.getWidget("Previous");
            var action09y = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_e88c73ce2748b8aeb8b5d149045638d5eebb94d1");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget09x, action09y);
            
        }
        
    });
});
