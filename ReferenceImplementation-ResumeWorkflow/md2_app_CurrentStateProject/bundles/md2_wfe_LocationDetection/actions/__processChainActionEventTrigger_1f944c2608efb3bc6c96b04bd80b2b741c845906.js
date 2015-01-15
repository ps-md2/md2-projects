define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906",
        
        execute: function() {
            
            var targetContentProvider0cy = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0cz = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
            targetContentProvider0cy.setValue("lastEventFired", expr0cz);
            
            var action0d0 = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action0d0.execute();
            
        }
        
    });
});
