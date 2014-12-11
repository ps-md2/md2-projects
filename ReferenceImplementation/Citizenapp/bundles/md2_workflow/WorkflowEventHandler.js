define([
    "dojo/_base/declare", "ct/Hash"
],
function(declare, Hash) {
    
    return declare([], {
        constructor: function() {
            this.controllers = new Hash();
        },
        createInstance: function() {
            alert("hallo");
            return {
                handleEvent: this.handleEvent,
                addController: this.addController,
                removeController: this.removeController
            };
        },
        
        handleEvent: function(event, workflowelement) {
           if (event === "LocationEvent" && workflowelement === "Locationdetection")
           {
               // TODO get correct controller from list this.controllers
              var wfe = this._mediacapturingController;
              wfe.activate();
           }
            
             
        },
        
        addController: function (controller, properties) {
            console.log("controller", controller);
            console.log("properties", properties);
            var id = controller.get("id"),
                    controllers = this.controllers;
            
            // TODO put controller into list this.controllers
            
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
        },
        
        removeController: function (controller, properties) {
        }
        
    });
});
