class BaseTs {
	public constructor() {
	}

	/**
   * 场景跳转
   */
  public static jumpSence(origin: eui.Component, target: eui.Component) {
    if (origin && origin.parent && target) {
      origin.parent.addChild(target);
      origin.parent.removeChild(origin);
      console.log("场景跳转成功：", origin.name, "---->", target.name);
    } else {
      console.error("场景跳转失败，存在未初始化成功的参数");
    }
  }
}