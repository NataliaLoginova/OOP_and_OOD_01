import { Shape } from './Shape';
import { Point } from "./Point";

const DEFAULT_COLOR = 'green';
const DEFAULT_FILLED = true;

export class Triangle extends Shape {

    constructor(firstPoint, secondPoint, thirdPoint)
    constructor(firstPoint, secondPoint, thirdPoint, color?, filled?) {
        super([firstPoint, secondPoint, thirdPoint]);
        this.color = color || DEFAULT_COLOR;
        this.filled = typeof filled == "boolean" ? filled : DEFAULT_FILLED;

    }

    toString() {
         const coordinates = this.points.reduce((prev: string, curr: Point, index) =>
             prev + `v${index + 1}=(${curr.x}, ${curr.y})${index !== this.points.length - 1 ? ',' : ''}`, '');
         return `Triangle[${coordinates}]`;
    }

    getType(): string {
        const sides = this.points.map((point: Point, index: number) => {
            return point.distance(index + 1 !== this.points.length ? this.points[index + 1] : this.points[0]);
        });
        return sides.every(side => Math.abs(side - sides[0]) - 1e-7) ?
            "equilateral triangle" :
            sides.some((comparedSide, comparedIndex) => comparedSide === sides.find((side, index) => comparedSide === side && comparedIndex !== index)) ?
                "isosceles triangle" :
                "scalene triangle";
    }
}
