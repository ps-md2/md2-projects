define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__registerProcessChainActionEventTrigger",
        
        execute: function() {
            
            var widget0ip = this.$.widgetRegistry.getWidget("Next");
            var action0iq = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0ip, action0iq);
            
            var widget0ir = this.$.widgetRegistry.getWidget("Previous");
            var action0is = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0ir, action0is);
            
            var widget0it = this.$.widgetRegistry.getWidget("Next2");
            var action0iu = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0it, action0iu);
            
            var widget0iv = this.$.widgetRegistry.getWidget("Next2");
            var action0iw = this.$.actionFactory.getCustomAction("__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0iv, action0iw);
            
        }
        
    });
});
