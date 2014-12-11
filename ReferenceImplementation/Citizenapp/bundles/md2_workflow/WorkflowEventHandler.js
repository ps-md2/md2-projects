define([
    "dojo/_base/declare", "ct/Hash"
],
function(declare, Hash) {
    
    return declare([], {
        constructor: function() {
            this.controllers = new Hash();
        },
        createInstance: function() {
            return {
                handleEvent: this.handleEvent,
                addController: this.addController,
                removeController: this.removeController,
                instance: this
            };
        },
        
        handleEvent: function(event, workflowelement) {
           if (event === "LocationEvent" && workflowelement === "Locationdetection")
           {
              // TODO: Accessing private attribute _isFirstExecution should be solved somehow differently in the future! 
             
              this.instance.controllers.get("md2.wfe.Locationdetection.Controller").closeWindow();
              this.instance.controllers.get("md2.wfe.Locationdetection.Controller")._isFirstExecution = true;
              this.instance.controllers.get("md2.wfe.MediaCapturing.Controller").openWindow();
              
           }
   
        },
        
        addController: function (controller, properties) {
           // console.log("controller", controller);
           // console.log("properties", properties);
           // console.log("properties", properties.objectClass[0]);
            this.controllers.set(properties.objectClass[0],controller);
 
        },
        
        removeController: function (controller, properties) {
        }
        
    });
});
