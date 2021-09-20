import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points);
    constructor(points, color?, filled?) {
        if (points.length < 3) {
            throw "Shape should has at least 3 points";
        }
        this.points = points;
        this.color = color || 'green';
        this.filled = typeof filled == "boolean" ? filled : true;

    }

    toString() {
        const coordinates = this.points.reduce((prev: string, curr: Point, index) =>
            prev + `(${curr.x}, ${curr.y})${index !== this.points.length - 1 ? ', ' : ''}`, '');

        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${coordinates}.`;
    }

    getPerimeter() {
        return this.points.reduce((prev: number, curr: Point, index: number, array: Point[]) =>
            prev + curr.distance(index + 1 !== array.length? array[index + 1] : array[0]), 0);
    }

    abstract getType(): string;
}
