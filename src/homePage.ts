class homePage extends eui.Component implements  eui.UIComponent {

	private start_button: eui.Button

	private static share: homePage//单例
	public static Share() {
        if (homePage.share == null) {
            homePage.share = new homePage()
        }
        return homePage.share
    }
	private constructor() {
		super();
		this.name = "homePage"
		this.addEventListener(eui.UIEvent.COMPLETE, this.UIComplete, this)
	}

	private UIComplete() {

		this.start_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapStart, this)
	
	}

	private tapStart() {
		console.log(64564);

		BaseTs.jumpSence(this, indexPage.Share())
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