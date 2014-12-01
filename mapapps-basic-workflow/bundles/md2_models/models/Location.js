define([
    "dojo/_base/declare",
    "md2_runtime/entities/_Entity"
],
function(declare, _Entity) {
    
    var Location = declare([_Entity], {
        
        _datatype: "Location",
        
        attributeTypes: {
            myStreet: "string",
            myStreetNo: "string",
            myPostalCode: "integer",
            myCity: "string",
            myCountry: "string",
            myLatitude: "float",
            myLongitude: "float"
        },
        
        _initialize: function() {
            this._attributes = {
                myStreet: this._typeFactory.create("string", null),
                myStreetNo: this._typeFactory.create("string", null),
                myPostalCode: this._typeFactory.create("integer", null),
                myCity: this._typeFactory.create("string", null),
                myCountry: this._typeFactory.create("string", null),
                myLatitude: this._typeFactory.create("float", null),
                myLongitude: this._typeFactory.create("float", null)
            };
        }
        
    });
    
    /**
     * Entity Factory
     */
    return declare([], {
        
        datatype: "Location",
        
        create: function() {
            return new Location(this.typeFactory);
        }
        
    });
});
