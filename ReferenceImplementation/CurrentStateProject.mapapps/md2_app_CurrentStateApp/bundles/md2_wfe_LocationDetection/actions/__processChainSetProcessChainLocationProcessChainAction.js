define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainLocationProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider09z = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0a0 = this.$.create("string", "LocationProcessChain__LocationDetection");
            targetContentProvider09z.setValue("currentProcessChainStep", expr0a0);
            
            var action0a1 = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0a1.execute();
            
        }
        
    });
});
