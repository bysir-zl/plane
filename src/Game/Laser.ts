class Laser3 extends egret.Bitmap {
    public constructor(x: number, y: number) {
        super()
        this.touchEnabled = true
        this.texture = RES.getRes("laserBlue03_png")

        this.anchorOffsetX = this.width / 2
        this.anchorOffsetY = this.height
        this.x = x 
        this.y = y
        egret.Tween.get(this)
            .to({x: x, y: y - 2000}, 1000)
            .call(() => {
                this.parent.removeChild(this)
            })
    }

}