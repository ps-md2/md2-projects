define([
    "dojo/_base/declare",
    "md2_runtime/entities/_Entity"
],
function(declare, _Entity) {
    
    var Complaint = declare([_Entity], {
        
        _datatype: "Complaint",
        
        attributeTypes: {
            loc: "Location",
            descriptions: "string",
            feedback: "string",
            status: "ComplaintStatus"
        },
        
        _initialize: function() {
            this._attributes = {
                loc: null,
                descriptions: this._typeFactory.create("string", null),
                feedback: this._typeFactory.create("string", null),
                status: this._typeFactory.create("ComplaintStatus", "VALUE0")
            };
        }
        
    });
    
    /**
     * Entity Factory
     */
    return declare([], {
        
        datatype: "Complaint",
        
        create: function() {
            return new Complaint(this.typeFactory);
        }
        
    });
});
