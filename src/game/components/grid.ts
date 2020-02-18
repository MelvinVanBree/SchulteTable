import { Button } from 'Game/components';
import { Config } from "Game/config";

export class Grid{
    private x: number;
    private y: number;
    private matrix: any[][] = [];

    constructor(){
        this.x = Config.settings.gridSize.x;
        this.y = Config.settings.gridSize.y;

        /* initialize 2D array */
        for(var i=0; i<this.x; i++) {
            this.matrix[i] = [];
            for(var j=0; j<this.y; j++) {
                this.matrix[i][j] = '';
            }
        }
    }


    public setElement(_x: number, _y: number, _button: Button){
        this.matrix[_x][_y] = _button;
    }

    public getElement(_x: number, _y: number){
        console.log(this.matrix[_x][_y]);
    }

    public logGrid(){
        console.log(this.matrix);
    }

    getX():number{
        return this.x;
    }
    getY():number{
        return this.y;
    }
    
}