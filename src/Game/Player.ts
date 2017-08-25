class Player extends GameItem {
    private offsetX: number
    private offsetY

    public constructor(x: number, y: number) {
        super("playerShip2_blue_png", x, y)

        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
        // 	let draggedObject = e.currentTarget;
        // 	this.offsetX = e.stageX - draggedObject.x;
        // 	this.offsetY = e.stageY - draggedObject.y;
        // 	console.log("TOUCH_BEGIN")
        // }, this)
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            let m = <Main>this.parent
            m.SendLaser(0, this.x, this.y)
        }, this)
    }

    protected update(angle: number, speed: number, time: number) {
        speed *= 1000

        super.update(angle, speed, time)
    }

}