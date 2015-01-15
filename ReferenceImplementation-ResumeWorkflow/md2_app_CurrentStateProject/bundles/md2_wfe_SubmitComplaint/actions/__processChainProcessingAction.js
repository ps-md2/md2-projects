define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0e4 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0e5 = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            var bool0e3 = expr0e4.equals(expr0e5);
            if (bool0e3) {
            }
            
        }
        
    });
});
