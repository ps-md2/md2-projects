define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "CallWS",
        
        execute: function() {
            
            var widget1337 = this.$.widgetRegistry.getWidget("DetectLocationBtn");
            var action1337 = this.$.actionFactory.getWebServiceCallAction(
                    "http://localhost:8080/CurrentStateProject.backend/service/externalDummyWS/sum",
                    "POST",
                    null,
                    {"float1": 3.4,
                    "float2": 22.4,
                    "float3": 1.4}
            ); 
            this.$.eventRegistry.get("widget/onClick").registerAction(widget1337, action1337);
            
        }
        
    });
});
