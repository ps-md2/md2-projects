define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__registerProcessChainActionEventTrigger",
        
        execute: function() {
            
            var widget0d4 = this.$.widgetRegistry.getWidget("Next");
            var action0d5 = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0d4, action0d5);
            
            var widget0d6 = this.$.widgetRegistry.getWidget("Previous");
            var action0d7 = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0d6, action0d7);
            
        }
        
    });
});
