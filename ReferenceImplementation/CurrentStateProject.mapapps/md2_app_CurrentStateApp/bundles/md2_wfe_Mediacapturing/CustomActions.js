define([
    "dojo/_base/declare",
    "./actions/Init",
    "./actions/Next",
    "./actions/__startupAction",
    "./actions/__processChainExecuteStepAction",
    "./actions/__processChainProcessingAction",
    "./actions/__registerProcessChainActionEventTrigger",
    "./actions/__processChainSetProcessChainMediaProcessChainAction"
],
function(
    declare,
    init,
    next,
    __startupAction,
    __processChainExecuteStepAction,
    __processChainProcessingAction,
    __registerProcessChainActionEventTrigger,
    __processChainSetProcessChainMediaProcessChainAction
) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all actions.
         */
        createInstance: function() {
            return [
                new init(),
                new next(),
                new __startupAction(),
                new __processChainExecuteStepAction(),
                new __processChainProcessingAction(),
                new __registerProcessChainActionEventTrigger(),
                new __processChainSetProcessChainMediaProcessChainAction()
            ];
        }
        
    });
});
