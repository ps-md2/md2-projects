define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0c5 = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0c5.execute();
            
            var action0c6 = this.$.actionFactory.getCustomAction("__processChainSetProcessChainReceiveChainAction");
            action0c6.execute();
            
            var action0c7 = this.$.actionFactory.getCustomAction("init");
            action0c7.execute();
            
        }
        
    });
});
