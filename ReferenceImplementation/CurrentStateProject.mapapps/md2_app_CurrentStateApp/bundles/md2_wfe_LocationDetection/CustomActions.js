define([
    "dojo/_base/declare",
    "./actions/Init",
    "./actions/ButtonInit",
    "./actions/MyLocationAction",
    "./actions/GoOn",
    "./actions/SaveComplaint",
    "./actions/__startupAction",
    "./actions/__processChainExecuteStepAction",
    "./actions/__processChainProcessingAction",
    "./actions/__processChainActionEventTrigger_e88c73ce2748b8aeb8b5d149045638d5eebb94d1",
    "./actions/__processChainActionEventTrigger_0d320e0de11118a0c2f06867736ad9a7c1bb6ef6",
    "./actions/__registerProcessChainActionEventTrigger",
    "./actions/__processChainSetProcessChainLocationProcessChainAction"
],
function(
    declare,
    init,
    buttonInit,
    MyLocationAction,
    GoOn,
    saveComplaint,
    __startupAction,
    __processChainExecuteStepAction,
    __processChainProcessingAction,
    __processChainActionEventTrigger_e88c73ce2748b8aeb8b5d149045638d5eebb94d1,
    __processChainActionEventTrigger_0d320e0de11118a0c2f06867736ad9a7c1bb6ef6,
    __registerProcessChainActionEventTrigger,
    __processChainSetProcessChainLocationProcessChainAction
) {
    
    return declare([], {
        
        /**
         * Provide an array with instances of all actions.
         */
        createInstance: function() {
            return [
                new init(),
                new buttonInit(),
                new MyLocationAction(),
                new GoOn(),
                new saveComplaint(),
                new __startupAction(),
                new __processChainExecuteStepAction(),
                new __processChainProcessingAction(),
                new __processChainActionEventTrigger_e88c73ce2748b8aeb8b5d149045638d5eebb94d1(),
                new __processChainActionEventTrigger_0d320e0de11118a0c2f06867736ad9a7c1bb6ef6(),
                new __registerProcessChainActionEventTrigger(),
                new __processChainSetProcessChainLocationProcessChainAction()
            ];
        }
        
    });
});
