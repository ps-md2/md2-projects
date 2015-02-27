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
            (event === "LocationEvent" && workflowelement === "LocationDetection")
            {
            var currentController = this.instance.controllers.get("md2.wfe.LocationDetection.Controller");
            var nextController = this.instance.controllers.get("md2.wfe.Mediacapturing.Controller");
            this.workflowStateHandler.changeWorkflowElement(currentController, nextController, "md2_Mediacapturing");
            }
            else if
            (event === "WithoutPhotoEvent" && workflowelement === "LocationDetection")
            {
            var currentController = this.instance.controllers.get("md2.wfe.LocationDetection.Controller");
            var nextController = this.instance.controllers.get("md2.wfe.SubmitComplaint.Controller");
            this.workflowStateHandler.changeWorkflowElement(currentController, nextController, "md2_SubmitComplaint");
            }
            else if
            (event === "MediacapturedEvent" && workflowelement === "Mediacapturing")
            {
            var currentController = this.instance.controllers.get("md2.wfe.Mediacapturing.Controller");
            var nextController = this.instance.controllers.get("md2.wfe.SubmitComplaint.Controller");
            this.workflowStateHandler.changeWorkflowElement(currentController, nextController, "md2_SubmitComplaint");
            }
            else if
            (event === "SubmitEvent" && workflowelement === "SubmitComplaint")
            {
            var currentController = this.instance.controllers.get("md2.wfe.SubmitComplaint.Controller");
            this.workflowStateHandler.fireEventToBackend(event, workflowelement, currentController, currentController.getTransactionId());
            this.resetAll();
            }
            else if
            (event === "EndOfProcessEvent" && workflowelement === "ReceiveFeedback")
            {
            var currentController = this.instance.controllers.get("md2.wfe.ReceiveFeedback.Controller");
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
