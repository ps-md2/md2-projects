define([
    "dojo/_base/declare",
    "./models/Complaint",
    "./models/Location",
    "./models/ComplaintStatus"
],
function(declare, Complaint, Location, ComplaintStatus) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all model elements (entities and enums).
         */
        createInstance: function() {
            return [
                new Complaint(),
                new Location(),
                new ComplaintStatus()
            ];
        }
        
    });
});
