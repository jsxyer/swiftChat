var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var homePage = (function (_super) {
    __extends(homePage, _super);
    function homePage() {
        var _this = _super.call(this) || this;
        _this.name = "homePage";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.UIComplete, _this);
        return _this;
    }
    homePage.Share = function () {
        if (homePage.share == null) {
            homePage.share = new homePage();
        }
        return homePage.share;
    };
    homePage.prototype.UIComplete = function () {
        this.start_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapStart, this);
    };
    homePage.prototype.tapStart = function () {
        console.log(64564);
        BaseTs.jumpSence(this, indexPage.Share());
    };
    homePage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    homePage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return homePage;
}(eui.Component));
__reflect(homePage.prototype, "homePage", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=homePage.js.map