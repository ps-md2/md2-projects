define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action",
    "dojo/_base/lang"
],
function(declare, _Action, lang) {
    
    return declare([_Action], {
        
        _actionSignature: "CallWS",
        
        execute: function() {
            
            var widget1337 = this.$.widgetRegistry.getWidget("Next2");            
            var action1337 = this.$.actionFactory.getWebServiceCallAction("http://localhost:8080/CurrentStateProject.backend/service/externalDummyWS/sum", "POST", {
            }, {
                "float1": 3.4, 
                "float2": 22.4, 
                "float3": lang.hitch(this, function(){return that.$.contentProviderRegistry.getContentProvider("addressProvider").getValue("myLatitude");})
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
