define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action",
    "dojo/_base/lang"
],
function(declare, _Action, lang) {
    
    return declare([_Action], {
        
        _actionSignature: "GoOn",
        
        execute: function() {
            
            var expr089 = this.$.widgetRegistry.getWidget("cityValue").getValue();
            var expr08a = this.$.create("string", "Münster");
            var bool088 = expr089.equals(expr08a);
            var bool087 = !bool088;
            if (bool087) {
                var message08c = lang.hitch(this, function() {
                    var expr08d = this.$.create("string", "Only complaints from Münster are accepted!");
                    return expr08d.toString();
                });
                var action08b = this.$.actionFactory.getDisplayMessageAction("ed445856fc04d70e1f115dbab54720b3ffec4f39", message08c);
                action08b.execute();
            }
            
        }
        
    });
});
