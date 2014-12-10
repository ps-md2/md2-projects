define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainMyWorkflowAction",
        
        execute: function() {
            
            var targetContentProvider0ix = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0iy = this.$.create("string", "myWorkflow__Mediacapturing");
            targetContentProvider0ix.setValue("currentProcessChainStep", expr0iy);
            
            var action0iz = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0iz.execute();
            
        }
        
    });
});
