(function(){
    function cmHeaderFn (){
        return{
            templateUrl:'app/header/header.tpl.html',
            restrict: "A,E,C"
        };
    }
    angular.module("common")
    .directive("cmHeader",[cmHeaderFn]);
})();