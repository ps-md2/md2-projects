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
                workflowStateHandler: null,
                addController: this.addController,
                removeController: this.removeController,
                instance: this,
                resetAll: this.resetAll
            };
        },

        handleEvent: function(event, workflowelement) {
            if
            (event === "ReviewEvent" && workflowelement === "ReviewComplaint")
            {
            var currentController = this.instance.controllers.get("md2.wfe.ReviewComplaint.Controller");
            this.workflowStateHandler.fireEventToBackend(event, workflowelement, currentController, currentController.getTransactionId());
            this.resetAll();
            }
        },

        addController: function (controller, properties) {
            this.controllers.set(properties.objectClass[0],controller);
        },

        removeController: function (controller, properties) {
        },

        resetAll: function(){
            this.instance.controllers.forEach(function(controller){
                controller.finish();
            });
        }

    });
});
