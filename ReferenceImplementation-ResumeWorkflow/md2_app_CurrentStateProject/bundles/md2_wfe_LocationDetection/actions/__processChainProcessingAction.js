define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr06i = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr06j = this.$.create("string", "LocationProcessChain__LocationDetection");
            var bool06h = expr06i.equals(expr06j);
            var expr06l = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr06m = this.$.create("string", "LocationProcessChain__LocationVerify");
            var bool06k = expr06l.equals(expr06m);
            if (bool06h) {
                var expr06q = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr06r = this.$.create("string", "__action.proceed");
                var bool06o = expr06q.equals(expr06r);
                var expr06s = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr06t = this.$.create("string", "__gui.LocationDetectionView.Next.onClick");
                var bool06p = expr06s.equals(expr06t);
                var bool06n = bool06o || bool06p;
                if (bool06n) {
                    var targetContentProvider06u = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr06v = this.$.create("string", "LocationProcessChain__LocationVerify");
                    targetContentProvider06u.setValue("currentProcessChainStep", expr06v);
                    
                    var action06w = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action06w.execute();
                    
                    var action06x = this.$.actionFactory.getContentProviderOperationAction("localComplaintProvider", "save");
                    action06x.execute();
                }
            }
            else if (bool06k) {
                var expr071 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr072 = this.$.create("string", "__gui.LocationVerifyView.Previous.onClick");
                var bool06z = expr071.equals(expr072);
                var expr073 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr074 = this.$.create("string", "__action.reverse");
                var bool070 = expr073.equals(expr074);
                var bool06y = bool06z || bool070;
                if (bool06y) {
                    var targetContentProvider075 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr076 = this.$.create("string", "LocationProcessChain__LocationDetection");
                    targetContentProvider075.setValue("currentProcessChainStep", expr076);
                    
                    var action077 = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action077.execute();
                }
            }
            
        }
        
    });
});
