define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_0d320e0de11118a0c2f06867736ad9a7c1bb6ef6",
        
        execute: function() {
            
            var targetContentProvider09s = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr09t = this.$.create("string", "__gui.LocationDetectionView.Navbar.Next.onClick");
            targetContentProvider09s.setValue("lastEventFired", expr09t);
            
            var action09u = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action09u.execute();
            
        }
        
    });
});
