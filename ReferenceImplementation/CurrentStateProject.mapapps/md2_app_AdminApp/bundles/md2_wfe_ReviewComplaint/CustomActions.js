define([
    "dojo/_base/declare",
    "./actions/Init",
    "./actions/SendFeedback",
    "./actions/Next",
    "./actions/GoOn",
    "./actions/__startupAction",
    "./actions/__processChainExecuteStepAction",
    "./actions/__processChainProcessingAction",
    "./actions/__processChainActionEventTrigger_0ca5a1a85f9f892ebaacbfe12f849d9ed0f51781",
    "./actions/__registerProcessChainActionEventTrigger",
    "./actions/__processChainSetProcessChainReviewProcessChainAction"
],
function(
    declare,
    init,
    sendFeedback,
    next,
    GoOn,
    __startupAction,
    __processChainExecuteStepAction,
    __processChainProcessingAction,
    __processChainActionEventTrigger_0ca5a1a85f9f892ebaacbfe12f849d9ed0f51781,
    __registerProcessChainActionEventTrigger,
    __processChainSetProcessChainReviewProcessChainAction
) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all actions.
         */
        createInstance: function() {
            return [
                new init(),
                new sendFeedback(),
                new next(),
                new GoOn(),
                new __startupAction(),
                new __processChainExecuteStepAction(),
                new __processChainProcessingAction(),
                new __processChainActionEventTrigger_0ca5a1a85f9f892ebaacbfe12f849d9ed0f51781(),
                new __registerProcessChainActionEventTrigger(),
                new __processChainSetProcessChainReviewProcessChainAction()
            ];
        }
        
    });
});
