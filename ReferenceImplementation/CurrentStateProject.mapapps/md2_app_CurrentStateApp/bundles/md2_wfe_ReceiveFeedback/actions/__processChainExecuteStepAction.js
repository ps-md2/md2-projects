define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0c9 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0ca = this.$.create("string", "receiveChain__ViewFeedback");
            var bool0c8 = expr0c9.equals(expr0ca);
            if (bool0c8) {
                var action0cb = this.$.actionFactory.getGotoViewAction("ViewFeedback");
                action0cb.execute();
            }
            
        }
        
    });
});
