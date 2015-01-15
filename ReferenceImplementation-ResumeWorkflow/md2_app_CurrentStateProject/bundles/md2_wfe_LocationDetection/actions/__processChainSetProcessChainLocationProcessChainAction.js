define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainLocationProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider0d8 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0d9 = this.$.create("string", "LocationProcessChain__LocationDetection");
            targetContentProvider0d8.setValue("currentProcessChainStep", expr0d9);
            
            var action0da = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0da.execute();
            
        }
        
    });
});
