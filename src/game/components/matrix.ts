import { Graphics } from "pixi.js";

export class Matrix{
    private matrix: any[][];

    constructor(x: number, y: number){
        this.matrix = new Array();
        this.init(x, y);
    }

    public init(x: number, y: number){
        this.matrix = new Array();
        for(var i: number = 0; i < x; i++) {
            this.matrix[i] = [];
            for(var j: number = 0; j< y; j++) {
                this.matrix[i][j] = null;
            }
        }
    }

    public set(x: number, y: number, el: PIXI.Graphics){
        this.matrix[x][y] = el;
    }

    public get():any[][]{
        return this.matrix;
    }
}