define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainMediaProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider0af = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0ag = this.$.create("string", "MediaProcessChain__MediaCapturing");
            targetContentProvider0af.setValue("currentProcessChainStep", expr0ag);
            
            var action0ah = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0ah.execute();
            
        }
        
    });
});
