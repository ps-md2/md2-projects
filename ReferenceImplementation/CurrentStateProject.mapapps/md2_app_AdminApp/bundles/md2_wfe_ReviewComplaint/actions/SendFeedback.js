define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action",
    "dojo/_base/lang"
],
function(declare, _Action, lang) {
    
    return declare([_Action], {
        
        _actionSignature: "sendFeedback",
        
        execute: function() {
            
            var action0d4 = this.$.actionFactory.getContentProviderOperationAction("complaintProvider", "save");
            action0d4.execute();
            
            var message0d6 = lang.hitch(this, function() {
                var expr0d7 = this.$.create("string", "Changes saved!");
                return expr0d7.toString();
            });
            var action0d5 = this.$.actionFactory.getDisplayMessageAction("9c86cfeb5095c06268875b4577e1b18de19a738d", message0d6);
            action0d5.execute();
            
            var action0d8 = this.$.actionFactory.getFireEventAction("ReviewComplaint","ReviewEvent");
            action0d8.execute();
            
        }
        
    });
});
