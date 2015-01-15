define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0bv = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0bv.execute();
            
            var action0bw = this.$.actionFactory.getCustomAction("__processChainSetProcessChainLocationProcessChainAction");
            action0bw.execute();
            
            var action0bx = this.$.actionFactory.getCustomAction("init");
            action0bx.execute();
            
            var action0by = this.$.actionFactory.getCustomAction("next");
            action0by.execute();
            
        }
        
    });
});
