define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_e88c73ce2748b8aeb8b5d149045638d5eebb94d1",
        
        execute: function() {
            
            var targetContentProvider09p = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr09q = this.$.create("string", "__gui.LocationVerifyView.Buttons.Previous.onClick");
            targetContentProvider09p.setValue("lastEventFired", expr09q);
            
            var action09r = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action09r.execute();
            
        }
        
    });
});
