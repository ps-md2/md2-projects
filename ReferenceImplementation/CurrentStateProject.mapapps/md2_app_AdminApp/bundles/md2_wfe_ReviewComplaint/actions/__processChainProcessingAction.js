define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0ds = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0dt = this.$.create("string", "ReviewProcessChain__ViewComplaint");
            var bool0dr = expr0ds.equals(expr0dt);
            var expr0dv = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0dw = this.$.create("string", "ReviewProcessChain__UpdateComplaint");
            var bool0du = expr0dv.equals(expr0dw);
            if (bool0dr) {
                var expr0e2 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0e3 = this.$.create("string", "__action.proceed");
                var bool0e0 = expr0e2.equals(expr0e3);
                var expr0e4 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0e5 = this.$.create("string", "__gui.ViewComplaint.Next4.onClick");
                var bool0e1 = expr0e4.equals(expr0e5);
                var bool0dy = bool0e0 || bool0e1;
                var expr0e6 = this.$.widgetRegistry.getWidget("addFeedback").getValue();
                var expr0e7 = this.$.create("boolean", true);
                var bool0dz = expr0e6.equals(expr0e7);
                var bool0dx = bool0dy && bool0dz;
                if (bool0dx) {
                    var targetContentProvider0e8 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr0e9 = this.$.create("string", "ReviewProcessChain__UpdateComplaint");
                    targetContentProvider0e8.setValue("currentProcessChainStep", expr0e9);
                    
                    var action0ea = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action0ea.execute();
                }
            }
            else if (bool0du) {
            }
            
        }
        
    });
});
