define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action087 = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action087.execute();
            
            var action088 = this.$.actionFactory.getCustomAction("__processChainSetProcessChainComplaintProcessChainAction");
            action088.execute();
            
            var action089 = this.$.actionFactory.getCustomAction("init");
            action089.execute();
            
        }
        
    });
});
