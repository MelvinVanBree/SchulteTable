import { Config } from "Game/config";
import { Matrix, Cell } from "Game/components";
import { resHelper, gameHelper } from "Game/helpers";
import * as PIXI from 'pixi.js';

export class Grid extends PIXI.Container{
    private matrix: Matrix;
    private rN: number[];
    private rows: number;
    private columns: number;


    constructor(){
        super();
        this.rows = Config.settings.gridSize.x;
        this.columns = Config.settings.gridSize.y;
        this.matrix = new Matrix(this.rows, this.columns);
        this.rN = this.randomArr();
    }

    public init():void{
        this.populate();
        this.draw();
        gameHelper.currentGoal = 1;
    }

    private populate():void{
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.columns; j++){
                this.matrix.set(i,j,
                    new Cell(
                    this.rN.pop()!,
                    i * (resHelper().x / this.rows),
                    j * resHelper().y / this.columns,
                    resHelper().x / this.rows,
                    resHelper().y / this.columns,
                    this.onCellClick
                ) );
            }
        }
    }

    private randomArr():number[]{
        // The amount of random numbers required (x.y)
        let n = Config.settings.gridSize.x * Config.settings.gridSize.y;

        // Fill an array with numbers in N range
        let randomNums = Array.from({length: n}, (v, k) => k+1);

        // Shuffle the numbers using Durstenfeld Shuffle
        for (let i = randomNums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomNums[i], randomNums[j]] = [randomNums[j], randomNums[i]];
        }
        return randomNums;
    }

    public onCellClick(e: any){
        if(e.target.get() === gameHelper.currentGoal){
            gameHelper.currentGoal++;
        }
    }
    
    public draw():void{
        let matrixState = this.matrix.get();
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.columns; j++){
                this.addChild(matrixState[i][j]);
            }
        }
    }
}