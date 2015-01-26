define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__registerProcessChainActionEventTrigger",
        
        execute: function() {
            
            var widget07e = this.$.widgetRegistry.getWidget("Next");
            var action07f = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget07e, action07f);
            
            var widget07g = this.$.widgetRegistry.getWidget("Previous");
            var action07h = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget07g, action07h);
            
        }
        
    });
});
