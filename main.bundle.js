webpackJsonp([3,5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(208),
        styles: [__webpack_require__(173)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_defualt_dashboard_defualt_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// importing bootstrap
// import { Ng2BootstrapModule } from 'ng2-bootstrap';




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_defualt_dashboard_defualt_component__["a" /* DashboardDefualtComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDefualtComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardDefualtComponent = (function () {
    function DashboardDefualtComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    DashboardDefualtComponent.prototype.ngOnInit = function () {
    };
    DashboardDefualtComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    DashboardDefualtComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardDefualtComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return DashboardDefualtComponent;
}());
DashboardDefualtComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-defualt',
        template: __webpack_require__(209),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], DashboardDefualtComponent);

//# sourceMappingURL=dashboard-defualt.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(210),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(sidebarSvc) {
        this.sidebarSvc = sidebarSvc;
        this.userName = 'Aadil Khan';
        // Dropdown Toggle Function
        this.hightlightStatus = [];
        this.subactive = [];
        this.getNavitem();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.getNavitem = function () {
        var _this = this;
        this.sidebarSvc.getNavitem()
            .subscribe(function (res) {
            _this.nav = res.nav;
            _this.navlivePage = res.navlivePage;
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(211),
        styles: [__webpack_require__(176)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidebar_service__["a" /* SidebarService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarService = (function () {
    function SidebarService(http) {
        this.http = http;
    }
    SidebarService.prototype.getNavitem = function () {
        return this.http.get("api/nav.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error.json(); });
    };
    return SidebarService;
}());
SidebarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SidebarService);

var _a;
//# sourceMappingURL=sidebar.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-md\">\n    <div class=\"container body\">\n        <div class=\"main_container\">\n            <app-sidebar></app-sidebar>\n            <app-header></app-header>\n            <app-dashboard-defualt></app-dashboard-defualt>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<!-- page content -->\n        <div class=\"right_col\" role=\"main\">\n          <!-- top tiles -->\n          <div class=\"row tile_count\">\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n              <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Users</span>\n              <div class=\"count\">2500</div>\n              <span class=\"count_bottom\"><i class=\"green\">4% </i> From last Week</span>\n            </div>\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n              <span class=\"count_top\"><i class=\"fa fa-clock-o\"></i> Average Time</span>\n              <div class=\"count\">123.50</div>\n              <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>3% </i> From last Week</span>\n            </div>\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n              <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Males</span>\n              <div class=\"count green\">2,500</div>\n              <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>34% </i> From last Week</span>\n            </div>\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n              <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Females</span>\n              <div class=\"count\">4,567</div>\n              <span class=\"count_bottom\"><i class=\"red\"><i class=\"fa fa-sort-desc\"></i>12% </i> From last Week</span>\n            </div>\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n              <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Collections</span>\n              <div class=\"count\">2,315</div>\n              <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>34% </i> From last Week</span>\n            </div>\n            <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n              <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Connections</span>\n              <div class=\"count\">7,325</div>\n              <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>34% </i> From last Week</span>\n            </div>\n          </div>\n          <!-- /top tiles -->\n\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"dashboard_graph\">\n\n                <div class=\"row x_title\">\n                  <div class=\"col-md-6\">\n                    <h3>Network Activities <small>Graph title sub-title</small></h3>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div id=\"reportrange\" class=\"pull-right\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc\">\n                      <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i>\n                      <span>December 30, 2014 - January 28, 2015</span> <b class=\"caret\"></b>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"demo-placeholder\">\n                        <div style=\"display: block;\">\n                          <canvas baseChart width=\"970\" height=\"280\"\n                                      [datasets]=\"lineChartData\"\n                                      [labels]=\"lineChartLabels\"\n                                      [options]=\"lineChartOptions\"\n                                      [colors]=\"lineChartColors\"\n                                      [legend]=\"lineChartLegend\"\n                                      [chartType]=\"lineChartType\"\n                                      (chartHover)=\"chartHovered($event)\"\n                                      (chartClick)=\"chartClicked($event)\"></canvas>\n                          </div>\n                  </div>\n                </div>\n                <div class=\"col-md-3 col-sm-3 col-xs-12 bg-white\">\n                  <div class=\"x_title\">\n                    <h2>Top Campaign Performance</h2>\n                    <div class=\"clearfix\"></div>\n                  </div>\n\n                  <div class=\"col-md-12 col-sm-12 col-xs-6\">\n                    <div>\n                      <p>Facebook Campaign</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"80\"></div>\n                        </div>\n                      </div>\n                    </div>\n                    <div>\n                      <p>Twitter Campaign</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"60\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 col-xs-6\">\n                    <div>\n                      <p>Conventional Media</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"40\"></div>\n                        </div>\n                      </div>\n                    </div>\n                    <div>\n                      <p>Bill boards</p>\n                      <div class=\"\">\n                        <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                          <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"50\"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n\n          </div>\n          <br />\n\n          <div class=\"row\">\n\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel tile fixed_height_320\">\n                <div class=\"x_title\">\n                  <h2>App Versions</h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <h4>App Usage across versions</h4>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.2</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 66%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>123k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.3</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>53k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.4</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 25%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>23k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.5</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 5%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>3k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                  <div class=\"widget_summary\">\n                    <div class=\"w_left w_25\">\n                      <span>0.1.5.6</span>\n                    </div>\n                    <div class=\"w_center w_55\">\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 2%;\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"w_right w_20\">\n                      <span>1k</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel tile fixed_height_320 overflow_hidden\">\n                <div class=\"x_title\">\n                  <h2>Device Usage</h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <table class=\"\" style=\"width:100%\">\n                    <tr>\n                      <th style=\"width:37%;\">\n                        <p>Top 5</p>\n                      </th>\n                      <th>\n                        <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n                          <p class=\"\">Device</p>\n                        </div>\n                        <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5\">\n                          <p class=\"\">Progress</p>\n                        </div>\n                      </th>\n                    </tr>\n                    <tr>\n                      <td>\n                        <canvas class=\"canvasDoughnut\" height=\"140\" width=\"140\" style=\"margin: 15px 10px 10px 0\"></canvas>\n                      </td>\n                      <td>\n                        <table class=\"tile_info\">\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square blue\"></i>IOS </p>\n                            </td>\n                            <td>30%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square green\"></i>Android </p>\n                            </td>\n                            <td>10%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square purple\"></i>Blackberry </p>\n                            </td>\n                            <td>20%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square aero\"></i>Symbian </p>\n                            </td>\n                            <td>15%</td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <p><i class=\"fa fa-square red\"></i>Others </p>\n                            </td>\n                            <td>30%</td>\n                          </tr>\n                        </table>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel tile fixed_height_320\">\n                <div class=\"x_title\">\n                  <h2>Quick Settings</h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <div class=\"dashboard-widget-content\">\n                    <ul class=\"quick-list\">\n                      <li><i class=\"fa fa-calendar-o\"></i><a href=\"#\">Settings</a>\n                      </li>\n                      <li><i class=\"fa fa-bars\"></i><a href=\"#\">Subscription</a>\n                      </li>\n                      <li><i class=\"fa fa-bar-chart\"></i><a href=\"#\">Auto Renewal</a> </li>\n                      <li><i class=\"fa fa-line-chart\"></i><a href=\"#\">Achievements</a>\n                      </li>\n                      <li><i class=\"fa fa-bar-chart\"></i><a href=\"#\">Auto Renewal</a> </li>\n                      <li><i class=\"fa fa-line-chart\"></i><a href=\"#\">Achievements</a>\n                      </li>\n                      <li><i class=\"fa fa-area-chart\"></i><a href=\"#\">Logout</a>\n                      </li>\n                    </ul>\n\n                    <div class=\"sidebar-widget\">\n                        <h4>Profile Completion</h4>\n                        <canvas width=\"150\" height=\"80\" id=\"chart_gauge_01\" class=\"\" style=\"width: 160px; height: 100px;\"></canvas>\n                        <div class=\"goal-wrapper\">\n                          <span id=\"gauge-text\" class=\"gauge-value pull-left\">0</span>\n                          <span class=\"gauge-value pull-left\">%</span>\n                          <span id=\"goal-text\" class=\"goal-value pull-right\">100%</span>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n              <div class=\"x_panel\">\n                <div class=\"x_title\">\n                  <h2>Recent Activities <small>Sessions</small></h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <div class=\"dashboard-widget-content\">\n\n                    <ul class=\"list-unstyled timeline widget\">\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"block\">\n                          <div class=\"block_content\">\n                            <h2 class=\"title\">\n                                              <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                                          </h2>\n                            <div class=\"byline\">\n                              <span>13 hours ago</span> by <a>Jane Smith</a>\n                            </div>\n                            <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                            </p>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-8 col-sm-8 col-xs-12\">\n\n\n\n              <div class=\"row\">\n\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"x_panel\">\n                    <div class=\"x_title\">\n                      <h2>Visitors location <small>geo-presentation</small></h2>\n                      <ul class=\"nav navbar-right panel_toolbox\">\n                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                        </li>\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Settings 1</a>\n                            </li>\n                            <li><a href=\"#\">Settings 2</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                        </li>\n                      </ul>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"x_content\">\n                      <div class=\"dashboard-widget-content\">\n                        <div class=\"col-md-4 hidden-small\">\n                          <h2 class=\"line_30\">125.7k Views from 60 countries</h2>\n\n                          <table class=\"countries_list\">\n                            <tbody>\n                              <tr>\n                                <td>United States</td>\n                                <td class=\"fs15 fw700 text-right\">33%</td>\n                              </tr>\n                              <tr>\n                                <td>France</td>\n                                <td class=\"fs15 fw700 text-right\">27%</td>\n                              </tr>\n                              <tr>\n                                <td>Germany</td>\n                                <td class=\"fs15 fw700 text-right\">16%</td>\n                              </tr>\n                              <tr>\n                                <td>Spain</td>\n                                <td class=\"fs15 fw700 text-right\">11%</td>\n                              </tr>\n                              <tr>\n                                <td>Britain</td>\n                                <td class=\"fs15 fw700 text-right\">10%</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div id=\"world-map-gdp\" class=\"col-md-8 col-sm-12 col-xs-12\" style=\"height:230px;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n\n\n                <!-- Start to do list -->\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"x_panel\">\n                    <div class=\"x_title\">\n                      <h2>To Do List <small>Sample tasks</small></h2>\n                      <ul class=\"nav navbar-right panel_toolbox\">\n                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                        </li>\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Settings 1</a>\n                            </li>\n                            <li><a href=\"#\">Settings 2</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                        </li>\n                      </ul>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"x_content\">\n\n                      <div class=\"\">\n                        <ul class=\"to_do\">\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Schedule meeting with new client </p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Create email address for new intern</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Have IT fix the network printer</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Copy backups to offsite location</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Food truck fixie locavors mcsweeney</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Food truck fixie locavors mcsweeney</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Create email address for new intern</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Have IT fix the network printer</p>\n                          </li>\n                          <li>\n                            <p>\n                              <input type=\"checkbox\" class=\"flat\"> Copy backups to offsite location</p>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- End to do list -->\n                \n                <!-- start of weather widget -->\n                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"x_panel\">\n                    <div class=\"x_title\">\n                      <h2>Daily active users <small>Sessions</small></h2>\n                      <ul class=\"nav navbar-right panel_toolbox\">\n                        <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                        </li>\n                        <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Settings 1</a>\n                            </li>\n                            <li><a href=\"#\">Settings 2</a>\n                            </li>\n                          </ul>\n                        </li>\n                        <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                        </li>\n                      </ul>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                    <div class=\"x_content\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                          <div class=\"temperature\"><b>Monday</b>, 07:30 AM\n                            <span>F</span>\n                            <span><b>C</b></span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                          <div class=\"weather-icon\">\n                            <canvas height=\"84\" width=\"84\" id=\"partly-cloudy-day\"></canvas>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-8\">\n                          <div class=\"weather-text\">\n                            <h2>Texas <br><i>Partly Cloudy Day</i></h2>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-12\">\n                        <div class=\"weather-text pull-right\">\n                          <h3 class=\"degrees\">23</h3>\n                        </div>\n                      </div>\n\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"row weather-days\">\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Mon</h2>\n                            <h3 class=\"degrees\">25</h3>\n                            <canvas id=\"clear-day\" width=\"32\" height=\"32\"></canvas>\n                            <h5>15 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Tue</h2>\n                            <h3 class=\"degrees\">25</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"rain\"></canvas>\n                            <h5>12 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Wed</h2>\n                            <h3 class=\"degrees\">27</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"snow\"></canvas>\n                            <h5>14 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Thu</h2>\n                            <h3 class=\"degrees\">28</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"sleet\"></canvas>\n                            <h5>15 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Fri</h2>\n                            <h3 class=\"degrees\">28</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"wind\"></canvas>\n                            <h5>11 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                          <div class=\"daily-weather\">\n                            <h2 class=\"day\">Sat</h2>\n                            <h3 class=\"degrees\">26</h3>\n                            <canvas height=\"32\" width=\"32\" id=\"cloudy\"></canvas>\n                            <h5>10 <i>km/h</i></h5>\n                          </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <!-- end of weather widget -->\n              </div>\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"top_nav\">\r\n          <div class=\"nav_menu\">\r\n            <nav>\r\n              <div class=\"nav toggle\">\r\n                <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\r\n              </div>\r\n\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"\">\r\n                  <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <img src=\"assets/images/img.jpg\" alt=\"\">John Doe\r\n                    <span class=\" fa fa-angle-down\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r\n                    <li><a href=\"javascript:;\"> Profile</a></li>\r\n                    <li>\r\n                      <a href=\"javascript:;\">\r\n                        <span class=\"badge bg-red pull-right\">50%</span>\r\n                        <span>Settings</span>\r\n                      </a>\r\n                    </li>\r\n                    <li><a href=\"javascript:;\">Help</a></li>\r\n                    <li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\r\n                  </ul>\r\n                </li>\r\n\r\n                <li role=\"presentation\" class=\"dropdown\">\r\n                  <a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-envelope-o\"></i>\r\n                    <span class=\"badge bg-green\">6</span>\r\n                  </a>\r\n                  <ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/images/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/images/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/images/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <a>\r\n                        <span class=\"image\"><img src=\"assets/images/img.jpg\" alt=\"Profile Image\" /></span>\r\n                        <span>\r\n                          <span>John Smith</span>\r\n                          <span class=\"time\">3 mins ago</span>\r\n                        </span>\r\n                        <span class=\"message\">\r\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"text-center\">\r\n                        <a>\r\n                          <strong>See All Alerts</strong>\r\n                          <i class=\"fa fa-angle-right\"></i>\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n        </div>"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 left_col\">\n          <div class=\"left_col scroll-view\">\n            <div class=\"navbar nav_title\" style=\"border: 0;\">\n              <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Gentelella Alela!</span></a>\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n            <!-- menu profile quick info -->\n            <div class=\"profile clearfix\">\n              <div class=\"profile_pic\">\n                <img src=\"assets/images/img.jpg\" alt=\"...\" class=\"img-circle profile_img\">\n              </div>\n              <div class=\"profile_info\">\n                <span>Welcome,</span>\n                <h2>{{userName}}</h2>\n              </div>\n            </div>\n            <!-- /menu profile quick info -->\n\n            <br />\n\n            <!-- sidebar menu -->\n            <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n              <div class=\"menu_section\">\n                <h3>General</h3>\n                <ul class=\"nav side-menu\">\n                  <li [attr.data-selected]=\"false\" (click)=\"hightlightStatus[i]=!hightlightStatus[i]\" [class.active]=\"hightlightStatus[i]\" *ngFor = \"let li of nav, let i = index\"><a><i class=\"{{'fa' + ' ' + li.icon}}\"></i> {{li.navItam}} <span class=\"fa fa-chevron-down\"></span></a>\n                    <ul class=\"nav child_menu animated flipInX\">\n                      <li *ngFor = \"let childLi of li.subMenu\"><a href=\"index.html\">{{childLi}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"menu_section\">\n                <h3>Live On</h3>\n                <ul class=\"nav side-menu\">\n                  <li [attr.data-selected]=\"false\" (click)=\"subactive[i]=!subactive[i]\" [class.active]=\"subactive[i]\" *ngFor = \"let li of navlivePage, let i = index\"><a><i class=\"{{'fa' + ' ' + li.icon}}\"></i> {{li.navItam}} <span class=\"fa fa-chevron-down\"></span></a>\n                    <ul class=\"nav child_menu animated flipInX\">\n                      <li *ngFor = \"let childLi of li.subMenu\"><a href=\"index.html\">{{childLi}}</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n            <!-- /sidebar menu -->\n\n            <!-- /menu footer buttons -->\n            <div class=\"sidebar-footer hidden-small\">\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\n                <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n              </a>\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\n                <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\n              </a>\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\n                <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\n              </a>\n              <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login.html\">\n                <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\n              </a>\n            </div>\n            <!-- /menu footer buttons -->\n          </div>\n        </div>"

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.bundle.js.map