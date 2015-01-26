define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action",
    "dojo/_base/lang"
],
function(declare, _Action, lang) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget081 = this.$.widgetRegistry.getWidget("submitComplaint");
            var action082 = this.$.actionFactory.getFireEventAction("SubmitComplaint","SubmitEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget081, action082);
            
            var action083 = this.$.actionFactory.getContentProviderOperationAction("localComplaintProvider", "save");
            action083.execute();
            
            var message085 = lang.hitch(this, function() {
                var expr086 = this.$.create("string", "yeah, it worked!");
                return expr086.toString();
            });
            var action084 = this.$.actionFactory.getDisplayMessageAction("9a83852b4f7698f013276c21d649ee3afcb1a925", message085);
            action084.execute();
            
        }
        
    });
});
