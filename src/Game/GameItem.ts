class GameItem extends egret.Bitmap {
    public constructor(res: string, x: number, y: number) {
        super()
        this.touchEnabled = true
        this.texture = RES.getRes(res)

        this.anchorOffsetX = this.width / 2
        this.anchorOffsetY = this.height / 2
        this.x = x
        this.y = y
    }

    // 角度angle
    protected update(angle: number, speed: number, time: number) {
        let ly = -Math.sin(angle * Math.PI / 180) * speed * time
        let lx = Math.cos(angle * Math.PI / 180) * speed * time
        
        
        egret.Tween.get(this)
            .to({y: this.y + ly, x: this.x + lx}, 50)
    }
}