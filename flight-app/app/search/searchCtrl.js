(function(){
    function searchCtrl(lookupSvc){
        var vm = this;
		vm.user = {
			trip: "roundTrip"
		}
		vm.DateofRet = {
            minDate:"-10",
            maxDate:"+10"
        };
		vm.departDate ={
            dateFormat : 'dd-mm-yyyy',
            popup1: {
                opened: false
              },
            dateOptions : {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2017, 5, 22),
            minDate: new Date(),
            startingDay: 1
          },
        };
        vm.open1 = function() {
            vm.departDate.popup1.opened = true;
          };
        // Disable weekend selection
          function disabled(data) { 
            var date = data.date,
              mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
          };
		  	
		 //Search flight based on Source and destination for given date range
		vm.SearchFlight=[];
			vm.SearchFlight = function(Source,Destination,FlightDate,ReturnFlightDate){				
				
				lookupSvc.SearchFlight(Source,Destination,FlightDate,'')
			.then(function(response){
					vm.FlightList = response;
					console.log(response);
					vm.MinFair = Math.min.apply(Math, response.map(function (item) { return item.Fair; }));
					vm.MaxFair = Math.max.apply(Math, response.map(function (item) { return item.Fair; }));
			
			})
			.catch(function(errorResponse){
								console.log(errorResponse);
			});
				lookupSvc.SearchFlight(Destination,Source,ReturnFlightDate,ReturnFlightDate)
			.then(function(responseReturn){
					vm.SearchReturnFlight = responseReturn;					
					vm.MinReturnFair = Math.min.apply(Math, responseReturn.map(function (item) { return item.Fair; }));
					vm.MaxReturnFair = Math.max.apply(Math, responseReturn.map(function (item) { return item.Fair; }));
				
			})
			.catch(function(errorResponseReturn){
								console.log(errorResponseReturn);
			});
				
			
      
			};
		
		
			vm.Flightfair=function(FlightFair){
				console.log('FlightFair');
		}
		vm.ReturnFlightfair=function(ReturnFair){
			//vm.ReturnFlightfair=ReturnFair;
			console.log('ReturnFair');
		}
    }
	
    angular.module("search")
    .controller("searchCtrl",["lookupService", searchCtrl]); 
	
	
})();

