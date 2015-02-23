define([
    "dojo/_base/declare",
    "./actions/Init",
    "./actions/__startupAction",
    "./actions/__processChainExecuteStepAction",
    "./actions/__processChainProcessingAction",
    "./actions/__registerProcessChainActionEventTrigger",
    "./actions/__processChainSetProcessChainReceiveChainAction"
],
function(
    declare,
    init,
    __startupAction,
    __processChainExecuteStepAction,
    __processChainProcessingAction,
    __registerProcessChainActionEventTrigger,
    __processChainSetProcessChainReceiveChainAction
) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all actions.
         */
        createInstance: function() {
            return [
                new init(),
                new __startupAction(),
                new __processChainExecuteStepAction(),
                new __processChainProcessingAction(),
                new __registerProcessChainActionEventTrigger(),
                new __processChainSetProcessChainReceiveChainAction()
            ];
        }
        
    });
});
