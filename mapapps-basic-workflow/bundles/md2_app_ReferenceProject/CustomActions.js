define([
    "dojo/_base/declare",
    "./actions/Init",
    "./actions/__startupAction",
    "./actions/__processChainExecuteStepAction",
    "./actions/__processChainProcessingAction",
    "./actions/__processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906",
    "./actions/__processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928",
    "./actions/__processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd",
    "./actions/__registerProcessChainActionEventTrigger",
    "./actions/__processChainSetProcessChainMyWorkflowAction"
],
function(
    declare,
    init,
    __startupAction,
    __processChainExecuteStepAction,
    __processChainProcessingAction,
    __processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906,
    __processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928,
    __processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd,
    __registerProcessChainActionEventTrigger,
    __processChainSetProcessChainMyWorkflowAction
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
                new __processChainActionEventTrigger_1f944c2608efb3bc6c96b04bd80b2b741c845906(),
                new __processChainActionEventTrigger_29aa495c4648acd7679bf7db841b2b794cc0f928(),
                new __processChainActionEventTrigger_fc57a13b5249bdb62057460aeb90add3169032bd(),
                new __registerProcessChainActionEventTrigger(),
                new __processChainSetProcessChainMyWorkflowAction()
            ];
        }
        
    });
});
