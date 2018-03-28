(function(){
    function cmSearchFn (){
        return{
            templateUrl:'app/search/search.tpl.html',
            restrict: "A,E,C"
        };
    }
    angular.module("common")
    .directive("cmSearch",[cmSearchFn]);
})();