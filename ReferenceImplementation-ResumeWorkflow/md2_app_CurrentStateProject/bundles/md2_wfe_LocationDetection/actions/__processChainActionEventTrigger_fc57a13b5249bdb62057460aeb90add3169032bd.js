define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd",
        
        execute: function() {
            
            var targetContentProvider07b = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr07c = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
            targetContentProvider07b.setValue("lastEventFired", expr07c);
            
            var action07d = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action07d.execute();
            
        }
        
    });
});
