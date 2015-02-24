define(function(require){
	//require modules
    var ko = require('knockout');
    // dummy data for testing purposes
    var someValues = function(){
        this.firstValue = 9;
        this.secondValue = 21;
        this.multipleValues = ['34','23','154','33'];
    };

    return someValues;
});