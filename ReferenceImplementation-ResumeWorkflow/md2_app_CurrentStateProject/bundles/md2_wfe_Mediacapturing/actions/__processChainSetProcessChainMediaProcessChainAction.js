define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainMediaProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider0dn = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0do = this.$.create("string", "MediaProcessChain__MediaCapturing");
            targetContentProvider0dn.setValue("currentProcessChainStep", expr0do);
            
            var action0dp = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action0dp.execute();
            
        }
        
    });
});
