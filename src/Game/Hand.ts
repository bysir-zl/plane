/*
操作轮盘
 */
class Hand extends egret.Shape {
    get data(): any {
        return this._data;
    }

    private _data: any = {}
    private timer = new egret.Timer(1000 / 60) // 每秒发60次事件

    public constructor(x: number, y: number) {
        super()
        this.width = 250
        this.height = 250

        this.x = x
        this.y = y
        let cenX = this.width / 2
        let cenY = this.height / 2
        this.anchorOffsetX = 0
        this.anchorOffsetY = this.height

        this.graphics.beginFill(0xeeeeee);
        this.graphics.drawCircle(cenX, cenY, this.width / 2);
        this.graphics.endFill();

        let func = (e) => {
            let x = e.localX
            let y = e.localY

            // 计算角度
            let r = Math.atan2(-(y - cenY), x - cenX)
            let angle = r * 180 / Math.PI
            // 计算速度(0-1)
            let speed = Math.sqrt((y - cenY) * (y - cenY) + (x - cenX) * (x - cenX)) / cenX
            if (speed > 1) {
                speed = 1
            }
            this._data = {angle: angle, speed: speed}
            return true
        }

        this.touchEnabled = true
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
            this.timer.start()
            func(e)
        }, this)
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, func, this,true)
        this.addEventListener(egret.TouchEvent.TOUCH_END, (e) => {
            this.timer.stop()
        }, this)
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, (e) => {
            console.log("cancel ", e)
        }, this)
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, (e) => {
            this.timer.stop()

        }, this)

        this.timer.addEventListener(egret.TimerEvent.TIMER, (e) => {
            let daterEvent = new egret.Event("hand", false, false, this._data);
            this.dispatchEvent(daterEvent)
        }, this)

    }
}