define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action",
    "dojo/_base/lang"
],
function(declare, _Action, lang) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var widget0dq = this.$.widgetRegistry.getWidget("submitComplaint");
            var action0dr = this.$.actionFactory.getFireEventAction("SubmitComplaint","SubmitEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0dq, action0dr);
            
            var action0ds = this.$.actionFactory.getContentProviderOperationAction("localComplaintProvider", "save");
            action0ds.execute();
            
            var message0du = lang.hitch(this, function() {
                var expr0dv = this.$.create("string", "yeah, it worked!");
                return expr0dv.toString();
            });
            var action0dt = this.$.actionFactory.getDisplayMessageAction("9a83852b4f7698f013276c21d649ee3afcb1a925", message0du);
            action0dt.execute();
            
        }
        
    });
});
