(function () {
    //module creation
    //first params: Module Name
    //second params: module name injected.
    angular.module("flightBookApp",["header","search","common"]);
    
    //Consuming the module
    angular.module("flightBookApp")
    .config(function(initProvider){
       // console.log("I am the goodServices Function");
    })
    .run(function(){
      //  console.log("Hello I'm the Run function");
    })


//    .run()                ..............
//    .controller()         ..............
//    .service()            ..............
//    .factory()            .............. 
//    .filter()             .............. Predefined
//    .directive()          ..............
//    .provider()           ..............
//    .constant()           ..............
//    .value()              ..............
    .provider("init", function(){
      //  console.log("Provider-function");
        this.$get=function(){
            
        };
    })
    
})();