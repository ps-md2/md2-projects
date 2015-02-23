define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "GoOn",
        
        execute: function() {
            
            var expr0dc = this.$.widgetRegistry.getWidget("addFeedback").getValue();
            var expr0dd = this.$.create("boolean", false);
            var bool0db = expr0dc.equals(expr0dd);
            if (bool0db) {
                var action0de = this.$.actionFactory.getFireEventAction("ReviewComplaint","ReviewEvent");
                action0de.execute();
            }
            
        }
        
    });
});
