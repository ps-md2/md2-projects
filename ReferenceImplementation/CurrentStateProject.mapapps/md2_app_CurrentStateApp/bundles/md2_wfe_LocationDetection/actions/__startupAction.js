define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action08h = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action08h.execute();
            
            var action08i = this.$.actionFactory.getCustomAction("__processChainSetProcessChainLocationProcessChainAction");
            action08i.execute();
            
            var action08j = this.$.actionFactory.getCustomAction("init");
            action08j.execute();
            
            var action08k = this.$.actionFactory.getCustomAction("buttonInit");
            action08k.execute();
            
            var action08l = this.$.actionFactory.getCustomAction("MyLocationAction");
            action08l.execute();
            
        }
        
    });
});
