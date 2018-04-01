webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <nav class=\"navbar navbar-default\" role=\"navigation\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n                  data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span\n            class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand active\" href=\"/\">形意门</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li>\n              <a href=\"/tree\">传承谱</a>\n            </li>\n            <li>\n              <a href=\"/feedback\">意见反馈</a>\n            </li>\n          </ul>\n          <!--<form class=\"navbar-form navbar-left\" role=\"search\">-->\n          <!--<div class=\"form-group\">-->\n          <!--<input type=\"text\" class=\"form-control\"/>-->\n          <!--</div>-->\n          <!--<button type=\"submit\" class=\"btn btn-default\">-->\n          <!--搜索-->\n          <!--</button>-->\n          <!--</form>-->\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"loginService.isLogin===false\">\n              <a class=\"navbar-brand active\" href=\"/login\">登录</a>\n            </li>\n            <li *ngIf=\"loginService.isLogin===false\">\n              <a class=\"navbar-brand active\" href=\"/register\">注册</a>\n            </li>\n            <li *ngIf=\"loginService.isLogin===true\" class=\"dropdown\">\n              <a class=\"navbar-brand active\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">操作<strong\n                class=\"caret\"></strong></a>\n              <ul class=\"dropdown-menu\">\n                <li *ngIf=\"loginService.isLogin===true\">\n                  <a class=\"navbar-brand active\" href=\"/me\">个人中心</a>\n                </li>\n                <li *ngIf=\"loginService.isLogin===true\">\n                  <a class=\"navbar-brand active\" href=\"#\" (click)=\"logout()\">退出登录</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n\n  <router-outlet>\n  </router-outlet>\n</div>\n<div class=\"container\">\n  <div class=\"row clearfix\">\n    <div class=\"col-md-12 column\">\n      <div id=\"footer\">\n        <div class=\"footerNav\">\n          <a rel=\"nofollow\" href=\"/above\">关于我们</a> | <a rel=\"nofollow\" href=\"\">服务条款</a> | <a rel=\"nofollow\" href=\"/\">免责声明</a>\n          | <a rel=\"nofollow\" href=\"/\">网站地图</a> | <a rel=\"nofollow\" href=\"/feedback\">联系我们</a>\n        </div>\n        <div class=\"copyRight\">\n          Copyright ©2018-2018xingyimen.org.cn 版权所有 <a rel=\"nofollow\" target=\"_blank\"\n                                                       href=\"http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action\">蜀ICP备18008149号</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    AppComponent.prototype.personalCenter = function () {
        alert('点击个人中心');
    };
    AppComponent.prototype.jumpUrl = function (e) {
        console.log(e);
        this.router.navigateByUrl(e.target.id);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@5.2.0@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../../_@angular_platform-browser@5.2.0@@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.0@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.0@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../_@ng-bootstrap_ng-bootstrap@1.0.0-beta.9@@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charts_tree_component__ = __webpack_require__("../../../../../src/app/charts/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_profile_profile_component__ = __webpack_require__("../../../../../src/app/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_me_service__ = __webpack_require__("../../../../../src/app/services/me.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dynamic_form_form_control_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_me_me_component__ = __webpack_require__("../../../../../src/app/users/me/me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_people_manager_people_manager_component__ = __webpack_require__("../../../../../src/app/users/people-manager/people-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_register_register_component__ = __webpack_require__("../../../../../src/app/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dynamic_form_form_field_checkbox_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__charts_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__users_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_14__users_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dynamic_form_form_control_component__["a" /* FormControlComponent */],
                __WEBPACK_IMPORTED_MODULE_17__users_me_me_component__["a" /* MeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__users_people_manager_people_manager_component__["a" /* PeopleManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dynamic_form_form_field_checkbox_component__["a" /* CheckboxGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__feedback_feedback_component__["a" /* FeedbackComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                // SharedModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_people_service__["a" /* PeopleService */], __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__services_me_service__["a" /* MeService */], __WEBPACK_IMPORTED_MODULE_20__services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_23__services_comment_service__["a" /* CommentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_tree_component__ = __webpack_require__("../../../../../src/app/charts/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_me_me_component__ = __webpack_require__("../../../../../src/app/users/me/me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_register_register_component__ = __webpack_require__("../../../../../src/app/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__index_index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__users_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_2__charts_tree_component__["a" /* TreeComponent */] },
    { path: 'me', component: __WEBPACK_IMPORTED_MODULE_5__users_me_me_component__["a" /* MeComponent */] },
    { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_component__["a" /* FeedbackComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/charts/tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n\n.node text {\n  font: 12px sans-serif;\n}\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 2px;\n}\n\n.tooltip2 {\n  background-color: #f7e1b5;\n  position: absolute;\n  width: 120px;\n  height: auto;\n  font-family: simsun;\n  font-size: 14px;\n  text-align: center;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-tree\">\n  <form class=\"form-vertical container\" role=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-10\">\n        <div class=\"input-group\">\n          <app-search [results]=\"options\" (searchContent)=\"queryData($event)\"\n                      (clickContent)=\"searchChanged($event)\"\n                      [next]=\"peopleService.next\" [previous]=\"peopleService.previous\"></app-search>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div id=\"app-tree-tree\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../_d3@4.12.2@d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeComponent = (function () {
    function TreeComponent(peopleService) {
        this.peopleService = peopleService;
        this.options = [];
        this.duration = 750;
        this.margin = { top: 20, right: 90, bottom: 30, left: 90 };
        this.width = 1400 - this.margin.right - this.margin.left;
        this.height = 1000 - this.margin.top - this.margin.bottom;
        this.colorScale = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* scaleLinear */]()
            .domain([0, 1])
            .range(['red', 'green']);
        this.widthScale = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* scaleLinear */]()
            .domain([1, 80])
            .range([1, 10]);
        this.index = 0;
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.tree = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* tree */]().size([this.height, this.width]);
        this.peopleService.getFirstData()
            .then(function (data) {
            _this.root = _this.getNodeData(data);
            _this.root.x0 = _this.height / 2;
            _this.root.y0 = 0;
            _this.update(_this.root);
        });
    };
    /**
     * 初始化树状图所需要的对象
     */
    TreeComponent.prototype.init = function () {
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* select */]('#app-tree-tree').append('svg')
            .attr('width', this.width + this.margin.right + this.margin.left)
            .attr('height', this.height + this.margin.top + this.margin.bottom);
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.tooltip = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* select */]('#app-tree-tree')
            .append('div')
            .attr('class', 'tooltip')
            .attr('id', 'tooltip')
            .style('opacity', 0.0);
    };
    /**
     * 生成node所需要的数据
     * @param data
     * @returns {any}
     */
    TreeComponent.prototype.getNodeData = function (data) {
        var newData = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* hierarchy */](data, function (d) {
            return d.childes;
        });
        if (!newData.children) {
            console.log(newData);
        }
        newData.children.forEach(this.collapse);
        return newData;
    };
    /**
     * 设置 子节点
     * @param p 节点数据
     */
    TreeComponent.prototype.collapse = function (p) {
        if (p.children) {
            p._children = p.children;
            for (var i = 0; i < p._children.size; i++) {
                this.collapse(p._children[i]);
            }
            p.children = null;
        }
    };
    /**
     * 生成d3数据
     * @param s
     * @param d
     * @returns {string}
     */
    TreeComponent.prototype.diagonal = function (s, d) {
        var pathStr = "M " + s.y + " " + s.x + "\n            C " + (s.y + d.y) / 2 + " " + s.x + ",\n              " + (s.y + d.y) / 2 + " " + d.x + ",\n              " + d.y + " " + d.x;
        return pathStr;
    };
    /**
     * 更新节点
     * @param source
     */
    TreeComponent.prototype.update = function (source) {
        var _this = this;
        // Compute the new tree layout.
        var treeData = this.tree(this.root);
        var nodes = treeData.descendants();
        var links = treeData.descendants().slice(1);
        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 180;
        });
        // Update the nodes…
        var node = this.g.selectAll('g.node')
            .data(nodes, function (d) {
            return d.id || (d.id = ++_this.index);
        });
        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr('transform', function (d) {
            return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
            .on('click', function (d) {
            return _this.click(d);
        }).on('mouseover', function (d) {
            _this.popHtml(d);
        }).on('mouseout', function (d) {
            _this.tooltip.html('');
        });
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr('r', 1e-6)
            .style('fill', function (d) {
            return d.data.has_child ? 'lightsteelblue' : '#fff';
        })
            .style('stroke', function (d) {
            return _this.colorScale(d.data.female / (d.data.female + d.data.male));
        });
        nodeEnter.append('text')
            .attr('dy', '.35em')
            .attr('x', function (d) {
            return d._children || d._children ? -10 : 10;
        })
            .attr('text-anchor', function (d) {
            return d._children || d._children ? 'end' : 'start';
        })
            .text(function (d) {
            return d.data.name;
        })
            .style('fill', function (d) {
            return _this.colorScale(d.data.female / (20));
        });
        // update
        var nodeUpdate = nodeEnter.merge(node);
        // Transition nodes to their new position.
        nodeUpdate.transition()
            .duration(this.duration)
            .attr('transform', function (d) {
            return 'translate(' + d.y + ',' + d.x + ')';
        });
        nodeUpdate.select('circle.node')
            .attr('r', 10)
            .style('fill', function (d) {
            return d.data.has_child ? 'lightsteelblue' : '#fff';
        })
            .attr('cursor', 'pointer');
        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(this.duration)
            .attr('transform', function (d) {
            return 'translate(' + source.y + ',' + source.x + ')';
        })
            .remove();
        nodeExit.select('circle')
            .attr('r', 1e-6);
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);
        // Update the links…
        var link = this.g.selectAll('path.link')
            .data(links, function (d) {
            return d.id;
        })
            .style('stroke-width', function (d) {
            return _this.widthScale(20);
        });
        // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert('path', 'g')
            .attr('class', 'link')
            .attr('d', function (d) {
            var o = { x: source.x0, y: source.y0 };
            return _this.diagonal(o, o);
        })
            .style('stroke-width', function (d) {
            return _this.widthScale(10);
        });
        // UPDATE
        var linkUpdate = linkEnter.merge(link);
        // Transition links to their new position.
        linkUpdate.transition()
            .duration(this.duration)
            .attr('d', function (d) {
            return _this.diagonal(d, d.parent);
        });
        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(this.duration)
            .attr('d', function (d) {
            var o = { x: source.x, y: source.y };
            return _this.diagonal(o, o);
        })
            .style('stroke-width', function (d) {
            return _this.widthScale(2);
        })
            .remove();
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    /**
     * 鼠标悬停事件
     * @param d
     */
    TreeComponent.prototype.popHtml = function (d) {
        var html = d.data['grade']['title'] + '<br/>';
        if (d.data['master_name']) {
            html += '师承于->' + d.data['master_name'] + '<br/>';
        }
        if (d.data['birth_death']) {
            html += '生存于:' + d.data['birth_death'] + '<br/>';
        }
        if (d.data['has_child']) {
            html += '有' + d.data['child_count'] + '名弟子' + '<br/>';
        }
        else {
            html += '没有弟子' + '<br/>';
        }
        if (d.data['desc']) {
            html += d.data['desc'] + '<br/>';
        }
        this.tooltip.html(html)
            .style('left', (__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* event */].pageX + 10) + 'px')
            .style('top', (__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* event */].pageY - 40) + 'px')
            .style('opacity', 0.8)
            .style('background-color', '#f7e1b5');
    };
    /**
     * 点击节点，有则展开
     * @param d
     * @returns {Promise<void>}
     */
    TreeComponent.prototype.click = function (d) {
        var _this = this;
        if (d.children) {
            d._children = d.children;
            d.children = null;
        }
        else {
            if (!Boolean(d._children) && d.data.has_child) {
                console.log(d);
                return this.peopleService.getData(d.data.id)
                    .then(function (data) {
                    return _this.addData(d, data);
                });
            }
            d.children = d._children;
            d._children = null;
        }
        this.update(d);
    };
    /**
     * 添加新的数据到结构树
     * @param node
     * @param data
     */
    TreeComponent.prototype.addData = function (node, data) {
        var nodeData = this.getNodeData(data);
        node.children = nodeData.children;
        this.addDepth(node);
        node._children = null;
        return this.update(node);
    };
    /**
     * 添加深度数据，补丁
     * @param node
     */
    TreeComponent.prototype.addDepth = function (node) {
        if (node.children) {
            node.children.forEach(function (d2) {
                d2.depth = node.depth + 1;
                d2.parent = node;
            });
        }
    };
    /**
     * 根据对应的option生成对应的结构树
     * @param {string} text : 选择字符串
     */
    TreeComponent.prototype.searchChanged = function (text) {
        console.log(text);
        var i = this.options.indexOf(text);
        if (i !== -1) {
            this.extendChild(this.peoples[i]);
        }
        this.options = [];
    };
    /**
     * 从服务器获取数据,并展示给用户选择
     * @param {string} name
     */
    TreeComponent.prototype.queryData = function (name) {
        var _this = this;
        console.log(name);
        var page;
        var li = name.split('pageSplit');
        if (li.length = 2) {
            page = li[1];
            name = li[0];
        }
        this.options = [];
        this.peopleService.queryData(name, page)
            .then(function (data) {
            if (data) {
                _this.peoples = _this.peopleService.peoples;
                var _loop_1 = function (i) {
                    var tmp = [];
                    _this.peoples[i].forEach(function (people) {
                        tmp.push(people.name);
                    });
                    _this.options.push(tmp.join('->'));
                };
                for (var i = 0; i < _this.peoples.length; i++) {
                    _loop_1(i);
                }
                console.log('load ok');
            }
            else {
                console.log(_this.peopleService.message);
            }
        });
    };
    /**
     * 逆序打开节点，从顶级开始，然后从找到的节点继续下一个查询
     * @param peoples
     */
    TreeComponent.prototype.extendChild = function (peoples) {
        if (peoples) {
            this.root = this.getNodeData(peoples[peoples.length - 1]);
            this.root.x0 = this.height / 2;
            this.root.y0 = 0;
            this.update(this.root);
            var node = this.root;
            for (var i = peoples.length - 1; i >= 0; i--) {
                node = this.checkNode(node, peoples[i]);
            }
        }
    };
    /**
     * 检查父级，直到没有父级，第一层到当前节点，全部打开
     * @param node
     * @param people
     * @returns {any} 正常会返回一个节点，递归的时候有可能不返回
     */
    TreeComponent.prototype.checkNode = function (node, people) {
        if (!node) {
            console.log(node);
        }
        if (node.data.id === people.id) {
            if (node.children) {
                return node;
            }
            else {
                if (people.childes.length) {
                    this.addData(node, people);
                }
                return node;
            }
        }
        else {
            var newNode = null;
            if (node.children) {
                for (var i = 0; i < node.children.length; i++) {
                    newNode = this.checkNode(node.children[i], people);
                    if (newNode && newNode !== node) {
                        return node.children[i];
                    }
                }
            }
        }
    };
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-tree',
            template: __webpack_require__("../../../../../src/app/charts/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/tree.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_people_service__["a" /* PeopleService */]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-form-control\" [formGroup]=\"form\">\n  <label class=\"col-sm-2 control-label\">{{field.label}}</label>\n  <div class=\"col-sm-8\">\n    <div [ngSwitch]=\"field.controlType\">\n      <input *ngSwitchCase=\"'textbox'\" class=\"form-control\" value=\"{{field.value}}\" [formControlName]=\"field.key\"\n             [type]=\"field.type\" name=\"{{field.key}}\" pattern=\"{{field.pattern}}\" placeholder=\"{{field.placeholder}}\"/>\n      <textarea *ngSwitchCase=\"'textarea'\" value=\"{{field.value}}\" rows=\"{{field.rows}}\" class=\"form-control\"\n                [formControlName]=\"field.key\" name=\"{{field.key}}\" pattern=\"{{field.pattern}}\"\n                placeholder=\"{{field.placeholder}}\"></textarea>\n      <img *ngSwitchCase=\"'image'\" src=\"{{field.src}}\" name=\"{{field.key}}\">\n      <select [id]=\"field.key\" *ngSwitchCase=\"'dropdown'\" [formControlName]=\"field.key\">\n        <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.value}}</option>\n      </select>\n      <app-checkbox-group *ngSwitchCase=\"'checkbox'\" [options]=\"field.options\"\n                          [formControlName]=\"field.key\"></app-checkbox-group>\n\n    </div>\n    <div *ngIf=\"field.required && form.get(field.key).hasError('required') && form.get(field.key).touched\"\n         class=\"error\">\n      该字段是必填字段\n    </div>\n    <div\n      *ngIf=\"form.get(field.key).hasError('pattern') || form.get(field.key).hasError(field.key) && form.get(field.key).touched\"\n      class=\"error\">\n      字段格式错误\n    </div>\n    <div\n      *ngIf=\"form.get(field.key).hasError('validateEqual') && form.get(field.key).touched\"\n      class=\"error\">\n      {{form.get(field.key).errors['validateEqual']}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.0@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_field_index__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormControlComponent = (function () {
    function FormControlComponent() {
    }
    FormControlComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__form_field_index__["c" /* FieldBase */])
    ], FormControlComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], FormControlComponent.prototype, "form", void 0);
    FormControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-form-control',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form/form-control.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FormControlComponent);
    return FormControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custominput__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/custominput.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxGroupComponent = (function () {
    function CheckboxGroupComponent() {
        this.options = []; // object: {id, text} or array: []
        this.disabled = false;
        this.model = []; // 控件的值
    }
    CheckboxGroupComponent_1 = CheckboxGroupComponent;
    CheckboxGroupComponent.prototype.setValue = function (option) {
        var id = option.id;
        var index = this.model.indexOf(id);
        if (index > -1) {
            this.model.splice(index, 1);
            this.onChange(this.model);
        }
        else {
            this.model.push(id);
            this.onChange(this.model);
        }
    };
    CheckboxGroupComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    CheckboxGroupComponent.prototype.writeValue = function (value) {
        if (value && value.length) {
            this.model = value;
        }
    };
    CheckboxGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CheckboxGroupComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckboxGroupComponent.prototype, "disabled", void 0);
    CheckboxGroupComponent = CheckboxGroupComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-checkbox-group',
            template: "\n        <span *ngFor=\"let op of options\" class=\"form-check\">\n            <input type=\"checkbox\" [name]=\"value\" [checked]=\"model.indexOf(op.id) > -1\" (click)=\"setValue(op)\"\n                   [disabled]=\"disabled\" [value]=\"op.id\"/>{{op.text}}\n        </span>",
            providers: [Object(__WEBPACK_IMPORTED_MODULE_1__custominput__["a" /* customInputAccessor */])(CheckboxGroupComponent_1)]
        })
    ], CheckboxGroupComponent);
    return CheckboxGroupComponent;
    var CheckboxGroupComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/checkbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_base__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/field-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.type = options['type'] || '';
        _this.options = options['options'] || '';
        return _this;
    }
    return CheckBox;
}(__WEBPACK_IMPORTED_MODULE_0__field_base__["a" /* FieldBase */]));



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/custominput.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = customInputAccessor;
/* unused harmony export CustomInputComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.0@@angular/forms/esm5/forms.js");


function customInputAccessor(component) {
    return {
        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return component; }),
        multi: true
    };
}
var CustomInputComponent = (function () {
    function CustomInputComponent() {
    }
    Object.defineProperty(CustomInputComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.model;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.model) {
                this.model = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomInputComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    CustomInputComponent.prototype.writeValue = function (value) {
        if (value !== this.model) {
            this.model = value;
        }
    };
    // Set the function to be called when the control receives a change event.
    CustomInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // registerOnTouched(fn: any) : void
    CustomInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return CustomInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/dropdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_base__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/field-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DropDown = (function (_super) {
    __extends(DropDown, _super);
    function DropDown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return DropDown;
}(__WEBPACK_IMPORTED_MODULE_0__field_base__["a" /* FieldBase */]));



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/field-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldBase; });
var FieldBase = (function () {
    function FieldBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.placeholder = options.placeholder || '';
        this.required = !!options.required;
        this.pattern = options.pattern || '';
    }
    return FieldBase;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_base__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/field-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Image = (function (_super) {
    __extends(Image, _super);
    function Image(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'image';
        _this.src = options['src'] || '';
        return _this;
    }
    return Image;
}(__WEBPACK_IMPORTED_MODULE_0__field_base__["a" /* FieldBase */]));



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_base__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/field-base.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__field_base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textbox__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/textbox.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__textbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textarea__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/textarea.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/image.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/dropdown.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkbox__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/checkbox.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__checkbox__["a"]; });








