define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0gx = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0gx.execute();
            
            var action0gy = this.$.actionFactory.getCustomAction("__processChainSetProcessChainMyWorkflowAction");
            action0gy.execute();
            
            var action0gz = this.$.actionFactory.getCustomAction("init");
            action0gz.execute();
            
        }
        
    });
});
