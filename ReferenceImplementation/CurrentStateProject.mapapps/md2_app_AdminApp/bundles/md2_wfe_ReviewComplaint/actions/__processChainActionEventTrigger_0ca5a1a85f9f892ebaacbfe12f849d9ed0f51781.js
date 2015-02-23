define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainActionEventTrigger_0ca5a1a85f9f892ebaacbfe12f849d9ed0f51781",
        
        execute: function() {
            
            var targetContentProvider0eb = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
            var expr0ec = this.$.create("string", "__gui.ViewComplaint.Next4.onClick");
            targetContentProvider0eb.setValue("lastEventFired", expr0ec);
            
            var action0ed = this.$.actionFactory.getCustomAction("__processChainProcessingAction");
            action0ed.execute();
            
        }
        
    });
});
