define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0dk = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0dl = this.$.create("string", "ReviewProcessChain__ViewComplaint");
            var bool0dj = expr0dk.equals(expr0dl);
            var expr0dn = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0do = this.$.create("string", "ReviewProcessChain__UpdateComplaint");
            var bool0dm = expr0dn.equals(expr0do);
            if (bool0dj) {
                var action0dp = this.$.actionFactory.getGotoViewAction("ViewComplaint");
                action0dp.execute();
            }
            else if (bool0dm) {
                var action0dq = this.$.actionFactory.getGotoViewAction("UpdateComplaint");
                action0dq.execute();
            }
            
        }
        
    });
});
