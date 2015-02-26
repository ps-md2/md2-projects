define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "CallWS",
        
        execute: function() {
            
            var widget1337 = this.$.widgetRegistry.getWidget("Next2");
            var that = this;
            var whenFunction = function(){
                return that.$.contentProviderRegistry.getContentProvider("addressProvider").getValue("myLatitude");
            };
            
            var action1337 = this.$.actionFactory.getWebServiceCallAction("http://localhost:8080/CurrentStateProject.backend/service/externalDummyWS/sum", "POST", {
            }, {
                "float1": 3.4, 
                "float2": 22.4, 
                "float3": whenFunction
            });
            this.$.eventRegistry.get("widget/onClick").registerAction(widget1337, action1337);
            
            var widget1338 = this.$.widgetRegistry.getWidget("Next2");
            
            var action1338 = this.$.actionFactory.getWebServiceCallAction("http://psmd2.uni-muenster.de:8080/SendMail/api/mail/send/", "GET", {
                "to": "andreas.fuchs@uni-muenster.de", 
                "subject": "Hallo Andreas", 
                "body": "Diese E-Mail stammt aus map.apps!" 
            }, {
            });
            this.$.eventRegistry.get("widget/onClick").registerAction(widget1338, action1338);
            
        }
        
    });
});
