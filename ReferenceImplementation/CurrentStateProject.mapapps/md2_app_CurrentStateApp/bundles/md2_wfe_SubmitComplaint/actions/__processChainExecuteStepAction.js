define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0bc = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0bd = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            var bool0bb = expr0bc.equals(expr0bd);
            if (bool0bb) {
                var action0be = this.$.actionFactory.getGotoViewAction("SubmitComplaintView");
                action0be.execute();
            }
            
        }
        
    });
});
