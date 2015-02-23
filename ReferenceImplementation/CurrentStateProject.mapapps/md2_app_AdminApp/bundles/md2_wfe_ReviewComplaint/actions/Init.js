define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider0ci = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0cj = this.$.widgetRegistry.getWidget("streetValue4");
            this.$.dataMapper.map(widget0cj, contentProvider0ci, "myStreet");
            
            var contentProvider0ck = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0cl = this.$.widgetRegistry.getWidget("streetNoValue4");
            this.$.dataMapper.map(widget0cl, contentProvider0ck, "myStreetNo");
            
            var contentProvider0cm = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0cn = this.$.widgetRegistry.getWidget("zipValue4");
            this.$.dataMapper.map(widget0cn, contentProvider0cm, "myPostalCode");
            
            var contentProvider0co = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0cp = this.$.widgetRegistry.getWidget("cityValue4");
            this.$.dataMapper.map(widget0cp, contentProvider0co, "myCity");
            
            var contentProvider0cq = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0cr = this.$.widgetRegistry.getWidget("countryValue4");
            this.$.dataMapper.map(widget0cr, contentProvider0cq, "myCountry");
            
            var contentProvider0cs = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0ct = this.$.widgetRegistry.getWidget("latitudeValue4");
            this.$.dataMapper.map(widget0ct, contentProvider0cs, "myLatitude");
            
            var contentProvider0cu = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0cv = this.$.widgetRegistry.getWidget("longitudeValue4");
            this.$.dataMapper.map(widget0cv, contentProvider0cu, "myLongitude");
            
            var contentProvider0cw = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0cx = this.$.widgetRegistry.getWidget("descriptionText1");
            this.$.dataMapper.map(widget0cx, contentProvider0cw, "descriptions");
            
            var contentProvider0cy = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0cz = this.$.widgetRegistry.getWidget("feedback");
            this.$.dataMapper.map(widget0cz, contentProvider0cy, "feedback");
            
            var contentProvider0d0 = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0d1 = this.$.widgetRegistry.getWidget("status");
            this.$.dataMapper.map(widget0d1, contentProvider0d0, "status");
            
            var widget0d2 = this.$.widgetRegistry.getWidget("SendFeedback");
            var action0d3 = this.$.actionFactory.getCustomAction("sendFeedback");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0d2, action0d3);
            
        }
        
    });
});
