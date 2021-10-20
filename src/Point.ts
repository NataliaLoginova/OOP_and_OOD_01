interface IPoint {
    x : number;
    y : number;
}


export class Point {
    public x;
    public y;

    constructor(x: number, y: number);
    constructor(p: Point);
    constructor(x?: number | Point, y?: number) {
        this.x = x;
        this.y = y;
    }

    public toString() {
        return `(${this.x}, ${this.y})`
    }

    public distance(x: number, y: number): number;
    public distance(p: Point): number
    public distance(p?: number | Point, y?: number) {
        let coorX,coorY;

        if (p instanceof Point) {
            coorX = p.x;
            coorY = p.y;
        } else {
            coorX = p || 0;
            coorY = y || 0;
        }

        return +(Math.sqrt(+(Math.pow(this.x - coorX, 2) + Math.pow(this.y - coorY, 2)).toFixed(12))).toFixed(2);
    }

}
