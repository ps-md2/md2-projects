define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider0bl = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0bm = this.$.widgetRegistry.getWidget("streetValue3");
            this.$.dataMapper.map(widget0bm, contentProvider0bl, "myStreet");
            
            var contentProvider0bn = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0bo = this.$.widgetRegistry.getWidget("streetNoValue3");
            this.$.dataMapper.map(widget0bo, contentProvider0bn, "myStreetNo");
            
            var contentProvider0bp = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0bq = this.$.widgetRegistry.getWidget("zipValue3");
            this.$.dataMapper.map(widget0bq, contentProvider0bp, "myPostalCode");
            
            var contentProvider0br = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0bs = this.$.widgetRegistry.getWidget("cityValue3");
            this.$.dataMapper.map(widget0bs, contentProvider0br, "myCity");
            
            var contentProvider0bt = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0bu = this.$.widgetRegistry.getWidget("countryValue3");
            this.$.dataMapper.map(widget0bu, contentProvider0bt, "myCountry");
            
            var contentProvider0bv = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0bw = this.$.widgetRegistry.getWidget("latitudeValue3");
            this.$.dataMapper.map(widget0bw, contentProvider0bv, "myLatitude");
            
            var contentProvider0bx = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0by = this.$.widgetRegistry.getWidget("longitudeValue3");
            this.$.dataMapper.map(widget0by, contentProvider0bx, "myLongitude");
            
            var contentProvider0bz = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0c0 = this.$.widgetRegistry.getWidget("descriptionText");
            this.$.dataMapper.map(widget0c0, contentProvider0bz, "descriptions");
            
            var contentProvider0c1 = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0c2 = this.$.widgetRegistry.getWidget("feedbackText");
            this.$.dataMapper.map(widget0c2, contentProvider0c1, "feedback");
            
            var widget0c3 = this.$.widgetRegistry.getWidget("close");
            var action0c4 = this.$.actionFactory.getFireEventAction("ReceiveFeedback","EndOfProcessEvent");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0c3, action0c4);
            
        }
        
    });
});
