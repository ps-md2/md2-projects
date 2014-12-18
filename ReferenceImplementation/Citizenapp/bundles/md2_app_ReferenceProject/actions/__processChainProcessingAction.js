define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0hd = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0he = this.$.create("string", "myWorkflow__LocationDetection");
            var bool0hc = expr0hd.equals(expr0he);
            var expr0hg = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0hh = this.$.create("string", "myWorkflow__LocationVerify");
            var bool0hf = expr0hg.equals(expr0hh);
            var expr0hj = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0hk = this.$.create("string", "myWorkflow__MediaCapturing");
            var bool0hi = expr0hj.equals(expr0hk);
            if (bool0hc) {
                var expr0ho = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0hp = this.$.create("string", "__action.proceed");
                var bool0hm = expr0ho.equals(expr0hp);
                var expr0hq = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0hr = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
                var bool0hn = expr0hq.equals(expr0hr);
                var bool0hl = bool0hm || bool0hn;
                if (bool0hl) {
                    var targetContentProvider0hs = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr0ht = this.$.create("string", "myWorkflow__LocationVerify");
                    targetContentProvider0hs.setValue("currentProcessChainStep", expr0ht);
                    
                    var action0hu = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action0hu.execute();
                    
                    var action0hv = this.$.actionFactory.getContentProviderOperationAction("localComplaintProvider", "save");
                    action0hv.execute();
                }
            }
            else if (bool0hf) {
                var expr0hz = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0i0 = this.$.create("string", "__action.proceed");
                var bool0hx = expr0hz.equals(expr0i0);
                var expr0i1 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0i2 = this.$.create("string", "__gui.LocationVerifyView.Next2.onClick");
                var bool0hy = expr0i1.equals(expr0i2);
                var bool0hw = bool0hx || bool0hy;
                var expr0i6 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0i7 = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
                var bool0i4 = expr0i6.equals(expr0i7);
                var expr0i8 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0i9 = this.$.create("string", "__action.reverse");
                var bool0i5 = expr0i8.equals(expr0i9);
                var bool0i3 = bool0i4 || bool0i5;
                if (bool0hw) {
                    var targetContentProvider0ia = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr0ib = this.$.create("string", "myWorkflow__MediaCapturing");
                    targetContentProvider0ia.setValue("currentProcessChainStep", expr0ib);
                    
                    var action0ic = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action0ic.execute();
                }
                else if (bool0i3) {
                    var targetContentProvider0id = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr0ie = this.$.create("string", "myWorkflow__LocationDetection");
                    targetContentProvider0id.setValue("currentProcessChainStep", expr0ie);
                    
                    var action0if = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action0if.execute();
                }
            }
            else if (bool0hi) {
            }
            
        }
        
    });
});
