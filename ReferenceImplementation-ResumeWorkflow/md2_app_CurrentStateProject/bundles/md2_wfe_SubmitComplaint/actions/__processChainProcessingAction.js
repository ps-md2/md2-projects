define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr08f = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr08g = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            var bool08e = expr08f.equals(expr08g);
            if (bool08e) {
            }
            
        }
        
    });
});
