define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__registerProcessChainActionEventTrigger",
        
        execute: function() {
            
            var widget05x = this.$.widgetRegistry.getWidget("Next2");
            var action05y = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget05x, action05y);
            
            var widget05z = this.$.widgetRegistry.getWidget("Next");
            var action060 = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget05z, action060);
            
            var widget061 = this.$.widgetRegistry.getWidget("Previous");
            var action062 = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget061, action062);
            
            var widget063 = this.$.widgetRegistry.getWidget("Next2");
            var action064 = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget063, action064);
            
        }
        
    });
});
