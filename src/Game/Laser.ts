class Laser3 extends GameItem {
    public constructor(x: number, y: number) {
        super("laserBlue03_png", x, y)
    }

    protected update(time: number) {
        if (this.parent===null){
            return
        }
        super.update(90,1800,time)
        
        if (this.y < -this.height) {
            this.parent.removeChild(this)
        }
    }
}