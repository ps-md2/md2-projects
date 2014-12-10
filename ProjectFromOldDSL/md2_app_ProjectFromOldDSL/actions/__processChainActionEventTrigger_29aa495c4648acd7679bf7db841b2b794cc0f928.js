define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928",
        
        execute: function() {
            
            var targetContentProvider05r = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr05s = this.$.create("string", "__gui.LocationVerifyView.Next2.onClick");
            targetContentProvider05r.setValue("lastEventFired", expr05s);
            
            var action05t = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action05t.execute();
            
        }
        
    });
});
