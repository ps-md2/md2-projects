define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr04l = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr04m = this.$.create("string", "myWorkflow__LocationDetection");
            var bool04k = expr04l.equals(expr04m);
            var expr04o = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr04p = this.$.create("string", "myWorkflow__LocationVerify");
            var bool04n = expr04o.equals(expr04p);
            var expr04r = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr04s = this.$.create("string", "myWorkflow__MediaCapturing");
            var bool04q = expr04r.equals(expr04s);
            if (bool04k) {
                var expr04w = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr04x = this.$.create("string", "__action.proceed");
                var bool04u = expr04w.equals(expr04x);
                var expr04y = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr04z = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
                var bool04v = expr04y.equals(expr04z);
                var bool04t = bool04u || bool04v;
                if (bool04t) {
                    var targetContentProvider050 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr051 = this.$.create("string", "myWorkflow__LocationVerify");
                    targetContentProvider050.setValue("currentProcessChainStep", expr051);
                    
                    var action052 = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action052.execute();
                    
                    var action053 = this.$.actionFactory.getContentProviderOperationAction("localComplaintProvider", "save");
                    action053.execute();
                }
            }
            else if (bool04n) {
                var expr057 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr058 = this.$.create("string", "__action.proceed");
                var bool055 = expr057.equals(expr058);
                var expr059 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr05a = this.$.create("string", "__gui.LocationVerifyView.Next2.onClick");
                var bool056 = expr059.equals(expr05a);
                var bool054 = bool055 || bool056;
                var expr05e = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr05f = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
                var bool05c = expr05e.equals(expr05f);
                var expr05g = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr05h = this.$.create("string", "__action.reverse");
                var bool05d = expr05g.equals(expr05h);
                var bool05b = bool05c || bool05d;
                if (bool054) {
                    var targetContentProvider05i = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr05j = this.$.create("string", "myWorkflow__MediaCapturing");
                    targetContentProvider05i.setValue("currentProcessChainStep", expr05j);
                    
                    var action05k = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action05k.execute();
                }
                else if (bool05b) {
                    var targetContentProvider05l = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr05m = this.$.create("string", "myWorkflow__LocationDetection");
                    targetContentProvider05l.setValue("currentProcessChainStep", expr05m);
                    
                    var action05n = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action05n.execute();
                }
            }
            else if (bool04q) {
            }
            
        }
        
    });
});
