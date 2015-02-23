define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainReviewProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider0eg = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0eh = this.$.create("string", "ReviewProcessChain__ViewComplaint");
            targetContentProvider0eg.setValue("currentProcessChainStep", expr0eh);
            
            var action0ei = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0ei.execute();
            
        }
        
    });
});
