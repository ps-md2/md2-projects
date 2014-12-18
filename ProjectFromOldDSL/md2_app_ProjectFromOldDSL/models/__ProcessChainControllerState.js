define([
    "dojo/_base/declare",
    "md2_runtime/entities/_Entity"
],
function(declare, _Entity) {
    
    var __ProcessChainControllerState = declare([_Entity], {
        
        _datatype: "__ProcessChainControllerState",
        
        attributeTypes: {
            currentProcessChainStep: "string",
            lastEventFired: "string"
        },
        
        _initialize: function() {
            this._attributes = {
                currentProcessChainStep: this._typeFactory.create("string", null),
                lastEventFired: this._typeFactory.create("string", null)
            };
        }
        
    });
    
    /**
     * Entity Factory
     */
    return declare([], {
        
        datatype: "__ProcessChainControllerState",
        
        create: function() {
            return new __ProcessChainControllerState(this.typeFactory);
        }
        
    });
});
