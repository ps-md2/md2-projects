define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd",
        
        execute: function() {
            
            var targetContentProvider0d1 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0d2 = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
            targetContentProvider0d1.setValue("lastEventFired", expr0d2);
            
            var action0d3 = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action0d3.execute();
            
        }
        
    });
});
