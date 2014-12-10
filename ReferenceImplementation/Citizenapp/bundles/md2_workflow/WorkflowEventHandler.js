define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "ct/array", 
    "ct/async"
],
function(declare, d_array, ct_array, ct_async) {
    
    return declare([], {
        createInstance: function() {
            alert("hallo");
            return {
                handleEvent: this.handleEvent,
                addController: this.addController
            }
        },
        
        handleEvent: function(event, workflowelement) {
           if (event === "LocationEvent" && workflowelement === "Locationdetection")
           {
              var wfe = this._mediacapturingController;
              wfe.activate();
           }
            
             
        },
        
        addController: function (controller) {
            var id = controller.get("id"),
                    controllers = this.controllers;
            //controllers.set(id, controller);
            //if (this.activated && !this._initToolsetDefs) {
            //    ct_array.arrayAdd(this._controllersToAdd || (this._controllersToAdd = []), controller);
            //    var task = this._addControllerTask || (this._addControllerTask = ct_async.task(function () {
            //        var controllersToAdd = this._controllersToAdd;
            //        this._controllersToAdd = [];
            //        d_array.forEach(controllersToAdd, function (controller) {
            //            this._addControllerToControllersets(controller, id);
            //        }, this);
            //    }, this));
            //    task.delay(100);
            //}
        }
        
    });
});
