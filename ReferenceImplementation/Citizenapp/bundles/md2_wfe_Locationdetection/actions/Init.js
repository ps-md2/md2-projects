define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider0ft = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0fu = this.$.widgetRegistry.getWidget("streetLbl");
            this.$.dataMapper.map(widget0fu, contentProvider0ft, "loc.myStreet");
            
            var contentProvider0fv = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0fw = this.$.widgetRegistry.getWidget("streetNoLbl");
            this.$.dataMapper.map(widget0fw, contentProvider0fv, "loc.myStreetNo");
            
            var contentProvider0fx = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0fy = this.$.widgetRegistry.getWidget("cityLbl");
            this.$.dataMapper.map(widget0fy, contentProvider0fx, "loc.myCity");
            
            var contentProvider0fz = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0g0 = this.$.widgetRegistry.getWidget("countryLbl");
            this.$.dataMapper.map(widget0g0, contentProvider0fz, "loc.myCountry");
            
            var contentProvider0g1 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0g2 = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget0g2, contentProvider0g1, "loc.myStreet");
            
            var contentProvider0g3 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0g4 = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget0g4, contentProvider0g3, "loc.myStreetNo");
            
            var contentProvider0g5 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0g6 = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget0g6, contentProvider0g5, "loc.myCity");
            
            var contentProvider0g7 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0g8 = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget0g8, contentProvider0g7, "loc.myCountry");
            
            var contentProvider0gb = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0gc = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget0gc, contentProvider0gb, "loc.myStreet");
            
            var contentProvider0gf = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0gg = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget0gg, contentProvider0gf, "loc.myStreetNo");
            
            
            var contentProvider0gn = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0go = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget0go, contentProvider0gn, "loc.myCity");
            
           
            
            var contentProvider0gt = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget0gu = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget0gu, contentProvider0gt, "loc.myCountry");
            
            
        }
        
    });
});
