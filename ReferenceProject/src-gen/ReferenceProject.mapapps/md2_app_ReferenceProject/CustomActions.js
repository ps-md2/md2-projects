define([
    "dojo/_base/declare",
    "./actions/__startupAction",
    "./actions/StartAction"
],
function(
    declare,
    __startupAction,
    startAction
) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all actions.
         */
        createInstance: function() {
            return [
                new __startupAction(),
                new startAction()
            ];
        }
        
    });
});
