import { Config } from "Game/config";
import * as PIXI from 'pixi.js';

export class Cell extends PIXI.Graphics{
    private num: string;
    
    constructor(_num: string, _x: number, _y: number, _w: number, _h: number){
        super();
        this.num = _num;
        this.x = _x;
        this.y = _y;

        this.beginFill(Config.style.CellBackgroundColor);
        this.lineStyle(Config.style.CellBorderSize, Config.style.CellBorderColor);
        // This automatically sets the height and width properties
        this.drawRect(0, 0, _w, _h);

        this.name = 'Cell ' + this.num;
        this.interactive = true;

        let CellContent = new PIXI.Text(this.num.toString(),
        {
            fontFamily : 'Arial',
            fontSize: 40,
            fill : Config.style.CellTextColor,
            align : 'center'
        });

        CellContent.anchor.set(0.5, 0.5);
        CellContent.position.set((this.width / 2),(this.height / 2));
        
        this.addChild(CellContent);
    }

    /**
     * getNum
     */
    public getNum() {
        return this.num;
    }
}