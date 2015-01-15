define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0dh = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0di = this.$.create("string", "MediaProcessChain__MediaCapturing");
            var bool0dg = expr0dh.equals(expr0di);
            if (bool0dg) {
                var action0dj = this.$.actionFactory.getGotoViewAction("MediaCapturingView");
                action0dj.execute();
            }
            
        }
        
    });
});
