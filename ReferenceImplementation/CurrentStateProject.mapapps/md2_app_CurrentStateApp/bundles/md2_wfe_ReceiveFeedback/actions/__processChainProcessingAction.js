define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0cd = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0ce = this.$.create("string", "receiveChain__ViewFeedback");
            var bool0cc = expr0cd.equals(expr0ce);
            if (bool0cc) {
            }
            
        }
        
    });
});
