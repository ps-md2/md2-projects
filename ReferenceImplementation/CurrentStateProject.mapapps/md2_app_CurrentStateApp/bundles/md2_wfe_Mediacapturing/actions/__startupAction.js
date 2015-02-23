define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0a4 = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0a4.execute();
            
            var action0a5 = this.$.actionFactory.getCustomAction("__processChainSetProcessChainMediaProcessChainAction");
            action0a5.execute();
            
            var action0a6 = this.$.actionFactory.getCustomAction("init");
            action0a6.execute();
            
            var action0a7 = this.$.actionFactory.getCustomAction("next");
            action0a7.execute();
            
        }
        
    });
});
