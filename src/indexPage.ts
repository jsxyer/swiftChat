class indexPage extends eui.Component implements  eui.UIComponent {

	public clickImg:eui.Image;		//点击图
	public goodImg: eui.Group;		//商品图
	public goodName: eui.Group;

	private static share: indexPage//单例

    public static Share() {
        if (indexPage.share == null) {
            indexPage.share = new indexPage()
        }
        return indexPage.share
    }

	public constructor() {
		super();
		this.name = "indexPage"
		this.addEventListener(eui.UIEvent.COMPLETE, this.UIComplete, this)
	}

	private UIComplete() {
		/**
		 * 注册相关监听器
		 */
		this.clickImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getData, this);
	}

	private getData()
	{
		console.log(896789)
		let token = '15668743998801597001';

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
		request.open("http://localhost:8080/api/open-award/home/home",egret.HttpMethod.POST);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded",);
		request.setRequestHeader("token", token);
		request.send();
		request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
		request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
		
	}

	private onPostComplete(event:egret.Event):void {
    	var request = <egret.HttpRequest>event.currentTarget;
		let data = JSON.parse(request.response);

		if(data.code == 200){
			let time = data.data.time;
			let chanceNum = data.data.chanceNum;
			let name = data.data.name;
			let icon = data.data.icon;
			let original_price = data.data.original_price;
			let sell_price = data.data.sell_price;
			let people_num = data.data.people_num;
			let nickname = data.datanickname;
			let avatar = data.data.avatar;

			this.goodName.removeChildren();
			// this.goodImg.addChild(icon);
			this.goodName.addChild(name);
		}
	}

	private onPostIOError(event:egret.IOErrorEvent):void {
    	console.log("post error : " + event);
	}
	private onPostProgress(event:egret.ProgressEvent):void {
    	console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}