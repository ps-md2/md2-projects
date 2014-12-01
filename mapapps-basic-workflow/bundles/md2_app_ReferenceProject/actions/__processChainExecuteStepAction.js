define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0h1 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0h2 = this.$.create("string", "myWorkflow__LocationDetection");
            var bool0h0 = expr0h1.equals(expr0h2);
            var expr0h4 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0h5 = this.$.create("string", "myWorkflow__LocationVerify");
            var bool0h3 = expr0h4.equals(expr0h5);
            var expr0h7 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0h8 = this.$.create("string", "myWorkflow__MediaCapturing");
            var bool0h6 = expr0h7.equals(expr0h8);
            if (bool0h0) {
                var action0h9 = this.$.actionFactory.getGotoViewAction("LocationDetectionView");
                action0h9.execute();
            }
            else if (bool0h3) {
                var action0ha = this.$.actionFactory.getGotoViewAction("LocationVerifyView");
                action0ha.execute();
            }
            else if (bool0h6) {
                var action0hb = this.$.actionFactory.getGotoViewAction("MediaCapturingView");
                action0hb.execute();
            }
            
        }
        
    });
});
