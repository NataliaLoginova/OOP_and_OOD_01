interface IPoint {
    x : number;
    y : number;
}


export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    public toString() {
        return `(${this.x}, ${this.y})`
    }

    public distance();
    public distance(point?: Point);
    public distance(point?, coordinate?) {
        let x,y;

        if (point instanceof Point) {
            x = point.x;
            y = point.y;
        } else {
            x = point || 0;
            y = coordinate || 0;
        }

        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }

}
