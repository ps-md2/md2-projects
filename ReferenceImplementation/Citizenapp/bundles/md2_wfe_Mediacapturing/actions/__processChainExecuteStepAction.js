define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainExecuteStepAction",
        
        execute: function() {
            
            var expr0h7 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0h8 = this.$.create("string", "myWorkflow__Mediacapturing");
            var bool0h6 = expr0h7.equals(expr0h8);
            
            if (bool0h6) {  
               var action0hb = this.$.actionFactory.getGotoViewAction("MediacapturingView");
               action0hb.execute();
            }
        }
        
    });
});
