define([
    "dojo/_base/declare", "ct/Hash"
],
function(declare, Hash) {
    var lastWindows = {};
    
    var md2MainWidgets = {};
    
    return declare([], {
        constructor: function() {
           this.controllers = new Hash();
        },
        createInstance: function() {  
            return {
              handleEvent: this.handleEvent,
              addController: this.addController,
              removeController: this.removeController,
              instance: this,
              getLastWindow: this.getLastWindow,
              registerMD2MainWidget: this.registerMD2MainWidget,
              getMD2MainWidget: this.getMD2MainWidget
            };
        },
        
        getLastWindow: function(id) {
            var window = lastWindows[id];
            if(!window) {
                return null;
            }
            return window;
        },
        
        registerMD2MainWidget: function(id, md2MainWidget) {
            md2MainWidgets[id] = md2MainWidget;
        },
        
        getMD2MainWidget: function(id) {
            var md2MainWidget = md2MainWidgets[id];
            if(!md2MainWidget) {
                return null;
            }
            return md2MainWidget;
        },
        
        handleEvent: function(event, workflowelement) {
          if
        (event === "LocationEvent" && workflowelement === "LocationDetection")
        {  this.instance.controllers.get("md2.wfe.LocationDetection.Controller").closeWindow();
           this.instance.controllers.get("md2.wfe.LocationDetection.Controller")._isFirstExecution = true;
           lastWindows["md2_"+workflowelement] = "md2_Mediacapturing";
           this.instance.controllers.get("md2.wfe.Mediacapturing.Controller").openWindow();
        }
        else if
        (event === "MediacapturedEvent" && workflowelement === "Mediacapturing")
        {  this.instance.controllers.get("md2.wfe.Mediacapturing.Controller").closeWindow();
           this.instance.controllers.get("md2.wfe.Mediacapturing.Controller")._isFirstExecution = true;
           this.instance.controllers.get("md2.wfe.SubmitComplaint.Controller").openWindow();
        }
        else if
        (event === "SubmitEvent" && workflowelement === "SubmitComplaint")
        {  this.instance.controllers.get("md2.wfe.SubmitComplaint.Controller").closeWindow();
           this.instance.controllers.get("md2.wfe.SubmitComplaint.Controller")._isFirstExecution = true;
           this.instance.controllers.get("md2.wfe.LocationDetection.Controller").openWindow();
        }

        },
        
        addController: function (controller, properties) {
            this.controllers.set(properties.objectClass[0],controller);
        },
    
        removeController: function (controller, properties) {
        }    
    });
});
