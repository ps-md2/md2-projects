define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action",
    "dojo/_base/lang"
],
function(declare, _Action, lang) {
    
    return declare([_Action], {
        
        _actionSignature: "next",
        
        execute: function() {
            
            var targetContentProvider0b0 = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var expr0b1 = this.$.contentProviderRegistry.getContentProvider("addressProvider").getContent();
            targetContentProvider0b0.setValue("loc", expr0b1);
            
            var action0b2 = this.$.actionFactory.getContentProviderOperationAction("addressProvider", "save");
            action0b2.execute();
            
            var action0b3 = this.$.actionFactory.getContentProviderOperationAction("complaintProvider", "save");
            action0b3.execute();
            
            var action0b4 = this.$.actionFactory.getFireEventAction("SubmitComplaint","SubmitEvent");
            action0b4.execute();
            
            var message0b6 = lang.hitch(this, function() {
                var expr0b7 = this.$.create("string", "Complaint submitted!");
                return expr0b7.toString();
            });
            var action0b5 = this.$.actionFactory.getDisplayMessageAction("d7fcbe333ebdff24d1022e96c782401398909172", message0b6);
            action0b5.execute();
            
        }
        
    });
});
