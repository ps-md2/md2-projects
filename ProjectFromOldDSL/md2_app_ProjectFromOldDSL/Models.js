define([
    "dojo/_base/declare",
    "./models/Complaint",
    "./models/Location2",
    "./models/__ReturnStepStack",
    "./models/__ProcessChainControllerState",
    "./models/ComplaintStatus"
],
function(declare, Complaint, Location2, __ReturnStepStack, __ProcessChainControllerState, ComplaintStatus) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all model elements (entities and enums).
         */
        createInstance: function() {
            return [
                new Complaint(),
                new Location2(),
                new __ReturnStepStack(),
                new __ProcessChainControllerState(),
                new ComplaintStatus()
            ];
        }
        
    });
});
