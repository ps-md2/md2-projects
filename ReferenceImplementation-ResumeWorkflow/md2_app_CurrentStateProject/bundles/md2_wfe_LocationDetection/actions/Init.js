define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider05n = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget05o = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget05o, contentProvider05n, "loc.myStreet");
            
            var contentProvider05p = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget05q = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget05q, contentProvider05p, "loc.myStreetNo");
            
            var contentProvider05r = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget05s = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget05s, contentProvider05r, "loc.myCity");
            
            var contentProvider05t = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget05u = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget05u, contentProvider05t, "loc.myCountry");
            
            var contentProvider05v = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget05w = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget05w, contentProvider05v, "loc.myStreet");
            
            var contentProvider05x = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget05y = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget05y, contentProvider05x, "loc.myStreetNo");
            
            var contentProvider05z = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget060 = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget060, contentProvider05z, "loc.myCity");
            
            var contentProvider061 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget062 = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget062, contentProvider061, "loc.myCountry");
            
        }
        
    });
});
