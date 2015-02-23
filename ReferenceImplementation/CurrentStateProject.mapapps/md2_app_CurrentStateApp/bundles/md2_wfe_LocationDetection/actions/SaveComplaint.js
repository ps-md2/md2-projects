define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "saveComplaint",
        
        execute: function() {
            
            var targetContentProvider08e = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var expr08f = this.$.contentProviderRegistry.getContentProvider("addressProvider").getContent();
            targetContentProvider08e.setValue("loc", expr08f);
            
            var action08g = this.$.actionFactory.getContentProviderOperationAction("complaintProvider", "save");
            action08g.execute();
            
        }
        
    });
});
