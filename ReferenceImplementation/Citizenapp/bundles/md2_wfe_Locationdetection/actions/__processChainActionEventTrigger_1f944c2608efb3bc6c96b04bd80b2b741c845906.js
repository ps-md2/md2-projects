define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906",
        
        execute: function() {
            
            var targetContentProvider0ig = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0ih = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
            targetContentProvider0ig.setValue("lastEventFired", expr0ih);
            
            var action0ii = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action0ii.execute();
            
        }
        
    });
});
