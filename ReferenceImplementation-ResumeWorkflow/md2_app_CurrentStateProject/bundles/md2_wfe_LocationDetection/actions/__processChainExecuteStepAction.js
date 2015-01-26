define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr06a = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr06b = this.$.create("string", "LocationProcessChain__LocationDetection");
            var bool069 = expr06a.equals(expr06b);
            var expr06d = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr06e = this.$.create("string", "LocationProcessChain__LocationVerify");
            var bool06c = expr06d.equals(expr06e);
            if (bool069) {
                var action06f = this.$.actionFactory.getGotoViewAction("LocationDetectionView");
                action06f.execute();
            }
            else if (bool06c) {
                var action06g = this.$.actionFactory.getGotoViewAction("LocationVerifyView");
                action06g.execute();
            }
            
        }
        
    });
});
