define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0a9 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0aa = this.$.create("string", "MediaProcessChain__MediaCapturing");
            var bool0a8 = expr0a9.equals(expr0aa);
            if (bool0a8) {
                var action0ab = this.$.actionFactory.getGotoViewAction("MediaCapturingView");
                action0ab.execute();
            }
            
        }
        
    });
});
