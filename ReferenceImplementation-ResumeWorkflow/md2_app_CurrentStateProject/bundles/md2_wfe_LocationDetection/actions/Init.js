define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider0bd = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0be = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget0be, contentProvider0bd, "loc.myStreet");
            
            var contentProvider0bf = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bg = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget0bg, contentProvider0bf, "loc.myStreetNo");
            
            var contentProvider0bh = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bi = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget0bi, contentProvider0bh, "loc.myCity");
            
            var contentProvider0bj = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bk = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget0bk, contentProvider0bj, "loc.myCountry");
            
            var contentProvider0bl = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bm = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget0bm, contentProvider0bl, "loc.myStreet");
            
            var contentProvider0bn = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bo = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget0bo, contentProvider0bn, "loc.myStreetNo");
            
            var contentProvider0bp = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bq = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget0bq, contentProvider0bp, "loc.myCity");
            
            var contentProvider0br = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0bs = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget0bs, contentProvider0br, "loc.myCountry");
            
        }
        
    });
});
