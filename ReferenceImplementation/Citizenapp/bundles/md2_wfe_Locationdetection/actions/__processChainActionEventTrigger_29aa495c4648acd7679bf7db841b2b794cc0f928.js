define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928",
        
        execute: function() {
            
            var targetContentProvider0ij = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0ik = this.$.create("string", "__gui.LocationVerifyView.Next2.onClick");
            targetContentProvider0ij.setValue("lastEventFired", expr0ik);
            
            var action0il = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action0il.execute();
            
        }
        
    });
});
