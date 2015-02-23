define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0ad = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0ae = this.$.create("string", "MediaProcessChain__MediaCapturing");
            var bool0ac = expr0ad.equals(expr0ae);
            if (bool0ac) {
            }
            
        }
        
    });
});
