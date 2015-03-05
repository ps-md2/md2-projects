define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider0aw = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0ax = this.$.widgetRegistry.getWidget("fileupload");
            this.$.dataMapper.map(widget0ax, contentProvider0aw, "picture");
            
            var contentProvider0aw = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0ax = this.$.widgetRegistry.getWidget("imageoutput");
            this.$.dataMapper.map(widget0ax, contentProvider0aw, "picture");
        }
        
    });
});
