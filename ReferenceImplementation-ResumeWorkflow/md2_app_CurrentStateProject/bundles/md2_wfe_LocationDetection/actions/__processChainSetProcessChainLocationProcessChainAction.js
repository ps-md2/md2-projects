define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainSetProcessChainLocationProcessChainAction",
        
        execute: function() {
            
            var targetContentProvider07i = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr07j = this.$.create("string", "LocationProcessChain__LocationDetection");
            targetContentProvider07i.setValue("currentProcessChainStep", expr07j);
            
            var action07k = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
            action07k.execute();
            
        }
        
    });
});
