define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainComplaintProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider0e6 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0e7 = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            targetContentProvider0e6.setValue("currentProcessChainStep", expr0e7);
            
            var action0e8 = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0e8.execute();
            
        }
        
    });
});
