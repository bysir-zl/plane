class Player extends egret.Bitmap {
    private offsetX: number
    private offsetY

    public constructor() {
        super()
        this.touchEnabled = true
        this.texture = RES.getRes("playerShip2_blue_png")

        this.anchorOffsetX = this.width / 2
        this.anchorOffsetY = this.height / 2

        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
        // 	let draggedObject = e.currentTarget;
        // 	this.offsetX = e.stageX - draggedObject.x;
        // 	this.offsetY = e.stageY - draggedObject.y;
        // 	console.log("TOUCH_BEGIN")
        // }, this)
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            let m = <Main>this.parent
            m.SendLaser(0,this.x,this.y)
        }, this)
    }

}