define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainMyWorkflowAction",
        
        execute: function() {
            
            var targetContentProvider065 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr066 = this.$.create("string", "myWorkflow__LocationDetection");
            targetContentProvider065.setValue("currentProcessChainStep", expr066);
            
            var action067 = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action067.execute();
            
        }
        
    });
});
