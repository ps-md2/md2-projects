define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__startupAction",
        
        execute: function() {
            
            var action0df = this.$.actionFactory.getCustomAction("__registerProcessChainActionEventTrigger");
            action0df.execute();
            
            var action0dg = this.$.actionFactory.getCustomAction("__processChainSetProcessChainReviewProcessChainAction");
            action0dg.execute();
            
            var action0dh = this.$.actionFactory.getCustomAction("init");
            action0dh.execute();
            
            var action0di = this.$.actionFactory.getCustomAction("next");
            action0di.execute();
            
        }
        
    });
});