/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/textarea.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_base__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/field-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textarea';
        _this.rows = options['rows'] || 1;
        return _this;
    }
    return TextArea;
}(__WEBPACK_IMPORTED_MODULE_0__field_base__["a" /* FieldBase */]));



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/form-field/textbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Textbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_base__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/field-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Textbox = (function (_super) {
    __extends(Textbox, _super);
    function Textbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return Textbox;
}(__WEBPACK_IMPORTED_MODULE_0__field_base__["a" /* FieldBase */]));



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.search-div {*/\n/*margin: 200px auto 0px 600px;*/\n/*width: 300px;*/\n/*}*/\n\ninput {\n  border: 1px solid #9da;\n  width: 300px;\n  font-size: 20px;\n}\n\nul {\n  width: 302px;\n  list-style: none;\n  margin-top: 0px;\n  padding-left: 0px;\n  color: #8f8f8f;\n}\n\nli {\n  width: 301px;\n  border-bottom: 1px dashed #9da;\n  border-left: 1px dashed #9da;\n  border-right: 1px dashed #9da;\n}\n\nli:hover {\n  background-color: #ddd;\n}\n\n.page_start {\n  background-color: #dff0d8;\n}\n\n.page_end {\n  background-color: #dff0d8;\n  /*position: relative;*/\n  position: absolute;\n  left: 243px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div row\">\n  <input class=\"col-xs-8\" type=\"text\" [(ngModel)]=\"searchText\"\n         (keyup.enter)=\"searchContent.emit(searchText)\"\n         placeholder=\"search...\">\n  <span class=\"input-group-btn\">\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"search(searchText)\">\n  <i class=\"fa fa-search\" aria-hidden=\"true\">搜索</i>\n  </button>\n  </span>\n  <ul>\n    <li *ngFor=\"let result of results\" (click)='clickContent.emit(result)'>{{result}}</li>\n  </ul>\n  <div *ngIf=\"results.length\">\n    <button *ngIf=\"previous\" class=\"page_start\" (click)=\"search(searchText,previous)\"> <</button>\n    <button *ngIf=\"next\" class=\"page_end\" (click)=\"search(searchText,next)\"> ></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.searchContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.clickContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.results = [];
        this.searchText = '';
        this.next = '';
    }
    SearchComponent.prototype.search = function (searchText, page) {
        if (!searchText || searchText === '') {
            return;
        }
        if (page) {
            this.searchContent.emit(this.searchText + 'pageSplit' + page);
            return;
        }
        this.searchContent.emit(this.searchText);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "clickContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('results'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "results", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('next'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "next", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('previous'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "previous", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")],
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directive/validator/repeat.validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepeatValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.0@@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RepeatValidatorDirective = (function () {
    function RepeatValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    RepeatValidatorDirective_1 = RepeatValidatorDirective;
    Object.defineProperty(RepeatValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true';
        },
        enumerable: true,
        configurable: true
    });
    RepeatValidatorDirective.prototype.validate = function (abstractControl) {
        var target = abstractControl.root.get(this.validateEqual);
        // 不反向查询且值不相等
        if (target && abstractControl.value !== target.value && !this.isReverse) {
            return {
                validateEqual: true
            };
        }
        // 反向查询且值相等
        if (abstractControl.errors && target && abstractControl.value === target.value && this.isReverse) {
            delete abstractControl.errors['validateEqual'];
            if (!Object.keys(abstractControl.errors).length) {
                abstractControl.setErrors(null);
            }
        }
        // 反向查询且值不相等
        if (target && abstractControl.value !== target.value && this.isReverse) {
            console.log('validateEqual error');
            return { validateEqual: '请确保两次密码相同' };
        }
        return null;
    };
    RepeatValidatorDirective = RepeatValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[app-validateEqual][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return RepeatValidatorDirective_1; }),
                    multi: true
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], RepeatValidatorDirective);
    return RepeatValidatorDirective;
    var RepeatValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-register\" class=\"user-profile-container\">\n  <div class=\"container\"><h2>留下您对本站的宝贵意见，我们定会努力改进，谢谢您</h2><br><br></div>\n  <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"form\">\n    <div *ngFor=\"let field of fields\" class=\"form-group\">\n      <app-form-control [form]=\"form\" [field]=\"field\"></app-form-control>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-offset-2 col-md-10\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"comment()\">提交</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = (function () {
    function FeedbackComponent(formService, commentService) {
        this.formService = formService;
        this.commentService = commentService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.fields = this.commentService.getFields();
        this.form = this.formService.toFormGroup(this.fields);
    };
    FeedbackComponent.prototype.comment = function () {
        var _this = this;
        var comment = this.form.value;
        comment.type = 'feedback';
        console.log(comment);
        this.commentService.comment(comment).then(function (ret) {
            if (ret) {
                alert('反馈成功，谢谢您的意见');
            }
            else {
                console.log(_this.commentService.message);
                alert(_this.commentService.message);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FeedbackComponent.prototype, "fields", void 0);
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__("../../../../../src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_2__services_comment_service__["a" /* CommentService */]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p><b>形意拳</b>，又称<b>行意拳</b>、<b>心意拳</b>、<b>心意六合拳</b>，中国传统武术，与\n    [太极拳]、[八卦掌]、通臂拳齐名，同属[内家拳]之中，流行于中国北方，分成河北、山西、河南三个系统。打法多直行直进，与八卦之横走、太极之中定有显著之差别。\n    <mark class=\"template-facttext\" title=\"需要提供文献来源\">\n      形意拳之短打直进用于战阵中最为适合，无花俏之招法，长劲亦是最快。两军交战，千军万马中，要能有闪转腾挪之地不易，只有直行直进，走亦打，打亦走，如黄河之决堤。\n    </mark>\n  </p>\n\n  <h2><span class=\"mw-headline\" id=\"拳术起源\">拳术起源</span></h2>\n  <p>形意拳尊<strong>\"岳武穆\"</strong>为始祖，其起源可以追溯到清初山西\"姬际可\"。据说姬际可于\"终南山\"得到岳武穆拳谱，精通六合枪法，后把大枪术化为拳法，创出此拳。姬际可门下，分成河南、山西、河北等不同派系，分化成不同的名字传承，包括心意六合拳、心意拳、形意拳等。<sup\n    id=\"cite_ref-3jrx_2-0\" class=\"reference\"></sup>把心意拳授与少林寺武僧，少林寺称之为“心意把”，成为该寺传留最精拳术之一。\n  </p>\n  <p>现代盛行的形意拳，定型于河北深州\"李洛能\"。他至山西，学习戴氏心意拳，之后发展出这门拳术，并定名为形意拳。其门徒众多，主要分成山西、河北二个系统。李洛能之徒\"郭云深\"，以崩拳闻名，改良了五行拳的架子，创半步崩拳。</p>\n  <h2><span class=\"mw-headline\" id=\"拳术特点\">拳术特点</span></h2>\n  <p>形意拳具有以下特点：</p>\n  <ol>\n    <li>简洁朴实，其动作大多直来直往，一屈一伸，节奏鲜明，朴实无华，富于自然之美。</li>\n    <li>动作严密紧凑，\"出手如钢锉，落手如钩竿”，“两肘不离肋，两手不离心”。发拳时，拧裹钻翻，与身法、步法紧密相合，周身上下好象拧绳一样，毫不松懈。</li>\n    <li>沉着稳健，身正，步稳，“迈步如行犁，落脚如生根”，要求宽胸实腹，气沉丹田，刚而不僵，柔而不软，劲力舒展沉实。</li>\n    <li>快速完整，形意拳要求“六合”，即心与意合，意与气合，气与力合，肩与胯合，肘与膝合，手与足合。动作强调上法上身，手脚齐到，一发即至，一寸为先。</li>\n  </ol>\n  <p>拳谚有“起如风，落如箭，打倒还嫌慢”之说。形意拳讲究“三节”、“八要”。三节是：“梢节起，中节随，根节催”。从全身讲，头与上肢为梢节，\n    形意拳躯干为中节，下肢为根节；上肢以手为梢节，肘为中节，肩为根节；下肢则分为胯、膝、足三节。做到三节的要求，就能保证周身完整一体，内外合一。八要是：三顶（头上顶，有冲天之雄；手外顶，有推山之功；舌上顶，有吞象容）、三扣（肩扣，则力气到肘；膝胯扣，则全身气凑；手足指掌扣，则周身力厚）、三圆（胸要圆、背要圆、虎口要圆）、三敏（心要敏，眼要敏，手要敏）、三抱（丹田抱，心意抱，两肋抱）、三垂（肩下垂，肘下垂，气下垂）、三曲（臂要曲，腿要曲，腕要曲）、三挺（颈要挺，脊要挺，膝要挺）。这样，就可保证身体各部姿势正确舒展。形意拳包含着丰富的技击理论和技术、战术内容，强调敢打必胜、勇往直前的战斗意识。拳谚说：“遇敌有主，临危不惧”。在战术思想上，主张快速突然，以我为主，交手时先发制人，“乘其无备而攻之，出其不意而击之”，“有意莫带形，带形必不赢”。在攻防技术上，提倡近打快攻，抢占有利位置，“眼要毒，心要奸，脚踏中门裆里钻”，“进即闪，闪即进，不必远求”。形意拳主张头、肩、肘、手、胯、膝、脚七法并用，处\n    形意拳处可发，“远了便上手，近了便加肘；远了用脚踢，近了便加膝”，并且要求虚实结合，知己知人，相机而行，不可拘使成法，做到“拳无拳，意无意，无意之中是真意”，方算上乘功夫。形意拳的技击理论有6项原则，即工（巧妙）、顺（自然）、勇（果断）、疾（快速、突然）、狠（不容情）、真（使敌难于逃脱），称为\"六方之妙\"。这6项原则对培养攻防意识，训练技击技术具有指导作用。</p>\n  <p>\n    形意拳注重力量的训练。第1步功夫是“筑其基，壮其体，使骨体坚如铁石”，为技术提高打下良好基础，这称为“明劲功夫”。第2步要练“暗劲和化劲功夫”，要求周身完整，刚柔相济，精神贯注，形神合一，以意导体，以气发力。可见，形意拳对人体各项生理功能要求是相当高的。形意拳动作中正不倚，打法可刚可柔，不同体质的人都可从事锻炼，近年来医疗体育方面也已采用。</p>\n  <h2><span></span><span class=\"mw-headline\" id=\"流派演化\">流派演化</span></h2>\n  <p>明末清初姬际可创形意拳，传给山西曹继武：</p>\n  <p>曹继武传马学礼与李政 马学礼所传的河南形意拳一支，今称心意六合拳，一般只在回民中流传。</p>\n  <p>李政传戴龙邦及 之两名儿子文龙及文熊兄弟。戴隆邦传戴隆邦之妻侄郭维汉。今称戴氏心意拳（尊曹继武为祖）。戴龙邦又传贾大俊、吕海根、河北人李洛能等少数外姓弟子，其中李洛能广收门徒，由此迎来形意拳在近代的大发展：\n    这一时期其中代表人物是李洛能的八大弟子：山西的车永宏、宋世荣、宋世德、李广亨四人；河北的郭云深、刘奇兰、刘晓兰、贺运亨；这八大弟子各有所长，北方形意拳逐步衍化为具备地方特色的山西形意拳，又称山西小架，与河北形意拳，又称河北大架。郭云深，创半步崩拳，将形意拳五行拳的\n    孙禄堂，师从李奎元，并得郭云深亲授，兼学程派八卦掌、武氏太极拳，会武学之大成，创孙氏太极拳。刘奇兰，传李存义，在李存义手上，河北形意拳逐渐壮大，成为形意拳的主流。李存义，传尚云祥，开创尚氏形意拳。传薛颠，创象形拳。此外，还有现代少林寺之心意把（类形意拳）以及四川梁平县一带流传之金家功。</p>\n  <p>形意八卦拳\n    相传郭云深与\"八卦掌\"始祖董海川曾经论武相交，认为八卦掌与形意拳在拳理上有互补之功，不禁止门下相互学习，两门之间以兄弟相称，故习形意拳者多同时学习八卦掌，称为形意八卦拳。但考证历史，两派的交流，应该开始于李存义与程廷华，两人均在北京天津一带教拳，两人交情又好，所以河北形意拳门下多同时学习八卦掌，著名的代表人物为孙禄堂、尚云祥、程有龙，程有龙又传于何广、马德山等人，但是他们尚谨守门派之别。真正以形意八卦拳为名授徒，则是开始于河北张占魁一派。意拳\n    王芗斋，自称为郭云深弟子，自创意拳（晚年又改名为大成拳）。其功法虽脱胎于形意拳门下，但多加入王芗斋本人的心得。王芗斋本人认为此拳为拳技之大成，故名大成拳。自认不列名于形意门下，故许多形意拳门人也不认为此拳为形意拳之分支。五法八象（象形术）\n  </p>\n  <p>薛颠自称受到灵空禅师传象形术，但有人考证象形术的拳理、心法与形意拳无异。象形术应该是薛颠以形意拳拳理为基础，结合个人体会，加上华佗五禽戏等内功而产生，可视为形意拳的支派。</p>\n  <p>此外，还有现代少林寺之 心意把 （类形意拳）以及 【四川梁平县】一带流传之 \"金家功\"。</p>\n\n  <h2>\n    <span class=\"mw-headline\" id=\"拳譜文獻\">拳谱文献</span>\n  </h2>\n  <ul>\n    <li> 六合拳</li>\n    <li>岳武穆王拳经：内蛓有《五行拳》（与福建 白鹤拳 之入门桩功五行拳仅同名，没有传承上的关系）、《连环拳》、《十二形》（大势）等。怀疑为<b>山西戴氏心意拳</b>后人托古作品。\n    </li>\n    <li>守洞尘技</li>\n    <li>解说形意拳经</li>\n    <li>形意拳学</li>\n    <li> 形意拳术诀微</li>\n    <li>形意拳术讲义</li>\n    <li>形意拳秘法</li>\n    <li>象形拳法真诠</li>\n  </ul>\n  <h2><span class=\"mw-headline\" id=\"各派形意拳內容\">各派形意拳内容</span>\n  </h2>\n  <p><b>河南心意六合拳</b>，（马学礼所传，分为洛阳派、南阳派），单势操练原始形式。保存原始之六合十形，加上当地查拳四拳八式。</p>\n  <ul>\n    <li>基本桩：龙吊膀</li>\n    <li>单练及套路：单把、双把、三把、四把（合称四把拳）、踩式推手、古树摆枝、迎风贯耳、鹰儿扑食、龙折身、虎抱头、十形、四拳八式</li>\n    <li>步法：鸡形步、马形步、螺旋步</li>\n  </ul>\n  <p><b>山西戴氏心意拳</b>（尊曹继武为祖，创编五行拳，重道功中医跌打术）</p>\n  <ul>\n    <li>基本桩：蹲猴势</li>\n    <li>单练及套路：<b>主拳</b>（交际四把、五行拳、三拳、七炮、五膀），<b>象形拳</b>（十大形、七小形），<b>单练套路</b>（螳螂闸势/闸势捶、联珠把、连环拳）\n    </li>\n    <li>步法：鸡形步</li>\n    <li>对练：九套环、安身炮、五花炮</li>\n  </ul>\n  <p><b>河北形意拳</b>、<b>山西形意拳</b>（两派均由李洛能所传，重单势操练及桩功）</p>\n  <ul>\n    <li>基本桩：三体式（又称三才式、鹰捉式）</li>\n    <li>步法：鸡形步、槐虫步</li>\n    <li>单练及套路：五行拳、十二形、五行连环拳、鸡形四把、鹞形八式、十二洪捶、杂式捶、拾手艺拳、八字功拳、金刚八势拳、拳出入洞拳、九套环拳、形意十七势、盘根、形意散手等</li>\n    <li>器械：五行剑、三才剑、纯阳剑、龙形剑、五行刀、五行棍、九州棍、五行枪、连环枪等</li>\n    <li>对练：三花炮、五行生克对练、八式对练、洪捶对练、安身炮对练、九套环、十六把、三才剑对练等</li>\n  </ul>\n  <p><b>贾大俊传形意拳</b></p>\n  <ul>\n    <li>贾大俊传的形意拳主要承传了戴氏所传的“悟心拳”和“会意拳”部分，根据《形意拳秘法》图片所示，贾氏所传的五行拳中，劈、崩二拳与戴氏心意拳相同；而钻、炮、横就比较接近李洛能所传的钻、炮、横三拳，其余<b>十二形象</b>（十二形）及其他所练的功、技、法、式与戴氏原传“心意拳”相同。该派传与赵万远后，又增加了“九九八十一劲”练养功法及七腿、七膝、七肘等技法和三才六合七进等对练套路。\n    </li>\n  </ul>\n  <p><b>五法八象（象形术）</b></p>\n  <ul>\n    <li>起式：提水式（来源请求）</li>\n    <li>内功：正身法、调息法、修心法</li>\n    <li>单练：<b>五法</b>（飞、云、摇、晃、旋）、<b>八象</b>（龙、虎、马、牛、象、狮、熊、猿）</li>\n    <li>套路：五法连珠（五法合一）、八象合演</li>\n    <li>器械：除了灵空禅师所传<b>佛门方便铲</b>外，其余的器械套路演示均与形意拳的器械无异。</li>\n  </ul>\n  <h2><span></span><span class=\"mw-headline\" id=\"五行拳\">五行拳</span>\n  </h2>\n  <p>戴氏心意拳及形意拳之基础动作。亦称“母拳”。以单式动作为主。</p>\n  <p>根据1929年由 \"海上尚武进德会\" 出版，<b>姜容樵</b>编著的‘形意母拳’一书的介绍说：所谓母拳者，即<b>五行拳</b>。相生相克连环也。此为各形之基础，故谓母拳。\n  </p>\n  <p><b>李洛能</b>与<b>郭云深</b>时，仅五行连环十二形。</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.0@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentService = (function () {
    function CommentService(http, router, loginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.commentUrl = '/api/comments/';
    }
    CommentService.prototype.getFields = function () {
        var fields = [
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["e" /* TextArea */]({
                label: '意见:',
                placeholder: '您的意见',
                key: 'comment',
                rows: 3,
                required: true,
            })
        ];
        if (this.loginService.isLogin) {
        }
        else {
            fields = fields.concat([
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                    label: '称呼:',
                    placeholder: '请问怎么称呼，方便我们称呼您',
                    key: 'name',
                    required: true,
                    validateEqual: 'repeat',
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                    label: '邮箱:',
                    placeholder: '留下您的邮箱，方便我们联系您',
                    key: 'email',
                    required: true,
                }),
                new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                    label: '您的站点:',
                    placeholder: '方便我们更加了解您',
                    key: 'website',
                })
            ]);
        }
        return fields;
    };
    CommentService.prototype.comment = function (comment) {
        var _this = this;
        var header;
        if (this.loginService.isLogin) {
            header = this.loginService.getLoginedHeader();
        }
        else {
            header = this.loginService.headers;
        }
        return this.http.post(this.commentUrl, JSON.stringify(comment), { headers: header }).toPromise().then(function (data) {
            if (data['status'] === 'ok') {
                return true;
            }
            _this.message = data['message'];
            return false;
        }).catch(function (data) {
            if (data.error) {
                _this.message = data.error.message;
            }
            return false;
        });
    };
    CommentService.prototype.getcomment = function () {
        var _this = this;
        return this.http.get('').toPromise().then(function (data) {
            _this.comments = data['results'];
        });
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.2.0@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive_validator_repeat_validator_directive__ = __webpack_require__("../../../../../src/app/directive/validator/repeat.validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormService = (function () {
    function FormService() {
    }
    FormService.prototype.toFormGroup = function (fields) {
        var group = {};
        fields.forEach(function (field) {
            var validators = [];
            if (field.required) {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
            }
            switch (field.key) {
                case 'email':
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email);
                    break;
                case 'repeat':
                    validators.push(new __WEBPACK_IMPORTED_MODULE_2__directive_validator_repeat_validator_directive__["a" /* RepeatValidatorDirective */]('password', 'true'));
                    break;
            }
            if (field.key === 'email') {
                console.log(validators);
            }
            group[field.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](field.value || '', validators);
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.0@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = '/api/auth/login';
        this.registerUrl = '/api/auth/signup';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        this.isLogin = false;
        if (localStorage.getItem('isLogin') === 'true') {
            this.isLogin = true;
            this.token = localStorage.getItem('token');
            console.log(this.token);
        }
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.loginUrl, JSON.stringify(user), { headers: this.headers }).toPromise().then(function (data) {
            console.log(_this.isLogin);
            if (data['status'] === 'ok') {
                _this.isLogin = true;
                _this.token = data['token'];
                localStorage.setItem('token', _this.token);
                localStorage.setItem('isLogin', 'true');
                return true;
            }
            _this.message = data['message'];
            return false;
        });
    };
    LoginService.prototype.register = function (user) {
        var _this = this;
        if (user.username === '' || !user.username) {
            user.username = user.email;
        }
        return this.http.post(this.registerUrl, JSON.stringify(user), { headers: this.headers }).toPromise().then(function (data) {
            console.log(data);
            if (data['status'] === 'ok') {
                return true;
            }
            _this.message = data['message'];
            return false;
        }).catch(function (data) {
            console.log(data.error);
            if (data.error) {
                _this.message = data.message;
            }
            return false;
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('isLogin');
        console.log('logout');
        this.router.navigateByUrl('/');
    };
    LoginService.prototype.getLoginedHeader = function () {
        if (this.isLogin) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'Token '.concat(this.token)
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LoginService.prototype.cacheUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    LoginService.prototype.getCacheUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/me.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.0@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeService = (function () {
    function MeService(http, router, loginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.profileUrl = '/api/users/profile';
        this.bindUrl = '/api/users/bind/people';
    }
    MeService.prototype.getProfile = function () {
        var _this = this;
        return this.http.get("" + this.profileUrl, { headers: this.loginService.getLoginedHeader() })
            .toPromise()
            .then(function (data) {
            _this.userProfile = data['results'];
            return _this.userProfile;
        });
    };
    MeService.prototype.updateProfile = function (profile) {
        var _this = this;
        return this.http.put("" + this.profileUrl, JSON.stringify(profile), { headers: this.loginService.getLoginedHeader() })
            .toPromise()
            .then(function (data) {
            _this.userProfile = data['results'];
            return _this.userProfile;
        });
    };
    MeService.prototype.createProfile = function (profile) {
        var _this = this;
        return this.http.post("" + this.profileUrl, JSON.stringify(profile), { headers: this.loginService.getLoginedHeader() })
            .toPromise()
            .then(function (data) {
            _this.userProfile = data['results'];
            return _this.userProfile;
        });
    };
    MeService.prototype.bindPeople = function (user_id, people_id) {
        return this.http.post(this.bindUrl, JSON.stringify({
            user_id: user_id,
            people_id: people_id
        }), { headers: this.loginService.getLoginedHeader() })
            .toPromise()
            .then(function (data) {
            console.log(data);
        });
    };
    MeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], MeService);
    return MeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/people.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../../_@angular_common@5.2.0@@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleService = (function () {
    function PeopleService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.peopleUrl = '/api/people/';
        this.firstUrl = '/api/people/first';
        this.searchUrl = '/api/people/query';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        this.cacheStr = 'rootPeople';
        this.previous = '';
        this.next = '';
    }
    /**
     * 获取具体的人
     * @param {number} id
     * @returns {Promise<People>}
     */
    PeopleService.prototype.getData = function (id) {
        var _this = this;
        if (id === void 0) { id = 1; }
        return this.http.get(this.peopleUrl + "/" + id, { headers: this.headers })
            .toPromise()
            .then(function (data) {
            _this.people = data['results'];
            return _this.people;
        });
    };
    /**
     * 获取第一个人
     * @param {number} id
     * @returns {Promise<People>}
     */
    PeopleService.prototype.getFirstData = function () {
        var _this = this;
        return this.http.get(this.firstUrl, { headers: this.headers })
            .toPromise()
            .then(function (data) {
            _this.people = data['results'];
            return _this.people;
        });
    };
    /**
     * 创建传人
     */
    PeopleService.prototype.createPeople = function (people) {
        var _this = this;
        return this.http.post("" + this.peopleUrl, JSON.stringify(people), { headers: this.loginService.getLoginedHeader() })
            .toPromise()
            .then(function (data) {
            _this.people = data['results'];
            return true;
        }).catch(function (data) {
            _this.message = data.message;
            return false;
        });
    };
    /**
     * 搜索
     * @param {string} title
     * @param {page} 分页
     */
    PeopleService.prototype.queryData = function (title, page) {
        var _this = this;
        var params = {
            name: title
        };
        if (page) {
            params['page'] = page;
        }
        return this.http.get("" + this.searchUrl, { headers: this.headers, params: params })
            .toPromise()
            .then(function (data) {
            if (data['status'] === 'ok') {
                _this.peoples = data['results'];
                _this.previous = _this.getPage(data['previous']);
                _this.next = _this.getPage(data['next']);
                console.log(_this.next);
                return true;
            }
            else {
                _this.message = data['message'];
                return false;
            }
        }).catch(function (data) {
            _this.message = data.message;
            return false;
        });
    };
    PeopleService.prototype.getPage = function (url) {
        if (url && url !== null) {
            var pages = url.match('(?<=page=)\\d');
            if (pages) {
                return pages[0];
            }
            return '1';
        }
    };
    PeopleService.prototype.cacheData = function (people) {
        var root = localStorage.getItem(this.cacheStr);
        if (!root) {
            root = JSON.stringify(people);
            localStorage.setItem(this.cacheStr, root);
            return;
        }
        var rootPeople = JSON.parse(root);
        rootPeople.childes.forEach(function (p, index) {
            if (p.id === people.id) {
                rootPeople.childes[index] = people;
            }
        });
    };
    PeopleService.prototype.getCacheData = function () {
        var data = localStorage.getItem(this.cacheStr);
        if (data) {
            return JSON.parse(data);
        }
    };
    PeopleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "../../../../../src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-login\" class=\"user-profile-container\">\n  <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"form\">\n    <div *ngFor=\"let field of fields\" class=\"form-group\">\n      <app-form-control [form]=\"form\" [field]=\"field\"></app-form-control>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-offset-2 col-md-10\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"login()\">登录</button>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"error==true\">\n      <span class=\"text\">{{message}}</span>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_user_entity__ = __webpack_require__("../../../../../src/entity/user.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field_index__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(loginService, router, formService) {
        this.loginService = loginService;
        this.router = router;
        this.formService = formService;
        this.isLogin = false;
        this.fields = [
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                label: '用户名:',
                placeholder: '用户名',
                key: 'username',
                type: 'text',
                required: true,
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                label: '密 码:',
                placeholder: '密 码',
                key: 'password',
                type: 'password',
                required: true,
                validateEqual: 'repeat',
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field_index__["a" /* CheckBox */]({
                label: ' ',
                key: 'member',
                type: 'checkbox',
                options: [
                    { id: '1', text: '记住我' },
                ]
            })
        ];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formService.toFormGroup(this.fields);
        this.user = this.loginService.getCacheUser();
        if (!this.user) {
            this.user = new __WEBPACK_IMPORTED_MODULE_3__entity_user_entity__["a" /* User */]();
        }
        console.log(this.user);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user = this.form.value;
        if (this.form.value.member.length) {
            this.loginService.cacheUser(this.user);
        }
        this.loginService.login(this.user).then(function (data) {
            if (data) {
                _this.error = false;
                console.log('login ok');
                _this.isLogin = true;
                _this.router.navigate(['/me']);
            }
            else {
                _this.error = true;
                _this.message = _this.loginService.message;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], LoginComponent.prototype, "fields", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/users/login/login.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_form_service__["a" /* FormService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/me/me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/me/me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n  <div class=\"col-md-12 column\">\n    <div class=\"tabbable\" id=\"tabs-485068\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"active\">\n          <a href=\"#panel-sys\" data-toggle=\"tab\">系统设置</a>\n        </li>\n        <li>\n          <a href=\"#panel-people-manager\" data-toggle=\"tab\">添加徒弟</a>\n        </li>\n        <li>\n          <a href=\"#panel-tree\" data-toggle=\"tab\">继承关系</a>\n        </li>\n        <li>\n          <a href=\"#panel-test\" data-toggle=\"tab\">test</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"panel-sys\">\n          <app-profile></app-profile>\n        </div>\n        <div class=\"tab-pane\" id=\"panel-people-manager\">\n          <app-people-manager></app-people-manager>\n        </div>\n        <div class=\"tab-pane\" id=\"panel-tree\">\n          <p>\n            Howdy, I'm in Section 2.\n          </p>\n        </div>\n        <div class=\"tab-pane\" id=\"panel-test\">\n          <p>\n            Howdy, I'm in Section 2.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/me/me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeComponent = (function () {
    function MeComponent() {
    }
    MeComponent.prototype.ngOnInit = function () {
    };
    MeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-me',
            template: __webpack_require__("../../../../../src/app/users/me/me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/me/me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeComponent);
    return MeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/people-manager/people-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/people-manager/people-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile-container\">\n  <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"form\">\n    <div *ngFor=\"let field of fields\" class=\"form-group\">\n      <app-form-control [form]=\"form\" [field]=\"field\"></app-form-control>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-offset-2 col-md-10\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"save($event)\">保存</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/people-manager/people-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeopleManagerComponent = (function () {
    function PeopleManagerComponent(peopleService, fromService) {
        this.peopleService = peopleService;
        this.fromService = fromService;
        this.fields = [
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '姓名(*):',
                placeholder: '姓名',
                key: 'name'
            }),
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '生日(*):',
                placeholder: '生日',
                key: 'birth_death',
                type: 'date'
            }),
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["e" /* TextArea */]({
                key: 'desc',
                label: '个人简介(*):',
                placeholder: '个人简介，最多140字，不能放链接。',
                rows: 3,
            }),
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["a" /* CheckBox */]({
                key: 'invalid',
                label: '',
                type: 'checkbox',
                options: [
                    { id: '1', text: '发送邀请链接' }
                ]
            }),
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '性别:',
                placeholder: '性别',
                key: 'sex',
            }),
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["f" /* Textbox */]({
                key: 'email',
                type: 'email',
                label: '常用邮箱:',
                placeholder: '常用邮箱'
            }),
            new __WEBPACK_IMPORTED_MODULE_1__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '电话:',
                placeholder: '电话',
                key: 'phone',
            }),
        ];
    }
    PeopleManagerComponent.prototype.ngOnInit = function () {
        this.form = this.fromService.toFormGroup(this.fields);
        // this.getProfile();
        // this.activeRoute.params.subscribe(
        //   params => {
        //     console.log(params);
        //   }
        // );
    };
    PeopleManagerComponent.prototype.save = function (e) {
        var _this = this;
        var profile = this.form.value;
        console.log(profile);
        this.peopleService.createPeople(profile).then(function (data) {
            if (data) {
                _this.people = _this.peopleService.people;
                alert('create ok');
            }
            else {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PeopleManagerComponent.prototype, "fields", void 0);
    PeopleManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-people-manager',
            template: __webpack_require__("../../../../../src/app/users/people-manager/people-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/people-manager/people-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_people_service__["a" /* PeopleService */], __WEBPACK_IMPORTED_MODULE_3__services_form_service__["a" /* FormService */]])
    ], PeopleManagerComponent);
    return PeopleManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile-container\">\n  <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"form\">\n    <div *ngFor=\"let field of fields\" class=\"form-group\">\n      <app-form-control [form]=\"form\" [field]=\"field\"></app-form-control>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-offset-2 col-md-10\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"save($event)\">保存</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_me_service__ = __webpack_require__("../../../../../src/app/services/me.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(meService, router, activeRoute, elementRef, formService) {
        this.meService = meService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.elementRef = elementRef;
        this.formService = formService;
        this.fields = [
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["d" /* Image */]({
                src: 'assets/imgs/angular2-small.png',
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                avatar: 'avatar',
                label: '头像:',
                placeholder: '上传头像',
                type: 'file'
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                label: '昵称:',
                placeholder: '昵称',
                key: 'nick',
                required: true,
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["b" /* DropDown */]({
                label: '性别:',
                placeholder: '性别',
                key: 'sex',
                options: [{ key: 'male', 'value': '男' }, { key: 'female', value: '女' }],
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                label: '生日:',
                placeholder: '生日',
                key: 'birth',
                type: 'date'
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                label: '电话:',
                placeholder: '电话',
                key: 'phone',
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["f" /* Textbox */]({
                key: 'email',
                type: 'email',
                label: '常用邮箱:',
                placeholder: '常用邮箱',
            }),
            new __WEBPACK_IMPORTED_MODULE_2__components_dynamic_form_form_field_index__["e" /* TextArea */]({
                key: 'info',
                label: '个人简介:',
                placeholder: '个人简介，最多140字，不能放链接。',
                rows: 3,
            })
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.form = this.formService.toFormGroup(this.fields);
        this.getProfile();
        this.activeRoute.params.subscribe(function (params) {
            console.log(params);
        });
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.meService.getProfile().then(function (data) {
            _this.userProfile = data;
            _this.form.patchValue(data);
        });
    };
    ProfileComponent.prototype.updateProfile = function (profile) {
        var _this = this;
        this.meService.updateProfile(profile).then(function (data) {
            _this.userProfile = data;
        });
    };
    ProfileComponent.prototype.save = function (e) {
        var profile = this.form.value;
        return this.updateProfile(profile);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ProfileComponent.prototype, "fields", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_me_service__["a" /* MeService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_4__services_form_service__["a" /* FormService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.8@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-register\" class=\"user-profile-container\">\n  <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"form\">\n    <div *ngFor=\"let field of fields\" class=\"form-group\">\n      <app-form-control [form]=\"form\" [field]=\"field\"></app-form-control>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-offset-2 col-md-10\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"save($event)\">注册</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_user_entity__ = __webpack_require__("../../../../../src/entity/user.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../../_@angular_router@5.2.0@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__ = __webpack_require__("../../../../../src/app/components/dynamic-form/form-field/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(loginService, router, formService) {
        this.loginService = loginService;
        this.router = router;
        this.formService = formService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__entity_user_entity__["a" /* User */]();
        this.fields = [
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '用户名:',
                placeholder: '用户名',
                key: 'username',
                required: true,
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '邮箱:',
                placeholder: '邮箱',
                key: 'email',
                required: true,
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                label: '密 码:',
                placeholder: '密 码',
                key: 'password',
                type: 'password',
                required: true,
                validateEqual: 'repeat',
            }),
            new __WEBPACK_IMPORTED_MODULE_4__components_dynamic_form_form_field__["f" /* Textbox */]({
                key: 'repeat',
                type: 'password',
                label: '确认密码:',
                placeholder: '确认密码',
                required: true,
                validateEqual: 'password',
            })
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.loginService.isLogin) {
            this.router.navigateByUrl('/me');
        }
        this.form = this.formService.toFormGroup(this.fields);
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        if (this.form.status === 'VALID') {
            this.loginService.register(this.form.value).then(function (data) {
                if (data) {
                    console.log(data);
                    _this.router.navigateByUrl('/login');
                }
                else {
                    console.log(_this.loginService.message);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RegisterComponent.prototype, "fields", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/users/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_form_service__["a" /* FormService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/entity/user.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export UserProfile */
var User = (function () {
    function User() {
    }
    return User;
}());

/**
 * 用户附加信息
 */
var UserProfile = (function () {
    function UserProfile() {
    }
    return UserProfile;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.2.0@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@5.2.0@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map