define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr08n = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr08o = this.$.create("string", "LocationProcessChain__LocationDetection");
            var bool08m = expr08n.equals(expr08o);
            var expr08q = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr08r = this.$.create("string", "LocationProcessChain__LocationVerify");
            var bool08p = expr08q.equals(expr08r);
            if (bool08m) {
                var action08s = this.$.actionFactory.getGotoViewAction("LocationDetectionView");
                action08s.execute();
            }
            else if (bool08p) {
                var action08t = this.$.actionFactory.getGotoViewAction("LocationVerifyView");
                action08t.execute();
            }
            
        }
        
    });
});
