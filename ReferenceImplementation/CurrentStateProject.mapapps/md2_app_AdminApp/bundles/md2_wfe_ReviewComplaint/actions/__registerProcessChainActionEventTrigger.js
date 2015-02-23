define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__registerProcessChainActionEventTrigger",
        
        execute: function() {
            
            var widget0ee = this.$.widgetRegistry.getWidget("Next4");
            var action0ef = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_0ca5a1a85f9f892ebaacbfe12f849d9ed0f51781");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0ee, action0ef);
            
        }
        
    });
});
