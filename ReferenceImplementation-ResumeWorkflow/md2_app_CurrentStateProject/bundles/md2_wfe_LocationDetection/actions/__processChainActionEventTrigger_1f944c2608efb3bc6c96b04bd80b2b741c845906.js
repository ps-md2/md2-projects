define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906",
        
        execute: function() {
            
            var targetContentProvider078 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr079 = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
            targetContentProvider078.setValue("lastEventFired", expr079);
            
            var action07a = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action07a.execute();
            
        }
        
    });
});
