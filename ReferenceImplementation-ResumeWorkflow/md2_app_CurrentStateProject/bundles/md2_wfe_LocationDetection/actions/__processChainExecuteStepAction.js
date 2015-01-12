define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0c0 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0c1 = this.$.create("string", "LocationProcessChain__LocationDetection");
            var bool0bz = expr0c0.equals(expr0c1);
            var expr0c3 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0c4 = this.$.create("string", "LocationProcessChain__LocationVerify");
            var bool0c2 = expr0c3.equals(expr0c4);
            if (bool0bz) {
                var action0c5 = this.$.actionFactory.getGotoViewAction("LocationDetectionView");
                action0c5.execute();
            }
            else if (bool0c2) {
                var action0c6 = this.$.actionFactory.getGotoViewAction("LocationVerifyView");
                action0c6.execute();
            }
            
        }
        
    });
});
