(function(){
    function cmDatePickerFn(){
        return {
            restrict: "A,E,C",
            link: function(scope, element, attrs) {
                var options  = {};
                if(attrs["mindate"]){
                   // options.minDate = attrs["mindate"];
					   options.minDate = '09/21/2017';
                }
                if(attrs["maxdate"]){
					options.maxDate = '09/25/2017';
                   // options.maxDate = attrs["maxdate"];
                }
				options.dateFormat = 'mm/dd/yy';
                element.datepicker(options);   
            }
        };
    }
    angular.module("common")
    .directive("cmDatePicker",[cmDatePickerFn])
})();