define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainMediaProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider07y = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr07z = this.$.create("string", "MediaProcessChain__MediaCapturing");
            targetContentProvider07y.setValue("currentProcessChainStep", expr07z);
            
            var action080 = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action080.execute();
            
        }
        
    });
});
