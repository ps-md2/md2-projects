define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0bg = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0bh = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            var bool0bf = expr0bg.equals(expr0bh);
            if (bool0bf) {
            }
            
        }
        
    });
});
