define([
    "dojo/_base/declare",
    "./models/Complaint",
    "./models/Address",
    "./models/__ReturnStepStack",
    "./models/__ProcessChainControllerState",
    "./models/ComplaintStatus"
],
function(declare, Complaint, Address, __ReturnStepStack, __ProcessChainControllerState, ComplaintStatus) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all model elements (entities and enums).
         */
        createInstance: function() {
            return [
                new Complaint(),
                new Address(),
                new __ReturnStepStack(),
                new __ProcessChainControllerState(),
                new ComplaintStatus()
            ];
        }
        
    });
});
