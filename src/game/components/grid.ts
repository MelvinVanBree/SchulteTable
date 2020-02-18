import { Button } from 'Game/components';
import { Config } from "Game/config";

export class Grid{
    private x: number;
    private y: number;
    private elements: Button[];

    constructor(){
        this.x = Config.settings.gridSize.x;
        this.y = Config.settings.gridSize.y;
        this.elements = [];
    }


    public addElement(_button: Button){
        this.elements.push(_button);
    }

    public get():Button[]{
        return this.elements;
    }

    public getElement(x: number):Button{
        return this.elements[x];
    }

    getX():number{
        return this.x;
    }
    getY():number{
        return this.y;
    }
    
}