define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0b8 = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0b8.execute();
            
            var action0b9 = this.$.actionFactory.getCustomAction("__processChainSetProcessChainComplaintProcessChainAction");
            action0b9.execute();
            
            var action0ba = this.$.actionFactory.getCustomAction("init");
            action0ba.execute();
            
        }
        
    });
});
