(function(){
    function lookupServiceFn($q,$http){
      
		 // Get Flight list from JSON
        this.SearchFlight = function(Source,Destination,FlightDate,ReturnFlightDate){		
			
          var dfd1 = $q.defer();
            $http.get("app/api/Flights.json")
            .then(function(response){
			 dfd1.resolve(_.filter(response.data.Flights,{Origin:Source,Destination:Destination,FlightDate:FlightDate}));
				
            })
            .catch(function(errorResponse){
                console.log(errorResponse);
                dfd1.reject("Error");
            });
            return dfd1.promise;
        };
      
      
    }
    angular.module("common").service("lookupService",["$q","$http",lookupServiceFn]);
})();