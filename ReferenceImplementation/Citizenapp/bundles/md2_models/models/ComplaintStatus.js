define([
    "dojo/_base/declare",
    "md2_runtime/datatypes/_Enum"
],
function(declare, _Enum) {
    
    var ComplaintStatus = declare([_Enum], {
        
        _datatype: "ComplaintStatus",
        
        _enum: {
            VALUE0: "User is filling out complaint",
            VALUE1: "Complaint is sent to administration",
            VALUE2: "Complaint is in process",
            VALUE3: "Complaint has been handled by the administration"
        }
        
    });
    
    /**
     * Enum Factory
     */
    return declare([], {
        
        datatype: "ComplaintStatus",
        
        create: function(value) {
            return new ComplaintStatus(value, this.typeFactory);
        }
        
    });
});
