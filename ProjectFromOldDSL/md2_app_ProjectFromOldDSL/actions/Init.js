define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider031 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget032 = this.$.widgetRegistry.getWidget("streetLbl");
            this.$.dataMapper.map(widget032, contentProvider031, "loc.myStreet");
            
            var contentProvider033 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget034 = this.$.widgetRegistry.getWidget("streetNoLbl");
            this.$.dataMapper.map(widget034, contentProvider033, "loc.myStreetNo");
            
            var contentProvider035 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget036 = this.$.widgetRegistry.getWidget("cityLbl");
            this.$.dataMapper.map(widget036, contentProvider035, "loc.myCity");
            
            var contentProvider037 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget038 = this.$.widgetRegistry.getWidget("countryLbl");
            this.$.dataMapper.map(widget038, contentProvider037, "loc.myCountry");
            
            var contentProvider039 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03a = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget03a, contentProvider039, "loc.myStreet");
            
            var contentProvider03b = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03c = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget03c, contentProvider03b, "loc.myStreetNo");
            
            var contentProvider03d = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03e = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget03e, contentProvider03d, "loc.myCity");
            
            var contentProvider03f = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03g = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget03g, contentProvider03f, "loc.myCountry");
            
            var contentProvider03h = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03i = this.$.widgetRegistry.getWidget("streetLbl3");
            this.$.dataMapper.map(widget03i, contentProvider03h, "loc.myStreet");
            
            var contentProvider03j = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03k = this.$.widgetRegistry.getWidget("streetLbl31");
            this.$.dataMapper.map(widget03k, contentProvider03j, "loc.myStreet");
            
            var contentProvider03l = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03m = this.$.widgetRegistry.getWidget("streetLbl2");
            this.$.dataMapper.map(widget03m, contentProvider03l, "loc.myStreet");
            
            var contentProvider03n = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03o = this.$.widgetRegistry.getWidget("streetNoLbl31");
            this.$.dataMapper.map(widget03o, contentProvider03n, "loc.myStreetNo");
            
            var contentProvider03p = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03q = this.$.widgetRegistry.getWidget("streetNoLbl3");
            this.$.dataMapper.map(widget03q, contentProvider03p, "loc.myStreetNo");
            
            var contentProvider03r = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03s = this.$.widgetRegistry.getWidget("streetNoLbl2");
            this.$.dataMapper.map(widget03s, contentProvider03r, "loc.myStreetNo");
            
            var contentProvider03t = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03u = this.$.widgetRegistry.getWidget("cityLbl3");
            this.$.dataMapper.map(widget03u, contentProvider03t, "loc.myCity");
            
            var contentProvider03v = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03w = this.$.widgetRegistry.getWidget("cityLbl2");
            this.$.dataMapper.map(widget03w, contentProvider03v, "loc.myCity");
            
            var contentProvider03x = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget03y = this.$.widgetRegistry.getWidget("cityLbl31");
            this.$.dataMapper.map(widget03y, contentProvider03x, "loc.myCity");
            
            var contentProvider03z = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget040 = this.$.widgetRegistry.getWidget("countryLbl2");
            this.$.dataMapper.map(widget040, contentProvider03z, "loc.myCountry");
            
            var contentProvider041 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget042 = this.$.widgetRegistry.getWidget("countryLbl3");
            this.$.dataMapper.map(widget042, contentProvider041, "loc.myCountry");
            
            var contentProvider043 = this.$.contentProviderRegistry.getContentProvider("localComplaintProvider");
            var widget044 = this.$.widgetRegistry.getWidget("countryLbl31");
            this.$.dataMapper.map(widget044, contentProvider043, "loc.myCountry");
            
        }
        
    });
});
