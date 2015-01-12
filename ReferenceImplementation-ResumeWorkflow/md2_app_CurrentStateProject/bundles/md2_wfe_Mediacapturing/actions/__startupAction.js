define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0dd = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0dd.execute();
            
            var action0de = this.$.actionFactory.getCustomAction("__processChainSetProcessChainMediaProcessChainAction");
            action0de.execute();
            
            var action0df = this.$.actionFactory.getCustomAction("init");
            action0df.execute();
            
        }
        
    });
});
