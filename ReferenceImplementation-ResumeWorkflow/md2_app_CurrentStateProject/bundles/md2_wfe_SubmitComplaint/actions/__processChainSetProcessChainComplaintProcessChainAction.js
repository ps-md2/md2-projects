define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainComplaintProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider08h = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr08i = this.$.create("string", "ComplaintProcessChain__SubmitComplaint");
            targetContentProvider08h.setValue("currentProcessChainStep", expr08i);
            
            var action08j = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action08j.execute();
            
        }
        
    });
});
