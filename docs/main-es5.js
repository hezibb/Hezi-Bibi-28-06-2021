function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/Services/api.service.ts":
  /*!*************************************!*\
    !*** ./src/Services/api.service.ts ***!
    \*************************************/

  /*! exports provided: ApiService */

  /***/
  function srcServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/constants */
    "./src/app/constants.ts");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.protocol = window.location.protocol;
      }

      _createClass(ApiService, [{
        key: "getRequest",
        value: function getRequest(url, q) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: {
              apikey: src_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_KEY"],
              q: q,
              metric: 'true'
            }
          });
          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "getGeoPosition",
        value: function getGeoPosition(lat, lng) {
          var url = "".concat(this.protocol, "//dataservice.accuweather.com/locations/v1/cities/geoposition/search");
          return this.getRequest(url, "".concat(lat, ",").concat(lng));
        }
      }, {
        key: "getAutoComplete",
        value: function getAutoComplete(key) {
          var url = "".concat(this.protocol, "//dataservice.accuweather.com/locations/v1/cities/autocomplete");
          return this.getRequest(url, "".concat(key));
        }
      }, {
        key: "get5DaysOfForecasts",
        value: function get5DaysOfForecasts(key) {
          var url = "".concat(this.protocol, "//dataservice.accuweather.com/forecasts/v1/daily/5day/").concat(key);
          return this.getRequest(url);
        }
      }, {
        key: "getCurrentConditions",
        value: function getCurrentConditions(key) {
          var url = "".concat(this.protocol, "//dataservice.accuweather.com/currentconditions/v1/").concat(key);
          return this.getRequest(url);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/Services/weather.service.ts":
  /*!*****************************************!*\
    !*** ./src/Services/weather.service.ts ***!
    \*****************************************/

  /*! exports provided: WeatherService */

  /***/
  function srcServicesWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @codewithdan/observable-store */
    "./node_modules/@codewithdan/observable-store/dist/index.js");
    /* harmony import */


    var _codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/Services/api.service */
    "./src/Services/api.service.ts"); //import {CurrentConditions} from './model/current-conditions';


    var WeatherService =
    /*#__PURE__*/
    function (_codewithdan_observab) {
      _inherits(WeatherService, _codewithdan_observab);

      var _super = _createSuper(WeatherService);

      function WeatherService(appService) {
        var _this;

        _classCallCheck(this, WeatherService);

        _this = _super.call(this, {
          trackStateHistory: true
        });
        _this.appService = appService;
        return _this;
      }

      _createClass(WeatherService, [{
        key: "add",
        value: function add(favCity) {
          var _this2 = this;

          var state = this.getState() || {};
          this.appService.getCurrentConditions(favCity.key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data[0];
          })).subscribe(function (data) {
            state[favCity.key] = {
              title: favCity.cityName,
              text: data.WeatherText,
              temperature: data.Temperature,
              icon: data.WeatherIcon
            };
            console.log(state);

            _this2.setState(state, 'add_favCity');
          });
        }
      }, {
        key: "remove",
        value: function remove(favCity) {
          var state = this.getState() || {};
          delete state[favCity.key];
          this.setState(state, 'remove_favCity');
        }
      }, {
        key: "get",
        value: function get() {
          return this.getState() || {};
        }
      }]);

      return WeatherService;
    }(_codewithdan_observable_store__WEBPACK_IMPORTED_MODULE_1__["ObservableStore"]);

    WeatherService.ɵfac = function WeatherService_Factory(t) {
      return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_Services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WeatherService,
      factory: WeatherService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_Services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accuweather-icon.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/accuweather-icon.pipe.ts ***!
    \******************************************/

  /*! exports provided: IMG_URL, AccuweatherIconPipe */

  /***/
  function srcAppAccuweatherIconPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMG_URL", function () {
      return IMG_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccuweatherIconPipe", function () {
      return AccuweatherIconPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IMG_URL = "https://developer.accuweather.com/sites/default/files";

    var AccuweatherIconPipe =
    /*#__PURE__*/
    function () {
      function AccuweatherIconPipe() {
        _classCallCheck(this, AccuweatherIconPipe);
      }

      _createClass(AccuweatherIconPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value < 10) {
            value = "0".concat(value);
          }

          return "".concat(IMG_URL, "/").concat(value, "-s.png");
        }
      }]);

      return AccuweatherIconPipe;
    }();

    AccuweatherIconPipe.ɵfac = function AccuweatherIconPipe_Factory(t) {
      return new (t || AccuweatherIconPipe)();
    };

    AccuweatherIconPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "accuweatherIcon",
      type: AccuweatherIconPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccuweatherIconPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'accuweatherIcon'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fav_fav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fav/fav.component */
    "./src/app/fav/fav.component.ts");
    /* harmony import */


    var _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./weather/weather.component */
    "./src/app/weather/weather.component.ts");

    var routes = [{
      path: '',
      component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_3__["WeatherComponent"]
    }, {
      path: 'fav',
      component: _fav_fav_component__WEBPACK_IMPORTED_MODULE_2__["FavComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'WeatherHerolo';
        this.mode = 'Light';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.querySelector('body').style.setProperty('--bg-color', '#f8fafb');
          document.querySelector('body').style.setProperty('--text-color', '#272727');
        }
      }, {
        key: "switchMode",
        value: function switchMode(mode) {
          if (mode === 'Light') {
            document.querySelector('body').style.setProperty('--bg-color', '#272727');
            document.querySelector('body').style.setProperty('--text-color', '#f8fafb');
            this.mode = 'Dark';
          } else {
            document.querySelector('body').style.setProperty('--bg-color', '#f8fafb');
            document.querySelector('body').style.setProperty('--text-color', '#272727');
            this.mode = 'Light';
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 3,
      consts: [[1, "header"], [1, "title"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/fav", "routerLinkActive", "active"], [1, "mode-switcher", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Herolo Weather App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "index");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "fav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_8_listener() {
            return ctx.switchMode(ctx.mode);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mode: ", ctx.mode, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["[_ngcontent-%COMP%]:root {\n  --bg-color: #f8fafb;\n  --text-color: #272727;\n  --primary-color: #7e4aac;\n  --primary-light-color: #b587dd;\n  --secondary-color: #8c94a8;\n  --secondary-light-color: #b3b9c8;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 64px;\n  align-items: center;\n  padding: 0 15px;\n  border-bottom: 1px solid var(--secondary-light-color);\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-transform: uppercase;\n  color: var(--text-color);\n  text-decoration: none;\n  margin-left: 15px;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--primary-color);\n}\n\n.header[_ngcontent-%COMP%]   .mode-switcher[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFdlYXRoZXJIZXJvbG8vc3JjXFx0aGVtZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9GOlxcV2VhdGhlckhlcm9sby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FDTkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURTRjs7QUNQQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QURVRjs7QUNSRTtFQUNFLHlCQUFBO0FEVUo7O0FDUkU7RUFDRSxpQkFBQTtBRFVKOztBQ1JJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FEVU47O0FDUk07RUFDRSwyQkFBQTtBRFVSOztBQ1BNO0VBQ0UsNkNBQUE7QURTUjs7QUNIRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBREtKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG5cclxuICAgIC0tYmctY29sb3I6ICNmOGZhZmI7XHJcbiAgICAtLXRleHQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICAtLXByaW1hcnktY29sb3I6ICM3ZTRhYWM7XHJcbiAgICAtLXByaW1hcnktbGlnaHQtY29sb3I6ICNiNTg3ZGQ7XHJcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzhjOTRhODtcclxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0LWNvbG9yOiAjYjNiOWM4O1xyXG4gIH1cclxuICBcclxuICAkdmFyaWFibGVzOiAoXHJcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1iZy1jb2xvciksXHJcbiAgICAtLXRleHQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpLFxyXG4gICAgLS1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSxcclxuICAgIC0tcHJpbWFyeS1saWdodC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodC1jb2xvciksXHJcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSxcclxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQtY29sb3IpLFxyXG4gICk7XHJcbiAgXHJcbiAgQGZ1bmN0aW9uIHZhcigkdmFyaWFibGUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkdmFyaWFibGVzLCAkdmFyaWFibGUpO1xyXG4gIH0iLCI6cm9vdCB7XG4gIC0tYmctY29sb3I6ICNmOGZhZmI7XG4gIC0tdGV4dC1jb2xvcjogIzI3MjcyNztcbiAgLS1wcmltYXJ5LWNvbG9yOiAjN2U0YWFjO1xuICAtLXByaW1hcnktbGlnaHQtY29sb3I6ICNiNTg3ZGQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjOGM5NGE4O1xuICAtLXNlY29uZGFyeS1saWdodC1jb2xvcjogI2IzYjljODtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktbGlnaHQtY29sb3IpO1xufVxuLmhlYWRlciAudGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhlYWRlciBuYXYge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5oZWFkZXIgbmF2IGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5oZWFkZXIgbmF2IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uaGVhZGVyIG5hdiBhLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5oZWFkZXIgLm1vZGUtc3dpdGNoZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIkBpbXBvcnQgXCIuLi90aGVtZXMuc2Nzc1wiO1xyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktbGlnaHQtY29sb3IpO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgbmF2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5tb2RlLXN3aXRjaGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fav_fav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fav/fav.component */
    "./src/app/fav/fav.component.ts");
    /* harmony import */


    var _weather_weather_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./weather/weather.component */
    "./src/app/weather/weather.component.ts");
    /* harmony import */


    var _accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./accuweather-icon.pipe */
    "./src/app/accuweather-icon.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _fav_fav_component__WEBPACK_IMPORTED_MODULE_6__["FavComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_7__["WeatherComponent"], _accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_8__["AccuweatherIconPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _fav_fav_component__WEBPACK_IMPORTED_MODULE_6__["FavComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_7__["WeatherComponent"], _accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_8__["AccuweatherIconPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: ADD_FAV, REMOVE_FAV, API_KEY, DEFAULT_LAT, DEFAULT_LNG */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_FAV", function () {
      return ADD_FAV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REMOVE_FAV", function () {
      return REMOVE_FAV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_KEY", function () {
      return API_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_LAT", function () {
      return DEFAULT_LAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_LNG", function () {
      return DEFAULT_LNG;
    });

    var ADD_FAV = 'Add To';
    var REMOVE_FAV = 'Remove From';
    var API_KEY = 'KRgJjaHbsDBpSrik1gpBtWr5O8vtBGLs';
    var DEFAULT_LAT = 32.109333;
    var DEFAULT_LNG = 34.855499;
    /***/
  },

  /***/
  "./src/app/fav/fav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/fav/fav.component.ts ***!
    \**************************************/

  /*! exports provided: FavComponent */

  /***/
  function srcAppFavFavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavComponent", function () {
      return FavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _Services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Services/weather.service */
    "./src/Services/weather.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../accuweather-icon.pipe */
    "./src/app/accuweather-icon.pipe.ts");

    function FavComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "accuweatherIcon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var forecast_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", forecast_r1.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", forecast_r1.text, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", forecast_r1.temperature.Metric.Value, "", forecast_r1.temperature.Metric.Unit, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, forecast_r1.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var FavComponent =
    /*#__PURE__*/
    function () {
      function FavComponent(weatherService) {
        _classCallCheck(this, FavComponent);

        this.weatherService = weatherService;
        this.ngUnSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.favArr = [];
      }

      _createClass(FavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.weatherService.stateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnSubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) {
            return state !== null;
          })).subscribe(function (state) {
            Object.keys(state).map(function (key) {
              _this3.favArr.push(state[key]);
            });
          });
        }
      }]);

      return FavComponent;
    }();

    FavComponent.ɵfac = function FavComponent_Factory(t) {
      return new (t || FavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]));
    };

    FavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavComponent,
      selectors: [["app-fav"]],
      decls: 2,
      vars: 1,
      consts: [[1, "forecasts"], ["class", "forecast", 4, "ngFor", "ngForOf"], [1, "forecast"], [1, "title"], [1, "phrase"], [1, "temperature"], [3, "src"]],
      template: function FavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavComponent_div_1_Template, 9, 7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favArr);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_5__["AccuweatherIconPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n\n.forecasts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%] {\n  padding: 15px;\n  height: 150px;\n  min-width: 15%;\n  border-radius: 4px;\n  border: 1px solid var(--text-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2L0Y6XFxXZWF0aGVySGVyb2xvL3NyY1xcYXBwXFxmYXZcXGZhdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmF2L2Zhdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmF2L0Y6XFxXZWF0aGVySGVyb2xvL3NyY1xcc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUU7RUVMRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURPSjs7QUNMSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRE9OOztBQ0xNO0VBQ0UsaUJBQUE7QURPUjs7QUNKTTtFQUNFLGdCQUFBO0FETVI7O0FEbEJJO0VBQ0Usa0JBQUE7QUNvQk4iLCJmaWxlIjoic3JjL2FwcC9mYXYvZmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC5zY3NzXCI7XHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgLmZvcmVjYXN0cyB7XHJcbiAgICBAaW5jbHVkZSBmb3JlY2FzdHNTdHlsZXM7XHJcbiAgXHJcbiAgICAuZm9yZWNhc3Qge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmZvcmVjYXN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5mb3JlY2FzdHMgLmZvcmVjYXN0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9yZWNhc3RzIC5mb3JlY2FzdCAuZGF0ZSwgLmZvcmVjYXN0cyAuZm9yZWNhc3QgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9yZWNhc3RzIC5mb3JlY2FzdCBpbWcge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmZvcmVjYXN0cyAuZm9yZWNhc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59IiwiQG1peGluIGZvcmVjYXN0c1N0eWxlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgXHJcbiAgICAuZm9yZWNhc3Qge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDE1JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgICAgLmRhdGUsIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fav',
          templateUrl: './fav.component.html',
          styleUrls: ['./fav.component.scss']
        }]
      }], function () {
        return [{
          type: _Services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/weather.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/weather/weather.component.ts ***!
    \**********************************************/

  /*! exports provided: WeatherComponent */

  /***/
  function srcAppWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
      return WeatherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/Services/api.service */
    "./src/Services/api.service.ts");
    /* harmony import */


    var _Services_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Services/weather.service */
    "./src/Services/weather.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../accuweather-icon.pipe */
    "./src/app/accuweather-icon.pipe.ts");

    function WeatherComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_div_2_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var suggestion_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.selectSuggestion(suggestion_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var suggestion_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", suggestion_r6.LocalizedName, ", ", suggestion_r6.Country.LocalizedName, "\n");
      }
    }

    function WeatherComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_div_2_div_1_Template, 2, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.autoCompletedSuggestions);
      }
    }

    function WeatherComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.toggleFavorites();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.favState, " Favorites");
      }
    }

    function WeatherComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "accuweatherIcon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var forecast_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 7, forecast_r11.Date, "fullDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", forecast_r11.Day.IconPhrase, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", forecast_r11.Temperature.Minimum.Value, "", forecast_r11.Temperature.Minimum.Unit, " - ", forecast_r11.Temperature.Maximum.Value, "", forecast_r11.Temperature.Maximum.Unit, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, forecast_r11.Day.Icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var WeatherComponent =
    /*#__PURE__*/
    function () {
      function WeatherComponent(appService, weatherService) {
        _classCallCheck(this, WeatherComponent);

        this.appService = appService;
        this.weatherService = weatherService;
        this.autoCompleteInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ngUnSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(WeatherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var _position$coords = position.coords,
                  latitude = _position$coords.latitude,
                  longitude = _position$coords.longitude;

              _this4.appService.getGeoPosition(latitude, longitude).subscribe(function (data) {
                _this4.handleInitPosition(data);
              });
            });
          } else {
            this.appService.getGeoPosition(_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LAT"], _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LNG"]).subscribe(function (data) {
              _this4.handleInitPosition(data);
            });
          }

          this.autoCompleteInput.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (data) {
            return data.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnSubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this4.appService.getAutoComplete(data);
          })).subscribe(function (suggestions) {
            _this4.autoCompletedSuggestions = suggestions;
          });
        }
      }, {
        key: "getFavState",
        value: function getFavState(Key) {
          var storeState = this.weatherService.get();
          return storeState[Key] ? _constants__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FAV"] : _constants__WEBPACK_IMPORTED_MODULE_1__["ADD_FAV"];
        }
      }, {
        key: "selectSuggestion",
        value: function selectSuggestion(suggestion) {
          this.favState = this.getFavState(suggestion.Key);
          this.cityName = "".concat(suggestion.LocalizedName, ",").concat(suggestion.Country.LocalizedName);
          this.autoCompleteValue = this.cityName;
          this.getFiveDays(suggestion.Key);
          this.autoCompletedSuggestions = null;
        }
      }, {
        key: "handleInitPosition",
        value: function handleInitPosition(geoPositionRes) {
          this.favState = this.getFavState(geoPositionRes.Key);
          this.cityName = "".concat(geoPositionRes.EnglishName, ",").concat(geoPositionRes.Country.EnglishName);
          this.getFiveDays(geoPositionRes.Key);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnSubscribe.next();
          this.ngUnSubscribe.complete();
        }
      }, {
        key: "getFiveDays",
        value: function getFiveDays(key) {
          var _this5 = this;

          this.selectedKey = key;
          this.appService.get5DaysOfForecasts(key).subscribe(function (fiveDaysForecastData) {
            _this5.headLine = fiveDaysForecastData.Headline.Text;
            _this5.forecasts = fiveDaysForecastData.DailyForecasts;
          });
        }
      }, {
        key: "toggleFavorites",
        value: function toggleFavorites() {
          var faveState = this.getFavState(this.selectedKey);
          var selectedCity = {
            key: this.selectedKey,
            cityName: this.cityName
          };

          if (faveState === _constants__WEBPACK_IMPORTED_MODULE_1__["ADD_FAV"]) {
            this.weatherService.add(selectedCity);
          } else {
            this.weatherService.remove(selectedCity);
          }

          this.favState = faveState === _constants__WEBPACK_IMPORTED_MODULE_1__["ADD_FAV"] ? _constants__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FAV"] : _constants__WEBPACK_IMPORTED_MODULE_1__["ADD_FAV"];
        }
      }]);

      return WeatherComponent;
    }();

    WeatherComponent.ɵfac = function WeatherComponent_Factory(t) {
      return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"]));
    };

    WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeatherComponent,
      selectors: [["app-weather"]],
      decls: 11,
      vars: 6,
      consts: [["type", "text", 1, "autoComplete", 3, "ngModel", "input"], ["class", "autocomplete-suggestions", 4, "ngIf"], [1, "title"], [1, "name"], [1, "headLine"], ["class", "fav", 3, "click", 4, "ngIf"], [1, "forecasts"], ["class", "forecast", 4, "ngFor", "ngForOf"], [1, "autocomplete-suggestions"], ["class", "suggestion", 3, "click", 4, "ngFor", "ngForOf"], [1, "suggestion", 3, "click"], [1, "fav", 3, "click"], [1, "forecast"], [1, "date"], [1, "phrase"], [1, "temperature"], [3, "src"]],
      template: function WeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WeatherComponent_Template_input_input_1_listener($event) {
            return ctx.autoCompleteInput.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WeatherComponent_div_8_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WeatherComponent_div_10_Template, 10, 12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.autoCompleteValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.autoCompletedSuggestions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headLine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.forecasts);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _accuweather_icon_pipe__WEBPACK_IMPORTED_MODULE_8__["AccuweatherIconPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.title[_ngcontent-%COMP%]   .headLine[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.fav[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.fav[_ngcontent-%COMP%]:hover {\n  color: var(--primary-light-color);\n}\n\n.forecasts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%] {\n  padding: 15px;\n  height: 150px;\n  min-width: 15%;\n  border-radius: 4px;\n  border: 1px solid var(--text-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.forecasts[_ngcontent-%COMP%]   .forecast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.autoComplete[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--text-color);\n  color: var(--text-color);\n  border-radius: 4px;\n  background-color: var(--bg-color);\n  width: 300px;\n  height: 20px;\n  padding: 0;\n  margin-bottom: 15px;\n  position: relative;\n}\n\n.autocomplete-suggestions[_ngcontent-%COMP%] {\n  border: 1px solid var(--text-color);\n  background-color: var(--bg-color);\n  border-radius: 4px;\n  position: absolute;\n  width: 300px;\n  height: 200px;\n  margin-top: 25px;\n  overflow: auto;\n}\n\n.autocomplete-suggestions[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%] {\n  height: 25px;\n  padding-left: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.autocomplete-suggestions[_ngcontent-%COMP%]   .suggestion[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-light-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9GOlxcV2VhdGhlckhlcm9sby9zcmNcXGFwcFxcd2VhdGhlclxcd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWF0aGVyL0Y6XFxXZWF0aGVySGVyb2xvL3NyY1xcc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURDRTtFQUNFLGlDQUFBO0FDQ0o7O0FER0E7RUUzQkksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FENEJKOztBQzFCSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRDRCTjs7QUMxQk07RUFDRSxpQkFBQTtBRDRCUjs7QUN6Qk07RUFDRSxnQkFBQTtBRDJCUjs7QURoQkE7RUFDSSxjQUFBO0VBQ0YsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbUJGOztBRGhCQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNtQkY7O0FEakJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ21CSjs7QURqQkk7RUFDRSw0Q0FBQTtBQ21CTiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQuc2Nzc1wiO1xyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuaGVhZExpbmUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZhdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQtY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcmVjYXN0cyB7XHJcbiAgQGluY2x1ZGUgZm9yZWNhc3RzU3R5bGVzO1xyXG59XHJcblxyXG4uYXV0b0NvbXBsZXRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnN1Z2dlc3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGUgLm5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4udGl0bGUgLmhlYWRMaW5lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZmF2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZhdjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0LWNvbG9yKTtcbn1cblxuLmZvcmVjYXN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5mb3JlY2FzdHMgLmZvcmVjYXN0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9yZWNhc3RzIC5mb3JlY2FzdCAuZGF0ZSwgLmZvcmVjYXN0cyAuZm9yZWNhc3QgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9yZWNhc3RzIC5mb3JlY2FzdCBpbWcge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYXV0b0NvbXBsZXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYXV0b2NvbXBsZXRlLXN1Z2dlc3Rpb25zIC5zdWdnZXN0aW9uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hdXRvY29tcGxldGUtc3VnZ2VzdGlvbnMgLnN1Z2dlc3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0LWNvbG9yKTtcbn0iLCJAbWl4aW4gZm9yZWNhc3RzU3R5bGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICAgIC5mb3JlY2FzdCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogMTUlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAuZGF0ZSwgLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-weather',
          templateUrl: './weather.component.html',
          styleUrls: ['./weather.component.scss']
        }]
      }], function () {
        return [{
          type: src_Services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _Services_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\WeatherHerolo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map