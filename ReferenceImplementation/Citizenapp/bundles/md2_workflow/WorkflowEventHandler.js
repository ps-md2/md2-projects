            define([
                "dojo/_base/declare", "ct/Hash", "ct/request",
    "dojo/json", "dojo/request/xhr", "dojo/_base/lang",
            ],
            function(declare, Hash, ct_request, json, xhr, lang) {
                
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
                          instance: this,
                          url : this._properties.uri
                        };
                    },
                    
                    handleEvent: function(event, workflowelement) {
                      if
                    (event === "LocationEvent" && workflowelement === "LocationDetection")
                    {  
                        this.fireEventToBackend(event, workflowelement, "md2.wfe.LocationDetection.Controller");
                    }
                    else if
                    (event === "MediacapturedEvent" && workflowelement === "Mediacapturing")
                    {  
                        this.fireEventToBackend(event, workflowelement, "md2.wfe.SubmitComplaint.Controller");
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
                            var parameters = {
                                instanceId: currentController._startedWorkflowInstanceId,
                                lastEventFired: event,
                                currentWfe: workflowElement
                            };
                            var headers = lang.mixin({
                                "Content-Type": "application/json",
                                Accept: this.accepts
                            }, this.headers, {});
                            /*ct_request({
                                url: this.url,
                                content: parameters
                            })
                            /*options = options || {};

                            var jsObject = this._translateToJSTypes(object);

                            var headers = lang.mixin({
                                "Content-Type": "application/json",
                                Accept: this.accepts
                            }, this.headers, options.headers || {});*/
                            var xhrArgs = {
                                url: this.url,
                                content: parameters,
                                handleAs: "json"//,
                                //headers : headers
                            };
                            return ct_request(xhrArgs);


                             alert("To be implemented. \n\
                                     \nEvent:"+ event+
                                     "\nWorkflow Element:"+workflowElement+
                                     "\nWorkflow Instance:"+ currentController._startedWorkflowInstanceId);
                     },
                      query: function(event, workflowelement, currentControllerId, query, options) {

                                    var url = this.url;
                                    var parameters = {

                                    };

                                    var promise = ct_when(ct_request({
                                        url: url + "eventHandler/",
                                        content: parameters
                                    }), function(response) {
                                        var result = response; // (assume response is always an array with >= 0 elements. (Was: lang.isArray(response) ? response : [response];)
                                        var total = result.length;
                                        result = StoreUtil.sort(result, options);
                                        result.total = total;
                                        return result; //this._translateToMD2Types(result);
                                    }, this);

                                    // need delegate, because the promise is frozen in chrome
                                    promise = lang.delegate(promise, {
                                        total: promise.then(function(result) {
                                            return result.total;
                                        })
                                    });

            return QueryResults(promise);
        },
                
                });
                
                
            });
