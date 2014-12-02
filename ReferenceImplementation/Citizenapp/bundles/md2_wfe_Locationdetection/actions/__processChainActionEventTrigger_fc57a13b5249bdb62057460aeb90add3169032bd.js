define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd",
        
        execute: function() {
            
            var targetContentProvider0im = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0in = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
            targetContentProvider0im.setValue("lastEventFired", expr0in);
            
            var action0io = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action0io.execute();
            
        }
        
    });
});
