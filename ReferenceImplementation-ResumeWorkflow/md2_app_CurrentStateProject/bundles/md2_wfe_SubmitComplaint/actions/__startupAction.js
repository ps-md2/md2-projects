define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0dw = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0dw.execute();
            
            var action0dx = this.$.actionFactory.getCustomAction("__processChainSetProcessChainComplaintProcessChainAction");
            action0dx.execute();
            
            var action0dy = this.$.actionFactory.getCustomAction("init");
            action0dy.execute();
            
        }
        
    });
});
