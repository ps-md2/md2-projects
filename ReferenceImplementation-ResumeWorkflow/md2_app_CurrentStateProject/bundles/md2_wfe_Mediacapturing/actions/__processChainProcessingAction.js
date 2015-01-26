define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr07w = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr07x = this.$.create("string", "MediaProcessChain__MediaCapturing");
            var bool07v = expr07w.equals(expr07x);
            if (bool07v) {
            }
            
        }
        
    });
});
