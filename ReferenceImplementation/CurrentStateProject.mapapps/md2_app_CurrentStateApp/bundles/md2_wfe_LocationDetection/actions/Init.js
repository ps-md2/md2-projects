define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider076 = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget077 = this.$.widgetRegistry.getWidget("streetValue");
            this.$.dataMapper.map(widget077, contentProvider076, "myStreet");
            
            var contentProvider078 = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget079 = this.$.widgetRegistry.getWidget("streetNoValue");
            this.$.dataMapper.map(widget079, contentProvider078, "myStreetNo");
            
            var contentProvider07a = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07b = this.$.widgetRegistry.getWidget("cityValue");
            this.$.dataMapper.map(widget07b, contentProvider07a, "myCity");
            
            var contentProvider07c = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07d = this.$.widgetRegistry.getWidget("countryValue");
            this.$.dataMapper.map(widget07d, contentProvider07c, "myCountry");
            
            var contentProvider07e = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07f = this.$.widgetRegistry.getWidget("zipValue");
            this.$.dataMapper.map(widget07f, contentProvider07e, "myPostalCode");
            
            var contentProvider07g = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07h = this.$.widgetRegistry.getWidget("latitudeValue");
            this.$.dataMapper.map(widget07h, contentProvider07g, "myLatitude");
            
            var contentProvider07i = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07j = this.$.widgetRegistry.getWidget("longitudeValue");
            this.$.dataMapper.map(widget07j, contentProvider07i, "myLongitude");
            
            var contentProvider07k = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07l = this.$.widgetRegistry.getWidget("streetValue1");
            this.$.dataMapper.map(widget07l, contentProvider07k, "myStreet");
            
            var contentProvider07m = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07n = this.$.widgetRegistry.getWidget("streetNoValue1");
            this.$.dataMapper.map(widget07n, contentProvider07m, "myStreetNo");
            
            var contentProvider07o = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07p = this.$.widgetRegistry.getWidget("cityValue1");
            this.$.dataMapper.map(widget07p, contentProvider07o, "myCity");
            
            var contentProvider07q = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07r = this.$.widgetRegistry.getWidget("zipValue1");
            this.$.dataMapper.map(widget07r, contentProvider07q, "myPostalCode");
            
            var contentProvider07s = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07t = this.$.widgetRegistry.getWidget("countryValue1");
            this.$.dataMapper.map(widget07t, contentProvider07s, "myCountry");
            
            var contentProvider07u = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07v = this.$.widgetRegistry.getWidget("latitudeValue1");
            this.$.dataMapper.map(widget07v, contentProvider07u, "myLatitude");
            
            var contentProvider07w = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget07x = this.$.widgetRegistry.getWidget("longitudeValue1");
            this.$.dataMapper.map(widget07x, contentProvider07w, "myLongitude");
            
        }
        
    });
});
