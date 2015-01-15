define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0e0 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0e1 = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            var bool0dz = expr0e0.equals(expr0e1);
            if (bool0dz) {
                var action0e2 = this.$.actionFactory.getGotoViewAction("SubmitComplaintView");
                action0e2.execute();
            }
            
        }
        
    });
});
