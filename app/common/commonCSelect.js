(function(){
    function cmCustomSelectFn () {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                setTimeout(function () {
					var availableTags = [
						  "New Delhi",
						  "Mumbai",
						  "Kanpur",
						  "Varanasi",
						  "Hyderabad",
						  "Banglore",
						  "Goa",
						  "Kerela",
						  "Lucknow",
						 
						];
                    element.autocomplete({
						  source: availableTags
						});
                },100)
            }
        };
    }
    angular.module("common")
    .directive("cmCustomSelect",[cmCustomSelectFn])
})();