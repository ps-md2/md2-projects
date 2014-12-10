define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr049 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr04a = this.$.create("string", "myWorkflow__LocationDetection");
            var bool048 = expr049.equals(expr04a);
            var expr04c = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr04d = this.$.create("string", "myWorkflow__LocationVerify");
            var bool04b = expr04c.equals(expr04d);
            var expr04f = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr04g = this.$.create("string", "myWorkflow__MediaCapturing");
            var bool04e = expr04f.equals(expr04g);
            if (bool048) {
                var action04h = this.$.actionFactory.getGotoViewAction("LocationDetectionView");
                action04h.execute();
            }
            else if (bool04b) {
                var action04i = this.$.actionFactory.getGotoViewAction("LocationVerifyView");
                action04i.execute();
            }
            else if (bool04e) {
                var action04j = this.$.actionFactory.getGotoViewAction("MediaCapturingView");
                action04j.execute();
            }
            
        }
        
    });
});
