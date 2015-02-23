define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "buttonInit",
        
        execute: function() {
            
            var widget07y = this.$.widgetRegistry.getWidget("Next2");
            var action07z = this.$.actionFactory.getFireEventAction("LocationDetection","LocationEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget07y, action07z);
            
            var widget080 = this.$.widgetRegistry.getWidget("SkipUpload");
            var action081 = this.$.actionFactory.getFireEventAction("LocationDetection","WithoutPhotoEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget080, action081);
            
            var widget082 = this.$.widgetRegistry.getWidget("Next");
            var action083 = this.$.actionFactory.getCustomAction("GoOn");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget082, action083);
            
            var action084 = this.$.actionFactory.getDisableAction("PreviousDummy");
            action084.execute();
            
        }
        
    });
});
