var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseTs = (function () {
    function BaseTs() {
    }
    /**
   * 场景跳转
   */
    BaseTs.jumpSence = function (origin, target) {
        if (origin && origin.parent && target) {
            origin.parent.addChild(target);
            origin.parent.removeChild(origin);
            console.log("场景跳转成功：", origin.name, "---->", target.name);
        }
        else {
            console.error("场景跳转失败，存在未初始化成功的参数");
        }
    };
    return BaseTs;
}());
__reflect(BaseTs.prototype, "BaseTs");
//# sourceMappingURL=BaseTs.js.map