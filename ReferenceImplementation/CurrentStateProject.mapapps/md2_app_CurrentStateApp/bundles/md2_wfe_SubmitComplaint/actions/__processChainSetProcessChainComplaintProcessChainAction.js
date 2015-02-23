define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainComplaintProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider0bi = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0bj = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            targetContentProvider0bi.setValue("currentProcessChainStep", expr0bj);
            
            var action0bk = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0bk.execute();
            
        }
        
    });
});
