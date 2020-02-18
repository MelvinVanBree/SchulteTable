import { Config } from "Game/config";
import * as PIXI from 'pixi.js';

export class Button{
    private content: number;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private container: PIXI.Container;
    
    constructor(_content: number, _x: number, _y: number,_width: number, _height: number, _container: PIXI.Container){
        this.content = _content;
        this.x = _x;
        this.y = _y;
        this.height = _height;
        this.width = _width;
        this.container = _container;

        let rect = new PIXI.Graphics();
        let buttonContent = new PIXI.Text(this.content.toString(),
        {
            fontFamily : 'Arial',
            fontSize: 40,
            fill : Config.style.buttonTextColor,
            align : 'center'
        });

        buttonContent.anchor.set(0.5, 0.5);
        buttonContent.position.set(this.x + (this.height / 2), this.y + (this.width / 2));
        rect.beginFill(Config.style.buttonBackgroundColor);
        rect.lineStyle(Config.style.buttonBorderSize, Config.style.buttonBorderColor);
        rect.drawRect(this.x, this.y, this.height, this.width)
        
        rect.addChild(buttonContent);
        this.container.addChild(rect);
    }
    
    
    onButtonDown(){

    }
}