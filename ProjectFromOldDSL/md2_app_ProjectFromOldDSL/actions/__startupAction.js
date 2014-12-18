define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action045 = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action045.execute();
            
            var action046 = this.$.actionFactory.getCustomAction("__processChainSetProcessChainMyWorkflowAction");
            action046.execute();
            
            var action047 = this.$.actionFactory.getCustomAction("init");
            action047.execute();
            
        }
        
    });
});
