define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainReceiveChainAction",
        
        execute: function() {
            
            var targetContentProvider0cf = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0cg = this.$.create("string", "receiveChain__ViewFeedback");
            targetContentProvider0cf.setValue("currentProcessChainStep", expr0cg);
            
            var action0ch = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0ch.execute();
            
        }
        
    });
});
