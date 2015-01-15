define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0dl = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0dm = this.$.create("string", "MediaProcessChain__MediaCapturing");
            var bool0dk = expr0dl.equals(expr0dm);
            if (bool0dk) {
            }
            
        }
        
    });
});
