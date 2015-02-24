define(['knockout','jquery'], function(ko, $){
    // dummy data for testing purposes
    var someValues = function(){
        this.firstValue = ko.observable(9);
        this.secondValue = ko.observable(21);
        this.multipleValues = ko.observableArray(['34','23','154','33']);
    };

    return someValues;
});