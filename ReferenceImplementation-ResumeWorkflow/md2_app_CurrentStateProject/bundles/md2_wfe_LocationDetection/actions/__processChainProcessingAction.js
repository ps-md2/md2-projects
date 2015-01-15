define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr0c8 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0c9 = this.$.create("string", "LocationProcessChain__LocationDetection");
            var bool0c7 = expr0c8.equals(expr0c9);
            var expr0cb = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr0cc = this.$.create("string", "LocationProcessChain__LocationVerify");
            var bool0ca = expr0cb.equals(expr0cc);
            if (bool0c7) {
                var expr0cg = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0ch = this.$.create("string", "__action.proceed");
                var bool0ce = expr0cg.equals(expr0ch);
                var expr0ci = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0cj = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
                var bool0cf = expr0ci.equals(expr0cj);
                var bool0cd = bool0ce || bool0cf;
                if (bool0cd) {
                    var targetContentProvider0ck = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr0cl = this.$.create("string", "LocationProcessChain__LocationVerify");
                    targetContentProvider0ck.setValue("currentProcessChainStep", expr0cl);
                    
                    var action0cm = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action0cm.execute();
                    
                    var action0cn = this.$.actionFactory.getContentProviderOperationAction("localComplaintProvider", "save");
                    action0cn.execute();
                }
            }
            else if (bool0ca) {
                var expr0cr = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0cs = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
                var bool0cp = expr0cr.equals(expr0cs);
                var expr0ct = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr0cu = this.$.create("string", "__action.reverse");
                var bool0cq = expr0ct.equals(expr0cu);
                var bool0co = bool0cp || bool0cq;
                if (bool0co) {
                    var targetContentProvider0cv = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr0cw = this.$.create("string", "LocationProcessChain__LocationDetection");
                    targetContentProvider0cv.setValue("currentProcessChainStep", expr0cw);
                    
                    var action0cx = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action0cx.execute();
                }
            }
            
        }
        
    });
});
