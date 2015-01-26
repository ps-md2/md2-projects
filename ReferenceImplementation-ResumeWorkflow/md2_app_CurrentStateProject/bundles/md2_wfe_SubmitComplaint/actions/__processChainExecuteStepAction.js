define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr08b = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr08c = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            var bool08a = expr08b.equals(expr08c);
            if (bool08a) {
                var action08d = this.$.actionFactory.getGotoViewAction("SubmitComplaintView");
                action08d.execute();
            }
            
        }
        
    });
});
