define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "__processChainProcessingAction",
        
        execute: function() {
            
            var expr08v = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr08w = this.$.create("string", "LocationProcessChain__LocationDetection");
            var bool08u = expr08v.equals(expr08w);
            var expr08y = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("currentProcessChainStep");
            var expr08z = this.$.create("string", "LocationProcessChain__LocationVerify");
            var bool08x = expr08y.equals(expr08z);
            if (bool08u) {
                var expr095 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr096 = this.$.create("string", "__action.proceed");
                var bool093 = expr095.equals(expr096);
                var expr097 = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr098 = this.$.create("string", "__gui.LocationDetectionView.Navbar.Next.onClick");
                var bool094 = expr097.equals(expr098);
                var bool091 = bool093 || bool094;
                var expr099 = this.$.widgetRegistry.getWidget("cityValue").getValue();
                var expr09a = this.$.create("string", "Münster");
                var bool092 = expr099.equals(expr09a);
                var bool090 = bool091 && bool092;
                if (bool090) {
                    var targetContentProvider09b = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr09c = this.$.create("string", "LocationProcessChain__LocationVerify");
                    targetContentProvider09b.setValue("currentProcessChainStep", expr09c);
                    
                    var action09d = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action09d.execute();
                    
                    var action09e = this.$.actionFactory.getCustomAction("saveComplaint");
                    action09e.execute();
                }
            }
            else if (bool08x) {
                var expr09i = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr09j = this.$.create("string", "__gui.LocationVerifyView.Buttons.Previous.onClick");
                var bool09g = expr09i.equals(expr09j);
                var expr09k = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider").getValue("lastEventFired");
                var expr09l = this.$.create("string", "__action.reverse");
                var bool09h = expr09k.equals(expr09l);
                var bool09f = bool09g || bool09h;
                if (bool09f) {
                    var targetContentProvider09m = this.$.contentProviderRegistry.getContentProvider("__processChainControllerStateProvider");
                    var expr09n = this.$.create("string", "LocationProcessChain__LocationDetection");
                    targetContentProvider09m.setValue("currentProcessChainStep", expr09n);
                    
                    var action09o = this.$.actionFactory.getCustomAction("__processChainExecuteStepAction");
                    action09o.execute();
                }
            }
            
        }
        
    });
});
