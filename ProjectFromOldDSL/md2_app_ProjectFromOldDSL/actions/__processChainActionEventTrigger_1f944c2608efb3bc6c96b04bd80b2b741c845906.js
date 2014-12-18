define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906",
        
        execute: function() {
            
            var targetContentProvider05o = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr05p = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
            targetContentProvider05o.setValue("lastEventFired", expr05p);
            
            var action05q = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action05q.execute();
            
        }
        
    });
});
