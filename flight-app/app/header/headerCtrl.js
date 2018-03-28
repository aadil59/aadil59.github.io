(function(){
    function headerCtrlFn($scope){
        var vm=this;
        vm.brandName = "Good Services";
        vm.phoneNumber = "1234567890";
        vm.navItems = ["Login","Register","Cart","Products","Logout"];
        vm.loginTemplate = "app/login/login.tpl.html";
        vm.cartTemplate = "app/cart/cart.tpl.html";
        vm.registerTemplate = "app/register/register.tpl.html";
        vm.productTemplate = "app/products/products.tpl.html";
        
        // ng-click
        vm.loadView = function(param){
            console.log(param);
            if(param=="Login"){
                vm.loadTemplate = vm.loginTemplate;
            }
            else if(param=="Cart"){
                vm.loadTemplate = vm.cartTemplate;
            }
            else if(param=="Register"){
                vm.loadTemplate = vm.registerTemplate;
            }
            else if(param=="Products"){
                vm.loadTemplate = vm.productTemplate;
            }
        };	
        
    }
    angular.module("header").controller("headerCtrl", ["$scope",headerCtrlFn]);
})();