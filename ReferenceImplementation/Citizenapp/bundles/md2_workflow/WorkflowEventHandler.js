define([
    "dojo/_base/declare"
],
function(declare) {
    
    return declare([], {
        createInstance: function() {
            alert("hallo");
        },
        
        handleEvent: function(event, workflowelement) {
           if (event === "LocationEvent" && workflowelement === "Locationdetection")
           {
              var wfe = this._mediacapturingController;
              wfe.activate();
           }
            
             
        }
        
    });
});
