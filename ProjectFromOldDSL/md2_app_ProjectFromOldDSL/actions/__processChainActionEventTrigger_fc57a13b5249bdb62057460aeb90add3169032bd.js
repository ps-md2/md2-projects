define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd",
        
        execute: function() {
            
            var targetContentProvider05u = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr05v = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
            targetContentProvider05u.setValue("lastEventFired", expr05v);
            
            var action05w = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action05w.execute();
            
        }
        
    });
});
