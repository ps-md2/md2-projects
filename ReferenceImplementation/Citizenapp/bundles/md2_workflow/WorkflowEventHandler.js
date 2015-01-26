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
                          changeWorkflowElement: this.changeWorkflowElement,
                          fireEventToBackend: this.fireEventToBackend,
                          instance: this
                        };
                    },
                    
                    handleEvent: function(event, workflowelement) {
                      if
                    (event === "LocationEvent" && workflowelement === "LocationDetection")
                    {  
                        this.changeWorkflowElement("md2.wfe.LocationDetection.Controller", "md2.wfe.Mediacapturing.Controller", "md2_Mediacapturing");
                    }
                    else if
                    (event === "MediacapturedEvent" && workflowelement === "Mediacapturing")
                    {  
                        this.changeWorkflowElement("md2.wfe.Mediacapturing.Controller", "md2.wfe.SubmitComplaint.Controller", "md2_SubmitComplaint");
                    }
                    else if
                    (event === "SubmitEvent" && workflowelement === "SubmitComplaint")
                    {  
                        this.changeWorkflowElement("md2.wfe.SubmitComplaint.Controller", "md2.wfe.LocationDetection.Controller", "md2_LocationDetection");
                    }
                    },
                    
                    addController: function (controller, properties) {
                        this.controllers.set(properties.objectClass[0],controller);
                    },
                
                    removeController: function (controller, properties) {
                    },
                    
					changeWorkflowElement: function(previousControllerId, nextControllerId, nextWorflowElement) {
						 var previousController = this.instance.controllers.get(previousControllerId);
						 var nextController = this.instance.controllers.get(nextControllerId);  
						 nextController._startedWorkflowInstanceId = previousController._startedWorkflowInstanceId;
						 previousController.closeWindow();
						 previousController._isFirstExecution = true;
						 this.instance.workflowStateHandler.setResumeWorkflowElement(nextController._startedWorkflowInstanceId, nextWorflowElement);
						 nextController.openWindow();
					 },
					 
					 //TODO: Notification. Reset Workflow
					 fireEventToBackend: function(event, workflowElement, currentControllerId){
						 var currentController = this.instance.controllers.get(currentControllerId);
						 currentController.closeWindow();
						 currentController._isFirstExecution = true;
						 alert("To be implemented. \n\
							 \nEvent:"+ event+
							 "\nWorkflow Element:"+workflowElement+
							 "\nWorkflow Instance:"+ currentController._startedWorkflowInstanceId);
					 }
                
                });
            });
