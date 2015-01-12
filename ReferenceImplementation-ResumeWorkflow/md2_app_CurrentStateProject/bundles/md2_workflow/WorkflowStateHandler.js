define([
    "dojo/_base/declare", "ct/Hash"
],
function WorkflowStateHandler() {

  var md2MainWidgets = {};
 
  if ( arguments.callee._singletonInstance )
    return arguments.callee._singletonInstance;
  arguments.callee._singletonInstance = this;

  this.registerMD2MainWidget = function(id, md2MainWidget) {
    md2MainWidgets[id] = md2MainWidget;
  };
});
