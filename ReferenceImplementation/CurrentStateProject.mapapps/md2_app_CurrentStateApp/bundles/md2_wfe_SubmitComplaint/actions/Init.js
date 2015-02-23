define([
    "dojo/_base/declare",
    "md2_runtime/actions/_Action"
],
function(declare, _Action) {
    
    return declare([_Action], {
        
        _actionSignature: "init",
        
        execute: function() {
            
            var contentProvider0ai = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0aj = this.$.widgetRegistry.getWidget("streetValue2");
            this.$.dataMapper.map(widget0aj, contentProvider0ai, "myStreet");
            
            var contentProvider0ak = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0al = this.$.widgetRegistry.getWidget("streetNoValue2");
            this.$.dataMapper.map(widget0al, contentProvider0ak, "myStreetNo");
            
            var contentProvider0am = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0an = this.$.widgetRegistry.getWidget("cityValue2");
            this.$.dataMapper.map(widget0an, contentProvider0am, "myCity");
            
            var contentProvider0ao = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0ap = this.$.widgetRegistry.getWidget("countryValue2");
            this.$.dataMapper.map(widget0ap, contentProvider0ao, "myCountry");
            
            var contentProvider0aq = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0ar = this.$.widgetRegistry.getWidget("zipValue2");
            this.$.dataMapper.map(widget0ar, contentProvider0aq, "myPostalCode");
            
            var contentProvider0as = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0at = this.$.widgetRegistry.getWidget("latitudeValue2");
            this.$.dataMapper.map(widget0at, contentProvider0as, "myLatitude");
            
            var contentProvider0au = this.$.contentProviderRegistry.getContentProvider("addressProvider");
            var widget0av = this.$.widgetRegistry.getWidget("longitudeValue2");
            this.$.dataMapper.map(widget0av, contentProvider0au, "myLongitude");
            
            var contentProvider0aw = this.$.contentProviderRegistry.getContentProvider("complaintProvider");
            var widget0ax = this.$.widgetRegistry.getWidget("descriptionTxt");
            this.$.dataMapper.map(widget0ax, contentProvider0aw, "descriptions");
            
            var widget0ay = this.$.widgetRegistry.getWidget("submitComplaint");
            var action0az = this.$.actionFactory.getCustomAction("next");
            this.$.eventRegistry.get("widget/onClick").registerAction(widget0ay, action0az);
            
        }
        
    });
});
