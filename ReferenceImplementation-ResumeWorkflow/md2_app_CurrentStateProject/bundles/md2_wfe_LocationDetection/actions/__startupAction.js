define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action065 = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action065.execute();
            
            var action066 = this.$.actionFactory.getCustomAction("__processChainSetProcessChainLocationProcessChainAction");
            action066.execute();
            
            var action067 = this.$.actionFactory.getCustomAction("init");
            action067.execute();
            
            var action068 = this.$.actionFactory.getCustomAction("next");
            action068.execute();
            
        }
        
    });
});
