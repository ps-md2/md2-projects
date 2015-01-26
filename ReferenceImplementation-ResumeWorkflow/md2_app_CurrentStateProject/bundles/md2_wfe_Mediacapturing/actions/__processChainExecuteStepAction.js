define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr07s = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr07t = this.$.create("string", "MediaProcessChain__MediaCapturing");
            var bool07r = expr07s.equals(expr07t);
            if (bool07r) {
                var action07u = this.$.actionFactory.getGotoViewAction("MediaCapturingView");
                action07u.execute();
            }
            
        }
        
    });
});
