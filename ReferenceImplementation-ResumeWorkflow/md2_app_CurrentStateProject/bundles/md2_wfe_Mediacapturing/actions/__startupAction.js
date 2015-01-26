define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action07n = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action07n.execute();
            
            var action07o = this.$.actionFactory.getCustomAction("__processChainSetProcessChainMediaProcessChainAction");
            action07o.execute();
            
            var action07p = this.$.actionFactory.getCustomAction("init");
            action07p.execute();
            
            var action07q = this.$.actionFactory.getCustomAction("next");
            action07q.execute();
            
        }
        
    });
});
