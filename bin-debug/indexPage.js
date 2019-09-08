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
var indexPage = (function (_super) {
    __extends(indexPage, _super);
    function indexPage() {
        var _this = _super.call(this) || this;
        _this.name = "indexPage";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.UIComplete, _this);
        return _this;
    }
    indexPage.Share = function () {
        if (indexPage.share == null) {
            indexPage.share = new indexPage();
        }
        return indexPage.share;
    };
    indexPage.prototype.UIComplete = function () {
        /**
         * 注册相关监听器
         */
        this.clickImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getData, this);
    };
    indexPage.prototype.getData = function () {
        console.log(896789);
        var token = '15668743998801597001';
        // let urlLoader: egret.URLLoader = new egret.URLLoader()
        // let urlRequest: egret.URLRequest = new egret.URLRequest()
        // let url = "http://localhost:8080/api/open-award/home/home";
        // urlRequest.url = url;
        // urlLoader.addEventListener(egret.Event.COMPLETE, function () {
        // 	let data = JSON.parse(urlLoader.data);
        // 	console.log(data)
        // 	if (data.code == 200) {
        // 		console.log(123)
        // 	} else {
        // 		console.log(345)
        // 	}
        // }, this);
        // urlRequest.method = egret.URLRequestMethod.POST;
        // urlLoader.load(urlRequest);
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求	
        request.open("http://localhost:8080/api/open-award/home/home", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.setRequestHeader("token", token);
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    indexPage.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        var data = JSON.parse(request.response);
        if (data.code == 200) {
            var time = data.data.time;
            var chanceNum = data.data.chanceNum;
            var name_1 = data.data.name;
            var icon = data.data.icon;
            var original_price = data.data.original_price;
            var sell_price = data.data.sell_price;
            var people_num = data.data.people_num;
            var nickname = data.datanickname;
            var avatar = data.data.avatar;
            this.goodName.removeChildren();
            // this.goodImg.addChild(icon);
            this.goodName.addChild(name_1);
        }
    };
    indexPage.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    indexPage.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    indexPage.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    indexPage.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return indexPage;
}(eui.Component));
__reflect(indexPage.prototype, "indexPage", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=indexPage.js.map